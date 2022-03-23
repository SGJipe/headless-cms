import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tidsaqnjlctcdbwimexw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZHNhcW5qbGN0Y2Rid2ltZXh3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODAyOTY4MiwiZXhwIjoxOTYzNjA1NjgyfQ.1eK5Wein_UoOxW2XrIemvdkHm9s17vsFPjI-35GINr8";

export const supabase = createClient(supabaseUrl, supabaseKey);