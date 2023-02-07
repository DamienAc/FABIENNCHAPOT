const fakeFormData = {
    "form": [
        {
            "choices": [
                {
                    "label": "Femme",
                    "id": "femme",
                    "before_conditions": []
                },
                {
                    "label": "Homme",
                    "id": "homme",
                    "before_conditions": []
                }
            ],
            "id": 37,
            "name": "genre",
            "text": "Genre",
            "helper": null
        },
        {
            "choices": [
                {
                    "label": "ETOILE (prêt à porter)",
                    "id": "etoile_(prêt_à_porter)",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ]
                    }
                },
                {
                    "label": "ISABEL MARANT (prêt à porter)",
                    "id": "isabel_marant_(prêt_à_porter)",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ]
                    }
                },
                {
                    "label": "Chaussures",
                    "id": "chaussures",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ]
                    }
                },
                {
                    "label": "Maroquinerie",
                    "id": "maroquinerie",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ]
                    }
                }
            ],
            "id": 38,
            "name": "collection",
            "text": "Collection",
            "helper": "helper-collection"
        },
        {
            "choices": [
                {
                    "label": "Body",
                    "id": "body",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Cape",
                    "id": "cape",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Cardigan & Gilet",
                    "id": "cardigan_&_gilet",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Ceinture",
                    "id": "ceinture",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Chemise & blouse",
                    "id": "chemise_&_blouse",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Combinaison",
                    "id": "combinaison",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Haut / Top",
                    "id": "haut_/_top",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Jean",
                    "id": "jean",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Jupe",
                    "id": "jupe",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Manteau",
                    "id": "manteau",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Pantalon",
                    "id": "pantalon",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Pull",
                    "id": "pull",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Robe",
                    "id": "robe",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Salopette",
                    "id": "salopette",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Short",
                    "id": "short",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Sweat shirt",
                    "id": "sweat_shirt",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Veste",
                    "id": "veste",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Bolero",
                    "id": "bolero",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Gilet",
                    "id": "gilet",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Polo",
                    "id": "polo",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                },
                {
                    "label": "Ballerines",
                    "id": "ballerines",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Sneakers",
                    "id": "sneakers",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Bottines",
                    "id": "bottines",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Bottes",
                    "id": "bottes",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Cuissardes",
                    "id": "cuissardes",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Escarpins",
                    "id": "escarpins",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Mocassins",
                    "id": "mocassins",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Sabots",
                    "id": "sabots",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Sandales",
                    "id": "sandales",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Baskets",
                    "id": "baskets",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Boots",
                    "id": "boots",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ]
                    }
                },
                {
                    "label": "Mini",
                    "id": "mini",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "maroquinerie"
                        ]
                    }
                },
                {
                    "label": "Banane",
                    "id": "banane",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "maroquinerie"
                        ]
                    }
                },
                {
                    "label": "Sac",
                    "id": "sac",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "maroquinerie"
                        ]
                    }
                },
                {
                    "label": "Pochette",
                    "id": "pochette",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "maroquinerie"
                        ]
                    }
                },
                {
                    "label": "Sac de voyage",
                    "id": "sac_de_voyage",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "maroquinerie"
                        ]
                    }
                },
                {
                    "label": "Besace",
                    "id": "besace",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "maroquinerie"
                        ]
                    }
                },
                {
                    "label": "Tee Shirt",
                    "id": "tee_shirt",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ]
                    }
                }
            ],
            "id": 39,
            "name": "categorie",
            "text": "Catégorie",
            "helper": null
        },
        {
            "choices": [
                {
                    "label": "Bretelles",
                    "id": "bretelles",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "haut_/_top"
                        ]
                    }
                },
                {
                    "label": "Manches Longues",
                    "id": "manches_longues",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "pull",
                            "sweat_shirt",
                            "bolero",
                            "veste",
                            "tee_shirt"
                        ]
                    }
                },
                {
                    "label": "Unique",
                    "id": "unique",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)",
                            "chaussures",
                            "maroquinerie"
                        ],
                        "39": [
                            "cape",
                            "jean",
                            "ceinture",
                            "ballerines",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "baskets",
                            "boots",
                            "mini",
                            "banane",
                            "sac",
                            "pochette",
                            "sac_de_voyage",
                            "besace",
                            "cardigan_&_gilet"
                        ]
                    }
                },
                {
                    "label": "Sans Manche",
                    "id": "sans_manche",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "combinaison",
                            "haut_/_top",
                            "pull",
                            "robe",
                            "veste",
                            "body",
                            "chemise_&_blouse",
                            "gilet",
                            "manteau",
                            "tee_shirt"
                        ]
                    }
                },
                {
                    "label": "Divers",
                    "id": "divers",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)"
                        ],
                        "39": [
                            "ceinture"
                        ]
                    }
                },
                {
                    "label": "Manches Courtes",
                    "id": "manches_courtes",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "chemise_&_blouse",
                            "haut_/_top",
                            "pull",
                            "sweat_shirt",
                            "bolero",
                            "cardigan_&_gilet",
                            "veste",
                            "polo",
                            "tee_shirt"
                        ]
                    }
                },
                {
                    "label": "Combishort",
                    "id": "combishort",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "combinaison"
                        ]
                    }
                },
                {
                    "label": "Pantalon / Manches Courtes",
                    "id": "pantalon_/_manches_courtes",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "combinaison"
                        ]
                    }
                },
                {
                    "label": "Pantalon / Manches Longues",
                    "id": "pantalon_/_manches_longues",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "combinaison"
                        ]
                    }
                },
                {
                    "label": "Top Asymetrique",
                    "id": "top_asymetrique",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top"
                        ]
                    }
                },
                {
                    "label": "Jupe Courte",
                    "id": "jupe_courte",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "jupe"
                        ]
                    }
                },
                {
                    "label": "Jupe Longue",
                    "id": "jupe_longue",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "jupe"
                        ]
                    }
                },
                {
                    "label": "Jupe Midi",
                    "id": "jupe_midi",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "jupe"
                        ]
                    }
                },
                {
                    "label": "Jupe Mini",
                    "id": "jupe_mini",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "jupe"
                        ]
                    }
                },
                {
                    "label": "Manteau 3/4",
                    "id": "manteau_3/4",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "manteau"
                        ]
                    }
                },
                {
                    "label": "Manteau court",
                    "id": "manteau_court",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "manteau"
                        ]
                    }
                },
                {
                    "label": "Manteau long",
                    "id": "manteau_long",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "manteau"
                        ]
                    }
                },
                {
                    "label": "Boyfriend",
                    "id": "boyfriend",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon",
                            "short"
                        ]
                    }
                },
                {
                    "label": "Chino",
                    "id": "chino",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Flare",
                    "id": "flare",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon",
                            "salopette"
                        ]
                    }
                },
                {
                    "label": "Girlfriend",
                    "id": "girlfriend",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Pantacourt",
                    "id": "pantacourt",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Pantalon large",
                    "id": "pantalon_large",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Pantalon droit",
                    "id": "pantalon_droit",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Regular",
                    "id": "regular",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon",
                            "salopette"
                        ]
                    }
                },
                {
                    "label": "Slim",
                    "id": "slim",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Robe Courte",
                    "id": "robe_courte",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "robe"
                        ]
                    }
                },
                {
                    "label": "Robe Longue",
                    "id": "robe_longue",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "robe"
                        ]
                    }
                },
                {
                    "label": "Robe Midi",
                    "id": "robe_midi",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "robe"
                        ]
                    }
                },
                {
                    "label": "Short",
                    "id": "short",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "salopette",
                            "short"
                        ]
                    }
                },
                {
                    "label": "Bermuda",
                    "id": "bermuda",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "short"
                        ]
                    }
                },
                {
                    "label": "Short Mini",
                    "id": "short_mini",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "short"
                        ]
                    }
                },
                {
                    "label": "Blouson",
                    "id": "blouson",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "veste"
                        ]
                    }
                },
                {
                    "label": "Veste Outerwear",
                    "id": "veste_outerwear",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "veste"
                        ]
                    }
                },
                {
                    "label": "Veste Tailleur",
                    "id": "veste_tailleur",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "veste"
                        ]
                    }
                },
                {
                    "label": "Bustier",
                    "id": "bustier",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "haut_/_top"
                        ]
                    }
                },
                {
                    "label": "Cape",
                    "id": "cape",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top",
                            "manteau"
                        ]
                    }
                },
                {
                    "label": "Veste Exterieur",
                    "id": "veste_exterieur",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "gilet",
                            "cardigan_&_gilet"
                        ]
                    }
                },
                {
                    "label": "Jogging",
                    "id": "jogging",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Overpant",
                    "id": "overpant",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Pantalon étroit",
                    "id": "pantalon_étroit",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ]
                    }
                },
                {
                    "label": "Compensée",
                    "id": "compensée",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "sneakers",
                            "bottes"
                        ]
                    }
                },
                {
                    "label": "Plat",
                    "id": "plat",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "sneakers",
                            "bottines",
                            "bottes",
                            "sandales"
                        ]
                    }
                },
                {
                    "label": "Talon",
                    "id": "talon",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "bottines",
                            "bottes",
                            "sandales"
                        ]
                    }
                }
            ],
            "id": 40,
            "name": "sous_categorie",
            "text": "Sous catégorie",
            "helper": null
        },
        {
            "choices": [
                {
                    "label": "Polyamide",
                    "id": "polyamide",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cardigan_&_gilet",
                            "haut_/_top",
                            "jupe",
                            "manteau",
                            "pull",
                            "robe",
                            "salopette",
                            "veste",
                            "cape",
                            "combinaison",
                            "pantalon",
                            "short"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "sans_manche",
                            "jupe_courte",
                            "jupe_longue",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "manches_courtes",
                            "robe_courte",
                            "robe_longue",
                            "regular",
                            "blouson",
                            "veste_outerwear",
                            "unique",
                            "jupe_midi",
                            "jupe_mini",
                            "pantacourt",
                            "slim",
                            "bermuda",
                            "veste_tailleur",
                            "pantalon_large",
                            "pantalon_étroit"
                        ]
                    }
                },
                {
                    "label": "Alpaga",
                    "id": "alpaga",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cape",
                            "cardigan_&_gilet",
                            "pull",
                            "robe",
                            "haut_/_top",
                            "manteau",
                            "veste"
                        ],
                        "40": [
                            "unique",
                            "manches_longues",
                            "sans_manche",
                            "robe_courte",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "veste_outerwear",
                            "veste_tailleur"
                        ]
                    }
                },
                {
                    "label": "Coton",
                    "id": "coton",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "body",
                            "bolero",
                            "gilet",
                            "polo",
                            "tee_shirt"
                        ],
                        "40": [
                            "unique",
                            "manches_longues",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "bretelles",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "top_asymetrique",
                            "cape",
                            "veste_exterieur",
                            "jogging",
                            "pantalon_étroit"
                        ]
                    }
                },
                {
                    "label": "Laine",
                    "id": "laine",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cape",
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "veste",
                            "ceinture",
                            "tee_shirt"
                        ],
                        "40": [
                            "unique",
                            "manches_longues",
                            "manches_courtes",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "pantalon_droit",
                            "regular",
                            "sans_manche",
                            "robe_courte",
                            "robe_longue",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "pantalon_/_manches_longues",
                            "bustier",
                            "top_asymetrique",
                            "boyfriend",
                            "flare",
                            "pantacourt",
                            "pantalon_large",
                            "slim",
                            "robe_midi",
                            "short",
                            "pantalon_étroit"
                        ]
                    }
                },
                {
                    "label": "Mérinos",
                    "id": "mérinos",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cape",
                            "cardigan_&_gilet",
                            "pull"
                        ],
                        "40": [
                            "unique",
                            "manches_longues",
                            "sans_manche"
                        ]
                    }
                },
                {
                    "label": "Acrylique",
                    "id": "acrylique",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "manteau",
                            "pull",
                            "veste",
                            "haut_/_top"
                        ],
                        "40": [
                            "manches_longues",
                            "manteau_court",
                            "manteau_long",
                            "veste_tailleur",
                            "manteau_3/4",
                            "manches_courtes",
                            "veste_outerwear"
                        ]
                    }
                },
                {
                    "label": "Lin",
                    "id": "lin",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "veste",
                            "cape",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "manches_longues",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "bretelles",
                            "manches_courtes",
                            "sans_manche",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_long",
                            "boyfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "unique",
                            "pantalon_/_manches_longues",
                            "bustier",
                            "jupe_midi",
                            "manteau_court",
                            "chino",
                            "flare"
                        ]
                    }
                },
                {
                    "label": "Mohair",
                    "id": "mohair",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "pull",
                            "veste"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "veste_outerwear"
                        ]
                    }
                },
                {
                    "label": "Polyester",
                    "id": "polyester",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "haut_/_top",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "veste",
                            "sweat_shirt",
                            "tee_shirt"
                        ],
                        "40": [
                            "manches_longues",
                            "manches_courtes",
                            "sans_manche",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "pantalon_large",
                            "regular",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "bretelles",
                            "slim",
                            "short",
                            "veste_tailleur",
                            "flare",
                            "pantacourt",
                            "pantalon_droit",
                            "pantalon_étroit"
                        ]
                    }
                },
                {
                    "label": "Polyuréthane",
                    "id": "polyuréthane",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "jupe",
                            "pantalon",
                            "veste",
                            "manteau"
                        ],
                        "40": [
                            "manches_longues",
                            "jupe_courte",
                            "jupe_midi",
                            "pantalon_droit",
                            "slim",
                            "blouson",
                            "manteau_court"
                        ]
                    }
                },
                {
                    "label": "Viscose",
                    "id": "viscose",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "cape",
                            "salopette",
                            "tee_shirt"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "bretelles",
                            "manches_courtes",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "short_mini",
                            "veste_outerwear",
                            "veste_tailleur",
                            "unique",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "bermuda",
                            "flare",
                            "girlfriend",
                            "pantalon_étroit"
                        ]
                    }
                },
                {
                    "label": "Agneau",
                    "id": "agneau",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "short",
                            "veste",
                            "gilet",
                            "haut_/_top",
                            "robe"
                        ],
                        "40": [
                            "sans_manche",
                            "manches_longues",
                            "jupe_courte",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "girlfriend",
                            "pantacourt",
                            "slim",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "bretelles",
                            "bustier",
                            "manches_courtes",
                            "top_asymetrique",
                            "jupe_longue",
                            "jupe_midi",
                            "manteau_long",
                            "pantalon_large",
                            "regular",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "bermuda",
                            "veste_tailleur",
                            "boyfriend",
                            "pantalon_droit",
                            "pantalon_étroit"
                        ]
                    }
                },
                {
                    "label": "Chèvre",
                    "id": "chèvre",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "chemise_&_blouse",
                            "robe",
                            "haut_/_top",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "short",
                            "veste"
                        ],
                        "40": [
                            "manches_longues",
                            "robe_courte",
                            "manches_courtes",
                            "sans_manche",
                            "jupe_midi",
                            "manteau_3/4",
                            "regular",
                            "bermuda",
                            "short_mini",
                            "veste_outerwear",
                            "girlfriend",
                            "pantalon_droit"
                        ]
                    }
                },
                {
                    "label": "Laine Vierge",
                    "id": "laine_vierge",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "chemise_&_blouse",
                            "haut_/_top",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "robe",
                            "veste",
                            "cape",
                            "short",
                            "pull"
                        ],
                        "40": [
                            "manches_longues",
                            "manches_courtes",
                            "jupe_courte",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "flare",
                            "pantacourt",
                            "pantalon_large",
                            "robe_courte",
                            "robe_midi",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "unique",
                            "sans_manche",
                            "jupe_longue",
                            "regular",
                            "slim",
                            "robe_longue",
                            "bermuda"
                        ]
                    }
                },
                {
                    "label": "Lyocell",
                    "id": "lyocell",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jupe",
                            "pantalon",
                            "robe",
                            "short",
                            "veste",
                            "tee_shirt"
                        ],
                        "40": [
                            "manches_longues",
                            "jupe_courte",
                            "jupe_midi",
                            "boyfriend",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "pantalon_/_manches_longues",
                            "manches_courtes",
                            "jupe_longue",
                            "robe_midi",
                            "sans_manche"
                        ]
                    }
                },
                {
                    "label": "Rayonne",
                    "id": "rayonne",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "chemise_&_blouse",
                            "haut_/_top",
                            "jupe",
                            "pantalon",
                            "pull",
                            "robe",
                            "veste"
                        ],
                        "40": [
                            "manches_longues",
                            "manches_courtes",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "pantalon_droit",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "veste_tailleur"
                        ]
                    }
                },
                {
                    "label": "Soie",
                    "id": "soie",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jupe",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "veste",
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "manteau",
                            "tee_shirt"
                        ],
                        "40": [
                            "manches_longues",
                            "combishort",
                            "bretelles",
                            "manches_courtes",
                            "sans_manche",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "chino",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "regular",
                            "short",
                            "short_mini",
                            "veste_tailleur",
                            "bustier",
                            "unique",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "manteau_3/4",
                            "manteau_long",
                            "boyfriend",
                            "pantalon_large",
                            "slim",
                            "bermuda",
                            "veste_outerwear",
                            "blouson",
                            "overpant",
                            "pantalon_étroit"
                        ]
                    }
                },
                {
                    "label": "Tencel",
                    "id": "tencel",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "chemise_&_blouse",
                            "tee_shirt"
                        ],
                        "40": [
                            "manches_longues",
                            "manches_courtes",
                            "sans_manche"
                        ]
                    }
                },
                {
                    "label": "Acétate",
                    "id": "acétate",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top",
                            "jupe",
                            "robe",
                            "short",
                            "pantalon",
                            "veste",
                            "tee_shirt"
                        ],
                        "40": [
                            "manches_courtes",
                            "manches_longues",
                            "jupe_courte",
                            "robe_courte",
                            "short_mini",
                            "sans_manche",
                            "jupe_longue",
                            "jupe_midi",
                            "regular",
                            "robe_longue",
                            "veste_tailleur",
                            "pantalon_large"
                        ]
                    }
                },
                {
                    "label": "Triacétate",
                    "id": "triacétate",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top",
                            "jupe",
                            "pantalon",
                            "robe",
                            "short",
                            "veste"
                        ],
                        "40": [
                            "manches_courtes",
                            "jupe_courte",
                            "jupe_longue",
                            "pantalon_large",
                            "robe_courte",
                            "robe_longue",
                            "manches_longues",
                            "jupe_mini",
                            "regular",
                            "bermuda",
                            "veste_tailleur"
                        ]
                    }
                },
                {
                    "label": "Cupro",
                    "id": "cupro",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top",
                            "jupe",
                            "robe",
                            "chemise_&_blouse",
                            "manteau",
                            "pull",
                            "veste"
                        ],
                        "40": [
                            "manches_longues",
                            "jupe_midi",
                            "jupe_mini",
                            "robe_courte",
                            "robe_midi",
                            "bustier",
                            "cape",
                            "manches_courtes",
                            "jupe_courte",
                            "jupe_longue",
                            "manteau_3/4",
                            "manteau_court",
                            "robe_longue",
                            "veste_tailleur"
                        ]
                    }
                },
                {
                    "label": "Modal",
                    "id": "modal",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top",
                            "robe",
                            "jupe"
                        ],
                        "40": [
                            "manches_longues",
                            "robe_courte",
                            "manches_courtes",
                            "jupe_longue"
                        ]
                    }
                },
                {
                    "label": "Vache",
                    "id": "vache",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "jupe",
                            "short",
                            "veste",
                            "haut_/_top",
                            "manteau"
                        ],
                        "40": [
                            "jupe_courte",
                            "short_mini",
                            "blouson",
                            "manches_longues",
                            "jupe_longue",
                            "manteau_3/4",
                            "manteau_court",
                            "veste_outerwear"
                        ]
                    }
                },
                {
                    "label": "Veau",
                    "id": "veau",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "jupe",
                            "manteau",
                            "robe",
                            "short",
                            "veste",
                            "cardigan_&_gilet",
                            "haut_/_top",
                            "pantalon"
                        ],
                        "40": [
                            "jupe_courte",
                            "manteau_3/4",
                            "robe_courte",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "sans_manche",
                            "manches_courtes",
                            "manches_longues",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "chino",
                            "regular",
                            "short",
                            "veste_tailleur",
                            "pantacourt"
                        ]
                    }
                },
                {
                    "label": "Nylon",
                    "id": "nylon",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "manteau",
                            "cape",
                            "cardigan_&_gilet",
                            "haut_/_top",
                            "jupe",
                            "pull",
                            "robe",
                            "short",
                            "veste",
                            "tee_shirt"
                        ],
                        "40": [
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "unique",
                            "manches_longues",
                            "manches_courtes",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_mini",
                            "robe_courte",
                            "robe_midi",
                            "short",
                            "veste_outerwear",
                            "blouson"
                        ]
                    }
                },
                {
                    "label": "Recycle",
                    "id": "recycle",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "manteau"
                        ],
                        "40": [
                            "manteau_court",
                            "manteau_long",
                            "manteau_3/4"
                        ]
                    }
                },
                {
                    "label": "Zamak",
                    "id": "zamak",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "manteau",
                            "jupe",
                            "pantalon",
                            "veste"
                        ],
                        "40": [
                            "manteau_court",
                            "jupe_courte",
                            "jupe_midi",
                            "flare",
                            "pantalon_large",
                            "regular",
                            "veste_outerwear"
                        ]
                    }
                },
                {
                    "label": "Polyéthylène",
                    "id": "polyéthylène",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)"
                        ],
                        "39": [
                            "pull"
                        ],
                        "40": [
                            "manches_longues"
                        ]
                    }
                },
                {
                    "label": "Buffle",
                    "id": "buffle",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)"
                        ],
                        "39": [
                            "veste"
                        ],
                        "40": [
                            "blouson"
                        ]
                    }
                },
                {
                    "label": "Ramie",
                    "id": "ramie",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "bolero",
                            "chemise_&_blouse",
                            "haut_/_top",
                            "jupe",
                            "robe",
                            "short",
                            "pantalon"
                        ],
                        "40": [
                            "manches_longues",
                            "bretelles",
                            "bustier",
                            "manches_courtes",
                            "sans_manche",
                            "jupe_courte",
                            "jupe_mini",
                            "robe_courte",
                            "short_mini",
                            "regular"
                        ]
                    }
                },
                {
                    "label": "Cachemire",
                    "id": "cachemire",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "haut_/_top",
                            "jupe",
                            "pull",
                            "robe"
                        ],
                        "40": [
                            "manches_courtes",
                            "manches_longues",
                            "sans_manche",
                            "jupe_courte",
                            "jupe_longue",
                            "robe_courte"
                        ]
                    }
                },
                {
                    "label": "Coyote",
                    "id": "coyote",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet"
                        ],
                        "40": [
                            "sans_manche"
                        ]
                    }
                },
                {
                    "label": "Rat Musqué",
                    "id": "rat_musqué",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "manteau"
                        ],
                        "40": [
                            "sans_manche",
                            "manteau_court"
                        ]
                    }
                },
                {
                    "label": "Renard",
                    "id": "renard",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "veste"
                        ],
                        "40": [
                            "sans_manche",
                            "veste_outerwear"
                        ]
                    }
                },
                {
                    "label": "Lurex",
                    "id": "lurex",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top",
                            "robe"
                        ],
                        "40": [
                            "manches_longues",
                            "robe_courte"
                        ]
                    }
                },
                {
                    "label": "Brass",
                    "id": "brass",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "jupe"
                        ],
                        "40": [
                            "jupe_courte"
                        ]
                    }
                },
                {
                    "label": "Python",
                    "id": "python",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "pantalon"
                        ],
                        "40": [
                            "regular",
                            "pantalon_droit"
                        ]
                    }
                },
                {
                    "label": "Lapin",
                    "id": "lapin",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "veste"
                        ],
                        "40": [
                            "veste_outerwear"
                        ]
                    }
                },
                {
                    "label": "Unique",
                    "id": "unique",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ]
                    }
                },
                {
                    "label": "Cuir",
                    "id": "cuir",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "maroquinerie"
                        ],
                        "39": [
                            "mini",
                            "banane",
                            "sac",
                            "pochette",
                            "besace"
                        ],
                        "40": [
                            "unique"
                        ]
                    }
                },
                {
                    "label": "Tissu",
                    "id": "tissu",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "maroquinerie"
                        ],
                        "39": [
                            "banane",
                            "sac_de_voyage",
                            "besace"
                        ],
                        "40": [
                            "unique"
                        ]
                    }
                },
                {
                    "label": "Tissu / Entry",
                    "id": "tissu_/_entry",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "maroquinerie"
                        ],
                        "39": [
                            "sac"
                        ],
                        "40": [
                            "unique"
                        ]
                    }
                },
                {
                    "label": "Autre",
                    "id": "autre",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape",
                            "polo"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "unique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "veste_exterieur",
                            "jogging"
                        ]
                    }
                },
                {
                    "label": "Rayon",
                    "id": "rayon",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)"
                        ],
                        "39": [
                            "haut_/_top"
                        ],
                        "40": [
                            "top_asymetrique"
                        ]
                    }
                }
            ],
            "id": 41,
            "name": "matiere_principale",
            "text": "Matière Principale",
            "helper": null
        },
        {
            "choices": [
                {
                    "label": "Pièce Vintage",
                    "id": "pièce_vintage",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "polo",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "veste_exterieur",
                            "jogging",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre"
                        ]
                    }
                },
                {
                    "label": "Pièce non Vintage",
                    "id": "pièce_non_vintage",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)",
                            "chaussures",
                            "maroquinerie"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "polo",
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots",
                            "mini",
                            "banane",
                            "sac",
                            "pochette",
                            "sac_de_voyage",
                            "besace",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "veste_exterieur",
                            "jogging",
                            "overpant",
                            "pantalon_étroit",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "unique",
                            "cuir",
                            "tissu",
                            "tissu_/_entry",
                            "autre",
                            "rayon"
                        ]
                    }
                }
            ],
            "id": 42,
            "name": "vintage",
            "text": "Vintage",
            "helper": "helper-vintage"
        },
        {
            "choices": [
                {
                    "id": 17,
                    "family": "Women shoes EU",
                    "order": 1,
                    "label": "35",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 2,
                    "family": "Women shoes EU",
                    "order": 2,
                    "label": "36",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 19,
                    "family": "Women shoes EU",
                    "order": 3,
                    "label": "37",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 3,
                    "family": "Women shoes EU",
                    "order": 4,
                    "label": "38",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 21,
                    "family": "Women shoes EU",
                    "order": 5,
                    "label": "39",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 4,
                    "family": "Women shoes EU",
                    "order": 6,
                    "label": "40",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 23,
                    "family": "Women shoes EU",
                    "order": 7,
                    "label": "41",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 5,
                    "family": "Women shoes EU",
                    "order": 8,
                    "label": "42",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "chaussures"
                        ],
                        "39": [
                            "ballerines",
                            "sneakers",
                            "bottines",
                            "bottes",
                            "cuissardes",
                            "escarpins",
                            "mocassins",
                            "sabots",
                            "sandales",
                            "baskets",
                            "boots"
                        ],
                        "40": [
                            "unique",
                            "compensée",
                            "plat",
                            "talon"
                        ],
                        "41": [
                            "unique"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 1,
                    "family": "Women wear EU Mixte",
                    "order": 1,
                    "label": "34",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 2,
                    "family": "Women wear EU Mixte",
                    "order": 2,
                    "label": "36",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 3,
                    "family": "Women wear EU Mixte",
                    "order": 3,
                    "label": "38",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 4,
                    "family": "Women wear EU Mixte",
                    "order": 4,
                    "label": "40",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 5,
                    "family": "Women wear EU Mixte",
                    "order": 5,
                    "label": "42",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 26,
                    "family": "Women wear EU Mixte",
                    "order": 6,
                    "label": "44",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 28,
                    "family": "Women wear EU Mixte",
                    "order": 7,
                    "label": "46",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 30,
                    "family": "Women wear EU Mixte",
                    "order": 8,
                    "label": "48",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 31,
                    "family": "Women wear EU Mixte",
                    "order": 9,
                    "label": "XXS",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 32,
                    "family": "Women wear EU Mixte",
                    "order": 10,
                    "label": "XS",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 33,
                    "family": "Women wear EU Mixte",
                    "order": 11,
                    "label": "S",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 34,
                    "family": "Women wear EU Mixte",
                    "order": 12,
                    "label": "M",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 35,
                    "family": "Women wear EU Mixte",
                    "order": 13,
                    "label": "L",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 36,
                    "family": "Women wear EU Mixte",
                    "order": 14,
                    "label": "XL",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 63,
                    "family": "Women wear EU Mixte",
                    "order": 15,
                    "label": "T0",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 57,
                    "family": "Women wear EU Mixte",
                    "order": 16,
                    "label": "T1",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 58,
                    "family": "Women wear EU Mixte",
                    "order": 17,
                    "label": "T2",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 59,
                    "family": "Women wear EU Mixte",
                    "order": 18,
                    "label": "T3",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 212,
                    "family": "Women wear EU Mixte",
                    "order": 19,
                    "label": "T4",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 56,
                    "family": "Women wear EU Mixte",
                    "order": 20,
                    "label": "Taille unique",
                    "before_conditions": {
                        "37": [
                            "femme"
                        ],
                        "38": [
                            "etoile_(prêt_à_porter)",
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "body",
                            "cape",
                            "cardigan_&_gilet",
                            "ceinture",
                            "chemise_&_blouse",
                            "combinaison",
                            "haut_/_top",
                            "jean",
                            "jupe",
                            "manteau",
                            "pantalon",
                            "pull",
                            "robe",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "bolero",
                            "gilet",
                            "tee_shirt"
                        ],
                        "40": [
                            "bretelles",
                            "manches_longues",
                            "unique",
                            "sans_manche",
                            "divers",
                            "manches_courtes",
                            "combishort",
                            "pantalon_/_manches_courtes",
                            "pantalon_/_manches_longues",
                            "top_asymetrique",
                            "jupe_courte",
                            "jupe_longue",
                            "jupe_midi",
                            "jupe_mini",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "boyfriend",
                            "chino",
                            "flare",
                            "girlfriend",
                            "pantacourt",
                            "pantalon_large",
                            "pantalon_droit",
                            "regular",
                            "slim",
                            "robe_courte",
                            "robe_longue",
                            "robe_midi",
                            "short",
                            "bermuda",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur",
                            "bustier",
                            "cape",
                            "overpant",
                            "pantalon_étroit"
                        ],
                        "41": [
                            "polyamide",
                            "alpaga",
                            "coton",
                            "laine",
                            "mérinos",
                            "acrylique",
                            "lin",
                            "mohair",
                            "polyester",
                            "polyuréthane",
                            "viscose",
                            "agneau",
                            "chèvre",
                            "laine_vierge",
                            "lyocell",
                            "rayonne",
                            "soie",
                            "tencel",
                            "acétate",
                            "triacétate",
                            "cupro",
                            "modal",
                            "vache",
                            "veau",
                            "nylon",
                            "recycle",
                            "zamak",
                            "polyéthylène",
                            "buffle",
                            "ramie",
                            "cachemire",
                            "coyote",
                            "rat_musqué",
                            "renard",
                            "lurex",
                            "brass",
                            "python",
                            "lapin",
                            "autre",
                            "rayon"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 3,
                    "family": "Men wear EU Mixte",
                    "order": 1,
                    "label": "38",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 4,
                    "family": "Men wear EU Mixte",
                    "order": 2,
                    "label": "40",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 5,
                    "family": "Men wear EU Mixte",
                    "order": 3,
                    "label": "42",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 26,
                    "family": "Men wear EU Mixte",
                    "order": 4,
                    "label": "44",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 28,
                    "family": "Men wear EU Mixte",
                    "order": 5,
                    "label": "46",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 30,
                    "family": "Men wear EU Mixte",
                    "order": 6,
                    "label": "48",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 44,
                    "family": "Men wear EU Mixte",
                    "order": 7,
                    "label": "50",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 45,
                    "family": "Men wear EU Mixte",
                    "order": 8,
                    "label": "52",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 46,
                    "family": "Men wear EU Mixte",
                    "order": 9,
                    "label": "54",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 47,
                    "family": "Men wear EU Mixte",
                    "order": 10,
                    "label": "56",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 32,
                    "family": "Men wear EU Mixte",
                    "order": 11,
                    "label": "XS",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 33,
                    "family": "Men wear EU Mixte",
                    "order": 12,
                    "label": "S",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 34,
                    "family": "Men wear EU Mixte",
                    "order": 13,
                    "label": "M",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 35,
                    "family": "Men wear EU Mixte",
                    "order": 14,
                    "label": "L",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 36,
                    "family": "Men wear EU Mixte",
                    "order": 15,
                    "label": "XL",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 37,
                    "family": "Men wear EU Mixte",
                    "order": 16,
                    "label": "XXL",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 38,
                    "family": "Men wear EU Mixte",
                    "order": 17,
                    "label": "3XL",
                    "before_conditions": {
                        "37": [
                            "homme"
                        ],
                        "38": [
                            "isabel_marant_(prêt_à_porter)"
                        ],
                        "39": [
                            "cardigan_&_gilet",
                            "chemise_&_blouse",
                            "combinaison",
                            "gilet",
                            "haut_/_top",
                            "jean",
                            "manteau",
                            "pantalon",
                            "polo",
                            "pull",
                            "salopette",
                            "short",
                            "sweat_shirt",
                            "veste",
                            "tee_shirt",
                            "cape"
                        ],
                        "40": [
                            "manches_longues",
                            "sans_manche",
                            "manches_courtes",
                            "veste_exterieur",
                            "unique",
                            "manteau_3/4",
                            "manteau_court",
                            "manteau_long",
                            "chino",
                            "flare",
                            "jogging",
                            "pantalon_large",
                            "regular",
                            "slim",
                            "bermuda",
                            "short",
                            "short_mini",
                            "blouson",
                            "veste_outerwear",
                            "veste_tailleur"
                        ],
                        "41": [
                            "coton",
                            "laine",
                            "mérinos",
                            "viscose",
                            "polyester",
                            "agneau",
                            "laine_vierge",
                            "lin",
                            "lyocell",
                            "soie",
                            "chèvre",
                            "nylon",
                            "polyamide",
                            "polyuréthane",
                            "recycle",
                            "rayonne",
                            "acrylique",
                            "alpaga",
                            "cachemire",
                            "mohair",
                            "veau",
                            "tencel",
                            "autre"
                        ],
                        "42": [
                            "pièce_vintage",
                            "pièce_non_vintage"
                        ]
                    }
                },
                {
                    "id": 55,
                    "family": "Taille Unique",
                    "order": 1,
                    "label": "Unique",
                    "before_conditions": {
                        "37": [
                            "femme",
                            "homme"
                        ],
                        "38": [
                            "maroquinerie"
                        ],
                        "39": [
                            "mini",
                            "banane",
                            "sac",
                            "pochette",
                            "sac_de_voyage",
                            "besace"
                        ],
                        "40": [
                            "unique"
                        ],
                        "41": [
                            "cuir",
                            "tissu",
                            "tissu_/_entry"
                        ],
                        "42": [
                            "pièce_non_vintage"
                        ]
                    }
                }
            ],
            "id": 9999,
            "name": "wear_size_family",
            "text": "Wear Size Family"
        },
        {
            "id": 10001,
            "name": "wear_color",
            "text": "Wear Color",
            "choices": [
                {
                    "label": "Autre",
                    "id": 43727,
                    "before_conditions": []
                },
                {
                    "label": "Beige",
                    "id": 1,
                    "before_conditions": []
                },
                {
                    "label": "Blanc",
                    "id": 2,
                    "before_conditions": []
                },
                {
                    "label": "Bleu",
                    "id": 11,
                    "before_conditions": []
                },
                {
                    "label": "Gris",
                    "id": 5,
                    "before_conditions": []
                },
                {
                    "label": "Jaune",
                    "id": 6,
                    "before_conditions": []
                },
                {
                    "label": "Kaki",
                    "id": 17,
                    "before_conditions": []
                },
                {
                    "label": "Marron",
                    "id": 19,
                    "before_conditions": []
                },
                {
                    "label": "Multicolore",
                    "id": 377,
                    "before_conditions": []
                },
                {
                    "label": "Noir",
                    "id": 7,
                    "before_conditions": []
                },
                {
                    "label": "Or",
                    "id": 41,
                    "before_conditions": []
                },
                {
                    "label": "Orange",
                    "id": 8,
                    "before_conditions": []
                },
                {
                    "label": "Rose",
                    "id": 10,
                    "before_conditions": []
                },
                {
                    "label": "Rouge",
                    "id": 26,
                    "before_conditions": []
                },
                {
                    "label": "Vert",
                    "id": 22,
                    "before_conditions": []
                },
                {
                    "label": "Violet",
                    "id": 25,
                    "before_conditions": []
                }
            ]
        }
    ],
    "conditions": {
        "id": 10000,
        "name": "wear_condition",
        "text": "Wear Condition",
        "choices": [
            {
                "label": "État neuf : votre pièce n'a jamais été portée et toutes les étiquettes d'origine sont présentes.",
                "id": 10,
                "before_conditions": []
            },
            {
                "label": "Excellent état : votre pièce a été très peu portée et ne présente pas de trace d'usure visible ni de modification (ourlet ou ressemelage).",
                "id": 11,
                "before_conditions": []
            },
            {
                "label": "Très bon état : votre pièce a été portée, elle présente des traces d'usure mineure ou a pu être modifiée (ourlet ou ressemelage).",
                "id": 12,
                "before_conditions": []
            }
        ]
    }
};

export default fakeFormData;
