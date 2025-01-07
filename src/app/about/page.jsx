export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About the Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to A Junior developer's thoughts! This space is dedicated to sharing the thoughts and experiences of a Junior Developer navigating the exciting world of technology and development.
            </p>

            <p>
              Here, you'll find articles and reflections on anything tech-related—ranging from programming concepts and development tools to industry trends and personal lessons learned along the journey. As a junior developer, this blog serves as both a platform to document growth and an opportunity to connect with others in the tech community.
            </p>

            <p>
              The blog covers a variety of topics, including web development, software engineering, coding practices, and more. Whether you're just starting your own tech journey or looking for relatable insights, there's something here for everyone.
            </p>

            <p>
              Built using Next.js and{" "}
              <a
                href="https://go.clerk.com/fgJHKlt"
                target="_blank"
                className="text-teal-500 hover:underline"
              >
                Clerk
              </a>
              , this blog is also a small example of the projects and technologies that inspire me. 
            </p>

            <p>
              I’d love to hear your thoughts—feel free to leave comments, like posts, and engage in discussions. Let's grow together as a community of developers, sharing knowledge and encouraging one another.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
