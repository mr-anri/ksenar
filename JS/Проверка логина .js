var login = prompt ('Ты кто вообще?');

if (login == 'Админ')
{
	var pass = prompt ('Кодовое слово');

 if (pass == 'Чёрный Властелин')
 {
 	alert ('Добро пожаловать!');
 }
 else if (pass == null)
 {
 	alert ('Вход отменён');
 }
 else 
 {
 	alert ('Пароль неверен');
 }
}
else if (login == null)
{
	alert ('Вход отменен');
}
else
{
	alert ('Я тебя не знаю');
}
