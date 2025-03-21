"use client";

import React from "react";

const LoginButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="login-button"
    >
      <span className="login-button-text">Login</span>
      <style jsx>{`
        .login-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 80px;
          border-radius: 20px;
          border: 1px solid #3d99db;
          background-color: transparent;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .login-button:hover {
          background-color: rgba(61, 153, 219, 0.1);
        }

        .login-button:active {
          background-color: rgba(61, 153, 219, 0.2);
        }

        .login-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-button-text {
          color: #3d99db;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
        }
      `}</style>
    </button>
  );
};

export default LoginButton;
