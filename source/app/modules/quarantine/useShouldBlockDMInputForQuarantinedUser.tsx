// app/modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserFlags;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            verify = argBar;
            var _closure2_slot0 = verify;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 2;
            zulu = options[zulu];
            report = undefined;
            tango = golf.bind(report)(zulu);
            zulu = tango.useShowConvoStarterInDM;
            tango = zulu.bind(tango)(verify);
            zulu = 3;
            zulu = options[zulu];
            options = golf.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot2;
            report = new Array(1);
            report[0] = zulu;
            zulu = new Array(1);
            zulu[0] = verify;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getMessages;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                mike = entity.length;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            zulu = golf.bind(options)(report, entity, zulu);
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun00002_ip = 144; continue _fun00001 }
 108:
            report = oscar.hasFlag;
            mike = _closure1_slot3;
            mike = mike.QUARANTINED;
            mike = report.bind(oscar)(mike);
            if(!mike) { _fun00002_ip = 135; continue _fun00001 }
 132:
            mike = tango;
 135:
            if(!mike) { _fun00002_ip = 141; continue _fun00001 }
 138:
            mike = !zulu;
 141:
            entity = mike;
 144:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();