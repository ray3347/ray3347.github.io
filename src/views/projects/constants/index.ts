import { IContentData, IProjectTypes } from "../interfaces";

export const projectTypes: IProjectTypes={
    software: "Software",
    design: "Design",
    others: "Others",
}

export const contentData: IContentData[]=[
    {
        title: "WorkHub",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Ipsum dolor sit amet consectetur adipiscing elit ut. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.",
        url: "https://github.com/ray3347/workhub.git",
        image: "bg-homeMe"
    },
    {
        title: "BudJo",
        description: " Sem viverra aliquet eget sit amet tellus cras. Arcu felis bibendum ut tristique et. Nisl purus in mollis nunc. Felis imperdiet proin fermentum leo vel. Pharetra convallis posuere morbi leo urna molestie at elementum. Mauris pharetra et ultrices neque. Nibh tellus molestie nunc non blandit massa.",
        url: "https://www.figma.com/proto/TppZaCoh8bzG66kBw38LcP/BudJo?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down",
        image: "bg-homeMe"
    },
]