import { useEffect, useState } from "react";

export const Caso2 = () => {
  const [espacoTotal, setEspacoTotal] = useState(300);

  const [velocidade1, setVelocidade1] = useState(100);
  const [contadorTempo1, setContadorTempo1] = useState(0);

  const [velocidade2, setVelocidade2] = useState(50);
  const [contadorTempo2, setContadorTempo2] = useState(0);

  const deslocamento1 = +(velocidade1 * contadorTempo1).toFixed(2);
  const deslocamento2 = +(velocidade2 * contadorTempo2).toFixed(2);

  const tempoEncontro = espacoTotal / (velocidade1 + velocidade2);
  const espacoEncontro = velocidade1 * tempoEncontro;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContadorTempo1((prevState) => prevState + 0.1);
    }, 100);

    if (deslocamento1 >= espacoTotal) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [contadorTempo1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContadorTempo2((prevState) => prevState + 0.1);
    }, 100);

    if (deslocamento2 >= espacoTotal) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [contadorTempo2]);

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex gap-4 items-center">
        <strong>Veículo A</strong>

        <input
          className="p-2 rounded-md focus:outline-none"
          type="number"
          placeholder="Velocidade1"
          value={velocidade1}
          onChange={(e) => setVelocidade1(+e.target.value)}
        />
      </div>

      <div className="flex gap-4 items-center">
        <strong>Veículo B</strong>

        <input
          className="p-2 rounded-md focus:outline-none"
          type="number"
          placeholder="Velocidade1"
          value={velocidade2}
          onChange={(e) => setVelocidade2(+e.target.value)}
        />
      </div>

      <div className="flex gap-4 items-center">
        <strong>Distância</strong>

        <input
          className="p-2 rounded-md focus:outline-none"
          type="number"
          placeholder="Distância"
          value={espacoTotal}
          onChange={(e) => setEspacoTotal(+e.target.value)}
        />
        <button
          className="bg-orange-500 py-2 px-10 rounded-md text-white font-bold"
          onClick={() => {
            setContadorTempo1(0);
            setContadorTempo2(0);
          }}
        >
          Simular
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <span className="w-[700px] text-justify text-xl font-bold">
          Um veículo parte da cidade A com velocidade constante v1={velocidade1}
          m/s em direção à cidade B. No mesmo momento, mas em sentido oposto,
          outro veículo parte de B com velocidade v2={velocidade2}m/s também
          constante. Sabendo que distância entre as cidades vale {espacoTotal}m,
          determine:
        </span>

        <span className="w-[700px] text-justify text-xl font-bold">
          a) Qual o instante de encontro em (s){" "}
          <span className="text-red-500">{tempoEncontro.toFixed(2)} s</span>
        </span>
        <span className="w-[700px] text-justify text-xl font-bold">
          b) Qual o espaço de encontro em (m){" "}
          <span className="text-red-500">{espacoEncontro.toFixed(2)} m</span>
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <strong className="text-red-500 font-bold text-3xl">S = So + vt</strong>
        <strong className="text-red-500 font-bold text-3xl">
          S = {deslocamento1.toFixed(1)} m
        </strong>
      </div>

      <div
        style={{
          marginLeft: deslocamento1,
        }}
      >
        <div className={`w-10 h-10 rounded-full bg-orange-500`} />
      </div>

      <div
        style={{
          width: espacoTotal,
          height: 2,
        }}
        className=" bg-orange-500 flex justify-between mb-10"
      >
        <div className="text-red-500 font-bold mt-2">0m</div>
        <div className="text-red-500 font-bold mt-2">{espacoTotal} m</div>
      </div>

      <div className="flex flex-col gap-4">
        <strong className="text-red-500 font-bold text-3xl">S = So + vt</strong>
        <strong className="text-red-500 font-bold text-3xl">
          S = {(espacoTotal - deslocamento2).toFixed(1)} m
        </strong>
      </div>

      <div
        style={{
          marginLeft: espacoTotal - deslocamento2,
        }}
      >
        <div className={`w-10 h-10 rounded-full bg-orange-500`} />
      </div>

      <div
        style={{
          width: espacoTotal,
          height: 2,
        }}
        className="bg-orange-500 flex justify-between mb-10"
      >
        <div className="text-red-500 font-bold mt-2">0m</div>
        <div className="text-red-500 font-bold mt-2">{espacoTotal} m</div>
      </div>
    </div>
  );
};
