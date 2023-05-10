import React, {useState} from 'react'
import './Language.css'
import Cookies from 'js-cookie';



const LanguagePage = () =>{
    //default language is spanish
    let language = '/en/es';


    //When the confirm button is clicked, set the cookie to the desired language and reload the page.
    //The reload will allow the paths page for generate.
    const confirmationClick = () =>{
        Cookies.set('googtrans', language, {expires: 1, sameSite:'None', secure:true}) 

        const url = window.location.reload();

        

    };

    //A new selection from the language selector changes the language variable.
    const langChange = (event) =>{
        language = event.target.value;
    }

    //Displays a langauge selector and a confirmation button.
    return(
        <div>
            <div>
                <select className='language_choice' defaultValue={language} onChange={langChange}>
                    <option value='/en/en'>English(English)</option>
                    <option value='/en/af'>Afrikaans(Afrikaans)</option>
                    <option value='/en/sq'>Shqip(Albanian)</option>
                    <option value='/en/am'>ኣማርኛ(Amharic)</option>
                    <option value='/en/ar'>العربية(Arabic)</option> 
                    <option value='/en/hy'>Հայերէն(Armenian)</option>
                    <option value='/en/as'>অসমীয়া(Assamese)</option>
                    <option value='/en/ay'>Aymar aru(Aymara)</option>
                    <option value='/en/az'>Azərbaycan dili(Azerbaijani)</option>
                    <option value='/en/bm'>Bamanankan(Bambara)</option>
                    <option value='/en/eu'>euskara(Basque)</option>
                    <option value='/en/be'>Беларуская мова(Belarusian)</option>
                    <option value='/en/bn'>বাংলা(Bengali)</option>
                    <option value='/en/bho'>भोजपुरी(Bhojpuri)</option>
                    <option value='/en/bs'>bosanski/босански/بۉسانسقى(Bosnian)</option>
                    <option value='/en/bg'>Български(Bulgarian)</option>
                    <option value='/en/ca'>català(Catalan)</option>
                    <option value='/en/ceb'>Binisaya(Cebuano)</option>
                    <option value='/en/zh-CN'>简体中文(Chinese(Simplified))</option>
                    <option value='/en/zh-TW'>繁体字(Chinese(Traditional))</option>
                    <option value='/en/zh-co'>corsu(Corsican)</option>
                    <option value='/en/zh-hr'>Hravtski(Croatian)</option>
                    <option value='/en/zh-cs'>čeština/český jazyk(Czech)</option>
                    <option value='/en/da'>dansk(Danish)</option>
                    <option value='/en/dv'>ދިވެހި(Dhivehi)</option>
                    <option value='/en/doi'>डोगरी/ڈوگرى(Dogri)</option>
                    <option value='/en/nl'>Nederlands(Dutch)</option>
                    <option value='/en/eo'>Esperanto(Esperanto)</option>
                    <option value='/en/et'>eesti keel(Estonian)</option>
                    <option value='/en/ee'>Eʋegbe(Ewe)</option>
                    <option value='/en/fil'>Tagalog(Filipino(Tagalog))</option>
                    <option value='/en/fi'>suomi/suomen kieli(Finnish)</option>
                    <option value='/en/fr'>français(French)</option>
                    <option value='/en/fy'>Frysk(Frisian)</option>
                    <option value='/en/gl'>Galego(Galician)</option>
                    <option value='/en/ka'>ქართული ენა(Georgian)</option>
                    <option value='/en/de'>Deutsch(German)</option>
                    <option value='/en/el'>ελληνικά(Greek)</option>
                    <option value='/en/gn'>Avañe’ẽ(Guarani)</option>
                    <option value='/en/gu'>ગુજરાતી(Gujarati)</option>
                    <option value='/en/ht'>Kreyòl ayisyen(Haitian Creole)</option>
                    <option value='/en/ha'>هَرْشَن هَوْسَ(Hausa)</option>
                    <option value='/en/haw'>ʻŌlelo Hawaiʻi(Hawaiian)</option>
                    <option value='/en/he'>עברית(Hebrew)</option>
                    <option value='/en/hi'>हिन्दी(Hindi)</option>
                    <option value='/en/hmn'>lus Hmoob/lug Moob/lol Hmongb(Hmong)</option>
                    <option value='/en/hu'>magyar(Hungarian)</option>
                    <option value='/en/is'>Íslenska(Icelandic)</option>
                    <option value='/en/ig'>Ásụ̀sụ̀ Ìgbò(Igbo)</option>
                    <option value='/en/ilo'>Ilokano(Ilocano)</option>
                    <option value='/en/id'>Bahasa Indonesia(Indonesian)</option>
                    <option value='/en/ga'>Gaeilge(Irish)</option>
                    <option value='/en/it'>italiano(Italian)</option>
                    <option value='/en/ja'>日本語(Japanese)</option>
                    <option value='/en/jv'>baṣa Jawa(Javanese)</option>
                    <option value='/en/kn'>ಕನ್ನಡ(Kannada)</option>
                    <option value='/en/kk'>Қазақ тілі(Kazakh)</option>
                    <option value='/en/km'>ភាសាខ្មែរ(Khmer)</option>
                    <option value='/en/rw'>Ikinyarwanda(Kinyarwanda)</option>
                    <option value='/en/gom'>कोंकणी(Konkani)</option>
                    <option value='/en/ko'>한국어(Korean)</option>
                    <option value='/en/kri'>Krio(Krio)</option>
                    <option value='/en/ku'>Kurdî/کوردی(Kurdish)</option>
                    <option value='/en/ckb'>سۆرانی(Kurdish(Sorani))</option>
                    <option value='/en/ky'>قیرغیزچا(Kyrgyz)</option>
                    <option value='/en/lo'>ພາສາລາວ(Lao)</option>
                    <option value='/en/la'>Lingua Latina(Latin)</option>
                    <option value='/en/lv'>latviešu valoda(Latvian)</option>
                    <option value='/en/ln'>Lingala(Lingala)</option>
                    <option value='/en/lt'>lietuvių kalba(Lithuanian)</option>
                    <option value='/en/lg'>Oluganda(Luganda)</option>
                    <option value='/en/lb'>Lëtzebuergesch(Luxembourgish)</option>
                    <option value='/en/mk'>македонски(Macedonian)</option>
                    <option value='/en/mai'>Macushi(Maithili)</option>
                    <option value='/en/mg'>Fiteny Malagasy(Malagasy)</option>
                    <option value='/en/ms'> Bahasa Melayu/بهاس ملايو(Malay)</option>
                    <option value='/en/ml'>മലയാളം(Malayalam)</option>
                    <option value='/en/mt'>Malti(Maltese)</option>
                    <option value='/en/mi'>Te Reo Māori(Maori)</option>
                    <option value='/en/mr'>मराठी(Marathi)</option>
                    <option value='/en/mni-Mtei'>মৈতৈলোন(Meeteilon(Manipuri))</option>
                    <option value='/en/lus'>Mizo ṭawng(Mizo)</option>
                    <option value='/en/mn'>Монгол Улс(Mongolian)</option>
                    <option value='/en/my'>မြန်မာစာ(Myanmar(Burmese))</option>
                    <option value='/en/ne'>नेपाली(Nepali)</option>
                    <option value='/en/no'>norsk(Norwegian)</option>
                    <option value='/en/ny'>Chicheŵa(Nyanja(Chichewa))</option>
                    <option value='/en/or'>ଓଡ଼ିଆ(Odia(Oriya))</option>
                    <option value='/en/om'>ኦሮሞ፞(Oromo)</option>
                    <option value='/en/ps'>پښتو(Pashto)</option>
                    <option value='/en/fa'> فارسی(Persian)</option>
                    <option value='/en/pl'>polski(Polish)</option>
                    <option value='/en/pt'>Português(Portuguese(Portugal, Brazil))</option>
                    <option value='/en/pa'>ਪੰਜਾਬੀ/پنجابی(Punjabi)</option>
                    <option value='/en/qu'>Kechua(Quechua)</option>
                    <option value='/en/ro'>limba română(Romanian)</option>
                    <option value='/en/ru'>Русский язык(Russian)</option>
                    <option value='/en/sm'>Gagana fa‘a Sāmoa(Samoan)</option>
                    <option value='/en/sa'>संस्कृतम्(Sanskrit)</option>
                    <option value='/en/gd'>Gàidhlig(Scottish Gaelic)</option>
                    <option value='/en/nso'>Sesotho sa Leboa(Sepedi)</option>
                    <option value='/en/sr'>српски/srpski(Serbian)</option>
                    <option value='/en/st'>Sesotho sa Leboa(Northern Sotho)</option>
                    <option value='/en/sn'>chiShona(Shona)</option>
                    <option value='/en/sd'>سنڌي(Sindhi)</option>
                    <option value='/en/si'>සිංහල(Sinhala(Sinhalese))</option>
                    <option value='/en/sk'>slovenčina(Slovak)</option>
                    <option value='/en/sl'>slovenščina/slovenski jezik(Slovenian)</option>
                    <option value='/en/so'>af Soomaali/اَف صَومالي˜(Somali)</option>
                    <option value='/en/es'>español(Spanish)</option>
                    <option value='/en/su'>Basa Sunda(Sundanese)</option>
                    <option value='/en/sw'>kiSwahili(Swahili)</option>
                    <option value='/en/sv'>svenska(Swedish)</option>
                    <option value='/en/tl'>Tagalog(Tagalog)</option>
                    <option value='/en/tg'>тоҷикӣ(Tajik)</option>
                    <option value='/en/ta'>தமிழ்(Tamil)</option>
                    <option value='/en/tt'>tatarça/татарча/تاتارچا(Tatar)</option>
                    <option value='/en/te'>తెలుగు(Telugu)</option>
                    <option value='/en/th'>ภาษาไทย(Thai)</option>
                    <option value='/en/ti'>ትግርኛ(Tigrinya)</option>
                    <option value='/en/ts'>Xitsonga(Tsonga)</option>
                    <option value='/en/tr'>Türkçe(Turkish)</option>
                    <option value='/en/tk'>Türkmen dili(Turkmen)</option>
                    <option value='/en/ak'>Twi(Twi(Akan))</option>
                    <option value='/en/uk'>українська мова(Ukranian)</option>
                    <option value='/en/ur'>اُردُو(Urdu)</option>
                    <option value='/en/ug'>Уйғур/ئۇيغۇر(Uyghur)</option>
                    <option value='/en/uz'>Ўзбек тили/O’zbek tili/أۇزبېك ﺗﻴﻠی(Uzbek)</option>
                    <option value='/en/vi'>Tiếng Việt(㗂越)Vietnamese</option>
                    <option value='/en/cy'>Cymraeg(Welsh)</option>
                    <option value='/en/xh'>isiXhosa(Xhosa)</option>
                    <option value='/en/yi'>ייִדיש(Yiddish)</option>
                    <option value='/en/yo'>Èdè Yorùbá(Yoruba)</option>
                    <option value='/en/zu'>isiZulu(Zulu)</option>

                </select>

            </div>
            <label className='language_label'>Powered by google translate</label>
            <button className='language_button' onClick={confirmationClick}>Confirm</button>

        </div>



    );
    




};


export default  LanguagePage;









