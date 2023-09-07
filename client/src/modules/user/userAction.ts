import { getUser } from 'apis/getUser'
import { User } from 'types/interface/user'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'users/fetch',
  async (loginDto: User) => {
    const res = await getUser(loginDto)
    const data = { user: { ...loginDto }, token: res }

    return data
  }
)
