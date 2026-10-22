import { getInteractionStyles, getStatusStyles } from "intelliaccess-framework";

function NoticeCard({ title, content, type, preferences }) {
  const interaction = getInteractionStyles(preferences);
  const status = getStatusStyles(preferences, type);

  return (
    <div className="notice-card" style={status.cardStyle}>
      {status.showBadge && (
        <span className="status-badge" style={{ borderColor: status.badge.color }}>
          <span aria-hidden="true">{status.badge.icon}</span> {status.badge.label}
        </span>
      )}
      <h3>{title}</h3>
      <p>{content}</p>
      <button style={interaction.button} className="read-more-btn">
        Read More
      </button>
    </div>
  );
}

export default NoticeCard;