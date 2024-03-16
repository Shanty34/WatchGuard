import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster, toast } from 'sonner';

function Toast(props) {
    const handleReportClick = () => {
        window.location.href = `/monitor/${props.slugs}`
        toast.dismissAll(); // Dismiss the toast after clicking the button
    };
    return (
        <div><button
            onClick={() =>
                toast("Alert!", {
                    description: props.message,
                    icon: '⚠️',
                    // Action button to report
                    action: {
                        label: "Report",
                        onClick: handleReportClick,
                    },
                })
            }
        >Toast</button>
            <Toaster/></div>
    )
}

export default Toast