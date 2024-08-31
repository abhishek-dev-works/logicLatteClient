import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  chatContainer: {
    width: 300,
    border: "1px solid #ccc",
    borderRadius: 8,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 500
  },
  chatHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007bff",
    color: "white",
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  chatControls: {
    "& button": {
      background: "none",
      border: "none",
      color: "white",
      fontSize: 16,
      cursor: "pointer",
    },
  },
  chatMessages: {
    flexGrow: 1,
    padding: 10,
    overflowY: "auto",
    maxHeight: 300,
  },
  chatMessage: {
    margin: "5px 0",
    padding: "8px 12px",
    borderRadius: 20,
    maxWidth: "70%",
  },
  incoming: {
    backgroundColor: "#f1f1f1",
    alignSelf: "flex-start",
  },
  outgoing: {
    backgroundColor: "#007bff",
    color: "white",
    alignSelf: "flex-end",
  },
  chatInputContainer: {
    display: "flex",
    padding: 10,
    borderTop: "1px solid #ccc",
  },
  chatInput: {
    flexGrow: 1,
    padding: 8,
    borderRadius: 20,
    border: "1px solid #ccc",
    marginRight: 10,
  },
  chatSendButton: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 20,
    cursor: "pointer",
  },
  chatOpenButton: {
    position: "fixed",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 50,
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
});

const ChatInterface = () => {
  const { classes } = useStyles();
  const [messages, setMessages] = useState<any>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "outgoing" }]);
      setInputMessage("");
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleMinimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  const handleOpenChat = () => {
    setIsOpen(true);
  };

  return isOpen ? (
    <div className={classes.chatContainer}>
      <div className={classes.chatHeader}>
        <span>Chat</span>
        <div className={classes.chatControls}>
          <button onClick={handleMinimizeChat}>
            {isMinimized ? "▲" : "▼"}
          </button>
          <button onClick={handleCloseChat}>×</button>
        </div>
      </div>
      {!isMinimized && (
        <>
          <div className={classes.chatMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${classes.chatMessage} ${
                  message.direction === "outgoing"
                    ? classes.outgoing
                    : classes.incoming
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className={classes.chatInputContainer}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className={classes.chatInput}
            />
            <button
              onClick={handleSendMessage}
              className={classes.chatSendButton}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  ) : (
    <button className={classes.chatOpenButton} onClick={handleOpenChat}>
      Open Chat
    </button>
  );
};

export default ChatInterface;
