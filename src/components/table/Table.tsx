import employeesData from "../../../db.json";

const Table = () => {
  const employees = employeesData.employees;

  const formatPhoneNumber = (phone: string): string => {
    return phone.replace(/(\+?55)?\s*\(?(\d{2})\)?\s*(\d{4,5})[-.\s]?(\d{4})/, "+55 ($2) $3-$4");
  };

  return (
    <div className="w-screen h-screen container mx-auto p-4 flex justify-center items-center">
      <table className="w-[90%] text-left rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-blue-primary text-white-ntl h-12">
            <th className=" pl-8 text-left">FOTO</th>
            <th className=" text-left">NOME</th>
            <th className=" text-left">CARGO</th>
            <th className=" text-left">DATA DE ADMISSÃO</th>
            <th className=" text-left">TELEFONE</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black-ntl grid-cols-1 font-medium">
          {employees.map((employee) => (
            <tr key={employee.id} className="h-12 border-b border-gray-10 hover:bg-gray-00">
              <td className="pl-8 py-1.5 flex items-center">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="size-9 rounded-full object-cover"
                />
              </td>
              <td className=" ">{employee.name}</td>
              <td className=" ">{employee.job}</td>
              <td className="">
                {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
              </td>
              <td className=" ">{formatPhoneNumber(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;