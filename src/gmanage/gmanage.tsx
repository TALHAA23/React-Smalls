import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
export default function GManage() {
  const [accessToken, setAccessToken] = useState();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setAccessToken(tokenResponse);
    },
  });

  useEffect(() => {
    if (!accessToken) return;

    console.log(accessToken);
    //https://www.googleapis.com/oauth2/v1/userinfo?alt=json
    fetch(
      "https://www.googleapis.com/auth/gmail.addons.current.message.action",
      {
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [accessToken]);

  return (
    <div>
      <button onClick={() => login()}>Login in</button>
    </div>
  );
}
