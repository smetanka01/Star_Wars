import React from 'react';

import './error-message.css'

const ErrorMessage = (props) => {
   return (
      <>
         <div className="error">{props.error}</div>
      </>
   );
};

export default ErrorMessage;