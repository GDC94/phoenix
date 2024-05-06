import * as z from "zod";

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development")
});

const environment = () => environmentSchema.parse(process.env);

function getPublicKeys() {
  return {
    publicKeys: environment()
  };
}

export {environment, getPublicKeys};
