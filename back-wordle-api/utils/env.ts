import { envsafe, str } from "envsafe";

export const env = envsafe({ access_key: str(), secret_access_key: str() });
