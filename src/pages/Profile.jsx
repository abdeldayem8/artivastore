import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.login.user);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-96 p-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <span className="text-2xl font-semibold text-gray-500">
              {user?.first_name?.[0]}{user?.last_name?.[0]}
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-800">{`${user?.first_name} ${user?.last_name}`}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">First Name:</span>
            <span className="text-gray-800 font-medium">{user?.first_name}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Last Name:</span>
            <span className="text-gray-800 font-medium">{user?.last_name}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Email:</span>
            <span className="text-gray-800 font-medium">{user?.email}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Phone:</span>
            <span className="text-gray-800 font-medium">{user?.phone || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
