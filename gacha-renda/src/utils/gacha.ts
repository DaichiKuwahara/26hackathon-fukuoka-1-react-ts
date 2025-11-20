type Setters = {
    setNormal: React.Dispatch<React.SetStateAction<number>>;
    setRea: React.Dispatch<React.SetStateAction<number>>;
    setSuperRea: React.Dispatch<React.SetStateAction<number>>;
    setLegendRea: React.Dispatch<React.SetStateAction<number>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setChara: React.Dispatch<React.SetStateAction<string>>;
    setBgColor: React.Dispatch<React.SetStateAction<string>>;
};



export const onclick = (timeCount: number, setters: Setters) => {
    if (timeCount > 0) {
        const random = Math.random();
        if (random < 0.5) {
        new Audio('/ボヨン.mp3').play();
        setters.setNormal((n) => n + 1);
        setters.setScore((s) => s + 1);
        setters.setChara("ノーマル：😘");
        setters.setBgColor("white");
        } else if (random < 0.8) {
        new Audio('/きらーん2.mp3').play();
        setters.setRea((r) => r + 1);
        setters.setScore((s) => s + 2);
        setters.setChara("レア：👿");
        setters.setBgColor("#ffeeee");
        } else if (random < 0.95) {
        new Audio('/決定ボタンを押す33.mp3').play();
        setters.setSuperRea((s) => s + 1);
        setters.setScore((s) => s + 10);
        setters.setChara("スーパーレア：🤖");
        setters.setBgColor("lightblue");
        } else {
        new Audio('/決定ボタンを押す20.mp3').play();
        setters.setLegendRea((l) => l + 1);
        setters.setScore((s) => s + 100);
        setters.setChara("レジェンドレア：🐉");
        setters.setBgColor("gold");
        }
    }
}