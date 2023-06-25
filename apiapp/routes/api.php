<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authcontroller;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('/register',[Authcontroller::class, 'register']);
    Route::post('/login',[Authcontroller::class, 'login']);
    Route::get('/profile',[Authcontroller::class, 'profile']);
    Route::get('/ReactApiGetProducts',[Authcontroller::class, 'getProducts']);
    Route::get('/ReactApiGetProducts/{id}',[Authcontroller::class, 'getSpecificProduct']);
    Route::post('/logout',[Authcontroller::class, 'logout']);

});
