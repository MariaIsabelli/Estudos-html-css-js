var app = new Vue({
	el: '#app',
	methods: {
		shortenName (name) {
			return name.length > 9 ? `${name.slice(0, 8)}...` : name
		},
		likePost (post) {
			if (post.likedByYou) {
				post.likes--
			} else {
				post.likes++
			}
			post.likedByYou = !post.likedByYou
		}
	},
	data: {
		contacts: [
			{
				name: 'michael_v32',
				photo: 'https://randomuser.me/api/portraits/men/28.jpg',
				hasUnreadStory: true
			},
			{
				name: 'weronika_B',
				photo: 'https://randomuser.me/api/portraits/women/28.jpg',
				hasUnreadStory: true
			},
			{
				name: 't.reasure.',
				photo: 'https://randomuser.me/api/portraits/women/18.jpg',
				hasUnreadStory: true
			},
			{
				name: 'silver&gold',
				photo: 'https://randomuser.me/api/portraits/women/48.jpg',
				hasUnreadStory: false
			},
			{
				name: 'anotherKiss',
				photo: 'https://randomuser.me/api/portraits/women/79.jpg',
				hasUnreadStory: false
			},
			{
				name: 'insane-6',
				photo: 'https://randomuser.me/api/portraits/men/81.jpg',
				hasUnreadStory: false
			},
			{
				name: 'fr33d0m',
				photo: 'https://randomuser.me/api/portraits/men/49.jpg',
				hasUnreadStory: false
			},
			{
				name: 'soul_rider',
				photo: 'https://randomuser.me/api/portraits/men/18.jpg',
				hasUnreadStory: false
			},
			{
				name: 'edge_danger',
				photo: 'https://randomuser.me/api/portraits/men/8.jpg',
				hasUnreadStory: false
			},
			{
				name: 'the-west-is-the-best',
				photo: 'https://randomuser.me/api/portraits/men/9.jpg',
				hasUnreadStory: false
			},
			{
				name: 'thesnake-is-old-and-his-skin-is-cold',
				photo: 'https://randomuser.me/api/portraits/women/3.jpg',
				hasUnreadStory: false
			},
			{
				name: 'heputhisb00bson',
				photo: 'https://randomuser.me/api/portraits/men/29.jpg',
				hasUnreadStory: false
			},
			{
				name: 'comeonbabetakeachancewithus',
				photo: 'https://randomuser.me/api/portraits/men/34.jpg',
				hasUnreadStory: false
			},
			{
				name: 'bal00n',
				photo: 'https://randomuser.me/api/portraits/men/1.jpg',
				hasUnreadStory: false
			},
			{
				name: 'baking_is_fuun',
				photo: 'https://randomuser.me/api/portraits/women/5.jpg',
				hasUnreadStory: false
			}
		],
		feed: [
			{
				author: {
					name: 'netguru',
					photo: 'https://instagram.fwaw3-2.fna.fbcdn.net/vp/a489a23eb14317227a15a7fbf8bb1671/5D647330/t51.2885-19/s150x150/38775245_224722018225658_3752025009640439808_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net',
					location: 'Rewa, Poland'
				},
				type: 'photo',
				photos: [
					'https://instagram.fwaw3-2.fna.fbcdn.net/vp/874cb38a877b5092a9c0d016f9f97a1b/5D6C88E6/t51.2885-15/sh0.08/e35/s640x640/57395919_2277400519008581_5617677146431218912_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net 640w,https://instagram.fwaw3-2.fna.fbcdn.net/vp/36f118585ea3cfee518d2de4578e03e9/5D690522/t51.2885-15/sh0.08/e35/s750x750/57395919_2277400519008581_5617677146431218912_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net 750w,https://instagram.fwaw3-2.fna.fbcdn.net/vp/6c54cdb157e510541106b129bfc6e125/5D55AA5C/t51.2885-15/e35/57395919_2277400519008581_5617677146431218912_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net 1080w'
				],
				likes: 74,
				likedByYou: false,
				saved: false,
				photoDescription: 'Photo might contain: sand, one person, a laptop, sea, windsurfers',
				description: `Mondays don't have to be rough, and your mood can actually be awesome... 🤩
					Especially when, just like Marika, you can start your day on a sunny beach. 😎🏖️`,
				tags: ['monday', 'remotework', 'remoteworking', 'chill', 'beach', 'fun', 'balticsea', 'netguru', 'netguruteam', 'joinnetguru'],
				comments: [
					{
						author: 'michael_brown',
						content: 'Hey thanks for this wicked post! hope you have an awesome day 😄'
					}
				],
				time: '2 hours ago'
			},
			{
				author: {
					name: 'miko.marczuk',
					photo: 'https://instagram.fktw1-1.fna.fbcdn.net/vp/f19111dc713d2f542d0201c649e67bd7/5D55CB8A/t51.2885-19/s320x320/56386618_411061763052881_2242828314198671360_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net',
					location: 'Kraków, Poland'
				},
				type: 'photo',
				photos: [
					'https://instagram.fktw1-1.fna.fbcdn.net/vp/4640b09731852d28ac690fda47b4a379/5D75C1C0/t51.2885-15/sh0.08/e35/p640x640/56337565_2465223083496815_806448896143094669_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net 640w,https://instagram.fktw1-1.fna.fbcdn.net/vp/f259cdca71e6650fbea32c38f3f25582/5D67EDC0/t51.2885-15/sh0.08/e35/p750x750/56337565_2465223083496815_806448896143094669_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net 750w,https://instagram.fktw1-1.fna.fbcdn.net/vp/aa45774d2ba46f3382a72a858c616255/5D738236/t51.2885-15/e35/56337565_2465223083496815_806448896143094669_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net 1080w'
				],
				likes: 95472,
				likedByYou: false,
				saved: false,
				photoDescription: 'Photo might contain: a half-naked slavic girl, the sky',
				description: `.`,
				tags: ['vscocam', 'city', 'sunset', 'girl', 'sky', 'vscopoland'],
				comments: [
					{
						author: 'asia_skowronek',
						content: 'piękna i powabna! ale schowaj te cycuchy'
					},
					{
						author: 'marry.hecry',
						content: 'this is bold'
					},
					{
						author: 'fancy.moon',
						content: 'OHH MY...'
					}
				],
				time: '19 April'
			},
			{
				author: {
					name: 'developers_team',
					photo: 'https://instagram.fktw1-1.fna.fbcdn.net/vp/8f0aaaa128869d86ee3657fc3b641f27/5D779790/t51.2885-19/s150x150/20838301_1915234258688325_4142410044761178112_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net',
					location: ''
				},
				type: 'photo',
				photos: [
					'https://instagram.fktw1-1.fna.fbcdn.net/vp/8dfcdb92fd94dd485644340e3479d661/5D55CDCF/t51.2885-15/sh0.08/e35/s640x640/58409997_329723847688239_3802490859023729141_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net 640w,https://instagram.fktw1-1.fna.fbcdn.net/vp/cb7b8b9bd0bc9a75db32d9a0e42dee39/5D5261CF/t51.2885-15/sh0.08/e35/s750x750/58409997_329723847688239_3802490859023729141_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net 750w,https://instagram.fktw1-1.fna.fbcdn.net/vp/f9ca3f0ded69fab48af4dbb3ee0fce93/5D73B92A/t51.2885-15/e35/58409997_329723847688239_3802490859023729141_n.jpg?_nc_ht=instagram.fktw1-1.fna.fbcdn.net 1080w'
				],
				likes: 2,
				likedByYou: false,
				saved: false,
				photoDescription: 'Photo contains a meme which reads: admin: sharing a funny pic about technology VS derpina: selfie at the beach. 2 likes VS 95472 likes',
				description: `Toooootally agree 😔`,
				tags: ['coder', 'programmer', 'geek', 'gamer', 'nerd', 'programming', 'developers', 'helloworld'],
				comments: [
					{
						author: 'nesser.zled',
						content: 'True..'
					}
				],
				time: '17 April'
			},
			{
				author: {
					name: 'codeismylife',
					photo: 'https://instagram.fwaw3-2.fna.fbcdn.net/vp/464d2cd4fdd98c372d7c1bccfcdcf4e9/5D618AFD/t51.2885-19/43985648_565194763910219_6582336242124324864_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net',
					location: ''
				},
				type: 'photo',
				photos: [
					'https://instagram.fwaw3-2.fna.fbcdn.net/vp/97e41b2d1f6798e71fa65c9258938ff3/5D6414F3/t51.2885-15/sh0.08/e35/p640x640/57598462_116204122911643_7057542971644629628_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net 640w,https://instagram.fwaw3-2.fna.fbcdn.net/vp/722aefc09b133d3cf8c765eb707a2f35/5D5DBBF3/t51.2885-15/sh0.08/e35/p750x750/57598462_116204122911643_7057542971644629628_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net 750w,https://instagram.fwaw3-2.fna.fbcdn.net/vp/967268ca003e73783a78dd55a20be24b/5D56DA05/t51.2885-15/e35/57598462_116204122911643_7057542971644629628_n.jpg?_nc_ht=instagram.fwaw3-2.fna.fbcdn.net 1080w'
				],
				likes: 1628,
				likedByYou: false,
				saved: false,
				photoDescription: 'Photo contains a meme which reads: - daaad? -yes, son? - why do we have two controllers and only one car on the screen?',
				description: `TAG A FRIEND 😂😂😂`,
				tags: ['coder', 'webdesigner', 'developer', 'codehumour', 'programmer', 'geek', 'gamer', 'nerd', 'programming', 'developers', 'helloworld'],
				comments: [
					{
						author: 'cryptis.stu',
						content: 'ahahhah'
					}
				],
				time: '13 April'
			},
			{
				author: {
					name: 'europeanspaceagency',
					photo: 'https://instagram.fwaw3-1.fna.fbcdn.net/vp/d9e5916bf4199d93858bf5f6dd077b0a/5D652D8C/t51.2885-19/11410504_1458639284448407_1494045846_a.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net',
					location: 'Messier 75'
				},
				type: 'photo',
				photos: [
					'https://instagram.fwaw3-1.fna.fbcdn.net/vp/35a6d474ed9d3ea062c69bbe82e34a3a/5D5490C9/t51.2885-15/sh0.08/e35/s640x640/57015752_436338693767234_4436090706832107133_n.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net 640w,https://instagram.fwaw3-1.fna.fbcdn.net/vp/fd8a6b01b9baf014ff77b269e3a884fc/5D6228C9/t51.2885-15/sh0.08/e35/s750x750/57015752_436338693767234_4436090706832107133_n.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net 750w,https://instagram.fwaw3-1.fna.fbcdn.net/vp/fc4cd35e3116d48ebf72840b2e8c5868/5D51222C/t51.2885-15/e35/57015752_436338693767234_4436090706832107133_n.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net 1080w'
				],
				likes: 14380,
				likedByYou: false,
				saved: false,
				photoDescription: 'Photo might contain: universe, stars, galaxy, dark sky',
				description: `Hubble time! 🌌`,
				tags: ['hubble', 'spaceagency', 'european', 'milkyway', 'galaxy', 'cosmos', 'universe', 'telescope', 'truelove'],
				comments: [
					{
						author: 'chat_malho',
						content: 'Someone just sneezed on the telescope'
					},
					{
						author: 'wereher',
						content: '❤️❤️❤️'
					}
				],
				time: '2 days ago'
			},
			{
				author: {
					name: 'dinosaurearth',
					photo: 'https://instagram.fwaw3-1.fna.fbcdn.net/vp/b29d343128f9cd8c6fa1fee1854e68fe/5D59A7BB/t51.2885-19/s150x150/57156408_424490681661214_7772051460245684224_n.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net',
					location: ''
				},
				type: 'photo',
				photos: [
					'https://instagram.fwaw3-1.fna.fbcdn.net/vp/19b1d853982c7bd34ea19091d432b74a/5D75ECB9/t51.2885-15/sh0.08/e35/s640x640/57156520_416243038933095_4029537643310287830_n.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net 640w,https://instagram.fwaw3-1.fna.fbcdn.net/vp/cca2734b670381af1e58cfb8170ed9a7/5D6FE9B9/t51.2885-15/sh0.08/e35/s750x750/57156520_416243038933095_4029537643310287830_n.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net 750w,https://instagram.fwaw3-1.fna.fbcdn.net/vp/e37054a33022b2e7149f6c0bb8c5356b/5D6C145C/t51.2885-15/e35/57156520_416243038933095_4029537643310287830_n.jpg?_nc_ht=instagram.fwaw3-1.fna.fbcdn.net 1080w'
				],
				likes: 99999,
				likedByYou: false,
				saved: false,
				photoDescription: 'Photo contains a meme which reads: *normal skull* man, woman, white, black, poor, rich. *skull of an ape* people who thing the dinosaur earth society is a joke',
				description: `Dedicated to everyone who thinks dinosaur earth is a parody or a joke`,
				tags: ['dinosaurearth', 'dinosaurearthsociety', 'earthisadinosaur', 'whoreadsthesetags', 'dinosaur'],
				comments: [
					{
						author: 'my_mom_ate_my_dad',
						content: 'Trurer words couldn\'t have been spoken'
					},
					{
						author: 'era44_man',
						content: 'T R U E!'
					}
				],
				time: '3 days ago'
			},
			{
				author: {
					name: 'iss',
					photo: 'https://scontent-waw1-1.cdninstagram.com/vp/cbc1aa11f9d59c601cc2a9eafddd40a9/5D510BB4/t51.2885-19/s150x150/16123362_1287894854612639_45401029839159296_a.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com',
					location: ''
				},
				type: 'photo',
				photos: [
					'https://scontent-waw1-1.cdninstagram.com/vp/af5bc1a6a2c41e10c2f350b3da15b94e/5D714EBB/t51.2885-15/sh0.08/e35/s640x640/58410579_630203594114881_7653048742759116416_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com 640w,https://scontent-waw1-1.cdninstagram.com/vp/c23ababa5903d105285039a80f6f04e1/5D5A44BB/t51.2885-15/sh0.08/e35/s750x750/58410579_630203594114881_7653048742759116416_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com 750w,https://scontent-waw1-1.cdninstagram.com/vp/800b27ce5735172b2d33807a35af0977/5D66795E/t51.2885-15/e35/58410579_630203594114881_7653048742759116416_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com 1080w'
				],
				likes: 678341,
				likedByYou: false,
				saved: false,
				photoDescription: 'Photo might contain: earth, sky, aura, space, stars',
				description: `The aurora and the night sky above Earth’s atmosphere are pictured from the space station. A portion of the station’s solar arrays and a pair of nitrogen/oxygen recharge system tanks are pictured in the foreground.`,
				tags: ['nasa', 'international', 'space', 'station', 'earth', 'aurora'],
				comments: [
					{
						author: 'beyondphilosophy',
						content: 'Why do you see stars in some pictures while you don\'t in some other?'
					},
					{
						author: 'newhope.',
						content: 'this is amazing'
					},
					{
						author: 'dead.ape',
						content: 'our planet is beautiful'
					}
				],
				time: '5 days ago'
			}
		]
	}
})

document.getElementById('app').addEventListener('scroll', function (e) {
	var scroll = document.getElementById('app').scrollTop
	if (scroll > 16) {
		document.getElementsByClassName('navbar')[0].classList.add('navbar--scrolled')
	} else {
		document.getElementsByClassName('navbar')[0].classList.remove('navbar--scrolled')
	}
})