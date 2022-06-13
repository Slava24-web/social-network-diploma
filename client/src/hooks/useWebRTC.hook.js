// import {useCallback, useEffect, useRef} from "react";
// import useStateWithCallback from "./useStateWithCallback.hook";
// import socket from "../api/calls-socket";
// import freeice from 'freeice';
//
// export default function useWebRTC(roomId) {
//     // Все доступные клиенты
//     const [clients, updateClients] = useStateWithCallback([]);
//
//     const addNewClient = useCallback((newClient, callback) => {
//         updateClients(list => {
//             if (!list.includes(newClient)) {
//                 return [...list, newClient]
//             }
//
//             return list;
//         }, callback);
//     }, [clients, updateClients]);
//
//     // Все соединение
//     const peerConnections = useRef({});
//     // Ссылка на мой медиа поток (моя вебка и микрофон)
//     const localMediaStream = useRef(null);
//     // Все медиа элементы на моей странице
//     const peerMediaElements = useRef({
//         ['LOCAL_VIDEO']: null,
//     });
//
//     useEffect(() => {
//         const handleNewPeer = async ({peerId, createOffer}) => {
//             if (peerId in peerConnections.current) {
//                 return console.warn('Already connected to peer ' + peerId);
//             }
//
//             peerConnections.current[peerId] = new RTCPeerConnection({
//                 iceServers: freeice(),
//             });
//
//             // Обработка нового кандидата на подключение
//             peerConnections.current[peerId].onicecandidate = (e) => {
//                 if (e.candidate) {
//                     socket.emit('RELAY_ICE', {
//                         peerId,
//                         iceCandidate: e.candidate,
//                     })
//                 }
//             }
//
//             let tracksCount = 0;
//             // Обработка нового трека
//             peerConnections.current[peerId].ontrack = ({streams: [remoteStream]}) => {
//                 tracksCount++;
//
//                 // Если подключены аудио и видео
//                 if (tracksCount === 2) {
//                     tracksCount = 0;
//                     addNewClient(peerId, () => {
//                         if (peerMediaElements.current[peerId]) {
//                             peerMediaElements.current[peerId].srcObject = remoteStream;
//                         } else {
//                             let settled = false;
//                             const interval = setInterval(() => {
//                                 if (peerMediaElements.current[peerId]) {
//                                     peerMediaElements.current[peerId].srcObject = remoteStream;
//                                     settled = true;
//                                 }
//
//                                 if (settled) {
//                                     clearInterval(interval);
//                                 }
//                             }, 1000);
//                         }
//                     })
//                 }
//             }
//
//             localMediaStream.current.getTracks().forEach((track) => {
//                 peerConnections.current[peerId].addTrack(track, localMediaStream.current);
//             });
//
//             if (createOffer) {
//                 const offer = await peerConnections.current[peerId].createOffer();
//                 await peerConnections.current[peerId].setLocalDescription(offer);
//                 socket.emit('RELAY_SDP', {
//                     peerId,
//                     sessionDescription: offer,
//                 })
//             }
//         }
//
//         socket.on('ADD_PEER', handleNewPeer);
//
//         return () => {
//             socket.off('ADD_PEER');
//         }
//     }, []);
//
//     useEffect(() => {
//         const setRemoteMedia = async ({peerId, sessionDescription}) => {
//             await peerConnections.current[peerId]?.setRemoteDescription(new RTCSessionDescription(sessionDescription));
//
//             if (sessionDescription.type === 'offer') {
//                 const answer = await peerConnections.current[peerId].createAnswer();
//                 await peerConnections.current[peerId].setLocalDescription(answer);
//                 socket.emit('RELAY_SDP', {
//                     peerId,
//                     sessionDescription: answer
//                 })
//             }
//         }
//
//         socket.on('SESSION_DESCRIPTION', setRemoteMedia);
//
//         return () => {
//             socket.off('SESSION_DESCRIPTION');
//         }
//     }, []);
//
//     // Обработка нового кандидата на подключение
//     useEffect(() => {
//         socket.on('ICE_CANDIDATE', ({peerId, iceCandidate}) => {
//             peerConnections.current[peerId].addIceCandidate(new RTCIceCandidate(iceCandidate));
//         });
//
//         return () => {
//             socket.off('ICE_CANDIDATE');
//         }
//     }, []);
//
//     // Обработка удаление подключения
//     useEffect(() => {
//         const handleRemovePeer = ({peerId}) => {
//             if (peerConnections.current[peerId]) {
//                 peerConnections.current[peerId].close();
//             }
//
//             // Удалить подключение и поток медиа данных
//             delete peerConnections.current[peerId];
//             delete peerMediaElements.current[peerId];
//
//             updateClients(list => list.filter(client => client !== peerId));
//         }
//
//         socket.on('REMOVE_PEER', handleRemovePeer);
//
//         return () => {
//             socket.off('REMOVE_PEER');
//         }
//     }, []);
//
//     useEffect(() => {
//         // Захват экрана
//         const startCapture = async () => {
//             // Захват медиа контента (поток с камеры и микрофона)
//             localMediaStream.current = await navigator.mediaDevices.getUserMedia({
//                 audio: true,
//                 video: {
//                     width: 1280,
//                     height: 720,
//                 }
//             });
//
//             addNewClient('LOCAL_VIDEO', () => {
//                 // Видео плеер
//                 const localVideoElement = peerMediaElements.current['LOCAL_VIDEO'];
//
//                 if (localVideoElement) {
//                     // Убираем громкость у себя, чтобы не слышать самого себя
//                     localVideoElement.volume = 0;
//                     localVideoElement.srcObject = localMediaStream.current;
//                 }
//             });
//         }
//
//         startCapture()
//             .then(() => socket.emit('JOIN', {room: roomId}))
//             .catch((e) => console.error('Error getting user media: ', e));
//
//         return () => {
//             localMediaStream.current.getTracks().forEach(track => track.stop());
//             socket.emit('LEAVE');
//         }
//     }, [roomId]);
//
//     const provideMediaRef = useCallback((id, node) => {
//         peerMediaElements.current[id] = node;
//     }, []);
//
//     return {
//         clients,
//         provideMediaRef
//     }
// }

