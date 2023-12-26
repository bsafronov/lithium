"use client";

import { Button } from "@/ui/button";
import { Form } from "@/ui/form";
import { FormInput } from "@/ui/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreatePost } from "../domain/create-post/use-create-post";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  published: z.boolean(),
  color: z.string(),
});

type Schema = z.infer<typeof schema>;

export function PostForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      color: "",
      published: true,
    },
  });
  const control = form.control;
  const { mutate } = useCreatePost({ reset: form.reset });

  const onSubmit = (data: Schema) => {
    mutate({
      title: data.title,
      description: data.description,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormInput control={control} name="title" label="Заголовок" />
        <FormInput control={control} name="description" label="Описание" />
        <FormInput
          control={control}
          name="published"
          label="Опубликовано"
          type="checkbox"
        />
        <FormInput control={control} name="color" label="Цвет" type="color" />

        <Button className="mt-8">Создать</Button>
      </form>
    </Form>
  );
}
