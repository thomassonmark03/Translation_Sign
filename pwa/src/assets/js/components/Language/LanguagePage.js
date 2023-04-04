import React, {useState} from 'react'
import Cookies from 'js-cookie';



const LanguagePage = () =>{

    let language = '/en/es';


    const confirmationClick = () =>{
        console.log("here");
        Cookies.set('googtrans', language, {expires: 1, sameSite:'None', secure:true}) 

        const url = window.location.reload();

        

    };

    const testCookie = () =>{
        console.log(Cookies.get('googtrans'));
    };

    const langChange = (event) =>{
        language = event.target.value;
    }

    return(
        <div>
            <select defaultValue={language} onChange={langChange}>
                <option value='/en/en'>English</option>
                <option value='/en/af'>Afrikaans</option>
                <option value='/en/sq'>Albanian</option>
                <option value='/en/am'>Amharic</option>
                <option value='/en/ar'>Arabic</option>
                <option value='/en/hy'>Armenian</option>
                <option value='/en/as'>Assamese</option>
                <option value='/en/ay'>Aymara</option>
                <option value='/en/az'>Azerbaijani</option>
                <option value='/en/bm'>Bambara</option>
                <option value='/en/eu'>Basque</option>
                <option value='/en/be'>Belarusian</option>
                <option value='/en/bn'>Bengali</option>
                <option value='/en/bho'>Bhojpuri</option>
                <option value='/en/bs'>Bosnian</option>
                <option value='/en/bg'>Bulgarian</option>
                <option value='/en/ca'>Catalan</option>
                <option value='/en/ceb'>Cebuano</option>
                <option value='/en/zh-CN'>Chinese(Simplified)</option>
                <option value='/en/zh-TW'>Chinese(Traditional)</option>
                <option value='/en/zh-co'>Corsican</option>
                <option value='/en/zh-hr'>Croatian</option>
                <option value='/en/zh-cs'>Czech</option>
                <option value='/en/da'>Danish</option>
                <option value='/en/dv'>Dhivehi</option>
                <option value='/en/doi'>Dogri</option>
                <option value='/en/nl'>Dutch</option>
                <option value='/en/eo'>Esperanto</option>
                <option value='/en/et'>Estonian</option>
                <option value='/en/ee'>Ewe</option>
                <option value='/en/fil'>Filipino(Tagalog)</option>
                <option value='/en/fr'>Finish</option>
                <option value='/en/fy'>Frisian</option>
                <option value='/en/gl'>Galician</option>
                <option value='/en/ka'>Georgian</option>
                <option value='/en/de'>German</option>
                <option value='/en/el'>Greek</option>
                <option value='/en/gn'>Guarani</option>
                <option value='/en/gu'>Gujarati</option>
                <option value='/en/ht'>Haitian Creole</option>
                <option value='/en/ha'>Hausa</option>
                <option value='/en/haw'>Hawaiian</option>
                <option value='/en/he'>Hebrew</option>
                <option value='/en/hi'>Hindi</option>
                <option value='/en/hmn'>Hmong</option>
                <option value='/en/hu'>Hungarian</option>
                <option value='/en/is'>Icelandic</option>
                <option value='/en/ig'>Igbo</option>
                <option value='/en/ilo'>Ilocano</option>
                <option value='/en/id'>Indonesian</option>
                <option value='/en/ga'>Irish</option>
                <option value='/en/it'>Italian</option>
                <option value='/en/ja'>Japanese</option>
                <option value='/en/jv'>Javanese</option>
                <option value='/en/kn'>Kannada</option>
                <option value='/en/kk'>Kazakh</option>
                <option value='/en/km'>Khmer</option>
                <option value='/en/rw'>Kinyarwanda</option>
                <option value='/en/gom'>Konkani</option>
                <option value='/en/ko'>Korean</option>
                <option value='/en/kri'>Krio</option>
                <option value='/en/ku'>Kurdish</option>
                <option value='/en/ckb'>Kurdish(Sorani)</option>
                <option value='/en/ky'>Kyrgyz</option>
                <option value='/en/lo'>Lao</option>
                <option value='/en/la'>Latin</option>
                <option value='/en/lv'>Latvian</option>
                <option value='/en/ln'>Lingala</option>
                <option value='/en/lt'>Lithuanian</option>
                <option value='/en/lg'>Luganda</option>
                <option value='/en/lb'>Luxembourgish</option>
                <option value='/en/mk'>Macedonian</option>
                <option value='/en/mai'>Maithili</option>
                <option value='/en/mg'>Malagasy</option>
                <option value='/en/ms'>Malay</option>
                <option value='/en/ml'>Malayalam</option>
                <option value='/en/mt'>Maltese</option>
                <option value='/en/mi'>Maori</option>
                <option value='/en/mr'>Marathi</option>
                <option value='/en/mni-Mtei'>Meiteilon(Manipuri)</option>
                <option value='/en/lus'>Mizo</option>
                <option value='/en/mn'>Mongolian</option>
                <option value='/en/my'>Myanmar(Burmese)</option>
                <option value='/en/ne'>Nepali</option>
                <option value='/en/no'>Norwegian</option>
                <option value='/en/ny'>Nyanja(Chichewa)</option>
                <option value='/en/or'>Odia(Oriya)</option>
                <option value='/en/om'>Oromo</option>
                <option value='/en/ps'>Pashto</option>
                <option value='/en/fa'>Persian</option>
                <option value='/en/pl'>Polish</option>
                <option value='/en/pt'>Portuguese(Portugal, Brazil)</option>
                <option value='/en/pa'>Punjabi</option>
                <option value='/en/qu'>Quechua</option>
                <option value='/en/ro'>Romanian</option>
                <option value='/en/ru'>Russian</option>
                <option value='/en/sm'>Samoan</option>
                <option value='/en/sa'>Sanskrit</option>
                <option value='/en/gd'>Scots Gaelic</option>
                <option value='/en/nso'>Sepedi</option>
                <option value='/en/sr'>Serbian</option>
                <option value='/en/st'>Sesotho</option>
                <option value='/en/sn'>Shona</option>
                <option value='/en/sd'>Sindhi</option>
                <option value='/en/si'>Sinhala(Sinhalese)</option>
                <option value='/en/sk'>Slovak</option>
                <option value='/en/sl'>Slovenian</option>
                <option value='/en/so'>Somali</option>
                <option value='/en/es'>Spanish</option>
                <option value='/en/su'>Sundanese</option>
                <option value='/en/sw'>Swahili</option>
                <option value='/en/sv'>Swedish</option>
                <option value='/en/tl'>Tagalog</option>
                <option value='/en/tg'>Tajik</option>
                <option value='/en/ta'>Tamil</option>
                <option value='/en/tt'>Tatar</option>
                <option value='/en/te'>Telugu</option>
                <option value='/en/th'>Thai</option>
                <option value='/en/ti'>Tigrinya</option>
                <option value='/en/ts'>Tsonga</option>
                <option value='/en/tr'>Turkish</option>
                <option value='/en/tk'>Turkmen</option>
                <option value='/en/ak'>Twi(Akan)</option>
                <option value='/en/uk'>Ukranian</option>
                <option value='/en/ur'>Urdu</option>
                <option value='/en/ug'>Uyghur</option>
                <option value='/en/uz'>Uzbek</option>
                <option value='/en/vi'>Vietnamese</option>
                <option value='/en/cy'>Welsh</option>
                <option value='/en/xh'>Xhosa</option>
                <option value='/en/yi'>Yiddish</option>
                <option value='/en/yo'>Yoruba</option>
                <option value='/en/zu'>Zulu</option>

            </select>
            <label>Powered by google translate</label>
            <button onClick={confirmationClick}>Confirm</button>
            <button onClick={testCookie}>test</button>

        </div>



    );
    




};


export default  LanguagePage;









