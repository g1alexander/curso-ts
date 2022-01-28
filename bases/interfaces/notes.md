# interfaces

Una interface en typescript es como una class, pero la diferencia radicar en que la class implmenta las propiedades y metodos que esta tenga, en cambio las interface no

por eso se dice que las interface son clases "tontas" porque estas no sirven para crear instancias

### basicas

la diferencia entre una interface y un type es que las interface son expandible y los type no (lectura en recursos de notion)

### complejas

cuando necesitamos tipar un objecto por lo general este puede tener ciertos niveles (objectos dentro de objectos) y para resolver este lo que hacemos es tener interfaces para cada nivel

- interface padre con una o mas interfaces hijas
- la interface "padre" simpre va al comienzo y luego las demas

### metodos en la interfaz

### interfaces en las clases

algo super util e importante que nos permiten las interfaces es que con estas podemos obligar a las clases a que implementen nuestros tipos de datos de las interfaces a traves de la palabra reservada **implements**

NOTA: podemos hacer que implemeten una o mas interfaces

### interfaces para las funciones

---

### cuando implementar un type o interface (nota de fernando)

implementar una interfaces cuando no se si esta se va a expandir con el tiempo

implementar type cuando se que la accion que quiero hacer no va a variar

- se cual sea lo que implementes va a darar lo mismo, las interfaces y types no se tranpilan a codigo js
