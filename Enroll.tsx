import React from 'react'
import Button from '../components/ui/button'
import Select from '../components/ui/select'
import Label from '../components/ui/label'

function Enroll() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Enroll Now</h2>
      <p>Join VoiceCraftHub and start your certified voice training journey today.</p>
      <div className="max-w-xl space-y-3">
        <div>
          <Label htmlFor="program">Choose Program</Label>
          <Select id="program" defaultValue="">
            <option value="" disabled>Select a program</option>
            <option>Spoken English</option>
            <option>Public Speaking</option>
            <option>Podcasting</option>
            <option>Vocal Singing</option>
          </Select>
        </div>
        <Button>Proceed to Enrollment</Button>
      </div>
    </div>
  )
}

export default Enroll