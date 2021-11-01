import React, { useEffect, useState } from "react";

import Background from "../Img/Back.jpg";
function ConsultSalario() {
  const [Salario, setSalario] = useState(0);
  const [Hsupl, setHsupl] = useState(0);
  const [Hextra, setHextra] = useState(0);
  const [ValorHsupl, setValorHsupl] = useState(0);
  const [ValorHextra, setValorHextra] = useState(0);
  const [AporteIess, setAporteIess] = useState(0);
  const [TotalRecibir, setTotalRecibir] = useState(0);

  function CalculoAPORTE() {
    const totalHoraSuplement = Hsupl * CalculoHora(50);
    const totalHoraExtra = Hextra * CalculoHora(100);
    const TotalSobreTiempo =
      parseInt(totalHoraSuplement) + parseInt(totalHoraExtra);

    const totalAporte = (Salario * 9.45) / 100;
    return { totalAporte, TotalSobreTiempo };
  }

  function CalculoHora(porcentaje) {
    const resPorc = porcentaje / 100;
    const ValorHora =
      parseInt(Salario) / 30 / 8 +
      (parseInt(Salario) / 30 / 8) * parseInt(resPorc);
    return ValorHora;
  }

  function TotalSalario(e) {
    e.preventDefault();
    const SobreTiempo = CalculoAPORTE().TotalSobreTiempo;
    const remuneracion = parseInt(Salario) + parseInt(SobreTiempo);
    const NetoRecibir = remuneracion - CalculoAPORTE().totalAporte;

    setTotalRecibir(NetoRecibir);
  }

  function ChangeValue(e, setValue, value) {
    setValue(e.target.value);
    console.log(value);
  }

  return (
    <div>
      <img src={Background} className="fondo" alt="" />
      <img src={Background} className="fondo2" alt="" />
      <header>
        <nav>
          <h1 className="text-danger bg-light ">
            Consulta de Salario - Ecuatoriano
          </h1>
        </nav>
      </header>
      <main>
        <form className="w-50 text-center m-auto">
          <div className="Inputs text-center text-primary d-flex flex-column justify-content-center ">
            <div className="headinput bg-light  d-flex flex-column  text-center ">
              <label htmlFor="" className="fs-2 text">
                Salario
              </label>
              <span className="attention text-dark ms-4 bg-info">
                Salario Acordado (ej : $ 400)
              </span>
            </div>
            <div class="input-group mt-2 mb-3    input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg">
                $
              </span>
              <input
                value={Salario}
                onChange={(e) => ChangeValue(e, setSalario, Salario)}
                type="number"
                class="form-control text-center "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
          <div className="Inputs text-primary">
            <div className="headinput bg-light d-flex flex-column  ">
              <label htmlFor="" className="fs-2 text">
                Cantidad de Horas Suplementarias
              </label>
              <span
                className="attention text-dark ms-4 bg-info
"
              >
                Horas despues de la jornada ordinaria (ej : Lunes a Viernes )
              </span>
            </div>
            <div class="input-group mt-2 mb-3   input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg">
                $
              </span>
              <input
                value={Hsupl}
                onChange={(e) => ChangeValue(e, setHsupl, Hsupl)}
                type="number"
                class="form-control text-center "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
          <div className="Inputs text-primary">
            <div className="headinput bg-light d-flex flex-column  ">
              <label htmlFor="" className="fs-2 text">
                Cantidad de Horas Extraordinarias
              </label>
              <span
                className="attention text-dark ms-4 bg-info
"
              >
                Horas trabajadas fuera del Horario (ej : Feriados , Sabados y/o
                Domingos)
              </span>
            </div>
            <div class="input-group mt-2 mb-3   input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg">
                $
              </span>
              <input
                value={Hextra}
                onChange={(e) => ChangeValue(e, setHextra, Hextra)}
                type="number"
                class="form-control text-center "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
          <div className="Inputs text-primary">
            <div className="headinput bg-light d-flex flex-column  ">
              <label htmlFor="" className="fs-2 text">
                Aporte I.E.S.S
              </label>
              <span
                className="attention text-dark ms-4 bg-info
"
              >
                Aporte del 9.45% del monto total de la Remuneracion
              </span>
            </div>
            <div class="input-group mt-2 mb-3  input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg">
                $
              </span>
              <input
                type="number"
                disabled
                class="form-control text-center "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                value={CalculoAPORTE().totalAporte}
              />
            </div>

            <div className=" rounded-3 mb-4 bg-warning">
              <h4 className="fs-4 text">Total Neto a Recibir = </h4>

              <p className="text-dark fs-4 text">
                Valor Hora Suplementaria : $ {CalculoHora(50)}
              </p>
              <p className="text-dark fs-4 text">
                Valor Hora Extra : $ {CalculoHora(100)}
              </p>

              <p className="text-dark fs-4 text">
                Total Sobretiempo : $ {CalculoAPORTE().TotalSobreTiempo}
              </p>
              <p className="text-primary fs-4 text">
                TOTAL RECIBIR :
                <span className="text-dark fs-4 text"> $ {TotalRecibir}</span>
              </p>
            </div>
            <button
              onClick={TotalSalario}
              className="btn px-5  py-3 fs-5 text btn-danger"
            >
              Calcular Salario{" "}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ConsultSalario;
