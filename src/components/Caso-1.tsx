import { useEffect, useState } from "react";

export const Caso1 = () => {
  const [tempo, setTempo] = useState(10);
  const [velocidade, setVelocidade] = useState(70);
  const [contadorTempo, setContadorTempo] = useState(0);
  const [deslocamentoInicial, setDeslocamentoInicial] = useState(0);

  const deslocamentoTotal = deslocamentoInicial + velocidade * tempo;
  const deslocamento = deslocamentoInicial + velocidade * contadorTempo;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContadorTempo((prevState) => prevState + 1);
    }, 1000);

    if (contadorTempo >= tempo) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [contadorTempo]);

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex gap-4">
        <input
          className="p-2 rounded-md focus:outline-none"
          type="number"
          placeholder="Espaço inicial"
          value={deslocamentoInicial}
          onChange={(e) => setDeslocamentoInicial(+e.target.value)}
        />
        <input
          className="p-2 rounded-md focus:outline-none"
          type="number"
          placeholder="Velocidade"
          value={velocidade}
          onChange={(e) => setVelocidade(+e.target.value)}
        />
        <input
          className="p-2 rounded-md focus:outline-none"
          type="number"
          placeholder="Tempo"
          value={tempo}
          onChange={(e) => setTempo(+e.target.value)}
        />

        <button
          className="bg-orange-500 py-2 px-10 rounded-md text-white font-bold"
          onClick={() => setContadorTempo(0)}
        >
          Simular
        </button>
      </div>

      <div className="flex items-center">
        <span className="w-[500px] text-justify text-xl font-bold">
          Um carro viaja a {velocidade}m/s, partindo do espaço inicial{" "}
          {deslocamentoInicial}m. Qual o espaço final após {tempo}s
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <strong className="text-red-500 font-bold text-3xl">S = So + vt</strong>
        <strong className="text-red-500 font-bold text-3xl">
          S = {deslocamento} m
        </strong>
      </div>

      <div
        style={{
          marginLeft: deslocamento - deslocamentoInicial,
        }}
      >
        <div className={`w-10 h-10 rounded-full bg-orange-500`} />
      </div>

      <div
        style={{
          width: deslocamentoTotal,
          height: 2,
        }}
        className=" bg-orange-500 flex justify-between mb-10"
      >
        <div className="text-red-500 font-bold mt-2">
          {deslocamentoInicial} m
        </div>
        <div className="text-red-500 font-bold mt-2">{deslocamentoTotal} m</div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-auto text-sm text-left text-black font-bold">
          <thead className="text-base text-white font-bold bg-orange-500">
            <tr>
              <th scope="col" className="px-6 py-2">
                m/s
              </th>
              <th scope="col" className="px-6 py-2">
                s
              </th>
              <th scope="col" className="px-6 py-2">
                m
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(contadorTempo)).map((_, index) => (
              <tr className="" key={index}>
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  {velocidade}
                </th>
                <td className="px-6 py-2">{index + 1}</td>
                <td className="px-6 py-2">
                  {deslocamentoInicial + velocidade * (index + 1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
