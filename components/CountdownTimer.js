"use client";

import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 20,
    minutes: 55,
    seconds: 20,
  });

  const [usersJoined, setUsersJoined] = useState(50);

  // Countdown logic
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulated user count
  useEffect(() => {
    const interval = setInterval(() => {
      setUsersJoined((prev) => prev + Math.floor(Math.random() * 3));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-purple-900 text-white py-20">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          🎉 Early Access Starts Soon!
        </h2>
        <p className="text-lg md:text-xl text-neutral-200 mb-10">
          Hurry up! Be among the first to experience the future. Limited spots
          available!
        </p>

        {/* Timer */}
        <div className="flex justify-center gap-4 flex-wrap text-purple-300">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col items-center bg-purple-800 rounded-xl px-5 py-4 min-w-[80px] shadow-md"
            >
              <span className="text-4xl font-bold">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="uppercase text-xs text-purple-200 mt-2 tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Users Joined */}
        <div className="mt-10 text-xl md:text-2xl text-purple-200 font-medium">
          <span className="text-white font-bold text-3xl">{usersJoined}</span>{" "}
          users have already joined – don’t miss out!
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
