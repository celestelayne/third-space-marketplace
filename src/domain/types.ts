export const practiceCategories = [
  "writing_literature",
  "visual_art_photography",
  "architecture_city",
  "design_creative_technology",
  "craft_material_practice",
  "food_hospitality",
  "movement_embodiment",
  "ecology_outdoor_practice",
] as const;

export type PracticeCategory = (typeof practiceCategories)[number];

export const teachingTags = [
  "memoir",
  "poetry",
  "reading",
  "literary_criticism",
  "drawing",
  "photography",
  "urban_walking",
  "neighborhood_observation",
  "city_history",
  "creative_coding",
  "interaction_design",
  "research_methods",
  "visible_mending",
  "textiles",
  "bookbinding",
  "food_history",
  "tasting",
  "cooking",
  "somatic_practice",
  "dance",
  "walking_meditation",
  "gardening",
  "birding",
  "field_study",
] as const;

export type TeachingTag = (typeof teachingTags)[number];

export const spaceNeedTags = [
  "communal_table",
  "quiet_room",
  "natural_light",
  "projector",
  "sink_access",
  "kitchen_access",
  "open_floor",
  "outdoor_access",
  "indoor_rain_plan",
  "task_lighting",
  "storage_available",
  "accessible_entrance",
  "walking_route",
  "food_service",
] as const;

export type SpaceNeedTag = (typeof spaceNeedTags)[number];

export const groupTags = [
  "small_cohort",
  "recurring_series",
  "walking_group",
  "reading_group",
  "peer_critique",
  "open_salon",
  "beginner_friendly",
  "intergenerational",
  "long_table",
  "hands_on",
] as const;

export type GroupTag = (typeof groupTags)[number];

export type TimeWindow =
  | "weekday_morning"
  | "weekday_afternoon"
  | "weekday_evening"
  | "weekend_morning"
  | "weekend_afternoon"
  | "weekend_evening";

export type Practitioner = {
  id: string;
  name: string;
  pronouns: string | null;
  bio: string;

  primaryCategory: PracticeCategory;
  secondaryCategories: PracticeCategory[];

  teaches: TeachingTag[];
  needs: SpaceNeedTag[];
  hosts: GroupTag[];

  preferredNeighborhoods: string[];
  targetGroupSize: {
    min: number;
    target: number;
    max: number;
  };

  preferredTimeWindows: TimeWindow[];
  maxVenueCostCents: number | null;

  recurringExperience: "new" | "some" | "established";
  communityHostingNote: string;

  isActive: boolean;
};

export type HostSpace = {
  id: string;
  name: string;
  type:
    | "bookstore"
    | "gallery"
    | "cafe"
    | "restaurant"
    | "studio"
    | "community_room"
    | "retail_space"
    | "cultural_institution"
    | "outdoor";

  neighborhood: string;
  description: string;

  capacity: number;
  amenities: SpaceNeedTag[];
  supports: GroupTag[];

  atmosphereTags: string[];
  programmingInterests: PracticeCategory[];

  availableTimeWindows: TimeWindow[];
  recurringGroupsWelcome: boolean;

  estimatedCostCents: number | null;
  constraints: string | null;
  isActive: boolean;
};

export type MatchStatus =
  | "proposed"
  | "space_contacted"
  | "offered"
  | "accepted"
  | "declined";

export type SeedMatch = {
  id: string;
  practitionerId: string;
  hostSpaceId: string;

  status: MatchStatus;
  rationale: string;
  signals: string[];
  rejectionNotes: string | null;
};
