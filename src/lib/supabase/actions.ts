"use server";

import { createClient } from "./server";

//import { createClient } from "./server";

export interface Internship {
  id: string;
  logo: string; //url/src of logo
  title: string;
  company: string;
  location: string;
  description: string;
  url: string;
  created_at: string;
}

export async function getInternships(): Promise<Internship[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("internships")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching internships:", error);
      throw new Error("Failed to fetch internships");
    }

    return data || [];
  } catch (error) {
    console.error("Error in getInternships:", error);
    throw new Error("Failed to fetch internships");
  }
}
