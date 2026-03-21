
const ancestorKey = "internetCulture"; // replace with your ancestor key
const parentRef = ref(db, ancestorKey);

// Query the last parent key
const lastKeyQuery = query(parentRef, limitToLast(1));

get(lastKeyQuery).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Get the last key
    const lastKey = Object.keys(data)[0];
    console.log("Last parent key:", lastKey);
  } else {
    console.log("No data found.");
  }
});