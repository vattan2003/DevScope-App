function ProfileCard({ user }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full"
        />

        <div>
          <h2 className="text-3xl font-bold">
            {user.name}
          </h2>

          <p className="text-gray-500">
            @{user.login}
          </p>

          <p className="mt-2">
            {user.bio}
          </p>

          <div className="flex gap-6 mt-4">
            <div>
              <span className="font-bold">
                {user.followers}
              </span>
              <p>Followers</p>
            </div>

            <div>
              <span className="font-bold">
                {user.following}
              </span>
              <p>Following</p>
            </div>

            <div>
              <span className="font-bold">
                {user.public_repos}
              </span>
              <p>Repos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;