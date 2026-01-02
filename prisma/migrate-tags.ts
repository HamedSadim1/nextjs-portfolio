import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Migratie script om tags van comma-separated strings naar JSON arrays te converteren.
 * Dit script wordt gebruikt om bestaande projecten met string-based tags te updaten
 * naar de nieuwe JSON array structuur in de database.
 *
 * Uit te voeren met: npx tsx prisma/migrate-tags.ts
 */
async function migrateTagsToJson() {
  console.log('Starting tags migration...');

  // Haal alle projecten op uit de database
  const projects = await prisma.project.findMany();

  // Loop door elk project en converteer tags indien nodig
  for (const project of projects) {
    if (typeof project.tags === 'string') {
      // Converteer comma-separated string naar array
      const tagsArray = project.tags
        .split(',')
        .map((tag: string) => tag.trim())
        .filter((tag: string) => tag.length > 0);

      // Update het project met de nieuwe tags array
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

  console.log('Tags migration completed!');
}

migrateTagsToJson()
  .catch((e) => {
    console.error('Migration failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
