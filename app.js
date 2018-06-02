(function() {
  var app=angular.module('app', ['ngMaterial', 'ngMessages']);

  app.controller("register-controller",function($scope){
   $scope.user = {
    account:'',
    name:'',
    password:'',
    retype_password:''
  }

  $scope.display = function(){
    alert("Register Data:"+$scope.user.account+"/"+$scope.user.name+"/"+$scope.user.password+"/"+$scope.user.retype_password);
  }
});

  app.controller("login-controller",function($scope){
   $scope.user = {
   	account:'',
   	password:'',
   }

   $scope.display = function(){
     alert("Login Data:"+$scope.user.account+"/"+$scope.user.password);
   }
 });


  app.controller("changePassword-controller",function($scope){
    $scope.oldPassword = '';
    $scope.newPassword = '';
    $scope.confrimPassword = '';

    $scope.changePassword = function(){
 		alert("Change password:"+$scope.oldPassword+"/"+$scope.newPassword+"/"+$scope.confrimPassword);
 	}
 });

  app.controller("createAgency-controller",function($scope){
    $scope.charge_enable_choices = [
    "Enable",
    "None"
    ];

    $scope.choice = 'Enable';
     $scope.rating = 0.50;//initial
     $scope.username = '';
     $scope.password = '';
     $scope.confirm_password = '';

     $scope.createAgency =  function(){
     	//create agency operation
     	alert("Create agency:"+$scope.choice+"/"+$scope.rating+"/"+$scope.username+"/"+$scope.password+"/"+$scope.confirm_password);
     }
   });

  app.controller("userlog-controller",function($scope){
   $scope.radioData = [
   { label: 'User Log', value: 1 },
   { label: 'Agency Log', value: 2 }
   ];
   $scope.log = 1;
   $scope.userid = '';
   $scope.searchDate = new Date();

   $scope.search = function(){
     let yr = $scope.searchDate.getFullYear();
     let mon = $scope.searchDate.getMonth()+1;
     let day = $scope.searchDate.getDate();

     alert("Log Search:"+$scope.log+"/"+$scope.userid+"/("+yr+"-"+mon+"-"+day+")");

   },

   $scope.data = [
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
   ];

 });

  app.controller("userReturn-controller",function($scope){
    $scope.data = [
    {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
    {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
    {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
    {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
    {"time":'2018-03-18 17:50:09',"from":'Aung Thura',"to":'MT',"incr":'5000',"acf":'148535',"act":'54525',"uct":'2000'},
    ];

    $scope.selectButtonIndex = 1;
    $scope.selectButton = function(_selectIndex){
      $scope.selectButtonIndex = _selectIndex;
    };
    $scope.isSelected = function(_selectIndex){
      return $scope.selectButtonIndex === _selectIndex;
    }

    $scope.user_id ='';
    $scope.coin = '';
    $scope.commit = function(){
      alert("Recharge Data:"+$scope.selectButtonIndex+"/"+$scope.user_id+"/"+$scope.coin);
    };


  });

  app.controller("gameManager-controller",function($scope){
   $scope.users = [
   "all-users",
   "None"
   ];


 });


})();