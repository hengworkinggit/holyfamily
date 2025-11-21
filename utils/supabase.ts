import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ejnvwrxkyijsuyochcqo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqbnZ3cnhreWlqc3V5b2NoY3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NjU0NjYsImV4cCI6MjA3OTI0MTQ2Nn0.Hnj9vWsAw40VS8b3c_6c9Ibq7ISkSod9JnU6sWni-So";

export const supabase = createClient(supabaseUrl, supabaseKey);
