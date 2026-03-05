function TemplateOne({ formData }) {
  return (
    <div style={{
      border: "2px solid #d4af37",
      padding: "20px",
      borderRadius: "10px",
      background: "#fff8e1"
    }}>
      <h2 style={{ textAlign: "center", color: "#b8860b" }}>
        Marriage Biodata
      </h2>

      {formData.photo && (
        <img
          src={formData.photo}
          alt="profile"
          style={{ width: "120px", borderRadius: "10px" }}
        />
      )}

      <p><b>Name:</b> {formData.name}</p>
      <p><b>Gender:</b> {formData.gender}</p>
      <p><b>Age:</b> {formData.age}</p>

      <h3>Family Details</h3>
      <p>Father: {formData.father}</p>
      <p>Mother: {formData.mother}</p>

      <h3>Education</h3>
      <p>{formData.education}</p>

      <h3>Profession</h3>
      <p>{formData.profession}</p>

      <h3>Horoscope</h3>
      <p>Rashi: {formData.rashi}</p>
    </div>
  );
}

export default TemplateOne;