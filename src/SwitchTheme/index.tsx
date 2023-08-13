import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./SwitchTheme.css";

interface SwitchThemeProps {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ isOn, setIsOn }) => {

  
  return (
    <div className='sticky top-6 ml-6 z-40 sm:ml-5'>
      <div 
      className='switch-container absolute z-50'
      >
        <div 
          className={`theme-switch`} 
          
          onClick={() => setIsOn(!isOn)}
          style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
        >
          <motion.div layout className="theme-switch-knob">
            <AnimatePresence mode='wait' initial={false}>
              <motion.i
                className={`theme-icon far fa-${isOn ? 'moon' : 'sun'}`}
                key={isOn ? 'moon' : 'sun'}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }} 
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

    </div>
  );
}

export default SwitchTheme;
