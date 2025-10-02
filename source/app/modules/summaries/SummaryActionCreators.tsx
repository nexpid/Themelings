// app/modules/summaries/SummaryActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var18;
    var14 = function fetchSummary() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var14;
    var1 = function _fetchSummary() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var10 = var11;
                    var14 = var6;
                    var2 = undefined;
                    var7 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var12 = undefined;
                    var5 = _closure1_slot7;
                    var4 = var5.shouldFetch;
                    var4 = var4.bind(var5)(var11, var6);
                    if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = global;
                    var5 = var6.Date;
                    var4 = var5.now;
                    var15 = var4.bind(var5)();
                    var7 = var15;
                    var11 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 7;
                    var4 = var4[var5];
                    var13 = var11.bind(var2)(var4);
                    var11 = var13.dispatch;
                    var4 = {};
                    var16 = 'REQUEST_CHANNEL_SUMMARY';
                    var4['type'] = var16;
                    var16 = var10;
                    var4['channelId'] = var16;
                    var16 = var14;
                    var4['summaryId'] = var16;
                    var4['requestedAt'] = var15;
                    var4 = var11.bind(var13)(var4);
                    var8 = undefined;
                    var9 = undefined;
case 6: // try_start_0
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 8;
                    var4 = var13[var4];
                    var4 = var11.bind(var2)(var4);
                    var13 = var4.HTTP;
                    var11 = var13.get;
                    var4 = {};
                    var17 = _closure1_slot8;
                    var16 = var17.CHANNEL_SUMMARY;
                    var15 = var10;
                    var14 = var16.bind(var17)(var15, var14);
                    var4['url'] = var14;
                    var14 = false;
                    var4['rejectWithError'] = var14;
                    var4 = var11.bind(var13)(var4);
                    SaveGenerator(address=213);
case 7:
                    return var4;
