// app/utils/AutocompleteUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    sizing = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = sizing;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
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
    entity = function() { // Original name: calculateScore
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
    var _closure1_slot54 = entity;
    entity = function(argFoo, argBar) { // Original name: getMatchValue
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argBar;
            oscard = arguments[2];
            michal = argFoo;
            report = golfie.exactQuery;
            tangon = golfie.containQuery;
            entity = golfie.queryLower;
            golfie = undefined;
            if(!(oscard === golfie)) { _fun00010_ip = 35; continue _fun00009 }
 33:
            oscard = true;
 35:
            zuuluu = oscard;
 38: // try_start_0
            option = report;
            oscard = option.test;
            report = michal;
            report = oscard.bind(option)(report);
            if(report) { _fun00010_ip = 165; continue _fun00009 }
 57:
            oscard = tangon;
            report = oscard.test;
            tangon = michal;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00010_ip = 156; continue _fun00009 }
 76:
            oscard = entity;
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
                    entity = 27;
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
            tangon = tangon.bind(golfie)(oscard, report);
            if(tangon) { _fun00010_ip = 147; continue _fun00009 }
 98:
            if(!zuuluu) { _fun00010_ip = 139; continue _fun00009 }
 101:
            report = _closure1_slot1;
            oscard = _closure1_slot3;
            tangon = 28;
            tangon = oscard[tangon];
            oscard = report.bind(golfie)(tangon);
            report = entity;
            tangon = michal;
            tangon = oscard.bind(golfie)(report, tangon);
            if(tangon) { _fun00010_ip = 141; continue _fun00009 }
 139: // try_end0
            _fun00010_ip = 219; continue _fun00009;
 141: // try_start_1
            zuuluu = _closure1_slot44;
 145: // try_end1
            return zuuluu;
 147: // try_start_2
            zuuluu = _closure1_slot43;
 154: // try_end2
            return zuuluu;
 156: // try_start_3
            zuuluu = _closure1_slot42;
 163: // try_end3
            return zuuluu;
 165: // try_start_4
            zuuluu = michal;
            michal = zuuluu.toLocaleLowerCase;
            michal = michal.bind(zuuluu)();
            if(!(michal !== entity)) { _fun00010_ip = 191; continue _fun00009 }
 182:
            entity = _closure1_slot41;
            _fun00010_ip = 198; continue _fun00009;
 191:
            entity = _closure1_slot40;
 198: // try_end4
            return entity;
 200: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
            CatchBlockStart(arg_register=2);
            michal = _closure1_slot39;
            entity = michal.error;
            entity = entity.bind(michal)(zuuluu);
 219:
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
            variable39 = entity.query;
            variable38 = entity.members;
            michal = entity.limit;
            variable37 = entity.filter;
            variable36 = entity.allowSnowflake;
            tangon = _closure1_slot29;
            entity = tangon.getUsers;
            quebec = entity.bind(tangon)();
            tangon = _closure1_slot28;
            entity = tangon.getGuildId;
            equals = entity.bind(tangon)();
            entity = variable39.toLocaleLowerCase;
            whisks = entity.bind(variable39)();
            tangon = _closure1_slot0;
            entity = _closure1_slot3;
            limora = 29;
            entity = entity[limora];
            verify = undefined;
            tangon = tangon.bind(verify)(entity);
            entity = tangon.normalize;
            sierra = entity.bind(tangon)(whisks);
            report = new Array(0);
            option = new Array(0);
            status = variable38.length;
            golfie = 0;
            variable40 = golfie < status;
            target = 1;
            papara = null;
            cntext = 28;
            record = 50;
            config = 30;
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
            if(!variable40) { _fun00014_ip = 1773; continue _fun00013 }
 181:
            variable40 = variable38[sequen];
            variable41 = _closure1_slot15;
            variable41 = variable40 instanceof variable41;
            if(variable41) { _fun00014_ip = 235; continue _fun00013 }
 196:
            variable41 = variable40.nick;
            variable42 = papara == variable41;
            variable64 = undefined;
            if(variable42) { _fun00014_ip = 221; continue _fun00013 }
 211:
            variable42 = variable41.toLocaleLowerCase;
            variable64 = variable42.bind(variable41)();
 221:
            variable42 = variable40.userId;
            variable42 = quebec[variable42];
            variable54 = variable41;
            _fun00014_ip = 287; continue _fun00013;
 235:
            variable44 = _closure1_slot21;
            variable43 = variable44.getNick;
            variable41 = variable40.id;
            variable43 = variable43.bind(variable44)(equals, variable41);
            variable44 = papara == variable43;
            variable41 = undefined;
            if(variable44) { _fun00014_ip = 275; continue _fun00013 }
 265:
            variable44 = variable43.toLocaleLowerCase;
            variable41 = variable44.bind(variable43)();
 275:
            variable64 = variable41;
            ctrled = variable43;
            variable54 = source;
            variable42 = variable40;
 287:
            variable41 = _closure1_slot1;
            variable40 = _closure1_slot3;
            variable40 = variable40[config];
            variable41 = variable41.bind(verify)(variable40);
            variable40 = variable41.getGlobalName;
            variable41 = variable40.bind(variable41)(variable42);
            variable40 = papara == variable41;
            variable68 = variable42;
            variable63 = undefined;
            if(variable40) { _fun00014_ip = 337; continue _fun00013 }
 327:
            variable40 = variable41.toLocaleLowerCase;
            variable63 = variable40.bind(variable41)();
 337:
            variable55 = vacuum;
            variable53 = update;
            variable52 = echoed;
            variable51 = result;
            variable50 = output;
            variable49 = sizing;
            variable48 = kiloes;
            variable47 = backup;
            variable46 = foxtra;
            variable45 = romeon;
            variable44 = yankee;
            variable43 = offset;
            variable42 = oscard;
            variable41 = tangon;
            variable40 = entity;
            if(!(papara != variable68)) { _fun00014_ip = 1714; continue _fun00013 }
 389:
            if(!(papara != variable37)) { _fun00014_ip = 449; continue _fun00013 }
 393:
            variable56 = variable37.bind(verify)(variable68);
            variable55 = vacuum;
            variable53 = update;
            variable52 = echoed;
            variable51 = result;
            variable50 = output;
            variable49 = sizing;
            variable48 = kiloes;
            variable47 = backup;
            variable46 = foxtra;
            variable45 = romeon;
            variable44 = yankee;
            variable43 = offset;
            variable42 = oscard;
            variable41 = tangon;
            variable40 = entity;
            if(!variable56) { _fun00014_ip = 1714; continue _fun00013 }
 449:
            variable57 = variable68.username;
            variable56 = variable57.toLocaleLowerCase;
            variable62 = variable56.bind(variable57)();
            variable57 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable58 = variable56[limora];
            variable59 = variable57.bind(verify)(variable58);
            variable58 = variable59.stripDiacritics;
            variable61 = variable58.bind(variable59)(variable62);
            variable56 = variable56[limora];
            variable57 = variable57.bind(verify)(variable56);
            variable56 = variable57.normalize;
            variable60 = variable56.bind(variable57)(variable61);
            variable56 = papara != variable64;
            variable59 = null;
            if(!variable56) { _fun00014_ip = 549; continue _fun00013 }
 521:
            variable57 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable56 = variable56[limora];
            variable57 = variable57.bind(verify)(variable56);
            variable56 = variable57.stripDiacritics;
            variable59 = variable56.bind(variable57)(variable64);
 549:
            variable56 = papara != variable59;
            variable58 = null;
            if(!variable56) { _fun00014_ip = 586; continue _fun00013 }
 558:
            variable57 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable56 = variable56[limora];
            variable57 = variable57.bind(verify)(variable56);
            variable56 = variable57.normalize;
            variable58 = variable56.bind(variable57)(variable59);
 586:
            variable56 = papara != variable63;
            variable57 = null;
            if(!variable56) { _fun00014_ip = 623; continue _fun00013 }
 595:
            variable65 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable56 = variable56[limora];
            variable65 = variable65.bind(verify)(variable56);
            variable56 = variable65.stripDiacritics;
            variable57 = variable56.bind(variable65)(variable63);
 623:
            variable65 = papara != variable57;
            variable56 = null;
            if(!variable65) { _fun00014_ip = 660; continue _fun00013 }
 632:
            variable66 = _closure1_slot0;
            variable65 = _closure1_slot3;
            variable65 = variable65[limora];
            variable66 = variable66.bind(verify)(variable65);
            variable65 = variable66.normalize;
            variable56 = variable65.bind(variable66)(variable57);
 660:
            if(!variable36) { _fun00014_ip = 678; continue _fun00013 }
 663:
            variable66 = variable68.id;
            variable65 = update;
            if(!(variable39 !== variable66)) { _fun00014_ip = 1582; continue _fun00013 }
 678:
            variable67 = variable62.substring;
            variable66 = whisks.length;
            variable66 = variable67.bind(variable62)(golfie, variable66);
            variable65 = update;
            if(!(variable66 !== whisks)) { _fun00014_ip = 1582; continue _fun00013 }
 705:
            variable67 = variable61.substring;
            variable66 = whisks.length;
            variable66 = variable67.bind(variable61)(golfie, variable66);
            variable65 = update;
            if(!(variable66 !== whisks)) { _fun00014_ip = 1582; continue _fun00013 }
 732:
            variable67 = papara == variable64;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 758; continue _fun00013 }
 741:
            variable69 = variable64.substring;
            variable67 = whisks.length;
            variable66 = variable69.bind(variable64)(golfie, variable67);
 758:
            variable65 = variable64;
            if(!(variable66 !== whisks)) { _fun00014_ip = 1582; continue _fun00013 }
 768:
            variable67 = papara == variable59;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 794; continue _fun00013 }
 777:
            variable69 = variable59.substring;
            variable67 = whisks.length;
            variable66 = variable69.bind(variable59)(golfie, variable67);
 794:
            variable65 = variable64;
            if(!(variable66 !== whisks)) { _fun00014_ip = 1582; continue _fun00013 }
 804:
            variable67 = papara == variable63;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 830; continue _fun00013 }
 813:
            variable69 = variable63.substring;
            variable67 = whisks.length;
            variable66 = variable69.bind(variable63)(golfie, variable67);
 830:
            variable65 = variable64;
            if(!(variable66 !== whisks)) { _fun00014_ip = 1582; continue _fun00013 }
 840:
            variable67 = papara == variable57;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 866; continue _fun00013 }
 849:
            variable69 = variable57.substring;
            variable67 = whisks.length;
            variable66 = variable69.bind(variable57)(golfie, variable67);
 866:
            variable65 = variable64;
            if(!(variable66 !== whisks)) { _fun00014_ip = 1582; continue _fun00013 }
 876:
            variable67 = variable60.substring;
            variable66 = sierra.length;
            variable66 = variable67.bind(variable60)(golfie, variable66);
            if(!(variable66 !== sierra)) { _fun00014_ip = 1442; continue _fun00013 }
 900:
            variable67 = papara == variable58;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 926; continue _fun00013 }
 909:
            variable69 = variable58.substring;
            variable67 = sierra.length;
            variable66 = variable69.bind(variable58)(golfie, variable67);
 926:
            if(!(variable66 !== sierra)) { _fun00014_ip = 1442; continue _fun00013 }
 933:
            variable67 = papara == variable56;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 959; continue _fun00013 }
 942:
            variable69 = variable56.substring;
            variable67 = sierra.length;
            variable66 = variable69.bind(variable56)(golfie, variable67);
 959:
            if(!(variable66 !== sierra)) { _fun00014_ip = 1442; continue _fun00013 }
 966:
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echoed;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscard;
            variable41 = tangon;
            variable40 = entity;
            if(!(vacuum < record)) { _fun00014_ip = 1714; continue _fun00013 }
 1018:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[cntext];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(whisks, variable61);
            if(variable66) { _fun00014_ip = 1301; continue _fun00013 }
 1047:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[cntext];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(sierra, variable60);
            if(variable66) { _fun00014_ip = 1301; continue _fun00013 }
 1076:
            if(!(papara != variable59)) { _fun00014_ip = 1109; continue _fun00013 }
 1080:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[cntext];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(whisks, variable59);
            if(variable66) { _fun00014_ip = 1301; continue _fun00013 }
 1109:
            if(!(papara != variable58)) { _fun00014_ip = 1142; continue _fun00013 }
 1113:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[cntext];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(sierra, variable58);
            if(variable66) { _fun00014_ip = 1301; continue _fun00013 }
 1142:
            if(!(papara != variable57)) { _fun00014_ip = 1175; continue _fun00013 }
 1146:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[cntext];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(whisks, variable57);
            if(variable66) { _fun00014_ip = 1301; continue _fun00013 }
 1175:
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echoed;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscard;
            variable41 = tangon;
            variable40 = entity;
            if(!(papara != variable56)) { _fun00014_ip = 1714; continue _fun00013 }
 1227:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[cntext];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(sierra, variable56);
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echoed;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscard;
            variable41 = tangon;
            variable40 = entity;
            if(!variable66) { _fun00014_ip = 1714; continue _fun00013 }
 1301:
            variable70 = option.push;
            variable69 = {};
            variable66 = _closure1_slot36;
            variable66 = variable66.USER;
            variable69['type'] = variable66;
            variable69['record'] = variable68;
            variable66 = _closure1_slot44;
            variable69['score'] = variable66;
            variable67 = variable64;
            if(!(papara != variable63)) { _fun00014_ip = 1346; continue _fun00013 }
 1343:
            variable67 = variable63;
 1346:
            variable66 = variable62;
            if(!(papara != variable67)) { _fun00014_ip = 1356; continue _fun00013 }
 1353:
            variable66 = variable67;
 1356:
            variable69['comparator'] = variable66;
            variable66 = variable59;
            if(!(papara != variable57)) { _fun00014_ip = 1371; continue _fun00013 }
 1368:
            variable66 = variable57;
 1371:
            variable71 = variable61;
            if(!(papara != variable66)) { _fun00014_ip = 1381; continue _fun00013 }
 1378:
            variable71 = variable66;
 1381:
            variable69['sortable'] = variable71;
            variable69 = variable70.bind(option)(variable69);
            variable55 = vacuum + target;
            variable53 = variable64;
            variable52 = echoed;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscard;
            variable41 = variable67;
            variable40 = variable66;
            _fun00014_ip = 1714; continue _fun00013;
 1442:
            variable70 = report.push;
            variable69 = {};
            variable66 = _closure1_slot36;
            variable66 = variable66.USER;
            variable69['type'] = variable66;
            variable69['record'] = variable68;
            variable66 = _closure1_slot44;
            variable69['score'] = variable66;
            variable67 = variable64;
            if(!(papara != variable63)) { _fun00014_ip = 1487; continue _fun00013 }
 1484:
            variable67 = variable63;
 1487:
            variable66 = variable62;
            if(!(papara != variable67)) { _fun00014_ip = 1497; continue _fun00013 }
 1494:
            variable66 = variable67;
 1497:
            variable69['comparator'] = variable66;
            variable66 = variable59;
            if(!(papara != variable57)) { _fun00014_ip = 1512; continue _fun00013 }
 1509:
            variable66 = variable57;
 1512:
            variable71 = variable61;
            if(!(papara != variable66)) { _fun00014_ip = 1522; continue _fun00013 }
 1519:
            variable71 = variable66;
 1522:
            variable69['sortable'] = variable71;
            variable69 = variable70.bind(report)(variable69);
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echoed;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = variable67;
            variable42 = variable66;
            variable41 = tangon;
            variable40 = entity;
            _fun00014_ip = 1714; continue _fun00013;
 1582:
            variable67 = report.push;
            variable66 = {};
            variable69 = _closure1_slot36;
            variable69 = variable69.USER;
            variable66['type'] = variable69;
            variable66['record'] = variable68;
            variable68 = _closure1_slot40;
            variable66['score'] = variable68;
            if(!(papara != variable63)) { _fun00014_ip = 1624; continue _fun00013 }
 1621:
            variable64 = variable63;
 1624:
            variable63 = variable62;
            if(!(papara != variable64)) { _fun00014_ip = 1634; continue _fun00013 }
 1631:
            variable63 = variable64;
 1634:
            variable66['comparator'] = variable63;
            variable63 = variable59;
            if(!(papara != variable57)) { _fun00014_ip = 1649; continue _fun00013 }
 1646:
            variable63 = variable57;
 1649:
            variable68 = variable61;
            if(!(papara != variable63)) { _fun00014_ip = 1659; continue _fun00013 }
 1656:
            variable68 = variable63;
 1659:
            variable66['sortable'] = variable68;
            variable66 = variable67.bind(report)(variable66);
            variable55 = vacuum;
            variable53 = variable65;
            variable52 = variable64;
            variable51 = variable63;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscard;
            variable41 = tangon;
            variable40 = entity;
 1714:
            sequen = sequen + target;
            vacuum = variable55;
            update = variable53;
            echoed = variable52;
            result = variable51;
            output = variable50;
            sizing = variable49;
            kiloes = variable48;
            backup = variable47;
            foxtra = variable46;
            romeon = variable45;
            yankee = variable44;
            offset = variable43;
            oscard = variable42;
            tangon = variable41;
            entity = variable40;
            source = variable54;
            if(sequen < status) { _fun00014_ip = 181; continue _fun00013 }
 1773:
            tangon = report.sort;
            oscard = _closure1_slot1;
            entity = _closure1_slot3;
            offset = 31;
            entity = entity[offset];
            entity = oscard.bind(verify)(entity);
            entity = tangon.bind(report)(entity);
            tangon = report.length;
            entity = report;
            if(!(tangon < michal)) { _fun00014_ip = 1893; continue _fun00013 }
 1816:
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
 1893:
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00014_ip = 1908; continue _fun00013 }
 1902:
            entity['length'] = michal;
 1908:
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
            report = 32;
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
            zuuluu = _closure1_slot18;
            entity = argFoo;
            entity = entity === zuuluu;
            if(!entity) { _fun00018_ip = 31; continue _fun00017 }
 17:
            tangon = _closure1_slot13;
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
            if(!(tangon != report)) { _fun00020_ip = 143; continue _fun00019 }
 101:
            tangon = report.isFullMatch;
            if(tangon) { _fun00020_ip = 137; continue _fun00019 }
 110:
            oscard = zuuluu.splice;
            tangon = zuuluu.indexOf;
            report = tangon.bind(zuuluu)(report);
            tangon = 1;
            tangon = oscard.bind(zuuluu)(report, tangon);
            _fun00020_ip = 143; continue _fun00019;
 137:
            zuuluu['length'] = michal;
 143:
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
            if(!(michal == entity)) { _fun00022_ip = 96; continue _fun00021 }
 34:
            zuuluu = report.guild_id;
            golfie = _closure1_slot22;
            oscard = golfie.getGuild;
            report = report.guild_id;
            oscard = oscard.bind(golfie)(report);
            report = michal == oscard;
            michal = undefined;
            if(report) { _fun00022_ip = 89; continue _fun00021 }
 70:
            report = oscard.toString;
            oscard = report.bind(oscard)();
            report = oscard.toLocaleLowerCase;
            michal = report.bind(oscard)();
 89:
            tangon[zuuluu] = michal;
            entity = michal;
 96:
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
            golfie = _closure1_slot16;
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
    golfie = function(argFoo, argBar) { // Original name: getRecentlyTalked
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot16;
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
            zuuluu = 33;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            report = _closure1_slot23;
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
                zuuluu = _closure1_slot29;
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
                    report = _closure1_slot21;
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
                    zuuluu = _closure1_slot21;
                    michal = zuuluu.getMember;
                    entity = report.id;
                    golfie = michal.bind(zuuluu)(oscard, entity);
 55:
                    entity = {};
                    michal = _closure1_slot36;
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
                    zuuluu = 30;
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
    var _closure1_slot63 = golfie;
    entity = global;
    oscard = entity.Object;
    tangon = oscard.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(oscard)(zuuluu, entity, michal);
    entity = 0;
    michal = verify[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    tangon = michal.InAppNavigationRecord;
    var _closure1_slot4 = tangon;
    michal = michal.InAppNavigationType;
    var _closure1_slot5 = michal;
    michal = 1;
    tangon = verify[michal];
    tangon = sizing.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = verify[tangon];
    tangon = sizing.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    oscard = verify[tangon];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    romeon = 5;
    oscard = verify[romeon];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot10 = oscard;
    oscard = 6;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    offset = oscard.isGuildChannelType;
    var _closure1_slot11 = offset;
    offset = oscard.isGuildSelectableChannelType;
    var _closure1_slot12 = offset;
    offset = oscard.isGuildVocalChannelType;
    var _closure1_slot13 = offset;
    oscard = oscard.UnknownChannelRecord;
    var _closure1_slot14 = oscard;
    foxtra = 7;
    oscard = verify[foxtra];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot15 = oscard;
    oscard = 8;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot16 = oscard;
    oscard = 9;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot17 = oscard;
    backup = 10;
    oscard = verify[backup];
    oscard = option.bind(entity)(oscard);
    yankee = oscard.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot18 = yankee;
    offset = oscard.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot19 = offset;
    oscard = verify[backup];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot20 = oscard;
    oscard = 11;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot21 = oscard;
    oscard = 12;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot22 = oscard;
    oscard = 13;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot23 = oscard;
    oscard = 14;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot24 = oscard;
    oscard = 15;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot25 = oscard;
    oscard = 16;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot26 = oscard;
    oscard = 17;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot27 = oscard;
    oscard = 18;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot28 = oscard;
    oscard = 19;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot29 = oscard;
    oscard = 20;
    oscard = verify[oscard];
    oscard = sizing.bind(entity)(oscard);
    var _closure1_slot30 = oscard;
    oscard = 21;
    oscard = verify[oscard];
    kiloes = option.bind(entity)(oscard);
    oscard = kiloes.Permissions;
    var _closure1_slot31 = oscard;
    oscard = kiloes.GuildFeatures;
    var _closure1_slot32 = oscard;
    oscard = kiloes.ChannelTypes;
    var _closure1_slot33 = oscard;
    output = kiloes.SKUTypes;
    var _closure1_slot34 = output;
    kiloes = kiloes.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot35 = kiloes;
    kiloes = 22;
    kiloes = verify[kiloes];
    kiloes = option.bind(entity)(kiloes);
    kiloes = kiloes.AutocompleterResultTypes;
    var _closure1_slot36 = kiloes;
    kiloes = 23;
    kiloes = verify[kiloes];
    kiloes = option.bind(entity)(kiloes);
    kiloes = kiloes.StaticChannelId;
    var _closure1_slot37 = kiloes;
    kiloes = 24;
    kiloes = verify[kiloes];
    result = option.bind(entity)(kiloes);
    output = result.createStore;
    kiloes = function() {
        entity = {};
        michal = new Array(0);
        entity['options'] = michal;
        return entity;
    };
    kiloes = output.bind(result)(kiloes);
    var _closure1_slot38 = kiloes;
    kiloes = 25;
    kiloes = verify[kiloes];
    output = sizing.bind(entity)(kiloes);
    kiloes = output.prototype;
    sizing = Object.create(kiloes, {constructor: {value: output}});
    source = 'AutocompleteUtils';
    ctrled = sizing;
    kiloes = new ctrled[output](source, update);
    kiloes = kiloes instanceof Object ? kiloes : sizing;
    var _closure1_slot39 = kiloes;
    var _closure1_slot40 = backup;
    var _closure1_slot41 = foxtra;
    var _closure1_slot42 = romeon;
    var _closure1_slot43 = tangon;
    var _closure1_slot44 = michal;
    michal = function() { // Original name: NOOP
        entity = true;
        return entity;
    };
    var _closure1_slot45 = michal;
    tangon = /(\t|\s)/;
    var _closure1_slot46 = tangon;
    michal = new Array(0);
    var _closure1_slot47 = michal;
    michal = 26;
    romeon = verify[michal];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.default;
    romeon = romeon.MENTION_EVERYONE;
    var _closure1_slot48 = romeon;
    romeon = verify[michal];
    romeon = option.bind(entity)(romeon);
    romeon = romeon.default;
    romeon = romeon.MENTION_HERE;
    var _closure1_slot49 = romeon;
    michal = verify[michal];
    michal = option.bind(entity)(michal);
    michal = michal.default;
    michal = michal.LAUNCHABLE_APPLICATIONS;
    var _closure1_slot50 = michal;
    michal = new Array(3);
    michal[0] = yankee;
    michal[1] = offset;
    oscard = oscard.GUILD_CATEGORY;
    michal[2] = oscard;
    var _closure1_slot51 = michal;
    oscard = {};
    offset = function(argFoo) { // Original name: queryFriends
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            golfie = entity.query;
            report = entity.limit;
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00032_ip = 24; continue _fun00031 }
 21:
            report = 10;
 24:
            michal = entity._fuzzy;
            tangon = entity.filter;
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = golfie;
            option = _closure1_slot26;
            golfie = option.getFriendIDs;
            verify = golfie.bind(option)();
            option = verify.map;
            golfie = function(argFoo) {
                zuuluu = _closure1_slot29;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(golfie);
            golfie = option.filter;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 34;
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
    oscard['queryFriends'] = offset;
    offset = function(argFoo) { // Original name: queryDMUsers
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            golfie = entity.query;
            report = entity.limit;
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00034_ip = 24; continue _fun00033 }
 21:
            report = 10;
 24:
            tangon = entity.filter;
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = golfie;
            option = _closure1_slot16;
            golfie = option.getDMUserIds;
            verify = golfie.bind(option)();
            option = verify.map;
            golfie = function(argFoo) {
                zuuluu = _closure1_slot29;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(golfie);
            golfie = option.filter;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 34;
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
    oscard['queryDMUsers'] = offset;
    offset = function(argFoo) { // Original name: queryChannelUsers
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            offset = entity.channelId;
            option = entity.query;
            oscard = entity.limit;
            zuuluu = undefined;
            if(!(oscard === zuuluu)) { _fun00036_ip = 31; continue _fun00035 }
 28:
            oscard = 10;
 31:
            romeon = entity.request;
            if(!(romeon === zuuluu)) { _fun00036_ip = 43; continue _fun00035 }
 41:
            romeon = true;
 43:
            verify = entity.checkRecentlyTalkedOnEmptyQuery;
            if(!(verify === zuuluu)) { _fun00036_ip = 55; continue _fun00035 }
 53:
            verify = true;
 55:
            tangon = entity.allowSnowflake;
            if(!(tangon === zuuluu)) { _fun00036_ip = 67; continue _fun00035 }
 65:
            tangon = false;
 67:
            var _closure2_slot0 = zuuluu;
            golfie = _closure1_slot16;
            michal = golfie.getChannel;
            golfie = michal.bind(golfie)(offset);
            yankee = null;
            if(!(yankee != golfie)) { _fun00036_ip = 410; continue _fun00035 }
 97:
            michal = golfie.isThread;
            michal = michal.bind(golfie)();
            offset = null;
            if(!michal) { _fun00036_ip = 132; continue _fun00035 }
 112:
            backup = _closure1_slot16;
            foxtra = backup.getChannel;
            michal = golfie.parent_id;
            offset = foxtra.bind(backup)(michal);
 132:
            michal = golfie;
            if(!(yankee != offset)) { _fun00036_ip = 142; continue _fun00035 }
 139:
            michal = offset;
 142:
            _closure2_slot0 = michal;
            if(!(yankee != michal)) { _fun00036_ip = 404; continue _fun00035 }
 153:
            offset = michal.isPrivate;
            offset = offset.bind(michal)();
            if(offset) { _fun00036_ip = 292; continue _fun00035 }
 169:
            foxtra = option.length;
            offset = 0;
            if(!(offset === foxtra)) { _fun00036_ip = 207; continue _fun00035 }
 180:
            if(!verify) { _fun00036_ip = 207; continue _fun00035 }
 183:
            verify = _closure1_slot63;
            golfie = golfie.id;
            verify = verify.bind(zuuluu)(golfie, oscard);
            golfie = verify.length;
            if(!(!(golfie > offset))) { _fun00036_ip = 290; continue _fun00035 }
 207:
            foxtra = _closure1_slot21;
            offset = foxtra.getMembers;
            golfie = michal.guild_id;
            foxtra = offset.bind(foxtra)(golfie);
            offset = foxtra.filter;
            golfie = _closure1_slot56;
            offset = offset.bind(foxtra)(golfie);
            golfie = offset;
            if(!romeon) { _fun00036_ip = 362; continue _fun00035 }
 247:
            foxtra = _closure1_slot1;
            backup = _closure1_slot3;
            romeon = 35;
            romeon = backup[romeon];
            backup = foxtra.bind(zuuluu)(romeon);
            foxtra = backup.requestMembers;
            romeon = michal.guild_id;
            romeon = foxtra.bind(backup)(romeon, option, oscard);
            golfie = offset;
            _fun00036_ip = 362; continue _fun00035;
 290:
            return verify;
 292:
            offset = michal.recipients;
            verify = offset.map;
            michal = function(argFoo) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tangon = argFoo;
                    entity = {};
                    entity['userId'] = tangon;
                    zuuluu = _closure1_slot26;
                    michal = zuuluu.getNickname;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = null;
                    tangon = michal != zuuluu;
                    if(!tangon) { _fun00038_ip = 39; continue _fun00037 }
 36:
                    michal = zuuluu;
 39:
                    entity['nick'] = michal;
                    return entity;
                }
            };
            michal = verify.bind(offset)(michal);
            offset = _closure1_slot29;
            verify = offset.getCurrentUser;
            romeon = verify.bind(offset)();
            golfie = michal;
            if(!(yankee != romeon)) { _fun00036_ip = 362; continue _fun00035 }
 333:
            offset = michal.push;
            verify = {};
            romeon = romeon.id;
            verify['userId'] = romeon;
            verify['nick'] = yankee;
            verify = offset.bind(michal)(verify);
            golfie = michal;
 362:
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = option;
            entity['members'] = golfie;
            entity['limit'] = oscard;
            report = function(argFoo) { // Original name: filter
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = michal.isPrivate;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00040_ip = 88; continue _fun00039 }
 20:
                    tangon = _closure1_slot2;
                    zuuluu = _closure1_slot3;
                    michal = 36;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.can;
                    michal = {};
                    oscard = _closure1_slot31;
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
 404:
            entity = new Array(0);
            return entity;
 410:
            entity = new Array(0);
            return entity;
        }
    };
    oscard['queryChannelUsers'] = offset;
    offset = function(argFoo) { // Original name: queryGuildUsers
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            michal = argFoo;
            yankee = michal.guildId;
            verify = michal.query;
            golfie = michal.limit;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00042_ip = 29; continue _fun00041 }
 26:
            golfie = 10;
 29:
            zuuluu = michal.request;
            if(!(zuuluu === tangon)) { _fun00042_ip = 41; continue _fun00041 }
 39:
            zuuluu = true;
 41:
            entity = michal.checkRecentlyTalkedOnEmptyQuery;
            if(!(entity === tangon)) { _fun00042_ip = 53; continue _fun00041 }
 51:
            entity = true;
 53:
            oscard = michal.filter;
            report = michal.allowSnowflake;
            offset = _closure1_slot22;
            option = offset.getGuild;
            offset = option.bind(offset)(yankee);
            option = null;
            if(!(option != offset)) { _fun00042_ip = 254; continue _fun00041 }
 90:
            option = verify.length;
            romeon = 0;
            if(!(romeon === option)) { _fun00042_ip = 138; continue _fun00041 }
 101:
            if(!entity) { _fun00042_ip = 138; continue _fun00041 }
 104:
            option = _closure1_slot63;
            offset = _closure1_slot27;
            entity = offset.getChannelId;
            entity = entity.bind(offset)(yankee);
            entity = option.bind(tangon)(entity, golfie);
            option = entity.length;
            if(!(!(option > romeon))) { _fun00042_ip = 252; continue _fun00041 }
 138:
            offset = _closure1_slot21;
            option = offset.getMembers;
            foxtra = option.bind(offset)(yankee);
            offset = foxtra.filter;
            option = _closure1_slot56;
            option = offset.bind(foxtra)(option);
            if(!zuuluu) { _fun00042_ip = 179; continue _fun00041 }
 170:
            offset = verify.length;
            zuuluu = offset > romeon;
 179:
            if(!zuuluu) { _fun00042_ip = 215; continue _fun00041 }
 182:
            offset = _closure1_slot1;
            romeon = _closure1_slot3;
            zuuluu = 35;
            zuuluu = romeon[zuuluu];
            offset = offset.bind(tangon)(zuuluu);
            zuuluu = offset.requestMembers;
            zuuluu = zuuluu.bind(offset)(yankee, verify, golfie);
 215:
            zuuluu = _closure1_slot57;
            michal = {};
            michal['query'] = verify;
            michal['members'] = option;
            michal['limit'] = golfie;
            michal['filter'] = oscard;
            michal['allowSnowflake'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 252:
            return entity;
 254:
            entity = new Array(0);
            return entity;
        }
    };
    oscard['queryGuildUsers'] = offset;
    offset = function(argFoo) { // Original name: queryUsers
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            oscard = argFoo;
            tangon = arguments[1];
            entity = arguments[3];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00044_ip = 18; continue _fun00043 }
 15:
            tangon = 10;
 18:
            if(!(entity === zuuluu)) { _fun00044_ip = 24; continue _fun00043 }
 22:
            entity = true;
 24:
            if(!entity) { _fun00044_ip = 38; continue _fun00043 }
 27:
            report = oscard.length;
            michal = 0;
            entity = report > michal;
 38:
            if(!entity) { _fun00044_ip = 79; continue _fun00043 }
 41:
            michal = _closure1_slot1;
            report = _closure1_slot3;
            entity = 35;
            entity = report[entity];
            report = michal.bind(zuuluu)(entity);
            michal = report.requestMembers;
            entity = null;
            entity = michal.bind(report)(entity, oscard, tangon);
 79:
            michal = _closure1_slot57;
            entity = {};
            entity['query'] = oscard;
            golfie = _closure1_slot1;
            option = _closure1_slot3;
            oscard = 33;
            oscard = option[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            golfie = _closure1_slot29;
            report = golfie.getUsers;
            report = report.bind(golfie)();
            oscard = oscard.bind(zuuluu)(report);
            report = oscard.values;
            oscard = report.bind(oscard)();
            report = oscard.value;
            report = report.bind(oscard)();
            entity['members'] = report;
            entity['limit'] = tangon;
            tangon = arguments[4];
            entity['filter'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    oscard['queryUsers'] = offset;
    offset = function(argFoo) { // Original name: queryChannels
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            variable37 = entity.query;
            variable36 = entity.guildId;
            michal = entity.limit;
            golfie = undefined;
            if(!(michal === golfie)) { _fun00046_ip = 35; continue _fun00045 }
 28:
            michal = _closure1_slot35;
 35:
            quebec = entity.fuzzy;
            if(!(quebec === golfie)) { _fun00046_ip = 47; continue _fun00045 }
 45:
            quebec = true;
 47:
            equals = entity.filter;
            if(!(equals === golfie)) { _fun00046_ip = 63; continue _fun00045 }
 56:
            equals = _closure1_slot45;
 63:
            whisks = entity.type;
            if(!(whisks === golfie)) { _fun00046_ip = 79; continue _fun00045 }
 72:
            whisks = _closure1_slot18;
 79:
            zuuluu = entity.allowEmptyQueries;
            if(!(zuuluu === golfie)) { _fun00046_ip = 91; continue _fun00045 }
 89:
            zuuluu = false;
 91:
            limora = entity.requireVocalConnectAccess;
            if(!(limora === golfie)) { _fun00046_ip = 103; continue _fun00045 }
 101:
            limora = true;
 103:
            sierra = entity.boosters;
            if(!(sierra === golfie)) { _fun00046_ip = 115; continue _fun00045 }
 113:
            sierra = {};
 115:
            status = entity.allowSnowflake;
            entity = function(argFoo) { // Original name: getSeparatedQueries
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    zuuluu = argFoo;
                    michal = arguments[1];
                    yankee = undefined;
                    if(!(michal === yankee)) { _fun00048_ip = 16; continue _fun00047 }
 14:
                    michal = false;
 16:
                    var _closure3_slot0 = michal;
                    michal = zuuluu.split;
                    verify = ' ';
                    report = michal.bind(zuuluu)(verify);
                    tangon = report.filter;
                    michal = function(argFoo) {
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            michal = '';
                            entity = argFoo;
                            entity = michal !== entity;
                            if(entity) { _fun00050_ip = 21; continue _fun00049 }
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
                        michal = 27;
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
                    if(!michal) { _fun00048_ip = 291; continue _fun00047 }
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
                    tangon = 27;
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
            target = entity.bind(golfie)(variable37, zuuluu);
            zuuluu = null;
            if(!(zuuluu == variable36)) { _fun00046_ip = 224; continue _fun00045 }
 138:
            oscard = _closure1_slot1;
            option = _closure1_slot3;
            report = 33;
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            option = _closure1_slot16;
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
            _fun00046_ip = 320; continue _fun00045;
 224:
            option = _closure1_slot1;
            verify = _closure1_slot3;
            report = 33;
            report = verify[report];
            option = option.bind(golfie)(report);
            verify = _closure1_slot20;
            report = verify.getChannels;
            report = report.bind(verify)(variable36);
            report = report[whisks];
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
            entity = entity.bind(option)(variable36);
            tangon = tangon.bind(report)(entity);
            entity = tangon.value;
            oscard = entity.bind(tangon)();
 320:
            papara = {};
            entity = new Array(0);
            option = _closure1_slot17;
            report = option.getMaxScore;
            cntext = report.bind(option)();
            report = _closure1_slot52;
            record = report.bind(golfie)(oscard);
            oscard = record.bind(golfie)();
            report = oscard.done;
            config = 37;
            sequen = 1;
            vacuum = global;
            ctrled = 3;
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
            if(report) { _fun00046_ip = 1457; continue _fun00045 }
 422:
            variable59 = sizing.value;
            variable49 = variable59.type;
            report = zuuluu != variable36;
            if(!(whisks !== variable49)) { _fun00046_ip = 575; continue _fun00045 }
 443:
            if(report) { _fun00046_ip = 488; continue _fun00045 }
 446:
            report = _closure1_slot11;
            report = report.bind(golfie)(variable49);
            variable46 = kiloes;
            variable45 = backup;
            variable44 = foxtra;
            variable43 = romeon;
            variable42 = yankee;
            variable41 = offset;
            variable40 = verify;
            variable39 = option;
            variable38 = oscard;
            if(!report) { _fun00046_ip = 1412; continue _fun00045 }
 488:
            report = _closure1_slot18;
            if(!(whisks !== report)) { _fun00046_ip = 518; continue _fun00045 }
 496:
            report = _closure1_slot19;
            report = whisks === report;
            if(!report) { _fun00046_ip = 516; continue _fun00045 }
 507:
            variable47 = _closure1_slot13;
            report = variable47.bind(golfie)(variable49);
 516:
            _fun00046_ip = 542; continue _fun00045;
 518:
            variable47 = _closure1_slot12;
            variable47 = variable47.bind(golfie)(variable49);
            if(variable47) { _fun00046_ip = 539; continue _fun00045 }
 530:
            variable48 = _closure1_slot13;
            variable47 = variable48.bind(golfie)(variable49);
 539:
            report = variable47;
 542:
            variable46 = kiloes;
            variable45 = backup;
            variable44 = foxtra;
            variable43 = romeon;
            variable42 = yankee;
            variable41 = offset;
            variable40 = verify;
            variable39 = option;
            variable38 = oscard;
            if(!report) { _fun00046_ip = 1412; continue _fun00045 }
 575:
            variable47 = _closure1_slot11;
            report = variable59.type;
            report = variable47.bind(golfie)(report);
            if(!report) { _fun00046_ip = 662; continue _fun00045 }
 592:
            variable48 = _closure1_slot24;
            variable47 = variable48.can;
            if(limora) { _fun00046_ip = 617; continue _fun00045 }
 605:
            report = _closure1_slot31;
            report = report.VIEW_CHANNEL;
            _fun00046_ip = 623; continue _fun00045;
 617:
            report = variable59.accessPermissions;
 623:
            report = variable47.bind(variable48)(report, variable59);
            variable46 = kiloes;
            variable45 = backup;
            variable44 = foxtra;
            variable43 = romeon;
            variable42 = yankee;
            variable41 = offset;
            variable40 = verify;
            variable39 = option;
            variable38 = oscard;
            if(!report) { _fun00046_ip = 1412; continue _fun00045 }
 662:
            report = equals.bind(golfie)(variable59);
            variable46 = kiloes;
            variable45 = backup;
            variable44 = foxtra;
            variable43 = romeon;
            variable42 = yankee;
            variable41 = offset;
            variable40 = verify;
            variable39 = option;
            variable38 = oscard;
            if(!report) { _fun00046_ip = 1412; continue _fun00045 }
 700:
            variable51 = new Array(0);
            variable67 = variable51;
            variable66 = target;
            variable65 = 0;
            report = arraySpread(variable67, variable66, variable65);
            variable47 = variable59.name;
            report = variable47.toLocaleLowerCase;
            variable50 = report.bind(variable47)();
            variable49 = status;
            if(!variable49) { _fun00046_ip = 746; continue _fun00045 }
 737:
            report = variable59.id;
            variable49 = variable37 === report;
 746:
            if(variable49) { _fun00046_ip = 762; continue _fun00045 }
 749:
            report = _closure1_slot60;
            variable52 = report.bind(golfie)(variable50, variable51, quebec);
            _fun00046_ip = 766; continue _fun00045;
 762:
            variable52 = _closure1_slot40;
 766:
            variable46 = kiloes;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable49;
            variable41 = offset;
            variable40 = verify;
            variable39 = option;
            variable38 = oscard;
            variable42 = variable52;
            if(!(source !== variable42)) { _fun00046_ip = 1412; continue _fun00045 }
 800:
            variable53 = variable51.length;
            variable48 = variable52;
            variable47 = option;
            report = oscard;
            if(!(variable53 > source)) { _fun00046_ip = 996; continue _fun00045 }
 821:
            variable53 = _closure1_slot61;
            variable54 = variable53.bind(golfie)(variable59, papara);
            variable53 = new Array(2);
            variable53[0] = variable54;
            variable54 = _closure1_slot62;
            variable54 = variable54.bind(golfie)(variable59, papara);
            variable53[1] = variable54;
            variable54 = variable53.length;
            variable55 = source < variable54;
            variable60 = variable52;
            variable58 = 0;
            variable56 = oscard;
            variable57 = variable60;
            variable54 = 0;
            variable52 = variable56;
            if(!variable55) { _fun00046_ip = 967; continue _fun00045 }
 881:
            variable63 = variable53[variable58];
            variable64 = variable60;
            variable62 = variable56;
            if(!(zuuluu != variable63)) { _fun00046_ip = 937; continue _fun00045 }
 895:
            variable64 = variable60;
            variable62 = variable56;
            if(!(output !== variable63)) { _fun00046_ip = 937; continue _fun00045 }
 905:
            variable55 = _closure1_slot60;
            variable55 = variable55.bind(golfie)(variable63, variable51, result);
            variable64 = variable60;
            variable62 = variable55;
            if(!(source !== variable62)) { _fun00046_ip = 937; continue _fun00045 }
 926:
            variable61 = update * variable55;
            variable64 = variable60 + variable61;
            variable62 = variable55;
 937:
            variable58 = variable58 + 1;
            variable55 = variable53.length;
            variable60 = variable64;
            variable56 = variable62;
            variable57 = variable60;
            option = variable63;
            variable52 = variable56;
            variable54 = variable58;
            if(variable54 < variable55) { _fun00046_ip = 881; continue _fun00045 }
 967:
            variable56 = vacuum.Math;
            variable55 = variable56.min;
            variable48 = variable55.bind(variable56)(echoed, variable57);
            offset = variable54;
            variable47 = option;
            report = variable52;
            verify = variable53;
 996:
            variable46 = kiloes;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable49;
            variable41 = offset;
            variable40 = verify;
            variable39 = variable47;
            variable38 = report;
            variable42 = variable48;
            if(!(source !== variable42)) { _fun00046_ip = 1412; continue _fun00045 }
 1030:
            variable52 = variable51.length;
            variable46 = kiloes;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable49;
            variable42 = variable48;
            variable41 = offset;
            variable40 = verify;
            variable39 = variable47;
            variable38 = report;
            if(!(!(variable52 > sequen))) { _fun00046_ip = 1412; continue _fun00045 }
 1069:
            variable52 = variable51.length;
            if(!(sequen === variable52)) { _fun00046_ip = 1124; continue _fun00045 }
 1078:
            variable52 = variable51[source];
            variable52 = variable52.isFullMatch;
            if(variable52) { _fun00046_ip = 1124; continue _fun00045 }
 1091:
            variable46 = kiloes;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable49;
            variable42 = variable48;
            variable41 = offset;
            variable40 = verify;
            variable39 = variable47;
            variable38 = report;
            if(!variable49) { _fun00046_ip = 1412; continue _fun00045 }
 1124:
            variable53 = _closure1_slot59;
            variable52 = variable59.type;
            variable52 = variable53.bind(golfie)(whisks, variable52);
            variable56 = variable48;
            if(!variable52) { _fun00046_ip = 1166; continue _fun00045 }
 1145:
            variable53 = vacuum.Math;
            variable52 = variable53.max;
            variable48 = variable48 - sequen;
            variable56 = variable52.bind(variable53)(variable48, update);
 1166:
            variable54 = vacuum.Math;
            variable53 = variable54.min;
            variable55 = _closure1_slot17;
            variable52 = variable55.getScoreWithoutFetchingLatest;
            variable48 = variable59.id;
            variable52 = variable52.bind(variable55)(variable48);
            variable48 = variable52;
            if(!(zuuluu == variable52)) { _fun00046_ip = 1208; continue _fun00045 }
 1204:
            variable48 = source / cntext;
 1208:
            variable48 = variable53.bind(variable54)(variable48, sequen);
            variable55 = vacuum.Math;
            variable54 = variable55.min;
            variable48 = ctrled * variable48;
            variable53 = variable56 + variable48;
            variable48 = _closure1_slot41;
            if(!(!(variable56 >= variable48))) { _fun00046_ip = 1247; continue _fun00045 }
 1241:
            variable48 = _closure1_slot41;
            _fun00046_ip = 1251; continue _fun00045;
 1247:
            variable48 = _closure1_slot40;
 1251:
            variable48 = variable54.bind(variable55)(variable53, variable48);
            variable54 = entity.push;
            variable53 = {};
            variable56 = _closure1_slot13;
            variable55 = variable59.type;
            variable55 = variable56.bind(golfie)(variable55);
            variable56 = _closure1_slot36;
            if(variable55) { _fun00046_ip = 1293; continue _fun00045 }
 1285:
            variable55 = variable56.TEXT_CHANNEL;
            _fun00046_ip = 1299; continue _fun00045;
 1293:
            variable55 = variable56.VOICE_CHANNEL;
 1299:
            variable53['type'] = variable55;
            variable53['record'] = variable59;
            variable56 = _closure1_slot54;
            variable55 = variable59.id;
            variable55 = sierra[variable55];
            variable55 = variable56.bind(golfie)(variable48, variable55);
            variable53['score'] = variable55;
            variable56 = _closure1_slot0;
            variable55 = _closure1_slot3;
            variable55 = variable55[config];
            variable58 = variable56.bind(golfie)(variable55);
            variable57 = variable58.computeChannelName;
            variable56 = _closure1_slot29;
            variable55 = _closure1_slot26;
            variable55 = variable57.bind(variable58)(variable59, variable56, variable55);
            variable53['comparator'] = variable55;
            variable53['sortable'] = variable50;
            variable53 = variable54.bind(entity)(variable53);
            variable46 = variable52;
            variable45 = variable51;
            variable44 = variable50;
            variable43 = variable49;
            variable42 = variable48;
            variable41 = offset;
            variable40 = verify;
            variable39 = variable47;
            variable38 = report;
 1412:
            variable47 = record.bind(golfie)();
            report = variable47.done;
            kiloes = variable46;
            backup = variable45;
            foxtra = variable44;
            romeon = variable43;
            yankee = variable42;
            offset = variable41;
            verify = variable40;
            option = variable39;
            oscard = variable38;
            sizing = variable47;
            if(!report) { _fun00046_ip = 422; continue _fun00045 }
 1457:
            report = entity.sort;
            oscard = _closure1_slot1;
            option = _closure1_slot3;
            tangon = 31;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            tangon = report.bind(entity)(tangon);
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00046_ip = 1504; continue _fun00045 }
 1495:
            tangon = entity.length;
            zuuluu = tangon > michal;
 1504:
            if(!zuuluu) { _fun00046_ip = 1513; continue _fun00045 }
 1507:
            entity['length'] = michal;
 1513:
            return entity;
        }
    };
    oscard['queryChannels'] = offset;
    offset = function(argFoo) { // Original name: queryGuilds
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            tangon = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00052_ip = 24; continue _fun00051 }
 21:
            michal = 10;
 24:
            backup = entity.fuzzy;
            if(!(backup === oscard)) { _fun00052_ip = 36; continue _fun00051 }
 34:
            backup = true;
 36:
            foxtra = entity.filter;
            if(!(foxtra === oscard)) { _fun00052_ip = 52; continue _fun00051 }
 45:
            foxtra = _closure1_slot45;
 52:
            romeon = entity.boosters;
            if(!(romeon === oscard)) { _fun00052_ip = 64; continue _fun00051 }
 62:
            romeon = {};
 64:
            entity = '';
            if(!(entity !== tangon)) { _fun00052_ip = 82; continue _fun00051 }
 72:
            zuuluu = tangon.toLocaleLowerCase;
            entity = zuuluu.bind(tangon)();
 82:
            yankee = {};
            report = global;
            sizing = report.RegExp;
            golfie = _closure1_slot1;
            option = _closure1_slot3;
            tangon = 27;
            verify = option[tangon];
            offset = golfie.bind(oscard)(verify);
            verify = offset.escape;
            kiloes = verify.bind(offset)(entity);
            verify = report.HermesInternal;
            offset = verify.concat;
            verify = '^';
            vacuum = offset.bind(verify)(kiloes);
            offset = sizing.prototype;
            kiloes = Object.create(offset, {constructor: {value: sizing}});
            offset = 'i';
            sequen = kiloes;
            ctrled = offset;
            verify = new sequen[sizing](vacuum, ctrled, source);
            verify = verify instanceof Object ? verify : kiloes;
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
            tangon = 33;
            tangon = option[tangon];
            golfie = golfie.bind(oscard)(tangon);
            option = _closure1_slot22;
            tangon = option.getGuilds;
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
            if(tangon) { _fun00052_ip = 467; continue _fun00051 }
 320:
            echoed = option.value;
            tangon = foxtra.bind(oscard)(echoed);
            if(!tangon) { _fun00052_ip = 449; continue _fun00051 }
 333:
            kiloes = echoed.name;
            tangon = kiloes.toLocaleLowerCase;
            kiloes = tangon.bind(kiloes)();
            tangon = _closure1_slot55;
            tangon = tangon.bind(oscard)(kiloes, yankee, backup);
            golfie = kiloes;
            report = tangon;
            if(!(tangon > verify)) { _fun00052_ip = 449; continue _fun00051 }
 369:
            output = entity.push;
            sizing = {};
            result = _closure1_slot36;
            result = result.GUILD;
            sizing['type'] = result;
            sizing['record'] = echoed;
            update = _closure1_slot54;
            result = echoed.id;
            result = romeon[result];
            result = update.bind(oscard)(tangon, result);
            sizing['score'] = result;
            result = echoed.toString;
            result = result.bind(echoed)();
            sizing['comparator'] = result;
            sizing['sortable'] = kiloes;
            sizing = output.bind(entity)(sizing);
            golfie = kiloes;
            report = tangon;
 449:
            kiloes = offset.bind(oscard)();
            tangon = kiloes.done;
            option = kiloes;
            if(!tangon) { _fun00052_ip = 320; continue _fun00051 }
 467:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 31;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00052_ip = 513; continue _fun00051 }
 507:
            entity['length'] = michal;
 513:
            return entity;
        }
    };
    oscard['queryGuilds'] = offset;
    offset = function(argFoo) { // Original name: queryGroupDMs
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            offset = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00054_ip = 24; continue _fun00053 }
 21:
            michal = 10;
 24:
            sizing = entity.fuzzy;
            if(!(sizing === oscard)) { _fun00054_ip = 36; continue _fun00053 }
 34:
            sizing = true;
 36:
            kiloes = entity.filter;
            if(!(kiloes === oscard)) { _fun00054_ip = 52; continue _fun00053 }
 45:
            kiloes = _closure1_slot45;
 52:
            backup = entity.boosters;
            if(!(backup === oscard)) { _fun00054_ip = 64; continue _fun00053 }
 62:
            backup = {};
 64:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            foxtra = 29;
            entity = option[foxtra];
            report = golfie.bind(oscard)(entity);
            tangon = report.stripDiacritics;
            entity = option[foxtra];
            verify = golfie.bind(oscard)(entity);
            golfie = verify.normalize;
            entity = offset.toLocaleLowerCase;
            entity = entity.bind(offset)();
            entity = golfie.bind(verify)(entity);
            entity = tangon.bind(report)(entity);
            romeon = {};
            report = global;
            output = report.RegExp;
            golfie = _closure1_slot1;
            tangon = 27;
            verify = option[tangon];
            offset = golfie.bind(oscard)(verify);
            verify = offset.escape;
            yankee = verify.bind(offset)(entity);
            verify = report.HermesInternal;
            offset = verify.concat;
            verify = '^';
            target = offset.bind(verify)(yankee);
            offset = output.prototype;
            yankee = Object.create(offset, {constructor: {value: output}});
            offset = 'i';
            status = yankee;
            papara = offset;
            verify = new status[output](target, papara, cntext);
            verify = verify instanceof Object ? verify : yankee;
            romeon['exactQuery'] = verify;
            verify = report.RegExp;
            tangon = option[tangon];
            report = golfie.bind(oscard)(tangon);
            tangon = report.escape;
            target = tangon.bind(report)(entity);
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            status = report;
            tangon = new status[verify](target, papara, cntext);
            tangon = tangon instanceof Object ? tangon : report;
            romeon['containQuery'] = tangon;
            romeon['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot52;
            tangon = 33;
            tangon = option[tangon];
            golfie = golfie.bind(oscard)(tangon);
            option = _closure1_slot16;
            tangon = option.getMutablePrivateChannels;
            tangon = tangon.bind(option)();
            golfie = golfie.bind(oscard)(tangon);
            tangon = golfie.values;
            golfie = tangon.bind(golfie)();
            tangon = golfie.value;
            tangon = tangon.bind(golfie)();
            yankee = report.bind(oscard)(tangon);
            report = yankee.bind(oscard)();
            tangon = report.done;
            offset = 37;
            verify = 0;
            option = report;
            golfie = undefined;
            report = undefined;
            if(tangon) { _fun00054_ip = 648; continue _fun00053 }
 362:
            record = option.value;
            tangon = record.isMultiUserDM;
            tangon = tangon.bind(record)();
            result = golfie;
            output = report;
            if(!tangon) { _fun00054_ip = 624; continue _fun00053 }
 389:
            tangon = kiloes.bind(oscard)(record);
            result = golfie;
            output = report;
            if(!tangon) { _fun00054_ip = 624; continue _fun00053 }
 406:
            source = _closure1_slot0;
            tangon = _closure1_slot3;
            echoed = tangon[offset];
            vacuum = source.bind(oscard)(echoed);
            ctrled = vacuum.computeChannelName;
            update = _closure1_slot29;
            echoed = _closure1_slot26;
            update = ctrled.bind(vacuum)(record, update, echoed);
            echoed = update.toLocaleLowerCase;
            ctrled = echoed.bind(update)();
            echoed = tangon[foxtra];
            update = source.bind(oscard)(echoed);
            echoed = update.stripDiacritics;
            tangon = tangon[foxtra];
            source = source.bind(oscard)(tangon);
            tangon = source.normalize;
            tangon = tangon.bind(source)(ctrled);
            echoed = echoed.bind(update)(tangon);
            tangon = _closure1_slot55;
            tangon = tangon.bind(oscard)(echoed, romeon, sizing);
            result = echoed;
            output = tangon;
            if(!(tangon > verify)) { _fun00054_ip = 624; continue _fun00053 }
 515:
            source = entity.push;
            update = {};
            ctrled = _closure1_slot36;
            ctrled = ctrled.GROUP_DM;
            update['type'] = ctrled;
            update['record'] = record;
            vacuum = _closure1_slot54;
            ctrled = record.id;
            ctrled = backup[ctrled];
            ctrled = vacuum.bind(oscard)(tangon, ctrled);
            update['score'] = ctrled;
            vacuum = _closure1_slot0;
            ctrled = _closure1_slot3;
            ctrled = ctrled[offset];
            config = vacuum.bind(oscard)(ctrled);
            sequen = config.computeChannelName;
            vacuum = _closure1_slot29;
            ctrled = _closure1_slot26;
            ctrled = sequen.bind(config)(record, vacuum, ctrled);
            update['comparator'] = ctrled;
            update['sortable'] = echoed;
            update = source.bind(entity)(update);
            result = echoed;
            output = tangon;
 624:
            echoed = yankee.bind(oscard)();
            tangon = echoed.done;
            golfie = result;
            report = output;
            option = echoed;
            if(!tangon) { _fun00054_ip = 362; continue _fun00053 }
 648:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 31;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00054_ip = 694; continue _fun00053 }
 688:
            entity['length'] = michal;
 694:
            return entity;
        }
    };
    oscard['queryGroupDMs'] = offset;
    offset = function(argFoo) { // Original name: queryApplications
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00056_ip = 24; continue _fun00055 }
 21:
            michal = 10;
 24:
            foxtra = entity.fuzzy;
            if(!(foxtra === oscard)) { _fun00056_ip = 36; continue _fun00055 }
 34:
            foxtra = true;
 36:
            romeon = entity.filter;
            if(!(romeon === oscard)) { _fun00056_ip = 52; continue _fun00055 }
 45:
            romeon = _closure1_slot45;
 52:
            entity = zuuluu.toLocaleLowerCase;
            entity = entity.bind(zuuluu)();
            yankee = {};
            golfie = global;
            kiloes = golfie.RegExp;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            tangon = 27;
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
            tangon = _closure1_slot50;
            tangon = tangon.bind(oscard)();
            offset = report.bind(oscard)(tangon);
            report = offset.bind(oscard)();
            tangon = report.done;
            verify = 0;
            option = report;
            golfie = undefined;
            report = undefined;
            if(tangon) { _fun00056_ip = 385; continue _fun00055 }
 259:
            tangon = option.value;
            output = tangon.application;
            tangon = romeon.bind(oscard)(output);
            if(!tangon) { _fun00056_ip = 370; continue _fun00055 }
 277:
            backup = output.name;
            tangon = backup.toLocaleLowerCase;
            backup = tangon.bind(backup)();
            tangon = _closure1_slot55;
            tangon = tangon.bind(oscard)(backup, yankee, foxtra);
            golfie = backup;
            report = tangon;
            if(!(tangon > verify)) { _fun00056_ip = 370; continue _fun00055 }
 313:
            sizing = entity.push;
            kiloes = {};
            result = _closure1_slot36;
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
 370:
            backup = offset.bind(oscard)();
            tangon = backup.done;
            option = backup;
            if(!tangon) { _fun00056_ip = 259; continue _fun00055 }
 385:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 31;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00056_ip = 431; continue _fun00055 }
 425:
            entity['length'] = michal;
 431:
            return entity;
        }
    };
    oscard['queryApplications'] = offset;
    offset = function(argFoo) { // Original name: queryInAppNavigations
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00058_ip = 26; continue _fun00057 }
 23:
            michal = 10;
 26:
            vacuum = entity.fuzzy;
            if(!(vacuum === oscard)) { _fun00058_ip = 38; continue _fun00057 }
 36:
            vacuum = true;
 38:
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
            report = 27;
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
            golfie = 38;
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
 565:
            {
 577:
                golfie = sizing;
                report = _closure1_slot5;
                verify = report[golfie];
                golfie = source[verify];
                if(backup == golfie) { _fun00058_ip = 565; continue _fun00057 }
 596:
                report = _closure1_slot52;
                option = report.bind(oscard)(golfie);
                golfie = option.bind(oscard)();
                report = golfie.done;
                foxtra = golfie;
                romeon = option;
                golfie = foxtra;
                if(report) { _fun00058_ip = 565; continue _fun00057 }
 626:
                sequen = golfie.value;
                report = sequen.toLocaleLowerCase;
                record = report.bind(sequen)();
                report = _closure1_slot55;
                config = report.bind(oscard)(record, ctrled, vacuum);
                if(!(config > kiloes)) { _fun00058_ip = 726; continue _fun00057 }
 656:
                sequen = entity.push;
                report = {};
                cntext = _closure1_slot36;
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
 726:
                sequen = option.bind(oscard)();
                report = sequen.done;
                foxtra = sequen;
                romeon = option;
                yankee = record;
                offset = config;
                golfie = foxtra;
                if(report) { _fun00058_ip = 565; continue _fun00057 }
 756:
                _fun00058_ip = 626; continue _fun00057;
            }
 761:
            golfie = _closure1_slot38;
            report = golfie.getState;
            report = report.bind(golfie)();
            golfie = report.options;
            report = golfie.forEach;
            tangon = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
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
                    entity = 33;
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
                    if(!tangon) { _fun00060_ip = 102; continue _fun00059 }
 99:
                    oscard = zuuluu;
 102:
                    if(!(oscard > michal)) { _fun00060_ip = 230; continue _fun00059 }
 109:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.push;
                    michal = {};
                    option = _closure1_slot36;
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
            zuuluu = 31;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00058_ip = 841; continue _fun00057 }
 835:
            entity['length'] = michal;
 841:
            return entity;
        }
    };
    oscard['queryInAppNavigations'] = offset;
    offset = function(argFoo) { // Original name: querySKUs
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.query;
            michal = entity.limit;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00062_ip = 24; continue _fun00061 }
 21:
            michal = 10;
 24:
            foxtra = entity.fuzzy;
            if(!(foxtra === oscard)) { _fun00062_ip = 36; continue _fun00061 }
 34:
            foxtra = true;
 36:
            romeon = entity.filter;
            if(!(romeon === oscard)) { _fun00062_ip = 52; continue _fun00061 }
 45:
            romeon = _closure1_slot45;
 52:
            entity = zuuluu.toLocaleLowerCase;
            entity = entity.bind(zuuluu)();
            yankee = {};
            report = global;
            kiloes = report.RegExp;
            golfie = _closure1_slot1;
            option = _closure1_slot3;
            tangon = 27;
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
            tangon = 33;
            tangon = option[tangon];
            golfie = golfie.bind(oscard)(tangon);
            option = _closure1_slot30;
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
            if(tangon) { _fun00062_ip = 463; continue _fun00061 }
 302:
            echoed = option.value;
            sizing = echoed.type;
            tangon = _closure1_slot34;
            tangon = tangon.DURABLE_PRIMARY;
            kiloes = golfie;
            backup = report;
            if(!(sizing === tangon)) { _fun00062_ip = 439; continue _fun00061 }
 332:
            tangon = romeon.bind(oscard)(echoed);
            kiloes = golfie;
            backup = report;
            if(!tangon) { _fun00062_ip = 439; continue _fun00061 }
 346:
            sizing = echoed.name;
            tangon = sizing.toLocaleLowerCase;
            sizing = tangon.bind(sizing)();
            tangon = _closure1_slot55;
            tangon = tangon.bind(oscard)(sizing, yankee, foxtra);
            kiloes = sizing;
            backup = tangon;
            if(!(tangon > verify)) { _fun00062_ip = 439; continue _fun00061 }
 382:
            result = entity.push;
            output = {};
            update = _closure1_slot36;
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
 439:
            sizing = offset.bind(oscard)();
            tangon = sizing.done;
            golfie = kiloes;
            report = backup;
            option = sizing;
            if(!tangon) { _fun00062_ip = 302; continue _fun00061 }
 463:
            tangon = entity.sort;
            report = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 31;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = entity.length;
            if(!(zuuluu > michal)) { _fun00062_ip = 509; continue _fun00061 }
 503:
            entity['length'] = michal;
 509:
            return entity;
        }
    };
    oscard['querySKUs'] = offset;
    oscard['getRecentlyTalked'] = golfie;
    golfie = function(argFoo) { // Original name: queryMentionResults
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            tangon = argFoo;
            offset = this;
            sizing = tangon.query;
            romeon = tangon.channel;
            var _closure2_slot0 = romeon;
            yankee = tangon.canMentionEveryone;
            oscard = undefined;
            if(!(yankee === oscard)) { _fun00064_ip = 37; continue _fun00063 }
 35:
            yankee = false;
 37:
            var _closure2_slot1 = yankee;
            entity = tangon.canMentionHere;
            if(!(entity === oscard)) { _fun00064_ip = 53; continue _fun00063 }
 51:
            entity = true;
 53:
            zuuluu = tangon.canMentionUsers;
            if(!(zuuluu === oscard)) { _fun00064_ip = 65; continue _fun00063 }
 63:
            zuuluu = true;
 65:
            verify = tangon.canMentionRoles;
            if(!(verify === oscard)) { _fun00064_ip = 77; continue _fun00063 }
 75:
            verify = true;
 77:
            michal = tangon.includeAllGuildUsers;
            if(!(michal === oscard)) { _fun00064_ip = 89; continue _fun00063 }
 87:
            michal = false;
 89:
            golfie = tangon.includeNonMentionableRoles;
            if(!(golfie === oscard)) { _fun00064_ip = 101; continue _fun00063 }
 99:
            golfie = false;
 101:
            var _closure2_slot2 = golfie;
            kiloes = tangon.checkRecentlyTalkedOnEmptyQuery;
            if(!(kiloes === oscard)) { _fun00064_ip = 117; continue _fun00063 }
 115:
            kiloes = true;
 117:
            golfie = tangon.limit;
            if(!(golfie === oscard)) { _fun00064_ip = 134; continue _fun00063 }
 127:
            golfie = _closure1_slot35;
 134:
            backup = tangon.request;
            foxtra = tangon.allowSnowflake;
            if(!(foxtra === oscard)) { _fun00064_ip = 152; continue _fun00063 }
 150:
            foxtra = false;
 152:
            var _closure2_slot3 = foxtra;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = oscard;
            if(zuuluu) { _fun00064_ip = 173; continue _fun00063 }
 167:
            tangon = new Array(0);
            _fun00064_ip = 293; continue _fun00063;
 173:
            if(!michal) { _fun00064_ip = 187; continue _fun00063 }
 176:
            zuuluu = romeon.guild_id;
            michal = null;
            if(!(michal == zuuluu)) { _fun00064_ip = 231; continue _fun00063 }
 187:
            zuuluu = offset.queryChannelUsers;
            michal = {};
            option = romeon.id;
            michal['channelId'] = option;
            michal['query'] = sizing;
            michal['limit'] = golfie;
            michal['checkRecentlyTalkedOnEmptyQuery'] = kiloes;
            michal['allowSnowflake'] = foxtra;
            option = zuuluu.bind(offset)(michal);
            _fun00064_ip = 278; continue _fun00063;
 231:
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
 278:
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
                golfie = _closure1_slot21;
                oscard = golfie.getNick;
                tangon = _closure2_slot0;
                report = tangon.guild_id;
                tangon = michal.id;
                tangon = oscard.bind(golfie)(report, tangon);
                entity['nick'] = tangon;
                tangon = _closure1_slot25;
                zuuluu = tangon.getStatus;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['status'] = michal;
                return entity;
            };
            tangon = zuuluu.bind(option)(michal);
 293:
            foxtra = tangon.length;
            michal = sizing.toLowerCase;
            option = michal.bind(sizing)();
            _closure2_slot4 = option;
            output = new Array(0);
            michal = output;
            offset = foxtra;
            if(!(offset < golfie)) { _fun00064_ip = 530; continue _fun00063 }
 329:
            offset = foxtra;
            michal = output;
            if(!verify) { _fun00064_ip = 530; continue _fun00063 }
 341:
            zuuluu = romeon.getGuildId;
            result = zuuluu.bind(romeon)();
            _closure2_slot5 = result;
            kiloes = _closure1_slot22;
            backup = kiloes.getGuild;
            kiloes = backup.bind(kiloes)(result);
            backup = null;
            offset = foxtra;
            michal = output;
            if(!(backup != kiloes)) { _fun00064_ip = 530; continue _fun00063 }
 387:
            result = _closure1_slot1;
            backup = _closure1_slot3;
            output = 33;
            output = backup[output];
            output = result.bind(oscard)(output);
            echoed = _closure1_slot22;
            result = echoed.getRoles;
            kiloes = kiloes.id;
            kiloes = result.bind(echoed)(kiloes);
            output = output.bind(oscard)(kiloes);
            kiloes = output.filter;
            report = function(argFoo) {
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    michal = argFoo;
                    entity = michal.mentionable;
                    option = michal.name;
                    zuuluu = michal.id;
                    if(entity) { _fun00066_ip = 29; continue _fun00065 }
 22:
                    entity = _closure2_slot1;
 29:
                    if(entity) { _fun00066_ip = 39; continue _fun00065 }
 32:
                    entity = _closure2_slot2;
 39:
                    if(!entity) { _fun00066_ip = 114; continue _fun00065 }
 42:
                    tangon = _closure1_slot1;
                    report = _closure1_slot3;
                    michal = 28;
                    michal = report[michal];
                    golfie = undefined;
                    oscard = tangon.bind(golfie)(michal);
                    tangon = _closure2_slot4;
                    michal = option.toLowerCase;
                    michal = michal.bind(option)();
                    michal = oscard.bind(golfie)(tangon, michal);
                    if(michal) { _fun00066_ip = 111; continue _fun00065 }
 93:
                    tangon = _closure2_slot3;
                    if(!tangon) { _fun00066_ip = 108; continue _fun00065 }
 100:
                    report = _closure2_slot4;
                    tangon = report === zuuluu;
 108:
                    michal = tangon;
 111:
                    entity = michal;
 114:
                    if(!entity) { _fun00066_ip = 164; continue _fun00065 }
 117:
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    michal = 39;
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
            zuuluu = 40;
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
 530:
            zuuluu = new Array(0);
            report = romeon.isPrivate;
            report = report.bind(romeon)();
            report = !report;
            if(!report) { _fun00064_ip = 553; continue _fun00063 }
 550:
            report = yankee;
 553:
            if(!report) { _fun00064_ip = 559; continue _fun00063 }
 556:
            report = verify;
 559:
            if(!report) { _fun00064_ip = 724; continue _fun00063 }
 565:
            verify = offset < golfie;
            if(!verify) { _fun00064_ip = 614; continue _fun00063 }
 572:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot3;
            yankee = 28;
            yankee = foxtra[yankee];
            yankee = romeon.bind(oscard)(yankee);
            report = _closure1_slot48;
            report = report.bind(oscard)();
            report = report.test;
            verify = yankee.bind(oscard)(option, report);
 614:
            report = offset;
            if(!verify) { _fun00064_ip = 648; continue _fun00063 }
 620:
            yankee = zuuluu.push;
            verify = _closure1_slot48;
            verify = verify.bind(oscard)();
            verify = yankee.bind(zuuluu)(verify);
            verify = 1;
            report = offset + verify;
 648:
            if(!entity) { _fun00064_ip = 655; continue _fun00063 }
 651:
            entity = report < golfie;
 655:
            if(!entity) { _fun00064_ip = 700; continue _fun00063 }
 658:
            verify = _closure1_slot1;
            offset = _closure1_slot3;
            golfie = 28;
            golfie = offset[golfie];
            golfie = verify.bind(oscard)(golfie);
            report = _closure1_slot49;
            report = report.bind(oscard)();
            report = report.test;
            entity = golfie.bind(oscard)(option, report);
 700:
            if(!entity) { _fun00064_ip = 724; continue _fun00063 }
 703:
            report = zuuluu.push;
            entity = _closure1_slot49;
            entity = entity.bind(oscard)();
            entity = report.bind(zuuluu)(entity);
 724:
            entity = {};
            entity['users'] = tangon;
            entity['globals'] = zuuluu;
            entity['roles'] = michal;
            return entity;
        }
    };
    oscard['queryMentionResults'] = golfie;
    golfie = function(argFoo) { // Original name: queryGuildMentionResults
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            tangon = argFoo;
            verify = this;
            michal = tangon.query;
            foxtra = tangon.guildId;
            var _closure2_slot0 = foxtra;
            report = tangon.canMentionEveryone;
            oscard = undefined;
            if(!(report === oscard)) { _fun00068_ip = 37; continue _fun00067 }
 35:
            report = false;
 37:
            var _closure2_slot1 = report;
            entity = tangon.canMentionUsers;
            if(!(entity === oscard)) { _fun00068_ip = 53; continue _fun00067 }
 51:
            entity = true;
 53:
            golfie = tangon.canMentionRoles;
            if(!(golfie === oscard)) { _fun00068_ip = 65; continue _fun00067 }
 63:
            golfie = true;
 65:
            tangon = tangon.canMentionNonMentionableRoles;
            if(!(tangon === oscard)) { _fun00068_ip = 77; continue _fun00067 }
 75:
            tangon = false;
 77:
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            if(entity) { _fun00068_ip = 98; continue _fun00067 }
 92:
            tangon = new Array(0);
            _fun00068_ip = 135; continue _fun00067;
 98:
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
                tangon = _closure1_slot25;
                zuuluu = tangon.getStatus;
                michal = michal.record;
                michal = michal.id;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 'status';
                entity[michal] = zuuluu;
                return entity;
            };
            tangon = option.bind(verify)(entity);
 135:
            offset = tangon.length;
            entity = michal.toLowerCase;
            verify = entity.bind(michal)();
            _closure2_slot3 = verify;
            michal = new Array(0);
            _closure2_slot4 = michal;
            yankee = _closure1_slot35;
            option = offset;
            if(!(option < yankee)) { _fun00068_ip = 314; continue _fun00067 }
 179:
            option = offset;
            if(!golfie) { _fun00068_ip = 314; continue _fun00067 }
 188:
            romeon = _closure1_slot22;
            yankee = romeon.getGuild;
            yankee = yankee.bind(romeon)(foxtra);
            romeon = null;
            option = offset;
            if(!(romeon != yankee)) { _fun00068_ip = 314; continue _fun00067 }
 211:
            foxtra = _closure1_slot1;
            backup = _closure1_slot3;
            romeon = 33;
            romeon = backup[romeon];
            romeon = foxtra.bind(oscard)(romeon);
            backup = _closure1_slot22;
            foxtra = backup.getRoles;
            yankee = yankee.id;
            yankee = foxtra.bind(backup)(yankee);
            foxtra = romeon.bind(oscard)(yankee);
            romeon = foxtra.filter;
            yankee = function(argFoo) {
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    michal = argFoo;
                    entity = michal.mentionable;
                    golfie = michal.name;
                    report = michal.id;
                    if(entity) { _fun00070_ip = 29; continue _fun00069 }
 22:
                    entity = _closure2_slot1;
 29:
                    if(entity) { _fun00070_ip = 39; continue _fun00069 }
 32:
                    entity = _closure2_slot2;
 39:
                    if(!entity) { _fun00070_ip = 90; continue _fun00069 }
 42:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot3;
                    michal = 28;
                    michal = tangon[michal];
                    oscard = undefined;
                    tangon = zuuluu.bind(oscard)(michal);
                    zuuluu = _closure2_slot3;
                    michal = golfie.toLowerCase;
                    michal = michal.bind(golfie)();
                    entity = tangon.bind(oscard)(zuuluu, michal);
 90:
                    if(!entity) { _fun00070_ip = 137; continue _fun00069 }
 93:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 41;
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
            yankee = _closure1_slot35;
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
 314:
            zuuluu = new Array(0);
            if(!report) { _fun00068_ip = 324; continue _fun00067 }
 321:
            report = golfie;
 324:
            if(!report) { _fun00068_ip = 482; continue _fun00067 }
 330:
            report = _closure1_slot35;
            report = option < report;
            if(!report) { _fun00068_ip = 380; continue _fun00067 }
 341:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            golfie = 28;
            golfie = yankee[golfie];
            offset = offset.bind(oscard)(golfie);
            golfie = _closure1_slot48;
            golfie = golfie.bind(oscard)();
            golfie = golfie.test;
            report = offset.bind(oscard)(verify, golfie);
 380:
            golfie = option;
            if(!report) { _fun00068_ip = 411; continue _fun00067 }
 386:
            offset = zuuluu.push;
            report = _closure1_slot48;
            report = report.bind(oscard)();
            report = offset.bind(zuuluu)(report);
            report = 1;
            golfie = option + report;
 411:
            report = _closure1_slot35;
            report = golfie < report;
            if(!report) { _fun00068_ip = 461; continue _fun00067 }
 422:
            option = _closure1_slot1;
            offset = _closure1_slot3;
            golfie = 28;
            golfie = offset[golfie];
            option = option.bind(oscard)(golfie);
            golfie = _closure1_slot49;
            golfie = golfie.bind(oscard)();
            golfie = golfie.test;
            report = option.bind(oscard)(verify, golfie);
 461:
            if(!report) { _fun00068_ip = 482; continue _fun00067 }
 464:
            report = zuuluu.push;
            entity = _closure1_slot49;
            entity = entity.bind(oscard)();
            entity = report.bind(zuuluu)(entity);
 482:
            entity = {};
            entity['users'] = tangon;
            entity['globals'] = zuuluu;
            entity['roles'] = michal;
            return entity;
        }
    };
    oscard['queryGuildMentionResults'] = golfie;
    golfie = function(argFoo) { // Original name: queryChoice
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.query;
            report = michal.choices;
            tangon = michal.limit;
            golfie = undefined;
            if(!(tangon === golfie)) { _fun00072_ip = 32; continue _fun00071 }
 29:
            tangon = 10;
 32:
            michal = michal.fuzzy;
            if(!(michal === golfie)) { _fun00072_ip = 44; continue _fun00071 }
 42:
            michal = true;
 44:
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
            zuuluu = 27;
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
            zuuluu = 33;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            oscard = zuuluu.bind(golfie)(report);
            report = oscard.map;
            zuuluu = function(argFoo, argBar) {
                _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
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
                    if(!(zuuluu > michal)) { _fun00074_ip = 101; continue _fun00073 }
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
            michal = 34;
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
            if(!(entity !== tangon)) { _fun00072_ip = 317; continue _fun00071 }
 306:
            entity = zuuluu.take;
            michal = entity.bind(zuuluu)(tangon);
 317:
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    oscard['queryChoice'] = golfie;
    golfie = function(argFoo) { // Original name: queryStaticRouteChannels
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
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
            michal = 27;
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
            entity = 42;
            entity = zuuluu[entity];
            zuuluu = michal.bind(offset)(entity);
            michal = zuuluu.canSeeOnboardingHome;
            entity = foxtra.id;
            verify = michal.bind(zuuluu)(entity);
            if(!verify) { _fun00076_ip = 237; continue _fun00075 }
 213:
            michal = foxtra.hasFeature;
            entity = _closure1_slot32;
            entity = entity.HUB;
            entity = michal.bind(foxtra)(entity);
            verify = !entity;
 237:
            michal = foxtra.hasFeature;
            entity = _closure1_slot32;
            entity = entity.COMMUNITY;
            option = michal.bind(foxtra)(entity);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 43;
            entity = zuuluu[entity];
            michal = michal.bind(offset)(entity);
            entity = michal.isGuildOnboardingAvailable;
            golfie = entity.bind(michal)(foxtra);
            if(!golfie) { _fun00076_ip = 313; continue _fun00075 }
 292:
            michal = foxtra.hasFeature;
            entity = _closure1_slot32;
            entity = entity.COMMUNITY;
            golfie = michal.bind(foxtra)(entity);
 313:
            entity = new Array(0);
            michal = {};
            tangon = _closure1_slot37;
            zuuluu = tangon.SERVER_GUIDE;
            michal['id'] = zuuluu;
            backup = _closure1_slot0;
            kiloes = _closure1_slot3;
            zuuluu = 38;
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
            if(!michal) { _fun00076_ip = 750; continue _fun00075 }
 549:
            kiloes = oscard[zuuluu];
            backup = kiloes.id;
            michal = _closure1_slot37;
            michal = michal.SERVER_GUIDE;
            if(!(backup === michal)) { _fun00076_ip = 578; continue _fun00075 }
 572:
            if(!verify) { _fun00076_ip = 735; continue _fun00075 }
 578:
            backup = kiloes.id;
            michal = _closure1_slot37;
            michal = michal.CHANNEL_BROWSER;
            if(!(backup === michal)) { _fun00076_ip = 603; continue _fun00075 }
 597:
            if(!option) { _fun00076_ip = 735; continue _fun00075 }
 603:
            backup = kiloes.id;
            michal = _closure1_slot37;
            michal = michal.CUSTOMIZE_COMMUNITY;
            if(!(backup === michal)) { _fun00076_ip = 625; continue _fun00075 }
 622:
            if(!golfie) { _fun00076_ip = 735; continue _fun00075 }
 625:
            backup = _closure1_slot55;
            sizing = kiloes.name;
            michal = sizing.toLocaleLowerCase;
            michal = michal.bind(sizing)();
            michal = backup.bind(offset)(michal, romeon, tangon);
            if(!(michal > report)) { _fun00076_ip = 735; continue _fun00075 }
 655:
            backup = entity.push;
            sizing = _closure1_slot14;
            michal = {};
            output = kiloes.id;
            michal['id'] = output;
            kiloes = kiloes.name;
            michal['name'] = kiloes;
            kiloes = _closure1_slot33;
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
 735:
            zuuluu = zuuluu + 1;
            michal = oscard.length;
            if(zuuluu < michal) { _fun00076_ip = 549; continue _fun00075 }
 750:
            return entity;
        }
    };
    oscard['queryStaticRouteChannels'] = golfie;
    golfie = function(argFoo) { // Original name: queryChannelResults
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            entity = argFoo;
            report = this;
            option = entity.query;
            verify = entity.channel;
            oscard = entity.type;
            golfie = undefined;
            if(!(oscard === golfie)) { _fun00078_ip = 37; continue _fun00077 }
 30:
            oscard = _closure1_slot18;
 37:
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
                _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity == zuuluu;
                    if(entity) { _fun00080_ip = 38; continue _fun00079 }
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
    oscard['queryChannelResults'] = golfie;
    golfie = function(argFoo) { // Original name: queryApplicationCommandChannelResults
        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
            entity = argFoo;
            result = this;
            output = entity.query;
            zuuluu = entity.channel;
            oscard = entity.channelTypes;
            var _closure2_slot0 = oscard;
            verify = entity.limit;
            yankee = undefined;
            if(!(verify === yankee)) { _fun00082_ip = 48; continue _fun00081 }
 41:
            verify = _closure1_slot35;
 48:
            sizing = entity.allowSnowflake;
            michal = zuuluu.guild_id;
            entity = null;
            if(!(entity != michal)) { _fun00082_ip = 299; continue _fun00081 }
 68:
            romeon = new Array(0);
            kiloes = _closure1_slot51;
            report = kiloes.length;
            option = 0;
            report = option < report;
            backup = true;
            foxtra = false;
            golfie = 0;
            offset = romeon;
            if(!report) { _fun00082_ip = 196; continue _fun00081 }
 102:
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
                _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity == zuuluu;
                    if(entity) { _fun00084_ip = 38; continue _fun00083 }
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
            if(golfie < report) { _fun00082_ip = 102; continue _fun00081 }
 196:
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
            michal = 44;
            michal = romeon[michal];
            michal = offset.bind(yankee)(michal);
            report = report.bind(golfie)(michal);
            michal = entity != verify;
            if(!michal) { _fun00082_ip = 258; continue _fun00081 }
 249:
            golfie = report.length;
            michal = golfie > verify;
 258:
            golfie = report;
            if(!michal) { _fun00082_ip = 275; continue _fun00081 }
 264:
            michal = report.slice;
            golfie = michal.bind(report)(option, verify);
 275:
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
 299:
            michal = new Array(0);
            entity = entity == oscard;
            if(entity) { _fun00082_ip = 325; continue _fun00081 }
 310:
            report = oscard.includes;
            tangon = zuuluu.type;
            entity = report.bind(oscard)(tangon);
 325:
            if(!entity) { _fun00082_ip = 338; continue _fun00081 }
 328:
            entity = michal.push;
            entity = entity.bind(michal)(zuuluu);
 338:
            entity = {};
            entity['channels'] = michal;
            return entity;
        }
    };
    oscard['queryApplicationCommandChannelResults'] = golfie;
    golfie = function(argFoo) { // Original name: queryChoiceResults
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
    oscard['queryChoiceResults'] = golfie;
    golfie = function(argFoo) { // Original name: queryEmojiResults
        _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
            entity = argFoo;
            option = entity.query;
            verify = entity.channel;
            oscard = entity.intention;
            golfie = entity.maxCount;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00086_ip = 39; continue _fun00085 }
 32:
            golfie = _closure1_slot35;
 39:
            report = entity.matchComparator;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 45;
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
    oscard['queryEmojiResults'] = golfie;
    golfie = function(argFoo) { // Original name: queryStickers
        _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
            entity = arguments[1];
            michal = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00088_ip = 16; continue _fun00087 }
 14:
            entity = true;
 16:
            var _closure2_slot0 = entity;
            if(!(michal === report)) { _fun00088_ip = 48; continue _fun00087 }
 24:
            tangon = _closure1_slot45;
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
            if(michal) { _fun00088_ip = 73; continue _fun00087 }
 70:
            tangon = golfie;
 73:
            var _closure2_slot1 = tangon;
            tangon = undefined;
            if(michal) { _fun00088_ip = 107; continue _fun00087 }
 82:
            golfie = oscard().value;
            oscard = entity;
            oscard = oscard === report;
            tangon = undefined;
            michal = oscard;
            if(oscard) { _fun00088_ip = 107; continue _fun00087 }
 101:
            tangon = golfie;
            michal = oscard;
 107:
            var _closure2_slot2 = tangon;
            if(michal) { _fun00088_ip = 117; continue _fun00087 }
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
            tangon = _closure1_slot29;
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
            entity = 45;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            oscard = entity.FrecencyUserSettingsActionCreators;
            entity = oscard.loadIfNecessary;
            entity = entity.bind(oscard)();
            option = function() { // Original name: _loop
                _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                    entity = _closure2_slot7;
                    option = '';
                    if(!(option !== entity)) { _fun00090_ip = 247; continue _fun00089 }
 20:
                    tangon = _closure2_slot7;
                    entity = tangon.toLocaleLowerCase;
                    golfie = entity.bind(tangon)();
                    var _closure3_slot0 = golfie;
                    oscard = _closure1_slot0;
                    yankee = _closure1_slot3;
                    entity = 29;
                    tangon = yankee[entity];
                    entity = undefined;
                    oscard = oscard.bind(entity)(tangon);
                    tangon = oscard.stripDiacritics;
                    offset = tangon.bind(oscard)(golfie);
                    tangon = global;
                    foxtra = tangon.RegExp;
                    verify = _closure1_slot1;
                    report = 27;
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
                        _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                            verify = argBar;
                            michal = _closure1_slot9;
                            entity = michal.getStickerById;
                            oscard = entity.bind(michal)(verify);
                            zuuluu = null;
                            if(!(zuuluu != oscard)) { _fun00092_ip = 563; continue _fun00091 }
 30:
                            report = _closure2_slot2;
                            golfie = _closure1_slot0;
                            option = _closure1_slot3;
                            michal = 46;
                            michal = option[michal];
                            sizing = undefined;
                            offset = golfie.bind(sizing)(michal);
                            option = offset.getStickerSendability;
                            golfie = _closure2_slot4;
                            michal = _closure2_slot1;
                            michal = option.bind(offset)(oscard, golfie, michal);
                            michal = report.bind(sizing)(oscard, michal);
                            if(!michal) { _fun00092_ip = 563; continue _fun00091 }
 92:
                            report = _closure1_slot52;
                            michal = argFoo;
                            kiloes = report.bind(sizing)(michal);
                            report = kiloes.bind(sizing)();
                            golfie = report.done;
                            michal = 0;
                            foxtra = 32;
                            romeon = 0;
                            yankee = null;
                            offset = report;
                            option = 0;
                            report = null;
                            if(golfie) { _fun00092_ip = 435; continue _fun00091 }
 138:
                            golfie = offset.value;
                            ctrled = golfie.type;
                            golfie = golfie.value;
                            output = _closure1_slot58;
                            update = output.bind(sizing)(ctrled);
                            output = _closure2_slot0;
                            echoed = _closure3_slot0;
                            if(output) { _fun00092_ip = 201; continue _fun00091 }
 173:
                            output = yankee;
                            result = 0;
                            if(!(golfie === echoed)) { _fun00092_ip = 398; continue _fun00091 }
 185:
                            source = _closure1_slot40;
                            result = source * update;
                            output = golfie;
                            _fun00092_ip = 398; continue _fun00091;
 201:
                            if(!(golfie !== echoed)) { _fun00092_ip = 387; continue _fun00091 }
 208:
                            source = _closure3_slot1;
                            echoed = source.test;
                            echoed = echoed.bind(source)(golfie);
                            if(echoed) { _fun00092_ip = 374; continue _fun00091 }
 228:
                            source = _closure1_slot0;
                            echoed = _closure1_slot3;
                            echoed = echoed[foxtra];
                            echoed = source.bind(sizing)(echoed);
                            echoed = echoed.StickerMetadataTypes;
                            echoed = echoed.GUILD_NAME;
                            echoed = ctrled !== echoed;
                            if(!echoed) { _fun00092_ip = 297; continue _fun00091 }
 264:
                            vacuum = _closure1_slot0;
                            source = _closure1_slot3;
                            source = source[foxtra];
                            source = vacuum.bind(sizing)(source);
                            source = source.StickerMetadataTypes;
                            source = source.PACK_NAME;
                            echoed = ctrled !== source;
 297:
                            if(!echoed) { _fun00092_ip = 333; continue _fun00091 }
 300:
                            vacuum = _closure1_slot0;
                            source = _closure1_slot3;
                            source = source[foxtra];
                            source = vacuum.bind(sizing)(source);
                            source = source.StickerMetadataTypes;
                            source = source.STICKER_NAME;
                            echoed = ctrled !== source;
 333:
                            if(echoed) { _fun00092_ip = 353; continue _fun00091 }
 336:
                            ctrled = _closure3_slot2;
                            source = ctrled.test;
                            source = source.bind(ctrled)(golfie);
                            echoed = !source;
 353:
                            output = yankee;
                            result = 0;
                            if(echoed) { _fun00092_ip = 398; continue _fun00091 }
 361:
                            echoed = _closure1_slot42;
                            result = echoed * update;
                            output = yankee;
                            _fun00092_ip = 398; continue _fun00091;
 374:
                            echoed = _closure1_slot41;
                            result = echoed * update;
                            output = yankee;
                            _fun00092_ip = 398; continue _fun00091;
 387:
                            echoed = _closure1_slot40;
                            result = echoed * update;
                            output = yankee;
 398:
                            if(!(result > romeon)) { _fun00092_ip = 408; continue _fun00091 }
 402:
                            romeon = result;
                            output = golfie;
 408:
                            echoed = kiloes.bind(sizing)();
                            golfie = echoed.done;
                            yankee = output;
                            offset = echoed;
                            option = romeon;
                            report = yankee;
                            if(!golfie) { _fun00092_ip = 138; continue _fun00091 }
 435:
                            tangon = _closure1_slot8;
                            golfie = tangon.stickerFrecencyWithoutFetchingLatest;
                            tangon = golfie.getScore;
                            verify = tangon.bind(golfie)(verify);
                            tangon = option;
                            if(!(zuuluu != verify)) { _fun00092_ip = 474; continue _fun00091 }
 463:
                            golfie = 100;
                            golfie = verify / golfie;
                            tangon = option * golfie;
 474:
                            michal = tangon > michal;
                            if(!michal) { _fun00092_ip = 485; continue _fun00091 }
 481:
                            michal = zuuluu != report;
 485:
                            if(!michal) { _fun00092_ip = 510; continue _fun00091 }
 488:
                            option = _closure2_slot5;
                            golfie = option.has;
                            zuuluu = oscard.id;
                            zuuluu = golfie.bind(option)(zuuluu);
                            michal = !zuuluu;
 510:
                            if(!michal) { _fun00092_ip = 563; continue _fun00091 }
 513:
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
 563:
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
            if(entity) { _fun00088_ip = 306; continue _fun00087 }
 278:
            entity = oscard.value;
            _closure2_slot7 = entity;
            entity = option.bind(report)();
            verify = golfie.bind(report)();
            entity = verify.done;
            oscard = verify;
            if(!entity) { _fun00088_ip = 278; continue _fun00087 }
 306:
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            entity = 33;
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
            if(!(tangon === report)) { _fun00088_ip = 382; continue _fun00087 }
 371:
            michal = _closure1_slot47;
            _closure2_slot6 = michal;
            entity = michal;
 382:
            return entity;
        }
    };
    oscard['queryStickers'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: querySoundmoji
        _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
            oscard = argBar;
            var _closure2_slot0 = oscard;
            zuuluu = _closure1_slot29;
            michal = zuuluu.getCurrentUser;
            report = michal.bind(zuuluu)();
            zuuluu = _closure1_slot7;
            michal = zuuluu.isFetching;
            michal = michal.bind(zuuluu)();
            michal = !michal;
            if(!michal) { _fun00094_ip = 64; continue _fun00093 }
 45:
            golfie = _closure1_slot7;
            zuuluu = golfie.hasFetchedAllSounds;
            zuuluu = zuuluu.bind(golfie)();
            michal = !zuuluu;
 64:
            if(!michal) { _fun00094_ip = 99; continue _fun00093 }
 67:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 47;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = golfie.bind(michal)(zuuluu);
            michal = zuuluu.maybeFetchSoundboardSounds;
            michal = michal.bind(zuuluu)();
 99:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 45;
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
                    _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                        tangon = argFoo;
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 48;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        michal = _closure2_slot0;
                        golfie = null;
                        michal = golfie == michal;
                        zuuluu = undefined;
                        if(michal) { _fun00096_ip = 55; continue _fun00095 }
 46:
                        michal = _closure2_slot0;
                        zuuluu = michal.guild_id;
 55:
                        michal = _closure2_slot0;
                        golfie = golfie == michal;
                        michal = undefined;
                        if(golfie) { _fun00096_ip = 77; continue _fun00095 }
 68:
                        oscard = _closure2_slot0;
                        michal = oscard.id;
 77:
                        michal = report.bind(entity)(tangon, zuuluu, michal);
                        if(!michal) { _fun00096_ip = 104; continue _fun00095 }
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
            entity = 49;
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
    oscard['querySoundmoji'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: matchSentinel
        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
            zuuluu = _closure1_slot46;
            michal = zuuluu.test;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            if(!entity) { _fun00098_ip = 36; continue _fun00097 }
 26:
            zuuluu = argFoo;
            michal = argBaz;
            entity = zuuluu === michal;
 36:
            return entity;
        }
    };
    oscard['matchSentinel'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: hasSameRoleAsUsername
        _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            entity = tangon.isPomelo;
            entity = entity.bind(tangon)();
            if(entity) { _fun00100_ip = 23; continue _fun00099 }
 19:
            entity = false;
            return entity;
 23:
            report = _closure1_slot22;
            zuuluu = report.getGuild;
            entity = oscard.getGuildId;
            entity = entity.bind(oscard)();
            entity = zuuluu.bind(report)(entity);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00100_ip = 60; continue _fun00099 }
 56:
            zuuluu = {};
            _fun00100_ip = 80; continue _fun00099;
 60:
            report = _closure1_slot22;
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
            if(!entity) { _fun00100_ip = 162; continue _fun00099 }
 112:
            entity = zuuluu[michal];
            golfie = entity.name;
            oscard = tangon.username;
            report = oscard.startsWith;
            entity = golfie.toLowerCase;
            entity = entity.bind(golfie)();
            entity = report.bind(oscard)(entity);
            if(entity) { _fun00100_ip = 166; continue _fun00099 }
 150:
            michal = michal + 1;
            entity = zuuluu.length;
            if(michal < entity) { _fun00100_ip = 112; continue _fun00099 }
 162:
            entity = false;
            return entity;
 166:
            entity = true;
            return entity;
        }
    };
    oscard['hasSameRoleAsUsername'] = golfie;
    golfie = 50;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/AutocompleteUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    report = function(argFoo) { // Original name: populateInAppSettingNavigationOptions
        zuuluu = _closure1_slot38;
        michal = zuuluu.setState;
        entity = {};
        tangon = argFoo;
        entity['options'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['populateInAppSettingNavigationOptions'] = report;
    zuuluu['WHITESPACE_REGEX'] = tangon;
    zuuluu['COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS'] = michal;
    return entity;
})();