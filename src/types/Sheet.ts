import { objectType } from 'nexus'

export const Sheet = objectType({
  name: 'Sheet',
  definition(t) {
    t.model.id()
    t.model.content()
    t.model.owner()
    t.model.fileName()
    t.model.createdAt()
  },
})
