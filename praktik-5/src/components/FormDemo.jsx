import React, { useState } from "react";

const FormDemo = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    usia: "",
    jurusan: "",
    semester: "1",
    newsletter: false,
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Handle Blur
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  // Validasi Form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama lengkap harus diisi!";
    } else if (formData.nama.trim().length < 3) {
      newErrors.nama = "Nama minimal 2 karakter!";
    }

    if (!formData.email) {
      newErrors.email = "Email harus diisi!";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid!";
    }

    if (!formData.password) {
      newErrors.password = "Password harus diisi!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter!";
    }

    if (!formData.usia) {
      newErrors.usia = "Usia harus diisi!";
    } else if (formData.usia < 17 || formData.usia > 60) {
      newErrors.usia = "Usia harus antara 17 - 60 tahun!";
    }

    if (!formData.jurusan) {
      newErrors.jurusan = "Jurusan harus dipilih!";
    }

    if (!formData.gender) {
      newErrors.gender = "Jenis kelamin harus dipilih!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Data form berhasil:", formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  // Reset
  const handleReset = () => {
    setFormData({
      nama: "",
      email: "",
      password: "",
      usia: "",
      jurusan: "",
      semester: "1",
      newsletter: false,
      gender: "",
    });
    setErrors({});
    setTouched({});
  };

  // Cek Error
  const hasError = (fieldName) => {
    return errors[fieldName] && touched[fieldName];
  };

  return (
    <div className="form-demo">
      <h2>Demo Form Handling</h2>

      {isSubmitted && (
        <div className="success-message">
          Form berhasil dikirim! Data sudah tersimpan.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="form-container"
      >
        {/* Nama */}
        <div className="form-group">
          <label htmlFor="nama" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${hasError("nama") ? "error" : ""}`}
            placeholder="Masukkan nama lengkap"
          />
          {hasError("nama") && (
            <span className="error-text">{errors.nama}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${hasError("email") ? "error" : ""}`}
            placeholder="contoh@email.com"
          />
          {hasError("email") && (
            <span className="error-text">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${hasError("password") ? "error" : ""}`}
            placeholder="Minimal 6 karakter"
          />
          {hasError("password") && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        {/* Usia */}
        <div className="form-group">
          <label htmlFor="usia" className="form-label">
            Usia
          </label>
          <input
            type="number"
            id="usia"
            name="usia"
            value={formData.usia}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${hasError("usia") ? "error" : ""}`}
            placeholder="17 - 60"
            min="17"
            max="60"
          />
          {hasError("usia") && (
            <span className="error-text">{errors.usia}</span>
          )}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label className="form-label">Jenis Kelamin</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Laki-laki"
                checked={formData.gender === "Laki-laki"}
                onChange={handleChange}
              />
              Laki-laki
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Perempuan"
                checked={formData.gender === "Perempuan"}
                onChange={handleChange}
              />
              Perempuan
            </label>
          </div>
          {hasError("gender") && (
            <span className="error-text">{errors.gender}</span>
          )}
        </div>

        {/* Jurusan */}
        <div className="form-group">
          <label htmlFor="jurusan" className="form-label">
            Jurusan
          </label>
          <select
            name="jurusan"
            id="jurusan"
            value={formData.jurusan}
            onChange={handleChange}
            className={`form-select ${hasError("jurusan") ? "error" : ""}`}
          >
            <option value="">Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Teknik Komputer">Teknik Komputer</option>
            <option value="Bisnis Digital">Bisnis Digital</option>
          </select>
          {hasError("jurusan") && (
            <span className="error-text">{errors.jurusan}</span>
          )}
        </div>

        {/* Semester */}
        {/* <div className="form-group">
          <label htmlFor="semester" className="form-label">
            Semester
          </label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="form-select"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <option key={sem} value={sem.toString()}>
                Semester {sem}
              </option>
            ))}
          </select>
        </div> */}

        {/* Newsletter
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Saya ingin berlangganan newsletter
          </label>
        </div> */}

        {/* Tombol */}
        {/* <div className="form-buttons">
          <button type="submit" className="btn btn-success"> */}
            {/* Daftar */}
          {/* </button>
          <button type="reset" className="btn btn-secondary"> */}
            {/* Reset */}
          {/* </button>
        </div> */}
      </form>

      {/* Preview Data */}
      {/* <div className="data-preview"> */}
        {/* <h3>Preview Data Form:</h3> */}
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default FormDemo;
