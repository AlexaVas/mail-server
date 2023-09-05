/** @format */

const mjml2html = require("mjml");

function template(title, message, name) {


const htmlOutput = mjml2html(`
  <mjml>
  <mj-body>
    <mj-raw>
      <!-- Company Header -->
    </mj-raw>
    <mj-section>
      <mj-column>
        <mj-image align="left" width="500px" src="https://res.cloudinary.com/dup7uxsy0/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1693836389/barkly-banner_pin3nb.jpg?_s=public-apps"></mj-image>
      </mj-column>
    </mj-section>
    <mj-raw>
      <!-- Image Header -->
    </mj-raw>
    <mj-section background-color="white">
      <mj-column width="500px">
        <mj-text align="center" color="black" font-size="40px" font-family="Helvetica Neue">Effortless Advertisement of Shelter Dogs</mj-text>
      </mj-column>
    </mj-section>
    <mj-raw>
      <!-- Intro text -->
    </mj-raw>
    <mj-section background-color="#fafafa">
      <mj-column>
        <mj-image width="150px" border-radius="10px" src="https://res.cloudinary.com/dup7uxsy0/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1693900180/Barkly/IMG_3617_th2iqy.jpg?_s=public-apps"></mj-image>
      </mj-column>
      <mj-column width="400px">
        <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">Hello, ${name} 👋</mj-text>
        <mj-text color="#626262" font-size="18px">I'm Alexandra, the founder of Barkly, an innovative app dedicated to enhancing dog adoption processes. Our platform streamlines dog advertising for shelters and empowers potential adopters with cutting-edge AI to find their perfect furry companion. 🐶 This simplifies adoptions, elevating quality and promoting conscious decisions. 🌟 We firmly believe in its potential to significantly benefit your shelter and the lives of dogs in need. 🌈</mj-text>
        <mj-button background-color="rgb(30, 136, 229)" href="https://barkly-pups.netlify.app/">Learn more</mj-button>
      </mj-column>
    </mj-section>
    <mj-raw>
      <!-- Side image -->
    </mj-raw>
    <mj-section background-color="white">
      <mj-raw>
        <!-- Left image -->
      </mj-raw>
      <mj-column>
        <mj-image width="200px" border-radius="10px" src="https://res.cloudinary.com/dup7uxsy0/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1693905143/Barkly/IMG_2118_dnroyu.jpg?_s=public-apps"></mj-image>
      </mj-column>
      <mj-raw>
        <!-- right paragraph -->
      </mj-raw>
      <mj-column>
        <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">100% free and customisable</mj-text>
        <mj-text color="#525252">At Barkly, we're committed to delivering an exceptional user experience, and your feedback is invaluable. Should you notice any areas for improvement while using Barkly, please don't hesitate to reach out. We're dedicated to continuously enhancing your experience.</mj-text>
        <mj-text color="#525252">PS: If you are interested in an intro call, please reply directly to this email! 😊</mj-text>
      </mj-column>
    </mj-section>
    <mj-raw>
      <!-- Icons -->
    </mj-raw>
    <mj-section background-color="#fbfbfb">
      <mj-column>
        <mj-image width="60px" src="https://res.cloudinary.com/dup7uxsy0/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1693907041/Barkly/paw.jpg?_s=public-apps"></mj-image>
        <mj-text color="#525252" align="center">Enhanced Matchmaking</mj-text>
      </mj-column>
      <mj-column>
        <mj-image width="60px" src="https://res.cloudinary.com/dup7uxsy0/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1693907041/Barkly/paw.jpg?_s=public-apps"></mj-image>
        <mj-text color="#525252" align="center">Increased Visibilty</mj-text>
      </mj-column>
      <mj-column>
        <mj-image width="60px" src="https://res.cloudinary.com/dup7uxsy0/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1693907041/Barkly/paw.jpg?_s=public-apps"></mj-image>
        <mj-text color="#525252" align="center">Intuitive Dog Listing Management</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`);

/*
  Print the responsive HTML generated and MJML errors if any
*/
console.log(htmlOutput.html)




 return htmlOutput.html;

// return `<style> body { background-color: blue;}</style><h2>PASTE HTML CODE HERE AND USE ${message} AND ${title} VARIABLE WHERE YOU WANT</h2>`






}

module.exports = {
  template
};




