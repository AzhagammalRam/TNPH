import React from 'react'
import { Link } from 'react-router-dom'

function DashboardISTCCard() {
  
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  console.log(formatDate(yesterday)); // e.g., "09-04-2025"
  return (
    <>
      <div className='col-md-12 row bg-white p-2 card-scroll'>
        <div className='col-md-3'>
          <div className="col-lg-12 col-md-4 mb-3 max-w-280">
            <div className='bg-imgb'>
              <div className="card-body d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h3 className="card-title mt-5">ISTC</h3>
                <p className='text-white'>DSR Status <br></br> { formatDate(yesterday) } </p><br></br><br></br>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-9'>
          <div className="col-lg-12 col-md-4 mb-3 max-w-280 row">
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Chennai - East</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-green-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Chennai - West</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Kancheepuram</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Vellore</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-green-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Villupuram</h6>
              </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Salem</h6>
              </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-green-db card-border'>
                <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                  <h6 className="card-title txt-black">Trichy</h6>
                </div>
                </div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-green-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Thanjavur</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Coimbatore</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-green-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Madurai</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Dindugul</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Ramnad</h6>
              </div></div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-green-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Tirunelveli</h6>
              </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-red-db card-border'>
              <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                <h6 className="card-title txt-black">Avadi</h6>
              </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className=' bg-green-db card-border'>
                <div className="card-body card-height bg-img d-flex flex-column align-items-center justify-content-center txt-align-center">
                  <h6 className="card-title txt-black">Tambaram</h6>
                </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default DashboardISTCCard