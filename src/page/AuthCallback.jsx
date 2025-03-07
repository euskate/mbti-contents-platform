import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

export const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkLogin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("user", user);
      if (user && user.email) {
        // 우리 User 테이블에 유저 정보 새로 만들어 넣기
        const { data } = await supabase
          .from("user_info")
          .select("uid")
          .eq("email", user.email);

        console.log("data.length", data.length);
        if (data.length === 0) {
          const new_user_info = {
            email: user.email,
            uid: user.id,
          };
          //console.log(new_user_info);
          // 우리의 user_info 테이블에 값 넣기
          //const response =
          await supabase.from("user_info").upsert(new_user_info);
          //console.log(response);
          // 마이 페이지로 보내기
        }
        // 마이 페이지로 보내기
        // navigate("myPage")
      } else {
        // 다시 로그인 페이지로 보내기
        navigate("/signUp");
      }
    };
    checkLogin();
  }, []);
  return (
    <>
      <h1>AuthCallback</h1>
    </>
  );
};
