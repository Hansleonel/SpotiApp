import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // TODO modificamos los arguments que recibira este PIPE
  // TODO en este caso solo recibira el arreglo "images[]" para su respectiva validacion
  transform(images: any[]): string {

    // TODO la condicion indica que si el arreglo images no existe o es un undefined
    // TODO devuelve la direccion de la imagen no encontrada por defect, en este caso
    // TODO noimage.png
    if (!images) {
      return 'assets/img/noimage.png';
    }

    // TODO si el arreglo images tiene imagenes o en este caso direcciones de imagenes por ser String
    // TODO entonces devolver solo la primera imagen
    if (images.length > 0) {
      // TODO el sigueinte rtrn debe de ser exactamente igual al que se encuentra en el componente
      // TODO ademas de tener la estrucutura correcta de la direccion de dicho String que devulve la direccion de la imagen
      // TODO en este caso la estrucutura del Arreglo que nos devulve las imagenes es images[i].URL
      // TODO y como queremos que solo devulva el primer elemento de dicho arreglo entonces sera images[0].url
      return images[0].url;

    } else {
      // TODO si no existe dicha direccion de imagen en el arreglo entonces devolvr la direccion de la noimage
      return 'assets/img/noimage.png';
    }

  }

}
