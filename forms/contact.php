<?php
$form_fname = (isset($_POST['fname'])) ? trim($_POST['fname']) : '';
$form_lname = (isset($_POST['lname'])) ? trim($_POST['lname']) : '';
$form_email = (isset($_POST['email'])) ? trim($_POST['email']) : '';
$form_mssge = (isset($_POST['mssge'])) ? trim($_POST['mssge']) : '';

if ( isset($_POST['submitted']) ) {

	if ( empty($form_fname) ) {
		$fnameError =  'Please enter your first name.';
		$hasError = true;
	}

	if ( empty($form_lname) ) {
		$lnameError =  'Please enter your last name.';
		$hasError = true;
	}

	if( empty($form_email) ) {
		$emailError = 'Please enter your email address.';
		$hasError = true;
	} else if ( !preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", $form_email) ) {
		$emailError = 'Invalid email address.';
		$hasError = true;
	}

	if( !isset($hasError) ) {
		$email_from = 'danielbwaltz@gmail.com';
		$email_subject = 'Contact Me - danielwaltz.me';
		$email_body = "From: $form_fname $form_lname \n $form_mssge";
		$email_to = 'danielbwaltz@gmail.com';
		$email_headers = "From: $form_fname $form_lname <$email_from> \r\n";
		$email_headers .= "Reply-To: $form_email \r\n";

		mail($email_to,$email_subject,$email_body,$email_headers);

		$emailSent = true;
	}
}
?>