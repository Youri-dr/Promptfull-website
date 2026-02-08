// SVG visual components for slideshow
export const visuals = {
  // 💡 Lightbulb - Flickers on
  lightbulb: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <defs>
        <linearGradient id="bulbGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#FFF59D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFA726;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Bulb base -->
      <path class="bulb-base" d="M80 120 L80 140 L120 140 L120 120" fill="#E0E0E0"/>
      <rect class="bulb-screw" x="85" y="140" width="30" height="4" fill="#BDBDBD"/>
      <rect class="bulb-screw" x="85" y="146" width="30" height="4" fill="#BDBDBD"/>
      <rect class="bulb-screw" x="85" y="152" width="30" height="4" fill="#BDBDBD"/>
      
      <!-- Bulb glass -->
      <ellipse class="bulb-glass" cx="100" cy="80" rx="40" ry="50" fill="url(#bulbGlow)" opacity="0"/>
      
      <!-- Light rays -->
      <g class="light-rays" opacity="0">
        <line x1="100" y1="30" x2="100" y2="10" stroke="#FFF59D" stroke-width="3" stroke-linecap="round"/>
        <line x1="130" y1="45" x2="145" y2="30" stroke="#FFF59D" stroke-width="3" stroke-linecap="round"/>
        <line x1="145" y1="80" x2="165" y2="80" stroke="#FFF59D" stroke-width="3" stroke-linecap="round"/>
        <line x1="70" y1="45" x2="55" y2="30" stroke="#FFF59D" stroke-width="3" stroke-linecap="round"/>
        <line x1="55" y1="80" x2="35" y2="80" stroke="#FFF59D" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // ⚖️ Weight - Heavy to Light transformation
  weight: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <!-- Heavy weight -->
      <g class="weight-heavy">
        <rect x="70" y="80" width="60" height="60" rx="8" fill="#757575"/>
        <rect x="85" y="60" width="30" height="20" rx="4" fill="#9E9E9E"/>
        <line x1="100" y1="60" x2="100" y2="30" stroke="#9E9E9E" stroke-width="4"/>
        <circle cx="100" cy="30" r="6" fill="#9E9E9E"/>
      </g>
      
      <!-- Light feather (hidden initially) -->
      <g class="weight-light" opacity="0">
        <path d="M100 50 Q90 80 85 110 Q100 100 115 110 Q110 80 100 50" fill="#E1F5FE" stroke="#0277BD" stroke-width="2"/>
        <line x1="100" y1="50" x2="85" y2="70" stroke="#0277BD" stroke-width="1"/>
        <line x1="100" y1="60" x2="87" y2="80" stroke="#0277BD" stroke-width="1"/>
        <line x1="100" y1="70" x2="88" y2="90" stroke="#0277BD" stroke-width="1"/>
        <line x1="100" y1="80" x2="90" y2="100" stroke="#0277BD" stroke-width="1"/>
      </g>
    </svg>
  `,

  // 🌊 Flow - Smooth flowing lines
  flow: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#4FC3F7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0277BD;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <g class="flow-lines">
        <path class="flow-line flow-1" d="M20 80 Q60 60 100 80 T180 80" 
              stroke="url(#flowGradient)" stroke-width="4" fill="none" stroke-linecap="round"
              stroke-dasharray="200" stroke-dashoffset="200"/>
        <path class="flow-line flow-2" d="M20 100 Q60 120 100 100 T180 100" 
              stroke="url(#flowGradient)" stroke-width="4" fill="none" stroke-linecap="round"
              stroke-dasharray="200" stroke-dashoffset="200"/>
        <path class="flow-line flow-3" d="M20 120 Q60 100 100 120 T180 120" 
              stroke="url(#flowGradient)" stroke-width="4" fill="none" stroke-linecap="round"
              stroke-dasharray="200" stroke-dashoffset="200"/>
      </g>
    </svg>
  `,

  // 🤖→👤 Morph - Robot to Human face
  morph: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <!-- Robot face -->
      <g class="face-robot">
        <rect x="60" y="60" width="80" height="80" rx="8" fill="#78909C" stroke="#455A64" stroke-width="3"/>
        <circle cx="80" cy="90" r="8" fill="#00E676"/>
        <circle cx="120" cy="90" r="8" fill="#00E676"/>
        <rect x="85" y="115" width="30" height="8" rx="4" fill="#455A64"/>
        <rect x="70" y="50" width="10" height="15" rx="2" fill="#78909C"/>
        <rect x="120" y="50" width="10" height="15" rx="2" fill="#78909C"/>
      </g>
      
      <!-- Human face (hidden initially) -->
      <g class="face-human" opacity="0">
        <circle cx="100" cy="100" r="40" fill="#FFCC80"/>
        <circle cx="85" cy="95" r="5" fill="#424242"/>
        <circle cx="115" cy="95" r="5" fill="#424242"/>
        <path d="M85 115 Q100 125 115 115" stroke="#424242" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M70 85 Q75 80 80 85" stroke="#6D4C41" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M120 85 Q115 80 110 85" stroke="#6D4C41" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // ☕ Coffee - Steaming cup
  coffee: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <!-- Cup -->
      <path d="M60 100 L60 150 Q60 160 70 160 L130 160 Q140 160 140 150 L140 100 Z" 
            fill="#FFFFFF" stroke="#8D6E63" stroke-width="3"/>
      <ellipse cx="100" cy="100" rx="40" ry="8" fill="#6D4C41"/>
      
      <!-- Handle -->
      <path d="M140 115 Q160 115 160 135 Q160 145 140 145" 
            stroke="#8D6E63" stroke-width="3" fill="none"/>
      
      <!-- Steam -->
      <g class="steam">
        <path class="steam-1" d="M80 90 Q75 70 80 50" stroke="#BDBDBD" stroke-width="3" 
              fill="none" stroke-linecap="round" opacity="0"/>
        <path class="steam-2" d="M100 90 Q105 65 100 45" stroke="#BDBDBD" stroke-width="3" 
              fill="none" stroke-linecap="round" opacity="0"/>
        <path class="steam-3" d="M120 90 Q125 70 120 50" stroke="#BDBDBD" stroke-width="3" 
              fill="none" stroke-linecap="round" opacity="0"/>
      </g>
      
      <!-- Saucer -->
      <ellipse cx="100" cy="165" rx="50" ry="8" fill="#D7CCC8"/>
    </svg>
  `,

  // ❤️ Heart - Pulse animation
  heart: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6B9D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#C2185B;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <path class="heart-shape" 
            d="M100 150 L70 120 Q50 100 50 80 Q50 60 70 60 Q85 60 100 75 Q115 60 130 60 Q150 60 150 80 Q150 100 130 120 Z"
            fill="url(#heartGradient)"/>
      
      <!-- Pulse line -->
      <polyline class="pulse-line" points="30,100 50,100 60,80 70,120 80,100 180,100" 
                stroke="#FF1744" stroke-width="3" fill="none" 
                stroke-dasharray="200" stroke-dashoffset="200"/>
    </svg>
  `,

  // ✨ Spark - Lightbulb to spark to fire
  spark: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <!-- Initial spark -->
      <g class="spark-initial">
        <polygon points="100,50 110,90 150,90 120,110 130,150 100,125 70,150 80,110 50,90 90,90" 
                 fill="#FDD835"/>
        <circle cx="100" cy="100" r="15" fill="#FFF59D"/>
      </g>
      
      <!-- Fire (hidden initially) -->
      <g class="spark-fire" opacity="0">
        <ellipse cx="100" cy="140" rx="30" ry="10" fill="#FF6F00" opacity="0.3"/>
        <path d="M100 140 Q80 110 85 80 Q90 100 100 90 Q110 100 115 80 Q120 110 100 140" fill="#FF9800"/>
        <path d="M100 130 Q90 110 92 90 Q95 105 100 95 Q105 105 108 90 Q110 110 100 130" fill="#FFC107"/>
        <path d="M100 120 Q95 105 96 90 Q98 100 100 95 Q102 100 104 90 Q105 105 100 120" fill="#FFEB3B"/>
      </g>
    </svg>
  `,

  // ⚙️ Gear - Turning gear
  gear: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <g class="gear-rotate">
        <!-- Gear teeth -->
        <circle cx="100" cy="100" r="50" fill="#607D8B"/>
        <rect x="95" y="45" width="10" height="15" fill="#455A64"/>
        <rect x="95" y="140" width="10" height="15" fill="#455A64"/>
        <rect x="140" y="95" width="15" height="10" fill="#455A64"/>
        <rect x="45" y="95" width="15" height="10" fill="#455A64"/>
        
        <g transform="rotate(45 100 100)">
          <rect x="95" y="45" width="10" height="15" fill="#455A64"/>
          <rect x="95" y="140" width="10" height="15" fill="#455A64"/>
          <rect x="140" y="95" width="15" height="10" fill="#455A64"/>
          <rect x="45" y="95" width="15" height="10" fill="#455A64"/>
        </g>
        
        <!-- Center -->
        <circle cx="100" cy="100" r="20" fill="#37474F"/>
        <circle cx="100" cy="100" r="10" fill="#263238"/>
      </g>
    </svg>
  `,

  // 📊 Split - Chaos to Order
  split: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <!-- Chaos side (left) -->
      <g class="split-chaos">
        <line x1="20" y1="60" x2="80" y2="90" stroke="#F44336" stroke-width="3"/>
        <line x1="30" y1="80" x2="70" y2="60" stroke="#FF9800" stroke-width="3"/>
        <line x1="25" y1="100" x2="85" y2="70" stroke="#FFC107" stroke-width="3"/>
        <line x1="40" y1="120" x2="75" y2="110" stroke="#F44336" stroke-width="3"/>
        <circle cx="50" cy="70" r="5" fill="#F44336"/>
        <circle cx="35" cy="90" r="5" fill="#FF9800"/>
        <circle cx="60" cy="100" r="5" fill="#FFC107"/>
      </g>
      
      <!-- Divider -->
      <line x1="100" y1="40" x2="100" y2="160" stroke="#BDBDBD" stroke-width="2" stroke-dasharray="5,5"/>
      
      <!-- Order side (right) -->
      <g class="split-order" opacity="0">
        <rect x="115" y="60" width="70" height="8" rx="4" fill="#4CAF50"/>
        <rect x="115" y="80" width="70" height="8" rx="4" fill="#66BB6A"/>
        <rect x="115" y="100" width="70" height="8" rx="4" fill="#81C784"/>
        <rect x="115" y="120" width="70" height="8" rx="4" fill="#A5D6A7"/>
        <circle cx="110" cy="64" r="4" fill="#4CAF50"/>
        <circle cx="110" cy="84" r="4" fill="#66BB6A"/>
        <circle cx="110" cy="104" r="4" fill="#81C784"/>
        <circle cx="110" cy="124" r="4" fill="#A5D6A7"/>
      </g>
    </svg>
  `,

  // 🎉 Confetti - Celebration
  confetti: `
    <svg viewBox="0 0 200 200" class="visual-svg">
      <g class="confetti-pieces">
        <!-- Various confetti pieces -->
        <rect class="confetti c1" x="40" y="20" width="8" height="12" fill="#FF6B9D" opacity="0"/>
        <circle class="confetti c2" cx="80" cy="30" r="5" fill="#4FC3F7" opacity="0"/>
        <polygon class="confetti c3" points="120,25 125,35 115,35" fill="#FDD835" opacity="0"/>
        <rect class="confetti c4" x="160" y="35" width="10" height="8" fill="#AB47BC" opacity="0"/>
        
        <circle class="confetti c5" cx="50" cy="60" r="6" fill="#66BB6A" opacity="0"/>
        <rect class="confetti c6" x="90" y="50" width="12" height="8" fill="#FF7043" opacity="0"/>
        <polygon class="confetti c7" points="140,55 145,65 135,65" fill="#26C6DA" opacity="0"/>
        
        <rect class="confetti c8" x="30" y="90" width="8" height="12" fill="#FFCA28" opacity="0"/>
        <circle class="confetti c9" cx="70" cy="100" r="5" fill="#EC407A" opacity="0"/>
        <polygon class="confetti c10" points="110,95 115,105 105,105" fill="#5C6BC0" opacity="0"/>
        <circle class="confetti c11" cx="150" cy="90" r="6" fill="#26A69A" opacity="0"/>
        
        <rect class="confetti c12" x="45" y="130" width="10" height="8" fill="#AB47BC" opacity="0"/>
        <circle class="confetti c13" cx="85" cy="140" r="5" fill="#FF6B9D" opacity="0"/>
        <polygon class="confetti c14" points="125,135 130,145 120,145" fill="#FDD835" opacity="0"/>
        <rect class="confetti c15" x="165" y="130" width="8" height="12" fill="#4FC3F7" opacity="0"/>
      </g>
    </svg>
  `,
};