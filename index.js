const BUY_CAKE = "BUY_CAKE"

//action is an object with a type property 
{
	type: BUY_CAKE,
	info: "First redux action"
}
//action creater is a function that returns an action
function buyCake(){
	return
	{
		type: BUY_CAKE,
		info: "First redux action"
	}
}