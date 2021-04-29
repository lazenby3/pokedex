const ProgressBar = (props) => {
    const { label, bgcolor, completed } = props;

    const mylabel = label + " " + completed;
  
    const containerStyles = {
      height: 20,
      width: '80%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${mylabel}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;