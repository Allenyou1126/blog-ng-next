import md5 from "md5-ts";
import { config } from "./config";

export default function getAvatar(email: string = "test@example.com"): string {
	return `${config.gravatar_mirror}${md5(email)}`;
}
