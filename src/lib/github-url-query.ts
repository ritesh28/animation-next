export const GITHUB_URL_QUERY = 'githubUrl';

export const getComponentPageWithGithubLink = (relativePath: string) => {
  if (!relativePath.startsWith('/component-')) {
    // don't process it
    return relativePath;
  }
  const githubLink = `${process.env.NEXT_PUBLIC_GITHUB_CODE_LINK}/blob/main/src/pages${relativePath}.tsx`;
  return `${relativePath}?${GITHUB_URL_QUERY}=${githubLink}`;
};
