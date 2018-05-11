var calculator =
{
	read: function()
	{
		this.m = +prompt('m'); //this нужен чтобы вернуться к свойствам текущего объекта, те вызвать сумму с переменными
		this.n = +prompt('n');
	},

	sum: function ()
	{
		return this.m+this.n;
	},

	mul: function()
	{
		return this.m*this.n;
	}
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul())