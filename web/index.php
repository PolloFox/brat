<?php
 
/* include the silex autoload */
require_once __DIR__.'/../vendor/autoload.php';
 
$app = new SilexApplication();

/* Activate Debug */
$app['debug'] = true;

/* Ensure Reverse Proxy correct use */
use Symfony\Component\HttpFoundation\Request;

Request::trustProxyData();

/* silex uses anonymous functions to define routes */
$app->get('/', function() use($app) {
  return 'Hello World!';
});
 
$app->run();
?>
