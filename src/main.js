import { initEditor } from './ui/editor.js'
import { loadMetadata } from './core/validator.js'

async function initApp() {
  // 加载函数元数据
  const metadata = await loadMetadata()
  
  // 初始化编辑器
  const editor = initEditor(document.getElementById('editor-container'), {
    formula: '=SUM(A1:A10)',
    definedNames: {
      TaxRate: 0.08
    },
    metadata
  })

  // 错误显示处理
  editor.onDiagnostics((errors) => {
    const panel = document.getElementById('error-panel')
    panel.innerHTML = errors.map(error => `
      <div class="error-item error-${error.level}" data-pos="${error.position}">
        <strong>${error.level === 'fatal' ? '❌' : '⚠️'} ${error.message}</strong>
        ${error.suggestion ? `<p>${error.suggestion}</p>` : ''}
      </div>
    `).join('')
  })
}

document.addEventListener('DOMContentLoaded', initApp)
