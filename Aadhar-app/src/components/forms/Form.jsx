import { useState } from 'react';
import PropTypes from 'prop-types';

const initialFormData = {
  name: '',
  fathersName: '',
  dateOfBirth: '',
  address: '',
  locality: '',
  pinCode: '',
  state: '',
  contactDetails: '',
};

function Form({ onSubmit }) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData); 
  };

  return (
    <div className="form-container">
      <h2>Kindly Enter Your Details</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Fathers Name:
          <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <div className='form-address'>
            <div className='container'> 

        <label >
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
            </div>
        <label>
          Locality:
          <input type="text" name="locality" value={formData.locality} onChange={handleChange} required />
        </label>
        <label>
          Pin Code:
          <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} required />
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </label>
        </div>
       
        <label>
          Contact Details:
          <input type="text" name="contactDetails" value={formData.contactDetails} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
