import React, { useEffect } from 'react';
import { useJitsi } from 'react-jutsu' // Custom hook
// const TOOLBAR_BUTTONS = ['microphone', 'camera', 'shortcuts', 'videoquality', 'fullscreen', 'hangup', 'tileview'];

const VideoCall = ({ roomName, subject = 'Clase Virtual', userName }) => {
  const parentNode = 'jitsi-container';
  const setElementHeight = () => {
    const element = document.querySelector(`#${parentNode}`);
    if (element) {
      element.style.height = `${element.parentElement.clientHeight}px`;
    }
  }

  useEffect(() => {
    setElementHeight();
    window.addEventListener('resize', setElementHeight)
    return () => {
      window.removeEventListener('resize', setElementHeight)
    }
  }, []);

  const jitsi = useJitsi({
    roomName,
    parentNode,
    interfaceConfigOverwrite: {
      TOOLBAR_BUTTONS: ['microphone', 'camera', 'mute-everyone'],
      SHOW_JITSI_WATERMARK: false,
      SHOW_WATERMARK_FOR_GUESTS: false,
      TOOLBAR_ALWAYS_VISIBLE: true,
    },
    configOverwrite: {
      disableDeepLinking: true,
    }
  })

  useEffect(() => {
    if (jitsi) {
      jitsi.addEventListener('videoConferenceJoined', () => {
        jitsi.executeCommand('displayName', userName)
        jitsi.executeCommand('subject', subject)
      })
    }
    return () => jitsi && jitsi.dispose()
  }, [jitsi, userName, subject])
  return <div id={parentNode}></div>
}

export default VideoCall;