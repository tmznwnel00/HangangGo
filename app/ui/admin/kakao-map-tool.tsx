'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';

export default function KakaoMapTool() {
    const [center, setCenter] = useState(
        { lat: 37.525377, lng: 126.948096 },
    )
    const [position, setPosition] = useState({
        lat: 0, lng: 0
    })
    const [pStack,setPstack] = useState([])

    return (
        <>
            <Map
                center={center}
                className="w-full h-full"
                level={4}
                zoomable={true}
                onCenterChanged={(map) => setCenter({
                    lat: map.getCenter().getLat(),
                    lng: map.getCenter().getLng(),
                })}
                onClick={(_t, mouseEvent) => {
                    setPosition({
                        lat: mouseEvent.latLng.getLat(),
                        lng: mouseEvent.latLng.getLng(),
                    })
                    setPstack([...pStack, {
                        lat: mouseEvent.latLng.getLat(),
                        lng: mouseEvent.latLng.getLng(),
                    }])
                    console.log(pStack)
                }}
            >
                {position && <MapMarker position={position} />}
            </Map>
            <div className='fixed top-0 left-0 z-10'>
                <p>{'중심 좌표는 위도 ' + center.lat + ', 경도 ' + center.lng +' 입니다'}</p>
                <p>{'클릭한 위치의 위도는 ' + position.lat + ' 이고, 경도는 ' + position.lng + ' 입니다'}</p>
                <p>{pStack && pStack.length}</p>
            </div>
        </>
    );
}
