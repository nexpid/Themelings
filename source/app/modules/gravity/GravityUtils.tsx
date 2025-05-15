// app/modules/gravity/GravityUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
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
            verify = _closure1_slot13;
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
            golfie = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
    var _closure1_slot13 = entity;
    tangon = function() { // Original name: hydrateItems
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = tangon;
    entity = function() { // Original name: _hydrateItems
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    verify = argBar;
                    option = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 308; continue _fun00007 }
 21:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    golfie = _closure1_slot7;
                    report = golfie.getHydratedItems;
                    report = report.bind(golfie)();
                    _closure4_slot0 = report;
                    report = oscard.slice;
                    golfie = report.bind(oscard)(verify, option);
                    report = golfie.length;
                    romeon = 0;
                    if(!(romeon !== report)) { _fun00008_ip = 302; continue _fun00007 }
 73:
                    oscard = golfie.filter;
                    report = function(argFoo) {
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.id;
                        michal = michal[entity];
                        entity = null;
                        entity = entity == michal;
                        return entity;
                    };
                    foxtra = oscard.bind(golfie)(report);
                    oscard = foxtra.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 7;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.GravityItemTypes;
                        entity = entity.MESSAGE;
                        entity = michal === entity;
                        return entity;
                    };
                    golfie = oscard.bind(foxtra)(report);
                    oscard = golfie.map;
                    report = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.data;
                        zuuluu = zuuluu.channel_id;
                        entity['channel_id'] = zuuluu;
                        michal = michal.data;
                        michal = michal.message_id;
                        entity['message_id'] = michal;
                        return entity;
                    };
                    output = oscard.bind(golfie)(report);
                    oscard = foxtra.map;
                    report = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = tangon.type;
                            report = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 7;
                            entity = michal[entity];
                            michal = undefined;
                            entity = report.bind(michal)(entity);
                            entity = entity.GravityItemTypes;
                            entity = entity.MESSAGE;
                            if(!(zuuluu !== entity)) { _fun00010_ip = 55; continue _fun00009 }
 49:
                            entity = new Array(0);
                            return entity;
 55:
                            entity = new Array(0);
                            zuuluu = tangon.data;
                            oscard = zuuluu.message_context;
                            zuuluu = null;
                            golfie = zuuluu == oscard;
                            report = undefined;
                            if(golfie) { _fun00010_ip = 87; continue _fun00009 }
 81:
                            report = oscard.reply_message_id;
 87:
                            if(!(zuuluu != report)) { _fun00010_ip = 139; continue _fun00009 }
 91:
                            oscard = entity.push;
                            report = {};
                            golfie = tangon.data;
                            golfie = golfie.channel_id;
                            report['channel_id'] = golfie;
                            golfie = tangon.data;
                            golfie = golfie.message_context;
                            golfie = golfie.reply_message_id;
                            report['message_id'] = golfie;
                            report = oscard.bind(entity)(report);
 139:
                            report = tangon.data;
                            oscard = report.message_context;
                            golfie = zuuluu == oscard;
                            report = undefined;
                            if(golfie) { _fun00010_ip = 165; continue _fun00009 }
 159:
                            report = oscard.before_message_id;
 165:
                            if(!(zuuluu != report)) { _fun00010_ip = 217; continue _fun00009 }
 169:
                            oscard = entity.push;
                            report = {};
                            golfie = tangon.data;
                            golfie = golfie.channel_id;
                            report['channel_id'] = golfie;
                            golfie = tangon.data;
                            golfie = golfie.message_context;
                            golfie = golfie.before_message_id;
                            report['message_id'] = golfie;
                            report = oscard.bind(entity)(report);
 217:
                            report = tangon.data;
                            report = report.message_context;
                            oscard = zuuluu == report;
                            michal = undefined;
                            if(oscard) { _fun00010_ip = 243; continue _fun00009 }
 237:
                            michal = report.after_message_id;
 243:
                            if(!(zuuluu != michal)) { _fun00010_ip = 295; continue _fun00009 }
 247:
                            zuuluu = entity.push;
                            michal = {};
                            report = tangon.data;
                            report = report.channel_id;
                            michal['channel_id'] = report;
                            tangon = tangon.data;
                            tangon = tangon.message_context;
                            tangon = tangon.after_message_id;
                            michal['message_id'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
 295:
                            return entity;
                        }
                    };
                    oscard = oscard.bind(foxtra)(report);
                    report = oscard.flat;
                    golfie = report.bind(oscard)();
                    oscard = golfie.filter;
                    report = global;
                    report = report.Boolean;
                    yankee = oscard.bind(golfie)(report);
                    oscard = foxtra.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 7;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.GravityItemTypes;
                        entity = entity.SUMMARY;
                        entity = michal === entity;
                        return entity;
                    };
                    golfie = oscard.bind(foxtra)(report);
                    oscard = golfie.map;
                    report = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.data;
                        zuuluu = zuuluu.guild_id;
                        entity['guild_id'] = zuuluu;
                        zuuluu = michal.data;
                        zuuluu = zuuluu.channel_id;
                        entity['channel_id'] = zuuluu;
                        michal = michal.data;
                        michal = michal.summary_id;
                        entity['summary_id'] = michal;
                        return entity;
                    };
                    golfie = oscard.bind(golfie)(report);
                    oscard = foxtra.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 7;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.GravityItemTypes;
                        entity = entity.ACTIVITY;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = oscard.bind(foxtra)(report);
                    report = oscard.map;
                    tangon = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.data;
                        zuuluu = zuuluu.user_id;
                        entity['user_id'] = zuuluu;
                        michal = michal.data;
                        michal = michal.content_id;
                        entity['content_id'] = michal;
                        return entity;
                    };
                    oscard = report.bind(oscard)(tangon);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 8;
                    michal = report[michal];
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.fetchHydrated;
                    michal = new Array(0);
                    result = michal;
                    sizing = 0;
                    sizing = arraySpread(result, output, sizing);
                    result = michal;
                    output = yankee;
                    offset = arraySpread(result, output, sizing);
                    echoed = report;
                    result = michal;
                    output = golfie;
                    sizing = oscard;
                    kiloes = verify;
                    backup = option;
                    michal = echoed[tangon](result, output, sizing, kiloes, backup, foxtra);
                    SaveGenerator(address=296);
 294:
                    return michal;
 296:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 305; continue _fun00007 }
 302:
                    return zuuluu;
 305:
                    return michal;
 308:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _hydrateNextPage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 137; continue _fun00011 }
 10:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getUnreadDisplayItems;
                    offset = zuuluu.bind(tangon)();
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getReadDisplayItems;
                    golfie = zuuluu.bind(tangon)();
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getNextIndexToHydrate;
                    oscard = zuuluu.bind(tangon)();
                    report = _closure1_slot14;
                    tangon = new Array(0);
                    verify = 0;
                    yankee = tangon;
                    verify = arraySpread(yankee, offset, verify);
                    yankee = tangon;
                    offset = golfie;
                    zuuluu = arraySpread(yankee, offset, verify);
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = golfie.bind(zuuluu)(michal);
                    michal = michal.ICYMI_PAGE_SIZE;
                    michal = oscard + michal;
                    michal = report.bind(zuuluu)(tangon, oscard, michal);
                    SaveGenerator(address=125);
 123:
                    return michal;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 134; continue _fun00011 }
 131:
                    return zuuluu;
 134:
                    return michal;
 137:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: countReactions
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.reactions;
            oscard = null;
            tangon = oscard != entity;
            report = 0;
            entity = 0;
            if(!tangon) { _fun00014_ip = 91; continue _fun00013 }
 24:
            tangon = zuuluu.reactions;
            if(!(oscard == tangon)) { _fun00014_ip = 40; continue _fun00013 }
 34:
            oscard = new Array(0);
            _fun00014_ip = 46; continue _fun00013;
 40:
            oscard = zuuluu.reactions;
 46:
            tangon = oscard.map;
            zuuluu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    entity = tangon.count_details;
                    report = null;
                    michal = report == entity;
                    entity = 0;
                    if(michal) { _fun00016_ip = 72; continue _fun00015 }
 20:
                    michal = tangon.count_details;
                    oscard = michal.burst;
                    golfie = report != oscard;
                    michal = 0;
                    if(!golfie) { _fun00016_ip = 44; continue _fun00015 }
 41:
                    michal = oscard;
 44:
                    tangon = tangon.count_details;
                    tangon = tangon.normal;
                    report = report != tangon;
                    zuuluu = 0;
                    if(!report) { _fun00016_ip = 68; continue _fun00015 }
 65:
                    zuuluu = tangon;
 68:
                    entity = michal + zuuluu;
 72:
                    return entity;
                }
            };
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.length;
            zuuluu = zuuluu > report;
            entity = 0;
            if(!zuuluu) { _fun00014_ip = 91; continue _fun00013 }
 75:
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                michal = argFoo;
                entity = argBar;
                entity = michal + entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 91:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    foxtra = 0;
    report = option[foxtra];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    romeon = 1;
    report = option[romeon];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    yankee = 2;
    report = option[yankee];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    offset = 3;
    report = option[offset];
    report = oscard.bind(entity)(report);
    var _closure1_slot6 = report;
    verify = 4;
    report = option[verify];
    report = oscard.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.ChannelTypes;
    var _closure1_slot9 = oscard;
    report = report.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot10 = report;
    report = {};
    report['UNKNOWN'] = foxtra;
    oscard = 'UNKNOWN';
    report[foxtra] = oscard;
    report['DEFAULT'] = romeon;
    oscard = 'DEFAULT';
    report[romeon] = oscard;
    report['MORE'] = yankee;
    oscard = 'MORE';
    report[yankee] = oscard;
    report['LESS'] = offset;
    oscard = 'LESS';
    report[offset] = oscard;
    report['MUTED'] = verify;
    oscard = 'MUTED';
    report[verify] = oscard;
    var _closure1_slot11 = report;
    oscard = 16;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/gravity/GravityUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ICYMICustomScore'] = report;
    report = function(argFoo, argBar) { // Original name: isChannelCustomScoreEligible
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            michal = !entity;
            if(michal) { _fun00018_ip = 34; continue _fun00017 }
 12:
            zuuluu = tangon.type;
            entity = _closure1_slot9;
            entity = entity.GUILD_FORUM;
            michal = zuuluu !== entity;
 34:
            entity = !michal;
            if(!michal) { _fun00018_ip = 87; continue _fun00017 }
 40:
            report = tangon.type;
            michal = _closure1_slot9;
            michal = michal.GUILD_ANNOUNCEMENT;
            michal = report === michal;
            if(michal) { _fun00018_ip = 84; continue _fun00017 }
 65:
            tangon = tangon.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.GUILD_TEXT;
            michal = tangon === zuuluu;
 84:
            entity = michal;
 87:
            return entity;
        }
    };
    zuuluu['isChannelCustomScoreEligible'] = report;
    report = function(argFoo) { // Original name: numberToCustomScore
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            entity = -1.5;
            if(!(!(michal < entity))) { _fun00020_ip = 72; continue _fun00019 }
 17:
            entity = 0;
            if(!(!(michal < entity))) { _fun00020_ip = 57; continue _fun00019 }
 23:
            if(!(!(michal > entity))) { _fun00020_ip = 42; continue _fun00019 }
 27:
            entity = _closure1_slot11;
            entity = entity.DEFAULT;
            _fun00020_ip = 55; continue _fun00019;
 42:
            michal = _closure1_slot11;
            entity = michal.MORE;
 55:
            _fun00020_ip = 70; continue _fun00019;
 57:
            michal = _closure1_slot11;
            entity = michal.LESS;
 70:
            _fun00020_ip = 85; continue _fun00019;
 72:
            michal = _closure1_slot11;
            entity = michal.MUTED;
 85:
            return entity;
        }
    };
    zuuluu['numberToCustomScore'] = report;
    report = function(argFoo) { // Original name: customScoreToNumber
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.MORE;
            if(!(zuuluu !== michal)) { _fun00022_ip = 68; continue _fun00021 }
 20:
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.LESS;
            if(!(zuuluu !== michal)) { _fun00022_ip = 60; continue _fun00021 }
 34:
            entity = _closure1_slot11;
            entity = entity.MUTED;
            if(!(entity !== michal)) { _fun00022_ip = 52; continue _fun00021 }
 48:
            entity = 0;
            return entity;
 52:
            entity = -2;
            return entity;
 60:
            entity = -1;
            return entity;
 68:
            entity = 1;
            return entity;
        }
    };
    zuuluu['customScoreToNumber'] = report;
    zuuluu['hydrateItems'] = tangon;
    tangon = function() { // Original name: hydrateNextPage
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['hydrateNextPage'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: createGravitySummaryFromServer
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = argFoo;
            tangon = new Array(0);
            report = new Array(0);
            zuuluu = _closure1_slot12;
            entity = michal.messages;
            romeon = undefined;
            result = zuuluu.bind(romeon)(entity);
            zuuluu = result.bind(romeon)();
            entity = zuuluu.done;
            output = 0;
            yankee = null;
            sizing = 5;
            kiloes = zuuluu;
            backup = 0;
            offset = undefined;
            verify = undefined;
            option = undefined;
            golfie = undefined;
            oscard = undefined;
            zuuluu = 0;
            if(entity) { _fun00024_ip = 389; continue _fun00023 }
 70:
            papara = kiloes.value;
            entity = papara.reactions;
            echoed = backup;
            sequen = offset;
            vacuum = verify;
            ctrled = option;
            source = golfie;
            update = oscard;
            if(!(yankee != entity)) { _fun00024_ip = 350; continue _fun00023 }
 106:
            cntext = tangon.length;
            record = option;
            config = golfie;
            entity = oscard;
            if(!(cntext < sizing)) { _fun00024_ip = 322; continue _fun00023 }
 127:
            target = _closure1_slot12;
            cntext = papara.reactions;
            limora = target.bind(romeon)(cntext);
            whisks = limora.bind(romeon)();
            cntext = whisks.done;
            sierra = whisks;
            status = option;
            target = golfie;
            offset = sierra;
            verify = limora;
            record = status;
            config = target;
            entity = oscard;
            if(cntext) { _fun00024_ip = 322; continue _fun00023 }
 181:
            whisks = sierra.value;
            cntext = whisks.count_details;
            cntext = yankee == cntext;
            if(cntext) { _fun00024_ip = 230; continue _fun00023 }
 199:
            equals = whisks.count_details;
            equals = equals.burst;
            variable36 = yankee != equals;
            quebec = 0;
            if(!variable36) { _fun00024_ip = 223; continue _fun00023 }
 220:
            quebec = equals;
 223:
            cntext = quebec > output;
            status = equals;
 230:
            quebec = status;
            if(cntext) { _fun00024_ip = 267; continue _fun00023 }
 236:
            equals = whisks.count_details;
            equals = equals.normal;
            variable37 = yankee != equals;
            variable36 = 0;
            if(!variable37) { _fun00024_ip = 260; continue _fun00023 }
 257:
            variable36 = equals;
 260:
            cntext = variable36 > output;
            target = equals;
 267:
            equals = target;
            if(!cntext) { _fun00024_ip = 283; continue _fun00023 }
 273:
            cntext = tangon.push;
            cntext = cntext.bind(tangon)(whisks);
 283:
            variable36 = limora.bind(romeon)();
            cntext = variable36.done;
            sierra = variable36;
            status = quebec;
            target = equals;
            offset = sierra;
            verify = limora;
            record = status;
            config = target;
            entity = whisks;
            if(!cntext) { _fun00024_ip = 181; continue _fun00023 }
 322:
            cntext = _closure1_slot17;
            cntext = cntext.bind(romeon)(papara);
            echoed = backup + cntext;
            sequen = offset;
            vacuum = verify;
            ctrled = record;
            source = config;
            update = entity;
 350:
            config = result.bind(romeon)();
            entity = config.done;
            backup = echoed;
            offset = sequen;
            verify = vacuum;
            option = ctrled;
            golfie = source;
            oscard = update;
            kiloes = config;
            zuuluu = backup;
            if(!entity) { _fun00024_ip = 70; continue _fun00023 }
 389:
            oscard = _closure1_slot12;
            entity = michal.messages;
            offset = oscard.bind(romeon)(entity);
            oscard = offset.bind(romeon)();
            entity = oscard.done;
            verify = 9;
            option = 3;
            golfie = oscard;
            oscard = null;
            if(entity) { _fun00024_ip = 539; continue _fun00023 }
 427:
            entity = golfie.value;
            kiloes = entity.author;
            backup = oscard;
            if(!(yankee != kiloes)) { _fun00024_ip = 521; continue _fun00023 }
 445:
            kiloes = entity.author;
            kiloes = kiloes.id;
            backup = oscard;
            if(!(oscard !== kiloes)) { _fun00024_ip = 521; continue _fun00023 }
 463:
            sizing = report.push;
            output = _closure1_slot0;
            kiloes = _closure1_slot2;
            kiloes = kiloes[verify];
            output = output.bind(romeon)(kiloes);
            kiloes = output.createMessageRecord;
            kiloes = kiloes.bind(output)(entity);
            kiloes = sizing.bind(report)(kiloes);
            entity = entity.author;
            backup = entity.id;
            entity = report.length;
            if(!(!(entity >= option))) { _fun00024_ip = 539; continue _fun00023 }
 521:
            kiloes = offset.bind(romeon)();
            entity = kiloes.done;
            oscard = backup;
            golfie = kiloes;
            if(!entity) { _fun00024_ip = 427; continue _fun00023 }
 539:
            entity = {};
            oscard = michal.id;
            entity['id'] = oscard;
            oscard = michal.topic;
            entity['topic'] = oscard;
            oscard = michal.summ_short;
            entity['summShort'] = oscard;
            oscard = global;
            option = oscard.Array;
            golfie = option.from;
            offset = oscard.Set;
            variable38 = michal.people;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            variable39 = verify;
            oscard = new variable39[offset](variable38, variable37);
            oscard = oscard instanceof Object ? oscard : verify;
            oscard = golfie.bind(option)(oscard);
            entity['people'] = oscard;
            oscard = michal.start_id;
            entity['startId'] = oscard;
            oscard = michal.end_id;
            entity['endId'] = oscard;
            oscard = michal.count;
            entity['count'] = oscard;
            oscard = michal.channel_id;
            entity['channelId'] = oscard;
            oscard = michal.type;
            entity['type'] = oscard;
            entity['messages'] = report;
            entity['reactions'] = tangon;
            oscard = michal.messages;
            report = oscard.map;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            entity['messageIds'] = tangon;
            tangon = argBar;
            entity['guildId'] = tangon;
            entity['reactionCount'] = zuuluu;
            zuuluu = michal.messages;
            zuuluu = zuuluu.length;
            entity['numTotalMessages'] = zuuluu;
            michal = michal.source;
            entity['source'] = michal;
            return entity;
        }
    };
    zuuluu['createGravitySummaryFromServer'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isItemUnreadInChannel
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = _closure1_slot6;
            zuuluu = tangon.getTrackedAckMessageId;
            entity = argFoo;
            report = zuuluu.bind(tangon)(entity);
            entity = null;
            entity = entity == report;
            if(entity) { _fun00026_ip = 90; continue _fun00025 }
 30:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 10;
            zuuluu = golfie[michal];
            tangon = undefined;
            verify = oscard.bind(tangon)(zuuluu);
            option = verify.extractTimestamp;
            zuuluu = argBar;
            zuuluu = option.bind(verify)(zuuluu);
            michal = golfie[michal];
            tangon = oscard.bind(tangon)(michal);
            michal = tangon.extractTimestamp;
            michal = michal.bind(tangon)(report);
            entity = zuuluu > michal;
 90:
            return entity;
        }
    };
    zuuluu['isItemUnreadInChannel'] = tangon;
    tangon = function(argFoo) { // Original name: useGravityMessage
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 11;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot5;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot7;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                oscard = _closure1_slot5;
                report = oscard.getMessage;
                entity = _closure2_slot0;
                zuuluu = entity.getChannelId;
                zuuluu = zuuluu.bind(entity)();
                entity = entity.id;
                entity = report.bind(oscard)(zuuluu, entity);
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00028_ip = 88; continue _fun00027 }
 47:
                oscard = _closure1_slot7;
                report = oscard.getHydratedItem;
                tangon = _closure2_slot0;
                tangon = tangon.id;
                report = report.bind(oscard)(tangon);
                oscard = zuuluu == report;
                tangon = undefined;
                if(oscard) { _fun00028_ip = 85; continue _fun00027 }
 80:
                tangon = report.message;
 85:
                entity = tangon;
 88:
                if(!(zuuluu == entity)) { _fun00028_ip = 96; continue _fun00027 }
 92:
                entity = _closure2_slot0;
 96:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useGravityMessage'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useICYMIMessage
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 11;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        option = _closure1_slot5;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        michal = _closure1_slot7;
        zuuluu[1] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = _closure2_slot1;
                zuuluu = null;
                michal = zuuluu != entity;
                entity = null;
                if(!michal) { _fun00030_ip = 88; continue _fun00029 }
 18:
                option = _closure1_slot5;
                golfie = option.getMessage;
                oscard = _closure2_slot0;
                michal = _closure2_slot1;
                michal = golfie.bind(option)(oscard, michal);
                if(!(zuuluu == michal)) { _fun00030_ip = 85; continue _fun00029 }
 49:
                oscard = _closure1_slot7;
                report = oscard.getHydratedItem;
                tangon = _closure2_slot1;
                tangon = report.bind(oscard)(tangon);
                report = zuuluu == tangon;
                zuuluu = undefined;
                if(report) { _fun00030_ip = 82; continue _fun00029 }
 77:
                zuuluu = tangon.message;
 82:
                michal = zuuluu;
 85:
                entity = michal;
 88:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useICYMIMessage'] = tangon;
    tangon = function(argFoo) { // Original name: icymiEnabled
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getICYMIExperiment;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot4;
            zuuluu = tangon.get;
            michal = 'hide_icymi_tab';
            michal = zuuluu.bind(tangon)(michal);
            if(!entity) { _fun00032_ip = 65; continue _fun00031 }
 62:
            entity = !michal;
 65:
            return entity;
        }
    };
    zuuluu['icymiEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: customStatusToContentInventoryEntry
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            michal = argFoo;
            entity = {};
            zuuluu = michal.id;
            entity['id'] = zuuluu;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.GravityItemTypes;
            zuuluu = zuuluu.CUSTOM_STATUS;
            entity['type'] = zuuluu;
            zuuluu = {};
            tangon = michal.id;
            zuuluu['id'] = tangon;
            tangon = michal.data;
            tangon = tangon.user_id;
            zuuluu['author_id'] = tangon;
            tangon = 13;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.ContentInventoryAuthorType;
            tangon = tangon.USER;
            zuuluu['author_type'] = tangon;
            tangon = new Array(0);
            zuuluu['traits'] = tangon;
            tangon = new Array(0);
            zuuluu['participants'] = tangon;
            tangon = 14;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.ContentInventoryEntryType;
            tangon = tangon.CUSTOM_STATUS;
            zuuluu['content_type'] = tangon;
            tangon = {};
            report = 'custom_status_extra';
            tangon['type'] = report;
            report = michal.data;
            oscard = report.text;
            report = null;
            golfie = report != oscard;
            report = '';
            if(!golfie) { _fun00034_ip = 196; continue _fun00033 }
 193:
            report = oscard;
 196:
            tangon['status'] = report;
            report = michal.data;
            report = report.emoji_id;
            tangon['emoji_id'] = report;
            report = michal.data;
            report = report.emoji_name;
            tangon['emoji_name'] = report;
            report = michal.data;
            report = report.emoji_animated;
            tangon['emoji_animated'] = report;
            report = michal.data;
            report = report.attachments;
            tangon['attachments'] = report;
            zuuluu['extra'] = tangon;
            entity['activity'] = zuuluu;
            zuuluu = michal.score;
            entity['score'] = zuuluu;
            michal = michal.score_components;
            entity['score_components'] = michal;
            return entity;
        }
    };
    zuuluu['customStatusToContentInventoryEntry'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: compareGravityUnreadIds
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            michal = argBaz;
            tangon = _closure1_slot8;
            zuuluu = tangon.getReadTimestamp;
            report = zuuluu.bind(tangon)(golfie);
            zuuluu = null;
            if(!(zuuluu == report)) { _fun00036_ip = 49; continue _fun00035 }
 33:
            option = zuuluu == michal;
            tangon = undefined;
            if(option) { _fun00036_ip = 46; continue _fun00035 }
 42:
            tangon = michal[golfie];
 46:
            report = tangon;
 49:
            tangon = _closure1_slot8;
            entity = tangon.getReadTimestamp;
            tangon = entity.bind(tangon)(oscard);
            if(!(zuuluu == tangon)) { _fun00036_ip = 84; continue _fun00035 }
 68:
            golfie = zuuluu == michal;
            entity = undefined;
            if(golfie) { _fun00036_ip = 81; continue _fun00035 }
 77:
            entity = michal[oscard];
 81:
            tangon = entity;
 84:
            if(!(zuuluu == report)) { _fun00036_ip = 97; continue _fun00035 }
 88:
            michal = zuuluu == tangon;
            entity = 0;
            if(michal) { _fun00036_ip = 130; continue _fun00035 }
 97:
            oscard = zuuluu == report;
            michal = -1;
            if(oscard) { _fun00036_ip = 127; continue _fun00035 }
 110:
            oscard = zuuluu == tangon;
            zuuluu = 1;
            if(oscard) { _fun00036_ip = 124; continue _fun00035 }
 120:
            zuuluu = tangon - report;
 124:
            michal = zuuluu;
 127:
            entity = michal;
 130:
            return entity;
        }
    };
    zuuluu['compareGravityUnreadIds'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: gravityFetchMentions
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 15;
        zuuluu = zuuluu[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        oscard = golfie.fetchRecentMentions;
        yankee = _closure1_slot10;
        romeon = argBaz;
        verify = argFoo;
        option = argBar;
        foxtra = golfie;
        offset = undefined;
        michal = foxtra[oscard](romeon, yankee, offset, verify, option, golfie);
        return entity;
    };
    zuuluu['gravityFetchMentions'] = michal;
    return entity;
})();