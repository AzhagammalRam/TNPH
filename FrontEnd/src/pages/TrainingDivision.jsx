import React from 'react'
import { Link } from 'react-router-dom';
import TrainingDivisionCard from '../components/FormComponents/TrainingDivisionCard'

function TrainingDivision() {
  return (
    <>
    
    <main className="pt-3 container">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-7">
                    <h4 className='title-clr'>Dashboard</h4>
                    <h6 className='txtred'>Welcome to Training Division</h6>
                </div>
                <div className="col-md-5">
                  <Link to="/AddBatch" className="btn btn-info m-2 text-white" role="button" rel="nofollow"><i className="fa fa-plus me-2"></i> Create Batch</Link>
                  <Link to="/group-session" className="btn btn-success m-2 text-white" role="button" rel="nofollow"><i className="fa fa-plus me-2"></i> Create Timetable</Link>
                </div>
                </div>
                <div className="row">
                  <TrainingDivisionCard />
                </div>
            </div>
        </main>
    </>
  )
}

export default TrainingDivision