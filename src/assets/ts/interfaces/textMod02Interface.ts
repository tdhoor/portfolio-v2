interface ListItem {
    text: string,
    url: string
}

interface Box {
    title: string,
    list: Array<ListItem>
}

export default interface TextMod02Interface {
    title: string,
    boxes: Array<Box>
}