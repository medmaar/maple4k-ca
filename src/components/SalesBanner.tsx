"use client";
import { useState, useEffect, useRef } from "react";

const NAMES = ["Liam", "Noah", "Ethan", "Jacob", "Mason", "Logan", "Jack", "Lucas", "Owen", "William", "Emma", "Olivia", "Ava", "Sophia", "Charlotte", "Mia", "Amelia", "Emily", "Chloe", "Ella"];
const CITIES = ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "London", "Victoria", "Halifax", "Oshawa", "Windsor", "Saskatoon", "Regina", "Barrie", "Kelowna", "Sherbrooke"];
const PLANS = ["1-Month Plan", "3-Month Plan", "3-Month Plan", "6-Month Plan", "6-Month Plan", "12-Month Plan", "12-Month Plan", "12-Month Plan", "12-Month Plan", "12-Month Plan"];
const TIME_AGO = ["just now", "2 minutes ago", "5 minutes ago", "9 minutes ago"];
const SESSION_KEY = "m4kca_sales_banner_dismissed";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SalesBanner() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [plan, setPlan] = useState("");
  const [timeAgo, setTimeAgo] = useState(TIME_AGO[0]);
  const lastName = useRef<string | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;

    function setT(fn: () => void, ms: number) {
      const id = setTimeout(fn, ms);
      timers.current.push(id);
      return id;
    }

    function nextNotification() {
      let n = pick(NAMES);
      while (n === lastName.current) n = pick(NAMES);
      lastName.current = n;
      setName(n);
      setCity(pick(CITIES));
      setPlan(pick(PLANS));
      setTimeAgo(pick(TIME_AGO));
    }

    let stopped = false;
    function cycle() {
      if (stopped) return;
      nextNotification();
      setShow(true);
      setT(() => {
        if (stopped) return;
        setShow(false);
        setT(cycle, 3000);
      }, 5000);
    }

    setT(cycle, 2000 + Math.floor(Math.random() * 2000));

    return () => {
      stopped = true;
      timers.current.forEach(clearTimeout);
    };
  }, []);

  function handleClose() {
    setDismissed(true);
    setShow(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_KEY, "1");
    }
    timers.current.forEach(clearTimeout);
  }

  if (dismissed) return null;

  return (
    <div
      className={`fixed left-[18px] bottom-[18px] z-[79] max-w-[266px] flex items-center gap-[11px] py-[11px] pr-[30px] pl-[11px] rounded-xl bg-white border border-black/[0.06] shadow-[0_16px_34px_-12px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.08)] transition-all duration-[400ms] ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-[140%] opacity-0"
      }`}
    >
      <button
        onClick={handleClose}
        aria-label="Close"
        className="absolute top-1.5 right-2 bg-transparent border-none text-[#B8B8B8] text-sm leading-none cursor-pointer p-[3px] hover:text-[#666]"
      >
        &times;
      </button>
      <div
        className="flex-shrink-0 w-[34px] h-[34px] rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(150deg, #FFE9A8 0%, #DFAD05 100%)", boxShadow: "0 0 0 2px rgba(223,173,5,0.15)" }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M6 7h12l-1 12.5a2 2 0 0 1-2 1.8H9a2 2 0 0 1-2-1.8L6 7z" stroke="#1A1400" strokeWidth={1.6} strokeLinejoin="round"/>
          <path d="M9 7V6a3 3 0 0 1 6 0v1" stroke="#1A1400" strokeWidth={1.6} strokeLinecap="round"/>
          <path d="M9.5 12.5l1.8 1.8L14.8 11" stroke="#1A1400" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <div className="font-bold text-[12.5px] leading-snug text-[#1A1A1A]">
          {name ? (<>
            <b>{name}</b> from {city} just purchased a {plan}
          </>) : "New purchase"}
        </div>
        <div className="text-[10.5px] text-[#8A8A8A] mt-0.5 flex items-center gap-1 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#2ECC71] before:inline-block before:flex-shrink-0">
          {timeAgo}
        </div>
      </div>
    </div>
  );
}
