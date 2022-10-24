import React, { Fragment } from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
// import Flickity from "flickity";
import Flickity from "react-flickity-component";
import FeatureMovie from "@/Components/FeatureMovie";
import { Head } from "@inertiajs/inertia-react";
import MovieCard from "@/Components/MovieCard";
// import "../../../css/sidebar.css";

function Dashboard({ auth, featureMovies, movies }) {
    var flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Fragment>
            <Authenticated auth={auth}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
                </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {featureMovies.map((value) => {
                            return (
                                <FeatureMovie
                                    key={value.id}
                                    slug={value.slug}
                                    name={`${value.name}`}
                                    category={value.category}
                                    thumbnail={value.thumbnail}
                                    rating={value.rating}
                                />
                            );
                        })}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {movies.map((value) => {
                            return (
                                <MovieCard
                                    key={value.id}
                                    slug={value.slug}
                                    name={`${value.name}`}
                                    category={value.category}
                                    thumbnail={value.thumbnail}
                                />
                            );
                        })}
                    </Flickity>
                </div>
            </Authenticated>
        </Fragment>
    );
}

export default Dashboard;
