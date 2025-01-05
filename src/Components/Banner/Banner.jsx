  import BannerImage from "../../assets/P3OLGJ1 copy 1.png"
  
const Banner = () => {
    return (
        <div className="hero min-h-screen p-6">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                <img
                    src={BannerImage}
                    alt="Professional career illustration"
                    className="max-w-md rounded-lg shadow-2xl hover:shadow-3xl transition-shadow" />
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold leading-tight">
                        <span className="block">One Step</span>
                        <span className="block">Closer To Your</span>
                        <span className="block text-[#7E90FE]">Dream Career</span>
                    </h1>
                    <p className="py-6 text-gray-600 leading-relaxed">
                        Discover exceptional career opportunities with comprehensive insights and detailed information. Take control of your professional journey and efficiently manage your applications from initial submission to final placement.
                    </p>
                    <button className="btn btn-primary hover:scale-105 transition-transform">
                        Explore Opportunities
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;