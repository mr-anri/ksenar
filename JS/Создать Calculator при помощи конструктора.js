function CalculatorF ()
{
	this.read = function()
	{
		this.m = +prompt('m'); //this нужен чтобы вернуться к свойствам текущего объекта, те вызвать сумму с переменными
		this.n = +prompt('n');
	},

	this.sum = function ()
	{
		return this.m+this.n;
	},

	this.mul = function()
	{
		return this.m*this.n;
	}
}
var CalculatorV = new CalculatorF ();
CalculatorV.read();
alert(CalculatorV.sum());
alert(CalculatorV.mul())