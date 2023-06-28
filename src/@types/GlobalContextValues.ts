export type GlobalContextValues = {
  animationType: string;
  setAnimationType: React.Dispatch<React.SetStateAction<string>>;
  isLoaded: object & {
    animationType: boolean;
    observer: boolean;
  };
  setIsLoaded: React.Dispatch<
    React.SetStateAction<{
      animationType: boolean;
      observer: boolean;
    }>
  >;
};
