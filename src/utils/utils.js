function tasksorter(a,b) {
    //if both are done
if(a.done && b.done) {
    //if a is completed at recent time than b then a is smaller than b
    if(a.completedAt >  b.completedAt) return -1
    else return 1
}
//if both are not done
else if(!a.done && !b.done) {
    //a is created at a recent time than b then a is smaller than b
    if(a.createdAt > b.createdAt) return -1;
    else return 1;
}
else{
    // else which ever is not done is smaller
    if(a.done) return 1;
    else return -1;
}
  }

  function getCurrentDateTime(){
    const currentDate = new Date();
    return currentDate;
  };

  export {tasksorter, getCurrentDateTime};