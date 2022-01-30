export async function getAllSalonsData() {
  const blob = await import("./salons-blob.json");

  const salonsData = blob.default.map(({ company, id }) => {
    return { company, id };
  });

  return salonsData;
}

export async function getAllSalonsIds() {
  const blob = await import("./salons-blob.json");

  const ids = blob.default.map(({ id }) => {
    return {
      params: {
        id,
      },
    };
  });
  return ids;
}

export async function getSalonData(id) {
  const blob = await import("./salons-blob.json");
  return blob.default.find((x) => x.id === id);
}
