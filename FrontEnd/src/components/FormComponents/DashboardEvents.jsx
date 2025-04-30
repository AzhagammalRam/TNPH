import React from 'react'

function DashboardEvents() {
  return (
    <>
    <div className='col-md-12'>
      <div className='bg-white p-2 mb-2'>
        <h6 className='txtred mt-2'>Events</h6>
      </div>
    <div className='event-scroll'>
      <div className='bg-white p-2 mb-2'>
        <h6 className='title-clr mt-2'>PTS Thiruvallur</h6>
        <div className='col-md-12 row'>
          <span className='col-md-9'>12:30 PM to 5:30 PM</span>
          <span className='col-md-3'><b>24/04/2025</b></span>
        </div>
      </div>
      <div className='bg-white p-2 mb-2'>
        <h6 className='title-clr mt-2'>Sports Day TNPH</h6>
        <div className='col-md-12 row'>
          <span className='col-md-9'>3:30 PM to 6:30 PM</span>
          <span className='col-md-3'><b>04/07/2025</b></span>
        </div>
      </div>
      <div className='bg-white p-2 mb-2'>
        <h6 className='title-clr mt-2'>Batch Passing out ceremony</h6>
        <div className='col-md-12 row'>
          <span className='col-md-9'></span>
          <span className='col-md-3 '><b>Dec/2024</b></span>
        </div>
      </div>
      <div className='bg-white p-2 mb-2'>
        <h6 className='title-clr mt-2'>Independence Day Parade</h6>
        <div className='col-md-12 row'>
          <span className='col-md-9'>7:30 AM to 9:30 AM</span>
          <span className='col-md-3'><b>15/08/2025</b></span>
        </div>
      </div>
</div>
    </div>

    </>
  )
}

export default DashboardEvents