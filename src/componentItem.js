import React from 'react';
import './componentItem.css';
const UserItem = () => {
    return (
        <div className="container d-flex">
            <div className = "col-12 col-sm-6 col-md-3 px-0">
                <img src = "https://api.randomuser.me/portraits/women/1.jpg" className= "rounded-circle mx-auto d-block img-fluid"/>
            </div>
            <div className = "col-12 col-sm-6 col-md-9 text-center text-sm-left">
                <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                    <label className="name lead">Amber Wright</label>
                    <br></br>
                    <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                    <span className="text-muted">6833 Smokey Ln</span>
                    <br></br>
                    <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                    <span className="text-muted small">(355)-714-8701</span>
                    <br></br>
                    <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                    <span className="text-muted small text-truncate">amber.wright@example.com</span>
            </div>
        </div>
    );
};
export default UserItem;