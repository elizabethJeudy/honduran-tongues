import { motion } from 'framer-motion';
import { Book, Globe } from 'lucide-react';

export const DictionaryHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4 mb-8"
    >
      <div className="flex items-center justify-center gap-3">
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Book className="w-10 h-10 text-primary" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Diccionario Hondureño
        </h1>
        <motion.div
          initial={{ rotate: 10 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Globe className="w-10 h-10 text-secondary" />
        </motion.div>
      </div>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Preservando las lenguas y dialectos de Honduras: desde el Caliche hasta las lenguas indígenas
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 text-sm">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
          Caliche
        </span>
        <span className="px-3 py-1 bg-ocean/10 text-ocean rounded-full">
          Miskito
        </span>
        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full">
          Garífuna
        </span>
        <span className="px-3 py-1 bg-tropical/10 text-tropical rounded-full">
          Pech
        </span>
        <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full">
          Lenca
        </span>
      </div>
    </motion.div>
  );
};
