import { z } from "zod";
import { api } from "./http";

export const monitorSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.url(),
  time_added: z.string(),
});

const createMonitorSchema = monitorSchema.pick({ url: true });

export type createMonitorData = z.infer<typeof createMonitorSchema>;
export type MonitorData = z.infer<typeof monitorSchema>;

export const getMonitors = async () => await api.get(`/websites`);
export const createMonitor = async (data: createMonitorData) =>
  await api.post(`/websites`, data);
