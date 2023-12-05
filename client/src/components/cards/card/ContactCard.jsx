import { useState, useEffect } from "react";
import "./ContactCard.css";
import Message from "../../shared/Message";

export default function ContactCard({ position }) {
  return (
    <div style={{ position: "absolute", ...position }} className="contact-card">
      <div className="contact-card__container">
        <Message />
      </div>
    </div>
  );
}
