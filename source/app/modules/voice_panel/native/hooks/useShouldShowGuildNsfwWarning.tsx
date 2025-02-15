// app/modules/voice_panel/native/hooks/useShouldShowGuildNsfwWarning.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useShouldShowGuildNsfwWarning.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useShouldShowGuildNsfwWarning
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            oscar = 3;
            entity = options[oscar];
            mike = undefined;
            offset = golf.bind(mike)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot2;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = verify.bind(offset)(tango, entity);
            var _closure2_slot1 = tango;
            entity = options[oscar];
            yankee = golf.bind(mike)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot3;
            verify = new Array(1);
            verify[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot3;
                    mike = zulu.didAgree;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00004_ip = 40; continue _fun00003 }
 31:
                    tango = _closure2_slot1;
                    entity = tango.guild_id;
 40:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            entity = offset.bind(yankee)(verify, entity);
            oscar = options[oscar];
            golf = golf.bind(mike)(oscar);
            oscar = golf.useStateFromStores;
            options = _closure1_slot4;
            report = new Array(1);
            report[0] = options;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure1_slot4;
                    entity = mike.getCurrentUser;
                    entity = entity.bind(mike)();
                    mike = null;
                    zulu = mike == entity;
                    mike = undefined;
                    if(zulu) { _fun00006_ip = 33; continue _fun00005 }
 27:
                    mike = entity.nsfwAllowed;
 33:
                    entity = false;
                    entity = entity === mike;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(report, zulu);
            entity = !entity;
            if(entity) { _fun00002_ip = 155; continue _fun00001 }
 152:
            entity = zulu;
 155:
            if(!entity) { _fun00002_ip = 182; continue _fun00001 }
 158:
            zulu = null;
            zulu = zulu == tango;
            mike = undefined;
            if(zulu) { _fun00002_ip = 179; continue _fun00001 }
 169:
            zulu = tango.isNSFW;
            mike = zulu.bind(tango)();
 179:
            entity = mike;
 182:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();