import PrimaryFocus from "./About/PrimaryFocus";
import ShowMoreContent from "./About/ShowMoreContent";
import "./About.css"

const About= () => {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute itryhrthyw htrhrthtrhrthrh rther herherheyrthsfdhh h hfhf sfh h fh ffhfdbdfg g rure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
    return (
      <div>
            <ShowMoreContent text={content} />
            <PrimaryFocus></PrimaryFocus>
         
         <h3>Languages</h3>
         <section class="languages content-card">
            <div class="languages-column">

              <h3 class="h3 languages-title-second">Coding Languages</h3>

            <ul class="languages-list">

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">JavaScript</h5>
                  <data value="90">90%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">TypeScript</h5>
                  <data value="75">75%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">CSS</h5>
                  <data value="100">100%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">PHP</h5>
                  <data value="50">50%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">Python</h5>
                  <data value="25">25%</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

            </ul>
             </div>
            <div class="languages-column">

              <h3 class="h3 languages-title-second">Human Languages</h3>

            <ul class="languages-list">

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">English</h5>
                  <data value="fluent">Fluent</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">German</h5>
                  <data value="fluent">Fluent</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">Bulgarian</h5>
                  <data value="fluent">Native</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">Turkish</h5>
                  <data value="fluent">Bilingual</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

              <li class="languages-item">

                <div class="title-wrapper">
                  <h5 class="h5">Russian</h5>
                  <data value="fluent">Basic</data>
                </div>

                <div class="languages-progress-bg">
                  <div class="languages-progress-fill"></div>
                </div>

              </li>

            </ul>

            </div>
          </section>
         <h3>Development Skills</h3>
          <div align="center" className="skills">
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="node js"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="node js"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="node js"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="40" width="52" alt="php logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" width="52" alt="python logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" height="40" width="52" alt="linux logo"  />
          </div>
      </div>
    );
  };
  
  export default About;