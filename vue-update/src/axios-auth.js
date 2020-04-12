import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vue-update-fdb9e.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'
export default instance