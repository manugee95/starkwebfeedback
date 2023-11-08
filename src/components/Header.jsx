import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: "center",
    padding: "10px"
  };
  return (
    <div style={headerStyles}>
      <h2>{text}</h2>
    </div>
  );
}

Header.defaultProps = {
  text: "My Feedback App",
  bgColor: "black",
  textColor: "deeppink",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
