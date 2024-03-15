import React from 'react'
import { AspectRatio } from '../../components/ui/aspect-ratio'
import { useDashboardContext } from './DashboardContext';



export default function Home() {
    const { isComponentVisible, toggleComponentVisibility } = useDashboardContext();
    return (
        <div className='grid place-items-center w-96'>
            
            {isComponentVisible&&<div className='aspect-video bg-gray-6 p-52 w-332'>

            </div>}
                   

        </div>
    )
}
