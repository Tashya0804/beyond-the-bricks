
import { useState } from 'react'
import './App.css'
import Academy from './Academy'
import Programming from './Programming'

const pathways = [
  {
    number: '01',
    title: 'Robot Game',
    description: 'Design, build, and program robots to take on exciting challenges.',
    color: 'orange',
    icon: '⚙️',
    link: 'Explore robot game'
  },
  {
    number: '02',
    title: 'Innovation Project',
    description: 'Find real-world problems, research solutions, and bring ideas to life.',
    color: 'purple',
    icon: '💡',
    link: 'Explore innovation'
  },
  {
    number: '03',
    title: 'Core Values',
    description: 'Discover the teamwork and creativity that make FIRST special.',
    color: 'blue',
    icon: '✦',
    link: 'Explore core values'
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  function navigateTo(page, event) {
    if (event) event.preventDefault()
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  function goHome(event) {
    navigateTo('home', event)
  }

  function openAcademy(event) {
    navigateTo('academy', event)
  }

  function openProgramming(event) {
    navigateTo('programming', event)
  }

  return (
    <div className="app">

      <nav className="navbar">
        <a href="#home" className="brand" onClick={goHome}>
          <div className="brand-mark">B.</div>
          <span>BEYOND THE BRICKS</span>
        </a>

        <div className="nav-links">
          <a href="#academy" onClick={openAcademy}>Academy</a>
          <a href="#programming" onClick={openProgramming}>Programming Lab</a>
          <a href="#explore" onClick={goHome}>Explore</a>
          <a href="#community" onClick={goHome}>Community</a>
          <a href="#future" onClick={goHome}>Our vision</a>
        </div>

        <a
          href="#academy"
          className="nav-cta"
          onClick={openAcademy}
        >
          Start exploring <span>↗</span>
        </a>
      </nav>

      {currentPage === 'academy' ? (
        <Academy />
      ) : currentPage === 'programming' ? (
        <Programming />
      ) : (

        <main>

          <section className="hero" id="home">
            <div className="hero-content">
              <div className="announcement">
                <span className="announcement-dot"></span>
                BUILT FOR THE NEXT GENERATION
                <span className="announcement-arrow">↗</span>
              </div>

              <h1>
                The future of
                <br />
                robotics is
                <br />
                <span className="gradient-text">built together.</span>
              </h1>

              <p className="hero-description">
                A global space for young innovators to learn, create,
                collaborate, and take their robotics journey beyond
                the competition.
              </p>

              <div className="hero-buttons">
                <a
                  href="#academy"
                  className="button-primary"
                  onClick={openAcademy}
                >
                  Explore FLL Academy <span>↗</span>
                </a>
                <a href="#community" className="button-secondary">
                  Meet the community
                </a>
              </div>

              <div className="hero-caption">
                <div className="caption-symbols">
                  <span>FLL</span>
                  <span>FTC</span>
                  <span>FRC</span>
                </div>
                <p>One connected world of robotics.</p>
              </div>
            </div>

            <div className="hero-art">
              <div className="art-blob blob-one"></div>
              <div className="art-blob blob-two"></div>

              <div className="orbit-ring"></div>
              <div className="orbit-ring ring-two"></div>

              <div className="main-art-card">
                <div className="art-card-top">
                  <span>THE NEXT GENERATION</span>
                  <span>✳</span>
                </div>

                <div className="art-robot">
                  <div className="robot-antenna"></div>
                  <div className="robot-head">
                    <div className="robot-eye"></div>
                    <div className="robot-eye"></div>
                  </div>
                  <div className="robot-body">
                    <div className="robot-panel">B.</div>
                  </div>
                  <div className="robot-wheel left-wheel"></div>
                  <div className="robot-wheel right-wheel"></div>
                </div>

                <div className="art-card-bottom">
                  <strong>IMAGINE. BUILD. REPEAT.</strong>
                  <span>01 / 03</span>
                </div>
              </div>

              <div className="floating-tag tag-yellow">
                <span>✦</span> THINK BIGGER
              </div>

              <div className="floating-tag tag-blue">
                <span>↗</span> BUILD TOGETHER
              </div>
            </div>
          </section>

          <section className="marquee">
            <div>
              BUILD <span>✳</span> EXPLORE <span>✳</span> INNOVATE
              <span>✳</span> CONNECT <span>✳</span> BUILD <span>✳</span>
              EXPLORE <span>✳</span> INNOVATE <span>✳</span>
            </div>
          </section>

          <section className="academy-section" id="academy">
            <div className="section-topline">
              <span>01 / THE LEARNING SPACE</span>
              <span>START WITH FLL ↘</span>
            </div>

            <div className="academy-heading">
              <div>
                <h2>
                  Your ideas deserve
                  <br />
                  <span>a place to grow.</span>
                </h2>
              </div>

              <p>
                Whether you're writing your first line of code or
                preparing for a championship, there's always
                something new to discover.
              </p>
            </div>

            <div className="pathway-grid" id="explore">
              {pathways.map((item) => (
                <article className={`pathway-card ${item.color}`} key={item.number}>
                  <div className="pathway-card-top">
                    <span>{item.number} / PATHWAY</span>
                    <span className="pathway-icon">{item.icon}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <a href="#academy" onClick={openAcademy}>
                    {item.link} <span>↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="academy-bottom">
              <span>LEARN AT YOUR OWN PACE.</span>
              <span>BUILD SOMETHING EXTRAORDINARY. ✳</span>
            </div>
          </section>

          <section className="manifesto" id="future">
            <div className="manifesto-left">
              <span className="section-label">02 / THE BIGGER PICTURE</span>
              <h2>
                Robotics
                <br />
                should have
                <br />
                <span>no boundaries.</span>
              </h2>
            </div>

            <div className="manifesto-right">
              <div className="manifesto-icon">✳</div>
              <p>
                Talent is everywhere. Opportunity should be too.
                We believe every young innovator deserves access
                to knowledge, resources, and a community that
                helps them reach further.
              </p>
              <a href="#community">Discover our mission ↗</a>
            </div>
          </section>

          <section className="progression">
            <div className="progression-heading">
              <span className="section-label">03 / THE ROBOTICS JOURNEY</span>
              <h2>
                One journey.
                <br />
                <span>Endless possibilities.</span>
              </h2>
              <p>
                Your first robot is only the beginning.
                Keep learning, keep building, and keep going.
              </p>
            </div>

            <div className="progression-track">
              <div className="stage stage-fll">
                <span className="stage-number">01</span>
                <strong>FLL</strong>
                <span>DISCOVER</span>
                <p>Find your spark.</p>
              </div>

              <div className="track-arrow">→</div>

              <div className="stage stage-ftc">
                <span className="stage-number">02</span>
                <strong>FTC</strong>
                <span>INNOVATE</span>
                <p>Challenge yourself.</p>
              </div>

              <div className="track-arrow">→</div>

              <div className="stage stage-frc">
                <span className="stage-number">03</span>
                <strong>FRC</strong>
                <span>ENGINEER</span>
                <p>Build something bigger.</p>
              </div>
            </div>
          </section>

          <section className="community-section" id="community">
            <div className="community-decoration">✳</div>
            <span className="section-label">04 / A WORLD OF INNOVATORS</span>

            <h2>
              Better together.
              <br />
              <span>Stronger everywhere.</span>
            </h2>

            <p>
              Imagine connecting with teams across continents,
              sharing ideas, learning from one another, and
              building a robotics community without borders.
            </p>

            <a href="mailto:hello@beyondthebricks.org" className="community-button">
              Be part of the movement <span>↗</span>
            </a>
          </section>

        </main>
      )}

      <footer className="footer">
        <a href="#home" className="brand" onClick={goHome}>
          <div className="brand-mark">B.</div>
          <span>BEYOND THE BRICKS</span>
        </a>

        <p>Made for the builders of tomorrow.</p>

        <a href="#home" onClick={goHome}>BACK TO TOP ↑</a>
      </footer>

    </div>
  )
}

export default App
