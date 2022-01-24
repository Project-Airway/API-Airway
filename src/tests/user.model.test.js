// const User = require ( '../models/userSchema' )
// const router = require('../routes/users')
import hashPassword from '../routes/users'

describe ( "User Password Authentication", () => {
    // test cases
    it("should generate the same hash given the same password text and salt", async () => {
        try {
          let hash = await hashPassword("saqheeb21")
          expect(hash).toEqual(hashPassword("saqheeb"))
        }
        catch (err) {
          throw new Error(err)
        }
      })
})