import type { HostSpace, Practitioner, SeedMatch } from "../domain/types";

export const hostSpaces = [
  {
    id: "space-archive-books",
    name: "Archive Books",
    type: "bookstore",
    neighborhood: "Fishtown",
    description: "An independent bookstore with a quiet 16-seat back room used for small readings, discussions, and neighborhood programming.",

    capacity: 16,
    amenities: ["quiet_room", "communal_table", "accessible_entrance"],
    supports: ["small_cohort", "recurring_series", "reading_group", "open_salon"],

    atmosphereTags: ["intimate", "literary", "neighborhood-rooted"],
    programmingInterests: ["writing_literature", "architecture_city"],

    availableTimeWindows: ["weekday_evening", "weekend_morning"],
    recurringGroupsWelcome: true,

    estimatedCostCents: 20000,
    constraints:
      "No amplified sound. Groups must conclude by 9:00 p.m. Food is limited to covered drinks.",
    isActive: true,
  },
  {
    id: "space-common-table",
    name: "Common Table",
    type: "restaurant",
    neighborhood: "South Philadelphia",
    description:
      "A neighborhood restaurant with an 18-seat communal table available on slower Monday evenings for food-centered cultural programming.",

    capacity: 18,
    amenities: ["communal_table", "food_service", "accessible_entrance"],
    supports: ["long_table", "intergenerational", "recurring_series", "open_salon"],

    atmosphereTags: ["convivial", "warm", "conversation-forward"],
    programmingInterests: ["food_hospitality", "writing_literature"],

    availableTimeWindows: ["weekday_evening"],
    recurringGroupsWelcome: true,

    estimatedCostCents: null,
    constraints:
      "Uses a food-and-beverage minimum rather than a room fee. Monday only. No outside food.",
    isActive: true,
  },
  {
    id: "space-river-studio",
    name: "River Studio",
    type: "studio",
    neighborhood: "Kensington",
    description:
      "A shared community studio with large work tables, bright task lighting, a utility sink, and lockable storage for small ongoing groups.",

    capacity: 14,
    amenities: [
      "communal_table",
      "task_lighting",
      "sink_access",
      "storage_available",
      "accessible_entrance",
    ],
    supports: ["small_cohort", "recurring_series", "hands_on", "beginner_friendly"],

    atmosphereTags: ["practical", "welcoming", "maker-oriented"],
    programmingInterests: ["craft_material_practice", "visual_art_photography"],

    availableTimeWindows: ["weekday_evening", "weekend_afternoon"],
    recurringGroupsWelcome: true,

    estimatedCostCents: 25000,
    constraints:
      "No solvents, kiln use, or large-scale wet work. Hosts must restore the room after each session.",
    isActive: true,
  },
  {
    id: "space-lantern-gallery",
    name: "Lantern Gallery",
    type: "gallery",
    neighborhood: "Old City",
    description:
      "A storefront contemporary gallery that hosts monthly peer critiques and panel conversations during and between exhibitions.",

    capacity: 24,
    amenities: ["open_floor", "natural_light", "projector", "accessible_entrance"],
    supports: ["peer_critique", "open_salon", "small_cohort", "recurring_series"],

    atmosphereTags: ["contemporary", "discursive", "artist-run"],
    programmingInterests: ["visual_art_photography", "design_creative_technology"],

    availableTimeWindows: ["weekday_evening", "weekend_afternoon"],
    recurringGroupsWelcome: true,

    estimatedCostCents: 15000,
    constraints:
      "Programming must be compatible with the current exhibition; no wet materials on the gallery floor.",
    isActive: true,
  },
  {
    id: "space-hemline-atelier",
    name: "Hemline Atelier",
    type: "retail_space",
    neighborhood: "South Philadelphia",
    description:
      "A fashion and textile boutique whose back atelier hosts small pattern-making salons, wardrobe critiques, and mending circles.",

    capacity: 12,
    amenities: ["communal_table", "task_lighting", "natural_light", "storage_available"],
    supports: ["small_cohort", "hands_on", "peer_critique", "recurring_series"],

    atmosphereTags: ["intimate", "material-focused", "fashion-literate"],
    programmingInterests: ["design_creative_technology", "craft_material_practice"],

    availableTimeWindows: ["weekend_afternoon", "weekday_evening"],
    recurringGroupsWelcome: true,

    estimatedCostCents: 18000,
    constraints:
      "Group size capped at 12; no dye or wet finishing work in the atelier.",
    isActive: true,
  },
] satisfies HostSpace[];

