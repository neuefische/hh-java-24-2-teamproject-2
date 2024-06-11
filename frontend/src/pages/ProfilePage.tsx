import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import { useEffect, useState } from "react";
import { UserType } from "../model/User.ts";
import axios from "axios";
import { logtail } from "../logger.ts";
import Button from "../components/Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";

export default function ProfilePage() {
  const [user, setUser] = useState<UserType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  function login() {
    const host =
      window.location.host === "localhost:5173"
        ? "http://localhost:8080"
        : window.location.origin;

    window.open(host + "/oauth2/authorization/github", "_self");
    logtail.info(`Logged in user successfully`);
  }

  function logout() {
    axios
      .get("/api/auth/logout")
      .then(() => {
        logtail.info(`Logged out user with ID ${user?.id} successfully`);
        mutate("/", () => {}, true);
        navigate("/");
      })
      .catch((error) => {
        logtail.error(error.message, {
          error: error,
        });
      });
  }

  function loadUser() {
    axios
      .get("/api/auth/me")
      .then((response) => {
        logtail.info(
          `Loaded user data for user with ID ${response.data.id} successfully`
        );
        setUser(response.data);
      })
      .catch((error) => {
        logtail.error("Failed to load user data", {
          error: error,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (isLoading) {
    return (
      <DefaultPageTemplate pageTitle="Profile">
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Godot</td>
            </tr>
          </tbody>
        </table>
      </DefaultPageTemplate>
    );
  }

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
      <Button onClick={logout} buttonType="default">
        Logout
      </Button>
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
