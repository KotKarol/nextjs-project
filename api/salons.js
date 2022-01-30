export async function getAllSalonsData() {
  const blob = await import("./salons.json");

  const salonsData = blob.default.map(({ company, id }) => {
    return { company, id };
  });

  return salonsData;
}

export async function getAllSalonsIds() {
  const blob = await import("./salons.json");

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
  const blob = await import("./salons.json");
  return blob.default.find((x) => x.id === id);
}
