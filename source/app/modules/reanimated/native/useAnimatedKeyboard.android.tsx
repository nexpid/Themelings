// app/modules/reanimated/native/useAnimatedKeyboard.android.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    golf = true;
    tango['value'] = golf;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot4 = tango;
    tango = {};
    tango['android_reportSystemKeyboardHeight'] = golf;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/reanimated/native/useAnimatedKeyboard.android.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useAnimatedKeyboard
        _fun120870: for(var _fun120870_ip = 0; ; ) switch(_fun120870_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun120870_ip = 18; continue _fun120870 }
 11:
            entity = _closure1_slot5;
 18:
            oscar = entity.android_reportSystemKeyboardHeight;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 3;
            entity = golf[entity];
            report = tango.bind(report)(entity);
            tango = report.useSharedValue;
            entity = _closure1_slot3;
            options = entity.keyboardType;
            entity = _closure1_slot4;
            golf = entity.SYSTEM;
            entity = 0;
            if(!(options !== golf)) { _fun120870_ip = 96; continue _fun120870 }
 86:
            golf = _closure1_slot3;
            entity = golf.customKeyboardHeight;
 96:
            entity = tango.bind(report)(entity);
            _closure2_slot1 = entity;
            report = _closure1_slot2;
            tango = report.useEffect;
            zulu = new Array(2);
            zulu[0] = entity;
            zulu[1] = oscar;
            mike = function() {
                tango = function() { // Original name: handleStoreChange
                    _fun120872: for(var _fun120872_ip = 0; ; ) switch(_fun120872_ip) {
 0:
                        zulu = _closure1_slot3;
                        oscar = zulu.keyboardType;
                        entity = zulu.keyboardOpen;
                        report = zulu.customKeyboardHeight;
                        tango = zulu.keyboardHeight;
                        zulu = _closure1_slot4;
                        zulu = zulu.SYSTEM;
                        if(!(oscar === zulu)) { _fun120872_ip = 48; continue _fun120872 }
 45:
                        if(entity) { _fun120872_ip = 107; continue _fun120872 }
 48:
                        entity = _closure1_slot4;
                        entity = entity.SYSTEM;
                        zulu = 0;
                        if(!(oscar !== entity)) { _fun120872_ip = 105; continue _fun120872 }
 64:
                        golf = _closure1_slot0;
                        oscar = _closure1_slot1;
                        entity = 4;
                        oscar = oscar[entity];
                        entity = undefined;
                        oscar = golf.bind(entity)(oscar);
                        entity = oscar.getSafeAreaInsets;
                        entity = entity.bind(oscar)();
                        entity = entity.bottom;
                        zulu = report + entity;
 105:
                        _fun120872_ip = 163; continue _fun120872;
 107:
                        report = _closure2_slot0;
                        entity = 0;
                        if(!report) { _fun120872_ip = 160; continue _fun120872 }
 119:
                        oscar = _closure1_slot0;
                        report = _closure1_slot1;
                        mike = 4;
                        report = report[mike];
                        mike = undefined;
                        report = oscar.bind(mike)(report);
                        mike = report.getSafeAreaInsets;
                        mike = mike.bind(report)();
                        mike = mike.bottom;
                        entity = tango + mike;
 160:
                        zulu = entity;
 163:
                        mike = _closure2_slot1;
                        entity = mike.set;
                        entity = entity.bind(mike)(zulu);
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot0 = tango;
                zulu = _closure1_slot3;
                mike = zulu.addReactChangeListener;
                mike = mike.bind(zulu)(tango);
                entity = function() {
                    zulu = _closure1_slot3;
                    mike = zulu.removeReactChangeListener;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();