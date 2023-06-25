<?php

namespace App\Http\Controllers;

use App\Models\products;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
// use Validator;
use Illuminate\Support\Facades\Validator;
class Authcontroller extends Controller
{
    public function _construct(){
        $this->middleware('auth:api',['except'=>['login', 'register']]);
    }
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|string|email|unique:users',
            'password'=>'required|string|confirmed|min:6|'
        ]);
        if($validator->fails()){
            return response()->json($validator ->errors()->toJson(),400);
        }
        $user = User::create(array_merge(
            $validator->validated(),
            ['password'=>bcrypt($request->password)]
        ));
        return response()->json([
            'message'=>'User registered successfully',
            'user'=>$user
        ],201);
    }
    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required|string|min:6|'
        ]);
        if($validator->fails()){
            return response()->json($validator ->errors(),422);
        }
        if(!$token = auth()->attempt($validator->validated())){
            return response()->json(['error'=>'Unauthorized access'],401);
        }
        return $this->createNewToken($token);
    }
    public function createNewToken($token){
        return response()->json(['access_token'=>$token,
        'token_type'=>'bearer',
        'expires_in'=>auth()->factory()->getTTL()*60,
        'user'=>auth()->user()
    ]);

    }
    public function profile(){
        return response()->json(auth()->user());
    }
    public function getProducts(){
        $data=products::get();
        return response()->json(['data'=>$data]);
    }
    public function logout(){
        auth()->logout();
        return response()->json([
            'message'=>'User Logout successfully',

        ]);
    }
    public function getSpecificProduct($id){

        $singleData = products::where('_id',$id)->first();
        // dd($singleData);
        return response()->json(['singleData'=>$singleData]);
    }
}
