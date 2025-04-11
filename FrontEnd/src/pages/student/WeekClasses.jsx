import React from 'react';
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, StudentNav } from '../../components';
import Planning from '../../components/FormComponents/Planning';

const WeekClasses = () => {

  const userRole = sessionStorage.getItem("role");

    // Conditionally wrap with the correct nav
if (userRole === "Comppgm") {
  return (<ComputerProgrammerNav activeTimetable={"active"}><Planning /></ComputerProgrammerNav>);
} else if (userRole === "Principal") {
  return (<PrincipalNav activeTimetable={"active"}><Planning /></PrincipalNav>);
}  else if (userRole === "SPCamp") {
  return <SPCampNav activeTimetable={"active"}><Planning /></SPCampNav>;
} else {
  return <div>Unauthorized</div>; // fallback for unexpected roles
}
};

export default WeekClasses;
