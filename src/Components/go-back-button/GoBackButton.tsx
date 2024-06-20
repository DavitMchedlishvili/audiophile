import "./go-back-button.css"

const GoBackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button className="goBack-btn" onClick={handleGoBack}>
      Go Back
    </button>
  );
};

export default GoBackButton;