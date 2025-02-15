// app/modules/age_gate/useIsNsfwGated.tsx
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/age_gate/useIsNsfwGated.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsNsfwGated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = entity.nsfw;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            report = 2;
            zulu = options[report];
            oscar = undefined;
            yankee = golf.bind(oscar)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot3;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure1_slot3;
                    entity = mike.getCurrentUser;
                    mike = entity.bind(mike)();
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00004_ip = 33; continue _fun00003 }
 27:
                    entity = mike.nsfwAllowed;
 33:
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify, zulu);
            zulu = false;
            zulu = zulu === verify;
            report = options[report];
            oscar = golf.bind(oscar)(report);
            report = oscar.useStateFromStores;
            golf = _closure1_slot2;
            tango = new Array(1);
            tango[0] = golf;
            mike = function() {
                zulu = _closure1_slot2;
                mike = zulu.didAgree;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            mike = !mike;
            if(!entity) { _fun00002_ip = 130; continue _fun00001 }
 121:
            if(mike) { _fun00002_ip = 127; continue _fun00001 }
 124:
            mike = zulu;
 127:
            entity = mike;
 130:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();