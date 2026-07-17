// app/modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 3;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['marginTop'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 'underline';
    var9['textDecorationLine'] = var10;
    var4['link'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterParentalConsentNotice() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = function learnMoreHook(arg1, arg2) {
                var5 = _closure1_slot4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'text-strong', 'style': null, 'accessibilityRole': 'link'};
                var6 = _closure2_slot0;
                var6 = var6.link;
                var2['style'] = var6;
                var1 = _closure2_slot1;
                var2['onPress'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var1 = _closure1_slot5;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.useIsParentalConsentBannerActive;
            var2 = var1.bind(var2)();
            var1 = 5;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useParentalConsentWarning;
            var6 = var1.bind(var3)();
            var1 = null;
            var9 = var1 == var6;
            var3 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6.daysRemaining;
case 2:
            var6 = var1 != var3;
            var12 = null;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var3;
case 4:
            var10 = _closure1_slot3;
            var9 = var10.useCallback;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openURL;
                var2 = 'https://support.discord.com/hc/articles/14155060633623';
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var9.bind(var10)(var6, var3);
            var _closure2_slot1 = var3;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var1 != var12)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var6 = 0;
            if(!(!(var12 < var6))) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var8 = var8.container;
            var2['style'] = var8;
            if(!(var6 !== var12)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 9;
            var6 = var13[var6];
            var6 = var8.bind(var5)(var6);
            var10 = var6.intl;
            var9 = var10.format;
            var8 = _closure1_slot1;
            var6 = 10;
            var6 = var13[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6["5jm+T3"];
            var6 = {};
            var6['count'] = var12;
            var6['learnMoreHook'] = var11;
            var6 = var9.bind(var10)(var8, var6);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 9;
            var8 = var12[var8];
            var8 = var9.bind(var5)(var8);
            var10 = var8.intl;
            var9 = var10.format;
            var8 = _closure1_slot1;
            var7 = 10;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.S5kmfO;
            var7 = {};
            var7['learnMoreHook'] = var11;
            var6 = var9.bind(var10)(var8, var7);
case 12:
            var2['text'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();