export const practitioners = [
  {
    id: "practitioner-mara-ellis",
    name: "Mara Ellis",
    pronouns: "she/her",
    bio:
      "An urban researcher who leads close-reading walks about storefronts, zoning, memory, and neighborhood change.",

    primaryCategory: "architecture_city",
    secondaryCategories: ["writing_literature"],

    teaches: ["urban_walking", "neighborhood_observation", "city_history"],
    needs: ["walking_route", "indoor_rain_plan", "quiet_room"],
    hosts: ["walking_group", "recurring_series", "small_cohort"],

    preferredNeighborhoods: ["Fishtown", "Old City", "South Philadelphia"],
    targetGroupSize: { min: 8, target: 12, max: 16 },

    preferredTimeWindows: ["weekday_evening", "weekend_morning"],
    maxVenueCostCents: 30000,

    recurringExperience: "some",
    communityHostingNote:
      "Has led one-off public walks and wants to develop a five-week cohort that gives participants time to build a shared vocabulary for reading streets.",

    isActive: true,
  },
  {
    id: "practitioner-inez-mora",
    name: "Inez Mora",
    pronouns: "she/her",
    bio:
      "A textile artist and repair educator who teaches visible mending as a practical skill and a way to keep garments in circulation.",

    primaryCategory: "craft_material_practice",
    secondaryCategories: ["design_creative_technology"],

    teaches: ["visible_mending", "textiles", "bookbinding"],
    needs: ["communal_table", "task_lighting", "storage_available"],
    hosts: ["hands_on", "beginner_friendly", "recurring_series"],

    preferredNeighborhoods: ["Kensington", "Fishtown"],
    targetGroupSize: { min: 8, target: 12, max: 14 },

    preferredTimeWindows: ["weekend_afternoon", "weekday_evening"],
    maxVenueCostCents: 30000,

    recurringExperience: "established",
    communityHostingNote:
      "Runs low-pressure circles where participants bring a garment, work at a shared table, and return over several weeks with projects in progress.",

    isActive: true,
  },
  {
    id: "practitioner-devon-park",
    name: "Devon Park",
    pronouns: "they/them",
    bio:
      "A writer and food historian who convenes conversations on diasporic cooking, menus, migration, and the social life of restaurants.",

    primaryCategory: "food_hospitality",
    secondaryCategories: ["writing_literature"],

    teaches: ["food_history", "tasting", "reading"],
    needs: ["communal_table", "food_service", "quiet_room"],
    hosts: ["long_table", "intergenerational", "recurring_series"],

    preferredNeighborhoods: ["South Philadelphia", "Old City"],
    targetGroupSize: { min: 12, target: 16, max: 18 },

    preferredTimeWindows: ["weekday_evening"],
    maxVenueCostCents: null,

    recurringExperience: "some",
    communityHostingNote:
      "Wants to run a four-part supper seminar in which a small tasting and shared meal are integral to the conversation, rather than an add-on.",

    isActive: true,
  },
  {
    id: "practitioner-june-callahan",
    name: "June Callahan",
    pronouns: "she/her",
    bio:
      "A poet and editor who runs slow, generative reading groups anchored in contemporary poetry and personal essay.",

    primaryCategory: "writing_literature",
    secondaryCategories: [],

    teaches: ["poetry", "reading", "memoir"],
    needs: ["quiet_room", "communal_table", "natural_light"],
    hosts: ["reading_group", "small_cohort", "recurring_series"],

    preferredNeighborhoods: ["Fishtown", "Old City"],
    targetGroupSize: { min: 6, target: 10, max: 12 },

    preferredTimeWindows: ["weekday_evening", "weekend_morning"],
    maxVenueCostCents: 25000,

    recurringExperience: "established",
    communityHostingNote:
      "Prefers a weekly six-session arc where the same participants build trust across the run.",

    isActive: true,
  },
  {
    id: "practitioner-omar-shah",
    name: "Omar Shah",
    pronouns: "he/him",
    bio:
      "A critic who convenes open salons pairing a single essay with a public conversation about place, form, and craft.",

    primaryCategory: "writing_literature",
    secondaryCategories: ["architecture_city"],

    teaches: ["literary_criticism", "reading", "memoir"],
    needs: ["quiet_room", "projector", "accessible_entrance"],
    hosts: ["open_salon", "intergenerational", "recurring_series"],

    preferredNeighborhoods: ["Old City", "West Philadelphia"],
    targetGroupSize: { min: 15, target: 25, max: 40 },

    preferredTimeWindows: ["weekday_evening", "weekend_afternoon"],
    maxVenueCostCents: 15000,

    recurringExperience: "some",
    communityHostingNote:
      "Wants a monthly public salon with a rotating guest reader, hosted in a civic room.",

    isActive: true,
  },
  {
    id: "practitioner-lena-huang",
    name: "Lena Huang",
    pronouns: "she/her",
    bio:
      "A documentary photographer who leads monthly peer critique nights for early- and mid-career image-makers.",

    primaryCategory: "visual_art_photography",
    secondaryCategories: ["design_creative_technology"],

    teaches: ["photography", "drawing", "research_methods"],
    needs: ["projector", "open_floor", "natural_light"],
    hosts: ["peer_critique", "small_cohort", "recurring_series"],

    preferredNeighborhoods: ["Old City", "Fishtown"],
    targetGroupSize: { min: 8, target: 14, max: 20 },

    preferredTimeWindows: ["weekday_evening"],
    maxVenueCostCents: 20000,

    recurringExperience: "established",
    communityHostingNote:
      "Runs a bring-five-images-per-person critique that needs a projector and a wall for pinup.",

    isActive: true,
  },
  {
    id: "practitioner-tomas-reyes",
    name: "Tomás Reyes",
    pronouns: "he/him",
    bio:
      "A painter and drawing teacher who runs sketch-walks that end in a shared café critique.",

    primaryCategory: "visual_art_photography",
    secondaryCategories: ["architecture_city"],

    teaches: ["drawing", "urban_walking", "neighborhood_observation"],
    needs: ["communal_table", "walking_route", "indoor_rain_plan"],
    hosts: ["small_cohort", "hands_on", "beginner_friendly"],

    preferredNeighborhoods: ["South Philadelphia", "Fishtown"],
    targetGroupSize: { min: 6, target: 10, max: 12 },

    preferredTimeWindows: ["weekend_morning", "weekend_afternoon"],
    maxVenueCostCents: 20000,

    recurringExperience: "some",
    communityHostingNote:
      "Wants a home base within walking distance of varied storefronts and blocks.",

    isActive: true,
  },
  {
    id: "practitioner-ada-nwosu",
    name: "Ada Nwosu",
    pronouns: "she/her",
    bio:
      "A creative technologist who teaches small cohorts to build weird, useful things with code as a design material.",

    primaryCategory: "design_creative_technology",
    secondaryCategories: ["visual_art_photography"],

    teaches: ["creative_coding", "interaction_design", "research_methods"],
    needs: ["task_lighting", "communal_table", "projector"],
    hosts: ["small_cohort", "hands_on", "recurring_series"],

    preferredNeighborhoods: ["Fishtown", "Kensington"],
    targetGroupSize: { min: 6, target: 10, max: 12 },

    preferredTimeWindows: ["weekday_evening", "weekend_afternoon"],
    maxVenueCostCents: 25000,

    recurringExperience: "established",
    communityHostingNote:
      "Runs an eight-week studio; each participant leaves with one small shipped project.",

    isActive: true,
  },
  {
    id: "practitioner-hana-oduya",
    name: "Hana Oduya",
    pronouns: "she/her",
    bio:
      "A somatic practitioner leading slow, low-impact movement sessions grounded in breath and attention.",

    primaryCategory: "movement_embodiment",
    secondaryCategories: ["ecology_outdoor_practice"],

    teaches: ["somatic_practice", "walking_meditation", "dance"],
    needs: ["open_floor", "quiet_room", "natural_light"],
    hosts: ["small_cohort", "recurring_series", "beginner_friendly"],

    preferredNeighborhoods: ["West Philadelphia", "South Philadelphia"],
    targetGroupSize: { min: 6, target: 10, max: 14 },

    preferredTimeWindows: ["weekday_morning", "weekend_morning"],
    maxVenueCostCents: 20000,

    recurringExperience: "some",
    communityHostingNote:
      "Prefers rooms with a wooden floor and daylight; no mirrors required.",

    isActive: true,
  },
  {
    id: "practitioner-sam-whitfield",
    name: "Sam Whitfield",
    pronouns: "they/them",
    bio:
      "A field naturalist who leads slow birding walks and small backyard-ecology study groups.",

    primaryCategory: "ecology_outdoor_practice",
    secondaryCategories: ["architecture_city"],

    teaches: ["birding", "field_study", "gardening"],
    needs: ["outdoor_access", "indoor_rain_plan", "accessible_entrance"],
    hosts: ["walking_group", "beginner_friendly", "recurring_series"],

    preferredNeighborhoods: ["West Philadelphia", "Kensington"],
    targetGroupSize: { min: 6, target: 10, max: 12 },

    preferredTimeWindows: ["weekend_morning", "weekday_morning"],
    maxVenueCostCents: 10000,

    recurringExperience: "some",
    communityHostingNote:
      "Needs an indoor fallback near a green space for weather cancellations.",

    isActive: true,
  },
] satisfies Practitioner[];

