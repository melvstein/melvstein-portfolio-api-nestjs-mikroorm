import { EntityRepository } from '@mikro-orm/postgresql';
import { Role } from '../entities/role.entity.js';

export class RoleRepository extends EntityRepository<Role> {}
