import ActivityItem from "./ActivityItem";

function ActivityList() {
    return(
        <div className="activity-list-card">
            <h2>Activity List</h2>
            <ActivityItem />
            <ActivityItem />
            <ActivityItem />
        </div>
    );
}
export default ActivityList;