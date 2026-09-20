import { supabase } from "./supabase";

export interface CandidateDetails {
  name: string;
  email: string;
  mobile_number: string;
  qualification: string;
}

export async function submitCandidateDetails(data: CandidateDetails) {
  try {
    const { error } = await supabase
      .from('candidate_details')
      .insert([
        { 
          name: data.name, 
          email: data.email, 
          mobile: data.mobile_number, 
          qualification: data.qualification 
        }
      ]);
      
    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }
    
    return { success: true };
  } catch (err: any) {
    console.error("Failed to submit candidate details:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}
