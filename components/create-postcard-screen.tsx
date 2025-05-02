import type React from "react";
import { useState } from "react";
import { Camera, MapPin, Tag, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { LocationPicker } from "./location-picker";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreatePostcardScreen() {
  const router = useRouter();
  const [step, setStep] = useState<"image" | "details" | "preview">("image");
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventTag, setEventTag] = useState("");
  const [location, setLocation] = useState<{
    name: string;
    latitude: number;
    longitude: number;
  } | null>(null);
  const [isMinting, setIsMinting] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setStep("details");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!image || !title || !location) return;

    setStep("preview");
  };

  const handleMint = async () => {
    setIsMinting(true);
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false);
      router.push("/home");
    }, 2000);
  };

  const handleCancel = () => {
    if (step === "image") {
      router.push("/home");
    } else if (step === "details") {
      setStep("image");
    } else {
      setStep("details");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow-sm">
        <button onClick={handleCancel} className="text-slate-600">
          <X className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold text-center text-purple-600">
          {step === "image"
            ? "Upload Image"
            : step === "details"
              ? "Add Details"
              : "Preview Postcard"}
        </h1>
        <div className="w-6"></div> {/* Spacer for alignment */}
      </header>

      <main className="p-4">
        {step === "image" && (
          <div className="flex flex-col items-center justify-center gap-6 py-12">
            <div className="relative h-64 w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <Camera className="h-12 w-12" />
                <p>Tap to upload an image</p>
              </div>
            </div>

            <p className="text-sm text-slate-500 text-center">
              Choose a photo from your gallery or take a new one
            </p>
          </div>
        )}

        {step === "details" && (
          <div className="space-y-6 py-4">
            {image && (
              <div className="relative h-48 w-full rounded-xl overflow-hidden">
                <Image
                  fill
                  src={image || "/placeholder.svg"}
                  alt="Uploaded image"
                  className="object-cover"
                />
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Title
                </label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your postcard a title"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Description
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add a description (optional)"
                  rows={3}
                />
              </div>

              <div>
                <label
                  htmlFor="eventTag"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Event Tag
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Tag className="h-4 w-4 text-slate-400" />
                  </div>
                  <Input
                    id="eventTag"
                    value={eventTag}
                    onChange={(e) => setEventTag(e.target.value)}
                    placeholder="Add an event tag"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Location
                </label>
                <LocationPicker onLocationSelect={setLocation} />
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!title || !location}
              className="w-full"
            >
              Continue
            </Button>
          </div>
        )}

        {step === "preview" && (
          <div className="space-y-6 py-4">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              {image && (
                <div className="relative h-64 w-full">
                  <Image
                    fill
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>

                {description && (
                  <p className="mt-2 text-slate-600">{description}</p>
                )}

                <div className="mt-4 flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="h-4 w-4" />
                  <span>{location?.name}</span>
                </div>

                {eventTag && (
                  <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                    <Tag className="h-4 w-4" />
                    <span>{eventTag}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep("details")}
                className="flex-1"
              >
                Edit
              </Button>

              <Button
                onClick={handleMint}
                disabled={isMinting}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                {isMinting ? "Minting..." : "Mint & Share"}
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
