// Couche d'accès aux données — demandes du formulaire commercial.
//
// Même logique que src/lib/db.js dans le projet SAV : les fonctions sont
// asynchrones, passent par des fonctions Postgres restreintes (RPC) pour
// que le formulaire public ne puisse jamais lire/écrire la table
// directement — tout est verrouillé côté serveur par les policies RLS
// (voir supabase-schema.sql).

import { supabase } from './supabaseClient.js'

export const STATUS = {
  NOUVEAU: 'nouveau',
  EN_COURS: 'en_cours',
  TRAITE: 'traite',
  CLOTURE: 'cloture',
}

export const STATUS_LABELS = {
  [STATUS.NOUVEAU]: 'Demande reçue',
  [STATUS.EN_COURS]: 'Prise en charge par le service commercial',
  [STATUS.TRAITE]: 'Traitée',
  [STATUS.CLOTURE]: 'Dossier clôturé',
}

export const STATUS_ORDER = [
  STATUS.NOUVEAU,
  STATUS.EN_COURS,
  STATUS.TRAITE,
  STATUS.CLOTURE,
]

function mapRow(row) {
  if (!row || !row.code) return null
  return {
    code: row.code,
    client: row.client,
    sujet: row.sujet,
    message: row.message,
    status: row.status,
    closed: row.closed,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    history: row.history || [],
  }
}

// --- Public (formulaire de contact commercial) ---------------------------

export async function createCommercialRequest({ client, sujet, message }) {
  const { data, error } = await supabase.rpc('create_commercial_request', {
    p_client: client,
    p_sujet: sujet,
    p_message: message,
  })
  if (error) throw error
  return mapRow(data)
}

export async function getCommercialRequestByCode(code) {
  const { data, error } = await supabase.rpc('get_commercial_request_by_code', {
    p_code: code,
  })
  if (error) throw error
  return mapRow(data)
}

// --- Équipe commerciale (nécessite une session authentifiée, imposé par la RLS) ---

export async function listCommercialRequests() {
  const { data, error } = await supabase
    .from('commercial_requests')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data || []).map(mapRow)
}

export async function closeCommercialRequest(code, note) {
  return updateCommercialRequestStatus(code, STATUS.CLOTURE, note || 'Dossier clôturé.')
}

export async function updateCommercialRequestStatus(code, status, note) {
  const { data: current, error: fetchError } = await supabase
    .from('commercial_requests')
    .select('history')
    .eq('code', code)
    .single()
  if (fetchError) throw fetchError

  const now = new Date().toISOString()
  const newHistory = [
    ...(current?.history || []),
    { status, date: now, note: note || STATUS_LABELS[status] },
  ]

  const { data, error } = await supabase
    .from('commercial_requests')
    .update({
      status,
      updated_at: now,
      closed: status === STATUS.CLOTURE,
      history: newHistory,
    })
    .eq('code', code)
    .select()
    .single()
  if (error) throw error
  return mapRow(data)
}