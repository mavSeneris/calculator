import React, { useReducer } from 'react'
import DigitButton from './DigitButton'
// import Operation from './Operation'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  CLEAR: 'clear',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === 0 && state.currentOperand === 0) return state
      if (payload.digit === '.' && state.currentOperand.includes('.')) return state
      return {
        ...state, currentOperand: `${state.currentOperand || ''} ${payload.digit}`
      }
    case ACTIONS.CHOOSE_OPERATION:
      return {

      }
    case ACTIONS.CLEAR:
      return {}
  }
}


export default function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})


  return (
    <div className='calculator'>
      <div className='container'>
        <div className='output'>
          <div className='previous-operand'>{previousOperand} {operation}</div>
          <div className='current-operand'>{currentOperand}</div>
        </div>
        <div className='buttons'>
          <button className='button' onClick={()=> dispatch({type: ACTIONS.CLEAR})}>AC</button>
          <button className='button'>()</button>
          <button className='button'>%</button>
          <button className='button'>/</button>
          {/* <Operation dispatch={dispatch} operation={'/'}/> */}
          <DigitButton dispatch={dispatch} digit={7} />
          <DigitButton dispatch={dispatch} digit={8} />
          <DigitButton dispatch={dispatch} digit={9} />
          <button className='button'>x</button>
          <DigitButton dispatch={dispatch} digit={4} />
          <DigitButton dispatch={dispatch} digit={5} />
          <DigitButton dispatch={dispatch} digit={6} />
          <button className='button'>-</button>
          <DigitButton dispatch={dispatch} digit={1} />
          <DigitButton dispatch={dispatch} digit={2} />
          <DigitButton dispatch={dispatch} digit={3} />
          <button className='button'>+</button>
          <button className='button'>+/-</button>
          <DigitButton dispatch={dispatch} digit={0} />
          <DigitButton dispatch={dispatch} digit={'.'} />
          <button className='button'>=</button>
        </div>
      </div>
    </div>
  )
}
