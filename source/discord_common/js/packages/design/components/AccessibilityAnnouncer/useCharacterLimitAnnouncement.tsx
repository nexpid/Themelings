// discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCharacterLimitAnnouncement(arg1) {
        var2 = arg1;
        var7 = var2.currentLength;
        var _closure2_slot0 = var7;
        var6 = var2.maxLength;
        var _closure2_slot1 = var6;
        var5 = var2.message;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var2 = false;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot3 = var2;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var3 >= var2;
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot3;
                var3 = var3.current;
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var4 = _closure2_slot3;
                var3 = true;
                var4['current'] = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var6 = var3.AccessibilityAnnouncer;
                var5 = var6.announce;
                var4 = _closure2_slot2;
                var3 = 'polite';
                var3 = var5.bind(var6)(var4, var3);
                _fun0001_ip = 2; continue _fun0001;
case 4:
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 7:
                var2 = _closure2_slot3;
                var1 = false;
                var2['current'] = var1;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useCharacterLimitAnnouncement'] = var2;
    return var1;
})();