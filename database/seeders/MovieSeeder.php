<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => "https://www.youtube.com/watch?v=CvySRRXKgTk",
                'thumbnail' => "https://m.media-amazon.com/images/G/01/AmazonStores/Help/assets/img/gallery-img1.png",
                'rating' => 9.3,
                'is_featured' => true,
            ],
            [
                'name' => 'The GodFather',
                'slug' => 'the-Godfather',
                'category' => 'Drama',
                'video_url' => "https://www.youtube.com/watch?v=xdowXO6rhhY",
                'thumbnail' => "https://m.media-amazon.com/images/G/01/AmazonStores/Help/assets/img/video-tiles-img1.png",
                'rating' => 8.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'The GodFather',
                'slug' => 'the-Godfather',
                'category' => 'Drama',
                'video_url' => "https://www.youtube.com/watch?v=xdowXO6rhhY",
                'thumbnail' => "https://m.media-amazon.com/images/G/01/AmazonStores/Help/assets/img/video-tiles-img1.png",
                'rating' => 8.3,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
