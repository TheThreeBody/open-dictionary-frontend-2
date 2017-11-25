import {createLogic} from 'redux-logic';
import axios from 'axios';

const reviewWord = createLogic({
    type: 'REVIEW_TRANSLATION', // only apply this logic to this type
    latest: true, // only take latest
    async process({
        getState,
        action
    }, dispatch, done) {

const query = `
query {
  allTranslations(first: 100) {
    nodes {
      english,
      hanzi,
      pinyin
    }
  }
}
`
      try {
        const result = await axios.post('http://106.14.4.255:3000/graphql', {
          query
        })
        console.log(result.data.data.allTranslations.nodes);
      } catch (error){
        console.warn(error);
      }
    }
});


const rejectWord = createLogic({
    type: 'REVIEW_REJECT', // only apply this logic to this type
    latest: true, // only take latest
    async process({
        getState,
        action
    }, dispatch, done) {
      const { translationId } = action.payload;
    const query = `
    mutation {
      reviewTranslation (input: {
        translationId: ${translationId},
        status: -1
      }) {
        clientMutationId
      }
    }
    `
      try {
        const result = await axios.post('http://106.14.4.255:3000/graphql', {
          query
        })
        console.warn('reject success')
        // console.log(result.data.data.allTranslations.nodes);
      } catch (error){
        console.warn(error);
      }
    }
});

const approveWord = createLogic({
    type: 'REVIEW_APPROVE', // only apply this logic to this type
    latest: true, // only take latest
    async process({
        getState,
        action
    }, dispatch, done) {
      const { translationId } = action.payload;
    const query = `
    mutation {
      reviewTranslation (input: {
        translationId: ${translationId},
        status: 2
      }) {
        clientMutationId
      }
    }
    `
      try {
        const result = await axios.post('http://106.14.4.255:3000/graphql', {
          query
        })
        console.warn('approve success')
        // console.log(result.data.data.allTranslations.nodes);
      } catch (error){
        console.warn(error);
      }
    }
});


export default[reviewWord, rejectWord, approveWord];

