<?php
 
//require 'vendor/autoload.php' ;
 
class db {
    private $user = "8kubiszyn" ;
    private $pass = "pass8kubiszyn";
    private $host = "172.20.44.25";
    private $base = "8kubiszyn";
    private $coll = "pogoda";
    private $collUser = "uzytkownik";
    private $conn;
    private $dbase;
    private $collection;
 
    function __construct() {
      $this->conn = new MongoDB\Client("mongodb://{$this->user}:{$this->pass}@{$this->host}/{$this->base}");    
      $this->collection = $this->conn->{$this->base}->{$this->coll};
    }
 
    function select() {
      $cursor = $this->collection->find();
      $table = iterator_to_array($cursor);
      return $table ;
    }

    function insertUpdate($weather) {
      $filter = array('id' => $weather[id]);
      $update = array('$set' => $weather);
      $option = array('upsert' => true);
      $ret = $this->collection->updateOne($filter, $update, $option);
      return $ret;
    }

    function insertUser($user) {
      if($this->conn->{$this->base}->{$this->collUser}->findOne(array("email" => $user[email]))) {
         $ret = false;
      }
      else {
        $ret = $this->conn->{$this->base}->{$this->collUser}->insertOne($user) ;
      }
      return $ret;
    }

    function checkUser($user) {
      $connUser = $this->conn->{$this->base}->{$this->collUser};
      $ret = $connUser->findOne(array("email" => $user[email], "pass" => $user[pass])) ;
      return $ret;
    }
}
