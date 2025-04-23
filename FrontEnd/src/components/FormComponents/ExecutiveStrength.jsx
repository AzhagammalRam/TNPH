import React from 'react'
import Table from 'react-bootstrap/Table';

function ExecutiveStrength() {
  const userRole = sessionStorage.getItem("role");

  return (
    <div className="container">
      {/* <p className="sec_title">Strength</p> */}
      <Table responsive bordered id="strength" className='smtbl'>
        <thead>
          <tr>
            <th rowSpan={2}></th>
            {userRole !== 'SPCamp' && userRole !== 'SP' ? (
              <>
                <th rowSpan={2}>ADSP</th>
                <th rowSpan={2}>DSP</th>
                <th colSpan={3}>INS</th>
              </>
            ) : (
              <>
                <th rowSpan={2}>IGP / AD</th>
                <th rowSpan={2}>DIG</th>
                <th rowSpan={2}>SP / DD</th>
                <th colSpan={1}>INS</th>
              </>
            )}

            <th colSpan={4}>SI</th>
            <th colSpan={3}>ORS</th>
            <th rowSpan={2}>Grand Total</th>
          </tr>
          <tr>
          { userRole !== 'SPCamp' && userRole !== 'SP' && (
            <>
            <th>Cat-I</th>
            <th>Cat-II</th>
            </>)}
            <th>Tech</th>
            <th>Cat-I</th>
            <th>Cat-II</th>
            <th>Cat-III</th>
            <th>Tech</th>
            <th>Cat-I</th>
            <th>Cat-II</th>
            <th>Cat-III</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className='tblTitle'><label>Sanctioned</label></td>
              { userRole !== 'SPCamp' && userRole !== 'SP' && (
                <>
                <td><label>2</label></td>
                <td><label>3</label></td>  
                <td><label>1</label></td>  
                <td><label>1</label></td>
                </>
              )} 
              { (userRole === 'SPCamp' || userRole === 'SP') && (
                <>
                <td><label>2</label></td>
                <td><label>3</label></td>  
                <td><label>1</label></td> 
                </>
              )} 
                <td><label>2</label></td> 
                <td><label>-</label></td>
                <td><label>-</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>  
            </tr>
            <tr>
              <td className='tblTitle'><label>Actual</label></td>
              { userRole !== 'SPCamp' && userRole !== 'SP' && (
                <>
                <td><label>2</label></td>
                <td><label>3</label></td>  
                <td><label>1</label></td>  
                <td><label>1</label></td> 
                </>
              )}
              { (userRole === 'SPCamp' || userRole === 'SP') && (
                <>
                <td><label>2</label></td>
                <td><label>3</label></td>  
                <td><label>1</label></td> 
                </>
              )}
                <td><label>2</label></td> 
                <td><label>-</label></td>
                <td><label>-</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>
                <td><label>10</label></td>  
            </tr>
            <tr>
              <td className='tblTitle'><label>Regular OD</label></td>
              { userRole !== 'SPCamp' && userRole !== 'SP' && (
              <>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td> 
              <td><input name="email" placeholder="-"  type="text" /></td>  
              <td><input name="email" placeholder="-"  type="text" /></td>
                </>
              )} 
              { (userRole === 'SPCamp' || userRole === 'SP') && (
                <>
                <td><input name="email" placeholder="-"  type="text" /></td>
                <td><input name="email" placeholder="-"  type="text" /></td> 
                <td><input name="email" placeholder="-"  type="text" /></td>  
                </>
              )}
              <td><input name="email" placeholder="-"  type="text" /></td> 
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><label>0</label></td>  
            </tr>
            <tr>
              <td className='tblTitle'><label>Vacancy</label></td>
              { userRole !== 'SPCamp' && userRole !== 'SP' && (
                <>
              <td><input name="email" placeholder="2"  type="text" /></td>
              <td><input name="email" placeholder="3"  type="text" /></td> 
              <td><input name="email" placeholder="-"  type="text" /></td>  
              <td><input name="email" placeholder="-"  type="text" /></td>
                </>
              )} 
              { (userRole === 'SPCamp' || userRole === 'SP') && (
                <>
                <td><input name="email" placeholder="2"  type="text" /></td>
                <td><input name="email" placeholder="3"  type="text" /></td> 
                <td><input name="email" placeholder="-"  type="text" /></td>  
                </>
              )}
              <td><input name="email" placeholder="2"  type="text" /></td> 
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td colSpan={3}><input name="email" placeholder="-"  type="text" /></td>
              <td><label>8</label></td>  
            </tr>
            <tr>
              <td className='tblTitle'><label>Vacancy Filled By CO, but yet to report</label></td>
              { userRole !== 'SPCamp' && userRole !== 'SP' && (
                <>
              <td><input name="email" placeholder="2"  type="text" /></td>
              <td><input name="email" placeholder="3"  type="text" /></td> 
              <td><input name="email" placeholder="-"  type="text" /></td>  
              <td><input name="email" placeholder="-"  type="text" /></td> 
                </>
              )}
              { (userRole === 'SPCamp' || userRole === 'SP') && (
                <>
                <td><input name="email" placeholder="2"  type="text" /></td>
                <td><input name="email" placeholder="3"  type="text" /></td> 
                <td><input name="email" placeholder="-"  type="text" /></td>  
                </>
              )}
              <td><input name="email" placeholder="2"  type="text" /></td> 
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td><input name="email" placeholder="-"  type="text" /></td>
              <td colSpan={3}><input name="email" placeholder="-"  type="text" /></td>
              <td><label>8</label></td>  
            </tr>
            <tr>
              <td className='tblTitle'><label>Net Vacancy</label></td>
              { userRole !== 'SPCamp' && userRole !== 'SP' && (
              <>
              <td><label>0</label></td>
              <td><label>0</label></td> 
              <td><label>0</label></td>  
              <td><label>1</label></td> 
                </>
              )}
              { (userRole === 'SPCamp' || userRole === 'SP') && (
                <>
                <td><label>0</label></td>
                <td><label>0</label></td> 
                <td><label>0</label></td> 
                </>
              )}
              <td><label>2</label></td> 
              <td><label>0</label></td>
              <td><label>0</label></td>
              <td><label>-</label></td>
              <td><label>-</label></td>
              <td colSpan={3}><label>-</label></td>
              <td><label>3</label></td>  
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ExecutiveStrength