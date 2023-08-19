import React, {useEffect, useState} from 'react';
import KidsService from '../API/KidsService';
import Loader from "../UI/Loader/Loader";

function KidsThatWaitForBirthday({tokens, setTokens}) {
    const [kids, setKids] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const data = await KidsService.getKidsThatWaitBirth(tokens, setTokens);
            setKids(data);
            setLoader(false);
        }

        fetchData();
    }, [tokens, setTokens]);

    return (
        <div style={{alignItems: 'center'}}>
            <h3>Kids that wait for birthday</h3>
            {loader ? (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh'}}>
                    <Loader/>
                </div>
            ) : (
                <table style={{width: '100%', margin: 'auto'}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {kids.map((kid) => (
                        <tr key={kid.id}>
                            <td>{kid.name}</td>
                            <td>{kid.birthYear}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default KidsThatWaitForBirthday;