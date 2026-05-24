// DatePickerField.tsx - نسخه ساده
"use client";

import { Calendar, DateField, DatePicker } from "@heroui/react";

export const DatePickerField = ({
  value,
  onChange,
}: {
  value?: any;
  onChange?: (value: any) => void;
}) => {
  return (
    <DatePicker
      className="w-full"
      dir="rtl"
      onChange={(date) => {
        onChange?.(date?.toString() || "");
      }}
    >
      <DateField.Group
        className="rounded-lg border-border/60 h-10 px-3"
        variant="secondary"
        fullWidth
      >
        <DateField.Input className="text-right w-full">
          {(segment) => (
            <DateField.Segment segment={segment} className="text-sm" />
          )}
        </DateField.Input>
        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator className="text-gray-400" />
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DatePicker.Popover
        dir="rtl"
        className="rounded-lg border border-border/60 p-2"
      >
        <Calendar aria-label="انتخاب تاریخ تولد">
          <Calendar.Header>
            <Calendar.NavButton slot="previous" />
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>
  );
};
