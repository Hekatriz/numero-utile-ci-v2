import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tglwkxymyszhciwwovgq.supabase.co'; // 🔁 remplace ceci
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbHdreHlteXN6aGNpd3dvdmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMzI1NzMsImV4cCI6MjA2MzcwODU3M30.DE9OCSrlgZeMQ0tGOnDedhFTrxwThVuO01XHgrGJYds'; // 🔁 remplace par ta clé anonyme publique

export const supabase = createClient(supabaseUrl, supabaseKey);
