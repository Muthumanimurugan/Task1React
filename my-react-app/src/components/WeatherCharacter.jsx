import { motion } from "framer-motion";

const WeatherCharacter = ({ type }) => {
  const getCharacterState = () => {
    switch (type) {
      case "Rain":
      case "Drizzle":
        return {
          pose: "crying",
          clothing: "raincoat",
          expression: "😢",
          bodyAnimation: { y: [0, -5, 0], rotate: [-2, 2, -2, 0] },
          armAnimation: { rotate: [-15, 15, -15, 0] },
          headAnimation: { rotate: [-3, 3, -3, 0] },
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        };
      case "Thunderstorm":
        return {
          pose: "scared",
          clothing: "raincoat",
          expression: "😱",
          bodyAnimation: { scale: [1, 1.02, 1], y: [0, -8, 0] },
          armAnimation: { rotate: [0, 30, 0] },
          headAnimation: { rotate: [-5, 5, -5, 0], y: [-5, 5, -5, 0] },
          transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
        };
      case "Clear":
        return {
          pose: "happy",
          clothing: "tshirt",
          expression: "😄",
          bodyAnimation: { y: [0, -15, 0] },
          armAnimation: { rotate: [-90, 45, -90, 0] },
          headAnimation: { rotate: [0, 15, 0] },
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        };
      case "Clouds":
        return {
          pose: "neutral",
          clothing: "sweater",
          expression: "😐",
          bodyAnimation: { y: [0, -3, 0] },
          armAnimation: { rotate: [-20, 20, -20, 0] },
          headAnimation: { rotate: [-2, 2, -2, 0] },
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        };
      case "Snow":
        return {
          pose: "cold",
          clothing: "wintercoat",
          expression: "🥶",
          bodyAnimation: { y: [0, -8, 0], x: [0, 2, -2, 0] },
          armAnimation: { rotate: [-30, 30, -30, 0] },
          headAnimation: { rotate: [-4, 4, -4, 0] },
          transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        };
      case "Mist":
      case "Fog":
      case "Haze":
        return {
          pose: "confused",
          clothing: "jacket",
          expression: "🤔",
          bodyAnimation: { opacity: [0.75, 1, 0.75], y: [0, -5, 0] },
          armAnimation: { rotate: [-10, 10, -10, 0] },
          headAnimation: { rotate: [-5, 5, -5, 0], tilt: [-10, 10, -10, 0] },
          transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
        };
      default:
        return {
          pose: "relaxed",
          clothing: "tshirt",
          expression: "😊",
          bodyAnimation: { y: [0, -5, 0] },
          armAnimation: { rotate: [-15, 15, -15, 0] },
          headAnimation: { rotate: [-2, 2, -2, 0] },
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        };
    }
  };

  const state = getCharacterState();

  return (
    <div className="weather-character-container">
      <motion.svg
        className="human-character-svg"
        viewBox="0 0 200 400"
        width="120"
        height="240"
        animate={state.bodyAnimation}
        transition={state.transition}
      >
        {/* Head */}
        <motion.g
          className="head-group"
          animate={state.headAnimation}
          transition={state.transition}
        >
          <circle cx="100" cy="60" r="35" fill="#fdbcb4" stroke="#d4a574" strokeWidth="2" />
          
          {/* Hair */}
          <path
            d="M 65 60 Q 65 25 100 20 Q 135 25 135 60"
            fill="#5d4e37"
            stroke="#3d3d3d"
            strokeWidth="1.5"
          />

          {/* Eyes */}
          <circle cx="85" cy="50" r="4" fill="#333" />
          <circle cx="115" cy="50" r="4" fill="#333" />
          <circle cx="86" cy="49" r="1.5" fill="white" />
          <circle cx="116" cy="49" r="1.5" fill="white" />

          {/* Eyebrows */}
          <path d="M 80 44 Q 85 42 90 44" stroke="#3d3d3d" strokeWidth="1.5" fill="none" />
          <path d="M 110 44 Q 115 42 120 44" stroke="#3d3d3d" strokeWidth="1.5" fill="none" />

          {/* Nose */}
          <line x1="100" y1="50" x2="100" y2="65" stroke="#d4a574" strokeWidth="1" />

          {/* Mouth */}
          {state.expression === "😢" && <path d="M 90 72 Q 100 70 110 72" stroke="#d4786f" strokeWidth="2" fill="none" />}
          {state.expression === "😱" && <circle cx="100" cy="72" r="6" fill="none" stroke="#333" strokeWidth="1.5" />}
          {state.expression === "😄" && <path d="M 88 70 Q 100 78 112 70" stroke="#d4786f" strokeWidth="2" fill="none" />}
          {state.expression === "😐" && <line x1="88" y1="72" x2="112" y2="72" stroke="#d4786f" strokeWidth="2" />}
          {state.expression === "🥶" && <path d="M 90 74 Q 100 68 110 74" stroke="#d4786f" strokeWidth="2" fill="none" />}
          {state.expression === "🤔" && <path d="M 88 72 Q 100 78 112 72" stroke="#d4786f" strokeWidth="2" fill="none" />}
        </motion.g>

        {/* Body/Clothing */}
        <g className="body-group">
          {/* Torso - Different clothing based on weather */}
          {state.clothing === "raincoat" && (
            <g>
              <rect x="75" y="105" width="50" height="70" rx="10" fill="#FFD700" stroke="#333" strokeWidth="2" />
              <circle cx="100" cy="120" r="4" fill="#333" />
            </g>
          )}
          {state.clothing === "tshirt" && (
            <g>
              <rect x="75" y="105" width="50" height="60" rx="8" fill="#4a90e2" stroke="#333" strokeWidth="2" />
              <rect x="60" y="110" width="15" height="40" fill="#fdbcb4" stroke="#333" strokeWidth="1.5" />
              <rect x="125" y="110" width="15" height="40" fill="#fdbcb4" stroke="#333" strokeWidth="1.5" />
            </g>
          )}
          {state.clothing === "sweater" && (
            <g>
              <rect x="75" y="105" width="50" height="65" rx="10" fill="#e8a35d" stroke="#333" strokeWidth="2" />
              <circle cx="85" cy="120" r="3" fill="#fdbcb4" opacity="0.6" />
              <circle cx="100" cy="115" r="3" fill="#fdbcb4" opacity="0.6" />
              <circle cx="115" cy="120" r="3" fill="#fdbcb4" opacity="0.6" />
            </g>
          )}
          {state.clothing === "wintercoat" && (
            <g>
              <rect x="70" y="105" width="60" height="75" rx="12" fill="#2c3e50" stroke="#333" strokeWidth="2" />
              <circle cx="100" cy="125" r="6" fill="#FFD700" />
              <rect x="75" y="140" width="50" height="2" fill="#FFD700" />
            </g>
          )}
          {state.clothing === "jacket" && (
            <g>
              <rect x="72" y="105" width="56" height="70" rx="10" fill="#8b7355" stroke="#333" strokeWidth="2" />
              <line x1="100" y1="105" x2="100" y2="175" stroke="#333" strokeWidth="1.5" />
            </g>
          )}
        </g>

        {/* Arms */}
        <motion.g
          className="arms-group"
          animate={state.armAnimation}
          transition={state.transition}
        >
          {/* Left Arm */}
          <line x1="75" y1="120" x2="50" y2="140" stroke="#fdbcb4" strokeWidth="8" strokeLinecap="round" />
          <circle cx="48" cy="142" r="6" fill="#fdbcb4" stroke="#333" strokeWidth="1.5" />

          {/* Right Arm */}
          <line x1="125" y1="120" x2="150" y2="140" stroke="#fdbcb4" strokeWidth="8" strokeLinecap="round" />
          <circle cx="152" cy="142" r="6" fill="#fdbcb4" stroke="#333" strokeWidth="1.5" />
        </motion.g>

        {/* Legs */}
        <g className="legs-group">
          {/* Left Leg */}
          <rect x="82" y="175" width="8" height="60" rx="4" fill="#3d3d3d" stroke="#333" strokeWidth="1" />
          <circle cx="86" cy="238" r="6" fill="#333" stroke="#000" strokeWidth="1" />

          {/* Right Leg */}
          <rect x="110" y="175" width="8" height="60" rx="4" fill="#3d3d3d" stroke="#333" strokeWidth="1" />
          <circle cx="114" cy="238" r="6" fill="#333" stroke="#000" strokeWidth="1" />
        </g>

        {/* Floating Emotion Badge */}
        <motion.text
          x="100"
          y="20"
          fontSize="24"
          textAnchor="middle"
          animate={{ y: [20, 5, 20] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {state.expression}
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default WeatherCharacter;
