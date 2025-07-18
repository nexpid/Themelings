// app/modules/a11y/native/AccessibilitySystemFeatures.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function toggleFeature(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var1 = _closure1_slot8;
            if(var6) { _fun0001_ip = 29; continue _fun0001 }
 16:
            var2 = ~var4;
            var2 = var1 & var2;
            _closure1_slot8 = var2;
            _fun0001_ip = 37; continue _fun0001;
 29:
            var1 = var1 | var4;
            _closure1_slot8 = var1;
 37:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 3;
            var2 = var1[var7];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.A11Y_FEATURE_MAP;
            var5 = var2[var4];
            var2 = null;
            if(!(var2 != var5)) { _fun0001_ip = 127; continue _fun0001 }
 75:
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 4;
            var4 = var2[var4];
            var4 = var8.bind(var1)(var4);
            var3 = _closure1_slot0;
            var2 = var2[var7];
            var2 = var3.bind(var1)(var2);
            var3 = var2.accessibilityPreferencesSharedValue;
            var2 = {};
            var2[var5] = var6;
            var2 = var4.bind(var1)(var3, var2);
 127:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var2 = var5.bind(var1)(var2);
    var8 = var2.AccessibilityInfo;
    var _closure1_slot3 = var8;
    var8 = var2.Appearance;
    var _closure1_slot4 = var8;
    var2 = var2.AppState;
    var _closure1_slot5 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AccessibilityFeatureFlags;
    var _closure1_slot7 = var2;
    var2 = var2.NONE;
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function init() {
        var2 = this;
        var5 = _closure1_slot6;
        var4 = var5.addChangeListener;
        var3 = var2.handleAccessibilityStoreChanged;
        var3 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var6 = var4.addEventListener;
        var5 = var2.handleReduceMotionChanged;
        var3 = 'reduceMotionChanged';
        var3 = var6.bind(var4)(var3, var5);
        var3 = var4.isReduceMotionEnabled;
        var6 = var3.bind(var4)();
        var5 = var6.then;
        var3 = var2.handleReduceMotionChanged;
        var3 = var5.bind(var6)(var3);
        var6 = var4.addEventListener;
        var5 = var2.handleReduceTransparencyChanged;
        var3 = 'reduceTransparencyChanged';
        var3 = var6.bind(var4)(var3, var5);
        var3 = var4.isReduceTransparencyEnabled;
        var6 = var3.bind(var4)();
        var5 = var6.then;
        var3 = var2.handleReduceTransparencyChanged;
        var3 = var5.bind(var6)(var3);
        var6 = var4.addEventListener;
        var5 = var2.handleBoldTextChanged;
        var3 = 'boldTextChanged';
        var3 = var6.bind(var4)(var3, var5);
        var3 = var4.isBoldTextEnabled;
        var6 = var3.bind(var4)();
        var5 = var6.then;
        var3 = var2.handleBoldTextChanged;
        var3 = var5.bind(var6)(var3);
        var6 = var4.addEventListener;
        var5 = var2.handleGrayscaleChanged;
        var3 = 'grayscaleChanged';
        var3 = var6.bind(var4)(var3, var5);
        var3 = var4.isGrayscaleEnabled;
        var6 = var3.bind(var4)();
        var5 = var6.then;
        var3 = var2.handleGrayscaleChanged;
        var3 = var5.bind(var6)(var3);
        var6 = var4.addEventListener;
        var5 = var2.handleInvertColorsChanged;
        var3 = 'invertColorsChanged';
        var3 = var6.bind(var4)(var3, var5);
        var3 = var4.isInvertColorsEnabled;
        var5 = var3.bind(var4)();
        var4 = var5.then;
        var3 = var2.handleInvertColorsChanged;
        var3 = var4.bind(var5)(var3);
        var4 = var2.handlePreferredColorSchemeChanged;
        var3 = {};
        var5 = _closure1_slot4;
        var6 = var5.getColorScheme;
        var6 = var6.bind(var5)();
        var3['colorScheme'] = var6;
        var3 = var4.bind(var2)(var3);
        var4 = var5.addChangeListener;
        var3 = var2.handlePreferredColorSchemeChanged;
        var3 = var4.bind(var5)(var3);
        var6 = _closure1_slot5;
        var5 = var6.addEventListener;
        var4 = var2.handleAppStateChange;
        var3 = 'change';
        var3 = var5.bind(var6)(var3, var4);
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.setSystemAccessibilityFeatures;
        var2 = var2.getActiveFeatures;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['init'] = var7;
    var7 = function getActiveFeatures() {
        var1 = _closure1_slot8;
        return var1;
    };
    var2['getActiveFeatures'] = var7;
    var7 = function handleReduceMotionChanged(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot9;
            var1 = _closure1_slot7;
            var3 = var1.REDUCED_MOTION;
            var1 = undefined;
            var3 = var4.bind(var1)(var3, var5);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.systemPrefersReducedMotionChanged;
            var2 = 'no-preference';
            if(!var5) { _fun0002_ip = 67; continue _fun0002 }
 63:
            var2 = 'reduce';
 67:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['handleReduceMotionChanged'] = var7;
    var7 = function handleReduceTransparencyChanged(arg1) {
        var4 = _closure1_slot9;
        var1 = _closure1_slot7;
        var3 = var1.REDUCED_TRANSPARENCY;
        var1 = undefined;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['handleReduceTransparencyChanged'] = var7;
    var7 = function handleBoldTextChanged(arg1) {
        var4 = _closure1_slot9;
        var1 = _closure1_slot7;
        var3 = var1.BOLD_TEXT;
        var1 = undefined;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['handleBoldTextChanged'] = var7;
    var7 = function handleGrayscaleChanged(arg1) {
        var4 = _closure1_slot9;
        var1 = _closure1_slot7;
        var3 = var1.GRAYSCALE;
        var1 = undefined;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['handleGrayscaleChanged'] = var7;
    var7 = function handleInvertColorsChanged(arg1) {
        var4 = _closure1_slot9;
        var1 = _closure1_slot7;
        var3 = var1.INVERT_COLORS;
        var1 = undefined;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['handleInvertColorsChanged'] = var7;
    var7 = function handlePreferredColorSchemeChanged(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.colorScheme;
            var1 = 'dark';
            if(!(var1 !== var2)) { _fun0003_ip = 109; continue _fun0003 }
 17:
            var1 = 'light';
            if(!(var1 !== var2)) { _fun0003_ip = 66; continue _fun0003 }
 25:
            var4 = _closure1_slot9;
            var1 = _closure1_slot7;
            var5 = var1.PREFERS_COLOR_SCHEME_DARK;
            var3 = undefined;
            var2 = false;
            var5 = var4.bind(var3)(var5, var2);
            var1 = var1.PREFERS_COLOR_SCHEME_LIGHT;
            var1 = var4.bind(var3)(var1, var2);
            _fun0003_ip = 150; continue _fun0003;
 66:
            var4 = _closure1_slot9;
            var1 = _closure1_slot7;
            var5 = var1.PREFERS_COLOR_SCHEME_DARK;
            var3 = undefined;
            var2 = false;
            var2 = var4.bind(var3)(var5, var2);
            var2 = var1.PREFERS_COLOR_SCHEME_LIGHT;
            var1 = true;
            var1 = var4.bind(var3)(var2, var1);
            _fun0003_ip = 150; continue _fun0003;
 109:
            var4 = _closure1_slot9;
            var1 = _closure1_slot7;
            var5 = var1.PREFERS_COLOR_SCHEME_LIGHT;
            var3 = undefined;
            var2 = false;
            var2 = var4.bind(var3)(var5, var2);
            var2 = var1.PREFERS_COLOR_SCHEME_DARK;
            var1 = true;
            var1 = var4.bind(var3)(var2, var1);
 150:
            var1 = undefined;
            return var1;
        }
    };
    var2['handlePreferredColorSchemeChanged'] = var7;
    var7 = function handleAccessibilityStoreChanged() {
        var4 = _closure1_slot9;
        var3 = _closure1_slot7;
        var6 = var3.REDUCED_MOTION;
        var2 = _closure1_slot6;
        var5 = var2.useReducedMotion;
        var1 = undefined;
        var5 = var4.bind(var1)(var6, var5);
        var6 = var3.REDUCED_MOTION_FROM_USER_SETTINGS;
        var7 = var2.rawPrefersReducedMotion;
        var5 = 'auto';
        var5 = var5 !== var7;
        var5 = var4.bind(var1)(var6, var5);
        var7 = var3.SATURATION_LEVEL_DECREASED;
        var6 = var2.saturation;
        var5 = 1;
        var6 = var6 < var5;
        var6 = var4.bind(var1)(var7, var6);
        var7 = var3.CONTRAST_LEVEL_DECREASED;
        var6 = var2.contrast;
        var6 = var6 < var5;
        var6 = var4.bind(var1)(var7, var6);
        var3 = var3.CONTRAST_LEVEL_INCREASED;
        var2 = var2.contrast;
        var2 = var2 > var5;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['handleAccessibilityStoreChanged'] = var7;
    var4 = function handleAppStateChange(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = 'active';
            var2 = arg1;
            if(!(var3 === var2)) { _fun0004_ip = 74; continue _fun0004 }
 13:
            var3 = _closure1_slot3;
            var2 = var3.isReduceMotionEnabled;
            var5 = var2.bind(var3)();
            var4 = var5.then;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var4 = _closure1_slot9;
                    var1 = _closure1_slot7;
                    var3 = var1.REDUCED_MOTION;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3, var5);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.systemPrefersReducedMotionChanged;
                    var2 = 'no-preference';
                    if(!var5) { _fun0005_ip = 67; continue _fun0005 }
 63:
                    var2 = 'reduce';
 67:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = var3.prefersCrossFadeTransitions;
            var3 = var2.bind(var3)();
            var2 = var3.then;
            var1 = function(arg1) {
                var4 = arg1;
                var5 = _closure1_slot9;
                var1 = _closure1_slot7;
                var3 = var1.REDUCED_MOTION_PREFERS_CROSSFADES;
                var1 = undefined;
                var3 = var5.bind(var1)(var3, var4);
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.systemPrefersCrossfadesChanged;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 74:
            var1 = undefined;
            return var1;
        }
    };
    var2['handleAppStateChange'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/AccessibilitySystemFeatures.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();