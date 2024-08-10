// src/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API Key
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
