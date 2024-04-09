const dummyData = [
  {
    title: "Title 1",
    imageSrc:
      "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "1",
  },
  {
    title: "Title 2",
    imageSrc:
      "https://images.unsplash.com/photo-1532174990295-ced4e9211e1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "2",
  },
  {
    title: "Title 3",
    imageSrc:
      "https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "3",
  },
];

export async function getAllPosts() {
  return dummyData;
}

export async function getPostById(id: string) {
  return dummyData.find((post) => post.id === id);
}
