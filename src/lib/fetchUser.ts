import { prisma } from './prisma';

export async function fetchUser() {
  try {
    // Fetch user data (assume single user for portfolio)
    const user = await prisma.user.findFirst();
    if (user) {
      return {
        ...user,
        description: user.description as string[], // Type assertion
        socials: user.socials as {
          name: 'github' | 'linkedin' | 'email';
          url: string;
        }[],
      };
    }
  } catch (error) {
    console.warn('Prisma user fetch failed, using mock data:', error);
  }

  // Fallback to mock data if no user in DB or error
  return {
    name: 'Hamid Sadim',
    avatarUrl: '/images/avatar.webp',
    bio: 'Hey, mijn naam is Hamid Sadim en ik ben een Frontend Developer.',
    description: [
      'Welkom op mijn portfolio! Ik ben een veelzijdige frontend developer gespecialiseerd in het creëren van boeiende en responsieve webapplicaties. Ik heb een passie voor het bouwen van intuïtieve en gebruiksvriendelijke interfaces die de algehele gebruikerservaring verbeteren.',
      'Met een sterke beheersing van React.js, Tailwind CSS en TypeScript, samen met een solide basis in sorteeralgoritmen, ben ik toegewijd aan het bouwen van visueel verbluffende en krachtige gebruikersinterfaces.',
    ],
    socials: [
      { name: 'github' as const, url: 'https://github.com/your-profile' },
      {
        name: 'linkedin' as const,
        url: 'https://linkedin.com/in/your-profile',
      },
      { name: 'email' as const, url: 'mailto:hamid.sadim@outlook.com' },
    ],
  };
}
