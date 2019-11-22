import React, { useState, useEffect, useMemo, useCallback } from "react";
import { render } from 'react-dom';

import { Alert, Button } from './styles';

export const useAlert = (parentElementID, classes = "") => {

    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("success");
    const [message, setMessage] = useState({
        text: 'Default Message',
        action: null
    });

    const my_template = (type, message, visible) => {
        return (
            <Alert type={type} visible={visible} className={classes ? `${classes}` : ''}>
                <div> 
                    {message.text} 
                    {message.action && <a href={message.action.url} target="_blank" rel="noopener noreferrer">
                        {message.action.text}
                    </a>}
                </div>
                <Button 
                    onClick={() => {
                        hide();
                    }}>
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Alert>
        )
    }

    useEffect(() => {
        render(my_template(type, message, visible), document.getElementById(parentElementID));
        return () => {
            document.getElementById(parentElementID).remove();
        }
    }, [])

    useEffect(() => {
        render(my_template(type, message, visible), document.getElementById(parentElementID));
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
        render(my_template(type, message, false), document.getElementById(parentElementID));
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