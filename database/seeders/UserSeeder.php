<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          // Insert multiple users
          User::insert([
            [
                'username' => 'admin_user',
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => Hash::make('password123'),
                'profile_pic' => 'default.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'john_doe',
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'password' => Hash::make('password123'),
                'profile_pic' => 'default.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}


