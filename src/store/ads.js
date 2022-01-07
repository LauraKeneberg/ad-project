export default {
	state: {
        ads:[
			{
				title:"First",
				desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
				id:"1"
			},
			{
				title:"Second",
				desc:"Second Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
				id:"2"
			},
			{
				title:"Third",
				desc:"Thitd Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
				id:"3"
			},
			{
				title:"Fouth",
				desc:"Fouth Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
				id:"4"
			}

		]
    },
	mutations: {
		createAd(state, payload){
			state.ads.push(payload)
		}
	},
	actions: {
		createAd({commit},payload){
			payload.id = Math.random()
			commit('createAd', payload)
		}
	},
	getters: {
        ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state) {
			return state.ads
        },
        adById(state) {
            return id => {
            return state.ads.find(ad => ad.id == id)
            }
        }     
	}
}