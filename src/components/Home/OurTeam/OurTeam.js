import React from 'react';
import David from '../../../image/David.jpg'
import Cristian from '../../../image/Cristian.jpg'
import Jonas from '../../../image/JonasKaroota.jpg'
import TeamInfo from '../TeamInfo/TeamInfo';

const teamData = [
    {
        id: 1,
        name: "David",
        desig: "Laptop Repair Expert",
        img: David
    },
    {
        id: 2,
        name: "Cristian Robert",
        desig: "Phone Repair Expert",
        img: Cristian
    },
    {
        id: 3,
        name: "Jonas",
        desig: "Data Recovery Expert",
        img: Jonas
    },
]




const OurTeam = () => {
    return (

        <section className='mt-5'>
            <div className='text-center'>
                <h5 style={{ color: "#1cc7c1", fontWeight: "600" }}>OUR TEAM MEMBER</h5>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-5'>
                    {
                        teamData.map(teamMembar => <TeamInfo teamMembar={teamMembar} key={teamMembar.id}></TeamInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurTeam;