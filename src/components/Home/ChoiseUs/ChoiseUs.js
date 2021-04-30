import React from 'react';
import moneyBag from '../../../image/money-bag.png';
import calender from '../../../image/schedule.png';
import man from '../../../image/man.png';
import ChoiseInfo from '../ChoiseInfo/ChoiseInfo';

const choiseData = [
    {
        id: 1,
        img: moneyBag,
        title: "No Fix,No Money",
        desc: "Repair on Demand Lorem Ipsum is simply dummy text of the printing"
    },
    {
        id: 2,
        img: calender,
        title: "30 DAYS WARRANTY",
        desc: "Guaranteed Service Lorem Ipsum is simply dummy text of the printing"
    },
    {
        id: 3,
        img: man,
        title: "EXPERT STAFF",
        desc: "Available Anytime Lorem Ipsum is simply dummy text of the printing"
    }
]



const ChoiseUs = () => {
    return (
        <section className='mt-5 bg-dark'>
            <div className='text-center'>
                <h4 style={{ color: "White", fontWeight: "800" }}>Why You Choose Us</h4>

            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-5'>
                    {
                        choiseData.map(choise => <ChoiseInfo choise={choise} key={choise.id}></ChoiseInfo>)
                    }
                </div>
            </div>
        </section>

        // <section className='d-flex align-items-center '>
        //         {/* <h2 className='text-center text-secondary'>Why You Choise Us</h2> */}
        //     <div className='row'>
        //         {
        //             choiseData.map(choise=><ChoiseInfo choise={choise} key={choise.id}></ChoiseInfo>)
        //         }
        //     </div>
        // </section>
    );
};

export default ChoiseUs;