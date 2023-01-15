import React from 'react'
import { ACTIONS } from './Calculator'

export default function operation({ dispatch, operation }) {
  return (
    <button className='button' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
      {operation}
    </button>
  )
}