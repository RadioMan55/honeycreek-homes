<html>
<head>
    <meta name="robots" content="noindex" />
    <title>HoneyCreek Homes, LLC</title>
    <link href="css/main.css" rel="stylesheet" type="text/css">
    <style>
		body { margin:50px 15px 0 15px; }
		p { text-align:center; }
	</style>
</head>
<body>
<?php
	// HoneyCreek Homes Contact Info
	$contact_name = $_POST["name"];
	$contact_phone = $_POST["phone"];
	$contact_workType = $_POST["workType"];
	$contact_email = $_POST["email"];
	$contact_comments = $_POST["comments"];
	
	mysql_connect("HoneyCreek1.db.8808836.hostedresource.com","HoneyCreek1","B0bandbr1an!");
	mysql_select_db("HoneyCreek1");
	
	$insert_query = "INSERT INTO HCList (HCName, HCPhone, HCWork, HCEmail, HCComments) VALUES ('".$contact_name."', '".$contact_phone."', '".$contact_workType."', '".$contact_email."', '".$contact_comments."')";
	$insertion_result = mysql_query($insert_query);
	
	if(!$insertion_result)
		echo '<p>Sorry! Something went wrong.</p>
		<p><a href="javascript:window.close();">Close window</a></p>';
		else
		echo '<p><strong>Thanks for getting in touch with us!</strong><br /><br />We will get back to you as soon as possible to discuss your project.</p>
		<p><a href="javascript:window.close();">Close window</a></p>';
			
	mysql_close();
	
	$request_method = $_SERVER["REQUEST_METHOD"];
	if($request_method == "GET")
	{
		$query_vars = $_GET;
	} 
	elseif ($request_method == "POST")
	{
		$query_vars = $_POST;
	}

	reset($query_vars);
	$t = date("U");
	$file = $_SERVER['DOCUMENT_ROOT'] . "\ssfm\gdform_" . $t;
	$fp = fopen($file,"w");

	while (list ($key, $val) = each ($query_vars)) 
	{
		fputs($fp,"<GDFORM_VARIABLE NAME=$key START>\r\n"); 
		fputs($fp,"$val\r\n");
		fputs($fp,"<GDFORM_VARIABLE NAME=$key END>\r\n");
		if ($key == "redirect") 
		{ 
			$landing_page = $val;
		}
	}

	fclose($fp);
	
	if ($landing_page != "")
	{
		header("Location: http://".$_SERVER["HTTP_HOST"]."/$landing_page");
	} 
	else 
	{
		header("Location: http://".$_SERVER["HTTP_HOST"]."/");
	}
?>
</body>
</html>