case 8:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var12 = var4;
                    var11 = null;
                    var13 = var11 == var4;
                    var11 = undefined;
                    if(var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var11 = var12.body;
case 11:
                    var9 = var11;
case 13: // try_end0
                    _fun0001_ip = 14; continue _fun0001;
case 9:
                    return var4;
case 15: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 9;
                    var4 = var13[var4];
                    var4 = var11.bind(var2)(var4);
                    var4 = var4.APIError;
                    var11 = var4.prototype;
                    var11 = Object.create(var11, {constructor: {value: var4}});
                    var20 = var11;
                    var19 = var12;
                    var4 = new var20[var4](var19, var18);
                    var8 = var4 instanceof Object ? var4 : var11;
case 14:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var11 = 'RECEIVE_CHANNEL_SUMMARY';
                    var3['type'] = var11;
                    var3['channelId'] = var10;
                    var3['summary'] = var9;
                    var3['error'] = var8;
                    var3['requestedAt'] = var7;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3['receivedAt'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var13 = function fetchSummaries() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _fetchSummaries() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var11 = var10;
                    var2 = undefined;
                    var12 = undefined;
                    var8 = undefined;
                    var13 = undefined;
                    var7 = undefined;
                    var9 = undefined;
                    var4 = undefined;
                    var6 = _closure1_slot7;
                    var5 = var6.shouldFetch;
                    var5 = var5.bind(var6)(var10);
                    if(!var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var6 = global;
                    var10 = var6.Date;
                    var5 = var10.now;
                    var16 = var5.bind(var10)();
                    var7 = var16;
                    var14 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 7;
                    var10 = var10[var5];
                    var15 = var14.bind(var2)(var10);
                    var14 = var15.dispatch;
                    var10 = {};
                    var17 = 'REQUEST_CHANNEL_SUMMARIES';
                    var10['type'] = var17;
                    var17 = var11;
                    var10['channelId'] = var17;
                    var10['requestedAt'] = var16;
                    var10 = var14.bind(var15)(var10);
                    var9 = undefined;
                    var4 = undefined;
case 20: // try_start_0
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 8;
                    var10 = var15[var10];
                    var10 = var14.bind(var2)(var10);
                    var15 = var10.HTTP;
                    var14 = var15.get;
                    var10 = {};
                    var18 = _closure1_slot8;
                    var17 = var18.CHANNEL_SUMMARIES;
                    var16 = var11;
                    var16 = var17.bind(var18)(var16);
                    var10['url'] = var16;
                    var16 = false;
                    var10['rejectWithError'] = var16;
                    var10 = var14.bind(var15)(var10);
                    SaveGenerator(address=201);
case 21:
                    return var10;
case 22:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=13);
                    if(var14) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var4 = var10;
case 25: // try_end0
                    _fun0002_ip = 26; continue _fun0002;
case 23:
                    return var10;
case 27: // catch_target0
                    CatchBlockStart(arg_register=14);
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 9;
                    var10 = var16[var10];
                    var10 = var14.bind(var2)(var10);
                    var10 = var10.APIError;
                    var14 = var10.prototype;
                    var14 = Object.create(var14, {constructor: {value: var10}});
                    var21 = var14;
                    var20 = var15;
                    var10 = new var21[var10](var20, var19);
                    var9 = var10 instanceof Object ? var10 : var14;
case 26:
                    var14 = var4;
                    var12 = var14;
                    var10 = null;
                    var15 = var10 == var14;
                    var14 = undefined;
                    if(var15) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var15 = var12;
                    var15 = var15.body;
                    var12 = var15;
                    var15 = var10 == var15;
                    var14 = undefined;
                    if(var15) { _fun0002_ip = 28; continue _fun0002 }
case 30:
                    var14 = var12.summaries;
case 28:
                    var12 = var6.Array;
                    var12 = var14 instanceof var12;
                    if(var12) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var13 = var4;
                    var14 = var10 == var4;
                    var12 = undefined;
                    if(var14) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var12 = var13.body;
case 33:
                    var8 = var12;
                    if(!(var10 == var12)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var14 = new Array(0);
                    _fun0002_ip = 37; continue _fun0002;
case 35:
                    var14 = var8;
case 37:
                    _fun0002_ip = 38; continue _fun0002;
case 31:
                    var4 = var4.body;
                    var14 = var4.summaries;
case 38:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 10;
                    var8 = var3[var8];
                    var13 = var4.bind(var2)(var8);
                    var12 = var13.takeRight;
                    var8 = 75;
                    var8 = var12.bind(var13)(var14, var8);
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var12 = 'RECEIVE_CHANNEL_SUMMARIES';
                    var3['type'] = var12;
                    var3['channelId'] = var11;
                    var3['summaries'] = var8;
                    var8 = var9;
                    var10 = var10 != var8;
                    var8 = undefined;
                    if(!var10) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var8 = var9;
case 39:
                    var3['error'] = var8;
                    var3['requestedAt'] = var7;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3['receivedAt'] = var6;
                    var3 = var4.bind(var5)(var3);
case 18:
                    return var2;
case 16:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var12 = function setHighlightedSummary(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'SET_HIGHLIGHTED_SUMMARY';
            var2['type'] = var5;
            var5 = arg1;
            var2['channelId'] = var5;
            var5 = null;
            var7 = var5 != var6;
            if(!var7) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var5 = var6;
case 41:
            var2['summaryId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var11 = function setSelectedSummary(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var5 = null;
            var1 = var5 != var7;
            if(!var1) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var1 = var5 != var6;
case 43:
            if(!var1) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var2 = _closure1_slot12;
            var1 = undefined;
            var1 = var2.bind(var1)(var7, var6);
case 45:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'SET_SELECTED_SUMMARY';
            var2['type'] = var8;
            var2['channelId'] = var7;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var5 = var6;
case 47:
            var2['summaryId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var10 = function updateVisibleMessages(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg1;
            var6 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'UPDATE_VISIBLE_MESSAGES';
            var2['type'] = var5;
            var5 = null;
            var9 = var5 != var8;
            var7 = null;
            if(!var9) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var7 = var8;
case 49:
            var2['topVisibleMessage'] = var7;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var5 = var6;
case 51:
            var2['bottomVisibleMessage'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var1 = function updateCount(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = _closure1_slot10;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var6 = _closure1_slot10;
            var4 = 0;
            var6[var2] = var4;
case 53:
            if(!(var3 !== var5)) { _fun0006_ip = 55; continue _fun0006 }
case 45:
            var4 = _closure1_slot10;
            var3 = var4[var2];
            var3 = var3 + var5;
            var4[var2] = var3;
            _fun0006_ip = 56; continue _fun0006;
case 55:
            var4 = _closure1_slot10;
            var3 = 0;
            var4[var2] = var3;
case 56:
            var1 = _closure1_slot10;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var8 = function setSummaryFeedback(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_SUMMARY_FEEDBACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['summary'] = var5;
        var5 = arg2;
        var2['rating'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7 = function fetchChannelAffinities() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var7;
    var1 = function _fetchChannelAffinities() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var2 = undefined;
                    var4 = undefined;
                    var7 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var6 = _closure1_slot7;
                    var5 = var6.shouldFetchChannelAffinities;
                    var5 = var5.bind(var6)();
                    var6 = global;
                    if(var5) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var11 = var6.Promise;
                    var10 = var11.resolve;
                    var5 = null;
                    var5 = var10.bind(var11)(var5);
                    return var5;
case 59:
                    var10 = var6.Date;
                    var5 = var10.now;
                    var13 = var5.bind(var10)();
                    var7 = var13;
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 7;
                    var10 = var10[var5];
                    var12 = var11.bind(var2)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var14 = 'REQUEST_CHANNEL_AFFINITIES';
                    var10['type'] = var14;
                    var10['requestedAt'] = var13;
                    var10 = var11.bind(var12)(var10);
                    var9 = undefined;
                    var8 = undefined;
case 61: // try_start_0
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 8;
                    var10 = var12[var10];
                    var10 = var11.bind(var2)(var10);
                    var12 = var10.HTTP;
                    var11 = var12.get;
                    var10 = {'url': '/users/@me/affinities/channels', 'rejectWithError': false};
                    var10 = var11.bind(var12)(var10);
                    SaveGenerator(address=188);
case 62:
                    return var10;
case 63:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0007_ip = 21; continue _fun0007 }
case 64:
                    var8 = var10;
case 65: // try_end0
                    _fun0007_ip = 66; continue _fun0007;
case 21:
                    return var10;
case 67: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 9;
                    var10 = var13[var10];
                    var10 = var11.bind(var2)(var10);
                    var10 = var10.APIError;
                    var11 = var10.prototype;
                    var11 = Object.create(var11, {constructor: {value: var10}});
                    var16 = var11;
                    var15 = var12;
                    var10 = new var16[var10](var15, var14);
                    var9 = var10 instanceof Object ? var10 : var11;
case 66:
                    var4 = var8;
                    var10 = null;
                    var11 = var10 == var8;
                    var8 = undefined;
                    if(var11) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var11 = var4;
                    var11 = var11.body;
                    var4 = var11;
                    var11 = var10 == var11;
                    var8 = undefined;
                    if(var11) { _fun0007_ip = 68; continue _fun0007 }
case 70:
                    var8 = var4.channel_affinities;
case 68:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var11 = 'RECEIVE_CHANNEL_AFFINITIES';
                    var3['type'] = var11;
                    var3['affinities'] = var8;
                    var8 = var9;
                    var10 = var10 != var8;
                    var8 = undefined;
                    if(!var10) { _fun0007_ip = 71; continue _fun0007 }
case 36:
                    var8 = var9;
case 71:
                    var3['error'] = var8;
                    var3['requestedAt'] = var7;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3['receivedAt'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 57:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var6 = function fetchSummariesBulk() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var6;
    var1 = function _fetchSummariesBulk() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 72; continue _fun0008 }
case 44:
                    var11 = arg1;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                    var2 = {};
case 73:
                    var19 = var2.useQuickSwitcher;
                    if(!(var19 === var4)) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                    var19 = true;
case 75:
                    var18 = var2.useChannelAffinities;
                    if(!(var18 === var4)) { _fun0008_ip = 19; continue _fun0008 }
case 77:
                    var18 = true;
case 19:
                    var7 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=66);
case 41:
                    return var4;
case 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                    var3 = var11;
                    var5 = null;
                    if(!(var5 == var3)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var15 = new Array(0);
                    _fun0008_ip = 82; continue _fun0008;
case 80:
                    var15 = var11;
case 82:
                    var11 = var15;
                    var3 = global;
                    var13 = var3.Date;
                    var6 = var13.now;
                    var12 = var6.bind(var13)();
                    var14 = var15.concat;
                    var17 = _closure1_slot7;
                    var16 = var17.defaultChannelIds;
                    var13 = {};
                    var13['withQuickSwitcher'] = var19;
                    var13['withChannelAffinities'] = var18;
                    var13 = var16.bind(var17)(var13);
                    var15 = var14.bind(var15)(var13);
                    var14 = var15.filter;
                    var13 = function(arg1) {
                        var4 = _closure1_slot6;
                        var3 = var4.getChannel;
                        var2 = arg1;
                        var5 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.canSeeChannelSummaries;
                        var2 = false;
                        var1 = true;
                        var1 = var3.bind(var4)(var5, var2, var1);
                        return var1;
                    };
                    var14 = var14.bind(var15)(var13);
                    var13 = var14.filter;
                    var8 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var4 = var1.bind(var2)();
                            var5 = _closure1_slot7;
                            var3 = var5.status;
                            var1 = arg1;
                            var5 = var3.bind(var5)(var1);
                            var1 = null;
                            if(!(var1 != var5)) { _fun0009_ip = 77; continue _fun0009 }
case 83:
                            var3 = var5.fetching;
                            if(var3) { _fun0009_ip = 84; continue _fun0009 }
case 77:
                            var6 = var1 == var5;
                            var3 = undefined;
                            if(var6) { _fun0009_ip = 85; continue _fun0009 }
case 42:
                            var3 = var5.lastReceivedAt;
case 85:
                            var1 = var1 == var3;
                            if(var1) { _fun0009_ip = 86; continue _fun0009 }
case 87:
                            var3 = var4 - var3;
                            var2 = _closure1_slot9;
                            var1 = var3 > var2;
case 86:
                            return var1;
case 84:
                            var1 = false;
                            return var1;
                        }
                    };
                    var15 = var13.bind(var14)(var8);
                    var14 = var15.slice;
                    var13 = 0;
                    var8 = 50;
                    var8 = var14.bind(var15)(var13, var8);
                    var11 = var8;
                    var8 = var8.length;
                    if(!(var13 !== var8)) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                    var14 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 7;
                    var13 = var13[var8];
                    var15 = var14.bind(var4)(var13);
                    var14 = var15.dispatch;
                    var13 = {};
                    var16 = 'REQUEST_CHANNEL_SUMMARIES_BULK';
                    var13['type'] = var16;
                    var16 = var11;
                    var13['channelIds'] = var16;
                    var16 = var12;
                    var13['requestedAt'] = var16;
                    var13 = var14.bind(var15)(var13);
                    var9 = undefined;
                    var10 = undefined;
case 90: // try_start_0
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 8;
                    var13 = var15[var13];
                    var13 = var14.bind(var4)(var13);
                    var15 = var13.HTTP;
                    var14 = var15.post;
                    var13 = {};
                    var16 = _closure1_slot8;
                    var16 = var16.USER_SUMMARIES;
                    var13['url'] = var16;
                    var16 = {};
                    var17 = var11;
                    var16['channel_ids'] = var17;
                    var13['body'] = var16;
                    var16 = false;
                    var13['rejectWithError'] = var16;
                    var13 = var14.bind(var15)(var13);
                    SaveGenerator(address=356);
case 91:
                    return var13;
case 92:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(var14) { _fun0008_ip = 93; continue _fun0008 }
case 94:
                    var10 = var13;
case 95: // try_end0
                    _fun0008_ip = 96; continue _fun0008;
case 93:
                    return var13;
case 97: // catch_target0
                    CatchBlockStart(arg_register=14);
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 9;
                    var13 = var16[var13];
                    var13 = var14.bind(var4)(var13);
                    var13 = var13.APIError;
                    var14 = var13.prototype;
                    var14 = Object.create(var14, {constructor: {value: var13}});
                    var22 = var14;
                    var21 = var15;
                    var13 = new var22[var13](var21, var20);
                    var9 = var13 instanceof Object ? var13 : var14;
case 96:
                    var7 = var10;
                    var13 = var5 == var10;
                    var10 = undefined;
                    if(var13) { _fun0008_ip = 98; continue _fun0008 }
case 99:
                    var7 = var7.body;
                    var10 = var7.summaries;
case 98:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var13 = 'RECEIVE_CHANNEL_SUMMARIES_BULK';
                    var6['type'] = var13;
                    var6['requestedAt'] = var12;
                    var13 = var3.Date;
                    var12 = var13.now;
                    var12 = var12.bind(var13)();
                    var6['receivedAt'] = var12;
                    var6['summaries'] = var10;
                    var10 = {};
                    var10['channelIds'] = var11;
                    var6['requestArgs'] = var10;
                    var6['error'] = var9;
                    var6 = var7.bind(var8)(var6);
                    return var4;
case 88:
                    var4 = var3.Promise;
                    var3 = var4.resolve;
                    var3 = var3.bind(var4)(var5);
                    return var3;
case 78:
                    return var2;
case 72:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var5 = function useMaybeFetchChannelAffinitiesAndSummaries() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0010_ip = 44; continue _fun0010 }
case 100:
            var4 = new Array(0);
case 44:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 12;
            var5 = var7[var5];
            var8 = var6.bind(var1)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var7.bind(var8)(var6, var5);
            _closure2_slot1 = var6;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure2_slot0;
                var2 = var3.join;
                var1 = ',';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var8)(var4, var5);
            _closure2_slot2 = var7;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = function _fetch() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0012_ip = 84; continue _fun0012 }
case 101: // try_start_0
                                    var3 = _closure1_slot16;
                                    var2 = undefined;
                                    var2 = var3.bind(var2)();
                                    SaveGenerator(address=24);
case 46:
                                    return var2;
case 74:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0012_ip = 102; continue _fun0012 }
case 103: // try_end0
                                    _fun0012_ip = 45; continue _fun0012;
case 102:
                                    return var2;
case 104: // catch_target0
                                    CatchBlockStart(arg_register=1);
case 45:
                                    var4 = _closure1_slot18;
                                    var5 = _closure2_slot2;
                                    var3 = var5.split;
                                    var2 = ',';
                                    var2 = var3.bind(var5)(var2);
                                    var3 = undefined;
                                    var2 = var4.bind(var3)(var2);
                                    SaveGenerator(address=76);
case 87:
                                    return var2;
case 52:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                                    return var3;
case 105:
                                    return var2;
case 84:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot0 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0011_ip = 107; continue _fun0011 }
case 54:
                    var2 = function fetch() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var4 = function useChannelSummaries(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelIds;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0013_ip = 43; continue _fun0013 }
case 44:
            var3 = new Array(0);
case 43:
            var2 = _closure1_slot20;
            var2 = var2.bind(var4)(var3);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var4 = var5.useStateFromStoresArray;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.topSummaries;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var2 = function deleteSummary(arg1) {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _deleteSummary() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 108; continue _fun0014 }
case 58:
                    var7 = arg1;
case 17: // try_start_0
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.del;
                    var2 = {};
                    var11 = _closure1_slot8;
                    var10 = var11.CHANNEL_SUMMARY;
                    var8 = var7;
                    var9 = var8.channelId;
                    var8 = var8.id;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=99);
case 109:
                    return var2;
case 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 111; continue _fun0014 }
case 112:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'DELETE_SUMMARY';
                    var4['type'] = var8;
                    var4['summary'] = var7;
                    var4 = var5.bind(var6)(var4);
