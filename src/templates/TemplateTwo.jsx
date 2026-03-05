function TemplateTwo({ formData }) {
  return (
    <div style={{
      border: "2px solid #333",
      padding: "20px",
      borderRadius: "10px",
      background: "#f5f5f5"
    }}>
      <h2 style={{ textAlign: "center" }}>
        Bio Data Profile
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {formData.photo && (
          <img
            src={formData.photo}
            alt="profile"
            style={{ width: "130px", borderRadius: "50%" }}
          />
        )}

        <div>
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Gender:</b> {formData.gender}</p>
          <p><b>Age:</b> {formData.age}</p>
        </div>
      </div>

      <hr />

      <p><b>Father:</b> {formData.father}</p>
      <p><b>Mother:</b> {formData.mother}</p>
      <p><b>Education:</b> {formData.education}</p>
      <p><b>Profession:</b> {formData.profession}</p>
      <p><b>Rashi:</b> {formData.rashi}</p>
    </div>
  );
}

export default TemplateTwo;