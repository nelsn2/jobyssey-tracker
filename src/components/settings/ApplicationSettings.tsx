import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  jobSearchStatus: z.enum(["actively", "passively", "not"]),
  desiredSalary: z.string().min(1, "Please enter your desired salary"),
  jobLocation: z.string().min(1, "Please enter your preferred job location"),
});

export function ApplicationSettings() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobSearchStatus: "actively",
      desiredSalary: "$80,000",
      jobLocation: "Remote",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Settings updated",
      description: "Your application preferences have been saved.",
    });
    console.log(values);
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Application Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize your job search and application settings.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="jobSearchStatus"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Job Search Status</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="actively" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Actively looking
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="passively" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Open to opportunities
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="not" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Not interested
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desiredSalary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Salary</FormLabel>
                <FormControl>
                  <Input placeholder="Enter desired salary" {...field} />
                </FormControl>
                <FormDescription>
                  This helps us find jobs that match your salary expectations.
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter preferred job location"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your preferred work location or "Remote" for remote work.
                </FormDescription>
              </FormItem>
            )}
          />

          <Button type="submit">Save Preferences</Button>
        </form>
      </Form>
    </div>
  );
}