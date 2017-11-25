import {createLogic} from 'redux-logic';
import axios from 'axios';

const homeLogic = createLogic({
    type: 'ADDWORD_TRANSLATION', // only apply this logic to this type
    latest: true, // only take latest
    async process({
        getState,
        action
    }, dispatch, done) {
      const { hanzi, pinyin, translation } = action.payload;
      console.warn(action.payload)

const query = `
mutation($hanzi: String, $pinyin: String, $translation: String) {
  addWord (input: {
    hanzi: $hanzi,
    pinyin: $pinyin,
    translation: $translation,
    userId: 1
  }) {
    clientMutationId
  }
}
`
      try {
        const result = await axios.post('http://106.14.4.255:3000/graphql', {
          query,
          variables: {
            hanzi,
            pinyin,
            translation
          }
        })
        console.log(result);


        dispatch({
          type: 'ADDWORD_SET_STATE',
          payload: {
            hanzi: '',
            pinyin: '',
            translation: '',
            showThankyou: true
          }
        })

        setTimeout(function(){
          dispatch({
            type: 'ADDWORD_SET_STATE',
            payload: {
              showThankyou: false
            }
          })
        },2000)

      } catch (error){
        console.warn(error);
      }



    }
});

export default[homeLogic];