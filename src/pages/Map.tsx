import dynamic from "next/dynamic";

const DynamicMap = dynamic(()=> import ("../components/MapView") , { ssr:false, } );


export default function MapView(){
    return <DynamicMap/>;
}