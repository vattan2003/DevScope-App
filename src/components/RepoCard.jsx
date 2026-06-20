import {
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt
} from "react-icons/fa";

function RepoCard({ repo }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-blue-600">
        {repo.name}
      </h3>

      <p className="text-gray-600 mt-2 min-h-[50px]">
        {repo.description || "No Description"}
      </p>

      <div className="flex gap-4 mt-4">
        <span className="flex items-center gap-1">
          <FaStar />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-1">
          <FaCodeBranch />
          {repo.forks_count}
        </span>
      </div>

      <p className="mt-3 text-sm text-gray-500">
        {repo.language}
      </p>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-blue-600"
      >
        View Repo
        <FaExternalLinkAlt />
      </a>
    </div>
  );
}

export default RepoCard;