import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const _word_list = fetch(`word_list.txt`)
        .then(a => a.text())
        .then(a => a.split("\n"));
    const _answer_list = fetch(`answer_list.txt`)
        .then(a => a.text())
        .then(a => a.split("\n"));
    const [word_list, answer_list] = await Promise.all([_word_list, _answer_list]);

    return { word_list, answer_list };
};
