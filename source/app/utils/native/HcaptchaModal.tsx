// app/utils/native/HcaptchaModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var8 = var4.ActivityIndicator;
    var _closure1_slot4 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ModalAnimation;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var2 = function HcaptchaModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot10;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var8 = var3.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var7.bind(var8)(var2, var1);
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var3 = var2.bind(var3)();
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.routes;
            var5 = var3.length;
            var2 = 0;
            var5 = var5 > var2;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3[var2];
            var3 = var2.name;
            var2 = 'auth';
            var5 = var2 === var3;
case 2:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var1.ageVerificationStatus;
case 6:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AgeVerificationStatusUkAndAusOnly;
            var1 = var1.CLIENT_ONLY_PENDING;
            var5 = var2 === var1;
case 4:
            var3 = _closure1_slot9;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = !var5;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var5 = {};
            var9 = 'small';
            var5['size'] = var9;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 10;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.isAndroid;
            var10 = var9.bind(var10)();
            var9 = undefined;
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 11;
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.unsafe_rawColors;
            var9 = var10.WHITE_500;
case 10:
            var5['color'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 8:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = _closure1_slot5;
            var9 = var9.absoluteFillObject;
            var6['style'] = var9;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 12;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var14 = arg1;
            var15 = var9;
            var12 = copyDataProperties(var15, var14);
            var11 = _closure1_slot6;
            var12 = var11.locale;
            var11 = 'languageCode';
            var9[var11] = var12;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = {};
    var7 = var7.FADE;
    var4['animation'] = var7;
    var2['modalConfig'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/HcaptchaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();