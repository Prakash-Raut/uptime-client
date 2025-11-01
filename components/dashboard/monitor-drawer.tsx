"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { createMonitor, createMonitorData } from "@/services/monitor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function MonitorDrawer() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus size={16} />
            Add Monitor
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-muted sm:max-w-[768px]">
          <DialogHeader>
            <DialogTitle>Create New Monitor</DialogTitle>
            <DialogDescription>
              Provide the Monitor basic information. All fields marked with an
              asterisk (*) are required.
            </DialogDescription>
          </DialogHeader>
          <MonitorForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Plus size={16} />
          Add Monitor
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          Create New Monitor
          <DrawerDescription>
            Provide the Monitor basic information. All fields marked with an
            asterisk (*) are required.
          </DrawerDescription>
        </DrawerHeader>
        <MonitorForm className="px-4" setOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type MonitorFormProps = {
  className?: string;
  setOpen: (open: boolean) => void;
};

function MonitorForm({ className, setOpen }: MonitorFormProps) {
  const form = useForm<createMonitorData>({
    // resolver: zodResolver(createMonitorSchema),
    defaultValues: {
      url: "https://",
    },
  });

  const queryClient = useQueryClient();

  const { mutate: createMonitorMutate } = useMutation({
    mutationKey: ["createMonitor"],
    mutationFn: createMonitor,
    onSuccess: () => {
      form.reset();
      toast.success("Monitor created successfully");
      queryClient.invalidateQueries({ queryKey: ["monitors"] });
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(values: createMonitorData) {
    createMonitorMutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
      >
        <Card>
          <CardHeader>
            <CardTitle className="mb-4">Basic Info</CardTitle>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <sup className="text-primary">*</sup>
                        URL to Monitor
                      </FormLabel>
                      <FormControl>
                        <Input type="url" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <div className="flex justify-end">
          <Button type="submit">Create Monitor</Button>
        </div>
      </form>
    </Form>
  );
}
