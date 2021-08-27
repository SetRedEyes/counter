import React from 'react'

const Counter = ({ value, id, name, onDelete, onIncrement, onDecrement }) => {
  const formValue = () => {
    return value === 0 ? 'Null' : value
  }

  const getBadgeClasses = () => {
    return `badge m-2 bg-${value === 0 ? 'danger' : 'primary'}`
  }

  return (
    <div>
      <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button onClick={() => onIncrement(id)} className='btn btn-secondary btn-sm'>
        Increment
      </button>
      <button onClick={() => onDecrement(id)} className='btn btn-secondary btn-sm'>
        Decrement
      </button>
      <button className='btn btn-danger btm-sm m-2' onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  )
}

export default Counter
