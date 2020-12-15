interface Icon {
    url: string,
    src: string,
    alt: string
}

export default interface SocialMediaInterface {
    title: string,
    text: string,
    mail: string,
    icons: Array<Icon>
}