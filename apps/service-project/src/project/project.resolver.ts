import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
// import { plainToClass } from 'class-transformer';
import { Paginate } from '@graphqlcqrs/repository/dtos/paginate.dto';

@Resolver('Project')
export class ProjectResolver {
  @Mutation()
  async createProject(@Args('input') input: any): Promise<any> {
    // const result = await this.projectService.create(input, user);
    return null; // plainToClass(, result);
  }

  @Query()
  async project(@Args('id') id: string): Promise<any> {
    return null; // await this.projectService.findOne({ id });
  }

  @Query()
  async projects(@Args('input') paginate: Paginate): Promise<any[]> {
    return null; // await this.projectService.findAll(null, paginate);
  }

  @ResolveProperty('owner')
  async owner(@Parent() project: any): Promise<any> {
    // const result = await this.userRepository.findOne({ id: project.owner });
    return null; // plainToClass(User, result);
  }
}