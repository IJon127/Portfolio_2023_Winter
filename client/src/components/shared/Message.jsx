import { useState, useEffect } from "react";
import "./Message.css";
import MessageForm from "./MessageForm.jsx";

export default function Message() {
  const [emailSent, setEmailSent] = useState(false);
  const [clickedSend, setClickedSend] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  useEffect(() => {
    if (validName && validEmail && validMessage) {
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  }, [validName, validEmail, validMessage]);

  return (
    <div className="message">
      <div className="message__container">
        <MessageForm
          submitActive={submitActive}
          setClickedSend={setClickedSend}
          setEmailSent={setEmailSent}
          setValidName={setValidName}
          setValidEmail={setValidEmail}
          setValidMessage={setValidMessage}
        />
        {emailSent && (
          <p className="message__sent-message">Message sent. Thank you!</p>
        )}
        {clickedSend && !emailSent && (
          <div className="message__validation-container">
            {!validName && (
              <p className="message__validation">* Please enter your name.</p>
            )}
            {!validEmail && (
              <p className="message__validation">* Invalid email address.</p>
            )}
            {!validMessage && (
              <p className="message__validation">* Message can't be empty.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
