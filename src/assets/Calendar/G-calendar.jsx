"use client";
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Sider from "./Side";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./G-calendar.css";

export default function Gcalendar() {
  const [allEvents, setAllEvents] = useState({});
  const [districtData, setDistrictData] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState(null);
  const [dist, setDist] = useState("Holiday");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const calendarId = {
    Holiday: 
      "en.indian#holiday@group.v.calendar.google.com",
    Coimbatore:
      "6ac1687f488815d713a6c5a45675d30437d97e42b65b24aaf621145d8510be22@group.calendar.google.com",
    Chennai:
      "0f9827236d2f73bb4705ad00c27d7b5d4fde8abfe11164e6d9cdf87641a3d240@group.calendar.google.com",
    Thanjavur:
      "5870ae90cd377ca289ec009216c6078cc72bc1c557cfaca54e19383e72c506d9@group.calendar.google.com",
  };

  const currentDistrict = (district) => {
    setDist(district);
  };

  const groupEventsByMonth = (events) => {
    const grouped = {};
    events.forEach((event) => {
      const date = new Date(event.start.dateTime || event.start.date);
      const year = date.getFullYear();
      const monthYear = `${months[date.getMonth()]} ${year}`;
      if (!grouped[monthYear]) grouped[monthYear] = [];
      grouped[monthYear].push(event);
    });
    return grouped;
  };

  const listUpcomingEvents = () => {
    const personalCalendarId = "strangedr965@gmail.com";
    const startOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).toISOString();
    const endOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).toISOString();

    // Fetch personal events
    gapi.client.calendar.events
      .list({
        calendarId: personalCalendarId,
        timeMin: startOfMonth,
        timeMax: endOfMonth,
        showDeleted: false,
        singleEvents: true,
        orderBy: "startTime",
      })
      .then((response) => {
        const personalEvents = response.result.items;
        const groupedPersonalEvents = groupEventsByMonth(personalEvents);
        setAllEvents((prev) => ({ ...prev, personal: groupedPersonalEvents }));
      })
      .catch((error) =>
        console.error("Error fetching personal events:", error)
      );

    // Fetch holiday events for all districts
    const districtPromises = Object.keys(calendarId).map((district) => {
      return gapi.client.calendar.events
        .list({
          calendarId: calendarId[district],
          timeMin: startOfMonth,
          timeMax: endOfMonth,
          showDeleted: false,
          singleEvents: true,
          orderBy: "startTime",
        })
        .then((response) => {
          const holidayEvents = response.result.items;
          return { district, events: groupEventsByMonth(holidayEvents) };
        });
    });

    // Once all districts data is fetched, store it in the state
    Promise.all(districtPromises)
      .then((districtsData) => {
        const data = {};
        districtsData.forEach(({ district, events }) => {
          data[district] = events;
        });
        setDistrictData(data);
      })
      .catch((error) => console.error("Error fetching holiday events:", error));
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_API_KEY,
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "https://www.googleapis.com/auth/calendar.readonly",
        })
        .then(() => {
          gapi.client.load("calendar", "v3", listUpcomingEvents); // Initially load events
        })
        .catch((error) =>
          console.error("Error initializing Google API client:", error)
        );
    };

    gapi.load("client:auth2", initClient);
  }, []); // Only initialize client once

  // Re-fetch events only when month changes
  useEffect(() => {
    if (Object.keys(districtData).length > 0) {
      listUpcomingEvents();
    }
  }, [currentMonth]); // Re-fetch when the month changes

  const changeMonth = (direction) => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + direction, 1)
    );
  };

  const renderEventsForDay = (day) => {
    if (!day) return [];

    const monthYear = `${months[day.getMonth()]} ${day.getFullYear()}`;
    const events = [
      ...(allEvents.personal?.[monthYear] || []),
      ...(districtData[dist]?.[monthYear] || []),
    ].filter(
      (event) =>
        new Date(event.start.dateTime || event.start.date).toDateString() ===
        day.toDateString()
    );
    return events;
  };

  const daysInMonth = new Array(
    new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate()
  )
    .fill(null)
    .map(
      (_, i) =>
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
    );

  const startDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const correctedStartDay = startDay === 0 ? 6 : startDay - 1; // Adjust Sunday to be last day of the week (Saturday)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0"
        } bg-gradient-to-br from-purple-200 to-blue-100 shadow-md`}
      >
        <Sider handleCallBack={currentDistrict} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <div className="flex items-center justify-between p-6 bg-white shadow-lg rounded-b-lg sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <button
              onClick={toggleSidebar}
              className="p-3 bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-full hover:shadow-xl hover:scale-105 transform transition"
            >
              {sidebarOpen ? (
                <MdKeyboardArrowLeft size={24} />
              ) : (
                <MdKeyboardArrowRight size={24} />
              )}
            </button>
            <h2 className="text-3xl font-bold text-purple-600">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="p-3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow hover:shadow-lg hover:bg-gray-400 transform hover:scale-110 transition"
              onClick={() => changeMonth(-1)}
            >
              <MdKeyboardArrowLeft size={28} />
            </button>
            <button
              className="p-3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow hover:shadow-lg hover:bg-gray-400 transform hover:scale-110 transition"
              onClick={() => changeMonth(1)}
            >
              <MdKeyboardArrowRight size={28} />
            </button>
          </div>
        </div>

        {/* Calendar Section */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-7 gap-4 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, idx) => (
                <div
                  key={idx}
                  className="font-semibold text-lg text-purple-500"
                >
                  {day}
                </div>
              )
            )}
            {new Array(correctedStartDay).fill(null).map((_, index) => (
              <div key={index} className="h-12"></div>
            ))}
            {daysInMonth.map((day, index) => {
              const dayEvents = renderEventsForDay(day);
              const isToday = day.toDateString() === new Date().toDateString();

              return (
                <div
                  key={index}
                  className={`relative rounded-lg p-4 cursor-pointer transform transition-all ${
                    isToday
                      ? "bg-gradient-to-br from-purple-300 to-blue-300 text-white shadow-lg scale-105"
                      : "bg-white hover:bg-purple-50 hover:scale-105 hover:shadow-lg"
                  }`}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  <span className="block text-xl font-bold text-purple-600">
                    {day.getDate()}
                  </span>

                  {dayEvents.length > 0 && (
                    <div className="space-y-2 mt-2">
                      {dayEvents.slice(0, 2).map((event, index) => (
                        <div
                          key={index}
                          className="text-sm font-medium text-gray-700 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-2 rounded-lg shadow"
                        >
                          {event.summary}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div
                          className="text-sm font-semibold text-purple-500 cursor-pointer hover:text-purple-600"
                          onClick={() => setHoveredDay(day)}
                        >
                          +more
                        </div>
                      )}
                    </div>
                  )}

                  {/* Hovered Event Popup */}
                  {hoveredDay?.toDateString() === day.toDateString() && (
                    <div
                      className="absolute top-0 left-0 right-0 bg-white shadow-xl p-4 rounded-lg z-10 animate-popUp glow-effect"
                      style={{ minWidth: "150px" }}
                    >
                      <ul className="space-y-1 text-sm font-medium text-gray-600">
                        {dayEvents.map((event, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-purple-500">•</span>
                            <span>{event.summary}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}