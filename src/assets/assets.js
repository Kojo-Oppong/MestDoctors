import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import princed from './princed.jpg'
import kwakye from './kwakye.jpg'
import akosua from './akosua.jpg'
import mestlogo from './mestlogo.jpg'
import kojo from './kojo.jpg'





export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    akosua,
    princed,
    kwakye,
    mestlogo,
    kojo,
   
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Prince Darfour',
    image: princed,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      "Dr. Prince believes that great medicine begins with listening. He takes time to understand each patient’s lifestyle, concerns, and goals, ensuring every treatment plan is both effective and sustainable. His clinic is known for same-day appointments and a calm, reassuring atmosphere.\n\nBeyond day-to-day primary care, Dr. Prince champions community health programs and preventive screenings. He frequently hosts wellness workshops that teach families how to maintain long-term fitness, balanced nutrition, and mental well-being.",
    fees: 50,
    address: { line1: '9 Sorghum Street, Dansoman', line2: 'Accra, Ghana' }
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Larson',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      "With a gentle bedside manner, Dr. Emily guides women through every stage of life—from adolescent care to menopause management. She emphasizes education and open dialogue so patients feel informed and empowered during each visit.\n\nHer practice integrates the latest minimally invasive procedures and evidence-based therapies. Whether it’s routine prenatal care or complex reproductive issues, Dr. Emily strives to provide treatment that respects each patient’s personal choices and values.",
    fees: 60,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc3',
    name: 'Dr. Kwakye Dangelo',
    image: kwakye,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      "Dr. Kwakye approaches dermatology with a blend of science and artistry. He treats everything from chronic eczema to complex acne cases, always tailoring solutions to each patient’s unique skin type and lifestyle.\n\nPassionate about skin health education, he hosts community seminars on sun protection and the importance of early detection of skin cancers. His goal is to help patients not only heal but also regain confidence in their natural appearance.",
    fees: 30,
    address: { line1: 'Site, 4', line2: 'Tema, Ghana' }
  },
  {
    _id: 'doc4',
    name: 'Dr. Kojo Oppong',
    image: kojo,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      "Known for his warm demeanor, Dr. Kojo creates a welcoming environment where children feel safe and parents feel heard. He focuses on preventive pediatric care—routine check-ups, vaccinations, and early developmental screenings.\n\nOutside the clinic, Dr. Kojo partners with schools to promote healthy eating and physical activity programs. He believes that forming healthy habits early gives every child a brighter future.",
    fees: 40,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc5',
    name: 'Dr. Jennifer Garcia',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      "Dr. Garcia specializes in diagnosing and managing conditions of the brain and nervous system, including migraines, epilepsy, and neurodegenerative diseases. Her calm, clear communication helps patients and families understand complex diagnoses.\n\nShe also leads a research initiative focused on early intervention strategies for memory disorders. By combining cutting-edge science with compassionate care, Dr. Garcia helps patients maintain independence and quality of life.",
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: doc6,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      "Dr. Williams provides comprehensive care for digestive health, from routine endoscopies to management of chronic conditions like Crohn’s disease and ulcerative colitis. He believes that nutrition plays a vital role in healing and often collaborates with dietitians.\n\nHe is also active in medical outreach programs, bringing essential screenings to underserved communities and educating the public on early warning signs of gastrointestinal cancers.",
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc7',
    name: 'Dr. Christopher Davis',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      "Dr. Davis focuses on holistic primary care, blending traditional medicine with lifestyle counseling. He encourages patients to view health as a lifelong partnership rather than a one-time visit.\n\nHe regularly organizes community fitness challenges and health fairs, believing that accessible education and early screenings reduce the burden of chronic disease for entire neighborhoods.",
    fees: 50,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      "Dr. White blends advanced surgical techniques with personalized counseling to support reproductive health. Patients appreciate his ability to explain complex procedures in everyday language.\n\nHe is particularly interested in fertility preservation and minimally invasive treatments, ensuring women have a full range of choices for their reproductive journey.",
    fees: 60,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc9',
    name: 'Dr. Ava Mitchell',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      "Dr. Ava offers medical and cosmetic dermatology with a keen eye for detail. From acne therapies to anti-aging treatments, she develops individualized plans for lasting results.\n\nHer advocacy for skin-cancer awareness includes free screening camps and educational talks, helping communities understand the importance of early detection.",
    fees: 30,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc10',
    name: 'Dr. Jeffrey King',
    image: doc10,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      "Dr. King’s friendly approach makes clinic visits enjoyable for children and stress-free for parents. He emphasizes developmental milestones and preventive medicine.\n\nOutside practice, he volunteers at local orphanages, providing free check-ups and health education for caregivers and children alike.",
    fees: 40,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc11',
    name: 'Dr. Zoe Kelly',
    image: doc11,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      "Specializing in movement disorders and epilepsy, Dr. Zoe is known for her meticulous diagnostic process. She works closely with families to tailor long-term treatment plans.\n\nShe contributes to international research on Parkinson’s disease and mentors young neurologists, ensuring continuous advancement in the field.",
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc12',
    name: 'Dr. Patrick Harris',
    image: doc12,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      "Dr. Harris focuses on stroke prevention and post-stroke rehabilitation. He believes recovery is both physical and emotional, providing resources for families and caregivers.\n\nHe frequently collaborates with physiotherapists and speech therapists to create multidisciplinary treatment plans that maximize patient independence.",
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc13',
    name: 'Dr. Chloe Evans',
    image: doc13,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      "Dr. Chloe integrates preventive care with patient education, believing that informed patients make the best decisions. She takes pride in developing long-term relationships built on trust.\n\nHer outreach programs target lifestyle-related illnesses such as diabetes and hypertension, offering free workshops and health screenings to the community.",
    fees: 50,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc14',
    name: 'Dr. Ryan Martinez',
    image: doc14,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      "Dr. Ryan provides comprehensive maternal and reproductive health services, from family planning to high-risk pregnancy management. Patients appreciate his calm guidance through sensitive decisions.\n\nHe is also a vocal advocate for accessible prenatal care in rural areas, partnering with NGOs to train midwives and improve outcomes for mothers and babies.",
    fees: 60,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  },
  {
    _id: 'doc15',
    name: 'Dr. Amelia Hill',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      "Dr. Amelia blends medical dermatology with an artistic approach to cosmetic procedures. Her patients value her detailed consultations and focus on natural results.\n\nShe actively participates in clinical trials for innovative treatments and educates young adults on safe skincare routines to prevent long-term damage.",
    fees: 30,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' }
  }
]
