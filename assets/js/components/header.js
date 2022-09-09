export const Header = {
  template : `
    <header>
      <div class="header-wrapper">
        <div>
          <router-link @click.prevent="slideToSection(0)" to="/" id="logo">
            <img src="assets/img/jl-logo.png" alt="" />
            <!-- <span>Launch</span> -->
          </router-link>
          <div class="xs-only mobile-menu">
            <ul>
              <li>
                <a href="https://app.joblaunch.co/login" id="login">
                  <img src="assets/img/login.svg" alt="" />
                  <span>LOGIN</span>
                </a>
              </li>
            </ul>
            <a href="#" @click.prevent="showMenu = !showMenu" class="menu-toggle">
              <svg v-show="!showMenu" height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg">
                <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
              </svg>

              <svg v-show="showMenu" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background: new 0 0 512.001 512.001" xml:space="preserve">
                <path
                  d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
    L284.286,256.002z"
                />
              </svg>
            </a>
            <nav class="mobile-nav xs-only" :class="{showMenu}">
              <ul>
                <li @click="showMenu = false">
                  <a @click.prevent="slideToSection(0)" href="#home">HOME</a>
                </li>
                <li @click="showMenu = false">
                 <router-link to="/why">Why Launch?</router-link>
                </li>
                <li @click="showMenu = false">
                  <a @click.prevent="slideToSection(4)" href="#how-it-works">HOW IT WORKS</a>
                </li>
                <li @click="showMenu = false">
                  <router-link to="/advisors">Advisors</router-link>
                </li>
                <li @click="showMenu = false">
                  <router-link to="/">For Business</router-link>
                </li>

                <li @click="showMenu = false">
                  <a href="https://chrome.google.com/webstore/detail/joblaunch-extension-0113/albjjckfkpinhgdmpijpkhfemccjcdbo" class="header-cta">GET STARTED</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <ul class="hidden-xs">
            <li>
              <a @click.prevent="slideToSection(0)" href="#home">HOME</a>
            </li>
            <li>
              <router-link to="/why">Why Launch?</router-link>
            </li>
            <li>
              <a @click.prevent="slideToSection(4)" href="#how-it-works">HOW IT WORKS</a>
            </li>
            <li>
              <router-link to="/advisors">Advisors</router-link>
            </li>
            <li @click="showMenu = false">
              <router-link to="/">For Business</router-link>
            </li>
            <!-- <li>
              <a href="https://app.joblaunch.co/login" id="login">
                <img src="assets/img/login.svg" alt="" />
                <span>LOGIN</span>
              </a>
            </li> -->
          </ul>
          <a href="https://app.joblaunch.co/login" class="header-cta hidden-xs">LOGIN</a>
          <a href="https://chrome.google.com/webstore/detail/joblaunch-extension-0113/albjjckfkpinhgdmpijpkhfemccjcdbo" class="header-cta hidden-xs">GET STARTED</a>
        </div>
      </div>
    </header>
  `,
  data(){
    return {
      showMenu: false,
    }
  },
  methods: {
    slideToSection(index) {
			if (this.$router.currentRoute.path != "/") {
				this.$router.push("/");
				setTimeout(() => {
					$("body,html")
						.stop()
						.animate(
							// Slide to next section
							{
								scrollTop: $("section").eq(index).offset().top,
							},
							1500
						);
				}, 500);
			} else {
				$("body,html")
					.stop()
					.animate(
						// Slide to next section
						{
							scrollTop: $("section").eq(index).offset().top,
						},
						1500
					);
			}
		},
  }
}