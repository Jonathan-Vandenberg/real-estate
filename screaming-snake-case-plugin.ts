import { parse, print } from "graphql";
import { PluginFunction } from "@graphql-codegen/plugin-helpers";

export const plugin: PluginFunction = (
  schema: any,
  documents: any,
  config: any
) => {
  const ast = parse(print(schema));
  const enums = ast.definitions.filter(
    (def) => def.kind === "EnumTypeDefinition"
  ) as Array<any>;
  const newEnums = enums.map((enumDef: any) => {
    const values = enumDef.values.map((value: any) => {
      return {
        ...value,
        name: value.name
          .toUpperCase()
          .replace(/(\_[a-z])/g, (match) => match.toUpperCase())
          .replace(/\_/g, ""),
      };
    });
    return {
      ...enumDef,
      values,
    };
  });
  const modifiedAst = {
    ...ast,
    definitions: [
      ...newEnums,
      ...ast.definitions.filter(
        (def: any) => def.kind !== "EnumTypeDefinition"
      ),
    ],
  };
  return {
    content: `export const schema = ${print(modifiedAst)};`,
  };
};
