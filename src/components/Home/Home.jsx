import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;