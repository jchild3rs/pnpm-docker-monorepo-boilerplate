import React, { FormHTMLAttributes } from 'react'
import { Button, Checkbox, Input, Label, Radio } from '../'

export interface LeadFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export function LeadForm(props: LeadFormProps) {
  return (
    <form {...props}>
      <div className="py-5">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 space-y-1 sm:col-span-3">
            <Label htmlFor="first-name">First name</Label>
            <Input
              required
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
            />
          </div>

          <div className="col-span-6 space-y-1 sm:col-span-3">
            <Label htmlFor="last-name">Last name</Label>
            <Input type="text" name="last-name" id="last-name" autoComplete="family-name" />
          </div>

          <div className="col-span-6 space-y-1 sm:col-span-4">
            <Label htmlFor="email-address">Email address</Label>
            <Input type="text" name="email-address" id="email-address" autoComplete="email" />
          </div>

          <div className="col-span-6 space-y-1 sm:col-span-3">
            <Label htmlFor="country">Country</Label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div className="col-span-6 space-y-1">
            <Label htmlFor="street-address">Street address</Label>
            <Input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
            />
          </div>

          <div className="col-span-6 space-y-1 sm:col-span-6 lg:col-span-2">
            <Label htmlFor="city">City</Label>
            <Input type="text" name="city" id="city" autoComplete="address-level2" />
          </div>

          <div className="col-span-6 space-y-1 sm:col-span-3 lg:col-span-2">
            <Label htmlFor="region">State / Province</Label>
            <Input type="text" name="region" id="region" autoComplete="address-level1" />
          </div>

          <div className="col-span-6 space-y-1 sm:col-span-3 lg:col-span-2">
            <Label htmlFor="postal-code">ZIP / Postal code</Label>
            <Input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" />
          </div>
        </div>
      </div>

      <div className="space-y-6 py-5">
        <fieldset>
          <legend className="sr-only">By Email</legend>
          <div className="text-base font-medium text-gray-900" aria-hidden="true">
            By Email
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox id="comments" name="comments" />
              </div>
              <label htmlFor="comments" className="ml-3 text-sm">
                <div className="font-medium text-gray-700">Comments</div>
                <p className="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </label>
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox id="candidates" name="candidates" />
              </div>
              <label htmlFor="candidates" className="ml-3 text-sm">
                <div className="font-medium text-gray-700">Candidates</div>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </label>
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox id="offers" name="offers" />
              </div>
              <label htmlFor="offers" className="ml-3 text-sm">
                <div className="font-medium text-gray-700">Offers</div>
                <p className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="contents text-base font-medium text-gray-900">
            Push Notifications
          </legend>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-4">
            <label htmlFor="push-everything" className="flex items-center py-2">
              <Radio id="push-everything" name="push-notifications" />
              <div className="ml-3 block text-sm font-medium text-gray-700">Everything</div>
            </label>
            <label htmlFor="push-email" className="flex items-center py-2">
              <Radio id="push-email" name="push-notifications" />
              <div className="ml-3 block text-sm font-medium text-gray-700">Same as email</div>
            </label>
            <label htmlFor="push-nothing" className="flex items-center py-2">
              <Radio id="push-nothing" name="push-notifications" />
              <div className="ml-3 block text-sm font-medium text-gray-700">
                No push notifications
              </div>
            </label>
          </div>
        </fieldset>
      </div>

      <div className="pb-5">
        <Button primary type="submit">
          Save
        </Button>
      </div>
    </form>
  )
}
