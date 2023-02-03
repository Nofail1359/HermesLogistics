<?php
$message = "test php mail";
$message = wordwrap($message, 70);
mail('nofail1359@gmail.com', 'My Subject', $message);
?>