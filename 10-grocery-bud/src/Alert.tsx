import React, { useEffect } from "react";

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: () => void;
  list: any[]; // You may want to replace any[] with a more specific type if possible
}

const Alert: React.FC<AlertProps> = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
