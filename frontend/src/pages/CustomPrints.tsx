import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Image, Palette, Package, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const steps = [
  { id: 1, title: "Choose Product", description: "Select what you want to print on", icon: Package },
  { id: 2, title: "Upload Design", description: "Add your artwork or photo", icon: Upload },
  { id: 3, title: "Customize", description: "Adjust position and size", icon: Palette },
  { id: 4, title: "Preview & Order", description: "See your creation and checkout", icon: Image },
];

const products = [
  { id: "tshirt", name: "T-Shirt", price: "From $35", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
  { id: "hoodie", name: "Hoodie", price: "From $65", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400" },
  { id: "mug", name: "Mug", price: "From $18", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400" },
  { id: "cushion", name: "Cushion", price: "From $40", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
  { id: "poster", name: "Poster", price: "From $25", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
  { id: "phonecase", name: "Phone Case", price: "From $22", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400" },
];

export default function CustomPrints() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-caption text-accent mb-4 block">Create Your Own</span>
              <h1 className="heading-display mb-6">Custom Prints</h1>
              <p className="text-primary-foreground/70 text-lg">
                Bring your vision to life. Upload your design and we'll print it on premium products with stunning quality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {steps.map((step, i) => (
                <div key={step.id} className="flex items-center">
                  <motion.button
                    onClick={() => setCurrentStep(step.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 ${
                      currentStep === step.id ? "text-accent" : currentStep > step.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      currentStep === step.id ? "border-accent bg-accent/10" : 
                      currentStep > step.id ? "border-accent bg-accent text-accent-foreground" : "border-border"
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    <span className="hidden md:block font-medium">{step.title}</span>
                  </motion.button>
                  {i < steps.length - 1 && (
                    <div className={`w-8 md:w-16 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-accent" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step Content */}
        <section className="section-padding">
          <div className="container-wide">
            {/* Step 1: Choose Product */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto"
              >
                <h2 className="heading-section text-center mb-12">
                  What would you like to print on?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <motion.button
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      whileHover={{ y: -8 }}
                      className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-colors ${
                        selectedProduct === product.id ? "border-accent" : "border-transparent"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-left text-primary-foreground">
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-sm text-primary-foreground/70">{product.price}</p>
                      </div>
                      {selectedProduct === product.id && (
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                          <Check className="h-5 w-5 text-accent-foreground" />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
                <div className="flex justify-center mt-12">
                  <Button
                    onClick={() => selectedProduct && setCurrentStep(2)}
                    disabled={!selectedProduct}
                    className="btn-accent group"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Upload Design */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="heading-section mb-4">Upload Your Design</h2>
                <p className="text-muted-foreground mb-12">
                  We accept PNG, JPG, or SVG files. For best results, use high-resolution images.
                </p>

                <motion.label
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block aspect-video border-2 border-dashed border-border rounded-2xl cursor-pointer hover:border-accent transition-colors bg-muted/50"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => setUploadedImage(e.target?.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Uploaded design"
                      className="w-full h-full object-contain p-8"
                    />
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center p-8">
                      <Upload className="h-16 w-16 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium mb-2">Drop your design here</p>
                      <p className="text-muted-foreground">or click to browse</p>
                    </div>
                  )}
                </motion.label>

                <div className="flex justify-center gap-4 mt-12">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    Back
                  </Button>
                  <Button
                    onClick={() => uploadedImage && setCurrentStep(3)}
                    disabled={!uploadedImage}
                    className="btn-accent group"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Customize */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto"
              >
                <h2 className="heading-section text-center mb-12">Customize Your Print</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Preview */}
                  <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center p-8">
                    <div className="relative w-full max-w-xs">
                      <img
                        src={products.find(p => p.id === selectedProduct)?.image}
                        alt="Product"
                        className="w-full rounded-lg"
                      />
                      {uploadedImage && (
                        <img
                          src={uploadedImage}
                          alt="Design"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 opacity-90"
                        />
                      )}
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold mb-4">Print Size</h3>
                      <div className="flex gap-4">
                        {["Small", "Medium", "Large"].map((size) => (
                          <button
                            key={size}
                            className="flex-1 py-3 border border-border rounded-lg hover:border-accent transition-colors"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Position</h3>
                      <div className="flex gap-4">
                        {["Center", "Left", "Right"].map((pos) => (
                          <button
                            key={pos}
                            className="flex-1 py-3 border border-border rounded-lg hover:border-accent transition-colors"
                          >
                            {pos}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-8">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        Back
                      </Button>
                      <Button onClick={() => setCurrentStep(4)} className="flex-1 btn-accent group">
                        Preview Order
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Preview */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-8">
                  <Check className="h-10 w-10 text-accent" />
                </div>
                <h2 className="heading-section mb-4">Your Design is Ready!</h2>
                <p className="text-muted-foreground mb-12">
                  Review your custom creation and add it to your cart.
                </p>

                <div className="aspect-square max-w-md mx-auto bg-muted rounded-2xl flex items-center justify-center p-8 mb-12">
                  <div className="relative w-full max-w-xs">
                    <img
                      src={products.find(p => p.id === selectedProduct)?.image}
                      alt="Product"
                      className="w-full rounded-lg"
                    />
                    {uploadedImage && (
                      <img
                        src={uploadedImage}
                        alt="Design"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 opacity-90"
                      />
                    )}
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={() => setCurrentStep(3)}>
                    Edit Design
                  </Button>
                  <Button className="btn-accent">
                    Add to Cart — $45
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}