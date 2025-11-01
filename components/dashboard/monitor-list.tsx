"use client";

import { useQuery } from "@tanstack/react-query";

import { EmptyUI } from "@/components/general/empty-ui";
import { ErrorUI } from "@/components/general/error-ui";
import { PendingUI } from "@/components/general/pending-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMonitors, MonitorData } from "@/services/monitor";

export function MonitorList() {
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
    <div className="flex flex-col gap-2">
      {monitors.length === 0 ? (
        <EmptyUI
          title="No Monitors"
          description="You haven't created any monitors yet. Get started by creating your first monitor."
          action={<Button>Create Monitor</Button>}
        />
      ) : (
        monitors.map((monitor) => (
          <Card key={monitor.id} className="w-md">
            <CardHeader>
              <CardTitle>{monitor.url}</CardTitle>
            </CardHeader>
            <CardContent>
              <time dateTime={monitor.time_added}>{monitor.time_added}</time>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
