// app/modules/a11y/native/AccessibilityManager.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AccessibilityInfo;
    var _closure1_slot4 = var8;
    var2 = var2.Appearance;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SystemTheme;
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function init() {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 5;
        var4 = var6[var1];
        var1 = undefined;
        var8 = var5.bind(var1)(var4);
        var4 = var8.init;
        var4 = var4.bind(var8)();
        var4 = var3.updateNativeColors;
        var4 = var4.bind(var3)();
        var4 = var3.updateMotionSettings;
        var4 = var4.bind(var3)();
        var9 = _closure1_slot6;
        var8 = var9.addChangeListener;
        var4 = var3.updateNativeColors;
        var4 = var8.bind(var9)(var4);
        var8 = var9.addChangeListener;
        var4 = var3.updateMotionSettings;
        var4 = var8.bind(var9)(var4);
        var4 = 6;
        var8 = var6[var4];
        var11 = var5.bind(var1)(var8);
        var10 = var11.subscribe;
        var9 = var3.updateMotionSettings;
        var8 = 'CONNECTION_OPEN';
        var8 = var10.bind(var11)(var8, var9);
        var10 = _closure1_slot5;
        var9 = var10.addChangeListener;
        var8 = var3.updateSystemAppearance;
        var8 = var9.bind(var10)(var8);
        var10 = _closure1_slot4;
        var9 = var10.addEventListener;
        var8 = 'screenReaderChanged';
        var7 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.updateScreenReaderEnabled;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var7 = var9.bind(var10)(var8, var7);
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.subscribe;
        var4 = 'ACCESSIBILITY_COLORBLIND_TOGGLE';
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.LOCAL_SETTINGS_UPDATED;
            var2 = {};
            var6 = _closure1_slot6;
            var6 = var6.colorblindMode;
            var2['colorblind_enabled'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var5.bind(var6)(var4, var2);
        var2 = var3.startAnnouncementQueue;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['init'] = var7;
    var7 = function updateNativeColors() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.updateSaturation;
        var2 = _closure1_slot6;
        var2 = var2.saturation;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateNativeColors'] = var7;
    var7 = function updateMotionSettings() {
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = _closure1_slot0;
        var2 = 10;
        var2 = var6[var2];
        var2 = var3.bind(var1)(var2);
        var3 = var2.accessibilityPreferencesSharedValue;
        var2 = {};
        var5 = _closure1_slot6;
        var6 = var5.useReducedMotion;
        var2['reduceMotion'] = var6;
        var5 = var5.systemPrefersCrossfades;
        var2['prefersCrossfades'] = var5;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['updateMotionSettings'] = var7;
    var7 = function checkScreenreaderEnabled() {
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 60; continue _fun0001 }
 7:
                    var3 = _closure1_slot4;
                    var2 = var3.isScreenReaderEnabled;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=28);
 26:
                    return var2;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 57; continue _fun0001 }
 34:
                    var4 = _closure2_slot0;
                    var3 = var4.updateScreenReaderEnabled;
                    var3 = var3.bind(var4)(var2);
                    var3 = undefined;
                    return var3;
 57:
                    return var2;
 60:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['checkScreenreaderEnabled'] = var7;
    var7 = function updateScreenReaderEnabled(arg1) {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 9;
        var3 = var5[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = _closure1_slot0;
        var2 = 10;
        var2 = var5[var2];
        var2 = var3.bind(var1)(var2);
        var3 = var2.accessibilityPreferencesSharedValue;
        var2 = {};
        var5 = arg1;
        var2['screenReaderEnabled'] = var5;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['updateScreenReaderEnabled'] = var7;
    var7 = function updateSystemAppearance(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot8;
            var4 = var2.NO_PREFERENCE;
            var2 = arg1;
            var3 = var2.colorScheme;
            var2 = 'light';
            if(!(var2 !== var3)) { _fun0002_ip = 50; continue _fun0002 }
 30:
            var2 = 'dark';
            if(!(var2 === var3)) { _fun0002_ip = 60; continue _fun0002 }
 38:
            var2 = _closure1_slot8;
            var4 = var2.DARK;
            _fun0002_ip = 60; continue _fun0002;
 50:
            var2 = _closure1_slot8;
            var4 = var2.LIGHT;
 60:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.setSystemTheme;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var2['updateSystemAppearance'] = var7;
    var4 = function startAnnouncementQueue() {
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var7 = var3;
        var2 = new var7[var2](var6);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var3 = var4.addEventListener;
        var2 = 'announcementFinished';
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = var1.success;
                if(var3) { _fun0003_ip = 92; continue _fun0003 }
 18:
                var6 = _closure2_slot0;
                var5 = var6.has;
                var4 = var1.announcement;
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0003_ip = 92; continue _fun0003 }
 44:
                var5 = _closure2_slot0;
                var4 = var5.add;
                var3 = var1.announcement;
                var3 = var4.bind(var5)(var3);
                var3 = global;
                var5 = var3.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = var2.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var2 = _closure3_slot0;
                    var2 = var2.announcement;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = 150;
                var2 = var5.bind(var4)(var3, var2);
                _fun0003_ip = 115; continue _fun0003;
 92:
                var3 = _closure2_slot0;
                var2 = var3.delete;
                var1 = var1.announcement;
                var1 = var2.bind(var3)(var1);
 115:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var2['startAnnouncementQueue'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/AccessibilityManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();