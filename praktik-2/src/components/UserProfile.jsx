import React from "react";

const UserProfile = ({ user, isLoggedIn }) => {
  // Jika tidak login, tampilkan pesan
  if (!isLoggedIn) {
    return (
      <div className="alert">
        <p>Silakan login terlebih dahulu</p>
      </div>
    );
  }

  // Jika login, tampilkan profile menggunakan Fragment
  return (
    <>
      <div className="profile-header">
        <h2>Profile Pengguna</h2>
        <img
          src={user.avatar || "/default-avatar.png"}
          alt="Avatar"
          className="avatar"
        />
      </div>

      <div className="profile-details">
        <p>
          <strong>Nama:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Bergabung sejak:</strong>{" "}
          {new Date(user.joinDate).toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default UserProfile;
