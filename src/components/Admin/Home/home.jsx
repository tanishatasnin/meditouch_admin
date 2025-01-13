import React from 'react';
import './home.css';
import userImg from  '../../../assets/assets/icons/icons8-users-50.png';
import doctors from  '../../../assets/assets/icons/icons8-doctors-50.png';
 import money from  '../../../assets/assets/icons/icons8-money-50.png';
 import box from  '../../../assets/assets/icons/icons8-package-50.png';



const home = () => {
    return (
        <div class="home_cards">
        <div class="card-container">
        {/* <!-- Card 1 --> */}
        <div class="card">
            <div class="icon" >
                <i class=""> <img src={money} alt="" /></i>
            </div>
            <div class="card-content">
                
                <h2 class="value"> ৳ 40572</h2>
                <h2 class="title1">Revenues Earned</h2>
                
            </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div class="card">
            <div class="icon" >
                <i class=""><img src={box} alt="" /></i>
            </div>
            <div class="card-content">
                
                <h2 class="value">23</h2>
                <h2 class="title1">Total Orders</h2>
               
            </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div class="card">
            <div class="icon" >
                <i class="" ><img src={userImg} alt="" /></i>
            </div>
            <div class="card-content">
                
                <h2 class="value">17</h2>
                <h2 class="title1">Total Users</h2>
                
            </div>
        </div>
        {/* <!-- Card 4 --> */}
        <div class="card">
            <div class="icon">
                <i class=""><img src={doctors} alt="" /></i>
            </div>
            <div class="card-content">
                <h2 class="value">10</h2>
                <h2 class="title1">Total Doctor</h2>
                
            </div>
        </div>
    </div>
    </div>
    );
};

export default home;