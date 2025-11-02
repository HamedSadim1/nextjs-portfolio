import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function migrateTagsToJson() {
  console.log("Starting tags migration...");

  const projects = await prisma.project.findMany();

  for (const project of projects) {
    if (typeof project.tags === "string") {
      // Convert comma-separated string to array
      const tagsArray = project.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      await prisma.project.update({
        where: { id: project.id },
        data: { tags: tagsArray },
      });

      console.log(
        `Migrated project "${project.title}": ${
          project.tags
        } -> ${JSON.stringify(tagsArray)}`
      );
    }
  }

  console.log("Tags migration completed!");
}

migrateTagsToJson()
  .catch((e) => {
    console.error("Migration failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
