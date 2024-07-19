import React, { useState } from "react";
import InputFormat from "../../Ejercicio14/ui/InputFormat";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import CardWeather from "./CardWeather";
import { getWeatherData } from "../api/weather";

const FormWeather = () => {
  const [dataLocationCountry, setDataLocationCountry] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
    reset,
  } = useForm();

  const {
    isLoading,
    data: weather,
    isError,
    error,
  } = useQuery({
    queryKey: dataLocationCountry,
    queryFn: () => getWeatherData(dataLocationCountry),
    enabled: !!dataLocationCountry, // Habilita la consulta solo si hay una queryKey
  });

  const handleSubmit = (data) => {
    setDataLocationCountry({ city: data.city, country: data.country });
    reset();
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <InputFormat
          name="city"
          label="City"
          register={register}
          options={{
            required: {
              value: true,
              message: "City is required",
            },
            minLength: {
              value: 3,
              message: "City must be at least 3 characters",
            },
          }}
        />
        {errors.city && <p>{errors.city.message}</p>}

        <InputFormat
          name="country"
          label="Country"
          register={register}
          options={{
            required: {
              value: true,
              message: "Country is required",
            },
            minLength: {
              value: 2,
              message: "Country must be at least 2 characters",
            },
          }}
        />
        {errors.country && <p>{errors.country.message}</p>}

        <button type="submit">Enviar</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>hubo un error</p>}
      {weather && <CardWeather data={weather} />}
    </div>
  );
};

export default FormWeather;
