<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {

        $featureMovies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();

        // dd($featureMovies);
        return inertia('User/Dashboard/Index',[
            'featureMovies' => $featureMovies,
            'movies' => $movies
        ]);
    }
}
