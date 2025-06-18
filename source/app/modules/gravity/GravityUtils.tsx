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
    tangon = function() { // Original name: hydrateItems
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = tangon;
    entity = function() { // Original name: _hydrateItems
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    golfie = argBar;
                    oscard = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 345; continue _fun00007 }
 21:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    verify = _closure1_slot8;
                    report = verify.getHydratedItems;
                    report = report.bind(verify)();
                    _closure4_slot0 = report;
                    report = option.slice;
                    verify = report.bind(option)(golfie, oscard);
                    report = verify.length;
                    backup = 0;
                    if(!(backup !== report)) { _fun00008_ip = 339; continue _fun00007 }
 73:
                    option = verify.filter;
                    report = function(argFoo) {
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.id;
                        michal = michal[entity];
                        entity = null;
                        entity = entity == michal;
                        return entity;
                    };
                    yankee = option.bind(verify)(report);
                    option = yankee.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.GravityItemTypes;
                        entity = entity.MESSAGE;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = option.bind(yankee)(report);
                    option = verify.map;
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
                    sizing = option.bind(verify)(report);
                    option = yankee.map;
                    report = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = tangon.type;
                            report = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 8;
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
                    option = option.bind(yankee)(report);
                    report = option.flat;
                    verify = report.bind(option)();
                    option = verify.filter;
                    report = global;
                    report = report.Boolean;
                    foxtra = option.bind(verify)(report);
                    option = yankee.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.GravityItemTypes;
                        entity = entity.SUMMARY;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = option.bind(yankee)(report);
                    option = verify.map;
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
                    offset = option.bind(verify)(report);
                    option = yankee.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.GravityItemTypes;
                        entity = entity.ACTIVITY;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = option.bind(yankee)(report);
                    option = verify.map;
                    report = function(argFoo) {
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
                    verify = option.bind(verify)(report);
                    option = yankee.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.GravityItemTypes;
                        entity = entity.GENERATED_CANDIDATE;
                        entity = michal === entity;
                        return entity;
                    };
                    option = option.bind(yankee)(report);
                    report = option.map;
                    tangon = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.data;
                        zuuluu = zuuluu.content_id;
                        entity['content_id'] = zuuluu;
                        zuuluu = michal.data;
                        zuuluu = zuuluu.guild_id;
                        entity['guild_id'] = zuuluu;
                        michal = michal.data;
                        michal = michal.channel_id;
                        entity['channel_id'] = michal;
                        return entity;
                    };
                    option = report.bind(option)(tangon);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 9;
                    michal = report[michal];
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.fetchHydrated;
                    michal = {};
                    yankee = new Array(0);
                    output = yankee;
                    kiloes = 0;
                    kiloes = arraySpread(output, sizing, kiloes);
                    output = yankee;
                    sizing = foxtra;
                    romeon = arraySpread(output, sizing, kiloes);
                    michal['messageItems'] = yankee;
                    michal['summaryItems'] = offset;
                    michal['activityItems'] = verify;
                    michal['generatedCandidateItems'] = option;
                    michal = tangon.bind(report)(golfie, oscard, michal);
                    SaveGenerator(address=333);
 331:
                    return michal;
 333:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 342; continue _fun00007 }
 339:
                    return zuuluu;
 342:
                    return michal;
 345:
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
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getUnreadDisplayItems;
                    offset = zuuluu.bind(tangon)();
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getReadDisplayItems;
                    golfie = zuuluu.bind(tangon)();
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getNextIndexToHydrate;
                    oscard = zuuluu.bind(tangon)();
                    report = _closure1_slot15;
                    tangon = new Array(0);
                    verify = 0;
                    yankee = tangon;
                    verify = arraySpread(yankee, offset, verify);
                    yankee = tangon;
                    offset = golfie;
                    zuuluu = arraySpread(yankee, offset, verify);
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 8;
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
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
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
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: processMessages
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            yankee = argBar;
            offset = argBaz;
            entity = new Array(0);
            zuuluu = _closure1_slot13;
            option = undefined;
            michal = argFoo;
            golfie = zuuluu.bind(option)(michal);
            zuuluu = golfie.bind(option)();
            michal = zuuluu.done;
            oscard = null;
            report = 10;
            tangon = zuuluu;
            zuuluu = null;
            if(michal) { _fun00018_ip = 194; continue _fun00017 }
 52:
            michal = tangon.value;
            foxtra = michal.author;
            romeon = zuuluu;
            if(!(oscard != foxtra)) { _fun00018_ip = 173; continue _fun00017 }
 70:
            if(!yankee) { _fun00018_ip = 91; continue _fun00017 }
 73:
            foxtra = michal.author;
            foxtra = foxtra.id;
            romeon = zuuluu;
            if(!(romeon !== foxtra)) { _fun00018_ip = 173; continue _fun00017 }
 91:
            foxtra = _closure1_slot5;
            foxtra = michal instanceof foxtra;
            backup = michal;
            if(foxtra) { _fun00018_ip = 133; continue _fun00017 }
 105:
            kiloes = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[report];
            kiloes = kiloes.bind(option)(foxtra);
            foxtra = kiloes.createMessageRecord;
            backup = foxtra.bind(kiloes)(michal);
 133:
            foxtra = entity.push;
            foxtra = foxtra.bind(entity)(backup);
            michal = michal.author;
            foxtra = michal.id;
            romeon = foxtra;
            if(!(oscard != offset)) { _fun00018_ip = 173; continue _fun00017 }
 161:
            michal = entity.length;
            romeon = foxtra;
            if(!(!(michal >= offset))) { _fun00018_ip = 194; continue _fun00017 }
 173:
            foxtra = golfie.bind(option)();
            michal = foxtra.done;
            zuuluu = romeon;
            tangon = foxtra;
            if(!michal) { _fun00018_ip = 52; continue _fun00017 }
 194:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    report = oscard.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.ChannelTypes;
    var _closure1_slot10 = oscard;
    report = report.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot11 = report;
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
    var _closure1_slot12 = report;
    oscard = 17;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/gravity/GravityUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ICYMICustomScore'] = report;
    report = function(argFoo) { // Original name: isGuildItem
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.type;
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 8;
            entity = entity[oscard];
            report = undefined;
            entity = golfie.bind(report)(entity);
            entity = entity.GravityItemTypes;
            entity = entity.MESSAGE;
            entity = tangon === entity;
            if(entity) { _fun00020_ip = 90; continue _fun00019 }
 52:
            golfie = zuuluu.type;
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            tangon = option.bind(report)(tangon);
            tangon = tangon.GravityItemTypes;
            tangon = tangon.SUMMARY;
            entity = golfie === tangon;
 90:
            if(entity) { _fun00020_ip = 131; continue _fun00019 }
 93:
            golfie = zuuluu.type;
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            tangon = option.bind(report)(tangon);
            tangon = tangon.GravityItemTypes;
            tangon = tangon.GENERATED_CANDIDATE;
            entity = golfie === tangon;
 131:
            if(entity) { _fun00020_ip = 172; continue _fun00019 }
 134:
            zuuluu = zuuluu.type;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.GravityItemTypes;
            michal = michal.GUILD_EVENT;
            entity = zuuluu === michal;
 172:
            return entity;
        }
    };
    zuuluu['isGuildItem'] = report;
    report = function(argFoo, argBar) { // Original name: isChannelCustomScoreEligible
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            michal = !entity;
            if(michal) { _fun00022_ip = 34; continue _fun00021 }
 12:
            zuuluu = tangon.type;
            entity = _closure1_slot10;
            entity = entity.GUILD_FORUM;
            michal = zuuluu !== entity;
 34:
            entity = !michal;
            if(!michal) { _fun00022_ip = 87; continue _fun00021 }
 40:
            report = tangon.type;
            michal = _closure1_slot10;
            michal = michal.GUILD_ANNOUNCEMENT;
            michal = report === michal;
            if(michal) { _fun00022_ip = 84; continue _fun00021 }
 65:
            tangon = tangon.type;
            zuuluu = _closure1_slot10;
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
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = argFoo;
            entity = -1.5;
            if(!(!(michal < entity))) { _fun00024_ip = 72; continue _fun00023 }
 17:
            entity = 0;
            if(!(!(michal < entity))) { _fun00024_ip = 57; continue _fun00023 }
 23:
            if(!(!(michal > entity))) { _fun00024_ip = 42; continue _fun00023 }
 27:
            entity = _closure1_slot12;
            entity = entity.DEFAULT;
            _fun00024_ip = 55; continue _fun00023;
 42:
            michal = _closure1_slot12;
            entity = michal.MORE;
 55:
            _fun00024_ip = 70; continue _fun00023;
 57:
            michal = _closure1_slot12;
            entity = michal.LESS;
 70:
            _fun00024_ip = 85; continue _fun00023;
 72:
            michal = _closure1_slot12;
            entity = michal.MUTED;
 85:
            return entity;
        }
    };
    zuuluu['numberToCustomScore'] = report;
    report = function(argFoo) { // Original name: customScoreToNumber
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.MORE;
            if(!(zuuluu !== michal)) { _fun00026_ip = 68; continue _fun00025 }
 20:
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.LESS;
            if(!(zuuluu !== michal)) { _fun00026_ip = 60; continue _fun00025 }
 34:
            entity = _closure1_slot12;
            entity = entity.MUTED;
            if(!(entity !== michal)) { _fun00026_ip = 52; continue _fun00025 }
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
        tangon = _closure1_slot17;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['hydrateNextPage'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: createGravitySummaryFromServer
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            michal = argFoo;
            tangon = michal.messages;
            report = new Array(0);
            zuuluu = _closure1_slot13;
            option = undefined;
            output = zuuluu.bind(option)(tangon);
            tangon = output.bind(option)();
            zuuluu = tangon.done;
            sizing = 0;
            kiloes = null;
            backup = 5;
            foxtra = tangon;
            romeon = 0;
            yankee = undefined;
            offset = undefined;
            verify = undefined;
            golfie = undefined;
            oscard = undefined;
            tangon = 0;
            if(zuuluu) { _fun00028_ip = 385; continue _fun00027 }
 66:
            cntext = foxtra.value;
            zuuluu = cntext.reactions;
            result = romeon;
            vacuum = yankee;
            ctrled = offset;
            source = verify;
            update = golfie;
            echoed = oscard;
            if(!(kiloes != zuuluu)) { _fun00028_ip = 346; continue _fun00027 }
 102:
            record = report.length;
            config = verify;
            sequen = golfie;
            zuuluu = oscard;
            if(!(record < backup)) { _fun00028_ip = 318; continue _fun00027 }
 123:
            papara = _closure1_slot13;
            record = cntext.reactions;
            sierra = papara.bind(option)(record);
            limora = sierra.bind(option)();
            record = limora.done;
            status = limora;
            target = verify;
            papara = golfie;
            yankee = status;
            offset = sierra;
            config = target;
            sequen = papara;
            zuuluu = oscard;
            if(record) { _fun00028_ip = 318; continue _fun00027 }
 177:
            limora = status.value;
            record = limora.count_details;
            record = kiloes == record;
            if(record) { _fun00028_ip = 226; continue _fun00027 }
 195:
            whisks = limora.count_details;
            whisks = whisks.burst;
            quebec = kiloes != whisks;
            equals = 0;
            if(!quebec) { _fun00028_ip = 219; continue _fun00027 }
 216:
            equals = whisks;
 219:
            record = equals > sizing;
            target = whisks;
 226:
            equals = target;
            if(record) { _fun00028_ip = 263; continue _fun00027 }
 232:
            whisks = limora.count_details;
            whisks = whisks.normal;
            variable36 = kiloes != whisks;
            quebec = 0;
            if(!variable36) { _fun00028_ip = 256; continue _fun00027 }
 253:
            quebec = whisks;
 256:
            record = quebec > sizing;
            papara = whisks;
 263:
            whisks = papara;
            if(!record) { _fun00028_ip = 279; continue _fun00027 }
 269:
            record = report.push;
            record = record.bind(report)(limora);
 279:
            quebec = sierra.bind(option)();
            record = quebec.done;
            status = quebec;
            target = equals;
            papara = whisks;
            yankee = status;
            offset = sierra;
            config = target;
            sequen = papara;
            zuuluu = limora;
            if(!record) { _fun00028_ip = 177; continue _fun00027 }
 318:
            record = _closure1_slot18;
            record = record.bind(option)(cntext);
            result = romeon + record;
            vacuum = yankee;
            ctrled = offset;
            source = config;
            update = sequen;
            echoed = zuuluu;
 346:
            sequen = output.bind(option)();
            zuuluu = sequen.done;
            romeon = result;
            yankee = vacuum;
            offset = ctrled;
            verify = source;
            golfie = update;
            oscard = echoed;
            foxtra = sequen;
            tangon = romeon;
            if(!zuuluu) { _fun00028_ip = 66; continue _fun00027 }
 385:
            zuuluu = {};
            zuuluu['reactions'] = report;
            zuuluu['reactionCount'] = tangon;
            tangon = zuuluu.reactions;
            zuuluu = zuuluu.reactionCount;
            golfie = _closure1_slot19;
            oscard = michal.messages;
            report = true;
            entity = 3;
            report = golfie.bind(option)(oscard, report, entity);
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
            variable39 = michal.people;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            variable40 = verify;
            oscard = new variable40[offset](variable39, variable38);
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
    tangon = function(argFoo) { // Original name: createGravityGeneratedCandidateFromServer
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = argFoo;
            tangon = new Array(0);
            michal = zuuluu.messages;
            entity = null;
            if(!(entity != michal)) { _fun00030_ip = 25; continue _fun00029 }
 19:
            tangon = zuuluu.messages;
 25:
            michal = _closure1_slot19;
            entity = undefined;
            michal = michal.bind(entity)(tangon);
            entity = {};
            tangon = zuuluu.guild_id;
            entity['guild_id'] = tangon;
            tangon = zuuluu.content_id;
            entity['content_id'] = tangon;
            tangon = zuuluu.channel_id;
            entity['channel_id'] = tangon;
            tangon = zuuluu.type;
            entity['type'] = tangon;
            tangon = zuuluu.primary_text;
            entity['primary_text'] = tangon;
            tangon = zuuluu.secondary_text;
            entity['secondary_text'] = tangon;
            tangon = zuuluu.message_ids;
            entity['message_ids'] = tangon;
            tangon = zuuluu.message_scores;
            entity['message_scores'] = tangon;
            tangon = zuuluu.user_ids;
            entity['user_ids'] = tangon;
            tangon = zuuluu.image_urls;
            entity['image_urls'] = tangon;
            zuuluu = zuuluu.created_at;
            entity['created_at'] = zuuluu;
            entity['messages'] = michal;
            return entity;
        }
    };
    zuuluu['createGravityGeneratedCandidateFromServer'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isItemUnreadInChannel
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tangon = _closure1_slot7;
            zuuluu = tangon.getTrackedAckMessageId;
            entity = argFoo;
            report = zuuluu.bind(tangon)(entity);
            entity = null;
            entity = entity == report;
            if(entity) { _fun00032_ip = 90; continue _fun00031 }
 30:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 11;
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
        zuuluu = 12;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot6;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot8;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscard = _closure1_slot6;
                report = oscard.getMessage;
                entity = _closure2_slot0;
                zuuluu = entity.getChannelId;
                zuuluu = zuuluu.bind(entity)();
                entity = entity.id;
                entity = report.bind(oscard)(zuuluu, entity);
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00034_ip = 88; continue _fun00033 }
 47:
                oscard = _closure1_slot8;
                report = oscard.getHydratedItem;
                tangon = _closure2_slot0;
                tangon = tangon.id;
                report = report.bind(oscard)(tangon);
                oscard = zuuluu == report;
                tangon = undefined;
                if(oscard) { _fun00034_ip = 85; continue _fun00033 }
 80:
                tangon = report.message;
 85:
                entity = tangon;
 88:
                if(!(zuuluu == entity)) { _fun00034_ip = 96; continue _fun00033 }
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
        zuuluu = 12;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        option = _closure1_slot6;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        michal = _closure1_slot8;
        zuuluu[1] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = _closure2_slot1;
                zuuluu = null;
                michal = zuuluu != entity;
                entity = null;
                if(!michal) { _fun00036_ip = 88; continue _fun00035 }
 18:
                option = _closure1_slot6;
                golfie = option.getMessage;
                oscard = _closure2_slot0;
                michal = _closure2_slot1;
                michal = golfie.bind(option)(oscard, michal);
                if(!(zuuluu == michal)) { _fun00036_ip = 85; continue _fun00035 }
 49:
                oscard = _closure1_slot8;
                report = oscard.getHydratedItem;
                tangon = _closure2_slot1;
                tangon = report.bind(oscard)(tangon);
                report = zuuluu == tangon;
                zuuluu = undefined;
                if(report) { _fun00036_ip = 82; continue _fun00035 }
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
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 13;
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
            if(!entity) { _fun00038_ip = 65; continue _fun00037 }
 62:
            entity = !michal;
 65:
            return entity;
        }
    };
    zuuluu['icymiEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: customStatusToContentInventoryEntry
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            michal = argFoo;
            entity = {};
            zuuluu = michal.id;
            entity['id'] = zuuluu;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 8;
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
            tangon = 14;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.ContentInventoryAuthorType;
            tangon = tangon.USER;
            zuuluu['author_type'] = tangon;
            tangon = new Array(0);
            zuuluu['traits'] = tangon;
            tangon = new Array(0);
            zuuluu['participants'] = tangon;
            tangon = 15;
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
            if(!golfie) { _fun00040_ip = 196; continue _fun00039 }
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
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            michal = argBaz;
            tangon = _closure1_slot9;
            zuuluu = tangon.getReadTimestamp;
            report = zuuluu.bind(tangon)(golfie);
            zuuluu = null;
            if(!(zuuluu == report)) { _fun00042_ip = 49; continue _fun00041 }
 33:
            option = zuuluu == michal;
            tangon = undefined;
            if(option) { _fun00042_ip = 46; continue _fun00041 }
 42:
            tangon = michal[golfie];
 46:
            report = tangon;
 49:
            tangon = _closure1_slot9;
            entity = tangon.getReadTimestamp;
            tangon = entity.bind(tangon)(oscard);
            if(!(zuuluu == tangon)) { _fun00042_ip = 84; continue _fun00041 }
 68:
            golfie = zuuluu == michal;
            entity = undefined;
            if(golfie) { _fun00042_ip = 81; continue _fun00041 }
 77:
            entity = michal[oscard];
 81:
            tangon = entity;
 84:
            if(!(zuuluu == report)) { _fun00042_ip = 97; continue _fun00041 }
 88:
            michal = zuuluu == tangon;
            entity = 0;
            if(michal) { _fun00042_ip = 130; continue _fun00041 }
 97:
            oscard = zuuluu == report;
            michal = -1;
            if(oscard) { _fun00042_ip = 127; continue _fun00041 }
 110:
            oscard = zuuluu == tangon;
            zuuluu = 1;
            if(oscard) { _fun00042_ip = 124; continue _fun00041 }
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
        entity = 16;
        zuuluu = zuuluu[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        oscard = golfie.fetchRecentMentions;
        yankee = _closure1_slot11;
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