// The signature element: a Pacific Northwest horizon — a low back ridge, a
// nearer ridge, and a tree line that breaks above the crest. Used as the seam
// between sections. The fill is inherited from the section that follows, so the
// next section appears to rise out of the landscape.

const pine = (x, base, w, h) => {
  const hw = w / 2
  return [
    `M${x},${base - h}`,
    `L${x + hw * 0.5},${base - h * 0.6}`,
    `L${x + hw * 0.28},${base - h * 0.62}`,
    `L${x + hw * 0.76},${base - h * 0.3}`,
    `L${x + hw * 0.46},${base - h * 0.32}`,
    `L${x + hw},${base}`,
    `L${x - hw},${base}`,
    `L${x - hw * 0.46},${base - h * 0.32}`,
    `L${x - hw * 0.76},${base - h * 0.3}`,
    `L${x - hw * 0.28},${base - h * 0.62}`,
    `L${x - hw * 0.5},${base - h * 0.6}`,
    'Z',
  ].join(' ')
}

// Deterministic tree line so the horizon never re-shuffles between renders.
// [x, width, height] — heights stay modest so the crest reads as a horizon
// rather than a row of spikes.
const TREES = [
  [18, 26, 40], [52, 20, 30], [84, 24, 44], [116, 18, 26], [146, 24, 38],
  [182, 20, 30], [216, 28, 48], [252, 20, 32], [288, 24, 36], [322, 18, 26],
  [356, 26, 44], [392, 20, 30], [428, 24, 38], [462, 18, 26], [494, 24, 40],
  [530, 20, 32], [566, 28, 46], [602, 20, 28], [636, 24, 36], [670, 18, 26],
  [704, 26, 42], [740, 20, 30], [776, 24, 38], [810, 18, 26], [842, 24, 40],
  [878, 20, 32], [914, 28, 48], [950, 20, 28], [984, 24, 36], [1018, 18, 26],
  [1052, 26, 42], [1088, 20, 30], [1124, 24, 38], [1158, 18, 26], [1190, 24, 40],
  [1226, 20, 32], [1262, 28, 46], [1298, 20, 28], [1332, 24, 36], [1366, 18, 26],
  [1400, 26, 42], [1432, 20, 30],
]

export default function Ridgeline({ className = '' }) {
  return (
    <div className={`ridge ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 110" role="presentation">
        {/* far ridge — sits back in the mist */}
        <path
          className="ridge__far"
          d="M0,110 L0,72 L110,54 L206,68 L318,46 L424,66 L536,52 L648,70 L764,50 L878,68 L992,54 L1108,70 L1222,52 L1336,66 L1440,56 L1440,110 Z"
        />
        {/* near ridge */}
        <path
          className="ridge__near"
          d="M0,110 L0,88 L126,74 L228,86 L344,68 L452,84 L566,72 L678,88 L792,70 L910,86 L1024,74 L1142,88 L1258,72 L1360,84 L1440,76 L1440,110 Z"
        />
        {/* tree line — breaks above the crest in the low spots */}
        <g className="ridge__trees">
          {TREES.map(([x, w, h], i) => (
            <path key={i} d={pine(x, 110, w, h)} />
          ))}
        </g>
      </svg>
    </div>
  )
}
