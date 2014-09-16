/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var logger1 = function(nameFromArray){
  console.log('The first name in names is ', nameFromArray)
};

var firstName = function(arr, cb){
  var name1 =  arr[0];
  cb(name1);
}
firstName(names, logger1);

var last = function(lastName){
  console.log('The last name in names is ' + lastName);
};

var lastName = function(arr, cb){
  var nameLast = arr[arr.length - 1];
  cb(nameLast);
}

lastName(names, last);

var mathAnswer = function(answer){
  console.log('The answer is ', answer);
}

var doMath = function(num1, num2, cb){
  var multiplyAns = num1 * num2;
  cb(multiplyAns);
}

doMath(3, 4, mathAnswer);

//contains(names, 'Colt', function(yes){
//  if(yes === true){
//    'Colt is in the array';
//  } else {
//    'Colt is not in the list';
//  }
//});


var doesItContain = function(result){
  console.log(result);
}

var contains = function(arr, nameTesting, cb){
  for(var i = 0; i < arr.length; i++){
    if (arr[i] === nameTesting){
      var yes = true;
    }
  }
  var ifResult;
  if(yes === true){
    ifResult = nameTesting + ' is in the array';
  } else {
    ifResult = nameTesting + ' is not in the list';
  }
  cb(ifResult);
};

contains(names, 'Colt', doesItContain);

//uniq(names, function(uniqArr){

var fixedArrayLogger = function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ' + uniqArr);
};

var uniq = function(arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
       if(arr[j] === arr[i]){
         arr.splice(j, 1);
         j--;
       }
    };
  };   
  cb(arr);
};

uniq(names, fixedArrayLogger);

////////////////////////////////////////////
var each = function(item, indice){
  console.log('The item in the ' , indice , 'position is ' , item)
}

var objLoop = function(arr) {
  for (var i = 0; i < arr.length; i++){
    cb(i, arr[i]);
  }
}
//each(names, function(item, indice){
  


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

//getUserById('16t', function(user){
//  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
//});

var getUserById = function(user) {
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
}

var searchUser = function(arr, userId, cb) {
  for(var i = 0; i < arr.length; i++){
    if (arr[i].id === userId){
      cb(arr[i]);
    }
  }
}
searchUser(users, '16t', getUserById);





