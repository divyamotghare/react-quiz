function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button onClick={() => {}} key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
