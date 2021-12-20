const ErrorRecovery = ({ recover }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}
  >
    <h3>Oops! 🤕, Something Happened</h3>
    <button onClick={recover}>Try again</button>
  </div>
);

export default ErrorRecovery;
