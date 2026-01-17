function ActivityItem({title, description}) {
  return (
    <div className="activity-item-card">
      <h3 className="activity-title">{title} </h3>
      <p className="activity-desc">
       {description}
      </p>
    </div>
  );
}

export default ActivityItem;
