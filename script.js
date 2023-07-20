$(document).ready(function() {
    $(".options").select2();
  
    $(".options").on("change", function() {
      const boxNumber = this.id.split("options")[1];
      const selectedValue = $(this).val();
      $(`#box${boxNumber} h2`).text(selectedValue);
    });
  });
  