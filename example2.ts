const Component: FC = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);
    // 1. passing `setSecondsElapsed` is not required
    // 2. Each time this callback runs, will add one more listener without removing the previous one. We can fix it by returning a callback from the useEffect.
    // 3. A better approach would be to make deps array an empty and use this syntax `setSecondsElapsed(prevSecondsElapsed => prevSecondsElapsed + 1);`
    
    
  }, [secondsElapsed, setSecondsElapsed]);

  return (
    <span>
      Seconds elapsed: {secondsElapsed}
    </span>
  );
};
