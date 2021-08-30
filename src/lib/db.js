import { createClient } from '@supabase/supabase-js'
import { writable } from 'svelte/store'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

const userStore = writable(supabase.auth.currentUser)

supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') {
    userStore.set(session.user)
  } else if (event == 'SIGNED_OUT') {
    userStore.set(null)
  }
})

export default {
  get user() {
    return userStore
  },
  signIn(email) {
    return supabase.auth.signIn({email})
  },
  signOut() {
    return supabase.auth.signOut()
  },
}
