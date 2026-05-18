'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/components/Toast';
import VideoModal from '@/components/VideoModal';

interface AppContextType {
  cartCount: number;
  addToCart: () => void;
  isVideoModalOpen: boolean;
  openVideoModal: () => void;
  closeVideoModal: () => void;
  showToast: (message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const addToCart = () => setCartCount((prev) => prev + 1);
  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ cartCount, addToCart, isVideoModalOpen, openVideoModal, closeVideoModal, showToast }}>
      {children}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppContextProvider');
  }
  return context;
}
