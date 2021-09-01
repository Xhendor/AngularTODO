import { Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
      transition("void=> *",[style({transform:"translateX(300px)"}),
        animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})

        ]))]),


      transition("*=>void",[style({transform:"translateX(0px)"}),
        animate(100,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})

        ]))])

    ])

  ]

})
export class AppComponent {
  title = 'TestNGAng';
  titulo3='Prueba';
  todo='';
  todoArray=[];


  addTodo( value: string ) {
    if(value!=""){
    // @ts-ignore
    this.todoArray.push(value)
    }else{
      alert("Campo requerido***")
    }
    //Salida a consola
   // console.log(this.todoArray)
  }

  deleteItem(todo: any){
    for(let i=0;i<=this.todoArray.length;i++){
      if(todo==this.todoArray[i]){
        this.todoArray.splice(i,1);
      }
    }
  }
  todoSubmit(form:NgForm){
    if(form.value!==""){
      // @ts-ignore
      this.todoArray.push(form.value)
      form.resetForm("");
      //console.log(this.todos)
    }else{
      alert('Field required **')
    }
  }


}
