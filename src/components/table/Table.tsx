import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import employeesData from "../../../db.json";

const Table = () => {
  const employees = employeesData.employees;
  const [searchTerm, setSearchTerm] = useState("");
  const [openInfo, setOpenInfo] = useState(null);

  const formatPhoneNumber = (phone: string): string => {
    return phone.replace(
      /(\+?55)?\s*\(?(\d{2})\)?\s*(\d{4,5})[-.\s]?(\d{4})/,
      "+55 ($2) $3-$4"
    );
  };

  const toggleDetails = (id) => {
    setOpenInfo(openInfo === id ? null : id);
  };

  const filteredEmployees = employees.filter((employee) =>
    [employee.name, employee.job, employee.phone]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center  justify-center w-full px-4 md:px-4 md:gap-6">
            <div className=" md:max-w-[70%] w-full flex flex-col md:flex-row md:items-center md:justify-between md:mt-15 md:mb-6 mt-10 mb-5 gap-3.5">
        <h2 className="text-xl font-medium">Funcionários</h2>
        <div className="w-full flex items-center gap-2 border border-gray-10 rounded-xl md:w-[287px] h-[48px] px-4 py-3 bg-white-ntl">
          <input
            type="search"
            className="flex-grow outline-none"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlassIcon className="size-6 text-gray-10" />
        </div>
      </div>

      {/* Tabela PC */}
      <div className="hidden md:block max-w-[70%] w-full">
      <table className="w-full table-fixed text-left rounded-lg overflow-hidden shadow-lg">
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
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
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
                    {new Date(employee.admission_date).toLocaleDateString(
                      "pt-BR"
                    )}
                  </td>
                  <td className="w-1/5">{formatPhoneNumber(employee.phone)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  Nenhum funcionário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Tabela Mobile */}
      <div className="min-w-full md:hidden">
        <table className="w-full table-auto text-left rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-blue-primary text-white-ntl h-12">
              <th className="pl-4 w-1/4">FOTO</th>
              <th className="text-left w-1/4">NOME</th>
              <th className="pr-4 text-right w-2/4">•</th>
            </tr>
          </thead>
          <tbody className="bg-white-ntl text-black-ntl font-[500] w-full">
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <>
                  <tr key={employee.id} className={`h-12 border-b border-gray-300 min-w-full ${
                    openInfo === employee.id ? 'border-none' : ''
                  }`}>
                    <td  className="pl-4 py-1.5 w-1/4">
                      <div>
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="size-9 rounded-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="">{employee.name}</td>
                    <td className="text-right pr-4 w-2/4">
                      <button onClick={() => toggleDetails(employee.id)}>
                        {openInfo === employee.id ? (
                          <ChevronUpIcon className="size-6 text-blue-primary" />
                        ) : (
                          <ChevronDownIcon className="size-6 text-blue-primary" />
                        )}
                      </button>
                    </td>
                  </tr>
                  {openInfo === employee.id && (
                    <tr className="bg-whit-ntl border-b border-gray-10 w-full">
                      <td colSpan={3} className="p-4 w-full">
                        <div className="flex justify-between border-b border-gray-10 pb-2">
                          <span className="font-semibold">Cargo:</span>
                          <span className="font-medium">{employee.job}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-10 py-2">
                          <span className="font-semibold">Data de Admissão:</span>
                          <span className="font-medium">{new Date(employee.admission_date).toLocaleDateString("pt-BR")}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="font-semibold">Telefone:</span>
                          <span className="font-medium">{formatPhoneNumber(employee.phone)}</span>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4 text-gray-20">
                  Nenhum funcionário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
