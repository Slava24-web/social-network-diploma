import React from 'react';
import useWebRTC from './../../../hooks/useWebRTC.hook';
import {withRouter} from "react-router-dom";

const Room = (props) => {
    // const {id} = props.match.params;
    // console.log(props)
    // const {clients, provideMediaRef} = useWebRTC(id);
    //
    // console.log(clients)

    const addVideoStream = (video, stream) => {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
            video.play();
            videoGrid.append(video);
        });
    };

    let myVideoStream;
    const videoGrid = document.getElementById("video-grid");
    const myVideo = document.createElement("video");
    myVideo.muted = true;

    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    }).then((stream) => {
        myVideoStream = stream;
        addVideoStream(myVideo, stream);
    });

    return (
        <>
            {/*{*/}
            {/*    clients.map(clientId => (*/}
            {/*        <div key={clientId}>*/}
            {/*            <video*/}
            {/*                ref={instance => {*/}
            {/*                    provideMediaRef(clientId, instance)*/}
            {/*                }}*/}
            {/*                autoPlay*/}
            {/*                playsInline*/}
            {/*                muted={clientId === 'LOCAL_VIDEO'}*/}
            {/*            >*/}

            {/*            </video>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
            <div className='calls_title'>
                <h3>Переговорная</h3>
            </div>

            <div className='videos_group'>
                <div className='video_grid'>

                </div>
            </div>

            <div className='calls_options'>
                <div className='options_left'>
                    <div id="stopVideo" className='options_button'>
                        <i className="fa fa-video-camera"/>
                    </div>
                    <div id="muteButton" className='options_button'>
                        <i className="fa fa-microphone"/>
                    </div>
                </div>
                <div className="options__right">
                    <div id="inviteButton" className='options_button'>
                        <i className="fas fa-user-plus"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withRouter(Room);