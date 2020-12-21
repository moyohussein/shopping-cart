import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {

  const [count, setCount] = useState({
    counters : [
      {id: 1, value: 0, price: 320},
      {id: 2, value: 0, price: 500},
      {id: 3, value: 0, price: 250},
      {id: 4, value: 0, price: 310},
      {id: 5, value: 0, price: 400}
    ]
  });

  

  const increment = counter => {
    const counters = [...count.counters];
    const index = count.counters.indexOf(counter);
    count.counters[index] = {...counter[index]};
    counters[index].value++;
    setCount({counters});
  };
  
  const decrement = counter => {
    const counters = [...count.counters];
    const index = count.counters.indexOf(counter);
    count.counters[index] = {...counter[index]};
    counters[index].value--;
    setCount({counters});
  };

  const deleteCount = counter => {
    const counters = count.counters.filter(item => item.id !== counter);
    setCount({counters});
  };

  const handleReset = () => {
    window.location.reload();
  }

  return (  
    <div>
      <div>
        <h3>Total items in cart: {count.counters.filter(item => item.value > 0).length} </h3>
        <p>Total price of item in cart: <strong>₦{count.counters.reduce((sum, i) => (sum += i.value * i.price), 0)}</strong> </p>
        <button className='btn btn-primary' onClick={handleReset} >reset</button>
      </div>
      {count.counters.map(counter => (
        <Counter 
          key={counter.id + '24'}
          counter={counter}
          onIncrement={increment}
          onDecrement={decrement}
          onDelete={deleteCount}
        />
      ))}
    </div>
  );
}
 
export default Counters;