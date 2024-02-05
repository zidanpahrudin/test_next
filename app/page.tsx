import { AboutUs, Gallery, Homepage, ManagementProfile, OurClients, OurServices, ProjectExperience } from "@/components/pages"
import React from "react"

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Homepage />
      <AboutUs />
      <OurServices />
      <OurClients />
      <ProjectExperience />
      <Gallery />
      <ManagementProfile />
    </div>
  )
}
