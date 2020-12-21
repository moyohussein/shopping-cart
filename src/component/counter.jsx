import React from 'react';

const Counter = props => {

    const formatCount = () => props.counter.value === 0 ? 'zero' : props.counter.value;

    let classes = 'badge p-2 badge-';
    classes+= props.counter.value === 0 ? 'warning' : 'primary';

    return (  
        <div className='row m-2'>
            <div className='col-md-1 align-self-center'>
                <span className={classes} >{formatCount()}</span>
            </div>
            <div className='col-md-2 d-flex justify-content-center'>
                <button className='btn btn-secondary btn m-2' onClick={() => props.onIncrement(props.counter)} >+</button>
                <button className='btn btn-secondary btn m-2' disabled={props.counter.value === 0 && true } onClick={() => props.onDecrement(props.counter)} >-</button>
                <button className='btn btn-danger btn m-1' onClick={() => props.onDelete(props.counter.id)} >Delete</button>
    <span className='badge' >₦{props.counter.price * props.counter.value}</span>
            </div>
        </div>
    );
}
 
export default Counter;