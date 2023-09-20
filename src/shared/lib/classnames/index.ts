type Mods = Record<string, boolean | string>;

type ClassNamesType = (
  cls: string,
  mods?: Mods,
  additional?: string[]
) => string;

const classNames: ClassNamesType = (cls, mods = {}, additional = [""]) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};

export default classNames;
