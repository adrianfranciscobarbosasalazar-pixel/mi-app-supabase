import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zuezukiqyloeovytftki.supabase.co'
const supabaseKey = 'sb_publishable_p19qNxKv_wrqjn0Qn7rltg_M166oqyG'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos:', data)
  }
}

obtenerEstudiantes()



async function insertarEstudiante(nombre, carrera) {
  const { data, error } = await supabase
    .from('estudiantes')
    .insert([{ nombre, carrera }])

  if (error) {
    console.log('Error insert:', error)
  } else {
    console.log('Insertado:', data)
  }
}
