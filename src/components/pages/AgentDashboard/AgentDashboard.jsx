import PropTypes from 'prop-types';

const AgentDashboard = ({ user }) => {
    return (
        <div>
            <h1>Welcome Agent: {user.name}</h1>
            {/* Add agent-specific content */}
        </div>
    );
};

AgentDashboard.propTypes ={
    user: PropTypes.object
}

export default AgentDashboard;