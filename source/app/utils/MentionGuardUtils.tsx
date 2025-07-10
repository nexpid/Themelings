// app/utils/MentionGuardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = verify;
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
            verify = _closure1_slot9;
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
            golfie = _closure1_slot9;
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
    var _closure1_slot8 = entity;
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
    var _closure1_slot9 = entity;
    golfie = function(argFoo, argBar) { // Original name: everyoneMemberCount
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = 0;
            var _closure2_slot1 = michal;
            tangon = zuuluu.isThread;
            tangon = tangon.bind(zuuluu)();
            if(tangon) { _fun00008_ip = 94; continue _fun00007 }
 31:
            golfie = _closure1_slot3;
            oscard = golfie.getProps;
            tangon = zuuluu.getGuildId;
            report = tangon.bind(zuuluu)();
            tangon = zuuluu.id;
            tangon = oscard.bind(golfie)(report, tangon);
            oscard = tangon.groups;
            report = oscard.forEach;
            tangon = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    tangon = _closure2_slot0;
                    zuuluu = '@everyone';
                    zuuluu = zuuluu !== tangon;
                    if(!zuuluu) { _fun00010_ip = 45; continue _fun00009 }
 23:
                    report = entity.id;
                    tangon = _closure1_slot6;
                    tangon = tangon.OFFLINE;
                    zuuluu = report === tangon;
 45:
                    if(zuuluu) { _fun00010_ip = 65; continue _fun00009 }
 48:
                    zuuluu = _closure2_slot1;
                    entity = entity.count;
                    entity = zuuluu + entity;
                    _closure2_slot1 = entity;
 65:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
            entity = _closure2_slot1;
            _fun00008_ip = 117; continue _fun00007;
 94:
            zuuluu = zuuluu.memberCount;
            tangon = null;
            tangon = tangon != zuuluu;
            michal = 0;
            if(!tangon) { _fun00008_ip = 114; continue _fun00007 }
 111:
            michal = zuuluu;
 114:
            entity = michal;
 117:
            return entity;
        }
    };
    var _closure1_slot10 = golfie;
    entity = function(argFoo) { // Original name: parsedItemUsesEveryoneRole
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            michal = entity.content;
            zuuluu = 'string';
            michal = typeof michal;
            if(!(zuuluu !== michal)) { _fun00012_ip = 123; continue _fun00011 }
 19:
            michal = global;
            tangon = michal.Array;
            zuuluu = tangon.isArray;
            michal = entity.content;
            michal = zuuluu.bind(tangon)(michal);
            if(!michal) { _fun00012_ip = 189; continue _fun00011 }
 48:
            zuuluu = _closure1_slot8;
            michal = entity.content;
            golfie = undefined;
            oscard = zuuluu.bind(golfie)(michal);
            tangon = oscard.bind(golfie)();
            zuuluu = tangon.done;
            michal = null;
            report = tangon;
            if(zuuluu) { _fun00012_ip = 121; continue _fun00011 }
 84:
            tangon = _closure1_slot11;
            zuuluu = report.value;
            zuuluu = tangon.bind(golfie)(zuuluu);
            if(!(michal == zuuluu)) { _fun00012_ip = 119; continue _fun00011 }
 102:
            verify = oscard.bind(golfie)();
            tangon = verify.done;
            report = verify;
            if(tangon) { _fun00012_ip = 121; continue _fun00011 }
 117:
            _fun00012_ip = 84; continue _fun00011;
 119:
            return zuuluu;
 121:
            return michal;
 123:
            zuuluu = entity.type;
            michal = 'inlineCode';
            if(!(michal !== zuuluu)) { _fun00012_ip = 217; continue _fun00011 }
 136:
            zuuluu = entity.type;
            michal = 'codeBlock';
            if(!(michal !== zuuluu)) { _fun00012_ip = 217; continue _fun00011 }
 149:
            oscard = entity.content;
            entity = null;
            michal = entity == oscard;
            tangon = undefined;
            zuuluu = undefined;
            if(michal) { _fun00012_ip = 185; continue _fun00011 }
 167:
            report = oscard.match;
            michal = _closure1_slot7;
            zuuluu = report.bind(oscard)(michal);
 185:
            if(!(entity == zuuluu)) { _fun00012_ip = 193; continue _fun00011 }
 189:
            entity = null;
            return entity;
 193:
            michal = _closure1_slot2;
            entity = 1;
            michal = michal.bind(tangon)(zuuluu, entity);
            entity = 0;
            entity = michal[entity];
            return entity;
 217:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = verify.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.Permissions;
    var _closure1_slot5 = verify;
    option = option.StatusTypes;
    var _closure1_slot6 = option;
    verify = michal.RegExp;
    michal = verify.prototype;
    option = Object.create(michal, {constructor: {value: verify}});
    backup = /@(:?everyone|here)/;
    kiloes = option;
    michal = new kiloes[verify](backup, foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot7 = michal;
    michal = {};
    option = function(argFoo, argBar) { // Original name: shouldShowEveryoneGuard
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argBar;
            entity = report.getGuildId;
            oscard = entity.bind(report)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 4;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = 'isGuildChannel with null guildId';
            entity = zuuluu.bind(tangon)(oscard, entity);
            zuuluu = _closure1_slot10;
            entity = argFoo;
            zuuluu = zuuluu.bind(tangon)(entity, report);
            entity = 30;
            entity = zuuluu > entity;
            if(!entity) { _fun00014_ip = 99; continue _fun00013 }
 73:
            tangon = _closure1_slot4;
            zuuluu = tangon.can;
            michal = _closure1_slot5;
            michal = michal.MENTION_EVERYONE;
            entity = zuuluu.bind(tangon)(michal, report);
 99:
            return entity;
        }
    };
    michal['shouldShowEveryoneGuard'] = option;
    michal['everyoneMemberCount'] = golfie;
    tangon = function(argFoo, argBar) { // Original name: extractEveryoneRole
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = _closure1_slot8;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 5;
            entity = tangon[entity];
            oscard = undefined;
            report = zuuluu.bind(oscard)(entity);
            tangon = report.parsePreprocessor;
            zuuluu = argBar;
            entity = argFoo;
            entity = tangon.bind(report)(zuuluu, entity);
            report = michal.bind(oscard)(entity);
            zuuluu = report.bind(oscard)();
            michal = zuuluu.done;
            entity = null;
            tangon = zuuluu;
            if(michal) { _fun00016_ip = 106; continue _fun00015 }
 69:
            zuuluu = _closure1_slot11;
            michal = tangon.value;
            michal = zuuluu.bind(oscard)(michal);
            if(!(entity == michal)) { _fun00016_ip = 104; continue _fun00015 }
 87:
            option = report.bind(oscard)();
            zuuluu = option.done;
            tangon = option;
            if(zuuluu) { _fun00016_ip = 106; continue _fun00015 }
 102:
            _fun00016_ip = 69; continue _fun00015;
 104:
            return michal;
 106:
            return entity;
        }
    };
    michal['extractEveryoneRole'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/MentionGuardUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();