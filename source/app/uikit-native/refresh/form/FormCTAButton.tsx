// app/uikit-native/refresh/form/FormCTAButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var16 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function getCTAButtonColor(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = arg2;
            var4 = _closure1_slot10;
            var4 = var4.BRAND;
            if(!(var4 !== var3)) { _fun0001_ip = 71; continue _fun0001 }
 23:
            var4 = _closure1_slot10;
            var4 = var4.DANGER;
            if(!(var4 !== var3)) { _fun0001_ip = 63; continue _fun0001 }
 37:
            var2 = _closure1_slot10;
            var2 = var2.WARNING;
            if(!(var2 !== var3)) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var2 = undefined;
            return var2;
 55:
            var2 = var1.textWarning;
            return var2;
 63:
            var2 = var1.textDanger;
            return var2;
 71:
            var1 = var1.textBrand;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = function FormCTAButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.color;
            var4 = undefined;
            if(!(var4 === var5)) { _fun0002_ip = 27; continue _fun0002 }
 14:
            var2 = _closure1_slot10;
            var5 = var2.BRAND;
 27:
            var13 = var1.label;
            var2 = var1.fontSize;
            var17 = 16;
            if(!(var4 !== var2)) { _fun0002_ip = 48; continue _fun0002 }
 45:
            var17 = var2;
 48:
            var2 = var1.alignLeft;
            var15 = var4 !== var2;
            if(!var15) { _fun0002_ip = 64; continue _fun0002 }
 61:
            var15 = var2;
 64:
            var2 = var1.disabled;
            var10 = var4 !== var2;
            if(!var10) { _fun0002_ip = 79; continue _fun0002 }
 76:
            var10 = var2;
 79:
            var2 = var1.loading;
            var11 = var4 !== var2;
            if(!var11) { _fun0002_ip = 95; continue _fun0002 }
 92:
            var11 = var2;
 95:
            var9 = var1.testID;
            var8 = var1.style;
            var12 = var1.onPress;
            var1 = _closure1_slot9;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var14 = _closure1_slot1;
            var1 = 8;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var16 = var7.text;
            var14 = new Array(4);
            var14[0] = var16;
            var16 = _closure1_slot11;
            var16 = var16.bind(var4)(var5, var7);
            var14[1] = var16;
            var16 = {};
            var16['fontSize'] = var17;
            var14[2] = var16;
            if(!var15) { _fun0002_ip = 201; continue _fun0002 }
 195:
            var15 = var7.alignLeft;
 201:
            var14[3] = var15;
            var1['style'] = var14;
            var1['children'] = var13;
            var13 = var3.bind(var4)(var2, var1);
            if(!var11) { _fun0002_ip = 242; continue _fun0002 }
 222:
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = {};
            var1['color'] = var5;
            var13 = var3.bind(var4)(var2, var1);
 242:
            var3 = _closure1_slot2;
            var2 = var3.useContext;
            var5 = _closure1_slot0;
            var14 = _closure1_slot1;
            var1 = 9;
            var1 = var14[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.RedesignCompatContext;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var5 = {};
            if(var1) { _fun0002_ip = 423; continue _fun0002 }
 299:
            var14 = var7.sectionBody;
            var1 = new Array(3);
            var1[0] = var14;
            var14 = var10;
            if(!var10) { _fun0002_ip = 324; continue _fun0002 }
 319:
            var14 = var7.disabled;
 324:
            var1[1] = var14;
            var1[2] = var8;
            var5['style'] = var1;
            var14 = _closure1_slot8;
            var8 = _closure1_slot4;
            var1 = {};
            var1['testID'] = var9;
            var15 = 'button';
            var1['accessibilityRole'] = var15;
            var1['onPress'] = var12;
            var15 = var7.button;
            var1['style'] = var15;
            var15 = var10;
            if(var10) { _fun0002_ip = 382; continue _fun0002 }
 379:
            var15 = var11;
 382:
            var1['disabled'] = var15;
            var16 = _closure1_slot7;
            var15 = _closure1_slot6;
            var15 = var16.bind(var4)(var15);
            var1['android_ripple'] = var15;
            var1['children'] = var13;
            var1 = var14.bind(var4)(var8, var1);
            var5['children'] = var1;
            var1 = var5;
            _fun0002_ip = 508; continue _fun0002;
 423:
            var7 = var7.rowButton;
            var5['style'] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var14 = _closure1_slot1;
            var6 = 10;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.RowButton;
            var6 = {};
            var6['label'] = var13;
            var6['onPress'] = var12;
            var12 = false;
            var6['arrow'] = var12;
            if(var10) { _fun0002_ip = 486; continue _fun0002 }
 483:
            var10 = var11;
 486:
            var6['disabled'] = var10;
            var6['testID'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
 508:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.ActivityIndicator;
    var _closure1_slot3 = var8;
    var8 = var2.Pressable;
    var _closure1_slot4 = var8;
    var8 = var2.Platform;
    var8 = var2.StyleSheet;
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = var8;
    var2 = var2.getThemedRippleConfig;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var13 = var2.Fonts;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var2 = {};
    var10 = {};
    var15 = 16;
    var10['paddingHorizontal'] = var15;
    var2['rowButton'] = var10;
    var10 = {};
    var2['sectionBody'] = var10;
    var10 = {'minHeight': 44, 'justifyContent': 'center'};
    var2['button'] = var10;
    var11 = 'left';
    var10 = {'lineHeight': 44, 'paddingHorizontal': 17, 'textAlign': 'left'};
    var2['text'] = var10;
    var10 = {};
    var14 = 6;
    var12 = var7[var14];
    var19 = var16.bind(var1)(var12);
    var18 = var13.PRIMARY_SEMIBOLD;
    var12 = 7;
    var17 = var7[var12];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.CONTROL_BRAND_FOREGROUND;
    var21 = var19.bind(var1)(var18, var17, var15);
    var22 = var10;
    var17 = copyDataProperties(var22, var21);
    var2['textBrand'] = var10;
    var10 = {};
    var17 = var7[var14];
    var19 = var16.bind(var1)(var17);
    var18 = var13.PRIMARY_SEMIBOLD;
    var17 = var7[var12];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_DANGER;
    var21 = var19.bind(var1)(var18, var17, var15);
    var22 = var10;
    var17 = copyDataProperties(var22, var21);
    var2['textDanger'] = var10;
    var10 = {};
    var14 = var7[var14];
    var14 = var16.bind(var1)(var14);
    var13 = var13.PRIMARY_SEMIBOLD;
    var12 = var7[var12];
    var12 = var16.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_WARNING;
    var21 = var14.bind(var1)(var13, var12, var15);
    var22 = var10;
    var12 = copyDataProperties(var22, var21);
    var2['textWarning'] = var10;
    var10 = {};
    var10['textAlign'] = var11;
    var2['alignLeft'] = var10;
    var10 = {};
    var11 = 0.5;
    var10['opacity'] = var11;
    var2['disabled'] = var10;
    var2 = var8.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var8 = 'brand';
    var2['BRAND'] = var8;
    var8 = 'danger';
    var2['DANGER'] = var8;
    var8 = 'warning';
    var2['WARNING'] = var8;
    var _closure1_slot10 = var2;
    var4['Colors'] = var2;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/refresh/form/FormCTAButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FormCTAButtonColors'] = var2;
    return var1;
})();