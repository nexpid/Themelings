// app/modules/voice_calls/useIsVoiceChannelFull.tsx
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
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/useIsVoiceChannelFull.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useIsVoiceChannelFull
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot2;
        mike[1] = report;
        entity = function() {
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = report.isChannelFull;
            zulu = _closure2_slot0;
            mike = _closure1_slot4;
            entity = _closure1_slot2;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useIsVoiceChannelLocked
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot3;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun00002_ip = 52; continue _fun00001 }
 16:
                report = _closure1_slot3;
                tango = report.can;
                zulu = _closure1_slot5;
                zulu = zulu.CONNECT;
                mike = _closure2_slot0;
                mike = tango.bind(report)(zulu, mike);
                entity = !mike;
 52:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsVoiceChannelLocked'] = mike;
    return entity;
})();