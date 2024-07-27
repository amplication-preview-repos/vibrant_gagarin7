/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AboutUs as PrismaAboutUs } from "@prisma/client";

export class AboutUsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AboutUsCountArgs, "select">): Promise<number> {
    return this.prisma.aboutUs.count(args);
  }

  async aboutuses(args: Prisma.AboutUsFindManyArgs): Promise<PrismaAboutUs[]> {
    return this.prisma.aboutUs.findMany(args);
  }
  async aboutUs(
    args: Prisma.AboutUsFindUniqueArgs
  ): Promise<PrismaAboutUs | null> {
    return this.prisma.aboutUs.findUnique(args);
  }
  async createAboutUs(args: Prisma.AboutUsCreateArgs): Promise<PrismaAboutUs> {
    return this.prisma.aboutUs.create(args);
  }
  async updateAboutUs(args: Prisma.AboutUsUpdateArgs): Promise<PrismaAboutUs> {
    return this.prisma.aboutUs.update(args);
  }
  async deleteAboutUs(args: Prisma.AboutUsDeleteArgs): Promise<PrismaAboutUs> {
    return this.prisma.aboutUs.delete(args);
  }
}
