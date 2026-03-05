import { calculateAge } from "../utils/calculateAge";

function BioForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      setFormData({
        ...formData,
        dob: value,
        age: calculateAge(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div className="form-card">
      <h2>Fill Your Details</h2>

      <h3>Personal Details</h3>
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input type="date" name="dob" onChange={handleChange} />
      <input value={formData.age} placeholder="Age" readOnly />

      <h3>Family Details</h3>
      <input name="father" placeholder="Father Name" onChange={handleChange} />
      <input name="mother" placeholder="Mother Name" onChange={handleChange} />

      <h3>Education & Profession</h3>
      <input name="education" placeholder="Education" onChange={handleChange} />
      <input name="profession" placeholder="Profession" onChange={handleChange} />

      <h3>Horoscope (Optional)</h3>
      <input name="rashi" placeholder="Rashi" onChange={handleChange} />

      <h3>Profile Photo</h3>
      <input type="file" onChange={handlePhotoUpload} />
    </div>
  );
}

export default BioForm;