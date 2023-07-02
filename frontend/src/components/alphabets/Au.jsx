import React, { useState } from "react";
import "./a.css";

export default function Au() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="mainContainer">
      <div className="contain">
        <div className="char">
          <div className="back">
          <svg
              height="1000"
              width="1000"
              sodipodi:docname="auu.svg"
              version="1.1"
              id="svg340"
              viewBox="0 0 1000 1000"
              inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
            >
              <sodipodi:namedview
                id="base"
                pagecolor="#ffffff"
                bordercolor="#000000"
                borderopacity="0.3"
                inkscape:pageopacity="0.0"
                inkscape:pageshadow="2"
                inkscape:zoom="0.5"
                inkscape:cx="355"
                inkscape:cy="450"
                inkscape:document-units="px"
                inkscape:current-layer="layer1"
                showgrid="false"
                showguides="true"
                inkscape:window-width="1360"
                inkscape:window-height="736"
                inkscape:window-x="0"
                inkscape:window-y="0"
                inkscape:window-maximized="1"
                showborder="true"
                inkscape:showpageshadow="false"
                inkscape:pagecheckerboard="0"
                inkscape:deskcolor="#d1d1d1"
              >
                <sodipodi:guide
                  id="guide_baseline"
                  inkscape:label="baseline"
                  position="0,253"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_ascender"
                  inkscape:label="ascender"
                  position="0,945"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_caps"
                  inkscape:label="caps"
                  position="0,896"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_xheight"
                  inkscape:label="xheight"
                  position="0,729"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_descender"
                  inkscape:label="descender"
                  position="0,28"
                  orientation="0,1"
                  inkscape:locked="false"
                />
              </sodipodi:namedview>
                <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1538">
                
                    <path
                      d="M 0.5770815,94.506264 V 3.8851721 H 801.0634 V 94.506264 H 625.86262 V 355.79708 H 263.37825 q -24.16563,0 -42.28984,12.08281 -18.12422,12.08282 -18.12422,28.69668 0,31.71738 63.43476,96.6625 64.94512,63.43477 98.17285,63.43477 33.22774,0 99.6832,-24.16563 66.45547,-25.67598 101.19356,-25.67598 57.39336,0 98.17285,51.35196 42.28984,49.8416 42.28984,119.31777 0,125.35918 -77.02793,214.46992 -75.51758,87.60039 -184.26289,87.60039 37.75879,54.37263 101.19356,102.70393 63.43476,48.3312 149.5248,89.1107 l -49.8416,80.0486 q -108.74531,-61.9244 -190.3043,-131.4005 -81.55898,-69.4762 -131.40058,-140.46273 -101.19355,0 -172.18007,-37.75879 -69.476175,-39.26914 -69.476175,-93.6418 0,-40.77949 28.696675,-69.47617 30.20703,-30.20703 72.49688,-30.20703 57.39336,0 113.27636,40.77949 57.39336,39.26914 98.17285,110.25566 86.09004,0 148.01445,-64.94511 61.92442,-66.45547 61.92442,-157.07656 0,-27.18633 -12.08282,-48.33125 -10.57246,-21.14492 -27.18632,-21.14492 -34.73809,0 -101.19356,25.67597 -66.45546,24.16563 -99.6832,24.16563 -64.94511,0 -164.62832,-98.17285 -99.6832,-99.6832 -99.6832,-163.11797 0,-58.90371 48.33125,-99.6832 48.33125,-40.77949 116.29707,-40.77949 H 515.60696 V 94.506264 Z"
                      id="path1540"
                    />
                </clipPath>
                <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1587">

                    <path
                      d="m 556.94707,1441.1858 q -92.24799,-53.27 -162.40844,-113.0363 -70.16044,-59.7663 -114.33554,-120.8319 -85.75166,0 -146.81723,-32.4817 -59.766306,-33.7809 -59.766306,-80.5545 0,-35.0803 24.686083,-59.7664 24.686083,-25.9853 61.065573,-25.9853 50.67143,0 98.74433,35.0802 48.0729,33.781 83.15312,94.8465 77.95606,0 133.82456,-55.8685 55.8685,-57.1677 55.8685,-135.12378 0,-23.38681 -12.99267,-41.57656 -11.69341,-18.18974 -29.88315,-18.18974 -20.78828,0 -40.2773,3.8978 -18.18974,3.8978 -37.67876,12.99267 -27.28461,11.69341 -51.9707,19.48902 -23.38681,6.49633 -42.87583,6.49633 -57.16777,0 -145.51796,-84.45239 -88.350191,-85.75165 -88.350191,-140.32089 0,-50.67143 42.875831,-85.75166 44.17509,-35.08022 103.9414,-35.08022 H 454.30494 V 445.94686 H 0.86057186 V 367.9908 H 434.81593 q -45.47437,-38.97802 -70.16045,-84.45239 -23.38682,-45.47436 -23.38682,-88.35019 0,-79.25532 59.76631,-133.824554 61.06558,-55.8685038 148.1165,-55.8685038 23.38682,0 46.77363,3.8978026 23.38682,3.8978022 48.0729,12.9926752 v 77.95605 q -36.37949,-14.291941 -59.76631,-19.489011 -23.38681,-6.496338 -35.08022,-6.496338 -50.67143,0 -85.75166,35.080219 -35.08022,35.08023 -35.08022,85.75166 0,48.0729 28.58389,94.84653 28.58388,45.47436 77.95605,77.95605 h 162.40844 v 77.95606 H 540.0566 V 670.72014 H 228.23239 q -20.78828,0 -36.37949,10.39414 -14.29194,10.39414 -14.29194,24.68608 0,27.28462 54.56923,83.15312 55.86851,54.56924 83.15312,54.56924 14.29195,0 35.08023,-5.19707 22.08755,-6.49634 51.9707,-16.89048 25.98535,-10.39414 48.0729,-15.59121 22.08755,-5.19707 37.67876,-5.19707 53.26996,0 90.94872,44.1751 38.97803,42.87583 38.97803,102.64213 0,107.83918 -63.66411,184.49598 -62.36484,75.3575 -152.0143,75.3575 20.78828,46.7737 74.05825,87.051 54.56923,41.5765 132.52529,68.8611 z"
                      id="path1589"
                    />
                </clipPath>
                <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2416">
                  
                    <path
                      d="M 1.466529,91.825382 V 1.2107339 H 993.69692 V 91.825382 H 779.24226 q 30.20488,34.735618 45.30732,77.022448 15.10244,42.28684 15.10244,84.57367 0,66.45075 -27.18439,120.81953 -27.1844,52.85855 -74.00197,80.04294 64.9405,21.14342 102.69661,87.59416 39.26634,66.45074 39.26634,154.0449 0,116.2888 -80.04294,199.35223 -80.04293,81.55318 -191.801,81.55318 -155.55515,0 -300.53858,-163.10636 Q 164.5729,649.10547 55.835318,353.09762 L 137.3885,316.85176 q 96.65563,265.80296 220.49564,412.29665 123.84002,146.49368 250.70053,146.49368 69.47123,0 119.30929,-52.85855 51.3483,-52.85854 51.3483,-126.86051 0,-83.06342 -48.32782,-141.96294 -46.81756,-60.40977 -113.26831,-60.40977 H 416.78367 l -39.26635,-89.1044 h 220.49564 q 58.89952,0 99.67611,-43.79708 40.77659,-45.30733 40.77659,-107.22734 0,-42.28683 -24.1639,-84.57367 Q 690.13785,126.561 647.85102,91.825382 Z"
                      id="path2418"
                    />
                </clipPath>

              
                <path
                fill="none"
                stroke="#d3d3d3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="120.865"                  d="m 711.35486,83.587555 c 0.61468,57.147085 29.70019,50.555855 51.46435,61.062505 l 5.91297,10.05044 8.69202,20.12287 3.1018,26.0927 7.34558,23.06324 v 36.03442 32.45716 l -8.89233,40.79602 -20.52613,31.01349 -24.1062,25.84484 -31.52343,26.61017 -39.78272,13.96961 -62.19092,8 -95.27581,5.77661 h -56.86603 -75.53717 l 224.61322,2.97504 42.63623,1.01062 34.5592,11.63549 36.95972,15.39014 33.5249,18.72302 32.49732,30.26703 15.41186,19.49378 19.06873,28.96765 11.45739,41.43622 8.84864,44.25622 v 38.91296 l -9.57972,50.5199 -10.54321,33.87073 -18.427,33.27124 -20.88806,36.13953 -36.36756,22.84704 -37.03833,24.18299 -47.10437,17.3717 -62.23779,7.47571 L 527.06775,912.61169 489.34436,888.52942 440.03705,868.48816 394.55963,832.64038 352.07861,771.36719 256.47778,675.27917 156.83386,484.75201 76.048828,297.09155 -201.58795,250.20154 -223.31604,44.273468 1055.4142,47.262085"
                  id="path2411"
                  sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccc"
                  clip-path="url(#clipPath2416)"
                />
            </svg>
          </div>
          <div className="front">
            <svg
              height="1000"
              width="1000"
              sodipodi:docname="auu.svg"
              version="1.1"
              id="svg340"
              viewBox="0 0 1000 1000"
              inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
            >
              <sodipodi:namedview
                id="base"
                pagecolor="#ffffff"
                bordercolor="#000000"
                borderopacity="0.3"
                inkscape:pageopacity="0.0"
                inkscape:pageshadow="2"
                inkscape:zoom="0.5"
                inkscape:cx="355"
                inkscape:cy="450"
                inkscape:document-units="px"
                inkscape:current-layer="layer1"
                showgrid="false"
                showguides="true"
                inkscape:window-width="1360"
                inkscape:window-height="736"
                inkscape:window-x="0"
                inkscape:window-y="0"
                inkscape:window-maximized="1"
                showborder="true"
                inkscape:showpageshadow="false"
                inkscape:pagecheckerboard="0"
                inkscape:deskcolor="#d1d1d1"
              >
                <sodipodi:guide
                  id="guide_baseline"
                  inkscape:label="baseline"
                  position="0,253"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_ascender"
                  inkscape:label="ascender"
                  position="0,945"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_caps"
                  inkscape:label="caps"
                  position="0,896"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_xheight"
                  inkscape:label="xheight"
                  position="0,729"
                  orientation="0,1"
                  inkscape:locked="false"
                />
                <sodipodi:guide
                  id="guide_descender"
                  inkscape:label="descender"
                  position="0,28"
                  orientation="0,1"
                  inkscape:locked="false"
                />
              </sodipodi:namedview>
                <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1538">
                
                    <path
                      d="M 0.5770815,94.506264 V 3.8851721 H 801.0634 V 94.506264 H 625.86262 V 355.79708 H 263.37825 q -24.16563,0 -42.28984,12.08281 -18.12422,12.08282 -18.12422,28.69668 0,31.71738 63.43476,96.6625 64.94512,63.43477 98.17285,63.43477 33.22774,0 99.6832,-24.16563 66.45547,-25.67598 101.19356,-25.67598 57.39336,0 98.17285,51.35196 42.28984,49.8416 42.28984,119.31777 0,125.35918 -77.02793,214.46992 -75.51758,87.60039 -184.26289,87.60039 37.75879,54.37263 101.19356,102.70393 63.43476,48.3312 149.5248,89.1107 l -49.8416,80.0486 q -108.74531,-61.9244 -190.3043,-131.4005 -81.55898,-69.4762 -131.40058,-140.46273 -101.19355,0 -172.18007,-37.75879 -69.476175,-39.26914 -69.476175,-93.6418 0,-40.77949 28.696675,-69.47617 30.20703,-30.20703 72.49688,-30.20703 57.39336,0 113.27636,40.77949 57.39336,39.26914 98.17285,110.25566 86.09004,0 148.01445,-64.94511 61.92442,-66.45547 61.92442,-157.07656 0,-27.18633 -12.08282,-48.33125 -10.57246,-21.14492 -27.18632,-21.14492 -34.73809,0 -101.19356,25.67597 -66.45546,24.16563 -99.6832,24.16563 -64.94511,0 -164.62832,-98.17285 -99.6832,-99.6832 -99.6832,-163.11797 0,-58.90371 48.33125,-99.6832 48.33125,-40.77949 116.29707,-40.77949 H 515.60696 V 94.506264 Z"
                      id="path1540"
                    />
                </clipPath>
                <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1587">

                    <path
                      d="m 556.94707,1441.1858 q -92.24799,-53.27 -162.40844,-113.0363 -70.16044,-59.7663 -114.33554,-120.8319 -85.75166,0 -146.81723,-32.4817 -59.766306,-33.7809 -59.766306,-80.5545 0,-35.0803 24.686083,-59.7664 24.686083,-25.9853 61.065573,-25.9853 50.67143,0 98.74433,35.0802 48.0729,33.781 83.15312,94.8465 77.95606,0 133.82456,-55.8685 55.8685,-57.1677 55.8685,-135.12378 0,-23.38681 -12.99267,-41.57656 -11.69341,-18.18974 -29.88315,-18.18974 -20.78828,0 -40.2773,3.8978 -18.18974,3.8978 -37.67876,12.99267 -27.28461,11.69341 -51.9707,19.48902 -23.38681,6.49633 -42.87583,6.49633 -57.16777,0 -145.51796,-84.45239 -88.350191,-85.75165 -88.350191,-140.32089 0,-50.67143 42.875831,-85.75166 44.17509,-35.08022 103.9414,-35.08022 H 454.30494 V 445.94686 H 0.86057186 V 367.9908 H 434.81593 q -45.47437,-38.97802 -70.16045,-84.45239 -23.38682,-45.47436 -23.38682,-88.35019 0,-79.25532 59.76631,-133.824554 61.06558,-55.8685038 148.1165,-55.8685038 23.38682,0 46.77363,3.8978026 23.38682,3.8978022 48.0729,12.9926752 v 77.95605 q -36.37949,-14.291941 -59.76631,-19.489011 -23.38681,-6.496338 -35.08022,-6.496338 -50.67143,0 -85.75166,35.080219 -35.08022,35.08023 -35.08022,85.75166 0,48.0729 28.58389,94.84653 28.58388,45.47436 77.95605,77.95605 h 162.40844 v 77.95606 H 540.0566 V 670.72014 H 228.23239 q -20.78828,0 -36.37949,10.39414 -14.29194,10.39414 -14.29194,24.68608 0,27.28462 54.56923,83.15312 55.86851,54.56924 83.15312,54.56924 14.29195,0 35.08023,-5.19707 22.08755,-6.49634 51.9707,-16.89048 25.98535,-10.39414 48.0729,-15.59121 22.08755,-5.19707 37.67876,-5.19707 53.26996,0 90.94872,44.1751 38.97803,42.87583 38.97803,102.64213 0,107.83918 -63.66411,184.49598 -62.36484,75.3575 -152.0143,75.3575 20.78828,46.7737 74.05825,87.051 54.56923,41.5765 132.52529,68.8611 z"
                      id="path1589"
                    />
                </clipPath>
                <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2416">
                  
                    <path
                      d="M 1.466529,91.825382 V 1.2107339 H 993.69692 V 91.825382 H 779.24226 q 30.20488,34.735618 45.30732,77.022448 15.10244,42.28684 15.10244,84.57367 0,66.45075 -27.18439,120.81953 -27.1844,52.85855 -74.00197,80.04294 64.9405,21.14342 102.69661,87.59416 39.26634,66.45074 39.26634,154.0449 0,116.2888 -80.04294,199.35223 -80.04293,81.55318 -191.801,81.55318 -155.55515,0 -300.53858,-163.10636 Q 164.5729,649.10547 55.835318,353.09762 L 137.3885,316.85176 q 96.65563,265.80296 220.49564,412.29665 123.84002,146.49368 250.70053,146.49368 69.47123,0 119.30929,-52.85855 51.3483,-52.85854 51.3483,-126.86051 0,-83.06342 -48.32782,-141.96294 -46.81756,-60.40977 -113.26831,-60.40977 H 416.78367 l -39.26635,-89.1044 h 220.49564 q 58.89952,0 99.67611,-43.79708 40.77659,-45.30733 40.77659,-107.22734 0,-42.28683 -24.1639,-84.57367 Q 690.13785,126.561 647.85102,91.825382 Z"
                      id="path2418"
                    />
                </clipPath>

              
                <path
  strokeDasharray={"10000"}
                strokeDashoffset={"" + 10000 - slide}
                fill="none"
                stroke="#262626"
                stroke-linejoin="round"
                stroke-width="120.865"                  d="m 711.35486,83.587555 c 0.61468,57.147085 29.70019,50.555855 51.46435,61.062505 l 5.91297,10.05044 8.69202,20.12287 3.1018,26.0927 7.34558,23.06324 v 36.03442 32.45716 l -8.89233,40.79602 -20.52613,31.01349 -24.1062,25.84484 -31.52343,26.61017 -39.78272,13.96961 -62.19092,8 -95.27581,5.77661 h -56.86603 -75.53717 l 224.61322,2.97504 42.63623,1.01062 34.5592,11.63549 36.95972,15.39014 33.5249,18.72302 32.49732,30.26703 15.41186,19.49378 19.06873,28.96765 11.45739,41.43622 8.84864,44.25622 v 38.91296 l -9.57972,50.5199 -10.54321,33.87073 -18.427,33.27124 -20.88806,36.13953 -36.36756,22.84704 -37.03833,24.18299 -47.10437,17.3717 -62.23779,7.47571 L 527.06775,912.61169 489.34436,888.52942 440.03705,868.48816 394.55963,832.64038 352.07861,771.36719 256.47778,675.27917 156.83386,484.75201 76.048828,297.09155 -201.58795,250.20154 -223.31604,44.273468 1055.4142,47.262085"
                  id="path2411"
                  sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccc"
                  clip-path="url(#clipPath2416)"
                />
            </svg>
          </div>
        </div>
      </div>
      <div className="rangeCenter">
        <div className="range">
          <input
            type="range"
            min={"0"}
            max={"5000"}
            value={slide}
            step={"1"}
            onChange={(e) => setSlide(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}