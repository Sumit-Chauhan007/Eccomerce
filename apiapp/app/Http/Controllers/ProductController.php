<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    public function postingProducts(Request $request)
    {
        // dd(';lkujyhgfvdcsx');
        $data = new products;
        $data->name = $request->name;
        $data->_id = Str::uuid();
        $image = $request->file('image'); // Use `file` instead of accessing the string directly
        // dd($image);
        if ($image) {
            $imagename = time() . '.' . $image->getClientOriginalExtension();
            $image->move('../../first/public/images', $imagename);
            $data->image = $imagename;
        }
        $data->description = $request->description;
        $data->price = $request->price;
        $data->inStock = $request->inStock;
        $data->rating = $request->rating;
        $data->numReviews = $request->numReviews;
        $data->category = $request->category;
        $data->save();
        return redirect()->back();
    }
    public function updatingProducts(Request $request)
    {
        // dd(';lkujyhgfvdcsx');
        $uuid =$request->uuid;
        $data = products::where('_id',$uuid)->first();
        $data->name = $request->name;
        $image = $request->file('image'); // Use `file` instead of accessing the string directly
        // dd($image);
        if ($image) {
            $imagename = time() . '.' . $image->getClientOriginalExtension();
            $image->move('../../first/public/images', $imagename);
            $data->image = $imagename;
        }
        $data->description = $request->description;
        $data->price = $request->price;
        $data->inStock = $request->inStock;
        $data->rating = $request->rating;
        $data->numReviews = $request->numReviews;
        $data->category = $request->category;
        $data->save();
        return redirect('/all-products');
    }
    public function allProducts(){
        $products = products::all();
        return view('Allproducts',compact('products'));
    }
    public function search(Request $request){
        $search = $request->search;
        $products = products::where('name', 'LIKE', "%{$search}%")->get();
        dd($products);
        return view('Allproducts',compact('products'));
    }
    public function deleteProducts($id){
        $products = products::where('_id',$id)->delete();
        return redirect()->back();
    }
    public function updateProduct($id){
        $product = products::where('_id',$id)->first();
        return view('updateProducts',compact('product'));

    }
}
