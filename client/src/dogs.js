const perros = [
    {
        "id": 1,
        "name": "Affenpinscher",
        "height": {
            "imperial": "9 - 11.5",
            "metric": "23 - 29"
        },
        "weight": {
            "imperial": "6 - 13",
            "metric": "3 - 6"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        "image": {
            "id": "BJa4kxc4X",
            "width": 1600,
            "height": 1199,
            "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        }
    },
    {
        "id": 2,
        "name": "Afghan Hound",
        "height": {
            "imperial": "25 - 27",
            "metric": "64 - 69"
        },
        "weight": {
            "imperial": "50 - 60",
            "metric": "23 - 27"
        },
        "life_span": "10 - 13 years",
        "created": false,
        "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
        "image": {
            "id": "hMyT4CDXR",
            "width": 606,
            "height": 380,
            "url": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
        }
    },
    {
        "id": 3,
        "name": "African Hunting Dog",
        "height": {
            "imperial": "30",
            "metric": "76"
        },
        "weight": {
            "imperial": "44 - 66",
            "metric": "20 - 30"
        },
        "life_span": "11 years",
        "created": false,
        "temperament": "Wild, Hardworking, Dutiful",
        "image": {
            "id": "rkiByec47",
            "width": 500,
            "height": 335,
            "url": "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
        }
    },
    {
        "id": 4,
        "name": "Airedale Terrier",
        "height": {
            "imperial": "21 - 23",
            "metric": "53 - 58"
        },
        "weight": {
            "imperial": "40 - 65",
            "metric": "18 - 29"
        },
        "life_span": "10 - 13 years",
        "created": false,
        "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
        "image": {
            "id": "1-7cgoZSh",
            "width": 645,
            "height": 430,
            "url": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
        }
    },
    {
        "id": 5,
        "name": "Akbash Dog",
        "height": {
            "imperial": "28 - 34",
            "metric": "71 - 86"
        },
        "weight": {
            "imperial": "90 - 120",
            "metric": "41 - 54"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Loyal, Independent, Intelligent, Brave",
        "image": {
            "id": "26pHT3Qk7",
            "width": 600,
            "height": 471,
            "url": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
        }
    },
    {
        "id": 6,
        "name": "Akita",
        "height": {
            "imperial": "24 - 28",
            "metric": "61 - 71"
        },
        "weight": {
            "imperial": "65 - 115",
            "metric": "29 - 52"
        },
        "life_span": "10 - 14 years",
        "created": false,
        "temperament": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
        "image": {
            "id": "BFRYBufpm",
            "width": 1280,
            "height": 853,
            "url": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg"
        }
    },
    {
        "id": 7,
        "name": "Alapaha Blue Blood Bulldog",
        "height": {
            "imperial": "18 - 24",
            "metric": "46 - 61"
        },
        "weight": {
            "imperial": "55 - 90",
            "metric": "25 - 41"
        },
        "life_span": "12 - 13 years",
        "created": false,
        "temperament": "Loving, Protective, Trainable, Dutiful, Responsible",
        "image": {
            "id": "33mJ-V3RX",
            "width": 1828,
            "height": 2065,
            "url": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg"
        }
    },
    {
        "id": 8,
        "name": "Alaskan Husky",
        "height": {
            "imperial": "23 - 26",
            "metric": "58 - 66"
        },
        "weight": {
            "imperial": "38 - 50",
            "metric": "17 - 23"
        },
        "life_span": "10 - 13 years",
        "created": false,
        "temperament": "Friendly, Energetic, Loyal, Gentle, Confident",
        "image": {
            "id": "-HgpNnGXl",
            "width": 500,
            "height": 500,
            "url": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
        }
    },
    {
        "id": 9,
        "name": "Alaskan Malamute",
        "height": {
            "imperial": "23 - 25",
            "metric": "58 - 64"
        },
        "weight": {
            "imperial": "65 - 100",
            "metric": "29 - 45"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
        "image": {
            "id": "dW5UucTIW",
            "width": 1023,
            "height": 769,
            "url": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
        }
    },
    {
        "id": 10,
        "name": "American Bulldog",
        "height": {
            "imperial": "22 - 27",
            "metric": "56 - 69"
        },
        "weight": {
            "imperial": "60 - 120",
            "metric": "27 - 54"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
        "image": {
            "id": "pk1AAdloG",
            "width": 1669,
            "height": 1377,
            "url": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg"
        }
    },
    {
        "id": 11,
        "name": "American Bully",
        "height": {
            "imperial": "14 - 17",
            "metric": "36 - 43"
        },
        "weight": {
            "imperial": "30 - 150",
            "metric": "14 - 68"
        },
        "life_span": "8 – 15 years",
        "created": false,
        "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
        "image": {
            "id": "sqQJDtbpY",
            "width": 1024,
            "height": 683,
            "url": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg"
        }
    },
    {
        "id": 12,
        "name": "American Eskimo Dog",
        "height": {
            "imperial": "15 - 19",
            "metric": "38 - 48"
        },
        "weight": {
            "imperial": "20 - 40",
            "metric": "9 - 18"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
        "image": {
            "id": "Bymjyec4m",
            "width": 1000,
            "height": 802,
            "url": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
        }
    },
    {
        "id": 13,
        "name": "American Eskimo Dog (Miniature)",
        "height": {
            "imperial": "9 - 12",
            "metric": "23 - 30"
        },
        "weight": {
            "imperial": "7 - 10",
            "metric": "3 - 5"
        },
        "life_span": "13 – 15 years",
        "created": false,
        "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
        "image": {
            "id": "_gn8GLrE6",
            "width": 730,
            "height": 487,
            "url": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg"
        }
    },
    {
        "id": 14,
        "name": "American Foxhound",
        "height": {
            "imperial": "21 - 28",
            "metric": "53 - 71"
        },
        "weight": {
            "imperial": "65 - 75",
            "metric": "29 - 34"
        },
        "life_span": "8 - 15 years",
        "created": false,
        "temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
        "image": {
            "id": "S14n1x9NQ",
            "width": 3000,
            "height": 2400,
            "url": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg"
        }
    },
    {
        "id": 15,
        "name": "American Pit Bull Terrier",
        "height": {
            "imperial": "17 - 21",
            "metric": "43 - 53"
        },
        "weight": {
            "imperial": "30 - 60",
            "metric": "14 - 27"
        },
        "life_span": "10 - 15 years",
        "created": false,
        "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
        "image": {
            "id": "HkC31gcNm",
            "width": 300,
            "height": 244,
            "url": "https://cdn2.thedogapi.com/images/HkC31gcNm.png"
        }
    },
    {
        "id": 16,
        "name": "American Staffordshire Terrier",
        "height": {
            "imperial": "17 - 19",
            "metric": "43 - 48"
        },
        "weight": {
            "imperial": "50 - 60",
            "metric": "23 - 27"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
        "image": {
            "id": "rJIakgc4m",
            "width": 357,
            "height": 500,
            "url": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg"
        }
    },
    {
        "id": 17,
        "name": "American Water Spaniel",
        "height": {
            "imperial": "15 - 18",
            "metric": "38 - 46"
        },
        "weight": {
            "imperial": "25 - 45",
            "metric": "11 - 20"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
        "image": {
            "id": "SkmRJl9VQ",
            "width": 1600,
            "height": 1264,
            "url": "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg"
        }
    },
    {
        "id": 18,
        "name": "Anatolian Shepherd Dog",
        "height": {
            "imperial": "27 - 29",
            "metric": "69 - 74"
        },
        "weight": {
            "imperial": "80 - 150",
            "metric": "36 - 68"
        },
        "life_span": "11 - 13 years",
        "created": false,
        "temperament": "Steady, Bold, Independent, Confident, Intelligent, Proud",
        "image": {
            "id": "BJT0Jx5Nm",
            "width": 1216,
            "height": 1131,
            "url": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg"
        }
    },
    {
        "id": 19,
        "name": "Appenzeller Sennenhund",
        "height": {
            "imperial": "20 - 22",
            "metric": "51 - 56"
        },
        "weight": {
            "imperial": "48 - 55",
            "metric": "22 - 25"
        },
        "life_span": "12 – 14 years",
        "created": false,
        "temperament": "Reliable, Fearless, Energetic, Lively, Self-assured",
        "image": {
            "id": "HkNkxlqEX",
            "width": 400,
            "height": 600,
            "url": "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg"
        }
    },
    {
        "id": 21,
        "name": "Australian Cattle Dog",
        "height": {
            "imperial": "17 - 20",
            "metric": "43 - 51"
        },
        "weight": {
            "imperial": "44 - 62",
            "metric": "20 - 28"
        },
        "life_span": "12 - 14 years",
        "created": false,
        "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
        "image": {
            "id": "IBkYVm4v1",
            "width": 736,
            "height": 850,
            "url": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg"
        }
    },
    {
        "id": 22,
        "name": "Australian Kelpie",
        "height": {
            "imperial": "17 - 20",
            "metric": "43 - 51"
        },
        "weight": {
            "imperial": "31 - 46",
            "metric": "14 - 21"
        },
        "life_span": "10 - 13 years",
        "created": false,
        "temperament": "Friendly, Energetic, Alert, Loyal, Intelligent, Eager",
        "image": {
            "id": "Hyq1ge9VQ",
            "width": 800,
            "height": 533,
            "url": "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg"
        }
    },
    {
        "id": 23,
        "name": "Australian Shepherd",
        "height": {
            "imperial": "18 - 23",
            "metric": "46 - 58"
        },
        "weight": {
            "imperial": "35 - 65",
            "metric": "16 - 29"
        },
        "life_span": "12 - 16 years",
        "created": false,
        "temperament": "Good-natured, Affectionate, Intelligent, Active, Protective",
        "image": {
            "id": "B1-llgq4m",
            "width": 1200,
            "height": 733,
            "url": "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg"
        }
    },
    {
        "id": 24,
        "name": "Australian Terrier",
        "height": {
            "imperial": "10 - 11",
            "metric": "25 - 28"
        },
        "weight": {
            "imperial": "14 - 16",
            "metric": "6 - 7"
        },
        "life_span": "15 years",
        "created": false,
        "temperament": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
        "image": {
            "id": "r1Ylge5Vm",
            "width": 1081,
            "height": 720,
            "url": "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg"
        }
    },
    {
        "id": 25,
        "name": "Azawakh",
        "height": {
            "imperial": "23 - 29",
            "metric": "58 - 74"
        },
        "weight": {
            "imperial": "33 - 55",
            "metric": "15 - 25"
        },
        "life_span": "10 - 13 years",
        "created": false,
        "temperament": "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
        "image": {
            "id": "SkvZgx94m",
            "width": 1024,
            "height": 768,
            "url": "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg"
        }
    },
    {
        "id": 26,
        "name": "Barbet",
        "height": {
            "imperial": "20 - 26",
            "metric": "51 - 66"
        },
        "weight": {
            "imperial": "40 - 65",
            "metric": "18 - 29"
        },
        "life_span": "13 – 15 years",
        "created": false,
        "temperament": "Obedient, Companionable, Intelligent, Joyful",
        "image": {
            "id": "HyWGexcVQ",
            "width": 853,
            "height": 1280,
            "url": "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg"
        }
    },
    {
        "id": 28,
        "name": "Basenji",
        "height": {
            "imperial": "16 - 17",
            "metric": "41 - 43"
        },
        "weight": {
            "imperial": "22 - 24",
            "metric": "10 - 11"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
        "image": {
            "id": "H1dGlxqNQ",
            "width": 740,
            "height": 493,
            "url": "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg"
        }
    },
    {
        "id": 29,
        "name": "Basset Bleu de Gascogne",
        "height": {
            "imperial": "13 - 15",
            "metric": "33 - 38"
        },
        "weight": {
            "imperial": "35 - 40",
            "metric": "16 - 18"
        },
        "life_span": "10 - 14 years",
        "created": false,
        "temperament": "Affectionate, Lively, Agile, Curious, Happy, Active",
        "image": {
            "id": "BkMQll94X",
            "width": 1280,
            "height": 853,
            "url": "https://cdn2.thedogapi.com/images/BkMQll94X.jpg"
        }
    },
    {
        "id": 30,
        "name": "Basset Hound",
        "height": {
            "imperial": "14",
            "metric": "36"
        },
        "weight": {
            "imperial": "50 - 65",
            "metric": "23 - 29"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
        "image": {
            "id": "Sy57xx9EX",
            "width": 1024,
            "height": 640,
            "url": "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg"
        }
    },
    {
        "id": 31,
        "name": "Beagle",
        "height": {
            "imperial": "13 - 15",
            "metric": "33 - 38"
        },
        "weight": {
            "imperial": "20 - 35",
            "metric": "9 - 16"
        },
        "life_span": "13 - 16 years",
        "created": false,
        "temperament": "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
        "image": {
            "id": "Syd4xxqEm",
            "width": 1000,
            "height": 667,
            "url": "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg"
        }
    },
    {
        "id": 32,
        "name": "Bearded Collie",
        "height": {
            "imperial": "20 - 22",
            "metric": "51 - 56"
        },
        "weight": {
            "imperial": "45 - 55",
            "metric": "20 - 25"
        },
        "life_span": "12 - 14 years",
        "created": false,
        "temperament": "Self-confidence, Hardy, Lively, Alert, Intelligent, Active",
        "image": {
            "id": "A09F4c1qP",
            "width": 733,
            "height": 733,
            "url": "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg"
        }
    },
    {
        "id": 33,
        "name": "Beauceron",
        "height": {
            "imperial": "24 - 27.5",
            "metric": "61 - 70"
        },
        "weight": {
            "imperial": "80 - 110",
            "metric": "36 - 50"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Fearless, Friendly, Intelligent, Protective, Calm",
        "image": {
            "id": "HJQ8ge5V7",
            "width": 720,
            "height": 563,
            "url": "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg"
        }
    },
    {
        "id": 34,
        "name": "Bedlington Terrier",
        "height": {
            "imperial": "15 - 16",
            "metric": "38 - 41"
        },
        "weight": {
            "imperial": "17 - 23",
            "metric": "8 - 10"
        },
        "life_span": "14 - 16 years",
        "created": false,
        "temperament": "Affectionate, Spirited, Intelligent, Good-tempered",
        "image": {
            "id": "ByK8gx947",
            "width": 804,
            "height": 531,
            "url": "https://cdn2.thedogapi.com/images/ByK8gx947.jpg"
        }
    },
    {
        "id": 36,
        "name": "Belgian Malinois",
        "height": {
            "imperial": "22 - 26",
            "metric": "56 - 66"
        },
        "weight": {
            "imperial": "40 - 80",
            "metric": "18 - 36"
        },
        "life_span": "12 - 14 years",
        "created": false,
        "temperament": "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
        "image": {
            "id": "r1f_ll5VX",
            "width": 604,
            "height": 453,
            "url": "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg"
        }
    },
    {
        "id": 38,
        "name": "Belgian Tervuren",
        "height": {
            "imperial": "22 - 26",
            "metric": "56 - 66"
        },
        "weight": {
            "imperial": "40 - 65",
            "metric": "18 - 29"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
        "image": {
            "id": "B1KdxlcNX",
            "width": 645,
            "height": 380,
            "url": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
        }
    },
    {
        "id": 41,
        "name": "Bernese Mountain Dog",
        "height": {
            "imperial": "23 - 27.5",
            "metric": "58 - 70"
        },
        "weight": {
            "imperial": "65 - 120",
            "metric": "29 - 54"
        },
        "life_span": "7 - 10 years",
        "created": false,
        "temperament": "Affectionate, Loyal, Intelligent, Faithful",
        "image": {
            "id": "S1fFlx5Em",
            "width": 640,
            "height": 427,
            "url": "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg"
        }
    },
    {
        "id": 42,
        "name": "Bichon Frise",
        "height": {
            "imperial": "9.5 - 11.5",
            "metric": "24 - 29"
        },
        "weight": {
            "imperial": "10 - 18",
            "metric": "5 - 8"
        },
        "life_span": "15 years",
        "created": false,
        "temperament": "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
        "image": {
            "id": "HkuYlxqEQ",
            "width": 480,
            "height": 360,
            "url": "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg"
        }
    },
    {
        "id": 43,
        "name": "Black and Tan Coonhound",
        "height": {
            "imperial": "23 - 27",
            "metric": "58 - 69"
        },
        "weight": {
            "imperial": "65 - 100",
            "metric": "29 - 45"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
        "image": {
            "id": "HJAFgxcNQ",
            "width": 556,
            "height": 380,
            "url": "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg"
        }
    },
    {
        "id": 45,
        "name": "Bloodhound",
        "height": {
            "imperial": "23 - 27",
            "metric": "58 - 69"
        },
        "weight": {
            "imperial": "80 - 110",
            "metric": "36 - 50"
        },
        "life_span": "8 - 10 years",
        "created": false,
        "temperament": "Stubborn, Affectionate, Gentle, Even Tempered",
        "image": {
            "id": "Skdcgx9VX",
            "width": 586,
            "height": 600,
            "url": "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg"
        }
    },
    {
        "id": 47,
        "name": "Bluetick Coonhound",
        "height": {
            "imperial": "21 - 27",
            "metric": "53 - 69"
        },
        "weight": {
            "imperial": "45 - 80",
            "metric": "20 - 36"
        },
        "life_span": "12 - 14 years",
        "created": false,
        "temperament": "Friendly, Intelligent, Active",
        "image": {
            "id": "rJxieg9VQ",
            "width": 731,
            "height": 599,
            "url": "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg"
        }
    },
    {
        "id": 48,
        "name": "Boerboel",
        "height": {
            "imperial": "22 - 27",
            "metric": "56 - 69"
        },
        "weight": {
            "imperial": "110 - 200",
            "metric": "50 - 91"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Obedient, Confident, Intelligent, Dominant, Territorial",
        "image": {
            "id": "HyOjge5Vm",
            "width": 1200,
            "height": 669,
            "url": "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg"
        }
    },
    {
        "id": 50,
        "name": "Border Collie",
        "height": {
            "imperial": "18 - 22",
            "metric": "46 - 56"
        },
        "weight": {
            "imperial": "30 - 45",
            "metric": "14 - 20"
        },
        "life_span": "12 - 16 years",
        "created": false,
        "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
        "image": {
            "id": "sGQvQUpsp",
            "width": 1080,
            "height": 1080,
            "url": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg"
        }
    },
    {
        "id": 51,
        "name": "Border Terrier",
        "height": {
            "imperial": "11 - 16",
            "metric": "28 - 41"
        },
        "weight": {
            "imperial": "11.5 - 15.5",
            "metric": "5 - 7"
        },
        "life_span": "12 - 14 years",
        "created": false,
        "temperament": "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
        "image": {
            "id": "HJOpge9Em",
            "width": 674,
            "height": 450,
            "url": "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg"
        }
    },
    {
        "id": 53,
        "name": "Boston Terrier",
        "height": {
            "imperial": "16 - 17",
            "metric": "41 - 43"
        },
        "weight": {
            "imperial": "10 - 25",
            "metric": "5 - 11"
        },
        "life_span": "11 - 13 years",
        "created": false,
        "temperament": "Friendly, Lively, Intelligent",
        "image": {
            "id": "rkZRggqVX",
            "width": 1010,
            "height": 673,
            "url": "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg"
        }
    },
    {
        "id": 54,
        "name": "Bouvier des Flandres",
        "height": {
            "imperial": "23.5 - 27.5",
            "metric": "60 - 70"
        },
        "weight": {
            "imperial": "70 - 110",
            "metric": "32 - 50"
        },
        "life_span": "10 - 15 years",
        "created": false,
        "temperament": "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
        "image": {
            "id": "Byd0xl5VX",
            "width": 680,
            "height": 454,
            "url": "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg"
        }
    },
    {
        "id": 55,
        "name": "Boxer",
        "height": {
            "imperial": "21.5 - 25",
            "metric": "55 - 64"
        },
        "weight": {
            "imperial": "50 - 70",
            "metric": "23 - 32"
        },
        "life_span": "8 - 10 years",
        "created": false,
        "temperament": "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
        "image": {
            "id": "ry1kWe5VQ",
            "width": 645,
            "height": 430,
            "url": "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg"
        }
    },
    {
        "id": 56,
        "name": "Boykin Spaniel",
        "height": {
            "imperial": "14 - 18",
            "metric": "36 - 46"
        },
        "weight": {
            "imperial": "25 - 40",
            "metric": "11 - 18"
        },
        "life_span": "10 - 14 years",
        "created": false,
        "temperament": "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
        "image": {
            "id": "ryHJZlcNX",
            "width": 577,
            "height": 634,
            "url": "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg"
        }
    },
    {
        "id": 57,
        "name": "Bracco Italiano",
        "height": {
            "imperial": "21.5 - 26.5",
            "metric": "55 - 67"
        },
        "weight": {
            "imperial": "55 - 88",
            "metric": "25 - 40"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
        "image": {
            "id": "S13yZg5VQ",
            "width": 750,
            "height": 505,
            "url": "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg"
        }
    },
    {
        "id": 58,
        "name": "Briard",
        "height": {
            "imperial": "22 - 27",
            "metric": "56 - 69"
        },
        "weight": {
            "imperial": "70 - 90",
            "metric": "32 - 41"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
        "image": {
            "id": "rkVlblcEQ",
            "width": 768,
            "height": 576,
            "url": "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg"
        }
    },
    {
        "id": 59,
        "name": "Brittany",
        "height": {
            "imperial": "17.5 - 20.5",
            "metric": "44 - 52"
        },
        "weight": {
            "imperial": "30 - 45",
            "metric": "14 - 20"
        },
        "life_span": "12 - 14 years",
        "created": false,
        "temperament": "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
        "image": {
            "id": "HJWZZxc4X",
            "width": 900,
            "height": 600,
            "url": "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg"
        }
    },
    {
        "id": 61,
        "name": "Bull Terrier",
        "height": {
            "imperial": "21 - 22",
            "metric": "53 - 56"
        },
        "weight": {
            "imperial": "50 - 70",
            "metric": "23 - 32"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active",
        "image": {
            "id": "VSraIEQGd",
            "width": 1080,
            "height": 1080,
            "url": "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg"
        }
    },
    {
        "id": 62,
        "name": "Bull Terrier (Miniature)",
        "height": {
            "imperial": "10 - 14",
            "metric": "25 - 36"
        },
        "weight": {
            "imperial": "25 - 33",
            "metric": "11 - 15"
        },
        "life_span": "11 – 14 years",
        "created": false,
        "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
        "image": {
            "id": "BkKZWlcVX",
            "width": 674,
            "height": 450,
            "url": "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg"
        }
    },
    {
        "id": 64,
        "name": "Bullmastiff",
        "height": {
            "imperial": "24 - 27",
            "metric": "61 - 69"
        },
        "weight": {
            "imperial": "100 - 130",
            "metric": "45 - 59"
        },
        "life_span": "8 - 12 years",
        "created": false,
        "temperament": "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
        "image": {
            "id": "r1ifZl5E7",
            "width": 850,
            "height": 638,
            "url": "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg"
        }
    },
    {
        "id": 65,
        "name": "Cairn Terrier",
        "height": {
            "imperial": "9 - 10",
            "metric": "23 - 25"
        },
        "weight": {
            "imperial": "13 - 14",
            "metric": "6 - 6"
        },
        "life_span": "14 - 15 years",
        "created": false,
        "temperament": "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
        "image": {
            "id": "Sk7Qbg9E7",
            "width": 1254,
            "height": 836,
            "url": "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg"
        }
    },
    {
        "id": 67,
        "name": "Cane Corso",
        "height": {
            "imperial": "23.5 - 27.5",
            "metric": "60 - 70"
        },
        "weight": {
            "imperial": "88 - 120",
            "metric": "40 - 54"
        },
        "life_span": "10 - 11 years",
        "created": false,
        "temperament": "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
        "image": {
            "id": "r15m-lc4m",
            "width": 645,
            "height": 380,
            "url": "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg"
        }
    },
    {
        "id": 68,
        "name": "Cardigan Welsh Corgi",
        "height": {
            "imperial": "10.5 - 12.5",
            "metric": "27 - 32"
        },
        "weight": {
            "imperial": "25 - 38",
            "metric": "11 - 17"
        },
        "life_span": "12 - 14 years",
        "created": false,
        "temperament": "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
        "image": {
            "id": "SyXN-e9NX",
            "width": 800,
            "height": 600,
            "url": "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg"
        }
    },
    {
        "id": 69,
        "name": "Catahoula Leopard Dog",
        "height": {
            "imperial": "20 - 26",
            "metric": "51 - 66"
        },
        "weight": {
            "imperial": "50 - 95",
            "metric": "23 - 43"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
        "image": {
            "id": "BJcNbec4X",
            "width": 650,
            "height": 650,
            "url": "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg"
        }
    },
    {
        "id": 70,
        "name": "Caucasian Shepherd (Ovcharka)",
        "height": {
            "imperial": "24 - 33.5",
            "metric": "61 - 85"
        },
        "weight": {
            "imperial": "80 - 100",
            "metric": "36 - 45"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Alert, Quick, Dominant, Powerful, Calm, Strong",
        "image": {
            "id": "r1rrWe5Em",
            "width": 1024,
            "height": 682,
            "url": "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg"
        }
    },
    {
        "id": 71,
        "name": "Cavalier King Charles Spaniel",
        "height": {
            "imperial": "12 - 13",
            "metric": "30 - 33"
        },
        "weight": {
            "imperial": "13 - 18",
            "metric": "6 - 8"
        },
        "life_span": "10 - 14 years",
        "created": false,
        "temperament": "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
        "image": {
            "id": "HJRBbe94Q",
            "width": 961,
            "height": 558,
            "url": "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg"
        }
    },
    {
        "id": 76,
        "name": "Chesapeake Bay Retriever",
        "height": {
            "imperial": "21 - 26",
            "metric": "53 - 66"
        },
        "weight": {
            "imperial": "55 - 80",
            "metric": "25 - 36"
        },
        "life_span": "10 - 13 years",
        "created": false,
        "temperament": "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
        "image": {
            "id": "9BXwUeCc2",
            "width": 600,
            "height": 600,
            "url": "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg"
        }
    },
    {
        "id": 78,
        "name": "Chinese Crested",
        "height": {
            "imperial": "11 - 13",
            "metric": "28 - 33"
        },
        "weight": {
            "imperial": "10 - 13",
            "metric": "5 - 6"
        },
        "life_span": "10 - 14 years",
        "created": false,
        "temperament": "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
        "image": {
            "id": "B1pDZx9Nm",
            "width": 1200,
            "height": 798,
            "url": "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg"
        }
    },
    {
        "id": 79,
        "name": "Chinese Shar-Pei",
        "height": {
            "imperial": "18 - 20",
            "metric": "46 - 51"
        },
        "weight": {
            "imperial": "45 - 60",
            "metric": "20 - 27"
        },
        "life_span": "10 years",
        "created": false,
        "temperament": "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
        "image": {
            "id": "B1ruWl94Q",
            "width": 1049,
            "height": 761,
            "url": "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg"
        }
    },
    {
        "id": 80,
        "name": "Chinook",
        "height": {
            "imperial": "22 - 26",
            "metric": "56 - 66"
        },
        "weight": {
            "imperial": "50 - 90",
            "metric": "23 - 41"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Friendly, Alert, Dignified, Intelligent, Calm",
        "image": {
            "id": "Sypubg54Q",
            "width": 600,
            "height": 478,
            "url": "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg"
        }
    },
    {
        "id": 81,
        "name": "Chow Chow",
        "height": {
            "imperial": "17 - 20",
            "metric": "43 - 51"
        },
        "weight": {
            "imperial": "40 - 70",
            "metric": "18 - 32"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Aloof, Loyal, Independent, Quiet",
        "image": {
            "id": "ry8KWgqEQ",
            "width": 1010,
            "height": 673,
            "url": "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"
        }
    },
    {
        "id": 84,
        "name": "Clumber Spaniel",
        "height": {
            "imperial": "17 - 20",
            "metric": "43 - 51"
        },
        "weight": {
            "imperial": "55 - 85",
            "metric": "25 - 39"
        },
        "life_span": "10 - 12 years",
        "created": false,
        "temperament": "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
        "image": {
            "id": "rkeqWgq4Q",
            "width": 762,
            "height": 533,
            "url": "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg"
        }
    },
    {
        "id": 86,
        "name": "Cocker Spaniel",
        "height": {
            "imperial": "14 - 15",
            "metric": "36 - 38"
        },
        "weight": {
            "imperial": "20 - 30",
            "metric": "9 - 14"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
        "image": {
            "id": "1lFmrzECl",
            "width": 1080,
            "height": 1080,
            "url": "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg"
        }
    },
    {
        "id": 87,
        "name": "Cocker Spaniel (American)",
        "height": {
            "imperial": "14 - 15",
            "metric": "36 - 38"
        },
        "weight": {
            "imperial": "20 - 30",
            "metric": "9 - 14"
        },
        "life_span": "12 - 15 years",
        "created": false,
        "temperament": "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
        "image": {
            "id": "HkRcZe547",
            "width": 1024,
            "height": 640,
            "url": "https://cdn2.thedogapi.com/images/HkRcZe547.jpg"
        }
    },
    {
        "id": 89,
        "name": "Coton de Tulear",
        "height": {
            "imperial": "9 - 11",
            "metric": "23 - 28"
        },
        "weight": {
            "imperial": "9 - 15",
            "metric": "4 - 7"
        },
        "life_span": "13 - 16 years",
        "created": false,
        "temperament": "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
        "image": {
            "id": "SyviZlqNm",
            "width": 2464,
            "height": 1638,
            "url": "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg"
        }
    },
    {
        "id": 92,
        "name": "Dalmatian",
        "height": {
            "imperial": "19 - 23",
            "metric": "48 - 58"
        },
        "weight": {
            "imperial": "50 - 55",
            "metric": "23 - 25"
        },
        "life_span": "10 - 13 years",
        "created": false,
        "temperament": "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
        "image": {
            "id": "SkJ3blcN7",
            "width": 1200,
            "height": 800,
            "url": "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg"
        }
    },
    {
        "id": 94,
        "name": "Doberman Pinscher",
        "height": {
            "imperial": "24 - 28",
            "metric": "61 - 71"
        },
        "weight": {
            "imperial": "66 - 88",
            "metric": "30 - 40"
        },
        "life_span": "10 years",
        "created": false,
        "temperament": "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
        "image": {
            "id": "HyL3bl94Q",
            "width": 1140,
            "height": 640,
            "url": "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg"
        }
    }];

    module.exports = perros;