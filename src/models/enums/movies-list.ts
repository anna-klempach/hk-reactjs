export enum SortingFieldsEnum {
    genre = 'Genre',
    rating = 'Rating',
    releaseDate = 'Release Date'
}

export interface Sorter {
    key: string,
    name: SortingFieldsEnum
}

export interface SorterList {
    [key: string]: Sorter
}

export enum FilterFieldEnum {
    all = 'All',
    documentary = 'Documentary',
    comedy = 'Comedy',
    horror = 'Horror',
    crime = 'Crime'
}

export interface Filter {
    key: string,
    name: FilterFieldEnum
}

export interface FilterList {
    [key:string]: Filter
}

export enum SortingDirectionEnum {
    asc = 'asc',
    desc = 'desc'
}

export const FILTER_FIELDS: FilterList = {
    [FilterFieldEnum.all]: {
        key: 'filterKey0',
        name: FilterFieldEnum.all
    },
    [FilterFieldEnum.documentary]: {
        key: 'filterKey1',
        name: FilterFieldEnum.documentary
    },
    [FilterFieldEnum.comedy]: {
        key: 'filterKey2',
        name: FilterFieldEnum.comedy
    },
    [FilterFieldEnum.horror]: {
        key: 'filterKey3',
        name: FilterFieldEnum.horror
    },
    [FilterFieldEnum.crime]: {
        key: 'filterKey4',
        name: FilterFieldEnum.crime
    }
};

export const SORTING_FIELDS: SorterList = {
    [SortingFieldsEnum.genre]: {
        key: 'sortingField0',
        name: SortingFieldsEnum.genre
    },
    [SortingFieldsEnum.rating]: {
        key: 'sortingField1',
        name: SortingFieldsEnum.rating
    },
    [SortingFieldsEnum.releaseDate]: {
        key: 'sortingField2',
        name: SortingFieldsEnum.releaseDate
    }
}
