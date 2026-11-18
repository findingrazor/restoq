import { Injectable } from '@angular/core';
import { ICliente, createICliente } from '../../models/cliente';
import {  addDoc, query, doc, 
  setDoc, getDocs, deleteDoc, DocumentData, docSnapshots, collectionData } from '@angular/fire/firestore'; 
import { Firestore, collection } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private clientes: ICliente[] = [];

    constructor(public firestore: Firestore) { }

    // public getCategorias(): string[] {
    //     return this.categorias;
    // }
    public getAll(): Observable<ICliente[]> { 
      const tCollection = collection(this.firestore, 'cliente'); 
      return collectionData(tCollection, {idField: 'id'}) 
      .pipe( 
        map(clientes => clientes as ICliente[]) 
      );   
    } 
    get(id: string): Observable<ICliente> {   
      const document = doc(this.firestore, 'clientes', id);   
      return docSnapshots(document)   
      .pipe(     
        map(doc => {       
          const id = doc.id;       
          const data = doc.data();       
          return { id, ...data  } as ICliente;      
        })   
      );  
    } 
    public async add(novoCliente: ICliente): Promise<ICliente> {
      const docRef = await addDoc(collection(this.firestore, 'clientes'), {
        nome: novoCliente.nome,
        cpf: novoCliente.cpf,
        email: novoCliente.email,
        telefone: novoCliente.telefone
      });

      const clienteSalvo: ICliente = {
        ...novoCliente,
        id: docRef.id
      };

      console.log('Documento salvo com o ID:', docRef.id);

      return clienteSalvo;
    }
    public getIndex(id: string): number {
        const index = this.clientes.findIndex((obj) => {
            return obj.id === id;
        });
        return index;
    }
    public async update(cliente: ICliente): Promise<void> {
      const document = doc(this.firestore, 'clientes', cliente.id);
      const { id, ...data } = cliente;
      await setDoc(document, data);
    }
    public delete(id: string): number {     
      const index = this.getIndex(id);      
      const document = doc(this.firestore, 'clientes', id);     
      deleteDoc(document);          
      if (index >= 0) {       
        this.clientes.splice(index, 1);       
      }          
      return index;   
    } 
}


