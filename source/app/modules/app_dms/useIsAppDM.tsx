// app/modules/app_dms/useIsAppDM.tsx
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
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_dms/useIsAppDM.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useISAppDM
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = mike.context;
            report = undefined;
            var _closure2_slot0 = report;
            oscar = zulu.type;
            tango = 'channel';
            mike = undefined;
            if(!(tango === oscar)) { _fun00002_ip = 36; continue _fun00001 }
 31:
            mike = zulu.channel;
 36:
            _closure2_slot0 = mike;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 1;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useStateFromStores;
            report = _closure1_slot2;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = null;
                    entity = zulu != entity;
                    if(!entity) { _fun00004_ip = 30; continue _fun00003 }
 16:
                    report = _closure2_slot0;
                    tango = report.isDM;
                    entity = tango.bind(report)();
 30:
                    if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 33:
                    tango = _closure2_slot0;
                    tango = tango.recipients;
                    report = tango.length;
                    tango = 1;
                    entity = tango === report;
 55:
                    if(!entity) { _fun00004_ip = 113; continue _fun00003 }
 58:
                    report = _closure1_slot2;
                    tango = report.getUser;
                    mike = _closure2_slot0;
                    oscar = mike.recipients;
                    mike = 0;
                    mike = oscar[mike];
                    mike = tango.bind(report)(mike);
                    tango = zulu == mike;
                    zulu = undefined;
                    if(tango) { _fun00004_ip = 107; continue _fun00003 }
 101:
                    zulu = mike.bot;
 107:
                    mike = true;
                    entity = mike === zulu;
 113:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();