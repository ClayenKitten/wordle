import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch(`list.txt`);
    const text = await res.text();
    const word_array = text.split("\n");

    return { list: word_array };
};
