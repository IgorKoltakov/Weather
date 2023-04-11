import React from "react";

function GetIcon({weatherData, date}) {
    date = Number(date);
    const hour = new Date().getHours();
    let day = new Date().getDate();
    if (day < 10) {
      day = "0" + day;
    }

    switch (weatherData.weather[0].main) {
      case "Clear":
        // if (day === date) {
        //   return (
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       xlink="http://www.w3.org/1999/xlink"
        //       width="200px"
        //       height="px"
        //       viewBox="0 0 199 171"
        //       version="1.1"
        //     >
        //       <defs>
        //         <image
        //           id="image10"
        //           width="199"
        //           height="171"
        //           href="data:image/png;base64,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"
        //         />
        //       </defs>
        //       <g id="surface1">
        //         <use href="#image10" />
        //       </g>
        //     </svg>
        //   );
        // }
        if (hour >= 5 && hour <= 22) {
          return (
            <svg
              id="b"
              data-name="Шар 2"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 40.91 40.91"
            >
              <defs>
                <linearGradient
                  id="e"
                  data-name="New Gradient Swatch 1"
                  x1="5.991"
                  y1="34.919"
                  x2="34.919"
                  y2="5.991"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fdb728" />
                  <stop offset="1" stopColor="#ffcd23" />
                </linearGradient>
              </defs>
              <g id="c" data-name="Icons">
                <g id="d" data-name="Mostly Sunny">
                  <circle
                    cx="20.455"
                    cy="20.455"
                    r="20.455"
                    style={{ fill: "url(#e)" }}
                  />
                </g>
              </g>
            </svg>
          ); // day
        }
        return (
          <svg
            id="b"
            data-name="Шар 2"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 45.509 53.018"
          >
            <defs>
              <linearGradient
                id="e"
                data-name="New Gradient Swatch copy"
                x1="6.799"
                y1="46.219"
                x2="31.566"
                y2="21.452"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#00aeef" />
                <stop offset="1" stopColor="#00bdf2" />
              </linearGradient>
              <linearGradient
                id="f"
                data-name="New Gradient Swatch 1"
                x1="34.53"
                y1="20.436"
                x2="40.33"
                y2="14.636"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fdb728" />
                <stop offset="1" stopColor="#ffcd23" />
              </linearGradient>
              <linearGradient
                id="g"
                data-name="New Gradient Swatch 1"
                x1="27.771"
                y1="4.996"
                x2="31.161"
                y2="1.607"
                href="#f"
              />
            </defs>
            <g id="c" data-name="Icons">
              <g id="d" data-name="Clear Night">
                <path
                  d="M23.188,53.018C10.402,53.018,0,42.616,0,29.83,0,19.553,6.903,10.394,16.786,7.557c.431-.12,.883-.003,1.195,.309,.312,.313,.431,.769,.308,1.194-.543,1.895-.82,3.824-.82,5.732,0,11.446,9.312,20.758,20.759,20.758,1.905,0,3.834-.276,5.732-.82,.426-.119,.881-.002,1.193,.309,.312,.313,.431,.769,.308,1.194-2.837,9.883-11.996,16.786-22.273,16.786Z"
                  style={{ fill: "url(#e)" }}
                />
                <path
                  d="M38.216,21.994c-.432,1.588-1.139,1.588-1.571,0s-2.085-3.241-3.673-3.673-1.588-1.139,0-1.571,3.241-2.085,3.673-3.673,1.139-1.588,1.571,0,2.085,3.241,3.673,3.673,1.588,1.139,0,1.571-3.241,2.085-3.673,3.673Z"
                  style={{ fill: "url(#f)" }}
                />
                <path
                  d="M29.925,5.907c-.253,.928-.666,.928-.918,0s-1.218-1.894-2.146-2.146-.928-.666,0-.918,1.894-1.218,2.146-2.146,.666-.928,.918,0,1.218,1.894,2.146,2.146,.928,.666,0,.918-1.894,1.218-2.146,2.146Z"
                  style={{ fill: "url(#g)" }}
                />
              </g>
            </g>
          </svg>
        ); // night

      case "Rain":
        if (day === date) {
          if (hour >= 5 && hour <= 22) {
            return (
              <svg
                id="b"
                data-name="Шар 2"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 66.917 58.717"
              >
                <defs>
                  <linearGradient
                    id="e"
                    data-name="New Gradient Swatch 1"
                    x1="39.157"
                    y1="22.13"
                    x2="57.49"
                    y2="3.797"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fdb728" />
                    <stop offset="1" stopColor="#ffcd23" />
                  </linearGradient>
                  <linearGradient
                    id="f"
                    data-name="New Gradient Swatch copy 2"
                    x1="38.746"
                    y1="44.928"
                    x2="59.071"
                    y2="24.603"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d0e8f8" />
                    <stop offset="1" stopColor="#e1eef9" />
                  </linearGradient>
                  <linearGradient
                    id="g"
                    data-name="New Gradient Swatch copy"
                    x1="10.355"
                    y1="54.216"
                    x2="17.243"
                    y2="54.216"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#00aeef" />
                    <stop offset="1" stopColor="#00bdf2" />
                  </linearGradient>
                  <linearGradient
                    id="h"
                    data-name="New Gradient Swatch copy"
                    x1="23.968"
                    x2="30.855"
                    href="#g"
                  />
                  <linearGradient
                    id="i"
                    data-name="New Gradient Swatch copy"
                    x1="38.579"
                    x2="45.467"
                    href="#g"
                  />
                </defs>
                <g id="c" data-name="Icons">
                  <g id="d" data-name="Scattered Showers">
                    <circle
                      cx="48.323"
                      cy="12.963"
                      r="12.963"
                      style={{ fill: "url(#e)" }}
                    />
                    <path
                      d="M46.003,42.37c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005-.949-8.504-8.158-15.117-16.915-15.117-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,15.973,0,21.883,0,29.172s5.909,13.198,13.198,13.198"
                      style={{ fill: "#fff" }}
                    />
                    <path
                      d="M60.22,42.37c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                      style={{ fill: "url(#f)" }}
                    />
                    <path
                      d="M12.354,58.717c-.339,0-.683-.086-.998-.268-.957-.553-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.285,2.732-.732,.957,.553,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                      style={{ fill: "url(#g)" }}
                    />
                    <path
                      d="M25.966,58.717c-.339,0-.683-.086-.998-.268-.957-.553-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.773-1.285,2.732-.732,.957,.553,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                      style={{ fill: "url(#h)" }}
                    />
                    <path
                      d="M40.577,58.717c-.339,0-.683-.086-.998-.268-.957-.553-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.285,2.732-.732,.957,.553,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                      style={{ fill: "url(#i)" }}
                    />
                  </g>
                </g>
              </svg>
            ); // day
          }
          return (
            <svg
              id="b"
              data-name="Шар 2"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 67 67.898"
            >
              <defs>
                <linearGradient
                  id="e"
                  data-name="New Gradient Swatch copy"
                  x1="42.616"
                  y1="24.383"
                  x2="58.218"
                  y2="8.782"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00aeef" />
                  <stop offset="1" stopColor="#00bdf2" />
                </linearGradient>
                <linearGradient
                  id="f"
                  data-name="New Gradient Swatch copy 2"
                  x1="11.804"
                  y1="48.443"
                  x2="44.172"
                  y2="16.075"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#d0e8f8" />
                  <stop offset="1" stopColor="#e1eef9" />
                </linearGradient>
                <linearGradient
                  id="g"
                  data-name="New Gradient Swatch copy"
                  x1="10.143"
                  y1="56.217"
                  x2="17.031"
                  y2="56.217"
                  href="#e"
                />
                <linearGradient
                  id="h"
                  data-name="New Gradient Swatch copy"
                  x1="26.255"
                  y1="56.217"
                  x2="33.143"
                  y2="56.217"
                  href="#e"
                />
                <linearGradient
                  id="i"
                  data-name="New Gradient Swatch copy"
                  x1="42.367"
                  y1="56.217"
                  x2="49.255"
                  y2="56.217"
                  href="#e"
                />
                <linearGradient
                  id="j"
                  data-name="New Gradient Swatch copy"
                  x1="15.143"
                  y1="63.397"
                  x2="22.031"
                  y2="63.397"
                  href="#e"
                />
                <linearGradient
                  id="k"
                  data-name="New Gradient Swatch copy"
                  x1="31.756"
                  y1="63.397"
                  x2="38.643"
                  y2="63.397"
                  href="#e"
                />
                <linearGradient
                  id="l"
                  data-name="New Gradient Swatch copy"
                  x1="48.367"
                  y1="63.397"
                  x2="55.255"
                  y2="63.397"
                  href="#e"
                />
              </defs>
              <g id="c" data-name="Icons">
                <g id="d" data-name="Drizzle Night">
                  <path
                    d="M52.94,28.666c-8.054,0-14.606-6.552-14.606-14.606C38.333,7.586,42.681,1.816,48.907,.029c.271-.076,.556-.002,.752,.195,.197,.197,.271,.485,.194,.752-.342,1.194-.516,2.409-.516,3.611,0,7.21,5.866,13.076,13.076,13.076,1.2,0,2.415-.174,3.611-.517,.268-.075,.555-.001,.752,.195,.197,.197,.271,.485,.194,.752-1.787,6.226-7.557,10.574-14.03,10.574Z"
                    style={{ fill: "url(#e)" }}
                  />
                  <path
                    d="M46.003,44.37c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005-.949-8.504-8.158-15.117-16.915-15.117-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,17.973,0,23.883,0,31.172s5.909,13.198,13.198,13.198"
                    style={{ fill: "url(#f)" }}
                  />
                  <path
                    d="M60.22,44.37c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M12.142,60.718c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                    style={{ fill: "url(#g)" }}
                  />
                  <path
                    d="M28.254,60.718c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                    style={{ fill: "url(#h)" }}
                  />
                  <path
                    d="M44.365,60.718c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                    style={{ fill: "url(#i)" }}
                  />
                  <path
                    d="M17.142,67.898c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.956,1.773-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                    style={{ fill: "url(#j)" }}
                  />
                  <path
                    d="M33.754,67.898c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.956,1.772-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                    style={{ fill: "url(#k)" }}
                  />
                  <path
                    d="M50.365,67.898c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.956,1.772-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                    style={{ fill: "url(#l)" }}
                  />
                </g>
              </g>
            </svg>
          ); // night
        }
        return (
          <svg
            id="b"
            data-name="Шар 2"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 66.917 59.966"
          >
            <defs>
              <linearGradient
                id="e"
                data-name="New Gradient Swatch copy 2"
                x1="38.746"
                y1="38.996"
                x2="59.071"
                y2="18.671"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#d0e8f8" />
                <stop offset="1" stopColor="#e1eef9" />
              </linearGradient>
              <linearGradient
                id="f"
                data-name="New Gradient Swatch copy"
                x1="7.643"
                y1="48.285"
                x2="14.531"
                y2="48.285"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#00aeef" />
                <stop offset="1" stopColor="#00bdf2" />
              </linearGradient>
              <linearGradient
                id="g"
                data-name="New Gradient Swatch copy"
                x1="23.755"
                x2="30.643"
                href="#f"
              />
              <linearGradient
                id="h"
                data-name="New Gradient Swatch copy"
                x1="39.867"
                x2="46.755"
                href="#f"
              />
              <linearGradient
                id="i"
                data-name="New Gradient Swatch copy"
                x1="12.643"
                y1="55.465"
                x2="19.531"
                y2="55.465"
                href="#f"
              />
              <linearGradient
                id="j"
                data-name="New Gradient Swatch copy"
                x1="29.256"
                y1="55.465"
                x2="36.143"
                y2="55.465"
                href="#f"
              />
              <linearGradient
                id="k"
                data-name="New Gradient Swatch copy"
                x1="45.867"
                y1="55.465"
                x2="52.755"
                y2="55.465"
                href="#f"
              />
            </defs>
            <g id="c" data-name="Icons">
              <g id="d" data-name="Drizzle">
                <path
                  d="M46.003,36.439c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005C44.945,6.613,37.736,0,28.979,0c-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,10.042,0,15.951,0,23.241s5.909,13.198,13.198,13.198"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M60.22,36.439c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                  style={{ fill: "url(#f)" }}
                />
                <path
                  d="M9.642,52.786c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                  style={{ fill: "url(#f)" }}
                />
                <path
                  d="M25.754,52.786c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                  style={{ fill: "url(#f)" }}
                />
                <path
                  d="M41.865,52.786c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                  style={{ fill: "url(#h)" }}
                />
                <path
                  d="M14.642,59.966c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.773-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                  style={{ fill: "url(#i)" }}
                />
                <path
                  d="M31.254,59.966c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                  style={{ fill: "url(#j)" }}
                />
                <path
                  d="M47.865,59.966c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                  style={{ fill: "url(#f)" }}
                />
              </g>
            </g>
          </svg>
        ); // default

      case "Snow":
        // if (day === date) {
        //   return (
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       xlink="http://www.w3.org/1999/xlink"
        //       width="150px"
        //       height="129px"
        //       viewBox="0 0 150 129"
        //       version="1.1"
        //     >
        //       <defs>
        //         <image
        //           id="image10"
        //           width="150"
        //           height="129"
        //           href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACBCAYAAAAi0kPBAAAABmJLR0QA/wD/AP+gvaeTAAAUYElEQVR4nO2deXQUVb7Hv7eql+wLQSBAIEgIBB12RHRQESSyCGiAOY46gws+EcR1XNB3jBs6CMxT9A3koKMj5+iwiOL2wo4oggRkMaAsAQJJiIZA0p2kt6rf+6O7OtWd6iVbV3enPufU6Vv33r51695v/+6tu1QDGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaHQimdgbUhohiAIwGMAJANoBuAOIAiADqAJQCOAbgewBHGGOkUlY1whxGRBwR3UZE64iogYKngoiWEdEAaD9KDReMiBgR3UlER5shJiUElyiz4BSYJjIvOkKBMAAgoj4A3gNwk3cEIuDcZQHnLwuoqhNRZyMwAIkxDF0SePTtzKNTHKeUthXAiwAWM+YuSq2pRHQLq7GmiaYB+ABAsjzC8d8d2H7ChqJSG0xW/3ronszj+j4GjMs2ICW2icjWAbiXMVYnXbK1mY90olVYclH9F4B3AbjVUHJRwEf76nGs0tHshPU8w4T+RuQNjkGcwaP4fgZwK2OsXObXYQUWjcKSi+p+AAWSnyACHx9owFdHLaBWVnnneA5PjE3AlWm83PsQgBsYYyaZX4cUVzQJy+NeiCgXwJcAeACosxGWbDO3yEr5Qs8zzBkdhxv6GuTehQBuY4zJL9ThxBUtwvIWVQ8APwHoDAD1NsIrm0w4fVFolwvP/WO8t7gWM8ae9YraocSl+KgTYSj9ON6BS1QiAct2mNtFVIBTLQW761Bc4WEJHyeiHIV8RssPOSCRLqwmFeVwOG4FME06//RQA36uaLvmTwmHCPxjpxm1FrdR0gNYrpQ/H35RR6QLyxvG8/wL0sn5ywI2HLGE5MJmK+HjAw1yr5sdDsck+BZXVAsskoXlXTHMZrONBHCd5PHJgQYIYugytOOkFaeqGq0jz/P3SXnz8ZWoFVekCquJqABAr9ffI3mU1wjYf84e0kwRAf93zCr3mmwymTq73L6sVFRar0gVli+mS46dp2yqPIb9WGpHg919ZUNcXNydXlH8Wa+oEVgkCkvRWlksliwAPSTPUFsrCauDsPds47U5jhsPgOXn53MWi+VKu90+weFwzBYE4WEimk9E9xHRNCIa5FrCExUC06mdgWaiKCoA0Ol0wyS3yUoou9w+wwvBUHzBjpuy3ONaY4joEwA3A+gU4KsiER0CsAPARgDfMsZC2EtsOyLRYinCGOsvuc9fFlQdjTzjOWaWDGAGAosKcNbHUACPA9gO4DQRvUBEqYgwKxZJwvJprVzuK6STqjp1f+SVJtHnXKRdcIaXXBRQclFAeY3gb2VFLwCvADhDRC8SUSwiRGCR1hRKeIsKABIkD4td3dkTm0DYesKK8dlGmKyEnyvsOFLuwNELdlSalUWXaGTI7KRDTjcdhvXUI7OTx+R2Epzrvv5CRA8yxra6/MN2migi1I/A1gqCIKzgOO4BANh2woqC3fWhyptP4gwMDXZq0UqKjBQeuTlG3NjXCL2HxiACeAPAi4wxqc0NO4FFQlMYUFSuzxrJMykmPG6r3tYyUQHOFa2rfqjHo5/W4PsSj6ETDsBCAOtdT5FAGD5JhkcNtAyPghQE4bTk7p4UybflSXW9iOW76vD6ZjNqGjz6jlMBFLr6XRJhI65wrwF/1srDz2q1Fkse6Uk8EoxhU8ZtwuFyO57+woQTv3tMqI8BsJaI5H3lsLjxcBaWoqiKior4+vr60YIgPCkIwioi2kZEexISEj50R2RATtdIfS7xTU2DiFc3mXGozGPwdxKApV5RVReX6hnwgdIE81C9Xv8AgD8BSA2UwJfFFqwuaggULSIx8AwLJyRgQBePH88MxtinXlFV69SHo8XyEJXNZhtMRF/p9foiAA8hCFEBzjVS0YpNcC6zrjJ73OQ/iSjFK6pqhiPcLJZ8I4QBwGsAHoXCeFt5jYBTFwVcqBVQayGIBPAM6JLIwSECnx22wOIIu6fwNqXfFTrkT0wE31iL/2SMzVOIGvKCCCdhyUWVAWA9nO9TcFNlFrHluBXfldhUH10PF/4yMg6TBhqlU4fVau0fExNzWiFqSMUVLsKSi6o/gE0AMiQ/k5XwyYEG7DhpDenCvUggVs/wdl4yEhufglcyxh6GspBCJq5wEJZcVL3hfKtLd8lv/zk7VnxfF3CnckfmjsExmDXEPZxVX11dnZ6WlmZGUyGFrBDV7rzLRRUP4BvIRPX5EQuWbDNrogrA5l+s8oeVuOTk5Dtc7mDGAdsFNYXlfZMrAAyQTtYfsuDjAw3hNwkWhpishJ/ON45t8Tx/uyxYlVZJLWF5bzCdBOAu6XznKRvWHozOMaj2Yl+pTX56w/bt233VbUiEpoawvEWlA/CWdF5eI+D9PeqvTIg0vPZOplxzzTWDZOchbxJDLawmNyQIwp0A+gLOnuV7e+phjfLxp/agul7EZdkktdFo7O8nersTSmEpTiDzPL9AOjlcZkfxhfbdtRzNlNc0Cosxlg3lJUYhQdXOu9VqzQEwXPLYWByaXcvRysV6j0G+zr7iuWhXoYVKWIptvE6nmyp5VJlFHNWsVavwWpKd6PpUxWqFQlg+O44cx90ouX8qs7f6ZWgdHa9ZCb1K2QCg/gDpYMnxy2+atWotMXqP37D8rYIhf3dEewvLp7U6e/ZsMpwv6wcAVTeYRgtJMR7FXQMVX6OkmsVKSUnx6FxW12uzy62lW2JjdQqCUKJiVlQbbmA8z8fLAxvUedVC1BCjY+ia1LhPzGq1nvCKEjXDDX5vhIg8pMSrMqMVPQzoqpOXoePgwYM/udyBSrZdSl61KR2TyWSWe0bbrppQMyyj8SGQiIrGjBlj9hO93VFrHAsFBQUVcP5lCACgWxTtBQw1PAeMzmx8a7MgCF+qmB0A7SesgOYnPz9fBODuB1yZFn3btULFdX0M8hWkVFFR8UmAr0TtJDQDAFEUd0sBf0jXhNUSOAZMuzrGfU5Ehb169SpVMUsAVB4gtVqt2yT3wHQ9kpv++ZFGAMZnG9EzpfFpsLa29k0Vs+NGjSkdN5s3b/4aQC3gfCocl23wFVVDgU5xHP40rPHVDUS0OSUl5TsVs+RGVRMxbdo0iyAI7v7AxJwm/6il4QOOAfPHxCO+sbzsZWVlTwb59XaflVW97amsrFwGQACcLx+T7TbR8MNfr4nDwG6N/VKbzfZaRkbGrypmyQPVhdWjR48SQRAKpPPcAUZcrXXk/XLHoBjkDnBvUgUR7bz77rsXq5ilJqguLADYu3dvPoALgPNNMQtuSPCY99JwwgD8eXgsZg316FeV7Nmz5661a9d6T7aS16cv2qVZbK8Oja/FZczXZ01NzbikpKQv4RL7b2YRrxaa8JtZm5wGnDue542Jx4gMj2VWF0pLS8f37t37JJoKydenP3ebETbCAgCr1fqUwWB4TYp8qV7EP3bU4fjvHXut1uDuesy5Lg6d4z2seOmpU6cmZ2VlSYPMmrD8fdpstsV6vd69wcIhAp8ebsDGI5aofjWREt2Tedw5LBYje3kuBiWifQcOHLhzxIgR5yUvH5+BwpTO24RQCEt+HtSn1Wp9wWAwPC9P54JJxPpDDfjhtC2qBcYxYGA3HXIHxGBEhh7MsyTJbrevWrZs2d+effZZK4K3Uv4sVFQJS8nP47Ompub2pKSklXC+49xNrYWw96wNB8vsKLko4FIULBDsnMAh+wodBnbTYUSGHikKMxBEVFJVVfVIly5dpNmKllqpdm8GgfadjGxxcyh9FhUV9RgyZMgynufdu3m8sTgIJkvLX3utNkmxDDE6v9Xwe11d3ZLnnntuxfLly6V99MGIyF8cb/+IgskOTnbwrkPnOvSuwyA7jK4jBkBMRUXFWIfDsYmIBOogiKK432Qyzc3Pz08BECuVheuQykcqL6kMdbJDKmd52TOvo90IlcWSn7fEegEAO3z4cO9+/frN1Ov1uTzPj4CzcKOFOkEQfrBarbtKS0s35OTknJSFBbI+YWet1BCW3N0csXm4Z86cyb/00kvZaWlpvYxGYxpjLOLmgojIJgjCxbKysuMLFiw4vWPHDqWtSoH6R8GKKWqEpZR+S6yWP7fbb8rf911tazDXbsof22Zrka6f/15KWp9R/fcu/vOPlZWH27wiht67KL7HkGmDjn7xVlHJlgKbQpSIFBWgnrDk7mZbK+9081aem6Mzxr8FwFZ3qSz3y8f/8GML8+tm1COrO2UOn1wEUFdRsH+09v6uD7U2TTmZNz1mGDX7v/cCLJtEcdua+zpPkQX7E0JLxBRyYbX3hFwwN+TPz19Buc95fUyuy2mIje881keazaJbv+FDAeoKAIzX5QaK7wdSOnJy7+oDsGwAYBx385XjnzHI4nt/39sd1qIC1P2/QkKj5ZHccj/FeP2nPm0Ycscz2wDW12G+dPf6+X23g8l+IIx4AMhbWTZPZ4x9lUTH6jX3dZkfKDN5K8/drzPGLxUF+3++feueuRync6fJgfEAaOKiPX2S0vt9BsbiL5X/Mm7TwuvOBnuz098puc2YkPIhicK2Y1uW3s043vMPCXvGsgnPF3ZOyRq+gTGur6WmcvLnj+bs9yoHbwL5RfXLbYP5BSqFK8bre21eOsBGAEjVJaSuy3vn1FjvBGYUlC3QGWMXAzAwTj85mExyTqtn4Hj9PTc+uvp9BuZRNhMX7emT2L1fIRjrB6B7fGr34copKaOPjR8HIIZx/KSc8U+tI4PB44m2Z9+xV6RmjfiGMW44gBRjfMp1suCWWC1VCae1KUEV3tcLR50VBfsyl1+sLiF1HRhLkyIxXj+KN8S+4ToVbA01Qa2qtFSffxlAtTMN3SxdfPJj7gsT+MTu/QoZWE8AEEncemTj0i+ac3N1544vBVAKOJu+xNT0JfLw+B5XfQ7GrnKeiT9VHNr1ofy+vdzBjJ6rOhgaynXAwXTk5W6/4bNWVb7MdPqnXV4CQJ7/QwoINot5zoaHen0cbAanLCselNAp/WsC0ryCRLh+hCKJW0/sfGfGwQ/ym/2WuEn5u3ol9h5YCMYyfUYiOlR+Yt/EXYturUbL+1Kqj7CHeoF5q8Q1MX97l5humVeTKDAAMMQkz2YcP6vpZUgUybHU3mDaDgC8wIvlBzfs++G9J5q8Nbdnz9Fs6DP/Gs3zOiMA8PrYK/X62EXkNUcJAAQcsNVXvwLXRlt73aVzX/1t5EnveN5Me7t4JNMZEwCAY3xXfUzSG2Csq0LUU1abaSETxVoAEGyOyo0L+hWjdaLy5deuhJOw5OdNRDb+mTVxaTnjTyLwKxAVIRK+XXPvFU2e7masqnyF1+mfakmaAATL5YrrP3/sqkO+IuStLJ+rM8Ys8xUe8AK2+tvWPdizEBEkKiD0T4XeT31KT4He/gSAEddJByCupRdmjCVCoZA5jktUiB4sPOmNcUrputPn+dakD3Lm22dwoK+35tqtQY3hBn/i8une+vr42qlvn/ijMTbhWumLjOdvZpwuD97iZMxGDvsKUbA7d60QCeaKE4VKmTn+7epns66dtRccYp1f5VN5veExUrCMROJ+QbB/wERRBADBbivZOC9rt3c8Ob+ueXNp9oxHTwFcMgBwvC6W0+kfIUJvhehHSbStJMH5Jh5RpIr1BVO/QgR01r0JdVPo79rBjLI3zhW+X/kAx+nfhe/xr3pbXU3ehnl9tgebodzXd2ekpA/YBKCPV5A7fRLFtd9tWDi7/IsCAc2svAn5hSmpvYd/A8YN8xWHiDaXHfss7/vF90sPBxHRWfcmnIYb5PgtwJmrfntYJioBREcaI4jSdE6cIT55fd7/nh0DH6Pf8mPq6/szUtIHbIZLVESiO00Q1QK4DACM42aOmf7aiqysic26oXELt6Sm9h6xyS0qBu89gOUAwBi7pUfO9LWD7vm3IVA5KLiVzlVBTWE1p0DcYbe9VZzO6XTL4BSVKNitc8BQ1hiTCokc77rO4nRxie8Fk5mYbr3fAJDpTELc6bDWvSyFMcYcNvPFSXCJCzx/z+CnC6YopeOLtKxBC8HYYGf6dMRuqZ8rD3fUXpwCOO+DMZabc9Ot98mCg2kKwwq1LVZzR+XhuHT2MoDzAOyC3frAujnpqz0iiCLWLBn7BAmO5a5kioPKiCAUAwCRuO23Q19MZ7J3dwHAhvn99lvqqifDOYhaL9gbTiEISygdJDikYYODNeWncx3Whsvy9C+c//ak7VLVLXAOojpIoGP+ysFHWNiITm1hKeHX5H+TP6n+/NFdVzdcLstYNyf9IwAgaoxHjCMUF9Oa+7s8aao6k/nzmw9NRxAVv/aBrq+aqs5kFi+ZO3HH/9xbxzFelF2YANDn87L2lf2yO6u2/OfMz+ZlByVYibVzuv/LcvFk77073h5d+PyIKo73XEytN1tow+PZJyrPbLnK9FtFxpoHu+6Af+GEragAdTvvcoId31IKw8z3f1/IcfxLAMhhr5uyfk7G5tZmaNKSA90TO2cWA4gnoq/W3Jt2e8AvNQPnuNwtv8K5guLgf2Z3GukVJZBwwlpY4WKxWtTfklj775mLRMF+h91ivqktRAUAXz81rNx2qWqkYLf+tfqXrXfJgoJu/vwdW/4+q85urhhFDsfs2vIzEwLcY0SJCggfiwU0z2r584t0ghk914TVTDqyuFo68Bl2ogKc24PCiWCE40tIoRZYKCo0IkSkRLgJC2h7K9VSwaldicFcX+08+iQShOXLz59/JBNskxjWhGvFNNdKqX0fgSo9mPw160k4iGuqSjhaLKB1Fqo9RKZmJYa1gHyh9i/dHx2p+fNFxDaL4WqxJMK5+WtPwl44gQj3ylGr6QuW5gigtf2sllxTNcJdWEDz89jW9xROFRlOefFLJAgLiJx8ticRIyogsioskvLa1kSUqIDIrKxIzHNriDhRAZFdSZGc90BEpJjkRGPlRHPnXUNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0OjQ/L/Bt0T7KYoigYAAAAASUVORK5CYII="
        //         />
        //       </defs>
        //       <g id="surface1">
        //         <use href="#image10" />
        //       </g>
        //     </svg>
        //   );
        // }
        if (hour >= 5 && hour <= 22) {
          return (
            <svg
              id="b"
              data-name="Шар 2"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 66.917 65.005"
            >
              <defs>
                <linearGradient
                  id="e"
                  data-name="New Gradient Swatch copy 2"
                  x1="11.135"
                  y1="46.722"
                  x2="15.135"
                  y2="46.722"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#d0e8f8" />
                  <stop offset="1" stop-color="#e1eef9" />
                </linearGradient>
                <linearGradient
                  id="f"
                  data-name="New Gradient Swatch copy 2"
                  x1="21.135"
                  x2="25.135"
                  href="#e"
                />
                <linearGradient
                  id="g"
                  data-name="New Gradient Swatch copy 2"
                  x1="31.135"
                  x2="35.135"
                  href="#e"
                />
                <linearGradient
                  id="h"
                  data-name="New Gradient Swatch copy 2"
                  x1="41.135"
                  x2="45.135"
                  href="#e"
                />
                <linearGradient
                  id="i"
                  data-name="New Gradient Swatch copy 2"
                  y1="63.005"
                  y2="63.005"
                  href="#e"
                />
                <linearGradient
                  id="j"
                  data-name="New Gradient Swatch copy 2"
                  x1="21.135"
                  y1="63.005"
                  x2="25.135"
                  y2="63.005"
                  href="#e"
                />
                <linearGradient
                  id="k"
                  data-name="New Gradient Swatch copy 2"
                  x1="31.135"
                  y1="63.005"
                  x2="35.135"
                  y2="63.005"
                  href="#e"
                />
                <linearGradient
                  id="l"
                  data-name="New Gradient Swatch copy 2"
                  x1="41.135"
                  y1="63.005"
                  x2="45.135"
                  y2="63.005"
                  href="#e"
                />
                <linearGradient
                  id="m"
                  data-name="New Gradient Swatch copy 2"
                  x1="6.135"
                  y1="55.005"
                  x2="10.135"
                  y2="55.005"
                  href="#e"
                />
                <linearGradient
                  id="n"
                  data-name="New Gradient Swatch copy 2"
                  x1="16.135"
                  y1="55.005"
                  x2="20.135"
                  y2="55.005"
                  href="#e"
                />
                <linearGradient
                  id="o"
                  data-name="New Gradient Swatch copy 2"
                  x1="26.135"
                  y1="55.005"
                  x2="30.135"
                  y2="55.005"
                  href="#e"
                />
                <linearGradient
                  id="p"
                  data-name="New Gradient Swatch copy 2"
                  x1="36.135"
                  y1="55.005"
                  x2="40.135"
                  y2="55.005"
                  href="#e"
                />
                <linearGradient
                  id="q"
                  data-name="New Gradient Swatch copy 2"
                  x1="38.746"
                  y1="38.996"
                  x2="59.071"
                  y2="18.671"
                  href="#e"
                />
              </defs>
              <g id="c" data-name="Icons">
                <g id="d" data-name="Snow">
                  <circle
                    cx="13.135"
                    cy="46.722"
                    r="2"
                    style={{ fill: "url(#e)" }}
                  />
                  <circle
                    cx="23.135"
                    cy="46.722"
                    r="2"
                    style={{ fill: "url(#f)" }}
                  />
                  <circle
                    cx="33.135"
                    cy="46.722"
                    r="2"
                    style={{ fill: "url(#g)" }}
                  />
                  <circle
                    cx="43.135"
                    cy="46.722"
                    r="2"
                    style={{ fill: "url(#h)" }}
                  />
                  <circle
                    cx="13.135"
                    cy="63.005"
                    r="2"
                    style={{ fill: "url(#i)" }}
                  />
                  <circle
                    cx="23.135"
                    cy="63.005"
                    r="2"
                    style={{ fill: "url(#j)" }}
                  />
                  <circle
                    cx="33.135"
                    cy="63.005"
                    r="2"
                    style={{ fill: "url(#k)" }}
                  />
                  <circle
                    cx="43.135"
                    cy="63.005"
                    r="2"
                    style={{ fill: "url(#l)" }}
                  />
                  <circle
                    cx="8.135"
                    cy="55.005"
                    r="2"
                    style={{ fill: "url(#m)" }}
                  />
                  <circle
                    cx="18.135"
                    cy="55.005"
                    r="2"
                    style={{ fill: "url(#n)" }}
                  />
                  <circle
                    cx="28.135"
                    cy="55.005"
                    r="2"
                    style={{ fill: "url(#o)" }}
                  />
                  <circle
                    cx="38.135"
                    cy="55.005"
                    r="2"
                    style={{ fill: "url(#p)" }}
                  />
                  <path
                    d="M46.003,36.439c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005C44.945,6.613,37.736,0,28.979,0c-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,10.042,0,15.951,0,23.241s5.909,13.198,13.198,13.198"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M60.22,36.439c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                    style={{ fill: "url(#q)" }}
                  />
                </g>
              </g>
            </svg>
          ); // day
        }
        return (
          <svg
            id="b"
            data-name="Шар 2"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 68.06 73.543"
          >
            <defs>
              <linearGradient
                id="e"
                data-name="New Gradient Swatch copy"
                x1="43.676"
                y1="24.383"
                x2="59.277"
                y2="8.782"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#00aeef" />
                <stop offset="1" stop-color="#00bdf2" />
              </linearGradient>
              <linearGradient
                id="f"
                data-name="New Gradient Swatch copy 2"
                x1="0"
                y1="26.758"
                x2="56.667"
                y2="26.758"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#d0e8f8" />
                <stop offset="1" stop-color="#e1eef9" />
              </linearGradient>
              <linearGradient
                id="g"
                data-name="New Gradient Swatch copy 2"
                x1="11.135"
                y1="55.26"
                x2="15.135"
                y2="55.26"
                href="#f"
              />
              <linearGradient
                id="h"
                data-name="New Gradient Swatch copy 2"
                x1="21.135"
                y1="55.26"
                x2="25.135"
                y2="55.26"
                href="#f"
              />
              <linearGradient
                id="i"
                data-name="New Gradient Swatch copy 2"
                x1="31.135"
                y1="55.26"
                x2="35.135"
                y2="55.26"
                href="#f"
              />
              <linearGradient
                id="j"
                data-name="New Gradient Swatch copy 2"
                x1="41.135"
                y1="55.26"
                x2="45.135"
                y2="55.26"
                href="#f"
              />
              <linearGradient
                id="k"
                data-name="New Gradient Swatch copy 2"
                x1="11.135"
                y1="71.543"
                x2="15.135"
                y2="71.543"
                href="#f"
              />
              <linearGradient
                id="l"
                data-name="New Gradient Swatch copy 2"
                x1="21.135"
                y1="71.543"
                x2="25.135"
                y2="71.543"
                href="#f"
              />
              <linearGradient
                id="m"
                data-name="New Gradient Swatch copy 2"
                x1="31.135"
                y1="71.543"
                x2="35.135"
                y2="71.543"
                href="#f"
              />
              <linearGradient
                id="n"
                data-name="New Gradient Swatch copy 2"
                x1="41.135"
                y1="71.543"
                x2="45.135"
                y2="71.543"
                href="#f"
              />
              <linearGradient
                id="o"
                data-name="New Gradient Swatch copy 2"
                x1="6.135"
                y1="63.543"
                x2="10.135"
                y2="63.543"
                href="#f"
              />
              <linearGradient
                id="p"
                data-name="New Gradient Swatch copy 2"
                x1="16.135"
                y1="63.543"
                x2="20.135"
                y2="63.543"
                href="#f"
              />
              <linearGradient
                id="q"
                data-name="New Gradient Swatch copy 2"
                x1="26.135"
                y1="63.543"
                x2="30.135"
                y2="63.543"
                href="#f"
              />
              <linearGradient
                id="r"
                data-name="New Gradient Swatch copy 2"
                x1="36.135"
                y1="63.543"
                x2="40.135"
                y2="63.543"
                href="#f"
              />
            </defs>
            <g id="c" data-name="Icons">
              <g id="d" data-name="Snow Night">
                <path
                  d="M54,28.666c-8.054,0-14.606-6.552-14.606-14.606C39.393,7.586,43.741,1.816,49.967,.029c.271-.076,.556-.002,.752,.195,.197,.197,.271,.485,.194,.752-.342,1.194-.516,2.409-.516,3.611,0,7.21,5.866,13.076,13.076,13.076,1.2,0,2.415-.174,3.611-.517,.268-.075,.555-.001,.752,.195,.197,.197,.271,.485,.194,.752-1.787,6.226-7.557,10.574-14.03,10.574Z"
                  style={{ fill: "url(#e)" }}
                />
                <path
                  d="M46.003,44.977c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005-.949-8.504-8.158-15.117-16.915-15.117-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,18.581,0,24.49,0,31.779s5.909,13.198,13.198,13.198"
                  style={{ fill: "url(#f)" }}
                />
                <path
                  d="M60.22,44.977c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                  style={{ fill: "#fff" }}
                />
                <circle
                  cx="13.135"
                  cy="55.26"
                  r="2"
                  style={{ fill: "url(#g)" }}
                />
                <circle
                  cx="23.135"
                  cy="55.26"
                  r="2"
                  style={{ fill: "url(#h)" }}
                />
                <circle
                  cx="33.135"
                  cy="55.26"
                  r="2"
                  style={{ fill: "url(#i)" }}
                />
                <circle
                  cx="43.135"
                  cy="55.26"
                  r="2"
                  style={{ fill: "url(#j)" }}
                />
                <circle
                  cx="13.135"
                  cy="71.543"
                  r="2"
                  style={{ fill: "url(#k)" }}
                />
                <circle
                  cx="23.135"
                  cy="71.543"
                  r="2"
                  style={{ fill: "url(#l)" }}
                />
                <circle
                  cx="33.135"
                  cy="71.543"
                  r="2"
                  style={{ fill: "url(#m)" }}
                />
                <circle
                  cx="43.135"
                  cy="71.543"
                  r="2"
                  style={{ fill: "url(#n)" }}
                />
                <circle
                  cx="8.135"
                  cy="63.543"
                  r="2"
                  style={{ fill: "url(#o)" }}
                />
                <circle
                  cx="18.135"
                  cy="63.543"
                  r="2"
                  style={{ fill: "url(#p)" }}
                />
                <circle
                  cx="28.135"
                  cy="63.543"
                  r="2"
                  style={{ fill: "url(#q)" }}
                />
                <circle
                  cx="38.135"
                  cy="63.543"
                  r="2"
                  style={{ fill: "url(#r)" }}
                />
              </g>
            </g>
          </svg>
        ); // night

      case "Clouds":
        if (day === date) {
          if (hour >= 5 && hour <= 22) {
            return (
              <svg
                id="b"
                data-name="Шар 2"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 66.917 40.26"
              >
                <defs>
                  <linearGradient
                    id="e"
                    data-name="New Gradient Swatch 1"
                    x1="39.157"
                    y1="22.13"
                    x2="57.49"
                    y2="3.797"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fdb728" />
                    <stop offset="1" stopColor="#ffcd23" />
                  </linearGradient>
                  <linearGradient
                    id="f"
                    data-name="New Gradient Swatch copy 2"
                    x1="38.746"
                    y1="42.817"
                    x2="59.071"
                    y2="22.492"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d0e8f8" />
                    <stop offset="1" stopColor="#e1eef9" />
                  </linearGradient>
                </defs>
                <g id="c" data-name="Icons">
                  <g id="d" data-name="Party Cloudy">
                    <circle
                      cx="48.323"
                      cy="12.963"
                      r="12.963"
                      style={{ fill: "url(#e)" }}
                    />
                    <path
                      d="M46.003,40.26c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005-.949-8.504-8.158-15.117-16.915-15.117-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,13.863,0,19.772,0,27.061s5.909,13.198,13.198,13.198"
                      style={{ fill: "#fff" }}
                    />
                    <path
                      d="M60.22,40.26c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                      style={{ fill: "url(#f)" }}
                    />
                  </g>
                </g>
              </svg>
            ); // day
          }
          return (
            <svg
              id="b"
              data-name="Шар 2"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 67 45.107"
            >
              <defs>
                <linearGradient
                  id="e"
                  data-name="New Gradient Swatch copy"
                  x1="42.616"
                  y1="24.383"
                  x2="58.218"
                  y2="8.782"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00aeef" />
                  <stop offset="1" stopColor="#00bdf2" />
                </linearGradient>
                <linearGradient
                  id="f"
                  data-name="New Gradient Swatch copy 2"
                  x1="0"
                  y1="26.887"
                  x2="56.667"
                  y2="26.887"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#d0e8f8" />
                  <stop offset="1" stopColor="#e1eef9" />
                </linearGradient>
                <linearGradient
                  id="g"
                  data-name="New Gradient Swatch 1"
                  x1="60.098"
                  y1="7.323"
                  x2="63.767"
                  y2="3.653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fdb728" />
                  <stop offset="1" stopColor="#ffcd23" />
                </linearGradient>
                <linearGradient
                  id="h"
                  data-name="New Gradient Swatch 1"
                  x1="5.257"
                  y1="10.493"
                  x2="8.229"
                  y2="7.522"
                  href="#g"
                />
              </defs>
              <g id="c" data-name="Icons">
                <g id="d" data-name="Party Cloudy Night">
                  <path
                    d="M52.94,28.666c-8.054,0-14.606-6.552-14.606-14.606C38.333,7.586,42.681,1.816,48.907,.029c.271-.076,.556-.002,.752,.195,.197,.197,.271,.485,.194,.752-.342,1.194-.516,2.409-.516,3.611,0,7.21,5.866,13.076,13.076,13.076,1.2,0,2.415-.174,3.611-.517,.268-.075,.555-.001,.752,.195,.197,.197,.271,.485,.194,.752-1.787,6.226-7.557,10.574-14.03,10.574Z"
                    style={{ fill: "url(#e)" }}
                  />
                  <path
                    d="M46.003,45.107c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005-.949-8.504-8.158-15.117-16.915-15.117-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,18.71,0,24.619,0,31.909s5.909,13.198,13.198,13.198"
                    style={{ fill: "url(#f)" }}
                  />
                  <path
                    d="M60.22,45.107c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M62.43,8.309c-.273,1.005-.721,1.005-.994,0s-1.319-2.05-2.324-2.324-1.005-.721,0-.994,2.05-1.319,2.324-2.324,.721-1.005,.994,0,1.319,2.05,2.324,2.324,1.005,.721,0,.994-2.05,1.319-2.324,2.324Z"
                    style={{ fill: "url(#g)" }}
                  />
                  <path
                    d="M7.145,11.292c-.221,.814-.584,.814-.805,0s-1.068-1.661-1.882-1.882-.814-.584,0-.805,1.661-1.068,1.882-1.882,.584-.814,.805,0,1.068,1.661,1.882,1.882,.814,.584,0,.805-1.661,1.068-1.882,1.882Z"
                    style={{ fill: "url(#h)" }}
                  />
                </g>
              </g>
            </svg>
          ); // night
        }
        return (
          <svg
            id="b"
            data-name="Шар 2"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 66.917 36.439"
          >
            <defs>
              <linearGradient
                id="e"
                data-name="New Gradient Swatch copy 2"
                x1="38.746"
                y1="38.996"
                x2="59.071"
                y2="18.671"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#d0e8f8" />
                <stop offset="1" stopColor="#e1eef9" />
              </linearGradient>
            </defs>
            <g id="c" data-name="Icons">
              <g id="d" data-name="Mostly Cloudy">
                <path
                  d="M46.003,36.439c5.889,0,10.664-4.774,10.664-10.664s-4.774-10.664-10.664-10.664c-.037,0-.072,.005-.109,.005C44.945,6.613,37.736,0,28.979,0c-6.916,0-12.864,4.126-15.528,10.049-.084-.002-.168-.006-.252-.006C5.909,10.042,0,15.951,0,23.241s5.909,13.198,13.198,13.198"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M60.22,36.439c3.698,0,6.696-2.998,6.696-6.696s-2.998-6.696-6.696-6.696c-.023,0-.045,.003-.068,.003-.596-5.34-5.123-9.492-10.622-9.492-4.343,0-8.078,2.591-9.751,6.31-.053,0-.105-.004-.158-.004-4.577,0-8.288,3.711-8.288,8.288s3.711,8.288,8.288,8.288"
                  style={{ fill: "url(#f)" }}
                />
              </g>
            </g>
          </svg>
        ); // default

      case "Haze":
        // if (day === date) {
        //   return (
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       xlink="http://www.w3.org/1999/xlink"
        //       width="200px"
        //       height="px"
        //       viewBox="0 0 199 171"
        //       version="1.1"
        //     >
        //       <defs>
        //         <image
        //           id="image10"
        //           width="199"
        //           height="171"
        //           href="data:image/png;base64,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"
        //         />
        //       </defs>
        //       <g id="surface1">
        //         <use href="#image10" />
        //       </g>
        //     </svg>
        //   );
        // }
        if (hour >= 5 && hour <= 22) {
          return (
            <svg
              id="b"
              data-name="Шар 2"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64.109 40.91"
            >
              <defs>
                <linearGradient
                  id="e"
                  data-name="New Gradient Swatch 1"
                  x1="5.991"
                  y1="34.919"
                  x2="34.919"
                  y2="5.991"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fdb728" />
                  <stop offset="1" stop-color="#ffcd23" />
                </linearGradient>
              </defs>
              <g id="c" data-name="Icons">
                <g id="d" data-name="Haze">
                  <circle
                    cx="20.455"
                    cy="20.455"
                    r="20.455"
                    style="fill: url(#e);"
                  />
                  <path
                    d="M31.109,21.157h-10c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h10c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M52.609,21.157h-15c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h15c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M31.109,35.657h-10c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h10c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M52.609,35.657h-15c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h15c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M41.109,28.657H21.109c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h20c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                    style={{ fill: "#fff" }}
                  />
                  <path
                    d="M62.609,28.657h-15c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h15c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                    style={{ fill: "#fff" }}
                  />
                </g>
              </g>
            </svg>
          ); // day
        }
        return (
          <svg
            id="b"
            data-name="Шар 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44.5 17.5"
          >
            <g id="c" data-name="Icons">
              <g id="d" data-name="Haze">
                <path
                  d="M11.5,3H1.5c-.829,0-1.5-.671-1.5-1.5S.671,0,1.5,0H11.5c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M33,3h-15c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h15c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M11.5,17.5H1.5c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5H11.5c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M33,17.5h-15c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h15c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M21.5,10.5H1.5c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5H21.5c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                  style={{ fill: "#fff" }}
                />
                <path
                  d="M43,10.5h-15c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h15c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5Z"
                  style={{ fill: "#fff" }}
                />
              </g>
            </g>
          </svg>
        ); // night

      default:
        return "";
    };
}

export default GetIcon;
