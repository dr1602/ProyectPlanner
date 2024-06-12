import React from 'react';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ sincronize }) {
    
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    width: '100vw',
                    height: '100vh',
                    zIndex: '3',
                    background: 'rgb(0,0,0,0.3)',
                }}
            >
            
                <div 
                    style={{
                        position:'absolute',
                        width: '100vw',
                        height: '12vh',
                        bottom: '6vh',
                        background: 'green',
                        color: 'white',
                        textAlign: 'center',
                    }
                }>
                    <p
                        style={{
                            transform: 'translateY(-0.6vh)'
                        }}
                    > 
                        Hubo cambios. 
                    </p>
                    <button
                        style={{
                            transform: 'translateY(-2.1vh)',
                            width: '24vw',
                            height: '4.5vh',
                            borderRadius: '9px',
                            borderWidth: '0px',
                            fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                        }}
                        onClick={() => toggleShow(false)}
                    > 
                        Recargar informacion 
                    </button>
                </div>

            </div>
        )
    } else {
        return null;
    }
    
}

export { ChangeAlert };