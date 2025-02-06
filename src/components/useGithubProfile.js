import { useState, useEffect } from "react";
import axios from "axios";

const useGithubProfile = (url) => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { profile, loading, error };
};

export default useGithubProfile;