import { GymsRepository } from "@/repositories/gyms-repository"
import { UsersRepository } from "@/repositories/users-repository"
import { Gym } from "@prisma/client"

interface CreateGymCaseRegister {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface CreateGymCaseReponse {
  gym: Gym
}

export class CreateGymCase {

  constructor(private gymsRepository: GymsRepository) {

  }

  async execute({title, description, phone, latitude, longitude}: CreateGymCaseRegister): Promise<CreateGymCaseReponse> {
    const gym = await this.gymsRepository.create({
      title, 
      description, 
      phone, 
      latitude, 
      longitude
    })

    return { gym }
  }
}

