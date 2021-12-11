import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    postsList: [
      {id: 1,
          author: "Mark",
          time: "26.09.2020",
          caption: "what the hell, you won't believe this!!!",
          image: "assets/imgs/pilt2.png",
          likeCount: 0
        },
        {id: 2,
          author: "Bob",
          time: "06.04.2020",
          caption: "hello im bob",
          image: null,
          likeCount: 0
        },
        {id: 3,
          author: "James",
          time: "08.04.2021",
          caption: "I'm James",
          image: null,
          likeCount: 0
        },
        {id: 4,
          author: "James Bond",
          time: "9.04.2021",
          caption: "James Bond",
          image: null,
          likeCount: 0
        },
        {id: 5,
          author: "Kate",
          time: "10.04.2021",
          caption: "is this JOKER?",
          image: "assets/imgs/pilt2.png",
          likeCount: 0
        },
        {id: 6,
          author: "Batman",
          time: "10.04.2021",
          caption: "no",
          image: null,
          likeCount: 0
        },
        {id: 7,
          author: "Yep",
          time: "11.04.2021",
          caption: "this is my cat, she's lovely",
          image: "assets/imgs/pilt1.png",
          likeCount: 0
        },
        {id: 8,
          author: "xpwnmanfromHELL",
          time: "11.04.2021",
          caption: "i hecking love bat man",
          image: "assets/imgs/pilt2.png",
          likeCount: 0
        },
        {id: 9,
          author: "Joosep",
          time: "11.04.2021",
          caption: "My favourite movies are Spider-Man, Spider-Man 2 and Spider-Man 3",
          image: null,
          likeCount: 0
        },
        {id: 10,
          author: "Ella",
          time: "12.04.2021",
          caption: "this is me without makeup",
          image: "assets/imgs/dp.png",
          likeCount: 0
        } 
    ]
  },
  getters: {
    postsList(state) {
      return state.postsList;
    }
  },
  mutations: {
    increment (post) {
      this.likeCount++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
});