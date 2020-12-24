import Head from 'next/head'

import Navbar from '../components/navbar'
import { element as Logo } from '../public/logo.svg'

import '../styles/globals.css'


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Steven Riggs | {Component.name}</title>
        <link rel='stylesheet' href='https: //fonts.googleapis.com/css2?family=Fugaz+One&display=swap' />
      </Head>

      <Logo />

      {/* <svg viewBox='0 0 100 100' id='svg41'>
 <defs>
   <radialGradient id='body-gradient-2' fx='38' fy='64' r='28' spreadMethod='pad'>
     <stop offset='0%' style={{stopColor: '#f5f0e6', stopOpacity: 1}}/>
     <stop offset='0.62637603' style={{stopColor: '#f3ebdc', stopOpacity: 1}}/>
     <stop offset='100%' style={{stopColor: '#667686', stopOpacity: 1}}/>
   </radialGradient>
   <linearGradient id='bead-gradient'>
     <stop style={{stopColor: 'oldlace'}} offset='0' />
     <stop style={{stopColor: '#657585'}} offset='1' />
   </linearGradient>
   <radialGradient id='body-gradient' fx='38' fy='64' r='28' spread-method='pad'>
     <stop offset='0%' stopColor='floralwhite' />
     <stop offset='0.62637603' stopColor='oldlace' />
     <stop offset='100%' stopColor='slategray' />
   </radialGradient>
   <radialGradient href='#body-gradient' id='chrysalis-gradient-1' cx='35.191082' cy='56.142757' fx='35.191082' fy='56.142757' r='20.917013' gradientTransform='matrix(1.720478,-1.6291252,0.8464316,0.89389554,-72.875402,67.017527)' gradientUnits='userSpaceOnUse'/>
   <radialGradient href='#body-gradient-2' id='chrysalis-gradient-2' cx='35.191082' cy='56.142757' fx='35.191082' fy='56.142757' r='20.917013' gradientTransform='matrix(1.720478,-1.6291252,0.8464316,0.89389554,-72.875402,67.017527)' gradientUnits='userSpaceOnUse'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-32' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-105.05264,-75.030366)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-23' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-103.69838,-74.84981)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-2' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-102.26207,-74.54045)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-24' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-100.75948,-74.208994)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-25' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-99.345264,-73.85544)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-3' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-97.908948,-73.457693)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-4' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-96.538928,-73.059945)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-26' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-95.102618,-72.551712)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-27' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-93.754696,-72.065576)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-28' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-92.42887,-71.358469)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-5' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-91.301919,-70.51878)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-19' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-90.616909,-69.634897)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-29' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-74.309257,-84.837693)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-20' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-75.325725,-83.202508)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-6' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-76.474773,-81.567324)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-7' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-77.590677,-79.932139)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-8' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-78.651337,-78.385344)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-10' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-79.844579,-76.694916)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-11' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-80.938386,-75.081828)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-21' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-82.142676,-73.18148)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-30' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-83.335919,-71.513149)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-12' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-84.507065,-69.701188)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-13' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-85.67821,-67.911324)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-22' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-86.639433,-66.265091)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-14' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-87.777434,-64.574664)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-15' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-88.959628,-62.596975)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-16' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-89.9319,-60.807111)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-31' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-91.025706,-58.663693)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-17' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-92.020075,-56.476081)'/>
   <linearGradient href='#bead-gradient' id='bead-gradient-18' x1='34.851562' y1='24.839844' x2='35.070312' y2='25.054688' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4,0,0,4,-92.28524,-54.66412)'/>
   <filter id='background-turbulence-filter'>
     <feTurbulence baseFrequency='0.05' stitchTiles='stitch' seed='50' result='turbulence-color'/>
     <feBlend in='SourceGraphic' in2='turbulence-color' mode='screen'/>
   </filter>
   <clipPath id='outline-clip-path'>
     <path d='M 50.25 15 Q 38 20 35 25 Q 35.8 28.5 37 30 T 39 35 T 43 45 T 47 55 Q 50 59 55 60 Q 57.5 61 60 60.5 Q 62 61.5 62.5 61.5 T 65 62.5 T 67.5 63.5 T 70 64.5 Q 71 65 72.5 64 Q 74 63 76 65.5 Q 77 65.5 75 58 T 74 48 T 72 28 Q 72 24 69 20 T 66 15 Q 58 14 50.25 15'/>
   </clipPath>
   <filter id='branch-stem-filter'>
     <feTurbulence baseFrequency='0.1' type='fractalNoise' stitchTiles='stitch' seed='50' result='branch-stem-turbulence'/>
     <feDisplacementMap in='SourceGraphic' in2='branch-stem-turbulence' scale='45' xChannelSelector='R' yChannelSelector='B'/>
   </filter>
 </defs>
 <g id='background'>
   <path id='outline-background' stroke='none' strokeWidth='0.5' stroke-linecap='round' stroke-linejoin='round' style={{fillOpacity: 0.5, fill: "url('#chrysalis-gradient-2')"}} d='M 50.25 15 Q 38 20 35 25 Q 35.8 28.5 37 30 T 39 35 T 43 45 T 47 55 Q 50 59 55 60 Q 57.5 61 60 60.5 Q 62 61.5 62.5 61.5 T 65 62.5 T 67.5 63.5 T 70 64.5 Q 71 65 72.5 64 Q 74 63 76 65.5 Q 77 65.5 75 58 T 74 48 T 72 28 Q 72 24 69 20 T 66 15 Q 58 14 50.25 15'/>
   <rect x='0' y='0' width='100' height='100' stroke='none' style={{clipPath: "url('#outline-clip-path')", filter: "url('#background-turbulence-filter')"}}/>
 </g>
 <g id='foreground'>
   <g id='branch-stem' style={{filter: "url('#branch-stem-filter')"}}>
     <path id='branch' stroke='#763013' strokeWidth='3' stroke-linecap='square' fill='none' d='M 40 10 Q 46 11 60 10'/>
     <path id='stem' stroke='#8B4513' stroke-linecap='square' fill='black' d='M 50 11 Q 50.5 15 49.5 15 H 50.5 Q 49.9 15 51 11 Z'/>
   </g>
   <path id='outline' stroke='none' strokeWidth='0.5' stroke-linecap='round' stroke-linejoin='round' style={{fillOpacity: 0.5, fill: "url('#chrysalis-gradient-1')"}} d='M 50.25 15 Q 38 20 35 25 Q 35.8 28.5 37 30 T 39 35 T 43 45 T 47 55 Q 50 59 55 60 Q 57.5 61 60 60.5 Q 62 61.5 62.5 61.5 T 65 62.5 T 67.5 63.5 T 70 64.5 Q 71 65 72.5 64 Q 74 63 76 65.5 Q 77 65.5 75 58 T 74 48 T 72 28 Q 72 24 69 20 T 66 15 Q 58 14 50.25 15'/>
   <g id='beads'>
     <ellipse style={{fill: "url('#bead-gradient-32')", stroke: 'none', strokeWidth: 4}} id='path88' cx='35.017548' cy='25.010122' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-23')", stroke: 'none', strokeWidth: 4}} id='path88-7' cx='36.371803' cy='25.19068' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-2')", stroke: 'none', strokeWidth: 4}} id='path88-6' cx='37.808117' cy='25.500038' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-24')", stroke: 'none', strokeWidth: 4}} id='path88-9' cx='39.310719' cy='25.831493' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-25')", stroke: 'none', strokeWidth: 4}} id='path88-4' cx='40.72493' cy='26.185047' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-3')", stroke: 'none', strokeWidth: 4}} id='path88-2' cx='42.161243' cy='26.582796' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-4')", stroke: 'none', strokeWidth: 4}} id='path88-64' cx='43.531258' cy='26.980543' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-26')", stroke: 'none', strokeWidth: 4}} id='path88-20' cx='44.967571' cy='27.488777' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-27')", stroke: 'none', strokeWidth: 4}} id='path88-1' cx='46.315495' cy='27.974913' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-28')", stroke: 'none', strokeWidth: 4}} id='path88-41' cx='47.641319' cy='28.682018' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-5')", stroke: 'none', strokeWidth: 4}} id='path88-96' cx='48.768272' cy='29.521709' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-19')", stroke: 'none', strokeWidth: 4}} id='path88-71' cx='49.453281' cy='30.40559' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-29')", stroke: 'none', strokeWidth: 4}} id='path88-40' cx='65.760933' cy='15.202796' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-20')", stroke: 'none', strokeWidth: 4}} id='path88-60' cx='64.744469' cy='16.83798' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-6')", stroke: 'none', strokeWidth: 4}} id='path88-3' cx='63.595413' cy='18.473164' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-7')", stroke: 'none', strokeWidth: 4}} id='path88-90' cx='62.479515' cy='20.108349' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-8')", stroke: 'none', strokeWidth: 4}} id='path88-38' cx='61.418854' cy='21.655146' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-10')", stroke: 'none', strokeWidth: 4}} id='path88-710' cx='60.225609' cy='23.345572' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-11')", stroke: 'none', strokeWidth: 4}} id='path88-5' cx='59.131805' cy='24.95866' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-21')", stroke: 'none', strokeWidth: 4}} id='path88-27' cx='57.927513' cy='26.859009' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-30')", stroke: 'none', strokeWidth: 4}} id='path88-63' cx='56.734272' cy='28.52734' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-12')", stroke: 'none', strokeWidth: 4}} id='path88-76' cx='55.563126' cy='30.3393' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-13')", stroke: 'none', strokeWidth: 4}} id='path88-10' cx='54.391979' cy='32.129166' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-22')", stroke: 'none', strokeWidth: 4}} id='path88-909' cx='53.430756' cy='33.775398' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-14')", stroke: 'none', strokeWidth: 4}} id='path88-79' cx='52.292755' cy='35.465824' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-15')", stroke: 'none', strokeWidth: 4}} id='path88-93' cx='51.110561' cy='37.443512' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-16')", stroke: 'none', strokeWidth: 4}} id='path88-49' cx='50.13829' cy='39.233376' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-31')", stroke: 'none', strokeWidth: 4}} id='path88-411' cx='49.044483' cy='41.376797' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-17')", stroke: 'none', strokeWidth: 4}} id='path88-0' cx='48.050114' cy='43.564407' rx='0.40134975' ry='0.34666225'/>
     <ellipse style={{fill: "url('#bead-gradient-18')", stroke: 'none', strokeWidth: 4}} id='path88-55' cx='47.78495' cy='45.376366' rx='0.40134975' ry='0.34666225'/>
   </g>
 </g>
</svg> */}

      {/* <Navbar /> */}
      
      {/* <Component {...pageProps} /> */}
    </>
  )
}

export default App
