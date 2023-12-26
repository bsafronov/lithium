"use client";

import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import { Checkbox } from "./checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { cn } from "@/libs/utils";
import { HTMLInputTypeAttribute } from "react";

type InputType = HTMLInputTypeAttribute | "textarea";

type Props<T extends FieldValues, K extends Path<T>> = {
  control: UseFormReturn<T>["control"];
  name: K;
  label?: string;
  description?: string;
  type?: HTMLInputTypeAttribute | InputType;
};

type InputByTypeProps<T extends FieldValues, K extends Path<T>> = {
  field: ControllerRenderProps<T, K>;
  type: InputType;
};

const InputByType = <T extends FieldValues, K extends Path<T>>({
  field,
  type,
}: InputByTypeProps<T, K>) => {
  const inputByType: Partial<Record<InputType, React.ReactNode>> = {
    checkbox: (
      <Checkbox
        {...field}
        checked={field.value}
        onCheckedChange={field.onChange}
        className=""
      />
    ),
    textarea: <Textarea {...field} />,
  };

  return (
    <FormControl>
      {inputByType[type] ?? <Input {...field} type={type} />}
    </FormControl>
  );
};

export const FormInput = <T extends FieldValues, K extends Path<T>>({
  control,
  name,
  label,
  type = "text",
  description,
}: Props<T, K>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn({
            "flex items-center gap-2": type === "checkbox",
          })}
        >
          {label && <FormLabel>{label}</FormLabel>}
          <InputByType type={type} field={field} />
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
