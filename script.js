// Selecting by toggle-img class.
$(".toggle-img").click(function () {
  const currentAttr = $(this).attr("src"); //Current Attribute
  const altAttr = $(this).attr("alt-src"); //Alternative Attribute

  //toggle the "alternative src attribute"
  $(this).attr("src", altAttr);
  $(this).attr("alt-src", currentAttr);
});
