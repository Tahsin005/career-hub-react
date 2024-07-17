import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";

const JobCategoryList = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl md:text-4xl">Job Category List</h1>
            <p className="text-center text-sm my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <hr />
            <div>
                <JobCategoryCard></JobCategoryCard>
            </div>
        </div>
    );
};

export default JobCategoryList;