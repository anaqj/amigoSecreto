# Reto: Amigo secreto

A continuación daré algunas explicaciones para entender con mayor profundidad lo que se hizo en el JS del amigo secreto


Primero se crea la lista amigos[] vacia porque allí es donde vamos a ir agregando los participantes.

**imagen 

En esta función hice el código para que los nombres agregados se guardaran en la lista anteriormente hecha. Si la persona quiere agregar sin poner nada le saldrá un aviso de que tiene que insertar un nombre.

Abajo creo el código con el que los nombres agregados aparezcan en la página y que se ve así: 

**imagen

Aquí hay una interacción entre el JS y el HTML.
Estoy creando una lista desde el JS y no es una estática que se hizo en HTML

Finalmente está la función limpiarcaja desde esta misma función, ya la voy a explicar.

**imagen 

Con esto el nombre que se escribió en la barra desaparecé y queda limpia para escribir el siguiente nombre.

Finalmente se tiene la función para sortear amigos

**imagen

Primero nos aseguramos que se muestre un aviso si la persona quiere sortear sin agregar ningun nombre, no lo podrá hacer.

Para sortear se usa math.random
Primero se busca cual es el lenght de la lista y se le resta uno ya que el índice comienza en 0 entonces para que no hayan problemas.
Se saca el amigo secreto usando la fórmula explicada en los cursos.

Esta variable nos saca el número del índice al cual corresponde el amigo secreto, después lo "llamamos" poniendo : amigos[#] para saber el nombre.

Finalmente e muestra un texto con el amigo secreto elegido y se quitan la lista de nombres para que el nombre del elegido aparezca solo.

**imagen 

Ya podrás jugar amigo secreto!
