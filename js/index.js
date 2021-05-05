
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const pokemones = [];  
//Funcion tabla 
const cargarTabla = () =>{
  //1. Obtener una referencia a la tabla
  let tbody = document.querySelector("#tabla-tbody");
  //Eliminar todos los elementos que tenga el tbody
  //antes de recorrer la tabla, limpia la misma.
  tbody.innerHTML = "";
  //2. Recorrer la lista de pokemonos
  for(let i = 0; i < pokemones.length; ++i){
    let p = pokemones[i];
    //3. Por cada pokemon generar una fila (tr)  
    let tr = document.createElement("tr");
    //4. Por cada atributo (nombre, tipo, descripcion, y todo lo demas), voy a generar celdas (td)
    let tdNro = document.createElement("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");
    //defino un elemento icono
    let icono = document.createElement("i");
    if(p.tipo == "fuego"){
    //<i class="fas fa-fire-alt"></i>
    //Agregar clases a un elemento
      icono.classList.add("fas","fa-fire","text-danger","fa-3x");
    }else if(p.tipo == "planta"){
      //<i class="fas fa-seedling"></i>
      icono.classList.add("fas","fa-seedling","text-success","fa-3x");
    }else if(p.tipo == "electrico"){
      //<i class="fas fa-bolt"></i>
      icono.classList.add("fas","fa-bolt","text-warning","fa-3x");
    }else if(p.tipo == "agua"){
      //<i class="fas fa-tint"></i>
      icono.classList.add("fas","fa-tint","text-primary","fa-3x");
    }else if(p.tipo == "volador"){
      //<i class="fas fa-feather-alt"></i>
      icono.classList.add("fas","fa-feather-alt","text-light","fa-3x");
    }else if(p.tipo == "roca"){
      //<i class="fas fa-globe"></i>
      icono.classList.add("fas","fa-globe","text-secondary","fa-3x");
    }else if(p.tipo == "lucha"){
      //<i class="fas fa-hand-rock"></i>
      icono.classList.add("fas","fa-hand-rock","text-secondary","fa-3x");
    }else if(p.tipo == "psiquico"){
      //<i class="fas fa-brain"></i>
      icono.classList.add("fas","fa-brain","text-secondary","fa-3x");
    }else if(p.tipo == "fantasma"){
      //<i class="fas fa-ghost"></i>
      icono.classList.add("fas","fa-ghost","text-dark","fa-3x");
    }else if(p.tipo == "siniestro"){
      //<i class="fas fa-skull"></i>
      icono.classList.add("fas","fa-skull","text-dark","fa-3x");
    }else if(p.tipo == "dragon"){
      //<i class="fas fa-dragon"></i>
      icono.classList.add("fas","fa-dragon","text-danger","fa-3x");
    }else if(p.tipo == "bicho"){
      //<i class="fas fa-bug"></i>
      icono.classList.add("fas","fa-bug","text-success","fa-3x");
    }else if(p.tipo == "acero"){
      //<i class="fas fa-link"></i>
      icono.classList.add("fas","fa-link","text-secondary","fa-3x");
    }else if(p.tipo == "veneno"){
      //<i class="fas fa-skull-crossbones"></i>
      icono.classList.add("fas","fa-skull-crossbones","text-dark","fa-3x");
    }else if(p.tipo == "hada"){
      //<i class="far fa-star"></i>
      icono.classList.add("fas","fa-star","text-light","fa-3x");
    }else if(p.tipo == "hielo"){
      //<i class="fas fa-dice-d20"></i>
      icono.classList.add("fas","fa-dice-d20","text-primary","fa-3x");
    }else if(p.tipo == "tierra"){
      //<i class="fas fa-volleyball-ball"></i>
      icono.classList.add("fas","fa-volleyball-ball","text-secondary","fa-3x");
    }else{
      //<i class="fas fa-bullseye"></i>
      icono.classList.add("fas","fa-bullseye","text-info","fa-3x");
    }

  


    tdTipo.appendChild(icono);
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML = p.descripcion;
    let tdAcciones = document.createElement("td");
    //5. Agregar las celdas al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDesc);
    tr.appendChild(tdAcciones);
    //6. Agregar el tr a la tabla
    tbody.appendChild(tr);
  }
};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    //value es para obtener el valor de los input de texto
    let nombre = document.querySelector("#nombre-txt").value;
    //esto lo saque de la pagina tinymce, es para obtener lo escrito
    let descripcion = tinymce.get("descripcion-txt").getContent(); 
    //checked indica si el radiobutton esta seleccionado
    let legendario = document.querySelector("#legendario-si").checked;   
    // para revisar la evolucion
    let evolucion = document.querySelector("#evolucion-si").checked;
    //El tipo se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;

    //Como crear un objeto
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.evolucion = evolucion;
    pokemon.tipo = tipo;
    //Como guardar en una lista de elementos
    pokemones.push(pokemon); //es practicamente el append de python7
    //creo funcion para crear tabla
    cargarTabla();
    //el primer argumento es el titulo, el segundo es lo que quiero mostrar, y la tercera es el icono con el que quiero mostrar la alerta
    Swal.fire("Exito!","Pokemon registrado", "success");

  });