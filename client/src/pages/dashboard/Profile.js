import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import "../../assets/styles/dashboardFormPage.css";
import { Container } from "@mui/system";
import { Avatar, Card, Chip } from "@mui/material";
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <>
      <section>
        <form className="form" onSubmit={handleSubmit}>
          <h3>profile</h3>
          {showAlert && <Alert />}
          <div className="form-center">
            <FormRow
              type="text"
              name="name"
              value={name}
              handleChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <FormRow
              type="text"
              labelText="last name"
              name="lastName"
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
              className="form-input"
            />
            <FormRow
              type="email"
              name="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            <FormRow
              type="text"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
              className="form-input"
            />
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "save changes"}
            </button>
          </div>
        </form>
      </section>
      <Container maxWidth="sm">
        <div className="profile-card">
          <div className="profile-avtar">
            <Avatar sx={{ bgcolor: "#0e7c86"}}>A</Avatar>
          </div>
          <p>
            <Chip
              // avatar={
              //   <Avatar alt="Natacha" >Email</Avatar>
              // }
              sx={{marginTop:'10px'}}
              label={user.email}
              variant="outlined"
            />
          </p>
          <h2>
            {user.name} {user.lastName}
          </h2>

          <p>Location: {user.location}</p>
        </div>
      </Container>
    </>
  );
};

export default Profile;
