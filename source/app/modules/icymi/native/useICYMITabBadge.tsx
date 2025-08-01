// app/modules/icymi/native/useICYMITabBadge.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/useICYMITabBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useICYMITabBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 2;
            var2 = var11[var6];
            var9 = undefined;
            var12 = var7.bind(var9)(var2);
            var10 = var12.useStateFromStores;
            var4 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var4;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.hasNewContent;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var10.bind(var12)(var8, var3, var2);
            var3 = 3;
            var3 = var11[var3];
            var10 = var7.bind(var9)(var3);
            var8 = var10.useIsNotificationsTabMerged;
            var3 = {};
            var12 = 'useICYMITabBadge';
            var3['location'] = var12;
            var3 = var8.bind(var10)(var3);
            var3 = var3.enabled;
            var6 = var11[var6];
            var8 = var7.bind(var9)(var6);
            var7 = var8.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getIsTabFocused;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var8)(var6, var4);
            var _closure2_slot0 = var10;
            var7 = _closure1_slot1;
            var4 = 4;
            var4 = var11[var4];
            var4 = var7.bind(var9)(var4);
            var4 = var4.bind(var9)();
            var6 = var4.value;
            var8 = var4.showDot;
            var _closure2_slot1 = var8;
            var4 = 5;
            var4 = var11[var4];
            var7 = var7.bind(var9)(var4);
            var4 = {};
            var4['isFocused'] = var10;
            var4['mergedNotificationsEnabled'] = var3;
            var7 = var7.bind(var9)(var4);
            var4 = var7.displayUnreadMentionMessages;
            var _closure2_slot2 = var4;
            var9 = var7.newUnreadMentionMessages;
            var _closure2_slot3 = var9;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var11 = var4.length;
            var4 = new Array(4);
            var4[0] = var11;
            var4[1] = var10;
            var9 = var9.length;
            var4[2] = var9;
            var4[3] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 55; continue _fun0002 }
 14:
                    var1 = var2;
                    if(var2) { _fun0002_ip = 35; continue _fun0002 }
 20:
                    var4 = _closure2_slot2;
                    var5 = var4.length;
                    var4 = 0;
                    var1 = var5 > var4;
 35:
                    if(var1) { _fun0002_ip = 53; continue _fun0002 }
 38:
                    var4 = _closure2_slot3;
                    var5 = var4.length;
                    var4 = 0;
                    var1 = var5 > var4;
 53:
                    _fun0002_ip = 76; continue _fun0002;
 55:
                    if(var2) { _fun0002_ip = 73; continue _fun0002 }
 58:
                    var3 = _closure2_slot2;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
 73:
                    var1 = var2;
 76:
                    return var1;
                }
            };
            var4 = var5.bind(var7)(var1, var4);
            var1 = {};
            var5 = 0;
            if(!var3) { _fun0001_ip = 287; continue _fun0001 }
 284:
            var5 = var6;
 287:
            var1['value'] = var5;
            if(var2) { _fun0001_ip = 303; continue _fun0001 }
 294:
            if(!var3) { _fun0001_ip = 300; continue _fun0001 }
 297:
            var3 = var4;
 300:
            var2 = var3;
 303:
            var1['showDot'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function icymiTabBadgeShown() {
        var2 = _closure1_slot4;
        var1 = var2.hasNewContent;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['icymiTabBadgeShown'] = var2;
    return var1;
})();