import {useEffect, useRef, useCallback} from 'react';
import freeice from 'freeice';
import useStateWithCallback from "./useStateWithCallback.hook";
import socket from "../api/calls-socket";

export const LOCAL_VIDEO = 'LOCAL_VIDEO';

export default function useWebRTC(roomId) {
    const [clients, updateClients] = useStateWithCallback([]);

    const addNewClient = useCallback((newClient, cb) => {
        updateClients(list => {
            if (!list.includes(newClient)) {
                return [...list, newClient]
            }

            return list;
        }, cb);
    }, [clients, updateClients]);

    const peerConnections = useRef({});
    const localMediaStream = useRef(null);
    const peerMediaElements = useRef({
        [LOCAL_VIDEO]: null,
    });

    useEffect(() => {
        async function handleNewPeer({peerId, createOffer}) {
            if (peerId in peerConnections.current) {
                return console.warn(`Already connected to peer ${peerId}`);
            }

            peerConnections.current[peerId] = new RTCPeerConnection({
                iceServers: freeice(),
            });

            peerConnections.current[peerId].onicecandidate = event => {
                if (event.candidate) {
                    socket.emit('RELAY_ICE', {
                        peerId,
                        iceCandidate: event.candidate,
                    });
                }
            }

            let tracksNumber = 0;
            peerConnections.current[peerId].ontrack = ({streams: [remoteStream]}) => {
                tracksNumber++

                if (tracksNumber === 2) { // video & audio tracks received
                    tracksNumber = 0;
                    addNewClient(peerId, () => {
                        if (peerMediaElements.current[peerId]) {
                            peerMediaElements.current[peerId].srcObject = remoteStream;
                        } else {
                            // FIX LONG RENDER IN CASE OF MANY CLIENTS
                            let settled = false;
                            const interval = setInterval(() => {
                                if (peerMediaElements.current[peerId]) {
                                    peerMediaElements.current[peerId].srcObject = remoteStream;
                                    settled = true;
                                }

                                if (settled) {
                                    clearInterval(interval);
                                }
                            }, 1000);
                        }
                    });
                }
            }

            localMediaStream.current.getTracks().forEach(track => {
                peerConnections.current[peerId].addTrack(track, localMediaStream.current);
            });

            if (createOffer) {
                const offer = await peerConnections.current[peerId].createOffer();

                await peerConnections.current[peerId].setLocalDescription(offer);

                socket.emit('RELAY_SDP', {
                    peerId,
                    sessionDescription: offer,
                });
            }
        }

        socket.on('ADD_PEER', handleNewPeer);

        return () => {
            socket.off('ADD_PEER');
        }
    }, []);

    useEffect(() => {
        async function setRemoteMedia({peerId, sessionDescription: remoteDescription}) {
            await peerConnections.current[peerId]?.setRemoteDescription(
                new RTCSessionDescription(remoteDescription)
            );

            if (remoteDescription.type === 'offer') {
                const answer = await peerConnections.current[peerId].createAnswer();

                await peerConnections.current[peerId].setLocalDescription(answer);

                socket.emit('RELAY_SDP', {
                    peerId,
                    sessionDescription: answer,
                });
            }
        }

        socket.on('SESSION_DESCRIPTION', setRemoteMedia)

        return () => {
            socket.off('SESSION_DESCRIPTION');
        }
    }, []);

    useEffect(() => {
        socket.on('ICE_CANDIDATE', ({peerId, iceCandidate}) => {
            peerConnections.current[peerId].addIceCandidate(
                new RTCIceCandidate(iceCandidate)
            );
        });

        return () => {
            socket.off('ICE_CANDIDATE');
        }
    }, []);

    useEffect(() => {
        const handleRemovePeer = ({peerId}) => {
            if (peerConnections.current[peerId]) {
                peerConnections.current[peerId].close();
            }

            delete peerConnections.current[peerId];
            delete peerMediaElements.current[peerId];

            updateClients(list => list.filter(c => c !== peerId));
        };

        socket.on('REMOVE_PEER', handleRemovePeer);

        return () => {
            socket.off('REMOVE_PEER');
        }
    }, []);

    useEffect(() => {
        async function startCapture() {
            localMediaStream.current = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: {
                    width: 1280,
                    height: 720,
                }
            });

            addNewClient(LOCAL_VIDEO, () => {
                const localVideoElement = peerMediaElements.current[LOCAL_VIDEO];

                if (localVideoElement) {
                    localVideoElement.volume = 0;
                    localVideoElement.srcObject = localMediaStream.current;
                }
            });
        }

        startCapture()
            .then(() => socket.emit('JOIN', {room: roomId}))
            .catch(e => console.error('Error getting userMedia:', e));

        return () => {
            localMediaStream.current.getTracks().forEach(track => track.stop());

            socket.emit('LEAVE');
        };
    }, [roomId]);

    const provideMediaRef = useCallback((id, node) => {
        peerMediaElements.current[id] = node;
    }, []);

    return {
        clients,
        provideMediaRef
    };
}