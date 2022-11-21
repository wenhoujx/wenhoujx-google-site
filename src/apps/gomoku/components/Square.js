import React from 'react'

export function Square({ value }) {
    return (
        value === 0 ? null :
            (<div
                style={{
                    height: '70%',
                    width: '70%',
                    border: '1px solid',
                    borderRadius: '50%',
                    backgroundColor: value === -1 ? 'black' : 'red',
                }}
            ></div>)
    )
}
