import ActivityItem from "./ActivityItem";

function ActivityList() {
    return(
        <div className="activity-list-card">
            <h2>Activity List</h2>
            <ActivityItem title="Running" description="30 minutes" />
            <ActivityItem title="Swimming" description="45 minutes" />
            <ActivityItem title="Cycling" description="60 minutes" />
             <ActivityItem title="Yoga" description="60 minutes" />
        </div>
    );
}
export default ActivityList;