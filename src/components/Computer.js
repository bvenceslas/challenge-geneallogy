export default function Computer({ geneas }) {
  const geneaCount = geneas.length;
  const ageCount = geneas
    ? geneas.reduce((acc, genea) => genea.age + acc, 0)
    : 0;

  const hasGeneas = geneaCount > 0;
  const maxYears = geneaCount * 100;
  const rateGenea = (ageCount / maxYears) * 100;

  const isBestOfTheBest = rateGenea >= 100;
  const isBest = rateGenea >= 70 && rateGenea < 100;
  const isGood = rateGenea >= 50 && rateGenea < 70;
  const isPoor = rateGenea < 50;

  return (
    <div className="computer">
      {hasGeneas && (
        <>
          <p className="generation">
            {geneaCount > 1
              ? `${geneaCount} generations`
              : `${geneaCount} generation`}
          </p>

          <p className="result">{`Genealogy Life: ${ageCount}/${maxYears}`}</p>

          {isBestOfTheBest && <p className="quality">Best of the Best ✅</p>}

          {isBest && <p className="quality">Best 👍🏽</p>}

          {isGood && <p className="quality">Good 😍</p>}

          {isPoor && <p className="quality">Poor 🥲</p>}
        </>
      )}
    </div>
  );
}
