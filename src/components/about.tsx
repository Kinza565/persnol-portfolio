// pages/about.tsx
export default function About() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-blue-500 text-white py-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">About Me</h1>
          </div>
        </header>
  
        <main className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-semibold mb-6">Hello! I'm John Doe</h2>
          <p className="text-lg mb-4">
            I'm a full-stack developer with a passion for building modern web applications. I have experience working with technologies like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-lg mb-4">
            I enjoy learning new skills, tackling challenging problems, and creating beautiful websites.
          </p>
        </main>
  
        <footer className="bg-blue-500 text-white py-6 text-center">
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </div>
    )
  }
  