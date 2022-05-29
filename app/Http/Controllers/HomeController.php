<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function show(Event $event)
    {
        return Inertia::render('Home', [
            'ahmed' => 'hhhhhh'
            
        ]);
    }
}