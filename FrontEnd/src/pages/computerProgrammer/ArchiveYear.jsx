import React from 'react'
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import ArchiveYearCard from '../../components/FormComponents/ArchiveYearCard';

function ArchiveYear() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your registration logic here
    };
  
    const userRole = sessionStorage.getItem("role");
  
    const PageContent = (
          <main className="pt-3">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12">
                          <h4 className='title-clr'>Archive</h4>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="card bg-white">
                          <div className="card-body pt-3">
                              <div className="tab-content pt-2">
                              <div className="tab-pane fade show active pt-3" >
                                  <ArchiveYearCard />
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
    );
    // Conditionally wrap with the correct nav
    if (userRole === "Comppgm") {
      return <ComputerProgrammerNav activeArchive={"active"}>{PageContent}</ComputerProgrammerNav>;
    } else if (userRole === "Principal") {
      return <PrincipalNav activeArchive={"active"}>{PageContent}</PrincipalNav>;
    }  else if (userRole === "SPCamp") {
      return <SPCampNav activeArchive={"active"}>{PageContent}</SPCampNav>;
    }  else if (userRole === "SP") {
      return <SPNav activeArchive={"active"}>{PageContent}</SPNav>;
    } else {
      return <div>Unauthorized</div>; // fallback for unexpected roles
    }
  };
export default ArchiveYear