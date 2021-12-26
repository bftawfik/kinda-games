let percentToHex: Function = (p: number): string =>
  Math.round(p * 255).toString(16);

const getQueryParams =
  (queryParams: URLSearchParams): Function =>
  (singleParam: string): string =>
    queryParams.get(singleParam) || "";

const extractParams = (
  queryParams: URLSearchParams,
  params: string[]
): string[] => {
  const getQueryParamsAsString = getQueryParams(queryParams);
  return params?.length === 0
    ? []
    : params.map((singleParam) => getQueryParamsAsString(singleParam));
};

export { percentToHex, extractParams };
