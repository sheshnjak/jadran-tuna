<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Jadran tuna</title>

<link href="dizajn/css.css" rel="stylesheet" type="text/css" />
<style type="text/css">body{ background:#002033; background-image:none; padding: 35px;}</style>
</head>
<body>

<?php

$visitor = $_POST['name'];
$visitormail = $_POST['email'];
$phone_field = $_POST['phone'];
$notes = $_POST['message'];
$zaKoga_field = $_POST['zaKoga'];

$to = "jadran.tuna1@zd.t-com.hr";

if(!$visitormail == "" && (!strstr($visitormail,"@") || !strstr($visitormail,".")))
{
echo "<h2>Use Back - Enter valid e-mail</h2>\n";
$badinput = "<h2>Feedback was NOT submitted</h2>\n";
echo $badinput;
die ("Go back! ! ");
}

if(empty($visitor) || empty($visitormail) || empty($notes )) {
echo "<h2>Use Back - fill in all fields</h2>\n";
die ("Use back! ! ");
}

$todayis = date("l, F j, Y, g:i a") ;

$subject = "Jadran tuna - kontakt formular";

$notes = stripcslashes($notes);

$message = " $todayis [EST] \n
From: $visitor ($visitormail)\n
Message: $notes \n
";

$from = "From: $visitormail\r\n";

mail($to, $subject, $message, $from);

?>

<p align="center">
<h1>Hvala, uspješno ste poslali poruku.</h1>
<h1>Thank You. Your message is sent.</h1>
<br />
<br />
<h3><?php echo $visitor ?> ( <?php echo $visitormail ?> )</h3>
<br />
<?php $notesout = str_replace("\r", "<br/>", $notes);
echo $notesout; ?>
<br />
<?php echo $ip ?>

<br /><br />
<a href="javascript:history.back()"> Back </a>
</p>

</body>
</html>