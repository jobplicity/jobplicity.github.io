import { CardPreviewVideo } from "./card-preview-video.js";

export const MainHome = {
  components: {
    'card-preview-video': CardPreviewVideo
  },
  template : `
      <section class="main-v2">
        <div id="gradient" class="position-absolute w-100 h-90 d-flex justify-content-center align-items-center overflow-hidden trbl-0 observablehq--running" style="z-index:-1;pointer-events:none"></div>
        <div class="container jl-flex-wrap" >
          <div class="col-6">
            <div class="h2">
              <h2 class="main-title">Studying Online?<br/>Learn Faster.</h2>
            </div>
            <h5>Launch finds the best content on the web, pairs you with friends to study with & provides real world paid projects to get you ready for your next job at lightning speed ⚡</h5>
            <h5>Get started for free – no credit card required</h5>
            <div class="main-ctas">
            <!--
              <div class="row">
                <div class="col-lg-7 col-md-10 col-sm-10 col-xs-12">
                <button
                  id="button-addon1"
                  class="btn btn-outline-secondary my-4 home-signup-form-button"
                  type="button"
                >
                  ADD TO CHROME — IT'S FREE
                </button>
                </div>
              </div>
            -->
          
            </div>
          </div>
          <card-preview-video class="col-6"/>
        </div>
      </section>
  `
}

// <div class="input-group mb-3 home-signup-form">
//   <input id="started-email" type="text" class="form-control home-signup-form-email" placeholder="Enter your email" aria-label="Example text with button addon" aria-describedby="button-addon1" autofocus>
// </div>
