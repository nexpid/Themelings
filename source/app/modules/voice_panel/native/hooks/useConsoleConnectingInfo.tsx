// app/modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useConsoleConnectingInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 2;
            michal = report[michal];
            report = undefined;
            michal = tangon.bind(report)(michal);
            tangon = michal.bind(report)();
            var _closure2_slot0 = tangon;
            oscard = null;
            option = oscard == tangon;
            michal = undefined;
            if(option) { _fun00002_ip = 54; continue _fun00001 }
 49:
            michal = tangon.channelId;
 54:
            yankee = michal === golfie;
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            michal = 3;
            verify = option[michal];
            foxtra = tangon.bind(report)(verify);
            romeon = foxtra.useStateFromStores;
            verify = _closure1_slot3;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                michal = _closure1_slot3;
                entity = michal.getAwaitingRemoteSessionInfo;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = romeon.bind(foxtra)(offset, verify);
            michal = option[michal];
            option = tangon.bind(report)(michal);
            tangon = option.useStateFromStores;
            verify = _closure1_slot4;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getSessionById;
                    tangon = _closure2_slot0;
                    entity = null;
                    oscard = entity == tangon;
                    tangon = undefined;
                    if(oscard) { _fun00004_ip = 41; continue _fun00003 }
 31:
                    report = _closure2_slot0;
                    tangon = report.sessionId;
 41:
                    report = entity != tangon;
                    entity = '';
                    if(!report) { _fun00004_ip = 55; continue _fun00003 }
 52:
                    entity = tangon;
 55:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            verify = tangon.bind(option)(michal, entity);
            michal = oscard == offset;
            entity = undefined;
            if(michal) { _fun00002_ip = 161; continue _fun00001 }
 156:
            entity = offset.type;
 161:
            if(!(oscard == entity)) { _fun00002_ip = 189; continue _fun00001 }
 165:
            tangon = oscard == verify;
            michal = undefined;
            if(tangon) { _fun00002_ip = 186; continue _fun00001 }
 174:
            tangon = verify.clientInfo;
            michal = tangon.os;
 186:
            entity = michal;
 189:
            michal = oscard != entity;
            tangon = '';
            if(!michal) { _fun00002_ip = 203; continue _fun00001 }
 200:
            tangon = entity;
 203:
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 4;
            entity = option[entity];
            entity = michal.bind(report)(entity);
            michal = entity.bind(report)(offset);
            entity = {};
            romeon = oscard == offset;
            option = undefined;
            if(romeon) { _fun00002_ip = 244; continue _fun00001 }
 239:
            option = offset.channelId;
 244:
            option = option === golfie;
            entity['isConnectingToConsole'] = option;
            option = oscard == offset;
            oscard = undefined;
            if(option) { _fun00002_ip = 267; continue _fun00001 }
 262:
            oscard = offset.channelId;
 267:
            oscard = oscard === golfie;
            if(oscard) { _fun00002_ip = 277; continue _fun00001 }
 274:
            oscard = yankee;
 277:
            entity['isConnectingOrConnectedToConsole'] = oscard;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            option = 5;
            option = golfie[option];
            option = oscard.bind(report)(option);
            option = option.bind(report)(tangon);
            entity['icon'] = option;
            option = _closure1_slot0;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            option = option.bind(report)(zuuluu);
            zuuluu = option.getConsoleConnectingText;
            zuuluu = zuuluu.bind(option)(verify, offset, yankee);
            entity['text'] = zuuluu;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)(tangon);
            entity['color'] = zuuluu;
            entity['displayCancel'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();