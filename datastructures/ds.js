
// stack
function Stack (){

var stackArr = []
    //push into stack array
this.push = function (item){
    stackArr.unshift(item)
  };

//returns and remove last item in stack
this.pop = function (){
    return stackArr.shift();
 }

 //returns index of input item

this.indexOfItem = function (item){

return stackArr.indexOf(item);

 }

 //returns the last item in stack
this.peek = function (){
 return(
   stackArr[(this.print().length - 1)]
   );
 };

 //returns the size of stack
this.size = function(){

return this.print().length

};

this.print = function (){
    return stackArr;
  }
}



// A QUEUE data structure implementation
function Queue (){

  var queueArr = []
      //push into queue array
  this.enqueue = function (item){
      queueArr.push(item)
    };
  
  //returns and remove last item in queue
  this.dequeue = function (){
      return queueArr.pop();
   }
  
   //returns index of input item
  
  this.indexOfItem = function (item){
  
     return queueArr.indexOf(item);
  
   }
  
   //returns the fisrt item in queue
  this.peek = function (){
   return queueArr[0];
   };
  
   //returns the size of queue
  this.size = function(){
  
  return this.print().length
  
  };
  
  this.print = function (){
      return queueArr;
    }
  }

 
  //implementation of a linked list

  /*function List(){
    var head = null, next = null, tail;

    this.add = function (item){
      
      if(head === null){
        head = item;
      }else{
        head = item
      }
    }

    //print method
    this.print = function (){
      if(head !== null){
        return head;
      }
    }
  }


const list = new List();

list.add(12);
console.log(list.print());
list.add(15);
console.log(list.print()); */