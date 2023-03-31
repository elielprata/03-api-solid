import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository"
import { CreateGymCase } from "../create-gym"
import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms"

export function makeCreateGymUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new CreateGymCase(gymsRepository)

  return useCase
}