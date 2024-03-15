import React from 'react'

import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CameraIcon } from '@radix-ui/react-icons'
import { useDashboardContext } from '../Pages/Dashboard/DashboardContext';

export function Dash_Card() {
    const { isComponentVisible, toggleComponentVisibility } = useDashboardContext();
    return (
        <div className='grid grid-flow-col gap-2 py-2 px-4 hover:bg-gray-6'>
            <div className="p-1 rounded-3xl bg-base-accent aspect-square grid place-items-center">
                <CameraIcon className='scale-150'/>
            </div>
            <div>
                <h1>CAM_1</h1>
                <Badge className="border-0 px-5 text-md">Area_Name</Badge>
            </div>
            <Switch id="airplane-mode" onClick={toggleComponentVisibility}/>
        </div>
    )
}
export function Mon_Card() {
    return (
        <div className='grid grid-flow-col gap-2 py-2 px-4 hover:bg-gray-6'>
        <div className="p-1 rounded-3xl bg-base-accent aspect-square grid place-items-center">
            <CameraIcon className='scale-150'/>
        </div>
        <div>
            <h1>CAM_1</h1>
            <Badge className="border-0 px-5 text-md">Area_Name</Badge>
        </div>
    </div>
    )
}

