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
          image: "assets/imgs/pilt2.JPG"
        },
        {id: 2,
          author: "Bob",
          time: "06.04.2020",
          caption: "hello im bob",
          image: null
        },
        {id: 3,
          author: "James",
          time: "08.04.2021",
          caption: "I'm James",
          image: null
        },
        {id: 4,
          author: "James Bond",
          time: "9.04.2021",
          caption: "James Bond",
          image: null
        },
        {id: 5,
          author: "Kate",
          time: "10.04.2021",
          caption: "is this JOKER?",
          image: "assets/imgs/pilt2.JPG"
        },
        {id: 6,
          author: "Batman",
          time: "10.04.2021",
          caption: "no",
          image: null
        },
        {id: 7,
          author: "Yep",
          time: "11.04.2021",
          caption: "this is my cat, she's lovely",
          image: "assets/imgs/pilt1.JPG"
        },
        {id: 8,
          author: "xpwnmanfromHELL",
          time: "11.04.2021",
          caption: "i hecking love bat man",
          image: "assets/imgs/pilt2.JPG"
        },
        {id: 9,
          author: "Joosep",
          time: "11.04.2021",
          caption: "My favourite movies are Spider-Man, Spider-Man 2 and Spider-Man 3",
          image: null
        },
        {id: 10,
          author: "Ella",
          time: "12.04.2021",
          caption: "this is me without makeup",
          image: "assets/imgs/dp.JPG"
        } 
    ]
  },
  getters: {
    postsList(state) {
      return state.postsList;
    }
  }
});