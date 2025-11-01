import { Tracker } from "@/components/dashboard/tracker";

const data = [
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-red-600", tooltip: "Error" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-red-600", tooltip: "Error" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-yellow-600", tooltip: "Warn" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
];

export default function Page() {
  return (
    <section>
      <h1>Status Pages</h1>
      <Tracker data={data} hoverEffect={true} />
    </section>
  );
}
