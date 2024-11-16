import type { DateLike } from "@vueuse/core";

export const formatDate = (date: MaybeRefOrGetter<DateLike>): string => {
  return toValue(useDateFormat(date, "MMMM D, YYYY"));
};
