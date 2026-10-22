import NoticeCard from "../components/NoticeCard";
import { useAccessibility, getAdaptiveStyles } from "intelliaccess-framework";

const notices = [
  { id: 1, type: "urgent", title: "Exam Schedule Released", content: "Check the exam dates on the student portal." },
  { id: 2, type: "info", title: "Holiday Notice", content: "College will remain closed on Monday for a public holiday." },
  { id: 3, type: "reminder", title: "Fee Payment Reminder", content: "Last date for fee payment is the 5th of next month." }
];

function Notices() {
  const { preferences } = useAccessibility();
  const styles = getAdaptiveStyles(preferences);

  return (
    <div className="notices-container" style={styles}>
      <h1>Notices</h1>
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          type={notice.type}
          title={notice.title}
          content={notice.content}
          preferences={preferences}
        />
      ))}
    </div>
  );
}

export default Notices;