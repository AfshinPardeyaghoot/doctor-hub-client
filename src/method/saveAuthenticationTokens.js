const saveAuthenticationTokens = (accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt) => {
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("accessTokenExpireAt", accessTokenExpireAt)
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("refreshTokenExpireAt", refreshTokenExpireAt)
}

export default saveAuthenticationTokens;