export const Advisors = Vue.component("Advisors", {
	data() {
		return {
			currentAdvisor: "",
			showCurrentAdvisor: false,
			advisors: [
				// {
				// 	name: "Michael Watson",
				// 	role: "Regional Director for Australia Pacific for the Microsoft Reactor",
				// 	image: "assets/img/michael.jpg",
				// 	description: `
				// 		<p>Michael Watson is Regional Lead for Microsoft Reactors in the APAC Region, where he oversees the operations and programming for sites in Australia, China and India. The program focuses on supporting Startups and Developers, learn, connect and build in a community of like-minded individuals.</p><p>Previously Michael was the Founder and Director of the Sydney Startup Hub (the Hub), where he was responsible for formation of the Hub from its inception with industry leaders, through to the finalisation of the construction prior to its opening in February 2018.</p><p>Michael brings a wealth of experience in both the public and private sector from his twelve years in the New South Wales Government, working on a number of major projects such as the Sydney Telstra V8 Supercars where Michael was the Head of Operations and Logistics for the Governments Motor Racing Authority to his time leading the Startup team within Jobs for New South Wales.</p><p>Michael is a keen sportsman, having played first grade cricket for North Sydney. Michael is currently coaching his sons’ cricket and working on his golf handicap when he has spare time.</p><p>Michael holds a Bachelor of Sports Studies (Business) degree which has given his a broad range of skills that has assisted his career to date.</p>
				// 		`,
				// },
				{
					name: "Maxine Sherin",
					role: "Festival Director at Spark Festival",
					image: `${window.location.origin}/about/assets/img/maxine.jpg`,
					description: `<p>Maxine Sherrin is the Program Director of Spark Festival, Australia's largest event for startups, innovators and entrepreneurs. She was previously a co-founder of the Web Directions series of conferences for web professionals and has been following the development of a tech startup ecosystem in Australia since the mid-nineties.</p><p>In her current role with Spark Festival Maxine brings together founders and future-founders, accelerators, hubs, incubators, investors, corporates and more: all the people and organisations who make up the startup ecosystem. She does this because she believes the kind of new economy businesses Australia needs will only thrive in the context of a strong and open network.</p>
`,
				},
				{
					name: "Murray Hurps",
					role: "Director of Entrepreneurship, University of Technology Sydney.",
					image: `${window.location.origin}/about/assets/img/murray.jpg`,
					description:
						"<p>Murray Hurps is the Director of Entrepreneurship for UTS, leading the work of the University to inspire and support technology-enabled entrepreneurs.</p> <p>Australia&rsquo;s recovery needs job-ready graduates, productivity-boosting research, and new entrepreneurs spreading innovations, creating new jobs and driving our recovery. Murray&rsquo;s work is enabling this critical third pillar of work at UTS.</p> <p>Before building the largest community of student-launched startups at UTS, Murray was CEO of Fishburners, growing it from 100 desks of startup space, to 750 across Sydney, Brisbane and Shanghai, and supporting 508 startups during this time.</p> <p>He founded Startup Muster, the largest survey of Australian startups for five years, reviewing a few thousand Australian startups each year.</p> <p>He founded FUELD, Westpac&rsquo;s data-focused accelerator program.</p> <p>He&rsquo;s been a Director of the Australian Information Industry Association, Spark Festival and WorkVentures, all in support of Australian technology-enabled entrepreneurs.</p> <p>He does what he does because at 16 he founded Ad Muncher, an ad-blocking startup that grew for 14 years, to a peak of 100 million active users. He wants more Australians to understand and pursue the opportunities they have today through technology-enabled entrepreneurship, and for Australia to realise the benefits of this as well.</p>",
				},
			],
		};
	},
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
    <section class="advisors">
      <div class="container">
        <div class="advisors-top">
          <h1>Bearing Advisors</h1>
          <p>Our panel of advisors consists of Australian leaders in their fields.</p>
        </div>
        
        <div class="advisor-item"  v-for="(advisor,index) in advisors" :key="index">
          <div class="advisor-img">
            <div class="img" :style="'background-image: url('+advisor.image+');'"></div>
            <div class="img shadow" :style="'background-image: url('+advisor.image+');'"></div>
          </div>
          <div class="advisor-about">
            <h3>{{advisor.name}}</h3>
            <h4>{{advisor.role}}</h4>
            <div v-html="getExcerpt(advisor.description)"></div>
            <a class="read-more" href="#" @click.prevent="showAbout(advisor.name)">READ MORE <span>></span></a>
          </div>
        </div>

        <div class="current-advisor" :class="{'show':showCurrentAdvisor}" @click="hideAbout()">
          <div class="advisor-item" @click.prevent.stop="">
            <div class="img" :style="'background-image: url('+currentAdvisor.image+');'"></div>
            <div class="advisor-about">
              <h3>{{currentAdvisor.name}}</h3>
              <h4>{{currentAdvisor.role}}</h4>
              <div v-html="currentAdvisor.description"></div>
              <a class="read-more" href="#" @click.prevent="hideAbout()">< BACK</a>
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