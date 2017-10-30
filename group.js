// This function will show the contents corresponds to student being clicked
function show_student(menu_id) {
    // The menu clicked
    var clicked=document.getElementById(menu_id);

    // The paragraph for student description
    var description=document.getElementById('my_description');

    // The photo for student
    var photo=document.getElementById('my_photo');

    // The name of student
    var name=document.getElementById('my_name');

    // The area where all Descriptions of students saved (We used <ul><li></li></ul>)
    var student_photo=document.getElementById('photo_for_'+menu_id);

    // The area where all photo of students saved (We used <ul><li><p></p></li></ul>)
    var student_description=document.getElementById('description_for_'+menu_id);

    // Replace the name with the text inside the menu clicked
    name.innerText=clicked.innerText;

    // Get the description corresponds to a name clicked
    var my_student_description=student_description.outerHTML;

    // Search in the description every matched name and give it Yellow background
    my_student_description = my_student_description.split(name.innerText).join('<span style="background:yellow">'+name.innerText+'</span>');

    // Replace text inside description with the text corresponding to menu clicked
    description.innerHTML=my_student_description;

    // Get a photo of student and display it
    photo.src=student_photo.src;
}
