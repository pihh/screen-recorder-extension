const injectedFunction = async () => {
  try {
    const $popup = (function () {
      const $id = "#pihh-screen-recorder__popup";
      const $element = function () {
        return document.querySelector($id) || boot();
      };
      const boot = function () {
        const $el = document.createElement("div");

        $el.id = $id.replace("#", "");
        $el.innerHTML = `<div>
        <div class="pihh-screen-recorder__popup__notification-wrapper">
          <div class="pihh-screen-recorder__popup__icon-wrapper">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>

            </div>

          </div>
          <div class="pihh-screen-recorder__popup__content-wrapper">
            <h1>Get ready</h1>
            <p> Will start to record in <span id="pihh-screen-recorder__popup__timeout">3</span> <span id="pihh-screen-recorder__popup__ellispis">.</span> </p>
          </div>
          <div class="pihh-screen-recorder__popup__close-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

          </div>
        </div>
      </div>`;

        $el.state = "closed";
        $el.reject = function () {
          console.log("rej");
        };
        $timeout = $el.querySelector("#pihh-screen-recorder__popup__timeout");
        $ellipsis = $el.querySelector("#pihh-screen-recorder__popup__ellispis");
        $el.open = function () {
          console.log('show popup')

          return new Promise((res, rej) => {
            if ($el.state == "open") return rej(false);

            $timeout.innerText = 3;
            $el.classList.add("open");
            setTimeout(() => {
              res(true);
            }, 400);
            setTimeout(() => {
              let innerText = parseInt($timeout.innerText) || 0;
              const startCountDown = function () {
                let innerText = parseInt($timeout.innerText) || 0;
                if (innerText > 0) innerText--;
                $timeout.innerText = innerText;
                setTimeout(() => {
                  startCountDown();
                }, 1000);
              };
              if (innerText == 3) {
                startCountDown();
              }
              $el.state = "open";
            }, 1000);
          });
        };

        $el.hide = function () {
          console.log('hide popup')

          return new Promise((res, rej) => {
            if ($el.state == "closed") return rej(false);
            $el.classList.remove("open");
            setTimeout(() => {
              res(true);
            }, 400);
            setTimeout(() => {
              $el.state = "closed";
            }, 1000);
          });
        };
        $el
          .querySelector(".pihh-screen-recorder__popup__close-icon")
          .addEventListener("click", function (reject) {
            $el.reject(reject);
          });
        document.body.append($el);

        const $ellipsisLoop = function () {
          let content = $ellipsis.innerText.trim();
          let len = content.length;
          content = len < 3 ? content + "." : '';
          $ellipsis.innerText = content;
          setTimeout(() => {
            $ellipsisLoop();
          }, 400);
        };

        $ellipsisLoop();
        return $el;
      };

      return $element();
    })();

    const $overlay = (function () {
      const $id = "#pihh-screen-recorder__overlay";
      const $element = function () {
        return document.querySelector($id) || boot();
      };
      const boot = function () {
        const $el = document.createElement("div");

        $el.id = $id.replace("#", "");
        $el.innerHTML = `<div class="pihh-screen-recorder__overlay"></div>`;
        $el.state = "closed";
        $el.open = function () {
          console.log('show overlay')

          return new Promise((res, rej) => {
            if ($el.state == "open") return rej(false);
            $el.classList.add("open");
            setTimeout(() => {
              res(true);
            }, 400);
            setTimeout(() => {
              $el.state = "open";
            }, 1000);
          });
        };

        $el.hide = function () {
          console.log('hide overlay')

          return new Promise((res, rej) => {
            if ($el.state == "closed") return rej(false);
            $el.classList.remove("open");
            setTimeout(() => {
              res(true);
            }, 400);
            setTimeout(() => {
              $el.state = "closed";
            }, 1000);
          });
        };

        document.body.append($el);
        return $el;
      };

      return $element();
    })();

    const $style = (function () {
      const $id = "#pihh-screen-recorder__stylesheet";
      const $element = function () {
        return document.querySelector($id) || boot();
      };
      const boot = function () {
        const $el = document.createElement("style");
        $el.id = $id.replace("#", "");
        $el.innerHTML = `
        .pihh-screen-recorder-pixel, .pihh-screen-recorder-pixel *{
          height:0;
          width: 0;
          overflow: hidden
        }
        #pihh-screen-recorder__overlay{

    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999998;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);

        }
    #pihh-screen-recorder__popup{
      z-index: 999999999;
          margin-top: -20vh;
          transition: all 1s ease-in;
    }
    #pihh-screen-recorder__popup.open{
      margin-top: 20vh;
      transition: all 1s ease-out;
    }
    #pihh-screen-recorder__overlay{
      opacity: 0;
      transition: opacity 1s ease-out;
    }
    #pihh-screen-recorder__overlay.open{
      opacity: 1;
      transition: opacity 1s ease-in;
    }

    .pihh-screen-recorder__popup__notification-wrapper {
      position: relative;
      display: flex;
      width: 24rem;
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      flex-direction: row;
      align-items: center;

      border-radius: 0.75rem;
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39 / var(--tw-bg-opacity));
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
      --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
      --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      transition-property: all;
      transition-duration: 500ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    .pihh-screen-recorder__popup__notification-wrapper:hover {
      --tw-translate-y: 0.25rem;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .pihh-screen-recorder__popup__icon-wrapper {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    .pihh-screen-recorder__popup__content-wrapper {
      margin-left: 1rem;
      display: flex;
      cursor: default;
      flex-direction: column;
      justify-content: center;
    }

    .pihh-screen-recorder__popup__content-wrapper h1 {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0.05em;
      --tw-text-opacity: 1;
      color: rgb(229 231 235 / var(--tw-text-opacity));
    }

    .pihh-screen-recorder__popup__content-wrapper p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      line-height: 1.625;
      letter-spacing: 0.05em;
      --tw-text-opacity: 1;
      color: rgb(156 163 175 / var(--tw-text-opacity));
    }

    .pihh-screen-recorder__popup__close-icon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      cursor: pointer;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .-top-96 {
      top: -24rem;
    }

    .top-0 {
      top: 0px;
    }

  #pihh-screen-recorder__popup{
      position: fixed;
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  `;
        document.body.append($el);
        return $el;
      };
      return $element();
    })();

    const openPopup = async () => {
      console.log('will open')
      await $overlay.open();
      await $popup.open();
      console.log('did open')
      return new Promise((res, rej) => {
        $popup.reject = async () => {
          await $popup.hide();
          await $overlay.hide();
          rej();
        };
        setTimeout(async () => {
          await $popup.hide();
          await $overlay.hide();
          res();
        }, 3000);
      });
    };

    await openPopup();

    /** HTML ELEMENTS */
    let stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });

    //needed for better browser support
    const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
      ? "video/webm; codecs=vp9"
      : "video/webm";
    let mediaRecorder = new MediaRecorder(stream, {
      mimeType: mime,
    });

    let chunks = [];
    mediaRecorder.addEventListener("dataavailable", function (e) {
      chunks.push(e.data);
    });

    mediaRecorder.addEventListener("stop", function () {
      let blob = new Blob(chunks, {
        type: chunks[0].type,
      });
      let url = URL.createObjectURL(blob);

      let video = document.createElement("video");
      video.src = url;

      let a = document.createElement("a");
      a.href = url;
      a.download = "pihh's screen recorder " + Date.now() + ".webm";
      a.click();
    });

    //we have to start the recorder manually
    mediaRecorder.start();
  } catch (ex) {
    console.warn(ex);
  }
};

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    func: injectedFunction,
  });
});
