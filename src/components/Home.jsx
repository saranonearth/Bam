import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Context } from "../store/Context";
import config from "../config.json";

const Home = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const responseHandler = (response) => {
    const { givenName, imageUrl, email } = response.profileObj;
    const payload = {
      username: givenName,
      imageUrl,
      email,
    };
    dispatch({ type: "LOGIN", payload });
    history.push("/connect");
  };
  return (
    <div className="banner v-center">
      <div>
        <h1 style={{ fontSize: "10em" }}>Bam</h1>
        <div className="center">
          <div>
            <GoogleLogin
              clientId={config.GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={responseHandler}
              onFailure={responseHandler}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
