// app/modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
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
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useConsoleConnectingInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 2;
            mike = report[mike];
            report = undefined;
            mike = tango.bind(report)(mike);
            tango = mike.bind(report)();
            var _closure2_slot0 = tango;
            oscar = null;
            options = oscar == tango;
            mike = undefined;
            if(options) { _fun00002_ip = 54; continue _fun00001 }
 49:
            mike = tango.channelId;
 54:
            yankee = mike === golf;
            tango = _closure1_slot0;
            options = _closure1_slot2;
            mike = 3;
            verify = options[mike];
            foxtrot = tango.bind(report)(verify);
            romeo = foxtrot.useStateFromStores;
            verify = _closure1_slot3;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                mike = _closure1_slot3;
                entity = mike.getAwaitingRemoteSessionInfo;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = romeo.bind(foxtrot)(offset, verify);
            mike = options[mike];
            options = tango.bind(report)(mike);
            tango = options.useStateFromStores;
            verify = _closure1_slot4;
            mike = new Array(1);
            mike[0] = verify;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot4;
                    mike = zulu.getSessionById;
                    tango = _closure2_slot0;
                    entity = null;
                    oscar = entity == tango;
                    tango = undefined;
                    if(oscar) { _fun00004_ip = 41; continue _fun00003 }
 31:
                    report = _closure2_slot0;
                    tango = report.sessionId;
 41:
                    report = entity != tango;
                    entity = '';
                    if(!report) { _fun00004_ip = 55; continue _fun00003 }
 52:
                    entity = tango;
 55:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            verify = tango.bind(options)(mike, entity);
            mike = oscar == offset;
            entity = undefined;
            if(mike) { _fun00002_ip = 161; continue _fun00001 }
 156:
            entity = offset.type;
 161:
            if(!(oscar == entity)) { _fun00002_ip = 189; continue _fun00001 }
 165:
            tango = oscar == verify;
            mike = undefined;
            if(tango) { _fun00002_ip = 186; continue _fun00001 }
 174:
            tango = verify.clientInfo;
            mike = tango.os;
 186:
            entity = mike;
 189:
            mike = oscar != entity;
            tango = '';
            if(!mike) { _fun00002_ip = 203; continue _fun00001 }
 200:
            tango = entity;
 203:
            mike = _closure1_slot1;
            options = _closure1_slot2;
            entity = 4;
            entity = options[entity];
            entity = mike.bind(report)(entity);
            mike = entity.bind(report)(offset);
            entity = {};
            romeo = oscar == offset;
            options = undefined;
            if(romeo) { _fun00002_ip = 244; continue _fun00001 }
 239:
            options = offset.channelId;
 244:
            options = options === golf;
            entity['isConnectingToConsole'] = options;
            options = oscar == offset;
            oscar = undefined;
            if(options) { _fun00002_ip = 267; continue _fun00001 }
 262:
            oscar = offset.channelId;
 267:
            oscar = oscar === golf;
            if(oscar) { _fun00002_ip = 277; continue _fun00001 }
 274:
            oscar = yankee;
 277:
            entity['isConnectingOrConnectedToConsole'] = oscar;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            options = 5;
            options = golf[options];
            options = oscar.bind(report)(options);
            options = options.bind(report)(tango);
            entity['icon'] = options;
            options = _closure1_slot0;
            zulu = 6;
            zulu = golf[zulu];
            options = options.bind(report)(zulu);
            zulu = options.getConsoleConnectingText;
            zulu = zulu.bind(options)(verify, offset, yankee);
            entity['text'] = zulu;
            zulu = 7;
            zulu = golf[zulu];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.bind(report)(tango);
            entity['color'] = zulu;
            entity['displayCancel'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();