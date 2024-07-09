<?php

namespace App\Http\Controllers;

use App\Mail\TaskSent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TaskController extends Controller
{
    /**
     * Send email containing dev tasks.
     */
    public function sendEmail(Request $request)
    {
        Mail::to($request->email)->queue(new TaskSent());
    }
}
