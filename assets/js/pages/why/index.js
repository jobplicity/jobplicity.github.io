export const Why = Vue.component("Why", {
	
	methods: {
		showAbout(name) {
			this.currentAdvisor = this.advisors.filter((a) => a.name == name)[0];
			this.showCurrentAdvisor = true;
		},
		getExcerpt(text) {
			return text.substring(0, 150) + " ...";
		},
		hideAbout() {
			this.showCurrentAdvisor = false;
			this.currentAdvisor = "";
		},
	},
	template: `
      <section class="why">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-sm-8 col-xs-10 mx-auto">
              <div class="why-top">
                <h1>Why use Launch?</h1>
                <p>Have you ever signed up for an online course, hoping to learn something new, but after a while end up forgetting about it & never complete the syllabus? You’re definitely not alone. On average, students only complete 30% of the content in online courses they pay for, while 96% never look at them again after signing up. Launch solves the problem of staying motivated whilst studying online course content.</p>
              </div>



              <div class="why-list">
                <div class="row why-list-item">
                  <div class="col-md-5 col-sm-12">
                    <img class="d-block mx-auto" src="assets/img/scholarship.png">
                  </div>
                  <div class="col-md-7 col-sm-12">
                    <h1>Earn & Learn</h1>
                    <p>Ever felt like a university should be paying you to study at it? As you progress through a course, Launch allows you to unlock badges that give access to real world jobs paying real world money. This is a far better incentive to finish a course than a certification piece of paper. This time the paper is real world dollars.</p>
                  </div>
                </div>

                <hr>

                <div class="row why-list-item justify-content-sm-center">
                  <div class="col-md-7 col-sm-12 order-md-first">
                    <h1>Stay Motivated.</h1>
                    <p>We use the best psychological motivators known to humankind to get you to the end of a course.</p>

                    <p>We combine psychological motivators including, group projects, gamification, tutoring, guest speakers, paired assignments & tests into a coherent online experience to ensure you get to the end of an online course.</p>
                  </div>
                  <div class="col-md-5 col-sm-12 mx-auto order-sm-first order-1">
                    <img class="d-block mx-auto" src="assets/img/motivation.png">
                  </div>
                </div>

                <hr>

                <div class="row why-list-item justify-content-sm-center">
                  <div class="col-md-5 col-sm-12 mx-auto">
                    <img class="d-block mx-auto" src="assets/img/search.png">
                  </div>
                  <div class="col-md-7 col-sm-12">
                    <h1>Curated Content.</h1>
                    <p>Launch works with industry experts to ensure the content included in our syllabuses is world class. In addition we are constantly searching to ensure our courses are relevant to the needs of current tech trends.</p>
                  </div>
                </div>

                <hr>

              </div>

              <div class="why-bottom text-center">
                <h1>Earn money whilst studying today!</h1>

                <div class="d-grid gap-2 col-md-5 col-xs-10 mx-auto">
                  <a
                    href="https://chrome.google.com/webstore/detail/joblaunch-extension-0113/albjjckfkpinhgdmpijpkhfemccjcdbo"
                    target="_blank"
                    ref="noreferrer"
                  >
                    <button class="btn btn-lg btn-dark" type="button">Get Started Now</button>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  `,
	mounted() {
		$(window).scrollTop(0, 0);
		$("header").removeClass("transparent");
	},
});