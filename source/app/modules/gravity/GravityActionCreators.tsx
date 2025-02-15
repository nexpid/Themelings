// app/modules/gravity/GravityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: fetchPopularGuildsFromCategories
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 237; continue _fun00001 }
 10: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 3;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    golf = mike.HTTP;
                    tango = golf.post;
                    mike = {};
                    oscar = _closure1_slot5;
                    oscar = oscar.GRAVITY_TOPIC_GUILDS;
                    mike['url'] = oscar;
                    options = {};
                    verify = _closure2_slot0;
                    options['category_ids'] = verify;
                    verify = _closure2_slot1;
                    options['offset'] = verify;
                    mike['body'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=104);
 102:
                    return mike;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 191; continue _fun00001 }
 110:
                    tango = mike.body;
                    golf = tango.guilds;
                    tango = _closure1_slot1;
                    options = _closure1_slot2;
                    zulu = 4;
                    zulu = options[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    options = 'LOAD_GRAVITY_POPULAR_GUILDS';
                    zulu['type'] = options;
                    options = _closure2_slot0;
                    zulu['categoryIds'] = options;
                    zulu['guilds'] = golf;
                    oscar = _closure2_slot1;
                    zulu['offset'] = oscar;
                    zulu = tango.bind(report)(zulu);
 186: // try_end0
                    zulu = true;
                    return zulu;
 191:
                    return mike;
 194: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.captureException;
                    mike = mike.bind(zulu)(tango);
                    mike = false;
                    return mike;
 237:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchPopularGuildsFromCategories'] = golf;
    golf = function() { // Original name: fetchDehydrated
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = arguments[0];
            mike = undefined;
            if(!(zulu === mike)) { _fun00004_ip = 13; continue _fun00003 }
 11:
            zulu = {};
 13:
            tango = zulu.isReloading;
            var _closure2_slot0 = tango;
            zulu = zulu.forceRefresh;
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00006_ip = 378; continue _fun00005 }
 10:
                        mike = undefined;
                        golf = undefined;
                        verify = undefined;
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        tango = 6;
                        tango = oscar[tango];
                        oscar = report.bind(mike)(tango);
                        report = oscar.icymiEnabled;
                        tango = 'fetchDehydrated';
                        tango = report.bind(oscar)(tango);
                        if(!tango) { _fun00006_ip = 375; continue _fun00005 }
 60:
                        tango = _closure2_slot0;
                        if(!tango) { _fun00006_ip = 114; continue _fun00005 }
 70:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 4;
                        tango = oscar[tango];
                        oscar = report.bind(mike)(tango);
                        report = oscar.dispatch;
                        tango = {'type': 'GRAVITY_SET_REFRESHING', 'refreshing': true};
                        tango = report.bind(oscar)(tango);
 114:
                        report = _closure1_slot4;
                        tango = report.negativeContentOnly;
                        golf = tango.bind(report)();
 128: // try_start_0
                        tango = global;
                        report = tango.Date;
                        tango = report.now;
                        verify = tango.bind(report)();
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        tango = 3;
                        tango = oscar[tango];
                        tango = report.bind(mike)(tango);
                        oscar = tango.HTTP;
                        report = oscar.get;
                        tango = {};
                        offset = _closure1_slot5;
                        if(golf) { _fun00006_ip = 192; continue _fun00005 }
 184:
                        golf = offset.GRAVITY_ITEMS_DEHYDRATED;
                        _fun00006_ip = 198; continue _fun00005;
 192:
                        golf = offset.GRAVITY_ITEMS_NEGATIVE;
 198:
                        tango['url'] = golf;
                        golf = {};
                        offset = _closure2_slot1;
                        golf['refresh'] = offset;
                        tango['query'] = golf;
                        golf = false;
                        tango['rejectWithError'] = golf;
                        tango = report.bind(oscar)(tango);
                        SaveGenerator(address=232);
 230:
                        return tango;
 232:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(report) { _fun00006_ip = 339; continue _fun00005 }
 238:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        report = 4;
                        report = golf[report];
                        golf = oscar.bind(mike)(report);
                        oscar = golf.dispatch;
                        report = {};
                        offset = 'LOAD_GRAVITY_DEHYDRATED';
                        report['type'] = offset;
                        offset = tango.body;
                        offset = offset.items;
                        report['items'] = offset;
                        offset = tango.body;
                        offset = offset.load_id;
                        report['loadId'] = offset;
                        report['startTime'] = verify;
                        options = _closure2_slot0;
                        report['isReloading'] = options;
                        report = oscar.bind(golf)(report);
                        SaveGenerator(address=328);
 326:
                        return report;
 328:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(oscar) { _fun00006_ip = 336; continue _fun00005 }
 334: // try_end0
                        _fun00006_ip = 375; continue _fun00005;
 336:
                        return report;
 339:
                        return tango;
 342: // catch_target0
                        CatchBlockStart(arg_register=4);
                        tango = _closure1_slot1;
                        oscar = _closure1_slot2;
                        zulu = 5;
                        zulu = oscar[zulu];
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.captureException;
                        zulu = zulu.bind(tango)(report);
 375:
                        return mike;
 378:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['fetchDehydrated'] = golf;
    golf = function(argFoo, argBar) { // Original name: gravityJoinGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 211; continue _fun00007 }
 10:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 6;
                    zulu = report[zulu];
                    report = undefined;
                    oscar = tango.bind(report)(zulu);
                    tango = oscar.icymiEnabled;
                    zulu = 'gravityJoinGuild';
                    zulu = tango.bind(oscar)(zulu);
                    if(!zulu) { _fun00008_ip = 71; continue _fun00007 }
 53:
                    zulu = _closure2_slot0;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu === tango)) { _fun00008_ip = 74; continue _fun00007 }
 71:
                    return report;
 74: // try_start_0
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 3;
                    zulu = oscar[zulu];
                    zulu = tango.bind(report)(zulu);
                    oscar = zulu.HTTP;
                    tango = oscar.post;
                    zulu = {};
                    golf = _closure1_slot5;
                    golf = golf.GRAVITY_JOIN_GUILD;
                    zulu['url'] = golf;
                    golf = {};
                    verify = _closure2_slot0;
                    golf['guild_ids'] = verify;
                    options = _closure2_slot1;
                    golf['location'] = options;
                    zulu['body'] = golf;
                    golf = false;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(oscar)(zulu);
                    SaveGenerator(address=159);
 157:
                    return zulu;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 170; continue _fun00007 }
 165: // try_end0
                    tango = true;
                    return tango;
 170:
                    return zulu;
 173: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 5;
                    mike = oscar[mike];
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.captureException;
                    mike = mike.bind(zulu)(tango);
                    mike = false;
                    return mike;
 211:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['gravityJoinGuild'] = golf;
    golf = function(argFoo) { // Original name: setGravitySelectedChannel
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SET_GRAVITY_SELECTED_CHANNEL';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setGravitySelectedChannel'] = golf;
    golf = function(argFoo, argBar) { // Original name: fetchForNotification
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 318; continue _fun00009 }
 10:
                    mike = undefined;
                    options = undefined;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 6;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.icymiEnabled;
                    tango = 'fetchInitial';
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun00010_ip = 315; continue _fun00009 }
 60: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    oscar = tango.HTTP;
                    report = oscar.post;
                    tango = {};
                    golf = _closure1_slot5;
                    golf = golf.GRAVITY_ITEMS_HYDRATE;
                    tango['url'] = golf;
                    golf = {};
                    offset = {};
                    yankee = _closure2_slot0;
                    offset['channel_id'] = yankee;
                    verify = _closure2_slot1;
                    offset['message_id'] = verify;
                    verify = new Array(1);
                    verify[0] = offset;
                    golf['message_items'] = verify;
                    verify = new Array(0);
                    golf['summary_items'] = verify;
                    verify = new Array(0);
                    golf['activity_items'] = verify;
                    tango['body'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=181);
 179:
                    return tango;
 181:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 279; continue _fun00009 }
 187:
                    options = tango;
                    report = tango.body;
                    report = report.message_items;
                    report = report.length;
                    verify = 0;
                    if(!(verify !== report)) { _fun00010_ip = 276; continue _fun00009 }
 212:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.dispatch;
                    report = {};
                    offset = 'LOAD_GRAVITY_FROM_NOTIFICATION';
                    report['type'] = offset;
                    options = options.body;
                    options = options.message_items;
                    options = options[verify];
                    report['messageItem'] = options;
                    report = oscar.bind(golf)(report);
 274: // try_end0
                    _fun00010_ip = 315; continue _fun00009;
 276:
                    return mike;
 279:
                    return tango;
 282: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
 315:
                    return mike;
 318:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchForNotification'] = golf;
    golf = function(argFoo) { // Original name: fetchForStatusNotification
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.icymiEnabled;
            zulu = 'fetchInitialStatus';
            zulu = tango.bind(report)(zulu);
            if(!zulu) { _fun00012_ip = 95; continue _fun00011 }
 45:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 4;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'LOAD_GRAVITY_FROM_NOTIFICATION';
            mike['type'] = report;
            report = argFoo;
            mike['customStatusItem'] = report;
            mike = zulu.bind(tango)(mike);
 95:
            return entity;
        }
    };
    mike['fetchForStatusNotification'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: fetchHydrated
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        mike = argGrault;
        var _closure2_slot4 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 501; continue _fun00013 }
 10:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 6;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.icymiEnabled;
                    tango = 'fetchHydrated';
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun00014_ip = 498; continue _fun00013 }
 56:
                    tango = _closure2_slot0;
                    tango = tango.length;
                    report = 0;
                    if(!(report === tango)) { _fun00014_ip = 223; continue _fun00013 }
 77:
                    tango = _closure2_slot1;
                    tango = tango.length;
                    if(!(report === tango)) { _fun00014_ip = 223; continue _fun00013 }
 93:
                    tango = _closure2_slot2;
                    tango = tango.length;
                    if(!(report === tango)) { _fun00014_ip = 223; continue _fun00013 }
 106:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 4;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'LOAD_GRAVITY_HYDRATED';
                    tango['type'] = golf;
                    golf = new Array(0);
                    tango['requestMessageItems'] = golf;
                    golf = new Array(0);
                    tango['requestSummaryItems'] = golf;
                    golf = new Array(0);
                    tango['requestActivityItems'] = golf;
                    golf = new Array(0);
                    tango['messageItems'] = golf;
                    golf = new Array(0);
                    tango['summaryItems'] = golf;
                    golf = new Array(0);
                    tango['activityItems'] = golf;
                    golf = _closure2_slot3;
                    tango['startingIndex'] = golf;
                    golf = _closure2_slot4;
                    tango['endingIndex'] = golf;
                    tango = report.bind(oscar)(tango);
                    _fun00014_ip = 498; continue _fun00013;
 223: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    oscar = tango.HTTP;
                    report = oscar.post;
                    tango = {};
                    golf = _closure1_slot5;
                    golf = golf.GRAVITY_ITEMS_HYDRATE;
                    tango['url'] = golf;
                    golf = {};
                    verify = _closure2_slot0;
                    golf['message_items'] = verify;
                    verify = _closure2_slot1;
                    golf['summary_items'] = verify;
                    verify = _closure2_slot2;
                    golf['activity_items'] = verify;
                    tango['body'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=318);
 316:
                    return tango;
 318:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 462; continue _fun00013 }
 327:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'LOAD_GRAVITY_HYDRATED';
                    report['type'] = verify;
                    verify = _closure2_slot0;
                    report['requestMessageItems'] = verify;
                    verify = _closure2_slot1;
                    report['requestSummaryItems'] = verify;
                    verify = _closure2_slot2;
                    report['requestActivityItems'] = verify;
                    verify = tango.body;
                    verify = verify.message_items;
                    report['messageItems'] = verify;
                    verify = tango.body;
                    verify = verify.summary_items;
                    report['summaryItems'] = verify;
                    verify = tango.body;
                    verify = verify.activity_items;
                    report['activityItems'] = verify;
                    verify = _closure2_slot3;
                    report['startingIndex'] = verify;
                    options = _closure2_slot4;
                    report['endingIndex'] = options;
                    report = oscar.bind(golf)(report);
 460: // try_end0
                    _fun00014_ip = 498; continue _fun00013;
 462:
                    return tango;
 465: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
 498:
                    return mike;
 501:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchHydrated'] = golf;
    golf = function() { // Original name: getGuildChannelScores
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 218; continue _fun00015 }
 10:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 6;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.icymiEnabled;
                    tango = 'guildChannelScores';
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun00016_ip = 215; continue _fun00015 }
 58: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    oscar = tango.HTTP;
                    report = oscar.get;
                    tango = {};
                    golf = _closure1_slot5;
                    golf = golf.GRAVITY_CUSTOM_SCORES;
                    tango['url'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=119);
 117:
                    return tango;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00016_ip = 179; continue _fun00015 }
 125:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'LOAD_GRAVITY_CUSTOM_SCORES';
                    report['type'] = options;
                    options = tango.body;
                    report['scores'] = options;
                    report = oscar.bind(golf)(report);
 177: // try_end0
                    _fun00016_ip = 215; continue _fun00015;
 179:
                    return tango;
 182: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
 215:
                    return mike;
 218:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['getGuildChannelScores'] = golf;
    golf = function() { // Original name: getRecommendedGuilds
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00018_ip = 224; continue _fun00017 }
 10:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 6;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.icymiEnabled;
                    tango = 'recommendedGuilds';
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun00018_ip = 221; continue _fun00017 }
 58: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    oscar = tango.HTTP;
                    report = oscar.get;
                    tango = {};
                    golf = _closure1_slot5;
                    golf = golf.GRAVITY_RECOMMENDED_GUILDS;
                    tango['url'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=119);
 117:
                    return tango;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00018_ip = 185; continue _fun00017 }
 125:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'LOAD_GRAVITY_RECOMMENDED_GUILDS';
                    report['type'] = options;
                    options = tango.body;
                    options = options.guilds;
                    report['guilds'] = options;
                    report = oscar.bind(golf)(report);
 183: // try_end0
                    _fun00018_ip = 221; continue _fun00017;
 185:
                    return tango;
 188: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
 221:
                    return mike;
 224:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['getRecommendedGuilds'] = golf;
    golf = function() { // Original name: getMediaForCurrentStatus
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00020_ip = 314; continue _fun00019 }
 10:
                    mike = undefined;
                    options = undefined;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 6;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.icymiEnabled;
                    tango = 'mediaForCurrentStatus';
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun00020_ip = 311; continue _fun00019 }
 60:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 7;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    report = tango.CustomStatusSetting;
                    tango = report.getSetting;
                    tango = tango.bind(report)();
                    options = tango;
                    report = null;
                    if(!(report != tango)) { _fun00020_ip = 311; continue _fun00019 }
 108:
                    tango = options;
                    tango = tango.createdAtMs;
                    if(!(report != tango)) { _fun00020_ip = 311; continue _fun00019 }
 124: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    oscar = tango.HTTP;
                    report = oscar.get;
                    tango = {};
                    golf = _closure1_slot5;
                    golf = golf.GRAVITY_ATTACHMENTS;
                    tango['url'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=185);
 183:
                    return tango;
 185:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 275; continue _fun00019 }
 191:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'LOAD_GRAVITY_CURRENT_STATUS_MEDIA';
                    report['type'] = verify;
                    verify = tango.body;
                    verify = verify.attachments;
                    report['attachments'] = verify;
                    verify = global;
                    verify = verify.Number;
                    options = options.createdAtMs;
                    options = verify.bind(mike)(options);
                    report['createdAtMs'] = options;
                    report = oscar.bind(golf)(report);
 273: // try_end0
                    _fun00020_ip = 311; continue _fun00019;
 275:
                    return tango;
 278: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
 311:
                    return mike;
 314:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['getMediaForCurrentStatus'] = golf;
    golf = function() { // Original name: reloadICYMITab
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'RELOAD_GRAVITY';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['reloadICYMITab'] = golf;
    golf = function() { // Original name: openICYMITab
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GRAVITY_TAB_OPENED';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['openICYMITab'] = golf;
    golf = function(argFoo, argBar) { // Original name: ackGravityItems
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'GRAVITY_ACK_ITEMS';
        entity['type'] = tango;
        tango = argFoo;
        entity['items'] = tango;
        tango = argBar;
        entity['override'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['ackGravityItems'] = golf;
    golf = function(argFoo) { // Original name: gravityScrollEvent
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'GRAVITY_SCROLL_EVENT';
        entity['type'] = tango;
        tango = argFoo;
        entity['timestamp'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['gravityScrollEvent'] = golf;
    golf = function(argFoo) { // Original name: setFilters
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'SET_GRAVITY_FILTERS';
        entity['type'] = tango;
        tango = argFoo;
        entity['filters'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['setFilters'] = golf;
    golf = function() { // Original name: giveFeedback
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'GRAVITY_FEEDBACK_GIVEN';
        entity['type'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['giveFeedback'] = golf;
    golf = function() { // Original name: clearReadStates
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'CLEAR_GRAVITY_READ_STATES';
        entity['type'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['clearReadStates'] = golf;
    golf = function() { // Original name: addedRecommendedGuild
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.dispatch;
        entity = {};
        tango = 'GRAVITY_JOINED_RECOMMENDED_GUILD';
        entity['type'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['addedRecommendedGuild'] = golf;
    golf = function(argFoo) { // Original name: setVideosMuted
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GRAVITY_SET_VIDEOS_MUTED';
        mike['type'] = report;
        report = argFoo;
        mike['muted'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setVideosMuted'] = golf;
    tango = function(argFoo) { // Original name: setTabFocused
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GRAVITY_SET_FOCUSED_TAB';
        mike['type'] = report;
        report = argFoo;
        mike['focused'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setTabFocused'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gravity/GravityActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();