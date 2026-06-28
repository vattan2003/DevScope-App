import { useState } from "react";

import Searchbar from "./components/Searchbar";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";
import logo from "./components/logo1.png"

import "./App.css"

import {
  getUser,
  getRepos
} from "./services/githubAPI";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUser = async (username) => {
    try {
      setLoading(true);

      const userData = await getUser(username);
      const repoData = await getRepos(username);

      setUser(userData);
      setRepos(repoData);

    } catch (error) {
      alert("User Not Found");
    }

    setLoading(false);
  };

  return (
    <div  id="heropage" className="min-h-screen bg-gray-100">

      <div className="bg-gradient-to-r from-blue-700 to-purple-700 py-16">
        <img style={{width:"200px",display: "block",
    margin: "0 auto",}} src={logo}></img>

        <h1 className="text-center text-white text-5xl font-bold">
          DevScope
        </h1>

        <p className="text-center text-gray-200 mt-4">
          Explore GitHub Repositories Instantly
        </p>

        <div className="mt-8 px-4">
          <Searchbar onSearch={searchUser} />
        </div>

      </div>
<hero >
      <div  className="max-w-6xl mx-auto p-6">

        {loading && (
          <h2 className="text-center text-2xl">
            Loading...
          </h2>
        )}

        {user && (
          <ProfileCard user={user} />
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
            />
          ))}

        </div>

      </div>
      </hero>

    </div>
  );
}

export default App;