"use client";

import { MonitorDrawer } from "@/components/dashboard/monitor-drawer";
import { MonitorList } from "@/components/dashboard/monitor-list";
import { EmptyUI } from "@/components/general/empty-ui";
import { ErrorUI } from "@/components/general/error-ui";
import { PendingUI } from "@/components/general/pending-ui";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Monitors</h1>
          <p className="text-muted-foreground">
            Monitor your websites and track their uptime
          </p>
        </div>
        <MonitorDrawer />
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
