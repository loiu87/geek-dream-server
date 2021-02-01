import { intArg, nullable, queryType, stringArg } from 'nexus'
import { getUserId } from '../utils'

export const Query = queryType({
  definition(t) {
    t.nullable.field('me', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.prisma.user.findUnique({
          where: {
            id: Number(userId),
          },
        })
      },
    })

    t.list.field('getSheets', {
      type: 'Sheet',
      resolve: (parent, args, ctx) => {
        console.log(ctx.req.get('Authorization'))
        const userId = getUserId(ctx)
        return ctx.prisma.sheet.findMany({
          where: { ownerId: Number(userId) },
          orderBy: { createdAt: 'desc' },
          take: 10,
        })
      },
    })
  },
})
