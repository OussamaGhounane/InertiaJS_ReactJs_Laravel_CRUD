<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use COM;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarsController extends Controller
{

    public function index()
    {
        $cars  = Cars::all();
        return Inertia::render('Cars/Index', ['cars' => $cars]);
    }

    /* 
    ['cars' => $cars] = compact (dans laravel)
    */


    public function create()
    {
        return Inertia::render('Cars/Create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'brand' => 'required|max:50',
            'model' => 'required|max:100',
            'color' => 'required|max:10'
        ]);
        $car = new Cars();
        $car->brand = $request->brand;
        $car->model = $request->model;
        $car->color = $request->color;
        $car->save();
        return redirect('cars');
    }


    public function show(Cars $cars)
    {
    }


    public function edit(string $id)
    {
        $cars = Cars::find($id);
        return Inertia::render('Cars/Edit', ['cars' => $cars]);
    }


    public function update(Request $request, $id)
    {

        $request->validate([
            'brand' => 'required|max:50',
            'model' => 'required|max:100',
            'color' => 'required|max:10'
        ]);

        $car = Cars::find($id);
        $car->brand = $request->brand;
        $car->model = $request->model;
        $car->color = $request->color;
        $car->save();
        return redirect('cars');
    }


    public function destroy($id)
    {
        Cars::destroy($id);
        return redirect('cars');
    }
}
