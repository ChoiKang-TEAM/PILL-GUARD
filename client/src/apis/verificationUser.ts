import { AuthUserVerifyCodeByEmailInput } from 'src/types/interface/sign-up/signUpInterface'
import getUerApi from 'src/apis/getUser'
import { VerificationResult } from 'src/types/interface/states'

const getAuthVerifyCodeByEmail = async (
  dto: AuthUserVerifyCodeByEmailInput
): Promise<VerificationResult> => {
  try {
    const isUsed = await getUerApi.isUsedUserId(dto.userId)
    if (isUsed) return { verificationState: 'InUse' }
    else return { verifyCode: '111111', verificationState: 'Created' }
  } catch (e) {
    console.error('네트워크 통신 오류', e)
    return { verificationState: 'Error' }
  }
}

const verificationUserApi = {
  getAuthVerifyCodeByEmail,
}
export default verificationUserApi
