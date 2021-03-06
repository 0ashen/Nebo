export const GlobalStyleCommon: string = `
    html {
        font-family: 'TTRounds';
        box-sizing: border-box;
        font-size: 16px;
        background-color: #fff;
        color: #1f1f30;
        height: 100%;
        min-height: 100%;
    }

    body {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        min-height: 100%;
        // background-color: #f0f3f6;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    // .page {
    //     &__wrapper {
    //        min-height: 100%;
    //        display: flex;
    //     }
    //     &__footer {
    //     }
    // }
    // ::selection {
    //     background: rgba(blue, 0.8);
    //     color: #fff;
    // }
    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        margin: 0;
        list-style: none;
        padding: 0;
    }

    p {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
        font-weight: 400;
        font-size: inherit;
    }

    input {
        border: none;
        background-color: transparent;
        color: inherit;
        font-family: inherit;
        border-radius: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-shadow: none !important;
        padding: 0;

        &::-ms-clear {
            display: none;
        }

        // ignore
        &::-webkit-contacts-auto-fill-button {
            visibility: hidden;
            display: none !important;
            pointer-events: none;
            position: absolute;
            right: 0;
        }

        &::-webkit-credentials-auto-fill-button {
            visibility: hidden;
            display: none !important;
            pointer-events: none;
            position: absolute;
            right: 0;
        }
    }

    button {
        border: none;
        font-family: inherit;
        padding: 0;
        background-color: transparent;
        color: inherit;
        outline: none;
        cursor: pointer;
    }

    select {
        border: none;
        background-color: transparent;
        font-family: inherit;
        -webkit-appearance: none;
        padding: 0;
        appearance: none;
    }

    svg {
        max-width: 100%;
    }

    /////////////////////////////////////////
    /////////////////////////////////////////
    /////////////////////////////////////////
    /////////////////////////////////////////
    .disable-hover,
    .disable-hover * {
        pointer-events: none !important;
    }

    .show-center {
        position: relative;

        &:after {
            content: '';
            width: 1px;
            height: 100%;
            display: block;
            position: absolute;
            background: red;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &:before {
            content: '';
            width: 100%;
            height: 1px;
            display: block;
            position: absolute;
            background: red;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    #__bs_notify__ {
        /* Move notification to bottom */
        top: auto !important;
        bottom: 0 !important;
        border-top-left-radius: 5px !important;
        border-bottom-left-radius: 0 !important;
    }
`
