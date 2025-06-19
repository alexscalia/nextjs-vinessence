export interface Wine {
  name: string;
  slug: string;
  region_slug: string;
  region_en: string;
  region_th: string;
  grape_varieties_en: string;
  grape_varieties_th: string;
  the_estate_en: string;
  the_estate_th: string;
  terroir_en: string;
  terroir_th: string;
  vinification_en: string;
  vinification_th: string;
  tasting_notes_en: string;
  tasting_notes_th: string;
  pairing_en: string;
  pairing_th: string;
  service_temperature: string;
  vintage: string;
  sku: string;
  abv: string;
  rating: string;
  price: string;
}

export const wines: Wine[] = [
  {
    "name": "Prestige des Sacres Brut Nature Champagne",
    "slug": "prestige-des-sacres-brut-nature-champagne",
    "region_slug": "champagne",
    "region_en": "Champagne, Montagne de Reims",
    "region_th": "แชมเปญ, มงตาญเดอแรงส์",
    "grape_varieties_en": "1/3 Chardonnay, 1/3 Pinot Meunier, 1/3 Pinot Noir",
    "grape_varieties_th": "1/3 ชาร์ดอนเนย์, 1/3 ปีโน มูนิเยร์, 1/3 ปีโน นัวร์",
    "the_estate_en": "Founded in the 1960s by René Lamblot and fellow winegrowers, Champagne Prestige des Sacres represents the expertise of 60 passionate growers. Their vineyards on the western slopes of the Montagne de Reims produce Champagnes that celebrate tradition and quality, honoring the historic coronations of French kings in Reims.",
    "the_estate_th": "ก่อตั้งในปี 1960 โดย René Lamblot และเพื่อนผู้ปลูกไวน์ แชมเปญ เพรสทีจ เดส์ ซาเคร์ เป็นตัวแทนของความเชี่ยวชาญของผู้ปลูกผู้หลงใหล 60 ราย ไร่องุ่นของพวกเขาบนเนินเขาทางตะวันตกของมงตาญเดอแรงส์ ผลิตแชมเปญที่เฉลิมฉลองประเพณีและคุณภาพ เพื่อเป็นเกียรติแก่การสถาปนากษัตริย์ฝรั่งเศสในประวัติศาสตร์ที่แรงส์",
    "terroir_en": "• Soil: Limestone and chalk\n• Agriculture: Sustainable vineyard management",
    "terroir_th": "• ดิน: หินปูนและชอล์ก\n• การเกษตร: การจัดการไร่องุ่นอย่างยั่งยืน",
    "vinification_en": "• 60% wine from the reference year, 40% reserve wines\n• Dosage: 0 g/L (no added sugar)\n• Aged over 4 years in cellars, followed by 6 months in bottle",
    "vinification_th": "• ไวน์ 60% จากปีอ้างอิง, ไวน์สำรอง 40%\n• โดสาจ: 0 กรัม/ลิตร (ไม่เติมน้ำตาล)\n• หมักอายุกว่า 4 ปีในห้องเก็บ ตามด้วย 6 เดือนในขวด",
    "tasting_notes_en": "A brilliant pale gold color with rapid, energetic bubbles. The nose reveals biscuit and toasted almonds, with citrus and white flower notes. Aeration brings out minerality, white pepper, dried fruit, and honey. The palate is lively and pure, with citrus-driven acidity, a silky texture, and a long, precise finish.",
    "tasting_notes_th": "สีทองอ่อนสดใสพร้อมฟองอากาศที่เร็วและมีพลัง กลิ่นเผยให้เห็นบิสกิตและอัลมอนด์คั่ว พร้อมด้วยโน้ตส้มและดอกไม้สีขาว การเติมอากาศทำให้เกิดแร่ธาตุ พริกไทยขาว ผลไม้แห้ง และน้ำผึ้ง รสชาติมีชีวิตชีวาและบริสุทธิ์ ด้วยความเป็นกิดจากส้ม เนื้อสัมผัสเนียนนุ่ม และการจบที่ยาวนานและแม่นยำ",
    "pairing_en": "Best enjoyed with seafood (oysters, caviar), Parmesan or Pecorino, and as an aperitif for Champagne purists.",
    "pairing_th": "เหมาะที่สุดกับอาหารทะเล (หอยนางรม, คาเวียร์), พาร์เมซานหรือเปโครีโน และเป็นเครื่องดื่มเปิดมื้อสำหรับผู้ที่ชื่นชอบแชมเปญแท้จริง",
    "service_temperature": "8-10°C",
    "vintage": "Non vintage",
    "sku": "PRSA-002",
    "abv": "12.5%",
    "rating": "4.2",
    "price": "1,670 + VAT"
  },
  {
    "name": "Prestige des Sacres Brut Prestige Champagne",
    "slug": "prestige-des-sacres-brut-prestige-champagne",
    "region_slug": "champagne",
    "region_en": "Montagne de Reims, Champagne",
    "region_th": "มงตาญเดอแรงส์, แชมเปญ",
    "grape_varieties_en": "1/3 Chardonnay, 1/3 Pinot Meunier, 1/3 Pinot Noir",
    "grape_varieties_th": "1/3 ชาร์ดอนเนย์, 1/3 ปีโน มูนิเยร์, 1/3 ปีโน นัวร์",
    "the_estate_en": "Founded in the 1960s by René Lamblot and fellow winegrowers, Champagne Prestige des Sacres represents the expertise of 60 passionate growers. Their vineyards on the western slopes of the Montagne de Reims produce Champagnes that celebrate tradition and quality, honoring the historic coronations of French kings in Reims.",
    "the_estate_th": "ก่อตั้งในปี 1960 โดย René Lamblot และเพื่อนผู้ปลูกไวน์ แชมเปญ เพรสทีจ เดส์ ซาเคร์ เป็นตัวแทนของความเชี่ยวชาญของผู้ปลูกผู้หลงใหล 60 ราย ไร่องุ่นของพวกเขาบนเนินเขาทางตะวันตกของมงตาญเดอแรงส์ ผลิตแชมเปญที่เฉลิมฉลองประเพณีและคุณภาพ เพื่อเป็นเกียรติแก่การสถาปนากษัตริย์ฝรั่งเศสในประวัติศาสตร์ที่แรงส์",
    "terroir_en": "• Soil: Limestone and chalk\n• Agriculture: Sustainable vineyard management",
    "terroir_th": "• ดิน: หินปูนและชอล์ก\n• การเกษตร: การจัดการไร่องุ่นอย่างยั่งยืน",
    "vinification_en": "• 60% wine from the reference year, 40% reserve wines\n• Fermented with a balanced dosage of 9–9.5 g/L\n• Aged in cellars for 4 years, followed by 6 months in bottle post-disgorgement",
    "vinification_th": "• ไวน์ 60% จากปีอ้างอิง, ไวน์สำรอง 40%\n• หมักด้วยโดสาจที่สมดุล 9-9.5 กรัม/ลิตร\n• หมักในห้องเก็บเป็นเวลา 4 ปี ตามด้วย 6 เดือนในขวดหลังการดีกอร์จมอง",
    "tasting_notes_en": "Pale yellow with green highlights and fine bubbles. Dominant citrus notes of grapefruit and tangerine, followed by floral hints and candied lemon. Fresh, mineral-driven palate with lingering acidity and a creamy texture.",
    "tasting_notes_th": "สีเหลืองอ่อนพร้อมไฮไลท์สีเขียวและฟองอากาศละเอียด โน้ตส้มโดดเด่นของเกรปฟรุตและส้มแมนดาริน ตามด้วยกลิ่นดอกไม้และมะนาวหวาน รสชาติสดชื่น ขับเคลื่อนด้วยแร่ธาตุ พร้อมความเป็นกิดที่คงอยู่และเนื้อสัมผัสครีมมี่",
    "pairing_en": "Ideal as an aperitif or paired with seafood (lobster, shrimp, shellfish), white meats, and mild cheeses like Brie and Camembert.",
    "pairing_th": "เหมาะเป็นเครื่องดื่มเปิดมื้อหรือจับคู่กับอาหารทะเล (กุ้งมังกร, กุ้ง, หอย), เนื้อสีขาว และชีสอ่อนๆ เช่น บรีและคามแบร์",
    "service_temperature": "16-18°C",
    "vintage": "Non vintage",
    "sku": "PRSA-001",
    "abv": "12.5%",
    "rating": "3.8",
    "price": "1,570 + VAT"
  },
  {
    "name": "Prestige des Sacres 30&3 Extra Brut Champagne",
    "slug": "prestige-des-sacres-30-3-extra-brut-champagne",
    "region_slug": "champagne",
    "region_en": "Montagne de Reims, Champagne",
    "region_th": "มงตาญเดอแรงส์, แชมเปญ",
    "grape_varieties_en": "30% Meunier vinified in oak, 70% Chardonnay",
    "grape_varieties_th": "30% มูนิเยร์หมักในไม้โอ๊ค, 70% ชาร์ดอนเนย์",
    "the_estate_en": "Founded in the 1960s by René Lamblot and fellow winegrowers, Champagne Prestige des Sacres represents the expertise of 60 passionate growers. Their vineyards on the western slopes of the Montagne de Reims produce Champagnes that celebrate tradition and quality, honoring the historic coronations of French kings in Reims.",
    "the_estate_th": "ก่อตั้งในปี 1960 โดย René Lamblot และเพื่อนผู้ปลูกไวน์ แชมเปญ เพรสทีจ เดส์ ซาเคร์ เป็นตัวแทนของความเชี่ยวชาญของผู้ปลูกผู้หลงใหล 60 ราย ไร่องุ่นของพวกเขาบนเนินเขาทางตะวันตกของมงตาญเดอแรงส์ ผลิตแชมเปญที่เฉลิมฉลองประเพณีและคุณภาพ เพื่อเป็นเกียรติแก่การสถาปนากษัตริย์ฝรั่งเศสในประวัติศาสตร์ที่แรงส์",
    "terroir_en": "• Soil: Limestone and chalk\n• Agriculture: Sustainable vineyard management",
    "terroir_th": "• ดิน: หินปูนและชอล์ก\n• การเกษตร: การจัดการไร่องุ่นอย่างยั่งยืน",
    "vinification_en": "• Dosage: 3 g/L\n• Aged over 5 years in cellars,\n  followed by 6-12 months in bottle",
    "vinification_th": "• โดสาจ: 3 กรัม/ลิตร\n• หมักอายุกว่า 5 ปีในห้องเก็บ\n  ตามด้วย 6-12 เดือนในขวด",
    "tasting_notes_en": "A golden hue with lively bubbles. Aromas of cooked quince, honey, warm toast, and spices. The palate is rich yet mineral-driven, with cooked fruit and saline minerality leading to a persistent, cocoa-tinged finish.",
    "tasting_notes_th": "สีทองพร้อมฟองอากาศที่มีชีวิตชีวา กลิ่นหอมของควินซ์ปรุงสุก น้ำผึ้ง ขนมปังปิ้งอุ่น และเครื่องเทศ รสชาติเข้มข้นแต่ขับเคลื่อนด้วยแร่ธาตุ พร้อมผลไม้ปรุงสุกและแร่ธาตุเค็มนำไปสู่การจบที่ยาวนานและมีกลิ่นโกโก้",
    "pairing_en": "Pairs well with veal, pork, lamb, and creamy, earthy dishes.",
    "pairing_th": "เข้ากันดีกับเนื้อลูกวัว เนื้อหมู เนื้อแกะ และอาหารครีมมี่รสเอิร์ธี่",
    "service_temperature": "10°C",
    "vintage": "Non vintage",
    "sku": "PRSA-006",
    "abv": "12.5%",
    "rating": "4.0",
    "price": "2,230 + VAT"
  },
  {
    "name": "Prestige des Sacres Cuvée Dynastie Blanc de Blancs Brut Champagne",
    "slug": "prestige-des-sacres-cuvee-dynastie-blanc-de-blancs-brut-champagne",
    "region_slug": "champagne",
    "region_en": "Montagne de Reims, Champagne",
    "region_th": "มงตาญเดอแรงส์, แชมเปญ",
    "grape_varieties_en": "100% Chardonnay",
    "grape_varieties_th": "100% ชาร์ดอนเนย์",
    "the_estate_en": "Founded in the 1960s by René Lamblot and fellow winegrowers, Champagne Prestige des Sacres represents the expertise of 60 passionate growers. Their vineyards on the western slopes of the Montagne de Reims produce Champagnes that celebrate tradition and quality, honoring the historic coronations of French kings in Reims.",
    "the_estate_th": "ก่อตั้งในปี 1960 โดย René Lamblot และเพื่อนผู้ปลูกไวน์ แชมเปญ เพรสทีจ เดส์ ซาเคร์ เป็นตัวแทนของความเชี่ยวชาญของผู้ปลูกผู้หลงใหล 60 ราย ไร่องุ่นของพวกเขาบนเนินเขาทางตะวันตกของมงตาญเดอแรงส์ ผลิตแชมเปญที่เฉลิมฉลองประเพณีและคุณภาพ เพื่อเป็นเกียรติแก่การสถาปนากษัตริย์ฝรั่งเศสในประวัติศาสตร์ที่แรงส์",
    "terroir_en": "• Soil: Limestone and chalk\n• Agriculture: Sustainable vineyard management",
    "terroir_th": "• ดิน: หินปูนและชอล์ก\n• การเกษตร: การจัดการไร่องุ่นอย่างยั่งยืน",
    "vinification_en": "• 60% wine from the reference year, 40% reserve wines\n• Dosage: 8-9 g/L\n• Aged for 4 years in cellars,\n  followed by 6 months in bottle",
    "vinification_th": "• ไวน์ 60% จากปีอ้างอิง, ไวน์สำรอง 40%\n• โดสาจ: 8-9 กรัม/ลิตร\n• หมักเป็นเวลา 4 ปีในห้องเก็บ\n  ตามด้วย 6 เดือนในขวด",
    "tasting_notes_en": "A pale yellow robe with green highlights and fine bubbles. Citrus notes of grapefruit and tangerine dominate, followed by floral hints and candied lemon. The palate is fresh and mineral-driven, with lingering acidity and a creamy texture.",
    "tasting_notes_th": "เสื้อคลุมสีเหลืองอ่อนพร้อมไฮไลท์สีเขียวและฟองอากาศละเอียด โน้ตส้มของเกรปฟรุตและส้มแมนดารินเด่นชัด ตามด้วยกลิ่นดอกไม้และมะนาวหวาน รสชาติสดชื่นและขับเคลื่อนด้วยแร่ธาตุ พร้อมความเป็นกิดที่คงอยู่และเนื้อสัมผัสครีมมี่",
    "pairing_en": "Best as an aperitif or with delicate seafood, sushi, and sashimi.",
    "pairing_th": "ดีที่สุดเป็นเครื่องดื่มเปิดมื้อหรือกับอาหารทะเลละเอียดอ่อน ซูชิ และซาชิมิ",
    "service_temperature": "8-10°C",
    "vintage": "Non vintage",
    "sku": "PRSA-003",
    "abv": "12.5%",
    "rating": "3.9",
    "price": "1,950 + VAT"
  },
  {
    "name": "Prestige des Sacres Cuvée Grenat Millésime Champagne",
    "slug": "prestige-des-sacres-cuvee-grenat-millesime-champagne",
    "region_slug": "champagne",
    "region_en": "Montagne de Reims, Champagne",
    "region_th": "มงตาญเดอแรงส์, แชมเปญ",
    "grape_varieties_en": "50% Chardonnay, 50% Pinot Noir",
    "grape_varieties_th": "50% ชาร์ดอนเนย์, 50% ปีโน นัวร์",
    "the_estate_en": "Founded in the 1960s by René Lamblot and fellow winegrowers, Champagne Prestige des Sacres represents the expertise of 60 passionate growers. Their vineyards on the western slopes of the Montagne de Reims produce Champagnes that celebrate tradition and quality, honoring the historic coronations of French kings in Reims.",
    "the_estate_th": "ก่อตั้งในปี 1960 โดย René Lamblot และเพื่อนผู้ปลูกไวน์ แชมเปญ เพรสทีจ เดส์ ซาเคร์ เป็นตัวแทนของความเชี่ยวชาญของผู้ปลูกผู้หลงใหล 60 ราย ไร่องุ่นของพวกเขาบนเนินเขาทางตะวันตกของมงตาญเดอแรงส์ ผลิตแชมเปญที่เฉลิมฉลองประเพณีและคุณภาพ เพื่อเป็นเกียรติแก่การสถาปนากษัตริย์ฝรั่งเศสในประวัติศาสตร์ที่แรงส์",
    "terroir_en": "• Soil: Limestone and chalk\n• Agriculture: Sustainable vineyard management",
    "terroir_th": "• ดิน: หินปูนและชอล์ก\n• การเกษตร: การจัดการไร่องุ่นอย่างยั่งยืน",
    "vinification_en": "• 100% vintage 2015 wine\n• Dosage: 9.9 g/L\n• Aged for over 5 years in cellars,\n  followed by 6 months in bottle",
    "vinification_th": "• ไวน์วินเทจ 2015 100%\n• โดสาจ: 9.9 กรัม/ลิตร\n• หมักเป็นเวลากว่า 5 ปีในห้องเก็บ\n  ตามด้วย 6 เดือนในขวด",
    "tasting_notes_en": "A golden-green hue with fine bubbles. Aromas of mirabelle plum, vetiver, pastry, and forest notes. The palate is rich and dense, with creamy honey flavors and a touch of zesty astringency, leading to a long, harmonious finish.",
    "tasting_notes_th": "สีทอง-เขียวพร้อมฟองอากาศละเอียด กลิ่นหอมของมิราเบลล์พลัม เวติเวอร์ เปสตรี้ และโน้ตป่าไผ่ รสชาติเข้มข้นและหนาแน่น พร้อมรสน้ำผึ้งครีมมี่และสัมผัสของความฝาดเปรี้ยวจี๊ด นำไปสู่การจบที่ยาวนานและกลมกลืน",
    "pairing_en": "Pairs well with creamy poultry dishes, veal, foie gras, and hearty stews.",
    "pairing_th": "เข้ากันดีกับอาหารสัตว์ปีกครีมมี่ เนื้อลูกวัว ฟัวกราส์ และสตูว์เข้มข้น",
    "service_temperature": "10°C",
    "vintage": "2015",
    "sku": "PRSA-004",
    "abv": "12.5%",
    "rating": "4.1",
    "price": "2,030 + VAT"
  },
  {
    "name": "Prestige des Sacres Brut Rosé Champagne",
    "slug": "prestige-des-sacres-brut-rose-champagne",
    "region_slug": "champagne",
    "region_en": "Montagne de Reims, Champagne",
    "region_th": "มงตาญเดอแรงส์, แชมเปญ",
    "grape_varieties_en": "30% Chardonnay, 30% Pinot Noir, 40% Pinot Meunier with 15% vinified red",
    "grape_varieties_th": "30% ชาร์ดอนเนย์, 30% ปีโน นัวร์, 40% ปีโน มูนิเยร์ พร้อม 15% หมักแบบไวน์แดง",
    "the_estate_en": "Founded in the 1960s by René Lamblot and fellow winegrowers, Champagne Prestige des Sacres represents the expertise of 60 passionate growers. Their vineyards on the western slopes of the Montagne de Reims produce Champagnes that celebrate tradition and quality, honoring the historic coronations of French kings in Reims.",
    "the_estate_th": "ก่อตั้งในปี 1960 โดย René Lamblot และเพื่อนผู้ปลูกไวน์ แชมเปญ เพรสทีจ เดส์ ซาเคร์ เป็นตัวแทนของความเชี่ยวชาญของผู้ปลูกผู้หลงใหล 60 ราย ไร่องุ่นของพวกเขาบนเนินเขาทางตะวันตกของมงตาญเดอแรงส์ ผลิตแชมเปญที่เฉลิมฉลองประเพณีและคุณภาพ เพื่อเป็นเกียรติแก่การสถาปนากษัตริย์ฝรั่งเศสในประวัติศาสตร์ที่แรงส์",
    "terroir_en": "• Soil: Limestone and chalk\n• Agriculture: Sustainable vineyard management",
    "terroir_th": "• ดิน: หินปูนและชอล์ก\n• การเกษตร: การจัดการไร่องุ่นอย่างยั่งยืน",
    "vinification_en": "• 60% wine from the reference year, 40% reserve wines\n• Dosage: 9–9.5 g/L\n• Aged for 3 years in cellars,\n  followed by 6 months in bottle",
    "vinification_th": "• ไวน์ 60% จากปีอ้างอิง, ไวน์สำรอง 40%\n• โดสาจ: 9-9.5 กรัม/ลิตร\n• หมักเป็นเวลา 3 ปีในห้องเก็บ\n  ตามด้วย 6 เดือนในขวด",
    "tasting_notes_en": "A pale copper color with fine bubbles. The nose starts with wild berries and strawberries, evolving into caramel and butterscotch. The palate is round and juicy, featuring strawberry and kirsch cherry flavors with a fresh, tart finish.",
    "tasting_notes_th": "สีทองแดงอ่อนพร้อมฟองอากาศละเอียด กลิ่นเริ่มต้นด้วยเบอร์รี่ป่าและสตรอเบอร์รี่ พัฒนาไปสู่คาราเมลและบัตเตอร์สก็อตช์ รสชาติกลมกล่อมและฉ่ำ โดดเด่นด้วยรสสตรอเบอร์รี่และเชอร์รี่เคิร์ช พร้อมการจบที่สดชื่นและเปรี้ยว",
    "pairing_en": "Pairs beautifully with charcuterie, prosciutto, Serrano ham, and fruity or chocolate-based desserts.",
    "pairing_th": "เข้ากันอย่างสวยงามกับชาร์คูเตอรี่ โปรชูตโต แฮมเซร์ราโน และขนมหวานที่มีผลไม้หรือช็อกโกแลตเป็นส่วนประกอบ",
    "service_temperature": "8–10°C",
    "vintage": "Non vintage",
    "sku": "PRSA-005",
    "abv": "12.5%",
    "rating": "3.9",
    "price": "1,820 + VAT"
  },
  {
    "name": "Prestige des Sacres Demi-Sec Champagne",
    "slug": "prestige-des-sacres-demi-sec-champagne",
    "region_slug": "champagne",
    "region_en": "Montagne de Reims, Champagne",
    "region_th": "มงตาญเดอแรงส์, แชมเปญ",
    "grape_varieties_en": "1/3 Chardonnay, 1/3 Pinot Meunier, 1/3 Pinot Noir",
    "grape_varieties_th": "1/3 ชาร์ดอนเนย์, 1/3 ปีโน มูนิเยร์, 1/3 ปีโน นัวร์",
    "the_estate_en": "Founded in the 1960s by René Lamblot and fellow winegrowers, Champagne Prestige des Sacres represents the expertise of 60 passionate growers. Their vineyards on the western slopes of the Montagne de Reims produce Champagnes that celebrate tradition and quality, honoring the historic coronations of French kings in Reims.",
    "the_estate_th": "ก่อตั้งในปี 1960 โดย René Lamblot และเพื่อนผู้ปลูกไวน์ แชมเปญ เพรสทีจ เดส์ ซาเคร์ เป็นตัวแทนของความเชี่ยวชาญของผู้ปลูกผู้หลงใหล 60 ราย ไร่องุ่นของพวกเขาบนเนินเขาทางตะวันตกของมงตาญเดอแรงส์ ผลิตแชมเปญที่เฉลิมฉลองประเพณีและคุณภาพ เพื่อเป็นเกียรติแก่การสถาปนากษัตริย์ฝรั่งเศสในประวัติศาสตร์ที่แรงส์",
    "terroir_en": "• Soil: Limestone and chalk\n• Agriculture: Sustainable vineyard management",
    "terroir_th": "• ดิน: หินปูนและชอล์ก\n• การเกษตร: การจัดการไร่องุ่นอย่างยั่งยืน",
    "vinification_en": "• 60% wine from the reference year, 40% reserve wines\n• Dosage: 40 g/L\n• Aged in cellars for 4 years,\n  followed by 6 months in bottle",
    "vinification_th": "• ไวน์ 60% จากปีอ้างอิง, ไวน์สำรอง 40%\n• โดสาจ: 40 กรัม/ลิตร\n• หมักในห้องเก็บเป็นเวลา 4 ปี\n  ตามด้วย 6 เดือนในขวด",
    "tasting_notes_en": "Aromas of shortbread, ripe mango, papaya, honey, and butterscotch. Sweet spices like cinnamon and nutmeg complement dried fruit notes. The palate is round and velvety, balancing acidity and effervescence with caramel and roasted nut flavors.",
    "tasting_notes_th": "กลิ่นหอมของช็อตเบรด มะม่วงสุก มะละกอ น้ำผึ้ง และบัตเตอร์สก็อตช์ เครื่องเทศหวานเช่นอบเชยและจันทน์เทศเสริมโน้ตผลไม้แห้ง รสชาติกลมกล่อมและนุ่มนวล สมดุลระหว่างความเป็นกิดและฟองอากาศ พร้อมรสคาราเมลและถั่วคั่ว",
    "pairing_en": "Perfect with blue cheeses (Roquefort, Stilton), foie gras, Asian sweet-and-sour dishes, and desserts.",
    "pairing_th": "เหมาะสมบูรณ์กับชีสบลู (โรคฟอร์ ส្ទิลตัน) ฟัวกราส์ อาหารเอเชียรสเปรี้ยวหวาน และขนมหวาน",
    "service_temperature": "8–10°C",
    "vintage": "Non vintage",
    "sku": "PRSA-007",
    "abv": "12.5%",
    "rating": "4.0",
    "price": "1,650 + VAT"
  }
];

export function getWineBySlug(slug: string): Wine | undefined {
  return wines.find(wine => wine.slug === slug);
}

export function getAllWineSlugs(): string[] {
  return wines.map(wine => wine.slug);
} 