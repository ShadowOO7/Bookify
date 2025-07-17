import React from "react";
import { useFirebase } from "../context/Firebase";

const Home = () => {
  const firebase = useFirebase();

  return (
    <div className="container mt-5">
      <h1>Welcome to Bookify 📚</h1>
      {firebase.isLoggedIn ? (
        <p>Logged in as: <strong>{firebase.user?.email}</strong></p>
      ) : (
        <p>Please login or register to use Bookify features.</p>
      )}
    </div>
  );
};

export default Home;