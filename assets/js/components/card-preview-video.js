export const CardPreviewVideo = {
    data() {
        return {
            index: 0,
            imageSrc: [
                `url('${window.location.href}assets/img/confused-girl.jpeg')`,
                `url('${window.location.href}assets/img/taryn-elliot.jpeg')`,
                `url('${window.location.href}assets/img/freedom-man.jpeg')`,
            ],
            textSrc: [
                'Not sure where to start upskilling for a new career ? Let us map and Launch your journey. Bearing finds the best content in the world for you on a given topic. 🔎',
                'Stay motivated whilst learning online 🦾. Join a team or study with a friend to keep yourself accountable 🤝.',
                'Earn badges to display on Linkedin™ 🏆.  Grow your portfolio of experience for your resume through small freelancing gigs and land your first permanent full time job.💰'
            ],
            opacity: 1
        }
    },
    created: function() {
		let self = this;
        setTimeout(() => {
            self.opacity = .7
        }, 4300)
		setInterval(function() {
            if (self.index<2) {
                self.index++;
            } else {
                self.index = 0
            }
            self.opacity = 1
            setTimeout(() => {
                self.opacity = .7
            }, 4300)
        }, 4500);
	},
    methods: {
        openVideo() {
            window.open('https://youtu.be/_ySbzVXiwzQ')
        }
    },
    template: `
    <section class="card-preview">
        <div
            class="card-preview-video"
            :style="{'background-image': imageSrc[index], opacity: opacity}"
        >
        <div style="{opacity: 1}">
            <img alt="play" src="assets/img/logos/youtube.svg" class="card-play-button" @click="openVideo">  
            <div class="card-content">
                <div class="card-desc">
                    {{textSrc[index]}}
                </div>
            </div>
        </div>
        </div>
    </section>
    `
}