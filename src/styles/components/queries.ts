const BRAEKPOINTS = {
  phone: 600,
  tablet: 900,
  laptop: 1200,
  tabletMin: 550,
  laptopMin: 1100
};

export const QUERIES: Record<string, string> = {
  phoneAndSmaller: `(max-width: ${BRAEKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BRAEKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BRAEKPOINTS.laptop / 16}rem)`,
  tabletOnly: `
      (min-width: ${BRAEKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BRAEKPOINTS.laptopMin - 1) / 16}rem)`
};

export type TypeThemeQueries = typeof QUERIES;
