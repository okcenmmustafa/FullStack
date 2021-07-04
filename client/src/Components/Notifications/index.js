import {  notification } from 'antd';
import React,{useEffect} from 'react';
const openNotificationWithIcon = (type,coins) => {
  notification[type]({
    message: 'Coin Earned',
    description:
      `${coins} coins Earned`,
  });
};

// Notification for Question 4

const Notifications=(props)=>{
    useEffect(() => {
        if(!!props.awardCoins)
        openNotificationWithIcon('success',props.awardCoins) 
    }, [props.awardCoins])
    return ""
}

export default Notifications