<?php

function dirContent ($dir){
   return $results = scandir($dir);

}

$allowedExtensions = ["jpg", "png", "gif"];

if(isset($_GET["directory"])){
    $directory = $_GET["directory"];
}else{
    $directory = './';
}
$fileArray = dirContent($directory);

$dirArray= [];
$imgArray= [];

foreach($fileArray as $file){
    if(is_dir($file)){
        $dirArray[] = $file;
    }
    else{
        $extens= pathinfo($file, PATHINFO_EXTENSION);   
        if(in_array($extens,$allowedExtensions )) {
            $imgArray[] = $file;
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider</title>
</head>
<body>

dossier:
<ul>
    <?php 
    foreach($dirArray as $dir){
        echo '<li> <a href="index.php?directory=' . $dir . '"> ' . $dir . '</a></li>';
    }
    ?>
</ul>


<?php

foreach($imgArray as $img){
    echo ' <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
          <img src="' . $directory . '/' . $img .'" alt="img" style="width:300px">
      </div>
    </div>';
}


?>

    
</body>
</html>