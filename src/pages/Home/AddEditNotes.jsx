import React from 'react'
import TagInput from '../../components/Input/TagInput'

const AddEditNotes = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>Title</label>
            <input
                type='text'
                className='text-sxl text-slate-950 outline-none'
                placeholder='Go to Gym'
            />

        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>Content</label>
            <textarea
                type="text"
                className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
                placeholder='Content'
                rows={8}
           />
        </div>
        <div>
            <label className='input-label'>Tags</label>
        </div>
        <TagInput/>
        <button className='btn-primary font-medium mt-5 p-3' onClick={()=>{}}> ADD</button>
    </div>
  )
}

export default AddEditNotes