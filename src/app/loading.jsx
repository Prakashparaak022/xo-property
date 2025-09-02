export default function Loading() {
  const word = "KNMG";
  const bgSize = `${word.length * 100}%`;

  return (
    <div className="loader-container">
      <div className="spinner" />

      <div className="txt-loading" role="status" aria-label="Loading">
        {word.split("").map((letter, i, arr) => {
          const pos = `${(i / (arr.length - 1)) * 100}%`;
          const delay = `${i * 0.12}s`;
          return (
            <span
              key={i}
              className="letters-loading"
              data-letter={letter}
              style={{
                "--pos": pos,
                "--delay": delay,
                "--bgsize": bgSize,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}
