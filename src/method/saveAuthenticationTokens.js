const saveAuthenticationTokens = (id, accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt) => {
    localStorage.setItem("u_uuid", id)
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("accessTokenExpireAt", accessTokenExpireAt)
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("refreshTokenExpireAt", refreshTokenExpireAt)
}

export default saveAuthenticationTokens;