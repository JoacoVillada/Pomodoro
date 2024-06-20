import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Tabs from "../components/tabs";
import Timer from "../components/timer";
import Buttons from "../components/button";

const Main = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeRunning, setTimeRunning] = useState(1500); // Tiempo inicial del temporizador en segundos

  const [backgroundColor, setBackgroundColor] = useState("#E1342E"); // Color de fondo inicial

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleTabChange = (tab) => {
    if (tab === "Pomodoro") {
      setTimeRunning(1500); // 25 minutos en segundos
      setBackgroundColor("#E1342E");
    } else if (tab === "Short Break") {
      setTimeRunning(300); // 5 minutos en segundos
      setBackgroundColor("#4F4FE0");
    } else if (tab === "Long Break") {
      setTimeRunning(600); // 10 minutos en segundos
      setBackgroundColor("#48E149");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Sección superior: Pestañas */}
      <Tabs onTabChange={handleTabChange} />

      {/* Sección central: Temporizador */}
      <Timer
        isRunning={isRunning}
        time={timeRunning}
        onStart={handleStart}
        onStop={handleStop}
      />

      {/* Sección inferior: Botones de Start y Stop */}
      <Buttons onStart={handleStart} onStop={handleStop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1342E",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
});

export default Main;
