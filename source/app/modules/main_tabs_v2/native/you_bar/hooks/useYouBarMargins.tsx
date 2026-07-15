// app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.YOU_BAR_MARGIN_IOS;
    var _closure1_slot3 = var7;
    var7 = var4.YOU_BAR_MARGIN;
    var _closure1_slot4 = var7;
    var4 = var4.YOU_BAR_FLOATING_OFFSET_MINIMUM;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useYouBarHorizontalMargin() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            if(!(var3 > var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = _closure1_slot4;
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var1 = _closure1_slot3;
case 5:
            return var1;
        }
    };
    var3['useYouBarHorizontalMargin'] = var4;
    var2 = function useYouBarBottomMargin() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 1;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var5 = var1.bottom;
            var1 = 3;
            var1 = var9[var1];
            var3 = var8.bind(var6)(var1);
            var1 = 'useYouBarBottomMargin';
            var1 = var3.bind(var6)(var1);
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var9[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.useToken;
            var3 = 5;
            var3 = var9[var3];
            var3 = var8.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_FLOATING_OFFSET_MINIMUM;
            var4 = var4.bind(var7)(var3);
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = 0;
            if(!(var5 > var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 8:
            var1 = global;
            var6 = var1.Math;
            var3 = var6.max;
            var1 = _closure1_slot5;
            var1 = var3.bind(var6)(var1, var5);
            _fun0002_ip = 11; continue _fun0002;
case 10:
            var1 = _closure1_slot3;
case 11:
            _fun0002_ip = 12; continue _fun0002;
case 6:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var1 = var2.bind(var3)(var4, var5);
case 12:
            return var1;
        }
    };
    var3['useYouBarBottomMargin'] = var2;
    return var1;
})();