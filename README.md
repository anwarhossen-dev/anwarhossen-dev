<p align="center">
  <div style="max-width: 900px; margin: 0 auto; position: relative; overflow: hidden; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.3);">
    <div class="carousel" style="display: flex; transition: transform 0.8s ease-in-out;">
      <!-- Slide 1: MERN Stack Banner -->
      <div class="slide" style="min-width: 100%; position: relative;">
        <img src="https://wallpapercave.com/wp/wp8903933.jpg" alt="MERN Stack" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 36px; font-weight: bold; text-shadow: 2px 2px 10px rgba(0,0,0,0.8); text-align: center;">
          MERN Stack Developer
        </div>
      </div>
      
      <!-- Slide 2: Full Stack Illustration -->
      <div class="slide" style="min-width: 100%; position: relative;">
        <img src="https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg" alt="Full Stack Developer" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #000; font-size: 36px; font-weight: bold; text-shadow: 2px 2px 10px rgba(255,255,255,0.8); text-align: center;">
          Full-Stack Expertise
        </div>
      </div>
      
      <!-- Slide 3: Programming Languages Banner -->
      <div class="slide" style="min-width: 100%; position: relative;">
        <img src="https://www.shutterstock.com/image-vector/programming-web-banner-best-languages-260nw-2392481249.jpg" alt="Programming Languages" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 36px; font-weight: bold; text-shadow: 2px 2px 10px rgba(0,0,0,0.8); text-align: center;">
          Building with Modern Tech
        </div>
      </div>
      
      <!-- Slide 4: Another MERN Banner -->
      <div class="slide" style="min-width: 100%; position: relative;">
        <img src="https://itechnasik.com/wp-content/uploads/2023/11/Mern-Stack-Developer-1024x534.png" alt="MERN Stack Pro" style="width: 100%; height: auto; display: block;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 36px; font-weight: bold; text-shadow: 2px 2px 10px rgba(0,0,0,0.8); text-align: center;">
          React • Node • MongoDB • Express
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div style="position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px;">
      <span class="dot active" onclick="currentSlide(0)" style="height: 12px; width: 12px; background-color: #38b2ac; border-radius: 50%; display: inline-block; cursor: pointer; transition: background 0.3s;"></span>
      <span class="dot" onclick="currentSlide(1)" style="height: 12px; width: 12px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer; transition: background 0.3s;"></span>
      <span class="dot" onclick="currentSlide(2)" style="height: 12px; width: 12px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer; transition: background 0.3s;"></span>
      <span class="dot" onclick="currentSlide(3)" style="height: 12px; width: 12px; background-color: #bbb; border-radius: 50%; display: inline-block; cursor: pointer; transition: background 0.3s;"></span>
    </div>
  </div>

  <script>
    let slideIndex = 0;
    const slides = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');

    function showSlides(n) {
      if (n >= 4) slideIndex = 0;
      if (n < 0) slideIndex = 3;
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
      
      dots.forEach((dot, i) => {
        dot.style.backgroundColor = (i === slideIndex) ? '#38b2ac' : '#bbb';
      });
    }

    function currentSlide(n) {
      slideIndex = n;
      showSlides(slideIndex);
    }

    // Auto play
    setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 5000);

    // Initial load
    showSlides(slideIndex);
  </script>
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&duration=4000&pause=1000&color=38b2ac&width=600&lines=Building+Interactive+Web+Applications;React,+Node.js,+MongoDB,+Express;Deployment+%26+Optimization;Always+Learning+New+Technologies" alt="Typing SVG">
</p>

<h1 align="center">Hi 👋, I'm MD. Anwar Hossen</h1>
<h3 align="center">MERN Stack | Full-Stack Developer | Deployment & Optimization | Bangladesh 🇧🇩</h3>

- 🔭 I’m currently working on [Artify](https://tubular-sundae-69af35.netlify.app)
- 🌱 I’m currently learning **Programming Hero**
- 👯 I’m looking to collaborate on [Local Chef Bazaar](https://localchefbazaar-612c0.web.app/)
- 🤝 I’m looking for help with [Ticket System](https://stirring-frangipane-d150ce.netlify.app/)
- 💬 Ask me about **React, MongoDB, Node.js**
- 📫 How to reach me **anwarhossendeveloper21@gmail.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
  <a href="https://wa.me/01777498421" target="_blank"><img src="https://i.ibb.co/VcwzbmzZ/whatsapp.png" alt="WhatsApp" height="30" width="40"/></a>
  <a href="https://www.linkedin.com/in/anowar21" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40"/></a>
  <a href="https://www.facebook.com/md.anowarhossenkabir" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="Facebook" height="30" width="40"/></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="nextjs" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
</p>

<!-- ===================== GitHub Hero Stats ===================== -->
<div align="center" style="background: linear-gradient(90deg, #0e75b6, #38b2ac); border-radius: 20px; padding: 30px; max-width: 900px; margin: auto; color: white; font-family: Arial, sans-serif;">
  <h2 style="margin-bottom: 10px;">📊 My GitHub Stats</h2>
  <p style="margin-bottom: 25px;">Top languages, contributions, and streaks at a glance</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anwarhossen-dev&layout=compact&theme=radical" alt="Top Languages" width="400" style="border-radius: 10px;"/>
    <img src="https://github-readme-stats.vercel.app/api?username=anwarhossen-dev&show_icons=true&theme=radical" alt="GitHub Stats" width="400" style="border-radius: 10px;"/>
  </div>
  <div style="margin-top: 25px;">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=anwarhossen-dev&theme=radical" alt="GitHub Streak" width="820" style="border-radius: 10px;"/>
  </div>
</div>

---
## 🌌 Animated Particle Background Preview
Check out a live interactive demo of my particle animation:
[**Live Demo →**](https://mythemeway.github.io/Dark-Particle/)
![Particle Preview](https://raw.githubusercontent.com/anwarhossen-dev/assets/main/particle-preview.gif)
> 🔹 The above GIF shows the WebGL particle animation in action. For full interactivity, click the live demo link.

---
### 💻 Featured Projects
| Project            | Demo                                      | Repo                                      |
|--------------------|-------------------------------------------|-------------------------------------------|
| Artify             | [Live](https://tubular-sundae-69af35.netlify.app) | [Repo](https://github.com/anwarhossen-dev/your-repo-if-any) |
| Local Chef Bazaar  | [Live](https://localchefbazaar-612c0.web.app)     | [Repo](https://github.com/anwarhossen-dev/your-repo-if-any) |
| Ticket System      | [Live](https://stirring-frangipane-d150ce.netlify.app) | [Repo](https://github.com/anwarhossen-dev/your-repo-if-any) |

---
<p align="center">
  Made with ❤️ by MD. Anwar Hossen
</p>
