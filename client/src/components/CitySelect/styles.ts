// @import "../../assets/scss/mixins";
//
// .city_select {
//   position: relative;
//   @media screen and (max-width: 1023px) {
//     position: static;
//   }
//
//
//   &__places {
//     position: absolute;
//     left: 0;
//     background-color: #ecf1f6;
//     display: flex;
//     flex-direction: column;
//     opacity: 0;
//     pointer-events: none;
//     transition: opacity 0.45s;
//
//     @include media((
//             top: (
//                     all: 100%,
//                     mob: 84px
//             ),
//             width: (
//                     all: 347px,
//                     mob: 100%
//             ),
//             min-height: (
//                     all: 100px,
//                     mob: auto
//             ),
//             max-height: (
//                     all: calc(100vh - 150px),
//                     mob: none
//             ),
//             margin-top: (
//                     all: 11px,
//                     mob: 0
//             ),
//             z-index: (
//                     mob: 2500
//             ),
//             height: (
//                     mob: calc(100% - 84px)
//             )
//     ));
//
//   }
//
//   &__search {
//     width: 100%;
//     display: flex;
//     position: relative;
//     height: 63px;
//     flex-shrink: 0;
//
//     input {
//       width: 100%;
//       display: block;
//       outline: none;
//       height: 63px;
//       box-sizing: border-box;
//       padding-left: 32px;
//       padding-right: 60px;
//       font-size: 18px;
//       line-height: 21px;
//       padding-top: 5px;
//       background-color: #fcfbfc;
//
//       &::placeholder {
//         font-size: 18px;
//         // line-height: 21px;
//         color: #92929c;
//       }
//     }
//
//     img {
//       pointer-events: none;
//       position: absolute;
//       width: 19px;
//       top: 50%;
//       transform: translateY(-9px);
//       right: 34px;
//     }
//   }
//
//   &__body {
//     overflow-y: auto;
//     @include customize-scrollbar;
//     box-sizing: border-box;
//     max-height: 595px;
//     padding-top: 10px;
//     @media screen and (max-width: 1023px) {
//       max-height: none;
//       height: 100%;
//       padding-top: 0;
//     }
//   }
//
//
//   &__item,
//   &__group-label {
//     font-size: 18px;
//     line-height: 21px;
//     width: 100%;
//     box-sizing: border-box;
//     height: 56px;
//
//     &.is-hidden {
//       display: none;
//     }
//   }
//   &__group-label {
//     pointer-events: none;
//     display: flex;
//     align-items: center;
//     padding: 0 32px;
//   }
//
//   &__item {
//     cursor: pointer;
//     padding: 4px 32px;
//     position: relative;
//     user-select: none;
//
//     &:after {
//       content: '';
//       display: block;
//       width: 15px;
//       height: 11px;
//       pointer-events: none;
//       background-image: url(../../assets/img/general/check.icon.svg);
//       background-position: center;
//       position: absolute;
//       top: 11px;
//       right: 29px;
//       opacity: 0;
//       transition: opacity 0.1s;
//     }
//
//     &.is-selected:after {
//       opacity: 1;
//     }
//
//     &:not(.is-selected):hover p {
//       color: #4a72fc;
//     }
//
//     small {
//       font-size: 16px;
//       line-height: 19px;
//       color: #92929c;
//     }
//   }
//
//   &__item-empty {
//     width: 100%;
//     padding: 11px 49px 30px 32px;
//     box-sizing: border-box;
//     display: none;
//
//     &.is-show {
//       display: block;
//     }
//
//     p {
//       font-size: 18px;
//       line-height: 23px;
//       margin-bottom: 45px;
//     }
//
//     a {
//       font-size: 18px;
//       line-height: 21px;
//       color: #fcfbfc;
//       background: #4a72fc;
//       border-radius: 50px;
//       padding: 12px 49px;
//       display: block;
//     }
//   }
// }
//
// .city_select__selected {
//   background: #4a72fc;
//   border-radius: 300px;
//   color: #ecf1f6;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   user-select: none;
//   transition: background-color 0.45s;
//   @include media((
//           font-size: (
//                   all: 19px,
//                   mob: 13.2821px
//           ),
//           padding: (
//                   all: 12px 65px 13px 28px,
//                   mob: 8px 59px 10px 19px
//           ),
//           letter-spacing: (
//                   all: -0.2px,
//                   mob: 0
//           )
//   ));
//
//   &--is-open {
//     background-color: #96adff;
//
//     //& ~ .places {
//     //  opacity: 1;
//     //  pointer-events: auto;
//     //}
//   }
//
//   &:after {
//     content: '';
//     display: block;
//     background-repeat: no-repeat;
//     background-position: center;
//     background-image: url(../../assets/img/general/arrow.icon.svg);
//     margin-top: 2px;
//     background-size: contain;
//     @include media((
//             width: (
//                     all: 20px,
//                     mob: 15px
//             ),
//             height: (
//                     all: 10px,
//                     mob: 8px
//             ),
//             margin-left: (
//                     all: 10px,
//                     mob: 6px
//             ),
//     ))
//   }
// }
