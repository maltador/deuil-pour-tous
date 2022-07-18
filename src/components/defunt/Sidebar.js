import React, { useState, useEffect } from "react";
import "./styles/Sidebar.css";
import SidebarRow from "./sidebar/SidebarRow";
import SidebarRowSkeleton from "./sidebar/SidebarRowSkeleton";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import PhoneIcon from "@mui/icons-material/Phone";
import { useSelector } from "react-redux";

function Sidebar() {
  const defuntData = useSelector((state) => state.currentuserReducer);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     await client.doGet(client.user + "/" + defuntData.defunt.uid).then((res) => {
  //       setUser(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     });
  //   };
  //   if (defuntData.defunt) fetchUser();
  // }, [defuntData]);

  return (
    <div className="sidebar">
      {!defuntData.user && (
        <>
          <SidebarRowSkeleton />
          <SidebarRowSkeleton />
          <SidebarRowSkeleton />
          <SidebarRowSkeleton />
        </>
      )}
      {defuntData.user && (
        <>
          <SidebarRow
            title={`${defuntData.user.pseudo} (Auteur)`}
            src={defuntData.user.imageUrl}
          />
          <SidebarRow title={`Abonnées (${defuntData.followers.length})`} Icon={PeopleIcon} />
          <SidebarRow title={"Faire un don"} Icon={PaymentIcon} />
          <SidebarRow title={"Contact"} Icon={PhoneIcon} />
        </>
      )}
    </div>
  );
}

export default Sidebar;
