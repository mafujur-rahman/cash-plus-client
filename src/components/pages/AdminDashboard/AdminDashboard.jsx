import PropTypes from 'prop-types';

const AdminDashboard = ({ user }) => {
    
    return (
        <div>
            <h1>Welcome Admin: {user.name}</h1>
            {/* Add admin-specific content */}
        </div>
    );
};

AdminDashboard.propTypes ={
    user: PropTypes.object
}

export default AdminDashboard;