<?php
// Where the file is going to be placed 
$target_path = "upload/";

/* Add the original filename to our target path.  
Result is "uploads/filename.extension" */
$target_path = $target_path . basename( $_FILES['file']['name']);

//Add the allowed mime-type files to an 'allowed' array 
$allowed = array('image/png','image/jpg','image/gif');

//Check uploaded file type is in the above array (therefore valid)  
if(in_array($_FILES['file']['name'], $allowed)){
	if($_FILES["file"]["size"] < 400000){
		if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
			echo $target_path;
		} else {
			echo "File could not be moved!";
		}
	} else {
		echo "File size too big!";
	}
} else {
	echo "Wrong file type!";
}
?>