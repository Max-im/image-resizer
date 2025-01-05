import React from 'react';

interface ErrorMessageProps {
  message: string | null;
  clearError: () => void; // Function to clear the error
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, clearError }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-red-500 text-white rounded-lg shadow-lg flex items-center space-x-4">
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={clearError}
        className="bg-white text-red-500 hover:bg-gray-100 px-2 py-1 rounded-md text-xs font-semibold"
      >
        Dismiss
      </button>
    </div>
  );
};

export default ErrorMessage;