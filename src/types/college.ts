
export interface College {
  "College Name": string;
  "Course Type": string;
  "Specialization": string;
  "Location (City, State)": string;
  "2024 CUET-PG Cutoff (Gen)": string;
  "Admission Process": string;
  "Website"?: string;
  "Contact"?: string;
  "Description"?: string;
  "Facilities"?: string;
  "Ranking"?: string;
  "Established"?: string;
  "Faculty Size"?: string;
  "Student Body"?: string;
  "Campus Size"?: string;
  "Placement Rate"?: string;
  [key: string]: string | undefined;
}

export interface CollegeFilterOptions {
  courseType?: string;
  location?: string;
  cutoffRange?: [number, number];
}

export interface CollegeSortOptions {
  field: keyof College;
  direction: 'asc' | 'desc';
}
