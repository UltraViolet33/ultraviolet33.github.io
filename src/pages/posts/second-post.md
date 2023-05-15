---
layout: "@/templates/BasePost.astro"
title: Let's create a Singleton in PHP !
description: How to use the Singleton pattern in PHP to connect to a database
pubDate: 2022-10-03T00:00:00Z
imgSrc: "/assets/images/posts/singleton.png"
imgAlt: "Image post 5"
---

So I decided to talk about Singleton design pattern in PHP. This is the first tutorial I write, so feel free to comment or suggest any improvements.

### Prerequisites

Before going forward, be aware it is better if you know a little of object oriented programming in PHP or in any other langage.

In this tutorial, we will create a Singleton design pattern using PHP.

But first, you need to ask:

### What is a design pattern ?

Design patterns are solutions to commonly problems in software design. Developpers before us had problems when they designed their applications, so they found solutions that we can use today.
The singleton design pattern is one of these solutions.

OK, so now that you know what a design pattern is, we can start getting interested with the singleton design pattern.

### What is the Singleton design pattern ?

You 'll see, the singleton is one of the simpliest one.
Imagine you are coding an application and you use object oriented programming and you need to create a class which deals with the database. You need to use the connection to your database in your application to do the CRUD basic operations.

To illustrate, here is an example:

```php
<?php

/**
 * Database.php
 */

class Database
{
    private PDO $PDOInstance;

    private string $host = "localhost";
    private string $dbname = "dbtest";
    private string $user = "root";
    private string $password = "";


    // Connection to the database with PDO
    public function __construct()
    {
        $string = "mysql:host=" . $this->host . ";dbname=" . $this->dbname;
        $this->PDOInstance = new PDO($string, $this->user, $this->password);
    }


    // Write method to insert in the DB
    public function write(string $query, array $data): bool
    {
        $statement = $this->PDOInstance->prepare($query);
        return $statement->execute($data);
    }


    public function read(string $query, array $data = array()): array
    {
        $statement = $this->PDOInstance->prepare($query);
        $statement->execute($data);
        return $statement->fetchAll(PDO::FETCH_OBJ);
    }
}
```

Here you create a simple Database class with a PDOInstance property.
We connect the database using PDO. We use it in the write method to insert data in the DB.

We can imagine that you use this class in a User class :

```php
<?php

/**
 * User.php
 */

require "./Database.php";

class User
{
    private string $name;
    private string $email;
    private string $password;
    private Database $db;

    public function __construct(string $name, string $email, string $password)
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->db = new Database();
    }


    public function insert(): bool
    {
        $sql = "INSERT INTO users(name, email, password) VALUES (:name, :email, :password)";
        $data = ['name' => $this->name, "email" => $this->email, "password" => $this->password];
        return $this->db->write($sql, $data);
    }
}
```

In this class, we simply create a method to insert in the DB the user data. We use the Database class by instantiating the Database class in the user construct method.
Everything works fine.

But now imagine you have an other class which deals with the database. To keep working with user data, let's say it is the UsersManager class :

```php
<?php
/**
 * UsersManager.php
 */

require_once "./Database.php";

class UsersManager
{
    private Database $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getAllUsers(): array
    {
        $sql = "SELECT * FROM users";
        return $this->db->read($sql);
    }
}
```

Since this class has to have access to the DB, we instantiate the Database class.
But now we have two objects of class Database, so two connections to the database.

What if we want to use the same object in the User and UsersManager classes ?

The singleton design pattern is a solution. We would like to have one connection to the database.

But how do we do that ?

What we want is an instance of the Database class, and we want only one.

We will have a method in the Database class which returns an instance of the Database class. We want to call this method wihout creating an object of class Database, so the method needs to be static. We can call this method getInstance

```php
public static function getInstance()
{

}
```

This method returns an instance of Database. But if an instance of Database already exists, we don't want to create a new one. So we need to store the instance in a property of Database.

```php
private static $instance = null;
```

Since we will use it in the static method `getInstance`, the `$instance` property is also static.

Now we can simply code in the `getInstance` method :

```php
public static function getInstance(): self
{
    if (is_null(self::$instance)) {
        self::$instance = new Database();
    }
    return self::$instance;
}
```

We check if `self::instance` is null. If it is null, it means it have not been instantiate yet. So we instantiate the Database class in the `$instance` property.
If it is not null, it means the class has already been instantiate, so we can return `self::instance`.

And we have our instance.

So the Database class looks like this :

```php
<?php

/**
 * DatabaseSingleton.php
 */

class DatabaseSingleton
{
    public static $instance = null;
    private $PDOInstance;

    private string $host = "localhost";
    private string $dbname = "dbtest";
    private string $user = "root";
    private string $password = "";


    // Connection to the database with PDO
    public function __construct()
    {
        $string = "mysql:host=" . $this->host . ";dbname=" . $this->dbname;
        $this->PDOInstance = new PDO($string, $this->user, $this->password);
    }


    public static function getInstance(): self
    {
        if (is_null(self::$instance)) {
            self::$instance = new DatabaseSingleton();
        }
        return self::$instance;
    }
}
```

In the User class :

```php

<?php

require "./DatabaseSingleton.php";

class User
{
    private string $name;
    private string $email;
    private string $password;
    private DatabaseSingleton $db;

    public function __construct(string $name, string $email, string $password)
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->db = DatabaseSingleton::getInstance();
    }

```

And we can do CRUD operations like before.

### Conclusion

So to conclude, we can use the Singleton design pattern when a class only needs to be instantiated once. However, there are some inconvenients with this design pattern. It might cause issues when you have to test your code.

Thank you for reading this tutorial and see you soon !
