// app/modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CONSOLE_VOICE_PLATFORMS;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityTypes;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useConsoleConnectedAccountForVoiceUpsell
        _fun104252: for(var _fun104252_ip = 0; ; ) switch(_fun104252_ip) {
 0:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 5;
            entity = options[report];
            oscar = undefined;
            offset = golf.bind(oscar)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getActivities;
                entity = true;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = verify.bind(offset)(zulu, entity);
            zulu = verify.filter;
            entity = function(argFoo) {
                _fun104254: for(var _fun104254_ip = 0; ; ) switch(_fun104254_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    tango = entity.platform;
                    entity = _closure1_slot7;
                    entity = entity.PLAYING;
                    entity = zulu === entity;
                    if(!entity) { _fun104254_ip = 40; continue _fun104254 }
 34:
                    zulu = null;
                    entity = zulu != tango;
 40:
                    if(!entity) { _fun104254_ip = 57; continue _fun104254 }
 43:
                    zulu = _closure1_slot6;
                    mike = zulu.has;
                    entity = mike.bind(zulu)(tango);
 57:
                    return entity;
                }
            };
            entity = zulu.bind(verify)(entity);
            var _closure2_slot0 = entity;
            zulu = options[report];
            yankee = golf.bind(oscar)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot5;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function() {
                _fun104255: for(var _fun104255_ip = 0; ; ) switch(_fun104255_ip) {
 0:
                    zulu = _closure1_slot5;
                    entity = zulu.getAwaitingRemoteSessionInfo;
                    entity = entity.bind(zulu)();
                    zulu = null;
                    entity = zulu != entity;
                    if(entity) { _fun104255_ip = 44; continue _fun104255 }
 26:
                    tango = _closure1_slot5;
                    mike = tango.getRemoteSessionId;
                    mike = mike.bind(tango)();
                    entity = zulu != mike;
 44:
                    return entity;
                }
            };
            zulu = offset.bind(yankee)(verify, zulu);
            report = options[report];
            oscar = golf.bind(oscar)(report);
            report = oscar.useStateFromStores;
            golf = _closure1_slot3;
            tango = new Array(1);
            tango[0] = golf;
            mike = function() {
                tango = _closure2_slot0;
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun104257: for(var _fun104257_ip = 0; ; ) switch(_fun104257_ip) {
 0:
                        entity = argFoo;
                        report = entity.platform;
                        entity = null;
                        if(!(entity != report)) { _fun104257_ip = 72; continue _fun104257 }
 15:
                        oscar = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 6;
                        mike = tango[mike];
                        tango = undefined;
                        mike = oscar.bind(tango)(mike);
                        report = mike.bind(tango)(report);
                        tango = entity == report;
                        mike = null;
                        if(tango) { _fun104257_ip = 70; continue _fun104257 }
 54:
                        tango = _closure1_slot3;
                        zulu = tango.getAccount;
                        mike = zulu.bind(tango)(entity, report);
 70:
                        return mike;
 72:
                        return entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.find;
                entity = function(argFoo) {
                    mike = null;
                    entity = argFoo;
                    entity = mike != entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            tango = entity.length;
            entity = 0;
            report = tango > entity;
            tango = null;
            entity = null;
            if(!report) { _fun104252_ip = 191; continue _fun104252 }
 174:
            report = tango != mike;
            entity = null;
            if(!report) { _fun104252_ip = 191; continue _fun104252 }
 183:
            entity = null;
            if(zulu) { _fun104252_ip = 191; continue _fun104252 }
 188:
            entity = mike;
 191:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();