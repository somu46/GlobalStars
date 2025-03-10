import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="appointment-button" onClick={onClick}>
        <div className="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="calendar-icon"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <span>Make an Appointment</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .appointment-button {
    --color: #fff;
    --background: #404660;
    --background-hover: #3A4059;
    --icon-bg: #2B3044;
    --icon-color: #fff;
    --shadow: rgba(13, 15, 25, 0.2);

    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background: var(--background);
    color: var(--color);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    outline: none;

    &:hover {
      background: var(--background-hover);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px var(--shadow);

      .icon-wrapper {
        transform: scale(1.1);
      }
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px var(--shadow);
    }
  }

  .icon-wrapper {
    width: 21px;
    height: 25px;
    border-radius: 6px;
    background: var(--icon-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .calendar-icon {
    width: 15px;
    height: 20px;
    stroke: var(--icon-color);
    transition: stroke 0.3s ease;
  }

  span {
    white-space: nowrap;
  }
`;

export default Button;