export const CardPreviewVideo = {
    data() {
        return {
            image: 0,
            imageSrc: [
                "url('../assets/img/confused-girl.jpeg')",
                "url('../assets/img/taryn-elliot.jpeg')",
                "url('../assets/img/freedom-man.jpeg')",
            ],
            opacity: 1
        }
    },
    created: function() {
		let self = this;
        setTimeout(() => {
            self.opacity = .7
        }, 2800)
		setInterval(function() {
            if (self.image<2) {
                self.image++;
            } else {
                self.image = 0
            }
            self.opacity = 1
            setTimeout(() => {
                self.opacity = .7
            }, 2800)
        }, 3000);
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
            :style="{'background-image': imageSrc[image], opacity: opacity}"
        >
        <div style="{opacity: 1}">
            <img alt="play" src="/assets/img/logos/youtube.svg" class="card-play-button" @click="openVideo">  
            <div class="card-content">
                <div class="card-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </div>
            </div>
        </div>
        </div>
    </section>
    `
}