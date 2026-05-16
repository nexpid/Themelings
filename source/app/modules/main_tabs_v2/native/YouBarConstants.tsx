// app/modules/main_tabs_v2/native/YouBarConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var15;
    var6 = function useYouBarBottomMargin() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var9.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var5 = var1.bottom;
            var1 = 3;
            var1 = var4[var1];
            var3 = var9.bind(var6)(var1);
            var1 = 'useYouBarBottomMargin';
            var3 = var3.bind(var6)(var1);
            var7 = _closure1_slot0;
            var1 = 4;
            var1 = var4[var1];
            var8 = var7.bind(var6)(var1);
            var7 = var8.useToken;
            var1 = 0;
            var4 = var4[var1];
            var4 = var9.bind(var6)(var4);
            var4 = var4.modules;
            var4 = var4.mobile;
            var4 = var4.CHAT_INPUT_SPACE_BOTTOM;
            var4 = var7.bind(var8)(var4);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var5 > var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = _closure1_slot5;
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var3 = global;
            var6 = var3.Math;
            var3 = var6.max;
            var2 = _closure1_slot6;
            var1 = var3.bind(var6)(var2, var5);
case 7:
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var1 = var2.bind(var3)(var4, var5);
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function useYouBarSettingsOutsideSafeAreaTop(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useYouBarEnabled;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var2 = !var2;
            if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var3;
case 11:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = 0;
    var7 = var15[var2];
    var1 = undefined;
    var7 = var13.bind(var1)(var7);
    var7 = var7.spacing;
    var12 = var7.PX_12;
    var7 = 2;
    var8 = var7 * var12;
    var7 = 32;
    var11 = var7 + var8;
    var _closure1_slot3 = var11;
    var7 = var15[var2];
    var7 = var13.bind(var1)(var7);
    var7 = var7.spacing;
    var10 = var7.PX_16;
    var _closure1_slot4 = var10;
    var7 = var15[var2];
    var7 = var13.bind(var1)(var7);
    var7 = var7.spacing;
    var9 = var7.PX_24;
    var _closure1_slot5 = var9;
    var7 = var15[var2];
    var7 = var13.bind(var1)(var7);
    var7 = var7.spacing;
    var8 = var7.PX_16;
    var7 = var15[var2];
    var7 = var13.bind(var1)(var7);
    var7 = var7.spacing;
    var7 = var7.PX_16;
    var _closure1_slot6 = var7;
    var2 = var15[var2];
    var2 = var13.bind(var1)(var2);
    var2 = var2.spacing;
    var2 = var2.PX_16;
    var13 = 7;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/main_tabs_v2/native/YouBarConstants.tsx';
    var13 = var14.bind(var15)(var13);
    var3['YOU_BAR_PADDING'] = var12;
    var3['YOU_BAR_HEIGHT'] = var11;
    var3['YOU_BAR_MARGIN'] = var10;
    var3['YOU_BAR_MARGIN_IOS'] = var9;
    var3['YOU_BAR_LEFT_INSET'] = var8;
    var3['YOU_BAR_FLOATING_OFFSET_MINIMUM'] = var7;
    var7 = function useYouBarHorizontalMargin() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.bottom;
            var1 = 0;
            if(!(var3 > var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 15:
            var1 = _closure1_slot5;
            _fun0003_ip = 16; continue _fun0003;
case 13:
            var1 = _closure1_slot4;
case 16:
            return var1;
        }
    };
    var3['useYouBarHorizontalMargin'] = var7;
    var3['useYouBarBottomMargin'] = var6;
    var6 = function useYouBarTotalHeight() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arguments[0];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var3 = 0;
case 17:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.useYouBarEnabled;
            var1 = 'YouBar';
            var5 = var5.bind(var6)(var1);
            var1 = _closure1_slot7;
            var4 = var1.bind(var4)();
            var1 = 0;
            if(!var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = _closure1_slot3;
            var2 = var4 + var2;
            var1 = var2 + var3;
case 19:
            return var1;
        }
    };
    var3['useYouBarTotalHeight'] = var6;
    var3['useYouBarSettingsOutsideSafeAreaTop'] = var5;
    var5 = function useYouBarSettingsCustomHeaderPaddingTop(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.top;
            var3 = _closure1_slot8;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = 16;
            if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var1 = var2;
case 21:
            return var1;
        }
    };
    var3['useYouBarSettingsCustomHeaderPaddingTop'] = var5;
    var4 = function useYouBarIOSModalPresentation(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.useYouBarEnabled;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 23:
            return var1;
        }
    };
    var3['useYouBarIOSModalPresentation'] = var4;
    var3['YOU_BAR_GRADIENT_EXTRA_HEIGHT'] = var2;
    return var1;
})();