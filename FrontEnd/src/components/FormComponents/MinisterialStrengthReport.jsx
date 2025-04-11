import React from 'react'
import Table from 'react-bootstrap/Table';

function MinisterialStrengthReport() {
    return (
        <div className="container">
          {/* <p className="sec_title">Strength</p> */}
          <Table responsive bordered id="strength" className='smtbl'>
            <thead>
              <tr>
                <th></th>
                <th>SAO</th>
                <th>AO</th>
                <th>Supdt</th>
                <th>Asst</th>
                <th>JA</th>
                <th>RC</th>
                <th>Typist</th>
                <th>OA</th>
                <th>Sweepers</th>
                <th>Sports Officer</th>
                <th>Grand Total</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td className='tblTitle'><label>Sanctioned</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>1</label></td>
                  <td><label>2</label></td>
                  <td><label>3</label></td>  
                  <td><label>1</label></td>  
                  <td><label>1</label></td> 
                  <td><label>2</label></td> 
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>10</label></td>  
                </tr>
                <tr>
                  <td className='tblTitle'><label>Actual</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>1</label></td>
                  <td><label>2</label></td>
                  <td><label>3</label></td>  
                  <td><label>-</label></td>  
                  <td><label>-</label></td> 
                  <td><label>2</label></td> 
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>8</label></td>  
                </tr>
                <tr>
                  <td className='tblTitle'><label>Regular OD</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>  
                  <td><label>-</label></td>  
                  <td><label>-</label></td> 
                  <td><label>-</label></td> 
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>0</label></td>  
                </tr>
                <tr>
                  <td className='tblTitle'><label>Vacancy</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>1</label></td>
                  <td><label>2</label></td>
                  <td><label>3</label></td>  
                  <td><label>-</label></td>  
                  <td><label>-</label></td> 
                  <td><label>2</label></td> 
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>8</label></td>  
                </tr>
                <tr>
                  <td className='tblTitle'><label>OD Requested From CO</label></td>
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>1</label></td>
                  <td><label>2</label></td>
                  <td><label>3</label></td>  
                  <td><label>-</label></td>  
                  <td><label>-</label></td> 
                  <td><label>2</label></td> 
                  <td><label>-</label></td>
                  <td><label>-</label></td>
                  <td><label>8</label></td>  
                </tr>
                <tr>
                  <td className='tblTitle'><label>Total Shortage</label></td>
                  <td><label>0</label></td>
                  <td><label>0</label></td>
                  <td><label>0</label></td>
                  <td><label>0</label></td>
                  <td><label>0</label></td>  
                  <td><label>0</label></td>  
                  <td><label>1</label></td> 
                  <td><label>2</label></td> 
                  <td><label>0</label></td>
                  <td><label>0</label></td>
                  <td><label>3</label></td>  
                </tr>
            </tbody>
          </Table>
        </div>
      )
    }
export default MinisterialStrengthReport