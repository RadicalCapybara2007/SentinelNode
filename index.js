const os = require('os');

// Función flecha para convertir Bytes a Gigabytes
// Usamos 1024 ** 3 porque 1024 B = 1 KB, 1024 KB = 1 MB, 1024 MB = 1 GB
const toGB = (bytes) => (bytes / (1024 ** 3)).toFixed(2);

function checkMemory() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  console.clear(); // Limpia la terminal para que parezca un monitor real
  console.log("=== SentinelNode: Monitor de RAM ===");
  console.log(`Total: ${toGB(totalMemory)} GB`);
  console.log(`Usada: ${toGB(usedMemory)} GB`);
  console.log(`Libre: ${toGB(freeMemory)} GB`);
}

// Ejecutar la función cada 3 segundos (3000 milisegundos)
setInterval(checkMemory, 3000);
