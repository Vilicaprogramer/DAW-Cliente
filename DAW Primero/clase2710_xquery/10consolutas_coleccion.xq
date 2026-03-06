(:1. Mostrar todos los títulos de los CDs:)

(:for $x in doc("coleccion.xml")//cd
return $x/titulo:)

(:2. Mostrar todos los artistas:)

(:for $x in doc("coleccion.xml")//cd
return $x/artista:)

(:3. Mostrar título y artistas juntos:)
(:for $x in doc("coleccion.xml")//cd
return concat($x/titulo," - ",$x/artista):)

(:4. Mostrar solo el título del primer CD:)
(:doc("coleccion.xml")//cd[1]/titulo:)

(:5. Mostrar CDs cuyo artista sea "Bob dylan":)
(:for $cd in doc("coleccion.xml")//cd
where $cd/artista = "Bob Dylan"
return $cd/titulo:)

(:6. Mostrar todos los títulos ordenados alfabéticamente:)

(:for $cd in doc("coleccion.xml")//cd
order by $cd/titulo
return $cd/titulo:)

(:7. Crear una nueva estructura XML con título y artista:)
(:<catalogo>
{
  for $cd in doc("coleccion.xml")//cd
  return
    <disco>
      <nombre>{data($cd/titulo)}</nombre>
      <cantante>{data($cd/artista)}</cantante>
    </disco>
}
</catalogo>:)

(:8. Mostrar cuantos CDs hay en total:)
(:count(doc("coleccion.xml")//cd):)

(:9. Mostrar el título del último CD:)
(:let $cds := doc("coleccion.xml")//cd
return $cds[last()]/titulo:)

(:10. Mostrar los títulos que contengan la palabra heart:)

(:for $cd in doc("coleccion.xml")//cd
where contains(lower-case($cd/titulo), "heart")
return $cd/titulo:)



