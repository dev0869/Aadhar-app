
const AadharCard=({ userInfo, uid })=> {
  return (
    <div className="aadhar-card">
      <h2>Aadhar Card</h2>
      <p><strong>Name:</strong> {userInfo.name}</p>
      <p><strong>Father’s Name:</strong> {userInfo.fathersName}</p>
      <p><strong>Date of Birth:</strong> {userInfo.dateOfBirth}</p>
      <p><strong>Address:</strong> {userInfo.address}</p>
      <p><strong>Contact Details:</strong> {userInfo.contactDetails}</p>
      <p><strong>UID:</strong> {uid}</p>
    </div>
  );
}

export default AadharCard;
