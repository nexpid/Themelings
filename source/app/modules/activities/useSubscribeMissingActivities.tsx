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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot10;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot10;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
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
    entity = function(argFoo, argBar) { // Original name: useMissingActivities
        golfie = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = zuuluu;
        oscard = _closure1_slot3;
        report = oscard.useMemo;
        tangon = new Array(2);
        tangon[0] = golfie;
        tangon[1] = zuuluu;
        zuuluu = function() {
            tangon = _closure2_slot0;
            zuuluu = _closure2_slot1;
            michal = function(argFoo, argBar) { // Original name: getMessagesWithActivities
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = argBar;
                    michal = zuuluu.isPrivate;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00008_ip = 46; continue _fun00007 }
 21:
                    report = _closure1_slot8;
                    michal = new Array(2);
                    michal[0] = report;
                    zuuluu = _closure1_slot7;
                    michal[1] = zuuluu;
                    return michal;
 46:
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tangon = argFoo;
                            report = tangon.application;
                            zuuluu = null;
                            oscard = zuuluu == report;
                            entity = undefined;
                            if(oscard) { _fun00010_ip = 24; continue _fun00009 }
 19:
                            entity = report.id;
 24:
                            entity = zuuluu != entity;
                            if(!entity) { _fun00010_ip = 56; continue _fun00009 }
 31:
                            tangon = tangon.activity;
                            report = zuuluu == tangon;
                            michal = undefined;
                            if(report) { _fun00010_ip = 52; continue _fun00009 }
 46:
                            michal = tangon.party_id;
 52:
                            entity = zuuluu != michal;
 56:
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    michal = michal.bind(zuuluu)(entity);
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    entity[1] = michal;
                    return entity;
                }
            };
            entity = undefined;
            entity = michal.bind(entity)(tangon, zuuluu);
            return entity;
        };
        report = report.bind(oscard)(zuuluu, tangon);
        tangon = _closure1_slot2;
        oscard = undefined;
        zuuluu = 2;
        tangon = tangon.bind(oscard)(report, zuuluu);
        zuuluu = 0;
        golfie = tangon[zuuluu];
        var _closure2_slot2 = golfie;
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        report = _closure1_slot0;
        option = _closure1_slot1;
        tangon = 4;
        tangon = option[tangon];
        verify = report.bind(oscard)(tangon);
        option = verify.useStateFromStoresArray;
        tangon = _closure1_slot5;
        oscard = new Array(1);
        oscard[0] = tangon;
        report = new Array(1);
        report[0] = golfie;
        tangon = function() {
            entity = new Array(0);
            var _closure3_slot0 = entity;
            tangon = _closure2_slot2;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    golfie = _closure1_slot5;
                    oscard = golfie.findActivity;
                    zuuluu = entity.author;
                    yankee = zuuluu.id;
                    offset = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            oscard = michal.application_id;
                            entity = _closure4_slot0;
                            golfie = entity.application;
                            report = null;
                            option = report == golfie;
                            entity = undefined;
                            if(option) { _fun00014_ip = 37; continue _fun00013 }
 32:
                            entity = golfie.id;
 37:
                            entity = oscard === entity;
                            if(!entity) { _fun00014_ip = 93; continue _fun00013 }
 44:
                            oscard = michal.party;
                            golfie = report == oscard;
                            michal = undefined;
                            if(golfie) { _fun00014_ip = 64; continue _fun00013 }
 59:
                            michal = oscard.id;
 64:
                            tangon = _closure4_slot0;
                            tangon = tangon.activity;
                            report = report == tangon;
                            zuuluu = undefined;
                            if(report) { _fun00014_ip = 89; continue _fun00013 }
 83:
                            zuuluu = tangon.party_id;
 89:
                            entity = michal === zuuluu;
 93:
                            return entity;
                        }
                    };
                    zuuluu = null;
                    option = true;
                    romeon = golfie;
                    verify = null;
                    michal = romeon[oscard](yankee, offset, verify, option, golfie);
                    if(!(zuuluu != michal)) { _fun00012_ip = 79; continue _fun00011 }
 57:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.push;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        oscard = option.bind(verify)(oscard, tangon, report);
        var _closure2_slot3 = oscard;
        report = _closure1_slot3;
        tangon = report.useMemo;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            tangon = _closure2_slot2;
            zuuluu = _closure2_slot3;
            michal = function(argFoo, argBar) { // Original name: makeActivitySubscriptions
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    entity = argBar;
                    var _closure4_slot0 = entity;
                    zuuluu = tangon.length;
                    entity = 0;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 50; continue _fun00015 }
 23:
                    entity = new Array(0);
                    var _closure4_slot1 = entity;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            report = argFoo;
                            michal = report.application;
                            zuuluu = null;
                            tangon = zuuluu == michal;
                            entity = undefined;
                            golfie = undefined;
                            if(tangon) { _fun00018_ip = 26; continue _fun00017 }
 21:
                            golfie = michal.id;
 26:
                            michal = report.activity;
                            tangon = zuuluu == michal;
                            oscard = undefined;
                            if(tangon) { _fun00018_ip = 47; continue _fun00017 }
 41:
                            oscard = michal.party_id;
 47:
                            option = report.id;
                            tangon = _closure4_slot0;
                            tangon = option in tangon;
                            if(tangon) { _fun00018_ip = 153; continue _fun00017 }
 66:
                            if(!(zuuluu != golfie)) { _fun00018_ip = 153; continue _fun00017 }
 70:
                            if(!(zuuluu != oscard)) { _fun00018_ip = 153; continue _fun00017 }
 74:
                            tangon = report.timestamp;
                            zuuluu = tangon.getTime;
                            zuuluu = zuuluu.bind(tangon)();
                            tangon = {};
                            option = report.author;
                            option = option.id;
                            tangon['userId'] = option;
                            tangon['applicationId'] = golfie;
                            tangon['partyId'] = oscard;
                            oscard = report.id;
                            tangon['messageId'] = oscard;
                            report = report.channel_id;
                            tangon['channelId'] = report;
                            tangon['inviteTime'] = zuuluu;
                            zuuluu = _closure4_slot1;
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 153:
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
 50:
                    entity = _closure1_slot6;
                    return entity;
                }
            };
            entity = undefined;
            entity = michal.bind(entity)(tangon, zuuluu);
            return entity;
        };
        michal = tangon.bind(report)(entity, michal);
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    var _closure1_slot11 = entity;
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
    tangon = new Array(0);
    var _closure1_slot6 = tangon;
    tangon = new Array(0);
    var _closure1_slot7 = tangon;
    tangon = new Array(0);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useSubscribeMissingActivities.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useSubscribeMissingActivities
        report = _closure1_slot11;
        oscard = undefined;
        zuuluu = argFoo;
        michal = argBar;
        report = report.bind(oscard)(zuuluu, michal);
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
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = _closure1_slot9;
                michal = _closure2_slot0;
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                zuuluu = report.bind(entity)();
                michal = zuuluu.done;
                tangon = 5;
                if(michal) { _fun00020_ip = 102; continue _fun00019 }
 36:
                option = zuuluu.value;
                golfie = _closure1_slot4;
                michal = golfie.isSubscribed;
                michal = michal.bind(golfie)(option);
                if(michal) { _fun00020_ip = 87; continue _fun00019 }
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
                if(!michal) { _fun00020_ip = 36; continue _fun00019 }
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