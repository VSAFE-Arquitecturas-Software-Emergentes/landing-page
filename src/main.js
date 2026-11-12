import './style.css';
const appUrl = import.meta.env.VITE_APP_URL || 'http://localhost:5173';
for (const link of document.querySelectorAll('.app-link')) link.href = appUrl;
const translations = {
  'Cómo funciona': 'How it works',
  'Tu información': 'Your information',
  Preguntas: 'Questions',
  'Explorar rutas': 'Explore routes',
  'Lima, a pie': 'Lima, on foot',
  'Antes de salir,': 'Before you leave,',
  'conoce tu recorrido.': 'know your way.',
  'El tiempo no lo cuenta todo. Compara tus alternativas con información sobre los incidentes reportados en el camino.':
    'Time does not tell the whole story. Compare alternatives with information about incidents reported along the way.',
  'Comparar mi recorrido': 'Compare my walk',
  'Sin crear una cuenta. Tú eliges cuándo compartir tu ubicación.':
    'No account needed. You choose when to share your location.',
  'Más contexto para decidir.': 'More context for your decision.',
  'La última palabra siempre es tuya.': 'The final choice is always yours.',
  'Una caminata. Diferentes posibilidades.': 'One walk. Different possibilities.',
  'Elige con más información': 'Choose with more information',
  'Tiempo, distancia y contexto.': 'Time, distance and context.',
  'Ilustración de recorrido': 'Route illustration',
  'Un recorrido que empieza': 'A walk that starts',
  'con una buena decisión.': 'with an informed decision.',
  'Desde elegir el destino hasta revisar un cambio en el camino, mantén el control de tu recorrido.':
    'From choosing a destination to considering a change along the way, stay in control of your walk.',
  'Elige tus puntos': 'Choose your points',
  'Define desde dónde sales y a dónde quieres llegar. Puedes ingresarlos sin compartir tu ubicación actual.':
    'Choose where to start and where to go. You can enter points without sharing your current location.',
  'Compara con contexto': 'Compare with context',
  'Revisa duración, distancia, reportes cercanos y la cobertura de la información disponible.':
    'Review duration, distance, nearby reports and the coverage of available information.',
  'Camina a tu manera': 'Walk your way',
  'Activa el recorrido para recibir alertas en la aplicación. Una alerta te informa; tú decides si cambias de ruta.':
    'Start a walk to receive alerts in the application. An alert informs you; you decide whether to change routes.',
  'Tu ubicación tiene': 'Your location has',
  'un propósito. Y un límite.': 'a purpose. And a limit.',
  'VSafe utiliza la información necesaria para el recorrido activo. Puedes detener su uso en cualquier momento.':
    'VSafe uses the information needed for an active walk. You can stop sharing it at any time.',
  'Tu historial se queda contigo': 'Your history stays with you',
  'Es optativo y se guarda en tu navegador: hasta 20 consultas durante siete días. Puedes borrarlo cuando quieras.':
    'It is optional and stays in your browser: up to 20 searches for seven days. Delete it whenever you want.',
  'Los reportes tienen contexto': 'Reports have context',
  'Un reporte de la comunidad no confirma que el hecho haya ocurrido. Siempre distinguimos observación, estimación e información insuficiente.':
    'A community report does not confirm an incident occurred. We distinguish observations, estimates and insufficient information.',
  'Las rutas no prometen seguridad': 'Routes do not promise safety',
  'Comparamos las alternativas disponibles. Las estimaciones dependen de la cobertura y vigencia de los datos.':
    'We compare available alternatives. Estimates depend on data coverage and freshness.',
  'Antes de dar el primer paso.': 'Before your first step.',
  '¿VSafe garantiza una ruta segura?': 'Does VSafe guarantee a safe route?',
  'No. VSafe ofrece contexto para comparar alternativas; ningún recorrido garantiza seguridad. Cuando no hay datos suficientes, la aplicación lo indica.':
    'No. VSafe provides context to compare alternatives; no route guarantees safety. The application tells you when information is insufficient.',
  '¿Necesito crear una cuenta?': 'Do I need an account?',
  'El MVP utiliza una sesión anónima en tu navegador. Puedes consultar rutas y contribuir con reportes sin registro.':
    'The MVP uses an anonymous browser session. Compare routes and contribute reports without registration.',
  '¿Las alertas funcionan con la aplicación cerrada?':
    'Do alerts work with the application closed?',
  'Las alertas requieren un recorrido activo y la aplicación visible y conectada. No funcionan como un servicio de emergencias.':
    'Alerts require an active walk and a visible, connected application. They are not an emergency service.',
  '¿Qué significa que esté en modo demo?': 'What does demo mode mean?',
  'Es una demostración académica con rutas, incidentes y estimaciones sintéticos. Esos datos no describen la seguridad real de Lima.':
    'It is an academic demonstration with synthetic routes, incidents and estimates. These data do not describe real-world safety in Lima.',
  'Tu siguiente paso,': 'Your next step,',
  'con más contexto.': 'with more context.',
  'Empieza por comparar un recorrido.': 'Start by comparing a walk.',
  'Explorar VSafe': 'Explore VSafe',
  'Proyecto académico de Ingeniería de Software · UPC':
    'Academic Software Engineering project · UPC',
  'Privacidad y uso de datos': 'Privacy and data use',
};
const nodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let node;
while ((node = walker.nextNode())) {
  if (
    !['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName) &&
    translations[node.textContent.replace(/\s+/g, ' ').trim()]
  )
    nodes.push([node, node.textContent]);
}
let locale = localStorage.getItem('vsafe.locale') || 'en_US';
function translate() {
  const english = locale === 'en_US';
  for (const [node, original] of nodes)
    node.textContent = english ? translations[original.replace(/\s+/g, ' ').trim()] : original;
  document.documentElement.lang = english ? 'en' : 'es';
  document.title = english
    ? 'VSafe | Before you leave, know your way'
    : 'VSafe | Antes de salir, conoce tu recorrido';
  document.querySelector('#language').textContent = english ? 'ES' : 'EN';
  document.querySelector('#language').ariaLabel = english
    ? 'Cambiar a español'
    : 'Switch to English';
  document.querySelector('nav').ariaLabel = english ? 'Main navigation' : 'Navegación principal';
  document.querySelector('.hero-map').ariaLabel = english
    ? 'Illustration of two walking alternatives. It does not represent real risk information.'
    : 'Ilustración de dos alternativas a pie. No representa información de riesgo real.';
}
document.querySelector('#language').addEventListener('click', () => {
  locale = locale === 'en_US' ? 'es_419' : 'en_US';
  localStorage.setItem('vsafe.locale', locale);
  translate();
});
translate();
