import React from 'react'
import { useNavigate } from 'react-router-dom';

function ArchiveYearCard() {
    const navigate = useNavigate();

    const handleAction = ( actionType) => {
        // console.log(`Action: ${actionType} on course ${row.courseName}`);
        if (actionType === "2024") {
          navigate(`/ArchiveMonth/${actionType}`);
        } else if (actionType === "2025") {
          navigate(`/ArchiveMonth/${actionType}`);
        }
      };
    
  return (
    <>
    <div className='col-md-12 row bg-white p-2'>
        <div className='col-md-6 mb-4 row'>
            <div className='col-md-3'>
                <div className=' bg-green-db card-border' onClick={() => handleAction("2024")}>
                    <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                        <h6 className="card-title txt-black">2024</h6>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className=' bg-green-db card-border' onClick={() => handleAction("2025")}>
                    <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                        <h6 className="card-title txt-black">2025</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ArchiveYearCard