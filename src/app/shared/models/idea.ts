export interface Assembly
{
    id: number;
    title: string;
    concepts: ConceptInAssembly[];
}
export interface ConceptInAssembly{
    id : number;
    order : number;
    concept : Concept;
}
export interface Concept{
    id: number;
    title: string;
    ideas :IdeaInConcept[];
}
export interface IdeaInConcept{
    id : number;
    order : number;
    idea : Idea;
}
export interface Idea{
    id: number;
    creationDate : Date;
    lastUpdateDate : Date;
    format : Format;
    content: string;
    source: string|null;
}
export interface Format{
    key : number,
    name : string
}