import { useNavigate } from "react-router";
import React, { useState, ChangeEvent } from "react";
import { useContext } from "react";
import Context from "../Contexts/contexts";
import Card from "./Card";
import classes from "./homepage.module.css";
import { HomePageDetails } from "../Interface/interface";

function HomePage() {
  const [userDetails, setUserDetails] = useState<HomePageDetails>({
    firstName: "",
    lastName: "",
    gender: "",
    prefferedLanguage: "",
  });
  const navigate = useNavigate();
  const context = useContext(Context);

  function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    navigate("/question");
    if (userDetails.prefferedLanguage.length > 0) {
      return context.setSelectedLanguage(userDetails.prefferedLanguage);
    }
  }
  return (
    <Card>
      <div className={classes.body}>
        <header>Login</header>
        <form>
          <input
            className={classes.input_body}
            type="first name"
            placeholder="Please Enter Your First Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))
            }
            value={userDetails.firstName}
          ></input>

          <input
            className={classes.input_body}
            type="text"
            placeholder="Please Enter Your Last Name"
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
            value={userDetails.lastName}
          ></input>
        </form>
        <div className={classes.select_body}>
          <label htmlFor="Gender" className={classes.label_text}>
            Please Select Your Gender
          </label>

          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setUserDetails({ ...userDetails, gender: e.target.value })
            }
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="new">New</option>
          </select>
        </div>
        <div className={classes.select_body}>
          <label htmlFor="Language" className={classes.label_text}>
            Please Select Your Preffered Test Language
          </label>
          <select
            name="Preferred Language"
            onClick={(e: any) =>
              setUserDetails((prev) => ({
                ...prev,
                prefferedLanguage: e.target.value,
              }))
            }
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <button
          className={classes.button}
          name="submit"
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            clickHandler(e)
          }
          disabled={
            !(
              userDetails.prefferedLanguage &&
              userDetails.firstName &&
              userDetails.lastName
            )
          }
        >
          Submit
        </button>
      </div>
    </Card>
  );
}

export default HomePage;
