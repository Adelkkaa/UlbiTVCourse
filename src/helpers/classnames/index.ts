type Mods = Record<string, boolean | string>;

const classNames = (
  cls: string,
  mods?: Mods,
  additional?: string[]
): string => {
  if (cls && mods && additional) {
    return [
      cls,
      ...additional,
      ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
    ].join(" ");
  } else {
    return [
      cls,
      ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
    ].join(" ");
  }
};

export default classNames;
