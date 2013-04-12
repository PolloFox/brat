<?php

/* include the silex autoload */
require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Response;
 
$app = new Silex\Application();

/* Activate Debug */
$app['debug'] = true;
 
$app->get('/', function() {
    return new Response('Welcome to my new Silex app');
});
 
return $app;
