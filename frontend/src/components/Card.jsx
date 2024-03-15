import React from 'react'

import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CameraIcon } from '@radix-ui/react-icons'
import { useDashboardContext } from '../Pages/Dashboard/DashboardContext';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

export function Dash_Card(props) {
    const { cameraVisibility, toggleCameraVisibility } = useDashboardContext();

    const handleToggleVisibility = () => {
        toggleCameraVisibility(props.slugs)
      };

    return (
        <div className='grid grid-flow-col gap-2 py-2 px-4 hover:bg-gray-6'>
            <div className="p-1 rounded-3xl bg-base-accent aspect-square grid place-items-center">
                <CameraIcon className='scale-150' />
            </div>
            <div>
                <h1>{props.slugs}</h1>
                <Badge className="border-0 px-5 text-md">{props.Area}</Badge>
            </div>
            {/* Use Switch component and handleSwitchClick function */}
            <Switch id="airplane-mode" onClick={handleToggleVisibility} />
        </div>
    )
}
export function Mon_Card(props) {
    return (
        <Link to={`/monitor/${props.slugs}`}>
            <div className='grid grid-flow-col gap-2 py-2 px-4 hover:bg-gray-6'>
                <div className="p-1 rounded-3xl bg-base-accent aspect-square grid place-items-center">
                    <CameraIcon className='scale-150' />
                </div>
                <div>
                    <h1>{props.slugs}</h1>
                    <Badge className="border-0 px-5 text-md">{props.Area}</Badge>
                </div>
            </div>
        </Link>
    )
}
export function Dash_Cam(props) {
    return (
        <div>
            {props.isVisible &&<Link to={`/monitor/${props.slugs}`}>
                <HoverCard>
                    <HoverCardTrigger>
                        <div className='aspect-square bg-gray-6 rounded-xl p-32'>
                            <CameraIcon className='scale-150' />
                        </div>
                        <Badge variant="outline" className="text-md">{props.Area}</Badge>
                        <HoverCardContent>
                            {props.slugs}
                        </HoverCardContent>
                    </HoverCardTrigger>
                </HoverCard>
            </Link>}
        </div>

    )
}

