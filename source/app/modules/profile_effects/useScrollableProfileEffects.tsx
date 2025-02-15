// app/modules/profile_effects/useScrollableProfileEffects.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/profile_effects/useScrollableProfileEffects.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        options = argFoo;
        var _closure2_slot0 = options;
        golf = _closure1_slot3;
        entity = golf.useState;
        entity = entity.bind(golf)(options);
        romeo = _closure1_slot2;
        yankee = undefined;
        offset = 2;
        entity = romeo.bind(yankee)(entity, offset);
        foxtrot = 0;
        zulu = entity[foxtrot];
        verify = 1;
        entity = entity[verify];
        var _closure2_slot1 = entity;
        oscar = golf.useState;
        entity = _closure1_slot4;
        mike = entity.getProfileEffectById;
        mike = mike.bind(entity)(options);
        mike = oscar.bind(golf)(mike);
        oscar = romeo.bind(yankee)(mike, offset);
        mike = oscar[foxtrot];
        oscar = oscar[verify];
        var _closure2_slot2 = oscar;
        oscar = _closure1_slot0;
        backup = _closure1_slot1;
        report = 3;
        report = backup[report];
        kilo = oscar.bind(yankee)(report);
        report = kilo.useProfileEffectPreset;
        report = report.bind(kilo)(options);
        report = 4;
        report = backup[report];
        backup = oscar.bind(yankee)(report);
        oscar = backup.useStateFromStores;
        report = new Array(1);
        report[0] = entity;
        entity = function() {
            entity = _closure1_slot4;
            entity = entity.profileEffects;
            return entity;
        };
        entity = oscar.bind(backup)(report, entity);
        var _closure2_slot3 = entity;
        oscar = entity.reduce;
        report = function(argFoo, argBar, argBaz) {
            _fun77230: for(var _fun77230_ip = 0; ; ) switch(_fun77230_ip) {
 0:
                entity = argFoo;
                mike = argBaz;
                zulu = argBar;
                tango = zulu.id;
                zulu = _closure2_slot0;
                if(!(tango === zulu)) { _fun77230_ip = 28; continue _fun77230 }
 25:
                entity = mike;
 28:
                return entity;
            }
        };
        oscar = oscar.bind(entity)(report, foxtrot);
        report = golf.useState;
        report = report.bind(golf)(oscar);
        report = romeo.bind(yankee)(report, offset);
        report = report[verify];
        var _closure2_slot4 = report;
        report = golf.useRef;
        report = report.bind(golf)(oscar);
        var _closure2_slot5 = report;
        oscar = golf.useEffect;
        report = new Array(2);
        report[0] = options;
        report[1] = entity;
        entity = function() {
            zulu = _closure2_slot1;
            report = _closure2_slot0;
            entity = undefined;
            zulu = zulu.bind(entity)(report);
            zulu = _closure2_slot2;
            tango = _closure1_slot4;
            mike = tango.getProfileEffectById;
            mike = mike.bind(tango)(report);
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = oscar.bind(golf)(entity, report);
        entity = {};
        report = function() { // Original name: increment
            entity = _closure2_slot5;
            tango = entity.current;
            mike = 1;
            report = tango + mike;
            tango = _closure2_slot3;
            mike = tango.length;
            mike = report % mike;
            entity['current'] = mike;
            report = _closure2_slot4;
            entity = undefined;
            report = report.bind(entity)(mike);
            oscar = _closure2_slot1;
            report = tango[mike];
            report = report.id;
            report = oscar.bind(entity)(report);
            zulu = _closure2_slot2;
            mike = tango[mike];
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity['increment'] = report;
        tango = function() { // Original name: decrement
            _fun77233: for(var _fun77233_ip = 0; ; ) switch(_fun77233_ip) {
 0:
                entity = _closure2_slot5;
                mike = entity.current;
                entity = 0;
                if(!(entity !== mike)) { _fun77233_ip = 36; continue _fun77233 }
 18:
                entity = _closure2_slot5;
                mike = entity.current;
                entity = 1;
                tango = mike - entity;
                _fun77233_ip = 52; continue _fun77233;
 36:
                entity = _closure2_slot3;
                mike = entity.length;
                entity = 1;
                tango = mike - entity;
 52:
                entity = _closure2_slot5;
                entity['current'] = tango;
                mike = _closure2_slot4;
                entity = undefined;
                mike = mike.bind(entity)(tango);
                oscar = _closure2_slot1;
                mike = _closure2_slot3;
                report = mike[tango];
                report = report.id;
                report = oscar.bind(entity)(report);
                zulu = _closure2_slot2;
                mike = mike[tango];
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        entity['decrement'] = tango;
        entity['id'] = zulu;
        entity['preset'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();