import PropTypes from 'prop-types';
const Blog = ({blog}) => {

    const {id, title, body, posted_date} = blog;
    return (
        <div className='p-6 border rounded-xl mb-12'>
            <div key={id} className='gap-y-6'>
                <h1 className='font-semibold text-xl md:text-2xl'>{title}</h1>
                <p className='mt-3'>{body}</p>
                <p className='mt-3'><strong>Posted On: </strong><span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-400'>{posted_date}</span></p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;