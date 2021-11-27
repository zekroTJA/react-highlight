import { GlobalProps } from '../../models/props';
import { createContext } from 'react';

export const HighlightContext = createContext<GlobalProps | null>(null);

type Props = GlobalProps;

export const Provider: React.FC<Props> = ({ children, ...props }) => {
  return (
    <HighlightContext.Provider value={props}>
      {children}
    </HighlightContext.Provider>
  );
};
