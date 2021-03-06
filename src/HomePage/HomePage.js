import React, {useEffect} from 'react'
import './HomePage.css'
import Menu from './HomePageManu'
import { useDispatch, useSelector } from 'react-redux'
import { setHomePageLoading } from '../redux/homepage/homepage.action'

export default function HomePage() {

    const dispatch=useDispatch()
    const HHH=useSelector((state)=>state.homepage.loading2)

    useEffect(()=>{
        dispatch(setHomePageLoading())
    },[])

    console.log(HHH)

    return (
        <>
            <Menu />
            <div className="glxavor">
            <div className="shushi"></div>
            <div className="text">
                <p>Շուշի, քաղաք Արցախում։ Գտնվում է Լեռնային Ղարաբաղի Հանրապետության լեռնաշղթայի նախալեռներում, Գորիս-Ստեփանակերտ խճուղու վրա, Ստեփանակերտից 11 կմ հարավ, Աղդամ երկաթուղային կայարանից 37 կմ հարավարևմտյան․։ Կան արտադրական կոմբինատ, կաշվի գործարան, արլ․ երաժշտ․ գործիքների պատրաստման ֆաբրիկա։ Գորգագործության կենտրոն է։ Շուշիում է Ղարաբաղի մետաքսի կոմբինատի գործվածքային արտադրամասը։ Ունի գյուղատնտեսական տեխնիկում, մանկավարժական և երաժշտական համալսարաններ, երաժշտական դպրոց, պատմության թանգարան, մշակույթի տուն, գրադարաններ և կինոթատրոններ։ Շուշին կլիմայական առողջարան է։ Ամառը տաք է (հուլիսի միջին ջերմաստիճանը՝ 19 °C), ձմեռը՝ մեղմ (հունվարի միջին ջերմաստիճանը՝ —2 °C)։ Տարեկան տեղումները 645 մմ են։ Կան առողջարաններ, հանգստյան տներ, պիոներական ճամբար, տուրիստական հանգրվան։ Շուշին հիմնադրվել է 1752 թվականին, քաղաք է 1840 թվականից։ Պատմական տեղեկանք։ Բնական անմատչելի դիրքի շնորհիվ Շուշին հնագույն ժամանակներում Վարանդա գավառի հայ բնակիչների համար ծառայել է իբրև պաշտպանական ամրություն, որը հետագայում պարսպապատվելով, դարձել է բերդ։ Բերդապարսպի մեծ մասն այժմ էլ կանգուն է։ 18-րդ դարի 2-րդ կեսից բերդաքաղաք էր, իսկ 19-րդ դարում առևտրական, արհեստագործական ու մշակութային խոշոր կենտրոն։ Վաղ միջնադարում բերդը կոչվել է Շիկաքար։ Այստեղ իշխան Մահլ Սմբատյանը 9-րդ դարի կեսին հաղթել է արաբ, ասպատակիչ զորքին և ազատագրել գերեվարված հայ բնակչությանը։ Ուշ միջնադարյան աղբյուրները բերդը հիշում են տարբեր անուններով՝ Քարագլուխ, Քարագլխի բերդ, Քար, Քարագլխի սղնախ, հաճախ նաև՝ Շոշի բերդ, Շոշի սղնախ (որովհետև թշնամի ուժերի հարձակումների ժամանակ այնտեղ պատսպարվել է հարևան Շոշ ավանի և գավառի բնակչությունը)։ 18-րդ դարի սկզբին Շոշի բերդը եղել է թվով գերակշիռ թուրք, զորքերի դեմ հայոց ազատագրական մարտերի կենտրոն։ Բերդը հավանաբար այդ ժամանակ վերակառուցել ու ամրացրել են ազատագրական պայքարի հրամանատարները (Ավան հարյուրապետը և այլք), որոնք հիշվում են իբրև բերդի տերեր։ 1750-ական թվականներին Վարանդայի մելիքությանն ուխտադրժորեն տիրացած Շահնազար Բ, իր դեմ միավորված Ղարաբաղի մյուս չորս մելիքություններին դիմադրելու համար, դաշնակցել է «սարըջալու» կոչվող վաչկատուն ցեղի առաջնորդ Փանահ խանի հետ և նրան տրամադրել Շոշի բերդը։ Փանահ խանը Շահնազարի օգնությամբ այժմյան Շուշիի տեղում կառուցել է իր ամրոց նստավայրը (Փանահաբադ)։</p>
                </div>       
            </div>
        </>

    )
}