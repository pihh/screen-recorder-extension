
const injectedFunction = async ()=>{
  try{

    const $element = (function(){
        const $elements = document.querySelector('#pihh-screen-recorder') || boot()
        function boot(){
          const $el = document.createElement('div');
          $el.id="pihh-screen-recorder";
          $el.innerHTML = `
          <style>

            *,
            ::before,
            ::after {
              box-sizing: border-box;
              /* 1 */
              border-width: 0;
              /* 2 */
              border-style: solid;
              /* 2 */
              border-color: #e5e7eb;
              /* 2 */
            }

            ::before,
            ::after {
              --tw-content: '';
            }



            html {
              line-height: 1.5;
              /* 1 */
              -webkit-text-size-adjust: 100%;
              /* 2 */
              -moz-tab-size: 4;
              /* 3 */
              tab-size: 4;
              /* 3 */
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
              /* 4 */
              font-feature-settings: normal;
              /* 5 */
            }

            body {
              margin: 0;
              /* 1 */
              line-height: inherit;
              /* 2 */
            }


            hr {
              height: 0;
              /* 1 */
              color: inherit;
              /* 2 */
              border-top-width: 1px;
              /* 3 */
            }

            abbr:where([title]) {
              -webkit-text-decoration: underline dotted;
                      text-decoration: underline dotted;
            }


            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-size: inherit;
              font-weight: inherit;
            }


            a {
              color: inherit;
              text-decoration: inherit;
            }



            b,
            strong {
              font-weight: bolder;
            }


            code,
            kbd,
            samp,
            pre {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
              /* 1 */
              font-size: 1em;
              /* 2 */
            }

            /*
            Add the correct font size in all browsers.
            */

            small {
              font-size: 80%;
            }


            sub,
            sup {
              font-size: 75%;
              line-height: 0;
              position: relative;
              vertical-align: baseline;
            }

            sub {
              bottom: -0.25em;
            }

            sup {
              top: -0.5em;
            }


            table {
              text-indent: 0;

              border-color: inherit;

              border-collapse: collapse;

            }



            button,
            input,
            optgroup,
            select,
            textarea {
              font-family: inherit;
              font-size: 100%;
              font-weight: inherit;
              line-height: inherit;
              color: inherit;
              margin: 0;
              padding: 0;

            }


            button,
            select {
              text-transform: none;
            }


            button,
            [type='button'],
            [type='reset'],
            [type='submit'] {
              -webkit-appearance: button;
              background-color: transparent;
              background-image: none;
            }


            :-moz-focusring {
              outline: auto;
            }



            :-moz-ui-invalid {
              box-shadow: none;
            }


            progress {
              vertical-align: baseline;
            }



            ::-webkit-inner-spin-button,
            ::-webkit-outer-spin-button {
              height: auto;
            }


            [type='search'] {
              -webkit-appearance: textfield;
              /* 1 */
              outline-offset: -2px;
              /* 2 */
            }

            /*
            Remove the inner padding in Chrome and Safari on macOS.
            */

            ::-webkit-search-decoration {
              -webkit-appearance: none;
            }


            ::-webkit-file-upload-button {
              -webkit-appearance: button;
              /* 1 */
              font: inherit;
              /* 2 */
            }

            /*
            Add the correct display in Chrome and Safari.
            */

            summary {
              display: list-item;
            }

            /*
            Removes the default spacing and border for appropriate elements.
            */

            blockquote,
            dl,
            dd,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            hr,
            figure,
            p,
            pre {
              margin: 0;
            }

            fieldset {
              margin: 0;
              padding: 0;
            }

            legend {
              padding: 0;
            }

            ol,
            ul,
            menu {
              list-style: none;
              margin: 0;
              padding: 0;
            }

            /*
            Prevent resizing textareas horizontally by default.
            */

            textarea {
              resize: vertical;
            }

            /*
            1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
            2. Set the default placeholder color to the user's configured gray 400 color.
            */

            input::placeholder,
            textarea::placeholder {
              opacity: 1;
              /* 1 */
              color: #9ca3af;
              /* 2 */
            }

            /*
            Set the default cursor for buttons.
            */

            button,
            [role="button"] {
              cursor: pointer;
            }

            /*
            Make sure disabled buttons don't get the pointer cursor.
            */

            :disabled {
              cursor: default;
            }



            img,
            svg,
            video,
            canvas,
            audio,
            iframe,
            embed,
            object {
              display: block;
              /* 1 */
              vertical-align: middle;
              /* 2 */
            }

            /*
            Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
            */

            img,
            video {
              max-width: 100%;
              height: auto;
            }

            /* Make elements with the HTML hidden attribute stay hidden by default */

            [hidden] {
              display: none;
            }

            *, ::before, ::after {
              --tw-border-spacing-x: 0;
              --tw-border-spacing-y: 0;
              --tw-translate-x: 0;
              --tw-translate-y: 0;
              --tw-rotate: 0;
              --tw-skew-x: 0;
              --tw-skew-y: 0;
              --tw-scale-x: 1;
              --tw-scale-y: 1;

              --tw-scroll-snap-strictness: proximity;

              --tw-ring-offset-width: 0px;
              --tw-ring-offset-color: #fff;
              --tw-ring-color: rgb(59 130 246 / 0.5);
              --tw-ring-offset-shadow: 0 0 #0000;
              --tw-ring-shadow: 0 0 #0000;
              --tw-shadow: 0 0 #0000;
              --tw-shadow-colored: 0 0 #0000;

            }

            ::-webkit-backdrop {
              --tw-border-spacing-x: 0;
              --tw-border-spacing-y: 0;
              --tw-translate-x: 0;
              --tw-translate-y: 0;
              --tw-rotate: 0;
              --tw-skew-x: 0;
              --tw-skew-y: 0;
              --tw-scale-x: 1;
              --tw-scale-y: 1;

              --tw-scroll-snap-strictness: proximity;

              --tw-ring-offset-width: 0px;
              --tw-ring-offset-color: #fff;
              --tw-ring-color: rgb(59 130 246 / 0.5);
              --tw-ring-offset-shadow: 0 0 #0000;
              --tw-ring-shadow: 0 0 #0000;
              --tw-shadow: 0 0 #0000;
              --tw-shadow-colored: 0 0 #0000;

            }

            ::backdrop {
              --tw-border-spacing-x: 0;
              --tw-border-spacing-y: 0;
              --tw-translate-x: 0;
              --tw-translate-y: 0;
              --tw-rotate: 0;
              --tw-skew-x: 0;
              --tw-skew-y: 0;
              --tw-scale-x: 1;
              --tw-scale-y: 1;

              --tw-scroll-snap-strictness: proximity;

              --tw-ring-offset-width: 0px;
              --tw-ring-offset-color: #fff;
              --tw-ring-color: rgb(59 130 246 / 0.5);
              --tw-ring-offset-shadow: 0 0 #0000;
              --tw-ring-shadow: 0 0 #0000;
              --tw-shadow: 0 0 #0000;
              --tw-shadow-colored: 0 0 #0000;

            }

            .relative {
              position: relative;
            }

            .z-10 {
              z-index: 10;
            }

            .flex {
              display: flex;
            }

            .min-h-full {
              min-height: 100%;
            }

            .translate-y-4 {
              --tw-translate-y: 1rem;
              transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            }

            .translate-y-0 {
              --tw-translate-y: 0px;
              transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            }

            .items-end {
              align-items: flex-end;
            }

            .justify-center {
              justify-content: center;
            }

            .p-4 {
              padding: 1rem;
            }

            .text-center {
              text-align: center;
            }

            .opacity-0 {
              opacity: 0;
            }

            .opacity-100 {
              opacity: 1;
            }

            .duration-300 {
              transition-duration: 300ms;
            }

            .duration-200 {
              transition-duration: 200ms;
            }

            .ease-out {
              transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }

            .ease-in {
              transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
            }

            #pihh-screen-recorder__overlay {
              position: fixed;
              right: 0px;
              bottom: 0px;
              left: 0px;
              top: 0px;
              z-index: 50;
              display: flex;
              height: 100vh;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            #pihh-screen-recorder__overlay > :not([hidden]) ~ :not([hidden]) {
              --tw-space-y-reverse: 0;
              margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
              margin-bottom: calc(1rem * var(--tw-space-y-reverse));
            }

            #pihh-screen-recorder__overlay {
              --tw-bg-opacity: 1;
              background-color: rgb(17 24 39 / var(--tw-bg-opacity));
              outline: 2px solid transparent;
              outline-offset: 2px;
            }

            .pihh-screen-recorder__container {
              display: flex;
              height: 100vh;
              min-height: 100%;
              align-items: flex-end;
              justify-content: center;
              padding: 1rem;
              text-align: center;
              position: fixed;
              top: 0;
              width: 100%;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__container {
                align-items: center;
                padding: 0px;
              }
            }

            .pihh-screen-recorder__popup {
              position: fixed;
              z-index: 50;
              display: flex;
              flex-direction: column;
              border-radius: 1rem;
              --tw-bg-opacity: 1;
              background-color: rgb(255 255 255 / var(--tw-bg-opacity));
              padding: 2rem;
              --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
              --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .pihh-screen-recorder__popup:hover {
              --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
              --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__popup {
                width: 100%;
                max-width: 32rem;
              }
            }

            .pihh-screen-recorder__popup__container {
              display: flex;
              max-width: 32rem;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            }

            .pihh-screen-recorder__popup__container > div {
              display: flex;
              align-items: center;
            }

            .pihh-screen-recorder__popup__container__content {
              margin-left: 0.75rem;
              display: flex;
              flex-direction: column;
              text-align: left;
              margin-left: 1em;
            }

            .pihh-screen-recorder__popup__container__icon > svg {
              height: 4rem;
              width: 4rem;
              border-radius: 1rem;
              border-width: 1px;
              --tw-border-opacity: 1;
              border-color: rgb(219 234 254 / var(--tw-border-opacity));
              --tw-bg-opacity: 1;
              background-color: rgb(239 246 255 / var(--tw-bg-opacity));
              padding: 0.75rem;
              --tw-text-opacity: 1;
              color: rgb(96 165 250 / var(--tw-text-opacity));
            }

            .pihh-screen-recorder__popup__container__content > div {
              font-weight: 500;
              line-height: 1;
            }

            .pihh-screen-recorder__popup__container__content > p {
              margin-top: 0.25rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
              line-height: 1;
              --tw-text-opacity: 1;
              color: rgb(75 85 99 / var(--tw-text-opacity));
            }

            .pihh-screen-recorder__popup__container__button {
              margin-left: 1rem;
              border-radius: 9999px;
              border-width: 2px;
              --tw-border-opacity: 1;
              border-color: rgb(239 68 68 / var(--tw-border-opacity));
              --tw-bg-opacity: 1;
              background-color: rgb(239 68 68 / var(--tw-bg-opacity));
              padding-left: 1.25rem;
              padding-right: 1.25rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
              font-weight: 500;
              letter-spacing: 0.05em;
              --tw-text-opacity: 1;
              color: rgb(255 255 255 / var(--tw-text-opacity));
              --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
              --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .pihh-screen-recorder__popup__container__button:hover {
              --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
              --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            /** Dark mode */

            .pihh-screen-recorder__popup.pihh-screen-recorder__dark-mode {
              --tw-bg-opacity: 1;
              background-color: rgb(31 41 55 / var(--tw-bg-opacity));
            }

            .pihh-screen-recorder__dark-mode .pihh-screen-recorder__popup__container__icon > svg {
              --tw-border-opacity: 1;
              border-color: rgb(31 41 55 / var(--tw-border-opacity));
              --tw-bg-opacity: 1;
              background-color: rgb(17 24 39 / var(--tw-bg-opacity));
              --tw-text-opacity: 1;
              color: rgb(96 165 250 / var(--tw-text-opacity));
            }

            .pihh-screen-recorder__dark-mode .pihh-screen-recorder__popup__container__content > div {
              --tw-text-opacity: 1;
              color: rgb(243 244 246 / var(--tw-text-opacity));
            }

            .pihh-screen-recorder__dark-mode .pihh-screen-recorder__popup__container__content > p {
              --tw-text-opacity: 1;
              color: rgb(107 114 128 / var(--tw-text-opacity));
            }

            /** MODAL **/

            .pihh-screen-recorder__modal__overlay {
              position: fixed;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              background-color: rgb(107 114 128 / var(--tw-bg-opacity));
              --tw-bg-opacity: 0.75;
              transition-property: opacity;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 150ms;
            }

            .pihh-screen-recorder__modal__container {
              position: fixed;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              z-index: 10;
              overflow-y: auto;
            }

            .pihh-screen-recorder__modal__container > div {
              display: flex;
              min-height: 100%;
              align-items: flex-end;
              justify-content: center;
              padding: 1rem;
              text-align: center;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__modal__container > div {
                align-items: center;
                padding: 0px;
              }
            }

            .pihh-screen-recorder__modal__container__card {
              position: relative;
              transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
              overflow: hidden;
              border-radius: 0.5rem;
              --tw-bg-opacity: 1;
              background-color: rgb(255 255 255 / var(--tw-bg-opacity));
              text-align: left;
              --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
              --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 150ms;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__modal__container__card {
                margin-top: 2rem;
                margin-bottom: 2rem;
                width: 100%;
                max-width: 32rem;
              }
            }

            .pihh-screen-recorder__modal__container__card > div {
              --tw-bg-opacity: 1;
              background-color: rgb(255 255 255 / var(--tw-bg-opacity));
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 1.25rem;
              padding-bottom: 1rem;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__modal__container__card > div {
                padding: 1.5rem;
                padding-bottom: 1rem;
              }

              .pihh-screen-recorder__modal__container__card > div > div {
                display: flex;
                align-items: flex-start;
              }
            }

            .pihh-screen-recorder__modal__container__card__content {
              margin-top: 0.75rem;
              text-align: center;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__modal__container__card__content {
                margin-top: 0px;
                margin-left: 1rem;
                text-align: left;
              }
            }

            .pihh-screen-recorder__modal__container__card__content > h3 {
              font-size: 1.125rem;
              font-weight: 500;
              line-height: 1.5rem;
              --tw-text-opacity: 1;
              color: rgb(17 24 39 / var(--tw-text-opacity));
            }

            .pihh-screen-recorder__modal__container__card__content > div {
              margin-top: 0.5rem;
            }

            .pihh-screen-recorder__modal__container__card__content p {
              font-size: 0.875rem;
              line-height: 1.25rem;
              --tw-text-opacity: 1;
              color: rgb(107 114 128 / var(--tw-text-opacity));
            }

            .pihh-screen-recorder__modal__container__card__footer {
              --tw-bg-opacity: 1;
              background-color: rgb(249 250 251 / var(--tw-bg-opacity));
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__modal__container__card__footer {
                display: flex;
                flex-direction: row-reverse;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
              }
            }

            .pihh-screen-recorder__modal__button-red {
              display: inline-flex;
              width: 100%;
              justify-content: center;
              border-radius: 0.375rem;
              border-width: 1px;
              border-color: transparent;
              --tw-bg-opacity: 1;
              background-color: rgb(220 38 38 / var(--tw-bg-opacity));
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 1rem;
              line-height: 1.5rem;
              font-weight: 500;
              --tw-text-opacity: 1;
              color: rgb(255 255 255 / var(--tw-text-opacity));
              --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
              --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .pihh-screen-recorder__modal__button-red:hover {
              --tw-bg-opacity: 1;
              background-color: rgb(185 28 28 / var(--tw-bg-opacity));
            }

            .pihh-screen-recorder__modal__button-red:focus {
              outline: 2px solid transparent;
              outline-offset: 2px;
              --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
              --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
              box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
              --tw-ring-opacity: 1;
              --tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity));
              --tw-ring-offset-width: 2px;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__modal__button-red {
                margin-left: 0.75rem;
                width: auto;
                font-size: 0.875rem;
                line-height: 1.25rem;
              }
            }

            .pihh-screen-recorder__modal__button-white {
              margin-top: 0.75rem;
              display: inline-flex;
              width: 100%;
              justify-content: center;
              border-radius: 0.375rem;
              border-width: 1px;
              --tw-border-opacity: 1;
              border-color: rgb(209 213 219 / var(--tw-border-opacity));
              --tw-bg-opacity: 1;
              background-color: rgb(255 255 255 / var(--tw-bg-opacity));
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 1rem;
              line-height: 1.5rem;
              font-weight: 500;
              --tw-text-opacity: 1;
              color: rgb(55 65 81 / var(--tw-text-opacity));
              --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
              --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .pihh-screen-recorder__modal__button-white:hover {
              --tw-bg-opacity: 1;
              background-color: rgb(249 250 251 / var(--tw-bg-opacity));
            }

            .pihh-screen-recorder__modal__button-white:focus {
              outline: 2px solid transparent;
              outline-offset: 2px;
              --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
              --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
              box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
              --tw-ring-opacity: 1;
              --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
              --tw-ring-offset-width: 2px;
            }

            @media (min-width: 640px) {
              .pihh-screen-recorder__modal__button-white {
                margin-top: 0px;
                margin-left: 0.75rem;
                width: auto;
                font-size: 0.875rem;
                line-height: 1.25rem;
              }

              .sm\:translate-y-0 {
                --tw-translate-y: 0px;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
              }

              .sm\:scale-95 {
                --tw-scale-x: .95;
                --tw-scale-y: .95;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
              }

              .sm\:scale-100 {
                --tw-scale-x: 1;
                --tw-scale-y: 1;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
              }

              .sm\:items-center {
                align-items: center;
              }

              .sm\:p-0 {
                padding: 0px;
              }
            }

            .pihh-screen-recorder__pixel,
            .pihh-screen-recorder__pixel *{
              width:0;
              height:0;
              overflow:hidden;
            }

            .pihh-screen-recorder__modal__overlay{
              opacity: 0;
              transition-property: opacity;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 300ms;
              transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }

            .pihh-screen-recoder__modal__overlay__show{
               opacity: 1;
               transition-property: opacity;
               transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
               transition-duration: 300ms;
               transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
            }

            .pihh-screen-recorder__popup > div{
              display: flex;
             min-height: 100%;
             align-items: flex-end;
             justify-content: center;
             text-align: center;
            }
            .pihh-screen-recorder__popup, .pihh-screen-recorder__modal__container__card{
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 300ms;
              opacity:0;
              transform: translateY(-8em);
            }
            .pihh-screen-recoder__popup__show, .pihh-screen-recorder__modal__container__card__show{
              opacity:1;
              transform: translateY(0px);
            }

            .pihh-screen-recorder__input-label {
              display: block;
              font-size: 0.875rem;
              line-height: 1.25rem;
              font-weight: 500;
              --tw-text-opacity: 1;
              color: rgb(55 65 81 / var(--tw-text-opacity));
            }

            .pihh-screen-recorder__input-container {
              margin-top: 0.25rem;
              display: flex;
              border-radius: 0.375rem;
              --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
              --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }

            .pihh-screen-recorder__input {
              display: block;
              width: 100%;
              flex: 1 1 0%;
              border-radius: 0px;
              border-top-right-radius: 0.375rem;
              border-bottom-right-radius: 0.375rem;
              --tw-border-opacity: 1;
              border-color: rgb(209 213 219 / var(--tw-border-opacity));
            }

          </style>


          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="pihh-screen-recorder__modal__overlay"></div>
            <div class="pihh-screen-recorder__container">
              <div class="pihh-screen-recorder__popup">

                <div >
                  <div class="pihh-screen-recorder__popup__container">
                    <div class="pihh-screen-recorder__popup__container__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div class="pihh-screen-recorder__popup__container__content">
                        <div>Get ready </div>
                        <p>Will start recording in <span id="pihh-screen-recorder__popup__countdown">3</span> seconds </p>
                      </div>
                    </div>
                    <button class="pihh-screen-recorder__popup__container__button " >Cancel</button>
                  </div>
                </div>
              </div>
              <div class="pihh-screen-recorder__modal__container">
                <div>

                  <div class="pihh-screen-recorder__modal__container__card">
                    <div>
                      <div>
                        <div class="pihh-screen-recorder__modal__container__card__content">
                          <h3>Save video</h3>
                          <div>

                            <label for="pihh-screen-recorder__modal__container__input__video-title" class="pihh-screen-recorder__input-label">Video title</label>
                            <div class="pihh-screen-recorder__input-container">

                              <input type="text" name="pihh-screen-recorder__modal__container__input__video-title" id="pihh-screen-recorder__modal__container__input__video-title" class="pihh-screen-recorder__input-label" placeholder="pihh-screen-recording">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pihh-screen-recorder__modal__container__card__footer">
                      <button type="button" class="pihh-screen-recorder__modal__button-red">Save</button>
                      <button type="button" class="pihh-screen-recorder__modal__button-white">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>`


          // LOGIC
          $el.canOpen = true;
          $el.canClose = false;
          $el.open = false;
          $el.close = true;
          $el.wait = async function(ms){
            return new Promise((res)=>{
              setTimeout(res,ms)
            })
          }
          $el.reset = function(){
            $el.classList.add('pihh-screen-recorder__pixel');
            $el.querySelector('#pihh-screen-recorder__popup__countdown').innerText = 3;
            // $el.querySelector('.pihh-screen-recorder__modal__container').classList.add('pihh-screen-recoder__pixel')
            $el.querySelector('.pihh-screen-recorder__popup').classList.add('pihh-screen-recoder__pixel')
            $el.querySelector('.pihh-screen-recorder__modal__overlay').classList.remove('pihh-screen-recoder__modal__overlay__show')

            $el.querySelector('.pihh-screen-recorder__popup').classList.remove('pihh-screen-recoder__popup__show')
            $el.querySelector('.pihh-screen-recorder__modal__container__card').classList.remove('pihh-screen-recorder__modal__container__card__show')
          }

          $el.showPopup = async ()=>{
            return new Promise(async (res,rej)=>{
              if($el.open)rej();
              if(!$el.close)rej();

              $el.open = true;

              $el.reset();
              await $el.wait(1)
              $el.classList.remove('pihh-screen-recorder__pixel');

              await $el.wait(1)
              $el.querySelector('.pihh-screen-recorder__modal__overlay').classList.add('pihh-screen-recoder__modal__overlay__show')
              $el.querySelector('.pihh-screen-recorder__popup').classList.add('pihh-screen-recoder__popup__show')
              await $el.wait(300)

              $el.close = false;

              async function countDown(){
                let countdown = parseInt($el.querySelector('#pihh-screen-recorder__popup__countdown').innerText);
                if(countdown >0) countdown--;
                $el.querySelector('#pihh-screen-recorder__popup__countdown').innerText = countdown;
                setTimeout(()=>{
                  countDown()
                },1000)
              }

              let countdown = parseInt($el.querySelector('#pihh-screen-recorder__popup__countdown').innerText);
              if(countdown === 3)countDown()

              setTimeout(async ()=>{
                await $el.closePopup()
                res()
              },3000)

            })
          }

          $el.closePopup = async ()=>{
            return new Promise(async (res,rej)=>{
              if($el.close) rej();
              if(!$el.open)rej();
              $el.close = true;
              await $el.wait(1)
              $el.querySelector('.pihh-screen-recorder__popup').classList.remove('pihh-screen-recoder__popup__show')
              $el.querySelector('.pihh-screen-recorder__modal__overlay').classList.remove('pihh-screen-recoder__modal__overlay__show')
              await $el.wait(300)
              $el.reset()
              $el.open = false;

              res();
            })
          }

          $el.showModal = async ()=>{
            return new Promise(async (res,rej)=>{
              if($el.open)rej();
              if(!$el.close)rej();

              $el.open = true;

              $el.reset();
              await $el.wait(1)
              $el.classList.remove('pihh-screen-recorder__pixel');

              await $el.wait(1)
              $el.querySelector('.pihh-screen-recorder__modal__overlay').classList.add('pihh-screen-recoder__modal__overlay__show')
              $el.querySelector('.pihh-screen-recorder__modal__container__card').classList.add('pihh-screen-recorder__modal__container__card__show')
              await $el.wait(300)

              $el.close = false


                res()

            })
          }

          $el.closeModal = async (confirm=false)=>{
            return new Promise(async (res,rej)=>{

              if($el.close) rej();
              if(!$el.open)rej();
              $el.close = true;
              await $el.wait(1)
              $el.querySelector('.pihh-screen-recorder__modal__container__card').classList.remove('pihh-screen-recorder__modal__container__card__show')
              $el.querySelector('.pihh-screen-recorder__modal__overlay').classList.remove('pihh-screen-recoder__modal__overlay__show')
              await $el.wait(300)
              $el.reset()
              $el.open = false;

              if(confirm) $el.closeModalCallback()
              res();
            })
          }
          $el.classList.add('pihh-screen-recorder__pixel')
          $el.querySelector('.pihh-screen-recorder__popup__container__button').addEventListener('click', function() {
            $el.closePopup()
          })
          $el.querySelector('.pihh-screen-recorder__modal__button-white').addEventListener('click',function(){
            $el.closeModal(false)
          })
          $el.querySelector('.pihh-screen-recorder__modal__button-red').addEventListener('click', function(){
            $el.closeModal(true);
          })
          document.body.append($el)
          return $el
        }

        return $elements;
    })()

    const record = async ($el)=>{
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
      mediaRecorder.addEventListener("dataavailable", async function (e) {
          chunks.push(e.data);
      });

      mediaRecorder.addEventListener("stop", async  ()=> {
        try{
        await $el.showModal()
        $el.closeModalCallback =()=>{
          let name = $el.querySelector('#pihh-screen-recorder__modal__container__input__video-title').value || 'pihh-screen-recoding';
          let blob = new Blob(chunks, {
            type: chunks[0].type,
          });
          let url = URL.createObjectURL(blob);

          let video = document.createElement("video");
          video.src = url;

          let a = document.createElement("a");
          a.href = url;
          a.download = name.replaceAll(' ','-')+'__' + Date.now() + ".webm";
          a.click();
        }

      }catch(ex){
        console.warn(ex)
      }
      });


      //we have to start the recorder manually
      await $element.showPopup()
      mediaRecorder.start();
    }


    record($element);
  }catch(ex){
    console.warn(ex)
  }
}
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    func: injectedFunction,
  });
});

