import React, { useEffect, useRef, useState } from "react";
import VIDEO from './Video.mp4';
import OG from './OG_pic.jpg';
import HC from './OGAUDIO.mp3';         

const RefExample = () => {
    const [play, setPlay] = useState(true);
    const [audioPlay, setAudioPlay] = useState(true);
    const eleRef = useRef();
    const videoRef = useRef();
    const audioRef = useRef();

    useEffect(() => {
        eleRef.current.style.color = "red";
        eleRef.current.innerText = "React-Ref";
    }, []);

    const playOrPauseVideo = () => {
        if (play) {
            videoRef.current.play();
            setPlay(false);
        } else {
            videoRef.current.pause();
            setPlay(true);
        }
    };

    const playOrPauseAudio = () => {
        if (audioPlay) {
            audioRef.current.play();
            setAudioPlay(false);
        } else {
            audioRef.current.pause();
            setAudioPlay(true);
        }
    };

    return (
        <div>
            <h1 ref={eleRef}>Hello</h1>
            <video src={VIDEO} ref={videoRef} onClick={playOrPauseVideo} style={{ height: "100px" }}></video><br/><br />
            <audio ref={audioRef} src={HC}></audio>
            <img src={OG} alt="OG" onClick={playOrPauseAudio} style={{ height: "100px", width: "100px", cursor: "pointer" }} />
        </div>
    );
};

export default RefExample;
