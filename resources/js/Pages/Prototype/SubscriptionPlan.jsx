import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";

function SubscriptionPlan() {
    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard
                        isPremiun={false}
                        name="Basic"
                        price={290900}
                        durationInMonth={3}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />

                    <SubscriptionCard
                        isPremiun={true}
                        name="Premium"
                        price={899000}
                        durationInMonth={12}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                </div>
            </div>
        </Authenticated>
    );
}

export default SubscriptionPlan;
