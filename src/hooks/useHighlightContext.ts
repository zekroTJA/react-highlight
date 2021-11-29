import { useContext } from 'react';
import { GlobalProps } from '../models/props';
import { HighlightContext } from '../components/Provider';

export function useHighlightContext(): GlobalProps | null {
  return useContext(HighlightContext);
}
