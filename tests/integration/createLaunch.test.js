const axios = require('axios')


it('Should create a launch', async () => {
    const responseStatus = await axios.post('http://localhost:9090/launches', {
        year: 2016,
        success: 20,
        failed: 10,
        companyName: 'spaceX'
    })
        .then(res => res.status)

    expect(responseStatus).toEqual(201)
})


it('Should return an error', async () => {
    const responseStatus = await axios.post('http://localhost:9090/launches', {
        year: 2020,
        success: 5,
        failed: 15,
        companyName: 'company that doesn\'t exists'
    })
        .catch(err => err.response.status)

    expect(responseStatus).toEqual(400)
})