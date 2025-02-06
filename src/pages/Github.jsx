import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PulseLoader } from "react-spinners";
import useGithubProfile from "../components/useGithubProfile";
import axios from "axios";

const Github = () => {
  const { profile, loading, error } = useGithubProfile(
    "https://api.github.com/users/gduchidze/repos"
  );

  const [githubUrl, setGithubUrl] = useState("");
  const [textArea, setTextArea] = useState("");
  const [sended, setIsSended] = useState(false);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  function send() {
    setIsLoading(true);
    setIsSended(true);
    if (!githubUrl.trim() || !textArea.trim()) {
      console.error("Error: GitHub URL or question is empty!");
      return;
    }

    const payload = {
      github_url: `https://github.com/gduchidze/${githubUrl.trim()}`,
      question: textArea.trim(),
    };


    axios
      .post("https://chatrepo-rag-1.onrender.com/query", payload)
      .then((response) => {
        setResponse(response.data.response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        setIsSended(false);
        setIsLoading(false);
      });
  }

  function deleteChat() {
    setGithubUrl("");
    setTextArea("");
    setIsSended(false);
    setResponse("");
  }

  return (
    <main className="github">
      {sended && (
        <div className="flex flex-col gap-4 px-10!">
          <p className="self-end messages">{githubUrl + ": " + textArea}</p>
          {isLoading ? <PulseLoader /> : <p className="self-start messages">{response}</p>}
          {response !== "" && (
            <button className="btn text-3xl" onClick={deleteChat}>
              {t("newQuestion")}
            </button>
          )}
        </div>
      )}
      <div className="questions">
        {error && <p className="text-red-500">{error.message}</p>}
        {!loading && !error && githubUrl === "" && (
          <ul>
            {profile.map((repo) => (
              <li key={repo.id} onClick={() => setGithubUrl(repo.name)}>
                {repo.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {!sended && (
        <div>
          {githubUrl !== "" && (
            <div className="flex justify-between items-center title-c text-3xl">
              <h3 className="title-c text-3xl">{githubUrl}</h3>
              <h3 onClick={() => setGithubUrl("")} className="cursor-pointer">
                X
              </h3>
            </div>
          )}
          <form
            className="flex items-center justify-between"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <textarea
              className="ask title-c mt-5!"
              rows={4}
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea}
            ></textarea>
            <button type="submit" className="btn">
              {t("send")}
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default Github;
