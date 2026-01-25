// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <App /> */}
      <p style={{ color: '#ff7b7b', textAlign: 'center', marginTop: '20px' }}>
        Pending developer payment.<br />
        Please pay the remaining amount to unlock access.
      </p>
    </>
  </StrictMode>,
)
