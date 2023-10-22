import React from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineCheckCircle, } from "react-icons/ai/";
import {CiWarning } from "react-icons/ci"
import {IoMdNotificationsOutline} from "react-icons/io"
import "./notification.css"


const Notification = () => {
    return(
        <div className="content-conatiner">
            <h1>Notification</h1>
            <div className="notification-container">
            <Button variant="primary" className="button"> <AiOutlineCheckCircle className="icons"/> Information Massage</Button>
            <Button variant="success" className="button"> <AiOutlineCheckCircle className="icons"/> Success Massage</Button>
            <Button variant="warning" className="button"> <IoMdNotificationsOutline className="icons"/> Warning Massage</Button>
            <Button variant="danger" className="button"> <CiWarning className="icons"/> Error Massage</Button>
            </div>
        </div>
    )
}

export default Notification