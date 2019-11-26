// @flow

import React from 'react'

const path = (
  <path
    fill="currentColor"
    d="M15.183 15.89l.707-.707a.375.375 0 000-.53L1.347.11a.375.375 0 00-.53 0L.11.817a.375.375 0 000 .53L14.653 15.89a.375.375 0 00.53 0zm-2.498-6.387l2.033-2.033a4.373 4.373 0 000-6.188 4.373 4.373 0 00-6.188 0L6.497 3.315a.375.375 0 000 .53l.708.708a.375.375 0 00.53 0l2.01-2.01a2.625 2.625 0 113.736 3.689l-2.034 2.033a.375.375 0 000 .53l.707.708a.375.375 0 00.53 0zM7.47 14.718l2.033-2.033a.375.375 0 000-.53l-.708-.708a.375.375 0 00-.53 0L6.232 13.48a2.625 2.625 0 01-3.67.041c-1.064-1.018-1.092-2.703-.019-3.777l2.01-2.01a.375.375 0 000-.53l-.707-.707a.375.375 0 00-.53 0L1.281 8.53a4.373 4.373 0 000 6.188 4.373 4.373 0 006.188 0z"
  />
)

export default ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 16" height={size} width={size} {...p}>
    {path}
  </svg>
)