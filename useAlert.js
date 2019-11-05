import React, { useState, useEffect, useMemo, useCallback } from "react";
import { render } from 'react-dom';

export const useAlert = (parentElementID, classes) => {

    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("success");
    const [message, setMessage] = useState("Default Message");

    const template = (type, message, visible) => {
        return (
            <div className={classes+ " alert alert-"+type+" alert-dismissible fade show"} id="alert" role="alert" style={visible ? {display:'block'} : {display:'none'}}>
            {message}
            </div>
        )
    }

    useEffect(() => {
        render(template(type, message, visible), document.getElementById(parentElementID));

        return () => {
            document.getElementById("alert").remove();
        }
    }, [])

    useEffect(() => {

    }, [type, message])

    const show = useCallback((type, message) => {
        setType(type);
        setMessage(message);
        setVisible(true);
        render(template(type, message, true), document.getElementById(parentElementID));
    })

    const hide = useCallback(() => {
        setVisible(false);
        render(template(type, message, false), document.getElementById(parentElementID));
    })

    const state = {
        visible: visible,
        type: type,
        message: message
    };

    const api = useMemo(
        ()  => ({
            show,
            hide
        }),
        [show, hide]
    )

    return [state, api];
};