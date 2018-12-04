module.exports = async (app) => {
  const email = 'antonio.trapani@gmail.com'
  const password = 'password'

  const member = await app.models.Member.create({ email, password })
  const role = await app.models.Role.create({ name: 'Member' })

  await role.principals.create({
    principalType: 'Member',
    principalId: member.id
  })
}
