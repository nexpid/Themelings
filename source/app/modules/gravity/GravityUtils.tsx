// app/modules/gravity/GravityUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
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
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot13;
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
            golf = _closure1_slot13;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    var _closure1_slot13 = entity;
    tango = function() { // Original name: hydrateItems
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = tango;
    entity = function() { // Original name: _hydrateItems
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    verify = argBar;
                    options = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 324; continue _fun00007 }
 21:
                    zulu = undefined;
                    var _closure4_slot0 = zulu;
                    golf = _closure1_slot7;
                    report = golf.getHydratedItems;
                    report = report.bind(golf)();
                    _closure4_slot0 = report;
                    report = oscar.slice;
                    golf = report.bind(oscar)(verify, options);
                    report = golf.length;
                    romeo = 0;
                    if(!(romeo !== report)) { _fun00008_ip = 318; continue _fun00007 }
 73:
                    oscar = golf.filter;
                    report = function(argFoo) {
                        mike = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.id;
                        mike = mike[entity];
                        entity = null;
                        entity = entity == mike;
                        return entity;
                    };
                    foxtrot = oscar.bind(golf)(report);
                    oscar = foxtrot.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 7;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.GravityItemTypes;
                        entity = entity.MESSAGE;
                        entity = mike === entity;
                        return entity;
                    };
                    golf = oscar.bind(foxtrot)(report);
                    oscar = golf.map;
                    report = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        zulu = mike.data;
                        zulu = zulu.channel_id;
                        entity['channel_id'] = zulu;
                        mike = mike.data;
                        mike = mike.message_id;
                        entity['message_id'] = mike;
                        return entity;
                    };
                    output = oscar.bind(golf)(report);
                    oscar = foxtrot.map;
                    report = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tango = argFoo;
                            mike = tango.type;
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 7;
                            entity = report[entity];
                            oscar = undefined;
                            entity = zulu.bind(oscar)(entity);
                            entity = entity.GravityItemTypes;
                            entity = entity.MESSAGE;
                            if(!(mike !== entity)) { _fun00010_ip = 55; continue _fun00009 }
 49:
                            entity = new Array(0);
                            return entity;
 55:
                            entity = new Array(0);
                            mike = tango.data;
                            report = mike.message_context;
                            zulu = null;
                            golf = zulu == report;
                            mike = undefined;
                            if(golf) { _fun00010_ip = 87; continue _fun00009 }
 81:
                            mike = report.reply_message_id;
 87:
                            mike = zulu != mike;
                            if(!mike) { _fun00010_ip = 139; continue _fun00009 }
 94:
                            report = global;
                            golf = report.parseInt;
                            report = tango.data;
                            options = report.message_context;
                            verify = zulu == options;
                            report = undefined;
                            if(verify) { _fun00010_ip = 128; continue _fun00009 }
 122:
                            report = options.reply_message_id;
 128:
                            golf = golf.bind(oscar)(report);
                            report = 0;
                            mike = report !== golf;
 139:
                            if(!mike) { _fun00010_ip = 190; continue _fun00009 }
 142:
                            report = entity.push;
                            mike = {};
                            golf = tango.data;
                            golf = golf.channel_id;
                            mike['channel_id'] = golf;
                            golf = tango.data;
                            golf = golf.message_context;
                            golf = golf.reply_message_id;
                            mike['message_id'] = golf;
                            mike = report.bind(entity)(mike);
 190:
                            mike = tango.data;
                            report = mike.message_context;
                            golf = zulu == report;
                            mike = undefined;
                            if(golf) { _fun00010_ip = 216; continue _fun00009 }
 210:
                            mike = report.before_message_id;
 216:
                            mike = zulu != mike;
                            if(!mike) { _fun00010_ip = 268; continue _fun00009 }
 223:
                            report = global;
                            golf = report.parseInt;
                            report = tango.data;
                            options = report.message_context;
                            verify = zulu == options;
                            report = undefined;
                            if(verify) { _fun00010_ip = 257; continue _fun00009 }
 251:
                            report = options.before_message_id;
 257:
                            golf = golf.bind(oscar)(report);
                            report = 0;
                            mike = report !== golf;
 268:
                            if(!mike) { _fun00010_ip = 319; continue _fun00009 }
 271:
                            report = entity.push;
                            mike = {};
                            golf = tango.data;
                            golf = golf.channel_id;
                            mike['channel_id'] = golf;
                            golf = tango.data;
                            golf = golf.message_context;
                            golf = golf.before_message_id;
                            mike['message_id'] = golf;
                            mike = report.bind(entity)(mike);
 319:
                            mike = tango.data;
                            report = mike.message_context;
                            golf = zulu == report;
                            mike = undefined;
                            if(golf) { _fun00010_ip = 345; continue _fun00009 }
 339:
                            mike = report.after_message_id;
 345:
                            mike = zulu != mike;
                            if(!mike) { _fun00010_ip = 397; continue _fun00009 }
 352:
                            report = global;
                            report = report.parseInt;
                            golf = tango.data;
                            golf = golf.message_context;
                            options = zulu == golf;
                            zulu = undefined;
                            if(options) { _fun00010_ip = 386; continue _fun00009 }
 380:
                            zulu = golf.after_message_id;
 386:
                            report = report.bind(oscar)(zulu);
                            zulu = 0;
                            mike = zulu !== report;
 397:
                            if(!mike) { _fun00010_ip = 448; continue _fun00009 }
 400:
                            zulu = entity.push;
                            mike = {};
                            report = tango.data;
                            report = report.channel_id;
                            mike['channel_id'] = report;
                            tango = tango.data;
                            tango = tango.message_context;
                            tango = tango.after_message_id;
                            mike['message_id'] = tango;
                            mike = zulu.bind(entity)(mike);
 448:
                            return entity;
                        }
                    };
                    oscar = oscar.bind(foxtrot)(report);
                    report = oscar.flat;
                    golf = report.bind(oscar)();
                    oscar = golf.filter;
                    report = global;
                    report = report.Boolean;
                    yankee = oscar.bind(golf)(report);
                    oscar = foxtrot.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 7;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.GravityItemTypes;
                        entity = entity.SUMMARY;
                        entity = mike === entity;
                        return entity;
                    };
                    golf = oscar.bind(foxtrot)(report);
                    oscar = golf.map;
                    report = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        zulu = mike.data;
                        zulu = zulu.guild_id;
                        entity['guild_id'] = zulu;
                        zulu = mike.data;
                        zulu = zulu.channel_id;
                        entity['channel_id'] = zulu;
                        mike = mike.data;
                        mike = mike.summary_id;
                        entity['summary_id'] = mike;
                        return entity;
                    };
                    golf = oscar.bind(golf)(report);
                    oscar = foxtrot.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 7;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.GravityItemTypes;
                        entity = entity.ACTIVITY;
                        entity = mike === entity;
                        return entity;
                    };
                    oscar = oscar.bind(foxtrot)(report);
                    report = oscar.map;
                    tango = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        zulu = mike.data;
                        zulu = zulu.user_id;
                        entity['user_id'] = zulu;
                        mike = mike.data;
                        mike = mike.content_id;
                        entity['content_id'] = mike;
                        return entity;
                    };
                    oscar = report.bind(oscar)(tango);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 8;
                    mike = report[mike];
                    report = tango.bind(zulu)(mike);
                    tango = report.fetchHydrated;
                    mike = new Array(0);
                    result = mike;
                    sizing = 0;
                    sizing = arraySpread(result, output, sizing);
                    result = mike;
                    output = yankee;
                    offset = arraySpread(result, output, sizing);
                    echo = report;
                    result = mike;
                    output = golf;
                    sizing = oscar;
                    kilo = verify;
                    backup = options;
                    mike = echo[tango](result, output, sizing, kilo, backup, foxtrot);
                    SaveGenerator(address=312);
 310:
                    return mike;
 312:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 321; continue _fun00007 }
 318:
                    return zulu;
 321:
                    return mike;
 324:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _hydrateNextPage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 137; continue _fun00011 }
 10:
                    tango = _closure1_slot7;
                    zulu = tango.getUnreadDisplayItems;
                    offset = zulu.bind(tango)();
                    tango = _closure1_slot7;
                    zulu = tango.getReadDisplayItems;
                    golf = zulu.bind(tango)();
                    tango = _closure1_slot7;
                    zulu = tango.getNextIndexToHydrate;
                    oscar = zulu.bind(tango)();
                    report = _closure1_slot14;
                    tango = new Array(0);
                    verify = 0;
                    yankee = tango;
                    verify = arraySpread(yankee, offset, verify);
                    yankee = tango;
                    offset = golf;
                    zulu = arraySpread(yankee, offset, verify);
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = golf.bind(zulu)(mike);
                    mike = mike.ICYMI_PAGE_SIZE;
                    mike = oscar + mike;
                    mike = report.bind(zulu)(tango, oscar, mike);
                    SaveGenerator(address=125);
 123:
                    return mike;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00012_ip = 134; continue _fun00011 }
 131:
                    return zulu;
 134:
                    return mike;
 137:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: countReactions
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = argFoo;
            entity = zulu.reactions;
            oscar = null;
            tango = oscar != entity;
            report = 0;
            entity = 0;
            if(!tango) { _fun00014_ip = 95; continue _fun00013 }
 24:
            tango = zulu.reactions;
            if(!(oscar == tango)) { _fun00014_ip = 40; continue _fun00013 }
 34:
            oscar = new Array(0);
            _fun00014_ip = 46; continue _fun00013;
 40:
            oscar = zulu.reactions;
 46:
            tango = oscar.map;
            zulu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = argFoo;
                    entity = tango.count_details;
                    report = null;
                    mike = report == entity;
                    entity = 0;
                    if(mike) { _fun00016_ip = 72; continue _fun00015 }
 20:
                    mike = tango.count_details;
                    oscar = mike.burst;
                    golf = report != oscar;
                    mike = 0;
                    if(!golf) { _fun00016_ip = 44; continue _fun00015 }
 41:
                    mike = oscar;
 44:
                    tango = tango.count_details;
                    tango = tango.normal;
                    report = report != tango;
                    zulu = 0;
                    if(!report) { _fun00016_ip = 68; continue _fun00015 }
 65:
                    zulu = tango;
 68:
                    entity = mike + zulu;
 72:
                    return entity;
                }
            };
            tango = tango.bind(oscar)(zulu);
            zulu = tango.length;
            zulu = zulu > report;
            entity = 0;
            if(!zulu) { _fun00014_ip = 95; continue _fun00013 }
 77:
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                mike = argFoo;
                entity = argBar;
                entity = mike + entity;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 95:
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
    entity = verify.bind(offset)(zulu, entity, report);
    foxtrot = 0;
    report = options[foxtrot];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    romeo = 1;
    report = options[romeo];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    yankee = 2;
    report = options[yankee];
    report = oscar.bind(entity)(report);
    var _closure1_slot5 = report;
    offset = 3;
    report = options[offset];
    report = oscar.bind(entity)(report);
    var _closure1_slot6 = report;
    verify = 4;
    report = options[verify];
    report = oscar.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = options[report];
    report = golf.bind(entity)(report);
    oscar = report.ChannelTypes;
    var _closure1_slot9 = oscar;
    report = report.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot10 = report;
    report = {};
    report['UNKNOWN'] = foxtrot;
    oscar = 'UNKNOWN';
    report[foxtrot] = oscar;
    report['DEFAULT'] = romeo;
    oscar = 'DEFAULT';
    report[romeo] = oscar;
    report['MORE'] = yankee;
    oscar = 'MORE';
    report[yankee] = oscar;
    report['LESS'] = offset;
    oscar = 'LESS';
    report[offset] = oscar;
    report['MUTED'] = verify;
    oscar = 'MUTED';
    report[verify] = oscar;
    var _closure1_slot11 = report;
    oscar = 16;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/gravity/GravityUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['ICYMICustomScore'] = report;
    report = function(argFoo, argBar) { // Original name: isChannelCustomScoreEligible
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            mike = !entity;
            if(mike) { _fun00018_ip = 34; continue _fun00017 }
 12:
            zulu = tango.type;
            entity = _closure1_slot9;
            entity = entity.GUILD_FORUM;
            mike = zulu !== entity;
 34:
            entity = !mike;
            if(!mike) { _fun00018_ip = 87; continue _fun00017 }
 40:
            report = tango.type;
            mike = _closure1_slot9;
            mike = mike.GUILD_ANNOUNCEMENT;
            mike = report === mike;
            if(mike) { _fun00018_ip = 84; continue _fun00017 }
 65:
            tango = tango.type;
            zulu = _closure1_slot9;
            zulu = zulu.GUILD_TEXT;
            mike = tango === zulu;
 84:
            entity = mike;
 87:
            return entity;
        }
    };
    zulu['isChannelCustomScoreEligible'] = report;
    report = function(argFoo) { // Original name: numberToCustomScore
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            mike = argFoo;
            entity = -1.5;
            if(!(!(mike < entity))) { _fun00020_ip = 72; continue _fun00019 }
 17:
            entity = 0;
            if(!(!(mike < entity))) { _fun00020_ip = 57; continue _fun00019 }
 23:
            if(!(!(mike > entity))) { _fun00020_ip = 42; continue _fun00019 }
 27:
            entity = _closure1_slot11;
            entity = entity.DEFAULT;
            _fun00020_ip = 55; continue _fun00019;
 42:
            mike = _closure1_slot11;
            entity = mike.MORE;
 55:
            _fun00020_ip = 70; continue _fun00019;
 57:
            mike = _closure1_slot11;
            entity = mike.LESS;
 70:
            _fun00020_ip = 85; continue _fun00019;
 72:
            mike = _closure1_slot11;
            entity = mike.MUTED;
 85:
            return entity;
        }
    };
    zulu['numberToCustomScore'] = report;
    report = function(argFoo) { // Original name: customScoreToNumber
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot11;
            zulu = zulu.MORE;
            if(!(zulu !== mike)) { _fun00022_ip = 68; continue _fun00021 }
 20:
            zulu = _closure1_slot11;
            zulu = zulu.LESS;
            if(!(zulu !== mike)) { _fun00022_ip = 60; continue _fun00021 }
 34:
            entity = _closure1_slot11;
            entity = entity.MUTED;
            if(!(entity !== mike)) { _fun00022_ip = 52; continue _fun00021 }
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
    zulu['customScoreToNumber'] = report;
    zulu['hydrateItems'] = tango;
    tango = function() { // Original name: hydrateNextPage
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['hydrateNextPage'] = tango;
    tango = function(argFoo, argBar) { // Original name: createGravitySummaryFromServer
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            mike = argFoo;
            tango = new Array(0);
            report = new Array(0);
            zulu = _closure1_slot12;
            entity = mike.messages;
            romeo = undefined;
            result = zulu.bind(romeo)(entity);
            zulu = result.bind(romeo)();
            entity = zulu.done;
            output = 0;
            yankee = null;
            sizing = 5;
            kilo = zulu;
            backup = 0;
            offset = undefined;
            verify = undefined;
            options = undefined;
            golf = undefined;
            oscar = undefined;
            zulu = 0;
            if(entity) { _fun00024_ip = 389; continue _fun00023 }
 70:
            papa = kilo.value;
            entity = papa.reactions;
            echo = backup;
            sequence = offset;
            vacuum = verify;
            control = options;
            source = golf;
            update = oscar;
            if(!(yankee != entity)) { _fun00024_ip = 350; continue _fun00023 }
 106:
            context = tango.length;
            record = options;
            config = golf;
            entity = oscar;
            if(!(context < sizing)) { _fun00024_ip = 322; continue _fun00023 }
 127:
            target = _closure1_slot12;
            context = papa.reactions;
            lima = target.bind(romeo)(context);
            whiskey = lima.bind(romeo)();
            context = whiskey.done;
            sierra = whiskey;
            status = options;
            target = golf;
            offset = sierra;
            verify = lima;
            record = status;
            config = target;
            entity = oscar;
            if(context) { _fun00024_ip = 322; continue _fun00023 }
 181:
            whiskey = sierra.value;
            context = whiskey.count_details;
            context = yankee == context;
            if(context) { _fun00024_ip = 230; continue _fun00023 }
 199:
            equality = whiskey.count_details;
            equality = equality.burst;
            variable36 = yankee != equality;
            quebec = 0;
            if(!variable36) { _fun00024_ip = 223; continue _fun00023 }
 220:
            quebec = equality;
 223:
            context = quebec > output;
            status = equality;
 230:
            quebec = status;
            if(context) { _fun00024_ip = 267; continue _fun00023 }
 236:
            equality = whiskey.count_details;
            equality = equality.normal;
            variable37 = yankee != equality;
            variable36 = 0;
            if(!variable37) { _fun00024_ip = 260; continue _fun00023 }
 257:
            variable36 = equality;
 260:
            context = variable36 > output;
            target = equality;
 267:
            equality = target;
            if(!context) { _fun00024_ip = 283; continue _fun00023 }
 273:
            context = tango.push;
            context = context.bind(tango)(whiskey);
 283:
            variable36 = lima.bind(romeo)();
            context = variable36.done;
            sierra = variable36;
            status = quebec;
            target = equality;
            offset = sierra;
            verify = lima;
            record = status;
            config = target;
            entity = whiskey;
            if(!context) { _fun00024_ip = 181; continue _fun00023 }
 322:
            context = _closure1_slot17;
            context = context.bind(romeo)(papa);
            echo = backup + context;
            sequence = offset;
            vacuum = verify;
            control = record;
            source = config;
            update = entity;
 350:
            config = result.bind(romeo)();
            entity = config.done;
            backup = echo;
            offset = sequence;
            verify = vacuum;
            options = control;
            golf = source;
            oscar = update;
            kilo = config;
            zulu = backup;
            if(!entity) { _fun00024_ip = 70; continue _fun00023 }
 389:
            oscar = _closure1_slot12;
            entity = mike.messages;
            offset = oscar.bind(romeo)(entity);
            oscar = offset.bind(romeo)();
            entity = oscar.done;
            verify = 9;
            options = 3;
            golf = oscar;
            oscar = null;
            if(entity) { _fun00024_ip = 539; continue _fun00023 }
 427:
            entity = golf.value;
            kilo = entity.author;
            backup = oscar;
            if(!(yankee != kilo)) { _fun00024_ip = 521; continue _fun00023 }
 445:
            kilo = entity.author;
            kilo = kilo.id;
            backup = oscar;
            if(!(oscar !== kilo)) { _fun00024_ip = 521; continue _fun00023 }
 463:
            sizing = report.push;
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            kilo = kilo[verify];
            output = output.bind(romeo)(kilo);
            kilo = output.createMessageRecord;
            kilo = kilo.bind(output)(entity);
            kilo = sizing.bind(report)(kilo);
            entity = entity.author;
            backup = entity.id;
            entity = report.length;
            if(!(!(entity >= options))) { _fun00024_ip = 539; continue _fun00023 }
 521:
            kilo = offset.bind(romeo)();
            entity = kilo.done;
            oscar = backup;
            golf = kilo;
            if(!entity) { _fun00024_ip = 427; continue _fun00023 }
 539:
            entity = {};
            oscar = mike.id;
            entity['id'] = oscar;
            oscar = mike.topic;
            entity['topic'] = oscar;
            oscar = mike.summ_short;
            entity['summShort'] = oscar;
            oscar = global;
            options = oscar.Array;
            golf = options.from;
            offset = oscar.Set;
            variable38 = mike.people;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            variable39 = verify;
            oscar = new variable39[offset](variable38, variable37);
            oscar = oscar instanceof Object ? oscar : verify;
            oscar = golf.bind(options)(oscar);
            entity['people'] = oscar;
            oscar = mike.start_id;
            entity['startId'] = oscar;
            oscar = mike.end_id;
            entity['endId'] = oscar;
            oscar = mike.count;
            entity['count'] = oscar;
            oscar = mike.channel_id;
            entity['channelId'] = oscar;
            oscar = mike.type;
            entity['type'] = oscar;
            entity['messages'] = report;
            entity['reactions'] = tango;
            oscar = mike.messages;
            report = oscar.map;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            entity['messageIds'] = tango;
            tango = argBar;
            entity['guildId'] = tango;
            entity['reactionCount'] = zulu;
            zulu = mike.messages;
            zulu = zulu.length;
            entity['numTotalMessages'] = zulu;
            mike = mike.source;
            entity['source'] = mike;
            return entity;
        }
    };
    zulu['createGravitySummaryFromServer'] = tango;
    tango = function(argFoo, argBar) { // Original name: isItemUnreadInChannel
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tango = _closure1_slot6;
            zulu = tango.getTrackedAckMessageId;
            entity = argFoo;
            report = zulu.bind(tango)(entity);
            entity = null;
            entity = entity == report;
            if(entity) { _fun00026_ip = 90; continue _fun00025 }
 30:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 10;
            zulu = golf[mike];
            tango = undefined;
            verify = oscar.bind(tango)(zulu);
            options = verify.extractTimestamp;
            zulu = argBar;
            zulu = options.bind(verify)(zulu);
            mike = golf[mike];
            tango = oscar.bind(tango)(mike);
            mike = tango.extractTimestamp;
            mike = mike.bind(tango)(report);
            entity = zulu > mike;
 90:
            return entity;
        }
    };
    zulu['isItemUnreadInChannel'] = tango;
    tango = function(argFoo) { // Original name: useGravityMessage
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 11;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot5;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot7;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                oscar = _closure1_slot5;
                report = oscar.getMessage;
                entity = _closure2_slot0;
                zulu = entity.getChannelId;
                zulu = zulu.bind(entity)();
                entity = entity.id;
                entity = report.bind(oscar)(zulu, entity);
                zulu = null;
                if(!(zulu == entity)) { _fun00028_ip = 88; continue _fun00027 }
 47:
                oscar = _closure1_slot7;
                report = oscar.getHydratedItem;
                tango = _closure2_slot0;
                tango = tango.id;
                report = report.bind(oscar)(tango);
                oscar = zulu == report;
                tango = undefined;
                if(oscar) { _fun00028_ip = 85; continue _fun00027 }
 80:
                tango = report.message;
 85:
                entity = tango;
 88:
                if(!(zulu == entity)) { _fun00028_ip = 96; continue _fun00027 }
 92:
                entity = _closure2_slot0;
 96:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGravityMessage'] = tango;
    tango = function(argFoo, argBar) { // Original name: useICYMIMessage
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 11;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        options = _closure1_slot5;
        zulu = new Array(2);
        zulu[0] = options;
        mike = _closure1_slot7;
        zulu[1] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = _closure2_slot1;
                zulu = null;
                mike = zulu != entity;
                entity = null;
                if(!mike) { _fun00030_ip = 88; continue _fun00029 }
 18:
                options = _closure1_slot5;
                golf = options.getMessage;
                oscar = _closure2_slot0;
                mike = _closure2_slot1;
                mike = golf.bind(options)(oscar, mike);
                if(!(zulu == mike)) { _fun00030_ip = 85; continue _fun00029 }
 49:
                oscar = _closure1_slot7;
                report = oscar.getHydratedItem;
                tango = _closure2_slot1;
                tango = report.bind(oscar)(tango);
                report = zulu == tango;
                zulu = undefined;
                if(report) { _fun00030_ip = 82; continue _fun00029 }
 77:
                zulu = tango.message;
 82:
                mike = zulu;
 85:
                entity = mike;
 88:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useICYMIMessage'] = tango;
    tango = function(argFoo) { // Original name: icymiEnabled
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getICYMIExperiment;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            tango = _closure1_slot4;
            zulu = tango.get;
            mike = 'hide_icymi_tab';
            mike = zulu.bind(tango)(mike);
            if(!entity) { _fun00032_ip = 65; continue _fun00031 }
 62:
            entity = !mike;
 65:
            return entity;
        }
    };
    zulu['icymiEnabled'] = tango;
    tango = function(argFoo) { // Original name: customStatusToContentInventoryEntry
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.id;
            entity['id'] = zulu;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 7;
            zulu = golf[zulu];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.GravityItemTypes;
            zulu = zulu.CUSTOM_STATUS;
            entity['type'] = zulu;
            zulu = {};
            tango = mike.id;
            zulu['id'] = tango;
            tango = mike.data;
            tango = tango.user_id;
            zulu['author_id'] = tango;
            tango = 13;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.ContentInventoryAuthorType;
            tango = tango.USER;
            zulu['author_type'] = tango;
            tango = new Array(0);
            zulu['traits'] = tango;
            tango = new Array(0);
            zulu['participants'] = tango;
            tango = 14;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.ContentInventoryEntryType;
            tango = tango.CUSTOM_STATUS;
            zulu['content_type'] = tango;
            tango = {};
            report = 'custom_status_extra';
            tango['type'] = report;
            report = mike.data;
            oscar = report.text;
            report = null;
            golf = report != oscar;
            report = '';
            if(!golf) { _fun00034_ip = 196; continue _fun00033 }
 193:
            report = oscar;
 196:
            tango['status'] = report;
            report = mike.data;
            report = report.emoji_id;
            tango['emoji_id'] = report;
            report = mike.data;
            report = report.emoji_name;
            tango['emoji_name'] = report;
            report = mike.data;
            report = report.emoji_animated;
            tango['emoji_animated'] = report;
            report = mike.data;
            report = report.attachments;
            tango['attachments'] = report;
            zulu['extra'] = tango;
            entity['activity'] = zulu;
            zulu = mike.score;
            entity['score'] = zulu;
            mike = mike.score_components;
            entity['score_components'] = mike;
            return entity;
        }
    };
    zulu['customStatusToContentInventoryEntry'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: compareGravityUnreadIds
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            mike = argBaz;
            tango = _closure1_slot8;
            zulu = tango.getReadTimestamp;
            report = zulu.bind(tango)(golf);
            zulu = null;
            if(!(zulu == report)) { _fun00036_ip = 49; continue _fun00035 }
 33:
            options = zulu == mike;
            tango = undefined;
            if(options) { _fun00036_ip = 46; continue _fun00035 }
 42:
            tango = mike[golf];
 46:
            report = tango;
 49:
            tango = _closure1_slot8;
            entity = tango.getReadTimestamp;
            tango = entity.bind(tango)(oscar);
            if(!(zulu == tango)) { _fun00036_ip = 84; continue _fun00035 }
 68:
            golf = zulu == mike;
            entity = undefined;
            if(golf) { _fun00036_ip = 81; continue _fun00035 }
 77:
            entity = mike[oscar];
 81:
            tango = entity;
 84:
            if(!(zulu == report)) { _fun00036_ip = 97; continue _fun00035 }
 88:
            mike = zulu == tango;
            entity = 0;
            if(mike) { _fun00036_ip = 130; continue _fun00035 }
 97:
            oscar = zulu == report;
            mike = -1;
            if(oscar) { _fun00036_ip = 127; continue _fun00035 }
 110:
            oscar = zulu == tango;
            zulu = 1;
            if(oscar) { _fun00036_ip = 124; continue _fun00035 }
 120:
            zulu = tango - report;
 124:
            mike = zulu;
 127:
            entity = mike;
 130:
            return entity;
        }
    };
    zulu['compareGravityUnreadIds'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: gravityFetchMentions
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 15;
        zulu = zulu[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        oscar = golf.fetchRecentMentions;
        yankee = _closure1_slot10;
        romeo = argBaz;
        verify = argFoo;
        options = argBar;
        foxtrot = golf;
        offset = undefined;
        mike = foxtrot[oscar](romeo, yankee, offset, verify, options, golf);
        return entity;
    };
    zulu['gravityFetchMentions'] = mike;
    return entity;
})();