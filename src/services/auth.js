export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("hoda_auth")
    ? JSON.parse(window.localStorage.getItem("hoda_auth"))
    : {}
const setUser = user =>
  window.localStorage.setItem("hoda_auth", JSON.stringify(user))
export const handleLogin = ({ password }) => {
  if (password === `hodadesign21`) {
    return setUser({
      authenticated: true,
    })
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.authenticated
}
export const logout = callback => {
  setUser({})
  callback()
}
