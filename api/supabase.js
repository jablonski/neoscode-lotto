import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gvljopabhnwkobdzvbfg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2bGpvcGFiaG53a29iZHp2YmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzODMyMTgsImV4cCI6MTk4NDk1OTIxOH0.qrN22746O4uTRv4NLMSguEKJlyjQAsLKM4xtW9pz0yA"
);

export default supabase;
