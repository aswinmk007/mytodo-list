import React from 'react'

function Todoitem() {
  return (
    <li>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						
						
					></input>
					
				</span>
				<button  className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
  )
}

export default Todoitem