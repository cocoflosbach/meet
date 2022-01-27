(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(22),o=n.n(r),c=(n(28),n(3)),i=n(4),u=n(6),l=n(5),d=(n(29),n(30),n(31),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onShowDetails=function(){e.setState({collapsed:!1})},e.onHideDetails=function(){e.setState({collapsed:!0})},e.state={collapsed:!0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(d.jsx)("div",{className:"container bg-white shadow-2xl max-w-2xl mx-auto px-4 sm:py-8 sm:px-6  lg:px-8",children:t?Object(d.jsxs)("div",{className:"Events shadow-lg w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75",children:[Object(d.jsxs)("div",{className:"text-left px-2 py-4",children:[Object(d.jsx)("h1",{className:"summary text-2xl",children:e.summary}),Object(d.jsxs)("p",{className:"date-timezone text-sm",children:[e.start.dateTime,e.start.timeZone]}),Object(d.jsx)("p",{className:"location",children:e.location})]}),Object(d.jsx)("div",{className:" px-4 py-4 w-40 text-right",children:Object(d.jsx)("button",{type:"button",className:"details shadow-md text-purple-800 ",onClick:t?this.onShowDetails:this.onHideDetails,children:t?"Show details":"Hide details"})})]}):Object(d.jsxs)("div",{className:"Events extra shadow-lg w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75",children:[Object(d.jsxs)("div",{className:"text-left px-2 py-4",children:[Object(d.jsx)("h1",{className:"summary text-2xl",children:e.summary}),Object(d.jsxs)("p",{className:"date-timezone text-sm",children:[e.start.dateTime,e.start.timeZone]}),Object(d.jsx)("p",{className:"location",children:e.location}),Object(d.jsx)("p",{className:"description",children:e.description})]}),Object(d.jsx)("div",{className:" px-4 py-4 w-40 text-right",children:Object(d.jsx)("button",{className:"details shadow-md text-purple-800 ",onClick:t?this.onShowDetails:this.onHideDetails,children:t?"Show details":"Hide details"})})]})})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-1 md:grid-cols-2 xl:gap-x-8",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),m=p,f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("p",{children:"Search Event By City"}),Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("button",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),v=f,b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=parseInt(t.target.value);n>=1&&n<=32?e.props.updateNumOfEvents(n):alert("Please choose a number between 1 and 32")},e.handleItemClicked=function(t){e.props.updateNumOfEvents(t),e.setState({showOptions:!1})},e.state={eventNumberOptions:[8,16,32],showOptions:void 0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return Object(d.jsxs)("div",{className:"NumberOfEvents",children:[Object(d.jsx)("p",{children:"Number of Events"}),Object(d.jsx)("input",{type:"number",className:"number-of-events",value:t,onChange:this.handleInputChanged,onFocus:function(){e.setState({showOptions:!0})},onBlur:function(){e.setState({showOptions:!1})}}),Object(d.jsx)("ul",{className:"options",style:this.state.showOptions?{}:{display:"none"},children:this.state.eventNumberOptions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)}))})]})}}]),n}(a.Component);b.defaultProps={numberOfEvents:32};var j=b,w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"",crossOrigin:"*",variant:"top",src:"https://i.imgur.com/5wU3P5G.png",className:"w-full h-full object-center object-cover lg:w-full lg:h-full"})})}}]),n}(a.Component),g=w,O=n(7),x=n.n(O),y=n(8),k=n(23),S=n(13),N=n.n(S),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],E=n(11),T=n.n(E),Z=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},I=function(){var e=Object(y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},B=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,a,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return T.a.done(),e.abrupt("return",C);case 4:return e.next=6,q();case 6:if(!(t=e.sent)){e.next=16;break}return D(),n="https://b8wc3rdmth.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,N.a.get(n);case 12:return(a=e.sent).data&&(s=Z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(s))),T.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(y.a)(x.a.mark((function e(t){var n,a,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://b8wc3rdmth.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(s=a.access_token)&&localStorage.setItem("access_token",s),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,a,s,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(s=e.sent){e.next=20;break}return e.next=17,N.a.get("https://b8wc3rdmth.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url ");case 17:return r=e.sent,o=r.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",s&&M(s));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).updateEvents=function(e,t){B().then((function(n){var s="all"===e?n:n.filter((function(t){return t.location===e})),r=t||a.state.numberOfEvents,o=s.slice(0,r);a.mounted&&a.setState({events:o,currentLocation:e})}))},a.updateNumOfEvents=function(e){a.setState({numberOfEvents:e}),a.updateEvents(a.state.currentLocation,e)},a.state={locations:[],events:[],numberOfEvents:32,currentLocation:"all"},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,B().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:Z(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.events,a=e.numberOfEvents;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsx)(v,{locations:t,updateEvents:this.updateEvents}),Object(d.jsx)(j,{numberOfEvents:a,updateNumOfEvents:this.updateNumOfEvents}),Object(d.jsx)(m,{events:n})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),J()}},[[52,1,2]]]);
//# sourceMappingURL=main.ecce4ccd.chunk.js.map