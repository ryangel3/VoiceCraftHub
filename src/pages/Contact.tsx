import React from 'react'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import Label from '../components/ui/label'
import Textarea from '../components/ui/textarea'

function Contact() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>Have questions? Reach out to our team for guidance and support.</p>
      <form className="space-y-3 max-w-xl">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" type="text" placeholder="Jane Doe" />
        </div>
        <div>
          <Label htmlFor="email">Your Email</Label>
          <Input id="email" type="email" placeholder="jane@example.com" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell us how we can help..." rows={4} />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  )
}

export default Contact