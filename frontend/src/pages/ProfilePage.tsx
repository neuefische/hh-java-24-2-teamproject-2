import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import { useEffect, useState } from "react";
import { UserType } from "../model/User.ts";
import axios from "axios";
import { logtail } from "../logger.ts";
import Button from "../components/Button/Button.tsx";

export default function ProfilePage() {
  function login() {
    const host =
      window.location.host === "localhost:5173"
        ? "http://localhost:8080"
        : window.location.origin;

    window.open(host + "/oauth2/authorization/github", "_self");
  }

  const [user, setUser] = useState<UserType | undefined>();

  function loadUser() {
    axios
      .get("/api/auth/me")
      .then((response) => {
        logtail.info("User loaded");
        setUser(response.data);
      })
      .catch((error) => {
        logtail.error(error.message, {
          error: error,
        });
      });
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (!user) {
    return (
      <DefaultPageTemplate pageTitle="Login">
        <Button buttonType="default" onClick={login}>
          Login with GitHub
        </Button>
      </DefaultPageTemplate>
    );
  }

  return (
    <DefaultPageTemplate pageTitle="Profile">
      <img src={user?.avatar_url} alt={`Profile picture of ${user?.name}`} />
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{user?.name}</td>
          </tr>
        </tbody>
      </table>
    </DefaultPageTemplate>
  );
}
