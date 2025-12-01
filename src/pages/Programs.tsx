import React from 'react'
import Card from '../components/ui/card'
import Badge from '../components/ui/badge'

function Programs() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Our Programs</h2>
      <Card title="Spoken English">
        <p>Enhance communication skills with structured training modules.</p>
        <div className="mt-2"><Badge>Beginner–Advanced</Badge></div>
      </Card>
      <Card title="Public Speaking">
        <p>Ofqual regulated certification to boost confidence and credibility.</p>
        <div className="mt-2"><Badge variant="success">Regulated</Badge></div>
      </Card>
      <Card title="Podcasting">
        <p>Learn the art of voice storytelling and digital broadcasting.</p>
        <div className="mt-2"><Badge>Project-based</Badge></div>
      </Card>
      <Card title="Vocal Singing">
        <p>Certified training with Rockschool and Stage School standards.</p>
        <div className="mt-2"><Badge variant="warning">Performance</Badge></div>
      </Card>
    </div>
  )
}

export default Programs