$('b a:first-child').each(function() {
    let link = "https://uwflow.com/course/" + this.name;
    $(this).parent('b').append(" <a target = '_blank' href=" +  link + ">UWFlow</a>");
});
