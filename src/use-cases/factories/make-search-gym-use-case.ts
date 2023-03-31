import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository"
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository"
import { GetUserMetricsUseCase } from "../get-user-metrics"
import { SearchGymsUseCase } from "../search-gyms"

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(gymsRepository)

  return useCase
}