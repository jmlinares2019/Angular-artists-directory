import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem =>{
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase())
        // los elementos del array (eachItem) cuyo 'name' (en minúsculas) 
        // incluyan el término de búsqueda (pipeModifier, también en minúsculas) 
        )
    });
  }

}
