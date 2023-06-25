<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::post('/posting-products', [ProductController::class, 'postingProducts']);
Route::post('/updating-products', [ProductController::class, 'updatingProducts']);
Route::post('/search-result', [ProductController::class, 'search']);
Route::get('/all-products', [ProductController::class, 'allProducts']);
Route::get('/delete-product/{id}', [ProductController::class, 'deleteProducts']);
Route::get('/update-product/{id}', [ProductController::class, 'updateProduct']);

Route::get('/', function () {
    return view('form');
});
