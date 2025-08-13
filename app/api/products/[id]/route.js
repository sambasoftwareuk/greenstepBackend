import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// JSON dosyasının yolu
const productsFilePath = path.join(
  process.cwd(),
  "app/constants/bigCardProducts.json"
);

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const updatedProduct = await request.json();

    // Mevcut ürünleri oku
    const productsData = fs.readFileSync(productsFilePath, "utf8");
    const products = JSON.parse(productsData);

    // Ürünü bul ve güncelle
    const productIndex = products.findIndex((p) => p.id === parseInt(id));

    if (productIndex === -1) {
      return NextResponse.json({ error: "Ürün bulunamadı" }, { status: 404 });
    }

    // Ürünü güncelle
    products[productIndex] = {
      ...products[productIndex],
      ...updatedProduct,
    };

    // Dosyaya kaydet
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    return NextResponse.json({
      message: "Ürün başarıyla güncellendi",
      product: products[productIndex],
    });
  } catch (error) {
    console.error("Product update error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Mevcut ürünleri oku
    const productsData = fs.readFileSync(productsFilePath, "utf8");
    const products = JSON.parse(productsData);

    // Ürünü bul
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return NextResponse.json({ error: "Ürün bulunamadı" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Product get error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
