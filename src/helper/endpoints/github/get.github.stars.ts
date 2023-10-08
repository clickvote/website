import {formatStarCount} from "@/lib/utils";

import {extraUrls} from "@/constant/config";

export const getGithubStars = async () => {
    const data = await (await fetch(extraUrls.apiGithub)).json();
    return formatStarCount(data.stargazers_count);
}