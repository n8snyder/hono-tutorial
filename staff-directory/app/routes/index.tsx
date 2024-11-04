import { createRoute } from 'honox/factory'
import type { FC } from 'hono/jsx'
import type { Employee } from '../db'
import { findAllEmployees, findAllDepartments, findAllLocations } from '../db'

const EmployeeCard: FC<{ employee: Employee }> = ({ employee }) => {
  const { employee_id, name, image_url, department_name, location_name } = employee;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <a href={`/employee/${employee_id}`}>
        <img className="bg-indigo-600 p-4 rounded-t-lg" src={image_url} alt={name} />
        //...
      </a>
    </div>
  );
};

export const GET = createRoute(async (c) => {
  const employees = await findAllEmployees(c.env.DB)
  const locations = await findAllLocations(c.env.DB)
  const departments = await findAllDepartments(c.env.DB)
  return c.render(<>
    <section className="flex-grow">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mt-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">{`Directory `}</span>
      </h1>
    </section>
    <section className="flex flex-wrap -mx-4">
      {employees.map((employee) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
          <EmployeeCard employee={employee} />
        </div>
      ))}
    </section>
  </>)
})