module.exports = {
      "get_url": function (browser) {
        const urls = [
          "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_",
          "https://www.netflix.com/",
          "https://www.hulu.com/",
          "https://www.disneyplus.com/",
          "https://www.apple.com/apple-tv-plus/"
        ];
    
        urls.forEach((url, index) => {
          // Open the URL
          browser.url(url);
    
          // Pause to ensure page loads
          // browser.pause(4000);
    
          // Take a screenshot after the page loads
          browser.saveScreenshot(`./screenshots/${browser.options.desiredCapabilities.browserName}_page_${index + 1}.png`);
        });
    
        // End the session
        browser.end();
      }
    };
    