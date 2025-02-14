// app/modules/a11y/native/AccessibilitySystemFeatures.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: toggleFeature
        _fun109297: for(var _fun109297_ip = 0; ; ) switch(_fun109297_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            entity = _closure1_slot8;
            if(oscar) { _fun109297_ip = 29; continue _fun109297 }
 16:
            mike = ~tango;
            mike = entity & mike;
            _closure1_slot8 = mike;
            _fun109297_ip = 37; continue _fun109297;
 29:
            entity = entity | tango;
            _closure1_slot8 = entity;
 37:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 3;
            mike = entity[golf];
            entity = undefined;
            mike = report.bind(entity)(mike);
            mike = mike.A11Y_FEATURE_MAP;
            report = mike[tango];
            mike = null;
            if(!(mike != report)) { _fun109297_ip = 127; continue _fun109297 }
 75:
            options = _closure1_slot1;
            mike = _closure1_slot2;
            tango = 4;
            tango = mike[tango];
            tango = options.bind(entity)(tango);
            zulu = _closure1_slot0;
            mike = mike[golf];
            mike = zulu.bind(entity)(mike);
            zulu = mike.accessibilityPreferencesSharedValue;
            mike = {};
            mike[report] = oscar;
            mike = tango.bind(entity)(zulu, mike);
 127:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    options = mike.AccessibilityInfo;
    var _closure1_slot3 = options;
    options = mike.Appearance;
    var _closure1_slot4 = options;
    mike = mike.AppState;
    var _closure1_slot5 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AccessibilityFeatureFlags;
    var _closure1_slot7 = mike;
    mike = mike.NONE;
    var _closure1_slot8 = mike;
    mike = {};
    golf = function() { // Original name: init
        mike = this;
        report = _closure1_slot6;
        tango = report.addChangeListener;
        zulu = mike.handleAccessibilityStoreChanged;
        zulu = tango.bind(report)(zulu);
        tango = _closure1_slot3;
        oscar = tango.addEventListener;
        report = mike.handleReduceMotionChanged;
        zulu = 'reduceMotionChanged';
        zulu = oscar.bind(tango)(zulu, report);
        zulu = tango.isReduceMotionEnabled;
        oscar = zulu.bind(tango)();
        report = oscar.then;
        zulu = mike.handleReduceMotionChanged;
        zulu = report.bind(oscar)(zulu);
        oscar = tango.addEventListener;
        report = mike.handleReduceTransparencyChanged;
        zulu = 'reduceTransparencyChanged';
        zulu = oscar.bind(tango)(zulu, report);
        zulu = tango.isReduceTransparencyEnabled;
        oscar = zulu.bind(tango)();
        report = oscar.then;
        zulu = mike.handleReduceTransparencyChanged;
        zulu = report.bind(oscar)(zulu);
        oscar = tango.addEventListener;
        report = mike.handleBoldTextChanged;
        zulu = 'boldTextChanged';
        zulu = oscar.bind(tango)(zulu, report);
        zulu = tango.isBoldTextEnabled;
        oscar = zulu.bind(tango)();
        report = oscar.then;
        zulu = mike.handleBoldTextChanged;
        zulu = report.bind(oscar)(zulu);
        oscar = tango.addEventListener;
        report = mike.handleGrayscaleChanged;
        zulu = 'grayscaleChanged';
        zulu = oscar.bind(tango)(zulu, report);
        zulu = tango.isGrayscaleEnabled;
        oscar = zulu.bind(tango)();
        report = oscar.then;
        zulu = mike.handleGrayscaleChanged;
        zulu = report.bind(oscar)(zulu);
        oscar = tango.addEventListener;
        report = mike.handleInvertColorsChanged;
        zulu = 'invertColorsChanged';
        zulu = oscar.bind(tango)(zulu, report);
        zulu = tango.isInvertColorsEnabled;
        report = zulu.bind(tango)();
        tango = report.then;
        zulu = mike.handleInvertColorsChanged;
        zulu = tango.bind(report)(zulu);
        tango = mike.handlePreferredColorSchemeChanged;
        zulu = {};
        report = _closure1_slot4;
        oscar = report.getColorScheme;
        oscar = oscar.bind(report)();
        zulu['colorScheme'] = oscar;
        zulu = tango.bind(mike)(zulu);
        tango = report.addChangeListener;
        zulu = mike.handlePreferredColorSchemeChanged;
        zulu = tango.bind(report)(zulu);
        oscar = _closure1_slot5;
        report = oscar.addEventListener;
        tango = mike.handleAppStateChange;
        zulu = 'change';
        zulu = report.bind(oscar)(zulu, tango);
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.setSystemAccessibilityFeatures;
        mike = mike.getActiveFeatures;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['init'] = golf;
    golf = function() { // Original name: getActiveFeatures
        entity = _closure1_slot8;
        return entity;
    };
    mike['getActiveFeatures'] = golf;
    golf = function(argFoo) { // Original name: handleReduceMotionChanged
        _fun109300: for(var _fun109300_ip = 0; ; ) switch(_fun109300_ip) {
 0:
            report = argFoo;
            tango = _closure1_slot9;
            entity = _closure1_slot7;
            zulu = entity.REDUCED_MOTION;
            entity = undefined;
            zulu = tango.bind(entity)(zulu, report);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.systemPrefersReducedMotionChanged;
            mike = 'no-preference';
            if(!report) { _fun109300_ip = 67; continue _fun109300 }
 63:
            mike = 'reduce';
 67:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['handleReduceMotionChanged'] = golf;
    golf = function(argFoo) { // Original name: handleReduceTransparencyChanged
        tango = _closure1_slot9;
        entity = _closure1_slot7;
        zulu = entity.REDUCED_TRANSPARENCY;
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['handleReduceTransparencyChanged'] = golf;
    golf = function(argFoo) { // Original name: handleBoldTextChanged
        tango = _closure1_slot9;
        entity = _closure1_slot7;
        zulu = entity.BOLD_TEXT;
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['handleBoldTextChanged'] = golf;
    golf = function(argFoo) { // Original name: handleGrayscaleChanged
        tango = _closure1_slot9;
        entity = _closure1_slot7;
        zulu = entity.GRAYSCALE;
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['handleGrayscaleChanged'] = golf;
    golf = function(argFoo) { // Original name: handleInvertColorsChanged
        tango = _closure1_slot9;
        entity = _closure1_slot7;
        zulu = entity.INVERT_COLORS;
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['handleInvertColorsChanged'] = golf;
    golf = function(argFoo) { // Original name: handlePreferredColorSchemeChanged
        _fun109305: for(var _fun109305_ip = 0; ; ) switch(_fun109305_ip) {
 0:
            entity = argFoo;
            mike = entity.colorScheme;
            entity = 'dark';
            if(!(entity !== mike)) { _fun109305_ip = 109; continue _fun109305 }
 17:
            entity = 'light';
            if(!(entity !== mike)) { _fun109305_ip = 66; continue _fun109305 }
 25:
            tango = _closure1_slot9;
            entity = _closure1_slot7;
            report = entity.PREFERS_COLOR_SCHEME_DARK;
            zulu = undefined;
            mike = false;
            report = tango.bind(zulu)(report, mike);
            entity = entity.PREFERS_COLOR_SCHEME_LIGHT;
            entity = tango.bind(zulu)(entity, mike);
            _fun109305_ip = 150; continue _fun109305;
 66:
            tango = _closure1_slot9;
            entity = _closure1_slot7;
            report = entity.PREFERS_COLOR_SCHEME_DARK;
            zulu = undefined;
            mike = false;
            mike = tango.bind(zulu)(report, mike);
            mike = entity.PREFERS_COLOR_SCHEME_LIGHT;
            entity = true;
            entity = tango.bind(zulu)(mike, entity);
            _fun109305_ip = 150; continue _fun109305;
 109:
            tango = _closure1_slot9;
            entity = _closure1_slot7;
            report = entity.PREFERS_COLOR_SCHEME_LIGHT;
            zulu = undefined;
            mike = false;
            mike = tango.bind(zulu)(report, mike);
            mike = entity.PREFERS_COLOR_SCHEME_DARK;
            entity = true;
            entity = tango.bind(zulu)(mike, entity);
 150:
            entity = undefined;
            return entity;
        }
    };
    mike['handlePreferredColorSchemeChanged'] = golf;
    golf = function() { // Original name: handleAccessibilityStoreChanged
        tango = _closure1_slot9;
        zulu = _closure1_slot7;
        oscar = zulu.REDUCED_MOTION;
        mike = _closure1_slot6;
        report = mike.useReducedMotion;
        entity = undefined;
        report = tango.bind(entity)(oscar, report);
        oscar = zulu.REDUCED_MOTION_FROM_USER_SETTINGS;
        golf = mike.rawPrefersReducedMotion;
        report = 'auto';
        report = report !== golf;
        report = tango.bind(entity)(oscar, report);
        golf = zulu.SATURATION_LEVEL_DECREASED;
        oscar = mike.saturation;
        report = 1;
        oscar = oscar < report;
        oscar = tango.bind(entity)(golf, oscar);
        golf = zulu.CONTRAST_LEVEL_DECREASED;
        oscar = mike.contrast;
        oscar = oscar < report;
        oscar = tango.bind(entity)(golf, oscar);
        zulu = zulu.CONTRAST_LEVEL_INCREASED;
        mike = mike.contrast;
        mike = mike > report;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['handleAccessibilityStoreChanged'] = golf;
    tango = function(argFoo) { // Original name: handleAppStateChange
        _fun109307: for(var _fun109307_ip = 0; ; ) switch(_fun109307_ip) {
 0:
            zulu = 'active';
            mike = argFoo;
            if(!(zulu === mike)) { _fun109307_ip = 74; continue _fun109307 }
 13:
            zulu = _closure1_slot3;
            mike = zulu.isReduceMotionEnabled;
            report = mike.bind(zulu)();
            tango = report.then;
            mike = function(argFoo) {
                _fun109308: for(var _fun109308_ip = 0; ; ) switch(_fun109308_ip) {
 0:
                    report = argFoo;
                    tango = _closure1_slot9;
                    entity = _closure1_slot7;
                    zulu = entity.REDUCED_MOTION;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu, report);
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 6;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.systemPrefersReducedMotionChanged;
                    mike = 'no-preference';
                    if(!report) { _fun109308_ip = 67; continue _fun109308 }
 63:
                    mike = 'reduce';
 67:
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            mike = zulu.prefersCrossFadeTransitions;
            zulu = mike.bind(zulu)();
            mike = zulu.then;
            entity = function(argFoo) {
                tango = argFoo;
                report = _closure1_slot9;
                entity = _closure1_slot7;
                zulu = entity.REDUCED_MOTION_PREFERS_CROSSFADES;
                entity = undefined;
                zulu = report.bind(entity)(zulu, tango);
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 6;
                mike = report[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.systemPrefersCrossfadesChanged;
                mike = mike.bind(zulu)(tango);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 74:
            entity = undefined;
            return entity;
        }
    };
    mike['handleAppStateChange'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/a11y/native/AccessibilitySystemFeatures.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();