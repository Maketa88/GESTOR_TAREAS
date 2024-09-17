import React from 'react'
import './Header.css'

export const Header = ({children}) => <header className='header-app'>{children}</header>

/* Este componente Header es una forma sencilla de encapsular y estilizar el encabezado de tu aplicación de gestor de tareas.
 Al utilizar children, permite una gran flexibilidad para incluir cualquier 
contenido dentro del encabezado. */