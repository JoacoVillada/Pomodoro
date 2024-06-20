import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ isRunning, onStart, onStop, time }) => {
  const [timeRemaining, setTimeRemaining] = useState(time);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            onStop(); // Llama a la función onStop cuando el temporizador llega a cero
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    // Reinicia el temporizador si se inicia nuevamente
    if (isRunning) {
      onStart(); // Llama a la función onStart cuando se inicia el temporizador
    }
  }, [isRunning, onStart]);

  useEffect(() => {
    // Actualiza el tiempo restante cuando el tiempo inicial cambia
    setTimeRemaining(time);
  }, [time]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <View style={styles.timerContainer}>
      <View style={styles.timer}>
        <Text style={styles.timerText}>
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default Timer;
