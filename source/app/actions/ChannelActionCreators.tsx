// app/actions/ChannelActionCreators.tsx
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.createChannelRecordFromServer;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = var2.AbortCodes;
    var _closure1_slot10 = var7;
    var7 = var2.Endpoints;
    var _closure1_slot11 = var7;
    var7 = var2.Routes;
    var _closure1_slot12 = var7;
    var7 = var2.ME;
    var _closure1_slot13 = var7;
    var7 = var2.CURRENT_APP_CONTEXT;
    var _closure1_slot14 = var7;
    var2 = var2.ChannelTypes;
    var _closure1_slot15 = var2;
    var2 = {};
    var7 = function openPrivateChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.recipientIds;
            var _closure2_slot0 = var2;
            var4 = var3.joinCall;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0001_ip = 31; continue _fun0001 }
 29:
            var4 = false;
 31:
            var _closure2_slot1 = var4;
            var4 = var3.joinCallVideo;
            if(!(var4 === var2)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var4 = false;
 49:
            var _closure2_slot2 = var4;
            var4 = var3.location;
            var _closure2_slot3 = var4;
            var4 = var3.onBeforeTransition;
            var _closure2_slot4 = var4;
            var3 = var3.navigateToChannel;
            if(!(var3 === var2)) { _fun0001_ip = 84; continue _fun0001 }
 82:
            var3 = true;
 84:
            var _closure2_slot5 = var3;
            var3 = this;
            var _closure2_slot6 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 421; continue _fun0002 }
 10:
                        var4 = undefined;
                        var13 = undefined;
                        var3 = undefined;
                        var8 = undefined;
                        var6 = undefined;
                        var10 = _closure2_slot6;
                        var7 = var10._getRecipients;
                        var2 = _closure2_slot0;
                        var2 = var7.bind(var10)(var2);
                        var13 = var2;
                        var3 = function joinCallIfRequested(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var7 = arg1;
                                var2 = _closure2_slot1;
                                if(!var2) { _fun0003_ip = 95; continue _fun0003 }
 13:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 7;
                                var3 = var3[var2];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.call;
                                var4 = var7.id;
                                var3 = _closure2_slot2;
                                var1 = var7.isDM;
                                var1 = var1.bind(var7)();
                                var2 = null;
                                if(!var1) { _fun0003_ip = 77; continue _fun0003 }
 67:
                                var1 = var7.getRecipientId;
                                var2 = var1.bind(var7)();
 77:
                                var9 = true;
                                var12 = var6;
                                var11 = var4;
                                var10 = var3;
                                var8 = var2;
                                var1 = var12[var5](var11, var10, var9, var8, var7);
 95:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var2.length;
                        var10 = 1;
                        if(!(var10 !== var2)) { _fun0002_ip = 66; continue _fun0002 }
 64:
                        _fun0002_ip = 122; continue _fun0002;
 66:
                        var7 = _closure1_slot3;
                        var2 = var13;
                        var7 = var7.bind(var4)(var2, var10);
                        var2 = 0;
                        var12 = var7[var2];
                        var11 = _closure2_slot6;
                        var10 = var11._openCachedDMChannel;
                        var7 = _closure2_slot4;
                        var2 = _closure2_slot5;
                        var2 = var10.bind(var11)(var12, var7, var2);
                        var7 = null;
                        if(!(var7 == var2)) { _fun0002_ip = 389; continue _fun0002 }
 122: // try_start_0
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 8;
                        var7 = var11[var7];
                        var7 = var10.bind(var4)(var7);
                        var11 = var7.HTTP;
                        var10 = var11.post;
                        var7 = {'url': null, 'body': null, 'context': null, 'oldFormErrors': true, 'retries': 3, 'rejectWithError': false};
                        var12 = _closure1_slot11;
                        var12 = var12.USER_CHANNELS;
                        var7['url'] = var12;
                        var12 = {};
                        var12['recipients'] = var13;
                        var7['body'] = var12;
                        var12 = {};
                        var13 = _closure2_slot3;
                        var12['location'] = var13;
                        var7['context'] = var12;
                        var7 = var10.bind(var11)(var7);
                        SaveGenerator(address=224);
 222:
                        return var7;
 224:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                        if(var10) { _fun0002_ip = 302; continue _fun0002 }
 230:
                        var8 = var7;
                        var10 = _closure2_slot5;
                        if(!var10) { _fun0002_ip = 289; continue _fun0002 }
 240:
                        var11 = _closure2_slot4;
                        var10 = null;
                        if(!(var10 != var11)) { _fun0002_ip = 258; continue _fun0002 }
 250:
                        var10 = _closure2_slot4;
                        var10 = var10.bind(var4)();
 258:
                        var10 = var3;
                        var12 = _closure2_slot6;
                        var11 = var12._openPrivateChannel;
                        var9 = var8;
                        var9 = var9.body;
                        var9 = var11.bind(var12)(var9);
                        var9 = var10.bind(var4)(var9);
 289:
                        var8 = var8.body;
                        var8 = var8.id;
 299: // try_end0
                        return var8;
 302:
                        return var7;
 305: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var5 = var7;
                        var9 = null;
                        var7 = var9 == var7;
                        var8 = undefined;
                        if(var7) { _fun0002_ip = 346; continue _fun0002 }
 321:
                        var7 = var5;
                        var7 = var7.body;
                        var6 = var7;
                        var7 = var9 == var7;
                        var8 = undefined;
                        if(var7) { _fun0002_ip = 346; continue _fun0002 }
 341:
                        var8 = var6.code;
 346:
                        var7 = _closure1_slot10;
                        var7 = var7.QUARANTINED;
                        if(!(var8 === var7)) { _fun0002_ip = 387; continue _fun0002 }
 363:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 9;
                        var6 = var8[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.bind(var4)();
 387:
                        throw var5;
 389:
                        var3 = var3.bind(var4)(var2);
                        var3 = global;
                        var4 = var3.Promise;
                        var3 = var4.resolve;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var2;
 421:
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
    var2['openPrivateChannel'] = var7;
    var7 = function _openCachedDMChannel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg2;
            var7 = arguments[2];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0004_ip = 14; continue _fun0004 }
 12:
            var7 = true;
 14:
            var6 = _closure1_slot7;
            var2 = var6.getDMFromUserId;
            var1 = arg1;
            var9 = var2.bind(var6)(var1);
            var6 = null;
            var1 = var6 != var9;
            var2 = null;
            if(!var1) { _fun0004_ip = 60; continue _fun0004 }
 46:
            var8 = _closure1_slot7;
            var1 = var8.getChannel;
            var2 = var1.bind(var8)(var9);
 60:
            var8 = var6 == var2;
            var1 = null;
            if(var8) { _fun0004_ip = 213; continue _fun0004 }
 72:
            var1 = var2;
            if(!var7) { _fun0004_ip = 213; continue _fun0004 }
 81:
            if(!(var6 != var4)) { _fun0004_ip = 89; continue _fun0004 }
 85:
            var4 = var4.bind(var5)();
 89:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 10;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.getRootNavigationRef;
            var4 = var4.bind(var7)();
            if(!(var6 == var4)) { _fun0004_ip = 164; continue _fun0004 }
 123:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.selectPrivateChannel;
            var4 = var2.id;
            var4 = var6.bind(var7)(var4);
            var1 = var2;
            _fun0004_ip = 213; continue _fun0004;
 164:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var5 = var6.transitionToChannel;
            var4 = var2.id;
            var3 = {};
            var7 = true;
            var3['navigationReplace'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var1 = var2;
 213:
            return var1;
        }
    };
    var2['_openCachedDMChannel'] = var7;
    var7 = function ensurePrivateChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = this;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 192; continue _fun0005 }
 10:
                    var4 = _closure2_slot1;
                    var3 = var4._getRecipients;
                    var2 = _closure2_slot0;
                    var8 = var3.bind(var4)(var2);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var7 = _closure1_slot11;
                    var7 = var7.USER_CHANNELS;
                    var2['url'] = var7;
                    var7 = {};
                    var7['recipients'] = var8;
                    var2['body'] = var7;
                    var7 = true;
                    var2['oldFormErrors'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=117);
 115:
                    return var2;
 117:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 189; continue _fun0005 }
 123:
                    var5 = _closure1_slot6;
                    var3 = var2.body;
                    var3 = var5.bind(var6)(var3);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 13;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CHANNEL_CREATE';
                    var4['type'] = var7;
                    var4['channel'] = var3;
                    var4 = var5.bind(var6)(var4);
                    var3 = var3.id;
                    return var3;
 189:
                    return var2;
 192:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['ensurePrivateChannel'] = var7;
    var7 = function getOrEnsurePrivateChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = this;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 76; continue _fun0006 }
 7:
                    var5 = _closure1_slot7;
                    var4 = var5.getDMFromUserId;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    if(!(var4 == var2)) { _fun0006_ip = 73; continue _fun0006 }
 38:
                    var5 = _closure2_slot1;
                    var4 = var5.ensurePrivateChannel;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=61);
 59:
                    return var3;
 61:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var2 = var3;
                    if(!var4) { _fun0006_ip = 73; continue _fun0006 }
 70:
                    return var3;
 73:
                    return var2;
 76:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getOrEnsurePrivateChannel'] = var7;
    var7 = function getDMChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 163; continue _fun0007 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var9 = _closure1_slot11;
                    var8 = var9.DM_CHANNEL;
                    var7 = _closure2_slot0;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=88);
 86:
                    return var2;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 160; continue _fun0007 }
 94:
                    var5 = _closure1_slot6;
                    var3 = var2.body;
                    var3 = var5.bind(var6)(var3);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 13;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CHANNEL_CREATE';
                    var4['type'] = var7;
                    var4['channel'] = var3;
                    var4 = var5.bind(var6)(var4);
                    var3 = var3.id;
                    return var3;
 160:
                    return var2;
 163:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getDMChannel'] = var7;
    var7 = function _getRecipients(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0008_ip = 15; continue _fun0008 }
 9:
            var1 = new Array(0);
            _fun0008_ip = 53; continue _fun0008;
 15:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var3 = var2.bind(var3)(var4);
            var2 = var4;
            if(var3) { _fun0008_ip = 50; continue _fun0008 }
 39:
            var3 = new Array(1);
            var3[0] = var4;
            var2 = var3;
 50:
            var1 = var2;
 53:
            return var1;
        }
    };
    var2['_getRecipients'] = var7;
    var7 = function _openPrivateChannel(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = _closure1_slot6;
            var4 = undefined;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.dispatch;
            var3 = {};
            var8 = 'CHANNEL_CREATE';
            var3['type'] = var8;
            var3['channel'] = var1;
            var3 = var5.bind(var7)(var3);
            var5 = _closure1_slot0;
            var3 = 10;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getRootNavigationRef;
            var5 = var3.bind(var5)();
            var3 = null;
            if(!(var3 == var5)) { _fun0009_ip = 131; continue _fun0009 }
 93:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.selectPrivateChannel;
            var3 = var1.id;
            var3 = var5.bind(var6)(var3);
            _fun0009_ip = 177; continue _fun0009;
 131:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var4 = var5.transitionToChannel;
            var3 = var1.id;
            var2 = {};
            var6 = true;
            var2['navigationReplace'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 177:
            return var1;
        }
    };
    var2['_openPrivateChannel'] = var7;
    var7 = function closePrivateChannel(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var8 = arg1;
            var2 = arguments[1];
            var6 = arguments[2];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0010_ip = 19; continue _fun0010 }
 17:
            var2 = false;
 19:
            if(!(var6 === var4)) { _fun0010_ip = 25; continue _fun0010 }
 23:
            var6 = false;
 25:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 14;
            var3 = var9[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)(var8);
            if(!var3) { _fun0010_ip = 140; continue _fun0010 }
 56:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 15;
            var3 = var9[var3];
            var10 = var7.bind(var4)(var3);
            var9 = var10.track;
            var3 = _closure1_slot9;
            var7 = var3.CHANGE_LOG_DM_REMOVED;
            var3 = {};
            var12 = _closure1_slot5;
            var11 = var12.latestChangelogId;
            var11 = var11.bind(var12)();
            var3['last_changelog_id'] = var11;
            var12 = _closure1_slot8;
            var11 = var12.getUnreadCount;
            var11 = var11.bind(var12)(var8);
            var3['unread_count'] = var11;
            var3 = var9.bind(var10)(var7, var3);
 140:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var9 = var7.bind(var4)(var3);
            var7 = var9.dispatch;
            var3 = {};
            var10 = 'CHANNEL_DELETE';
            var3['type'] = var10;
            var10 = {};
            var10['id'] = var8;
            var10['guild_id'] = var4;
            var10['parent_id'] = var4;
            var3['channel'] = var10;
            var3['silent'] = var6;
            var3 = var7.bind(var9)(var3);
            if(!var2) { _fun0010_ip = 248; continue _fun0010 }
 207:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.transitionTo;
            var2 = _closure1_slot12;
            var2 = var2.FRIENDS;
            var2 = var3.bind(var7)(var2);
 248:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.del;
            var2 = {};
            var7 = _closure1_slot11;
            var5 = var7.CHANNEL;
            var5 = var5.bind(var7)(var8);
            var2['url'] = var5;
            var5 = {};
            var5['silent'] = var6;
            var2['query'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 17;
                var2 = var8[var1];
                var1 = undefined;
                var2 = var7.bind(var1)(var2);
                var4 = var2.AccessibilityAnnouncer;
                var3 = var4.announce;
                var2 = 18;
                var5 = var8[var2];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.nRbucn;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 17;
                var2 = var8[var1];
                var1 = undefined;
                var2 = var7.bind(var1)(var2);
                var4 = var2.AccessibilityAnnouncer;
                var3 = var4.announce;
                var2 = 18;
                var5 = var8[var2];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.ndXVIy;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['closePrivateChannel'] = var7;
    var7 = function updatePermissionOverwrite(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 179; continue _fun0011 }
 10:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.put;
                    var2 = {};
                    var12 = _closure1_slot11;
                    var11 = var12.CHANNEL_PERMISSIONS_OVERWRITE;
                    var10 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var9 = var8.id;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=110);
 108:
                    return var2;
 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 176; continue _fun0011 }
 116:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['channelId'] = var7;
                    var6 = _closure2_slot1;
                    var3['overwrite'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 176:
                    return var2;
 179:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['updatePermissionOverwrite'] = var7;
    var7 = function clearPermissionOverwrite(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 171; continue _fun0012 }
 10:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.del;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var11 = _closure1_slot11;
                    var10 = var11.CHANNEL_PERMISSIONS_OVERWRITE;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['url'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=102);
 100:
                    return var2;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 168; continue _fun0012 }
 108:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 13;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['channelId'] = var7;
                    var6 = _closure2_slot1;
                    var3['overwriteId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 168:
                    return var2;
 171:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['clearPermissionOverwrite'] = var7;
    var7 = function addRecipient(arg1, arg2, arg3, arg4) {
        var8 = arg1;
        var2 = this;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var8;
        var2 = arg4;
        var _closure2_slot2 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.put;
        var2 = {};
        var7 = _closure1_slot11;
        var6 = var7.CHANNEL_RECIPIENT;
        var5 = arg2;
        var5 = var6.bind(var7)(var8, var5);
        var2['url'] = var5;
        var5 = {};
        var6 = arg3;
        var5['location'] = var6;
        var2['context'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = arg1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 17;
                var1 = var9[var1];
                var4 = undefined;
                var1 = var8.bind(var4)(var1);
                var5 = var1.AccessibilityAnnouncer;
                var3 = var5.announce;
                var1 = 18;
                var6 = var9[var1];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.cU0t1N;
                var1 = var6.bind(var7)(var1);
                var1 = var3.bind(var5)(var1);
                var5 = _closure2_slot2;
                var1 = null;
                if(!(var1 != var5)) { _fun0013_ip = 115; continue _fun0013 }
 107:
                var1 = _closure2_slot2;
                var1 = var1.bind(var4)();
 115:
                var4 = var2.status;
                var1 = 201;
                if(!(var1 !== var4)) { _fun0013_ip = 133; continue _fun0013 }
 127:
                var1 = _closure2_slot1;
                _fun0013_ip = 158; continue _fun0013;
 133:
                var4 = _closure2_slot0;
                var3 = var4._openPrivateChannel;
                var2 = var2.body;
                var2 = var3.bind(var4)(var2);
                var1 = var2.id;
 158:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 17;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 18;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.8GEden;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            var1 = _closure2_slot1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['addRecipient'] = var7;
    var7 = function addRecipients(arg1, arg2, arg3, arg4) {
        var3 = arg2;
        var7 = arg3;
        var6 = this;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var3;
        var _closure2_slot2 = var7;
        var5 = var6.addRecipient;
        var2 = 0;
        var10 = var3[var2];
        var11 = arg1;
        var8 = arg4;
        var12 = var6;
        var9 = var7;
        var3 = var12[var5](var11, var10, var9, var8, var7);
        var2 = var3.then;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.all;
            var6 = _closure2_slot1;
            var5 = var6.slice;
            var2 = 1;
            var6 = var5.bind(var6)(var2);
            var5 = var6.map;
            var2 = function(arg1) {
                var5 = _closure2_slot0;
                var4 = var5.addRecipient;
                var3 = _closure3_slot0;
                var2 = _closure2_slot2;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function() {
                var1 = _closure3_slot0;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['addRecipients'] = var7;
    var7 = function removeRecipient(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var7 = _closure1_slot11;
        var6 = var7.CHANNEL_RECIPIENT;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['removeRecipient'] = var7;
    var7 = function setDMOwner(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot11;
        var5 = var6.CHANNEL;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg2;
        var4['owner'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['setDMOwner'] = var7;
    var7 = function setName(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 216; continue _fun0014 }
 10:
                    var4 = _closure1_slot7;
                    var2 = var4.getChannel;
                    var11 = _closure2_slot0;
                    var9 = var2.bind(var4)(var11);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var10 = _closure1_slot11;
                    var7 = var10.CHANNEL;
                    var7 = var7.bind(var10)(var11);
                    var2['url'] = var7;
                    var7 = {};
                    var8 = _closure2_slot1;
                    var7['name'] = var8;
                    var2['body'] = var7;
                    var7 = true;
                    var2['oldFormErrors'] = var7;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=122);
 120:
                    return var2;
 122:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 213; continue _fun0014 }
 128:
                    var7 = null;
                    var4 = var7 == var9;
                    var5 = undefined;
                    if(var4) { _fun0014_ip = 149; continue _fun0014 }
 139:
                    var4 = var9.getGuildId;
                    var5 = var4.bind(var9)();
 149:
                    var4 = var7 == var5;
                    if(var4) { _fun0014_ip = 176; continue _fun0014 }
 156:
                    var7 = var7 != var9;
                    if(!var7) { _fun0014_ip = 173; continue _fun0014 }
 163:
                    var8 = var9.isThread;
                    var7 = var8.bind(var9)();
 173:
                    var4 = var7;
 176:
                    if(var4) { _fun0014_ip = 210; continue _fun0014 }
 179:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 19;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.checkGuildTemplateDirty;
                    var3 = var3.bind(var4)(var5);
 210:
                    return var2;
 213:
                    return var2;
 216:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['setName'] = var7;
    var7 = function setIcon(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 635; continue _fun0015 }
 10:
                    var10 = undefined;
                    var16 = undefined;
                    var12 = undefined;
                    var5 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    var11 = _closure1_slot7;
                    var4 = var11.getChannel;
                    var6 = _closure2_slot0;
                    var4 = var4.bind(var11)(var6);
                    var16 = var4;
                    var13 = {};
                    var13['channel_id'] = var6;
                    var11 = null;
                    var6 = var11 == var4;
                    var4 = undefined;
                    if(var6) { _fun0015_ip = 76; continue _fun0015 }
 68:
                    var6 = var16;
                    var4 = var6.type;
 76:
                    var13['channel_type'] = var4;
                    var4 = var16;
                    var6 = var11 == var4;
                    var4 = undefined;
                    if(var6) { _fun0015_ip = 101; continue _fun0015 }
 93:
                    var6 = var16;
                    var4 = var6.icon;
 101:
                    var4 = var11 != var4;
                    var13['old_icon_set'] = var4;
                    var4 = _closure2_slot1;
                    var4 = var11 != var4;
                    var13['new_icon_set'] = var4;
                    var4 = _closure2_slot2;
                    var13['location'] = var4;
                    var12 = var13;
                    var14 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 15;
                    var4 = var4[var6];
                    var17 = var14.bind(var10)(var4);
                    var15 = var17.track;
                    var4 = _closure1_slot9;
                    var14 = var4.CHANNEL_ICON_EDIT_PROGRESSED;
                    var4 = {};
                    var22 = var4;
                    var21 = var13;
                    var13 = copyDataProperties(var22, var21);
                    var19 = 'initiated';
                    var13 = 'status';
                    var4[var13] = var19;
                    var4 = var15.bind(var17)(var14, var4);
 202: // try_start_0
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 8;
                    var4 = var15[var4];
                    var4 = var14.bind(var10)(var4);
                    var15 = var4.HTTP;
                    var14 = var15.patch;
                    var4 = {'url': null, 'body': null, 'oldFormErrors': true, 'rejectWithError': true, 'failImmediatelyWhenRateLimited': true};
                    var20 = _closure1_slot11;
                    var19 = var20.CHANNEL;
                    var17 = _closure2_slot0;
                    var17 = var19.bind(var20)(var17);
                    var4['url'] = var17;
                    var17 = {};
                    var18 = _closure2_slot1;
                    var17['icon'] = var18;
                    var4['body'] = var17;
                    var4 = var14.bind(var15)(var4);
                    SaveGenerator(address=293);
 291:
                    return var4;
 293:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=13);
                    if(var14) { _fun0015_ip = 468; continue _fun0015 }
 302:
                    var5 = var4;
                    var15 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var14 = var14[var6];
                    var18 = var15.bind(var10)(var14);
                    var17 = var18.track;
                    var14 = _closure1_slot9;
                    var15 = var14.CHANNEL_ICON_EDIT_PROGRESSED;
                    var14 = {};
                    var21 = var12;
                    var22 = var14;
                    var19 = copyDataProperties(var22, var21);
                    var19 = 'success';
                    var14[var13] = var19;
                    var14 = var17.bind(var18)(var15, var14);
                    var14 = var16;
                    var14 = var11 == var14;
                    var15 = undefined;
                    if(var14) { _fun0015_ip = 389; continue _fun0015 }
 376:
                    var17 = var16;
                    var14 = var17.getGuildId;
                    var15 = var14.bind(var17)();
 389:
                    var8 = var15;
                    var15 = var11 == var15;
                    var14 = var15;
                    if(var15) { _fun0015_ip = 431; continue _fun0015 }
 402:
                    var17 = var16;
                    var17 = var11 != var17;
                    var15 = var17;
                    if(!var17) { _fun0015_ip = 428; continue _fun0015 }
 415:
                    var17 = var16;
                    var16 = var17.isThread;
                    var15 = var16.bind(var17)();
 428:
                    var14 = var15;
 431:
                    if(var14) { _fun0015_ip = 465; continue _fun0015 }
 434:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 19;
                    var14 = var16[var14];
                    var15 = var15.bind(var10)(var14);
                    var14 = var15.checkGuildTemplateDirty;
                    var8 = var14.bind(var15)(var8);
 465: // try_end0
                    return var5;
 468:
                    return var4;
 471: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var2 = var8;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var10)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot9;
                    var4 = var3.CHANNEL_ICON_EDIT_PROGRESSED;
                    var3 = {};
                    var21 = var12;
                    var22 = var3;
                    var12 = copyDataProperties(var22, var21);
                    var12 = 'failed';
                    var3[var13] = var12;
                    var12 = var11 == var8;
                    var8 = undefined;
                    if(var12) { _fun0015_ip = 566; continue _fun0015 }
 540:
                    var12 = var2;
                    var12 = var12.body;
                    var9 = var12;
                    var12 = var11 == var12;
                    var8 = undefined;
                    if(var12) { _fun0015_ip = 566; continue _fun0015 }
 560:
                    var8 = var9.retry_after;
 566:
                    var9 = var11 != var8;
                    var8 = 'is_rate_limited';
                    var3[var8] = var9;
                    var8 = var2;
                    var9 = var11 == var8;
                    var8 = undefined;
                    if(var9) { _fun0015_ip = 618; continue _fun0015 }
 593:
                    var9 = var2;
                    var9 = var9.body;
                    var7 = var9;
                    var9 = var11 == var9;
                    var8 = undefined;
                    if(var9) { _fun0015_ip = 618; continue _fun0015 }
 613:
                    var8 = var7.message;
 618:
                    var7 = 'error_message';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
                    throw var2;
 635:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['setIcon'] = var7;
    var7 = function setWallpaper(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 118; continue _fun0016 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var8 = _closure1_slot11;
                    var7 = var8.CHANNEL;
                    var5 = _closure2_slot0;
                    var5 = var7.bind(var8)(var5);
                    var2['url'] = var5;
                    var5 = {};
                    var6 = _closure2_slot1;
                    var5['wallpaper_id'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['oldFormErrors'] = var5;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=106);
 104:
                    return var2;
 106:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 115; continue _fun0016 }
 112:
                    return var2;
 115:
                    return var2;
 118:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['setWallpaper'] = var7;
    var7 = function updateChannel(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 689; continue _fun0017 }
 10:
                    var10 = undefined;
                    var4 = undefined;
                    var15 = undefined;
                    var8 = undefined;
                    var6 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    var5 = _closure2_slot1;
                    var3 = 'icon';
                    var4 = var3 in var5;
                    var14 = _closure1_slot7;
                    var13 = var14.getChannel;
                    var11 = _closure2_slot0;
                    var14 = var13.bind(var14)(var11);
                    var15 = var14;
                    var13 = var5.icon;
                    var5 = {};
                    var5['channel_id'] = var11;
                    var11 = null;
                    var17 = var11 == var14;
                    var14 = undefined;
                    if(var17) { _fun0017_ip = 95; continue _fun0017 }
 87:
                    var17 = var15;
                    var14 = var17.type;
 95:
                    var5['channel_type'] = var14;
                    var14 = var15;
                    var17 = var11 == var14;
                    var14 = undefined;
                    if(var17) { _fun0017_ip = 120; continue _fun0017 }
 112:
                    var17 = var15;
                    var14 = var17.icon;
 120:
                    var14 = var11 != var14;
                    var5['old_icon_set'] = var14;
                    var13 = var11 != var13;
                    var5['new_icon_set'] = var13;
                    var13 = _closure2_slot2;
                    var5['location'] = var13;
                    var8 = var5;
                    var5 = var4;
                    if(!var5) { _fun0017_ip = 223; continue _fun0017 }
 155:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var5 = 15;
                    var5 = var14[var5];
                    var17 = var13.bind(var10)(var5);
                    var14 = var17.track;
                    var5 = _closure1_slot9;
                    var13 = var5.CHANNEL_ICON_EDIT_PROGRESSED;
                    var5 = {};
                    var20 = var8;
                    var21 = var5;
                    var18 = copyDataProperties(var21, var20);
                    var19 = 'initiated';
                    var18 = 'status';
                    var5[var18] = var19;
                    var5 = var14.bind(var17)(var13, var5);
 223: // try_start_0
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 8;
                    var5 = var14[var5];
                    var5 = var13.bind(var10)(var5);
                    var14 = var5.HTTP;
                    var13 = var14.patch;
                    var5 = {};
                    var17 = {};
                    var18 = _closure2_slot2;
                    var17['location'] = var18;
                    var5['context'] = var17;
                    var19 = _closure1_slot11;
                    var18 = var19.CHANNEL;
                    var17 = _closure2_slot0;
                    var17 = var18.bind(var19)(var17);
                    var5['url'] = var17;
                    var16 = _closure2_slot1;
                    var5['body'] = var16;
                    var16 = true;
                    var5['oldFormErrors'] = var16;
                    var5['rejectWithError'] = var16;
                    var5 = var13.bind(var14)(var5);
                    SaveGenerator(address=321);
 319:
                    return var5;
 321:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(var13) { _fun0017_ip = 509; continue _fun0017 }
 330:
                    var6 = var5;
                    var13 = var15;
                    var13 = var11 == var13;
                    var14 = undefined;
                    if(var13) { _fun0017_ip = 358; continue _fun0017 }
 345:
                    var16 = var15;
                    var13 = var16.getGuildId;
                    var14 = var13.bind(var16)();
 358:
                    var12 = var14;
                    var14 = var11 == var14;
                    var13 = var14;
                    if(var14) { _fun0017_ip = 400; continue _fun0017 }
 371:
                    var16 = var15;
                    var16 = var11 != var16;
                    var14 = var16;
                    if(!var16) { _fun0017_ip = 397; continue _fun0017 }
 384:
                    var16 = var15;
                    var15 = var16.isThread;
                    var14 = var15.bind(var16)();
 397:
                    var13 = var14;
 400:
                    if(var13) { _fun0017_ip = 434; continue _fun0017 }
 403:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 19;
                    var13 = var15[var13];
                    var14 = var14.bind(var10)(var13);
                    var13 = var14.checkGuildTemplateDirty;
                    var12 = var13.bind(var14)(var12);
 434:
                    var12 = var4;
                    if(!var12) { _fun0017_ip = 506; continue _fun0017 }
 440:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 15;
                    var12 = var14[var12];
                    var15 = var13.bind(var10)(var12);
                    var14 = var15.track;
                    var12 = _closure1_slot9;
                    var13 = var12.CHANNEL_ICON_EDIT_PROGRESSED;
                    var12 = {};
                    var20 = var8;
                    var21 = var12;
                    var16 = copyDataProperties(var21, var20);
                    var17 = 'success';
                    var16 = 'status';
                    var12[var16] = var17;
                    var12 = var14.bind(var15)(var13, var12);
 506: // try_end0
                    return var6;
 509:
                    return var5;
 512: // catch_target0
                    CatchBlockStart(arg_register=1);
                    if(!var4) { _fun0017_ip = 687; continue _fun0017 }
 520:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var6 = var5.bind(var10)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot9;
                    var4 = var3.CHANNEL_ICON_EDIT_PROGRESSED;
                    var3 = {};
                    var20 = var8;
                    var21 = var3;
                    var8 = copyDataProperties(var21, var20);
                    var12 = 'failed';
                    var8 = 'status';
                    var3[var8] = var12;
                    var8 = var2;
                    var12 = var11 == var8;
                    var8 = undefined;
                    if(var12) { _fun0017_ip = 620; continue _fun0017 }
 594:
                    var12 = var2;
                    var12 = var12.body;
                    var9 = var12;
                    var12 = var11 == var12;
                    var8 = undefined;
                    if(var12) { _fun0017_ip = 620; continue _fun0017 }
 614:
                    var8 = var9.retry_after;
 620:
                    var9 = var11 != var8;
                    var8 = 'is_rate_limited';
                    var3[var8] = var9;
                    var8 = var2;
                    var9 = var11 == var8;
                    var8 = undefined;
                    if(var9) { _fun0017_ip = 672; continue _fun0017 }
 647:
                    var9 = var2;
                    var9 = var9.body;
                    var7 = var9;
                    var9 = var11 == var9;
                    var8 = undefined;
                    if(var9) { _fun0017_ip = 672; continue _fun0017 }
 667:
                    var8 = var7.message;
 672:
                    var7 = 'error_message';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
 687:
                    throw var2;
 689:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['updateChannel'] = var7;
    var7 = function convertToGuild(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var6 = _closure1_slot11;
        var5 = var6.CHANNEL_CONVERT;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['convertToGuild'] = var7;
    var7 = function preload(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'CHANNEL_PRELOAD';
            var2['type'] = var6;
            var8 = _closure1_slot13;
            var6 = null;
            if(!(var7 !== var8)) { _fun0018_ip = 56; continue _fun0018 }
 53:
            var6 = var7;
 56:
            var2['guildId'] = var6;
            var6 = arg2;
            var2['channelId'] = var6;
            var5 = _closure1_slot14;
            var2['context'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['preload'] = var7;
    var7 = function fetchChannelStoreListing(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var6;
            var2 = null;
            if(!(var2 == var5)) { _fun0019_ip = 38; continue _fun0019 }
 18:
            var3 = _closure1_slot11;
            var2 = var3.CHANNEL_STORE_LISTING;
            var4 = var2.bind(var3)(var6);
            _fun0019_ip = 57; continue _fun0019;
 38:
            var3 = _closure1_slot11;
            var2 = var3.CHANNEL_STORE_LISTING_SKU;
            var4 = var2.bind(var3)(var6, var5);
 57:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 20;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.httpGetWithCountryCodeQuery;
            var3 = var2.bind(var3)(var4);
            var2 = var3.then;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'STORE_LISTING_FETCH_SUCCESS';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var5 = arg1;
                var5 = var5.body;
                var2['storeListing'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['fetchChannelStoreListing'] = var7;
    var7 = function createTextChannel(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 218; continue _fun0020 }
 10:
                    var8 = {};
                    var2 = _closure1_slot15;
                    var2 = var2.GUILD_TEXT;
                    var8['type'] = var2;
                    var2 = _closure2_slot1;
                    var8['name'] = var2;
                    var2 = new Array(0);
                    var8['permission_overwrites'] = var2;
                    var2 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0020_ip = 69; continue _fun0020 }
 59:
                    var2 = _closure2_slot2;
                    var8['parent_id'] = var2;
 69:
                    var2 = _closure2_slot3;
                    if(!(var5 != var2)) { _fun0020_ip = 87; continue _fun0020 }
 77:
                    var2 = _closure2_slot3;
                    var8['topic'] = var2;
 87:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var5.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.post;
                    var2 = {};
                    var11 = _closure1_slot11;
                    var10 = var11.GUILD_CHANNELS;
                    var9 = _closure2_slot0;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=171);
 169:
                    return var2;
 171:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0020_ip = 215; continue _fun0020 }
 177:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 19;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    return var2;
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
    var2['createTextChannel'] = var7;
    var4 = function fetchChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 102; continue _fun0021 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var7 = _closure1_slot11;
                    var6 = var7.CHANNEL;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
 83:
                    return var2;
 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 99; continue _fun0021 }
 91:
                    var3 = var2.body;
                    return var3;
 99:
                    return var2;
 102:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchChannel'] = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ChannelActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();