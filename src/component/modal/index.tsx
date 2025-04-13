'use client';

import { useEffect } from 'react';

import { Portal } from '../portal';
import { ChildrenProps } from '../types';

interface IModalProps {
  isOpen: boolean;
  setClose: () => void;
}

export const Modal = ({ isOpen, children }: ChildrenProps<IModalProps>) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '8px';
    }

    return () => {
      document.body.style.removeProperty('overflow');
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <Portal opened={isOpen}>
      <div className="fixed inset-0 z-[997] bg-slate-400 opacity-50" />

      <div className="fixed top-1/2 left-1/2 z-[998] -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </Portal>
  );
};
