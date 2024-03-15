import React from 'react'
import { AspectRatio } from '../../components/ui/aspect-ratio'
import { useDashboardContext } from './DashboardContext';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../components/ui/hover-card';



export default function Home() {
    const { isComponentVisible, toggleComponentVisibility } = useDashboardContext();
    return (
        <div className='grid grid-cols-3 place-items-center w-[75vw] h-full'>

            {isComponentVisible &&
            <HoverCard>
                <HoverCardTrigger>
                    <div className='aspect-square bg-gray-6 p-52 w-332'>
                    </div>
                    <HoverCardContent>
                        CAM_1
                    </HoverCardContent>
                </HoverCardTrigger>
            </HoverCard>
            }
            {isComponentVisible &&
            <HoverCard>
                <HoverCardTrigger>
                    <div className='aspect-square bg-gray-6 p-52 w-332'>
                    </div>
                    <HoverCardContent>
                        CAM_2
                    </HoverCardContent>
                </HoverCardTrigger>
            </HoverCard>
            }
            {isComponentVisible &&
            <HoverCard>
                <HoverCardTrigger>
                    <div className='aspect-square bg-gray-6 p-52 w-332'>
                    </div>
                    <HoverCardContent>
                        CAM_3
                    </HoverCardContent>
                </HoverCardTrigger>
            </HoverCard>
            }


        </div>
    )
}
