const DANCE_MODES = [
  { key: 'dancing', label: '댄스', emoji: '💃' },
  { key: 'spinning', label: '스핀', emoji: '🌀' },
  { key: 'bouncing', label: '점프', emoji: '⬆️' },
  { key: 'swaying', label: '스웨이', emoji: '🎸' },
];

export default function AnimationControls({ mode, isPlaying, onToggle, onChangeMode }) {
  return (
    <div className="controls">
      <button
        className={`btn-main ${isPlaying ? 'playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? '정지' : '댄스 시작'}
      >
        {isPlaying ? '⏹ 정지' : '▶ 댄스 시작'}
      </button>

      <div className="mode-buttons">
        {DANCE_MODES.map(({ key, label, emoji }) => (
          <button
            key={key}
            className={`btn-mode ${mode === key ? 'active' : ''}`}
            onClick={() => onChangeMode(key)}
            aria-label={label}
          >
            {emoji} {label}
          </button>
        ))}
      </div>
    </div>
  );
}
