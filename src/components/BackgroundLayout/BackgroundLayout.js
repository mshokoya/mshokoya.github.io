import React from 'react';
import Particles from 'react-particles-js';

export const BackgroundLayout = () => {
  return (
    <div className='background'>
      <Particles params={{
        "particles": {
          "number": {
            "value": 160,
            "density": {
                "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
          },
          "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
          }
        }
      }}
      style={{
        width: '100%',
        height:'100%',
        position: 'fixed',
        top: 0,
        left: 0
      }}
      />
    </div>
  )
}




// particles: {
//   retina_detect: true,
//   number: {
//       value: 50
//   },
//   size: {
//       value: 3
//   }
// },
// interactivity: {
//   events: {
//       onhover: {
//           enable: true,
//           mode: "repulse"
//       }
//   }
// }

// "particles": {
//   "number": {
//       "value": 160,
//       "density": {
//           "enable": false
//       }
//   },
//   "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//           "speed": 4,
//           "size_min": 0.3
//       }
//   },
//   "line_linked": {
//       "enable": false
//   },
//   "move": {
//       "random": true,
//       "speed": 1,
//       "direction": "top",
//       "out_mode": "out"
//   }
// },
// "interactivity": {
//   "events": {
//       "onhover": {
//           "enable": true,
//           "mode": "bubble"
//       },
//       "onclick": {
//           "enable": true,
//           "mode": "repulse"
//       }
//   },
//   "modes": {
//       "bubble": {
//           "distance": 250,
//           "duration": 2,
//           "size": 0,
//           "opacity": 0
//       },
//       "repulse": {
//           "distance": 400,
//           "duration": 4
//       }
//   }
// }