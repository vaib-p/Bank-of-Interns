import React, { useState } from 'react';

export default function CreateAcc() {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [photo, setPhoto] = useState(null);
  const [aadharCardPhoto, setAadharCardPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const selectedPhoto = e.target.files[0];
    if (selectedPhoto) {
      setPhoto(selectedPhoto);
    }
  };

  const handleAadharCardUpload = (e) => {
    const selectedAadharCardPhoto = e.target.files[0];
    if (selectedAadharCardPhoto) {
      setAadharCardPhoto(selectedAadharCardPhoto);
    }
  };

  const handleCreateAccount = () => {
    // Implement account creation logic here
    // You can use the state values (accountNumber, amount, photo, aadharCardPhoto) for creating an account
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Account</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="accountNumber" className="form-control" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                          <label className="form-label" htmlFor="accountNumber">Account Number</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-money-bill-wave fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="amount" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
                          <label className="form-label" htmlFor="amount">Amount to Deposit</label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="photo" className="form-label">Upload Photo</label>
                        <input type="file" id="photo" className="form-control" onChange={handlePhotoUpload} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="aadharCardPhoto" className="form-label">Upload Aadhar Card Photo</label>
                        <input type="file" id="aadharCardPhoto" className="form-control" onChange={handleAadharCardUpload} />
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleCreateAccount}>Create Account</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


