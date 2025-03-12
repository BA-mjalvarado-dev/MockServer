const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/* CATALOGOS */
app.post("/api/v1/backoffice/catalogo/cliente-proveedor", (req, res) => {
  const { peticionListarClienteProveedor } = req.body;

  // Simulación de respuesta basada en la petición
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarClienteProveedorColeccion: [
      {
        codigoProveedorBp:
          peticionListarClienteProveedor?.codigoProveedorBp || 1,
        codigoClienteBp: peticionListarClienteProveedor?.codigoClienteBp || 1,
        codigoTipoIdentificacion: 1,
        nombreTipoIdentificacion: "RTN",
        codigoIBSCore: "852963",
        nombre: "PUMA Energy",
        correo: "mercadeo@pumaenergy.hn",
        descripcion: "Gasolinera Puma",
        Observacion: "Operadora de Gasolineras",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };

  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/cuenta-cliente", (req, res) => {
  const { peticionListarCuentaCliente } = req.body;

  // Simulación de respuesta basada en la petición
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarCuentaClienteColeccion: [
      {
        codigoClienteBp: peticionListarCuentaCliente?.codigoClienteBp || 1,
        codigoMoneda: "LPS",
        cuenta: "123456789",
        descripcion: "Cuenta de Cheque",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
      {
        codigoClienteBp: peticionListarCuentaCliente?.codigoClienteBp || 1,
        codigoMoneda: "USD",
        cuenta: "223456789",
        descripcion: "Cuenta de Cheque",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };

  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/departamento", (req, res) => {
  const { peticionListarDepartamento } = req.body;

  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarDepartamentoColeccion: [
      {
        codigoDepartamento: "08",
        nombre: "Francisco Morazan",
        descripcion: "Francisco Morazan",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };

  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/local", (req, res) => {
  const { peticionListarLocal } = req.body;

  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarLocalColeccion: [
      {
        codigoLocal: "01",
        codigoClienteBp: 1,
        codigoMunicipio: peticionListarLocal?.codigoMunicipio || "823",
        nombre: "Gasolinera Puma",
        ubicacion: "Colonia El Chimbo",
        descripcion: "Sucursal de Gasolinera Puma",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };

  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/moneda", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarMonedaColeccion: [
      {
        codigoMoneda: "LPS",
        nombre: "LEMPIRA",
        descripcion: "Moneda Lempira",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
      {
        codigoMoneda: "DLS",
        nombre: "DOLAR",
        descripcion: "Moneda Dolar",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };

  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/municipio", (req, res) => {
  const { peticionListarMunicipio } = req.body;

  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarMunicipioColeccion: [
      {
        codigoMunicipio: "01",
        codigoDepartamento: peticionListarMunicipio?.codigoDepartamento || "08",
        nombre: "Distrito Central",
        descripcion: "Distrito Central",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };

  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/proveedor", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarProveedorColeccion: [
      {
        codigoProveedor: "1",
        nombre: "PROSEGUR",
        descripcion:
          "Cash Today, recolectora de efectivo para acreditacion bancaria",
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };

  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/tipo-dispositivo", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        { numeroLinea: 1, descripcionValor: "", valor: "" },
      ],
    },
    respuestaListarTipoDispositivoColeccion: [
      {
        codigoTipoDispositivo: "1",
        nombre: "SDM 100",
        descripcion: "Modelo sencillo",
        observacion: "capacidad de almacenamiento de 4000 piezas",
        campoAdicionalColeccion: [
          { numeroLinea: 1, descripcionValor: "", valor: "" },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/tipo-identificacion", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        { numeroLinea: 1, descripcionValor: "", valor: "" },
      ],
    },
    respuestaListarTipoIdentificacionColeccion: [
      {
        codigoTipoIdentificacion: 1,
        nombre: "RTN",
        descripcion: "Registro Tributario Nacional",
        campoAdicionalColeccion: [
          { numeroLinea: 1, descripcionValor: "", valor: "" },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/tipo-renta", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        { numeroLinea: 1, descripcionValor: "", valor: "" },
      ],
    },
    respuestaListarTipoServicioColeccion: [
      {
        codigoTipoRenta: "1",
        nombre: "Cliente",
        descripcion: "Tipo de renta cobrada al cliente",
        campoAdicionalColeccion: [
          { numeroLinea: 1, descripcionValor: "", valor: "" },
        ],
      },
      {
        codigoTipoRenta: "2",
        nombre: "Banco",
        descripcion: "Tipo de renta cobrada al Banco",
        campoAdicionalColeccion: [
          { numeroLinea: 1, descripcionValor: "", valor: "" },
        ],
      },
      {
        codigoTipoRenta: "3",
        nombre: "Ambos",
        descripcion: "Tipo de renta compartida entre cliente y banco",
        campoAdicionalColeccion: [
          { numeroLinea: 1, descripcionValor: "", valor: "" },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/catalogo/tipo-servicio", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        { numeroLinea: 1, descripcionValor: "", valor: "" },
      ],
    },
    respuestaListarTipoServicioColeccion: [
      {
        codigoTipoServicio: "1",
        nombre: "Acreditacion en Linea",
        descripcion: "Tipo servicio de Acreditacion en Linea",
        campoAdicionalColeccion: [
          { numeroLinea: 1, descripcionValor: "", valor: "" },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/listar/proveedor", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarProveedorPaginadoColeccion: [
      {
        numeroItem: 1,
        proveedorColeccion: {
          totalElements: 4,
          totalPages: 1,
          content: [
            {
              codigoProveedor: 1,
              nombre: "PROSEGUR",
              descripcion: "Prosegur",
              observacion: "Proveedor Cash Management",
            },
          ],
          empty: false,
          first: true,
          last: true,
          number: 0,
          numberOfElements: 4,
          pageable: {
            pageNumber: 0,
            pageSize: 5,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false,
            },
            offset: 0,
            unpaged: false,
            paged: true,
          },
          sort: {
            empty: false,
            sorted: true,
            unsorted: false,
          },
          size: 5,
        },
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/listar/cliente", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarClientePaginadoColeccion: [
      {
        numeroItem: 1,
        clienteColeccion: {
          totalElements: 4,
          totalPages: 1,
          content: [
            {
              codigoClienteBp: 1,
              tipoIdentificacion: "RTN",
              documentoIdentificacion: "08019003252404",
              codigoIbs: "507695",
              nombre: "PUMA ENERGY",
              correo: "mercadeo@pumaenergy.hn",
              descripcion: "Red de Gasolineras",
              observacion: "Socio Comercial",
              estado: "1",
            },
          ],
          empty: false,
          first: true,
          last: true,
          number: 0,
          numberOfElements: 4,
          pageable: {
            pageNumber: 0,
            pageSize: 5,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false,
            },
            offset: 0,
            unpaged: false,
            paged: true,
          },
          sort: {
            empty: false,
            sorted: true,
            unsorted: false,
          },
          size: 5,
        },
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/listar/cliente/detalle", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarClienteColeccion: [
      {
        numeroItem: 1,
        clienteColeccion: {
          codigoClienteBp: 1,
          codigoTipoIdentificacion: 1,
          nombreTipoIdentificacion: "RTN",
          documentoIdentificacion: "08019003252404",
          codigoIbs: "507695",
          codigoClienteProveedor: "123",
          nombre: "PUMA ENERGY",
          correo: "mercadeo@pumaenergy.hn",
          descripcion: "Red de Gasolineras",
          observacion: "Socio Comercial",
          moneda: "LPS",
          cuentaComision: "123456789",
          fechaAfiliacion: "2025-03-06",
          porcentajeComision: 1.0,
          correosAdicionales: [
            {
              numeroCorreo: 1,
              correo: "correo1@empresa.hn",
            },
            {
              numeroCorreo: 2,
              correo: "correo2@empresa.hn",
            },
          ],
          estado: "1",
        },
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/listar/cliente-po", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarClientePoColeccion: [
      {
        codigoClienteBp: 1,
        codigoTipoIdentificacion: 1,
        documentoIdentificacion: "08019003252404",
        codigoEibs: "507695",
        nombre: "PUMA ENERGY",
        correo: "mercadeo@pumaenergy.hn",
        descripcion: "Red de Gasolineras",
        observacion: "Socio Comercial",
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/gestion/cliente", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaGestionClienteColeccion: [
      {
        numeroItem: 1,
        tipoGestion: "01",
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/cambio-estado/cliente", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaGestionClienteColeccion: [
      {
        numeroItem: 1,
        tipoGestion: "01",
        codigoClienteBp: 1,
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/gestion/local", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaGestionLocalColeccion: [
      {
        numeroItem: 1,
        tipoGestion: "01",
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/cambio-estado/local", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaCambioEstadoLocalColeccion: [
      {
        numeroItem: 1,
        tipoGestion: "01",
        codigoLocal: 1,
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

app.post("/api/v1/backoffice/listar/local/detalle", (req, res) => {
  const response = {
    respuestaGeneral: {
      codigoTrxInterno: "111876",
      codigoPeticionUnica: "3f229a72-1c88-4445-8b16-e0ae85354fcd",
      codigoMensajeRespuesta: "00",
      descripcionMensajeRespuesta: "PROCESO EXITOSO",
      tipoMensajeRespuesta: "1",
      tipoSeveridad: "3",
      detalleTecnicoRespuesta: "Proceso Exitoso",
      accion: "PET",
      tiempoProcesamiento: "0.0026623",
      fechaRespuesta: "20241118",
      horaRespuesta: "14:24:42",
      campoAdicionalColeccion: [
        {
          numeroLinea: 1,
          descripcionValor: "",
          valor: "",
        },
      ],
    },
    respuestaListarLocalPaginadoColeccion: [
      {
        numeroItem: 1,
        codigoLocal: "01",
        nombreLocal: "Puma Santa Lucia",
        Municipio: "Santa Lucia",
        nombre: "Puma Santa Lucia",
        ubicacion: "Colonia El Chimbo",
        descripcion: "Gasolinera",
        observacion: "Gasolinera",
        estado: 1,
        mensajeRespuestaColeccion: [
          {
            numeroLinea: 1,
            codigoMensajeRespuesta: "00",
            descripcionMensajeRespuesta: "PROCESO EXITOSO",
            tipoMensajeRespuesta: "1",
            tipoSeveridad: "3",
            detalleTecnicoRespuesta: "Consulta Exitosa",
          },
        ],
        campoAdicionalColeccion: [
          {
            numeroLinea: 1,
            descripcionValor: "",
            valor: "",
          },
        ],
      },
    ],
  };
  res.status(200).json(response);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Mock Server corriendo en http://localhost:${port}`);
});
