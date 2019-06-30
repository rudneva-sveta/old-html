<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$sms = $_POST['user_sms'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Включить подробный отладочный вывод

$mail->isSMTP();                                      // Установите почтовую программу для использования SMTP
$mail->Host = 'smtp.mail.ru';  // Укажите основной и резервный SMTP-серверы
$mail->SMTPAuth = true;                               // Включить аутентификацию SMTP
$mail->Username = 'svetlana_107@inbox.ru';                 // Наш логин
$mail->Password = 'hf,jnfdrjvgfybb1';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Включить шифрование TLS, `ssl` также принят
$mail->Port = 465;                                    // TCP-порт для подключения
 
$mail->setFrom('svetlana_107@inbox.ru', 'Face Control Studio');   // От кого письмо 
$mail->addAddress('rudneva.s@bk.ru');     // Добавить получателя
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Добавить вложения
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Дополнительное имя
$mail->isHTML(true);                                  // Установите формат электронной почты в HTML

$mail->Subject = 'Заказ обратного звонка';
$mail->Body    = '
	<p><b>Пользователь оставил свои данные</b></p> <br> 
	<u>Имя:</u> ' . $name . ' <br>
	<u>Телефон:</u> ' . $phone . ' <br>
	<u>Сообщение:</u> ' . $sms . '';
$mail->AltBody = 'Это альтернативный текст';

if( $mail->send() ){
 echo '<p style="color: green;">Ваше сообщение отправлено</p>';
} else {
 echo '<p style="color: red;">Ошибка!</p>';
}

?>