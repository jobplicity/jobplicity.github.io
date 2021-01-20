/* JS by Mamo YZ
https://mamoyz.com/ */
const baseApiUrl = "http://main.hypergraph.so/api";
const baseFrontendUrl = "http://main.hypergraph.so/editor/node";
// const baseApiUrl = "http://localhost:8080/api";
// const baseFrontendUrl = "http://localhost:3001/editor/node";
var app = new Vue({
  el: "#app",
  data: {
    videoID: "",
    originalVideoID: "JA8dbIuaZZw",
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
    showPopup: false,
    strings: ["End to end automated Job application for you.", "Removes the pain of Job application", "Automatically applies for jobs for you.", "Your personal Job Application Butler"],
  },
  methods: {
    /* Main function : Trigger search and show results */
    showPopupHandler() {
      this.showPopup = true;
      this.videoID = this.originalVideoID;
    },
    hidePopupHandler() {
      this.showPopup = false;
      this.videoID = "";
    },
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
      $("body,html")
        .stop()
        .animate(
          // Slide to next section
          {
            scrollTop: $("section").eq(index).offset().top,
          },
          1500
        );
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

  mounted() {
    $(window).scroll(function () {
      // console.log($(window).scrollTop() + $(window).innerHeight());

      if ($(window).scrollTop() + $(window).innerHeight() * 0.5 > $(".testimonial").offset().top) {
        $(".testimonial").addClass("init");
      } else {
        $(".testimonial").removeClass("init");
      }
      if ($(window).innerWidth() > 1023) {
        $(window).scrollTop() > $(".main").offset().top - 20 ? $("header, .header-search-box").fadeIn(300) : $("header, .header-search-box").fadeOut(300);
      }
      $.each($(".how-item"), function () {
        if ($(window).scrollTop() + $(window).innerHeight() * 0.8 > $(this).offset().top) {
          $(this).addClass("init");
        } else {
          $(this).removeClass("init");
        }
      });
    });
  },
});
