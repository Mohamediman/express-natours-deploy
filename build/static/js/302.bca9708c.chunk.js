"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[302],{2302:function(e,s,a){a.r(s),a.d(s,{default:function(){return Y}});var i=a(2791),r=a(2810),c=a(828),n=a(184),o=function(e){var s=e.tour;return(0,n.jsxs)("section",{className:"section-header",children:[(0,n.jsxs)("div",{className:"header__hero",children:[(0,n.jsx)("div",{className:"header__hero-overlay",children:"\xa0 "}),(0,n.jsx)("img",{src:"/img/tours/".concat(s.imageCover),alt:s.name,className:"header__hero-img"})]}),(0,n.jsxs)("div",{className:"heading-box",children:[(0,n.jsx)("h1",{className:"heading-primary",children:(0,n.jsxs)("span",{children:[s&&s.name.split(" ").splice(0,2).join(" "),(0,n.jsx)("br",{}),s&&s.name.split(" ").splice(2).join("")]})}),(0,n.jsxs)("div",{className:"heading-box__group",children:[(0,n.jsxs)("div",{className:"heading-box__detail",children:[(0,n.jsx)(c.Ix7,{className:"heading-box__icon"}),(0,n.jsxs)("span",{className:"heading-box__text",children:[s&&s.duration," days"]})]}),(0,n.jsxs)("div",{className:"heading-box__detail",children:[(0,n.jsx)(c.opg,{className:"heading-box__icon"}),(0,n.jsxs)("span",{className:"heading-box__text",children:[" ",s&&s.startLocation.description]})]})]})]})]})},t=function(e){var s=e.tour;return(0,n.jsxs)("div",{className:"description-box",children:[(0,n.jsxs)("h2",{className:"heading-secondary ma-bt-lg",children:["About ",s.name," "]}),(0,n.jsx)("p",{className:"description__text",children:s.description&&s.description.split(".").splice(0,2)}),(0,n.jsx)("p",{className:"description__text",children:s.description&&s.description.split(".").splice(2)})]})},l=a(6431),d=a.n(l),x=function(e){var s=e.guide;return(0,n.jsxs)("div",{className:"overview-box__detail",children:[s&&s.photo?(0,n.jsx)("img",{src:"/img/users/".concat(s.photo),alt:s.role,className:"overview-box__img"}):(0,n.jsx)("img",{src:"/img/users/default.jpeg",alt:s.role,className:"overview-box__img"}),(0,n.jsx)("span",{className:"overview-box__label",children:s.role}),(0,n.jsx)("span",{className:"overview-box__text",children:s.name})]})},m=a(4373),u=a(6355),v=function(e){var s=e.tour;return(0,n.jsx)("div",{className:"overview-box",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"overview-box__group",children:[(0,n.jsx)("h2",{className:"heading-secondary ma-bt-lg",children:"Quick facts"}),(0,n.jsxs)("div",{className:"overview-box__detail",children:[(0,n.jsx)(m.B6n,{className:"overview-box__icon"}),(0,n.jsx)("span",{className:"overview-box__label",children:"Next date"}),(0,n.jsx)("span",{className:"overview-box__text",children:(0,n.jsx)(d(),{format:"MMM YYYY",children:s.startDates[0]})})]}),(0,n.jsxs)("div",{className:"overview-box__detail",children:[(0,n.jsx)(m.Uxs,{className:"overview-box__icon"}),(0,n.jsx)("span",{className:"overview-box__label",children:"Difficulty"}),(0,n.jsx)("span",{className:"overview-box__text",children:s.difficulty})]}),(0,n.jsxs)("div",{className:"overview-box__detail",children:[(0,n.jsx)(u.BKo,{className:"overview-box__icon"}),(0,n.jsx)("span",{className:"overview-box__label",children:"Participants"}),(0,n.jsxs)("span",{className:"overview-box__text",children:[s.maxGroupSize," people"]})]}),(0,n.jsxs)("div",{className:"overview-box__detail",children:[(0,n.jsx)(m.OTA,{className:"overview-box__icon"}),(0,n.jsx)("span",{className:"overview-box__label",children:"Rating"}),(0,n.jsxs)("span",{className:"overview-box__text",children:[s.ratingsAverage," / 5"]})]})]}),(0,n.jsxs)("div",{className:"overview-box__group",children:[(0,n.jsx)("h2",{className:"heading-secondary ma-bt-lg",children:"Your tour guides"}),s.guides.map((function(e){return(0,n.jsx)(x,{guide:e},e._id)}))]})]})})},_=function(e){var s=e.review;return(0,n.jsxs)("div",{className:"reviews__card",children:[(0,n.jsxs)("div",{className:"reviews__avatar",children:[(0,n.jsx)("img",{src:"/img/users/".concat(s.user.photo),alt:s.user.name,className:"reviews__avatar-img"}),(0,n.jsx)("h6",{className:"reviews__user",children:s.user.name})]}),(0,n.jsx)("p",{className:"reviews__text",children:s.review}),(0,n.jsxs)("div",{className:"reviews__rating",children:[(0,n.jsx)(m.OTA,{className:"reviews__star ".concat(s.rating>=1&&"reviews__star--active"," ")}),(0,n.jsx)(m.OTA,{className:"reviews__star ".concat(s.rating>=2&&"reviews__star--active"," ")}),(0,n.jsx)(m.OTA,{className:"reviews__star ".concat(s.rating>=3&&"reviews__star--active"," ")}),(0,n.jsx)(m.OTA,{className:"reviews__star ".concat(s.rating>=4&&"reviews__star--active"," ")}),(0,n.jsx)(m.OTA,{className:"reviews__star ".concat(s.rating>=5&&"reviews__star--active"," ")})]})]})},h=function(e){var s=e.image;return(0,n.jsx)("div",{className:"picture-box",children:(0,n.jsx)("img",{className:"picture-box__img picture-box__img--1",src:"/img/tours/".concat(s),alt:s})})},j=a(1413),g=a(885),N=a(8703),p=function(e){var s=e.tour,a=(0,i.useState)({latitude:s.locations[0].coordinates[1],longitude:s.locations[0].coordinates[0],zoom:5,maxZoom:5}),r=(0,g.Z)(a,2),c=r[0],o=r[1],t=(0,i.useMemo)((function(){return s.locations.map((function(e){return(0,n.jsx)(N.Jx,{longitude:Number(e.coordinates[0]),latitude:Number(e.coordinates[1]),offsetLeft:-20,offsetTop:-10,children:(0,n.jsx)("div",{className:"marker"})},"".concat(e.coordinates[1]).concat(e.coordinates[0],"}"))}))}),[s.locations]);return t?(0,n.jsx)(N.ZP,(0,j.Z)((0,j.Z)({mapStyle:"mapbox://styles/mohamedai/ckskl74tv0ell17rk4x53odnj",mapboxApiAccessToken:"pk.eyJ1IjoibW9oYW1lZGFpIiwiYSI6ImNrc2tqNHFqYTJvN2wybm9hdnJreTdvaTMifQ.WLNcgVIG5MDN9gxqQ88a8A"},c),{},{width:"100%",height:"100%",scrollZoom:!1,onViewportChange:o,children:t})):(0,n.jsx)(i.Fragment,{children:(0,n.jsx)("h1",{children:"No Tour found"})})},b=a(8927),w=a(1595),f=function(e){var s=e.tour,a=e.user,i=e.bookTour;return(0,n.jsx)("section",{className:"section-cta",children:s?(0,n.jsxs)("div",{className:"cta",children:[(0,n.jsx)("div",{className:"cta__img cta__img--logo",children:(0,n.jsx)("img",{src:w,alt:"Natours logo"})}),(0,n.jsx)("img",{src:"/img/tours/tour-5-2.jpg",alt:"natours",className:"cta__img cta__img--1"}),(0,n.jsx)("img",{src:"/img/tours/tour-5-1.jpg",alt:"natours images",className:"cta__img cta__img--2"}),(0,n.jsxs)("div",{className:"cta__content",children:[(0,n.jsx)("h2",{className:"heading-secondary",children:"What are you waiting for?"}),(0,n.jsxs)("p",{className:"cta__text",children:[s&&s.duration," days. 1 adventure. Infinite memories. Make it yours today!"]}),a?(0,n.jsx)("button",{className:"btn btn--green span-all-rows",onClick:function(){return i(s.id)},children:"Book tour now!"}):(0,n.jsx)("a",{href:"/login",className:"btn btn--green span-all-rows",children:"Login to Book tour"})]})]}):(0,n.jsx)(b.Z,{})})},k=a(6916),T=a(364),y=a(7381),Z=a(9606),A=a(4118),Y=(0,T.$j)(null,{bookTour:y.CX,getTour:y.QU})((function(e){var s=e.match,a=e.getTour,c=e.bookTour,l=(0,k.zB)({tour:A.wo,user:Z.r}),d=(0,T.v9)(l),x=d.tour,m=d.user;return(0,i.useEffect)((function(){a(s.params.slug)}),[]),(0,n.jsxs)(i.Fragment,{children:[x?(0,n.jsx)(o,{tour:x}):(0,n.jsx)(b.Z,{}),(0,n.jsxs)("section",{className:"section-description",children:[x?(0,n.jsx)(v,{tour:x}):(0,n.jsx)(b.Z,{}),x?(0,n.jsx)(t,{tour:x}):(0,n.jsx)(b.Z,{})]}),(0,n.jsx)("section",{className:"section-pictures",children:x&&x.images.length>0?x.images.map((function(e){var s=(0,r.Z)();return(0,n.jsx)(h,{image:e},s)})):(0,n.jsx)(b.Z,{})}),x?(0,n.jsxs)("section",{className:"section-map",children:[(0,n.jsx)("div",{id:"map",children:" "}),(0,n.jsx)(p,{tour:x})]}):(0,n.jsx)(b.Z,{}),(0,n.jsx)("section",{className:"section-reviews",children:(0,n.jsx)("div",{className:"reviews",children:x&&x.reviews.length>0?x.reviews.map((function(e){return(0,n.jsx)(_,{review:e},e._id)})):(0,n.jsx)(b.Z,{})})}),(0,n.jsx)(f,{tour:x,user:m,bookTour:c})]})}))},4118:function(e,s,a){a.d(s,{b8:function(){return c},wo:function(){return n}});var i=a(6916),r=function(e){return e.tours},c=(0,i.P1)(r,(function(e){return e.tours})),n=(0,i.P1)(r,(function(e){return e.tour}));(0,i.P1)(r,(function(e){return e.loading}))}}]);
//# sourceMappingURL=302.bca9708c.chunk.js.map