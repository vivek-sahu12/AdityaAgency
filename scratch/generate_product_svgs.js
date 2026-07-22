const fs = require('fs');
const path = require('path');

const dir = 'assets/products';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const products = [
  {
    filename: 'submersible_pump.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(130, 30)">
        <!-- Submersible Pump Body -->
        <rect x="50" y="20" width="50" height="180" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
        <rect x="55" y="30" width="40" height="60" rx="3" fill="#3b82f6"/>
        <!-- Stainless Steel Pump Stage Rings -->
        <line x1="50" y1="95" x2="100" y2="95" stroke="#94a3b8" stroke-width="4"/>
        <line x1="50" y1="110" x2="100" y2="110" stroke="#94a3b8" stroke-width="4"/>
        <line x1="50" y1="125" x2="100" y2="125" stroke="#94a3b8" stroke-width="4"/>
        <line x1="50" y1="140" x2="100" y2="140" stroke="#94a3b8" stroke-width="4"/>
        <!-- Suction Mesh -->
        <rect x="52" y="150" width="46" height="25" fill="#64748b"/>
        <pattern id="mesh" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#0f172a"/>
        </pattern>
        <rect x="52" y="150" width="46" height="25" fill="url(#mesh)"/>
        <!-- Top Outlet -->
        <path d="M60 20 L60 5 L90 5 L90 20 Z" fill="#475569"/>
        <!-- Cable -->
        <path d="M85 40 Q110 50 115 100 T125 180" fill="none" stroke="#2563eb" stroke-width="5"/>
        <!-- Submersible Badge -->
        <rect x="10" y="210" width="130" height="26" rx="13" fill="#10b981"/>
        <text x="75" y="227" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">V6 / V8 BOREWELL PUMP</text>
      </g>
    </svg>`
  },
  {
    filename: 'monoblock_pump.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(80, 50)">
        <!-- Motor Body (Green) -->
        <rect x="100" y="50" width="130" height="100" rx="10" fill="#059669" stroke="#047857" stroke-width="3"/>
        <!-- Cooling Fins -->
        <line x1="120" y1="50" x2="120" y2="150" stroke="#047857" stroke-width="3"/>
        <line x1="140" y1="50" x2="140" y2="150" stroke="#047857" stroke-width="3"/>
        <line x1="160" y1="50" x2="160" y2="150" stroke="#047857" stroke-width="3"/>
        <line x1="180" y1="50" x2="180" y2="150" stroke="#047857" stroke-width="3"/>
        <line x1="200" y1="50" x2="200" y2="150" stroke="#047857" stroke-width="3"/>
        <!-- Terminal Box -->
        <rect x="135" y="30" width="45" height="20" rx="4" fill="#1e293b"/>
        <!-- Pump Casing (Volute) -->
        <circle cx="70" cy="110" r="45" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
        <rect x="40" y="65" width="25" height="30" fill="#0284c7"/>
        <rect x="60" y="145" width="30" height="25" fill="#0284c7"/>
        <!-- Base Plate -->
        <rect x="50" y="165" width="190" height="16" rx="4" fill="#334155"/>
        <!-- Monoblock Label -->
        <rect x="55" y="195" width="180" height="26" rx="13" fill="#0284c7"/>
        <text x="145" y="212" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">SURFACE MONOBLOCK PUMP</text>
      </g>
    </svg>`
  },
  {
    filename: 'openwell_pump.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(80, 40)">
        <!-- Openwell Stainless Steel Body -->
        <rect x="60" y="70" width="160" height="80" rx="40" fill="#94a3b8" stroke="#475569" stroke-width="4"/>
        <rect x="90" y="70" width="100" height="80" fill="#cbd5e1"/>
        <circle cx="80" cy="110" r="25" fill="#2563eb"/>
        <circle cx="200" cy="110" r="25" fill="#2563eb"/>
        <!-- Handle Ring -->
        <path d="M110 70 A30 30 0 0 1 170 70" fill="none" stroke="#334155" stroke-width="6"/>
        <!-- Discharge Pipe Outlet -->
        <rect x="130" y="35" width="20" height="35" fill="#1e293b"/>
        <!-- Openwell Label -->
        <rect x="50" y="180" width="180" height="26" rx="13" fill="#2563eb"/>
        <text x="140" y="197" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">SUBMERSIBLE OPENWELL PUMP</text>
      </g>
    </svg>`
  },
  {
    filename: 'self_priming_pump.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(90, 50)">
        <rect x="90" y="60" width="110" height="80" rx="8" fill="#dc2626" stroke="#b91c1c" stroke-width="3"/>
        <circle cx="60" cy="105" r="35" fill="#475569"/>
        <rect x="50" y="45" width="20" height="30" fill="#334155"/>
        <rect x="40" y="145" width="170" height="12" rx="3" fill="#1e293b"/>
        <rect x="45" y="175" width="160" height="26" rx="13" fill="#dc2626"/>
        <text x="125" y="192" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">SELF-PRIMING MONOBLOCK</text>
      </g>
    </svg>`
  },
  {
    filename: 'pvc_pipe.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(50, 60)">
        <!-- Stack of Grey/Blue Rigid PVC Pipes -->
        <rect x="20" y="30" width="260" height="30" rx="15" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        <rect x="20" y="70" width="260" height="30" rx="15" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="20" y="110" width="260" height="30" rx="15" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        <!-- Pipe Bell End Sockets -->
        <path d="M260 25 L280 25 L280 65 L260 65 Z" fill="#0369a1"/>
        <path d="M260 65 L280 65 L280 105 L260 105 Z" fill="#94a3b8"/>
        <path d="M260 105 L280 105 L280 145 L260 145 Z" fill="#0369a1"/>
        <!-- Brand Stamping -->
        <text x="140" y="50" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">SUPREME RIGID PVC 6-KG/CM²</text>
        <text x="140" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">FINOLEX AGRI PRESSURE PIPE</text>
        <text x="140" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">HEAVY DUTY PVC IRRIGATION</text>
        <!-- Label -->
        <rect x="60" y="165" width="180" height="26" rx="13" fill="#0284c7"/>
        <text x="150" y="182" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">RIGID PVC PRESSURE PIPES</text>
      </g>
    </svg>`
  },
  {
    filename: 'hdpe_pipe.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(90, 40)">
        <!-- Black HDPE Pipe Coil -->
        <ellipse cx="110" cy="100" rx="90" ry="60" fill="none" stroke="#0f172a" stroke-width="22"/>
        <ellipse cx="110" cy="100" rx="72" ry="45" fill="none" stroke="#1e293b" stroke-width="18"/>
        <ellipse cx="110" cy="100" rx="55" ry="32" fill="none" stroke="#334155" stroke-width="14"/>
        <!-- Yellow Stripe on HDPE Pipe -->
        <ellipse cx="110" cy="100" rx="90" ry="60" fill="none" stroke="#eab308" stroke-width="3" stroke-dasharray="20 40"/>
        <!-- Label -->
        <rect x="20" y="180" width="180" height="26" rx="13" fill="#0f172a"/>
        <text x="110" y="197" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fde047" text-anchor="middle">HDPE COIL PIPES &amp; FITTINGS</text>
      </g>
    </svg>`
  },
  {
    filename: 'gi_pipe.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(60, 60)">
        <!-- Metallic Galvanized Iron Pipes -->
        <rect x="20" y="40" width="250" height="24" rx="12" fill="url(#giGrad)"/>
        <rect x="20" y="80" width="250" height="24" rx="12" fill="url(#giGrad)"/>
        <rect x="20" y="120" width="250" height="24" rx="12" fill="url(#giGrad)"/>
        <defs>
          <linearGradient id="giGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#cbd5e1"/>
            <stop offset="50%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#64748b"/>
          </linearGradient>
        </defs>
        <!-- Threaded Ends -->
        <line x1="260" y1="40" x2="270" y2="40" stroke="#475569" stroke-width="4"/>
        <line x1="260" y1="80" x2="270" y2="80" stroke="#475569" stroke-width="4"/>
        <line x1="260" y1="120" x2="270" y2="120" stroke="#475569" stroke-width="4"/>
        <!-- Label -->
        <rect x="55" y="165" width="180" height="26" rx="13" fill="#475569"/>
        <text x="145" y="182" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">GALVANIZED IRON (GI) PIPES</text>
      </g>
    </svg>`
  },
  {
    filename: 'casing_pipe.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(60, 60)">
        <!-- Blue PVC Casing Pipe with Slots -->
        <rect x="20" y="50" width="250" height="50" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
        <!-- Screen Slots -->
        <rect x="50" y="60" width="4" height="30" fill="#ffffff"/>
        <rect x="65" y="60" width="4" height="30" fill="#ffffff"/>
        <rect x="80" y="60" width="4" height="30" fill="#ffffff"/>
        <rect x="95" y="60" width="4" height="30" fill="#ffffff"/>
        <rect x="110" y="60" width="4" height="30" fill="#ffffff"/>
        <rect x="125" y="60" width="4" height="30" fill="#ffffff"/>
        <rect x="140" y="60" width="4" height="30" fill="#ffffff"/>
        <rect x="155" y="60" width="4" height="30" fill="#ffffff"/>
        <text x="210" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">BORE CASING</text>
        <!-- Label -->
        <rect x="55" y="145" width="180" height="26" rx="13" fill="#0369a1"/>
        <text x="145" y="162" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">PVC BOREWELL CASING PIPE</text>
      </g>
    </svg>`
  },
  {
    filename: 'sprinkler_pipe.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(60, 50)">
        <!-- Sprinkler Pipe (Black/Blue) with Latch Clamp -->
        <rect x="20" y="80" width="240" height="28" rx="14" fill="#1e293b"/>
        <!-- Quick Latch Clamp (Yellow/Steel) -->
        <rect x="120" y="70" width="25" height="48" rx="4" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
        <!-- Sprinkler Nozzle Risers & Water Spray -->
        <rect x="128" y="40" width="8" height="30" fill="#0284c7"/>
        <circle cx="132" cy="35" r="8" fill="#38bdf8"/>
        <!-- Water Spray Rays -->
        <path d="M132 30 L110 10 M132 30 L132 5 M132 30 L155 10" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        <!-- Label -->
        <rect x="50" y="155" width="180" height="26" rx="13" fill="#ca8a04"/>
        <text x="140" y="172" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">SPRINKLER PIPE SYSTEM</text>
      </g>
    </svg>`
  },
  {
    filename: 'rain_pipe.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(60, 50)">
        <!-- Flat Black Flexible Rain Pipe Hose -->
        <rect x="20" y="90" width="240" height="18" rx="9" fill="#0f172a"/>
        <!-- Fine Rain Spray Droplets -->
        <path d="M50 90 Q40 50 30 30 M80 90 Q80 40 80 20 M110 90 Q120 45 130 25 M160 90 Q150 45 140 20 M190 90 Q200 50 210 30" stroke="#00b4d8" stroke-width="2.5" fill="none"/>
        <!-- Label -->
        <rect x="50" y="145" width="180" height="26" rx="13" fill="#00b4d8"/>
        <text x="140" y="162" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">MICRO-SPRAY RAIN PIPES</text>
      </g>
    </svg>`
  },
  {
    filename: 'drip_irrigation.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(60, 50)">
        <!-- Black Drip Lateral Tape -->
        <rect x="20" y="80" width="240" height="16" rx="8" fill="#1e293b"/>
        <!-- Integrated Emitter Drippers -->
        <circle cx="80" cy="88" r="5" fill="#10b981"/>
        <circle cx="160" cy="88" r="5" fill="#10b981"/>
        <circle cx="240" cy="88" r="5" fill="#10b981"/>
        <!-- Water Drops -->
        <path d="M80 98 Q80 115 80 120 A5 5 0 0 1 75 125 A5 5 0 0 1 70 120 Q70 115 80 98 Z" fill="#38bdf8"/>
        <path d="M160 98 Q160 115 160 120 A5 5 0 0 1 155 125 A5 5 0 0 1 150 120 Q150 115 160 98 Z" fill="#38bdf8"/>
        <!-- Label -->
        <rect x="50" y="150" width="180" height="26" rx="13" fill="#10b981"/>
        <text x="140" y="167" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">COMPLETE DRIP KITS &amp; TAPE</text>
      </g>
    </svg>`
  },
  {
    filename: 'mulching_film.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(70, 50)">
        <!-- Silver/Black Mulching Sheet Roll -->
        <rect x="30" y="60" width="200" height="70" rx="8" fill="#334155" stroke="#1e293b" stroke-width="3"/>
        <ellipse cx="230" cy="95" rx="15" ry="35" fill="#64748b"/>
        <!-- Plant Holes -->
        <circle cx="70" cy="95" r="10" fill="#15803d"/>
        <circle cx="130" cy="95" r="10" fill="#15803d"/>
        <circle cx="190" cy="95" r="10" fill="#15803d"/>
        <!-- Label -->
        <rect x="40" y="155" width="180" height="26" rx="13" fill="#15803d"/>
        <text x="130" y="172" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">AGRICULTURAL MULCHING FILM</text>
      </g>
    </svg>`
  },
  {
    filename: 'motor_starter.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(100, 40)">
        <!-- L&T Metal Panel Box (Gray/Yellow) -->
        <rect x="40" y="30" width="120" height="140" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="4"/>
        <!-- Start/Stop Buttons -->
        <circle cx="75" cy="80" r="14" fill="#22c55e"/> <!-- Green Start -->
        <circle cx="125" cy="80" r="14" fill="#ef4444"/> <!-- Red Stop -->
        <!-- Ammeter / Voltmeter Gauges -->
        <rect x="65" y="115" width="70" height="30" rx="4" fill="#0f172a"/>
        <text x="100" y="135" font-family="monospace" font-size="14" font-weight="bold" fill="#22c55e" text-anchor="middle">415 V</text>
        <!-- Label -->
        <rect x="10" y="185" width="180" height="26" rx="13" fill="#1e293b"/>
        <text x="100" y="202" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">L&amp;T MOTOR STARTER &amp; PANEL</text>
      </g>
    </svg>`
  },
  {
    filename: 'wires_cables.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(60, 50)">
        <!-- Flat 3-Core Blue Submersible Cable -->
        <rect x="20" y="40" width="240" height="30" rx="6" fill="#2563eb"/>
        <circle cx="50" cy="55" r="8" fill="#d97706"/> <!-- Copper core 1 -->
        <circle cx="140" cy="55" r="8" fill="#d97706"/> <!-- Copper core 2 -->
        <circle cx="230" cy="55" r="8" fill="#d97706"/> <!-- Copper core 3 -->
        <!-- Winding Wire Coil -->
        <ellipse cx="140" cy="115" rx="80" ry="30" fill="none" stroke="#b45309" stroke-width="12"/>
        <!-- Label -->
        <rect x="50" y="160" width="180" height="26" rx="13" fill="#b45309"/>
        <text x="140" y="177" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">SUBMERSIBLE CABLE &amp; WIRE</text>
      </g>
    </svg>`
  },
  {
    filename: 'pipe_fittings.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <rect width="400" height="300" fill="#f0f7f4"/>
      <g transform="translate(70, 50)">
        <!-- Brass Foot Valve & PVC Elbow -->
        <path d="M40 90 L40 50 L80 50 L80 70 L60 70 L60 90 Z" fill="#0284c7"/>
        <rect x="120" y="50" width="40" height="60" rx="6" fill="#d97706"/> <!-- Brass Valve -->
        <circle cx="140" cy="40" r="15" fill="#dc2626"/> <!-- Red Wheel Handle -->
        <rect x="190" y="60" width="50" height="40" rx="4" fill="#334155"/> <!-- HDPE Coupling -->
        <!-- Label -->
        <rect x="40" y="145" width="180" height="26" rx="13" fill="#0f172a"/>
        <text x="130" y="162" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">VALVES, ELBOWS &amp; CLAMPS</text>
      </g>
    </svg>`
  }
];

products.forEach(p => {
  fs.writeFileSync(path.join(dir, p.filename), p.svg, 'utf8');
});
console.log('15 SVG product images generated successfully!');
