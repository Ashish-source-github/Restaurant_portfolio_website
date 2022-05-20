import React from 'react'
import "./style.css"

const UseState = () => {
    const initialState = 10;
    const [myNum, setMyNum] = React.useState(initialState)
    console.log(myNum);

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div class="button2" onClick ={() => setMyNum(myNum+1)} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR ME
                </div>
                <div class="button2" onClick ={() => myNum > 0 ? setMyNum(myNum-1):setMyNum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR ME
                </div>
            </div>
        </>
    )
}

export default UseState
