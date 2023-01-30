export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    adress: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image
}