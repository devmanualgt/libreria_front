import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class MessageService {


  // private token: string | null = null;
  
  constructor() {}


  successAlert(){
    Swal.fire({
      icon: "success",
      title: "Excelente!",
      text: "Realizado correctamente",
      // text: "Usuario Creado Exitosamente",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  errorAlert(text:string){
    Swal.fire({
      icon: "error",
      title: "Oopss...",
      text: `${text}`,
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  deleterAlert(){
    Swal.fire({
      title: "Esta seguro?",
      text: "No sera posible revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Eliminado correctamente.",
          icon: "success"
        });
      }
    });
  }
  
 
}