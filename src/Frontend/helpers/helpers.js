import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

export const generateTime = (timeslot) => {
    const timeslotMap = {
        0: '08:00',
        1: '09:00',
        2: '10:00',
        3: '11:00',
        4: '12:00',
        5: '13:00',
        6: '14:00',
        7: '15:00',
        8: '16:00',
        9: '17:00',
        10: '18:00',
        11: '19:00',
    };
    return timeslotMap[timeslot];
};

export const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};
