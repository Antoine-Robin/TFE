<?php
$allowedExtensions = ["jpg", "png", "gif"];

if (isset($_GET["directory"])) {
    $directory = $_GET["directory"];
} else {
    $directory = './';
}
$fileArray = scandir($directory);

$dirArray = [];
$imgArray = [];


foreach ($fileArray as $file) {
    if (is_dir($file)) {
        $dirArray[] = $file;
    } else {
        $extens = pathinfo($file, PATHINFO_EXTENSION);
        if (in_array($extens, $allowedExtensions)) {
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
    <script defer src="https://kit.fontawesome.com/74e1f98151.js" crossorigin="anonymous"></script>
    <script defer src="http://localhost/Blog/resources/script.js"></script>
    <title>Slider</title>

    <style>
        body {
            font-size: 1.2rem;
            justify-content: center;
            display: flex;
            flex-direction: column;
            align-items: center;

        }

        ul {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        li {
            display: inline;
            padding: 5px;
        }

        .gallery {
            width: 90%;
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 30px;
        }

        .gallery-img {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 20px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.8);
        }

        .image-modal {
            width: 50%;
            height: auto;
        }

        .show-modal {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <ul>
        <?php
        foreach ($dirArray as $dir) {
            echo '<li>  <a href="index.php?directory=' . $dir . '"> ' . $dir . ' <img style="width: 50px;" src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/folder-open-archive-document-archives-256.png"> </a></li>';
        }
        ?>
    </ul>

    <div class="gallery">
        <?php
        $i = 0;
        foreach ($imgArray as $img) {
            echo
            ' <div>
                <img onclick="showmodal(' . $i . ')" id="img"  class="gallery-img" src="' . $directory . '/' . $img . '" alt="img">
            </div> ';
            ++$i;
        }

        ?>
    </div>

    <div id="modal-img" class="modal">
        <img alt="" id="image" class="image-modal">
    </div>
</body>

<script>
    let images = document.querySelectorAll('#img');
    let modal = document.getElementById("modal-img");
    let modalImg = document.getElementById("image");

    function showmodal(index) {
        let i = index;
        let diaporama = setInterval(() => {
            let image = images[i];
            modal.classList.add("show-modal");
            modalImg.src = image.src;
            ++i;
            if (i == images.length) {
                i = 0;
            }
        }, 1000);

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('show-modal')
                clearInterval(diaporama)
            }
        }

    }
</script>
</body>

</html>