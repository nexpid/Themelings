// app/utils/AutocompleteUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = foxtra;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = offset;
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
            verify = _closure1_slot53;
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
            golfie = _closure1_slot53;
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
    var _closure1_slot52 = entity;
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
    var _closure1_slot53 = entity;
    report = function() { // Original name: calculateScore
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[0];
            zuuluu = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            michal = 0;
 14:
            entity = 1000;
            michal = entity * michal;
            entity = null;
            tangon = entity != zuuluu;
            entity = 1;
            if(!tangon) { _fun00008_ip = 39; continue _fun00007 }
 36:
            entity = zuuluu;
 39:
            entity = michal * entity;
            return entity;
        }
    };
    var _closure1_slot54 = report;
    entity = function(argFoo, argBar) { // Original name: getMatchValue
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argBar;
            golfie = arguments[2];
            michal = argFoo;
            report = oscard.exactQuery;
            tangon = oscard.containQuery;
            entity = oscard.queryLower;
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00010_ip = 35; continue _fun00009 }
 33:
            golfie = true;
 35:
            zuuluu = golfie;
 38: // try_start_0
            option = report;
            golfie = option.test;
            report = michal;
            report = golfie.bind(option)(report);
            if(report) { _fun00010_ip = 156; continue _fun00009 }
 57:
            golfie = tangon;
            report = golfie.test;
            tangon = michal;
            tangon = report.bind(golfie)(tangon);
            if(tangon) { _fun00010_ip = 151; continue _fun00009 }
 76:
            golfie = entity;
            report = michal;
            tangon = function(argFoo, argBar) { // Original name: multiTokenMatch
                tangon = argFoo;
                michal = argBar;
                var _closure3_slot0 = michal;
                zuuluu = tangon.split;
                michal = /(?:,| )+/;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.every;
                entity = function(argFoo) {
                    entity = global;
                    tangon = entity.RegExp;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 29;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.escape;
                    entity = argFoo;
                    oscard = michal.bind(zuuluu)(entity);
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    report = 'i';
                    golfie = michal;
                    entity = new golfie[tangon](oscard, report, tangon);
                    zuuluu = entity instanceof Object ? entity : michal;
                    michal = zuuluu.test;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(oscard)(golfie, report);
            if(tangon) { _fun00010_ip = 146; continue _fun00009 }
 98:
            if(!zuuluu) { _fun00010_ip = 139; continue _fun00009 }
 101:
            tangon = _closure1_slot1;
            report = _closure1_slot3;
            zuuluu = 30;
            zuuluu = report[zuuluu];
            report = tangon.bind(oscard)(zuuluu);
            tangon = entity;
            zuuluu = michal;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            if(zuuluu) { _fun00010_ip = 141; continue _fun00009 }
 139: // try_end0
            _fun00010_ip = 207; continue _fun00009;
 141:
            zuuluu = 1;
            return zuuluu;
 146:
            zuuluu = 3;
            return zuuluu;
 151:
            zuuluu = 5;
            return zuuluu;
 156: // try_start_1
            zuuluu = michal;
            michal = zuuluu.toLocaleLowerCase;
            zuuluu = michal.bind(zuuluu)();
            michal = entity;
            entity = 7;
            if(!(zuuluu === michal)) { _fun00010_ip = 186; continue _fun00009 }
 179:
            entity = _closure1_slot43;
 186: // try_end1
            return entity;
 188: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=2);
            michal = _closure1_slot42;
            entity = michal.error;
            entity = entity.bind(michal)(zuuluu);
 207:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot55 = entity;
    entity = function(argFoo) { // Original name: isValidGuildMember
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            zuuluu = null;
            tangon = zuuluu == michal;
            entity = undefined;
            if(tangon) { _fun00012_ip = 20; continue _fun00011 }
 14:
            entity = michal.joinedAt;
 20:
            entity = zuuluu != entity;
            if(!entity) { _fun00012_ip = 36; continue _fun00011 }
 27:
            michal = michal.isPending;
            entity = !michal;
 36:
            return entity;
        }
    };
    var _closure1_slot56 = entity;
    entity = function(argFoo) { // Original name: queryMemberList
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            variable40 = entity.query;
            variable39 = entity.members;
            michal = entity.limit;
            variable38 = entity.filter;
            variable37 = entity.allowSnowflake;
            variable36 = entity.boosters;
            tangon = _closure1_slot32;
            entity = tangon.getUsers;
            quebec = entity.bind(tangon)();
            tangon = _closure1_slot31;
            entity = tangon.getGuildId;
            equals = entity.bind(tangon)();
            entity = variable40.toLocaleLowerCase;
            whisks = entity.bind(variable40)();
            tangon = _closure1_slot0;
            entity = _closure1_slot3;
            limora = 31;
            entity = entity[limora];
            verify = undefined;
            tangon = tangon.bind(verify)(entity);
            entity = tangon.normalize;
            sierra = entity.bind(tangon)(whisks);
            report = new Array(0);
            option = new Array(0);
            status = variable39.length;
            golfie = 0;
            variable41 = golfie < status;
            target = 1;
            papara = null;
            cntext = 30;
            record = 50;
            config = 32;
            sequen = 0;
            vacuum = 0;
            ctrled = undefined;
            source = undefined;
            update = undefined;
            echoed = undefined;
            result = undefined;
            output = undefined;
            sizing = undefined;
            kiloes = undefined;
            backup = undefined;
            foxtra = undefined;
            romeon = undefined;
            yankee = undefined;
            offset = undefined;
            oscard = undefined;
            tangon = undefined;
            entity = undefined;
            if(!variable41) { _fun00014_ip = 1854; continue _fun00013 }
 186:
            variable41 = variable39[sequen];
            variable42 = _closure1_slot17;
            variable42 = variable41 instanceof variable42;
            if(variable42) { _fun00014_ip = 240; continue _fun00013 }
 201:
            variable42 = variable41.nick;
            variable43 = papara == variable42;
            variable65 = undefined;
            if(variable43) { _fun00014_ip = 226; continue _fun00013 }
 216:
            variable43 = variable42.toLocaleLowerCase;
            variable65 = variable43.bind(variable42)();
 226:
            variable43 = variable41.userId;
            variable43 = quebec[variable43];
            variable55 = variable42;
            _fun00014_ip = 292; continue _fun00013;
 240:
            variable45 = _closure1_slot23;
            variable44 = variable45.getNick;
            variable42 = variable41.id;
            variable44 = variable44.bind(variable45)(equals, variable42);
            variable45 = papara == variable44;
            variable42 = undefined;
            if(variable45) { _fun00014_ip = 280; continue _fun00013 }
 270:
            variable45 = variable44.toLocaleLowerCase;
            variable42 = variable45.bind(variable44)();
 280:
            variable65 = variable42;
            ctrled = variable44;
            variable55 = source;
            variable43 = variable41;
 292:
            variable42 = _closure1_slot1;
            variable41 = _closure1_slot3;
            variable41 = variable41[config];
            variable42 = variable42.bind(verify)(variable41);
            variable41 = variable42.getGlobalName;
            variable42 = variable41.bind(variable42)(variable43);
            variable41 = papara == variable42;
            variable72 = variable43;
            variable64 = undefined;
            if(variable41) { _fun00014_ip = 342; continue _fun00013 }
 332:
            variable41 = variable42.toLocaleLowerCase;
            variable64 = variable41.bind(variable42)();
 342:
            variable56 = vacuum;
            variable54 = update;
            variable53 = echoed;
            variable52 = result;
            variable51 = output;
            variable50 = sizing;
            variable49 = kiloes;
            variable48 = backup;
            variable47 = foxtra;
            variable46 = romeon;
            variable45 = yankee;
            variable44 = offset;
            variable43 = oscard;
            variable42 = tangon;
            variable41 = entity;
            if(!(papara != variable72)) { _fun00014_ip = 1795; continue _fun00013 }
 394:
            if(!(papara != variable38)) { _fun00014_ip = 454; continue _fun00013 }
 398:
            variable57 = variable38.bind(verify)(variable72);
            variable56 = vacuum;
            variable54 = update;
            variable53 = echoed;
            variable52 = result;
            variable51 = output;
            variable50 = sizing;
            variable49 = kiloes;
            variable48 = backup;
            variable47 = foxtra;
            variable46 = romeon;
            variable45 = yankee;
            variable44 = offset;
            variable43 = oscard;
            variable42 = tangon;
            variable41 = entity;
            if(!variable57) { _fun00014_ip = 1795; continue _fun00013 }
 454:
            variable58 = variable72.username;
            variable57 = variable58.toLocaleLowerCase;
            variable63 = variable57.bind(variable58)();
            variable58 = _closure1_slot0;
            variable57 = _closure1_slot3;
            variable59 = variable57[limora];
            variable60 = variable58.bind(verify)(variable59);
            variable59 = variable60.stripDiacritics;
            variable62 = variable59.bind(variable60)(variable63);
            variable57 = variable57[limora];
            variable58 = variable58.bind(verify)(variable57);
            variable57 = variable58.normalize;
            variable61 = variable57.bind(variable58)(variable62);
            variable57 = papara != variable65;
            variable60 = null;
            if(!variable57) { _fun00014_ip = 554; continue _fun00013 }
 526:
            variable58 = _closure1_slot0;
            variable57 = _closure1_slot3;
            variable57 = variable57[limora];
            variable58 = variable58.bind(verify)(variable57);
            variable57 = variable58.stripDiacritics;
            variable60 = variable57.bind(variable58)(variable65);
 554:
            variable57 = papara != variable60;
            variable59 = null;
            if(!variable57) { _fun00014_ip = 591; continue _fun00013 }
 563:
            variable58 = _closure1_slot0;
            variable57 = _closure1_slot3;
            variable57 = variable57[limora];
            variable58 = variable58.bind(verify)(variable57);
            variable57 = variable58.normalize;
            variable59 = variable57.bind(variable58)(variable60);
 591:
            variable57 = papara != variable64;
            variable58 = null;
            if(!variable57) { _fun00014_ip = 628; continue _fun00013 }
 600:
            variable66 = _closure1_slot0;
            variable57 = _closure1_slot3;
            variable57 = variable57[limora];
            variable66 = variable66.bind(verify)(variable57);
            variable57 = variable66.stripDiacritics;
            variable58 = variable57.bind(variable66)(variable64);
 628:
            variable66 = papara != variable58;
            variable57 = null;
            if(!variable66) { _fun00014_ip = 665; continue _fun00013 }
 637:
            variable67 = _closure1_slot0;
            variable66 = _closure1_slot3;
            variable66 = variable66[limora];
            variable67 = variable67.bind(verify)(variable66);
            variable66 = variable67.normalize;
            variable57 = variable66.bind(variable67)(variable58);
 665:
            if(!variable37) { _fun00014_ip = 683; continue _fun00013 }
 668:
            variable67 = variable72.id;
            variable66 = update;
            if(!(variable40 !== variable67)) { _fun00014_ip = 1635; continue _fun00013 }
 683:
            variable68 = variable63.substring;
            variable67 = whisks.length;
            variable67 = variable68.bind(variable63)(golfie, variable67);
            variable66 = update;
            if(!(variable67 !== whisks)) { _fun00014_ip = 1635; continue _fun00013 }
 710:
            variable68 = variable62.substring;
            variable67 = whisks.length;
            variable67 = variable68.bind(variable62)(golfie, variable67);
            variable66 = update;
            if(!(variable67 !== whisks)) { _fun00014_ip = 1635; continue _fun00013 }
 737:
            variable68 = papara == variable65;
            variable67 = undefined;
            if(variable68) { _fun00014_ip = 763; continue _fun00013 }
 746:
            variable69 = variable65.substring;
            variable68 = whisks.length;
            variable67 = variable69.bind(variable65)(golfie, variable68);
 763:
            variable66 = variable65;
            if(!(variable67 !== whisks)) { _fun00014_ip = 1635; continue _fun00013 }
 773:
            variable68 = papara == variable60;
            variable67 = undefined;
            if(variable68) { _fun00014_ip = 799; continue _fun00013 }
 782:
            variable69 = variable60.substring;
            variable68 = whisks.length;
            variable67 = variable69.bind(variable60)(golfie, variable68);
 799:
            variable66 = variable65;
            if(!(variable67 !== whisks)) { _fun00014_ip = 1635; continue _fun00013 }
 809:
            variable68 = papara == variable64;
            variable67 = undefined;
            if(variable68) { _fun00014_ip = 835; continue _fun00013 }
 818:
            variable69 = variable64.substring;
            variable68 = whisks.length;
            variable67 = variable69.bind(variable64)(golfie, variable68);
 835:
            variable66 = variable65;
            if(!(variable67 !== whisks)) { _fun00014_ip = 1635; continue _fun00013 }
 845:
            variable68 = papara == variable58;
            variable67 = undefined;
            if(variable68) { _fun00014_ip = 871; continue _fun00013 }
 854:
            variable69 = variable58.substring;
            variable68 = whisks.length;
            variable67 = variable69.bind(variable58)(golfie, variable68);
 871:
            variable66 = variable65;
            if(!(variable67 !== whisks)) { _fun00014_ip = 1635; continue _fun00013 }
 881:
            variable68 = variable61.substring;
            variable67 = sierra.length;
            variable67 = variable68.bind(variable61)(golfie, variable67);
            if(!(variable67 !== sierra)) { _fun00014_ip = 1471; continue _fun00013 }
 905:
            variable68 = papara == variable59;
            variable67 = undefined;
            if(variable68) { _fun00014_ip = 931; continue _fun00013 }
 914:
            variable69 = variable59.substring;
            variable68 = sierra.length;
            variable67 = variable69.bind(variable59)(golfie, variable68);
 931:
            if(!(variable67 !== sierra)) { _fun00014_ip = 1471; continue _fun00013 }
 938:
            variable68 = papara == variable57;
            variable67 = undefined;
            if(variable68) { _fun00014_ip = 964; continue _fun00013 }
 947:
            variable69 = variable57.substring;
            variable68 = sierra.length;
            variable67 = variable69.bind(variable57)(golfie, variable68);
 964:
            if(!(variable67 !== sierra)) { _fun00014_ip = 1471; continue _fun00013 }
 971:
            variable56 = vacuum;
            variable54 = variable65;
            variable53 = echoed;
            variable52 = result;
            variable51 = variable63;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = offset;
            variable43 = oscard;
            variable42 = tangon;
            variable41 = entity;
            if(!(vacuum < record)) { _fun00014_ip = 1795; continue _fun00013 }
 1023:
            variable68 = _closure1_slot1;
            variable67 = _closure1_slot3;
            variable67 = variable67[cntext];
            variable67 = variable68.bind(verify)(variable67);
            variable67 = variable67.bind(verify)(whisks, variable62);
            if(variable67) { _fun00014_ip = 1306; continue _fun00013 }
 1052:
            variable68 = _closure1_slot1;
            variable67 = _closure1_slot3;
            variable67 = variable67[cntext];
            variable67 = variable68.bind(verify)(variable67);
            variable67 = variable67.bind(verify)(sierra, variable61);
            if(variable67) { _fun00014_ip = 1306; continue _fun00013 }
 1081:
            if(!(papara != variable60)) { _fun00014_ip = 1114; continue _fun00013 }
 1085:
            variable68 = _closure1_slot1;
            variable67 = _closure1_slot3;
            variable67 = variable67[cntext];
            variable67 = variable68.bind(verify)(variable67);
            variable67 = variable67.bind(verify)(whisks, variable60);
            if(variable67) { _fun00014_ip = 1306; continue _fun00013 }
 1114:
            if(!(papara != variable59)) { _fun00014_ip = 1147; continue _fun00013 }
 1118:
            variable68 = _closure1_slot1;
            variable67 = _closure1_slot3;
            variable67 = variable67[cntext];
            variable67 = variable68.bind(verify)(variable67);
            variable67 = variable67.bind(verify)(sierra, variable59);
            if(variable67) { _fun00014_ip = 1306; continue _fun00013 }
 1147:
            if(!(papara != variable58)) { _fun00014_ip = 1180; continue _fun00013 }
 1151:
            variable68 = _closure1_slot1;
            variable67 = _closure1_slot3;
            variable67 = variable67[cntext];
            variable67 = variable68.bind(verify)(variable67);
            variable67 = variable67.bind(verify)(whisks, variable58);
            if(variable67) { _fun00014_ip = 1306; continue _fun00013 }
 1180:
            variable56 = vacuum;
            variable54 = variable65;
            variable53 = echoed;
            variable52 = result;
            variable51 = variable63;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = offset;
            variable43 = oscard;
            variable42 = tangon;
            variable41 = entity;
            if(!(papara != variable57)) { _fun00014_ip = 1795; continue _fun00013 }
 1232:
            variable68 = _closure1_slot1;
            variable67 = _closure1_slot3;
            variable67 = variable67[cntext];
            variable67 = variable68.bind(verify)(variable67);
            variable67 = variable67.bind(verify)(sierra, variable57);
            variable56 = vacuum;
            variable54 = variable65;
            variable53 = echoed;
            variable52 = result;
            variable51 = variable63;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = offset;
            variable43 = oscard;
            variable42 = tangon;
            variable41 = entity;
            if(!variable67) { _fun00014_ip = 1795; continue _fun00013 }
 1306:
            variable70 = option.push;
            variable69 = {};
            variable67 = _closure1_slot39;
            variable67 = variable67.USER;
            variable69['type'] = variable67;
            variable69['record'] = variable72;
            variable68 = _closure1_slot54;
            variable71 = papara == variable36;
            variable67 = undefined;
            if(variable71) { _fun00014_ip = 1354; continue _fun00013 }
 1345:
            variable71 = variable72.id;
            variable67 = variable36[variable71];
 1354:
            variable67 = variable68.bind(verify)(target, variable67);
            variable69['score'] = variable67;
            variable68 = variable65;
            if(!(papara != variable64)) { _fun00014_ip = 1375; continue _fun00013 }
 1372:
            variable68 = variable64;
 1375:
            variable67 = variable63;
            if(!(papara != variable68)) { _fun00014_ip = 1385; continue _fun00013 }
 1382:
            variable67 = variable68;
 1385:
            variable69['comparator'] = variable67;
            variable67 = variable60;
            if(!(papara != variable58)) { _fun00014_ip = 1400; continue _fun00013 }
 1397:
            variable67 = variable58;
 1400:
            variable71 = variable62;
            if(!(papara != variable67)) { _fun00014_ip = 1410; continue _fun00013 }
 1407:
            variable71 = variable67;
 1410:
            variable69['sortable'] = variable71;
            variable69 = variable70.bind(option)(variable69);
            variable56 = vacuum + target;
            variable54 = variable65;
            variable53 = echoed;
            variable52 = result;
            variable51 = variable63;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = offset;
            variable43 = oscard;
            variable42 = variable68;
            variable41 = variable67;
            _fun00014_ip = 1795; continue _fun00013;
 1471:
            variable70 = report.push;
            variable69 = {};
            variable67 = _closure1_slot39;
            variable67 = variable67.USER;
            variable69['type'] = variable67;
            variable69['record'] = variable72;
            variable68 = _closure1_slot54;
            variable71 = papara == variable36;
            variable67 = undefined;
            if(variable71) { _fun00014_ip = 1519; continue _fun00013 }
 1510:
            variable71 = variable72.id;
            variable67 = variable36[variable71];
 1519:
            variable67 = variable68.bind(verify)(target, variable67);
            variable69['score'] = variable67;
            variable68 = variable65;
            if(!(papara != variable64)) { _fun00014_ip = 1540; continue _fun00013 }
 1537:
            variable68 = variable64;
 1540:
            variable67 = variable63;
            if(!(papara != variable68)) { _fun00014_ip = 1550; continue _fun00013 }
 1547:
            variable67 = variable68;
 1550:
            variable69['comparator'] = variable67;
            variable67 = variable60;
            if(!(papara != variable58)) { _fun00014_ip = 1565; continue _fun00013 }
 1562:
            variable67 = variable58;
 1565:
            variable71 = variable62;
            if(!(papara != variable67)) { _fun00014_ip = 1575; continue _fun00013 }
 1572:
            variable71 = variable67;
 1575:
            variable69['sortable'] = variable71;
            variable69 = variable70.bind(report)(variable69);
            variable56 = vacuum;
            variable54 = variable65;
            variable53 = echoed;
            variable52 = result;
            variable51 = variable63;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable68;
            variable43 = variable67;
            variable42 = tangon;
            variable41 = entity;
            _fun00014_ip = 1795; continue _fun00013;
 1635:
            variable68 = report.push;
            variable67 = {};
            variable69 = _closure1_slot39;
            variable69 = variable69.USER;
            variable67['type'] = variable69;
            variable67['record'] = variable72;
            variable71 = _closure1_slot54;
            variable70 = _closure1_slot43;
            variable73 = papara == variable36;
            variable69 = undefined;
            if(variable73) { _fun00014_ip = 1687; continue _fun00013 }
 1678:
            variable72 = variable72.id;
            variable69 = variable36[variable72];
 1687:
            variable69 = variable71.bind(verify)(variable70, variable69);
            variable67['score'] = variable69;
            if(!(papara != variable64)) { _fun00014_ip = 1705; continue _fun00013 }
 1702:
            variable65 = variable64;
 1705:
            variable64 = variable63;
            if(!(papara != variable65)) { _fun00014_ip = 1715; continue _fun00013 }
 1712:
            variable64 = variable65;
 1715:
            variable67['comparator'] = variable64;
            variable64 = variable60;
            if(!(papara != variable58)) { _fun00014_ip = 1730; continue _fun00013 }
 1727:
            variable64 = variable58;
 1730:
            variable69 = variable62;
            if(!(papara != variable64)) { _fun00014_ip = 1740; continue _fun00013 }
 1737:
            variable69 = variable64;
 1740:
            variable67['sortable'] = variable69;
            variable67 = variable68.bind(report)(variable67);
            variable56 = vacuum;
            variable54 = variable66;
            variable53 = variable65;
            variable52 = variable64;
            variable51 = variable63;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = offset;
            variable43 = oscard;
            variable42 = tangon;
            variable41 = entity;
 1795:
            sequen = sequen + target;
            vacuum = variable56;
            update = variable54;
            echoed = variable53;
            result = variable52;
            output = variable51;
            sizing = variable50;
            kiloes = variable49;
            backup = variable48;
            foxtra = variable47;
            romeon = variable46;
            yankee = variable45;
            offset = variable44;
            oscard = variable43;
            tangon = variable42;
            entity = variable41;
            source = variable55;
            if(sequen < status) { _fun00014_ip = 186; continue _fun00013 }
 1854:
            tangon = report.sort;
            oscard = _closure1_slot1;
            entity = _closure1_slot3;
            offset = 33;
            entity = entity[offset];
            entity = oscard.bind(verify)(entity);
            entity = tangon.bind(report)(entity);
            tangon = report.length;
            entity = report;
            if(!(tangon < michal)) { _fun00014_ip = 1974; continue _fun00013 }
 1897:
            tangon = option.sort;
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[offset];
            zuuluu = oscard.bind(verify)(zuuluu);
            zuuluu = tangon.bind(option)(zuuluu);
            tangon = report.concat;
            oscard = option.slice;
            zuuluu = global;
            offset = zuuluu.Math;
            verify = offset.max;
            zuuluu = report.length;
            zuuluu = michal - zuuluu;
            zuuluu = verify.bind(offset)(golfie, zuuluu);
            zuuluu = oscard.bind(option)(golfie, zuuluu);
            entity = tangon.bind(report)(zuuluu);
 1974:
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00014_ip = 1989; continue _fun00013 }
 1983:
            entity['length'] = michal;
 1989:
            return entity;
        }
    };
    var _closure1_slot57 = entity;
    entity = function(argFoo) { // Original name: getPriorityForStickerMetadataType
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            report = 34;
            zuuluu = zuuluu[report];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.StickerMetadataTypes;
            zuuluu = zuuluu.STICKER_NAME;
            if(!(zuuluu !== michal)) { _fun00016_ip = 199; continue _fun00015 }
 47:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[report];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.StickerMetadataTypes;
            zuuluu = zuuluu.CORRELATED_EMOJI;
            if(!(zuuluu !== michal)) { _fun00016_ip = 194; continue _fun00015 }
 80:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[report];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.StickerMetadataTypes;
            zuuluu = zuuluu.TAG;
            if(!(zuuluu !== michal)) { _fun00016_ip = 189; continue _fun00015 }
 113:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[report];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.StickerMetadataTypes;
            zuuluu = zuuluu.GUILD_NAME;
            if(!(zuuluu !== michal)) { _fun00016_ip = 184; continue _fun00015 }
 146:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerMetadataTypes;
            entity = entity.PACK_NAME;
            if(!(entity !== michal)) { _fun00016_ip = 184; continue _fun00015 }
 179:
            entity = 1;
            return entity;
 184:
            entity = 8;
            return entity;
 189:
            entity = 1;
            return entity;
 194:
            entity = 6;
            return entity;
 199:
            entity = 11;
            return entity;
        }
    };
    var _closure1_slot58 = entity;
    entity = function(argFoo, argBar) { // Original name: isPartialTypeMatch
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = _closure1_slot20;
            entity = argFoo;
            entity = entity === zuuluu;
            if(!entity) { _fun00018_ip = 31; continue _fun00017 }
 17:
            tangon = _closure1_slot14;
            zuuluu = undefined;
            michal = argBar;
            entity = tangon.bind(zuuluu)(michal);
 31:
            return entity;
        }
    };
    var _closure1_slot59 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getBestScore
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            backup = argFoo;
            zuuluu = argBar;
            foxtra = argBaz;
            entity = _closure1_slot52;
            yankee = undefined;
            offset = entity.bind(yankee)(zuuluu);
            entity = offset.bind(yankee)();
            oscard = entity.done;
            michal = 0;
            tangon = null;
            verify = entity;
            option = 0;
            golfie = null;
            entity = 0;
            report = null;
            if(oscard) { _fun00020_ip = 97; continue _fun00019 }
 50:
            oscard = verify.value;
            kiloes = _closure1_slot55;
            kiloes = kiloes.bind(yankee)(backup, oscard, foxtra);
            if(!(kiloes > option)) { _fun00020_ip = 76; continue _fun00019 }
 70:
            option = kiloes;
            golfie = oscard;
 76:
            output = offset.bind(yankee)();
            oscard = output.done;
            verify = output;
            entity = option;
            report = golfie;
            if(!oscard) { _fun00020_ip = 50; continue _fun00019 }
 97:
            if(!(tangon != report)) { _fun00020_ip = 144; continue _fun00019 }
 101:
            tangon = report.isFullMatch;
            if(tangon) { _fun00020_ip = 138; continue _fun00019 }
 110:
            oscard = zuuluu.splice;
            tangon = zuuluu.indexOf;
            report = tangon.bind(zuuluu)(report);
            tangon = 1;
            tangon = oscard.bind(zuuluu)(report, tangon);
            _fun00020_ip = 144; continue _fun00019;
 138:
            zuuluu['length'] = michal;
 144:
            return entity;
        }
    };
    var _closure1_slot60 = entity;
    entity = function(argFoo, argBar) { // Original name: getGuildName
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = report.guild_id;
            michal = null;
            if(!(michal == entity)) { _fun00022_ip = 21; continue _fun00021 }
 17:
            entity = undefined;
            return entity;
 21:
            entity = report.guild_id;
            entity = tangon[entity];
            if(!(michal == entity)) { _fun00022_ip = 92; continue _fun00021 }
 34:
            zuuluu = report.guild_id;
            golfie = _closure1_slot25;
            oscard = golfie.getGuild;
            report = report.guild_id;
            report = oscard.bind(golfie)(report);
            oscard = michal == report;
            michal = undefined;
            if(oscard) { _fun00022_ip = 85; continue _fun00021 }
 70:
            oscard = report.name;
            report = oscard.toLocaleLowerCase;
            michal = report.bind(oscard)();
 85:
            tangon[zuuluu] = michal;
            entity = michal;
 92:
            return entity;
        }
    };
    var _closure1_slot61 = entity;
    entity = function(argFoo, argBar) { // Original name: getCategoryName
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = report.parent_id;
            michal = null;
            if(!(michal == entity)) { _fun00024_ip = 22; continue _fun00023 }
 18:
            entity = undefined;
            return entity;
 22:
            entity = report.parent_id;
            entity = tangon[entity];
            if(!(michal == entity)) { _fun00024_ip = 96; continue _fun00023 }
 36:
            zuuluu = report.parent_id;
            golfie = _closure1_slot18;
            oscard = golfie.getChannel;
            report = report.parent_id;
            report = oscard.bind(golfie)(report);
            oscard = michal == report;
            michal = undefined;
            if(oscard) { _fun00024_ip = 89; continue _fun00023 }
 74:
            oscard = report.name;
            report = oscard.toLocaleLowerCase;
            michal = report.bind(oscard)();
 89:
            tangon[zuuluu] = michal;
            entity = michal;
 96:
            return entity;
        }
    };
    var _closure1_slot62 = entity;
    option = function(argFoo, argBar) { // Original name: getRecentlyTalked
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot18;
            zuuluu = tangon.getChannel;
            tangon = zuuluu.bind(tangon)(oscard);
            var _closure2_slot0 = tangon;
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00026_ip = 190; continue _fun00025 }
 35:
            if(!(zuuluu != tangon)) { _fun00026_ip = 190; continue _fun00025 }
 42:
            report = _closure1_slot1;
            tangon = _closure1_slot3;
            zuuluu = 35;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            report = _closure1_slot26;
            michal = report.getMessages;
            report = michal.bind(report)(oscard);
            michal = report.toArray;
            michal = michal.bind(report)();
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.reverse;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.uniqBy;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.author;
                entity = entity.id;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                zuuluu = _closure1_slot32;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = entity.author;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    if(!(entity != michal)) { _fun00028_ip = 87; continue _fun00027 }
 9:
                    zuuluu = michal.isNonUserBot;
                    zuuluu = zuuluu.bind(michal)();
                    if(zuuluu) { _fun00028_ip = 83; continue _fun00027 }
 22:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.getGuildId;
                    oscard = zuuluu.bind(tangon)();
                    entity = entity == oscard;
                    if(entity) { _fun00028_ip = 81; continue _fun00027 }
 46:
                    tangon = _closure1_slot56;
                    report = _closure1_slot23;
                    zuuluu = report.getMember;
                    michal = michal.id;
                    zuuluu = zuuluu.bind(report)(oscard, michal);
                    michal = undefined;
                    entity = tangon.bind(michal)(zuuluu);
 81:
                    return entity;
 83:
                    entity = false;
                    return entity;
 87:
                    entity = false;
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    report = argFoo;
                    michal = _closure2_slot0;
                    entity = michal.getGuildId;
                    oscard = entity.bind(michal)();
                    tangon = null;
                    entity = tangon != oscard;
                    golfie = null;
                    if(!entity) { _fun00030_ip = 55; continue _fun00029 }
 31:
                    zuuluu = _closure1_slot23;
                    michal = zuuluu.getMember;
                    entity = report.id;
                    golfie = michal.bind(zuuluu)(oscard, entity);
 55:
                    entity = {};
                    michal = _closure1_slot39;
                    michal = michal.USER;
                    entity['type'] = michal;
                    entity['record'] = report;
                    michal = 0;
                    entity['score'] = michal;
                    option = tangon == golfie;
                    oscard = undefined;
                    michal = undefined;
                    if(option) { _fun00030_ip = 103; continue _fun00029 }
 97:
                    michal = golfie.nick;
 103:
                    if(!(tangon == michal)) { _fun00030_ip = 138; continue _fun00029 }
 107:
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot3;
                    zuuluu = 32;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.getName;
                    michal = zuuluu.bind(tangon)(report);
 138:
                    entity['comparator'] = michal;
                    return entity;
                }
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.take;
            entity = argBar;
            michal = michal.bind(zuuluu)(entity);
            entity = michal.value;
            entity = entity.bind(michal)();
            _fun00026_ip = 194; continue _fun00025;
 190:
            entity = new Array(0);
 194:
            return entity;
        }
    };
    var _closure1_slot63 = option;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, michal);
    entity = 0;
    michal = offset[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    oscard = michal.InAppNavigationRecord;
    var _closure1_slot4 = oscard;
    michal = michal.InAppNavigationType;
    var _closure1_slot5 = michal;
    michal = 1;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 2;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 3;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 4;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 5;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 6;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    oscard = michal.ChannelRecordBase;
    var _closure1_slot11 = oscard;
    oscard = michal.isGuildChannelType;
    var _closure1_slot12 = oscard;
    oscard = michal.isGuildSelectableChannelType;
    var _closure1_slot13 = oscard;
    oscard = michal.isGuildVocalChannelType;
    var _closure1_slot14 = oscard;
    oscard = michal.PrivateChannelRecord;
    var _closure1_slot15 = oscard;
    michal = michal.UnknownChannelRecord;
    var _closure1_slot16 = michal;
    michal = 7;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot17 = michal;
    michal = 8;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot18 = michal;
    michal = 9;
    michal = offset[michal];
    michal = foxtra.bind(entity)(michal);
    var _closure1_slot19 = michal;
    michal = 10;
    oscard = offset[michal];
    oscard = verify.bind(entity)(oscard);
    romeon = oscard.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot20 = romeon;
    yankee = oscard.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot21 = yankee;
    oscard = offset[michal];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot22 = oscard;
    oscard = 11;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot23 = oscard;
    oscard = 12;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot24 = oscard;
    oscard = 13;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot25 = oscard;
    oscard = 14;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot26 = oscard;
    oscard = 15;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot27 = oscard;
    oscard = 16;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot28 = oscard;
    oscard = 17;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot29 = oscard;
    oscard = 18;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot30 = oscard;
    oscard = 19;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot31 = oscard;
    oscard = 20;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot32 = oscard;
    oscard = 21;
    oscard = offset[oscard];
    oscard = foxtra.bind(entity)(oscard);
    var _closure1_slot33 = oscard;
    oscard = 22;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    golfie = oscard.Permissions;
    var _closure1_slot34 = golfie;
    golfie = oscard.GuildFeatures;
    var _closure1_slot35 = golfie;
    golfie = oscard.ChannelTypes;
    var _closure1_slot36 = golfie;
    backup = oscard.SKUTypes;
    var _closure1_slot37 = backup;
    oscard = oscard.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot38 = oscard;
    oscard = 23;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.AutocompleterResultTypes;
    var _closure1_slot39 = oscard;
    oscard = 24;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.StaticChannelId;
    var _closure1_slot40 = oscard;
    oscard = 25;
    oscard = offset[oscard];
    kiloes = verify.bind(entity)(oscard);
    backup = kiloes.createStore;
    oscard = function() {
        entity = {};
        michal = new Array(0);
        entity['options'] = michal;
        return entity;
    };
    oscard = backup.bind(kiloes)(oscard);
    var _closure1_slot41 = oscard;
    oscard = 26;
    oscard = offset[oscard];
    backup = foxtra.bind(entity)(oscard);
    oscard = backup.prototype;
    foxtra = Object.create(oscard, {constructor: {value: backup}});
    result = 'AutocompleteUtils';
    echoed = foxtra;
    oscard = new echoed[backup](result, output);
    oscard = oscard instanceof Object ? oscard : foxtra;
    var _closure1_slot42 = oscard;
    var _closure1_slot43 = michal;
    michal = function() { // Original name: NOOP
        entity = true;
        return entity;
    };
    var _closure1_slot44 = michal;
    oscard = /(\t|\s)/;
    var _closure1_slot45 = oscard;
    michal = new Array(0);
    var _closure1_slot46 = michal;
    michal = 27;
    foxtra = offset[michal];
    foxtra = verify.bind(entity)(foxtra);
    foxtra = foxtra.default;
    foxtra = foxtra.MENTION_EVERYONE;
    var _closure1_slot47 = foxtra;
    foxtra = offset[michal];
    foxtra = verify.bind(entity)(foxtra);
    foxtra = foxtra.default;
    foxtra = foxtra.MENTION_HERE;
    var _closure1_slot48 = foxtra;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    michal = michal.default;
    michal = michal.LAUNCHABLE_APPLICATIONS;
    var _closure1_slot49 = michal;
    michal = new Array(3);
    michal[0] = romeon;
    michal[1] = yankee;
    golfie = golfie.GUILD_CATEGORY;
    michal[2] = golfie;
    var _closure1_slot50 = michal;
    golfie = 36;
    golfie = offset[golfie];
    romeon = verify.bind(entity)(golfie);
    yankee = romeon.cachedFunction;
    golfie = function() {
        michal = global;
        zuuluu = michal.Map;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        offset = tangon;
        zuuluu = new offset[zuuluu](verify);
        tangon = zuuluu instanceof Object ? zuuluu : tangon;
        var _closure2_slot0 = tangon;
        michal = michal.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        offset = zuuluu;
        michal = new offset[michal](verify);
        zuuluu = michal instanceof Object ? michal : zuuluu;
        var _closure2_slot1 = zuuluu;
        michal = new Array(0);
        var _closure2_slot2 = michal;
        option = _closure1_slot1;
        golfie = _closure1_slot3;
        oscard = 35;
        oscard = golfie[oscard];
        golfie = undefined;
        oscard = option.bind(golfie)(oscard);
        option = _closure1_slot18;
        report = option.getMutablePrivateChannels;
        report = report.bind(option)();
        oscard = oscard.bind(golfie)(report);
        report = oscard.values;
        oscard = report.bind(oscard)();
        report = oscard.value;
        oscard = report.bind(oscard)();
        report = oscard.forEach;
        entity = function(argFoo) {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                oscard = argFoo;
                entity = oscard.isDM;
                entity = entity.bind(oscard)();
                if(!entity) { _fun00032_ip = 156; continue _fun00031 }
 19:
                entity = oscard.getRecipientId;
                tangon = entity.bind(oscard)();
                michal = _closure1_slot32;
                entity = michal.getUser;
                zuuluu = entity.bind(michal)(tangon);
                michal = null;
                entity = michal == tangon;
                if(entity) { _fun00032_ip = 60; continue _fun00031 }
 56:
                entity = michal == zuuluu;
 60:
                if(entity) { _fun00032_ip = 80; continue _fun00031 }
 63:
                report = _closure2_slot0;
                michal = report.has;
                entity = michal.bind(report)(tangon);
 80:
                if(entity) { _fun00032_ip = 156; continue _fun00031 }
 83:
                report = _closure2_slot0;
                michal = report.set;
                michal = michal.bind(report)(tangon, oscard);
                oscard = _closure2_slot2;
                report = oscard.push;
                michal = {};
                michal['userId'] = tangon;
                option = _closure1_slot29;
                golfie = option.getNickname;
                golfie = golfie.bind(option)(tangon);
                michal['nick'] = golfie;
                michal = report.bind(oscard)(michal);
                michal = _closure2_slot1;
                entity = michal.set;
                entity = entity.bind(michal)(tangon, zuuluu);
 156:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(oscard)(entity);
        entity = {};
        entity['channelsByRecipientId'] = tangon;
        entity['recipientsById'] = zuuluu;
        entity['recipients'] = michal;
        return entity;
    };
    golfie = yankee.bind(romeon)(golfie);
    var _closure1_slot51 = golfie;
    golfie = {};
    yankee = function(argFoo) { // Original name: queryFriends
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            golfie = entity.query;
            report = entity.limit;
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00034_ip = 23; continue _fun00033 }
 20:
            report = 10;
 23:
            michal = entity._fuzzy;
            tangon = entity.filter;
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = golfie;
            option = _closure1_slot29;
            golfie = option.getFriendIDs;
            verify = golfie.bind(option)();
            option = verify.map;
            golfie = function(argFoo) {
                zuuluu = _closure1_slot32;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(golfie);
            golfie = option.filter;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 37;
            oscard = offset[oscard];
            oscard = verify.bind(zuuluu)(oscard);
            oscard = oscard.isNotNullish;
            oscard = golfie.bind(option)(oscard);
            entity['members'] = oscard;
            entity['limit'] = report;
            entity['filter'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    golfie['queryFriends'] = yankee;
    yankee = function(argFoo) { // Original name: queryDMUsers
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            golfie = entity.query;
            report = entity.limit;
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00036_ip = 23; continue _fun00035 }
 20:
            report = 10;
 23:
            tangon = entity.filter;
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = golfie;
            option = _closure1_slot18;
            golfie = option.getDMUserIds;
            verify = golfie.bind(option)();
            option = verify.map;
            golfie = function(argFoo) {
                zuuluu = _closure1_slot32;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(golfie);
            golfie = option.filter;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 37;
            oscard = offset[oscard];
            oscard = verify.bind(zuuluu)(oscard);
            oscard = oscard.isNotNullish;
            oscard = golfie.bind(option)(oscard);
            entity['members'] = oscard;
            entity['limit'] = report;
            entity['filter'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    golfie['queryDMUsers'] = yankee;
    yankee = function(argFoo) { // Original name: queryChannelUsers
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            offset = entity.channelId;
            option = entity.query;
            oscard = entity.limit;
            zuuluu = undefined;
            if(!(oscard === zuuluu)) { _fun00038_ip = 30; continue _fun00037 }
 27:
            oscard = 10;
 30:
            romeon = entity.request;
            if(!(romeon === zuuluu)) { _fun00038_ip = 42; continue _fun00037 }
 40:
            romeon = true;
 42:
            verify = entity.checkRecentlyTalkedOnEmptyQuery;
            if(!(verify === zuuluu)) { _fun00038_ip = 54; continue _fun00037 }
 52:
            verify = true;
 54:
            tangon = entity.allowSnowflake;
            if(!(tangon === zuuluu)) { _fun00038_ip = 66; continue _fun00037 }
 64:
            tangon = false;
 66:
            var _closure2_slot0 = zuuluu;
            golfie = _closure1_slot18;
            michal = golfie.getChannel;
            golfie = michal.bind(golfie)(offset);
            yankee = null;
            if(!(yankee != golfie)) { _fun00038_ip = 408; continue _fun00037 }
 96:
            michal = golfie.isThread;
            michal = michal.bind(golfie)();
            offset = null;
            if(!michal) { _fun00038_ip = 131; continue _fun00037 }
 111:
            backup = _closure1_slot18;
            foxtra = backup.getChannel;
            michal = golfie.parent_id;
            offset = foxtra.bind(backup)(michal);
 131:
            michal = golfie;
            if(!(yankee != offset)) { _fun00038_ip = 141; continue _fun00037 }
 138:
            michal = offset;
 141:
            _closure2_slot0 = michal;
            if(!(yankee != michal)) { _fun00038_ip = 402; continue _fun00037 }
 152:
            offset = michal.isPrivate;
            offset = offset.bind(michal)();
            if(offset) { _fun00038_ip = 291; continue _fun00037 }
 168:
            foxtra = option.length;
            offset = 0;
            if(!(offset === foxtra)) { _fun00038_ip = 206; continue _fun00037 }
 179:
            if(!verify) { _fun00038_ip = 206; continue _fun00037 }
 182:
            verify = _closure1_slot63;
            golfie = golfie.id;
            verify = verify.bind(zuuluu)(golfie, oscard);
            golfie = verify.length;
            if(!(!(golfie > offset))) { _fun00038_ip = 289; continue _fun00037 }
 206:
            foxtra = _closure1_slot23;
            offset = foxtra.getMembers;
            golfie = michal.guild_id;
            foxtra = offset.bind(foxtra)(golfie);
            offset = foxtra.filter;
            golfie = _closure1_slot56;
            offset = offset.bind(foxtra)(golfie);
            golfie = offset;
            if(!romeon) { _fun00038_ip = 361; continue _fun00037 }
 246:
            foxtra = _closure1_slot1;
            backup = _closure1_slot3;
            romeon = 38;
            romeon = backup[romeon];
            backup = foxtra.bind(zuuluu)(romeon);
            foxtra = backup.requestMembers;
            romeon = michal.guild_id;
            romeon = foxtra.bind(backup)(romeon, option, oscard);
            golfie = offset;
            _fun00038_ip = 361; continue _fun00037;
 289:
            return verify;
 291:
            offset = michal.recipients;
            verify = offset.map;
            michal = function(argFoo) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    tangon = argFoo;
                    entity = {};
                    entity['userId'] = tangon;
                    zuuluu = _closure1_slot29;
                    michal = zuuluu.getNickname;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = null;
                    tangon = michal != zuuluu;
                    if(!tangon) { _fun00040_ip = 39; continue _fun00039 }
 36:
                    michal = zuuluu;
 39:
                    entity['nick'] = michal;
                    return entity;
                }
            };
            michal = verify.bind(offset)(michal);
            offset = _closure1_slot32;
            verify = offset.getCurrentUser;
            romeon = verify.bind(offset)();
            golfie = michal;
            if(!(yankee != romeon)) { _fun00038_ip = 361; continue _fun00037 }
 332:
            offset = michal.push;
            verify = {};
            romeon = romeon.id;
            verify['userId'] = romeon;
            verify['nick'] = yankee;
            verify = offset.bind(michal)(verify);
            golfie = michal;
 361:
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = option;
            entity['members'] = golfie;
            entity['limit'] = oscard;
            report = function(argFoo) { // Original name: filter
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = michal.isPrivate;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00042_ip = 88; continue _fun00041 }
 20:
                    tangon = _closure1_slot2;
                    zuuluu = _closure1_slot3;
                    michal = 39;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.can;
                    michal = {};
                    oscard = _closure1_slot34;
                    oscard = oscard.VIEW_CHANNEL;
                    michal['permission'] = oscard;
                    oscard = argFoo;
                    michal['user'] = oscard;
                    report = _closure2_slot0;
                    michal['context'] = report;
                    entity = zuuluu.bind(tangon)(michal);
 88:
                    return entity;
                }
            };
            entity['filter'] = report;
            entity['allowSnowflake'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 402:
            entity = new Array(0);
            return entity;
 408:
            entity = new Array(0);
            return entity;
        }
    };
    golfie['queryChannelUsers'] = yankee;
    yankee = function(argFoo) { // Original name: queryGuildUsers
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            michal = argFoo;
            yankee = michal.guildId;
            verify = michal.query;
            golfie = michal.limit;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00044_ip = 28; continue _fun00043 }
 25:
            golfie = 10;
 28:
            zuuluu = michal.request;
            if(!(zuuluu === tangon)) { _fun00044_ip = 40; continue _fun00043 }
 38:
            zuuluu = true;
 40:
            entity = michal.checkRecentlyTalkedOnEmptyQuery;
            if(!(entity === tangon)) { _fun00044_ip = 52; continue _fun00043 }
 50:
            entity = true;
 52:
            oscard = michal.filter;
            report = michal.allowSnowflake;
            offset = _closure1_slot25;
            option = offset.getGuild;
            offset = option.bind(offset)(yankee);
            option = null;
            if(!(option != offset)) { _fun00044_ip = 252; continue _fun00043 }
 89:
            option = verify.length;
            romeon = 0;
            if(!(romeon === option)) { _fun00044_ip = 137; continue _fun00043 }
 100:
            if(!entity) { _fun00044_ip = 137; continue _fun00043 }
 103:
            option = _closure1_slot63;
            offset = _closure1_slot30;
            entity = offset.getChannelId;
            entity = entity.bind(offset)(yankee);
            entity = option.bind(tangon)(entity, golfie);
            option = entity.length;
            if(!(!(option > romeon))) { _fun00044_ip = 250; continue _fun00043 }
 137:
            offset = _closure1_slot23;
            option = offset.getMembers;
            foxtra = option.bind(offset)(yankee);
            offset = foxtra.filter;
            option = _closure1_slot56;
            option = offset.bind(foxtra)(option);
            if(!zuuluu) { _fun00044_ip = 178; continue _fun00043 }
 169:
            offset = verify.length;
            zuuluu = offset > romeon;
 178:
            if(!zuuluu) { _fun00044_ip = 214; continue _fun00043 }
 181:
            offset = _closure1_slot1;
            romeon = _closure1_slot3;
            zuuluu = 38;
            zuuluu = romeon[zuuluu];
            offset = offset.bind(tangon)(zuuluu);
            zuuluu = offset.requestMembers;
            zuuluu = zuuluu.bind(offset)(yankee, verify, golfie);
 214:
            zuuluu = _closure1_slot57;
            michal = {};
            michal['query'] = verify;
            michal['members'] = option;
            michal['limit'] = golfie;
            michal['filter'] = oscard;
            michal['allowSnowflake'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 250:
            return entity;
 252:
            entity = new Array(0);
            return entity;
        }
    };
    golfie['queryGuildUsers'] = yankee;
    yankee = function(argFoo) { // Original name: queryUsers
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            option = entity.query;
            report = entity.filter;
            tangon = entity.boosters;
            oscard = entity.limit;
            zuuluu = undefined;
            if(!(oscard === zuuluu)) { _fun00046_ip = 34; continue _fun00045 }
 31:
            oscard = 10;
 34:
            entity = entity.request;
            if(!(entity === zuuluu)) { _fun00046_ip = 46; continue _fun00045 }
 44:
            entity = true;
 46:
            if(!entity) { _fun00046_ip = 60; continue _fun00045 }
 49:
            golfie = option.length;
            michal = 0;
            entity = golfie > michal;
 60:
            if(!entity) { _fun00046_ip = 101; continue _fun00045 }
 63:
            michal = _closure1_slot1;
            golfie = _closure1_slot3;
            entity = 38;
            entity = golfie[entity];
            golfie = michal.bind(zuuluu)(entity);
            michal = golfie.requestMembers;
            entity = null;
            entity = michal.bind(golfie)(entity, option, oscard);
 101:
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = option;
            verify = _closure1_slot1;
            offset = _closure1_slot3;
            option = 35;
            option = offset[option];
            option = verify.bind(zuuluu)(option);
            verify = _closure1_slot32;
            golfie = verify.getUsers;
            golfie = golfie.bind(verify)();
            option = option.bind(zuuluu)(golfie);
            golfie = option.values;
            option = golfie.bind(option)();
            golfie = option.value;
            golfie = golfie.bind(option)();
            entity['members'] = golfie;
            entity['limit'] = oscard;
            entity['filter'] = report;
            entity['boosters'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    golfie['queryUsers'] = yankee;
    yankee = function(argFoo) { // Original name: queryChannels
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            variable38 = entity.query;
            variable37 = entity.guildId;
            michal = entity.limit;
            golfie = undefined;
            if(!(michal === golfie)) { _fun00048_ip = 34; continue _fun00047 }
 27:
            michal = _closure1_slot38;
 34:
            variable36 = entity.fuzzy;
            if(!(variable36 === golfie)) { _fun00048_ip = 46; continue _fun00047 }
 44:
            variable36 = true;
 46:
            quebec = entity.filter;
            if(!(quebec === golfie)) { _fun00048_ip = 62; continue _fun00047 }
 55:
            quebec = _closure1_slot44;
 62:
            equals = entity.type;
            if(!(equals === golfie)) { _fun00048_ip = 78; continue _fun00047 }
 71:
            equals = _closure1_slot20;
 78:
            zuuluu = entity.allowEmptyQueries;
            if(!(zuuluu === golfie)) { _fun00048_ip = 90; continue _fun00047 }
 88:
            zuuluu = false;
 90:
            whisks = entity.requireVocalConnectAccess;
            if(!(whisks === golfie)) { _fun00048_ip = 102; continue _fun00047 }
 100:
            whisks = true;
 102:
            limora = entity.boosters;
            if(!(limora === golfie)) { _fun00048_ip = 114; continue _fun00047 }
 112:
            limora = {};
 114:
            sierra = entity.allowSnowflake;
            entity = function(argFoo) { // Original name: getSeparatedQueries
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    zuuluu = argFoo;
                    michal = arguments[1];
                    yankee = undefined;
                    if(!(michal === yankee)) { _fun00050_ip = 16; continue _fun00049 }
 14:
                    michal = false;
 16:
                    var _closure3_slot0 = michal;
                    michal = zuuluu.split;
                    verify = ' ';
                    report = michal.bind(zuuluu)(verify);
                    tangon = report.filter;
                    michal = function(argFoo) {
                        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                            michal = '';
                            entity = argFoo;
                            entity = michal !== entity;
                            if(entity) { _fun00052_ip = 21; continue _fun00051 }
 14:
                            entity = _closure3_slot0;
 21:
                            return entity;
                        }
                    };
                    tangon = tangon.bind(report)(michal);
                    michal = tangon.map;
                    entity = function(argFoo) {
                        michal = argFoo;
                        entity = michal.toLocaleLowerCase;
                        oscard = entity.bind(michal)();
                        entity = {};
                        entity['queryLower'] = oscard;
                        tangon = global;
                        yankee = tangon.RegExp;
                        golfie = _closure1_slot1;
                        option = _closure1_slot3;
                        michal = 29;
                        report = option[michal];
                        zuuluu = undefined;
                        verify = golfie.bind(zuuluu)(report);
                        report = verify.escape;
                        offset = report.bind(verify)(oscard);
                        report = tangon.HermesInternal;
                        verify = report.concat;
                        report = '^';
                        foxtra = verify.bind(report)(offset);
                        report = yankee.prototype;
                        offset = Object.create(report, {constructor: {value: yankee}});
                        report = 'i';
                        backup = offset;
                        romeon = report;
                        verify = new backup[yankee](foxtra, romeon, yankee);
                        verify = verify instanceof Object ? verify : offset;
                        entity['exactQuery'] = verify;
                        tangon = tangon.RegExp;
                        michal = option[michal];
                        zuuluu = golfie.bind(zuuluu)(michal);
                        michal = zuuluu.escape;
                        foxtra = michal.bind(zuuluu)(oscard);
                        zuuluu = tangon.prototype;
                        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                        backup = zuuluu;
                        michal = new backup[tangon](foxtra, romeon, yankee);
                        michal = michal instanceof Object ? michal : zuuluu;
                        entity['containQuery'] = michal;
                        michal = false;
                        entity['isFullMatch'] = michal;
                        return entity;
                    };
                    entity = michal.bind(tangon)(entity);
                    michal = zuuluu.includes;
                    michal = michal.bind(zuuluu)(verify);
                    if(!michal) { _fun00050_ip = 291; continue _fun00049 }
 80:
                    michal = zuuluu.toLocaleLowerCase;
                    offset = michal.bind(zuuluu)();
                    zuuluu = entity.unshift;
                    michal = {};
                    michal['queryLower'] = offset;
                    oscard = global;
                    kiloes = oscard.RegExp;
                    report = _closure1_slot1;
                    romeon = _closure1_slot3;
                    tangon = 29;
                    golfie = romeon[tangon];
                    option = report.bind(yankee)(golfie);
                    golfie = option.escape;
                    foxtra = golfie.bind(option)(offset);
                    golfie = foxtra.replace;
                    option = '( |-)';
                    backup = golfie.bind(foxtra)(verify, option);
                    golfie = oscard.HermesInternal;
                    foxtra = golfie.concat;
                    golfie = '^';
                    output = foxtra.bind(golfie)(backup);
                    golfie = kiloes.prototype;
                    backup = Object.create(golfie, {constructor: {value: kiloes}});
                    golfie = 'i';
                    result = backup;
                    sizing = golfie;
                    foxtra = new result[kiloes](output, sizing, kiloes);
                    foxtra = foxtra instanceof Object ? foxtra : backup;
                    michal['exactQuery'] = foxtra;
                    oscard = oscard.RegExp;
                    tangon = romeon[tangon];
                    report = report.bind(yankee)(tangon);
                    tangon = report.escape;
                    report = tangon.bind(report)(offset);
                    tangon = report.replace;
                    output = tangon.bind(report)(verify, option);
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    result = report;
                    sizing = golfie;
                    tangon = new result[oscard](output, sizing, kiloes);
                    tangon = tangon instanceof Object ? tangon : report;
                    michal['containQuery'] = tangon;
                    tangon = true;
                    michal['isFullMatch'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 291:
                    return entity;
                }
            };
            status = entity.bind(golfie)(variable38, zuuluu);
            zuuluu = null;
            if(!(zuuluu == variable37)) { _fun00048_ip = 223; continue _fun00047 }
 137:
            oscard = _closure1_slot1;
            option = _closure1_slot3;
            report = 35;
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            option = _closure1_slot18;
            report = option.loadAllGuildAndPrivateChannelsFromDisk;
            report = report.bind(option)();
            oscard = oscard.bind(golfie)(report);
            report = oscard.values;
            oscard = report.bind(oscard)();
            report = oscard.concat;
            option = _closure1_slot10;
            entity = option.computeAllActiveJoinedThreads;
            entity = entity.bind(option)();
            report = report.bind(oscard)(entity);
            entity = report.value;
            oscard = entity.bind(report)();
            _fun00048_ip = 319; continue _fun00047;
 223:
            option = _closure1_slot1;
            verify = _closure1_slot3;
            report = 35;
            report = verify[report];
            option = option.bind(golfie)(report);
            verify = _closure1_slot22;
            report = verify.getChannels;
            report = report.bind(verify)(variable37);
            report = report[equals];
            option = option.bind(golfie)(report);
            report = option.map;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                return entity;
            };
            report = report.bind(option)(tangon);
            tangon = report.concat;
            option = _closure1_slot10;
            entity = option.computeAllActiveJoinedThreads;
            entity = entity.bind(option)(variable37);
            tangon = tangon.bind(report)(entity);
            entity = tangon.value;
            oscard = entity.bind(tangon)();
 319:
            target = {};
            entity = new Array(0);
            option = _closure1_slot19;
            report = option.getMaxScore;
            papara = report.bind(option)();
            report = _closure1_slot52;
            cntext = report.bind(golfie)(oscard);
            oscard = cntext.bind(golfie)();
            report = oscard.done;
            record = 40;
            config = 1;
            sequen = global;
            vacuum = 3;
            ctrled = 7;
            source = 0;
            update = 0.5;
            echoed = 6;
            result = false;
            output = '';
            sizing = oscard;
            kiloes = undefined;
            backup = undefined;
            foxtra = undefined;
            romeon = undefined;
            yankee = undefined;
            offset = undefined;
            verify = undefined;
            option = undefined;
            oscard = undefined;
            if(report) { _fun00048_ip = 1455; continue _fun00047 }
 424:
            variable60 = sizing.value;
            variable50 = variable60.type;
            report = zuuluu != variable37;
            if(!(equals !== variable50)) { _fun00048_ip = 577; continue _fun00047 }
 445:
            if(report) { _fun00048_ip = 490; continue _fun00047 }
 448:
            report = _closure1_slot12;
            report = report.bind(golfie)(variable50);
            variable47 = kiloes;
            variable46 = backup;
            variable45 = foxtra;
            variable44 = romeon;
            variable43 = yankee;
            variable42 = offset;
            variable41 = verify;
            variable40 = option;
            variable39 = oscard;
            if(!report) { _fun00048_ip = 1410; continue _fun00047 }
 490:
            report = _closure1_slot20;
            if(!(equals !== report)) { _fun00048_ip = 520; continue _fun00047 }
 498:
            report = _closure1_slot21;
            report = equals === report;
            if(!report) { _fun00048_ip = 518; continue _fun00047 }
 509:
            variable48 = _closure1_slot14;
            report = variable48.bind(golfie)(variable50);
 518:
            _fun00048_ip = 544; continue _fun00047;
 520:
            variable48 = _closure1_slot13;
            variable48 = variable48.bind(golfie)(variable50);
            if(variable48) { _fun00048_ip = 541; continue _fun00047 }
 532:
            variable49 = _closure1_slot14;
            variable48 = variable49.bind(golfie)(variable50);
 541:
            report = variable48;
 544:
            variable47 = kiloes;
            variable46 = backup;
            variable45 = foxtra;
            variable44 = romeon;
            variable43 = yankee;
            variable42 = offset;
            variable41 = verify;
            variable40 = option;
            variable39 = oscard;
            if(!report) { _fun00048_ip = 1410; continue _fun00047 }
 577:
            variable48 = _closure1_slot12;
            report = variable60.type;
            report = variable48.bind(golfie)(report);
            if(!report) { _fun00048_ip = 664; continue _fun00047 }
 594:
            variable49 = _closure1_slot27;
            variable48 = variable49.can;
            if(whisks) { _fun00048_ip = 619; continue _fun00047 }
 607:
            report = _closure1_slot34;
            report = report.VIEW_CHANNEL;
            _fun00048_ip = 625; continue _fun00047;
 619:
            report = variable60.accessPermissions;
 625:
            report = variable48.bind(variable49)(report, variable60);
            variable47 = kiloes;
            variable46 = backup;
            variable45 = foxtra;
            variable44 = romeon;
            variable43 = yankee;
            variable42 = offset;
            variable41 = verify;
            variable40 = option;
            variable39 = oscard;
            if(!report) { _fun00048_ip = 1410; continue _fun00047 }
 664:
            report = quebec.bind(golfie)(variable60);
            variable47 = kiloes;
            variable46 = backup;
            variable45 = foxtra;
            variable44 = romeon;
            variable43 = yankee;
            variable42 = offset;
            variable41 = verify;
            variable40 = option;
            variable39 = oscard;
            if(!report) { _fun00048_ip = 1410; continue _fun00047 }
 702:
            variable52 = new Array(0);
            variable68 = variable52;
            variable67 = status;
            variable66 = 0;
            report = arraySpread(variable68, variable67, variable66);
            variable48 = variable60.name;
            report = variable48.toLocaleLowerCase;
            variable51 = report.bind(variable48)();
            variable50 = sierra;
            if(!variable50) { _fun00048_ip = 748; continue _fun00047 }
 739:
            report = variable60.id;
            variable50 = variable38 === report;
 748:
            if(variable50) { _fun00048_ip = 764; continue _fun00047 }
 751:
            report = _closure1_slot60;
            variable49 = report.bind(golfie)(variable51, variable52, variable36);
            _fun00048_ip = 768; continue _fun00047;
 764:
            variable49 = _closure1_slot43;
 768:
            variable47 = kiloes;
            variable46 = variable52;
            variable45 = variable51;
            variable44 = variable50;
            variable42 = offset;
            variable41 = verify;
            variable40 = option;
            variable39 = oscard;
            variable43 = variable49;
            if(!(source !== variable43)) { _fun00048_ip = 1410; continue _fun00047 }
 802:
            variable54 = variable52.length;
            variable53 = variable49;
            variable48 = option;
            report = oscard;
            if(!(variable54 > source)) { _fun00048_ip = 998; continue _fun00047 }
 823:
            variable54 = _closure1_slot61;
            variable55 = variable54.bind(golfie)(variable60, target);
            variable54 = new Array(2);
            variable54[0] = variable55;
            variable55 = _closure1_slot62;
            variable55 = variable55.bind(golfie)(variable60, target);
            variable54[1] = variable55;
            variable55 = variable54.length;
            variable56 = source < variable55;
            variable61 = variable49;
            variable59 = 0;
            variable57 = oscard;
            variable58 = variable61;
            variable55 = 0;
            variable49 = variable57;
            if(!variable56) { _fun00048_ip = 969; continue _fun00047 }
 883:
            variable64 = variable54[variable59];
            variable65 = variable61;
            variable63 = variable57;
            if(!(zuuluu != variable64)) { _fun00048_ip = 939; continue _fun00047 }
 897:
            variable65 = variable61;
            variable63 = variable57;
            if(!(output !== variable64)) { _fun00048_ip = 939; continue _fun00047 }
 907:
            variable56 = _closure1_slot60;
            variable56 = variable56.bind(golfie)(variable64, variable52, result);
            variable65 = variable61;
            variable63 = variable56;
            if(!(source !== variable63)) { _fun00048_ip = 939; continue _fun00047 }
 928:
            variable62 = update * variable56;
            variable65 = variable61 + variable62;
            variable63 = variable56;
 939:
            variable59 = variable59 + 1;
            variable56 = variable54.length;
            variable61 = variable65;
            variable57 = variable63;
            variable58 = variable61;
            option = variable64;
            variable49 = variable57;
            variable55 = variable59;
            if(variable55 < variable56) { _fun00048_ip = 883; continue _fun00047 }
 969:
            variable57 = sequen.Math;
            variable56 = variable57.min;
            variable53 = variable56.bind(variable57)(echoed, variable58);
            offset = variable55;
            variable48 = option;
            report = variable49;
            verify = variable54;
 998:
            variable47 = kiloes;
            variable46 = variable52;
            variable45 = variable51;
            variable44 = variable50;
            variable42 = offset;
            variable41 = verify;
            variable40 = variable48;
            variable39 = report;
            variable43 = variable53;
            if(!(source !== variable43)) { _fun00048_ip = 1410; continue _fun00047 }
 1032:
            variable49 = variable52.length;
            variable47 = kiloes;
            variable46 = variable52;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable53;
            variable42 = offset;
            variable41 = verify;
            variable40 = variable48;
            variable39 = report;
            if(!(!(variable49 > config))) { _fun00048_ip = 1410; continue _fun00047 }
 1071:
            variable49 = variable52.length;
            if(!(config === variable49)) { _fun00048_ip = 1126; continue _fun00047 }
 1080:
            variable49 = variable52[source];
            variable49 = variable49.isFullMatch;
            if(variable49) { _fun00048_ip = 1126; continue _fun00047 }
 1093:
            variable47 = kiloes;
            variable46 = variable52;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable53;
            variable42 = offset;
            variable41 = verify;
            variable40 = variable48;
            variable39 = report;
            if(!variable50) { _fun00048_ip = 1410; continue _fun00047 }
 1126:
            variable54 = _closure1_slot59;
            variable49 = variable60.type;
            variable54 = variable54.bind(golfie)(equals, variable49);
            variable49 = variable53;
            if(!variable54) { _fun00048_ip = 1168; continue _fun00047 }
 1147:
            variable55 = sequen.Math;
            variable54 = variable55.max;
            variable53 = variable53 - config;
            variable49 = variable54.bind(variable55)(variable53, update);
 1168:
            variable56 = sequen.Math;
            variable55 = variable56.min;
            variable57 = _closure1_slot19;
            variable54 = variable57.getScoreWithoutFetchingLatest;
            variable53 = variable60.id;
            variable53 = variable54.bind(variable57)(variable53);
            variable54 = variable53;
            if(!(zuuluu == variable53)) { _fun00048_ip = 1210; continue _fun00047 }
 1206:
            variable54 = source / papara;
 1210:
            variable54 = variable55.bind(variable56)(variable54, config);
            variable56 = sequen.Math;
            variable55 = variable56.min;
            variable54 = vacuum * variable54;
            variable54 = variable49 + variable54;
            variable57 = variable49 >= ctrled;
            variable49 = ctrled;
            if(!variable57) { _fun00048_ip = 1249; continue _fun00047 }
 1245:
            variable49 = _closure1_slot43;
 1249:
            variable49 = variable55.bind(variable56)(variable54, variable49);
            variable55 = entity.push;
            variable54 = {};
            variable57 = _closure1_slot14;
            variable56 = variable60.type;
            variable56 = variable57.bind(golfie)(variable56);
            variable57 = _closure1_slot39;
            if(variable56) { _fun00048_ip = 1291; continue _fun00047 }
 1283:
            variable56 = variable57.TEXT_CHANNEL;
            _fun00048_ip = 1297; continue _fun00047;
 1291:
            variable56 = variable57.VOICE_CHANNEL;
 1297:
            variable54['type'] = variable56;
            variable54['record'] = variable60;
            variable57 = _closure1_slot54;
            variable56 = variable60.id;
            variable56 = limora[variable56];
            variable56 = variable57.bind(golfie)(variable49, variable56);
            variable54['score'] = variable56;
            variable57 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable56 = variable56[record];
            variable59 = variable57.bind(golfie)(variable56);
            variable58 = variable59.computeChannelName;
            variable57 = _closure1_slot32;
            variable56 = _closure1_slot29;
            variable56 = variable58.bind(variable59)(variable60, variable57, variable56);
            variable54['comparator'] = variable56;
            variable54['sortable'] = variable51;
            variable54 = variable55.bind(entity)(variable54);
            variable47 = variable53;
            variable46 = variable52;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable49;
            variable42 = offset;
            variable41 = verify;
            variable40 = variable48;
            variable39 = report;
 1410:
            variable48 = cntext.bind(golfie)();
            report = variable48.done;
            kiloes = variable47;
            backup = variable46;
            foxtra = variable45;
            romeon = variable44;
            yankee = variable43;
            offset = variable42;
            verify = variable41;
            option = variable40;
            oscard = variable39;
            sizing = variable48;
            if(!report) { _fun00048_ip = 424; continue _fun00047 }
 1455:
            report = entity.sort;
            oscard = _closure1_slot1;
            option = _closure1_slot3;
            tangon = 33;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            tangon = report.bind(entity)(tangon);
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00048_ip = 1502; continue _fun00047 }
 1493:
            tangon = entity.length;
            zuuluu = tangon > michal;
 1502:
            if(!zuuluu) { _fun00048_ip = 1511; continue _fun00047 }
 1505:
            entity['length'] = michal;
 1511:
            return entity;
        }
    };
    golfie['queryChannels'] = yankee;
    yankee = function(argFoo) { // Original name: queryGuilds
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            tangon = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00054_ip = 23; continue _fun00053 }
 20:
            michal = 10;
 23:
            backup = entity.fuzzy;
            if(!(backup === oscard)) { _fun00054_ip = 35; continue _fun00053 }
 33:
            backup = true;
 35:
            foxtra = entity.filter;
            if(!(foxtra === oscard)) { _fun00054_ip = 51; continue _fun00053 }
 44:
            foxtra = _closure1_slot44;
 51:
            romeon = entity.boosters;
            if(!(romeon === oscard)) { _fun00054_ip = 63; continue _fun00053 }
 61:
            romeon = {};
 63:
            entity = '';
            if(!(entity !== tangon)) { _fun00054_ip = 81; continue _fun00053 }
 71:
            zuuluu = tangon.toLocaleLowerCase;
            entity = zuuluu.bind(tangon)();
 81:
            yankee = {};
            golfie = global;
            sizing = golfie.RegExp;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            tangon = 29;
            option = verify[tangon];
            offset = report.bind(oscard)(option);
            option = offset.escape;
            kiloes = option.bind(offset)(entity);
            option = golfie.HermesInternal;
            offset = option.concat;
            option = '^';
            vacuum = offset.bind(option)(kiloes);
            option = sizing.prototype;
            kiloes = Object.create(option, {constructor: {value: sizing}});
            option = 'i';
            sequen = kiloes;
            ctrled = option;
            offset = new sequen[sizing](vacuum, ctrled, source);
            offset = offset instanceof Object ? offset : kiloes;
            yankee['exactQuery'] = offset;
            golfie = golfie.RegExp;
            tangon = verify[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.escape;
            vacuum = tangon.bind(report)(entity);
            report = golfie.prototype;
            report = Object.create(report, {constructor: {value: golfie}});
            sequen = report;
            tangon = new sequen[golfie](vacuum, ctrled, source);
            tangon = tangon instanceof Object ? tangon : report;
            yankee['containQuery'] = tangon;
            yankee['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot52;
            golfie = _closure1_slot25;
            tangon = golfie.getGuildsArray;
            tangon = tangon.bind(golfie)();
            offset = report.bind(oscard)(tangon);
            report = offset.bind(oscard)();
            tangon = report.done;
            verify = 0;
            option = report;
            golfie = undefined;
            report = undefined;
            if(tangon) { _fun00054_ip = 427; continue _fun00053 }
 284:
            result = option.value;
            tangon = foxtra.bind(oscard)(result);
            if(!tangon) { _fun00054_ip = 409; continue _fun00053 }
 297:
            kiloes = result.name;
            tangon = kiloes.toLocaleLowerCase;
            kiloes = tangon.bind(kiloes)();
            tangon = _closure1_slot55;
            tangon = tangon.bind(oscard)(kiloes, yankee, backup);
            golfie = kiloes;
            report = tangon;
            if(!(tangon > verify)) { _fun00054_ip = 409; continue _fun00053 }
 333:
            output = entity.push;
            sizing = {};
            echoed = _closure1_slot39;
            echoed = echoed.GUILD;
            sizing['type'] = echoed;
            sizing['record'] = result;
            update = _closure1_slot54;
            echoed = result.id;
            echoed = romeon[echoed];
            echoed = update.bind(oscard)(tangon, echoed);
            sizing['score'] = echoed;
            result = result.name;
            sizing['comparator'] = result;
            sizing['sortable'] = kiloes;
            sizing = output.bind(entity)(sizing);
            golfie = kiloes;
            report = tangon;
 409:
            kiloes = offset.bind(oscard)();
            tangon = kiloes.done;
            option = kiloes;
            if(!tangon) { _fun00054_ip = 284; continue _fun00053 }
 427:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 33;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00054_ip = 473; continue _fun00053 }
 467:
            entity['length'] = michal;
 473:
            return entity;
        }
    };
    golfie['queryGuilds'] = yankee;
    yankee = function(argFoo) { // Original name: queryDMChannels
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            verify = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00056_ip = 25; continue _fun00055 }
 22:
            michal = 10;
 25:
            golfie = entity.boosters;
            if(!(golfie === oscard)) { _fun00056_ip = 37; continue _fun00055 }
 35:
            golfie = {};
 37:
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = oscard;
            offset = _closure1_slot51;
            report = _closure1_slot18;
            entity = report.getPrivateChannelsVersion;
            option = entity.bind(report)();
            report = _closure1_slot29;
            entity = report.getVersion;
            report = entity.bind(report)();
            yankee = _closure1_slot32;
            entity = yankee.getUserStoreVersion;
            entity = entity.bind(yankee)();
            entity = offset.bind(oscard)(option, report, entity);
            report = entity.channelsByRecipientId;
            _closure2_slot0 = report;
            report = entity.recipientsById;
            _closure2_slot1 = report;
            option = entity.recipients;
            report = _closure1_slot57;
            entity = {};
            entity['query'] = verify;
            entity['members'] = option;
            option = option.length;
            entity['limit'] = option;
            entity['boosters'] = golfie;
            golfie = report.bind(oscard)(entity);
            entity = new Array(0);
            _closure2_slot2 = entity;
            report = golfie.forEach;
            tangon = function(argFoo) {
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.get;
                    entity = tangon.record;
                    entity = entity.id;
                    golfie = michal.bind(zuuluu)(entity);
                    entity = null;
                    if(!(entity != golfie)) { _fun00058_ip = 163; continue _fun00057 }
 40:
                    zuuluu = _closure2_slot2;
                    michal = zuuluu.push;
                    entity = {};
                    option = _closure1_slot39;
                    option = option.DM;
                    entity['type'] = option;
                    entity['record'] = golfie;
                    golfie = tangon.score;
                    entity['score'] = golfie;
                    option = _closure1_slot1;
                    golfie = _closure1_slot3;
                    oscard = 32;
                    golfie = golfie[oscard];
                    oscard = undefined;
                    golfie = option.bind(oscard)(golfie);
                    oscard = golfie.getUserTag;
                    verify = _closure2_slot1;
                    option = verify.get;
                    report = tangon.record;
                    report = report.id;
                    report = option.bind(verify)(report);
                    report = oscard.bind(golfie)(report);
                    entity['comparator'] = report;
                    tangon = tangon.sortable;
                    entity['sortable'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 163:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = report.bind(golfie)(tangon);
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 33;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00056_ip = 235; continue _fun00055 }
 229:
            entity['length'] = michal;
 235:
            return entity;
        }
    };
    golfie['queryDMChannels'] = yankee;
    yankee = function(argFoo) { // Original name: queryGroupDMs
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            entity = argFoo;
            offset = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00060_ip = 23; continue _fun00059 }
 20:
            michal = 10;
 23:
            result = entity.fuzzy;
            if(!(result === oscard)) { _fun00060_ip = 35; continue _fun00059 }
 33:
            result = true;
 35:
            output = entity.filter;
            if(!(output === oscard)) { _fun00060_ip = 51; continue _fun00059 }
 44:
            output = _closure1_slot44;
 51:
            sizing = entity.boosters;
            if(!(sizing === oscard)) { _fun00060_ip = 63; continue _fun00059 }
 61:
            sizing = {};
 63:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            kiloes = 31;
            entity = option[kiloes];
            report = golfie.bind(oscard)(entity);
            tangon = report.stripDiacritics;
            entity = option[kiloes];
            verify = golfie.bind(oscard)(entity);
            golfie = verify.normalize;
            entity = offset.toLocaleLowerCase;
            entity = entity.bind(offset)();
            entity = golfie.bind(verify)(entity);
            entity = tangon.bind(report)(entity);
            backup = {};
            foxtra = global;
            yankee = foxtra.RegExp;
            golfie = _closure1_slot1;
            tangon = 29;
            report = option[tangon];
            verify = golfie.bind(oscard)(report);
            report = verify.escape;
            offset = report.bind(verify)(entity);
            report = foxtra.HermesInternal;
            verify = report.concat;
            report = '^';
            limora = verify.bind(report)(offset);
            verify = yankee.prototype;
            verify = Object.create(verify, {constructor: {value: yankee}});
            offset = 'i';
            whisks = verify;
            sierra = offset;
            report = new whisks[yankee](limora, sierra, status);
            report = report instanceof Object ? report : verify;
            backup['exactQuery'] = report;
            verify = foxtra.RegExp;
            tangon = option[tangon];
            report = golfie.bind(oscard)(tangon);
            tangon = report.escape;
            limora = tangon.bind(report)(entity);
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            whisks = report;
            tangon = new whisks[verify](limora, sierra, status);
            tangon = tangon instanceof Object ? tangon : report;
            backup['containQuery'] = tangon;
            backup['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot52;
            tangon = 35;
            tangon = option[tangon];
            golfie = golfie.bind(oscard)(tangon);
            option = _closure1_slot18;
            tangon = option.getMutablePrivateChannels;
            tangon = tangon.bind(option)();
            golfie = golfie.bind(oscard)(tangon);
            tangon = golfie.values;
            golfie = tangon.bind(golfie)();
            tangon = golfie.value;
            tangon = tangon.bind(golfie)();
            romeon = report.bind(oscard)(tangon);
            report = romeon.bind(oscard)();
            tangon = report.done;
            yankee = 40;
            offset = 0;
            verify = '';
            option = report;
            golfie = undefined;
            report = undefined;
            if(tangon) { _fun00060_ip = 779; continue _fun00059 }
 365:
            papara = option.value;
            tangon = papara.isMultiUserDM;
            tangon = tangon.bind(papara)();
            update = golfie;
            echoed = report;
            if(!tangon) { _fun00060_ip = 755; continue _fun00059 }
 392:
            tangon = output.bind(oscard)(papara);
            update = golfie;
            echoed = report;
            if(!tangon) { _fun00060_ip = 755; continue _fun00059 }
 409:
            vacuum = _closure1_slot0;
            tangon = _closure1_slot3;
            source = tangon[yankee];
            config = vacuum.bind(oscard)(source);
            sequen = config.computeChannelName;
            ctrled = _closure1_slot32;
            source = _closure1_slot29;
            ctrled = sequen.bind(config)(papara, ctrled, source);
            source = ctrled.toLocaleLowerCase;
            sequen = source.bind(ctrled)();
            source = tangon[kiloes];
            ctrled = vacuum.bind(oscard)(source);
            source = ctrled.stripDiacritics;
            tangon = tangon[kiloes];
            vacuum = vacuum.bind(oscard)(tangon);
            tangon = vacuum.normalize;
            tangon = tangon.bind(vacuum)(sequen);
            source = source.bind(ctrled)(tangon);
            tangon = _closure1_slot55;
            config = tangon.bind(oscard)(source, backup, result);
            ctrled = papara.name;
            tangon = config;
            if(!(verify !== ctrled)) { _fun00060_ip = 636; continue _fun00059 }
 520:
            record = _closure1_slot0;
            ctrled = _closure1_slot3;
            vacuum = ctrled[yankee];
            target = record.bind(oscard)(vacuum);
            cntext = target.computeDefaultGroupDmName;
            sequen = _closure1_slot32;
            vacuum = _closure1_slot29;
            sequen = cntext.bind(target)(papara, sequen, vacuum);
            vacuum = sequen.toLocaleLowerCase;
            cntext = vacuum.bind(sequen)();
            vacuum = ctrled[kiloes];
            sequen = record.bind(oscard)(vacuum);
            vacuum = sequen.stripDiacritics;
            ctrled = ctrled[kiloes];
            record = record.bind(oscard)(ctrled);
            ctrled = record.normalize;
            ctrled = ctrled.bind(record)(cntext);
            record = vacuum.bind(sequen)(ctrled);
            sequen = foxtra.Math;
            vacuum = sequen.max;
            ctrled = _closure1_slot55;
            ctrled = ctrled.bind(oscard)(record, backup, result);
            tangon = vacuum.bind(sequen)(config, ctrled);
 636:
            update = source;
            echoed = tangon;
            if(!(tangon > offset)) { _fun00060_ip = 755; continue _fun00059 }
 646:
            vacuum = entity.push;
            ctrled = {};
            sequen = _closure1_slot39;
            sequen = sequen.GROUP_DM;
            ctrled['type'] = sequen;
            ctrled['record'] = papara;
            config = _closure1_slot54;
            sequen = papara.id;
            sequen = sizing[sequen];
            sequen = config.bind(oscard)(tangon, sequen);
            ctrled['score'] = sequen;
            config = _closure1_slot0;
            sequen = _closure1_slot3;
            sequen = sequen[yankee];
            cntext = config.bind(oscard)(sequen);
            record = cntext.computeChannelName;
            config = _closure1_slot32;
            sequen = _closure1_slot29;
            sequen = record.bind(cntext)(papara, config, sequen);
            ctrled['comparator'] = sequen;
            ctrled['sortable'] = source;
            ctrled = vacuum.bind(entity)(ctrled);
            update = source;
            echoed = tangon;
 755:
            source = romeon.bind(oscard)();
            tangon = source.done;
            golfie = update;
            report = echoed;
            option = source;
            if(!tangon) { _fun00060_ip = 365; continue _fun00059 }
 779:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 33;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00060_ip = 825; continue _fun00059 }
 819:
            entity['length'] = michal;
 825:
            return entity;
        }
    };
    golfie['queryGroupDMs'] = yankee;
    yankee = function(argFoo) { // Original name: queryApplications
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00062_ip = 23; continue _fun00061 }
 20:
            michal = 10;
 23:
            foxtra = entity.fuzzy;
            if(!(foxtra === oscard)) { _fun00062_ip = 35; continue _fun00061 }
 33:
            foxtra = true;
 35:
            romeon = entity.filter;
            if(!(romeon === oscard)) { _fun00062_ip = 51; continue _fun00061 }
 44:
            romeon = _closure1_slot44;
 51:
            entity = zuuluu.toLocaleLowerCase;
            entity = entity.bind(zuuluu)();
            yankee = {};
            golfie = global;
            kiloes = golfie.RegExp;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            tangon = 29;
            option = verify[tangon];
            offset = report.bind(oscard)(option);
            option = offset.escape;
            backup = option.bind(offset)(entity);
            option = golfie.HermesInternal;
            offset = option.concat;
            option = '^';
            source = offset.bind(option)(backup);
            option = kiloes.prototype;
            backup = Object.create(option, {constructor: {value: kiloes}});
            option = 'i';
            ctrled = backup;
            update = option;
            offset = new ctrled[kiloes](source, update, echoed);
            offset = offset instanceof Object ? offset : backup;
            yankee['exactQuery'] = offset;
            golfie = golfie.RegExp;
            tangon = verify[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.escape;
            source = tangon.bind(report)(entity);
            report = golfie.prototype;
            report = Object.create(report, {constructor: {value: golfie}});
            ctrled = report;
            tangon = new ctrled[golfie](source, update, echoed);
            tangon = tangon instanceof Object ? tangon : report;
            yankee['containQuery'] = tangon;
            yankee['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot52;
            tangon = _closure1_slot49;
            tangon = tangon.bind(oscard)();
            offset = report.bind(oscard)(tangon);
            report = offset.bind(oscard)();
            tangon = report.done;
            verify = 0;
            option = report;
            golfie = undefined;
            report = undefined;
            if(tangon) { _fun00062_ip = 384; continue _fun00061 }
 258:
            tangon = option.value;
            output = tangon.application;
            tangon = romeon.bind(oscard)(output);
            if(!tangon) { _fun00062_ip = 369; continue _fun00061 }
 276:
            backup = output.name;
            tangon = backup.toLocaleLowerCase;
            backup = tangon.bind(backup)();
            tangon = _closure1_slot55;
            tangon = tangon.bind(oscard)(backup, yankee, foxtra);
            golfie = backup;
            report = tangon;
            if(!(tangon > verify)) { _fun00062_ip = 369; continue _fun00061 }
 312:
            sizing = entity.push;
            kiloes = {};
            result = _closure1_slot39;
            result = result.APPLICATION;
            kiloes['type'] = result;
            kiloes['record'] = output;
            kiloes['score'] = tangon;
            output = output.name;
            kiloes['comparator'] = output;
            kiloes['sortable'] = backup;
            kiloes = sizing.bind(entity)(kiloes);
            golfie = backup;
            report = tangon;
 369:
            backup = offset.bind(oscard)();
            tangon = backup.done;
            option = backup;
            if(!tangon) { _fun00062_ip = 258; continue _fun00061 }
 384:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 33;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00062_ip = 430; continue _fun00061 }
 424:
            entity['length'] = michal;
 430:
            return entity;
        }
    };
    golfie['queryApplications'] = yankee;
    yankee = function(argFoo) { // Original name: queryInAppNavigations
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00064_ip = 25; continue _fun00063 }
 22:
            michal = 10;
 25:
            vacuum = entity.fuzzy;
            if(!(vacuum === oscard)) { _fun00064_ip = 37; continue _fun00063 }
 35:
            vacuum = true;
 37:
            var _closure2_slot0 = vacuum;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = oscard;
            entity = zuuluu.toLocaleLowerCase;
            entity = entity.bind(zuuluu)();
            ctrled = {};
            option = global;
            foxtra = option.RegExp;
            golfie = _closure1_slot1;
            yankee = _closure1_slot3;
            report = 29;
            verify = yankee[report];
            offset = golfie.bind(oscard)(verify);
            verify = offset.escape;
            romeon = verify.bind(offset)(entity);
            verify = option.HermesInternal;
            offset = verify.concat;
            verify = '^';
            sierra = offset.bind(verify)(romeon);
            verify = foxtra.prototype;
            romeon = Object.create(verify, {constructor: {value: foxtra}});
            verify = 'i';
            limora = romeon;
            status = verify;
            offset = new limora[foxtra](sierra, status, target);
            offset = offset instanceof Object ? offset : romeon;
            ctrled['exactQuery'] = offset;
            option = option.RegExp;
            report = yankee[report];
            golfie = golfie.bind(oscard)(report);
            report = golfie.escape;
            sierra = report.bind(golfie)(entity);
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            limora = golfie;
            report = new limora[option](sierra, status, target);
            report = report instanceof Object ? report : golfie;
            ctrled['containQuery'] = report;
            ctrled['queryLower'] = entity;
            _closure2_slot1 = ctrled;
            source = {};
            entity = _closure1_slot5;
            option = entity.SHOP;
            offset = _closure1_slot0;
            golfie = 41;
            report = yankee[golfie];
            report = offset.bind(oscard)(report);
            romeon = report.intl;
            verify = romeon.string;
            report = yankee[golfie];
            report = offset.bind(oscard)(report);
            report = report.t;
            report = report.pWG4zc;
            verify = verify.bind(romeon)(report);
            report = new Array(1);
            report[0] = verify;
            source[option] = report;
            option = entity.NITRO_HOME;
            report = yankee[golfie];
            report = offset.bind(oscard)(report);
            romeon = report.intl;
            verify = romeon.string;
            report = yankee[golfie];
            report = offset.bind(oscard)(report);
            report = report.t;
            report = report.Ipxkoq;
            verify = verify.bind(romeon)(report);
            report = new Array(1);
            report[0] = verify;
            source[option] = report;
            option = entity.QUEST_HOME;
            report = yankee[golfie];
            report = offset.bind(oscard)(report);
            romeon = report.intl;
            verify = romeon.string;
            report = yankee[golfie];
            report = offset.bind(oscard)(report);
            report = report.t;
            report = report.JALI2N;
            verify = verify.bind(romeon)(report);
            report = new Array(1);
            report[0] = verify;
            source[option] = report;
            report = entity.APPS_HOME;
            entity = yankee[golfie];
            entity = offset.bind(oscard)(entity);
            verify = entity.intl;
            option = verify.string;
            entity = yankee[golfie];
            entity = offset.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.PHjkRE;
            option = option.bind(verify)(entity);
            entity = new Array(2);
            entity[0] = option;
            option = yankee[golfie];
            option = offset.bind(oscard)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.AKcFUl;
            golfie = option.bind(verify)(golfie);
            entity[1] = golfie;
            source[report] = entity;
            entity = new Array(0);
            _closure2_slot2 = entity;
            echoed = source;
            kiloes = 0;
            backup = null;
            foxtra = undefined;
            romeon = undefined;
            yankee = undefined;
            offset = undefined;
            for(sizing in echoed)
 564:
            {
 576:
                golfie = sizing;
                report = _closure1_slot5;
                verify = report[golfie];
                golfie = source[verify];
                if(backup == golfie) { _fun00064_ip = 564; continue _fun00063 }
 595:
                report = _closure1_slot52;
                option = report.bind(oscard)(golfie);
                golfie = option.bind(oscard)();
                report = golfie.done;
                foxtra = golfie;
                romeon = option;
                golfie = foxtra;
                if(report) { _fun00064_ip = 564; continue _fun00063 }
 625:
                sequen = golfie.value;
                report = sequen.toLocaleLowerCase;
                record = report.bind(sequen)();
                report = _closure1_slot55;
                config = report.bind(oscard)(record, ctrled, vacuum);
                if(!(config > kiloes)) { _fun00064_ip = 725; continue _fun00063 }
 655:
                sequen = entity.push;
                report = {};
                cntext = _closure1_slot39;
                cntext = cntext.IN_APP_NAVIGATION;
                report['type'] = cntext;
                papara = _closure1_slot4;
                cntext = papara.fromType;
                cntext = cntext.bind(papara)(verify);
                report['record'] = cntext;
                cntext = _closure1_slot54;
                cntext = cntext.bind(oscard)(config);
                report['score'] = cntext;
                report['comparator'] = record;
                report['sortable'] = record;
                report = sequen.bind(entity)(report);
 725:
                sequen = option.bind(oscard)();
                report = sequen.done;
                foxtra = sequen;
                romeon = option;
                yankee = record;
                offset = config;
                golfie = foxtra;
                if(report) { _fun00064_ip = 564; continue _fun00063 }
 755:
                _fun00064_ip = 625; continue _fun00063;
            }
 760:
            golfie = _closure1_slot41;
            report = golfie.getState;
            report = report.bind(golfie)();
            golfie = report.options;
            report = golfie.forEach;
            tangon = function(argFoo) {
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    report = argFoo;
                    entity = report.title;
                    zuuluu = new Array(1);
                    zuuluu[0] = entity;
                    michal = zuuluu.concat;
                    entity = report.searchableTitles;
                    option = michal.bind(zuuluu)(entity);
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 35;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.max;
                    oscard = option.map;
                    michal = function(argFoo) {
                        michal = argFoo;
                        zuuluu = _closure1_slot54;
                        oscard = _closure1_slot55;
                        entity = michal.toLocaleLowerCase;
                        report = entity.bind(michal)();
                        tangon = _closure2_slot1;
                        entity = _closure2_slot0;
                        michal = undefined;
                        entity = oscard.bind(michal)(report, tangon, entity);
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    michal = oscard.bind(option)(michal);
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    tangon = michal != zuuluu;
                    michal = 0;
                    oscard = 0;
                    if(!tangon) { _fun00066_ip = 102; continue _fun00065 }
 99:
                    oscard = zuuluu;
 102:
                    if(!(oscard > michal)) { _fun00066_ip = 230; continue _fun00065 }
 109:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.push;
                    michal = {};
                    option = _closure1_slot39;
                    option = option.IN_APP_NAVIGATION;
                    michal['type'] = option;
                    yankee = _closure1_slot4;
                    offset = yankee.fromType;
                    golfie = _closure1_slot5;
                    verify = golfie.SETTINGS;
                    option = report.path;
                    golfie = report.title;
                    golfie = offset.bind(yankee)(verify, option, golfie);
                    michal['record'] = golfie;
                    michal['score'] = oscard;
                    golfie = report.title;
                    oscard = golfie.toLocaleLowerCase;
                    oscard = oscard.bind(golfie)();
                    michal['comparator'] = oscard;
                    oscard = report.title;
                    report = oscard.toLocaleLowerCase;
                    report = report.bind(oscard)();
                    michal['sortable'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 230:
                    return entity;
                }
            };
            tangon = report.bind(golfie)(tangon);
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 33;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00064_ip = 840; continue _fun00063 }
 834:
            entity['length'] = michal;
 840:
            return entity;
        }
    };
    golfie['queryInAppNavigations'] = yankee;
    yankee = function(argFoo) { // Original name: querySKUs
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00068_ip = 23; continue _fun00067 }
 20:
            michal = 10;
 23:
            foxtra = entity.fuzzy;
            if(!(foxtra === oscard)) { _fun00068_ip = 35; continue _fun00067 }
 33:
            foxtra = true;
 35:
            romeon = entity.filter;
            if(!(romeon === oscard)) { _fun00068_ip = 51; continue _fun00067 }
 44:
            romeon = _closure1_slot44;
 51:
            entity = zuuluu.toLocaleLowerCase;
            entity = entity.bind(zuuluu)();
            yankee = {};
            report = global;
            kiloes = report.RegExp;
            golfie = _closure1_slot1;
            option = _closure1_slot3;
            tangon = 29;
            verify = option[tangon];
            offset = golfie.bind(oscard)(verify);
            verify = offset.escape;
            backup = verify.bind(offset)(entity);
            verify = report.HermesInternal;
            offset = verify.concat;
            verify = '^';
            vacuum = offset.bind(verify)(backup);
            offset = kiloes.prototype;
            backup = Object.create(offset, {constructor: {value: kiloes}});
            offset = 'i';
            sequen = backup;
            ctrled = offset;
            verify = new sequen[kiloes](vacuum, ctrled, source);
            verify = verify instanceof Object ? verify : backup;
            yankee['exactQuery'] = verify;
            verify = report.RegExp;
            tangon = option[tangon];
            report = golfie.bind(oscard)(tangon);
            tangon = report.escape;
            vacuum = tangon.bind(report)(entity);
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            sequen = report;
            tangon = new sequen[verify](vacuum, ctrled, source);
            tangon = tangon instanceof Object ? tangon : report;
            yankee['containQuery'] = tangon;
            yankee['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot52;
            tangon = 35;
            tangon = option[tangon];
            golfie = golfie.bind(oscard)(tangon);
            option = _closure1_slot33;
            tangon = option.getSKUs;
            tangon = tangon.bind(option)();
            golfie = golfie.bind(oscard)(tangon);
            tangon = golfie.values;
            golfie = tangon.bind(golfie)();
            tangon = golfie.value;
            tangon = tangon.bind(golfie)();
            offset = report.bind(oscard)(tangon);
            report = offset.bind(oscard)();
            tangon = report.done;
            verify = 0;
            option = report;
            golfie = undefined;
            report = undefined;
            if(tangon) { _fun00068_ip = 462; continue _fun00067 }
 301:
            echoed = option.value;
            sizing = echoed.type;
            tangon = _closure1_slot37;
            tangon = tangon.DURABLE_PRIMARY;
            kiloes = golfie;
            backup = report;
            if(!(sizing === tangon)) { _fun00068_ip = 438; continue _fun00067 }
 331:
            tangon = romeon.bind(oscard)(echoed);
            kiloes = golfie;
            backup = report;
            if(!tangon) { _fun00068_ip = 438; continue _fun00067 }
 345:
            sizing = echoed.name;
            tangon = sizing.toLocaleLowerCase;
            sizing = tangon.bind(sizing)();
            tangon = _closure1_slot55;
            tangon = tangon.bind(oscard)(sizing, yankee, foxtra);
            kiloes = sizing;
            backup = tangon;
            if(!(tangon > verify)) { _fun00068_ip = 438; continue _fun00067 }
 381:
            result = entity.push;
            output = {};
            update = _closure1_slot39;
            update = update.SKU;
            output['type'] = update;
            output['record'] = echoed;
            output['score'] = tangon;
            echoed = echoed.name;
            output['comparator'] = echoed;
            output['sortable'] = sizing;
            output = result.bind(entity)(output);
            kiloes = sizing;
            backup = tangon;
 438:
            sizing = offset.bind(oscard)();
            tangon = sizing.done;
            golfie = kiloes;
            report = backup;
            option = sizing;
            if(!tangon) { _fun00068_ip = 301; continue _fun00067 }
 462:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 33;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00068_ip = 508; continue _fun00067 }
 502:
            entity['length'] = michal;
 508:
            return entity;
        }
    };
    golfie['querySKUs'] = yankee;
    golfie['getRecentlyTalked'] = option;
    option = function(argFoo) { // Original name: queryMentionResults
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            tangon = argFoo;
            offset = this;
            sizing = tangon.query;
            romeon = tangon.channel;
            var _closure2_slot0 = romeon;
            yankee = tangon.canMentionEveryone;
            oscard = undefined;
            if(!(yankee === oscard)) { _fun00070_ip = 36; continue _fun00069 }
 34:
            yankee = false;
 36:
            var _closure2_slot1 = yankee;
            entity = tangon.canMentionHere;
            if(!(entity === oscard)) { _fun00070_ip = 52; continue _fun00069 }
 50:
            entity = true;
 52:
            zuuluu = tangon.canMentionUsers;
            if(!(zuuluu === oscard)) { _fun00070_ip = 64; continue _fun00069 }
 62:
            zuuluu = true;
 64:
            verify = tangon.canMentionRoles;
            if(!(verify === oscard)) { _fun00070_ip = 76; continue _fun00069 }
 74:
            verify = true;
 76:
            michal = tangon.includeAllGuildUsers;
            if(!(michal === oscard)) { _fun00070_ip = 88; continue _fun00069 }
 86:
            michal = false;
 88:
            golfie = tangon.includeNonMentionableRoles;
            if(!(golfie === oscard)) { _fun00070_ip = 100; continue _fun00069 }
 98:
            golfie = false;
 100:
            var _closure2_slot2 = golfie;
            kiloes = tangon.checkRecentlyTalkedOnEmptyQuery;
            if(!(kiloes === oscard)) { _fun00070_ip = 116; continue _fun00069 }
 114:
            kiloes = true;
 116:
            golfie = tangon.limit;
            if(!(golfie === oscard)) { _fun00070_ip = 133; continue _fun00069 }
 126:
            golfie = _closure1_slot38;
 133:
            backup = tangon.request;
            foxtra = tangon.allowSnowflake;
            if(!(foxtra === oscard)) { _fun00070_ip = 151; continue _fun00069 }
 149:
            foxtra = false;
 151:
            var _closure2_slot3 = foxtra;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = oscard;
            if(zuuluu) { _fun00070_ip = 172; continue _fun00069 }
 166:
            tangon = new Array(0);
            _fun00070_ip = 290; continue _fun00069;
 172:
            if(!michal) { _fun00070_ip = 186; continue _fun00069 }
 175:
            zuuluu = romeon.guild_id;
            michal = null;
            if(!(michal == zuuluu)) { _fun00070_ip = 229; continue _fun00069 }
 186:
            zuuluu = offset.queryChannelUsers;
            michal = {};
            option = romeon.id;
            michal['channelId'] = option;
            michal['query'] = sizing;
            michal['limit'] = golfie;
            michal['checkRecentlyTalkedOnEmptyQuery'] = kiloes;
            michal['allowSnowflake'] = foxtra;
            option = zuuluu.bind(offset)(michal);
            _fun00070_ip = 275; continue _fun00069;
 229:
            zuuluu = offset.queryGuildUsers;
            michal = {};
            output = romeon.guild_id;
            michal['guildId'] = output;
            michal['query'] = sizing;
            michal['limit'] = golfie;
            michal['checkRecentlyTalkedOnEmptyQuery'] = kiloes;
            michal['request'] = backup;
            michal['allowSnowflake'] = foxtra;
            option = zuuluu.bind(offset)(michal);
 275:
            zuuluu = option.map;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.record;
                tangon = entity.score;
                zuuluu = entity.comparator;
                entity = {};
                entity['user'] = michal;
                entity['score'] = tangon;
                entity['comparator'] = zuuluu;
                golfie = _closure1_slot23;
                oscard = golfie.getNick;
                tangon = _closure2_slot0;
                report = tangon.guild_id;
                tangon = michal.id;
                tangon = oscard.bind(golfie)(report, tangon);
                entity['nick'] = tangon;
                tangon = _closure1_slot28;
                zuuluu = tangon.getStatus;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['status'] = michal;
                return entity;
            };
            tangon = zuuluu.bind(option)(michal);
 290:
            foxtra = tangon.length;
            michal = sizing.toLowerCase;
            option = michal.bind(sizing)();
            _closure2_slot4 = option;
            output = new Array(0);
            michal = output;
            offset = foxtra;
            if(!(offset < golfie)) { _fun00070_ip = 527; continue _fun00069 }
 326:
            offset = foxtra;
            michal = output;
            if(!verify) { _fun00070_ip = 527; continue _fun00069 }
 338:
            zuuluu = romeon.getGuildId;
            result = zuuluu.bind(romeon)();
            _closure2_slot5 = result;
            kiloes = _closure1_slot25;
            backup = kiloes.getGuild;
            kiloes = backup.bind(kiloes)(result);
            backup = null;
            offset = foxtra;
            michal = output;
            if(!(backup != kiloes)) { _fun00070_ip = 527; continue _fun00069 }
 384:
            result = _closure1_slot1;
            backup = _closure1_slot3;
            output = 35;
            output = backup[output];
            output = result.bind(oscard)(output);
            echoed = _closure1_slot24;
            result = echoed.getRoles;
            kiloes = kiloes.id;
            kiloes = result.bind(echoed)(kiloes);
            output = output.bind(oscard)(kiloes);
            kiloes = output.filter;
            report = function(argFoo) {
                _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                    michal = argFoo;
                    entity = michal.mentionable;
                    option = michal.name;
                    zuuluu = michal.id;
                    if(entity) { _fun00072_ip = 29; continue _fun00071 }
 22:
                    entity = _closure2_slot1;
 29:
                    if(entity) { _fun00072_ip = 39; continue _fun00071 }
 32:
                    entity = _closure2_slot2;
 39:
                    if(!entity) { _fun00072_ip = 114; continue _fun00071 }
 42:
                    tangon = _closure1_slot1;
                    report = _closure1_slot3;
                    michal = 30;
                    michal = report[michal];
                    golfie = undefined;
                    oscard = tangon.bind(golfie)(michal);
                    tangon = _closure2_slot4;
                    michal = option.toLowerCase;
                    michal = michal.bind(option)();
                    michal = oscard.bind(golfie)(tangon, michal);
                    if(michal) { _fun00072_ip = 111; continue _fun00071 }
 93:
                    tangon = _closure2_slot3;
                    if(!tangon) { _fun00072_ip = 108; continue _fun00071 }
 100:
                    report = _closure2_slot4;
                    tangon = report === zuuluu;
 108:
                    michal = tangon;
 111:
                    entity = michal;
 114:
                    if(!entity) { _fun00072_ip = 164; continue _fun00071 }
 117:
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    michal = 42;
                    tangon = tangon[michal];
                    michal = undefined;
                    report = report.bind(michal)(tangon);
                    tangon = report.castGuildIdAsEveryoneGuildRoleId;
                    michal = _closure2_slot5;
                    michal = tangon.bind(report)(michal);
                    entity = zuuluu !== michal;
 164:
                    return entity;
                }
            };
            kiloes = kiloes.bind(output)(report);
            report = kiloes.value;
            kiloes = report.bind(kiloes)();
            report = _closure1_slot0;
            zuuluu = 43;
            zuuluu = backup[zuuluu];
            backup = report.bind(oscard)(zuuluu);
            report = backup.matchSorter;
            zuuluu = {};
            output = ['name'];
            zuuluu['keys'] = output;
            kiloes = report.bind(backup)(kiloes, sizing, zuuluu);
            backup = kiloes.slice;
            report = golfie - foxtra;
            zuuluu = 0;
            zuuluu = backup.bind(kiloes)(zuuluu, report);
            report = zuuluu.length;
            offset = foxtra + report;
            michal = zuuluu;
 527:
            zuuluu = new Array(0);
            report = romeon.isPrivate;
            report = report.bind(romeon)();
            report = !report;
            if(!report) { _fun00070_ip = 550; continue _fun00069 }
 547:
            report = yankee;
 550:
            if(!report) { _fun00070_ip = 556; continue _fun00069 }
 553:
            report = verify;
 556:
            if(!report) { _fun00070_ip = 721; continue _fun00069 }
 562:
            verify = offset < golfie;
            if(!verify) { _fun00070_ip = 611; continue _fun00069 }
 569:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot3;
            yankee = 30;
            yankee = foxtra[yankee];
            yankee = romeon.bind(oscard)(yankee);
            report = _closure1_slot47;
            report = report.bind(oscard)();
            report = report.test;
            verify = yankee.bind(oscard)(option, report);
 611:
            report = offset;
            if(!verify) { _fun00070_ip = 645; continue _fun00069 }
 617:
            yankee = zuuluu.push;
            verify = _closure1_slot47;
            verify = verify.bind(oscard)();
            verify = yankee.bind(zuuluu)(verify);
            verify = 1;
            report = offset + verify;
 645:
            if(!entity) { _fun00070_ip = 652; continue _fun00069 }
 648:
            entity = report < golfie;
 652:
            if(!entity) { _fun00070_ip = 697; continue _fun00069 }
 655:
            verify = _closure1_slot1;
            offset = _closure1_slot3;
            golfie = 30;
            golfie = offset[golfie];
            golfie = verify.bind(oscard)(golfie);
            report = _closure1_slot48;
            report = report.bind(oscard)();
            report = report.test;
            entity = golfie.bind(oscard)(option, report);
 697:
            if(!entity) { _fun00070_ip = 721; continue _fun00069 }
 700:
            report = zuuluu.push;
            entity = _closure1_slot48;
            entity = entity.bind(oscard)();
            entity = report.bind(zuuluu)(entity);
 721:
            entity = {};
            entity['users'] = tangon;
            entity['globals'] = zuuluu;
            entity['roles'] = michal;
            return entity;
        }
    };
    golfie['queryMentionResults'] = option;
    option = function(argFoo) { // Original name: queryGuildMentionResults
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            tangon = argFoo;
            verify = this;
            michal = tangon.query;
            foxtra = tangon.guildId;
            var _closure2_slot0 = foxtra;
            report = tangon.canMentionEveryone;
            oscard = undefined;
            if(!(report === oscard)) { _fun00074_ip = 36; continue _fun00073 }
 34:
            report = false;
 36:
            var _closure2_slot1 = report;
            entity = tangon.canMentionUsers;
            if(!(entity === oscard)) { _fun00074_ip = 52; continue _fun00073 }
 50:
            entity = true;
 52:
            golfie = tangon.canMentionRoles;
            if(!(golfie === oscard)) { _fun00074_ip = 64; continue _fun00073 }
 62:
            golfie = true;
 64:
            tangon = tangon.canMentionNonMentionableRoles;
            if(!(tangon === oscard)) { _fun00074_ip = 76; continue _fun00073 }
 74:
            tangon = false;
 76:
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            if(entity) { _fun00074_ip = 97; continue _fun00073 }
 91:
            tangon = new Array(0);
            _fun00074_ip = 133; continue _fun00073;
 97:
            option = verify.queryGuildUsers;
            entity = {};
            entity['guildId'] = foxtra;
            entity['query'] = michal;
            verify = option.bind(verify)(entity);
            option = verify.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                oscard = entity;
                report = michal;
                zuuluu = copyDataProperties(oscard, report);
                tangon = _closure1_slot28;
                zuuluu = tangon.getStatus;
                michal = michal.record;
                michal = michal.id;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 'status';
                entity[michal] = zuuluu;
                return entity;
            };
            tangon = option.bind(verify)(entity);
 133:
            offset = tangon.length;
            entity = michal.toLowerCase;
            verify = entity.bind(michal)();
            _closure2_slot3 = verify;
            michal = new Array(0);
            _closure2_slot4 = michal;
            yankee = _closure1_slot38;
            option = offset;
            if(!(option < yankee)) { _fun00074_ip = 312; continue _fun00073 }
 177:
            option = offset;
            if(!golfie) { _fun00074_ip = 312; continue _fun00073 }
 186:
            romeon = _closure1_slot25;
            yankee = romeon.getGuild;
            yankee = yankee.bind(romeon)(foxtra);
            romeon = null;
            option = offset;
            if(!(romeon != yankee)) { _fun00074_ip = 312; continue _fun00073 }
 209:
            foxtra = _closure1_slot1;
            backup = _closure1_slot3;
            romeon = 35;
            romeon = backup[romeon];
            romeon = foxtra.bind(oscard)(romeon);
            backup = _closure1_slot24;
            foxtra = backup.getRoles;
            yankee = yankee.id;
            yankee = foxtra.bind(backup)(yankee);
            foxtra = romeon.bind(oscard)(yankee);
            romeon = foxtra.filter;
            yankee = function(argFoo) {
                _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                    michal = argFoo;
                    entity = michal.mentionable;
                    golfie = michal.name;
                    report = michal.id;
                    if(entity) { _fun00076_ip = 29; continue _fun00075 }
 22:
                    entity = _closure2_slot1;
 29:
                    if(entity) { _fun00076_ip = 39; continue _fun00075 }
 32:
                    entity = _closure2_slot2;
 39:
                    if(!entity) { _fun00076_ip = 90; continue _fun00075 }
 42:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot3;
                    michal = 30;
                    michal = tangon[michal];
                    oscard = undefined;
                    tangon = zuuluu.bind(oscard)(michal);
                    zuuluu = _closure2_slot3;
                    michal = golfie.toLowerCase;
                    michal = michal.bind(golfie)();
                    entity = tangon.bind(oscard)(zuuluu, michal);
 90:
                    if(!entity) { _fun00076_ip = 137; continue _fun00075 }
 93:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 44;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.isNotEveryoneRoleId;
                    michal = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(michal, report);
 137:
                    return entity;
                }
            };
            foxtra = romeon.bind(foxtra)(yankee);
            romeon = foxtra.take;
            yankee = _closure1_slot38;
            yankee = yankee - offset;
            romeon = romeon.bind(foxtra)(yankee);
            yankee = romeon.forEach;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot4;
                michal = zuuluu.push;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu = yankee.bind(romeon)(zuuluu);
            zuuluu = michal.length;
            option = offset + zuuluu;
 312:
            zuuluu = new Array(0);
            if(!report) { _fun00074_ip = 322; continue _fun00073 }
 319:
            report = golfie;
 322:
            if(!report) { _fun00074_ip = 480; continue _fun00073 }
 328:
            report = _closure1_slot38;
            report = option < report;
            if(!report) { _fun00074_ip = 378; continue _fun00073 }
 339:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            golfie = 30;
            golfie = yankee[golfie];
            offset = offset.bind(oscard)(golfie);
            golfie = _closure1_slot47;
            golfie = golfie.bind(oscard)();
            golfie = golfie.test;
            report = offset.bind(oscard)(verify, golfie);
 378:
            golfie = option;
            if(!report) { _fun00074_ip = 409; continue _fun00073 }
 384:
            offset = zuuluu.push;
            report = _closure1_slot47;
            report = report.bind(oscard)();
            report = offset.bind(zuuluu)(report);
            report = 1;
            golfie = option + report;
 409:
            report = _closure1_slot38;
            report = golfie < report;
            if(!report) { _fun00074_ip = 459; continue _fun00073 }
 420:
            option = _closure1_slot1;
            offset = _closure1_slot3;
            golfie = 30;
            golfie = offset[golfie];
            option = option.bind(oscard)(golfie);
            golfie = _closure1_slot48;
            golfie = golfie.bind(oscard)();
            golfie = golfie.test;
            report = option.bind(oscard)(verify, golfie);
 459:
            if(!report) { _fun00074_ip = 480; continue _fun00073 }
 462:
            report = zuuluu.push;
            entity = _closure1_slot48;
            entity = entity.bind(oscard)();
            entity = report.bind(zuuluu)(entity);
 480:
            entity = {};
            entity['users'] = tangon;
            entity['globals'] = zuuluu;
            entity['roles'] = michal;
            return entity;
        }
    };
    golfie['queryGuildMentionResults'] = option;
    option = function(argFoo) { // Original name: queryChoice
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.query;
            report = michal.choices;
            tangon = michal.limit;
            golfie = undefined;
            if(!(tangon === golfie)) { _fun00078_ip = 31; continue _fun00077 }
 28:
            tangon = 10;
 31:
            michal = michal.fuzzy;
            if(!(michal === golfie)) { _fun00078_ip = 43; continue _fun00077 }
 41:
            michal = true;
 43:
            var _closure2_slot0 = michal;
            var _closure2_slot1 = golfie;
            var _closure2_slot2 = golfie;
            var _closure2_slot3 = golfie;
            michal = zuuluu.toLocaleLowerCase;
            romeon = michal.bind(zuuluu)();
            _closure2_slot1 = romeon;
            verify = global;
            backup = verify.RegExp;
            oscard = _closure1_slot1;
            option = _closure1_slot3;
            zuuluu = 29;
            offset = option[zuuluu];
            yankee = oscard.bind(golfie)(offset);
            offset = yankee.escape;
            foxtra = offset.bind(yankee)(romeon);
            offset = verify.HermesInternal;
            yankee = offset.concat;
            offset = '^';
            sizing = yankee.bind(offset)(foxtra);
            yankee = backup.prototype;
            foxtra = Object.create(yankee, {constructor: {value: backup}});
            yankee = 'i';
            output = foxtra;
            kiloes = yankee;
            offset = new output[backup](sizing, kiloes, backup);
            offset = offset instanceof Object ? offset : foxtra;
            _closure2_slot2 = offset;
            offset = verify.RegExp;
            zuuluu = option[zuuluu];
            verify = oscard.bind(golfie)(zuuluu);
            zuuluu = verify.escape;
            sizing = zuuluu.bind(verify)(romeon);
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            output = verify;
            zuuluu = new output[offset](sizing, kiloes, backup);
            zuuluu = zuuluu instanceof Object ? zuuluu : verify;
            _closure2_slot3 = zuuluu;
            zuuluu = 35;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            oscard = zuuluu.bind(golfie)(report);
            report = oscard.map;
            zuuluu = function(argFoo, argBar) {
                _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                    tangon = argFoo;
                    oscard = _closure1_slot55;
                    michal = tangon.displayName;
                    entity = michal.toLocaleLowerCase;
                    report = entity.bind(michal)();
                    zuuluu = {};
                    michal = _closure2_slot2;
                    zuuluu['exactQuery'] = michal;
                    michal = _closure2_slot3;
                    zuuluu['containQuery'] = michal;
                    michal = _closure2_slot1;
                    zuuluu['queryLower'] = michal;
                    michal = _closure2_slot0;
                    entity = undefined;
                    zuuluu = oscard.bind(entity)(report, zuuluu, michal);
                    michal = 0;
                    entity = null;
                    if(!(zuuluu > michal)) { _fun00080_ip = 101; continue _fun00079 }
 78:
                    michal = {};
                    michal['choice'] = tangon;
                    michal['score'] = zuuluu;
                    zuuluu = argBar;
                    michal['originalIndex'] = zuuluu;
                    entity = michal;
 101:
                    return entity;
                }
            };
            report = report.bind(oscard)(zuuluu);
            zuuluu = report.filter;
            oscard = _closure1_slot0;
            michal = 37;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.score;
                entity = -1;
                entity = entity * michal;
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            michal = zuuluu;
            if(!(entity !== tangon)) { _fun00078_ip = 316; continue _fun00077 }
 305:
            entity = zuuluu.take;
            michal = entity.bind(zuuluu)(tangon);
 316:
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    golfie['queryChoice'] = option;
    option = function(argFoo) { // Original name: queryStaticRouteChannels
        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
            entity = argFoo;
            michal = entity.query;
            foxtra = entity.guild;
            entity = michal.toLocaleLowerCase;
            entity = entity.bind(michal)();
            romeon = {};
            report = global;
            verify = report.RegExp;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 29;
            oscard = zuuluu[michal];
            offset = undefined;
            golfie = tangon.bind(offset)(oscard);
            oscard = golfie.escape;
            option = oscard.bind(golfie)(entity);
            oscard = report.HermesInternal;
            golfie = oscard.concat;
            oscard = '^';
            update = golfie.bind(oscard)(option);
            oscard = verify.prototype;
            option = Object.create(oscard, {constructor: {value: verify}});
            oscard = 'i';
            source = option;
            echoed = oscard;
            golfie = new source[verify](update, echoed, result);
            golfie = golfie instanceof Object ? golfie : option;
            romeon['exactQuery'] = golfie;
            report = report.RegExp;
            michal = zuuluu[michal];
            tangon = tangon.bind(offset)(michal);
            michal = tangon.escape;
            update = michal.bind(tangon)(entity);
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            source = tangon;
            michal = new source[report](update, echoed, result);
            michal = michal instanceof Object ? michal : tangon;
            romeon['containQuery'] = michal;
            romeon['queryLower'] = entity;
            michal = _closure1_slot0;
            entity = 45;
            entity = zuuluu[entity];
            zuuluu = michal.bind(offset)(entity);
            michal = zuuluu.canSeeOnboardingHome;
            entity = foxtra.id;
            verify = michal.bind(zuuluu)(entity);
            if(!verify) { _fun00082_ip = 241; continue _fun00081 }
 212:
            zuuluu = foxtra.features;
            michal = zuuluu.has;
            entity = _closure1_slot35;
            entity = entity.HUB;
            entity = michal.bind(zuuluu)(entity);
            verify = !entity;
 241:
            zuuluu = foxtra.features;
            michal = zuuluu.has;
            entity = _closure1_slot35;
            entity = entity.COMMUNITY;
            option = michal.bind(zuuluu)(entity);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 46;
            entity = zuuluu[entity];
            michal = michal.bind(offset)(entity);
            entity = michal.isGuildOnboardingAvailable;
            golfie = entity.bind(michal)(foxtra);
            if(!golfie) { _fun00082_ip = 327; continue _fun00081 }
 301:
            zuuluu = foxtra.features;
            michal = zuuluu.has;
            entity = _closure1_slot35;
            entity = entity.COMMUNITY;
            golfie = michal.bind(zuuluu)(entity);
 327:
            entity = new Array(0);
            michal = {};
            tangon = _closure1_slot40;
            zuuluu = tangon.SERVER_GUIDE;
            michal['id'] = zuuluu;
            backup = _closure1_slot0;
            kiloes = _closure1_slot3;
            zuuluu = 41;
            report = kiloes[zuuluu];
            report = backup.bind(offset)(report);
            sizing = report.intl;
            oscard = sizing.string;
            report = kiloes[zuuluu];
            report = backup.bind(offset)(report);
            report = report.t;
            report = report.VbpLyc;
            report = oscard.bind(sizing)(report);
            michal['name'] = report;
            oscard = new Array(3);
            oscard[0] = michal;
            michal = {};
            report = tangon.CHANNEL_BROWSER;
            michal['id'] = report;
            report = kiloes[zuuluu];
            report = backup.bind(offset)(report);
            output = report.intl;
            sizing = output.string;
            report = kiloes[zuuluu];
            report = backup.bind(offset)(report);
            report = report.t;
            report = report.et6wam;
            report = sizing.bind(output)(report);
            michal['name'] = report;
            oscard[1] = michal;
            michal = {};
            tangon = tangon.CUSTOMIZE_COMMUNITY;
            michal['id'] = tangon;
            tangon = kiloes[zuuluu];
            tangon = backup.bind(offset)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = kiloes[zuuluu];
            zuuluu = backup.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.h9mGOD;
            zuuluu = tangon.bind(report)(zuuluu);
            michal['name'] = zuuluu;
            oscard[2] = michal;
            michal = oscard.length;
            report = 0;
            michal = report < michal;
            tangon = false;
            zuuluu = 0;
            if(!michal) { _fun00082_ip = 764; continue _fun00081 }
 563:
            kiloes = oscard[zuuluu];
            backup = kiloes.id;
            michal = _closure1_slot40;
            michal = michal.SERVER_GUIDE;
            if(!(backup === michal)) { _fun00082_ip = 592; continue _fun00081 }
 586:
            if(!verify) { _fun00082_ip = 749; continue _fun00081 }
 592:
            backup = kiloes.id;
            michal = _closure1_slot40;
            michal = michal.CHANNEL_BROWSER;
            if(!(backup === michal)) { _fun00082_ip = 617; continue _fun00081 }
 611:
            if(!option) { _fun00082_ip = 749; continue _fun00081 }
 617:
            backup = kiloes.id;
            michal = _closure1_slot40;
            michal = michal.CUSTOMIZE_COMMUNITY;
            if(!(backup === michal)) { _fun00082_ip = 639; continue _fun00081 }
 636:
            if(!golfie) { _fun00082_ip = 749; continue _fun00081 }
 639:
            backup = _closure1_slot55;
            sizing = kiloes.name;
            michal = sizing.toLocaleLowerCase;
            michal = michal.bind(sizing)();
            michal = backup.bind(offset)(michal, romeon, tangon);
            if(!(michal > report)) { _fun00082_ip = 749; continue _fun00081 }
 669:
            backup = entity.push;
            sizing = _closure1_slot16;
            michal = {};
            output = kiloes.id;
            michal['id'] = output;
            kiloes = kiloes.name;
            michal['name'] = kiloes;
            kiloes = _closure1_slot36;
            kiloes = kiloes.UNKNOWN;
            michal['type'] = kiloes;
            kiloes = foxtra.id;
            michal['guild_id'] = kiloes;
            kiloes = sizing.prototype;
            kiloes = Object.create(kiloes, {constructor: {value: sizing}});
            source = kiloes;
            update = michal;
            michal = new source[sizing](update, echoed);
            michal = michal instanceof Object ? michal : kiloes;
            michal = backup.bind(entity)(michal);
 749:
            zuuluu = zuuluu + 1;
            michal = oscard.length;
            if(zuuluu < michal) { _fun00082_ip = 563; continue _fun00081 }
 764:
            return entity;
        }
    };
    golfie['queryStaticRouteChannels'] = option;
    option = function(argFoo) { // Original name: queryChannelResults
        _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
            entity = argFoo;
            report = this;
            option = entity.query;
            verify = entity.channel;
            oscard = entity.type;
            golfie = undefined;
            if(!(oscard === golfie)) { _fun00084_ip = 36; continue _fun00083 }
 29:
            oscard = _closure1_slot20;
 36:
            entity = entity.channelTypes;
            var _closure2_slot0 = entity;
            entity = {};
            tangon = report.queryChannels;
            zuuluu = {};
            zuuluu['query'] = option;
            option = verify.getGuildId;
            option = option.bind(verify)();
            zuuluu['guildId'] = option;
            zuuluu['limit'] = golfie;
            zuuluu['fuzzy'] = golfie;
            golfie = function(argFoo) { // Original name: filter
                _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity == zuuluu;
                    if(entity) { _fun00086_ip = 38; continue _fun00085 }
 16:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.includes;
                    michal = argFoo;
                    michal = michal.type;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            zuuluu['filter'] = golfie;
            zuuluu['type'] = oscard;
            oscard = true;
            zuuluu['allowEmptyQueries'] = oscard;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            entity['channels'] = michal;
            return entity;
        }
    };
    golfie['queryChannelResults'] = option;
    option = function(argFoo) { // Original name: queryApplicationCommandChannelResults
        _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
            entity = argFoo;
            result = this;
            output = entity.query;
            zuuluu = entity.channel;
            oscard = entity.channelTypes;
            var _closure2_slot0 = oscard;
            verify = entity.limit;
            yankee = undefined;
            if(!(verify === yankee)) { _fun00088_ip = 47; continue _fun00087 }
 40:
            verify = _closure1_slot38;
 47:
            sizing = entity.allowSnowflake;
            michal = zuuluu.guild_id;
            entity = null;
            if(!(entity != michal)) { _fun00088_ip = 297; continue _fun00087 }
 67:
            romeon = new Array(0);
            kiloes = _closure1_slot50;
            report = kiloes.length;
            option = 0;
            report = option < report;
            backup = true;
            foxtra = false;
            golfie = 0;
            offset = romeon;
            if(!report) { _fun00088_ip = 194; continue _fun00087 }
 101:
            source = kiloes[golfie];
            echoed = romeon.concat;
            update = result.queryChannels;
            report = {};
            report['query'] = output;
            ctrled = zuuluu.guild_id;
            report['guildId'] = ctrled;
            report['limit'] = verify;
            report['fuzzy'] = backup;
            ctrled = function(argFoo) { // Original name: filter
                _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity == zuuluu;
                    if(entity) { _fun00090_ip = 38; continue _fun00089 }
 16:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.includes;
                    michal = argFoo;
                    michal = michal.type;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            report['filter'] = ctrled;
            report['type'] = source;
            report['allowEmptyQueries'] = backup;
            report['requireVocalConnectAccess'] = foxtra;
            report['allowSnowflake'] = sizing;
            report = update.bind(result)(report);
            romeon = echoed.bind(romeon)(report);
            golfie = golfie + 1;
            report = kiloes.length;
            offset = romeon;
            if(golfie < report) { _fun00088_ip = 101; continue _fun00087 }
 194:
            golfie = offset.filter;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                michal = entity.id;
                entity = 'null';
                entity = entity !== michal;
                return entity;
            };
            golfie = golfie.bind(offset)(report);
            report = golfie.sort;
            offset = _closure1_slot1;
            romeon = _closure1_slot3;
            michal = 47;
            michal = romeon[michal];
            michal = offset.bind(yankee)(michal);
            report = report.bind(golfie)(michal);
            michal = entity != verify;
            if(!michal) { _fun00088_ip = 256; continue _fun00087 }
 247:
            golfie = report.length;
            michal = golfie > verify;
 256:
            golfie = report;
            if(!michal) { _fun00088_ip = 273; continue _fun00087 }
 262:
            michal = report.slice;
            golfie = michal.bind(report)(option, verify);
 273:
            michal = {};
            report = golfie.map;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                return entity;
            };
            tangon = report.bind(golfie)(tangon);
            michal['channels'] = tangon;
            return michal;
 297:
            michal = new Array(0);
            entity = entity == oscard;
            if(entity) { _fun00088_ip = 323; continue _fun00087 }
 308:
            report = oscard.includes;
            tangon = zuuluu.type;
            entity = report.bind(oscard)(tangon);
 323:
            if(!entity) { _fun00088_ip = 336; continue _fun00087 }
 326:
            entity = michal.push;
            entity = entity.bind(michal)(zuuluu);
 336:
            entity = {};
            entity['channels'] = michal;
            return entity;
        }
    };
    golfie['queryApplicationCommandChannelResults'] = option;
    option = function(argFoo) { // Original name: queryChoiceResults
        entity = argFoo;
        tangon = this;
        oscard = entity.query;
        report = entity.choices;
        entity = {};
        zuuluu = tangon.queryChoice;
        michal = {};
        michal['query'] = oscard;
        michal['choices'] = report;
        report = null;
        michal['limit'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.map;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.choice;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        entity['choices'] = michal;
        return entity;
    };
    golfie['queryChoiceResults'] = option;
    option = function(argFoo) { // Original name: queryEmojiResults
        _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
            entity = argFoo;
            option = entity.query;
            verify = entity.channel;
            oscard = entity.intention;
            golfie = entity.maxCount;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00092_ip = 38; continue _fun00091 }
 31:
            golfie = _closure1_slot38;
 38:
            report = entity.matchComparator;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 48;
            entity = offset[entity];
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.FrecencyUserSettingsActionCreators;
            entity = zuuluu.loadIfNecessary;
            entity = entity.bind(zuuluu)();
            entity = {};
            tangon = _closure1_slot6;
            zuuluu = tangon.searchWithoutFetchingLatest;
            michal = {};
            michal['channel'] = verify;
            michal['query'] = option;
            michal['count'] = golfie;
            michal['intention'] = oscard;
            michal['matchComparator'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity['emojis'] = michal;
            return entity;
        }
    };
    golfie['queryEmojiResults'] = option;
    option = function(argFoo) { // Original name: queryStickers
        _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
            entity = arguments[1];
            michal = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00094_ip = 16; continue _fun00093 }
 14:
            entity = true;
 16:
            var _closure2_slot0 = entity;
            if(!(michal === report)) { _fun00094_ip = 48; continue _fun00093 }
 24:
            tangon = _closure1_slot44;
            entity = [null];
            entity[1] = tangon;
            michal = entity;
 48:
            oscard = michal;
            entity = oscard[Symbol.iterator];
            oscard = entity().next;
            golfie = oscard().value;
            michal = entity;
            michal = michal === report;
            tangon = undefined;
            if(michal) { _fun00094_ip = 73; continue _fun00093 }
 70:
            tangon = golfie;
 73:
            var _closure2_slot1 = tangon;
            tangon = undefined;
            if(michal) { _fun00094_ip = 107; continue _fun00093 }
 82:
            golfie = oscard().value;
            oscard = entity;
            oscard = oscard === report;
            tangon = undefined;
            michal = oscard;
            if(oscard) { _fun00094_ip = 107; continue _fun00093 }
 101:
            tangon = golfie;
            michal = oscard;
 107:
            var _closure2_slot2 = tangon;
            if(michal) { _fun00094_ip = 117; continue _fun00093 }
 114:
            entity.return();
 117:
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            entity = _closure1_slot9;
            entity = entity.stickerMetadata;
            _closure2_slot3 = entity;
            tangon = _closure1_slot32;
            entity = tangon.getCurrentUser;
            entity = entity.bind(tangon)();
            _closure2_slot4 = entity;
            entity = global;
            entity = entity.Set;
            tangon = entity.prototype;
            tangon = Object.create(tangon, {constructor: {value: entity}});
            yankee = tangon;
            entity = new yankee[entity](offset);
            entity = entity instanceof Object ? entity : tangon;
            _closure2_slot5 = entity;
            tangon = new Array(0);
            _closure2_slot6 = tangon;
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            entity = 48;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            oscard = entity.FrecencyUserSettingsActionCreators;
            entity = oscard.loadIfNecessary;
            entity = entity.bind(oscard)();
            option = function() { // Original name: _loop
                _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                    entity = _closure2_slot7;
                    option = '';
                    if(!(option !== entity)) { _fun00096_ip = 247; continue _fun00095 }
 20:
                    tangon = _closure2_slot7;
                    entity = tangon.toLocaleLowerCase;
                    golfie = entity.bind(tangon)();
                    var _closure3_slot0 = golfie;
                    oscard = _closure1_slot0;
                    yankee = _closure1_slot3;
                    entity = 31;
                    tangon = yankee[entity];
                    entity = undefined;
                    oscard = oscard.bind(entity)(tangon);
                    tangon = oscard.stripDiacritics;
                    offset = tangon.bind(oscard)(golfie);
                    tangon = global;
                    foxtra = tangon.RegExp;
                    verify = _closure1_slot1;
                    report = 29;
                    oscard = yankee[report];
                    golfie = verify.bind(entity)(oscard);
                    oscard = golfie.escape;
                    romeon = oscard.bind(golfie)(offset);
                    oscard = tangon.HermesInternal;
                    golfie = oscard.concat;
                    oscard = '^';
                    kiloes = golfie.bind(oscard)(romeon);
                    golfie = foxtra.prototype;
                    romeon = Object.create(golfie, {constructor: {value: foxtra}});
                    golfie = 'i';
                    sizing = romeon;
                    backup = golfie;
                    oscard = new sizing[foxtra](kiloes, backup, foxtra);
                    oscard = oscard instanceof Object ? oscard : romeon;
                    var _closure3_slot1 = oscard;
                    oscard = tangon.RegExp;
                    report = yankee[report];
                    verify = verify.bind(entity)(report);
                    report = verify.escape;
                    report = report.bind(verify)(offset);
                    tangon = tangon.HermesInternal;
                    tangon = tangon.concat;
                    kiloes = tangon.bind(option)(report);
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    sizing = report;
                    tangon = new sizing[oscard](kiloes, backup, foxtra);
                    tangon = tangon instanceof Object ? tangon : report;
                    var _closure3_slot2 = tangon;
                    tangon = _closure2_slot3;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo, argBar) {
                        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                            verify = argBar;
                            michal = _closure1_slot9;
                            entity = michal.getStickerById;
                            oscard = entity.bind(michal)(verify);
                            zuuluu = null;
                            if(!(zuuluu != oscard)) { _fun00098_ip = 561; continue _fun00097 }
 30:
                            report = _closure2_slot2;
                            golfie = _closure1_slot0;
                            option = _closure1_slot3;
                            michal = 49;
                            michal = option[michal];
                            result = undefined;
                            offset = golfie.bind(result)(michal);
                            option = offset.getStickerSendability;
                            golfie = _closure2_slot4;
                            michal = _closure2_slot1;
                            michal = option.bind(offset)(oscard, golfie, michal);
                            michal = report.bind(result)(oscard, michal);
                            if(!michal) { _fun00098_ip = 561; continue _fun00097 }
 92:
                            report = _closure1_slot52;
                            michal = argFoo;
                            output = report.bind(result)(michal);
                            report = output.bind(result)();
                            golfie = report.done;
                            michal = 0;
                            sizing = 7;
                            kiloes = 5;
                            foxtra = 34;
                            romeon = 0;
                            yankee = null;
                            offset = report;
                            option = 0;
                            report = null;
                            if(golfie) { _fun00098_ip = 433; continue _fun00097 }
 144:
                            golfie = offset.value;
                            sequen = golfie.type;
                            golfie = golfie.value;
                            echoed = _closure1_slot58;
                            ctrled = echoed.bind(result)(sequen);
                            echoed = _closure2_slot0;
                            source = _closure3_slot0;
                            if(echoed) { _fun00098_ip = 207; continue _fun00097 }
 179:
                            echoed = yankee;
                            update = 0;
                            if(!(golfie === source)) { _fun00098_ip = 396; continue _fun00097 }
 191:
                            vacuum = _closure1_slot43;
                            update = vacuum * ctrled;
                            echoed = golfie;
                            _fun00098_ip = 396; continue _fun00097;
 207:
                            if(!(golfie !== source)) { _fun00098_ip = 385; continue _fun00097 }
 214:
                            vacuum = _closure3_slot1;
                            source = vacuum.test;
                            source = source.bind(vacuum)(golfie);
                            if(source) { _fun00098_ip = 376; continue _fun00097 }
 234:
                            vacuum = _closure1_slot0;
                            source = _closure1_slot3;
                            source = source[foxtra];
                            source = vacuum.bind(result)(source);
                            source = source.StickerMetadataTypes;
                            source = source.GUILD_NAME;
                            source = sequen !== source;
                            if(!source) { _fun00098_ip = 303; continue _fun00097 }
 270:
                            config = _closure1_slot0;
                            vacuum = _closure1_slot3;
                            vacuum = vacuum[foxtra];
                            vacuum = config.bind(result)(vacuum);
                            vacuum = vacuum.StickerMetadataTypes;
                            vacuum = vacuum.PACK_NAME;
                            source = sequen !== vacuum;
 303:
                            if(!source) { _fun00098_ip = 339; continue _fun00097 }
 306:
                            config = _closure1_slot0;
                            vacuum = _closure1_slot3;
                            vacuum = vacuum[foxtra];
                            vacuum = config.bind(result)(vacuum);
                            vacuum = vacuum.StickerMetadataTypes;
                            vacuum = vacuum.STICKER_NAME;
                            source = sequen !== vacuum;
 339:
                            if(source) { _fun00098_ip = 359; continue _fun00097 }
 342:
                            sequen = _closure3_slot2;
                            vacuum = sequen.test;
                            vacuum = vacuum.bind(sequen)(golfie);
                            source = !vacuum;
 359:
                            echoed = yankee;
                            update = 0;
                            if(source) { _fun00098_ip = 396; continue _fun00097 }
 367:
                            update = kiloes * ctrled;
                            echoed = yankee;
                            _fun00098_ip = 396; continue _fun00097;
 376:
                            update = sizing * ctrled;
                            echoed = yankee;
                            _fun00098_ip = 396; continue _fun00097;
 385:
                            source = _closure1_slot43;
                            update = source * ctrled;
                            echoed = yankee;
 396:
                            if(!(update > romeon)) { _fun00098_ip = 406; continue _fun00097 }
 400:
                            romeon = update;
                            echoed = golfie;
 406:
                            source = output.bind(result)();
                            golfie = source.done;
                            yankee = echoed;
                            offset = source;
                            option = romeon;
                            report = yankee;
                            if(!golfie) { _fun00098_ip = 144; continue _fun00097 }
 433:
                            tangon = _closure1_slot8;
                            golfie = tangon.stickerFrecencyWithoutFetchingLatest;
                            tangon = golfie.getScore;
                            verify = tangon.bind(golfie)(verify);
                            tangon = option;
                            if(!(zuuluu != verify)) { _fun00098_ip = 472; continue _fun00097 }
 461:
                            golfie = 100;
                            golfie = verify / golfie;
                            tangon = option * golfie;
 472:
                            michal = tangon > michal;
                            if(!michal) { _fun00098_ip = 483; continue _fun00097 }
 479:
                            michal = zuuluu != report;
 483:
                            if(!michal) { _fun00098_ip = 508; continue _fun00097 }
 486:
                            option = _closure2_slot5;
                            golfie = option.has;
                            zuuluu = oscard.id;
                            zuuluu = golfie.bind(option)(zuuluu);
                            michal = !zuuluu;
 508:
                            if(!michal) { _fun00098_ip = 561; continue _fun00097 }
 511:
                            golfie = _closure2_slot5;
                            zuuluu = golfie.add;
                            michal = oscard.id;
                            michal = zuuluu.bind(golfie)(michal);
                            zuuluu = _closure2_slot6;
                            michal = zuuluu.push;
                            entity = {};
                            entity['sticker'] = oscard;
                            entity['comparator'] = report;
                            entity['score'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 561:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
 247:
                    entity = 1;
                    return entity;
                }
            };
            oscard = _closure1_slot52;
            entity = argFoo;
            golfie = oscard.bind(report)(entity);
            oscard = golfie.bind(report)();
            entity = oscard.done;
            if(entity) { _fun00094_ip = 306; continue _fun00093 }
 278:
            entity = oscard.value;
            _closure2_slot7 = entity;
            entity = option.bind(report)();
            verify = golfie.bind(report)();
            entity = verify.done;
            oscard = verify;
            if(!entity) { _fun00094_ip = 278; continue _fun00093 }
 306:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            entity = 35;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            report = entity.bind(report)(tangon);
            tangon = report.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.score;
                entity = -1;
                entity = entity * michal;
                return entity;
            };
            tangon = tangon.bind(report)(entity);
            entity = tangon.value;
            entity = entity.bind(tangon)();
            _closure2_slot6 = entity;
            report = entity.length;
            tangon = 0;
            if(!(tangon === report)) { _fun00094_ip = 382; continue _fun00093 }
 371:
            michal = _closure1_slot46;
            _closure2_slot6 = michal;
            entity = michal;
 382:
            return entity;
        }
    };
    golfie['queryStickers'] = option;
    option = function(argFoo, argBar) { // Original name: querySoundmoji
        _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
            oscard = argBar;
            var _closure2_slot0 = oscard;
            zuuluu = _closure1_slot32;
            michal = zuuluu.getCurrentUser;
            report = michal.bind(zuuluu)();
            zuuluu = _closure1_slot7;
            michal = zuuluu.isFetching;
            michal = michal.bind(zuuluu)();
            michal = !michal;
            if(!michal) { _fun00100_ip = 64; continue _fun00099 }
 45:
            golfie = _closure1_slot7;
            zuuluu = golfie.hasFetchedAllSounds;
            zuuluu = zuuluu.bind(golfie)();
            michal = !zuuluu;
 64:
            if(!michal) { _fun00100_ip = 99; continue _fun00099 }
 67:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 50;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = golfie.bind(michal)(zuuluu);
            michal = zuuluu.maybeFetchSoundboardSounds;
            michal = michal.bind(zuuluu)();
 99:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 48;
            option = golfie[michal];
            michal = undefined;
            option = zuuluu.bind(michal)(option);
            verify = option.FrecencyUserSettingsActionCreators;
            option = verify.loadIfNecessary;
            option = option.bind(verify)();
            option = global;
            verify = option.Array;
            option = verify.from;
            offset = _closure1_slot7;
            tangon = offset.getSounds;
            offset = tangon.bind(offset)();
            tangon = offset.values;
            tangon = tangon.bind(offset)();
            verify = option.bind(verify)(tangon);
            option = verify.reduce;
            tangon = function(argFoo, argBar) {
                entity = argFoo;
                tangon = argBar;
                var _closure3_slot0 = entity;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                        tangon = argFoo;
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 51;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        michal = _closure2_slot0;
                        golfie = null;
                        michal = golfie == michal;
                        zuuluu = undefined;
                        if(michal) { _fun00102_ip = 55; continue _fun00101 }
 46:
                        michal = _closure2_slot0;
                        zuuluu = michal.guild_id;
 55:
                        michal = _closure2_slot0;
                        golfie = golfie == michal;
                        michal = undefined;
                        if(golfie) { _fun00102_ip = 77; continue _fun00101 }
 68:
                        oscard = _closure2_slot0;
                        michal = oscard.id;
 77:
                        michal = report.bind(entity)(tangon, zuuluu, michal);
                        if(!michal) { _fun00102_ip = 104; continue _fun00101 }
 87:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
 104:
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = new Array(0);
            foxtra = option.bind(verify)(tangon, entity);
            entity = 52;
            entity = golfie[entity];
            zuuluu = zuuluu.bind(michal)(entity);
            michal = zuuluu.searchSounds;
            backup = argFoo;
            kiloes = zuuluu;
            romeon = report;
            yankee = oscard;
            entity = kiloes[michal](backup, foxtra, romeon, yankee, offset);
            return entity;
        }
    };
    golfie['querySoundmoji'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: matchSentinel
        _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
            zuuluu = _closure1_slot45;
            michal = zuuluu.test;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            if(!entity) { _fun00104_ip = 36; continue _fun00103 }
 26:
            zuuluu = argFoo;
            michal = argBaz;
            entity = zuuluu === michal;
 36:
            return entity;
        }
    };
    golfie['matchSentinel'] = option;
    option = function(argFoo, argBar) { // Original name: hasSameRoleAsUsername
        _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            entity = tangon.isPomelo;
            entity = entity.bind(tangon)();
            if(entity) { _fun00106_ip = 23; continue _fun00105 }
 19:
            entity = false;
            return entity;
 23:
            report = _closure1_slot25;
            zuuluu = report.getGuild;
            entity = oscard.getGuildId;
            entity = entity.bind(oscard)();
            entity = zuuluu.bind(report)(entity);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00106_ip = 60; continue _fun00105 }
 56:
            zuuluu = {};
            _fun00106_ip = 80; continue _fun00105;
 60:
            report = _closure1_slot24;
            michal = report.getRoles;
            entity = entity.id;
            zuuluu = michal.bind(report)(entity);
 80:
            entity = global;
            michal = entity.Object;
            entity = michal.values;
            zuuluu = entity.bind(michal)(zuuluu);
            entity = zuuluu.length;
            michal = 0;
            entity = michal < entity;
            if(!entity) { _fun00106_ip = 162; continue _fun00105 }
 112:
            entity = zuuluu[michal];
            golfie = entity.name;
            oscard = tangon.username;
            report = oscard.startsWith;
            entity = golfie.toLowerCase;
            entity = entity.bind(golfie)();
            entity = report.bind(oscard)(entity);
            if(entity) { _fun00106_ip = 166; continue _fun00105 }
 150:
            michal = michal + 1;
            entity = zuuluu.length;
            if(michal < entity) { _fun00106_ip = 112; continue _fun00105 }
 162:
            entity = false;
            return entity;
 166:
            entity = true;
            return entity;
        }
    };
    golfie['hasSameRoleAsUsername'] = option;
    option = 53;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'utils/AutocompleteUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['default'] = golfie;
    golfie = function(argFoo) { // Original name: populateInAppSettingNavigationOptions
        zuuluu = _closure1_slot41;
        michal = zuuluu.setState;
        entity = {};
        tangon = argFoo;
        entity['options'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['populateInAppSettingNavigationOptions'] = golfie;
    zuuluu['WHITESPACE_REGEX'] = oscard;
    zuuluu['calculateScore'] = report;
    tangon = function(argFoo) { // Original name: getBoosterMap
        _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
            romeon = argFoo;
            tangon = _closure1_slot19;
            zuuluu = tangon.getFrequentlyWithoutFetchingLatest;
            report = zuuluu.bind(tangon)();
            oscard = report.reduce;
            tangon = function(argFoo, argBar) {
                _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                    entity = argFoo;
                    michal = argBar;
                    tangon = michal.id;
                    zuuluu = _closure1_slot19;
                    michal = zuuluu.getScoreWithoutFetchingLatest;
                    michal = michal.bind(zuuluu)(tangon);
                    if(!(michal > entity)) { _fun00110_ip = 36; continue _fun00109 }
 33:
                    entity = michal;
 36:
                    return entity;
                }
            };
            zuuluu = 0;
            yankee = oscard.bind(report)(tangon, zuuluu);
            tangon = new Array(0);
            zuuluu = _closure1_slot39;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== romeon)) { _fun00108_ip = 186; continue _fun00107 }
 62:
            zuuluu = _closure1_slot39;
            zuuluu = zuuluu.USER;
            if(!(zuuluu !== romeon)) { _fun00108_ip = 169; continue _fun00107 }
 76:
            zuuluu = _closure1_slot39;
            zuuluu = zuuluu.GROUP_DM;
            if(!(zuuluu !== romeon)) { _fun00108_ip = 152; continue _fun00107 }
 90:
            zuuluu = _closure1_slot39;
            zuuluu = zuuluu.TEXT_CHANNEL;
            if(!(zuuluu !== romeon)) { _fun00108_ip = 135; continue _fun00107 }
 104:
            zuuluu = _closure1_slot39;
            zuuluu = zuuluu.VOICE_CHANNEL;
            if(!(zuuluu === romeon)) { _fun00108_ip = 201; continue _fun00107 }
 118:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot11;
                    entity = zuuluu instanceof entity;
                    if(!entity) { _fun00112_ip = 27; continue _fun00111 }
 17:
                    michal = zuuluu.isGuildVocal;
                    entity = michal.bind(zuuluu)();
 27:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00108_ip = 201; continue _fun00107;
 135:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                    michal = argFoo;
                    entity = _closure1_slot11;
                    entity = michal instanceof entity;
                    if(!entity) { _fun00114_ip = 33; continue _fun00113 }
 17:
                    tangon = _closure1_slot13;
                    zuuluu = michal.type;
                    michal = undefined;
                    entity = tangon.bind(michal)(zuuluu);
 33:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00108_ip = 201; continue _fun00107;
 152:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot11;
                    entity = zuuluu instanceof entity;
                    if(!entity) { _fun00116_ip = 27; continue _fun00115 }
 17:
                    michal = zuuluu.isMultiUserDM;
                    entity = michal.bind(zuuluu)();
 27:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00108_ip = 201; continue _fun00107;
 169:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot11;
                    entity = zuuluu instanceof entity;
                    if(!entity) { _fun00118_ip = 36; continue _fun00117 }
 17:
                    zuuluu = zuuluu.type;
                    michal = _closure1_slot36;
                    michal = michal.DM;
                    entity = zuuluu === michal;
 36:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00108_ip = 201; continue _fun00107;
 186:
            zuuluu = report.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 28;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isGuildRecord;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = zuuluu.bind(report)(entity);
 201:
            entity = {};
            zuuluu = _closure1_slot52;
            option = undefined;
            offset = zuuluu.bind(option)(tangon);
            tangon = offset.bind(option)();
            zuuluu = tangon.done;
            golfie = 1;
            verify = tangon;
            oscard = undefined;
            report = undefined;
            tangon = undefined;
            if(zuuluu) { _fun00108_ip = 529; continue _fun00107 }
 241:
            output = verify.value;
            backup = output.id;
            foxtra = _closure1_slot19;
            zuuluu = foxtra.getScoreWithoutFetchingLatest;
            zuuluu = zuuluu.bind(foxtra)(backup);
            foxtra = _closure1_slot39;
            foxtra = foxtra.USER;
            if(!(romeon === foxtra)) { _fun00108_ip = 291; continue _fun00107 }
 280:
            foxtra = _closure1_slot15;
            foxtra = output instanceof foxtra;
            if(foxtra) { _fun00108_ip = 317; continue _fun00107 }
 291:
            foxtra = zuuluu / yankee;
            foxtra = golfie + foxtra;
            entity[backup] = foxtra;
            kiloes = oscard;
            backup = report;
            foxtra = tangon;
            _fun00108_ip = 502; continue _fun00107;
 317:
            result = output.type;
            sizing = _closure1_slot36;
            sizing = sizing.DM;
            if(!(result !== sizing)) { _fun00108_ip = 471; continue _fun00107 }
 339:
            result = output.type;
            sizing = _closure1_slot36;
            sizing = sizing.GROUP_DM;
            kiloes = oscard;
            backup = report;
            foxtra = tangon;
            if(!(result === sizing)) { _fun00108_ip = 502; continue _fun00107 }
 370:
            sizing = output.recipients;
            update = sizing.length;
            result = _closure1_slot52;
            sizing = output.recipients;
            echoed = result.bind(option)(sizing);
            source = echoed.bind(option)();
            sizing = source.done;
            result = source;
            kiloes = result;
            backup = update;
            foxtra = echoed;
            if(sizing) { _fun00108_ip = 502; continue _fun00107 }
 420:
            source = result.value;
            ctrled = zuuluu / yankee;
            sizing = golfie / update;
            sizing = ctrled * sizing;
            sizing = golfie + sizing;
            entity[source] = sizing;
            source = echoed.bind(option)();
            sizing = source.done;
            result = source;
            kiloes = result;
            backup = update;
            foxtra = echoed;
            if(sizing) { _fun00108_ip = 502; continue _fun00107 }
 469:
            _fun00108_ip = 420; continue _fun00107;
 471:
            sizing = output.getRecipientId;
            sizing = sizing.bind(output)();
            zuuluu = zuuluu / yankee;
            zuuluu = golfie + zuuluu;
            entity[sizing] = zuuluu;
            kiloes = oscard;
            backup = report;
            foxtra = tangon;
 502:
            sizing = offset.bind(option)();
            zuuluu = sizing.done;
            oscard = kiloes;
            report = backup;
            tangon = foxtra;
            verify = sizing;
            if(!zuuluu) { _fun00108_ip = 241; continue _fun00107 }
 529:
            tangon = _closure1_slot52;
            report = _closure1_slot29;
            zuuluu = report.getFriendIDs;
            zuuluu = zuuluu.bind(report)();
            verify = tangon.bind(option)(zuuluu);
            tangon = verify.bind(option)();
            zuuluu = tangon.done;
            report = 0.2;
            oscard = null;
            if(zuuluu) { _fun00108_ip = 621; continue _fun00107 }
 576:
            offset = tangon.value;
            yankee = entity[offset];
            romeon = oscard != yankee;
            zuuluu = golfie;
            if(!romeon) { _fun00108_ip = 598; continue _fun00107 }
 595:
            zuuluu = yankee;
 598:
            zuuluu = zuuluu + report;
            entity[offset] = zuuluu;
            offset = verify.bind(option)();
            zuuluu = offset.done;
            tangon = offset;
            if(!zuuluu) { _fun00108_ip = 576; continue _fun00107 }
 621:
            zuuluu = _closure1_slot52;
            tangon = _closure1_slot18;
            michal = tangon.getDMUserIds;
            michal = michal.bind(tangon)();
            report = zuuluu.bind(option)(michal);
            zuuluu = report.bind(option)();
            michal = zuuluu.done;
            tangon = 0.1;
            if(michal) { _fun00108_ip = 711; continue _fun00107 }
 666:
            verify = zuuluu.value;
            offset = entity[verify];
            yankee = oscard != offset;
            michal = golfie;
            if(!yankee) { _fun00108_ip = 688; continue _fun00107 }
 685:
            michal = offset;
 688:
            michal = michal + tangon;
            entity[verify] = michal;
            verify = report.bind(option)();
            michal = verify.done;
            zuuluu = verify;
            if(!michal) { _fun00108_ip = 666; continue _fun00107 }
 711:
            return entity;
        }
    };
    zuuluu['getBoosterMap'] = tangon;
    zuuluu['COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS'] = michal;
    return entity;
})();