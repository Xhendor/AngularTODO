import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
