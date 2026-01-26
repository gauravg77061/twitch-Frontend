import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { useEffect} from "react";
import { setChannels } from '../utils/channelsSlice'
import { BASE_URL } from "../utils/constants";

const Dashboard = () => {
  const dispatch = useDispatch();
  const channels = useSelector((store) => store.channels);

//   const user = useSelector((store) => store.user);

// console.log("Redux user:", user);


  const getChannels = async () => {
    if (channels && channels.length > 0) return;

    try {
      const res = await axios.get(
        BASE_URL + "api/channel",
        { withCredentials: true }
      );

      dispatch(setChannels(res?.data?.channels));
    } catch (error) {
      console.log("Error fetching channels", error);
    }
  };

  useEffect(() => {
  
     if (!channels || channels.length === 0) {
      getChannels();
    }


  }, [channels, dispatch]);

  

  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <NavBar />

      {/* Below navbar */}
      <div className="flex pt-16">
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-64px)] p-6">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
