import React, { useReducer } from 'react';
export function useAuth() {
  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'AUTHORIZED': {
        if (action.payload.remember) {
          localStorage.setItem('authorized', true);
        }
        return {
          authorized: true,
          remember: action.payload.remember,
          errors: null
        }
      }
      case 'ERROR': {
        return {
          authorized: '',
          remember: false,
          errors: action.payload.errors
        }
      }
      default:
        return state
    }
  }, {
    authorized: localStorage.getItem('authorized') ? localStorage.getItem('authorized') : '',
    remember: false,
    errors: null
  })

  return [state.authorized, state.errors, dispatch]
}