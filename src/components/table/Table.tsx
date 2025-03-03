import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import employeesData from "../../../db.json";

const Table = () => {
  const employees = employeesData.employees;

  const formatPhoneNumber = (phone: string): string => {
    return phone.replace(
      /(\+?55)?\s*\(?(\d{2})\)?\s*(\d{4,5})[-.\s]?(\d{4})/,
      "+55 ($2) $3-$4"
    );
  };

  return (
    <>
      <div className="flex gap-4 items-center">
      <h2 className="text-xl font-semibold">Funcionários</h2>
      <div className="flex items-center gap-2 border border-gray-10 rounded-xl w-[287px] h-[48px] px-4 py-3 bg-white-ntl">
        {/* <label className="text-gray-20">Pesquisa</label> */}
        <input
          type="search"
          className="flex-grow outline-none"
          placeholder="Pesquisa"
        />
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-10" />
      </div>
    </div>

    <div className="w-screen h-screen container mx-auto p-4 flex justify-center items-center">
  <table className="w-[75%] table-fixed text-left rounded-lg overflow-hidden shadow-lg">
    <thead>
      <tr className="bg-blue-primary text-white-ntl h-12">
        <th className="w-1/5 pl-8">FOTO</th>
        <th className="w-1/5">NOME</th>
        <th className="w-1/5">CARGO</th>
        <th className="w-1/5">DATA DE ADMISSÃO</th>
        <th className="w-1/5">TELEFONE</th>
      </tr>
    </thead>
    <tbody className="bg-white text-black-ntl font-[500]">
      {employees.map((employee) => (
        <tr
          key={employee.id}
          className="h-12 border-b border-gray-10 hover:bg-gray-00"
        >
          <td className="w-1/5 pl-8 py-1.5">
            <div className="flex justify-start">
              <img
                src={employee.image}
                alt={employee.name}
                className="size-9 rounded-full object-cover"
              />
            </div>
          </td>
          <td className="w-1/5">{employee.name}</td>
          <td className="w-1/5">{employee.job}</td>
          <td className="w-1/5">
            {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
          </td>
          <td className="w-1/5">{formatPhoneNumber(employee.phone)}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </>
  );
};

export default Table;
