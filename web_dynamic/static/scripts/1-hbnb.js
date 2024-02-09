$(document).ready(function() {
  let amenityList = {};
  $('input[type="checkbox"]').change(function() {
      if (this.checked) {
          amenityList[$(this).data('id')] = $(this).data('name');
      } else {
          delete amenityList[$(this).data('id')];
      }
      let amenities = Object.values(amenityList);
      $('.amenities h4').text(amenities.join(', '));
  });
});
