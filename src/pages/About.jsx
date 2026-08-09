import './AboutPage.css';
import SkillCard from '../components/SkillCard/SkillCard';

function About() {
  return (
    <main className="about-page">

      {/* ================= ABOUT INTRO ================= */}

      <section className="about-intro">
        <div className="about-container">

          <div className="about-intro-text">
            <span className="about-label">GET TO KNOW ME</span>

            <h1>
              I'm <span>Kruthika.</span>
            </h1>

            <p>
              I'm a Computer Science student who is currently exploring
              web development and learning how to turn ideas into working
              projects.
            </p>

            <p>
              I'm still at the beginning of my journey, so I'm focusing on
              building strong fundamentals, experimenting with different
              technologies, and learning by actually creating things.
            </p>
          </div>

          <div className="about-intro-image">
            <img src="/Photo.jpeg" alt="Kruthika" />
          </div>

        </div>
      </section>


      {/* ================= CURRENTLY LEARNING ================= */}

      <section className="about-block">
        <div className="about-container">

          <div className="about-section-heading">
            <span>01</span>
            <h2>Currently Learning</h2>
          </div>

          <div className="learning-grid">

            <div className="learning-card">
              <span className="learning-number">01</span>
              <h3>Web Development</h3>
              <p>
                Learning how websites are designed, structured and made
                interactive using modern web technologies.
              </p>
            </div>

            <div className="learning-card">
              <span className="learning-number">02</span>
              <h3>React</h3>
              <p>
                Exploring components, props, state, routing and building
                responsive interfaces with React.
              </p>
            </div>

            <div className="learning-card">
              <span className="learning-number">03</span>
              <h3>JavaScript</h3>
              <p>
                Strengthening my programming fundamentals and learning how
                JavaScript brings web pages to life.
              </p>
            </div>

            <div className="learning-card">
              <span className="learning-number">04</span>
              <h3>Programming</h3>
              <p>
                Improving my problem-solving skills and understanding the
                fundamentals behind writing better programs.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}

      <section className="about-block skills-section">
        <div className="about-container">

          <div className="about-section-heading">
            <span>02</span>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">

            <SkillCard
              name="HTML5"
              level="Intermediate"
              icon="🌐"
            />

            <SkillCard
              name="CSS3"
              level="Intermediate"
              icon="🎨"
            />

            <SkillCard
              name="JavaScript"
              level="Intermediate"
              icon="⚡"
            />

            <SkillCard
              name="React"
              level="Beginner"
              icon="⚛️"
            />

            <SkillCard
              name="Python"
              level="Intermediate"
              icon="🐍"
            />

            <SkillCard
              name="Java"
              level="Beginner"
              icon="☕"
            />

            <SkillCard
              name="C Programming"
              level="Intermediate"
              icon="💻"
            />

            <SkillCard
              name="Arduino"
              level="Beginner"
              icon="🔧"
            />

          </div>

        </div>
      </section>


      {/* ================= MY JOURNEY ================= */}

      <section className="about-block journey-section">
        <div className="about-container">

          <div className="about-section-heading">
            <span>03</span>
            <h2>My Journey</h2>
          </div>

          <div className="journey-content">

            <div className="journey-line"></div>

            <div className="journey-text">

              <h3>Learning by Building</h3>

              <p>
                I'm not trying to learn everything at once. I'm taking
                things one step at a time and using projects to understand
                what I'm learning.
              </p>

              <p>
                Some projects are small, some are experimental, and some
                teach me what I need to improve next. For me, every project
                is another step forward.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FIRST PROJECT ================= */}

      <section className="about-block first-project-section">
        <div className="about-container">

          <div className="about-section-heading">
            <span>04</span>
            <h2>Where It Started</h2>
          </div>

          <div className="first-project-card">

            <div className="first-project-icon">
              🔌
            </div>

            <div>

              <h3>Digital Measuring Tape</h3>

              <p>
                One of my first hands-on engineering projects was a digital
                measuring tape built using an Arduino Uno, an ultrasonic
                sensor and an LCD display.
              </p>

              <div className="project-mini-tags">
                <span>Arduino Uno</span>
                <span>Ultrasonic Sensor</span>
                <span>LCD</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CURRENT GOAL ================= */}

      <section className="about-block goal-section">
        <div className="about-container">

          <div className="goal-card">

            <span className="about-label">CURRENT GOAL</span>

            <h2>
              Learn. Build. <span>Improve.</span>
            </h2>

            <p>
              My current goal is to strengthen my fundamentals, build more
              real projects, become comfortable with development tools, and
              gradually grow into a confident software developer.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;