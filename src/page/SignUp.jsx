import { supabase } from "../supabase/client";

export const SignUp = () => {
  const handleSocialLogin = async () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      option: {
        redirectTo: "http://localhost:5173/authCallback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };
  return (
    <>
      <h1>소셜 로그인</h1>
      <p>간편하게 로그인해보세요.</p>
      <div>
        <button
          onClick={handleSocialLogin}
          style={{ width: "10rem", cursor: "pointer" }}
        >
          구글 로그인
        </button>
      </div>
    </>
  );
};

// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=337969163034-fite515jr5s3ocukfbvpu2rqig0pvoth.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fssvxjjhohfzklhtnaxpn.supabase.co%2Fauth%2Fv1%2Fcallback&response_type=code&scope=email%20profile&state=eyJhbGciOiJIUzI1NiIsImtpZCI6IkNCN1NOOThTQy9aZ042UWoiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NDEyMzQ3MDIsInNpdGVfdXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJmdW5jdGlvbl9ob29rcyI6bnVsbCwicHJvdmlkZXIiOiJnb29nbGUiLCJyZWZlcnJlciI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTE3My8iLCJmbG93X3N0YXRlX2lkIjoiIn0.8WJTs7E72Ome0CHchyfTUEwdhVmGQQ6XVYW5qpMnyws&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow
