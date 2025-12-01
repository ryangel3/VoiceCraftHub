import React from 'react'
import Card from '../components/ui/card'

function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome to VoiceCraftHub</h2>
      <p>
        An international platform for voice training and certifications.
        Explore programs in Spoken English, Public Speaking, Podcasting, and Vocal Singing.
      </p>
      <Card title="Get Started">
        <p>Enroll today and begin your journey with certified programs.</p>
      </Card>
    </div>
  )
}

export default Home