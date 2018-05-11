function CalculatorF ()
{
	var operacii =
	{
		"+": function (a,c)
		{
			return a+c;
		},
		"-": function (a,c)
		{
			return a-c;
		}
	};

	this.calculate = function (stroka) //this возвращает ссылку на CalculatorF чтобы использовать дальше функции CalculatorF
	{
		var split = stroka.split(' '),
		a = +split[0],
		b = split[1],
		c = +split[2] //+a приведение к численному виду (унарный плюс)

			if (isNan(a) || isNan(c) || !operacii[b] || split.length>3) // length возвращает индкс последний +1

		return operacii[b](a,c);
	};

	this.newfunc = function (name,func)
	{
		operacii[name]=func;
	}
};

var calculator = new CalculatorF;

calculator.newfunc("*", function(a, b) {
  return a * b;
});
calculator.newfunc("/", function(a, b) {
  return a / b;
});
calculator.newfunc("**", function(a, b) {
  return Math.pow(a, b);
});


alert(calculator.calculate("10 * 3"));