var arr = [];

for (i=2; i<100; i++)
{
	arr[i] = i;
};


var p = 2;
do
{
	for (i=2*p;i<100;i+=p) //3
	{
		delete arr[i];
	};

	for (i=p+1;i<100;i++) //4
	{
		if (i in arr) break; // i in arr проверка на наличие ключа в массиве
	}

	p=i;

} while (p^2<100);

var sum = 0;

for (i=2;i<arr.length;i++)
{
 if (i in arr)
 {
 	sum+=i;
 }
}
alert (sum);