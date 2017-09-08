try{
	setTimeout(function(){
		throw new Error("danger zone!");
	}, 2000);
} catch(e){
	console.log("I caught the error phew!");
}

