<?php

$recepient = "aboriginnn@yandex.ru";
$sitename = "Сайт по продаже модульных домов";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");