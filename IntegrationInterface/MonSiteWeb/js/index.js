// var vm = new Vue({
//     el: "#app",
//     data: {
//       firstname: "Cesar",
//       lastname: "Franco",
//       address: "Colombia",
//     },
//     methods: {
//       mydetails: function () {
//         return (
//           "I am " + this.firstname + " " + this.lastname + " from " + this.address
//         );
//       },
//     },
//   });
  

  var vm = new Vue({
  el: "#app",
  data: {
    nombre: 4
  },
  computed: {
    moncalcul () {
      return this.nombre + 10;
    },
  },
});