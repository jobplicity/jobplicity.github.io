/* JS by Mamo YZ
https://mamoyz.com/ */
// import { Runtime, Inspector, Library } from "https://unpkg.com/@observablehq/runtime@4.7.1/dist/runtime.js";
// import notebook from "https://cdn.openai.com/website/scripts/20200901/gradient.3.2.js";

const baseApiUrl = "http://main.hypergraph.so/api";
const baseFrontendUrl = "http://main.hypergraph.so/editor/node";

import { Home } from "./pages/home/index.js"
import { Advisors } from "./pages/advisors/index.js"
// const baseApiUrl = "http://localhost:8080/api";
// const baseFrontendUrl = "http://localhost:3001/editor/node";



const routes = [
	{ 
    path: "/advisors", 
    component: Advisors, 
    name: "advisors" },
	{
		path: "/",
		component: Home,
	},
];

const router = new VueRouter({
	routes,
	mode: "history",
});
// router.beforeEach((to, from, next) => {
// 	console.log(from);
// });
var app = new Vue({
	el: "#app",
	router,
	data: {
		showMenu: false,
		currentItem: 0,
		keyword: null,
		results: null,
		formDirty: false,
		searching: false,
		loading: false,
		typedConfig: {
			typeSpeed: 50,
			backSpeed: 30,
			contentType: "html",
		},
		strings: ["End to end automated Job application for you.", "Removes the pain of Job application", "Automatically applies for jobs for you.", "Your personal Job Application Butler"],
	},

	methods: {
		/* Main function : Trigger search and show results */

		searchChangeHandler() {
			if (this.keyword && this.keyword.length > 2) {
				/* Trigger Search when the keyword lenght is 3 or bigger */
				this.formDirty = true;
				/* Set Loading to true */
				this.loading = true;
				/* Do AJAX Call here and put results as JSON to this.results */
				axios({
					method: "post",
					headers: { "Content-Type": "application/json" },
					url: `${baseApiUrl}/get_public_identities`,
					data: {
						searchTerm: this.keyword,
					},
				}).then((response) => {
					setTimeout(() => {
						/* Search Results */
						this.results = response.data;
						/* Set Search suggestions */
						// this.suggestions = response.data;
						/* Set Loading back to false again */
						this.loading = false;

						/* Set selected item back to first one again */
						this.currentItem = 0;
					}, 1000);
				});
			} else {
				this.formDirty = false;
			}
		},
		/* Modify URL */
		getUrl({ id, identity_name }) {
			if (id && identity_name) {
				return `${baseFrontendUrl}/${id}/${this.slugify(identity_name)}`;
			}
			return "";
		},
		/* Reset search and close search box */
		cancelSearchHandler() {
			this.keyword = null;
			this.searching = false;
			// this.suggestions = null;
			this.results = null;
			this.currentItem = 0;
		},
		// handle signup
		submitSignUp() {
			// handle signup
		},
		slideClickHandler(e) {
			this.slideToSection(1);
		},
		slideWheelHandler(e) {
			if (e.wheelDelta > 0 || e.detail < 0) {
			} else {
				e.preventDefault();
				this.slideToSection(1);
			}
		},

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
		/* Highligh search results on "Keyboard UP" and "Keyboard DOWN" presser */
		nextItem(e) {
			if (this.searching) {
				e.preventDefault();
				if (e.keyCode == 38) {
					if (this.currentItem == 0) return false;
					this.currentItem--;
				} else if (e.keyCode == 40) {
					if (this.currentItem == this.results.length - 1) return false;
					this.currentItem++;
				}
			}
		},
		setCurrentItem(index) {
			this.currentItem = index;
		},
		/* Slugify your string. Eg: 'Sarthak Joshi**' => 'sarthak-joshi' */
		slugify(string) {
			const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
			const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
			const p = new RegExp(a.split("").join("|"), "g");

			return string
				.toString()
				.toLowerCase()
				.replace(/\s+/g, "-") // Replace spaces with -
				.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
				.replace(/&/g, "-and-") // Replace & with 'and'
				.replace(/[^\w\-]+/g, "") // Remove all non-word characters
				.replace(/\-\-+/g, "-") // Replace multiple - with single -
				.replace(/^-+/, "") // Trim - from start of text
				.replace(/-+$/, ""); // Trim - from end of text
		},
	},
});
