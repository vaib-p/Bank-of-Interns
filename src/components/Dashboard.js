import React from 'react';

function Dashboard() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to the Bank of Interns Dashboard</h1>
    <div className="row d-flex justify-content-center align-items-center mt-5">
    <div class="col-xl-3 col-md-6 mb-4">
     <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                <a href="/createAcc" className="text-decoration-none">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1 ">
                    Create Account</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">Saving</div></a>
                </div>
                <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
     </div>
   </div>

   <div class="col-xl-3 col-md-6 mb-4">
     <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                <a href="/deposite" className="text-decoration-none">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1 ">
                    Deposit Funds</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">Limit Rs.100000</div>
                </a>
                </div>
                <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
     </div>
   </div>

   <div class="col-xl-3 col-md-6 mb-4">
     <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                <a href="/withdraw" className="text-decoration-none">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1 ">
                    Withdraw Funds</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">Limit Rs.100000</div>
                </a>
                </div>
                <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
     </div>
   </div>
      
   </div>
      
    </div>

  );
}

export default Dashboard;
