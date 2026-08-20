import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  throw new Error(
    'VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY doivent être définies dans votre fichier .env'
  )
}

// La clé "anon" est publique par conception (elle finit dans le bundle JS).
// Ce n'est pas un problème : elle ne donne accès à rien par elle-même,
// tout est verrouillé côté serveur par les policies RLS et les fonctions
// définies dans supabase-schema.sql.
//
// ⚠️ Si votre projet a déjà un fichier src/lib/supabaseClient.js (par ex.
// celui du projet SAV), réutilisez-le plutôt que d'en dupliquer un second
// — un seul client Supabase par app suffit.
export const supabase = createClient(url, anonKey)