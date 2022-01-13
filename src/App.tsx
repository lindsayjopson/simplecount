import React from 'react';

import VegasBg from './assets/images/vegas.png';
import MovioLogo from './assets/images/movio.svg';
import TimerComp from './components/TimerComp';

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-full">
          <div className="h-full">
            <div className="py-8 h-full flex flex-col justify-between">
              <img className="flex flex-col items-center m-auto w-32 mt-6" alt="movio logo" src={MovioLogo} />
              <div className="flex flex-col items-center absolute top-1/3 w-full">
                  <div className="text-white font-bold text-lg tracking-3xl text-center mb-16 text-2xl">
                    CINEMACON LAUNCH
                  </div>
                <div>
                  <TimerComp />
                </div>
                <img className="flex flex-col items-center m-auto fixed bottom-0 opacity-20" alt="las vegas background" style={{width: '900px'}} src={VegasBg} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
