export const manualChunks = (id: string): string | undefined => {
  if (!id.includes('node_modules')) return;

  const parts = id.split('node_modules/')[1]?.split('/');
  if (!parts || parts.length === 0) return;

  // Обработка .pnpm или обычных путей
  if (parts[0] === '.pnpm') {
    const realName = parts[1];
    if (!realName) return;
    // .pnpm может иметь формат @scope+pkg@ver, нужно отделить по +
    const name = realName.split('+')[0];
    return name.replace(/@/g, '_'); // Например: @vitejs_plugin-vue → _vitejs_plugin-vue
  }

  // Обычный пакет или scoped-пакет
  const name = parts[0].startsWith('@') && parts[1] ? `${parts[0]}/${parts[1]}` : parts[0];

  return name;
};
