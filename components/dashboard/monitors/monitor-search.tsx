"use client";

import { SearchIcon } from "lucide-react";

// import { zodResolver } from "@hookform/resolvers/zod";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const MonitorFilterSchema = z.object({
  q: z.string().optional(),
});

const CURRENT_PAGE = 1;
const PER_PAGE = 10;

export function MonitorSearch() {
  const [queryParam, setQueryParam] = useState({
    currentPage: CURRENT_PAGE,
    perPage: PER_PAGE,
  });

  const form = useForm<z.infer<typeof MonitorFilterSchema>>({
    // resolver: zodResolver(MonitorFilterSchema),
    defaultValues: {
      q: "",
    },
  });

  const handleSearch = useCallback(
    debounce((value) => {
      setQueryParam((prev) => ({
        ...prev,
        q: value,
      }));
    }, 1000),
    [],
  );

  return (
    <Form {...form}>
      <form className="flex items-center gap-4">
        <FormField
          control={form.control}
          name="q"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pr-2">
                  <Input
                    type="text"
                    placeholder="Search"
                    className="border-0 focus-visible:ring-0 shadow-none"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleSearch(e.target.value);
                    }}
                  />
                  <SearchIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
