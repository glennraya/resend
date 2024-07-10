<?php

use App\Events\WebhookReceived;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $users = User::where('id', '!=', Auth::id())->simplePaginate(10);

    return Inertia::render('Dashboard', ['users' => $users]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Respond to Resend webhook event.
Route::post('resend/webhook', function (Request $request) {
    $user = User::where('email', $request->data['to'])->first();

    if ($user) {
        $user->task_checked_at = now();
        $user->save();
    }

    $project_manager = User::where('role', 'Project Manager')->first();

    broadcast(new WebhookReceived($project_manager, $request->toArray()));
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Send the task email.
    Route::post('/send-tasks-email', [TaskController::class, 'sendEmail']);
});

require __DIR__.'/auth.php';
