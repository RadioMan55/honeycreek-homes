<html>
<head>
	<meta name="robots" content="noindex" />
    <title>HoneyCreek Homes, LLC</title>
    <style>
		table { margin:100px auto 0 auto; }
		th, td { padding:7px; }
	</style>
</head>
<body>
<?php
 //Connecting to your database
mysql_connect("HoneyCreek1.db.8808836.hostedresource.com","HoneyCreek1","B0bandbr1an!") OR DIE ("Unable to 
connect to database! Please try again later.");
mysql_select_db("HoneyCreek1");

//Fetching from your database table.
$query = "SELECT * FROM HCList";
$result = mysql_query($query);

echo "<table border='1'>
	<tr>
		<th>Name</th>
		<th>Phone</th>
		<th>Work Requested</th>
		<th>Email</th>
		<th>Comments</th>
	</tr>";

if ($result) {
	while($row = mysql_fetch_array($result)) {
		echo "<tr>";
		echo "<td>" . $row['HCName'] . "</td>";
		echo "<td>" . $row['HCPhone'] . "</td>";
		echo "<td>" . $row['HCWork'] . "</td>";
		echo "<td>" . $row['HCEmail'] . "</td>";
		echo "<td>" . $row['HCComments'] . "</td>";
		echo "</tr>";
	}

echo "</table>";

mysql_close();
}
?> 
</body>
</html>