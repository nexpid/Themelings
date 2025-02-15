// app/actions/DefaultRouteActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: isLurkingGuildRoute
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 2;
            entity = offset[entity];
            oscar = undefined;
            report = verify.bind(oscar)(entity);
            tango = report.matchPath;
            zulu = {};
            options = _closure1_slot4;
            golf = options.CHANNEL;
            entity = 3;
            entity = offset[entity];
            entity = verify.bind(oscar)(entity);
            verify = entity.RouteParam;
            entity = verify.guildId;
            entity = entity.bind(verify)();
            entity = golf.bind(options)(entity);
            zulu['path'] = entity;
            entity = argFoo;
            zulu = tango.bind(report)(entity, zulu);
            entity = null;
            report = entity == zulu;
            tango = undefined;
            if(report) { _fun00002_ip = 120; continue _fun00001 }
 100:
            zulu = zulu.params;
            report = entity == zulu;
            tango = undefined;
            if(report) { _fun00002_ip = 120; continue _fun00001 }
 115:
            tango = zulu.guildId;
 120:
            entity = entity == tango;
            if(entity) { _fun00002_ip = 145; continue _fun00001 }
 127:
            zulu = _closure1_slot3;
            mike = zulu.isLurking;
            mike = mike.bind(zulu)(tango);
            entity = !mike;
 145:
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Routes;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/DefaultRouteActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot5;
            entity = undefined;
            zulu = zulu.bind(entity)(report);
            if(zulu) { _fun00004_ip = 67; continue _fun00003 }
 20:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 4;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'SAVE_LAST_ROUTE';
            mike['type'] = oscar;
            mike['path'] = report;
            mike = zulu.bind(tango)(mike);
 67:
            return entity;
        }
    };
    zulu['saveLastRoute'] = tango;
    mike = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot5;
            entity = undefined;
            zulu = zulu.bind(entity)(report);
            if(zulu) { _fun00006_ip = 67; continue _fun00005 }
 20:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 4;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'SAVE_LAST_NON_VOICE_ROUTE';
            mike['type'] = oscar;
            mike['path'] = report;
            mike = zulu.bind(tango)(mike);
 67:
            return entity;
        }
    };
    zulu['saveLastNonVoiceRoute'] = mike;
    return entity;
})();