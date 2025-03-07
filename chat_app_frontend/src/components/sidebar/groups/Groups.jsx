import React, { useState } from 'react'
import useGetGroups from '../../../hooks/useGetGroups'
import Group from './Group';
function Groups() {
  // get all groups using useGetGroups
  const [isSelected, setIsSelected] = useState(false);
  const { groups } = useGetGroups();


  return (
    <div className='sm:py-2 py-1 flex flex-col overflow-auto'>
      {groups.map((group, idx) => (
        <Group key={group._id} group={group} lastIdx={idx === groups.length - 1} />
      ))}
    </div>
  )
}

export default Groups
