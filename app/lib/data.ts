import { sections, species, speciesImageSet, mapInformations } from '@/app/lib/placeholder-data';
import { unstable_noStore as noStore } from 'next/cache';
import { Coordinate, Section } from '@/app/lib/definitions';

export async function getSectionsInformation() {
    noStore();
    // const result = sections.map((section:Section)=>{
    //     return section
    // })
    return sections;
}

export async function getMapInformation() {
    

    return {
        sections,
        species
    }
}