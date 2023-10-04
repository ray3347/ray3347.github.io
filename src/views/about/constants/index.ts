import { IAboutContents } from "../interfaces"

export const descTypes={
    exp: "Experience",
    skills: "Skills",
    contacts: "Contacts",
}

export const descriptionState: IAboutContents[]=[
    {
        title: descTypes.exp,
        description: "Vitae nunc sed velit dignissim. Sit amet nulla facilisi morbi tempus iaculis. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. At quis risus sed vulputate odio ut enim blandit volutpat"
    },
    {
        title: descTypes.skills,
        description: "Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Eget aliquet nibh praesent tristique magna. Fermentum leo vel orci porta. Quam nulla porttitor massa id neque aliquam vestibulum morbi."
    },
    {
        title: descTypes.contacts,
        description: "Rhoncus dolor purus non enim praesent elementum facilisis. Risus in hendrerit gravida rutrum quisque. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim."
    }
]

export const imagesData: string[]=["bg-homeMe", "bg-homeMe2", "bg-homeMe3"]

