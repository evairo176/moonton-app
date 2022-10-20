import React, { Fragment } from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
// import Flickity from "flickity";
import Flickity from "react-flickity-component";
import FeatureMovie from "@/Components/FeatureMovie";
import { Head } from "@inertiajs/inertia-react";
import MovieCard from "@/Components/MovieCard";
// import "../../../css/sidebar.css";

function Dashboard() {
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
            <Authenticated>
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
                        {[1, 2, 3, 4].map((e) => {
                            return (
                                <FeatureMovie
                                    key={e}
                                    slug="the-batman-night-fury"
                                    name={`the batman ${e}`}
                                    category="comedy"
                                    thumbnail="https://picsum.photos/id/1/300/300"
                                    rating={e + 1}
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
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
                            return (
                                <MovieCard
                                    key={e}
                                    slug="the-batman-night-fury"
                                    name={`the batman ${e}`}
                                    category="comedy"
                                    thumbnail="https://picsum.photos/id/1/300/300"
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
