import { timeline } from "./data";
import Navbar from "./Navbar";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Resume = () => {
  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7">
      <Navbar />
      <div className="mt-7">
        <h1 className="text-white font-bold text-3xl mb-2">Resume</h1>
        <hr className="border-3 text-yellow-500 w-12 rounded-4xl" />
        <div className="mt-7">
          <VerticalTimeline>
            {timeline.map((t, i) => {
              const contentStyle =
                i === 0
                  ? { background: "rgb(33, 150, 243)", color: "#fff" }
                  : undefined;
              const arrowStyle =
                i === 0
                  ? { borderRight: "7px solid  rgb(33, 150, 243)" }
                  : undefined;

              return (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={contentStyle}
                  contentArrowStyle={arrowStyle}
                  date={t.date}
                  {...t.icon}
                >
                  {t.title ? (
                    <React.Fragment>
                      <h3 className="vertical-timeline-element-title">
                        {t.title}
                      </h3>
                      {t.subtitle && (
                        <h4 className="vertical-timeline-element-subtitle">
                          {t.subtitle}
                        </h4>
                      )}
                      {t.desc && <p>{t.desc}</p>}
                    </React.Fragment>
                  ) : undefined}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Resume;
