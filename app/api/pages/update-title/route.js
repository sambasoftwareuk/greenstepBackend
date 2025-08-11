import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function PUT(request) {
  try {
    const { page, title } = await request.json();

    // Sayfa başlıklarını saklayan JSON dosyası
    const titlesFilePath = path.join(
      process.cwd(),
      "app/constants/pageTitles.json"
    );

    let titles = {};
    
    // Eğer dosya varsa oku, yoksa yeni oluştur
    if (fs.existsSync(titlesFilePath)) {
      const titlesData = fs.readFileSync(titlesFilePath, "utf8");
      titles = JSON.parse(titlesData);
    }

    // Başlığı güncelle
    titles[page] = title;

    // Dosyaya kaydet
    fs.writeFileSync(titlesFilePath, JSON.stringify(titles, null, 2));

    return NextResponse.json({
      message: "Sayfa başlığı başarıyla güncellendi",
      title: title,
    });
  } catch (error) {
    console.error("Title update error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

