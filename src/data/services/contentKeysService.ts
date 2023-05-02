// import { ContentKeyModel } from '../models/contentkey'
// import { connect, disconnect } from '../utils'

// export const getContentKeysFromDB = async (page: string) => {
//   await connect()
//   try {
//     const query = ContentKeyModel.where({ page_name: String(page) })
//     const data = await query.findOne()
//     return data
//   } catch (error) {
//   } finally {
//     await disconnect()
//   }
// }
