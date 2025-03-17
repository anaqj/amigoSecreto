# Reto: Amigo secreto

A continuación daré algunas explicaciones para entender con mayor profundidad lo que se hizo en el JS del amigo secreto


Primero se crea la lista amigos[] vacia porque allí es donde vamos a ir agregando los participantes.


![Image](https://github.com/user-attachments/assets/3493f774-aa3a-48d3-b68e-9fe83b604883)


En esta función hice el código para que los nombres agregados se guardaran en la lista anteriormente hecha. Si la persona quiere agregar sin poner nada le saldrá un aviso de que tiene que insertar un nombre.

Abajo creo el código con el que los nombres agregados aparezcan en la página y que se ve así: 

![Image](https://github.com/user-attachments/assets/f31c16f9-7ab5-4dae-83de-928c2df4a6c0)

Aquí hay una interacción entre el JS y el HTML.
Estoy creando una lista desde el JS y no es una estática que se hizo en HTML

Finalmente está la función limpiarcaja desde esta misma función, ya la voy a explicar.

![Image](https://github.com/user-attachments/assets/b491e5e1-e102-49f9-9156-61d9ca8e7ea1)

Con esto el nombre que se escribió en la barra desaparecé y queda limpia para escribir el siguiente nombre.

Finalmente se tiene la función para sortear amigos

![Image](https://github.com/user-attachments/assets/c845a739-a592-4f07-a659-624376e3c99c)

Primero nos aseguramos que se muestre un aviso si la persona quiere sortear sin agregar ningun nombre, no lo podrá hacer.

Para sortear se usa math.random
Primero se busca cual es el lenght de la lista y se le resta uno ya que el índice comienza en 0 entonces para que no hayan problemas.
Se saca el amigo secreto usando la fórmula explicada en los cursos.

Esta variable nos saca el número del índice al cual corresponde el amigo secreto, después lo "llamamos" poniendo : amigos[#] para saber el nombre.

Finalmente e muestra un texto con el amigo secreto elegido y se quitan la lista de nombres para que el nombre del elegido aparezca solo.

![Image](https://github.com/user-attachments/assets/4aeae04b-6844-4d3b-b615-f858898b4a18)

Ya podrás jugar amigo secreto!
