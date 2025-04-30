import React from 'react'


function IGDIGCard() {
  const userRole = sessionStorage.getItem("role");

  return (
    <>
    <div className="row p-5 ">
    <div className='col-12 col-md-12'>
            <div className='col-md-12 bgcard ms-3 p-5'>
                <div className='card-border igcard col-md-12'>
                  <ol>
                    <li style={{ '--accent-color': '#0D6EFD' }}>
                      <div className="icon"><i className="fa fa-layer-group me-lg-2"></i></div>
                      <div className="title">PTS DSR</div>
                      <div className="descr"><br></br></div>
                    </li>
                    <li style={{ '--accent-color': '#6710F5' }}>
                      <div className="icon"><i className="fa fa-layer-group me-lg-2"></i></div>
                      <div className="title">ISTC DSR</div>
                      <div className="descr"></div>
                    </li>
                    <li style={{ '--accent-color': '#6F42C1' }}>
                      <div className="icon"><i className="fa fa-calendar-alt me-lg-2"></i></div>
                      <div className="title">Events & Ceremonies</div>
                      <div className="descr"></div>
                    </li>
                    <li style={{ '--accent-color': '#D63384' }}>
                      <div className="icon"><i className="fa fa-envelope me-lg-2"></i></div>
                      <div className="title">Leave Details</div>
                      <div className="descr"></div>
                    </li>
                    <li style={{ '--accent-color': '#DC3545' }}>
                      <div className="icon"><i className="fa fa-calendar me-lg-2"></i></div>
                      <div className="title">Timetable</div>
                      <div className="descr"></div>
                    </li>
                    <li style={{ '--accent-color': '#dc35da' }}>
                      <div className="icon"><i className="fa fa-book me-lg-2"></i></div>
                      <div className="title">Address Book</div>
                      <div className="descr"><br></br></div>
                    </li>
                    {userRole === 'IG' && (
                    <li style={{ '--accent-color': '#80dc35' }}>
                      <div className="icon"><i className="fa fa-check me-lg-2"></i></div>
                      <div className="title">TMS Approval</div>
                      <div className="descr"><br></br></div>
                    </li>)}
                  </ol>
                </div>
            </div>
        </div>
        </div>
 
    </>
  )
}

export default IGDIGCard