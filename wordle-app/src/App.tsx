import React from "react";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./auth/Context/userProvider";
import { AppRouter } from "./routers/AppRouter";
import "./App.css";
import "./auth/firebase/firebase";
import { QueryClient, QueryClientProvider } from "react-query";
import "animate.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster />
        <AppRouter />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
