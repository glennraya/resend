<?php

namespace App\Http\Controllers;

use App\Mail\TaskSent;
use Illuminate\Support\Facades\Mail;

class TaskController extends Controller
{
    /**
     * Send email containing dev tasks.
     */
    public function sendEmail() {
        Mail::to('jsonfakery@gmail.com')->queue(new TaskSent());
    }
}
