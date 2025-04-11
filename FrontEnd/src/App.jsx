import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { AddSession, ClassAdmin, Classes, CourseYear, CreateNotice, EditSession, GroupSession, IndexAdmin, LoginAdmin, NoticeAdmin, ProfileAdmin, RegisterAdmin, ShowNotices, YearGroup } from "./pages/admin";
import { IndexStudent, LoginStudent, ProfileStudent, RegisterStudent, WeekClasses } from "./pages/student";
import IndexComputerProgrammer from "./pages/computerProgrammer/index-computerProgrammer";
import DsrTrainingForm from "./pages/computerProgrammer/DsrTrainingForm";
import EventsAndCeremonies from "./pages/computerProgrammer/EventsAndCeremonies";
import EventsAndCeremoniesReport from "./pages/computerProgrammer/EventsAndCeremoniesReport";
import Leave from "./pages/computerProgrammer/Leave";
import LeaveReport from "./pages/computerProgrammer/LeaveReport";
import Strength from "./pages/computerProgrammer/Strength";
import TrainingDivision from "./pages/TrainingDivision";
import IndexSPCamp from "./pages/SPCamp/index-SPcamp";
import IndexSP from "./pages/SP/index-SP";
import IndexPrincipal from "./pages/Principal/index-Principal";
import StrengthReport from "./pages/computerProgrammer/StrengthReport";
import DsrReport from "./pages/computerProgrammer/DsrReport";
import AddBatch from "./pages/admin/AddBatch";
import BatchDetails from "./pages/computerProgrammer/BatchDetails";
import TimtableReport from "./pages/computerProgrammer/TimetableReport";
import Organization from "./components/MasterComponents/organization/Organization";
import JobType from "./components/MasterComponents/jobtype/JobType";
import Ranks from "./components/MasterComponents/ranks/Ranks";


const App = () => {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-session" element={<AddSession />} />
        <Route path="/classes-admin" element={<ClassAdmin />} />
        <Route path="/course-year" element={<CourseYear />} />
        <Route path="/create-notice" element={<CreateNotice />} />
        <Route path="/edit-session" element={<EditSession />} />
        <Route path="/group-session" element={<GroupSession />} />
        <Route path="/index-admin" element={<IndexAdmin />} />
        <Route path="/login-staff" element={<LoginAdmin />} />
        <Route path="/notice-admin" element={<NoticeAdmin />} />
        <Route path="/register-staff" element={<RegisterAdmin />} />
        <Route path="/show-notice" element={<ShowNotices />} />
        <Route path="/profile-admin" element={<ProfileAdmin />} />
        <Route path="/class-admin" element={<Classes />} />
        <Route path="/year-group" element={<YearGroup />} />
        <Route path="/index-student" element={<IndexStudent />} />
        <Route path="/login-student" element={<LoginStudent />} />
        <Route path="/profile-student" element={<ProfileStudent />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/week-classes" element={<WeekClasses />} />

        <Route path="/index-computerProgrammer" element={<IndexComputerProgrammer />} />
        <Route path="/DsrTrainingForm" element={<DsrTrainingForm />} />
        <Route path="/EventsAndCeremonies" element={<EventsAndCeremonies />} />
        <Route path="/EventsAndCeremoniesReport" element={<EventsAndCeremoniesReport />} />
        <Route path="/Leave" element={<Leave />} />
        <Route path="/LeaveReport" element={<LeaveReport />} />
        <Route path="/Strength" element={<Strength />} />
        <Route path="/StrengthReport" element={<StrengthReport />} />
        <Route path="/TrainingDivision" element={<TrainingDivision />} />
        <Route path="/index-SPCamp" element={<IndexSPCamp />} />
        <Route path="/index-SP" element={<IndexSP />} />
        <Route path="/index-Principal" element={<IndexPrincipal />} />
        <Route path="/DsrReport" element={<DsrReport />} />
        <Route path="/AddBatch" element={<AddBatch />} />
        <Route path="/BatchDetails" element={<BatchDetails />} />
        <Route path="/TimtableReport" element={<TimtableReport />} />
        <Route path="/masterorganization" element={<Organization/>} />
        <Route path="/masterjobtype"  element={<JobType/>} />
        <Route path="/masterrank" element={<Ranks/>} />
      </Routes>

    </BrowserRouter>
  );
} 

export default App;