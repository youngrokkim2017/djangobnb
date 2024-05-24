import Image from "next/image";

const PropertDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          left
        </div>

        <div>
          right
        </div>
      </div>
    </main>
  )
}

export default PropertDetailPage;