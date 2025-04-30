import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BatchDetailsForm = () => {
  const [formData, setFormData] = useState({
    organisation: '',
    location: '',
    trainingType: '',
    rank: '',
    role: '',
    batchNo: '',
    fromDate: '',
    toDate: '',
    rpcAlloted: '',
    verificationRoll: '',
    appointOrder: '',
    rpcNotReported: '',
    rpcReported: '',
    permanentDeduction: '',
    underTraining: '',
    casualities: '',
    od: ''
  });

  const organisations = {
    'Org A': ['Location A1', 'Location A2'],
    'Org B': ['Location B1', 'Location B2']
  };

  const trainingTypes = ['Online', 'Offline', 'On-the-Job'];
  const ranks = ['Junior', 'Senior', 'Lead'];
  const roles = ['Developer', 'Trainer', 'Support'];

  // Generate unique Batch No (e.g., BATCH-<timestamp>)
  useEffect(() => {
    const uniqueBatch = `BATCH-${Date.now()}`;
    setFormData(prev => ({ ...prev, batchNo: uniqueBatch }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted. Check console for details.');
  };

  return (
    <div className="container mt-4">
    <h4 className="mb-4 title-clr">Batch Details</h4>
    <Link to="/AddBatch">
      <button type="button" name="cid" className="btn btn-outline-success mb-4"><i className="bi bi-arrow-left me-2"></i>Batches</button>
    </Link>
    <div className="card shadow p-4 border border-secondary">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className="form-label">Organisation</label>
            <select className="form-control w-100" name="organisation" value={formData.organisation} onChange={handleChange}>
              <option value="">Select Organisation</option>
              {Object.keys(organisations).map(org => (
                <option key={org} value={org}>{org}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Location</label>
            <select className=" form-control w-100" name="location" value={formData.location} onChange={handleChange}>
              <option value="">Select Location</option>
              {formData.organisation &&
                organisations[formData.organisation].map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Training Type</label>
            <select className="form-control w-100" name="trainingType" value={formData.trainingType} onChange={handleChange}>
              <option value="">Select Training Type</option>
              {trainingTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Rank</label>
            <select className="form-control w-100" name="rank" value={formData.rank} onChange={handleChange}>
              <option value="">Select Rank</option>
              {ranks.map(rank => (
                <option key={rank} value={rank}>{rank}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Role</label>
            <select className="form-control w-100" name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select Role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Batch No</label>
            <input type="text" className="form-control" name="batchNo" value={formData.batchNo} readOnly />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">From Date</label>
            <input type="date" className="form-control" name="fromDate" value={formData.fromDate} onChange={handleChange} />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">To Date</label>
            <input type="date" className="form-control" name="toDate" value={formData.toDate} onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          {[
            ['rpcAlloted', 'RPC Allotted by Govt'],
            ['verificationRoll', 'Verification Roll Received'],
            ['appointOrder', 'Appoint Order Issued'],
            ['rpcNotReported', "RPC's Not Reported"],
            ['rpcReported', "RPC's Reported"],
            ['permanentDeduction', 'Permanent Deduction'],
            ['underTraining', 'Under Training'],
            ['casualities', 'Casualities'],
            ['od', 'OD']
          ].map(([name, label], index) => (
            <div className="col-md-3 mb-3" key={name}>
              <label className="form-label">{label}</label>
              <input
                type="text"
                className="form-control"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={`Enter ${label}`}
              />
            </div>
          ))}
        </div>
  
        <div className="text-end">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default BatchDetailsForm;
