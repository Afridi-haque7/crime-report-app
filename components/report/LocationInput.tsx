import Radar from "radar-sdk-js";
import "radar-sdk-js/dist/radar.css";
import { useState } from "react";


interface LocationProps {
    value: string;
    onChange: (value: string) => void;
    onCoordinateChange?: (lat: number|null, lng: number|null) => void;
}


export function LocationInput ({
    value, onChange,onCoordinateChange,
}: LocationProps) {
    const [isGettingLocation, setIsGettingLocation] = useState(false);
    const [locationError, setLocationError] = useState<string | null>(null);

    

}