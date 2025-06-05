// app/modules/gravity/GravityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: fetchPopularGuildsFromCategories
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 237; continue _fun00001 }
 10: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 3;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    golfie = michal.HTTP;
                    tangon = golfie.post;
                    michal = {};
                    oscard = _closure1_slot5;
                    oscard = oscard.GRAVITY_TOPIC_GUILDS;
                    michal['url'] = oscard;
                    option = {};
                    verify = _closure2_slot0;
                    option['category_ids'] = verify;
                    verify = _closure2_slot1;
                    option['offset'] = verify;
                    michal['body'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=104);
 102:
                    return michal;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 191; continue _fun00001 }
 110:
                    tangon = michal.body;
                    golfie = tangon.guilds;
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = option[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    option = 'LOAD_GRAVITY_POPULAR_GUILDS';
                    zuuluu['type'] = option;
                    option = _closure2_slot0;
                    zuuluu['categoryIds'] = option;
                    zuuluu['guilds'] = golfie;
                    oscard = _closure2_slot1;
                    zuuluu['offset'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 186: // try_end0
                    zuuluu = true;
                    return zuuluu;
 191:
                    return michal;
 194: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.captureException;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = false;
                    return michal;
 237:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchPopularGuildsFromCategories'] = golfie;
    golfie = function() { // Original name: fetchDehydrated
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = arguments[0];
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00004_ip = 13; continue _fun00003 }
 11:
            zuuluu = {};
 13:
            tangon = zuuluu.isInitialLoad;
            var _closure2_slot0 = tangon;
            tangon = zuuluu.isReloading;
            var _closure2_slot1 = tangon;
            zuuluu = zuuluu.forceRefresh;
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 387; continue _fun00005 }
 10:
                        michal = undefined;
                        golfie = undefined;
                        verify = undefined;
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        tangon = 6;
                        tangon = oscard[tangon];
                        oscard = report.bind(michal)(tangon);
                        report = oscard.icymiEnabled;
                        tangon = 'fetchDehydrated';
                        tangon = report.bind(oscard)(tangon);
                        if(!tangon) { _fun00006_ip = 384; continue _fun00005 }
 60:
                        tangon = _closure2_slot1;
                        if(!tangon) { _fun00006_ip = 114; continue _fun00005 }
 70:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 4;
                        tangon = oscard[tangon];
                        oscard = report.bind(michal)(tangon);
                        report = oscard.dispatch;
                        tangon = {'type': 'GRAVITY_SET_REFRESHING', 'refreshing': true};
                        tangon = report.bind(oscard)(tangon);
 114:
                        report = _closure1_slot4;
                        tangon = report.negativeContentOnly;
                        golfie = tangon.bind(report)();
 128: // try_start_0
                        tangon = global;
                        report = tangon.Date;
                        tangon = report.now;
                        verify = tangon.bind(report)();
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        tangon = 3;
                        tangon = oscard[tangon];
                        tangon = report.bind(michal)(tangon);
                        oscard = tangon.HTTP;
                        report = oscard.get;
                        tangon = {};
                        offset = _closure1_slot5;
                        if(golfie) { _fun00006_ip = 192; continue _fun00005 }
 184:
                        golfie = offset.GRAVITY_ITEMS_DEHYDRATED;
                        _fun00006_ip = 198; continue _fun00005;
 192:
                        golfie = offset.GRAVITY_ITEMS_NEGATIVE;
 198:
                        tangon['url'] = golfie;
                        golfie = {};
                        offset = _closure2_slot2;
                        golfie['refresh'] = offset;
                        tangon['query'] = golfie;
                        golfie = false;
                        tangon['rejectWithError'] = golfie;
                        tangon = report.bind(oscard)(tangon);
                        SaveGenerator(address=232);
 230:
                        return tangon;
 232:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(report) { _fun00006_ip = 348; continue _fun00005 }
 238:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        report = 4;
                        report = golfie[report];
                        golfie = oscard.bind(michal)(report);
                        oscard = golfie.dispatch;
                        report = {};
                        offset = 'LOAD_GRAVITY_DEHYDRATED';
                        report['type'] = offset;
                        offset = tangon.body;
                        offset = offset.items;
                        report['items'] = offset;
                        offset = tangon.body;
                        offset = offset.load_id;
                        report['loadId'] = offset;
                        report['startTime'] = verify;
                        verify = _closure2_slot1;
                        report['isReloading'] = verify;
                        option = _closure2_slot0;
                        report['isInitialLoad'] = option;
                        report = oscard.bind(golfie)(report);
                        SaveGenerator(address=337);
 335:
                        return report;
 337:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(oscard) { _fun00006_ip = 345; continue _fun00005 }
 343: // try_end0
                        _fun00006_ip = 384; continue _fun00005;
 345:
                        return report;
 348:
                        return tangon;
 351: // catch_target0
                        CatchBlockStart(arg_register=4);
                        tangon = _closure1_slot1;
                        oscard = _closure1_slot2;
                        zuuluu = 5;
                        zuuluu = oscard[zuuluu];
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.captureException;
                        zuuluu = zuuluu.bind(tangon)(report);
 384:
                        return michal;
 387:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['fetchDehydrated'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: gravityJoinGuild
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 211; continue _fun00007 }
 10:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 6;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    oscard = tangon.bind(report)(zuuluu);
                    tangon = oscard.icymiEnabled;
                    zuuluu = 'gravityJoinGuild';
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    if(!zuuluu) { _fun00008_ip = 71; continue _fun00007 }
 53:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu === tangon)) { _fun00008_ip = 74; continue _fun00007 }
 71:
                    return report;
 74: // try_start_0
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    oscard = zuuluu.HTTP;
                    tangon = oscard.post;
                    zuuluu = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.GRAVITY_JOIN_GUILD;
                    zuuluu['url'] = golfie;
                    golfie = {};
                    verify = _closure2_slot0;
                    golfie['guild_ids'] = verify;
                    option = _closure2_slot1;
                    golfie['location'] = option;
                    zuuluu['body'] = golfie;
                    golfie = false;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=159);
 157:
                    return zuuluu;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 170; continue _fun00007 }
 165: // try_end0
                    tangon = true;
                    return tangon;
 170:
                    return zuuluu;
 173: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zuuluu = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 5;
                    michal = oscard[michal];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.captureException;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = false;
                    return michal;
 211:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['gravityJoinGuild'] = golfie;
    golfie = function(argFoo) { // Original name: setGravitySelectedChannel
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SET_GRAVITY_SELECTED_CHANNEL';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setGravitySelectedChannel'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: fetchForNotification
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 327; continue _fun00009 }
 10:
                    michal = undefined;
                    option = undefined;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 6;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.icymiEnabled;
                    tangon = 'fetchInitial';
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00010_ip = 324; continue _fun00009 }
 60: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.post;
                    tangon = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.GRAVITY_ITEMS_HYDRATE;
                    tangon['url'] = golfie;
                    golfie = {};
                    offset = {};
                    yankee = _closure2_slot0;
                    offset['channel_id'] = yankee;
                    verify = _closure2_slot1;
                    offset['message_id'] = verify;
                    verify = new Array(1);
                    verify[0] = offset;
                    golfie['message_items'] = verify;
                    verify = new Array(0);
                    golfie['summary_items'] = verify;
                    verify = new Array(0);
                    golfie['activity_items'] = verify;
                    verify = new Array(0);
                    golfie['generated_candidate_items'] = verify;
                    tangon['body'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=190);
 188:
                    return tangon;
 190:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 288; continue _fun00009 }
 196:
                    option = tangon;
                    report = tangon.body;
                    report = report.message_items;
                    report = report.length;
                    verify = 0;
                    if(!(verify !== report)) { _fun00010_ip = 285; continue _fun00009 }
 221:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    offset = 'LOAD_GRAVITY_FROM_NOTIFICATION';
                    report['type'] = offset;
                    option = option.body;
                    option = option.message_items;
                    option = option[verify];
                    report['messageItem'] = option;
                    report = oscard.bind(golfie)(report);
 283: // try_end0
                    _fun00010_ip = 324; continue _fun00009;
 285:
                    return michal;
 288:
                    return tangon;
 291: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
 324:
                    return michal;
 327:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchForNotification'] = golfie;
    golfie = function(argFoo) { // Original name: fetchForStatusNotification
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.icymiEnabled;
            zuuluu = 'fetchInitialStatus';
            zuuluu = tangon.bind(report)(zuuluu);
            if(!zuuluu) { _fun00012_ip = 95; continue _fun00011 }
 45:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 4;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'LOAD_GRAVITY_FROM_NOTIFICATION';
            michal['type'] = report;
            report = argFoo;
            michal['customStatusItem'] = report;
            michal = zuuluu.bind(tangon)(michal);
 95:
            return entity;
        }
    };
    michal['fetchForStatusNotification'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: fetchHydrated
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 668; continue _fun00013 }
 10:
                    michal = undefined;
                    verify = undefined;
                    backup = undefined;
                    foxtra = undefined;
                    yankee = undefined;
                    romeon = undefined;
                    offset = undefined;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 6;
                    tangon = oscard[tangon];
                    report = report.bind(michal)(tangon);
                    tangon = report.icymiEnabled;
                    oscard = 'fetchHydrated';
                    tangon = tangon.bind(report)(oscard);
                    if(!tangon) { _fun00014_ip = 665; continue _fun00013 }
 68:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 7;
                    tangon = golfie[tangon];
                    report = report.bind(michal)(tangon);
                    tangon = report.getICYMINewConversationSummaryExperiment;
                    golfie = false;
                    tangon = tangon.bind(report)(oscard, golfie);
                    verify = tangon.contentGenerationEnabled;
                    report = _closure2_slot2;
                    tangon = report.messageItems;
                    backup = tangon;
                    foxtra = report.summaryItems;
                    yankee = report.activityItems;
                    romeon = report.generatedCandidateItems;
                    tangon = tangon.length;
                    report = 0;
                    if(!(report === tangon)) { _fun00014_ip = 336; continue _fun00013 }
 156:
                    tangon = foxtra;
                    tangon = tangon.length;
                    if(!(report === tangon)) { _fun00014_ip = 336; continue _fun00013 }
 171:
                    tangon = yankee;
                    tangon = tangon.length;
                    if(!(report === tangon)) { _fun00014_ip = 336; continue _fun00013 }
 186:
                    tangon = romeon;
                    tangon = tangon.length;
                    if(!(report === tangon)) { _fun00014_ip = 336; continue _fun00013 }
 201:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 4;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    kiloes = 'LOAD_GRAVITY_HYDRATED';
                    tangon['type'] = kiloes;
                    kiloes = new Array(0);
                    tangon['requestMessageItems'] = kiloes;
                    kiloes = new Array(0);
                    tangon['requestSummaryItems'] = kiloes;
                    kiloes = new Array(0);
                    tangon['requestActivityItems'] = kiloes;
                    kiloes = new Array(0);
                    tangon['requestGeneratedCandidateItems'] = kiloes;
                    kiloes = new Array(0);
                    tangon['messageItems'] = kiloes;
                    kiloes = new Array(0);
                    tangon['summaryItems'] = kiloes;
                    kiloes = new Array(0);
                    tangon['activityItems'] = kiloes;
                    kiloes = new Array(0);
                    tangon['generatedCandidateItems'] = kiloes;
                    kiloes = _closure2_slot0;
                    tangon['startingIndex'] = kiloes;
                    kiloes = _closure2_slot1;
                    tangon['endingIndex'] = kiloes;
                    tangon = report.bind(oscard)(tangon);
                    _fun00014_ip = 665; continue _fun00013;
 336: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.post;
                    tangon = {};
                    kiloes = _closure1_slot5;
                    kiloes = kiloes.GRAVITY_ITEMS_HYDRATE;
                    tangon['url'] = kiloes;
                    kiloes = {};
                    sizing = backup;
                    kiloes['message_items'] = sizing;
                    sizing = foxtra;
                    kiloes['summary_items'] = sizing;
                    sizing = yankee;
                    kiloes['activity_items'] = sizing;
                    sizing = verify;
                    if(sizing) { _fun00014_ip = 421; continue _fun00013 }
 415:
                    sizing = new Array(0);
                    _fun00014_ip = 424; continue _fun00013;
 421:
                    sizing = romeon;
 424:
                    kiloes['generated_candidate_items'] = sizing;
                    tangon['body'] = kiloes;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=446);
 444:
                    return tangon;
 446:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 629; continue _fun00013 }
 455:
                    offset = tangon;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    kiloes = 'LOAD_GRAVITY_HYDRATED';
                    report['type'] = kiloes;
                    report['requestMessageItems'] = backup;
                    report['requestSummaryItems'] = foxtra;
                    report['requestActivityItems'] = yankee;
                    yankee = verify;
                    if(yankee) { _fun00014_ip = 520; continue _fun00013 }
 514:
                    yankee = new Array(0);
                    _fun00014_ip = 523; continue _fun00013;
 520:
                    yankee = romeon;
 523:
                    report['requestGeneratedCandidateItems'] = yankee;
                    yankee = offset;
                    romeon = yankee.body;
                    romeon = romeon.message_items;
                    report['messageItems'] = romeon;
                    romeon = yankee.body;
                    romeon = romeon.summary_items;
                    report['summaryItems'] = romeon;
                    yankee = yankee.body;
                    yankee = yankee.activity_items;
                    report['activityItems'] = yankee;
                    if(verify) { _fun00014_ip = 588; continue _fun00013 }
 582:
                    verify = new Array(0);
                    _fun00014_ip = 599; continue _fun00013;
 588:
                    offset = offset.body;
                    verify = offset.generated_candidate_items;
 599:
                    report['generatedCandidateItems'] = verify;
                    verify = _closure2_slot0;
                    report['startingIndex'] = verify;
                    option = _closure2_slot1;
                    report['endingIndex'] = option;
                    report = oscard.bind(golfie)(report);
 627: // try_end0
                    _fun00014_ip = 665; continue _fun00013;
 629:
                    return tangon;
 632: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
 665:
                    return michal;
 668:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchHydrated'] = golfie;
    golfie = function() { // Original name: getGuildChannelScores
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 218; continue _fun00015 }
 10:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 6;
                    tangon = tangon[michal];
                    michal = undefined;
                    oscard = report.bind(michal)(tangon);
                    report = oscard.icymiEnabled;
                    tangon = 'guildChannelScores';
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00016_ip = 215; continue _fun00015 }
 58: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.get;
                    tangon = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.GRAVITY_CUSTOM_SCORES;
                    tangon['url'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=119);
 117:
                    return tangon;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00016_ip = 179; continue _fun00015 }
 125:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'LOAD_GRAVITY_CUSTOM_SCORES';
                    report['type'] = option;
                    option = tangon.body;
                    report['scores'] = option;
                    report = oscard.bind(golfie)(report);
 177: // try_end0
                    _fun00016_ip = 215; continue _fun00015;
 179:
                    return tangon;
 182: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
 215:
                    return michal;
 218:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['getGuildChannelScores'] = golfie;
    golfie = function() { // Original name: getRecommendedGuilds
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 224; continue _fun00017 }
 10:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 6;
                    tangon = tangon[michal];
                    michal = undefined;
                    oscard = report.bind(michal)(tangon);
                    report = oscard.icymiEnabled;
                    tangon = 'recommendedGuilds';
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00018_ip = 221; continue _fun00017 }
 58: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.get;
                    tangon = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.GRAVITY_RECOMMENDED_GUILDS;
                    tangon['url'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=119);
 117:
                    return tangon;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00018_ip = 185; continue _fun00017 }
 125:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'LOAD_GRAVITY_RECOMMENDED_GUILDS';
                    report['type'] = option;
                    option = tangon.body;
                    option = option.guilds;
                    report['guilds'] = option;
                    report = oscard.bind(golfie)(report);
 183: // try_end0
                    _fun00018_ip = 221; continue _fun00017;
 185:
                    return tangon;
 188: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
 221:
                    return michal;
 224:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['getRecommendedGuilds'] = golfie;
    golfie = function() { // Original name: getMediaForCurrentStatus
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00020_ip = 314; continue _fun00019 }
 10:
                    michal = undefined;
                    option = undefined;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 6;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.icymiEnabled;
                    tangon = 'mediaForCurrentStatus';
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00020_ip = 311; continue _fun00019 }
 60:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 8;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    report = tangon.CustomStatusSetting;
                    tangon = report.getSetting;
                    tangon = tangon.bind(report)();
                    option = tangon;
                    report = null;
                    if(!(report != tangon)) { _fun00020_ip = 311; continue _fun00019 }
 108:
                    tangon = option;
                    tangon = tangon.createdAtMs;
                    if(!(report != tangon)) { _fun00020_ip = 311; continue _fun00019 }
 124: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.get;
                    tangon = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.GRAVITY_ATTACHMENTS;
                    tangon['url'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=185);
 183:
                    return tangon;
 185:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 275; continue _fun00019 }
 191:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    verify = 'LOAD_GRAVITY_CURRENT_STATUS_MEDIA';
                    report['type'] = verify;
                    verify = tangon.body;
                    verify = verify.attachments;
                    report['attachments'] = verify;
                    verify = global;
                    verify = verify.Number;
                    option = option.createdAtMs;
                    option = verify.bind(michal)(option);
                    report['createdAtMs'] = option;
                    report = oscard.bind(golfie)(report);
 273: // try_end0
                    _fun00020_ip = 311; continue _fun00019;
 275:
                    return tangon;
 278: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
 311:
                    return michal;
 314:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['getMediaForCurrentStatus'] = golfie;
    golfie = function() { // Original name: reloadICYMITab
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'RELOAD_GRAVITY';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['reloadICYMITab'] = golfie;
    golfie = function() { // Original name: openICYMITab
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GRAVITY_TAB_OPENED';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['openICYMITab'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: ackGravityItems
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'GRAVITY_ACK_ITEMS';
        entity['type'] = tangon;
        tangon = argFoo;
        entity['items'] = tangon;
        tangon = argBar;
        entity['override'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['ackGravityItems'] = golfie;
    golfie = function(argFoo) { // Original name: gravityScrollEvent
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'GRAVITY_SCROLL_EVENT';
        entity['type'] = tangon;
        tangon = argFoo;
        entity['timestamp'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['gravityScrollEvent'] = golfie;
    golfie = function(argFoo) { // Original name: setFilters
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'SET_GRAVITY_FILTERS';
        entity['type'] = tangon;
        tangon = argFoo;
        entity['filters'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['setFilters'] = golfie;
    golfie = function() { // Original name: giveFeedback
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'GRAVITY_FEEDBACK_GIVEN';
        entity['type'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['giveFeedback'] = golfie;
    golfie = function() { // Original name: clearReadStates
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'CLEAR_GRAVITY_READ_STATES';
        entity['type'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['clearReadStates'] = golfie;
    golfie = function() { // Original name: addedRecommendedGuild
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.dispatch;
        entity = {};
        tangon = 'GRAVITY_JOINED_RECOMMENDED_GUILD';
        entity['type'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['addedRecommendedGuild'] = golfie;
    golfie = function(argFoo) { // Original name: setVideosMuted
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GRAVITY_SET_VIDEOS_MUTED';
        michal['type'] = report;
        report = argFoo;
        michal['muted'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setVideosMuted'] = golfie;
    tangon = function(argFoo) { // Original name: setTabFocused
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GRAVITY_SET_FOCUSED_TAB';
        michal['type'] = report;
        report = argFoo;
        michal['focused'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setTabFocused'] = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gravity/GravityActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();