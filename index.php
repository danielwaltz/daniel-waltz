<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<title>Daniel Waltz</title>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,700,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/style.css">
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-36719192-1', 'danielwaltz.me');
	  ga('send', 'pageview');

	</script>
</head>
<body id="home">
	<a href="#" class="button playpause fa fa-pause" title="Play/Pause"></a>

	<section id="section1" class="earth">
		<div class="content vert-center-mobile">
			<h1>Daniel Waltz</h1>
			<h2><em>front-end web developer</em></h2>
		</div>
		<a href="#section2" class="arrow arrow-down">my abilities</a>
		<video class="window video-earth" autoplay loop>
			<source src="videos/earth.mp4" type="video/mp4">
			<source src="videos/earth.webm" type="video/webm">
		</video>
	</section>

	<section id="section2" class="forest">
		<div class="content scroll vert-center-mobile">
			<div class="scroll-inner">
				<div id="abilities">
					<header>
						<h1>Abilities</h1>
						<h2>what i <em>can do</em></h2>
					</header>
					<div class="col col-1-2">
						<h3>JavaScript</h3>
						<h3>Email Templating</h3>
						<h3>Mobile</h3>
					</div><div class="col col-1-2">
						<h3>Photoshop</h3>
						<h3>PHP</h3>
						<h3>Git</h3>
					</div>
					
				</div>
				<a href="#" class="button scroll-toggle">Scroll</a>
				<div id="specialties">
					<header>
						<h1>Specialties</h1>
						<h2>what i <em>do well</em></h2>
					</header>
					<div class="col col-1-2">
						<h3>HTML5</h3>
						<h3>CSS3</h3>
						<h3>Responsive</h3>
					</div><div class="col col-1-2">
						<h3>jQuery</h3>
						<h3>WordPress</h3>
						<h3>MySQL</h3>
					</div>
				</div>
			</div>
		</div>
		<a href="#section3" class="arrow arrow-down">how to contact me</a>
		<video class="window video-forest" autoplay loop>
			<source src="videos/forest.mp4" type="video/mp4">
			<source src="videos/forest.webm" type="video/webm">
		</video>
	</section>

	<section id="section3" class="clouds">
		<div class="content">
			<header>
				<h1>Contact</h1>
				<h2><em>fill out the form or <a href="mailto:danielbwaltz@gmail.com">email me</a></em></h2>
			</header>
			<?php include('forms/contact.php'); ?>
			<form id="contact" action="#clouds" method="post">
				<div class="field-wrap">
					<label class="screen-reader-text">First Name</label>
					<input type="text" name="fname" id="fname" value="<?php echo ( !isset($emailSent) ) ? $form_fname : '' ?>" placeholder="first name" class="required fname<?php echo ( isset($fnameError) ) ? ' error' : '' ?>">
				</div>
				<div class="field-wrap">
					<label class="screen-reader-text">Last Name</label>
					<input type="text" name="lname" id="lname" value="<?php echo ( !isset($emailSent) ) ? $form_lname : '' ?>" placeholder="last name" class="required lname<?php echo ( isset($lnameError) ) ? ' error' : '' ?>">
				</div>
				<div class="field-wrap">
					<label class="screen-reader-text">Email</label>
					<input type="email" name="email" id="email" value="<?php echo ( !isset($emailSent) ) ? $form_email : '' ?>" placeholder="email" class="required email<?php echo ( isset($emailError) ) ? ' error' : '' ?>">
				</div>
				<div class="field-wrap">
					<label class="screen-reader-text">Inquiry</label>
					<textarea name="mssge" id="mssge" value="<?php echo $form_mssge; ?>" placeholder="inquiry" class="mssge"></textarea>
				</div>
				<div class="field-wrap">
					<input type="submit" id="submit" class="button submit" value="send">
					<input type="hidden" name="submitted" value="true">
				</div>
				<?php if( isset($hasError) || isset($captchaError) ) { ?>  
				<p class="alert">There was an error submitting the form. Make sure required fields are filled.</p>  
				<?php } ?>
				<?php if( isset($emailSent) ) { ?>  
				<p class="alert">Message sent successfully.</p>  
				<?php } ?>
			</form>
		</div>

		<span class="copyright">&copy; Copyright <?php echo date('Y'); ?> Daniel Waltz<br>
		Video assets provided by <a href="http://www.dissolve.com/" target="_blank" title="Thank you!">Dissolve</a></span>

		<a href="#section1" class="arrow arrow-up">top</a>
		<video class="window video-clouds" autoplay loop>
			<source src="videos/clouds.mp4" type="video/mp4">
			<source src="videos/clouds.webm" type="video/webm">
		</video>
	</section>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="js/script-min.js"></script>
</body>
</html>