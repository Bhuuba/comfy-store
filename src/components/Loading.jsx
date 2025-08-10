const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-muted border-t-primary shadow-sn" />
    </div>
  );
};

export default Loading;
