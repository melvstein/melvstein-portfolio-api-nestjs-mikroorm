import { defineEntity, p } from '@mikro-orm/core';
import { v4 } from 'uuid';

const RoleSchema = defineEntity({
  name: 'Role',
  properties: {
    id: p
      .uuid()
      .primary()
      .onCreate(() => v4()),
    name: p.string().unique().length(25),
    description: p.string().nullable(),
    createdAt: p.datetime().onCreate(() => new Date()),
    updatedAt: p.datetime().onUpdate(() => new Date()),
  },
});

export class Role extends RoleSchema.class {}
RoleSchema.setClass(Role);
