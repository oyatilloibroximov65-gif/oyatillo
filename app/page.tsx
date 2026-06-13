export default function Home() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      location: "Remote",
      salary: "$5000/month",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Microsoft",
      location: "New York",
      salary: "$6500/month",
      type: "Full Time",
    },
    {
      id: 3,
      title: "UI UX Designer",
      company: "Adobe",
      location: "London",
      salary: "$4000/month",
      type: "Remote",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Berlin",
      salary: "$7000/month",
      type: "Hybrid",
    },
    {
      id: 5,
      title: "React Developer",
      company: "Netflix",
      location: "Canada",
      salary: "$5500/month",
      type: "Remote",
    },
    {
      id: 6,
      title: "Cyber Security Analyst",
      company: "Tesla",
      location: "USA",
      salary: "$8000/month",
      type: "Full Time",
    },
  ];

  return (
    <main>
      <nav className="navbar">
        <div className="logo">JobSphere</div>

        <ul className="menu">
          <li>Home</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="navBtns">
          <button className="loginBtn">Login</button>
          <button className="registerBtn">Register</button>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <span className="badge">#1 Job Platform</span>

          <h1>Find Your Dream Job Faster Than Ever</h1>

          <p>
            Discover thousands of jobs from top companies around the world.
          </p>

          <div className="searchBox">
            <input type="text" placeholder="Job title..." />
            <input type="text" placeholder="Location..." />
            <button>Search Jobs</button>
          </div>

          <div className="heroStats">
            <div><h2>10K+</h2><p>Jobs</p></div>
            <div><h2>5K+</h2><p>Companies</p></div>
            <div><h2>50K+</h2><p>Users</p></div>
            <div><h2>98%</h2><p>Success</p></div>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="categoryGrid">
          <div className="categoryCard"><h3>Development</h3><p>2450 Jobs</p></div>
          <div className="categoryCard"><h3>Design</h3><p>1450 Jobs</p></div>
          <div className="categoryCard"><h3>Marketing</h3><p>1100 Jobs</p></div>
          <div className="categoryCard"><h3>Security</h3><p>850 Jobs</p></div>
          <div className="categoryCard"><h3>Finance</h3><p>920 Jobs</p></div>
          <div className="categoryCard"><h3>Engineering</h3><p>1700 Jobs</p></div>
        </div>
      </section>

      <section className="jobsSection">
        <h2>Featured Jobs</h2>

        <div className="jobsGrid">
          {jobs.map((job) => (
            <div key={job.id} className="jobCard">
              <div className="jobTop">
                <h3>{job.title}</h3>
                <span>{job.type}</span>
              </div>

              <p>{job.company}</p>

              <div className="jobInfo">
                <span>📍 {job.location}</span>
                <span>💰 {job.salary}</span>
              </div>

              <button>Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="companies">
        <h2>Trusted By Top Companies</h2>

        <div className="companyGrid">
          <div>Google</div>
          <div>Microsoft</div>
          <div>Amazon</div>
          <div>Meta</div>
          <div>Tesla</div>
          <div>Netflix</div>
          <div>Adobe</div>
          <div>Spotify</div>
        </div>
      </section>

      <footer className="footer">
        <h2>JobSphere</h2>
        <p>Find the best jobs around the world.</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>

      {/* 🤖 AI FLOAT BUTTON (ORQASIDA AI EFFECT BOR) */}
      <div className="aiBubble">
        <span className="aiIcon">🤖</span>
      </div>
    </main>
  );
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_OPENAI_API_KEY`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Sen job search assistant AI san." },
        { role: "user", content: message },
      ],
    }),
  });

  const data = await response.json();

  return NextResponse.json({
    reply: data.choices?.[0]?.message?.content || "Xatolik",
  });
}

async function sendMessage(text: string) {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text }),
  });

  const data = await res.json();
  return data.reply;
}

