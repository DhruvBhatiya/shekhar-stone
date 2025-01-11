import { makeStyles } from "@mui/styles";
import Colors from "../../../Colors";

export const useStyles = makeStyles(() => ({

    tileSec: {
        textAlign: 'center',
        "& .title": {
             "fontFamily": "\"Montserrat\", Sans-serif", "fontSize": "16px", "fontWeight": "400",
            marginBottom: '10px'
        },
        "& .subTitle": {
            //  "fontFamily": "\"Montserrat\", Sans-serif", "fontSize": "27px", "fontWeight": "400",

            "fontFamily":"'Oswald', sans-serif !important",
            // "fontSize":"40px",
            "fontWeight":"600","color": `${Colors.blue}`,"textTransform":"uppercase","textAlign":"center",
            marginBottom: '10px'
        },

        "& .servece-0111":{
            "position":"relative","height":"5px","width":"65px","borderRadius":"8px","backgroundColor":`${Colors.greenLine}`,"display":"block","margin":"18px auto 20px auto"
        }
    }

}));