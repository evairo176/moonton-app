<?php

namespace Database\Seeders;

use App\Models\SubcriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subcriptionPlan = [
            [
            'name' => 'Basic',
            'price' => 200000,
            'active_period_in_months' => 3,
            'features' => json_encode(['feature1','feature2']),
            ],
            [
            'name' => 'Premium',
            'price' => 800000,
            'active_period_in_months' => 6,
            'features' => json_encode(['feature1','feature2','feature3','feature4']),
            ],
        ];

        SubcriptionPlan::insert($subcriptionPlan);
    }
}
