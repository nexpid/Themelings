// app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getMessageTimestampForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.lastMessageId;
            michal = entity.message;
            entity = entity.loaded;
            if(!entity) { _fun00002_ip = 29; continue _fun00001 }
 23:
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 76; continue _fun00001 }
 29:
            entity = null;
            zuuluu = entity != report;
            if(!zuuluu) { _fun00002_ip = 74; continue _fun00001 }
 38:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            zuuluu = tangon.extractTimestamp;
            entity = zuuluu.bind(tangon)(report);
 74:
            _fun00002_ip = 117; continue _fun00001;
 76:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.extractTimestamp;
            michal = michal.id;
            entity = zuuluu.bind(tangon)(michal);
 117:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_request/hooks/useMessageRequestTimestampText.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useMessageRequestTimestampText
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            tangon = undefined;
            zuuluu = option.bind(tangon)(entity);
            entity = zuuluu.useMessageRequestPreview;
            report = entity.bind(zuuluu)(report);
            zuuluu = _closure1_slot4;
            entity = {};
            golfie = 3;
            golfie = verify[golfie];
            verify = option.bind(tangon)(golfie);
            option = verify.useStateFromStores;
            offset = _closure1_slot3;
            golfie = new Array(1);
            golfie[0] = offset;
            oscard = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.lastMessageId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = option.bind(verify)(golfie, oscard);
            entity['lastMessageId'] = oscard;
            romeon = entity;
            yankee = report;
            report = copyDataProperties(romeon, yankee);
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = null;
            report = entity == zuuluu;
            entity = '';
            if(report) { _fun00004_ip = 161; continue _fun00003 }
 126:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            michal = report.bind(tangon)(michal);
            zuuluu = michal.bind(tangon)(zuuluu);
            michal = zuuluu.calendar;
            entity = michal.bind(zuuluu)();
 161:
            return entity;
        }
    };
    zuuluu['useMessageRequestTimestampText'] = tangon;
    michal = function(argFoo) { // Original name: useMessageRequestRelativeTimestampText
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            report = undefined;
            zuuluu = option.bind(report)(entity);
            entity = zuuluu.useMessageRequestPreview;
            tangon = entity.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot4;
            entity = {};
            golfie = 3;
            golfie = verify[golfie];
            verify = option.bind(report)(golfie);
            option = verify.useStateFromStores;
            offset = _closure1_slot3;
            golfie = new Array(1);
            golfie[0] = offset;
            oscard = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.lastMessageId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = option.bind(verify)(golfie, oscard);
            entity['lastMessageId'] = oscard;
            romeon = entity;
            yankee = tangon;
            tangon = copyDataProperties(romeon, yankee);
            tangon = zuuluu.bind(report)(entity);
            entity = null;
            zuuluu = entity == tangon;
            entity = '';
            if(zuuluu) { _fun00006_ip = 157; continue _fun00005 }
 126:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getTimestampString;
            entity = michal.bind(zuuluu)(tangon);
 157:
            return entity;
        }
    };
    zuuluu['useMessageRequestRelativeTimestampText'] = michal;
    return entity;
})();