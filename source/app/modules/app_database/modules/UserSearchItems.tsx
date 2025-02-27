// app/modules/app_database/modules/UserSearchItems.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
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
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
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
            verify = _closure1_slot14;
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
            golfie = _closure1_slot14;
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RelationshipTypes;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'UserSearchItems';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot11 = tangon;
    tangon = false;
    var _closure1_slot12 = tangon;
    michal = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: UserSearchItems
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot4;
            michal = _closure2_slot1;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            michal = {};
            report = zuuluu.handlePostConnectionOpen;
            michal['POST_CONNECTION_OPEN'] = report;
            tangon = function(argFoo, argBar) { // Original name: WRITE_CACHES
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleWriteCaches;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['WRITE_CACHES'] = tangon;
            zuuluu['actions'] = michal;
            return entity;
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'getAll';
        report['key'] = michal;
        golfie = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 171; continue _fun00007 }
 10:
                    zuuluu = global;
                    tangon = zuuluu.performance;
                    michal = tangon.now;
                    golfie = michal.bind(tangon)();
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 9;
                    report = report[michal];
                    michal = undefined;
                    report = oscard.bind(michal)(report);
                    michal = report.userSearchItems;
                    report = michal.bind(report)();
                    michal = null;
                    if(!(michal != report)) { _fun00008_ip = 164; continue _fun00007 }
 68:
                    michal = report.getMany;
                    michal = michal.bind(report)();
                    SaveGenerator(address=82);
 80:
                    return michal;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 161; continue _fun00007 }
 88:
                    oscard = zuuluu.performance;
                    report = oscard.now;
                    oscard = report.bind(oscard)();
                    report = _closure1_slot11;
                    tangon = report.log;
                    backup = oscard - golfie;
                    romeon = michal.length;
                    zuuluu = zuuluu.HermesInternal;
                    option = zuuluu.concat;
                    kiloes = 'asynchronously loaded in ';
                    foxtra = 'ms (userSearchItems: ';
                    yankee = ')';
                    zuuluu = kiloes[option](backup, foxtra, romeon, yankee, offset);
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 161:
                    return michal;
 164:
                    michal = new Array(0);
                    return michal;
 171:
                    return entity;
                }
            };
            return entity;
        };
        entity = golfie.bind(michal)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: getAll
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'resetInMemoryState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'shouldUseCache';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot12;
            entity = !entity;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handlePostConnectionOpen';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = true;
            _closure1_slot12 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleWriteCaches';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = {};
                tangon = _closure1_slot13;
                zuuluu = _closure1_slot8;
                entity = zuuluu.getFriendIDs;
                zuuluu = entity.bind(zuuluu)();
                entity = undefined;
                option = tangon.bind(entity)(zuuluu);
                tangon = option.bind(entity)();
                zuuluu = tangon.done;
                yankee = null;
                verify = 10;
                golfie = tangon;
                oscard = undefined;
                tangon = undefined;
                if(zuuluu) { _fun00010_ip = 231; continue _fun00009 }
 57:
                backup = golfie.value;
                romeon = _closure1_slot9;
                zuuluu = romeon.getUser;
                kiloes = zuuluu.bind(romeon)(backup);
                if(!(yankee != kiloes)) { _fun00010_ip = 213; continue _fun00009 }
 84:
                romeon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[verify];
                romeon = romeon.bind(entity)(zuuluu);
                zuuluu = romeon.getNames;
                zuuluu = zuuluu.bind(romeon)(kiloes);
                romeon = zuuluu.names;
                zuuluu = zuuluu.nick;
                foxtra = {};
                foxtra['id'] = backup;
                sizing = _closure1_slot10;
                sizing = sizing.FRIEND;
                foxtra['type'] = sizing;
                foxtra['user'] = kiloes;
                foxtra['names'] = romeon;
                foxtra['nick'] = zuuluu;
                romeon = _closure1_slot7;
                zuuluu = romeon.getUserAffinity;
                zuuluu = zuuluu.bind(romeon)(backup);
                kiloes = yankee == zuuluu;
                romeon = undefined;
                if(kiloes) { _fun00010_ip = 186; continue _fun00009 }
 180:
                romeon = zuuluu.affinity;
 186:
                sizing = yankee != romeon;
                kiloes = 0;
                if(!sizing) { _fun00010_ip = 198; continue _fun00009 }
 195:
                kiloes = romeon;
 198:
                foxtra['affinity'] = kiloes;
                report[backup] = foxtra;
                oscard = romeon;
                tangon = zuuluu;
 213:
                romeon = option.bind(entity)();
                zuuluu = romeon.done;
                golfie = romeon;
                if(!zuuluu) { _fun00010_ip = 57; continue _fun00009 }
 231:
                tangon = _closure1_slot13;
                oscard = _closure1_slot6;
                zuuluu = oscard.getGameRelationships;
                oscard = zuuluu.bind(oscard)();
                zuuluu = oscard.values;
                golfie = zuuluu.bind(oscard)();
                oscard = golfie.filter;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.type;
                    entity = _closure1_slot10;
                    entity = entity.FRIEND;
                    entity = michal === entity;
                    return entity;
                };
                zuuluu = oscard.bind(golfie)(zuuluu);
                option = tangon.bind(entity)(zuuluu);
                tangon = option.bind(entity)();
                zuuluu = tangon.done;
                golfie = tangon;
                oscard = undefined;
                tangon = undefined;
                if(zuuluu) { _fun00010_ip = 496; continue _fun00009 }
 302:
                zuuluu = golfie.value;
                backup = _closure1_slot9;
                foxtra = backup.getUser;
                romeon = zuuluu.id;
                sizing = foxtra.bind(backup)(romeon);
                if(!(yankee != sizing)) { _fun00010_ip = 478; continue _fun00009 }
 334:
                foxtra = _closure1_slot0;
                romeon = _closure1_slot2;
                romeon = romeon[verify];
                foxtra = foxtra.bind(entity)(romeon);
                romeon = foxtra.getNames;
                romeon = romeon.bind(foxtra)(sizing);
                kiloes = romeon.names;
                romeon = romeon.nick;
                backup = zuuluu.id;
                foxtra = {};
                output = zuuluu.id;
                foxtra['id'] = output;
                output = _closure1_slot10;
                output = output.FRIEND;
                foxtra['type'] = output;
                foxtra['user'] = sizing;
                foxtra['names'] = kiloes;
                foxtra['nick'] = romeon;
                kiloes = _closure1_slot7;
                romeon = kiloes.getUserAffinity;
                zuuluu = zuuluu.id;
                zuuluu = romeon.bind(kiloes)(zuuluu);
                kiloes = yankee == zuuluu;
                romeon = undefined;
                if(kiloes) { _fun00010_ip = 451; continue _fun00009 }
 445:
                romeon = zuuluu.affinity;
 451:
                sizing = yankee != romeon;
                kiloes = 0;
                if(!sizing) { _fun00010_ip = 463; continue _fun00009 }
 460:
                kiloes = romeon;
 463:
                foxtra['affinity'] = kiloes;
                report[backup] = foxtra;
                oscard = romeon;
                tangon = zuuluu;
 478:
                romeon = option.bind(entity)();
                zuuluu = romeon.done;
                golfie = romeon;
                if(!zuuluu) { _fun00010_ip = 302; continue _fun00009 }
 496:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 9;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.userSearchItemsTransaction;
                michal = argFoo;
                tangon = zuuluu.bind(tangon)(michal);
                michal = tangon.delete;
                michal = michal.bind(tangon)();
                michal = global;
                zuuluu = michal.Object;
                michal = zuuluu.values;
                zuuluu = michal.bind(zuuluu)(report);
                michal = tangon.putAll;
                michal = michal.bind(tangon)(zuuluu);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/modules/UserSearchItems.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();