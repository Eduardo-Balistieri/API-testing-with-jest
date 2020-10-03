const axios = require('axios')


it('Should create a company', async () => {
    const responseStatus = await axios.post('http://localhost:9090/companies', {
        company: 'testCompany',
        country: 'usa'
    })
        .then(res => res.status)

    expect(responseStatus).toEqual(201)
})


it('Should return an error', async () => {
    const responseStatus = await axios.post('http://localhost:9090/companies', {
        company: null,
        country: 'usa'
    })
        .catch(err => err.response.status)

    expect(responseStatus).toEqual(400)
})


it('Should return an error', async () => {
    const responseStatus = await axios.post('http://localhost:9090/companies', {
        company: ' ',
        country: 'usa'
    })
        .catch(err => err.response.data.error)

    expect(responseStatus).toEqual('Missing user information')
})
