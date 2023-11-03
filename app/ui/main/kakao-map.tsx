import React from 'react';
import { Map, Polygon, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { getSectionsInformation, getMapInformation } from '@/app/lib/data';
import SingleMarker from '@/app/ui/main/single-marker';

export default async function KakaoMap() {
    const center = { lat: 37.538662451247546, lng: 127.02656148941806 }
    // const mapInfo = await getMapInformation();
    const sections = await getSectionsInformation();
    const species = (await (await fetch("http://27.119.34.53:8080/api/maps")).json()).species

    return (
        <>
            <Map
                center={center}
                className="w-full h-full"
                level={6}
                zoomable={true}
            >
                {sections.map((section:any,i:number)=>{
                    return(
                        <Polygon
                            key={i}
                            path={section.points}
                            strokeWeight={3}
                            strokeColor={section.strokeColor}
                            strokeOpacity={0.8}
                            strokeStyle={"longdash"}
                            fillColor={section.fillColor}
                            fillOpacity={0.4}
                        />
                    )
                })}
                {species.map((life:any, i:number)=>{
                    return(
                        <CustomOverlayMap
                            key={i}
                            position={{lat:life.lat, lng:life.lng}}
                        >
                            <SingleMarker
                                imgLink={life.imgLink}
                                name={life.speciesName}
                                remark={life.remark}
                            />
                        </CustomOverlayMap>
                    )
                })}
            </Map>
        </>
    );
}
