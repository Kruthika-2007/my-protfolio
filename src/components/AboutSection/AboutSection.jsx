import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='kruthika' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hello i am Kruthika A curious Computer Science student passionate about creating clean, responsive, and user-friendly websites.
I enjoy learning new technologies, solving real-world problems, and turning ideas into interactive web experiences.
Currently exploring the world of Web Development. </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
