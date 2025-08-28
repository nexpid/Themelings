// app/modules/icymi/ICYMIActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function fetchPopularGuildsFromCategories(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 237; continue _fun0001 }
 10: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.post;
                    var2 = {};
                    var6 = _closure1_slot4;
                    var6 = var6.GRAVITY_TOPIC_GUILDS;
                    var2['url'] = var6;
                    var8 = {};
                    var9 = _closure2_slot0;
                    var8['category_ids'] = var9;
                    var9 = _closure2_slot1;
                    var8['offset'] = var9;
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=104);
 102:
                    return var2;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 191; continue _fun0001 }
 110:
                    var4 = var2.body;
                    var7 = var4.guilds;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'LOAD_ICYMI_POPULAR_GUILDS';
                    var3['type'] = var8;
                    var8 = _closure2_slot0;
                    var3['categoryIds'] = var8;
                    var3['guilds'] = var7;
                    var6 = _closure2_slot1;
                    var3['offset'] = var6;
                    var3 = var4.bind(var5)(var3);
 186: // try_end0
                    var3 = true;
                    return var3;
 191:
                    return var2;
 194: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.captureException;
                    var2 = var2.bind(var3)(var4);
                    var2 = false;
                    return var2;
 237:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchPopularGuildsFromCategories'] = var7;
    var7 = function fetchDehydrated() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0002_ip = 13; continue _fun0002 }
 11:
            var3 = {};
 13:
            var4 = var3.isInitialLoad;
            var _closure2_slot0 = var4;
            var4 = var3.isReloading;
            var _closure2_slot1 = var4;
            var3 = var3.forceRefresh;
            var _closure2_slot2 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 361; continue _fun0003 }
 10:
                        var2 = undefined;
                        var9 = undefined;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.icymiEnabled;
                        var4 = 'fetchDehydrated';
                        var4 = var5.bind(var6)(var4);
                        if(!var4) { _fun0003_ip = 358; continue _fun0003 }
 58:
                        var4 = _closure2_slot1;
                        if(!var4) { _fun0003_ip = 112; continue _fun0003 }
 68:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {'type': 'ICYMI_SET_REFRESHING', 'refreshing': true};
                        var4 = var5.bind(var6)(var4);
 112: // try_start_0
                        var4 = global;
                        var5 = var4.Date;
                        var4 = var5.now;
                        var9 = var4.bind(var5)();
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 2;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.get;
                        var4 = {};
                        var7 = _closure1_slot4;
                        var7 = var7.GRAVITY_ITEMS_DEHYDRATED;
                        var4['url'] = var7;
                        var7 = {};
                        var10 = _closure2_slot2;
                        var7['refresh'] = var10;
                        var4['query'] = var7;
                        var7 = false;
                        var4['rejectWithError'] = var7;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address=206);
 204:
                        return var4;
 206:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 322; continue _fun0003 }
 212:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 3;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var10 = 'LOAD_ICYMI_DEHYDRATED';
                        var5['type'] = var10;
                        var10 = var4.body;
                        var10 = var10.items;
                        var5['items'] = var10;
                        var10 = var4.body;
                        var10 = var10.load_id;
                        var5['loadId'] = var10;
                        var5['startTime'] = var9;
                        var9 = _closure2_slot1;
                        var5['isReloading'] = var9;
                        var8 = _closure2_slot0;
                        var5['isInitialLoad'] = var8;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address=311);
 309:
                        return var5;
 311:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 319; continue _fun0003 }
 317: // try_end0
                        _fun0003_ip = 358; continue _fun0003;
 319:
                        return var5;
 322:
                        return var4;
 325: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.captureException;
                        var3 = var3.bind(var4)(var5);
 358:
                        return var2;
 361:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['fetchDehydrated'] = var7;
    var7 = function gravityJoinGuild(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 211; continue _fun0004 }
 10:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.icymiEnabled;
                    var3 = 'gravityJoinGuild';
                    var3 = var4.bind(var6)(var3);
                    if(!var3) { _fun0004_ip = 71; continue _fun0004 }
 53:
                    var3 = _closure2_slot0;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 === var4)) { _fun0004_ip = 74; continue _fun0004 }
 71:
                    return var5;
 74: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 2;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var6 = var3.HTTP;
                    var4 = var6.post;
                    var3 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.GRAVITY_JOIN_GUILD;
                    var3['url'] = var7;
                    var7 = {};
                    var9 = _closure2_slot0;
                    var7['guild_ids'] = var9;
                    var8 = _closure2_slot1;
                    var7['location'] = var8;
                    var3['body'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=159);
 157:
                    return var3;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 170; continue _fun0004 }
 165: // try_end0
                    var4 = true;
                    return var4;
 170:
                    return var3;
 173: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.captureException;
                    var2 = var2.bind(var3)(var4);
                    var2 = false;
                    return var2;
 211:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['gravityJoinGuild'] = var7;
    var7 = function fetchForNotification(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 327; continue _fun0005 }
 10:
                    var2 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.icymiEnabled;
                    var4 = 'fetchInitial';
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0005_ip = 324; continue _fun0005 }
 60: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.GRAVITY_ITEMS_HYDRATE;
                    var4['url'] = var7;
                    var7 = {};
                    var10 = {};
                    var11 = _closure2_slot0;
                    var10['channel_id'] = var11;
                    var9 = _closure2_slot1;
                    var10['message_id'] = var9;
                    var9 = new Array(1);
                    var9[0] = var10;
                    var7['message_items'] = var9;
                    var9 = new Array(0);
                    var7['summary_items'] = var9;
                    var9 = new Array(0);
                    var7['activity_items'] = var9;
                    var9 = new Array(0);
                    var7['generated_candidate_items'] = var9;
                    var4['body'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=190);
 188:
                    return var4;
 190:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 288; continue _fun0005 }
 196:
                    var8 = var4;
                    var5 = var4.body;
                    var5 = var5.message_items;
                    var5 = var5.length;
                    var9 = 0;
                    if(!(var9 !== var5)) { _fun0005_ip = 285; continue _fun0005 }
 221:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var10 = 'LOAD_ICYMI_FROM_NOTIFICATION';
                    var5['type'] = var10;
                    var8 = var8.body;
                    var8 = var8.message_items;
                    var8 = var8[var9];
                    var5['messageItem'] = var8;
                    var5 = var6.bind(var7)(var5);
 283: // try_end0
                    _fun0005_ip = 324; continue _fun0005;
 285:
                    return var2;
 288:
                    return var4;
 291: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
 324:
                    return var2;
 327:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchForNotification'] = var7;
    var7 = function fetchForStatusNotification(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.icymiEnabled;
            var3 = 'fetchInitialStatus';
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0006_ip = 95; continue _fun0006 }
 45:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'LOAD_ICYMI_FROM_NOTIFICATION';
            var2['type'] = var5;
            var5 = arg1;
            var2['customStatusItem'] = var5;
            var2 = var3.bind(var4)(var2);
 95:
            return var1;
        }
    };
    var2['fetchForStatusNotification'] = var7;
    var7 = function fetchHydrated(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 668; continue _fun0007 }
 10:
                    var2 = undefined;
                    var9 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.icymiEnabled;
                    var6 = 'fetchHydrated';
                    var4 = var4.bind(var5)(var6);
                    if(!var4) { _fun0007_ip = 665; continue _fun0007 }
 68:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.getICYMINewConversationSummaryExperiment;
                    var7 = false;
                    var4 = var4.bind(var5)(var6, var7);
                    var9 = var4.contentGenerationEnabled;
                    var5 = _closure2_slot2;
                    var4 = var5.messageItems;
                    var14 = var4;
                    var13 = var5.summaryItems;
                    var11 = var5.activityItems;
                    var12 = var5.generatedCandidateItems;
                    var4 = var4.length;
                    var5 = 0;
                    if(!(var5 === var4)) { _fun0007_ip = 336; continue _fun0007 }
 156:
                    var4 = var13;
                    var4 = var4.length;
                    if(!(var5 === var4)) { _fun0007_ip = 336; continue _fun0007 }
 171:
                    var4 = var11;
                    var4 = var4.length;
                    if(!(var5 === var4)) { _fun0007_ip = 336; continue _fun0007 }
 186:
                    var4 = var12;
                    var4 = var4.length;
                    if(!(var5 === var4)) { _fun0007_ip = 336; continue _fun0007 }
 201:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var15 = 'LOAD_ICYMI_HYDRATED';
                    var4['type'] = var15;
                    var15 = new Array(0);
                    var4['requestMessageItems'] = var15;
                    var15 = new Array(0);
                    var4['requestSummaryItems'] = var15;
                    var15 = new Array(0);
                    var4['requestActivityItems'] = var15;
                    var15 = new Array(0);
                    var4['requestGeneratedCandidateItems'] = var15;
                    var15 = new Array(0);
                    var4['messageItems'] = var15;
                    var15 = new Array(0);
                    var4['summaryItems'] = var15;
                    var15 = new Array(0);
                    var4['activityItems'] = var15;
                    var15 = new Array(0);
                    var4['generatedCandidateItems'] = var15;
                    var15 = _closure2_slot0;
                    var4['startingIndex'] = var15;
                    var15 = _closure2_slot1;
                    var4['endingIndex'] = var15;
                    var4 = var5.bind(var6)(var4);
                    _fun0007_ip = 665; continue _fun0007;
 336: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var15 = _closure1_slot4;
                    var15 = var15.GRAVITY_ITEMS_HYDRATE;
                    var4['url'] = var15;
                    var15 = {};
                    var16 = var14;
                    var15['message_items'] = var16;
                    var16 = var13;
                    var15['summary_items'] = var16;
                    var16 = var11;
                    var15['activity_items'] = var16;
                    var16 = var9;
                    if(var16) { _fun0007_ip = 421; continue _fun0007 }
 415:
                    var16 = new Array(0);
                    _fun0007_ip = 424; continue _fun0007;
 421:
                    var16 = var12;
 424:
                    var15['generated_candidate_items'] = var16;
                    var4['body'] = var15;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=446);
 444:
                    return var4;
 446:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 629; continue _fun0007 }
 455:
                    var10 = var4;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var15 = 'LOAD_ICYMI_HYDRATED';
                    var5['type'] = var15;
                    var5['requestMessageItems'] = var14;
                    var5['requestSummaryItems'] = var13;
                    var5['requestActivityItems'] = var11;
                    var11 = var9;
                    if(var11) { _fun0007_ip = 520; continue _fun0007 }
 514:
                    var11 = new Array(0);
                    _fun0007_ip = 523; continue _fun0007;
 520:
                    var11 = var12;
 523:
                    var5['requestGeneratedCandidateItems'] = var11;
                    var11 = var10;
                    var12 = var11.body;
                    var12 = var12.message_items;
                    var5['messageItems'] = var12;
                    var12 = var11.body;
                    var12 = var12.summary_items;
                    var5['summaryItems'] = var12;
                    var11 = var11.body;
                    var11 = var11.activity_items;
                    var5['activityItems'] = var11;
                    if(var9) { _fun0007_ip = 588; continue _fun0007 }
 582:
                    var9 = new Array(0);
                    _fun0007_ip = 599; continue _fun0007;
 588:
                    var10 = var10.body;
                    var9 = var10.generated_candidate_items;
 599:
                    var5['generatedCandidateItems'] = var9;
                    var9 = _closure2_slot0;
                    var5['startingIndex'] = var9;
                    var8 = _closure2_slot1;
                    var5['endingIndex'] = var8;
                    var5 = var6.bind(var7)(var5);
 627: // try_end0
                    _fun0007_ip = 665; continue _fun0007;
 629:
                    return var4;
 632: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
 665:
                    return var2;
 668:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchHydrated'] = var7;
    var7 = function getGuildChannelScores() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 218; continue _fun0008 }
 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.icymiEnabled;
                    var4 = 'guildChannelScores';
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0008_ip = 215; continue _fun0008 }
 58: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.GRAVITY_CUSTOM_SCORES;
                    var4['url'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=119);
 117:
                    return var4;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 179; continue _fun0008 }
 125:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'LOAD_ICYMI_CUSTOM_SCORES';
                    var5['type'] = var8;
                    var8 = var4.body;
                    var5['scores'] = var8;
                    var5 = var6.bind(var7)(var5);
 177: // try_end0
                    _fun0008_ip = 215; continue _fun0008;
 179:
                    return var4;
 182: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
 215:
                    return var2;
 218:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getGuildChannelScores'] = var7;
    var7 = function getRecommendedGuilds() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 224; continue _fun0009 }
 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.icymiEnabled;
                    var4 = 'recommendedGuilds';
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0009_ip = 221; continue _fun0009 }
 58: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.GRAVITY_RECOMMENDED_GUILDS;
                    var4['url'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=119);
 117:
                    return var4;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 185; continue _fun0009 }
 125:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'LOAD_ICYMI_RECOMMENDED_GUILDS';
                    var5['type'] = var8;
                    var8 = var4.body;
                    var8 = var8.guilds;
                    var5['guilds'] = var8;
                    var5 = var6.bind(var7)(var5);
 183: // try_end0
                    _fun0009_ip = 221; continue _fun0009;
 185:
                    return var4;
 188: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
 221:
                    return var2;
 224:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getRecommendedGuilds'] = var7;
    var7 = function getMediaForCurrentStatus() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 314; continue _fun0010 }
 10:
                    var2 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.icymiEnabled;
                    var4 = 'mediaForCurrentStatus';
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0010_ip = 311; continue _fun0010 }
 60:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.CustomStatusSetting;
                    var4 = var5.getSetting;
                    var4 = var4.bind(var5)();
                    var8 = var4;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0010_ip = 311; continue _fun0010 }
 108:
                    var4 = var8;
                    var4 = var4.createdAtMs;
                    if(!(var5 != var4)) { _fun0010_ip = 311; continue _fun0010 }
 124: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.GRAVITY_ATTACHMENTS;
                    var4['url'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=185);
 183:
                    return var4;
 185:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 275; continue _fun0010 }
 191:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'LOAD_ICYMI_CURRENT_STATUS_MEDIA';
                    var5['type'] = var9;
                    var9 = var4.body;
                    var9 = var9.attachments;
                    var5['attachments'] = var9;
                    var9 = global;
                    var9 = var9.Number;
                    var8 = var8.createdAtMs;
                    var8 = var9.bind(var2)(var8);
                    var5['createdAtMs'] = var8;
                    var5 = var6.bind(var7)(var5);
 273: // try_end0
                    _fun0010_ip = 311; continue _fun0010;
 275:
                    return var4;
 278: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
 311:
                    return var2;
 314:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getMediaForCurrentStatus'] = var7;
    var7 = function reloadICYMITab() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'RELOAD_ICYMI';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['reloadICYMITab'] = var7;
    var7 = function openICYMITab() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ICYMI_TAB_OPENED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['openICYMITab'] = var7;
    var7 = function closeICYMITab() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ICYMI_TAB_CLOSED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['closeICYMITab'] = var7;
    var7 = function setVisibleItems(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ICYMI_SET_VISIBLE_ITEMS';
        var2['type'] = var5;
        var5 = arg1;
        var2['items'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setVisibleItems'] = var7;
    var7 = function ackGravityItems(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_ACK_ITEMS';
        var1['type'] = var4;
        var4 = arg1;
        var1['items'] = var4;
        var4 = arg2;
        var1['override'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['ackGravityItems'] = var7;
    var7 = function gravityScrollEvent(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_SCROLL_EVENT';
        var1['type'] = var4;
        var4 = arg1;
        var1['timestamp'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['gravityScrollEvent'] = var7;
    var7 = function setFilters(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_ICYMI_FILTERS';
        var1['type'] = var4;
        var4 = arg1;
        var1['filters'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['setFilters'] = var7;
    var7 = function giveFeedback() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_FEEDBACK_GIVEN';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['giveFeedback'] = var7;
    var7 = function clearReadStates() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_ICYMI_READ_STATES';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['clearReadStates'] = var7;
    var7 = function addedRecommendedGuild() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ICYMI_JOINED_RECOMMENDED_GUILD';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['addedRecommendedGuild'] = var7;
    var7 = function setVideosMuted(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ICYMI_SET_VIDEOS_MUTED';
        var2['type'] = var5;
        var5 = arg1;
        var2['muted'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setVideosMuted'] = var7;
    var7 = function setTabFocused(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ICYMI_SET_FOCUSED_TAB';
        var2['type'] = var5;
        var5 = arg1;
        var2['focused'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setTabFocused'] = var7;
    var4 = function setCardHeight(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ICYMI_SET_CARD_HEIGHT';
        var2['type'] = var5;
        var5 = arg1;
        var2['itemId'] = var5;
        var5 = arg2;
        var2['height'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setCardHeight'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/ICYMIActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();