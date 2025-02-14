// app/modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx
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
    tango = tango.RTCConnectionStates;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsConnectedToVoiceChannel
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot3;
        mike = new Array(3);
        mike[0] = oscar;
        oscar = _closure1_slot4;
        mike[1] = oscar;
        report = _closure1_slot2;
        mike[2] = report;
        entity = function() {
            _fun121402: for(var _fun121402_ip = 0; ; ) switch(_fun121402_ip) {
 0:
                zulu = _closure1_slot3;
                mike = zulu.getChannelId;
                mike = mike.bind(zulu)();
                oscar = _closure2_slot0;
                tango = null;
                report = mike;
                if(!(tango != oscar)) { _fun121402_ip = 37; continue _fun121402 }
 33:
                report = _closure2_slot0;
 37:
                if(!(report === mike)) { _fun121402_ip = 128; continue _fun121402 }
 41:
                tango = _closure1_slot4;
                zulu = tango.isInChannel;
                oscar = _closure1_slot2;
                mike = oscar.getId;
                mike = mike.bind(oscar)();
                mike = zulu.bind(tango)(report, mike);
                if(mike) { _fun121402_ip = 124; continue _fun121402 }
 74:
                zulu = _closure1_slot3;
                mike = zulu.getState;
                mike = mike.bind(zulu)();
                zulu = _closure1_slot5;
                zulu = zulu.DISCONNECTED;
                if(!(zulu !== mike)) { _fun121402_ip = 120; continue _fun121402 }
 102:
                entity = _closure1_slot5;
                entity = entity.NO_ROUTE;
                if(!(entity !== mike)) { _fun121402_ip = 120; continue _fun121402 }
 116:
                entity = true;
                return entity;
 120:
                entity = false;
                return entity;
 124:
                entity = true;
                return entity;
 128:
                entity = false;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();