import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Alert, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExpenseItem from "../components/ExpenseItem";

const dataDemo = [
  { id: "1", title: "Mua cà phê", amount: -25000, createdAt: "08/11/2025", type: "Chi" },
  { id: "2", title: "Lương tháng", amount: 7000000, createdAt: "01/11/2025", type: "Thu" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>EXPENSE TRACKER</Text>
      <FlatList
        data={dataDemo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            createdAt={item.createdAt}
            type={item.type}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  content:{margin:10}
});
