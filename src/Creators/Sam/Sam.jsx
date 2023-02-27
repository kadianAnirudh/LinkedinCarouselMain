import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Input  } from '@nextui-org/react';
import TextField from '@mui/material/TextField';
import { Textarea } from '@nextui-org/react';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const Sam = () => {
  return (
      <>
    {/* The introductory banner  */}
    <div className="overflow-hidden bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base leading-7 text-black"> Mr. Resourceful </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-pink-600 sm:text-4xl"> Sam Szuchan </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                My Personal LinkedIn bookmarks are filled with Sam's beautiful carousels. His lists are well researched and gain some amazing engagement. Use his designs to share resources and 
                grow your audience. 
              </p>
            </div>
          </div>
          <div className="flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEgMXXNPL-fGg/profile-displayphoto-shrink_800_800/0/1675041286704?e=1683158400&v=beta&t=Uss4SNLp9HYtcu6LfJfTnVzc6VQVpLiNP4ta3MRLy-0"
            alt="Product screenshot"
            className="rounded-full h-64 w-64"
            // width={2432}
            // height={1442}
          />
          </div>
        </div>
      </div>
    </div>

    {/* Cover Page */}
    <div className="overflow-hidden bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base leading-7 text-black"> Mr. Resourceful </h2> */}
              <p className="py-16 text-3xl font-bold tracking-tight text-pink-600 sm:text-4xl"> Cover Page </p>
              {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    <Input 
        bordered
        color='Default'
        labelPlaceholder="Heading ( Hook for the post )"
        width='100%'
        maxLength={40}
        />
    <div className="mt-16">
    <h2 className="text-base leading-7 text-black"> Choose Cover Image </h2>
    <form class="flex items-center mt-8">
  <div class="shrink-0">
  </div>
  <label class="block cursor-pointer">
    <span className="sr-only cursor-pointer">Choose</span>
    <input type="file" className="block cursor-pointer w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
</form>
</div>
</div>
 </div>
<div className="flex justify-center align-center">
<div className="flex justify-center h-carouselHeight w-carouselWidth border-2 border-black">
</div>
</div>
</div>
</div>
</div>

    {/* Pages */}
    <div className="overflow-hidden bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base leading-7 text-black"> Mr. Resourceful </h2> */}
              <p className="mb-16 mt-8 text-3xl font-bold tracking-tight text-pink-600 sm:text-4xl"> Page 1 </p>
              {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    <Input 
        bordered
        color='Default'
        labelPlaceholder="Heading"
        width='100%'
        maxLength={40}
        />
    <div className="mt-8">
    {/* <h2 className="text-base leading-7 text-black"> Choose Image </h2> */}
    <form class="flex items-center mt-8 mb-12">
  <div class="shrink-0">
  </div>
  <label class="block cursor-pointer">
    <span className="sr-only cursor-pointer">Choose</span>
    <input type="file" className="block cursor-pointer w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
</form>
{/* <Textarea
label="Write your thoughts"
placeholder="Enter your amazing ideas."
status='Default'
/> */}
<Textarea labelPlaceholder="Body Text" status="default" width='100%' bordered/>
</div>
</div>
 </div>
<div className="flex justify-center align-center">
<div className="flex justify-center h-carouselHeight w-carouselWidth border-2 border-black">
</div>
</div>
</div>
</div>
</div>

</>

  )
}

export default Sam