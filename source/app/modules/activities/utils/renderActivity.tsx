// app/modules/activities/utils/renderActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot5;
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
            golfie = _closure1_slot5;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: getMessages
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = {};
            zuuluu = _closure1_slot3;
            report = zuuluu.STREAMING;
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            golfie = 1;
            zuuluu = zuuluu[golfie];
            oscard = undefined;
            zuuluu = option.bind(oscard)(zuuluu);
            option = zuuluu.t;
            if(michal) { _fun00008_ip = 56; continue _fun00007 }
 48:
            zuuluu = option.0wJXSk;
            _fun00008_ip = 62; continue _fun00007;
 56:
            zuuluu = option.4CQq9f;
 62:
            entity[report] = zuuluu;
            zuuluu = _closure1_slot3;
            report = zuuluu.LISTENING;
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = option.bind(oscard)(zuuluu);
            option = zuuluu.t;
            if(michal) { _fun00008_ip = 110; continue _fun00007 }
 102:
            zuuluu = option.Vnuxub;
            _fun00008_ip = 116; continue _fun00007;
 110:
            zuuluu = option.b+lA5+;
 116:
            entity[report] = zuuluu;
            zuuluu = _closure1_slot3;
            report = zuuluu.WATCHING;
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = option.bind(oscard)(zuuluu);
            option = zuuluu.t;
            if(michal) { _fun00008_ip = 164; continue _fun00007 }
 156:
            zuuluu = option.pW3Ip6;
            _fun00008_ip = 170; continue _fun00007;
 164:
            zuuluu = option.mqdfDQ;
 170:
            entity[report] = zuuluu;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.COMPETING;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[golfie];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.t;
            if(michal) { _fun00008_ip = 218; continue _fun00007 }
 210:
            michal = tangon.QQ2wVF;
            _fun00008_ip = 224; continue _fun00007;
 218:
            michal = tangon.oHF7Cg;
 224:
            entity[zuuluu] = michal;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: getActivityText
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            golfie = arguments[2];
            option = undefined;
            if(!(golfie === option)) { _fun00010_ip = 14; continue _fun00009 }
 12:
            golfie = false;
 14:
            entity = null;
            if(!(entity != michal)) { _fun00010_ip = 45; continue _fun00009 }
 20:
            tangon = michal.type;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.CUSTOM_STATUS;
            if(!(tangon !== zuuluu)) { _fun00010_ip = 712; continue _fun00009 }
 45:
            zuuluu = argBar;
            if(!(entity == zuuluu)) { _fun00010_ip = 554; continue _fun00009 }
 55:
            if(!(entity != michal)) { _fun00010_ip = 552; continue _fun00009 }
 62:
            zuuluu = michal.name;
            if(!(entity != zuuluu)) { _fun00010_ip = 552; continue _fun00009 }
 74:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 2;
            tangon = oscard[tangon];
            tangon = report.bind(option)(tangon);
            tangon = tangon.bind(option)(michal);
            if(tangon) { _fun00010_ip = 448; continue _fun00009 }
 108:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 3;
            tangon = oscard[tangon];
            tangon = report.bind(option)(tangon);
            tangon = tangon.bind(option)(michal);
            if(tangon) { _fun00010_ip = 416; continue _fun00009 }
 139:
            oscard = michal.type;
            yankee = michal.name;
            tangon = _closure1_slot6;
            report = tangon.bind(option)(golfie);
            tangon = _closure1_slot3;
            tangon = tangon.LISTENING;
            if(!(tangon !== oscard)) { _fun00010_ip = 368; continue _fun00009 }
 175:
            tangon = _closure1_slot3;
            tangon = tangon.WATCHING;
            if(!(tangon !== oscard)) { _fun00010_ip = 368; continue _fun00009 }
 192:
            tangon = _closure1_slot3;
            tangon = tangon.COMPETING;
            if(!(tangon !== oscard)) { _fun00010_ip = 368; continue _fun00009 }
 209:
            tangon = _closure1_slot3;
            verify = tangon.CUSTOM_STATUS;
            tangon = null;
            if(!(verify !== oscard)) { _fun00010_ip = 414; continue _fun00009 }
 228:
            verify = _closure1_slot3;
            verify = verify.HANG_STATUS;
            tangon = null;
            if(!(verify !== oscard)) { _fun00010_ip = 414; continue _fun00009 }
 247:
            verify = _closure1_slot3;
            verify = verify.PLAYING;
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            offset = 1;
            verify = kiloes[offset];
            verify = romeon.bind(option)(verify);
            backup = verify.intl;
            if(golfie) { _fun00010_ip = 325; continue _fun00009 }
 285:
            sizing = backup.format;
            verify = kiloes[offset];
            verify = romeon.bind(option)(verify);
            verify = verify.t;
            foxtra = verify.lFApm5;
            verify = {};
            verify['game'] = yankee;
            verify = sizing.bind(backup)(foxtra, verify);
            _fun00010_ip = 363; continue _fun00009;
 325:
            foxtra = backup.formatToPlainString;
            offset = kiloes[offset];
            offset = romeon.bind(option)(offset);
            offset = offset.t;
            romeon = offset.Sq9xJy;
            offset = {};
            offset['game'] = yankee;
            verify = foxtra.bind(backup)(romeon, offset);
 363:
            tangon = verify;
            _fun00010_ip = 414; continue _fun00009;
 368:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 1;
            verify = romeon[verify];
            verify = offset.bind(option)(verify);
            offset = verify.intl;
            verify = offset.format;
            oscard = report[oscard];
            report = {};
            report['name'] = yankee;
            tangon = verify.bind(offset)(oscard, report);
 414:
            _fun00010_ip = 446; continue _fun00009;
 416:
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            report = 4;
            report = verify[report];
            oscard = oscard.bind(option)(report);
            report = michal.name;
            tangon = oscard.bind(option)(report);
 446:
            return tangon;
 448:
            tangon = michal.details;
            if(!(entity != tangon)) { _fun00010_ip = 472; continue _fun00009 }
 458:
            report = michal.details;
            tangon = '';
            if(!(tangon === report)) { _fun00010_ip = 479; continue _fun00009 }
 472:
            verify = michal.name;
            _fun00010_ip = 485; continue _fun00009;
 479:
            verify = michal.details;
 485:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 1;
            tangon = oscard[tangon];
            tangon = report.bind(option)(tangon);
            oscard = tangon.intl;
            report = oscard.format;
            tangon = _closure1_slot6;
            tangon = tangon.bind(option)(golfie);
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.STREAMING;
            tangon = tangon[zuuluu];
            zuuluu = {};
            zuuluu['name'] = verify;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            return zuuluu;
 552:
            return entity;
 554:
            if(!(entity != michal)) { _fun00010_ip = 652; continue _fun00009 }
 558:
            report = michal.type;
            tangon = _closure1_slot3;
            tangon = tangon.PLAYING;
            if(!(report === tangon)) { _fun00010_ip = 652; continue _fun00009 }
 580:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 1;
            tangon = oscard[tangon];
            tangon = report.bind(option)(tangon);
            oscard = tangon.intl;
            report = oscard.format;
            tangon = _closure1_slot6;
            tangon = tangon.bind(option)(golfie);
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.STREAMING;
            tangon = tangon[zuuluu];
            zuuluu = {};
            golfie = michal.name;
            zuuluu['name'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            _fun00010_ip = 710; continue _fun00009;
 652:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 1;
            report = verify[tangon];
            report = golfie.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = verify[tangon];
            tangon = golfie.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.eXan7O;
            zuuluu = report.bind(oscard)(tangon);
 710:
            return zuuluu;
 712:
            zuuluu = michal.state;
            zuuluu = entity != zuuluu;
            entity = null;
            if(!zuuluu) { _fun00010_ip = 741; continue _fun00009 }
 726:
            zuuluu = michal.state;
            michal = zuuluu.trim;
            entity = michal.bind(zuuluu)();
 741:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityTypes;
    var _closure1_slot3 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/renderActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: renderActivity
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            romeon = argBar;
            yankee = arguments[2];
            report = arguments[3];
            entity = undefined;
            if(!(yankee === entity)) { _fun00012_ip = 20; continue _fun00011 }
 18:
            yankee = false;
 20:
            michal = global;
            zuuluu = michal.Array;
            michal = zuuluu.isArray;
            michal = michal.bind(zuuluu)(golfie);
            if(michal) { _fun00012_ip = 57; continue _fun00011 }
 41:
            michal = _closure1_slot7;
            michal = michal.bind(entity)(golfie, romeon, yankee);
            return michal;
 57:
            zuuluu = null;
            tangon = golfie;
            if(!(zuuluu != romeon)) { _fun00012_ip = 121; continue _fun00011 }
 66:
            if(!report) { _fun00012_ip = 81; continue _fun00011 }
 69:
            oscard = romeon.discoverable;
            michal = false;
            report = michal === oscard;
 81:
            michal = golfie;
            if(report) { _fun00012_ip = 118; continue _fun00011 }
 87:
            report = new Array(1);
            kiloes = 0;
            output = report;
            sizing = golfie;
            golfie = arraySpread(output, sizing, kiloes);
            report[golfie] = zuuluu;
            oscard = 1;
            oscard = golfie + oscard;
            michal = report;
 118:
            tangon = michal;
 121:
            michal = _closure1_slot4;
            verify = michal.bind(entity)(tangon);
            tangon = verify.bind(entity)();
            michal = tangon.done;
            option = tangon;
            golfie = null;
            tangon = null;
            if(michal) { _fun00012_ip = 253; continue _fun00011 }
 152:
            oscard = option.value;
            michal = _closure1_slot7;
            report = michal.bind(entity)(oscard, romeon, yankee);
            if(!(zuuluu == report)) { _fun00012_ip = 239; continue _fun00011 }
 172:
            michal = zuuluu == oscard;
            foxtra = undefined;
            if(michal) { _fun00012_ip = 186; continue _fun00011 }
 181:
            foxtra = oscard.type;
 186:
            michal = _closure1_slot3;
            michal = michal.CUSTOM_STATUS;
            michal = foxtra === michal;
            if(!michal) { _fun00012_ip = 213; continue _fun00011 }
 203:
            foxtra = oscard.emoji;
            michal = zuuluu != foxtra;
 213:
            if(!michal) { _fun00012_ip = 219; continue _fun00011 }
 216:
            golfie = oscard;
 219:
            backup = verify.bind(entity)();
            michal = backup.done;
            option = backup;
            tangon = golfie;
            if(michal) { _fun00012_ip = 253; continue _fun00011 }
 237:
            _fun00012_ip = 152; continue _fun00011;
 239:
            michal = {};
            michal['activity'] = oscard;
            michal['activityText'] = report;
            return michal;
 253:
            michal = zuuluu == tangon;
            entity = undefined;
            if(michal) { _fun00012_ip = 268; continue _fun00011 }
 262:
            entity = tangon.emoji;
 268:
            michal = zuuluu != entity;
            entity = null;
            if(!michal) { _fun00012_ip = 292; continue _fun00011 }
 277:
            michal = {};
            michal['activity'] = tangon;
            michal['activityText'] = zuuluu;
            entity = michal;
 292:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();