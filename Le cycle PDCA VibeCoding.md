# Le cycle PDCA VibeCoding

[#vibecoding #pdca #vibecoding #genai #iagenerative #pdca #dev #softwarecraftsmanship #nocode #lowcode #cursor #windsurf #antigravity #lovable | Jean Noël Lefebvre](https://www.linkedin.com/posts/jnlootsidebox_vibecoding-pdca-vibecoding-activity-7424438708549976065-tSIW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAGVT9QByHMZlSqfdqEO-qpwTG4kyW6VhEs)

## *Une méthodologie d'amélioration continue pour le développement assisté par IA*

---

## **Le PDCA : origines et principes fondamentaux**

Le cycle PDCA, également connu sous le nom de roue de Deming ou cycle de Shewhart, est une méthode d'amélioration continue développée dans les années 1950 par W. Edwards Deming, statisticien et consultant en management américain. Bien que souvent associé à Deming, ce cycle trouve ses racines dans les travaux de Walter A. Shewhart, pionnier du contrôle statistique de la qualité dans les années 1930. Deming a popularisé et systématisé cette approche, notamment au Japon dans l'après-guerre, où elle a contribué au miracle industriel japonais et à la montée en puissance de leurs méthodes de gestion de la qualité.

L'acronyme PDCA désigne quatre phases successives : **Plan** (Planifier), **Do** (Réaliser/Exécuter), **Check** (Vérifier/Contrôler), et **Act** (Agir/Ajuster). Le principe fondamental est simple mais puissant : plutôt que de chercher la perfection du premier coup, on adopte une approche itérative où chaque cycle apporte une amélioration incrémentale. On planifie une action, on l'exécute à petite échelle, on vérifie les résultats obtenus, puis on ajuste en conséquence avant de recommencer le cycle.

Cette méthodologie repose sur une philosophie de l'amélioration continue, ou "Kaizen" en japonais. L'idée est que de petites améliorations régulières et systématiques produisent, sur le long terme, des résultats plus durables et plus profonds que des transformations brutales et ponctuelles. Le PDCA encourage également une culture de l'expérimentation et de l'apprentissage par l'erreur : chaque cycle, qu'il soit réussi ou non, génère de la connaissance qui enrichit le cycle suivant.

Initialement conçu pour le contrôle qualité dans l'industrie manufacturière, le PDCA a depuis largement dépassé ce cadre d'origine. On le retrouve aujourd'hui dans des domaines aussi variés que le management de projet, l'amélioration des processus, le développement de produits, la gestion des services, ou encore la conduite du changement organisationnel. Sa force réside dans sa simplicité conceptuelle et son adaptabilité : les quatre phases peuvent se décliner à différentes échelles (du projet stratégique à la tâche quotidienne) et dans différents contextes (industrie, services, recherche, éducation).

La représentation visuelle du PDCA en forme de roue est particulièrement parlante : elle symbolise le mouvement continu, l'absence de point d'arrêt définitif, et l'idée que chaque tour de roue fait avancer l'organisation ou le projet vers un niveau de qualité supérieur. Certains y ajoutent même une cale sous la roue pour signifier qu'il ne faut pas revenir en arrière, que chaque amélioration acquise doit être standardisée et maintenue.

---

![image.png](image.png)

## **Introduction : Le VibeCoding et l'amélioration continue**

Le VibeCoding se caractérise par une boucle de feedback particulièrement rapide entre l'intention, l'implémentation par l'IA, l'essai et la validation ou correction. Cette rapidité d'itération, qui constitue l'un des atouts majeurs de cette approche, peut cependant manquer de structure si elle n'est pas formalisée.

Le cycle PDCA offre justement un cadre méthodologique qui permet de capitaliser sur cette vélocité tout en maintenant une rigueur dans le processus de développement. La méthodologie présentée ici applique le PDCA à une **granularité très fine**, celle de la feature individuelle définie dans un PRD ou une spécification technique. Chaque fonctionnalité fait l'objet d'un cycle complet et indépendant, permettant un contrôle constant de la qualité tout en conservant la vitesse d'exécution propre au VibeCoding.

---

## **Contexte d'application**

Cette méthodologie s'applique au niveau d'une feature unique, c'est-à-dire d'une fonctionnalité clairement identifiée et délimitée dans la documentation du projet. Il est important de noter que la phase de recherche et de veille technique intervient **en amont du cycle**, avant même d'entamer le premier PLAN. Cette phase préparatoire peut inclure la consultation de documentation, l'exploration de patterns architecturaux ou l'évaluation de bibliothèques tierces. Une fois cette exploration réalisée, on peut entrer dans le cycle PDCA proprement dit.

---

[https://www.youtube.com/watch?v=lAZEiBqTJy4](https://www.youtube.com/watch?v=lAZEiBqTJy4)

## **P - PLAN : Planifier la feature**

### Objectif

Définir clairement ce qu'on veut obtenir et préparer le terrain pour une implémentation réussie.

### La démarche

La phase de planification transforme une intention en un plan d'action précis et mesurable. On commence par extraire la feature du document de spécification et la reformuler de manière opérationnelle. Il ne s'agit pas simplement de recopier ce qui est écrit dans le PRD, mais de traduire cette description en termes techniques concrets.

La définition des **critères d'acceptation** est cruciale car elle déterminera ce qu'on vérifiera lors de la phase CHECK. Les critères doivent être à la fois précis et testables : "Comment saurai-je que cette feature est complète et fonctionne correctement ?" Par exemple : "L'utilisateur peut sélectionner plusieurs catégories simultanément" ou "Les résultats se mettent à jour en temps réel sans rechargement de page".

L'identification des **dépendances** avec le reste de l'application est également essentielle. Une nouvelle feature s'insère rarement de manière isolée : elle interagit avec des composants existants, utilise des services partagés, modifie des flux de données. Il faut cartographier ces points de contact pour anticiper les impacts potentiels.

Enfin, on prépare le **contexte pour l'IA** : patterns architecturaux utilisés, conventions de nommage, bibliothèques disponibles, structure des fichiers. Contrairement à un développeur humain qui garde en mémoire l'architecture globale, l'IA doit recevoir explicitement ces informations pour générer du code cohérent avec l'existant.

### Spécificité VibeCoding

Point critique : il faut **démarrer une nouvelle session de chat** avec l'agent de codage pour chaque feature. Cette pratique garantit un contexte vierge, non contaminé par les discussions précédentes, et évite les confusions ou les références inappropriées à d'autres features.

---

## **D - DO : Implémenter**

### Objectif

Générer et intégrer le code de la feature dans la codebase.

### La démarche

Fort du plan établi précédemment, on rédige maintenant le **prompt structuré** qui sera soumis à l'IA. Ce prompt doit contenir tous les éléments contextuels préparés dans la phase PLAN : la description précise de la feature, les critères d'acceptation, les contraintes techniques, les conventions à respecter. Plus le prompt est riche et structuré, plus le code généré sera aligné avec les attentes.

L'IA génère alors le code correspondant. Cette génération peut se faire en une seule fois pour des features simples, ou nécessiter plusieurs échanges pour des fonctionnalités plus complexes. Dans tous les cas, on reste dans la même session de chat ouverte au début de cette feature.

Une fois le code généré, on l'intègre dans la codebase et on effectue un **premier test rapide** : le code compile-t-il ? L'application se lance-t-elle ? Y a-t-il des erreurs syntaxiques évidentes ? Ce premier contrôle permet d'identifier immédiatement les problèmes bloquants avant de passer à une vérification plus approfondie.

---

## **C - CHECK : Vérifier**

### Objectif

S'assurer que la feature fonctionne correctement et n'a pas dégradé l'existant.

### La démarche

La phase de vérification comporte deux volets complémentaires et tous deux essentiels.

Le premier volet concerne le **test de la feature elle-même**. On reprend ici les critères d'acceptation définis lors du PLAN et on les vérifie systématiquement. Chaque critère est testé dans des conditions d'usage réelles ou simulées. On ne se contente pas de vérifier le "happy path" (le scénario nominal), mais on teste également les cas limites, les erreurs potentielles, les comportements aux frontières. Ces tests sont principalement manuels, l'automatisation restant optionnelle selon le contexte du projet.

Le second volet, tout aussi important, porte sur la **vérification de non-régression**. En VibeCoding, l'IA peut modifier des parties inattendues du code ou introduire des effets de bord non anticipés. Il est donc crucial de s'assurer que les fonctionnalités existantes continuent de fonctionner normalement. On teste les features déjà implémentées, on vérifie les flux utilisateurs principaux, on s'assure que rien n'a été cassé par l'ajout de la nouvelle feature.

Tous les écarts constatés sont documentés de manière précise : bugs identifiés, comportements inattendus, effets de bord sur d'autres parties de l'application. Cette documentation servira de base pour la phase ACT suivante.

---

## **A - ACT : Ajuster ou Valider**

### Objectif

Décider de la suite à donner en fonction des résultats du CHECK.

### Cas 1 : Feature validée

Si tous les critères d'acceptation sont remplis et qu'aucune régression n'a été détectée, la feature est considérée comme terminée. Le code est mergé ou commité dans la branche principale. On peut alors passer à la feature suivante en démarrant un nouveau cycle PDCA complet, avec une nouvelle session de chat pour garantir un contexte vierge.

### Cas 2 : Feature non validée

Si le CHECK a révélé des problèmes, il faut d'abord en **diagnostiquer la nature** pour choisir le bon point de rebouclage dans le cycle.

**Les problèmes mineurs** se caractérisent par leur nature superficielle : un prompt imprécis, un petit oubli dans les instructions, un détail mal formulé. Dans ce cas, la solution est simple : on retourne directement à la phase DO, on ajuste le prompt dans la même session de chat, et on réitère l'implémentation puis la vérification. Le cycle se raccourcit alors à DO → CHECK → ACT jusqu'à résolution.

**Les problèmes majeurs** révèlent quant à eux une incompréhension plus fondamentale : mauvaise approche architecturale, feature mal comprise, contraintes techniques non prises en compte. Dans ce cas, un simple ajustement de prompt ne suffira pas. Il faut retourner à la phase PLAN pour replanifier la feature en tenant compte des enseignements du CHECK. On identifie ce qui a été mal anticipé, on ajuste le plan en conséquence, puis on démarre une **nouvelle session de chat** pour repartir sur des bases saines. Le cycle complet recommence alors : PLAN → DO → CHECK → ACT.

---

## **Le cycle en boucle : une amélioration continue**

Le principe fondamental du PDCA est l'amélioration continue par itération. Dans le contexte du VibeCoding, cette amélioration se manifeste à deux niveaux.

Au niveau de chaque feature, le cycle peut tourner plusieurs fois avant validation. Chaque itération DO → CHECK apporte son lot d'apprentissages qui permettent d'affiner l'approche. Le développeur apprend à mieux formuler ses prompts, à mieux anticiper les pièges, à mieux structurer son contexte.

Au niveau du projet dans son ensemble, chaque feature complétée enrichit la base de connaissance pour les features suivantes. Les patterns qui ont bien fonctionné sont réutilisés, les erreurs évitées sont documentées, les techniques de prompt éprouvées sont capitalisées. Le PLAN de la feature N+1 bénéficie ainsi de tout ce qui a été appris lors de la feature N.

---

## **Les points clés de la méthodologie**

Cette approche PDCA appliquée au VibeCoding repose sur quatre principes fondamentaux qui en garantissent l'efficacité.

Le **contexte vierge** d'abord : chaque nouvelle feature démarre dans une nouvelle session de chat, évitant ainsi toute contamination par des discussions antérieures. Cette pratique peut sembler contraignante, mais elle est garante de la cohérence du code généré.

L'**itération rapide** ensuite : le cycle peut et doit tourner plusieurs fois par feature. La vélocité du VibeCoding prend tout son sens ici, permettant des ajustements rapides sans friction excessive.

Le **feedback immédiat** également : la phase CHECK est systématique et ne doit jamais être négligée ou expédiée. C'est elle qui garantit la qualité et détecte les régressions avant qu'elles ne deviennent problématiques.

L'**apprentissage continu** enfin : chaque ACT nourrit le prochain PLAN, créant une spirale vertueuse d'amélioration continue. Les erreurs deviennent des opportunités d'apprentissage, les succès des patterns à réutiliser.

---

## **Conclusion**

Le cycle PDCA VibeCoding formalise une pratique qui, bien que naturellement présente dans le développement assisté par IA, gagne énormément à être structurée. Il offre un cadre méthodologique qui permet de maintenir qualité et rigueur tout en exploitant pleinement la rapidité d'itération du VibeCoding. Cette approche micro-itérative, appliquée feature par feature, constitue un équilibre optimal entre vitesse d'exécution et contrôle qualité, deux exigences souvent perçues comme antagonistes mais ici réconciliées par la méthode.