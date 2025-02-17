// app/utils/AutocompleteUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    sizing = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = sizing;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot52;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot52;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot51 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot52 = entity;
    entity = function() { // Original name: calculateScore
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = arguments[0];
            zulu = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            mike = 0;
 14:
            entity = 1000;
            mike = entity * mike;
            entity = null;
            tango = entity != zulu;
            entity = 1;
            if(!tango) { _fun00008_ip = 39; continue _fun00007 }
 36:
            entity = zulu;
 39:
            entity = mike * entity;
            return entity;
        }
    };
    var _closure1_slot53 = entity;
    entity = function(argFoo, argBar) { // Original name: getMatchValue
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            options = argBar;
            golf = arguments[2];
            entity = argFoo;
            oscar = options.exactQuery;
            report = options.containQuery;
            mike = options.queryLower;
            zulu = options.isFullMatch;
            options = undefined;
            if(!(golf === options)) { _fun00010_ip = 41; continue _fun00009 }
 39:
            golf = true;
 41:
            tango = golf;
 44: // try_start_0
            verify = oscar;
            golf = verify.test;
            oscar = entity;
            oscar = golf.bind(verify)(oscar);
            if(oscar) { _fun00010_ip = 174; continue _fun00009 }
 63:
            golf = report;
            oscar = golf.test;
            report = entity;
            report = oscar.bind(golf)(report);
            if(report) { _fun00010_ip = 165; continue _fun00009 }
 82:
            golf = mike;
            oscar = entity;
            report = function(argFoo, argBar) { // Original name: multiTokenMatch
                tango = argFoo;
                mike = argBar;
                var _closure3_slot0 = mike;
                zulu = tango.split;
                mike = /(?:,| )+/;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.every;
                entity = function(argFoo) {
                    entity = global;
                    tango = entity.RegExp;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 26;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.escape;
                    entity = argFoo;
                    oscar = mike.bind(zulu)(entity);
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    report = 'i';
                    golf = mike;
                    entity = new golf[tango](oscar, report, tango);
                    zulu = entity instanceof Object ? entity : mike;
                    mike = zulu.test;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(options)(golf, oscar);
            if(report) { _fun00010_ip = 156; continue _fun00009 }
 104:
            if(!tango) { _fun00010_ip = 145; continue _fun00009 }
 107:
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            report = 27;
            report = golf[report];
            golf = oscar.bind(options)(report);
            oscar = mike;
            report = entity;
            report = golf.bind(options)(oscar, report);
            if(report) { _fun00010_ip = 150; continue _fun00009 }
 145: // try_end0
            _fun00010_ip = 290; continue _fun00009;
 150: // try_start_1
            tango = _closure1_slot43;
 154: // try_end1
            return tango;
 156: // try_start_2
            tango = _closure1_slot42;
 163: // try_end2
            return tango;
 165: // try_start_3
            tango = _closure1_slot41;
 172: // try_end3
            return tango;
 174: // try_start_4
            report = entity;
            tango = report.toLocaleLowerCase;
            report = tango.bind(report)();
            tango = mike;
            if(!(report !== tango)) { _fun00010_ip = 262; continue _fun00009 }
 194:
            tango = zulu;
            zulu = false;
            if(!(zulu !== tango)) { _fun00010_ip = 212; continue _fun00009 }
 203:
            zulu = _closure1_slot40;
 210: // try_end4
            return zulu;
 212: // try_start_5
            mike = mike.length;
            entity = entity.length;
            report = mike / entity;
            entity = global;
            tango = entity.Math;
            zulu = tango.max;
            mike = _closure1_slot43;
            entity = _closure1_slot40;
            entity = entity * report;
            entity = zulu.bind(tango)(mike, entity);
 260: // try_end5
            return entity;
 262: // try_start_6
            entity = _closure1_slot39;
 269: // try_end6
            return entity;
 271: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6
            CatchBlockStart(arg_register=2);
            mike = _closure1_slot38;
            entity = mike.error;
            entity = entity.bind(mike)(zulu);
 290:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot54 = entity;
    entity = function(argFoo) { // Original name: isValidGuildMember
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            zulu = null;
            tango = zulu == mike;
            entity = undefined;
            if(tango) { _fun00012_ip = 20; continue _fun00011 }
 14:
            entity = mike.joinedAt;
 20:
            entity = zulu != entity;
            if(!entity) { _fun00012_ip = 36; continue _fun00011 }
 27:
            mike = mike.isPending;
            entity = !mike;
 36:
            return entity;
        }
    };
    var _closure1_slot55 = entity;
    entity = function(argFoo) { // Original name: queryMemberList
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            variable39 = entity.query;
            variable38 = entity.members;
            mike = entity.limit;
            variable37 = entity.filter;
            variable36 = entity.allowSnowflake;
            tango = _closure1_slot28;
            entity = tango.getUsers;
            quebec = entity.bind(tango)();
            tango = _closure1_slot27;
            entity = tango.getGuildId;
            equality = entity.bind(tango)();
            entity = variable39.toLocaleLowerCase;
            whiskey = entity.bind(variable39)();
            tango = _closure1_slot0;
            entity = _closure1_slot3;
            lima = 28;
            entity = entity[lima];
            verify = undefined;
            tango = tango.bind(verify)(entity);
            entity = tango.normalize;
            sierra = entity.bind(tango)(whiskey);
            report = new Array(0);
            options = new Array(0);
            status = variable38.length;
            golf = 0;
            variable40 = golf < status;
            target = 1;
            papa = null;
            context = 27;
            record = 50;
            config = 29;
            sequence = 0;
            vacuum = 0;
            control = undefined;
            source = undefined;
            update = undefined;
            echo = undefined;
            result = undefined;
            output = undefined;
            sizing = undefined;
            kilo = undefined;
            backup = undefined;
            foxtrot = undefined;
            romeo = undefined;
            yankee = undefined;
            offset = undefined;
            oscar = undefined;
            tango = undefined;
            entity = undefined;
            if(!variable40) { _fun00014_ip = 1772; continue _fun00013 }
 180:
            variable40 = variable38[sequence];
            variable41 = _closure1_slot15;
            variable41 = variable40 instanceof variable41;
            if(variable41) { _fun00014_ip = 234; continue _fun00013 }
 195:
            variable41 = variable40.nick;
            variable42 = papa == variable41;
            variable64 = undefined;
            if(variable42) { _fun00014_ip = 220; continue _fun00013 }
 210:
            variable42 = variable41.toLocaleLowerCase;
            variable64 = variable42.bind(variable41)();
 220:
            variable42 = variable40.userId;
            variable42 = quebec[variable42];
            variable54 = variable41;
            _fun00014_ip = 286; continue _fun00013;
 234:
            variable44 = _closure1_slot20;
            variable43 = variable44.getNick;
            variable41 = variable40.id;
            variable43 = variable43.bind(variable44)(equality, variable41);
            variable44 = papa == variable43;
            variable41 = undefined;
            if(variable44) { _fun00014_ip = 274; continue _fun00013 }
 264:
            variable44 = variable43.toLocaleLowerCase;
            variable41 = variable44.bind(variable43)();
 274:
            variable64 = variable41;
            control = variable43;
            variable54 = source;
            variable42 = variable40;
 286:
            variable41 = _closure1_slot1;
            variable40 = _closure1_slot3;
            variable40 = variable40[config];
            variable41 = variable41.bind(verify)(variable40);
            variable40 = variable41.getGlobalName;
            variable41 = variable40.bind(variable41)(variable42);
            variable40 = papa == variable41;
            variable68 = variable42;
            variable63 = undefined;
            if(variable40) { _fun00014_ip = 336; continue _fun00013 }
 326:
            variable40 = variable41.toLocaleLowerCase;
            variable63 = variable40.bind(variable41)();
 336:
            variable55 = vacuum;
            variable53 = update;
            variable52 = echo;
            variable51 = result;
            variable50 = output;
            variable49 = sizing;
            variable48 = kilo;
            variable47 = backup;
            variable46 = foxtrot;
            variable45 = romeo;
            variable44 = yankee;
            variable43 = offset;
            variable42 = oscar;
            variable41 = tango;
            variable40 = entity;
            if(!(papa != variable68)) { _fun00014_ip = 1713; continue _fun00013 }
 388:
            if(!(papa != variable37)) { _fun00014_ip = 448; continue _fun00013 }
 392:
            variable56 = variable37.bind(verify)(variable68);
            variable55 = vacuum;
            variable53 = update;
            variable52 = echo;
            variable51 = result;
            variable50 = output;
            variable49 = sizing;
            variable48 = kilo;
            variable47 = backup;
            variable46 = foxtrot;
            variable45 = romeo;
            variable44 = yankee;
            variable43 = offset;
            variable42 = oscar;
            variable41 = tango;
            variable40 = entity;
            if(!variable56) { _fun00014_ip = 1713; continue _fun00013 }
 448:
            variable57 = variable68.username;
            variable56 = variable57.toLocaleLowerCase;
            variable62 = variable56.bind(variable57)();
            variable57 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable58 = variable56[lima];
            variable59 = variable57.bind(verify)(variable58);
            variable58 = variable59.stripDiacritics;
            variable61 = variable58.bind(variable59)(variable62);
            variable56 = variable56[lima];
            variable57 = variable57.bind(verify)(variable56);
            variable56 = variable57.normalize;
            variable60 = variable56.bind(variable57)(variable61);
            variable56 = papa != variable64;
            variable59 = null;
            if(!variable56) { _fun00014_ip = 548; continue _fun00013 }
 520:
            variable57 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable56 = variable56[lima];
            variable57 = variable57.bind(verify)(variable56);
            variable56 = variable57.stripDiacritics;
            variable59 = variable56.bind(variable57)(variable64);
 548:
            variable56 = papa != variable59;
            variable58 = null;
            if(!variable56) { _fun00014_ip = 585; continue _fun00013 }
 557:
            variable57 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable56 = variable56[lima];
            variable57 = variable57.bind(verify)(variable56);
            variable56 = variable57.normalize;
            variable58 = variable56.bind(variable57)(variable59);
 585:
            variable56 = papa != variable63;
            variable57 = null;
            if(!variable56) { _fun00014_ip = 622; continue _fun00013 }
 594:
            variable65 = _closure1_slot0;
            variable56 = _closure1_slot3;
            variable56 = variable56[lima];
            variable65 = variable65.bind(verify)(variable56);
            variable56 = variable65.stripDiacritics;
            variable57 = variable56.bind(variable65)(variable63);
 622:
            variable65 = papa != variable57;
            variable56 = null;
            if(!variable65) { _fun00014_ip = 659; continue _fun00013 }
 631:
            variable66 = _closure1_slot0;
            variable65 = _closure1_slot3;
            variable65 = variable65[lima];
            variable66 = variable66.bind(verify)(variable65);
            variable65 = variable66.normalize;
            variable56 = variable65.bind(variable66)(variable57);
 659:
            if(!variable36) { _fun00014_ip = 677; continue _fun00013 }
 662:
            variable66 = variable68.id;
            variable65 = update;
            if(!(variable39 !== variable66)) { _fun00014_ip = 1581; continue _fun00013 }
 677:
            variable67 = variable62.substring;
            variable66 = whiskey.length;
            variable66 = variable67.bind(variable62)(golf, variable66);
            variable65 = update;
            if(!(variable66 !== whiskey)) { _fun00014_ip = 1581; continue _fun00013 }
 704:
            variable67 = variable61.substring;
            variable66 = whiskey.length;
            variable66 = variable67.bind(variable61)(golf, variable66);
            variable65 = update;
            if(!(variable66 !== whiskey)) { _fun00014_ip = 1581; continue _fun00013 }
 731:
            variable67 = papa == variable64;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 757; continue _fun00013 }
 740:
            variable69 = variable64.substring;
            variable67 = whiskey.length;
            variable66 = variable69.bind(variable64)(golf, variable67);
 757:
            variable65 = variable64;
            if(!(variable66 !== whiskey)) { _fun00014_ip = 1581; continue _fun00013 }
 767:
            variable67 = papa == variable59;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 793; continue _fun00013 }
 776:
            variable69 = variable59.substring;
            variable67 = whiskey.length;
            variable66 = variable69.bind(variable59)(golf, variable67);
 793:
            variable65 = variable64;
            if(!(variable66 !== whiskey)) { _fun00014_ip = 1581; continue _fun00013 }
 803:
            variable67 = papa == variable63;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 829; continue _fun00013 }
 812:
            variable69 = variable63.substring;
            variable67 = whiskey.length;
            variable66 = variable69.bind(variable63)(golf, variable67);
 829:
            variable65 = variable64;
            if(!(variable66 !== whiskey)) { _fun00014_ip = 1581; continue _fun00013 }
 839:
            variable67 = papa == variable57;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 865; continue _fun00013 }
 848:
            variable69 = variable57.substring;
            variable67 = whiskey.length;
            variable66 = variable69.bind(variable57)(golf, variable67);
 865:
            variable65 = variable64;
            if(!(variable66 !== whiskey)) { _fun00014_ip = 1581; continue _fun00013 }
 875:
            variable67 = variable60.substring;
            variable66 = sierra.length;
            variable66 = variable67.bind(variable60)(golf, variable66);
            if(!(variable66 !== sierra)) { _fun00014_ip = 1441; continue _fun00013 }
 899:
            variable67 = papa == variable58;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 925; continue _fun00013 }
 908:
            variable69 = variable58.substring;
            variable67 = sierra.length;
            variable66 = variable69.bind(variable58)(golf, variable67);
 925:
            if(!(variable66 !== sierra)) { _fun00014_ip = 1441; continue _fun00013 }
 932:
            variable67 = papa == variable56;
            variable66 = undefined;
            if(variable67) { _fun00014_ip = 958; continue _fun00013 }
 941:
            variable69 = variable56.substring;
            variable67 = sierra.length;
            variable66 = variable69.bind(variable56)(golf, variable67);
 958:
            if(!(variable66 !== sierra)) { _fun00014_ip = 1441; continue _fun00013 }
 965:
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echo;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscar;
            variable41 = tango;
            variable40 = entity;
            if(!(vacuum < record)) { _fun00014_ip = 1713; continue _fun00013 }
 1017:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[context];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(whiskey, variable61);
            if(variable66) { _fun00014_ip = 1300; continue _fun00013 }
 1046:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[context];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(sierra, variable60);
            if(variable66) { _fun00014_ip = 1300; continue _fun00013 }
 1075:
            if(!(papa != variable59)) { _fun00014_ip = 1108; continue _fun00013 }
 1079:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[context];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(whiskey, variable59);
            if(variable66) { _fun00014_ip = 1300; continue _fun00013 }
 1108:
            if(!(papa != variable58)) { _fun00014_ip = 1141; continue _fun00013 }
 1112:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[context];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(sierra, variable58);
            if(variable66) { _fun00014_ip = 1300; continue _fun00013 }
 1141:
            if(!(papa != variable57)) { _fun00014_ip = 1174; continue _fun00013 }
 1145:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[context];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(whiskey, variable57);
            if(variable66) { _fun00014_ip = 1300; continue _fun00013 }
 1174:
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echo;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscar;
            variable41 = tango;
            variable40 = entity;
            if(!(papa != variable56)) { _fun00014_ip = 1713; continue _fun00013 }
 1226:
            variable67 = _closure1_slot1;
            variable66 = _closure1_slot3;
            variable66 = variable66[context];
            variable66 = variable67.bind(verify)(variable66);
            variable66 = variable66.bind(verify)(sierra, variable56);
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echo;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscar;
            variable41 = tango;
            variable40 = entity;
            if(!variable66) { _fun00014_ip = 1713; continue _fun00013 }
 1300:
            variable70 = options.push;
            variable69 = {};
            variable66 = _closure1_slot35;
            variable66 = variable66.USER;
            variable69['type'] = variable66;
            variable69['record'] = variable68;
            variable66 = _closure1_slot43;
            variable69['score'] = variable66;
            variable67 = variable64;
            if(!(papa != variable63)) { _fun00014_ip = 1345; continue _fun00013 }
 1342:
            variable67 = variable63;
 1345:
            variable66 = variable62;
            if(!(papa != variable67)) { _fun00014_ip = 1355; continue _fun00013 }
 1352:
            variable66 = variable67;
 1355:
            variable69['comparator'] = variable66;
            variable66 = variable59;
            if(!(papa != variable57)) { _fun00014_ip = 1370; continue _fun00013 }
 1367:
            variable66 = variable57;
 1370:
            variable71 = variable61;
            if(!(papa != variable66)) { _fun00014_ip = 1380; continue _fun00013 }
 1377:
            variable71 = variable66;
 1380:
            variable69['sortable'] = variable71;
            variable69 = variable70.bind(options)(variable69);
            variable55 = vacuum + target;
            variable53 = variable64;
            variable52 = echo;
            variable51 = result;
            variable50 = variable62;
            variable49 = variable61;
            variable48 = variable60;
            variable47 = variable59;
            variable46 = variable58;
            variable45 = variable57;
            variable44 = variable56;
            variable43 = offset;
            variable42 = oscar;
            variable41 = variable67;
            variable40 = variable66;
            _fun00014_ip = 1713; continue _fun00013;
 1441:
            variable70 = report.push;
            variable69 = {};
            variable66 = _closure1_slot35;
            variable66 = variable66.USER;
            variable69['type'] = variable66;
            variable69['record'] = variable68;
            variable66 = _closure1_slot43;
            variable69['score'] = variable66;
            variable67 = variable64;
            if(!(papa != variable63)) { _fun00014_ip = 1486; continue _fun00013 }
 1483:
            variable67 = variable63;
 1486:
            variable66 = variable62;
            if(!(papa != variable67)) { _fun00014_ip = 1496; continue _fun00013 }
 1493:
            variable66 = variable67;
 1496:
            variable69['comparator'] = variable66;
            variable66 = variable59;
            if(!(papa != variable57)) { _fun00014_ip = 1511; continue _fun00013 }
 1508:
            variable66 = variable57;
 1511:
            variable71 = variable61;
            if(!(papa != variable66)) { _fun00014_ip = 1521; continue _fun00013 }
 1518:
            variable71 = variable66;
 1521:
            variable69['sortable'] = variable71;
            variable69 = variable70.bind(report)(variable69);
            variable55 = vacuum;
            variable53 = variable64;
            variable52 = echo;
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
            variable41 = tango;
            variable40 = entity;
            _fun00014_ip = 1713; continue _fun00013;
 1581:
            variable67 = report.push;
            variable66 = {};
            variable69 = _closure1_slot35;
            variable69 = variable69.USER;
            variable66['type'] = variable69;
            variable66['record'] = variable68;
            variable68 = _closure1_slot39;
            variable66['score'] = variable68;
            if(!(papa != variable63)) { _fun00014_ip = 1623; continue _fun00013 }
 1620:
            variable64 = variable63;
 1623:
            variable63 = variable62;
            if(!(papa != variable64)) { _fun00014_ip = 1633; continue _fun00013 }
 1630:
            variable63 = variable64;
 1633:
            variable66['comparator'] = variable63;
            variable63 = variable59;
            if(!(papa != variable57)) { _fun00014_ip = 1648; continue _fun00013 }
 1645:
            variable63 = variable57;
 1648:
            variable68 = variable61;
            if(!(papa != variable63)) { _fun00014_ip = 1658; continue _fun00013 }
 1655:
            variable68 = variable63;
 1658:
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
            variable42 = oscar;
            variable41 = tango;
            variable40 = entity;
 1713:
            sequence = sequence + target;
            vacuum = variable55;
            update = variable53;
            echo = variable52;
            result = variable51;
            output = variable50;
            sizing = variable49;
            kilo = variable48;
            backup = variable47;
            foxtrot = variable46;
            romeo = variable45;
            yankee = variable44;
            offset = variable43;
            oscar = variable42;
            tango = variable41;
            entity = variable40;
            source = variable54;
            if(sequence < status) { _fun00014_ip = 180; continue _fun00013 }
 1772:
            tango = report.sort;
            oscar = _closure1_slot1;
            entity = _closure1_slot3;
            offset = 30;
            entity = entity[offset];
            entity = oscar.bind(verify)(entity);
            entity = tango.bind(report)(entity);
            tango = report.length;
            entity = report;
            if(!(tango < mike)) { _fun00014_ip = 1892; continue _fun00013 }
 1815:
            tango = options.sort;
            oscar = _closure1_slot1;
            zulu = _closure1_slot3;
            zulu = zulu[offset];
            zulu = oscar.bind(verify)(zulu);
            zulu = tango.bind(options)(zulu);
            tango = report.concat;
            oscar = options.slice;
            zulu = global;
            offset = zulu.Math;
            verify = offset.max;
            zulu = report.length;
            zulu = mike - zulu;
            zulu = verify.bind(offset)(golf, zulu);
            zulu = oscar.bind(options)(golf, zulu);
            entity = tango.bind(report)(zulu);
 1892:
            zulu = entity.length;
            if(!(zulu > mike)) { _fun00014_ip = 1907; continue _fun00013 }
 1901:
            entity['length'] = mike;
 1907:
            return entity;
        }
    };
    var _closure1_slot56 = entity;
    entity = function(argFoo) { // Original name: getPriorityForStickerMetadataType
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = argFoo;
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            report = 31;
            zulu = zulu[report];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.StickerMetadataTypes;
            zulu = zulu.STICKER_NAME;
            if(!(zulu !== mike)) { _fun00016_ip = 199; continue _fun00015 }
 47:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[report];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.StickerMetadataTypes;
            zulu = zulu.CORRELATED_EMOJI;
            if(!(zulu !== mike)) { _fun00016_ip = 194; continue _fun00015 }
 80:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[report];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.StickerMetadataTypes;
            zulu = zulu.TAG;
            if(!(zulu !== mike)) { _fun00016_ip = 189; continue _fun00015 }
 113:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[report];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.StickerMetadataTypes;
            zulu = zulu.GUILD_NAME;
            if(!(zulu !== mike)) { _fun00016_ip = 184; continue _fun00015 }
 146:
            zulu = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerMetadataTypes;
            entity = entity.PACK_NAME;
            if(!(entity !== mike)) { _fun00016_ip = 184; continue _fun00015 }
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
    var _closure1_slot57 = entity;
    entity = function(argFoo, argBar) { // Original name: isPartialTypeMatch
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zulu = _closure1_slot17;
            entity = argFoo;
            entity = entity === zulu;
            if(!entity) { _fun00018_ip = 31; continue _fun00017 }
 17:
            tango = _closure1_slot13;
            zulu = undefined;
            mike = argBar;
            entity = tango.bind(zulu)(mike);
 31:
            return entity;
        }
    };
    var _closure1_slot58 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getBestScore
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            backup = argFoo;
            zulu = argBar;
            foxtrot = argBaz;
            entity = _closure1_slot51;
            yankee = undefined;
            offset = entity.bind(yankee)(zulu);
            entity = offset.bind(yankee)();
            oscar = entity.done;
            mike = 0;
            tango = null;
            verify = entity;
            options = 0;
            golf = null;
            entity = 0;
            report = null;
            if(oscar) { _fun00020_ip = 97; continue _fun00019 }
 50:
            oscar = verify.value;
            kilo = _closure1_slot54;
            kilo = kilo.bind(yankee)(backup, oscar, foxtrot);
            if(!(kilo > options)) { _fun00020_ip = 76; continue _fun00019 }
 70:
            options = kilo;
            golf = oscar;
 76:
            output = offset.bind(yankee)();
            oscar = output.done;
            verify = output;
            entity = options;
            report = golf;
            if(!oscar) { _fun00020_ip = 50; continue _fun00019 }
 97:
            if(!(tango != report)) { _fun00020_ip = 143; continue _fun00019 }
 101:
            tango = report.isFullMatch;
            if(tango) { _fun00020_ip = 137; continue _fun00019 }
 110:
            oscar = zulu.splice;
            tango = zulu.indexOf;
            report = tango.bind(zulu)(report);
            tango = 1;
            tango = oscar.bind(zulu)(report, tango);
            _fun00020_ip = 143; continue _fun00019;
 137:
            zulu['length'] = mike;
 143:
            return entity;
        }
    };
    var _closure1_slot59 = entity;
    entity = function(argFoo, argBar) { // Original name: getGuildName
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = report.guild_id;
            mike = null;
            if(!(mike == entity)) { _fun00022_ip = 21; continue _fun00021 }
 17:
            entity = undefined;
            return entity;
 21:
            entity = report.guild_id;
            entity = tango[entity];
            if(!(mike == entity)) { _fun00022_ip = 96; continue _fun00021 }
 34:
            zulu = report.guild_id;
            golf = _closure1_slot21;
            oscar = golf.getGuild;
            report = report.guild_id;
            oscar = oscar.bind(golf)(report);
            report = mike == oscar;
            mike = undefined;
            if(report) { _fun00022_ip = 89; continue _fun00021 }
 70:
            report = oscar.toString;
            oscar = report.bind(oscar)();
            report = oscar.toLocaleLowerCase;
            mike = report.bind(oscar)();
 89:
            tango[zulu] = mike;
            entity = mike;
 96:
            return entity;
        }
    };
    var _closure1_slot60 = entity;
    entity = function(argFoo, argBar) { // Original name: getCategoryName
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = report.parent_id;
            mike = null;
            if(!(mike == entity)) { _fun00024_ip = 22; continue _fun00023 }
 18:
            entity = undefined;
            return entity;
 22:
            entity = report.parent_id;
            entity = tango[entity];
            if(!(mike == entity)) { _fun00024_ip = 96; continue _fun00023 }
 36:
            zulu = report.parent_id;
            golf = _closure1_slot16;
            oscar = golf.getChannel;
            report = report.parent_id;
            report = oscar.bind(golf)(report);
            oscar = mike == report;
            mike = undefined;
            if(oscar) { _fun00024_ip = 89; continue _fun00023 }
 74:
            oscar = report.name;
            report = oscar.toLocaleLowerCase;
            mike = report.bind(oscar)();
 89:
            tango[zulu] = mike;
            entity = mike;
 96:
            return entity;
        }
    };
    var _closure1_slot61 = entity;
    golf = function(argFoo, argBar) { // Original name: getRecentlyTalked
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot16;
            zulu = tango.getChannel;
            tango = zulu.bind(tango)(oscar);
            var _closure2_slot0 = tango;
            zulu = null;
            if(!(zulu != oscar)) { _fun00026_ip = 190; continue _fun00025 }
 35:
            if(!(zulu != tango)) { _fun00026_ip = 190; continue _fun00025 }
 42:
            report = _closure1_slot1;
            tango = _closure1_slot3;
            zulu = 32;
            zulu = tango[zulu];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            report = _closure1_slot22;
            mike = report.getMessages;
            report = mike.bind(report)(oscar);
            mike = report.toArray;
            mike = mike.bind(report)();
            zulu = zulu.bind(tango)(mike);
            mike = zulu.reverse;
            tango = mike.bind(zulu)();
            zulu = tango.uniqBy;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.author;
                entity = entity.id;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.map;
            mike = function(argFoo) {
                zulu = _closure1_slot28;
                mike = zulu.getUser;
                entity = argFoo;
                entity = entity.author;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun00028_ip = 87; continue _fun00027 }
 9:
                    zulu = mike.isNonUserBot;
                    zulu = zulu.bind(mike)();
                    if(zulu) { _fun00028_ip = 83; continue _fun00027 }
 22:
                    tango = _closure2_slot0;
                    zulu = tango.getGuildId;
                    oscar = zulu.bind(tango)();
                    entity = entity == oscar;
                    if(entity) { _fun00028_ip = 81; continue _fun00027 }
 46:
                    tango = _closure1_slot55;
                    report = _closure1_slot20;
                    zulu = report.getMember;
                    mike = mike.id;
                    zulu = zulu.bind(report)(oscar, mike);
                    mike = undefined;
                    entity = tango.bind(mike)(zulu);
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
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    report = argFoo;
                    mike = _closure2_slot0;
                    entity = mike.getGuildId;
                    oscar = entity.bind(mike)();
                    tango = null;
                    entity = tango != oscar;
                    golf = null;
                    if(!entity) { _fun00030_ip = 55; continue _fun00029 }
 31:
                    zulu = _closure1_slot20;
                    mike = zulu.getMember;
                    entity = report.id;
                    golf = mike.bind(zulu)(oscar, entity);
 55:
                    entity = {};
                    mike = _closure1_slot35;
                    mike = mike.USER;
                    entity['type'] = mike;
                    entity['record'] = report;
                    mike = 0;
                    entity['score'] = mike;
                    options = tango == golf;
                    oscar = undefined;
                    mike = undefined;
                    if(options) { _fun00030_ip = 103; continue _fun00029 }
 97:
                    mike = golf.nick;
 103:
                    if(!(tango == mike)) { _fun00030_ip = 138; continue _fun00029 }
 107:
                    tango = _closure1_slot1;
                    golf = _closure1_slot3;
                    zulu = 29;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.getName;
                    mike = zulu.bind(tango)(report);
 138:
                    entity['comparator'] = mike;
                    return entity;
                }
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.take;
            entity = argBar;
            mike = mike.bind(zulu)(entity);
            entity = mike.value;
            entity = entity.bind(mike)();
            _fun00026_ip = 194; continue _fun00025;
 190:
            entity = new Array(0);
 194:
            return entity;
        }
    };
    var _closure1_slot62 = golf;
    entity = global;
    oscar = entity.Object;
    tango = oscar.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(oscar)(zulu, entity, mike);
    entity = 0;
    mike = verify[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    tango = mike.InAppNavigationRecord;
    var _closure1_slot4 = tango;
    mike = mike.InAppNavigationType;
    var _closure1_slot5 = mike;
    mike = 1;
    tango = verify[mike];
    tango = sizing.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 2;
    tango = verify[tango];
    tango = sizing.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    oscar = verify[tango];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot9 = oscar;
    romeo = 5;
    oscar = verify[romeo];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot10 = oscar;
    oscar = 6;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    offset = oscar.isGuildChannelType;
    var _closure1_slot11 = offset;
    offset = oscar.isGuildSelectableChannelType;
    var _closure1_slot12 = offset;
    offset = oscar.isGuildVocalChannelType;
    var _closure1_slot13 = offset;
    oscar = oscar.UnknownChannelRecord;
    var _closure1_slot14 = oscar;
    foxtrot = 7;
    oscar = verify[foxtrot];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot15 = oscar;
    oscar = 8;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot16 = oscar;
    oscar = 9;
    offset = verify[oscar];
    offset = options.bind(entity)(offset);
    yankee = offset.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot17 = yankee;
    offset = offset.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot18 = offset;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot19 = oscar;
    backup = 10;
    oscar = verify[backup];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot20 = oscar;
    oscar = 11;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot21 = oscar;
    oscar = 12;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot22 = oscar;
    oscar = 13;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot23 = oscar;
    oscar = 14;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot24 = oscar;
    oscar = 15;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot25 = oscar;
    oscar = 16;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot26 = oscar;
    oscar = 17;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot27 = oscar;
    oscar = 18;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot28 = oscar;
    oscar = 19;
    oscar = verify[oscar];
    oscar = sizing.bind(entity)(oscar);
    var _closure1_slot29 = oscar;
    oscar = 20;
    oscar = verify[oscar];
    kilo = options.bind(entity)(oscar);
    oscar = kilo.Permissions;
    var _closure1_slot30 = oscar;
    oscar = kilo.GuildFeatures;
    var _closure1_slot31 = oscar;
    oscar = kilo.ChannelTypes;
    var _closure1_slot32 = oscar;
    output = kilo.SKUTypes;
    var _closure1_slot33 = output;
    kilo = kilo.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot34 = kilo;
    kilo = 21;
    kilo = verify[kilo];
    kilo = options.bind(entity)(kilo);
    kilo = kilo.AutocompleterResultTypes;
    var _closure1_slot35 = kilo;
    kilo = 22;
    kilo = verify[kilo];
    kilo = options.bind(entity)(kilo);
    kilo = kilo.StaticChannelId;
    var _closure1_slot36 = kilo;
    kilo = 23;
    kilo = verify[kilo];
    result = options.bind(entity)(kilo);
    output = result.createStore;
    kilo = function() {
        entity = {};
        mike = new Array(0);
        entity['options'] = mike;
        return entity;
    };
    kilo = output.bind(result)(kilo);
    var _closure1_slot37 = kilo;
    kilo = 24;
    kilo = verify[kilo];
    output = sizing.bind(entity)(kilo);
    kilo = output.prototype;
    sizing = Object.create(kilo, {constructor: {value: output}});
    source = 'AutocompleteUtils';
    control = sizing;
    kilo = new control[output](source, update);
    kilo = kilo instanceof Object ? kilo : sizing;
    var _closure1_slot38 = kilo;
    var _closure1_slot39 = backup;
    var _closure1_slot40 = foxtrot;
    var _closure1_slot41 = romeo;
    var _closure1_slot42 = tango;
    var _closure1_slot43 = mike;
    mike = function() { // Original name: NOOP
        entity = true;
        return entity;
    };
    var _closure1_slot44 = mike;
    tango = /(\t|\s)/;
    var _closure1_slot45 = tango;
    mike = new Array(0);
    var _closure1_slot46 = mike;
    mike = 25;
    romeo = verify[mike];
    romeo = options.bind(entity)(romeo);
    romeo = romeo.default;
    romeo = romeo.MENTION_EVERYONE;
    var _closure1_slot47 = romeo;
    romeo = verify[mike];
    romeo = options.bind(entity)(romeo);
    romeo = romeo.default;
    romeo = romeo.MENTION_HERE;
    var _closure1_slot48 = romeo;
    mike = verify[mike];
    mike = options.bind(entity)(mike);
    mike = mike.default;
    mike = mike.LAUNCHABLE_APPLICATIONS;
    var _closure1_slot49 = mike;
    mike = new Array(3);
    mike[0] = yankee;
    mike[1] = offset;
    oscar = oscar.GUILD_CATEGORY;
    mike[2] = oscar;
    var _closure1_slot50 = mike;
    oscar = {};
    offset = function(argFoo) { // Original name: queryFriends
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            golf = entity.query;
            report = entity.limit;
            zulu = undefined;
            if(!(report === zulu)) { _fun00032_ip = 23; continue _fun00031 }
 20:
            report = 10;
 23:
            mike = entity._fuzzy;
            tango = entity.filter;
            mike = _closure1_slot56;
            entity = {};
            entity['query'] = golf;
            options = _closure1_slot25;
            golf = options.getFriendIDs;
            verify = golf.bind(options)();
            options = verify.map;
            golf = function(argFoo) {
                zulu = _closure1_slot28;
                mike = zulu.getUser;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(verify)(golf);
            golf = options.filter;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 33;
            oscar = offset[oscar];
            oscar = verify.bind(zulu)(oscar);
            oscar = oscar.isNotNullish;
            oscar = golf.bind(options)(oscar);
            entity['members'] = oscar;
            entity['limit'] = report;
            entity['filter'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    oscar['queryFriends'] = offset;
    offset = function(argFoo) { // Original name: queryDMUsers
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            golf = entity.query;
            report = entity.limit;
            zulu = undefined;
            if(!(report === zulu)) { _fun00034_ip = 23; continue _fun00033 }
 20:
            report = 10;
 23:
            tango = entity.filter;
            mike = _closure1_slot56;
            entity = {};
            entity['query'] = golf;
            options = _closure1_slot16;
            golf = options.getDMUserIds;
            verify = golf.bind(options)();
            options = verify.map;
            golf = function(argFoo) {
                zulu = _closure1_slot28;
                mike = zulu.getUser;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(verify)(golf);
            golf = options.filter;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 33;
            oscar = offset[oscar];
            oscar = verify.bind(zulu)(oscar);
            oscar = oscar.isNotNullish;
            oscar = golf.bind(options)(oscar);
            entity['members'] = oscar;
            entity['limit'] = report;
            entity['filter'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    oscar['queryDMUsers'] = offset;
    offset = function(argFoo) { // Original name: queryChannelUsers
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            offset = entity.channelId;
            options = entity.query;
            oscar = entity.limit;
            zulu = undefined;
            if(!(oscar === zulu)) { _fun00036_ip = 30; continue _fun00035 }
 27:
            oscar = 10;
 30:
            romeo = entity.request;
            if(!(romeo === zulu)) { _fun00036_ip = 42; continue _fun00035 }
 40:
            romeo = true;
 42:
            verify = entity.checkRecentlyTalkedOnEmptyQuery;
            if(!(verify === zulu)) { _fun00036_ip = 54; continue _fun00035 }
 52:
            verify = true;
 54:
            tango = entity.allowSnowflake;
            if(!(tango === zulu)) { _fun00036_ip = 66; continue _fun00035 }
 64:
            tango = false;
 66:
            var _closure2_slot0 = zulu;
            golf = _closure1_slot16;
            mike = golf.getChannel;
            golf = mike.bind(golf)(offset);
            yankee = null;
            if(!(yankee != golf)) { _fun00036_ip = 408; continue _fun00035 }
 96:
            mike = golf.isThread;
            mike = mike.bind(golf)();
            offset = null;
            if(!mike) { _fun00036_ip = 131; continue _fun00035 }
 111:
            backup = _closure1_slot16;
            foxtrot = backup.getChannel;
            mike = golf.parent_id;
            offset = foxtrot.bind(backup)(mike);
 131:
            mike = golf;
            if(!(yankee != offset)) { _fun00036_ip = 141; continue _fun00035 }
 138:
            mike = offset;
 141:
            _closure2_slot0 = mike;
            if(!(yankee != mike)) { _fun00036_ip = 402; continue _fun00035 }
 152:
            offset = mike.isPrivate;
            offset = offset.bind(mike)();
            if(offset) { _fun00036_ip = 291; continue _fun00035 }
 168:
            foxtrot = options.length;
            offset = 0;
            if(!(offset === foxtrot)) { _fun00036_ip = 206; continue _fun00035 }
 179:
            if(!verify) { _fun00036_ip = 206; continue _fun00035 }
 182:
            verify = _closure1_slot62;
            golf = golf.id;
            verify = verify.bind(zulu)(golf, oscar);
            golf = verify.length;
            if(!(!(golf > offset))) { _fun00036_ip = 289; continue _fun00035 }
 206:
            foxtrot = _closure1_slot20;
            offset = foxtrot.getMembers;
            golf = mike.guild_id;
            foxtrot = offset.bind(foxtrot)(golf);
            offset = foxtrot.filter;
            golf = _closure1_slot55;
            offset = offset.bind(foxtrot)(golf);
            golf = offset;
            if(!romeo) { _fun00036_ip = 361; continue _fun00035 }
 246:
            foxtrot = _closure1_slot1;
            backup = _closure1_slot3;
            romeo = 34;
            romeo = backup[romeo];
            backup = foxtrot.bind(zulu)(romeo);
            foxtrot = backup.requestMembers;
            romeo = mike.guild_id;
            romeo = foxtrot.bind(backup)(romeo, options, oscar);
            golf = offset;
            _fun00036_ip = 361; continue _fun00035;
 289:
            return verify;
 291:
            offset = mike.recipients;
            verify = offset.map;
            mike = function(argFoo) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tango = argFoo;
                    entity = {};
                    entity['userId'] = tango;
                    zulu = _closure1_slot25;
                    mike = zulu.getNickname;
                    zulu = mike.bind(zulu)(tango);
                    mike = null;
                    tango = mike != zulu;
                    if(!tango) { _fun00038_ip = 39; continue _fun00037 }
 36:
                    mike = zulu;
 39:
                    entity['nick'] = mike;
                    return entity;
                }
            };
            mike = verify.bind(offset)(mike);
            offset = _closure1_slot28;
            verify = offset.getCurrentUser;
            romeo = verify.bind(offset)();
            golf = mike;
            if(!(yankee != romeo)) { _fun00036_ip = 361; continue _fun00035 }
 332:
            offset = mike.push;
            verify = {};
            romeo = romeo.id;
            verify['userId'] = romeo;
            verify['nick'] = yankee;
            verify = offset.bind(mike)(verify);
            golf = mike;
 361:
            mike = _closure1_slot56;
            entity = {};
            entity['query'] = options;
            entity['members'] = golf;
            entity['limit'] = oscar;
            report = function(argFoo) { // Original name: filter
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = mike.isPrivate;
                    entity = entity.bind(mike)();
                    if(entity) { _fun00040_ip = 88; continue _fun00039 }
 20:
                    tango = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 35;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.can;
                    mike = {};
                    oscar = _closure1_slot30;
                    oscar = oscar.VIEW_CHANNEL;
                    mike['permission'] = oscar;
                    oscar = argFoo;
                    mike['user'] = oscar;
                    report = _closure2_slot0;
                    mike['context'] = report;
                    entity = zulu.bind(tango)(mike);
 88:
                    return entity;
                }
            };
            entity['filter'] = report;
            entity['allowSnowflake'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
 402:
            entity = new Array(0);
            return entity;
 408:
            entity = new Array(0);
            return entity;
        }
    };
    oscar['queryChannelUsers'] = offset;
    offset = function(argFoo) { // Original name: queryGuildUsers
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            mike = argFoo;
            yankee = mike.guildId;
            verify = mike.query;
            golf = mike.limit;
            tango = undefined;
            if(!(golf === tango)) { _fun00042_ip = 28; continue _fun00041 }
 25:
            golf = 10;
 28:
            zulu = mike.request;
            if(!(zulu === tango)) { _fun00042_ip = 40; continue _fun00041 }
 38:
            zulu = true;
 40:
            entity = mike.checkRecentlyTalkedOnEmptyQuery;
            if(!(entity === tango)) { _fun00042_ip = 52; continue _fun00041 }
 50:
            entity = true;
 52:
            oscar = mike.filter;
            report = mike.allowSnowflake;
            offset = _closure1_slot21;
            options = offset.getGuild;
            offset = options.bind(offset)(yankee);
            options = null;
            if(!(options != offset)) { _fun00042_ip = 252; continue _fun00041 }
 89:
            options = verify.length;
            romeo = 0;
            if(!(romeo === options)) { _fun00042_ip = 137; continue _fun00041 }
 100:
            if(!entity) { _fun00042_ip = 137; continue _fun00041 }
 103:
            options = _closure1_slot62;
            offset = _closure1_slot26;
            entity = offset.getChannelId;
            entity = entity.bind(offset)(yankee);
            entity = options.bind(tango)(entity, golf);
            options = entity.length;
            if(!(!(options > romeo))) { _fun00042_ip = 250; continue _fun00041 }
 137:
            offset = _closure1_slot20;
            options = offset.getMembers;
            foxtrot = options.bind(offset)(yankee);
            offset = foxtrot.filter;
            options = _closure1_slot55;
            options = offset.bind(foxtrot)(options);
            if(!zulu) { _fun00042_ip = 178; continue _fun00041 }
 169:
            offset = verify.length;
            zulu = offset > romeo;
 178:
            if(!zulu) { _fun00042_ip = 214; continue _fun00041 }
 181:
            offset = _closure1_slot1;
            romeo = _closure1_slot3;
            zulu = 34;
            zulu = romeo[zulu];
            offset = offset.bind(tango)(zulu);
            zulu = offset.requestMembers;
            zulu = zulu.bind(offset)(yankee, verify, golf);
 214:
            zulu = _closure1_slot56;
            mike = {};
            mike['query'] = verify;
            mike['members'] = options;
            mike['limit'] = golf;
            mike['filter'] = oscar;
            mike['allowSnowflake'] = report;
            mike = zulu.bind(tango)(mike);
            return mike;
 250:
            return entity;
 252:
            entity = new Array(0);
            return entity;
        }
    };
    oscar['queryGuildUsers'] = offset;
    offset = function(argFoo) { // Original name: queryUsers
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            oscar = argFoo;
            tango = arguments[1];
            entity = arguments[3];
            zulu = undefined;
            if(!(tango === zulu)) { _fun00044_ip = 18; continue _fun00043 }
 15:
            tango = 10;
 18:
            if(!(entity === zulu)) { _fun00044_ip = 24; continue _fun00043 }
 22:
            entity = true;
 24:
            if(!entity) { _fun00044_ip = 38; continue _fun00043 }
 27:
            report = oscar.length;
            mike = 0;
            entity = report > mike;
 38:
            if(!entity) { _fun00044_ip = 79; continue _fun00043 }
 41:
            mike = _closure1_slot1;
            report = _closure1_slot3;
            entity = 34;
            entity = report[entity];
            report = mike.bind(zulu)(entity);
            mike = report.requestMembers;
            entity = null;
            entity = mike.bind(report)(entity, oscar, tango);
 79:
            mike = _closure1_slot56;
            entity = {};
            entity['query'] = oscar;
            golf = _closure1_slot1;
            options = _closure1_slot3;
            oscar = 32;
            oscar = options[oscar];
            oscar = golf.bind(zulu)(oscar);
            golf = _closure1_slot28;
            report = golf.getUsers;
            report = report.bind(golf)();
            oscar = oscar.bind(zulu)(report);
            report = oscar.values;
            oscar = report.bind(oscar)();
            report = oscar.value;
            report = report.bind(oscar)();
            entity['members'] = report;
            entity['limit'] = tango;
            tango = arguments[4];
            entity['filter'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    oscar['queryUsers'] = offset;
    offset = function(argFoo) { // Original name: queryChannels
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            equality = entity.query;
            whiskey = entity.guildId;
            mike = entity.limit;
            golf = undefined;
            if(!(mike === golf)) { _fun00046_ip = 34; continue _fun00045 }
 27:
            mike = _closure1_slot34;
 34:
            lima = entity.fuzzy;
            if(!(lima === golf)) { _fun00046_ip = 46; continue _fun00045 }
 44:
            lima = true;
 46:
            sierra = entity.filter;
            if(!(sierra === golf)) { _fun00046_ip = 62; continue _fun00045 }
 55:
            sierra = _closure1_slot44;
 62:
            status = entity.type;
            if(!(status === golf)) { _fun00046_ip = 78; continue _fun00045 }
 71:
            status = _closure1_slot17;
 78:
            zulu = entity.allowEmptyQueries;
            if(!(zulu === golf)) { _fun00046_ip = 90; continue _fun00045 }
 88:
            zulu = false;
 90:
            target = entity.requireVocalConnectAccess;
            if(!(target === golf)) { _fun00046_ip = 102; continue _fun00045 }
 100:
            target = true;
 102:
            papa = entity.boosters;
            if(!(papa === golf)) { _fun00046_ip = 114; continue _fun00045 }
 112:
            papa = {};
 114:
            context = entity.allowSnowflake;
            entity = function(argFoo) { // Original name: getSeparatedQueries
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    zulu = argFoo;
                    mike = arguments[1];
                    yankee = undefined;
                    if(!(mike === yankee)) { _fun00048_ip = 16; continue _fun00047 }
 14:
                    mike = false;
 16:
                    var _closure3_slot0 = mike;
                    mike = zulu.split;
                    verify = ' ';
                    report = mike.bind(zulu)(verify);
                    tango = report.filter;
                    mike = function(argFoo) {
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            mike = '';
                            entity = argFoo;
                            entity = mike !== entity;
                            if(entity) { _fun00050_ip = 21; continue _fun00049 }
 14:
                            entity = _closure3_slot0;
 21:
                            return entity;
                        }
                    };
                    tango = tango.bind(report)(mike);
                    mike = tango.map;
                    entity = function(argFoo) {
                        mike = argFoo;
                        entity = mike.toLocaleLowerCase;
                        oscar = entity.bind(mike)();
                        entity = {};
                        entity['queryLower'] = oscar;
                        tango = global;
                        yankee = tango.RegExp;
                        golf = _closure1_slot1;
                        options = _closure1_slot3;
                        mike = 26;
                        report = options[mike];
                        zulu = undefined;
                        verify = golf.bind(zulu)(report);
                        report = verify.escape;
                        offset = report.bind(verify)(oscar);
                        report = tango.HermesInternal;
                        verify = report.concat;
                        report = '^';
                        foxtrot = verify.bind(report)(offset);
                        report = yankee.prototype;
                        offset = Object.create(report, {constructor: {value: yankee}});
                        report = 'i';
                        backup = offset;
                        romeo = report;
                        verify = new backup[yankee](foxtrot, romeo, yankee);
                        verify = verify instanceof Object ? verify : offset;
                        entity['exactQuery'] = verify;
                        tango = tango.RegExp;
                        mike = options[mike];
                        zulu = golf.bind(zulu)(mike);
                        mike = zulu.escape;
                        foxtrot = mike.bind(zulu)(oscar);
                        zulu = tango.prototype;
                        zulu = Object.create(zulu, {constructor: {value: tango}});
                        backup = zulu;
                        mike = new backup[tango](foxtrot, romeo, yankee);
                        mike = mike instanceof Object ? mike : zulu;
                        entity['containQuery'] = mike;
                        mike = false;
                        entity['isFullMatch'] = mike;
                        return entity;
                    };
                    entity = mike.bind(tango)(entity);
                    mike = zulu.includes;
                    mike = mike.bind(zulu)(verify);
                    if(!mike) { _fun00048_ip = 291; continue _fun00047 }
 80:
                    mike = zulu.toLocaleLowerCase;
                    offset = mike.bind(zulu)();
                    zulu = entity.unshift;
                    mike = {};
                    mike['queryLower'] = offset;
                    oscar = global;
                    kilo = oscar.RegExp;
                    report = _closure1_slot1;
                    romeo = _closure1_slot3;
                    tango = 26;
                    golf = romeo[tango];
                    options = report.bind(yankee)(golf);
                    golf = options.escape;
                    foxtrot = golf.bind(options)(offset);
                    golf = foxtrot.replace;
                    options = '( |-)';
                    backup = golf.bind(foxtrot)(verify, options);
                    golf = oscar.HermesInternal;
                    foxtrot = golf.concat;
                    golf = '^';
                    output = foxtrot.bind(golf)(backup);
                    golf = kilo.prototype;
                    backup = Object.create(golf, {constructor: {value: kilo}});
                    golf = 'i';
                    result = backup;
                    sizing = golf;
                    foxtrot = new result[kilo](output, sizing, kilo);
                    foxtrot = foxtrot instanceof Object ? foxtrot : backup;
                    mike['exactQuery'] = foxtrot;
                    oscar = oscar.RegExp;
                    tango = romeo[tango];
                    report = report.bind(yankee)(tango);
                    tango = report.escape;
                    report = tango.bind(report)(offset);
                    tango = report.replace;
                    output = tango.bind(report)(verify, options);
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    result = report;
                    sizing = golf;
                    tango = new result[oscar](output, sizing, kilo);
                    tango = tango instanceof Object ? tango : report;
                    mike['containQuery'] = tango;
                    tango = true;
                    mike['isFullMatch'] = tango;
                    mike = zulu.bind(entity)(mike);
 291:
                    return entity;
                }
            };
            record = entity.bind(golf)(equality, zulu);
            config = {};
            entity = new Array(0);
            oscar = _closure1_slot51;
            zulu = null;
            if(!(zulu == whiskey)) { _fun00046_ip = 233; continue _fun00045 }
 150:
            verify = _closure1_slot1;
            offset = _closure1_slot3;
            report = 32;
            report = offset[report];
            verify = verify.bind(golf)(report);
            offset = _closure1_slot16;
            report = offset.loadAllGuildAndPrivateChannelsFromDisk;
            report = report.bind(offset)();
            verify = verify.bind(golf)(report);
            report = verify.values;
            offset = report.bind(verify)();
            verify = offset.concat;
            yankee = _closure1_slot10;
            report = yankee.computeAllActiveJoinedThreads;
            report = report.bind(yankee)();
            verify = verify.bind(offset)(report);
            report = verify.value;
            report = report.bind(verify)();
            _fun00046_ip = 326; continue _fun00045;
 233:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            verify = 32;
            verify = yankee[verify];
            offset = offset.bind(golf)(verify);
            yankee = _closure1_slot19;
            verify = yankee.getChannels;
            verify = verify.bind(yankee)(whiskey);
            verify = verify[status];
            offset = offset.bind(golf)(verify);
            verify = offset.map;
            options = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                return entity;
            };
            offset = verify.bind(offset)(options);
            verify = offset.concat;
            yankee = _closure1_slot10;
            options = yankee.computeAllActiveJoinedThreads;
            options = options.bind(yankee)(whiskey);
            verify = verify.bind(offset)(options);
            options = verify.value;
            report = options.bind(verify)();
 326:
            sequence = oscar.bind(golf)(report);
            oscar = sequence.bind(golf)();
            report = oscar.done;
            vacuum = 36;
            control = global;
            source = 1;
            update = 0.5;
            echo = 0;
            result = 6;
            output = false;
            sizing = '';
            kilo = oscar;
            backup = undefined;
            foxtrot = undefined;
            romeo = undefined;
            yankee = undefined;
            offset = undefined;
            verify = undefined;
            options = undefined;
            oscar = undefined;
            if(report) { _fun00046_ip = 1272; continue _fun00045 }
 394:
            variable54 = kilo.value;
            variable45 = variable54.type;
            report = zulu != whiskey;
            if(!(status !== variable45)) { _fun00046_ip = 541; continue _fun00045 }
 415:
            if(report) { _fun00046_ip = 457; continue _fun00045 }
 418:
            report = _closure1_slot11;
            report = report.bind(golf)(variable45);
            variable42 = backup;
            variable41 = foxtrot;
            variable40 = romeo;
            variable39 = yankee;
            variable38 = offset;
            variable37 = verify;
            variable36 = options;
            quebec = oscar;
            if(!report) { _fun00046_ip = 1230; continue _fun00045 }
 457:
            report = _closure1_slot17;
            if(!(status !== report)) { _fun00046_ip = 487; continue _fun00045 }
 465:
            report = _closure1_slot18;
            report = status === report;
            if(!report) { _fun00046_ip = 485; continue _fun00045 }
 476:
            variable43 = _closure1_slot13;
            report = variable43.bind(golf)(variable45);
 485:
            _fun00046_ip = 511; continue _fun00045;
 487:
            variable43 = _closure1_slot12;
            variable43 = variable43.bind(golf)(variable45);
            if(variable43) { _fun00046_ip = 508; continue _fun00045 }
 499:
            variable44 = _closure1_slot13;
            variable43 = variable44.bind(golf)(variable45);
 508:
            report = variable43;
 511:
            variable42 = backup;
            variable41 = foxtrot;
            variable40 = romeo;
            variable39 = yankee;
            variable38 = offset;
            variable37 = verify;
            variable36 = options;
            quebec = oscar;
            if(!report) { _fun00046_ip = 1230; continue _fun00045 }
 541:
            variable43 = _closure1_slot11;
            report = variable54.type;
            report = variable43.bind(golf)(report);
            if(!report) { _fun00046_ip = 625; continue _fun00045 }
 558:
            variable44 = _closure1_slot23;
            variable43 = variable44.can;
            if(target) { _fun00046_ip = 583; continue _fun00045 }
 571:
            report = _closure1_slot30;
            report = report.VIEW_CHANNEL;
            _fun00046_ip = 589; continue _fun00045;
 583:
            report = variable54.accessPermissions;
 589:
            report = variable43.bind(variable44)(report, variable54);
            variable42 = backup;
            variable41 = foxtrot;
            variable40 = romeo;
            variable39 = yankee;
            variable38 = offset;
            variable37 = verify;
            variable36 = options;
            quebec = oscar;
            if(!report) { _fun00046_ip = 1230; continue _fun00045 }
 625:
            report = sierra.bind(golf)(variable54);
            variable42 = backup;
            variable41 = foxtrot;
            variable40 = romeo;
            variable39 = yankee;
            variable38 = offset;
            variable37 = verify;
            variable36 = options;
            quebec = oscar;
            if(!report) { _fun00046_ip = 1230; continue _fun00045 }
 660:
            variable47 = new Array(0);
            variable63 = variable47;
            variable62 = record;
            variable61 = 0;
            report = arraySpread(variable63, variable62, variable61);
            variable43 = variable54.name;
            report = variable43.toLocaleLowerCase;
            variable46 = report.bind(variable43)();
            variable45 = context;
            if(!variable45) { _fun00046_ip = 706; continue _fun00045 }
 697:
            report = variable54.id;
            variable45 = equality === report;
 706:
            if(variable45) { _fun00046_ip = 722; continue _fun00045 }
 709:
            report = _closure1_slot59;
            variable44 = report.bind(golf)(variable46, variable47, lima);
            _fun00046_ip = 726; continue _fun00045;
 722:
            variable44 = _closure1_slot39;
 726:
            variable42 = variable47;
            variable41 = variable46;
            variable40 = variable45;
            variable38 = offset;
            variable37 = verify;
            variable36 = options;
            quebec = oscar;
            variable39 = variable44;
            if(!(echo !== variable39)) { _fun00046_ip = 1230; continue _fun00045 }
 757:
            variable49 = variable47.length;
            variable48 = variable44;
            variable43 = options;
            report = oscar;
            if(!(variable49 > echo)) { _fun00046_ip = 953; continue _fun00045 }
 778:
            variable49 = _closure1_slot60;
            variable50 = variable49.bind(golf)(variable54, config);
            variable49 = new Array(2);
            variable49[0] = variable50;
            variable50 = _closure1_slot61;
            variable50 = variable50.bind(golf)(variable54, config);
            variable49[1] = variable50;
            variable50 = variable49.length;
            variable51 = echo < variable50;
            variable56 = variable44;
            variable55 = 0;
            variable52 = oscar;
            variable53 = variable56;
            variable50 = 0;
            variable44 = variable52;
            if(!variable51) { _fun00046_ip = 924; continue _fun00045 }
 838:
            variable59 = variable49[variable55];
            variable60 = variable56;
            variable58 = variable52;
            if(!(zulu != variable59)) { _fun00046_ip = 894; continue _fun00045 }
 852:
            variable60 = variable56;
            variable58 = variable52;
            if(!(sizing !== variable59)) { _fun00046_ip = 894; continue _fun00045 }
 862:
            variable51 = _closure1_slot59;
            variable51 = variable51.bind(golf)(variable59, variable47, output);
            variable60 = variable56;
            variable58 = variable51;
            if(!(echo !== variable58)) { _fun00046_ip = 894; continue _fun00045 }
 883:
            variable57 = update * variable51;
            variable60 = variable56 + variable57;
            variable58 = variable51;
 894:
            variable55 = variable55 + 1;
            variable51 = variable49.length;
            variable56 = variable60;
            variable52 = variable58;
            variable53 = variable56;
            options = variable59;
            variable44 = variable52;
            variable50 = variable55;
            if(variable50 < variable51) { _fun00046_ip = 838; continue _fun00045 }
 924:
            variable52 = control.Math;
            variable51 = variable52.min;
            variable48 = variable51.bind(variable52)(result, variable53);
            offset = variable50;
            variable43 = options;
            report = variable44;
            verify = variable49;
 953:
            variable44 = echo === variable48;
            if(variable44) { _fun00046_ip = 969; continue _fun00045 }
 960:
            variable49 = variable47.length;
            variable44 = variable49 > source;
 969:
            if(variable44) { _fun00046_ip = 1006; continue _fun00045 }
 972:
            variable49 = variable47.length;
            variable49 = source === variable49;
            if(!variable49) { _fun00046_ip = 997; continue _fun00045 }
 984:
            variable50 = variable47[echo];
            variable50 = variable50.isFullMatch;
            variable49 = !variable50;
 997:
            if(!variable49) { _fun00046_ip = 1003; continue _fun00045 }
 1000:
            variable49 = !variable45;
 1003:
            variable44 = variable49;
 1006:
            variable42 = variable47;
            variable41 = variable46;
            variable40 = variable45;
            variable39 = variable48;
            variable38 = offset;
            variable37 = verify;
            variable36 = variable43;
            quebec = report;
            if(variable44) { _fun00046_ip = 1230; continue _fun00045 }
 1036:
            variable49 = _closure1_slot58;
            variable44 = variable54.type;
            variable49 = variable49.bind(golf)(status, variable44);
            variable44 = variable48;
            if(!variable49) { _fun00046_ip = 1078; continue _fun00045 }
 1057:
            variable50 = control.Math;
            variable49 = variable50.max;
            variable48 = variable48 - source;
            variable44 = variable49.bind(variable50)(variable48, update);
 1078:
            variable49 = entity.push;
            variable48 = {};
            variable51 = _closure1_slot13;
            variable50 = variable54.type;
            variable50 = variable51.bind(golf)(variable50);
            variable51 = _closure1_slot35;
            if(variable50) { _fun00046_ip = 1114; continue _fun00045 }
 1106:
            variable50 = variable51.TEXT_CHANNEL;
            _fun00046_ip = 1120; continue _fun00045;
 1114:
            variable50 = variable51.VOICE_CHANNEL;
 1120:
            variable48['type'] = variable50;
            variable48['record'] = variable54;
            variable51 = _closure1_slot53;
            variable50 = variable54.id;
            variable50 = papa[variable50];
            variable50 = variable51.bind(golf)(variable44, variable50);
            variable48['score'] = variable50;
            variable51 = _closure1_slot0;
            variable50 = _closure1_slot3;
            variable50 = variable50[vacuum];
            variable53 = variable51.bind(golf)(variable50);
            variable52 = variable53.computeChannelName;
            variable51 = _closure1_slot28;
            variable50 = _closure1_slot25;
            variable50 = variable52.bind(variable53)(variable54, variable51, variable50);
            variable48['comparator'] = variable50;
            variable48['sortable'] = variable46;
            variable48 = variable49.bind(entity)(variable48);
            variable42 = variable47;
            variable41 = variable46;
            variable40 = variable45;
            variable39 = variable44;
            variable38 = offset;
            variable37 = verify;
            variable36 = variable43;
            quebec = report;
 1230:
            variable43 = sequence.bind(golf)();
            report = variable43.done;
            backup = variable42;
            foxtrot = variable41;
            romeo = variable40;
            yankee = variable39;
            offset = variable38;
            verify = variable37;
            options = variable36;
            oscar = quebec;
            kilo = variable43;
            if(!report) { _fun00046_ip = 394; continue _fun00045 }
 1272:
            report = entity.sort;
            oscar = _closure1_slot1;
            options = _closure1_slot3;
            tango = 30;
            tango = options[tango];
            tango = oscar.bind(golf)(tango);
            tango = report.bind(entity)(tango);
            zulu = zulu != mike;
            if(!zulu) { _fun00046_ip = 1319; continue _fun00045 }
 1310:
            tango = entity.length;
            zulu = tango > mike;
 1319:
            if(!zulu) { _fun00046_ip = 1328; continue _fun00045 }
 1322:
            entity['length'] = mike;
 1328:
            return entity;
        }
    };
    oscar['queryChannels'] = offset;
    offset = function(argFoo) { // Original name: queryGuilds
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            tango = entity.query;
            mike = entity.limit;
            oscar = undefined;
            if(!(mike === oscar)) { _fun00052_ip = 23; continue _fun00051 }
 20:
            mike = 10;
 23:
            backup = entity.fuzzy;
            if(!(backup === oscar)) { _fun00052_ip = 35; continue _fun00051 }
 33:
            backup = true;
 35:
            foxtrot = entity.filter;
            if(!(foxtrot === oscar)) { _fun00052_ip = 51; continue _fun00051 }
 44:
            foxtrot = _closure1_slot44;
 51:
            romeo = entity.boosters;
            if(!(romeo === oscar)) { _fun00052_ip = 63; continue _fun00051 }
 61:
            romeo = {};
 63:
            entity = '';
            if(!(entity !== tango)) { _fun00052_ip = 81; continue _fun00051 }
 71:
            zulu = tango.toLocaleLowerCase;
            entity = zulu.bind(tango)();
 81:
            yankee = {};
            report = global;
            sizing = report.RegExp;
            golf = _closure1_slot1;
            options = _closure1_slot3;
            tango = 26;
            verify = options[tango];
            offset = golf.bind(oscar)(verify);
            verify = offset.escape;
            kilo = verify.bind(offset)(entity);
            verify = report.HermesInternal;
            offset = verify.concat;
            verify = '^';
            vacuum = offset.bind(verify)(kilo);
            offset = sizing.prototype;
            kilo = Object.create(offset, {constructor: {value: sizing}});
            offset = 'i';
            sequence = kilo;
            control = offset;
            verify = new sequence[sizing](vacuum, control, source);
            verify = verify instanceof Object ? verify : kilo;
            yankee['exactQuery'] = verify;
            verify = report.RegExp;
            tango = options[tango];
            report = golf.bind(oscar)(tango);
            tango = report.escape;
            vacuum = tango.bind(report)(entity);
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            sequence = report;
            tango = new sequence[verify](vacuum, control, source);
            tango = tango instanceof Object ? tango : report;
            yankee['containQuery'] = tango;
            yankee['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot51;
            tango = 32;
            tango = options[tango];
            golf = golf.bind(oscar)(tango);
            options = _closure1_slot21;
            tango = options.getGuilds;
            tango = tango.bind(options)();
            golf = golf.bind(oscar)(tango);
            tango = golf.values;
            golf = tango.bind(golf)();
            tango = golf.value;
            tango = tango.bind(golf)();
            offset = report.bind(oscar)(tango);
            report = offset.bind(oscar)();
            tango = report.done;
            verify = 0;
            options = report;
            golf = undefined;
            report = undefined;
            if(tango) { _fun00052_ip = 466; continue _fun00051 }
 319:
            echo = options.value;
            tango = foxtrot.bind(oscar)(echo);
            if(!tango) { _fun00052_ip = 448; continue _fun00051 }
 332:
            kilo = echo.name;
            tango = kilo.toLocaleLowerCase;
            kilo = tango.bind(kilo)();
            tango = _closure1_slot54;
            tango = tango.bind(oscar)(kilo, yankee, backup);
            golf = kilo;
            report = tango;
            if(!(tango > verify)) { _fun00052_ip = 448; continue _fun00051 }
 368:
            output = entity.push;
            sizing = {};
            result = _closure1_slot35;
            result = result.GUILD;
            sizing['type'] = result;
            sizing['record'] = echo;
            update = _closure1_slot53;
            result = echo.id;
            result = romeo[result];
            result = update.bind(oscar)(tango, result);
            sizing['score'] = result;
            result = echo.toString;
            result = result.bind(echo)();
            sizing['comparator'] = result;
            sizing['sortable'] = kilo;
            sizing = output.bind(entity)(sizing);
            golf = kilo;
            report = tango;
 448:
            kilo = offset.bind(oscar)();
            tango = kilo.done;
            options = kilo;
            if(!tango) { _fun00052_ip = 319; continue _fun00051 }
 466:
            tango = entity.sort;
            report = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 30;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = tango.bind(entity)(zulu);
            zulu = entity.length;
            if(!(zulu > mike)) { _fun00052_ip = 512; continue _fun00051 }
 506:
            entity['length'] = mike;
 512:
            return entity;
        }
    };
    oscar['queryGuilds'] = offset;
    offset = function(argFoo) { // Original name: queryGroupDMs
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            offset = entity.query;
            mike = entity.limit;
            oscar = undefined;
            if(!(mike === oscar)) { _fun00054_ip = 23; continue _fun00053 }
 20:
            mike = 10;
 23:
            sizing = entity.fuzzy;
            if(!(sizing === oscar)) { _fun00054_ip = 35; continue _fun00053 }
 33:
            sizing = true;
 35:
            kilo = entity.filter;
            if(!(kilo === oscar)) { _fun00054_ip = 51; continue _fun00053 }
 44:
            kilo = _closure1_slot44;
 51:
            backup = entity.boosters;
            if(!(backup === oscar)) { _fun00054_ip = 63; continue _fun00053 }
 61:
            backup = {};
 63:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            foxtrot = 28;
            entity = options[foxtrot];
            report = golf.bind(oscar)(entity);
            tango = report.stripDiacritics;
            entity = options[foxtrot];
            verify = golf.bind(oscar)(entity);
            golf = verify.normalize;
            entity = offset.toLocaleLowerCase;
            entity = entity.bind(offset)();
            entity = golf.bind(verify)(entity);
            entity = tango.bind(report)(entity);
            romeo = {};
            report = global;
            output = report.RegExp;
            golf = _closure1_slot1;
            tango = 26;
            verify = options[tango];
            offset = golf.bind(oscar)(verify);
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
            papa = offset;
            verify = new status[output](target, papa, context);
            verify = verify instanceof Object ? verify : yankee;
            romeo['exactQuery'] = verify;
            verify = report.RegExp;
            tango = options[tango];
            report = golf.bind(oscar)(tango);
            tango = report.escape;
            target = tango.bind(report)(entity);
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            status = report;
            tango = new status[verify](target, papa, context);
            tango = tango instanceof Object ? tango : report;
            romeo['containQuery'] = tango;
            romeo['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot51;
            tango = 32;
            tango = options[tango];
            golf = golf.bind(oscar)(tango);
            options = _closure1_slot16;
            tango = options.getMutablePrivateChannels;
            tango = tango.bind(options)();
            golf = golf.bind(oscar)(tango);
            tango = golf.values;
            golf = tango.bind(golf)();
            tango = golf.value;
            tango = tango.bind(golf)();
            yankee = report.bind(oscar)(tango);
            report = yankee.bind(oscar)();
            tango = report.done;
            offset = 36;
            verify = 0;
            options = report;
            golf = undefined;
            report = undefined;
            if(tango) { _fun00054_ip = 647; continue _fun00053 }
 361:
            record = options.value;
            tango = record.isMultiUserDM;
            tango = tango.bind(record)();
            result = golf;
            output = report;
            if(!tango) { _fun00054_ip = 623; continue _fun00053 }
 388:
            tango = kilo.bind(oscar)(record);
            result = golf;
            output = report;
            if(!tango) { _fun00054_ip = 623; continue _fun00053 }
 405:
            source = _closure1_slot0;
            tango = _closure1_slot3;
            echo = tango[offset];
            vacuum = source.bind(oscar)(echo);
            control = vacuum.computeChannelName;
            update = _closure1_slot28;
            echo = _closure1_slot25;
            update = control.bind(vacuum)(record, update, echo);
            echo = update.toLocaleLowerCase;
            control = echo.bind(update)();
            echo = tango[foxtrot];
            update = source.bind(oscar)(echo);
            echo = update.stripDiacritics;
            tango = tango[foxtrot];
            source = source.bind(oscar)(tango);
            tango = source.normalize;
            tango = tango.bind(source)(control);
            echo = echo.bind(update)(tango);
            tango = _closure1_slot54;
            tango = tango.bind(oscar)(echo, romeo, sizing);
            result = echo;
            output = tango;
            if(!(tango > verify)) { _fun00054_ip = 623; continue _fun00053 }
 514:
            source = entity.push;
            update = {};
            control = _closure1_slot35;
            control = control.GROUP_DM;
            update['type'] = control;
            update['record'] = record;
            vacuum = _closure1_slot53;
            control = record.id;
            control = backup[control];
            control = vacuum.bind(oscar)(tango, control);
            update['score'] = control;
            vacuum = _closure1_slot0;
            control = _closure1_slot3;
            control = control[offset];
            config = vacuum.bind(oscar)(control);
            sequence = config.computeChannelName;
            vacuum = _closure1_slot28;
            control = _closure1_slot25;
            control = sequence.bind(config)(record, vacuum, control);
            update['comparator'] = control;
            update['sortable'] = echo;
            update = source.bind(entity)(update);
            result = echo;
            output = tango;
 623:
            echo = yankee.bind(oscar)();
            tango = echo.done;
            golf = result;
            report = output;
            options = echo;
            if(!tango) { _fun00054_ip = 361; continue _fun00053 }
 647:
            tango = entity.sort;
            report = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 30;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = tango.bind(entity)(zulu);
            zulu = entity.length;
            if(!(zulu > mike)) { _fun00054_ip = 693; continue _fun00053 }
 687:
            entity['length'] = mike;
 693:
            return entity;
        }
    };
    oscar['queryGroupDMs'] = offset;
    offset = function(argFoo) { // Original name: queryApplications
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            zulu = entity.query;
            mike = entity.limit;
            oscar = undefined;
            if(!(mike === oscar)) { _fun00056_ip = 23; continue _fun00055 }
 20:
            mike = 10;
 23:
            foxtrot = entity.fuzzy;
            if(!(foxtrot === oscar)) { _fun00056_ip = 35; continue _fun00055 }
 33:
            foxtrot = true;
 35:
            romeo = entity.filter;
            if(!(romeo === oscar)) { _fun00056_ip = 51; continue _fun00055 }
 44:
            romeo = _closure1_slot44;
 51:
            entity = zulu.toLocaleLowerCase;
            entity = entity.bind(zulu)();
            yankee = {};
            golf = global;
            kilo = golf.RegExp;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            tango = 26;
            options = verify[tango];
            offset = report.bind(oscar)(options);
            options = offset.escape;
            backup = options.bind(offset)(entity);
            options = golf.HermesInternal;
            offset = options.concat;
            options = '^';
            source = offset.bind(options)(backup);
            options = kilo.prototype;
            backup = Object.create(options, {constructor: {value: kilo}});
            options = 'i';
            control = backup;
            update = options;
            offset = new control[kilo](source, update, echo);
            offset = offset instanceof Object ? offset : backup;
            yankee['exactQuery'] = offset;
            golf = golf.RegExp;
            tango = verify[tango];
            report = report.bind(oscar)(tango);
            tango = report.escape;
            source = tango.bind(report)(entity);
            report = golf.prototype;
            report = Object.create(report, {constructor: {value: golf}});
            control = report;
            tango = new control[golf](source, update, echo);
            tango = tango instanceof Object ? tango : report;
            yankee['containQuery'] = tango;
            yankee['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot51;
            tango = _closure1_slot49;
            tango = tango.bind(oscar)();
            offset = report.bind(oscar)(tango);
            report = offset.bind(oscar)();
            tango = report.done;
            verify = 0;
            options = report;
            golf = undefined;
            report = undefined;
            if(tango) { _fun00056_ip = 384; continue _fun00055 }
 258:
            tango = options.value;
            output = tango.application;
            tango = romeo.bind(oscar)(output);
            if(!tango) { _fun00056_ip = 369; continue _fun00055 }
 276:
            backup = output.name;
            tango = backup.toLocaleLowerCase;
            backup = tango.bind(backup)();
            tango = _closure1_slot54;
            tango = tango.bind(oscar)(backup, yankee, foxtrot);
            golf = backup;
            report = tango;
            if(!(tango > verify)) { _fun00056_ip = 369; continue _fun00055 }
 312:
            sizing = entity.push;
            kilo = {};
            result = _closure1_slot35;
            result = result.APPLICATION;
            kilo['type'] = result;
            kilo['record'] = output;
            kilo['score'] = tango;
            output = output.name;
            kilo['comparator'] = output;
            kilo['sortable'] = backup;
            kilo = sizing.bind(entity)(kilo);
            golf = backup;
            report = tango;
 369:
            backup = offset.bind(oscar)();
            tango = backup.done;
            options = backup;
            if(!tango) { _fun00056_ip = 258; continue _fun00055 }
 384:
            tango = entity.sort;
            report = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 30;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = tango.bind(entity)(zulu);
            zulu = entity.length;
            if(!(zulu > mike)) { _fun00056_ip = 430; continue _fun00055 }
 424:
            entity['length'] = mike;
 430:
            return entity;
        }
    };
    oscar['queryApplications'] = offset;
    offset = function(argFoo) { // Original name: queryInAppNavigations
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            zulu = entity.query;
            mike = entity.limit;
            oscar = undefined;
            if(!(mike === oscar)) { _fun00058_ip = 25; continue _fun00057 }
 22:
            mike = 10;
 25:
            vacuum = entity.fuzzy;
            if(!(vacuum === oscar)) { _fun00058_ip = 37; continue _fun00057 }
 35:
            vacuum = true;
 37:
            var _closure2_slot0 = vacuum;
            var _closure2_slot1 = oscar;
            var _closure2_slot2 = oscar;
            entity = zulu.toLocaleLowerCase;
            entity = entity.bind(zulu)();
            control = {};
            options = global;
            foxtrot = options.RegExp;
            golf = _closure1_slot1;
            yankee = _closure1_slot3;
            report = 26;
            verify = yankee[report];
            offset = golf.bind(oscar)(verify);
            verify = offset.escape;
            romeo = verify.bind(offset)(entity);
            verify = options.HermesInternal;
            offset = verify.concat;
            verify = '^';
            sierra = offset.bind(verify)(romeo);
            verify = foxtrot.prototype;
            romeo = Object.create(verify, {constructor: {value: foxtrot}});
            verify = 'i';
            lima = romeo;
            status = verify;
            offset = new lima[foxtrot](sierra, status, target);
            offset = offset instanceof Object ? offset : romeo;
            control['exactQuery'] = offset;
            options = options.RegExp;
            report = yankee[report];
            golf = golf.bind(oscar)(report);
            report = golf.escape;
            sierra = report.bind(golf)(entity);
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            lima = golf;
            report = new lima[options](sierra, status, target);
            report = report instanceof Object ? report : golf;
            control['containQuery'] = report;
            control['queryLower'] = entity;
            _closure2_slot1 = control;
            source = {};
            entity = _closure1_slot5;
            options = entity.SHOP;
            offset = _closure1_slot0;
            golf = 37;
            report = yankee[golf];
            report = offset.bind(oscar)(report);
            romeo = report.intl;
            verify = romeo.string;
            report = yankee[golf];
            report = offset.bind(oscar)(report);
            report = report.t;
            report = report.pWG4zc;
            verify = verify.bind(romeo)(report);
            report = new Array(1);
            report[0] = verify;
            source[options] = report;
            options = entity.NITRO_HOME;
            report = yankee[golf];
            report = offset.bind(oscar)(report);
            romeo = report.intl;
            verify = romeo.string;
            report = yankee[golf];
            report = offset.bind(oscar)(report);
            report = report.t;
            report = report.Ipxkoq;
            verify = verify.bind(romeo)(report);
            report = new Array(1);
            report[0] = verify;
            source[options] = report;
            options = entity.QUEST_HOME;
            report = yankee[golf];
            report = offset.bind(oscar)(report);
            romeo = report.intl;
            verify = romeo.string;
            report = yankee[golf];
            report = offset.bind(oscar)(report);
            report = report.t;
            report = report.JALI2N;
            verify = verify.bind(romeo)(report);
            report = new Array(1);
            report[0] = verify;
            source[options] = report;
            report = entity.APPS_HOME;
            entity = yankee[golf];
            entity = offset.bind(oscar)(entity);
            verify = entity.intl;
            options = verify.string;
            entity = yankee[golf];
            entity = offset.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.PHjkRE;
            options = options.bind(verify)(entity);
            entity = new Array(2);
            entity[0] = options;
            options = yankee[golf];
            options = offset.bind(oscar)(options);
            verify = options.intl;
            options = verify.string;
            golf = yankee[golf];
            golf = offset.bind(oscar)(golf);
            golf = golf.t;
            golf = golf.AKcFUl;
            golf = options.bind(verify)(golf);
            entity[1] = golf;
            source[report] = entity;
            entity = new Array(0);
            _closure2_slot2 = entity;
            echo = source;
            kilo = 0;
            backup = null;
            foxtrot = undefined;
            romeo = undefined;
            yankee = undefined;
            offset = undefined;
            for(sizing in echo)
 564:
            {
 576:
                golf = sizing;
                report = _closure1_slot5;
                verify = report[golf];
                golf = source[verify];
                if(backup == golf) { _fun00058_ip = 564; continue _fun00057 }
 595:
                report = _closure1_slot51;
                options = report.bind(oscar)(golf);
                golf = options.bind(oscar)();
                report = golf.done;
                foxtrot = golf;
                romeo = options;
                golf = foxtrot;
                if(report) { _fun00058_ip = 564; continue _fun00057 }
 625:
                sequence = golf.value;
                report = sequence.toLocaleLowerCase;
                record = report.bind(sequence)();
                report = _closure1_slot54;
                config = report.bind(oscar)(record, control, vacuum);
                if(!(config > kilo)) { _fun00058_ip = 725; continue _fun00057 }
 655:
                sequence = entity.push;
                report = {};
                context = _closure1_slot35;
                context = context.IN_APP_NAVIGATION;
                report['type'] = context;
                papa = _closure1_slot4;
                context = papa.fromType;
                context = context.bind(papa)(verify);
                report['record'] = context;
                context = _closure1_slot53;
                context = context.bind(oscar)(config);
                report['score'] = context;
                report['comparator'] = record;
                report['sortable'] = record;
                report = sequence.bind(entity)(report);
 725:
                sequence = options.bind(oscar)();
                report = sequence.done;
                foxtrot = sequence;
                romeo = options;
                yankee = record;
                offset = config;
                golf = foxtrot;
                if(report) { _fun00058_ip = 564; continue _fun00057 }
 755:
                _fun00058_ip = 625; continue _fun00057;
            }
 760:
            golf = _closure1_slot37;
            report = golf.getState;
            report = report.bind(golf)();
            golf = report.options;
            report = golf.forEach;
            tango = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    report = argFoo;
                    entity = report.title;
                    zulu = new Array(1);
                    zulu[0] = entity;
                    mike = zulu.concat;
                    entity = report.searchableTitles;
                    options = mike.bind(zulu)(entity);
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 32;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.max;
                    oscar = options.map;
                    mike = function(argFoo) {
                        mike = argFoo;
                        zulu = _closure1_slot53;
                        oscar = _closure1_slot54;
                        entity = mike.toLocaleLowerCase;
                        report = entity.bind(mike)();
                        tango = _closure2_slot1;
                        entity = _closure2_slot0;
                        mike = undefined;
                        entity = oscar.bind(mike)(report, tango, entity);
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = oscar.bind(options)(mike);
                    zulu = zulu.bind(tango)(mike);
                    mike = null;
                    tango = mike != zulu;
                    mike = 0;
                    oscar = 0;
                    if(!tango) { _fun00060_ip = 102; continue _fun00059 }
 99:
                    oscar = zulu;
 102:
                    if(!(oscar > mike)) { _fun00060_ip = 230; continue _fun00059 }
 109:
                    tango = _closure2_slot2;
                    zulu = tango.push;
                    mike = {};
                    options = _closure1_slot35;
                    options = options.IN_APP_NAVIGATION;
                    mike['type'] = options;
                    yankee = _closure1_slot4;
                    offset = yankee.fromType;
                    golf = _closure1_slot5;
                    verify = golf.SETTINGS;
                    options = report.path;
                    golf = report.title;
                    golf = offset.bind(yankee)(verify, options, golf);
                    mike['record'] = golf;
                    mike['score'] = oscar;
                    golf = report.title;
                    oscar = golf.toLocaleLowerCase;
                    oscar = oscar.bind(golf)();
                    mike['comparator'] = oscar;
                    oscar = report.title;
                    report = oscar.toLocaleLowerCase;
                    report = report.bind(oscar)();
                    mike['sortable'] = report;
                    mike = zulu.bind(tango)(mike);
 230:
                    return entity;
                }
            };
            tango = report.bind(golf)(tango);
            tango = entity.sort;
            report = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 30;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = tango.bind(entity)(zulu);
            zulu = entity.length;
            if(!(zulu > mike)) { _fun00058_ip = 840; continue _fun00057 }
 834:
            entity['length'] = mike;
 840:
            return entity;
        }
    };
    oscar['queryInAppNavigations'] = offset;
    offset = function(argFoo) { // Original name: querySKUs
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            zulu = entity.query;
            mike = entity.limit;
            oscar = undefined;
            if(!(mike === oscar)) { _fun00062_ip = 23; continue _fun00061 }
 20:
            mike = 10;
 23:
            foxtrot = entity.fuzzy;
            if(!(foxtrot === oscar)) { _fun00062_ip = 35; continue _fun00061 }
 33:
            foxtrot = true;
 35:
            romeo = entity.filter;
            if(!(romeo === oscar)) { _fun00062_ip = 51; continue _fun00061 }
 44:
            romeo = _closure1_slot44;
 51:
            entity = zulu.toLocaleLowerCase;
            entity = entity.bind(zulu)();
            yankee = {};
            report = global;
            kilo = report.RegExp;
            golf = _closure1_slot1;
            options = _closure1_slot3;
            tango = 26;
            verify = options[tango];
            offset = golf.bind(oscar)(verify);
            verify = offset.escape;
            backup = verify.bind(offset)(entity);
            verify = report.HermesInternal;
            offset = verify.concat;
            verify = '^';
            vacuum = offset.bind(verify)(backup);
            offset = kilo.prototype;
            backup = Object.create(offset, {constructor: {value: kilo}});
            offset = 'i';
            sequence = backup;
            control = offset;
            verify = new sequence[kilo](vacuum, control, source);
            verify = verify instanceof Object ? verify : backup;
            yankee['exactQuery'] = verify;
            verify = report.RegExp;
            tango = options[tango];
            report = golf.bind(oscar)(tango);
            tango = report.escape;
            vacuum = tango.bind(report)(entity);
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            sequence = report;
            tango = new sequence[verify](vacuum, control, source);
            tango = tango instanceof Object ? tango : report;
            yankee['containQuery'] = tango;
            yankee['queryLower'] = entity;
            entity = new Array(0);
            report = _closure1_slot51;
            tango = 32;
            tango = options[tango];
            golf = golf.bind(oscar)(tango);
            options = _closure1_slot29;
            tango = options.getSKUs;
            tango = tango.bind(options)();
            golf = golf.bind(oscar)(tango);
            tango = golf.values;
            golf = tango.bind(golf)();
            tango = golf.value;
            tango = tango.bind(golf)();
            offset = report.bind(oscar)(tango);
            report = offset.bind(oscar)();
            tango = report.done;
            verify = 0;
            options = report;
            golf = undefined;
            report = undefined;
            if(tango) { _fun00062_ip = 462; continue _fun00061 }
 301:
            echo = options.value;
            sizing = echo.type;
            tango = _closure1_slot33;
            tango = tango.DURABLE_PRIMARY;
            kilo = golf;
            backup = report;
            if(!(sizing === tango)) { _fun00062_ip = 438; continue _fun00061 }
 331:
            tango = romeo.bind(oscar)(echo);
            kilo = golf;
            backup = report;
            if(!tango) { _fun00062_ip = 438; continue _fun00061 }
 345:
            sizing = echo.name;
            tango = sizing.toLocaleLowerCase;
            sizing = tango.bind(sizing)();
            tango = _closure1_slot54;
            tango = tango.bind(oscar)(sizing, yankee, foxtrot);
            kilo = sizing;
            backup = tango;
            if(!(tango > verify)) { _fun00062_ip = 438; continue _fun00061 }
 381:
            result = entity.push;
            output = {};
            update = _closure1_slot35;
            update = update.SKU;
            output['type'] = update;
            output['record'] = echo;
            output['score'] = tango;
            echo = echo.name;
            output['comparator'] = echo;
            output['sortable'] = sizing;
            output = result.bind(entity)(output);
            kilo = sizing;
            backup = tango;
 438:
            sizing = offset.bind(oscar)();
            tango = sizing.done;
            golf = kilo;
            report = backup;
            options = sizing;
            if(!tango) { _fun00062_ip = 301; continue _fun00061 }
 462:
            tango = entity.sort;
            report = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 30;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = tango.bind(entity)(zulu);
            zulu = entity.length;
            if(!(zulu > mike)) { _fun00062_ip = 508; continue _fun00061 }
 502:
            entity['length'] = mike;
 508:
            return entity;
        }
    };
    oscar['querySKUs'] = offset;
    oscar['getRecentlyTalked'] = golf;
    golf = function(argFoo) { // Original name: queryMentionResults
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            report = argFoo;
            foxtrot = this;
            options = report.query;
            romeo = report.channel;
            var _closure2_slot0 = romeo;
            yankee = report.canMentionEveryone;
            oscar = undefined;
            if(!(yankee === oscar)) { _fun00064_ip = 36; continue _fun00063 }
 34:
            yankee = false;
 36:
            var _closure2_slot1 = yankee;
            entity = report.canMentionHere;
            if(!(entity === oscar)) { _fun00064_ip = 52; continue _fun00063 }
 50:
            entity = true;
 52:
            tango = report.canMentionUsers;
            if(!(tango === oscar)) { _fun00064_ip = 64; continue _fun00063 }
 62:
            tango = true;
 64:
            verify = report.canMentionRoles;
            if(!(verify === oscar)) { _fun00064_ip = 76; continue _fun00063 }
 74:
            verify = true;
 76:
            mike = report.includeAllGuildUsers;
            if(!(mike === oscar)) { _fun00064_ip = 88; continue _fun00063 }
 86:
            mike = false;
 88:
            golf = report.includeNonMentionableRoles;
            if(!(golf === oscar)) { _fun00064_ip = 100; continue _fun00063 }
 98:
            golf = false;
 100:
            var _closure2_slot2 = golf;
            sizing = report.checkRecentlyTalkedOnEmptyQuery;
            if(!(sizing === oscar)) { _fun00064_ip = 116; continue _fun00063 }
 114:
            sizing = true;
 116:
            golf = report.limit;
            if(!(golf === oscar)) { _fun00064_ip = 133; continue _fun00063 }
 126:
            golf = _closure1_slot34;
 133:
            kilo = report.request;
            backup = report.allowSnowflake;
            if(!(backup === oscar)) { _fun00064_ip = 151; continue _fun00063 }
 149:
            backup = false;
 151:
            var _closure2_slot3 = backup;
            var _closure2_slot4 = oscar;
            var _closure2_slot5 = oscar;
            var _closure2_slot6 = oscar;
            if(tango) { _fun00064_ip = 176; continue _fun00063 }
 170:
            tango = new Array(0);
            _fun00064_ip = 294; continue _fun00063;
 176:
            if(!mike) { _fun00064_ip = 190; continue _fun00063 }
 179:
            report = romeo.guild_id;
            mike = null;
            if(!(mike == report)) { _fun00064_ip = 233; continue _fun00063 }
 190:
            report = foxtrot.queryChannelUsers;
            mike = {};
            offset = romeo.id;
            mike['channelId'] = offset;
            mike['query'] = options;
            mike['limit'] = golf;
            mike['checkRecentlyTalkedOnEmptyQuery'] = sizing;
            mike['allowSnowflake'] = backup;
            offset = report.bind(foxtrot)(mike);
            _fun00064_ip = 279; continue _fun00063;
 233:
            report = foxtrot.queryGuildUsers;
            mike = {};
            output = romeo.guild_id;
            mike['guildId'] = output;
            mike['query'] = options;
            mike['limit'] = golf;
            mike['checkRecentlyTalkedOnEmptyQuery'] = sizing;
            mike['request'] = kilo;
            mike['allowSnowflake'] = backup;
            offset = report.bind(foxtrot)(mike);
 279:
            report = offset.map;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.record;
                tango = entity.score;
                zulu = entity.comparator;
                entity = {};
                entity['user'] = mike;
                entity['score'] = tango;
                entity['comparator'] = zulu;
                golf = _closure1_slot20;
                oscar = golf.getNick;
                tango = _closure2_slot0;
                report = tango.guild_id;
                tango = mike.id;
                tango = oscar.bind(golf)(report, tango);
                entity['nick'] = tango;
                tango = _closure1_slot24;
                zulu = tango.getStatus;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['status'] = mike;
                return entity;
            };
            tango = report.bind(offset)(mike);
 294:
            report = tango.length;
            mike = options.toLowerCase;
            options = mike.bind(options)();
            _closure2_slot4 = options;
            mike = new Array(0);
            _closure2_slot5 = mike;
            offset = report;
            if(!(offset < golf)) { _fun00064_ip = 479; continue _fun00063 }
 331:
            offset = report;
            if(!verify) { _fun00064_ip = 479; continue _fun00063 }
 340:
            foxtrot = romeo.getGuildId;
            sizing = foxtrot.bind(romeo)();
            _closure2_slot6 = sizing;
            backup = _closure1_slot21;
            foxtrot = backup.getGuild;
            foxtrot = foxtrot.bind(backup)(sizing);
            backup = null;
            offset = report;
            if(!(backup != foxtrot)) { _fun00064_ip = 479; continue _fun00063 }
 380:
            sizing = _closure1_slot1;
            output = _closure1_slot3;
            backup = 32;
            backup = output[backup];
            backup = sizing.bind(oscar)(backup);
            sizing = _closure1_slot21;
            kilo = sizing.getRoles;
            foxtrot = foxtrot.id;
            foxtrot = kilo.bind(sizing)(foxtrot);
            kilo = backup.bind(oscar)(foxtrot);
            backup = kilo.filter;
            foxtrot = function(argFoo) {
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    mike = argFoo;
                    entity = mike.mentionable;
                    options = mike.name;
                    zulu = mike.id;
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
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    mike = 27;
                    mike = report[mike];
                    golf = undefined;
                    oscar = tango.bind(golf)(mike);
                    tango = _closure2_slot4;
                    mike = options.toLowerCase;
                    mike = mike.bind(options)();
                    mike = oscar.bind(golf)(tango, mike);
                    if(mike) { _fun00066_ip = 111; continue _fun00065 }
 93:
                    tango = _closure2_slot3;
                    if(!tango) { _fun00066_ip = 108; continue _fun00065 }
 100:
                    report = _closure2_slot4;
                    tango = report === zulu;
 108:
                    mike = tango;
 111:
                    entity = mike;
 114:
                    if(!entity) { _fun00066_ip = 164; continue _fun00065 }
 117:
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    mike = 38;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.castGuildIdAsEveryoneGuildRoleId;
                    mike = _closure2_slot6;
                    mike = tango.bind(report)(mike);
                    entity = zulu !== mike;
 164:
                    return entity;
                }
            };
            kilo = backup.bind(kilo)(foxtrot);
            backup = kilo.take;
            foxtrot = golf - report;
            backup = backup.bind(kilo)(foxtrot);
            foxtrot = backup.forEach;
            zulu = function(argFoo) {
                zulu = _closure2_slot5;
                mike = zulu.push;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu = foxtrot.bind(backup)(zulu);
            zulu = mike.length;
            offset = report + zulu;
 479:
            zulu = new Array(0);
            report = romeo.isPrivate;
            report = report.bind(romeo)();
            report = !report;
            if(!report) { _fun00064_ip = 502; continue _fun00063 }
 499:
            report = yankee;
 502:
            if(!report) { _fun00064_ip = 508; continue _fun00063 }
 505:
            report = verify;
 508:
            if(!report) { _fun00064_ip = 673; continue _fun00063 }
 514:
            verify = offset < golf;
            if(!verify) { _fun00064_ip = 563; continue _fun00063 }
 521:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot3;
            yankee = 27;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(oscar)(yankee);
            report = _closure1_slot47;
            report = report.bind(oscar)();
            report = report.test;
            verify = yankee.bind(oscar)(options, report);
 563:
            report = offset;
            if(!verify) { _fun00064_ip = 597; continue _fun00063 }
 569:
            yankee = zulu.push;
            verify = _closure1_slot47;
            verify = verify.bind(oscar)();
            verify = yankee.bind(zulu)(verify);
            verify = 1;
            report = offset + verify;
 597:
            if(!entity) { _fun00064_ip = 604; continue _fun00063 }
 600:
            entity = report < golf;
 604:
            if(!entity) { _fun00064_ip = 649; continue _fun00063 }
 607:
            verify = _closure1_slot1;
            offset = _closure1_slot3;
            golf = 27;
            golf = offset[golf];
            golf = verify.bind(oscar)(golf);
            report = _closure1_slot48;
            report = report.bind(oscar)();
            report = report.test;
            entity = golf.bind(oscar)(options, report);
 649:
            if(!entity) { _fun00064_ip = 673; continue _fun00063 }
 652:
            report = zulu.push;
            entity = _closure1_slot48;
            entity = entity.bind(oscar)();
            entity = report.bind(zulu)(entity);
 673:
            entity = {};
            entity['users'] = tango;
            entity['globals'] = zulu;
            entity['roles'] = mike;
            return entity;
        }
    };
    oscar['queryMentionResults'] = golf;
    golf = function(argFoo) { // Original name: queryGuildMentionResults
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            tango = argFoo;
            verify = this;
            mike = tango.query;
            foxtrot = tango.guildId;
            var _closure2_slot0 = foxtrot;
            report = tango.canMentionEveryone;
            oscar = undefined;
            if(!(report === oscar)) { _fun00068_ip = 36; continue _fun00067 }
 34:
            report = false;
 36:
            var _closure2_slot1 = report;
            entity = tango.canMentionUsers;
            if(!(entity === oscar)) { _fun00068_ip = 52; continue _fun00067 }
 50:
            entity = true;
 52:
            golf = tango.canMentionRoles;
            if(!(golf === oscar)) { _fun00068_ip = 64; continue _fun00067 }
 62:
            golf = true;
 64:
            tango = tango.canMentionNonMentionableRoles;
            if(!(tango === oscar)) { _fun00068_ip = 76; continue _fun00067 }
 74:
            tango = false;
 76:
            var _closure2_slot2 = tango;
            var _closure2_slot3 = oscar;
            var _closure2_slot4 = oscar;
            if(entity) { _fun00068_ip = 97; continue _fun00067 }
 91:
            tango = new Array(0);
            _fun00068_ip = 133; continue _fun00067;
 97:
            options = verify.queryGuildUsers;
            entity = {};
            entity['guildId'] = foxtrot;
            entity['query'] = mike;
            verify = options.bind(verify)(entity);
            options = verify.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                oscar = entity;
                report = mike;
                zulu = copyDataProperties(oscar, report);
                tango = _closure1_slot24;
                zulu = tango.getStatus;
                mike = mike.record;
                mike = mike.id;
                zulu = zulu.bind(tango)(mike);
                mike = 'status';
                entity[mike] = zulu;
                return entity;
            };
            tango = options.bind(verify)(entity);
 133:
            offset = tango.length;
            entity = mike.toLowerCase;
            verify = entity.bind(mike)();
            _closure2_slot3 = verify;
            mike = new Array(0);
            _closure2_slot4 = mike;
            yankee = _closure1_slot34;
            options = offset;
            if(!(options < yankee)) { _fun00068_ip = 312; continue _fun00067 }
 177:
            options = offset;
            if(!golf) { _fun00068_ip = 312; continue _fun00067 }
 186:
            romeo = _closure1_slot21;
            yankee = romeo.getGuild;
            yankee = yankee.bind(romeo)(foxtrot);
            romeo = null;
            options = offset;
            if(!(romeo != yankee)) { _fun00068_ip = 312; continue _fun00067 }
 209:
            foxtrot = _closure1_slot1;
            backup = _closure1_slot3;
            romeo = 32;
            romeo = backup[romeo];
            romeo = foxtrot.bind(oscar)(romeo);
            backup = _closure1_slot21;
            foxtrot = backup.getRoles;
            yankee = yankee.id;
            yankee = foxtrot.bind(backup)(yankee);
            foxtrot = romeo.bind(oscar)(yankee);
            romeo = foxtrot.filter;
            yankee = function(argFoo) {
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    mike = argFoo;
                    entity = mike.mentionable;
                    golf = mike.name;
                    report = mike.id;
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
                    zulu = _closure1_slot1;
                    tango = _closure1_slot3;
                    mike = 27;
                    mike = tango[mike];
                    oscar = undefined;
                    tango = zulu.bind(oscar)(mike);
                    zulu = _closure2_slot3;
                    mike = golf.toLowerCase;
                    mike = mike.bind(golf)();
                    entity = tango.bind(oscar)(zulu, mike);
 90:
                    if(!entity) { _fun00070_ip = 137; continue _fun00069 }
 93:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 39;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.isNotEveryoneRoleId;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike, report);
 137:
                    return entity;
                }
            };
            foxtrot = romeo.bind(foxtrot)(yankee);
            romeo = foxtrot.take;
            yankee = _closure1_slot34;
            yankee = yankee - offset;
            romeo = romeo.bind(foxtrot)(yankee);
            yankee = romeo.forEach;
            zulu = function(argFoo) {
                zulu = _closure2_slot4;
                mike = zulu.push;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu = yankee.bind(romeo)(zulu);
            zulu = mike.length;
            options = offset + zulu;
 312:
            zulu = new Array(0);
            if(!report) { _fun00068_ip = 322; continue _fun00067 }
 319:
            report = golf;
 322:
            if(!report) { _fun00068_ip = 480; continue _fun00067 }
 328:
            report = _closure1_slot34;
            report = options < report;
            if(!report) { _fun00068_ip = 378; continue _fun00067 }
 339:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            golf = 27;
            golf = yankee[golf];
            offset = offset.bind(oscar)(golf);
            golf = _closure1_slot47;
            golf = golf.bind(oscar)();
            golf = golf.test;
            report = offset.bind(oscar)(verify, golf);
 378:
            golf = options;
            if(!report) { _fun00068_ip = 409; continue _fun00067 }
 384:
            offset = zulu.push;
            report = _closure1_slot47;
            report = report.bind(oscar)();
            report = offset.bind(zulu)(report);
            report = 1;
            golf = options + report;
 409:
            report = _closure1_slot34;
            report = golf < report;
            if(!report) { _fun00068_ip = 459; continue _fun00067 }
 420:
            options = _closure1_slot1;
            offset = _closure1_slot3;
            golf = 27;
            golf = offset[golf];
            options = options.bind(oscar)(golf);
            golf = _closure1_slot48;
            golf = golf.bind(oscar)();
            golf = golf.test;
            report = options.bind(oscar)(verify, golf);
 459:
            if(!report) { _fun00068_ip = 480; continue _fun00067 }
 462:
            report = zulu.push;
            entity = _closure1_slot48;
            entity = entity.bind(oscar)();
            entity = report.bind(zulu)(entity);
 480:
            entity = {};
            entity['users'] = tango;
            entity['globals'] = zulu;
            entity['roles'] = mike;
            return entity;
        }
    };
    oscar['queryGuildMentionResults'] = golf;
    golf = function(argFoo) { // Original name: queryChoice
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            mike = argFoo;
            zulu = mike.query;
            report = mike.choices;
            tango = mike.limit;
            golf = undefined;
            if(!(tango === golf)) { _fun00072_ip = 31; continue _fun00071 }
 28:
            tango = 10;
 31:
            mike = mike.fuzzy;
            if(!(mike === golf)) { _fun00072_ip = 43; continue _fun00071 }
 41:
            mike = true;
 43:
            var _closure2_slot0 = mike;
            var _closure2_slot1 = golf;
            var _closure2_slot2 = golf;
            var _closure2_slot3 = golf;
            mike = zulu.toLocaleLowerCase;
            romeo = mike.bind(zulu)();
            _closure2_slot1 = romeo;
            verify = global;
            backup = verify.RegExp;
            oscar = _closure1_slot1;
            options = _closure1_slot3;
            zulu = 26;
            offset = options[zulu];
            yankee = oscar.bind(golf)(offset);
            offset = yankee.escape;
            foxtrot = offset.bind(yankee)(romeo);
            offset = verify.HermesInternal;
            yankee = offset.concat;
            offset = '^';
            sizing = yankee.bind(offset)(foxtrot);
            yankee = backup.prototype;
            foxtrot = Object.create(yankee, {constructor: {value: backup}});
            yankee = 'i';
            output = foxtrot;
            kilo = yankee;
            offset = new output[backup](sizing, kilo, backup);
            offset = offset instanceof Object ? offset : foxtrot;
            _closure2_slot2 = offset;
            offset = verify.RegExp;
            zulu = options[zulu];
            verify = oscar.bind(golf)(zulu);
            zulu = verify.escape;
            sizing = zulu.bind(verify)(romeo);
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            output = verify;
            zulu = new output[offset](sizing, kilo, backup);
            zulu = zulu instanceof Object ? zulu : verify;
            _closure2_slot3 = zulu;
            zulu = 32;
            zulu = options[zulu];
            zulu = oscar.bind(golf)(zulu);
            oscar = zulu.bind(golf)(report);
            report = oscar.map;
            zulu = function(argFoo, argBar) {
                _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                    tango = argFoo;
                    oscar = _closure1_slot54;
                    mike = tango.displayName;
                    entity = mike.toLocaleLowerCase;
                    report = entity.bind(mike)();
                    zulu = {};
                    mike = _closure2_slot2;
                    zulu['exactQuery'] = mike;
                    mike = _closure2_slot3;
                    zulu['containQuery'] = mike;
                    mike = _closure2_slot1;
                    zulu['queryLower'] = mike;
                    mike = _closure2_slot0;
                    entity = undefined;
                    zulu = oscar.bind(entity)(report, zulu, mike);
                    entity = 0;
                    mike = zulu > entity;
                    entity = null;
                    if(!mike) { _fun00074_ip = 104; continue _fun00073 }
 81:
                    mike = {};
                    mike['choice'] = tango;
                    mike['score'] = zulu;
                    zulu = argBar;
                    mike['originalIndex'] = zulu;
                    entity = mike;
 104:
                    return entity;
                }
            };
            report = report.bind(oscar)(zulu);
            zulu = report.filter;
            oscar = _closure1_slot0;
            mike = 33;
            mike = options[mike];
            mike = oscar.bind(golf)(mike);
            mike = mike.isNotNullish;
            zulu = zulu.bind(report)(mike);
            mike = zulu.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.score;
                entity = -1;
                entity = entity * mike;
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            entity = null;
            mike = zulu;
            if(!(entity !== tango)) { _fun00072_ip = 316; continue _fun00071 }
 305:
            entity = zulu.take;
            mike = entity.bind(zulu)(tango);
 316:
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    oscar['queryChoice'] = golf;
    golf = function(argFoo) { // Original name: queryStaticRouteChannels
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            entity = argFoo;
            mike = entity.query;
            foxtrot = entity.guild;
            entity = mike.toLocaleLowerCase;
            entity = entity.bind(mike)();
            romeo = {};
            report = global;
            verify = report.RegExp;
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = 26;
            oscar = zulu[mike];
            offset = undefined;
            golf = tango.bind(offset)(oscar);
            oscar = golf.escape;
            options = oscar.bind(golf)(entity);
            oscar = report.HermesInternal;
            golf = oscar.concat;
            oscar = '^';
            update = golf.bind(oscar)(options);
            oscar = verify.prototype;
            options = Object.create(oscar, {constructor: {value: verify}});
            oscar = 'i';
            source = options;
            echo = oscar;
            golf = new source[verify](update, echo, result);
            golf = golf instanceof Object ? golf : options;
            romeo['exactQuery'] = golf;
            report = report.RegExp;
            mike = zulu[mike];
            tango = tango.bind(offset)(mike);
            mike = tango.escape;
            update = mike.bind(tango)(entity);
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            source = tango;
            mike = new source[report](update, echo, result);
            mike = mike instanceof Object ? mike : tango;
            romeo['containQuery'] = mike;
            romeo['queryLower'] = entity;
            mike = _closure1_slot0;
            entity = 40;
            entity = zulu[entity];
            zulu = mike.bind(offset)(entity);
            mike = zulu.canSeeOnboardingHome;
            entity = foxtrot.id;
            verify = mike.bind(zulu)(entity);
            if(!verify) { _fun00076_ip = 236; continue _fun00075 }
 212:
            mike = foxtrot.hasFeature;
            entity = _closure1_slot31;
            entity = entity.HUB;
            entity = mike.bind(foxtrot)(entity);
            verify = !entity;
 236:
            mike = foxtrot.hasFeature;
            entity = _closure1_slot31;
            entity = entity.COMMUNITY;
            options = mike.bind(foxtrot)(entity);
            mike = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 41;
            entity = zulu[entity];
            mike = mike.bind(offset)(entity);
            entity = mike.isGuildOnboardingAvailable;
            golf = entity.bind(mike)(foxtrot);
            if(!golf) { _fun00076_ip = 312; continue _fun00075 }
 291:
            mike = foxtrot.hasFeature;
            entity = _closure1_slot31;
            entity = entity.COMMUNITY;
            golf = mike.bind(foxtrot)(entity);
 312:
            entity = new Array(0);
            mike = {};
            tango = _closure1_slot36;
            zulu = tango.SERVER_GUIDE;
            mike['id'] = zulu;
            backup = _closure1_slot0;
            kilo = _closure1_slot3;
            zulu = 37;
            report = kilo[zulu];
            report = backup.bind(offset)(report);
            sizing = report.intl;
            oscar = sizing.string;
            report = kilo[zulu];
            report = backup.bind(offset)(report);
            report = report.t;
            report = report.VbpLyc;
            report = oscar.bind(sizing)(report);
            mike['name'] = report;
            oscar = new Array(3);
            oscar[0] = mike;
            mike = {};
            report = tango.CHANNEL_BROWSER;
            mike['id'] = report;
            report = kilo[zulu];
            report = backup.bind(offset)(report);
            output = report.intl;
            sizing = output.string;
            report = kilo[zulu];
            report = backup.bind(offset)(report);
            report = report.t;
            report = report.et6wam;
            report = sizing.bind(output)(report);
            mike['name'] = report;
            oscar[1] = mike;
            mike = {};
            tango = tango.CUSTOMIZE_COMMUNITY;
            mike['id'] = tango;
            tango = kilo[zulu];
            tango = backup.bind(offset)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = kilo[zulu];
            zulu = backup.bind(offset)(zulu);
            zulu = zulu.t;
            zulu = zulu.h9mGOD;
            zulu = tango.bind(report)(zulu);
            mike['name'] = zulu;
            oscar[2] = mike;
            mike = oscar.length;
            report = 0;
            mike = report < mike;
            tango = false;
            zulu = 0;
            if(!mike) { _fun00076_ip = 749; continue _fun00075 }
 548:
            kilo = oscar[zulu];
            backup = kilo.id;
            mike = _closure1_slot36;
            mike = mike.SERVER_GUIDE;
            if(!(backup === mike)) { _fun00076_ip = 577; continue _fun00075 }
 571:
            if(!verify) { _fun00076_ip = 734; continue _fun00075 }
 577:
            backup = kilo.id;
            mike = _closure1_slot36;
            mike = mike.CHANNEL_BROWSER;
            if(!(backup === mike)) { _fun00076_ip = 602; continue _fun00075 }
 596:
            if(!options) { _fun00076_ip = 734; continue _fun00075 }
 602:
            backup = kilo.id;
            mike = _closure1_slot36;
            mike = mike.CUSTOMIZE_COMMUNITY;
            if(!(backup === mike)) { _fun00076_ip = 624; continue _fun00075 }
 621:
            if(!golf) { _fun00076_ip = 734; continue _fun00075 }
 624:
            backup = _closure1_slot54;
            sizing = kilo.name;
            mike = sizing.toLocaleLowerCase;
            mike = mike.bind(sizing)();
            mike = backup.bind(offset)(mike, romeo, tango);
            if(!(mike > report)) { _fun00076_ip = 734; continue _fun00075 }
 654:
            backup = entity.push;
            sizing = _closure1_slot14;
            mike = {};
            output = kilo.id;
            mike['id'] = output;
            kilo = kilo.name;
            mike['name'] = kilo;
            kilo = _closure1_slot32;
            kilo = kilo.UNKNOWN;
            mike['type'] = kilo;
            kilo = foxtrot.id;
            mike['guild_id'] = kilo;
            kilo = sizing.prototype;
            kilo = Object.create(kilo, {constructor: {value: sizing}});
            source = kilo;
            update = mike;
            mike = new source[sizing](update, echo);
            mike = mike instanceof Object ? mike : kilo;
            mike = backup.bind(entity)(mike);
 734:
            zulu = zulu + 1;
            mike = oscar.length;
            if(zulu < mike) { _fun00076_ip = 548; continue _fun00075 }
 749:
            return entity;
        }
    };
    oscar['queryStaticRouteChannels'] = golf;
    golf = function(argFoo) { // Original name: queryChannelResults
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            entity = argFoo;
            report = this;
            options = entity.query;
            verify = entity.channel;
            oscar = entity.type;
            golf = undefined;
            if(!(oscar === golf)) { _fun00078_ip = 36; continue _fun00077 }
 29:
            oscar = _closure1_slot17;
 36:
            entity = entity.channelTypes;
            var _closure2_slot0 = entity;
            entity = {};
            tango = report.queryChannels;
            zulu = {};
            zulu['query'] = options;
            options = verify.getGuildId;
            options = options.bind(verify)();
            zulu['guildId'] = options;
            zulu['limit'] = golf;
            zulu['fuzzy'] = golf;
            golf = function(argFoo) { // Original name: filter
                _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity == zulu;
                    if(entity) { _fun00080_ip = 38; continue _fun00079 }
 16:
                    tango = _closure2_slot0;
                    zulu = tango.includes;
                    mike = argFoo;
                    mike = mike.type;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            zulu['filter'] = golf;
            zulu['type'] = oscar;
            oscar = true;
            zulu['allowEmptyQueries'] = oscar;
            tango = tango.bind(report)(zulu);
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity['channels'] = mike;
            return entity;
        }
    };
    oscar['queryChannelResults'] = golf;
    golf = function(argFoo) { // Original name: queryApplicationCommandChannelResults
        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
            entity = argFoo;
            result = this;
            output = entity.query;
            zulu = entity.channel;
            oscar = entity.channelTypes;
            var _closure2_slot0 = oscar;
            verify = entity.limit;
            yankee = undefined;
            if(!(verify === yankee)) { _fun00082_ip = 47; continue _fun00081 }
 40:
            verify = _closure1_slot34;
 47:
            sizing = entity.allowSnowflake;
            mike = zulu.guild_id;
            entity = null;
            if(!(entity != mike)) { _fun00082_ip = 297; continue _fun00081 }
 67:
            romeo = new Array(0);
            kilo = _closure1_slot50;
            report = kilo.length;
            options = 0;
            report = options < report;
            backup = true;
            foxtrot = false;
            golf = 0;
            offset = romeo;
            if(!report) { _fun00082_ip = 194; continue _fun00081 }
 101:
            source = kilo[golf];
            echo = romeo.concat;
            update = result.queryChannels;
            report = {};
            report['query'] = output;
            control = zulu.guild_id;
            report['guildId'] = control;
            report['limit'] = verify;
            report['fuzzy'] = backup;
            control = function(argFoo) { // Original name: filter
                _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity == zulu;
                    if(entity) { _fun00084_ip = 38; continue _fun00083 }
 16:
                    tango = _closure2_slot0;
                    zulu = tango.includes;
                    mike = argFoo;
                    mike = mike.type;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            report['filter'] = control;
            report['type'] = source;
            report['allowEmptyQueries'] = backup;
            report['requireVocalConnectAccess'] = foxtrot;
            report['allowSnowflake'] = sizing;
            report = update.bind(result)(report);
            romeo = echo.bind(romeo)(report);
            golf = golf + 1;
            report = kilo.length;
            offset = romeo;
            if(golf < report) { _fun00082_ip = 101; continue _fun00081 }
 194:
            golf = offset.filter;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                mike = entity.id;
                entity = 'null';
                entity = entity !== mike;
                return entity;
            };
            golf = golf.bind(offset)(report);
            report = golf.sort;
            offset = _closure1_slot1;
            romeo = _closure1_slot3;
            mike = 42;
            mike = romeo[mike];
            mike = offset.bind(yankee)(mike);
            report = report.bind(golf)(mike);
            mike = entity != verify;
            if(!mike) { _fun00082_ip = 256; continue _fun00081 }
 247:
            golf = report.length;
            mike = golf > verify;
 256:
            golf = report;
            if(!mike) { _fun00082_ip = 273; continue _fun00081 }
 262:
            mike = report.slice;
            golf = mike.bind(report)(options, verify);
 273:
            mike = {};
            report = golf.map;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                return entity;
            };
            tango = report.bind(golf)(tango);
            mike['channels'] = tango;
            return mike;
 297:
            mike = new Array(0);
            entity = entity == oscar;
            if(entity) { _fun00082_ip = 323; continue _fun00081 }
 308:
            report = oscar.includes;
            tango = zulu.type;
            entity = report.bind(oscar)(tango);
 323:
            if(!entity) { _fun00082_ip = 336; continue _fun00081 }
 326:
            entity = mike.push;
            entity = entity.bind(mike)(zulu);
 336:
            entity = {};
            entity['channels'] = mike;
            return entity;
        }
    };
    oscar['queryApplicationCommandChannelResults'] = golf;
    golf = function(argFoo) { // Original name: queryChoiceResults
        entity = argFoo;
        tango = this;
        oscar = entity.query;
        report = entity.choices;
        entity = {};
        zulu = tango.queryChoice;
        mike = {};
        mike['query'] = oscar;
        mike['choices'] = report;
        report = null;
        mike['limit'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.map;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.choice;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        entity['choices'] = mike;
        return entity;
    };
    oscar['queryChoiceResults'] = golf;
    golf = function(argFoo) { // Original name: queryEmojiResults
        _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
            entity = argFoo;
            options = entity.query;
            verify = entity.channel;
            oscar = entity.intention;
            golf = entity.maxCount;
            tango = undefined;
            if(!(golf === tango)) { _fun00086_ip = 38; continue _fun00085 }
 31:
            golf = _closure1_slot34;
 38:
            report = entity.matchComparator;
            zulu = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 43;
            entity = offset[entity];
            entity = zulu.bind(tango)(entity);
            zulu = entity.FrecencyUserSettingsActionCreators;
            entity = zulu.loadIfNecessary;
            entity = entity.bind(zulu)();
            entity = {};
            tango = _closure1_slot6;
            zulu = tango.searchWithoutFetchingLatest;
            mike = {};
            mike['channel'] = verify;
            mike['query'] = options;
            mike['count'] = golf;
            mike['intention'] = oscar;
            mike['matchComparator'] = report;
            mike = zulu.bind(tango)(mike);
            entity['emojis'] = mike;
            return entity;
        }
    };
    oscar['queryEmojiResults'] = golf;
    golf = function(argFoo) { // Original name: queryStickers
        _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
            entity = arguments[1];
            mike = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00088_ip = 16; continue _fun00087 }
 14:
            entity = true;
 16:
            var _closure2_slot0 = entity;
            if(!(mike === report)) { _fun00088_ip = 48; continue _fun00087 }
 24:
            tango = _closure1_slot44;
            entity = [null];
            entity[1] = tango;
            mike = entity;
 48:
            oscar = mike;
            entity = oscar[Symbol.iterator];
            oscar = entity().next;
            golf = oscar().value;
            mike = entity;
            mike = mike === report;
            tango = undefined;
            if(mike) { _fun00088_ip = 73; continue _fun00087 }
 70:
            tango = golf;
 73:
            var _closure2_slot1 = tango;
            tango = undefined;
            if(mike) { _fun00088_ip = 107; continue _fun00087 }
 82:
            golf = oscar().value;
            oscar = entity;
            oscar = oscar === report;
            tango = undefined;
            mike = oscar;
            if(oscar) { _fun00088_ip = 107; continue _fun00087 }
 101:
            tango = golf;
            mike = oscar;
 107:
            var _closure2_slot2 = tango;
            if(mike) { _fun00088_ip = 117; continue _fun00087 }
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
            tango = _closure1_slot28;
            entity = tango.getCurrentUser;
            entity = entity.bind(tango)();
            _closure2_slot4 = entity;
            entity = global;
            entity = entity.Set;
            tango = entity.prototype;
            tango = Object.create(tango, {constructor: {value: entity}});
            yankee = tango;
            entity = new yankee[entity](offset);
            entity = entity instanceof Object ? entity : tango;
            _closure2_slot5 = entity;
            tango = new Array(0);
            _closure2_slot6 = tango;
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            entity = 43;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            oscar = entity.FrecencyUserSettingsActionCreators;
            entity = oscar.loadIfNecessary;
            entity = entity.bind(oscar)();
            options = function() { // Original name: _loop
                _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                    entity = _closure2_slot7;
                    options = '';
                    if(!(options !== entity)) { _fun00090_ip = 247; continue _fun00089 }
 20:
                    tango = _closure2_slot7;
                    entity = tango.toLocaleLowerCase;
                    golf = entity.bind(tango)();
                    var _closure3_slot0 = golf;
                    oscar = _closure1_slot0;
                    yankee = _closure1_slot3;
                    entity = 28;
                    tango = yankee[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.stripDiacritics;
                    offset = tango.bind(oscar)(golf);
                    tango = global;
                    foxtrot = tango.RegExp;
                    verify = _closure1_slot1;
                    report = 26;
                    oscar = yankee[report];
                    golf = verify.bind(entity)(oscar);
                    oscar = golf.escape;
                    romeo = oscar.bind(golf)(offset);
                    oscar = tango.HermesInternal;
                    golf = oscar.concat;
                    oscar = '^';
                    kilo = golf.bind(oscar)(romeo);
                    golf = foxtrot.prototype;
                    romeo = Object.create(golf, {constructor: {value: foxtrot}});
                    golf = 'i';
                    sizing = romeo;
                    backup = golf;
                    oscar = new sizing[foxtrot](kilo, backup, foxtrot);
                    oscar = oscar instanceof Object ? oscar : romeo;
                    var _closure3_slot1 = oscar;
                    oscar = tango.RegExp;
                    report = yankee[report];
                    verify = verify.bind(entity)(report);
                    report = verify.escape;
                    report = report.bind(verify)(offset);
                    tango = tango.HermesInternal;
                    tango = tango.concat;
                    kilo = tango.bind(options)(report);
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    sizing = report;
                    tango = new sizing[oscar](kilo, backup, foxtrot);
                    tango = tango instanceof Object ? tango : report;
                    var _closure3_slot2 = tango;
                    tango = _closure2_slot3;
                    zulu = tango.forEach;
                    mike = function(argFoo, argBar) {
                        _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                            verify = argBar;
                            mike = _closure1_slot9;
                            entity = mike.getStickerById;
                            oscar = entity.bind(mike)(verify);
                            zulu = null;
                            if(!(zulu != oscar)) { _fun00092_ip = 563; continue _fun00091 }
 30:
                            report = _closure2_slot2;
                            golf = _closure1_slot0;
                            options = _closure1_slot3;
                            mike = 44;
                            mike = options[mike];
                            sizing = undefined;
                            offset = golf.bind(sizing)(mike);
                            options = offset.getStickerSendability;
                            golf = _closure2_slot4;
                            mike = _closure2_slot1;
                            mike = options.bind(offset)(oscar, golf, mike);
                            mike = report.bind(sizing)(oscar, mike);
                            if(!mike) { _fun00092_ip = 563; continue _fun00091 }
 92:
                            report = _closure1_slot51;
                            mike = argFoo;
                            kilo = report.bind(sizing)(mike);
                            report = kilo.bind(sizing)();
                            golf = report.done;
                            mike = 0;
                            foxtrot = 31;
                            romeo = 0;
                            yankee = null;
                            offset = report;
                            options = 0;
                            report = null;
                            if(golf) { _fun00092_ip = 435; continue _fun00091 }
 138:
                            golf = offset.value;
                            control = golf.type;
                            golf = golf.value;
                            output = _closure1_slot57;
                            update = output.bind(sizing)(control);
                            output = _closure2_slot0;
                            echo = _closure3_slot0;
                            if(output) { _fun00092_ip = 201; continue _fun00091 }
 173:
                            output = yankee;
                            result = 0;
                            if(!(golf === echo)) { _fun00092_ip = 398; continue _fun00091 }
 185:
                            source = _closure1_slot39;
                            result = source * update;
                            output = golf;
                            _fun00092_ip = 398; continue _fun00091;
 201:
                            if(!(golf !== echo)) { _fun00092_ip = 387; continue _fun00091 }
 208:
                            source = _closure3_slot1;
                            echo = source.test;
                            echo = echo.bind(source)(golf);
                            if(echo) { _fun00092_ip = 374; continue _fun00091 }
 228:
                            source = _closure1_slot0;
                            echo = _closure1_slot3;
                            echo = echo[foxtrot];
                            echo = source.bind(sizing)(echo);
                            echo = echo.StickerMetadataTypes;
                            echo = echo.GUILD_NAME;
                            echo = control !== echo;
                            if(!echo) { _fun00092_ip = 297; continue _fun00091 }
 264:
                            vacuum = _closure1_slot0;
                            source = _closure1_slot3;
                            source = source[foxtrot];
                            source = vacuum.bind(sizing)(source);
                            source = source.StickerMetadataTypes;
                            source = source.PACK_NAME;
                            echo = control !== source;
 297:
                            if(!echo) { _fun00092_ip = 333; continue _fun00091 }
 300:
                            vacuum = _closure1_slot0;
                            source = _closure1_slot3;
                            source = source[foxtrot];
                            source = vacuum.bind(sizing)(source);
                            source = source.StickerMetadataTypes;
                            source = source.STICKER_NAME;
                            echo = control !== source;
 333:
                            if(echo) { _fun00092_ip = 353; continue _fun00091 }
 336:
                            control = _closure3_slot2;
                            source = control.test;
                            source = source.bind(control)(golf);
                            echo = !source;
 353:
                            output = yankee;
                            result = 0;
                            if(echo) { _fun00092_ip = 398; continue _fun00091 }
 361:
                            echo = _closure1_slot41;
                            result = echo * update;
                            output = yankee;
                            _fun00092_ip = 398; continue _fun00091;
 374:
                            echo = _closure1_slot40;
                            result = echo * update;
                            output = yankee;
                            _fun00092_ip = 398; continue _fun00091;
 387:
                            echo = _closure1_slot39;
                            result = echo * update;
                            output = yankee;
 398:
                            if(!(result > romeo)) { _fun00092_ip = 408; continue _fun00091 }
 402:
                            romeo = result;
                            output = golf;
 408:
                            echo = kilo.bind(sizing)();
                            golf = echo.done;
                            yankee = output;
                            offset = echo;
                            options = romeo;
                            report = yankee;
                            if(!golf) { _fun00092_ip = 138; continue _fun00091 }
 435:
                            tango = _closure1_slot8;
                            golf = tango.stickerFrecencyWithoutFetchingLatest;
                            tango = golf.getScore;
                            verify = tango.bind(golf)(verify);
                            tango = options;
                            if(!(zulu != verify)) { _fun00092_ip = 474; continue _fun00091 }
 463:
                            golf = 100;
                            golf = verify / golf;
                            tango = options * golf;
 474:
                            mike = tango > mike;
                            if(!mike) { _fun00092_ip = 485; continue _fun00091 }
 481:
                            mike = zulu != report;
 485:
                            if(!mike) { _fun00092_ip = 510; continue _fun00091 }
 488:
                            options = _closure2_slot5;
                            golf = options.has;
                            zulu = oscar.id;
                            zulu = golf.bind(options)(zulu);
                            mike = !zulu;
 510:
                            if(!mike) { _fun00092_ip = 563; continue _fun00091 }
 513:
                            golf = _closure2_slot5;
                            zulu = golf.add;
                            mike = oscar.id;
                            mike = zulu.bind(golf)(mike);
                            zulu = _closure2_slot6;
                            mike = zulu.push;
                            entity = {};
                            entity['sticker'] = oscar;
                            entity['comparator'] = report;
                            entity['score'] = tango;
                            entity = mike.bind(zulu)(entity);
 563:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
 247:
                    entity = 1;
                    return entity;
                }
            };
            oscar = _closure1_slot51;
            entity = argFoo;
            golf = oscar.bind(report)(entity);
            oscar = golf.bind(report)();
            entity = oscar.done;
            if(entity) { _fun00088_ip = 306; continue _fun00087 }
 278:
            entity = oscar.value;
            _closure2_slot7 = entity;
            entity = options.bind(report)();
            verify = golf.bind(report)();
            entity = verify.done;
            oscar = verify;
            if(!entity) { _fun00088_ip = 278; continue _fun00087 }
 306:
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            entity = 32;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            report = entity.bind(report)(tango);
            tango = report.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.score;
                entity = -1;
                entity = entity * mike;
                return entity;
            };
            tango = tango.bind(report)(entity);
            entity = tango.value;
            entity = entity.bind(tango)();
            _closure2_slot6 = entity;
            report = entity.length;
            tango = 0;
            if(!(tango === report)) { _fun00088_ip = 382; continue _fun00087 }
 371:
            mike = _closure1_slot46;
            _closure2_slot6 = mike;
            entity = mike;
 382:
            return entity;
        }
    };
    oscar['queryStickers'] = golf;
    golf = function(argFoo, argBar) { // Original name: querySoundmoji
        _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
            oscar = argBar;
            var _closure2_slot0 = oscar;
            zulu = _closure1_slot28;
            mike = zulu.getCurrentUser;
            report = mike.bind(zulu)();
            zulu = _closure1_slot7;
            mike = zulu.isFetching;
            mike = mike.bind(zulu)();
            mike = !mike;
            if(!mike) { _fun00094_ip = 64; continue _fun00093 }
 45:
            golf = _closure1_slot7;
            zulu = golf.hasFetchedAllSounds;
            zulu = zulu.bind(golf)();
            mike = !zulu;
 64:
            if(!mike) { _fun00094_ip = 99; continue _fun00093 }
 67:
            golf = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 45;
            zulu = zulu[mike];
            mike = undefined;
            zulu = golf.bind(mike)(zulu);
            mike = zulu.maybeFetchSoundboardSounds;
            mike = mike.bind(zulu)();
 99:
            zulu = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 43;
            options = golf[mike];
            mike = undefined;
            options = zulu.bind(mike)(options);
            verify = options.FrecencyUserSettingsActionCreators;
            options = verify.loadIfNecessary;
            options = options.bind(verify)();
            options = global;
            verify = options.Array;
            options = verify.from;
            offset = _closure1_slot7;
            tango = offset.getSounds;
            offset = tango.bind(offset)();
            tango = offset.values;
            tango = tango.bind(offset)();
            verify = options.bind(verify)(tango);
            options = verify.reduce;
            tango = function(argFoo, argBar) {
                entity = argFoo;
                tango = argBar;
                var _closure3_slot0 = entity;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                        tango = argFoo;
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 46;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        mike = _closure2_slot0;
                        golf = null;
                        mike = golf == mike;
                        zulu = undefined;
                        if(mike) { _fun00096_ip = 55; continue _fun00095 }
 46:
                        mike = _closure2_slot0;
                        zulu = mike.guild_id;
 55:
                        mike = _closure2_slot0;
                        golf = golf == mike;
                        mike = undefined;
                        if(golf) { _fun00096_ip = 77; continue _fun00095 }
 68:
                        oscar = _closure2_slot0;
                        mike = oscar.id;
 77:
                        mike = report.bind(entity)(tango, zulu, mike);
                        if(!mike) { _fun00096_ip = 104; continue _fun00095 }
 87:
                        zulu = _closure3_slot0;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 104:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = new Array(0);
            foxtrot = options.bind(verify)(tango, entity);
            entity = 47;
            entity = golf[entity];
            zulu = zulu.bind(mike)(entity);
            mike = zulu.searchSounds;
            backup = argFoo;
            kilo = zulu;
            romeo = report;
            yankee = oscar;
            entity = kilo[mike](backup, foxtrot, romeo, yankee, offset);
            return entity;
        }
    };
    oscar['querySoundmoji'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: matchSentinel
        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
            zulu = _closure1_slot45;
            mike = zulu.test;
            entity = argBar;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            if(!entity) { _fun00098_ip = 36; continue _fun00097 }
 26:
            zulu = argFoo;
            mike = argBaz;
            entity = zulu === mike;
 36:
            return entity;
        }
    };
    oscar['matchSentinel'] = golf;
    golf = function(argFoo, argBar) { // Original name: hasSameRoleAsUsername
        _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
            oscar = argFoo;
            tango = argBar;
            entity = tango.isPomelo;
            entity = entity.bind(tango)();
            if(entity) { _fun00100_ip = 23; continue _fun00099 }
 19:
            entity = false;
            return entity;
 23:
            report = _closure1_slot21;
            zulu = report.getGuild;
            entity = oscar.getGuildId;
            entity = entity.bind(oscar)();
            entity = zulu.bind(report)(entity);
            zulu = null;
            if(!(zulu == entity)) { _fun00100_ip = 60; continue _fun00099 }
 56:
            zulu = {};
            _fun00100_ip = 80; continue _fun00099;
 60:
            report = _closure1_slot21;
            mike = report.getRoles;
            entity = entity.id;
            zulu = mike.bind(report)(entity);
 80:
            entity = global;
            mike = entity.Object;
            entity = mike.values;
            zulu = entity.bind(mike)(zulu);
            entity = zulu.length;
            mike = 0;
            entity = mike < entity;
            if(!entity) { _fun00100_ip = 162; continue _fun00099 }
 112:
            entity = zulu[mike];
            golf = entity.name;
            oscar = tango.username;
            report = oscar.startsWith;
            entity = golf.toLowerCase;
            entity = entity.bind(golf)();
            entity = report.bind(oscar)(entity);
            if(entity) { _fun00100_ip = 166; continue _fun00099 }
 150:
            mike = mike + 1;
            entity = zulu.length;
            if(mike < entity) { _fun00100_ip = 112; continue _fun00099 }
 162:
            entity = false;
            return entity;
 166:
            entity = true;
            return entity;
        }
    };
    oscar['hasSameRoleAsUsername'] = golf;
    golf = 48;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'utils/AutocompleteUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    report = function(argFoo) { // Original name: populateInAppSettingNavigationOptions
        zulu = _closure1_slot37;
        mike = zulu.setState;
        entity = {};
        tango = argFoo;
        entity['options'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['populateInAppSettingNavigationOptions'] = report;
    zulu['WHITESPACE_REGEX'] = tango;
    zulu['COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS'] = mike;
    return entity;
})();