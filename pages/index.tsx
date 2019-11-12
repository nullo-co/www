import React from 'react'

function Home() {
  return (
    <div>
      <svg width="100" height="100" viewBox="0 0 500 500">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <rect fill="#5333FF" x="0" y="0" width="500" height="500" rx="100"></rect>
            <path
              d="M133.856003,155.068801 L344.931199,366.143997 C319.073108,387.304448 286.019156,400 250,400 C167.157288,400 100,332.842712 100,250 C100,213.980844 112.695552,180.926892 133.856003,155.068801 Z M356.128488,356.00351 C356.086853,356.045194 356.045194,356.086853 356.00351,356.128488 Z M250,100 C332.842712,100 400,167.157288 400,250 C400,286.019156 387.304448,319.073108 366.143997,344.931199 L155.068801,133.856003 C180.926892,112.695552 213.980844,100 250,100 Z M143.871512,143.99649 L143.933983,143.933983 C143.913153,143.954812 143.89233,143.975648 143.871512,143.99649 Z"
              fill="#FFFFFF"
            ></path>
          </g>
        </g>
      </svg>

      <style jsx={true}>{`
        div {
          display: flex;
          align-items: center;
          text-align: center;
          width: 100%;
          height: 100vh;
        }

        svg {
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  )
}

export default Home
