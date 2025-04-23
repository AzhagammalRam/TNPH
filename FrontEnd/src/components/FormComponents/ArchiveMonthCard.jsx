import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec
} from '../../assets';

const imageMap = {
  jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec
};

const monthArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function ArchiveMonthCard() {
  const { id } = useParams(); // Year from the URL
  const selectedYear = parseInt(id, 10);

  const currentYear = new Date().getFullYear();
  const currentMonthIndex = new Date().getMonth(); // 0-based
  const [selectedMonth, setSelectedMonth] = useState(null); // stores clicked month name (e.g. 'feb')

  // Determine which months to show based on year
  let displayMonths = monthArr;
  if (selectedYear < currentYear) {
    displayMonths = ["dec"];
  } else if (selectedYear === currentYear) {
    displayMonths = monthArr.slice(0, currentMonthIndex + 1);
  }

  // Get numeric month from selected month name
  const selectedMonthIndex = monthArr.indexOf(selectedMonth);

  // Create filenames only if a month is selected
  const pdfs = selectedMonth
    ? Array.from({ length: 10 }, (_, i) => {
        const monthNum = String(selectedMonthIndex + 1).padStart(2, '0');
        const day = String(i + 1).padStart(2, '0');
        return `${selectedYear}${monthNum}${day}.pdf`;
      })
    : [];

  return (
    <>
      <div className='col-md-12 row bg-white p-2'>
        <div className='col-md-12 mb-4 row'>
          {displayMonths.map((month, index) => (
            <div
              className='col-md-1'
              key={index}
              onClick={() => setSelectedMonth(month)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={imageMap[month]}
                alt={month}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedMonth && (
        <>
          <hr />
          <div className='col-md-12 row bg-white p-2'>
            <div className='col-md-12 mb-4 row'>
              {pdfs.map((pdfName, index) => (
                <div className='col-md-4 d-flex align-items-center mb-2' key={index}>
                  <i className="fa fa-file-pdf text-danger fa-3x"></i>&nbsp;&nbsp;
                  <p className="mb-0">{pdfName}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ArchiveMonthCard;
