(this.webpackJsonpcompany=this.webpackJsonpcompany||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),l=r(2),p=r.n(l),o=(r(12),function(){return a.a.createElement("div",{className:"text-center font-weight-bold h1 bg-primary py-4"},"Employees Details")}),n=r(3),m=r(4),s=r(6),i=r(5),u=(r(13),[{picture_src:"/employee/0.jpg"},{picture_src:"/employee/1.jpg"},{picture_src:"/employee/2.jpg"},{picture_src:"/employee/3.jpg"},{picture_src:"/employee/4.jpg"},{picture_src:"/employee/5.jpg"},{picture_src:"/employee/6.jpg"},{picture_src:"/employee/7.jpg"},{picture_src:"/employee/8.jpg"},{picture_src:"/employee/9.jpg"},{picture_src:"/employee/10.jpg"},{picture_src:"/employee/11.jpg"},{picture_src:"/employee/12.jpg"},{picture_src:"/employee/13.jpg"},{picture_src:"/employee/14.jpg"},{picture_src:"/employee/15.jpg"},{picture_src:"/employee/16.jpg"},{picture_src:"/employee/17.jpg"},{picture_src:"/employee/18.jpg"},{picture_src:"/employee/19.jpg"},{picture_src:"/employee/20.jpg"},{picture_src:"/employee/21.jpg"},{picture_src:"/employee/22.jpg"},{picture_src:"/employee/23.jpg"}]),y=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(e){var c;return Object(n.a)(this,r),(c=t.call(this,e)).state={error:null,isLoaded:!1,employees:[]},c}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("http://dummy.restapiexample.com/api/v1/employees").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,employees:t.data}),console.log(t.data)}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,r=e.isLoaded;e.items;return t?a.a.createElement("div",null,"Error: ",t.message):r?a.a.createElement("div",{className:"table-wrapper-scroll-y my-custom-scrollbar"},a.a.createElement("table",{className:"table table-bordered table-striped mb-0 h5"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"col"},"Id"),a.a.createElement("th",{scope:"col"},"Name"),a.a.createElement("th",{scope:"col"},"Salary"),a.a.createElement("th",{scope:"col"},"Age"),a.a.createElement("th",{scope:"col"},"Picture"))),a.a.createElement("tbody",null,this.state.employees.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("th",{scope:"row"},e.id),a.a.createElement("td",null,e.employee_name),a.a.createElement("td",null,e.employee_salary),a.a.createElement("td",null,e.employee_age),a.a.createElement("td",{className:"text-center"},a.a.createElement("img",{src:"/employee_details"+u[Math.floor(24*Math.random())].picture_src,alt:"/employee_details"+u[Math.floor(24*Math.random())].picture_src,width:"100px",height:"100px"})))}))))):a.a.createElement("div",null,"Loading...")}}]),r}(c.Component),d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o,null),a.a.createElement(y,null))};p.a.render(a.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,r){e.exports=r(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6e69f557.chunk.js.map