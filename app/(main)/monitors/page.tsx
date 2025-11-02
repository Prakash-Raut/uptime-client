"use client";

import { MonitorDrawer } from "@/components/dashboard/monitors/monitor-drawer";
import { MonitorList } from "@/components/dashboard/monitors/monitor-list";
import { MonitorSearch } from "@/components/dashboard/monitors/monitor-search";
import { EmptyUI } from "@/components/general/empty-ui";
import { ErrorUI } from "@/components/general/error-ui";
import { PendingUI } from "@/components/general/pending-ui";
import { getMonitors, MonitorData } from "@/services/monitor";
import { useQuery } from "@tanstack/react-query";

export default function MonitorsPage() {
  const {
    data: monitors,
    isPending,
    isError,
    error,
  } = useQuery<MonitorData[]>({
    queryKey: ["monitors"],
    queryFn: async () => {
      const { data } = await getMonitors();
      return data;
    },
  });

  if (isPending) return <PendingUI />;
  if (isError) return <ErrorUI title="Error" description={error?.message} />;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between ">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Monitors</h1>
        </div>
        <div className="flex items-center gap-2">
          <MonitorSearch />
          <MonitorDrawer />
        </div>
      </div>

      {monitors && monitors.length === 0 ? (
        <EmptyUI
          title="No Monitors"
          description="You haven't created any monitors yet. Get started by creating your first monitor."
          action={<MonitorDrawer />}
        />
      ) : (
        <MonitorList />
      )}
    </div>
  );
}
