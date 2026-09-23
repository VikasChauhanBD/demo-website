import { useEffect } from "react";

export default function AppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(ua)) {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.Pharma",
      );
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.replace(
        "https://apps.apple.com/in/app/Pharma/id6760164235",
      );
    } else {
      window.location.replace("/"); // fallback
    }
  }, []);

  return <p style={{ textAlign: "center" }}>Redirecting...</p>;
}
