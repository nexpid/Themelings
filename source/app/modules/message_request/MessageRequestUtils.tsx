// app/modules/message_request/MessageRequestUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_request/MessageRequestUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: filterOutMessageRequestsAndSpam
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00002_ip = 37; continue _fun00001 }
 11:
            oscard = _closure1_slot2;
            michal = new Array(2);
            michal[0] = oscard;
            report = _closure1_slot3;
            michal[1] = report;
            tangon = michal;
 37:
            oscard = tangon;
            michal = oscard[Symbol.iterator];
            oscard = michal().next;
            golfie = oscard().value;
            tangon = michal;
            tangon = tangon === zuuluu;
            report = undefined;
            if(tangon) { _fun00002_ip = 62; continue _fun00001 }
 59:
            report = golfie;
 62:
            var _closure2_slot0 = report;
            report = undefined;
            if(tangon) { _fun00002_ip = 96; continue _fun00001 }
 71:
            golfie = oscard().value;
            oscard = michal;
            oscard = oscard === zuuluu;
            report = undefined;
            tangon = oscard;
            if(oscard) { _fun00002_ip = 96; continue _fun00001 }
 90:
            report = golfie;
            tangon = oscard;
 96:
            var _closure2_slot1 = report;
            if(tangon) { _fun00002_ip = 106; continue _fun00001 }
 103:
            michal.return();
 106:
            tangon = function(argFoo) { // Original name: channelRecordToArray
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 2;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.keys;
                zuuluu = michal.bind(zuuluu)(tangon);
                michal = zuuluu.map;
                entity = function(argFoo) {
                    zuuluu = argFoo;
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    michal = _closure3_slot0;
                    michal = michal[zuuluu];
                    entity[1] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = argFoo;
            report = tangon.bind(zuuluu)(michal);
            tangon = report.filter;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = argFoo;
                    michal = oscard[Symbol.iterator];
                    oscard = michal().next;
                    option = undefined;
                    zuuluu = undefined;
                    tangon = undefined;
                    golfie = oscard().value;
                    verify = michal;
                    verify = verify === option;
                    zuuluu = verify;
                    if(verify) { _fun00004_ip = 32; continue _fun00003 }
 29:
                    tangon = golfie;
 32:
                    tangon = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00004_ip = 60; continue _fun00003 }
 40:
                    oscard = oscard().value;
                    golfie = michal;
                    golfie = golfie === option;
                    zuuluu = golfie;
                    if(golfie) { _fun00004_ip = 60; continue _fun00003 }
 57:
                    tangon = oscard;
 60:
                    report = tangon;
                    tangon = zuuluu;
                    if(tangon) { _fun00004_ip = 72; continue _fun00003 }
 69:
                    michal.return();
 72:
                    verify = _closure2_slot0;
                    option = verify.isMessageRequest;
                    golfie = report;
                    golfie = golfie.id;
                    golfie = option.bind(verify)(golfie);
                    golfie = !golfie;
                    tangon = golfie;
                    if(!golfie) { _fun00004_ip = 130; continue _fun00003 }
 107:
                    golfie = _closure2_slot1;
                    oscard = golfie.isSpam;
                    report = report.id;
                    report = oscard.bind(golfie)(report);
                    tangon = !report;
 130:
                    return tangon;
 132:
                    CatchBlockStart(arg_register=0);
                    if(zuuluu) { _fun00004_ip = 140; continue _fun00003 }
 137:
                    michal.return();
 140:
                    throw entity;
                }
            };
            michal = tangon.bind(report)(michal);
            entity = function(argFoo) { // Original name: channelArrayToObject
                entity = global;
                zuuluu = entity.Array;
                michal = zuuluu.from;
                entity = argFoo;
                tangon = michal.bind(zuuluu)(entity);
                zuuluu = tangon.reduce;
                michal = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tangon = argBar;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        entity = tangon().value;
                        zuuluu = michal;
                        golfie = undefined;
                        zuuluu = zuuluu === golfie;
                        report = undefined;
                        if(zuuluu) { _fun00006_ip = 27; continue _fun00005 }
 24:
                        report = entity;
 27:
                        entity = undefined;
                        if(zuuluu) { _fun00006_ip = 57; continue _fun00005 }
 32:
                        oscard = tangon().value;
                        tangon = michal;
                        tangon = tangon === golfie;
                        entity = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00006_ip = 57; continue _fun00005 }
 51:
                        entity = oscard;
                        zuuluu = tangon;
 57:
                        if(zuuluu) { _fun00006_ip = 63; continue _fun00005 }
 60:
                        michal.return();
 63:
                        michal = global;
                        tangon = michal.Object;
                        zuuluu = tangon.assign;
                        michal = {};
                        michal[report] = entity;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    }
                };
                entity = {};
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = entity.bind(zuuluu)(michal);
            return entity;
        }
    };
    zuuluu['filterOutMessageRequestsAndSpam'] = tangon;
    tangon = function(argFoo) { // Original name: filterOutMessageRequestsAndSpamById
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = arguments[1];
            option = undefined;
            if(!(tangon === option)) { _fun00008_ip = 40; continue _fun00007 }
 14:
            oscard = _closure1_slot2;
            michal = new Array(2);
            michal[0] = oscard;
            report = _closure1_slot3;
            michal[1] = report;
            tangon = michal;
 40:
            oscard = tangon;
            michal = oscard[Symbol.iterator];
            oscard = michal().next;
            golfie = oscard().value;
            tangon = michal;
            tangon = tangon === option;
            report = undefined;
            if(tangon) { _fun00008_ip = 65; continue _fun00007 }
 62:
            report = golfie;
 65:
            var _closure2_slot0 = report;
            report = undefined;
            if(tangon) { _fun00008_ip = 99; continue _fun00007 }
 74:
            golfie = oscard().value;
            oscard = michal;
            oscard = oscard === option;
            report = undefined;
            tangon = oscard;
            if(oscard) { _fun00008_ip = 99; continue _fun00007 }
 93:
            report = golfie;
            tangon = oscard;
 99:
            var _closure2_slot1 = report;
            if(tangon) { _fun00008_ip = 109; continue _fun00007 }
 106:
            michal.return();
 109:
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot0;
                    entity = zuuluu.isMessageRequest;
                    entity = entity.bind(zuuluu)(tangon);
                    entity = !entity;
                    if(!entity) { _fun00010_ip = 45; continue _fun00009 }
 27:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.isSpam;
                    michal = michal.bind(zuuluu)(tangon);
                    entity = !michal;
 45:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['filterOutMessageRequestsAndSpamById'] = tangon;
    tangon = function(argFoo) { // Original name: isMessageRequestOrSpamRequest
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            michal = arguments[1];
            option = undefined;
            if(!(michal === option)) { _fun00012_ip = 38; continue _fun00011 }
 12:
            report = _closure1_slot2;
            entity = new Array(2);
            entity[0] = report;
            zuuluu = _closure1_slot3;
            entity[1] = zuuluu;
            michal = entity;
 38:
            oscard = michal;
            entity = oscard[Symbol.iterator];
            oscard = entity().next;
            zuuluu = oscard().value;
            michal = entity;
            report = michal === option;
            michal = undefined;
            if(report) { _fun00012_ip = 63; continue _fun00011 }
 60:
            michal = zuuluu;
 63:
            zuuluu = undefined;
            if(report) { _fun00012_ip = 93; continue _fun00011 }
 68:
            golfie = oscard().value;
            oscard = entity;
            oscard = oscard === option;
            zuuluu = undefined;
            report = oscard;
            if(oscard) { _fun00012_ip = 93; continue _fun00011 }
 87:
            zuuluu = golfie;
            report = oscard;
 93:
            if(report) { _fun00012_ip = 99; continue _fun00011 }
 96:
            entity.return();
 99:
            entity = michal.isMessageRequest;
            entity = entity.bind(michal)(tangon);
            if(entity) { _fun00012_ip = 124; continue _fun00011 }
 113:
            michal = zuuluu.isSpam;
            entity = michal.bind(zuuluu)(tangon);
 124:
            return entity;
        }
    };
    zuuluu['isMessageRequestOrSpamRequest'] = tangon;
    michal = function() { // Original name: shouldShowMessageRequests
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = arguments[0];
            golfie = undefined;
            if(!(michal === golfie)) { _fun00014_ip = 35; continue _fun00013 }
 9:
            tangon = _closure1_slot2;
            entity = new Array(2);
            entity[0] = tangon;
            zuuluu = _closure1_slot3;
            entity[1] = zuuluu;
            michal = entity;
 35:
            report = michal;
            entity = report[Symbol.iterator];
            report = entity().next;
            zuuluu = report().value;
            michal = entity;
            tangon = michal === golfie;
            michal = undefined;
            if(tangon) { _fun00014_ip = 60; continue _fun00013 }
 57:
            michal = zuuluu;
 60:
            zuuluu = undefined;
            if(tangon) { _fun00014_ip = 90; continue _fun00013 }
 65:
            oscard = report().value;
            report = entity;
            report = report === golfie;
            zuuluu = undefined;
            tangon = report;
            if(report) { _fun00014_ip = 90; continue _fun00013 }
 84:
            zuuluu = oscard;
            tangon = report;
 90:
            if(tangon) { _fun00014_ip = 96; continue _fun00013 }
 93:
            entity.return();
 96:
            entity = zuuluu.getSpamChannelsCount;
            zuuluu = entity.bind(zuuluu)();
            entity = michal.getMessageRequestsCount;
            entity = entity.bind(michal)();
            michal = 0;
            entity = entity > michal;
            if(entity) { _fun00014_ip = 129; continue _fun00013 }
 125:
            entity = zuuluu > michal;
 129:
            return entity;
        }
    };
    zuuluu['shouldShowMessageRequests'] = michal;
    return entity;
})();