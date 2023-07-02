import { type UseFetchOptions } from 'nuxt/app';

const url = 'https://www.boredapi.com/api/activity?type=relaxation';

interface BoredApiResponse {
  activity: string;
}

export const useActivity = async (
  options?: UseFetchOptions<BoredApiResponse>,
) => {
  const result = await useFetch<BoredApiResponse>(url, options);

  const activity = computed(
    () => result.data.value?.activity?.toLocaleLowerCase() ?? '',
  );

  return { ...result, activity };
};
