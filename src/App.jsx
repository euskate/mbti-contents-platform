import { useEffect } from "react";
import ReactGA4 from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./page/Blog";
import Main from "./page/Main";
import Privacy from "./page/Privacy";
import { SignUp } from "./page/SignUp";
import Test from "./page/Test";
import TestResult from "./page/TestResult";
import { AuthCallback } from "./page/AuthCallback";

export const base_url = "https://mbti-service.shop";

function App() {
  useEffect(() => {
    ReactGA4.initialize([
      {
        trackingId: "G-GE4CNETJ0M",
        gaOptions: {
          siteSpeedSampleRate: 100,
        },
      },
    ]);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main thumnale list page */}
          <Route path="/" element={<Main />} />
          <Route path="/:testParam" element={<Test />} />
          <Route
            path="/:testParam/result/:resultParam"
            element={<TestResult />}
          />
          <Route path="/blog/:testParam" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/authCallback" element={<AuthCallback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 유저의 액션마다 GA붙이기
// Test StartButton(Intro)
// Copy Test Link Button(Intro, Result)
// Go-to-another Test Button (Result)
// Go-to-other Tests Button(Intro, Result)

// SPA(Single Page Application) & CSR
// npm i puppeteer @prerenderer/renderer-puppeteer @prerenderer/rollup-plugin
