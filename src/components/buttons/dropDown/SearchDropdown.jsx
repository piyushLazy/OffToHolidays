import React, { useState } from 'react';

const SearchDropdown = () => {
  const [activeTab, setActiveTab] = useState('packages');

  const tabStyle = (isActive) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    padding: '12px 16px',
    backgroundColor: isActive ? '#3D99DB' : '#FFFFFF',
    cursor: 'pointer',
    alignItems: 'center',
    border: 'none',
    borderRadius: '4px'
  });

  const tabTextStyle = (isActive) => ({
    color: isActive ? '#FFFFFF' : '#111111',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '22.4px',
    margin: 0
  });

  const dropdownStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '8px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '4px'
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    objectFit: 'contain'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '8px',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '4px'
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          style={tabStyle(activeTab === 'packages')}
          onClick={() => setActiveTab('packages')}
        >
          <img src="https://dashboard.codeparrot.ai/api/image/Z5nBlnk7M7P7g8LS/beach-um.png" alt="packages" style={iconStyle} />
          <span style={tabTextStyle(activeTab === 'packages')}>Packages</span>
        </button>
        <button 
          style={tabStyle(activeTab === 'hotels')}
          onClick={() => setActiveTab('hotels')}
        >
          <img src="https://dashboard.codeparrot.ai/api/image/Z5nBlnk7M7P7g8LS/hotel.png" alt="hotels" style={iconStyle} />
          <span style={tabTextStyle(activeTab === 'hotels')}>Hotels</span>
        </button>
      </div>

      <div style={{ width: '1px', height: '60px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={dropdownStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z5nBlnk7M7P7g8LS/local.png" alt="location" style={iconStyle} />
          <span style={{ 
            color: '#737373',
            fontFamily: 'Inter',
            fontSize: '16px',
            lineHeight: '22.4px'
          }}>City</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z5nBlnk7M7P7g8LS/down.png" alt="dropdown" style={iconStyle} />
        </div>

        <div style={dropdownStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z5nBlnk7M7P7g8LS/calendar.png" alt="calendar" style={iconStyle} />
          <span style={{ 
            color: '#737373',
            fontFamily: 'Inter',
            fontSize: '16px',
            lineHeight: '22.4px'
          }}>Check-in/Check-out Dates</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z5nBlnk7M7P7g8LS/down-2.png" alt="dropdown" style={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;

