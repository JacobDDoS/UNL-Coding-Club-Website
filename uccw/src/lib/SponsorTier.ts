export class SponsorTier {
  tierTitle: string;
  tierDescription: string;
  tierBenefits: Array<String>;
  tierColor: string;

  constructor(tierTitle : string, tierDescription : string, tierBenefits : Array<String>, tierColor : string) {
    this.tierTitle = tierTitle;
    this.tierDescription = tierDescription;
    this.tierBenefits = tierBenefits;
    this.tierColor = tierColor;
  }
}

export const tiers = [
    new SponsorTier("Husker Red - $5000+", 
        "With this level of sponsorship, Coding Club could fund numerous large-scale events (>50 people). ",
        [
            "Your logo will be displayed alongside Coding Club’s during events",
            "You will have a leading role in the planning of events"
        ], 
        "var(--color-secondary)"
    ),
    new SponsorTier("Coding Blue - $2000+", 
        "With this level of sponsorship, Coding Club could fund its regular activities for a couple years.",
        [
            "We will actively promote your company and hand out merch!",
            "You will have an impact on our events (what, where, why)"
        ],
        "var(--color-accent)"
    ),
    new SponsorTier("Laptop Gray - $500+", 
        "With this level of sponsorship, Coding Club could fund its subclubs for about a year.",
        [
            "An event will be named after your organization",
            "You will be informed of any events before they are announced"
        ],
        "#999999"
    ),
    new SponsorTier("Dark Mode Black - $100+", 
        "With this level of sponsorship, Coding Club could fund a small activity.",
        [
            "Be listed as an official Coding Club Sponsor",
            "You will receive a personal thank you from the Executive Board (Unless you don’t want one)"
        ],
        "black"
    ),
]

// const tiers = [
//     {
//         tierTitle: "Husker Red - $5000+",
//         tierDescription: "With this level of sponsorship, Coding Club could fund numerous large-scale events (>50 people). ",
//         tierBenefits: [
//             "Your logo will be displayed alongside Coding Club’s during events",
//             "You will have a leading role in the planning of events"
//         ]
//     }
// ]
