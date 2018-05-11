var x=prompt('x'), n=prompt('n');

function pow1 (x,n)
{
	var d
	d=Math.pow(x,n)
/*var a=x
	for (var i=1;i<n;i++)
	{
		a*=x;
	}*/
	return d;
};

if (n<1 || Number.isInteger(+n)==false)
{
	
	alert ("степень то должна быть натуральная");
}
else
{
	alert (pow1(x,n));
};
