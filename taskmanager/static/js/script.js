document.addEventListener('DOMContentLoaded', function() {
  //sidenav initialisation
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);


  // datepicker initialisation
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd, mmm, yyyy",
    i18n: {done: "Select"}
  });


  let selects = document.querySelectorAll('select');
  M.FormSelect.init(elems, options);
});