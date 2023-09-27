export interface IProjectTypes{
    software: string;
    design: string;
    others: string;
}

export interface IContentData{
    title: string;
    description: string;
    url:string;
    image: string;
}

export interface IContentProps{
    data: IContentData[];
    activeIndex? : any;
}