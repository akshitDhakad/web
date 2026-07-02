"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { JOB_CATEGORIES, JOB_LOCATIONS } from "@/features/jobs/constants/filters";
import { cn } from "@/lib/utils";

export function JobsSidebar() {
  const [activeCategory, setActiveCategory] = useState("All Category");
  const [schedule, setSchedule] = useState("fulltime");

  return (
    <div className="left-sidebar-widget">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <h4>Search for jobs</h4>
        </div>
      </div>

      <div className="single-sidebar-widget page-mt-35 widget-shadow">
        <div className="input-search-field">
          <input type="text" className="form-control" placeholder="Job title or keywords..." />
          <button type="button" className="search-btn" aria-label="Search jobs">
            <Search size={18} aria-hidden />
          </button>
        </div>
      </div>

      <div className="single-sidebar-widget page-mt-30 widget-shadow">
        <div className="select-location">
          <span className="arrow-icon" aria-hidden>
            ▾
          </span>
          <select id="locationSelect" className="form-control" defaultValue="Dhaka" aria-label="Location">
            {JOB_LOCATIONS.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="single-sidebar-widget page-mt-60 widget-border">
        <div className="catagory-list-widget">
          <div className="widget-title">
            <h5>Job Category</h5>
          </div>
          <div className="widget-content">
            <ul className="catagory-list py-3">
              {JOB_CATEGORIES.map((category) => (
                <li key={category.label} className="catagory-item">
                  <button
                    type="button"
                    className={cn(
                      "catagory-link w-full border-0 bg-transparent text-start",
                      activeCategory === category.label && "active",
                    )}
                    onClick={() => setActiveCategory(category.label)}
                  >
                    <span className="text">{category.label}</span>
                    <span className="number">({category.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="single-sidebar-widget page-mt-60 widget-border">
        <div className="widget-title">
          <h5>Job Schedule</h5>
        </div>
        <div className="widget-content px-5 py-5">
          <div className="flex flex-wrap gap-6">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--p_color)]">
              <input
                className="form-check-input"
                type="radio"
                name="schedule"
                checked={schedule === "fulltime"}
                onChange={() => setSchedule("fulltime")}
              />
              Full-time
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--p_color)]">
              <input
                className="form-check-input"
                type="radio"
                name="schedule"
                checked={schedule === "parttime"}
                onChange={() => setSchedule("parttime")}
              />
              Part Time
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
