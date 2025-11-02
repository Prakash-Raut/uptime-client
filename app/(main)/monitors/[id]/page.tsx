"use client";

import { Tracker } from "@/components/dashboard/tracker";
import { ErrorUI } from "@/components/general/error-ui";
import { PendingUI } from "@/components/general/pending-ui";
import { getMonitor, MonitorData } from "@/services/monitor";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

interface Tick {
  id: string;
  status: string;
  response_time_ms: number;
  created_at: string;
  region_id: string;
}

export default function MonitorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const {
    data: monitor,
    isPending,
    isError,
    error,
  } = useQuery<MonitorData>({
    queryKey: ["monitor", id],
    queryFn: async () => {
      const { data } = await getMonitor(id);
      return data;
    },
    // refetchInterval: 1000,
  });

  if (isPending) return <PendingUI />;
  if (isError) return <ErrorUI title="Error" description={error?.message} />;

  return (
    <div>
      <h1 className="text-2xl font-bold">{monitor?.url}</h1>
      {/* @ts-ignore */}
      <Tracker
        data={monitor?.ticks.map((tick: Tick) => ({
          color: tick.status === "up" ? "bg-green-500" : "bg-red-500",
          tooltip: tick.status,
          // hoverEffect: true,
          defaultBackgroundColor:
            tick.status === "up" ? "bg-green-500" : "bg-red-500",
        }))}
      />
    </div>
  );
}
