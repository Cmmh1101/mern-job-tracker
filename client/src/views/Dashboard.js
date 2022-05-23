import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2>Dashboard page</h2>
      </div>
    </div>
  );
};

export default Dashboard;
