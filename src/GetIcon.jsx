import React from "react";

function GetIcon({ weatherData, date }) {
  date = Number(date);
  const hour = new Date().getHours();
  let day = new Date().getDate();
  if (day < 10) {
    day = "0" + day;
  }

  switch (weatherData.weather[0].main) {
    case "Clear":
      if (day === date) {
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
      }
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
      ); // default

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
                style={{ fill: "url(#j)" }}
              />
              <path
                d="M9.642,52.786c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                style={{ fill: "url(#h)" }}
              />
              <path
                d="M25.754,52.786c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                style={{ fill: "url(#h)" }}
              />
              <path
                d="M41.865,52.786c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.287,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                style={{ fill: "url(#h)" }}
              />
              <path
                d="M14.642,59.966c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.773-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                style={{ fill: "url(#h)" }}
              />
              <path
                d="M31.254,59.966c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                style={{ fill: "url(#h)" }}
              />
              <path
                d="M47.865,59.966c-.339,0-.683-.086-.998-.269-.957-.552-1.284-1.775-.732-2.732l2.887-5c.553-.957,1.772-1.286,2.732-.732,.957,.552,1.284,1.775,.732,2.732l-2.887,5c-.371,.642-1.043,1-1.734,1Z"
                style={{ fill: "url(#h)" }}
              />
            </g>
          </g>
        </svg>
      ); // default

    case "Snow":
      if (day === date) {
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
                style={{ fill: "url(#e)" }}
              />
            </g>
          </g>
        </svg>
      ); // default

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
      if (day === date) {
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
      }
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
      ); // default

    default:
      return "";
  }
}

export default GetIcon;
