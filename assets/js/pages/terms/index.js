export const Terms = Vue.component("Terms", {
	data() {
		return {
			content: {
				name: "Terms and Conditions",
				role: "Festival Director at Spark Festival",
				image: "assets/img/maxine.jpg",
				description: `
					<h4>Overview</h4>
					<p>
						Please read this agreement carefully before accessing or using the information and services available through the Bearing website (“Site”). By accessing or using the Site, you agree to be bound by the terms and conditions below. Bearing may modify this agreement at any time, and such modifications shall be effective immediately upon posting the modified agreement on the Site. Company terms and conditions must be accepted and adhered to by Companies who use  Bearing's services and the Site. Bearing also has a comprehensive privacy policy for users of the Site.
					</p>
					
					<h4>Copyright and trademarks</h4>
					<p>
					Copyright in the material and trademarks on this Site are owned by JobLaunch Technologies Pty Ltd. ABN 36 648 581 551 (“ Bearing”) unless otherwise indicated and you agree not to infringe any intellectual property rights owned by Bearing.
					</p>
					
					<h4>Our rights to act as your micro-job & cohort facilitator.</h4>
					<p>
					By using Bearing you acknowledge & agree to granting Bearing a license to represent you and source micro-job applications on your behalf for jobs posted on Freelancer websites across the Internet.
					</p>

					<h4>Information for personal, non-commercial use only</h4>
					<p>
					You agree that information contained on this Site is for personal use only and may not be sold, redistributed or used for any commercial purpose (this includes but is not limited to the use of Company contact details for unsolicited commercial correspondence ). You may download material from this Site for your personal, non-commercial use only, provided you keep intact all copyright and other proprietary notices.
					</p>
					<p>
					You may not modify, copy, reproduce, republish, upload, post, transmit or distribute in any way any material from this Site including code and software. You must not use this Site for any purpose that is unlawful or prohibited by these terms of use.
					</p>
					<p>
					You may not use data mining, robots, screen scraping, or similar automated data gathering, extraction or publication tools on this Site (including without limitation for the purposes of establishing, maintaining, advancing or reproducing information contained on our Site on your own website or in any other publication), except with Our prior written consent.
					</p>
					
					<h4>Information does not represent professional advice</h4>
					<p>
					You acknowledge and agree that information published by Bearing is intended to provide general information in summary form on market insights, legal and other issues. Bearing does not warrant the accuracy or completeness of such information.
					</p>
					<p>
					 Bearing does not endorse or recommend any of the jobs, business or self-employment opportunities advertised on its Site and Bearing strongly recommends that prior to entering into any agreement with any of the Companies on the Site, that you obtain your own independent legal, accounting, financial or taxation advice as appropriate. It is solely your responsibility to evaluate the accuracy, completeness and usefulness of all opinions, advice, services, merchandise and other information provided through the Site or on the Internet generally.
					</p>
					<p>
					In no event will Bearing be liable to you or anyone else for any decision made or action taken by you or anyone else in reliance upon any information contained on or omitted from the Site.
					</p>


					<h4>No guarantees of job micro-job vacancy</h4>
					<p>
					 Bearing gives no guarantee to you of the continued availability of any particular micro-job advertised on the Site and will not be liable to you should a Company have filled the vacancy at any time prior to removal of the advertisement from the Site.
					</p>
					<p>
					Whilst Bearing takes efforts to ensure that micro-jobs advertised are for actual job vacancies, it gives no guarantee to you that every job advertisement represents an actual job vacancy.
					</p>

					<h4>No guarantees as to the service</h4>
					<p>
					 Bearing provides no warranty to you that the services generally available through its Site will be uninterrupted or error-free or that defects in the service will be corrected. You also understand that Bearing cannot and does not guarantee or warrant to you that files available for downloading through the Site or delivered via electronic mail through the Site will be free of infection or viruses, worms, Trojan horses or other code that manifest contaminating or destructive properties. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for accuracy of data input and output, and for maintaining a means external to the Site for the reconstruction of any lost data.
					</p>

					<h4>Our rights to use information you send us</h4>
					<p>
					 Bearing welcomes ideas and feedback from you about all aspects of the Site. You agree that Bearing may reproduce, distribute, transmit, create derivative works of, and publicly display any materials and other information (including ideas for new or improved products and services) that you submit to any public areas of the Site (such as bulletin boards, forums and newsgroups) or by email to Bearing. (Please read our privacy policy for more information as to how we deal with information you send to us.)
					</p>

					<h4>No guarantees as to security of your information</h4>
					<p>
					While Bearing takes all due care in ensuring the privacy and integrity of the information you provide, the possibility exists that this information could be unlawfully observed by a third party while in transit over the Internet or while stored on Bearing systems or on  Bearing's Site. Bearing disclaims all liability to you to the greatest extent possible pursuant to law should this occur.
					</p>

					<h4>Your responsibility for your password and login</h4>
					<p>
					To become a registered user, you must provide a password and a login name. You are entirely responsible if you do not maintain the confidentiality of your password and login name. Furthermore, you are entirely responsible for any and all activities that occur under your login name. You may change your password at any time by following instructions. You may also change your login by contacting customer service. You may also delete services attached to your registration at your convenience.
					</p>
					<p>
					You agree to immediately notify Bearing of any unauthorized use of your login name or any other breach of security known to you.
					</p>

					<h4>No misrepresentations allowed</h4>
					<p>
					You agree that it is a condition on your use of the Bearing Site and of any other services provided by Bearing or through the Site that you will not through any act or omission (including but not limited to creating a profile on the Bearing Site) mislead or deceive others.
					</p>

					<h4>General provisions</h4>
					<p>
					If any part of this agreement is held invalid that part shall be severed from this agreement and the remainder of this agreement will continue to be valid and enforceable.
					</p>
					<p>
					Termination of this agreement will not end those provisions that are capable of surviving the ending of this agreement.
					</p>
					<p>
					The laws governing this agreement will be the laws in NSW, Australia and you irrevocably submit to the exclusive jurisdiction of its Courts and its Appellate Courts and the jurisdiction of the Federal Court of Australia sitting in NSW.
					</p>
					<p>
					For the purposes of this agreement the words “ Bearing”, “We”, “Our” and “Us” refer to JobLaunch Technologies Pty Ltd and “Site” to materials delivered on www.joblaunch.co and other co-branded versions of the site.
					</p>


					<h5>contact@joblaunch.co   |   9 Archibald Avenue, Waterloo, Sydney</h5>
					<h5>2017</h5>
				`,
			},
		};
	},
	methods: {
		getExcerpt(text) {
			return text.substring(0, 150) + " ...";
		},
	},
	template: `
    <section class="advisors">
      <div class="container">
        <div class="current-advisor full-length" :class="{'show': true}">
          <div class="advisor-item" @click.prevent.stop="">
            <div class="advisor-about">
              <h3>{{content.name}}</h3>
              <div v-html="content.description"></div>
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