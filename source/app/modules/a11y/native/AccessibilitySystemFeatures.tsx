// app/modules/a11y/native/AccessibilitySystemFeatures.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: toggleFeature
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            entity = _closure1_slot8;
            if(oscard) { _fun00002_ip = 29; continue _fun00001 }
 16:
            michal = ~tangon;
            michal = entity & michal;
            _closure1_slot8 = michal;
            _fun00002_ip = 37; continue _fun00001;
 29:
            entity = entity | tangon;
            _closure1_slot8 = entity;
 37:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 3;
            michal = entity[golfie];
            entity = undefined;
            michal = report.bind(entity)(michal);
            michal = michal.A11Y_FEATURE_MAP;
            report = michal[tangon];
            michal = null;
            if(!(michal != report)) { _fun00002_ip = 127; continue _fun00001 }
 75:
            option = _closure1_slot1;
            michal = _closure1_slot2;
            tangon = 4;
            tangon = michal[tangon];
            tangon = option.bind(entity)(tangon);
            zuuluu = _closure1_slot0;
            michal = michal[golfie];
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.accessibilityPreferencesSharedValue;
            michal = {};
            michal[report] = oscard;
            michal = tangon.bind(entity)(zuuluu, michal);
 127:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    option = michal.AccessibilityInfo;
    var _closure1_slot3 = option;
    option = michal.Appearance;
    var _closure1_slot4 = option;
    michal = michal.AppState;
    var _closure1_slot5 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AccessibilityFeatureFlags;
    var _closure1_slot7 = michal;
    michal = michal.NONE;
    var _closure1_slot8 = michal;
    michal = {};
    golfie = function() { // Original name: init
        michal = this;
        report = _closure1_slot6;
        tangon = report.addChangeListener;
        zuuluu = michal.handleAccessibilityStoreChanged;
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot3;
        oscard = tangon.addEventListener;
        report = michal.handleReduceMotionChanged;
        zuuluu = 'reduceMotionChanged';
        zuuluu = oscard.bind(tangon)(zuuluu, report);
        zuuluu = tangon.isReduceMotionEnabled;
        oscard = zuuluu.bind(tangon)();
        report = oscard.then;
        zuuluu = michal.handleReduceMotionChanged;
        zuuluu = report.bind(oscard)(zuuluu);
        oscard = tangon.addEventListener;
        report = michal.handleReduceTransparencyChanged;
        zuuluu = 'reduceTransparencyChanged';
        zuuluu = oscard.bind(tangon)(zuuluu, report);
        zuuluu = tangon.isReduceTransparencyEnabled;
        oscard = zuuluu.bind(tangon)();
        report = oscard.then;
        zuuluu = michal.handleReduceTransparencyChanged;
        zuuluu = report.bind(oscard)(zuuluu);
        oscard = tangon.addEventListener;
        report = michal.handleBoldTextChanged;
        zuuluu = 'boldTextChanged';
        zuuluu = oscard.bind(tangon)(zuuluu, report);
        zuuluu = tangon.isBoldTextEnabled;
        oscard = zuuluu.bind(tangon)();
        report = oscard.then;
        zuuluu = michal.handleBoldTextChanged;
        zuuluu = report.bind(oscard)(zuuluu);
        oscard = tangon.addEventListener;
        report = michal.handleGrayscaleChanged;
        zuuluu = 'grayscaleChanged';
        zuuluu = oscard.bind(tangon)(zuuluu, report);
        zuuluu = tangon.isGrayscaleEnabled;
        oscard = zuuluu.bind(tangon)();
        report = oscard.then;
        zuuluu = michal.handleGrayscaleChanged;
        zuuluu = report.bind(oscard)(zuuluu);
        oscard = tangon.addEventListener;
        report = michal.handleInvertColorsChanged;
        zuuluu = 'invertColorsChanged';
        zuuluu = oscard.bind(tangon)(zuuluu, report);
        zuuluu = tangon.isInvertColorsEnabled;
        report = zuuluu.bind(tangon)();
        tangon = report.then;
        zuuluu = michal.handleInvertColorsChanged;
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = michal.handlePreferredColorSchemeChanged;
        zuuluu = {};
        report = _closure1_slot4;
        oscard = report.getColorScheme;
        oscard = oscard.bind(report)();
        zuuluu['colorScheme'] = oscard;
        zuuluu = tangon.bind(michal)(zuuluu);
        tangon = report.addChangeListener;
        zuuluu = michal.handlePreferredColorSchemeChanged;
        zuuluu = tangon.bind(report)(zuuluu);
        oscard = _closure1_slot5;
        report = oscard.addEventListener;
        tangon = michal.handleAppStateChange;
        zuuluu = 'change';
        zuuluu = report.bind(oscard)(zuuluu, tangon);
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.setSystemAccessibilityFeatures;
        michal = michal.getActiveFeatures;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['init'] = golfie;
    golfie = function() { // Original name: getActiveFeatures
        entity = _closure1_slot8;
        return entity;
    };
    michal['getActiveFeatures'] = golfie;
    golfie = function(argFoo) { // Original name: handleReduceMotionChanged
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot9;
            entity = _closure1_slot7;
            zuuluu = entity.REDUCED_MOTION;
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu, report);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.systemPrefersReducedMotionChanged;
            michal = 'no-preference';
            if(!report) { _fun00004_ip = 67; continue _fun00003 }
 63:
            michal = 'reduce';
 67:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['handleReduceMotionChanged'] = golfie;
    golfie = function(argFoo) { // Original name: handleReduceTransparencyChanged
        tangon = _closure1_slot9;
        entity = _closure1_slot7;
        zuuluu = entity.REDUCED_TRANSPARENCY;
        entity = undefined;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['handleReduceTransparencyChanged'] = golfie;
    golfie = function(argFoo) { // Original name: handleBoldTextChanged
        tangon = _closure1_slot9;
        entity = _closure1_slot7;
        zuuluu = entity.BOLD_TEXT;
        entity = undefined;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['handleBoldTextChanged'] = golfie;
    golfie = function(argFoo) { // Original name: handleGrayscaleChanged
        tangon = _closure1_slot9;
        entity = _closure1_slot7;
        zuuluu = entity.GRAYSCALE;
        entity = undefined;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['handleGrayscaleChanged'] = golfie;
    golfie = function(argFoo) { // Original name: handleInvertColorsChanged
        tangon = _closure1_slot9;
        entity = _closure1_slot7;
        zuuluu = entity.INVERT_COLORS;
        entity = undefined;
        michal = argFoo;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['handleInvertColorsChanged'] = golfie;
    golfie = function(argFoo) { // Original name: handlePreferredColorSchemeChanged
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.colorScheme;
            entity = 'dark';
            if(!(entity !== michal)) { _fun00006_ip = 109; continue _fun00005 }
 17:
            entity = 'light';
            if(!(entity !== michal)) { _fun00006_ip = 66; continue _fun00005 }
 25:
            tangon = _closure1_slot9;
            entity = _closure1_slot7;
            report = entity.PREFERS_COLOR_SCHEME_DARK;
            zuuluu = undefined;
            michal = false;
            report = tangon.bind(zuuluu)(report, michal);
            entity = entity.PREFERS_COLOR_SCHEME_LIGHT;
            entity = tangon.bind(zuuluu)(entity, michal);
            _fun00006_ip = 150; continue _fun00005;
 66:
            tangon = _closure1_slot9;
            entity = _closure1_slot7;
            report = entity.PREFERS_COLOR_SCHEME_DARK;
            zuuluu = undefined;
            michal = false;
            michal = tangon.bind(zuuluu)(report, michal);
            michal = entity.PREFERS_COLOR_SCHEME_LIGHT;
            entity = true;
            entity = tangon.bind(zuuluu)(michal, entity);
            _fun00006_ip = 150; continue _fun00005;
 109:
            tangon = _closure1_slot9;
            entity = _closure1_slot7;
            report = entity.PREFERS_COLOR_SCHEME_LIGHT;
            zuuluu = undefined;
            michal = false;
            michal = tangon.bind(zuuluu)(report, michal);
            michal = entity.PREFERS_COLOR_SCHEME_DARK;
            entity = true;
            entity = tangon.bind(zuuluu)(michal, entity);
 150:
            entity = undefined;
            return entity;
        }
    };
    michal['handlePreferredColorSchemeChanged'] = golfie;
    golfie = function() { // Original name: handleAccessibilityStoreChanged
        tangon = _closure1_slot9;
        zuuluu = _closure1_slot7;
        oscard = zuuluu.REDUCED_MOTION;
        michal = _closure1_slot6;
        report = michal.useReducedMotion;
        entity = undefined;
        report = tangon.bind(entity)(oscard, report);
        oscard = zuuluu.REDUCED_MOTION_FROM_USER_SETTINGS;
        golfie = michal.rawPrefersReducedMotion;
        report = 'auto';
        report = report !== golfie;
        report = tangon.bind(entity)(oscard, report);
        golfie = zuuluu.SATURATION_LEVEL_DECREASED;
        oscard = michal.saturation;
        report = 1;
        oscard = oscard < report;
        oscard = tangon.bind(entity)(golfie, oscard);
        golfie = zuuluu.CONTRAST_LEVEL_DECREASED;
        oscard = michal.contrast;
        oscard = oscard < report;
        oscard = tangon.bind(entity)(golfie, oscard);
        zuuluu = zuuluu.CONTRAST_LEVEL_INCREASED;
        michal = michal.contrast;
        michal = michal > report;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['handleAccessibilityStoreChanged'] = golfie;
    tangon = function(argFoo) { // Original name: handleAppStateChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = 'active';
            michal = argFoo;
            if(!(zuuluu === michal)) { _fun00008_ip = 74; continue _fun00007 }
 13:
            zuuluu = _closure1_slot3;
            michal = zuuluu.isReduceMotionEnabled;
            report = michal.bind(zuuluu)();
            tangon = report.then;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    tangon = _closure1_slot9;
                    entity = _closure1_slot7;
                    zuuluu = entity.REDUCED_MOTION;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu, report);
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 6;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.systemPrefersReducedMotionChanged;
                    michal = 'no-preference';
                    if(!report) { _fun00010_ip = 67; continue _fun00009 }
 63:
                    michal = 'reduce';
 67:
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            michal = zuuluu.prefersCrossFadeTransitions;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.then;
            entity = function(argFoo) {
                tangon = argFoo;
                report = _closure1_slot9;
                entity = _closure1_slot7;
                zuuluu = entity.REDUCED_MOTION_PREFERS_CROSSFADES;
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu, tangon);
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 6;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.systemPrefersCrossfadesChanged;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 74:
            entity = undefined;
            return entity;
        }
    };
    michal['handleAppStateChange'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/a11y/native/AccessibilitySystemFeatures.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();