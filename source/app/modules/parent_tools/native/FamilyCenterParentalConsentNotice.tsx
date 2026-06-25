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
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start'};
    var10 = 4;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['marginTop'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var9['borderWidth'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_FEEDBACK_WARNING;
    var9['borderColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_WARNING;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var9['paddingRight'] = var10;
    var4['text'] = var9;
    var9 = {};
    var10 = 'underline';
    var9['textDecorationLine'] = var10;
    var4['link'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterParentalConsentNotice() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot7;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var _closure2_slot0 = var12;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var4.bind(var5)(var1);
            var1 = var3.useIsParentalConsentBannerActive;
            var3 = var1.bind(var3)();
            var1 = 6;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useParentalConsentWarning;
            var6 = var1.bind(var4)();
            var1 = null;
            var7 = var1 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.daysRemaining;
case 2:
            var6 = var1 != var4;
            var16 = null;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = var4;
case 4:
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openURL;
                var2 = 'https://support.discord.com/hc/articles/14155060633623';
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var4 = var7.bind(var8)(var6, var4);
            var _closure2_slot1 = var4;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var1 != var16)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var10 = 0;
            if(!(!(var16 < var10))) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var15 = function learnMoreHook(arg1, arg2) {
                var5 = _closure1_slot5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
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
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var12.container;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 9;
            var6 = var13[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.WarningIcon;
            var6 = {};
            var14 = 'sm';
            var6['size'] = var14;
            var17 = _closure1_slot1;
            var14 = 4;
            var14 = var13[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.colors;
            var14 = var14.ICON_FEEDBACK_WARNING;
            var6['color'] = var14;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 10;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.TextWithIOSLinkWorkaround;
            var7 = {'variant': 'text-sm/medium', 'color': 'text-strong'};
            var12 = var12.text;
            var7['style'] = var12;
            if(!(var10 !== var16)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 11;
            var10 = var17[var10];
            var10 = var12.bind(var5)(var10);
            var14 = var10.intl;
            var13 = var14.format;
            var12 = _closure1_slot1;
            var10 = 12;
            var10 = var17[var10];
            var10 = var12.bind(var5)(var10);
            var12 = var10["5jm+T3"];
            var10 = {};
            var10['count'] = var16;
            var10['learnMoreHook'] = var15;
            var10 = var13.bind(var14)(var12, var10);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 11;
            var12 = var16[var12];
            var12 = var13.bind(var5)(var12);
            var14 = var12.intl;
            var13 = var14.format;
            var12 = _closure1_slot1;
            var11 = 12;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.S5kmfO;
            var11 = {};
            var11['learnMoreHook'] = var15;
            var10 = var13.bind(var14)(var12, var11);
case 12:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();