case 113: // try_end0
                    return var3;
case 111:
                    return var2;
case 114: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 108:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var20 = var1.Object;
    var19 = var20.defineProperty;
    var15 = {};
    var1 = true;
    var15['value'] = var1;
    var1 = '__esModule';
    var1 = var19.bind(var20)(var3, var1, var15);
    var1 = 0;
    var15 = var18[var1];
    var1 = undefined;
    var15 = var16.bind(var1)(var15);
    var _closure1_slot3 = var15;
    var15 = 1;
    var19 = var18[var15];
    var15 = metroImportAll;
    var15 = var15.bind(var1)(var19);
    var _closure1_slot4 = var15;
    var15 = 2;
    var15 = var18[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot5 = var15;
    var15 = 3;
    var15 = var18[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot6 = var15;
    var15 = 4;
    var15 = var18[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot7 = var15;
    var15 = 5;
    var15 = var18[var15];
    var15 = var17.bind(var1)(var15);
    var15 = var15.Routes;
    var _closure1_slot8 = var15;
    var15 = 6;
    var15 = var18[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.Millis;
    var16 = var15.SECOND;
    var15 = 30;
    var15 = var15 * var16;
    var _closure1_slot9 = var15;
    var15 = {};
    var _closure1_slot10 = var15;
    var15 = {};
    var _closure1_slot11 = var15;
    var15 = {};
    var15['setSummaryFeedback'] = var8;
    var15['updateVisibleMessages'] = var10;
    var15['setSelectedSummary'] = var11;
    var15['setHighlightedSummary'] = var12;
    var15['fetchSummaries'] = var13;
    var15['fetchSummariesBulk'] = var6;
    var15['useChannelSummaries'] = var4;
    var15['deleteSummary'] = var2;
    var16 = 13;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'modules/summaries/SummaryActionCreators.tsx';
    var16 = var17.bind(var18)(var16);
    var3['default'] = var15;
    var3['fetchSummary'] = var14;
    var3['fetchSummaries'] = var13;
    var3['setHighlightedSummary'] = var12;
    var12 = function toggleTopicsBar() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'TOGGLE_TOPICS_BAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['toggleTopicsBar'] = var12;
    var3['setSelectedSummary'] = var11;
    var3['updateVisibleMessages'] = var10;
    var9 = function stopPolling(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot15;
            var1 = undefined;
            var3 = -1;
            var3 = var5.bind(var1)(var4, var3);
            var5 = 0;
            if(!(var3 <= var5)) { _fun0015_ip = 42; continue _fun0015 }
case 103:
            var3 = _closure1_slot15;
            var3 = var3.bind(var1)(var4, var5);
            var3 = global;
            var3 = var3.clearInterval;
            var2 = _closure1_slot11;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
case 42:
            return var1;
        }
    };
    var3['stopPolling'] = var9;
    var3['setSummaryFeedback'] = var8;
    var3['fetchChannelAffinities'] = var7;
    var3['fetchSummariesBulk'] = var6;
    var3['useMaybeFetchChannelAffinitiesAndSummaries'] = var5;
    var3['useChannelSummaries'] = var4;
    var3['deleteSummary'] = var2;
    return var1;
})();