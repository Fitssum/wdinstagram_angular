"use strict";

angular
.module("wdinstagram", [
    "ui.router"
  ])
  .config([
      "$stateProvider",
      RouterFunction
    ])
  .controller("WdinstagramIndexController", [
   WdinstagramIndexControllerFunction
 ])
 .controller("WdinstagramShowController", [
  WdinstagramShowControllerFunction
])

 function RouterFunction($stateProvider){
   $stateProvider
   .state("wdinstagramIndex", {
     url: "/wdinstagrams",
     templateUrl: "js/ng-views/index.html"
     controller: "WdinstagramIndexController",
     controllerAs: "vm"
   })
   .state("wdinstagramShow", {
     url: "/wdinstagrams/:id",
     templateUrl: "js/ng-views/show.html"
     controller: "WdinstagramShowController",
     controllerAs: "vm"
   });
 }

 function WdinstagramIndexControllerFunction(){
   this.wdinstagrams = [
     {photo_url: "http://i.imgur.com/RpcP2Ax.jpg"},
     {author: "Oscar Wilde"},
     {body: "The Picture of Dorian Gray: Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work. The tale of Dorian Gray’s moral disintegration caused a scandal when it ﬁrst appeared in 1890, but though Wilde was attacked for the novel’s corrupting inﬂuence, he responded that there is, in fact, “a terrible moral in Dorian Gray.” Just a few years later, the book and the aesthetic/moral dilemma it presented became issues in the trials occasioned by Wilde’s homosexual liaisons, which resulted in his imprisonment. Of Dorian Gray’s relationship to autobiography, Wilde noted in a letter, “Basil Hallward is what I think I am: Lord Henry what the world thinks me: Dorian what I would like to be—in other ages, perhaps."}
   ]
   
 }
 function WdinstagramShowControllerFunction(){
   this.wdinstagrams = wdinstagrams;
 }
