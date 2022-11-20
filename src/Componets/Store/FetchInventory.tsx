export default function FetchInventory(cat:string) {
    return fetch('https://hackathon-store-default-rtdb.firebaseio.com/.json')
      .then((res) => res.json())
      .then((data) => data[cat])
}