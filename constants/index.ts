export default Object.freeze({
  RET_CONTEXT_TTL: 'PT30S',
  RET_CONTEXT_ACTION: 'action',
  DB_PATH: 'dbfiles',
  RET_SEARCH: 'search',
  RET_ONSEARCH: 'on_search',
  RET_SELECT: 'select',
  RET_ONSELECT: 'on_select',
  RET_INIT: 'init',
  RET_ONINIT: 'on_init',
  RET_CONFIRM: 'confirm',
  RET_ONCONFIRM: 'on_confirm',
  RET_TRACK: 'track',
  RET_ONTRACK: 'on_track',
  RET_CANCEL: 'cancel',
  RET_ONCANCEL: 'on_cancel',
  RET_UPDATE: 'update',
  RET_ONUPDATE: 'on_update',
  RET_STATUS: 'status',
  RET_ONSTATUS: 'on_status',
  RET_SUPPORT: 'support',
  RET_ONSUPPORT: 'on_support',
  DECIMAL_PRECISION: 6,
})

export const ApiSequence = {
  SEARCH: 'search_full_catalog_refresh',
  ON_SEARCH: 'on_search_full_catalog_refresh',
  INC_SEARCH: 'search_inc_refresh',
  INC_ONSEARCH: 'on_search_inc_refresh',
  SELECT: 'select',
  ON_SELECT: 'on_select',
  INIT: 'init',
  ON_INIT: 'on_init',
  CONFIRM: 'confirm',
  ON_CONFIRM: 'on_confirm',
  CANCEL: 'cancel',
  ON_CANCEL: 'on_cancel',
  TRACK: 'track',
  ON_TRACK: 'on_track',
  STATUS: 'status',
  ON_STATUS: 'on_status',
  UPDATE: 'update',
  ON_UPDATE: 'on_update',
}

export const actionsArray = [
  'search',
  'on_search',
  'select',
  'on_select',
  'init',
  'on_init',
  'confirm',
  'on_confirm',
  'update',
  'on_update',
  'cancel',
  'on_cancel',
  'track',
  'on_track',
  'status',
  'on_status',
]

export const statusArray = [
  'Pending',
  'Packed',
  'Agent-assigned',
  'Order-picked-up',
  'Out-for-delivery',
  'Order-delivered',
  'Cancelled',
]

export const buyerCancellationRid = new Set(['001', '003', '006', '009', '010'])
