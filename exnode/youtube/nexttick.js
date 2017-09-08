function process_step1(params) {
 // do some stuff
 process.nextTick(process_step2);

}

function process_step2(asdf){

 process.nextTick(process_step3);

}
