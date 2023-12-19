export default function Loader() {
  return (
    <div className="flex space-x-4 justify-center">
      <div className="h-6 w-6 rounded-full bg-white animate-bounce" />
      <div className="h-6 w-6 rounded-full bg-white animate-bounce" key="circle2" style={{ animationDelay: '250ms' }} />
      <div className="h-6 w-6 rounded-full bg-white animate-bounce" key="circle3" style={{ animationDelay: '500ms' }} />
    </div>
  );
}