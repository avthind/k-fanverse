import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login'); // redirect if not logged in
  }, [user, navigate]);

  return (
    <div>
      <h1>Welcome to your Dashboard, {user?.email}</h1>
    </div>
  );
}
