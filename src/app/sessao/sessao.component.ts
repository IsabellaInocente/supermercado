import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent {

  Comprar(){
    Swal.fire({
      title: "Voce deja compar esse produto?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adcionado ao carrinho!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adcionar ao carrinho", "", "error");
      }
    });
  }
}
