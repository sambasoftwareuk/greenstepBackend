import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function PUT(request) {
  try {
    const permissions = await request.json();
    const permissionsFilePath = path.join(
      process.cwd(),
      "app/constants/rolePermissions.json"
    );

    // Yetkileri JSON dosyasına kaydet
    fs.writeFileSync(permissionsFilePath, JSON.stringify(permissions, null, 2));

    return NextResponse.json({
      message: "Yetkiler başarıyla güncellendi",
      permissions: permissions,
    });
  } catch (error) {
    console.error("Permission update error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const permissionsFilePath = path.join(
      process.cwd(),
      "app/constants/rolePermissions.json"
    );

    let permissions = {
      admin: {
        edit_products: false,
        edit_title: false,
        add_products: false,
        delete_products: false,
        edit_images: false,
        edit_descriptions: false,
        manage_users: false,
        access_financial: false,
      },
      director: {
        edit_products: false,
        edit_title: false,
        add_products: false,
        delete_products: false,
        edit_images: false,
        edit_descriptions: false,
        manage_users: false,
        access_financial: false,
      },
      super_admin: {
        edit_products: true,
        edit_title: true,
        add_products: true,
        delete_products: true,
        edit_images: true,
        edit_descriptions: true,
        manage_users: true,
        access_financial: true,
      },
    };

    if (fs.existsSync(permissionsFilePath)) {
      const permissionsData = fs.readFileSync(permissionsFilePath, "utf8");
      permissions = JSON.parse(permissionsData);
    }

    return NextResponse.json(permissions);
  } catch (error) {
    console.error("Permission read error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
