import { database } from "./firebase";
import { onChildAdded, ref } from "firebase/database";


function getVariables() {
    const DB_EXP_KEY = "exp";
    const expRef = ref(database, DB_EXP_KEY);
    const expdict = {}
    onChildAdded(expRef, (data) => {
        // Add the subsequent child to local component state, initialising a new array to trigger re-render
        expdict[data.key]=data.val()
    });

    const DB_RARITY_KEY = "rarity";
    const rarityRef = ref(database, DB_RARITY_KEY);
    const rarity = []
    onChildAdded(rarityRef, (data) => {
        // Add the subsequent child to local component state, initialising a new array to trigger re-render
        rarity.push(data.val())
    });

    const DB_TYPE_KEY = "type";
    const typeRef = ref(database, DB_TYPE_KEY);
    const type = []
    onChildAdded(typeRef, (data) => {
        // Add the subsequent child to local component state, initialising a new array to trigger re-render
        type.push(data.val())
    });

    const DB_SUBSET_KEY = "subset";
    const subsetRef = ref(database, DB_SUBSET_KEY);
    const subset = []
    onChildAdded(subsetRef, (data) => {
        // Add the subsequent child to local component state, initialising a new array to trigger re-render
        subset.push(data.val())
    });

    const DB_RANK_KEY = "rank";
    const rankRef = ref(database, DB_RANK_KEY);
    const rank = []
    onChildAdded(rankRef, (data) => {
        // Add the subsequent child to local component state, initialising a new array to trigger re-render
        rank.push(data.val())
    });
}
