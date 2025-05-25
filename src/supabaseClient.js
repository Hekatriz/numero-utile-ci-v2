import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://TON-PROJET.supabase.co'; // 🔁 remplace ceci
const supabaseKey = 'eyJhbGciOi...'; // 🔁 remplace par ta clé anonyme publique

export const supabase = createClient(supabaseUrl, supabaseKey);