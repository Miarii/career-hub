import accountsIcon from '../../assets/icons/accounts.png';
import creativeIcon from '../../assets/icons/creative.png';
import marketingIcon from '../../assets/icons/marketing.png';
import chipIcon from '../../assets/icons/chip.png';

const CategoryList = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 my-24">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Professional Career Categories</h2>
                <p className="mt-4 text-gray-600 sm:text-xl leading-relaxed">
                    Explore diverse career opportunities across our specialized professional sectors
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                        <img src={accountsIcon} alt="Finance and Accounting" className="mx-auto h-16 w-16" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4">Finance & Accounting</h3>
                    <p className="text-gray-600 mt-2 text-sm">300 Open Positions</p>
                </div>

                <div className="flex flex-col rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                        <img src={creativeIcon} alt="Creative Design" className="mx-auto h-16 w-16" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4">Creative Design</h3>
                    <p className="text-gray-600 mt-2 text-sm">100+ Open Positions</p>
                </div>

                <div className="flex flex-col rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                        <img src={marketingIcon} alt="Marketing and Sales" className="mx-auto h-16 w-16" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4">Marketing & Sales</h3>
                    <p className="text-gray-600 mt-2 text-sm">150 Open Positions</p>
                </div>

                <div className="flex flex-col rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                        <img src={chipIcon} alt="Engineering" className="mx-auto h-16 w-16" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4">Engineering</h3>
                    <p className="text-gray-600 mt-2 text-sm">224 Open Positions</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryList;