import { company } from "@/data/company";
import { businessContact } from "@/data/business";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    site: {
      name: company.name,
      legalName: company.legalName,
      slogan: company.slogan,
      websiteUrl: company.websiteUrl,
      contactEmail: company.contactEmail,
      businessEmail: businessContact.email,
      contactPhone: company.contactPhone,
    },
    generatedAt: new Date().toISOString(),
  });
}
