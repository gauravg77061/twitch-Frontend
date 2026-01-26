import React from "react";

const StreamKey = ({ streamKey }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Stream Key
      </h2>

      <p className="text-sm font-mono text-gray-700 break-all">
        {streamKey}
      </p>
    </div>
  );
};

export default StreamKey;
