export interface IProjectTypes{
    software: string;
    design: string;
    others: string;
}

export interface IContentData{
    title: string;
    description: string;
    url:string;
}

export interface IContentProps{
    data: IContentData[];
    activeIndex? : any;
}

export interface IContentImages{
    src: string[];
    activeIndex: number;
}