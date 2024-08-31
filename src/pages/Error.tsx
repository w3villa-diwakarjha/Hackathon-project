// import React from "react";

export default function Error() {
    const inlineStyles = {
      color: 'red',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center', // Align items vertically center
      justifyContent: 'center',
      height: '100vh'
      // Add more CSS properties as needed
    };
    return (
      <>
      <div style={inlineStyles}>
        <h1>Oops! Page not found !</h1>
      </div>
      </>
    );
  }
  