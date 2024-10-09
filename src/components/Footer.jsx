import React from "react";
import tree from '../assets/images/tree.png'; 
import lawn from '../assets/images/lawn-mower.png'; 
import rake from '../assets/images/rake.png'; 

function Footer() {
  return (
    <div class="sect sect--best sect--center">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="md:w-1/2 sm:w-7/12 w-full text-center">
            <h1 class="sect__title best--bottom text-white">
              The best landscaping company
            </h1>
            <div class="flex justify-center">
              <div class="md:w-1/4 sm:w-1/4 w-1/4">
                <img
                  src={tree}
                  class="best__img"
                />
                <h2 class="best__title">New Projects</h2>
              </div>
              <div class="md:w-1/4 sm:w-1/4 w-1/4">
                <img
                  src={lawn}
                  class="best__img"
                />
                <h2 class="best__title">Maintenance</h2>
              </div>
              <div class="md:w-1/4 sm:w-1/4 w-1/4">
                <img
                  src={rake}
                  class="best__img"
                />
                <h2 class="best__title">Clean Up</h2>
              </div>
            </div>

            <p class="sect__subtitle best--margin text-white sect_small_text">
            Transform your outdoor space with our trusted, family-owned landscaping services. With over 20 years of experience, we deliver personalized care and exceptional results. Contact us today to schedule your consultation and create the yard of your dreams!
            </p>
            <div class="flex justify-center mt-4">
              <a
                href="tel:+17862749848"
                class="btn btn--top bg-green-600 text-white px-4 py-2 rounded"
              >
                Contact us today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
