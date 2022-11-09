import "./Widgets.css";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <aside className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "How to break the ice when networking",
        "12m ago • 2,370 readers"
      )}
      {newsArticle(
        "How to start a business with less than £100",
        "20m ago • 3,060 readers"
      )}
      {newsArticle(
        "Our favourite scary moments in PC gaming",
        "35m ago • 5,709 readers"
      )}
      {newsArticle(
        "What people want from the office now",
        "46m ago • 15,619 readers"
      )}

      {newsArticle(
        "The pitfalls of 'mental toughness'",
        "1hr ago • 3,635 readers"
      )}
    </aside>
  );
}

export default Widgets;