export const seedMatches = [
  {
    id: "match-mara-archive-books",
    practitionerId: "practitioner-mara-ellis",
    hostSpaceId: "space-archive-books",
    status: "proposed",
    rationale:
      "Archive Books provides a 16-person indoor discussion base within Mara's preferred geography, supports recurring small groups, and aligns with the program's neighborhood-reading format.",
    signals: [
      "capacity_fit",
      "neighborhood_fit",
      "quiet_room",
      "recurring_group_welcome",
      "programming_alignment",
    ],
    rejectionNotes: null,
  },
  {
    id: "match-mara-river-studio",
    practitionerId: "practitioner-mara-ellis",
    hostSpaceId: "space-river-studio",
    status: "declined",
    rationale:
      "The studio has sufficient capacity and budget alignment, but does not provide an appropriate neighborhood anchor or indoor discussion setting for the intended walking route.",
    signals: ["capacity_fit", "budget_fit"],
    rejectionNotes:
      "Rejected because the location and atmosphere undermine the walking-group format.",
  },
  {
    id: "match-lena-lantern-gallery",
    practitionerId: "practitioner-lena-huang",
    hostSpaceId: "space-lantern-gallery",
    status: "accepted",
    rationale:
      "Lantern Gallery offers projector, open floor, and an artist-run atmosphere that directly supports Lena's monthly image critique format, within her preferred Old City geography.",
    signals: [
      "projector_available",
      "open_floor_available",
      "peer_critique_supported",
      "programming_alignment",
      "neighborhood_fit",
      "capacity_fit",
    ],
    rejectionNotes: null,
  },
  {
    id: "match-inez-hemline-atelier",
    practitionerId: "practitioner-inez-mora",
    hostSpaceId: "space-hemline-atelier",
    status: "proposed",
    rationale:
      "Hemline Atelier's communal table, task lighting, storage, and material-focused atmosphere are an unusually clean fit for Inez's mending circle, though the South Philadelphia location falls outside her preferred Kensington/Fishtown radius.",
    signals: [
      "communal_table",
      "task_lighting",
      "storage_available",
      "hands_on_supported",
      "atmosphere_alignment",
      "neighborhood_mismatch",
    ],
    rejectionNotes: null,
  },
  {
    id: "match-devon-common-table",
    practitionerId: "practitioner-devon-park",
    hostSpaceId: "space-common-table",
    status: "proposed",
    rationale:
      "Common Table is the sole space in the current inventory offering food service alongside a communal long table, which Devon's supper seminar format treats as non-negotiable rather than an add-on.",
    signals: [
      "food_service_available",
      "long_table_supported",
      "communal_table",
      "programming_alignment",
      "sole_viable_food_service_space",
    ],
    rejectionNotes: null,
  },
  {
    id: "match-omar-lantern-gallery",
    practitionerId: "practitioner-omar-shah",
    hostSpaceId: "space-lantern-gallery",
    status: "proposed",
    rationale:
      "Lantern Gallery meets Omar's hard requirements for a projector and open-salon capacity, but its contemporary artist-run atmosphere is one of several plausible fits alongside Archive Books (literary, smaller) and Common Table (convivial, food-forward); the right choice depends on the tone Omar wants each salon to carry.",
    signals: [
      "projector_available",
      "open_salon_supported",
      "capacity_borderline",
      "atmosphere_judgment_needed",
      "alternative_candidates_available",
    ],
    rejectionNotes: null,
  },
] satisfies SeedMatch[];