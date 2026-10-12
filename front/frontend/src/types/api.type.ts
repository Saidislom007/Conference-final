type ConferenceWordparts = {
    id: string;
    maqola_soni: number;
    bet_soni: number;
    yaratilgan_sana: string;
    word_fayl: string;
    content: string;
    conference_id: string;
}
type ConferenceShoba = {
    id: string;
    maqolalar :[];
    about: string;
    title: string;
    slug: string;
    img: string;
    ish_active: boolean;
    yartilgan_sana: string;
    conference_id: string;

}
export type Conference = {
    id: string;
    title: string;
    slug: string;
    content: string;
    img: string;
    type: string;
    word_parts: ConferenceWordparts[];
    shobalar: ConferenceShoba[];
};

