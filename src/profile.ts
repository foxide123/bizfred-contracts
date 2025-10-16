import { z } from "zod";

{
  /* Experience */
}

export const ExperienceCreationSchema = z.object({
  company: z.string().min(1, { message: "Please specify company name" }),
  city: z.string().min(1, { message: "Please specify the city" }),
  country: z.string().min(1, { message: "Please specify the country name" }),
  title: z.string().min(1, { message: "Please specify the title" }),
  startDateMonth: z.coerce.number().min(1),
  startDateYear: z.coerce.number().min(1),
  endDateMonth: z.coerce.number().min(1),
  endDateYear: z.coerce.number().min(1),
  description: z.string(),
});
export type ExperienceCreationInput = z.infer<typeof ExperienceCreationSchema>;

export type ProfileExperienceCreationState = {
  form?: {
    company?: string;
    city?: string;
    country?: string;
    title?: string;
    startDateMonth?: string;
    startDateYear?: string;
    endDateMonth?: string;
    endDateYear?: string;
    description?: string;
  };
  errors?: {
    company?: string[];
    city?: string[];
    country?: string[];
    title?: string[];
    startDateMonth?: string[];
    startDateYear?: string[];
    endDateMonth?: string[];
    endDateYear?: string[];
    description?: string[];
    form?: string;
  };
  success?: boolean;
};

{
  /* Education */
}

export const EducationCreationSchema = z.object({
  school: z.string().min(1, {message: "Please specify school name"}),
  datesAttendedFrom: z.string().min(1, {message: "Please specify starting date"}),
  datesAttendedTo: z.string().min(1, {message: "Please specify ending date"}),
  degree: z.string().min(1, {message: "Please specify degree type"}),
  areaOfStudy: z.string().min(1, {message: "Please specify area of study"}),
});
export type EducationCreationInput = z.infer<typeof EducationCreationSchema>;

export type EducationErrorType = 'school' | 'datesAttendedFrom' | 'datesAttendedTo' | 'degree' | 'areaOfStudy';

export type ProfileEducationCreationState = {
  form?: {
    school?: string[];
    datesAttendedFrom?: string[];
    datesAttendedTo?: string[];
    degree?: string[];
    areaOfStudy?: string[];
  };
  errors?: {
    school?: string[];
    datesAttendedFrom?: string[];
    datesAttendedTo?: string[];
    degree?: string[];
    areaOfStudy?: string[];
    form?: string;
  };
  success?: boolean;
};


{/* Portfolios */}

export type PortfolioErrorType = 'projectTitle' | 'projectDescription' | 'projectSkills' | 'projectRole'

export const PortfoliosCreationSchema = z.object({
  projectTitle: z.string().min(1, {message: "Please specify project title"}),
  projectDescription: z.string().min(1, {message: "Please specify project description"}),
  projectSkills: z.string().min(1, {message: "Please specify skills"}),
  projectRole: z.string().min(1, {message: "Please specify your role"})
});
export type PortfoliosCreationInput = z.infer<typeof PortfoliosCreationSchema>;

export type ProfilePortfoliosCreationState = {
  form?: {
    projectTitle?: string[];
    projectDescription?: string[];
    projectSkills?: string[];
    projectRole?: string[];
  };
  errors?: {
    projectTitle?: string[];
    projectDescription?: string[];
    projectSkills?: string[];
    projectRole?: string[];
    form?: string;
    cloudflare?: string;
    supabase?: string;
  };
  success?: boolean;
  warnings?: string[];
}