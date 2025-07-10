// app/modules/share/formatResults.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
            verify = _closure1_slot12;
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
            golfie = _closure1_slot12;
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
    var _closure1_slot11 = entity;
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
    var _closure1_slot12 = entity;
    tangon = function(argFoo) { // Original name: getChannelIdFromDestinationId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'channel';
            if(!(michal !== zuuluu)) { _fun00008_ip = 55; continue _fun00007 }
 16:
            tangon = _closure1_slot5;
            zuuluu = tangon.getDMFromUserId;
            michal = entity.id;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = null;
            tangon = michal != zuuluu;
            michal = undefined;
            if(!tangon) { _fun00008_ip = 53; continue _fun00007 }
 50:
            michal = zuuluu;
 53:
            return michal;
 55:
            entity = entity.id;
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = function() { // Original name: _getOrResolveChannelIdFromDestinationId
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 112; continue _fun00009 }
 10:
                    tangon = oscard;
                    michal = _closure1_slot13;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(oscard);
                    oscard = null;
                    if(!(oscard == michal)) { _fun00010_ip = 109; continue _fun00009 }
 33:
                    oscard = tangon;
                    golfie = oscard.type;
                    oscard = 'user';
                    if(!(oscard !== golfie)) { _fun00010_ip = 52; continue _fun00009 }
 49:
                    return zuuluu;
 52: // try_start_0
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 7;
                    report = golfie[report];
                    oscard = oscard.bind(zuuluu)(report);
                    report = oscard.getOrEnsurePrivateChannel;
                    tangon = tangon.id;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=92);
 90:
                    return tangon;
 92:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 101; continue _fun00009 }
 98: // try_end0
                    return tangon;
 101:
                    return tangon;
 104: // catch_target0
                    CatchBlockStart(arg_register=3);
                    return zuuluu;
 109:
                    return michal;
 112:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: createAutocompleterResultForDestination
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'user';
            if(!(michal !== zuuluu)) { _fun00012_ip = 53; continue _fun00011 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = entity.id;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 53:
            zuuluu = _closure1_slot7;
            michal = zuuluu.getUser;
            entity = entity.id;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity != zuuluu;
            if(!michal) { _fun00012_ip = 140; continue _fun00011 }
 85:
            michal = {};
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 8;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            tangon = tangon.AutocompleterResultTypes;
            tangon = tangon.USER;
            michal['type'] = tangon;
            michal['record'] = zuuluu;
            zuuluu = 0;
            michal['score'] = zuuluu;
            entity = michal;
 140:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: mergeAndDedupeResultsWithHeaders
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argBar;
            entity = global;
            entity = entity.Set;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            result = zuuluu;
            entity = new result[entity](output);
            yankee = entity instanceof Object ? entity : zuuluu;
            offset = null;
            if(!(offset != michal)) { _fun00014_ip = 93; continue _fun00013 }
 37:
            entity = _closure1_slot11;
            tangon = undefined;
            zuuluu = entity.bind(tangon)(michal);
            michal = zuuluu.bind(tangon)();
            entity = michal.done;
            if(entity) { _fun00014_ip = 93; continue _fun00013 }
 63:
            report = michal.value;
            entity = yankee.add;
            entity = entity.bind(yankee)(report);
            report = zuuluu.bind(tangon)();
            entity = report.done;
            michal = report;
            if(!entity) { _fun00014_ip = 63; continue _fun00013 }
 93:
            entity = new Array(0);
            zuuluu = _closure1_slot11;
            option = undefined;
            michal = argFoo;
            golfie = zuuluu.bind(option)(michal);
            zuuluu = golfie.bind(option)();
            michal = zuuluu.done;
            oscard = 8;
            report = undefined;
            tangon = zuuluu;
            zuuluu = undefined;
            if(michal) { _fun00014_ip = 297; continue _fun00013 }
 139:
            sizing = tangon.value;
            backup = report;
            romeon = zuuluu;
            if(!(offset != sizing)) { _fun00014_ip = 273; continue _fun00013 }
 154:
            foxtra = sizing.type;
            kiloes = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = kiloes.bind(option)(michal);
            michal = michal.AutocompleterResultTypes;
            michal = michal.HEADER;
            backup = sizing;
            romeon = zuuluu;
            if(!(foxtra !== michal)) { _fun00014_ip = 273; continue _fun00013 }
 198:
            michal = sizing.record;
            michal = michal.id;
            foxtra = yankee.has;
            foxtra = foxtra.bind(yankee)(michal);
            backup = report;
            romeon = michal;
            if(foxtra) { _fun00014_ip = 273; continue _fun00013 }
 228:
            foxtra = yankee.add;
            foxtra = foxtra.bind(yankee)(michal);
            foxtra = report;
            if(!(offset != report)) { _fun00014_ip = 257; continue _fun00013 }
 245:
            kiloes = entity.push;
            kiloes = kiloes.bind(entity)(report);
            foxtra = undefined;
 257:
            kiloes = entity.push;
            kiloes = kiloes.bind(entity)(sizing);
            backup = foxtra;
            romeon = michal;
 273:
            foxtra = golfie.bind(option)();
            michal = foxtra.done;
            report = backup;
            zuuluu = romeon;
            tangon = foxtra;
            if(!michal) { _fun00014_ip = 139; continue _fun00013 }
 297:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getLastChannelResult
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00016_ip = 154; continue _fun00015 }
 12:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            verify = undefined;
            michal = tangon.bind(verify)(michal);
            tangon = michal.bind(verify)(zuuluu);
            zuuluu = entity == tangon;
            michal = null;
            if(zuuluu) { _fun00016_ip = 152; continue _fun00015 }
 51:
            zuuluu = _closure1_slot8;
            report = zuuluu.bind(verify)(tangon);
            zuuluu = null;
            if(!report) { _fun00016_ip = 149; continue _fun00015 }
 65:
            golfie = tangon.type;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            report = 8;
            report = offset[report];
            report = option.bind(verify)(report);
            report = report.AutocompleterResultTypes;
            report = report.USER;
            report = golfie === report;
            if(report) { _fun00016_ip = 141; continue _fun00015 }
 109:
            verify = _closure1_slot6;
            option = verify.can;
            oscard = _closure1_slot9;
            golfie = oscard.VIEW_CHANNEL;
            oscard = tangon.record;
            report = option.bind(verify)(golfie, oscard);
 141:
            zuuluu = null;
            if(!report) { _fun00016_ip = 149; continue _fun00015 }
 146:
            zuuluu = tangon;
 149:
            michal = zuuluu;
 152:
            return michal;
 154:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: filterResults
        zuuluu = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscard = argFoo;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 11;
                entity = zuuluu[entity];
                offset = undefined;
                michal = michal.bind(offset)(entity);
                entity = michal.isNotNullish;
                entity = entity.bind(michal)(oscard);
                if(!entity) { _fun00018_ip = 374; continue _fun00017 }
 45:
                zuuluu = oscard.type;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                yankee = 8;
                michal = michal[yankee];
                michal = tangon.bind(offset)(michal);
                michal = michal.AutocompleterResultTypes;
                michal = michal.HEADER;
                michal = zuuluu === michal;
                if(michal) { _fun00018_ip = 371; continue _fun00017 }
 92:
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.bind(offset)(oscard);
                if(!zuuluu) { _fun00018_ip = 368; continue _fun00017 }
 107:
                report = _closure2_slot0;
                option = oscard.type;
                verify = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[yankee];
                tangon = verify.bind(offset)(tangon);
                tangon = tangon.AutocompleterResultTypes;
                tangon = tangon.USER;
                if(!(option !== tangon)) { _fun00018_ip = 327; continue _fun00017 }
 155:
                option = oscard.type;
                verify = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[yankee];
                tangon = verify.bind(offset)(tangon);
                tangon = tangon.AutocompleterResultTypes;
                tangon = tangon.GROUP_DM;
                tangon = option === tangon;
                if(tangon) { _fun00018_ip = 325; continue _fun00017 }
 199:
                option = oscard.record;
                verify = option.type;
                option = _closure1_slot10;
                option = option.GUILD_FORUM;
                option = verify !== option;
                if(!option) { _fun00018_ip = 252; continue _fun00017 }
 227:
                verify = oscard.record;
                offset = verify.type;
                verify = _closure1_slot10;
                verify = verify.GUILD_MEDIA;
                option = offset !== verify;
 252:
                if(!option) { _fun00018_ip = 287; continue _fun00017 }
 255:
                romeon = _closure1_slot6;
                yankee = romeon.can;
                verify = _closure1_slot9;
                offset = verify.VIEW_CHANNEL;
                verify = oscard.record;
                option = yankee.bind(romeon)(offset, verify);
 287:
                if(!option) { _fun00018_ip = 322; continue _fun00017 }
 290:
                romeon = _closure1_slot6;
                yankee = romeon.can;
                verify = _closure1_slot9;
                offset = verify.SEND_MESSAGES;
                verify = oscard.record;
                option = yankee.bind(romeon)(offset, verify);
 322:
                tangon = option;
 325:
                _fun00018_ip = 365; continue _fun00017;
 327:
                if(report) { _fun00018_ip = 362; continue _fun00017 }
 330:
                option = _closure1_slot5;
                golfie = option.getDMChannelFromUserId;
                oscard = oscard.record;
                oscard = oscard.id;
                golfie = golfie.bind(option)(oscard);
                oscard = null;
                report = oscard != golfie;
 362:
                tangon = report;
 365:
                zuuluu = tangon;
 368:
                michal = zuuluu;
 371:
                entity = michal;
 374:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.isAllowedType;
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Permissions;
    var _closure1_slot9 = option;
    report = report.ChannelTypes;
    var _closure1_slot10 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/share/formatResults.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: formatResults
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            report = zuuluu.results;
            entity = zuuluu.hasQuery;
            verify = zuuluu.queryMode;
            var _closure2_slot0 = verify;
            kiloes = zuuluu.frequentChannels;
            result = zuuluu.targetDestination;
            backup = zuuluu.selectedDestinations;
            offset = zuuluu.pinnedDestinations;
            golfie = zuuluu.originDestination;
            var _closure2_slot1 = golfie;
            tangon = zuuluu.includeMissingDMs;
            if(entity) { _fun00020_ip = 390; continue _fun00019 }
 73:
            entity = null;
            if(!(entity != offset)) { _fun00020_ip = 90; continue _fun00019 }
 79:
            oscard = offset.length;
            zuuluu = 0;
            if(!(!(oscard > zuuluu))) { _fun00020_ip = 96; continue _fun00019 }
 90:
            oscard = new Array(0);
            _fun00020_ip = 113; continue _fun00019;
 96:
            option = offset.map;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot15;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            oscard = option.bind(offset)(zuuluu);
 113:
            offset = _closure1_slot4;
            option = offset.getChannelHistory;
            romeon = option.bind(offset)();
            option = romeon.length;
            offset = 0;
            if(!(!(option > offset))) { _fun00020_ip = 147; continue _fun00019 }
 141:
            foxtra = new Array(0);
            _fun00020_ip = 164; continue _fun00019;
 147:
            yankee = romeon.map;
            option = function(argFoo) {
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = yankee.bind(romeon)(option);
 164:
            option = kiloes.length;
            if(!(!(option > offset))) { _fun00020_ip = 179; continue _fun00019 }
 173:
            romeon = new Array(0);
            _fun00020_ip = 196; continue _fun00019;
 179:
            yankee = kiloes.map;
            option = function(argFoo) {
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = yankee.bind(kiloes)(option);
 196:
            yankee = _closure1_slot18;
            option = new Array(1);
            source = option;
            update = oscard;
            echoed = 0;
            kiloes = arraySpread(source, update, echoed);
            sizing = entity != result;
            oscard = null;
            if(!sizing) { _fun00020_ip = 236; continue _fun00019 }
 225:
            output = _closure1_slot15;
            sizing = undefined;
            oscard = output.bind(sizing)(result);
 236:
            option[kiloes] = oscard;
            oscard = 1;
            echoed = kiloes + oscard;
            source = option;
            update = foxtra;
            echoed = arraySpread(source, update, echoed);
            source = option;
            update = romeon;
            oscard = arraySpread(source, update, echoed);
            oscard = undefined;
            option = yankee.bind(oscard)(option, tangon);
            romeon = entity == backup;
            yankee = undefined;
            if(romeon) { _fun00020_ip = 302; continue _fun00019 }
 285:
            foxtra = backup.find;
            romeon = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.isEqual;
                michal = _closure2_slot1;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            yankee = foxtra.bind(backup)(romeon);
 302:
            yankee = entity != yankee;
            if(!(entity != golfie)) { _fun00020_ip = 328; continue _fun00019 }
 310:
            if(yankee) { _fun00020_ip = 328; continue _fun00019 }
 313:
            yankee = golfie.id;
            golfie = new Array(1);
            golfie[0] = yankee;
            _fun00020_ip = 332; continue _fun00019;
 328:
            golfie = new Array(0);
 332:
            if(!(entity == verify)) { _fun00020_ip = 362; continue _fun00019 }
 336:
            entity = _closure1_slot16;
            verify = entity.bind(oscard)(option, golfie);
            golfie = verify.slice;
            entity = 15;
            entity = golfie.bind(verify)(offset, entity);
            _fun00020_ip = 388; continue _fun00019;
 362:
            zuuluu = _closure1_slot16;
            golfie = option.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            michal = golfie.bind(option)(michal);
            entity = zuuluu.bind(oscard)(michal);
 388:
            return entity;
 390:
            zuuluu = _closure1_slot16;
            entity = _closure1_slot18;
            michal = undefined;
            entity = entity.bind(michal)(report, tangon);
            entity = zuuluu.bind(michal)(entity);
            return entity;
        }
    };
    zuuluu['default'] = report;
    report = function(argFoo) { // Original name: getDestinationIdFromChannelId
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            zuuluu = zuuluu.bind(tangon)(michal);
            tangon = null;
            report = tangon == zuuluu;
            tangon = undefined;
            if(report) { _fun00022_ip = 36; continue _fun00021 }
 31:
            tangon = zuuluu.type;
 36:
            entity = _closure1_slot10;
            entity = entity.DM;
            if(!(tangon !== entity)) { _fun00022_ip = 66; continue _fun00021 }
 50:
            entity = {};
            tangon = 'channel';
            entity['type'] = tangon;
            entity['id'] = michal;
            _fun00022_ip = 95; continue _fun00021;
 66:
            michal = {};
            tangon = 'user';
            michal['type'] = tangon;
            tangon = zuuluu.recipients;
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            michal['id'] = zuuluu;
            entity = michal;
 95:
            return entity;
        }
    };
    zuuluu['getDestinationIdFromChannelId'] = report;
    report = function(argFoo) { // Original name: destinationKey
        entity = argFoo;
        report = entity.type;
        tangon = entity.id;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = '-';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    zuuluu['destinationKey'] = report;
    zuuluu['getChannelIdFromDestinationId'] = tangon;
    tangon = function() { // Original name: getOrResolveChannelIdFromDestinationId
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getOrResolveChannelIdFromDestinationId'] = tangon;
    michal = function(argFoo) { // Original name: formatResultsWithHeaders
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            golfie = entity.results;
            michal = entity.selectedResult;
            oscard = entity.hasNonEmptyQuery;
            romeon = entity.queryMode;
            var _closure2_slot0 = romeon;
            offset = entity.selectedChannelId;
            foxtra = entity.frequentChannels;
            entity = null;
            if(!(entity == michal)) { _fun00024_ip = 61; continue _fun00023 }
 55:
            report = new Array(0);
            _fun00024_ip = 83; continue _fun00023;
 61:
            michal = michal.record;
            zuuluu = michal.id;
            michal = new Array(1);
            michal[0] = zuuluu;
            report = michal;
 83:
            result = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 8;
            yankee = zuuluu[option];
            tangon = undefined;
            backup = result.bind(tangon)(yankee);
            yankee = backup.createHeaderResult;
            sizing = 10;
            kiloes = zuuluu[sizing];
            kiloes = result.bind(tangon)(kiloes);
            output = kiloes.intl;
            kiloes = output.string;
            zuuluu = zuuluu[sizing];
            zuuluu = result.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.qm9dSk;
            zuuluu = kiloes.bind(output)(zuuluu);
            zuuluu = yankee.bind(backup)(zuuluu);
            if(oscard) { _fun00024_ip = 407; continue _fun00023 }
 174:
            yankee = foxtra.map;
            oscard = function(argFoo) {
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = yankee.bind(foxtra)(oscard);
            yankee = foxtra.filter;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            oscard = 11;
            oscard = kiloes[oscard];
            oscard = backup.bind(tangon)(oscard);
            oscard = oscard.isNotNullish;
            foxtra = yankee.bind(foxtra)(oscard);
            yankee = foxtra.filter;
            oscard = _closure1_slot8;
            yankee = yankee.bind(foxtra)(oscard);
            oscard = _closure1_slot16;
            if(!(entity == romeon)) { _fun00024_ip = 361; continue _fun00023 }
 249:
            kiloes = _closure1_slot0;
            entity = _closure1_slot2;
            option = entity[option];
            romeon = kiloes.bind(tangon)(option);
            option = romeon.createHeaderResult;
            foxtra = entity[sizing];
            foxtra = kiloes.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            entity = entity[sizing];
            entity = kiloes.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.80lOZ2;
            entity = foxtra.bind(backup)(entity);
            option = option.bind(romeon)(entity);
            entity = new Array(3);
            entity[0] = option;
            option = _closure1_slot17;
            option = option.bind(tangon)(offset);
            entity[1] = option;
            entity[2] = zuuluu;
            echoed = 3;
            source = entity;
            update = yankee;
            option = arraySpread(source, update, echoed);
            _fun00024_ip = 399; continue _fun00023;
 361:
            option = new Array(1);
            option[0] = zuuluu;
            offset = yankee.filter;
            verify = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            update = offset.bind(yankee)(verify);
            echoed = 1;
            source = option;
            verify = arraySpread(source, update, echoed);
            entity = option;
 399:
            entity = oscard.bind(tangon)(entity, report);
            return entity;
 407:
            entity = new Array(1);
            entity[0] = zuuluu;
            zuuluu = _closure1_slot16;
            oscard = golfie.filter;
            michal = _closure1_slot8;
            michal = oscard.bind(golfie)(michal);
            update = zuuluu.bind(tangon)(michal, report);
            echoed = 1;
            source = entity;
            michal = arraySpread(source, update, echoed);
            return entity;
        }
    };
    zuuluu['formatResultsWithHeaders'] = michal;
    return entity;
})();