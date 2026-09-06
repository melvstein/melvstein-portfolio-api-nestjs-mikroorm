import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { CreateRoleDto } from './dto/create-role.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';
import { Role } from './entities/role.entity.js';

@Injectable()
export class RoleService {
  constructor(private readonly em: EntityManager) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const roleRepository = this.em.getRepository(Role);
    const roleCreated = roleRepository.create({
      ...createRoleDto,
      updatedAt: new Date(),
    });

    await this.em.flush();
    return roleCreated;
  }

  async findAll(): Promise<Role[]> {
    const roleRepository = this.em.getRepository(Role);
    return await roleRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
