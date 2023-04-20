import React, { useState } from 'react'
import AgoraUIKit from "agora-react-uikit"
import useRole from '../../hooks/useRole';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const VideoCall = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const role = useRole(user?.email);
    const [token, setToken] = useState(null)
    const handleVideoCall = (e) => {
        e.preventDefault();
        console.log(e?.target?.meeting?.value);
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/get-token?channelName=${e?.target?.meeting?.value}&id=${id}`)
            .then(res => res.json())
            .then(data => {
                const rtcProps = {
                    appId: "dd59321650a748728c748a7eb21637ff",
                    channel: e?.target?.meeting?.value,
                    token: data.token,
                };
                console.log("data", data.token);
                setToken(rtcProps)
            });
    }
    const callbacks = {
        EndCall: () => setToken(null),
    };
    const handleJoinVideoCall = e => {
        // read token from your server and set to rtcProps.token
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/get-tokenPatient?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const rtcProps = {
                    appId: "dd59321650a748728c748a7eb21637ff",
                    channel: data?.channelName,
                    token: data.token,
                };
                console.log("data", data.token);
                setToken(rtcProps)
            });
    }

    return token !== null ? (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Video Call</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <AgoraUIKit rtcProps={token} callbacks={callbacks} />
        </div>
    ) : (
        role === "Doctor" ? <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Video Call</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form onSubmit={handleVideoCall}>
                <input type="text" placeholder="Enter the meeting name" id="meeting" name='meeting' />
                <input type="submit" value="Submit" />
            </form>
        </> : <button onClick={handleJoinVideoCall}>
            Join The meeting
        </button>
    );

}

export default VideoCall;