<script setup>
import { useRoute } from 'vue-router'
import { useMainStore } from '../store/main'
import { inject } from 'vue'

const getCard = inject('getCard')
const main = useMainStore()
const { hidden } = main

const route = useRoute()

function clickOnObject(event) {
    if (event.srcElement.farthestViewportElement.id == main.goodAnswer) {
        hidden[`isHidden${event.srcElement.farthestViewportElement.id}Good`] = false
        main.pauseGame = true;
        addScore()
        setTimeout(() => getCard(), 2000)
    } else {
        removeScore()
        main.pauseGame = true;
        hidden[`isHidden${event.srcElement.farthestViewportElement.id}Bad`] = false
    }
}

function addScore() {
    const namespace = route.params.id
    const socket = main.socket
    socket.emit("addScore", localStorage.getItem('id'), namespace)
}

function removeScore() {
    const namespace = route.params.id
    const socket = main.socket
    socket.emit("removeScore", localStorage.getItem('id'), namespace)
}
</script>

<template>
    <div class="flex w-full h-1/3 my-8 justify-center gap-5">
        <div class="w-1/8 relative">
            <svg
                class="w-full h-full" :class="{ 'pointer-events-none': main.pauseGame }" @click="clickOnObject"
        version="1.0"
        viewBox="0 0 1055.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
        id="fantome"
        sodipodi:docname="fantome.svg"
        inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
            id="defs14" />
        <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
            id="g8">
            <path
            d="M4798 12789 c-2 -6 -55 -17 -118 -24 -721 -84 -1389 -333 -2015 -750 -462 -308 -773 -610 -1044 -1010 -368 -544 -650 -1278 -891 -2319 -328 -1420 -615 -3562 -694 -5186 -9 -173 -20 -396 -26 -495 -13 -227 -13 -534 0 -701 5 -71 14 -208 20 -304 59 -930 289 -1454 695 -1583 100 -31 266 -30 385 3 127 35 299 128 560 301 370 246 471 294 615 287 67 -2 92 -9 158 -40 83 -40 213 -126 426 -282 232 -171 411 -269 576 -318 68 -20 102 -23 230 -23 132 1 162 4 249 28 130 36 275 98 471 202 444 236 575 292 710 302 42 3 95 1 126 -7 86 -19 243 -101 384 -199 428 -297 578 -384 750 -433 106 -30 352 -33 455 -4 183 50 296 101 620 276 388 210 527 263 685 263 180 1 327 -74 736 -375 338 -248 477 -326 668 -372 130 -32 169 -32 284 0 122 34 197 75 280 154 290 272 422 788 454 1765 3 99 1 270 -6 380 -6 110 -16 286 -22 390 -92 1692 -526 4434 -990 6264 -342 1347 -687 2109 -1174 2596 -155 156 -252 235 -440 360 -671 445 -1583 764 -2385 835 -69 6 -166 15 -217 20 -129 14 -510 13 -515 -1z m692 -449 c468 -47 949 -169 1405 -356 303 -125 704 -344 905 -496 524 -395 850 -987 1186 -2158 285 -992 618 -2655 838 -4180 234 -1624 326 -2879 266 -3638 -56 -709 -219 -1098 -448 -1069 -83 11 -251 105 -457 257 -411 302 -619 423 -820 477 -83 22 -123 26 -235 27 -261 2 -434 -61 -940 -337 -369 -201 -532 -253 -688 -216 -91 21 -265 115 -437 236 -372 261 -472 319 -650 379 -99 33 -123 38 -240 42 -154 5 -261 -14 -420 -73 -93 -34 -163 -69 -618 -304 -276 -144 -418 -180 -561 -147 -127 30 -234 93 -541 316 -276 201 -408 276 -570 321 -111 31 -276 32 -392 1 -179 -48 -311 -118 -668 -355 -404 -269 -519 -299 -645 -169 -65 67 -106 141 -153 277 -92 265 -137 590 -159 1132 -48 1212 189 3637 537 5479 273 1450 574 2350 997 2981 304 456 786 857 1389 1158 385 191 750 312 1146 379 128 21 197 29 443 50 74 6 417 -3 530 -14z"
            id="path2" />
            <path
            d="M6405 10119 c-38 -5 -112 -21 -163 -34 -257 -68 -454 -186 -644 -384 -182 -189 -296 -407 -355 -673 -25 -118 -25 -419 1 -537 99 -455 390 -813 807 -992 303 -131 668 -144 984 -36 326 112 609 358 768 666 111 214 150 377 150 626 1 190 -17 299 -74 462 -156 443 -526 772 -989 879 -120 28 -364 40 -485 23z"
            id="path4" />
            <path
            d="M3405 10064 c-458 -82 -853 -399 -1030 -829 -128 -309 -136 -663 -23 -984 134 -381 449 -695 831 -830 511 -180 1076 -45 1448 346 183 193 299 415 356 683 14 64 18 129 18 265 0 192 -12 271 -62 424 -155 477 -579 842 -1072 925 -117 20 -355 20 -466 0z"
            id="path6" />
        </g>
        <path
            style="fill:#ffffff;stroke-width:2.03903"
            d="m 1264.6953,1637.5248 c -9.2586,-5.0349 -30.8214,-19.1483 -47.9171,-31.3632 -70.7428,-50.5457 -92.8624,-60.5066 -134.0542,-60.368 -36.0627,0.1216 -50.1159,5.0538 -122.34168,42.939 -21.86858,11.471 -47.08683,23.2953 -56.04055,26.2764 -31.17477,10.3794 -45.18257,5.6308 -107.77013,-36.5339 -59.67019,-40.1992 -75.65103,-46.8311 -112.38718,-46.6394 -30.66372,0.1601 -44.59885,4.902 -109.17849,37.1524 -61.98358,30.9539 -68.56185,33.3589 -88.49076,32.3525 -19.39934,-0.9796 -30.22923,-6.5597 -78.50749,-40.451 -40.25602,-28.2598 -57.97163,-38.5025 -75.50644,-43.6561 -12.95857,-3.8086 -42.8346,-4.3162 -56.8393,-0.9658 -16.50153,3.9478 -45.06853,18.6435 -78.89575,40.5862 -40.98691,26.5869 -64.05419,38.6857 -73.75746,38.6857 -44.596804,0 -68.397525,-115.7058 -61.819728,-300.5329 10.486614,-294.6597 68.336298,-680.73648 129.250448,-862.59081 12.67828,-37.84997 22.06563,-61.17319 38.02368,-94.4712 24.93307,-52.02527 46.40398,-83.7372 80.23941,-118.51139 C 386.59878,139.37589 501.5386,81.806518 616.80605,65.114954 737.66727,47.61337 884.79301,81.391162 1006.2605,154.52766 c 29.7684,17.92382 46.968,31.49016 68.9215,54.36258 42.7348,44.52359 75.0033,106.74846 107.3355,206.98004 68.0763,211.03993 145.4374,657.59502 161.3773,931.52432 3.5272,60.6158 1.4389,162.0217 -4.0685,197.5607 -9.9647,64.3021 -26.7943,98.6214 -49.4566,100.8532 -7.5179,0.7403 -11.3589,-0.4989 -25.6744,-8.2837 z M 531.16687,722.91808 c 8.97172,-2.26613 24.77341,-8.28526 35.11486,-13.37582 46.3883,-22.83457 78.18851,-60.48789 95.5413,-113.12649 5.2823,-16.02354 5.71829,-19.79425 5.7762,-49.95619 0.0532,-27.75108 -0.61603,-34.99672 -4.48054,-48.50543 -19.90135,-69.56683 -73.5438,-119.55334 -142.8361,-133.10122 -19.37052,-3.78729 -53.28894,-3.73898 -71.54781,0.10195 -59.59692,12.5366 -111.01222,55.51016 -133.35183,111.45716 -9.70131,24.29586 -12.38865,39.27269 -12.38588,69.02811 0.002,22.11171 0.90684,30.90962 4.59924,44.72235 19.65694,73.53405 76.79414,124.64855 152.84474,136.73377 17.05141,2.70966 52.0402,0.74163 70.72582,-3.9781 z m 392.12381,-6.22698 c 31.62182,-7.55267 57.30977,-22.05387 82.63332,-46.64765 25.4231,-24.69047 42.0533,-52.86945 50.5601,-85.67142 5.773,-22.26032 5.6793,-68.15477 -0.1857,-90.92719 -16.5929,-64.42666 -64.64371,-113.20801 -129.99126,-131.96772 -21.33788,-6.12559 -74.21515,-6.70025 -93.36405,-1.01466 -32.77236,9.73057 -58.31421,24.07945 -80.13514,45.01823 -24.7015,23.70291 -39.49226,47.38757 -50.47573,80.82755 -5.26908,16.04208 -5.70202,19.83522 -5.81851,50.97571 -0.0995,26.59757 0.63446,36.20629 3.50441,45.87814 16.59714,55.93297 45.98737,93.02234 93.68746,118.23007 38.94648,20.58177 84.8008,25.99537 129.58514,15.29894 z"
            id="path260"
            transform="scale(0.75)" />
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-[-15px]" :class="{hidden: hidden.isHiddenfantomeGood}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-[-15px]" :class="{hidden: hidden.isHiddenfantomeBad}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg>
        </div>
        <div class="w-1/8 relative">
            <svg class="w-full h-full" :class="{ 'pointer-events-none': main.pauseGame }" version="1.1" id="canape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                 viewBox="0 0 58 58" xml:space="preserve">
                <g @click="clickOnObject">
                <path style="fill:#DD352E;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                    M53.395,23.545C51.318,19.943,47.434,17.5,43,17.5h-0.541c-1.664-4.615-7.053-8-13.459-8s-11.796,3.385-13.459,8H15
                    c-4.434,0-8.318,2.443-10.395,6.045C4.741,23.557,3.868,25.477,4,25.5v14h50v-13C54.132,26.477,53.259,23.557,53.395,23.545z"/>
                <path style="fill:none;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M27.5,23L27.5,23
                    c-0.828-0.828-0.828-2.172,0-3l0,0c0.828-0.828,2.172-0.828,3,0l0,0c0.828,0.828,0.828,2.172,0,3l0,0
                    C29.672,23.828,28.328,23.828,27.5,23z"/>
                <line style="fill:none;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="32" y1="24.5" x2="30.5" y2="23"/>
                <line style="fill:none;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="32" y1="18.5" x2="30.5" y2="20"/>
                <line style="fill:none;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="26" y1="18.5" x2="27.5" y2="20"/>
                <line style="fill:none;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="26" y1="24.5" x2="27.5" y2="23"/>
                <path style="fill:#B02721;" d="M57.873,26.478C57.427,24.68,55.69,23.5,53.838,23.5h0C51.166,23.5,49,25.666,49,28.338v8.629
                    c0,0.847-0.687,1.533-1.533,1.533H10.533C9.687,38.5,9,37.813,9,36.967v-8.629C9,25.666,6.834,23.5,4.162,23.5h0
                    c-2.014,0-3.836,1.419-4.12,3.413C-0.259,29.029,1.1,30.866,3,31.359v10.226c0,1.61,1.305,2.916,2.916,2.916h46.169
                    c1.61,0,2.916-1.305,2.916-2.916V31.359C57.03,30.833,58.442,28.773,57.873,26.478z"/>
                <polygon style="fill:#9E6C53;" points="9,49.5 6,49.5 6,44.5 11,44.5 "/>
                <polygon style="fill:#9E6C53;" points="49,49.5 52,49.5 52,44.5 47,44.5 "/>
                <path style="fill:#891125;" d="M29,38.5H9v-4l0,0c6.419-2.568,13.581-2.568,20,0l0,0V38.5z"/>
                <path style="fill:#A51627;" d="M49,38.5H29v-4l0,0c6.419-2.568,13.581-2.568,20,0l0,0V38.5z"/>
                <path style="fill:none;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                    M19,21.5c0-2.211-1.789-4-4-4"/>
                <path style="fill:none;stroke:#B02721;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                    M39,21.5c0-2.211,1.789-4,4-4"/>
                <path style="fill:#6C2027;" d="M54.984,31.344H53c-0.553,0-1,0.448-1,1s0.447,1,1,1h1.984V31.344z"/>
                <path style="fill:#6C2027;" d="M3,33.344h1.984c0.553,0,1-0.448,1-1s-0.447-1-1-1H3V33.344z"/>
                </g>     
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-[-15px]" :class="{hidden: hidden.isHiddencanapeGood}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-[-15px]" :class="{hidden: hidden.isHiddencanapeBad}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg>
        </div>
        <div class="w-1/8 relative">
            <svg
            class="w-full h-full" 
            :class="{ 'pointer-events-none': main.pauseGame }"
            viewBox="0 0 113.38582 106.29921"
            id="livre"
            version="1.1">
                <g  @click="clickOnObject"
                    inkscape:groupmode="layer"
                    id="layer2"
                    inkscape:label="Ebene 2"
                    transform="translate(4.4001555,9.8945318)">
                    <path
                    style="fill:#0044aa;fill-rule:evenodd;stroke:#ff0000;stroke-width:0.29055119;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                    d="m 1.1033427,48.094309 c -3.2480748,-5.711071 -3.3867952,-9.55633 -2.625,-13.250001 0.81788567,-3.965634 -0.1741066,-8.072984 7.875,-11 1.324674,-1.538188 3.3506226,-2.876012 6.9999983,-3.75 l 43.81066,-18.9571064 44.564349,33.9571064 -7.625009,4.000001 9.500009,8.25 -4.125002,1.25 4.375002,4.75 -3.375,0.75 4.875,5.5 -2.125,1.125 c 0.79652,0.754565 1.71807,1.473409 0.25,2.875 0.31096,2.315438 -0.78964,3.50162 -2.125,4.5 1.25367,2.294111 0.28994,3.109959 -0.375,4.125 0.20953,0.753473 0.59789,1.495376 -1.125001,3.875 l 5.375001,6.5 -2.125,1.125 -64.625009,0.625 c -1.583609,0.168043 -2.869414,-1.152932 -4.125,-2.625 z"
                    id="path4244"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="cscccccccccccccccccccc" />
                    <path
                    style="fill:url(#linearGradient5758);fill-rule:evenodd;stroke:#ffcc00;stroke-width:0.29055119;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
                    d="m 6.2248407,24.029677 c 0,0 -5.79958308,1.775724 -7.25,10 -0.8071946,4.577022 1.375,13.875001 1.375,13.875001 l 36.7500003,36.5 1.875,-1.25 c 0,0 -4.239233,-7.191518 -4,-11.125 0.51218,-8.421312 7,-12.625 7,-12.625 z"
                    id="path5750"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="cscccscc" />
                    <path
                    style="fill:#f4eed7;fill-rule:evenodd;stroke:#ff6600;stroke-width:0.29055119;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                    d="m 93.974841,39.029677 -50.3125,20.250001 c 0,0 -4.984865,7.984514 -5.3125,12.5 -0.243183,3.351561 2.5625,9.75 2.5625,9.75 l 29.375,0.125 31.124999,0 0.9375,-1.25 -3.062499,-5.1875 c 0.835689,-0.946738 2.177409,-1.296713 1.749999,-2.875 l 0.5625,-4.5625 c 1.38291,-0.751515 1.81974,-2.567372 1.875,-4.8125 0.85786,-0.708333 0.22406,-1.416667 0.1875,-2.125 l 1.875,-1.375 -4.4375,-5.125 2.75,-1.1875 -3.5,-4.250001 3.5,-1.5625 z"
                    id="path5748"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="ccsccccccccccccccc" />
                    <path
                    style="fill:url(#pattern5727);fill-opacity:1;fill-rule:evenodd;stroke:#0000ff;stroke-width:0.29055119;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;opacity:0.296"
                    d="m 6.4783427,24.469308 c 0.8976884,-1.728548 2.3786715,-3.262665 6.2499983,-4 L 56.383671,1.0336482 101.97835,35.219308 70.353341,49.094309 l -28.625,10.625 c 0,0 -6.755231,3.311011 -6.75,11.5 0.0044,6.921614 3.875,13.125 3.875,13.125 -1.548201,-0.497002 -3.100364,-1.000607 -5.625,-3.125 l -32.49999831,-33 c 0,0 -3.25289679,-11.521652 -1.25000002,-16.750001 3.14839643,-8.218554 7.00000003,-7 7.00000003,-7 z"
                    id="path4246"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="ccccccscccsc" />
                    <path
                    style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#786721;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.77165353;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                    d="m 96.013995,39.22965 c -17.728376,7.383301 -35.252204,13.865263 -53.196768,21.169885 0,0 -1.15737,1.204136 -2.418964,3.198298 -1.261594,1.994162 -3.01388,4.983428 -3.035156,9.574219 -0.01832,3.951714 1.109438,6.439971 2.228515,7.765625 0.559538,0.662827 1.058301,0.971447 1.789063,1.25877 1.526681,-0.0021 59.218755,-0.08938 59.218755,-0.08938 0.39688,-0.01757 1.58575,0.479572 2.2793,-0.114698 0.69355,-0.59426 0.60999,-1.360113 0.43359,-2.128907 l -2.45312,-4.359375 c 0.367,-0.434307 0.76091,-0.847297 0.98828,-1.412109 0.25718,-0.638865 0.24235,-1.410548 0.0176,-2.181641 0.52914,-0.632603 0.83351,-1.376913 0.76953,-2.076172 -0.0516,-0.564013 -0.30079,-1.032383 -0.50391,-1.52539 0.7005,-0.319499 1.30869,-0.784728 1.625,-1.47461 0.4222,-0.920816 0.49516,-2.041425 0.41797,-3.30664 0.46109,-0.521738 0.78318,-0.654943 0.80274,-1.21875 0.0217,-0.626142 -0.3794,-0.932822 -0.50196,-1.164063 l 1.61524,-1.027343 c 0.49368,-0.354773 0.46794,-0.70968 0.11328,-1.064454 l -3.79883,-4.287109 1.91797,-0.552734 c 0.59072,-0.130651 0.54468,-0.85957 0.16406,-1.615235 l -3.13476,-3.455078 2.83398,-0.728515 c 0.92719,-0.355578 0.98727,-0.884578 0.32227,-1.558594 -2.84895,-2.438883 -5.966929,-4.899694 -8.493675,-7.626 z m -1.457605,1.261644 c 1.829765,1.669013 4.818258,4.474627 7.52548,6.633883 -0.21969,0.647266 -1.13175,0.80724 -2.568363,1.212891 -9.182961,2.592963 -17.640195,4.76194 -26.763682,6.824219 -6.061729,1.370197 -17.231049,2.714511 -22.723802,3.686006 14.317361,-5.58512 30.251584,-11.435838 44.530367,-18.356999 z m 4.892658,9.210055 2.996102,3.210938 -2.582031,1.130859 c -0.784179,0.343449 -20.256945,3.998117 -30.458997,5.193359 -7.069187,0.828205 -19.008399,1.616412 -23.291015,1.917969 0.357909,-0.242835 2.01435,-1.40821 2.580078,-1.443359 2.092555,-0.295464 16.387511,-2.026983 24.427734,-3.701172 8.314828,-1.731369 23.184414,-5.436288 26.328129,-6.308594 z m 1.095712,5.638672 3.56054,4.013672 -1.04883,0.511718 c -5.973477,0.925552 -13.579371,1.118106 -21.081312,1.422102 -11.524203,0.466987 -31.290534,0.629491 -33.153067,0.439227 5.2945,-0.259408 17.885398,-1.195714 21.966797,-1.673829 9.974769,-1.168492 27.422547,-4.271406 29.755872,-4.71289 z m 2.06836,6.267578 c 0.52105,-0.07236 0.68663,0.316571 0.46289,0.548828 -0.13547,0.358941 -0.38031,0.546283 -0.66993,1.167969 0.10705,1.261269 -0.0101,2.22281 -0.26171,2.771484 -0.25159,0.548659 -0.69661,1.194198 -1.30079,1.253907 -0.60418,0.05971 -16.363496,0.186466 -24.539067,0.398437 -6.860944,0.177886 -20.564637,-0.204 -20.570313,0.287109 -0.0057,0.491103 13.666557,0.497717 20.445313,0.603516 8.037903,0.125451 23.006334,0.02438 24.255867,0.01563 0.22181,0.517778 0.4042,0.999121 0.43555,1.341797 0.0336,0.366438 0.005,1.009704 -0.26563,1.269531 -0.33386,-0.02257 -4.543577,-0.744452 -6.785162,-0.742187 -8.867921,0.009 -18.307575,1.848022 -27.171875,2.101562 -8.589368,0.245676 -25.129861,-1.027233 -25.179688,-0.58789 -0.04983,0.43934 17.183248,1.464456 25.796875,1.513671 8.868465,0.05067 17.7082,-1.780352 26.576172,-1.886718 2.102168,-0.02521 5.910467,0.700952 6.410168,0.755859 0.12847,0.384074 0.091,0.667529 -0.0469,1.009766 -0.17217,0.4277 -0.565022,0.926931 -1.056643,1.457031 -0.505441,0.306181 -0.547581,0.663828 -0.0977,1.076172 l 2.457033,3.871093 c 0.10793,0.717913 0.0207,0.988693 -0.0996,1.091797 -0.13047,0.111789 -0.56676,0.236415 -1.19141,0.267579 L 42.429513,80.670099 c -0.282752,-0.131567 -0.642599,-0.384557 -1.019531,-0.810547 0.40902,0.02641 0.873655,0.04447 1.191406,0.01172 1.244929,-0.128331 3.957078,-0.683548 3.296875,-1.34375 0,0 -2.194187,0.255322 -3.296875,0.279297 -0.486581,0.01058 -1.384226,-0.04796 -1.949219,-0.08789 -0.220882,-0.445023 -0.427191,-0.983446 -0.59375,-1.634766 0.3468,0.04452 0.680224,0.06964 0.994141,0.07031 0.658864,0.0014 2.806697,-0.340445 2.71875,-0.734375 -0.441501,-0.305541 -2.066748,-0.302671 -2.675781,-0.287109 -0.4177,0.01068 -0.836208,-0.03564 -1.253907,-0.121094 -0.119323,-0.764734 -0.194236,-1.63993 -0.189453,-2.671875 0.0071,-1.533242 -0.0335,-3.233838 0.28711,-3.802734 0.585771,-0.215344 0.957663,-0.227518 1.398437,-0.185547 0.918924,0.0875 3.849633,0.01762 3.464844,-0.751953 0,0 -2.276444,-0.07026 -3.13086,-0.08984 -0.390056,-0.0089 -1.086853,-0.250055 -1.416015,-0.279297 0.409697,-1.589771 0.98903,-2.818091 1.638672,-3.685547 0.630589,-0.842017 0.593282,-1.055161 2.15625,-2.271484 6.783043,0.153533 22.352235,0.272983 37.673264,0.01167 7.353159,-0.125415 14.649156,-0.338536 20.889249,-0.677689 z"
                    id="path4175"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="ccsssccsccscscsccccccccccccccssccccsscssccccscsccccssssscccsssssccccccccscsccccscscscccsccsc" />
                    <path
                    style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#504416;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.0629921;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                    d="m 80.835763,75.943537 c -5.391356,0.02679 -16.223334,-0.08729 -16.170898,0.330078 0.05244,0.417369 10.777725,0.754693 16.174805,0.732422 5.539129,-0.02286 16.696994,-0.813089 16.633561,-1.485851 -0.06343,-0.672761 -11.104681,0.395863 -16.637468,0.423351 z"
                    id="path4187"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="szszs" />
                    <path
                    style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#504416;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.0629921;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                    d="m 85.204903,78.73819 c -3.807353,0.176536 -7.374105,0.574913 -10.303194,0.7073 -1.464544,0.06619 -2.967963,0.121569 -3.864774,0.160156 -0.896812,0.03859 -2.482399,0.104744 -2.491428,0.370829 -0.009,0.266085 1.814855,0.463206 2.713127,0.424556 0.898272,-0.03865 2.403733,-0.0478 3.86868,-0.114009 2.929895,-0.132424 6.318852,-0.751725 10.126418,-0.928271 7.61513,-0.35309 15.121948,0.230018 15.107428,1.31e-4 -0.0145,-0.229887 -7.54155,-0.973762 -15.156257,-0.620692 z"
                    id="path4189"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="ssszssszs" />
                    <path
                    style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#504416;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.0629921;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                    d="m 42.594551,64.66131 c 0,0 6.652678,0.732969 10.016321,0.752866 1.23293,0.0073 4.813078,0.197041 4.75707,-0.363807 -0.06848,-0.685738 -3.220827,-0.472608 -4.632846,-0.457678 -3.375364,0.03569 -10.140545,0.06862 -10.140545,0.06862 z"
                    id="path4191"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="csssc" />
                    <path
                    style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#504416;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.0629921;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                    d="m 96.600329,62.86771 c -4.430559,0.136665 -10.318695,0.649982 -16.164024,0.80398 -10.773699,0.283837 -21.306543,0.205928 -21.625932,0.36169 0.151942,0.340002 10.918172,0.563438 21.868533,0.42033 5.765149,-0.07534 11.581337,-0.511277 15.926481,-0.52309 1.654034,-0.0045 4.301803,-0.09726 4.750053,-0.639586 -0.18624,-0.549983 -2.926109,-0.479741 -4.755111,-0.423324 z"
                    id="path4193"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="sscsscs" />
                    <path
                    style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#00112b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.77165353;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                    d="m 56.210876,-0.13374407 c -0.930607,-0.00547 -4.041997,1.40462077 -6.613573,2.48206317 -14.5871,6.111725 -26.280438,13.0456719 -40.4334141,17.9174829 -0.8804572,0.303076 -1.9309128,1.064679 -3.3203118,2.529297 -0.7860732,0.0095 -1.618967,0.243742 -2.5390625,0.732422 -1.6483437,0.875466 -2.84623061,2.431907 -3.65820307,3.871094 -1.27803113,2.265255 -2.34219573,5.577883 -2.27148453,9.980468 0.1213105,7.552963 2.62560680352,11.040831 3.09765629,11.917969 0.4440739,0.825156 33.44450371,33.782851 34.26366971,34.423828 0.741707,0.580366 1.818811,1.148483 2.779297,1.417969 0.730163,0.204864 3.453872,0.269588 3.72461,0.267578 l 63.64063,-0.472656 c 1.8197,-1.282064 0.97288,-3.270673 -0.0332,-4.523438 l -4.14844,-5.166015 -0.59179,0.339843 c 0.62919,1.428005 1.87704,2.629922 2.38086,4.103516 0.21809,0.637897 0.72886,1.308159 0.23828,1.9375 -0.48402,0.620917 -1.03502,0.858833 -2.0195,0.878446 -7.889187,0.157167 -41.603671,0.520442 -60.045425,0.740771 -1.396641,-1.408468 -3.698587,-5.43106 -3.743681,-10.748123 -0.06443,-7.597399 4.988722,-11.381182 5.185547,-11.458984 11.23983,-4.442921 19.065223,-7.559883 30.15625,-11.785157 8.609032,-3.279724 16.222337,-6.759186 26.933596,-11.169922 1.755923,-0.723061 3.197613,-1.18306 3.773903,-2.000726 0.7861,-1.115377 -1.89605,-2.714344 -3.031751,-3.562454 C 90.158272,25.217807 74.338527,12.30795 64.443298,4.9228961 61.390053,2.6441851 60.20194,1.8625821 58.837646,0.69692423 c -0.527077,-0.450337 -1.984592,-0.8268939 -2.62677,-0.8306683 z m 0.335937,2.45703117 c 1.003476,0.03286 1.750226,0.567728 2.09375,0.802734 1.113327,0.761631 0.788675,0.745457 3.882813,3.054688 9.564383,7.1381339 27.492431,20.8231239 37.214743,28.4757179 -9.76065,4.440944 -19.895846,8.600766 -27.644544,11.552734 -10.601297,4.038706 -17.12643,6.626083 -22.953125,8.875 L 14.064279,21.211433 C 28.522565,16.032514 37.970445,9.4906431 50.924271,4.0798271 c 2.217847,-0.926396 5.288051,-1.767493 5.622542,-1.75654 z M 12.181466,21.861824 47.325997,55.800958 c -2.381906,0.933065 -4.05898,1.6464 -5.363281,2.322266 L 7.6400663,24.261067 C 8.3979007,23.412765 9.1766309,23.00583 9.6060676,22.867819 10.30963,22.641712 11.484612,22.095408 12.181466,21.861824 Z M 6.4295146,25.535333 C 17.762512,36.652177 29.073265,47.87446 40.378732,59.049005 c -0.587559,0.392539 -1.103611,0.798495 -1.587891,1.25586 -2.885764,2.725378 -5.247638,7.160818 -5.212891,11.257812 0.03035,3.578899 1.342244,7.961547 3.29944,10.591413 C 35.730492,81.476932 2.7459208,47.634943 2.7459208,47.634943 2.1269985,46.822457 0.31774129,44.1163 0.2088115,37.334161 c -0.063031,-3.924415 0.8891023,-6.703648 1.9082031,-8.546874 0.9168271,-1.658246 2.6252891,-3.329366 4.3125,-3.251954 z"
                    id="path4171"/>
                </g>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-[-15px]" :class="{hidden: hidden.isHiddenlivreGood}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-[-15px]" :class="{hidden: hidden.isHiddenlivreBad}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg>
        </div>
        <div class="w-1/8 relative">
            <svg  viewBox="0 0 209.66 374.06"
                version="1.1" class="w-full h-full ml-5" :class="{ 'pointer-events-none': main.pauseGame }" id="bouteille">
                <g @click="clickOnObject"
                    id="layer1"
                    inkscape:label="Capa 1"
                    inkscape:groupmode="layer"
                    transform="translate(-205.39 -213.12)"
                >
                    <path
                        id="path4334"
                        style="fill:url(#linearGradient4367)"
                        d="m402.06 423.66c-0.10219-0.002-1.1993 0.15683-2.5827 0.3617-0.11184-0.003-0.21913-0.0104-0.33189-0.0129-11.83-0.26581-26.569 1.7538-30.342 6.0456-2.8455 2.2265-3.7714 4.11 1.1724 4.9088l-39.1 40.097c-18.428 4.4966-30.336 5.7826-54.11 18.602-19.831 21.616-47.583 48.34-67.255 70.299-1.3819 0.36677-2.7635 0.73676-4.1275 1.1239 1.1606-0.15256 2.3431-0.3158 3.5215-0.46504-0.48558 0.54423-0.97141 1.1025-1.4465 1.6406 6.5332 7.525 25.676 9.9181 47.727 9.5722 2.6769 0.0432 5.3912 0.0471 8.125 0 19.136-0.32958 39.413-2.9878 57.242-9.5722 0.15406-0.16097 0.29793-0.32935 0.45152-0.49089 0.67254 0.13388 1.3428 0.26397 2.0067 0.40046-0.4735-0.31951-0.97991-0.62281-1.4883-0.93009 21.099-22.193 42.923-49.542 63.244-71.578 0.0639-0.24827 0.13432-0.49331 0.17726-0.73632 0.64475-3.6486-1.0265-6.7154-3.8799-9.5076-0.87394-1.0078-1.9011-1.8391-3.0611-2.5836-0.28253-0.21488-0.56272-0.42023-0.85529-0.63297-2.4028-1.7472-5.1343-3.4361-7.8335-5.1413l34.663-40.097c6.4124-0.79879 8.9523-2.6823 10.203-4.9088 0.47964-0.50623 0.7667-0.99108 0.85015-1.4339 0.0417-0.22141 0.006-0.42743-0.0428-0.63298-0.0244-0.10278-0.0438-0.21121-0.0898-0.31003-0.046-0.0988-0.10919-0.18934-0.1761-0.28419-0.0669-0.0949-0.15151-0.19331-0.23859-0.2842-0.0871-0.0909-0.18706-0.17143-0.29362-0.25835-0.2131-0.17387-0.43732-0.34578-0.7241-0.5038-0.86032-0.47407-2.067-0.8698-3.4887-1.2014-1.8956-0.44209-4.1992-0.76693-6.777-0.95592-0.64444-0.0473-1.3138-0.0848-1.9868-0.11627-0.49507-0.0231-1.0071-0.0371-1.515-0.0516 0.77961-0.13424 1.5537-0.24857 2.364-0.36171z"
                    />
                    <path
                        id="path4603"
                        sodipodi:nodetypes="cccccccccccc"
                        style="stroke:#000000;stroke-width:6.6372;fill:#80d62c"
                        d="m246.7 231.11c-0.79757 5.3861-0.009 9.9592 5.6692 11.892l-2.2124 96.999c-14.292 10.878-25.006 13.997-36.988 45.008 0.0531 54.117-3.3802 121.5-2.5581 175.61 13.455 18.204 34.821 23.998 56.554 23.161 21.733 0.83673 43.1-4.9572 56.554-23.161 0.82217-54.111-2.6112-121.49-2.5581-175.61-5.2629-19.219-18.907-31.808-32.564-45.008l-2.2124-96.999c5.6777-1.9324 6.4668-6.5055 5.6692-11.892 0.224-19.594-45.683-19.543-45.354 0z"
                    />
                    <path
                        id="path4619"
                        sodipodi:nodetypes="cccccccccccccc"
                        style="fill:#ffffff"
                        d="m264.44 219.55c-11.408 0.007-14.168 0.97452-14.004 10.746-0.79757 5.3861-0.009 9.9592 5.6692 11.892l-2.2124 96.999c-14.292 10.878-25.006 13.997-36.988 45.008 0.0531 54.117-3.3802 121.5-2.5581 175.61 4.2046 5.6887 9.1375 10.179 14.657 13.62-0.9905-1.1357-9.1038-7.3267-10.025-8.573-0.85139-56.034 2.6821-124.68 2.6272-180.72 12.408-32.114 20.01-29.898 34.81-41.162l2.9038-99.121c-5.8796-2.0011 3.4267-9.6285 4.2526-15.206-0.10486-6.2358 4.3205-10.599 10.509-12.998-0.34434-0.009-9.2966 3.9108-9.6412 3.911z"
                    />
                    <path
                        id="path4633"
                        sodipodi:nodetypes="cccccccccccc"
                        style="stroke:#000000;stroke-width:6.6372;fill:none"
                        d="m246.7 231.11c-0.79757 5.3861-0.009 9.9592 5.6692 11.892l-2.2124 96.999c-14.292 10.878-25.006 13.997-36.988 45.008 0.0531 54.117-3.3802 121.5-2.5581 175.61 13.455 18.204 34.821 23.998 56.554 23.161 21.733 0.83673 43.1-4.9572 56.554-23.161 0.82217-54.111-2.6112-121.49-2.5581-175.61-5.2629-19.219-18.907-31.808-32.564-45.008l-2.2124-96.999c5.6777-1.9324 6.4668-6.5055 5.6692-11.892 0.224-19.594-45.683-19.543-45.354 0z"
                    />
                    <path
                        id="path4639"
                        style="fill:#000000"
                        d="m284.96 239.85c-5.3803 2.0076-11.56 3.1432-18.126 3.1432-5.7782 0-11.237-0.88157-16.135-2.4621 4.5301 3.7546 10.363 5.9982 16.737 5.9982 6.7511 0 12.892-2.5179 17.523-6.6792z"
                    />
                    <path
                        id="path4641"
                        sodipodi:nodetypes="cccc"
                        style="fill:#4e9a06"
                        d="m251.92 229.38 11.21 2.2988 2.437-10.364s-15.841 2.7724-13.647 8.0653z"
                    />
                    <path
                        id="path4637"
                        style="fill:#000000"
                        d="m284.4 228.23c-5.3803 2.0076-11.56 3.1432-18.126 3.1432-5.7782 0-11.237-0.88157-16.135-2.4621 4.5301 3.7546 10.363 5.9982 16.737 5.9982 6.7511 0 12.892-2.5179 17.523-6.6792z"
                    />
                    <path
                        id="path4624"
                        sodipodi:nodetypes="ccccccccccc"
                        style="fill:#4e9a06"
                        d="m288.51 231.08c1.9709 6.9505 0.79104 10.155-4.8871 12.087l1.8213 97.586c14.292 10.878 23.246 13.215 35.228 44.226-0.0531 54.117 3.3802 121.5 2.5581 175.61-4.2046 5.6887-27.327 22.426-47.318 19.218 26.288-6.6736 12.997-151.85 10.966-194.54 0.10663-28.985-3.9467-36.898-10.143-41.514l-2.3507-99.674c5.8796-2.0011 4.356-7.1199 3.5301-12.698 4.8957-1.6598 11.432-10.074 10.594-0.29619z"
                    />
                    <path
                        id="path4643"
                        sodipodi:nodetypes="cccc"
                        style="fill:#ffffff"
                        d="m284.33 229.18s-4.8496 1.1926-11.21 2.2988c0 0 7.2422-7.5986-2.437-10.364 0 0 15.841 2.7724 13.647 8.0653z"
                    />
                    <path
                        id="path3731"
                        style="opacity:.36466;fill:#ffffff"
                        d="m248.62 575.01c-9.3999-1.7554-17.194-5.0878-22.818-9.7559l-3.3324-2.7661 0.14226-4.5417 0.14226-4.5417 4.59-1.3472c5.959-1.7491 14.412-3.6343 21.276-4.7449 8.3547-1.3519 28.156-1.1927 36.312 0.29179 8.1207 1.4782 14.759 3.1731 22.011 5.6195 5.739 1.9361 6.0934 2.1322 6.0934 3.3714 0 0.93865-0.87425 2.2147-3.0506 4.4527-7.4485 7.6594-16.536 12.145-28.747 14.19-6.9278 1.1603-25.893 1.0276-32.618-0.22821z"
                    />
                    <path
                        id="path2943"
                        sodipodi:nodetypes="cscsc"
                        style="opacity:.27068;fill:#000000"
                        d="m326.11 560.42c-18.631-7.7928-39.005-13.926-61.74-13.926-20.009 0-39.939 5.1473-56.899 11.283 15.687-14.574 35.887-23.283 57.959-23.283 23.378 0 44.643 9.7736 60.68 25.926z"
                    />
                    <path
                        id="path3733"
                        style="opacity:.25188;fill:#ffffff"
                        d="m255.2 344.51s33.634 7.0398 33.634 0 30.506 34.417 27.377 37.546c-3.1288 3.1288-75.873 24.248-93.081 2.3466-17.208-21.902 34.417-39.11 32.07-39.892z"
                    />
                    <path
                        id="path4635"
                        sodipodi:nodetypes="cscsc"
                        style="fill:#000000"
                        d="m284.4 343.28c-5.3803 2.0076-11.56 3.1432-18.126 3.1432-5.7782 0-11.237-0.88157-16.135-2.4622 4.5301 3.7546 10.363 7.5626 16.737 7.5626 6.7511 0 12.892-4.0823 17.523-8.2436z"
                    />
                    <path
                        id="path4626"
                        sodipodi:nodetypes="cscsc"
                        style="fill:#000000"
                        d="m313.2 382.39c-14.201 5.2991-29.731 9.4698-47.061 9.4698-15.252 0-30.443-3.5002-43.371-7.6722 11.957 9.9105 27.355 15.832 44.179 15.832 17.82 0 34.029-6.646 46.253-17.63z"
                    />
                </g>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-0" :class="{hidden: hidden.isHiddenbouteilleGood}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-0" :class="{hidden: hidden.isHiddenbouteilleBad}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg>
        </div>
        <div class="w-1/8 relative">
            <svg class="w-full h-full" :class="{ 'pointer-events-none': main.pauseGame }" viewBox="0 0 330.48 325.95" xmlns="http://www.w3.org/2000/svg" id="souris">
                <g @click="clickOnObject">
                    <g fill-rule="evenodd" stroke-width="4">
                    <path d="m227.13 51.998c-1.8886-23.292-78.061-85.615-144.79-22.663s-72.395 33.365-78.69 34.624c-6.2952 1.259 6.2658 14.893 23.922 12.59 43.437-5.6657 72.395-59.804 112.68-59.175 40.598 0.63434 62.323 35.883 62.323 35.883l24.551-1.259z" fill="#7f7f7f" stroke="#000"/>
                    <path d="m140.19 11.188c-18.054 0.20866-37.59 7.3197-56.281 26.062-17.21 17.257-29.88 27.168-39.344 32.625v1.9375c34.528-14.648 60.886-54.981 95.688-54.438 40.598 0.63434 62.312 35.875 62.312 35.875l9.4375-0.4688c-7.2834-16.49-36.785-41.999-71.812-41.594z" fill-opacity=".314"/>
                    </g>
                    <g stroke-linecap="round">
                    <g stroke-width="4">
                    <path d="m317.15 151.46c0 56.989-61.818 161.79-103.24 161.79-42.585 0-103.24-104.8-103.24-161.79 0-56.989 46.252-103.24 103.24-103.24 56.989 0 103.24 46.252 103.24 103.24z" fill="#7f7f7f" stroke="#000"/>
                    <path d="m315.76 134.61c0.24832 2.9188 0.375 5.861 0.375 8.8438 0 56.989-61.795 161.81-103.22 161.81-38.84-3.1e-5 -92.731-87.18-101.91-145.75 5.111 58.247 62.258 153.75 102.91 153.75 41.424 0 103.22-104.82 103.22-161.81 0-5.7389-0.47321-11.359-1.375-16.844z" fill-opacity=".314"/>
                    <g fill="#7f7f7f" stroke="#000">
                        <path d="m285.67 233.04c24.03-2.3646 42.812-22.633 42.812-47.281 0-26.236-21.295-47.531-47.531-47.531s-47.531 21.295-47.531 47.531c0 1.844 0.10779 3.6793 0.3125 5.4688"/>
                        <path d="m190.85 191.76c0.24701-1.9618 0.375-3.9715 0.375-6 0-26.236-21.264-47.531-47.5-47.531s-47.531 21.295-47.531 47.531c0 25.256 19.714 45.929 44.594 47.438"/>
                    </g>
                    </g>
                    <g stroke-width="2">
                    <path d="m225.32 291.6c0 6.1272-7.3345 13.462-11.1 13.462-4.2378 0-11.1-7.3345-11.1-13.462 0-6.1272 4.9728-5.4319 11.1-5.4319s11.1-0.69528 11.1 5.4319z"/>
                    <g stroke="#000">
                        <path d="m191.87 250.61c0.001907 5.7384-3.5217 10.392-7.869 10.392s-7.8709-4.6533-7.869-10.392c-0.001907-5.7384 3.5217-10.392 7.869-10.392s7.8709 4.6532 7.869 10.392z"/>
                        <path d="m248.53 250.61c0.001907 5.7384-3.5217 10.392-7.869 10.392s-7.8709-4.6533-7.869-10.392c-0.001907-5.7384 3.5217-10.392 7.869-10.392s7.8709 4.6532 7.869 10.392z"/>
                    </g>
                    <g fill="#fff">
                        <path d="m187.15 248.2c8.09e-4 1.9699-0.98589 3.5675-2.2033 3.5675s-2.2042-1.5976-2.2033-3.5675c-8.09e-4 -1.9699 0.98589-3.5675 2.2033-3.5675s2.2041 1.5976 2.2033 3.5675z"/>
                        <path d="m242.24 249.14c8.09e-4 1.9699-0.98589 3.5675-2.2033 3.5675s-2.2042-1.5976-2.2033-3.5675c-8.09e-4 -1.9698 0.98589-3.5675 2.2033-3.5675s2.2041 1.5976 2.2033 3.5675z"/>
                    </g>
                    <path d="m281.07 144.98c-17.83 0.25116-34.358 14.095-38.625 31.25 8.3807-5.5132 18.898-8.8125 30.312-8.8125 22.94-1.5e-5 42.241 13.271 47.875 31.25 8.9722-23.957-11.562-53.861-37.5-53.656-0.69022-0.031281-1.3755-0.040924-2.0625-0.03125z" fill-opacity=".314"/>
                    </g>
                    <g fill="none" stroke="#000" stroke-width="2.86">
                    <g transform="matrix(1.3917 0 0 1.4058 -239.25 -659.88)">
                        <path d="m340.57 672.76c32.735-15.108 47.844-1.259 47.844-1.259"/>
                        <path d="m337.42 678.43c23.922-15.108 44.696 9.4428 44.696 9.4428"/>
                        <path d="m337.42 681.57c25.181-12.59 29.588 18.256 29.588 18.256"/>
                    </g>
                    <g transform="matrix(-1.3917 0 0 1.4058 667.06 -659.88)">
                        <path d="m340.57 672.76c32.735-15.108 47.844-1.259 47.844-1.259"/>
                        <path d="m337.42 678.43c23.922-15.108 44.696 9.4428 44.696 9.4428"/>
                        <path d="m337.42 681.57c25.181-12.59 29.588 18.256 29.588 18.256"/>
                    </g>
                    </g>
                    <path d="m145.56 144.98c17.83 0.25116 34.358 14.095 38.625 31.25-8.3807-5.5132-18.898-8.8125-30.312-8.8125-22.94-1.5e-5 -42.241 13.271-47.875 31.25-8.9722-23.957 11.562-53.861 37.5-53.656 0.69023-0.031281 1.3755-0.040924 2.0625-0.03125z" fill-opacity=".314" stroke-width="2"/>
                    </g>
                </g>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-0" :class="{hidden: hidden.isHiddensourisGood}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <svg version="1.1" class="h-10 absolute top-0 right-0" :class="{hidden: hidden.isHiddensourisBad}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
                <line class="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg>
        </div>
    </div>
</template>


<style scoped>
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
}
.circle {
    -webkit-animation: dash .9s ease-in-out;
    animation: dash .9s ease-in-out;
  }
.line {
    stroke-dashoffset: 1000;
    -webkit-animation: dash .9s .35s ease-in-out forwards;
    animation: dash .9s .35s ease-in-out forwards;
  }
.check {
    stroke-dashoffset: -100;
    -webkit-animation: dash-check .9s .35s ease-in-out forwards;
    animation: dash-check .9s .35s ease-in-out forwards;
  }


@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}

@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}

</style>