import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });
    }

    // Dosya adını güvenli hale getir
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Dosya adını benzersiz yap
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, fileName);

    // Uploads klasörünü oluştur (eğer yoksa)
    const fs = await import("fs");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Dosyayı kaydet
    await writeFile(filePath, buffer);

    // Dosya URL'ini döndür
    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({
      message: "Dosya başarıyla yüklendi",
      url: fileUrl,
    });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json(
      { error: "Dosya yükleme hatası" },
      { status: 500 }
    );
  }
}
