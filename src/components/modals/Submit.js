export default function Submit({ isOpen, closeSubmit }) {
  if (isOpen) {
    return (
      <div className="submit-modal">
        <div>
          <h2>Thank you for your submission :)</h2>
          <button onClick={closeSubmit}>Close</button>
        </div>
      </div>
    );
  }
  return null;
}
