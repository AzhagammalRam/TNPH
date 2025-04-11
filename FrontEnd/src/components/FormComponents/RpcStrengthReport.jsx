import React from 'react'
import Table from 'react-bootstrap/Table';

function RpcStrengthReport() {
  return (
    <div className="container">
      {/* <p className="sec_title">RPC</p> */}
      <div className='col-md-12 row'>
        <div className='col-md-6 d-flex'>
          <h6 className='title-clr col-md-6'>Name of the PTS</h6>
          <label className='col-md-6'>PTS Thiruvallur</label>
        </div>
        <div className='col-md-6 d-flex'>
          <h6 className='title-clr col-md-6'>No of Trainees alloted by Govt</h6>
          <label className='col-md-6'>300</label>
        </div>
      </div>
      <div className='col-md-12 row'>
        <div className='col-md-6 d-flex'>
          <h6 className='title-clr col-md-6'>Total no of Verification Roll Received</h6>
          <label className='col-md-6'>286</label>
        </div>
        <div className='col-md-6 d-flex'>
          <h6 className='title-clr col-md-6'>Total no of Appointment order issued</h6>
          <label className='col-md-6'>286</label>
        </div>
      </div>
      
      <div className='col-md-12 row'>
        <div className='col-md-6 d-flex'>
          <h6 className='title-clr col-md-6'>No of trainees not yet reported</h6>
          <label className='col-md-6'>2</label>
        </div>
        <div className='col-md-6 d-flex'>
          <h6 className='title-clr col-md-6'>No of trainees reported</h6>
          <label className='col-md-6'>284</label>
        </div>
      </div>
      <Table responsive bordered id="rpc" className='smtbl'>
        <thead>
          <tr>
            <th rowSpan={2} className='rotate'>S.No</th>
            <th colSpan={7}>No of Permanent Deduction</th>
            <th className='rotate' rowSpan={2}>RPCs Under Training (Col.7 - 14)</th>
            <th colSpan={10}>No of Casuality</th>
            <th className='rotate' rowSpan={3}>Sports OD</th>
            <th className='rotate' rowSpan={2}>Present as on Date (Col.15-24)</th>
          </tr>
          <tr>
            <th className='rotate' >Pregnancy</th>
            <th className='rotate' >Deserter</th>
            <th className='rotate' >Resignation</th>
            <th className='rotate' >Discharged due to criminal cases</th>
            <th className='rotate' >Removal/Dismissal due to PR</th>
            <th className='rotate' >If any other reasons, Please Specify(i.e., death etc..,)</th>
            <th className='rotate' >Total (Col 8 to 13)</th>
            <th className='rotate' >In-Patient due to viral infection (i.e., Corona etc.,) other reasons</th>
            <th className='rotate' >CL</th>
            <th className='rotate' >CL Absent</th>
            <th className='rotate' >EL</th>
            <th className='rotate' >EL Absent</th>
            <th className='rotate' >ML</th>
            <th className='rotate' >ML Absent</th>
            <th className='rotate' >HP-Absent</th>
            <th className='rotate' >Due to Report</th>
            <th className='rotate' >Total ( Col.16 to 23)</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className='tblTitle'><label>1</label></td>
                <td><label>1</label></td>
                <td><label>0</label></td>
                <td><label>3</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>4</label></td>  
                <td><label>280</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>1</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>0</label></td>
                <td><label>1</label></td>
                <td><label>0</label></td>
                <td><label>279</label></td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default RpcStrengthReport