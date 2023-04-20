import React, { useEffect } from 'react';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';
import { v4 as uuidv4 } from 'uuid';
import { Footer } from '../../shared/Footer/Footer';
const BloodDonerList = () => {
    const [donerList, setDonerList] = React.useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/bloodDonerList`)
            .then(res => res.json())
            .then(data => setDonerList(data))
    }, [])
    return (
        <div>
            <NavigationBar isHome={true} />
            <section className='md:mx-10 pt-40 pb-10'>
                <div className="overflow-x-auto" >
                    <table className="table table-zebra w-full bg-white">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Blood Group</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donerList.map((elem, index) => <tr key={uuidv4()}>
                                    <th key={uuidv4()}>{index + 1}</th>
                                    <td key={uuidv4()}>{elem?.name}</td>
                                    <td key={uuidv4()}>{elem?.email}</td>
                                    <td key={uuidv4()}>{elem?.bloodGroup}</td>
                                    <td key={uuidv4()}>{elem?.phone}</td>
                                    <td key={uuidv4()}>{elem?.address}</td>
                                    <td key={uuidv4()}>{elem?.age}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BloodDonerList;