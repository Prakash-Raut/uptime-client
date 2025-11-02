"use client";

import { useQuery } from "@tanstack/react-query";

import { EmptyUI } from "@/components/general/empty-ui";
import { ErrorUI } from "@/components/general/error-ui";
import { PendingUI } from "@/components/general/pending-ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMonitors, MonitorData } from "@/services/monitor";
import {
  CircleCheckIcon,
  CircleIcon,
  Settings2Icon,
  SquircleIcon,
} from "lucide-react";
import Link from "next/link";

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

  if (monitors.length === 0)
    return (
      <EmptyUI
        title="No Monitors"
        description="You haven't created any monitors yet. Get started by creating your first monitor."
        action={<Button>Create Monitor</Button>}
      />
    );

  return (
    <div className="flex flex-col gap-2">
      {monitors.map((monitor) => (
        <Link
          key={monitor.id}
          href={`/monitors/${monitor.id}`}
          className="flex items-center justify-between border rounded-lg p-4"
        >
          <div className="flex items-center gap-4">
            <Badge className="bg-white">
              <CircleIcon className="size-4 text-green-500 fill-green-500 animate-pulse duration-1000 infinite" />
            </Badge>
            <div>
              <h3 className="text-lg font-medium">{monitor.url}</h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-green-500">Up</span>
                <time dateTime={monitor.time_added}>{monitor.time_added}</time>
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Settings2Icon size={16} />
          </Button>
        </Link>
      ))}
    </div>
  );
}
