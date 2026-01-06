import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="text-center">
        <h1>Home Page</h1>
        <p>Welcome to the Home page.</p>

        {user && <h3>Welcome, {user.name} 👋 👋</h3>}
      </div>
    </>
  );
}

export default Home;
