import React from 'react';
import './hero.css';
import { LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';
function Dashboard({ value, max }) {
    return (
        <div className='Dashboard'>
            <div className="dashboard__center">
                <div className="container">
                    <button className='svg__button'><svg class="MuiSvgIcon-root jss209 jss212" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></svg></button>
                    <button className='sign__button'>Sign Out</button>
                </div>
            </div>
            <div className="name__border">
                <div className="container1">
                    <div className="name__border__center">
                        <h3 class="border__h3">Welcome MuhammadYusuf Qodirov</h3>
                        <div className='jss242'></div>
                        <h5>Current Course</h5>
                        <h4>A1 - Elementary English Course</h4>
                        <div>
                            <LinearProgress
                                variant="determinate"
                                value={(value / max) * 100}
                                style={{
                                    width: "100%",
                                    height: "15px",
                                    borderRadius: '7px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    marginTop: '-20px',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#fafafa',
                                    },
                                }}
                            />

                        </div>
                        <div className='liner__number' style={{ marginTop: '10px', fontFamily: 'Arial' }}>
                            <div>{`${value} / ${max}`}</div>
                        </div>
                        <div className='border__bottom'>
                            <Link to='/courses'>
                                <button className='courses'>Countinue with courses</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
