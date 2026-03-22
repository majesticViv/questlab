export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  role: "parent" | "teacher" | "school_admin" | "other";
  organization?: string;
  phone?: string;
  source: string;
  created_at: string;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  role: WaitlistEntry["role"] | "";
  organization?: string;
  phone?: string;
}
