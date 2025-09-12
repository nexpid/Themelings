// discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.AccessibilityInfo;
    var _closure1_slot2 = var2;
    var2 = {};
    var7 = function announce(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = 'polite';
            var1 = arg2;
            if(!(var2 !== var1)) { _fun0001_ip = 36; continue _fun0001 }
 16:
            var2 = _closure1_slot2;
            var1 = var2.announceForAccessibility;
            var1 = var1.bind(var2)(var3);
            _fun0001_ip = 72; continue _fun0001;
 36:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.updateAccessibilityAnnouncerLiveRegionMessage;
            var1 = var1.bind(var2)(var3);
 72:
            var1 = undefined;
            return var1;
        }
    };
    var2['announce'] = var7;
    var4 = function clearAnnouncements() {
        var1 = null;
        return var1;
    };
    var2['clearAnnouncements'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AccessibilityAnnouncer'] = var2;
    return var1;
})();