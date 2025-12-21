#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function flattenKeys(obj, prefix = '') {
  const keys = []
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const k of Object.keys(obj)) {
      const val = obj[k]
      const next = prefix ? `${prefix}.${k}` : k
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        keys.push(...flattenKeys(val, next))
      } else {
        // For primitives or arrays, include the key
        keys.push(next)
      }
    }
  } else {
    // Not an object: nothing to flatten
  }
  return keys
}

function readLocaleFiles(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
  const data = {}
  for (const file of files) {
    const full = path.join(dir, file)
    try {
      const raw = fs.readFileSync(full, 'utf8')
      data[file] = JSON.parse(raw)
    } catch (err) {
      console.error(`Erreur lecture ${file}:`, err.message)
      process.exit(2)
    }
  }
  return data
}

function main() {
  const repoRoot = path.resolve(__dirname, '..')
  const localesDir = path.join(repoRoot, 'src', 'locales')
  if (!fs.existsSync(localesDir)) {
    console.error('Dossier des locales introuvable:', localesDir)
    process.exit(2)
  }

  const locales = readLocaleFiles(localesDir)
  const localeKeys = {}
  const allKeys = new Set()

  for (const [file, obj] of Object.entries(locales)) {
    const keys = flattenKeys(obj)
    const set = new Set(keys)
    localeKeys[file] = set
    keys.forEach(k => allKeys.add(k))
  }

  let missing = false
  console.log('Locales trouvées:', Object.keys(locales).join(', '))
  console.log('Total clés union:', allKeys.size)
  console.log('---')

  for (const file of Object.keys(locales)) {
    const set = localeKeys[file]
    const missingKeys = [...allKeys].filter(k => !set.has(k))
    if (missingKeys.length) {
      missing = true
      console.log(`Fichier ${file} — clés manquantes: ${missingKeys.length}`)
      missingKeys.forEach(k => console.log('  -', k))
      console.log('')
    } else {
      console.log(`Fichier ${file} — OK (aucune clé manquante)`)
    }
  }

  if (missing) {
    console.log('Vérification terminée — traductions manquantes détectées.')
    process.exitCode = 1
  } else {
    console.log('Vérification terminée — toutes les clés sont présentes dans chaque locale.')
    process.exitCode = 0
  }
}

if (require.main === module) main()
