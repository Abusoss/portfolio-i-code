export const Title = ({ Title, Subtitle }: { Title: string, Subtitle: string }) => {
   return (
      <div className="grid grid-flow-row place-items-center gap-y-2">
         <h1 className="text-4xl font-bold">{Title}</h1>
         <p className="text-lg">{Subtitle}</p>
      </div>
   )
}