(:BUCLE FOR:)
(:Vincula una o más variables a expresiones escritas en XPath:)
(:Crea un flujo de tuplas en el que cada tupla está vinculada a una de las variables:)

for $x in (1 to 5)
return <numero>{$x}</numero>

for $x at $y in doc("coleccion.xml")/coleccion/cd
return <cd>{$x}, {$y} </cd>

(:LET:)
(:Vincula una variable al resultado completao de una expresión añadiendo esos vinculos a las tuplas generadas por una cláusula for:)

let $s:=7
let $z:=10

return 10+$s+$z

(:WHERE:)
(:Filtrar las tuplas eliminando todos los valores que no cumplan las condiciones dadas:)

for $x in doc("coleccion.xml")/coleccion/cd
where $x/precio < 10

(:ORDER BY:)
(:Ordena las tuplas según un criterio dado:)

order by $x/precio asceding

(:RETURN:)
(:Construye el resultado de la consulta para una tupla dada:)

return <cd>data({$x/titulo})</cd>

