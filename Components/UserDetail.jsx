import React from 'react'

const UserDetail = () => {
  return ( 
<div className="w-[70%] text-white bg-[#18171C] p-5 rounded-2xl">
    <h1 className='font-semibold text-4xl'>User Activity</h1>

<div className="overflow-x-auto w-full">
  <table className="table" >
    {/* head */}
    <thead className='text-lg'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Coordiantes</th>
        <th>Location</th>
        <th>Attendance</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>90%</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>98%</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>85%</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default UserDetail