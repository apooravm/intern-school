import React, { useState } from "react";
import './a.css'

export default function A() {
  const [slide,setSlide] = useState(0)
  return (
    <div className="mainContainer">
    <div className="contain">
      <div className="char">
        <div className="back">
          <svg
            width="210mm"
            height="297mm"
            inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
            sodipodi:docname="a1.svg"
            version="1.1"
            viewBox="0 0 210 297"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          >
            <sodipodi:namedview
              bordercolor="#000000"
              borderopacity="0.25"
              inkscape:current-layer="layer1"
              inkscape:cx="213.1602"
              inkscape:cy="538.50999"
              inkscape:deskcolor="#d1d1d1"
              inkscape:document-units="mm"
              inkscape:pagecheckerboard="0"
              inkscape:pageopacity="0.0"
              inkscape:showpageshadow="2"
              inkscape:window-height="736"
              inkscape:window-maximized="1"
              inkscape:window-width="1360"
              inkscape:window-x="0"
              inkscape:window-y="0"
              inkscape:zoom="0.35653935"
              pagecolor="#ffffff"
              showgrid="false"
            />
            <clipPath id="clipPath19220">
              <path d="m87.195 196.96q-17.751 0-34.392-14.644-16.641-14.866-29.067-41.492l10.872-6.2127q10.65 22.632 24.407 35.279 13.757 12.425 28.179 12.425 9.0972 0 15.532-6.6564 6.6564-6.8783 6.6564-16.641 0-11.982-7.544-20.191-7.3221-8.2096-17.529-8.2096-3.3282 0-7.1002 0.66564-3.5501 0.66565-7.7659 2.2188l-5.9908-13.313q13.313-1.1094 23.519-9.0972 10.207-8.2096 10.207-17.529 0-8.4315-5.1033-14.422-5.1033-6.2127-12.204-6.2127-8.6534 0-17.972 5.547-9.319 5.3252-17.529 15.088l-10.428-10.207q7.7659-11.316 19.747-17.529 12.204-6.2127 26.182-6.2127 13.535 0 22.854 9.9847 9.5409 9.7628 9.5409 23.963 0 7.544-3.5501 14.422t-9.7628 12.204q11.316 6.4346 19.969 9.9847 8.6534 3.3282 13.979 3.3282 3.3282 0 8.2096-1.775 4.8814-1.9969 11.094-5.547v-53.252h-26.626v-13.313h66.565v13.313h-25.295v134.46h-14.644v-66.565q-3.5501 3.1064-7.3221 4.6595-3.5501 1.3313-7.544 1.3313-6.2127 0-11.316-1.1094-4.8814-1.3313-7.7659-3.3282 2.8845 2.4407 4.2158 6.6565 1.5532 4.2158 1.5532 9.5409 0 15.975-10.872 27.291-10.65 11.094-25.96 11.094z" />
            </clipPath>
            <path
              strokeDasharray={"1900"}
              strokeDashoffset={0}
              d="m35.196 89.908 13.388-13.191 18.986-7.0713 17.034-1.9333 13.378 5.2133 5.6852 14.041v18.736l-6.2976 5.6111-17.203 9.9384-18.85 4.0025 15.298-3.2716 13.285 1.0071 11.256 6.449 3.757 3.5405 5.5593 10.7 4.9154 12.479 0.28123 8.841-3.4628 8.1242-7.9707 9.0005-14.812 7.0126-21.162-3.8784-13.825-8.9501-6.6863-10.814-9.5635-11.77-6.7833-12.428-8.4172-12.167 25.292-2.0703 51.944-1.3576 10.571 6.7954 12.004 3.6574 8.3264 3.1249 10.241-1.688 17.698-6.8868 1.9364 72.066-1.3109-138.29 29.823 0.74209-60.526-1.1891"
              clip-path="url(#clipPath19220)"
              fill="none"
              stroke="#d3d3d3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="19.865"
            />
          </svg>
        </div>
        <div className="front">
          <svg
            width="210mm"
            height="297mm"
            inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
            sodipodi:docname="a1.svg"
            version="1.1"
            viewBox="0 0 210 297"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          >
            <sodipodi:namedview
              bordercolor="#000000"
              borderopacity="0.25"
              inkscape:current-layer="layer1"
              inkscape:cx="213.1602"
              inkscape:cy="538.50999"
              inkscape:deskcolor="#d1d1d1"
              inkscape:document-units="mm"
              inkscape:pagecheckerboard="0"
              inkscape:pageopacity="0.0"
              inkscape:showpageshadow="2"
              inkscape:window-height="736"
              inkscape:window-maximized="1"
              inkscape:window-width="1360"
              inkscape:window-x="0"
              inkscape:window-y="0"
              inkscape:zoom="0.35653935"
              pagecolor="#ffffff"
              showgrid="false"
            />
            <clipPath id="clipPath19220">
              <path d="m87.195 196.96q-17.751 0-34.392-14.644-16.641-14.866-29.067-41.492l10.872-6.2127q10.65 22.632 24.407 35.279 13.757 12.425 28.179 12.425 9.0972 0 15.532-6.6564 6.6564-6.8783 6.6564-16.641 0-11.982-7.544-20.191-7.3221-8.2096-17.529-8.2096-3.3282 0-7.1002 0.66564-3.5501 0.66565-7.7659 2.2188l-5.9908-13.313q13.313-1.1094 23.519-9.0972 10.207-8.2096 10.207-17.529 0-8.4315-5.1033-14.422-5.1033-6.2127-12.204-6.2127-8.6534 0-17.972 5.547-9.319 5.3252-17.529 15.088l-10.428-10.207q7.7659-11.316 19.747-17.529 12.204-6.2127 26.182-6.2127 13.535 0 22.854 9.9847 9.5409 9.7628 9.5409 23.963 0 7.544-3.5501 14.422t-9.7628 12.204q11.316 6.4346 19.969 9.9847 8.6534 3.3282 13.979 3.3282 3.3282 0 8.2096-1.775 4.8814-1.9969 11.094-5.547v-53.252h-26.626v-13.313h66.565v13.313h-25.295v134.46h-14.644v-66.565q-3.5501 3.1064-7.3221 4.6595-3.5501 1.3313-7.544 1.3313-6.2127 0-11.316-1.1094-4.8814-1.3313-7.7659-3.3282 2.8845 2.4407 4.2158 6.6565 1.5532 4.2158 1.5532 9.5409 0 15.975-10.872 27.291-10.65 11.094-25.96 11.094z" />
            </clipPath>
            <path
              strokeDasharray={"1900"}
              strokeDashoffset={"" + 1900 - slide}
              d="m35.196 89.908 13.388-13.191 18.986-7.0713 17.034-1.9333 13.378 5.2133 5.6852 14.041v18.736l-6.2976 5.6111-17.203 9.9384-18.85 4.0025 15.298-3.2716 13.285 1.0071 11.256 6.449 3.757 3.5405 5.5593 10.7 4.9154 12.479 0.28123 8.841-3.4628 8.1242-7.9707 9.0005-14.812 7.0126-21.162-3.8784-13.825-8.9501-6.6863-10.814-9.5635-11.77-6.7833-12.428-8.4172-12.167 25.292-2.0703 51.944-1.3576 10.571 6.7954 12.004 3.6574 8.3264 3.1249 10.241-1.688 17.698-6.8868 1.9364 72.066-1.3109-138.29 29.823 0.74209-60.526-1.1891"
              clip-path="url(#clipPath19220)"
              fill="none"
              stroke="#262626"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="19.865"
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
            max={"850"}
            value={slide}
            step={"1"}
            onChange={(e) => setSlide(e.target.value)}
          />
        </div>
      </div>
</div>
  );
}
