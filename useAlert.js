import React, { useState, useEffect, useMemo, useCallback } from "react";
import { render } from 'react-dom';

export const useAlert = (parentElementID, classes) => {

    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("success");
    const [message, setMessage] = useState({
        text: 'Default Message',
        action: null
    });

    const template = (type, message, visible) => {
        return (
            <div className={classes+ " alert alert-"+type+" alert-dismissible fade show"} id="alert" role="alert" style={visible ? {display:'block'} : {display:'none'}}>
                <div> {message.text} {message.action && <a href={message.action.url} target="_blank">{message.action.text}</a>}</div>
                <button
                    type="button"
                    className="close"
                    onClick={() => {
                        hide();
                    }}>
                    <span aria-hidden="true">&times;</span>
                </button>
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
        render(template(type, message, visible), document.getElementById(parentElementID));
    }, [message])

    const show = useCallback((type, text, action = null) => {
        setType(type);
        setVisible(true);
        setMessage({
            text: text,
            action: action ? {
                text: action.text,
                url: action.url
            } : null
        });
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