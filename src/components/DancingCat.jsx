import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const NOTES = ['♪', '♫', '♬', '🎵', '🎶'];

export default function DancingCat({ mode }) {
  return (
    <div className="cat-wrapper">
      {mode !== 'idle' && (
        <div className="notes-container">
          {NOTES.map((note, i) => (
            <span
              key={i}
              className="music-note"
              style={{
                left: `${10 + i * 18}%`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${1.2 + (i % 3) * 0.4}rem`,
              }}
            >
              {note}
            </span>
          ))}
        </div>
      )}
      <img
        src={catSvg}
        alt="Dancing cat"
        className={`cat-image ${mode}`}
        draggable={false}
      />
    </div>
  );
}
