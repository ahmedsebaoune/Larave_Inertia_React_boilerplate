<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\URL;


class HomeController extends Controller
{
    public function show()
    {
        return Inertia::render('Home', [
            'ahmed' => 'hhhhhh',
        ]);
    }
    public function about()
    {
        return Inertia::render('About');
    }
}