import PropTypes from "prop-types";
const AadharCard = ({ userInfo, uid }) => {
  return (
    <div className="aadhar-card">
      <div className="aadhar-container">
        <div className="imgAdhar">
          <img
            src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
            alt=""
          />
        </div>
        <div className="adhar-details">
          <p>
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Father’s Name:</strong> {userInfo.fathersName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {userInfo.dateOfBirth}
          </p>
          <p>
            <strong>Address:</strong> {userInfo.address} {userInfo.locality} {userInfo.state} {userInfo.pinCode}
          </p>
          <p>
            <strong>Contact Details:</strong> {userInfo.contactDetails}
          </p>
          <div className="UUid-Section">
            <p>{uid}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
AadharCard.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fathersName: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    locality: PropTypes.string.isRequired,
    pinCode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    contactDetails: PropTypes.string.isRequired,
  }).isRequired,
  uid: PropTypes.string.isRequired,
};
export default AadharCard;
