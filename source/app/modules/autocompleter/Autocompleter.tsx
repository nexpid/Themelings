// app/modules/autocompleter/Autocompleter.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
            verify = _closure1_slot19;
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
            golfie = _closure1_slot19;
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
    var _closure1_slot18 = entity;
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
    var _closure1_slot19 = entity;
    entity = function() { // Original name: calculateScore
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[0];
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            michal = 0;
 11:
            entity = 1000;
            michal = entity * michal;
            entity = 1;
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00008_ip = 32; continue _fun00007 }
 30:
            entity = undefined;
 32:
            entity = michal * entity;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: getBoosterMap
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            romeon = argFoo;
            michal = argBar;
            michal = michal.frecencyBoosters;
            if(michal) { _fun00010_ip = 21; continue _fun00009 }
 17:
            michal = {};
            return michal;
 21:
            tangon = _closure1_slot11;
            zuuluu = tangon.getFrequentlyWithoutFetchingLatest;
            report = zuuluu.bind(tangon)();
            oscard = report.reduce;
            tangon = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    michal = argBar;
                    tangon = michal.id;
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getScoreWithoutFetchingLatest;
                    michal = michal.bind(zuuluu)(tangon);
                    if(!(michal > entity)) { _fun00012_ip = 36; continue _fun00011 }
 33:
                    entity = michal;
 36:
                    return entity;
                }
            };
            zuuluu = 0;
            yankee = oscard.bind(report)(tangon, zuuluu);
            tangon = new Array(0);
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== romeon)) { _fun00010_ip = 202; continue _fun00009 }
 78:
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.USER;
            if(!(zuuluu !== romeon)) { _fun00010_ip = 185; continue _fun00009 }
 92:
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.GROUP_DM;
            if(!(zuuluu !== romeon)) { _fun00010_ip = 168; continue _fun00009 }
 106:
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.TEXT_CHANNEL;
            if(!(zuuluu !== romeon)) { _fun00010_ip = 151; continue _fun00009 }
 120:
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.VOICE_CHANNEL;
            if(!(zuuluu === romeon)) { _fun00010_ip = 217; continue _fun00009 }
 134:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot5;
                    entity = zuuluu instanceof entity;
                    if(!entity) { _fun00014_ip = 27; continue _fun00013 }
 17:
                    michal = zuuluu.isGuildVocal;
                    entity = michal.bind(zuuluu)();
 27:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00010_ip = 217; continue _fun00009;
 151:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    entity = _closure1_slot5;
                    entity = michal instanceof entity;
                    if(!entity) { _fun00016_ip = 33; continue _fun00015 }
 17:
                    tangon = _closure1_slot6;
                    zuuluu = michal.type;
                    michal = undefined;
                    entity = tangon.bind(michal)(zuuluu);
 33:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00010_ip = 217; continue _fun00009;
 168:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot5;
                    entity = zuuluu instanceof entity;
                    if(!entity) { _fun00018_ip = 27; continue _fun00017 }
 17:
                    michal = zuuluu.isMultiUserDM;
                    entity = michal.bind(zuuluu)();
 27:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00010_ip = 217; continue _fun00009;
 185:
            oscard = report.filter;
            zuuluu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot5;
                    entity = zuuluu instanceof entity;
                    if(!entity) { _fun00020_ip = 36; continue _fun00019 }
 17:
                    zuuluu = zuuluu.type;
                    michal = _closure1_slot16;
                    michal = michal.DM;
                    entity = zuuluu === michal;
 36:
                    return entity;
                }
            };
            tangon = oscard.bind(report)(zuuluu);
            _fun00010_ip = 217; continue _fun00009;
 202:
            zuuluu = report.filter;
            entity = function(argFoo) {
                michal = _closure1_slot8;
                entity = argFoo;
                entity = entity instanceof michal;
                return entity;
            };
            tangon = zuuluu.bind(report)(entity);
 217:
            entity = {};
            zuuluu = _closure1_slot18;
            option = undefined;
            offset = zuuluu.bind(option)(tangon);
            tangon = offset.bind(option)();
            zuuluu = tangon.done;
            golfie = 1;
            verify = tangon;
            oscard = undefined;
            report = undefined;
            tangon = undefined;
            if(zuuluu) { _fun00010_ip = 545; continue _fun00009 }
 257:
            output = verify.value;
            backup = output.id;
            foxtra = _closure1_slot11;
            zuuluu = foxtra.getScoreWithoutFetchingLatest;
            zuuluu = zuuluu.bind(foxtra)(backup);
            foxtra = _closure1_slot15;
            foxtra = foxtra.USER;
            if(!(romeon === foxtra)) { _fun00010_ip = 307; continue _fun00009 }
 296:
            foxtra = _closure1_slot7;
            foxtra = output instanceof foxtra;
            if(foxtra) { _fun00010_ip = 333; continue _fun00009 }
 307:
            foxtra = zuuluu / yankee;
            foxtra = golfie + foxtra;
            entity[backup] = foxtra;
            kiloes = oscard;
            backup = report;
            foxtra = tangon;
            _fun00010_ip = 518; continue _fun00009;
 333:
            result = output.type;
            sizing = _closure1_slot16;
            sizing = sizing.DM;
            if(!(result !== sizing)) { _fun00010_ip = 487; continue _fun00009 }
 355:
            result = output.type;
            sizing = _closure1_slot16;
            sizing = sizing.GROUP_DM;
            kiloes = oscard;
            backup = report;
            foxtra = tangon;
            if(!(result === sizing)) { _fun00010_ip = 518; continue _fun00009 }
 386:
            sizing = output.recipients;
            update = sizing.length;
            result = _closure1_slot18;
            sizing = output.recipients;
            echoed = result.bind(option)(sizing);
            source = echoed.bind(option)();
            sizing = source.done;
            result = source;
            kiloes = result;
            backup = update;
            foxtra = echoed;
            if(sizing) { _fun00010_ip = 518; continue _fun00009 }
 436:
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
            if(sizing) { _fun00010_ip = 518; continue _fun00009 }
 485:
            _fun00010_ip = 436; continue _fun00009;
 487:
            sizing = output.getRecipientId;
            sizing = sizing.bind(output)();
            zuuluu = zuuluu / yankee;
            zuuluu = golfie + zuuluu;
            entity[sizing] = zuuluu;
            kiloes = oscard;
            backup = report;
            foxtra = tangon;
 518:
            sizing = offset.bind(option)();
            zuuluu = sizing.done;
            oscard = kiloes;
            report = backup;
            tangon = foxtra;
            verify = sizing;
            if(!zuuluu) { _fun00010_ip = 257; continue _fun00009 }
 545:
            tangon = _closure1_slot18;
            report = _closure1_slot13;
            zuuluu = report.getFriendIDs;
            zuuluu = zuuluu.bind(report)();
            verify = tangon.bind(option)(zuuluu);
            tangon = verify.bind(option)();
            zuuluu = tangon.done;
            report = 0.2;
            oscard = null;
            if(zuuluu) { _fun00010_ip = 637; continue _fun00009 }
 592:
            offset = tangon.value;
            yankee = entity[offset];
            romeon = oscard != yankee;
            zuuluu = golfie;
            if(!romeon) { _fun00010_ip = 614; continue _fun00009 }
 611:
            zuuluu = yankee;
 614:
            zuuluu = zuuluu + report;
            entity[offset] = zuuluu;
            offset = verify.bind(option)();
            zuuluu = offset.done;
            tangon = offset;
            if(!zuuluu) { _fun00010_ip = 592; continue _fun00009 }
 637:
            zuuluu = _closure1_slot18;
            tangon = _closure1_slot10;
            michal = tangon.getDMUserIds;
            michal = michal.bind(tangon)();
            report = zuuluu.bind(option)(michal);
            zuuluu = report.bind(option)();
            michal = zuuluu.done;
            tangon = 0.1;
            if(michal) { _fun00010_ip = 727; continue _fun00009 }
 682:
            verify = zuuluu.value;
            offset = entity[verify];
            yankee = oscard != offset;
            michal = golfie;
            if(!yankee) { _fun00010_ip = 704; continue _fun00009 }
 701:
            michal = offset;
 704:
            michal = michal + tangon;
            entity[verify] = michal;
            verify = report.bind(option)();
            michal = verify.done;
            zuuluu = verify;
            if(!michal) { _fun00010_ip = 682; continue _fun00009 }
 727:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    verify = golfie.ChannelRecordBase;
    var _closure1_slot5 = verify;
    verify = golfie.isGuildSelectableChannelType;
    var _closure1_slot6 = verify;
    golfie = golfie.PrivateChannelRecord;
    var _closure1_slot7 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot9 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot11 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = golfie;
    golfie = 8;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot13 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot14 = golfie;
    golfie = 10;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.AutocompleterResultTypes;
    var _closure1_slot15 = golfie;
    golfie = 11;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ChannelTypes;
    var _closure1_slot16 = golfie;
    option = tangon.Object;
    golfie = option.freeze;
    tangon = {};
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot17 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar) { // Original name: Autocompleter
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = arguments[2];
                oscard = arguments[3];
                tangon = this;
                var _closure3_slot0 = tangon;
                entity = undefined;
                if(!(michal === entity)) { _fun00022_ip = 24; continue _fun00021 }
 21:
                michal = 100;
 24:
                if(!(oscard === entity)) { _fun00022_ip = 35; continue _fun00021 }
 28:
                oscard = _closure1_slot17;
 35:
                option = _closure1_slot3;
                golfie = _closure2_slot0;
                golfie = option.bind(entity)(tangon, golfie);
                golfie = '';
                tangon['query'] = golfie;
                report = _closure1_slot17;
                tangon['options'] = report;
                report = new Array(0);
                tangon['results'] = report;
                report = new Array(0);
                tangon['_userResults'] = report;
                report = new Array(0);
                tangon['_groupDMResults'] = report;
                report = new Array(0);
                tangon['_textChannelResults'] = report;
                report = new Array(0);
                tangon['_voiceChannelResults'] = report;
                report = new Array(0);
                tangon['_guildResults'] = report;
                report = new Array(0);
                tangon['_applicationResults'] = report;
                report = new Array(0);
                tangon['_linkResults'] = report;
                report = new Array(0);
                tangon['_inAppNavigations'] = report;
                report = null;
                tangon['_userBlacklist'] = report;
                report = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.results;
                        report = _closure3_slot0;
                        tangon = report._include;
                        michal = _closure1_slot15;
                        michal = michal.USER;
                        michal = tangon.bind(report)(michal);
                        if(!michal) { _fun00024_ip = 277; continue _fun00023 }
 46:
                        tangon = _closure3_slot0;
                        michal = new Array(0);
                        tangon['_userResults'] = michal;
                        michal = _closure1_slot18;
                        oscard = undefined;
                        report = michal.bind(oscard)(zuuluu);
                        zuuluu = report.bind(oscard)();
                        michal = zuuluu.done;
                        tangon = null;
                        if(michal) { _fun00024_ip = 216; continue _fun00023 }
 88:
                        michal = zuuluu.value;
                        verify = michal.id;
                        romeon = michal.score;
                        yankee = michal.comparator;
                        option = _closure1_slot14;
                        michal = option.getUser;
                        offset = michal.bind(option)(verify);
                        if(!(tangon != offset)) { _fun00024_ip = 201; continue _fun00023 }
 129:
                        michal = _closure3_slot0;
                        verify = michal._userResults;
                        option = verify.push;
                        michal = {};
                        foxtra = _closure1_slot15;
                        foxtra = foxtra.USER;
                        michal['type'] = foxtra;
                        michal['record'] = offset;
                        offset = _closure1_slot20;
                        offset = offset.bind(oscard)(romeon);
                        michal['score'] = offset;
                        romeon = tangon != yankee;
                        offset = undefined;
                        if(!romeon) { _fun00024_ip = 191; continue _fun00023 }
 188:
                        offset = yankee;
 191:
                        michal['comparator'] = offset;
                        michal = option.bind(verify)(michal);
 201:
                        option = report.bind(oscard)();
                        michal = option.done;
                        zuuluu = option;
                        if(!michal) { _fun00024_ip = 88; continue _fun00023 }
 216:
                        michal = _closure3_slot0;
                        zuuluu = michal._userResults;
                        zuuluu = zuuluu.length;
                        michal = michal._limit;
                        if(!(zuuluu > michal)) { _fun00024_ip = 263; continue _fun00023 }
 241:
                        michal = _closure3_slot0;
                        zuuluu = michal._userResults;
                        michal = michal._limit;
                        zuuluu['length'] = michal;
 263:
                        michal = _closure3_slot0;
                        entity = michal.updateAllResults;
                        entity = entity.bind(michal)();
 277:
                        entity = undefined;
                        return entity;
                    }
                };
                tangon['parseUserResults'] = report;
                zuuluu = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    report = _closure3_slot0;
                    michal = report._asyncTimeout;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 12;
                    michal = golfie[michal];
                    zuuluu = oscard.bind(entity)(michal);
                    offset = report._userResults;
                    michal = new Array(0);
                    verify = 0;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._groupDMResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._textChannelResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._voiceChannelResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._guildResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._linkResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._inAppNavigations;
                    yankee = michal;
                    tangon = arraySpread(yankee, offset, verify);
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.uniqBy;
                    michal = function(argFoo) {
                        entity = argFoo;
                        report = entity.type;
                        entity = entity.record;
                        tangon = entity.id;
                        entity = global;
                        entity = entity.HermesInternal;
                        zuuluu = entity.concat;
                        michal = '';
                        entity = '-';
                        entity = zuuluu.bind(michal)(report, entity, tangon);
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.sort;
                    michal = 13;
                    michal = golfie[michal];
                    michal = oscard.bind(entity)(michal);
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.value;
                    michal = michal.bind(zuuluu)();
                    report['results'] = michal;
                    tangon = report.onResultsChange;
                    zuuluu = report.results;
                    michal = report.query;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                tangon['updateAllResults'] = zuuluu;
                zuuluu = argFoo;
                tangon['onResultsChange'] = zuuluu;
                report = tangon.setOptions;
                zuuluu = true;
                zuuluu = report.bind(tangon)(oscard, zuuluu);
                tangon['_limit'] = michal;
                michal = tangon.createSearchContext;
                michal = michal.bind(tangon)();
                zuuluu = tangon.setResultTypes;
                michal = argBar;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'createSearchContext';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = this;
                zuuluu = michal.userSearchContext;
                entity = null;
                if(!(entity == zuuluu)) { _fun00026_ip = 70; continue _fun00025 }
 15:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 14;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.getSearchContext;
                zuuluu = michal.parseUserResults;
                entity = michal._limit;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['userSearchContext'] = entity;
 70:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(20);
        michal[0] = entity;
        entity = {};
        oscard = 'setLimit';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tangon = argFoo;
                entity = this;
                zuuluu = entity.userSearchContext;
                entity['_limit'] = tangon;
                michal = null;
                if(!(michal != zuuluu)) { _fun00028_ip = 35; continue _fun00027 }
 24:
                michal = zuuluu.setLimit;
                michal = michal.bind(zuuluu)(tangon);
 35:
                michal = entity._userResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 74; continue _fun00027 }
 56:
                zuuluu = entity._userResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 74:
                michal = entity._groupDMResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 113; continue _fun00027 }
 95:
                zuuluu = entity._groupDMResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 113:
                michal = entity._textChannelResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 152; continue _fun00027 }
 134:
                zuuluu = entity._textChannelResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 152:
                michal = entity._voiceChannelResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 191; continue _fun00027 }
 173:
                zuuluu = entity._voiceChannelResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 191:
                michal = entity._guildResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 230; continue _fun00027 }
 212:
                zuuluu = entity._guildResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 230:
                michal = entity._applicationResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 269; continue _fun00027 }
 251:
                zuuluu = entity._applicationResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 269:
                michal = entity._linkResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 308; continue _fun00027 }
 290:
                zuuluu = entity._linkResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 308:
                michal = entity._inAppNavigations;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00028_ip = 347; continue _fun00027 }
 329:
                michal = entity._inAppNavigations;
                entity = entity._limit;
                michal['length'] = entity;
 347:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'setResultTypes';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = argFoo;
                michal = this;
                entity = null;
                zuuluu = entity != report;
                if(!zuuluu) { _fun00030_ip = 46; continue _fun00029 }
 15:
                zuuluu = global;
                zuuluu = zuuluu.Set;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                golfie = tangon;
                oscard = report;
                zuuluu = new golfie[zuuluu](oscard, report);
                entity = zuuluu instanceof Object ? zuuluu : tangon;
 46:
                michal['resultTypes'] = entity;
                tangon = michal._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.USER;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00030_ip = 85; continue _fun00029 }
 79:
                zuuluu = new Array(0);
                _fun00030_ip = 91; continue _fun00029;
 85:
                zuuluu = michal._userResults;
 91:
                michal['_userResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.GROUP_DM;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00030_ip = 127; continue _fun00029 }
 121:
                zuuluu = new Array(0);
                _fun00030_ip = 133; continue _fun00029;
 127:
                zuuluu = michal._groupDMResults;
 133:
                michal['_groupDMResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.TEXT_CHANNEL;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00030_ip = 169; continue _fun00029 }
 163:
                zuuluu = new Array(0);
                _fun00030_ip = 175; continue _fun00029;
 169:
                zuuluu = michal._textChannelResults;
 175:
                michal['_textChannelResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.VOICE_CHANNEL;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00030_ip = 211; continue _fun00029 }
 205:
                zuuluu = new Array(0);
                _fun00030_ip = 217; continue _fun00029;
 211:
                zuuluu = michal._voiceChannelResults;
 217:
                michal['_voiceChannelResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.GUILD;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00030_ip = 253; continue _fun00029 }
 247:
                zuuluu = new Array(0);
                _fun00030_ip = 259; continue _fun00029;
 253:
                zuuluu = michal._guildResults;
 259:
                michal['_guildResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.APPLICATION;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00030_ip = 295; continue _fun00029 }
 289:
                zuuluu = new Array(0);
                _fun00030_ip = 301; continue _fun00029;
 295:
                zuuluu = michal._applicationResults;
 301:
                michal['_applicationResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.LINK;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00030_ip = 337; continue _fun00029 }
 331:
                zuuluu = new Array(0);
                _fun00030_ip = 343; continue _fun00029;
 337:
                zuuluu = michal._linkResults;
 343:
                michal['_linkResults'] = zuuluu;
                zuuluu = michal._include;
                entity = _closure1_slot15;
                entity = entity.IN_APP_NAVIGATION;
                entity = zuuluu.bind(michal)(entity);
                if(entity) { _fun00030_ip = 379; continue _fun00029 }
 373:
                entity = new Array(0);
                _fun00030_ip = 385; continue _fun00029;
 379:
                entity = michal._inAppNavigations;
 385:
                michal['_inAppNavigations'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_include';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = this;
                zuuluu = michal.resultTypes;
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00032_ip = 37; continue _fun00031 }
 18:
                tangon = michal.resultTypes;
                zuuluu = tangon.has;
                michal = argFoo;
                entity = zuuluu.bind(tangon)(michal);
 37:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_isAsyncSearch';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu._include;
            entity = _closure1_slot15;
            entity = entity.USER;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'setOptions';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscard = argFoo;
                report = arguments[1];
                zuuluu = this;
                entity = undefined;
                if(!(report === entity)) { _fun00034_ip = 19; continue _fun00033 }
 17:
                report = false;
 19:
                tangon = oscard;
                if(!report) { _fun00034_ip = 52; continue _fun00033 }
 25:
                report = {};
                option = zuuluu.options;
                verify = report;
                golfie = copyDataProperties(verify, option);
                verify = report;
                option = oscard;
                oscard = copyDataProperties(verify, option);
                tangon = report;
 52:
                zuuluu['options'] = tangon;
                tangon = zuuluu.options;
                report = tangon.blacklist;
                tangon = null;
                if(!(tangon == report)) { _fun00034_ip = 83; continue _fun00033 }
 75:
                zuuluu['_userBlacklist'] = tangon;
                _fun00034_ip = 148; continue _fun00033;
 83:
                tangon = global;
                oscard = tangon.Array;
                report = oscard.from;
                tangon = zuuluu.options;
                tangon = tangon.blacklist;
                oscard = report.bind(oscard)(tangon);
                report = oscard.map;
                tangon = function(argFoo) {
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        report = argFoo;
                        entity = report.startsWith;
                        tangon = 'user:';
                        michal = entity.bind(report)(tangon);
                        zuuluu = '';
                        entity = zuuluu;
                        if(!michal) { _fun00036_ip = 41; continue _fun00035 }
 30:
                        michal = report.replace;
                        entity = michal.bind(report)(tangon, zuuluu);
 41:
                        return entity;
                    }
                };
                report = report.bind(oscard)(tangon);
                tangon = report.filter;
                michal = function(argFoo) {
                    michal = '';
                    entity = argFoo;
                    entity = michal !== entity;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                zuuluu['_userBlacklist'] = michal;
 148:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'search';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tangon = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = tangon;
                zuuluu = argBar;
                var _closure3_slot2 = zuuluu;
                michal['query'] = tangon;
                zuuluu = tangon.trim;
                tangon = zuuluu.bind(tangon)();
                zuuluu = '';
                if(!(zuuluu !== tangon)) { _fun00038_ip = 142; continue _fun00037 }
 47:
                zuuluu = michal.options;
                zuuluu = zuuluu.frecencyBoosters;
                if(zuuluu) { _fun00038_ip = 81; continue _fun00037 }
 61:
                zuuluu = global;
                tangon = zuuluu.Promise;
                zuuluu = tangon.resolve;
                tangon = zuuluu.bind(tangon)();
                _fun00038_ip = 122; continue _fun00037;
 81:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 15;
                report = report[zuuluu];
                zuuluu = undefined;
                zuuluu = oscard.bind(zuuluu)(report);
                report = zuuluu.FrecencyUserSettingsActionCreators;
                zuuluu = report.loadIfNecessary;
                tangon = zuuluu.bind(report)();
 122:
                zuuluu = tangon.finally;
                entity = function() {
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        oscard = zuuluu.queryUsers;
                        report = _closure3_slot1;
                        tangon = _closure3_slot2;
                        entity = zuuluu._limit;
                        entity = oscard.bind(zuuluu)(report, tangon, entity);
                        tangon = zuuluu.queryGroupDMs;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_groupDMResults'] = entity;
                        tangon = zuuluu.queryTextChannels;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_textChannelResults'] = entity;
                        tangon = zuuluu.queryVoiceChannels;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_voiceChannelResults'] = entity;
                        tangon = zuuluu.queryGuilds;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_guildResults'] = entity;
                        tangon = zuuluu.queryApplications;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_applicationResults'] = entity;
                        tangon = zuuluu.queryInAppNavigations;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_inAppNavigations'] = entity;
                        entity = zuuluu._isAsyncSearch;
                        entity = entity.bind(zuuluu)();
                        if(entity) { _fun00040_ip = 213; continue _fun00039 }
 197:
                        zuuluu = _closure3_slot0;
                        entity = zuuluu.updateAllResults;
                        entity = entity.bind(zuuluu)();
                        _fun00040_ip = 268; continue _fun00039;
 213:
                        entity = global;
                        tangon = entity.clearTimeout;
                        michal = _closure3_slot0;
                        zuuluu = michal._asyncTimeout;
                        report = undefined;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = entity.setTimeout;
                        zuuluu = michal.updateAllResults;
                        entity = 300;
                        entity = tangon.bind(report)(zuuluu, entity);
                        michal['_asyncTimeout'] = entity;
 268:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                entity = undefined;
                return entity;
 142:
                entity = michal.clear;
                entity = entity.bind(michal)();
                entity = michal.updateAllResults;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                michal = this;
                zuuluu = michal.userSearchContext;
                entity = null;
                if(!(entity != zuuluu)) { _fun00042_ip = 25; continue _fun00041 }
 15:
                entity = zuuluu.clearQuery;
                entity = entity.bind(zuuluu)();
 25:
                entity = new Array(0);
                michal['results'] = entity;
                entity = new Array(0);
                michal['_userResults'] = entity;
                entity = new Array(0);
                michal['_groupDMResults'] = entity;
                entity = new Array(0);
                michal['_textChannelResults'] = entity;
                entity = new Array(0);
                michal['_voiceChannelResults'] = entity;
                entity = new Array(0);
                michal['_guildResults'] = entity;
                entity = new Array(0);
                michal['_applicationResults'] = entity;
                entity = new Array(0);
                michal['_linkResults'] = entity;
                entity = new Array(0);
                michal['_inAppNavigations'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'clean';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = michal.destroy;
            entity = entity.bind(michal)();
            entity = '';
            michal['query'] = entity;
            entity = michal.updateAllResults;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'pause';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                entity = this;
                michal = entity.userSearchContext;
                tangon = null;
                entity = tangon == michal;
                if(entity) { _fun00044_ip = 28; continue _fun00043 }
 18:
                zuuluu = michal.unsubscribe;
                entity = tangon == zuuluu;
 28:
                if(entity) { _fun00044_ip = 41; continue _fun00043 }
 31:
                entity = michal.unsubscribe;
                entity = entity.bind(michal)();
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'resume';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                entity = this;
                michal = entity.userSearchContext;
                tangon = null;
                entity = tangon == michal;
                if(entity) { _fun00046_ip = 28; continue _fun00045 }
 18:
                zuuluu = michal.subscribe;
                entity = tangon == zuuluu;
 28:
                if(entity) { _fun00046_ip = 41; continue _fun00045 }
 31:
                entity = michal.subscribe;
                entity = entity.bind(michal)();
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'destroy';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                michal = this;
                tangon = michal.userSearchContext;
                entity = null;
                if(!(entity != tangon)) { _fun00048_ip = 31; continue _fun00047 }
 15:
                zuuluu = tangon.destroy;
                zuuluu = zuuluu.bind(tangon)();
                michal['userSearchContext'] = entity;
 31:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'queryTextChannels';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                report = this;
                tangon = report._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.TEXT_CHANNEL;
                zuuluu = tangon.bind(report)(zuuluu);
                if(zuuluu) { _fun00050_ip = 38; continue _fun00049 }
 32:
                zuuluu = new Array(0);
                return zuuluu;
 38:
                golfie = _closure1_slot21;
                zuuluu = _closure1_slot15;
                oscard = zuuluu.TEXT_CHANNEL;
                tangon = report.options;
                zuuluu = undefined;
                tangon = golfie.bind(zuuluu)(oscard, tangon);
                report = report.options;
                report = report.blacklist;
                var _closure3_slot0 = report;
                oscard = null;
                golfie = oscard != report;
                report = undefined;
                if(!golfie) { _fun00050_ip = 96; continue _fun00049 }
 91:
                report = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    entity = 'channel:';
                    entity = tangon.bind(entity)(report);
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                michal = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 16;
                entity = golfie[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryChannels;
                entity = {};
                golfie = argFoo;
                entity['query'] = golfie;
                entity['guildId'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                entity['filter'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'queryVoiceChannels';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                entity = this;
                zuuluu = entity._include;
                michal = _closure1_slot15;
                michal = michal.VOICE_CHANNEL;
                michal = zuuluu.bind(entity)(michal);
                if(michal) { _fun00052_ip = 36; continue _fun00051 }
 30:
                michal = new Array(0);
                return michal;
 36:
                michal = entity.options;
                oscard = michal.voiceChannelGuildFilter;
                tangon = _closure1_slot21;
                michal = _closure1_slot15;
                michal = michal.VOICE_CHANNEL;
                entity = entity.options;
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(michal, entity);
                michal = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 16;
                entity = golfie[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryChannels;
                entity = {};
                golfie = argFoo;
                entity['query'] = golfie;
                entity['guildId'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                report = _closure1_slot12;
                entity['type'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'queryGuilds';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                report = this;
                tangon = report._include;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.GUILD;
                zuuluu = tangon.bind(report)(zuuluu);
                if(zuuluu) { _fun00054_ip = 38; continue _fun00053 }
 32:
                zuuluu = new Array(0);
                return zuuluu;
 38:
                golfie = _closure1_slot21;
                zuuluu = _closure1_slot15;
                oscard = zuuluu.GUILD;
                tangon = report.options;
                zuuluu = undefined;
                tangon = golfie.bind(zuuluu)(oscard, tangon);
                report = report.options;
                oscard = report.blacklist;
                var _closure3_slot0 = oscard;
                report = null;
                oscard = report != oscard;
                report = undefined;
                if(!oscard) { _fun00054_ip = 96; continue _fun00053 }
 91:
                report = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    entity = 'guild:';
                    entity = tangon.bind(entity)(report);
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                michal = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 16;
                entity = oscard[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryGuilds;
                entity = {};
                oscard = argFoo;
                entity['query'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                entity['filter'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'queryUsers';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                oscard = argFoo;
                offset = argBar;
                entity = this;
                report = entity.userSearchContext;
                michal = null;
                if(!(michal != report)) { _fun00056_ip = 168; continue _fun00055 }
 24:
                zuuluu = entity._include;
                michal = _closure1_slot15;
                michal = michal.USER;
                michal = zuuluu.bind(entity)(michal);
                if(!michal) { _fun00056_ip = 168; continue _fun00055 }
 51:
                michal = entity.options;
                tangon = michal.userFilters;
                verify = undefined;
                if(!(verify !== offset)) { _fun00056_ip = 104; continue _fun00055 }
 68:
                zuuluu = _closure1_slot1;
                option = _closure1_slot2;
                michal = 17;
                michal = option[michal];
                option = zuuluu.bind(verify)(michal);
                zuuluu = option.requestMembers;
                michal = 100;
                michal = zuuluu.bind(option)(offset, oscard, michal);
 104:
                zuuluu = report.setLimit;
                michal = argBaz;
                michal = zuuluu.bind(report)(michal);
                zuuluu = report.setQuery;
                romeon = entity._userBlacklist;
                option = _closure1_slot21;
                golfie = _closure1_slot15;
                golfie = golfie.USER;
                entity = entity.options;
                yankee = option.bind(verify)(golfie, entity);
                kiloes = report;
                backup = oscard;
                foxtra = tangon;
                entity = kiloes[zuuluu](backup, foxtra, romeon, yankee, offset);
 168:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[15] = entity;
        entity = {};
        oscard = 'queryGroupDMs';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                zuuluu = this;
                report = zuuluu._include;
                tangon = _closure1_slot15;
                tangon = tangon.GROUP_DM;
                tangon = report.bind(zuuluu)(tangon);
                if(tangon) { _fun00058_ip = 38; continue _fun00057 }
 32:
                tangon = new Array(0);
                return tangon;
 38:
                tangon = zuuluu.options;
                oscard = tangon.blacklist;
                var _closure3_slot0 = oscard;
                golfie = _closure1_slot21;
                tangon = _closure1_slot15;
                report = tangon.GROUP_DM;
                tangon = zuuluu.options;
                zuuluu = undefined;
                tangon = golfie.bind(zuuluu)(report, tangon);
                report = null;
                oscard = report != oscard;
                report = undefined;
                if(!oscard) { _fun00058_ip = 96; continue _fun00057 }
 91:
                report = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    entity = 'channel:';
                    entity = tangon.bind(entity)(report);
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                michal = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 16;
                entity = oscard[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryGroupDMs;
                entity = {};
                oscard = argFoo;
                entity['query'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                entity['filter'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[16] = entity;
        entity = {};
        oscard = 'queryApplications';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                tangon = this;
                zuuluu = tangon._include;
                entity = _closure1_slot15;
                entity = entity.APPLICATION;
                entity = zuuluu.bind(tangon)(entity);
                if(entity) { _fun00060_ip = 36; continue _fun00059 }
 30:
                entity = new Array(0);
                _fun00060_ip = 93; continue _fun00059;
 36:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 16;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.queryApplications;
                michal = {};
                report = argFoo;
                michal['query'] = report;
                report = argBar;
                michal['limit'] = report;
                report = true;
                michal['fuzzy'] = report;
                entity = zuuluu.bind(tangon)(michal);
 93:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[17] = entity;
        entity = {};
        oscard = 'queryLink';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                foxtra = this;
                option = argFoo;
                report = undefined;
                verify = undefined;
                offset = undefined;
                zuuluu = undefined;
                michal = undefined;
                oscard = undefined;
                golfie = undefined;
                entity = undefined;
                romeon = foxtra._include;
                yankee = _closure1_slot15;
                yankee = yankee.LINK;
                yankee = romeon.bind(foxtra)(yankee);
                if(yankee) { _fun00062_ip = 55; continue _fun00061 }
 49:
                yankee = new Array(0);
                return yankee;
 55:
                romeon = _closure1_slot1;
                foxtra = _closure1_slot2;
                yankee = 18;
                yankee = foxtra[yankee];
                romeon = romeon.bind(report)(yankee);
                yankee = romeon.sanitizeUrl;
                offset = yankee.bind(romeon)(option);
 86: // try_start_0
                option = global;
                romeon = option.URL;
                backup = offset;
                yankee = romeon.prototype;
                yankee = Object.create(yankee, {constructor: {value: romeon}});
                kiloes = yankee;
                offset = new kiloes[romeon](backup, foxtra);
                verify = offset instanceof Object ? offset : yankee;
 117: // try_end0
                zuuluu = verify;
                michal = verify.pathname;
                verify = verify.hostname;
                oscard = verify;
                yankee = '';
                if(!(report !== verify)) { _fun00062_ip = 146; continue _fun00061 }
 143:
                yankee = oscard;
 146:
                golfie = zuuluu.host;
                offset = _closure1_slot1;
                verify = _closure1_slot2;
                oscard = 19;
                verify = verify[oscard];
                offset = offset.bind(report)(verify);
                verify = offset.isDiscordHostname;
                verify = verify.bind(offset)(yankee);
                zuuluu = verify;
                if(verify) { _fun00062_ip = 210; continue _fun00061 }
 189:
                option = option.window;
                option = option.location;
                option = option.host;
                zuuluu = option === golfie;
 210:
                entity = zuuluu;
                golfie = michal;
                zuuluu = null;
                if(!(zuuluu !== golfie)) { _fun00062_ip = 259; continue _fun00061 }
 222:
                if(!entity) { _fun00062_ip = 259; continue _fun00061 }
 225:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot2;
                entity = entity[oscard];
                report = zuuluu.bind(report)(entity);
                zuuluu = report.isAppRoute;
                entity = michal;
                entity = zuuluu.bind(report)(entity);
                if(entity) { _fun00062_ip = 265; continue _fun00061 }
 259:
                entity = new Array(0);
                _fun00062_ip = 322; continue _fun00061;
 265:
                zuuluu = {};
                report = _closure1_slot15;
                report = report.LINK;
                zuuluu['type'] = report;
                report = _closure1_slot9;
                tangon = report.fromPath;
                michal = tangon.bind(report)(michal);
                zuuluu['record'] = michal;
                michal = 1;
                zuuluu['score'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 322:
                return entity;
 324: // catch_target0
                CatchBlockStart(arg_register=0);
                entity = new Array(0);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[18] = entity;
        entity = {};
        oscard = 'queryInAppNavigations';
        entity['key'] = oscard;
        report = function(argFoo, argBar) { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                tangon = this;
                zuuluu = tangon._include;
                entity = _closure1_slot15;
                entity = entity.IN_APP_NAVIGATION;
                entity = zuuluu.bind(tangon)(entity);
                if(entity) { _fun00064_ip = 36; continue _fun00063 }
 30:
                entity = new Array(0);
                _fun00064_ip = 93; continue _fun00063;
 36:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 16;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.queryInAppNavigations;
                michal = {};
                report = argFoo;
                michal['query'] = report;
                report = argBar;
                michal['limit'] = report;
                report = true;
                michal['fuzzy'] = report;
                entity = zuuluu.bind(tangon)(michal);
 93:
                return entity;
            }
        };
        entity['value'] = report;
        michal[19] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/autocompleter/Autocompleter.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();