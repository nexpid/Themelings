// app/modules/activities/useSubscribeMissingActivities.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot10;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot10;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    golfie = new Array(0);
    var _closure1_slot6 = golfie;
    option = new Array(0);
    var _closure1_slot7 = option;
    tangon = new Array(2);
    tangon[0] = option;
    tangon[1] = golfie;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useSubscribeMissingActivities.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useSubscribeMissingActivities
        tangon = function(argFoo, argBar) { // Original name: useMissingActivities
            golfie = argFoo;
            oscard = argBar;
            var _closure3_slot0 = golfie;
            var _closure3_slot1 = oscard;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.useStateFromStoresArray;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = new Array(2);
            michal[0] = golfie;
            michal[1] = oscard;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure3_slot1;
                    zuuluu = tangon.isPrivate;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00008_ip = 31; continue _fun00007 }
 22:
                    zuuluu = _closure1_slot8;
                    return zuuluu;
 31:
                    tangon = new Array(0);
                    var _closure4_slot0 = tangon;
                    zuuluu = new Array(0);
                    var _closure4_slot1 = zuuluu;
                    report = _closure3_slot0;
                    michal = report.forEach;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            tangon = entity.application;
                            report = null;
                            golfie = report == tangon;
                            michal = undefined;
                            oscard = undefined;
                            if(golfie) { _fun00010_ip = 28; continue _fun00009 }
 23:
                            oscard = tangon.id;
 28:
                            var _closure5_slot0 = oscard;
                            golfie = entity.activity;
                            option = report == golfie;
                            tangon = undefined;
                            if(option) { _fun00010_ip = 53; continue _fun00009 }
 47:
                            tangon = golfie.party_id;
 53:
                            var _closure5_slot1 = tangon;
                            if(!(report != oscard)) { _fun00010_ip = 188; continue _fun00009 }
 64:
                            if(!(report != tangon)) { _fun00010_ip = 188; continue _fun00009 }
 68:
                            golfie = entity.author;
                            golfie = golfie.id;
                            offset = _closure1_slot5;
                            verify = offset.findActivity;
                            foxtra = function(argFoo) {
                                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                    zuuluu = argFoo;
                                    tangon = zuuluu.application_id;
                                    entity = _closure5_slot0;
                                    entity = tangon === entity;
                                    if(!entity) { _fun00012_ip = 53; continue _fun00011 }
 23:
                                    tangon = zuuluu.party;
                                    zuuluu = null;
                                    report = zuuluu == tangon;
                                    zuuluu = undefined;
                                    if(report) { _fun00012_ip = 45; continue _fun00011 }
 40:
                                    zuuluu = tangon.id;
 45:
                                    michal = _closure5_slot1;
                                    entity = zuuluu === michal;
 53:
                                    return entity;
                                }
                            };
                            yankee = true;
                            kiloes = offset;
                            backup = golfie;
                            romeon = null;
                            zuuluu = kiloes[verify](backup, foxtra, romeon, yankee, offset);
                            if(!(report == zuuluu)) { _fun00010_ip = 190; continue _fun00009 }
 117:
                            report = entity.timestamp;
                            zuuluu = report.getTime;
                            zuuluu = zuuluu.bind(report)();
                            report = {};
                            report['userId'] = golfie;
                            report['applicationId'] = oscard;
                            report['partyId'] = tangon;
                            tangon = entity.id;
                            report['messageId'] = tangon;
                            tangon = entity.channel_id;
                            report['channelId'] = tangon;
                            report['inviteTime'] = zuuluu;
                            tangon = _closure4_slot1;
                            zuuluu = tangon.push;
                            zuuluu = zuuluu.bind(tangon)(report);
 188:
                            return michal;
 190:
                            zuuluu = _closure4_slot0;
                            michal = zuuluu.push;
                            entity = entity.id;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(report)(entity);
                    entity = tangon.length;
                    michal = 0;
                    if(!(michal === entity)) { _fun00008_ip = 88; continue _fun00007 }
 79:
                    entity = zuuluu.length;
                    if(!(michal !== entity)) { _fun00008_ip = 168; continue _fun00007 }
 88:
                    entity = tangon.length;
                    if(!(michal !== entity)) { _fun00008_ip = 144; continue _fun00007 }
 97:
                    entity = zuuluu.length;
                    if(!(michal !== entity)) { _fun00008_ip = 120; continue _fun00007 }
 106:
                    entity = new Array(2);
                    entity[0] = tangon;
                    entity[1] = zuuluu;
                    _fun00008_ip = 142; continue _fun00007;
 120:
                    michal = new Array(2);
                    michal[0] = tangon;
                    tangon = _closure1_slot6;
                    michal[1] = tangon;
                    entity = michal;
 142:
                    _fun00008_ip = 166; continue _fun00007;
 144:
                    tangon = _closure1_slot7;
                    michal = new Array(2);
                    michal[0] = tangon;
                    michal[1] = zuuluu;
                    entity = michal;
 166:
                    _fun00008_ip = 175; continue _fun00007;
 168:
                    entity = _closure1_slot8;
 175:
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        };
        oscard = undefined;
        zuuluu = argFoo;
        michal = argBar;
        report = tangon.bind(oscard)(zuuluu, michal);
        zuuluu = _closure1_slot2;
        michal = 2;
        report = zuuluu.bind(oscard)(report, michal);
        michal = 0;
        zuuluu = report[michal];
        michal = 1;
        michal = report[michal];
        var _closure2_slot0 = michal;
        oscard = _closure1_slot3;
        report = oscard.useEffect;
        tangon = new Array(1);
        tangon[0] = michal;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = _closure1_slot9;
                michal = _closure2_slot0;
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                zuuluu = report.bind(entity)();
                michal = zuuluu.done;
                tangon = 5;
                if(michal) { _fun00014_ip = 102; continue _fun00013 }
 36:
                option = zuuluu.value;
                golfie = _closure1_slot4;
                michal = golfie.isSubscribed;
                michal = michal.bind(golfie)(option);
                if(michal) { _fun00014_ip = 87; continue _fun00013 }
 59:
                golfie = _closure1_slot0;
                michal = _closure1_slot1;
                michal = michal[tangon];
                golfie = golfie.bind(entity)(michal);
                michal = golfie.subscribe;
                michal = michal.bind(golfie)(option);
 87:
                golfie = report.bind(entity)();
                michal = golfie.done;
                zuuluu = golfie;
                if(!michal) { _fun00014_ip = 36; continue _fun00013 }
 102:
                return entity;
            }
        };
        entity = report.bind(oscard)(entity, tangon);
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();