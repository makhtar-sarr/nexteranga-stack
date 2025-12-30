import { db } from ".";

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Initial Feature Flags
  const flags = [
    {
      key: "emailPasswordAuth",
      value: true,
      description: "Enable Email/Password authentication",
    },
    {
      key: "oauthProviders",
      value: true,
      description: "Enable OAuth providers (Google, GitHub)",
    },
    {
      key: "stripeIntegration",
      value: false,
      description: "Enable Stripe payments",
    },
    {
      key: "pawapayIntegration",
      value: false,
      description: "Enable pawaPay payments",
    },
    {
      key: "waveIntegration",
      value: false,
      description: "Enable Wave payments",
    },
  ];

  for (const flag of flags) {
    await db.featureFlag.upsert({
      where: { key: flag.key },
      update: {},
      create: flag,
    });
  }

  console.log("✅ Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
