type ResetSetters = {
    setTimeCount: React.Dispatch<React.SetStateAction<number>>;
    setPrevScore: React.Dispatch<React.SetStateAction<number | null>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setNormal: React.Dispatch<React.SetStateAction<number>>;
    setRea: React.Dispatch<React.SetStateAction<number>>;
    setSuperRea: React.Dispatch<React.SetStateAction<number>>;
    setLegendRea: React.Dispatch<React.SetStateAction<number>>;
    setChara: React.Dispatch<React.SetStateAction<string>>;
    setBgColor: React.Dispatch<React.SetStateAction<string>>;
};

export const onclickNext = (timeCount: number, score: number, setters: ResetSetters) => {
    if (timeCount === 0) {
        setters.setPrevScore(score);
    }
    setters.setTimeCount(15);
    setters.setScore(0);
    setters.setNormal(0);
    setters.setRea(0);
    setters.setSuperRea(0);
    setters.setLegendRea(0);
    setters.setChara("");
    setters.setBgColor("white");
}