// const injectedFunction = async () => {
//   try {
//     const $popup = (function () {
//       const $id = "#pihh-screen-recorder__popup";
//       const $element = function () {
//         return document.querySelector($id) || boot();
//       };
//       const boot = function () {
//         const $el = document.createElement("div");
//
//         $el.id = $id.replace("#", "");
//         $el.innerHTML = `<div>
//         <div class="pihh-screen-recorder__popup__notification-wrapper">
//           <div class="pihh-screen-recorder__popup__icon-wrapper">
//             <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-600">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
//           </svg>
//
//             </div>
//
//           </div>
//           <div class="pihh-screen-recorder__popup__content-wrapper">
//             <h1>Get ready</h1>
//             <p> Will start to record in <span id="pihh-screen-recorder__popup__timeout">3</span> <span id="pihh-screen-recorder__popup__ellispis">.</span> </p>
//           </div>
//           <div class="pihh-screen-recorder__popup__close-icon">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//
//           </div>
//         </div>
//       </div>`;
//
//         $el.state = "closed";
//         $el.reject = function () {
//           console.log("rej");
//         };
//         $timeout = $el.querySelector("#pihh-screen-recorder__popup__timeout");
//         $ellipsis = $el.querySelector("#pihh-screen-recorder__popup__ellispis");
//         $el.open = function () {
//           console.log('show popup')
//
//           return new Promise((res, rej) => {
//             if ($el.state == "open") return rej(false);
//
//             $timeout.innerText = 3;
//             $el.classList.add("open");
//             setTimeout(() => {
//               res(true);
//             }, 400);
//             setTimeout(() => {
//               let innerText = parseInt($timeout.innerText) || 0;
//               const startCountDown = function () {
//                 let innerText = parseInt($timeout.innerText) || 0;
//                 if (innerText > 0) innerText--;
//                 $timeout.innerText = innerText;
//                 setTimeout(() => {
//                   startCountDown();
//                 }, 1000);
//               };
//               if (innerText == 3) {
//                 startCountDown();
//               }
//               $el.state = "open";
//             }, 1000);
//           });
//         };
//
//         $el.hide = function () {
//           console.log('hide popup')
//
//           return new Promise((res, rej) => {
//             if ($el.state == "closed") return rej(false);
//             $el.classList.remove("open");
//             setTimeout(() => {
//               res(true);
//             }, 400);
//             setTimeout(() => {
//               $el.state = "closed";
//             }, 1000);
//           });
//         };
//         $el
//           .querySelector(".pihh-screen-recorder__popup__close-icon")
//           .addEventListener("click", function (reject) {
//             $el.reject(reject);
//           });
//         document.body.append($el);
//
//         const $ellipsisLoop = function () {
//           let content = $ellipsis.innerText.trim();
//           let len = content.length;
//           content = len < 3 ? content + "." : '';
//           $ellipsis.innerText = content;
//           setTimeout(() => {
//             $ellipsisLoop();
//           }, 400);
//         };
//
//         $ellipsisLoop();
//         return $el;
//       };
//
//       return $element();
//     })();
//
//     const $overlay = (function () {
//       const $id = "#pihh-screen-recorder__overlay";
//       const $element = function () {
//         return document.querySelector($id) || boot();
//       };
//       const boot = function () {
//         const $el = document.createElement("div");
//
//         $el.id = $id.replace("#", "");
//         $el.innerHTML = `<div class="pihh-screen-recorder__overlay"></div>`;
//         $el.state = "closed";
//         $el.open = function () {
//           console.log('show overlay')
//
//           return new Promise((res, rej) => {
//             if ($el.state == "open") return rej(false);
//             $el.classList.add("open");
//             setTimeout(() => {
//               res(true);
//             }, 400);
//             setTimeout(() => {
//               $el.state = "open";
//             }, 1000);
//           });
//         };
//
//         $el.hide = function () {
//           console.log('hide overlay')
//
//           return new Promise((res, rej) => {
//             if ($el.state == "closed") return rej(false);
//             $el.classList.remove("open");
//             setTimeout(() => {
//               res(true);
//             }, 400);
//             setTimeout(() => {
//               $el.state = "closed";
//             }, 1000);
//           });
//         };
//
//         document.body.append($el);
//         return $el;
//       };
//
//       return $element();
//     })();
//
//     const $style = (function () {
//       const $id = "#pihh-screen-recorder__stylesheet";
//       const $element = function () {
//         return document.querySelector($id) || boot();
//       };
//       const boot = function () {
//         const $el = document.createElement("style");
//         $el.id = $id.replace("#", "");
//         $el.innerHTML = `
//         .pihh-screen-recorder-pixel, .pihh-screen-recorder-pixel *{
//           height:0;
//           width: 0;
//           overflow: hidden
//         }
//         #pihh-screen-recorder__overlay{
//
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 999999998;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, 0.4);
//     backdrop-filter: blur(1px);
//
//         }
//     #pihh-screen-recorder__popup{
//       z-index: 999999999;
//           margin-top: -20vh;
//           transition: all 1s ease-in;
//     }
//     #pihh-screen-recorder__popup.open{
//       margin-top: 20vh;
//       transition: all 1s ease-out;
//     }
//     #pihh-screen-recorder__overlay{
//       opacity: 0;
//       transition: opacity 1s ease-out;
//     }
//     #pihh-screen-recorder__overlay.open{
//       opacity: 1;
//       transition: opacity 1s ease-in;
//     }
//
//     .pihh-screen-recorder__popup__notification-wrapper {
//       position: relative;
//       display: flex;
//       width: 24rem;
//       --tw-translate-y: 0px;
//       transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
//       transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
//       flex-direction: row;
//       align-items: center;
//
//       border-radius: 0.75rem;
//       --tw-bg-opacity: 1;
//       background-color: rgb(17 24 39 / var(--tw-bg-opacity));
//       padding-left: 1rem;
//       padding-right: 1rem;
//       padding-top: 1.5rem;
//       padding-bottom: 1.5rem;
//       --tw-text-opacity: 1;
//       color: rgb(255 255 255 / var(--tw-text-opacity));
//       --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
//       --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
//       box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
//       transition-property: all;
//       transition-duration: 500ms;
//       transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//     }
//
//     .pihh-screen-recorder__popup__notification-wrapper:hover {
//       --tw-translate-y: 0.25rem;
//       transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
//       --tw-shadow: 0 0 #0000;
//       --tw-shadow-colored: 0 0 #0000;
//       box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
//     }
//
//     .pihh-screen-recorder__popup__icon-wrapper {
//       font-size: 1.25rem;
//       line-height: 1.75rem;
//     }
//
//     .pihh-screen-recorder__popup__content-wrapper {
//       margin-left: 1rem;
//       display: flex;
//       cursor: default;
//       flex-direction: column;
//       justify-content: center;
//     }
//
//     .pihh-screen-recorder__popup__content-wrapper h1 {
//       font-size: 1rem;
//       line-height: 1.5rem;
//       font-weight: 600;
//       line-height: 1;
//       letter-spacing: 0.05em;
//       --tw-text-opacity: 1;
//       color: rgb(229 231 235 / var(--tw-text-opacity));
//     }
//
//     .pihh-screen-recorder__popup__content-wrapper p {
//       margin-top: 0.5rem;
//       font-size: 0.875rem;
//       line-height: 1.25rem;
//       line-height: 1.625;
//       letter-spacing: 0.05em;
//       --tw-text-opacity: 1;
//       color: rgb(156 163 175 / var(--tw-text-opacity));
//     }
//
//     .pihh-screen-recorder__popup__close-icon {
//       position: absolute;
//       top: 0.5rem;
//       right: 0.5rem;
//       cursor: pointer;
//       font-size: 1.125rem;
//       line-height: 1.75rem;
//     }
//
//     .-top-96 {
//       top: -24rem;
//     }
//
//     .top-0 {
//       top: 0px;
//     }
//
//   #pihh-screen-recorder__popup{
//       position: fixed;
//       height: 100vh;
//       width: 100vw;
//       display: flex;
//       justify-content: center;
//     }
//   `;
//         document.body.append($el);
//         return $el;
//       };
//       return $element();
//     })();
//
//     const openPopup = async () => {
//       console.log('will open')
//       await $overlay.open();
//       await $popup.open();
//       console.log('did open')
//       return new Promise((res, rej) => {
//         $popup.reject = async () => {
//           await $popup.hide();
//           await $overlay.hide();
//           rej();
//         };
//         setTimeout(async () => {
//           await $popup.hide();
//           await $overlay.hide();
//           res();
//         }, 3000);
//       });
//     };
//
//
//
//
//     function wait() {
//        return new Promise(resolve => {
//        setTimeout(() => {
//        resolve();
//      }, 3000);
//     });
//     }
//
//     async function startRecording(stream) {
//        let recorder = new MediaRecorder(stream);
//        let data = [];
//
//        console.log(recorder)
//        recorder.ondataavailable = event => data.push(event.data);
//        await openPopup();
//        recorder.start();
//
//        let stopped = new Promise((resolve, reject) => {
//            recorder.onstop = resolve;
//            recorder.onerror = event => reject(event.name);
//        });
//
//        let recorded = () => recorder.state == "recording" && recorder.stop();
//
//        await Promise.all([stopped, recorded]);
//        return data;
//     }
//
//     let stream = await navigator.mediaDevices.getDisplayMedia({
//       video: true,
//     });
//     startRecording(stream)
//
//     //
//     // /** HTML ELEMENTS */
//     // let stream = await navigator.mediaDevices.getDisplayMedia({
//     //   video: true,
//     // });
//     //
//     // //needed for better browser support
//     // const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
//     //   ? "video/webm; codecs=vp9"
//     //   : "video/webm";
//     // let mediaRecorder = new MediaRecorder(stream, {
//     //   mimeType: mime,
//     // });
//     //
//     //
//     // let chunks = [];
//     // mediaRecorder.addEventListener("dataavailable", function (e) {
//     //   chunks.push(e.data);
//     // });
//     //
//     // mediaRecorder.addEventListener("stop", function () {
//     //   let blob = new Blob(chunks, {
//     //     type: chunks[0].type,
//     //   });
//     //   let url = URL.createObjectURL(blob);
//     //
//     //   let video = document.createElement("video");
//     //   video.src = url;
//     //
//     //   let a = document.createElement("a");
//     //   a.href = url;
//     //   a.download = "pihh's screen recorder " + Date.now() + ".webm";
//     //   a.click();
//     // });
//     //
//     // //we have to start the recorder manually
//     // mediaRecorder.start();
//   } catch (ex) {
//     console.warn(ex);
//   }
// };
