// app/modules/threads/ThreadActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function patchThread(arg1, arg2) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var7 = _closure1_slot11;
        var6 = var7.CHANNEL;
        var5 = var5.id;
        var5 = var6.bind(var7)(var5);
        var2['url'] = var5;
        var5 = arg2;
        var2['body'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var6 = 10;
                var3 = var3[var6];
                var4 = undefined;
                var7 = var5.bind(var4)(var3);
                var5 = var7.dispatch;
                var3 = {};
                var8 = 'THREAD_UPDATE';
                var3['type'] = var8;
                var9 = _closure1_slot4;
                var8 = var1.body;
                var8 = var9.bind(var4)(var8);
                var3['channel'] = var8;
                var3 = var5.bind(var7)(var3);
                var7 = _closure2_slot0;
                var3 = var7.isForumPost;
                var3 = var3.bind(var7)();
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = _closure2_slot0;
                var8 = var7.parent_id;
                var7 = null;
                var3 = var7 != var8;
case 2:
                if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var4 = var3.bind(var4)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'RESORT_THREADS';
                var2['type'] = var6;
                var5 = _closure2_slot0;
                var5 = var5.parent_id;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
case 4:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function dispatchThreadMemberLocalUpdate(arg1, arg2) {
        var7 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'THREAD_MEMBER_LOCAL_UPDATE';
        var2['type'] = var6;
        var6 = var7.id;
        var2['id'] = var6;
        var6 = var7.getGuildId;
        var6 = var6.bind(var7)();
        var2['guildId'] = var6;
        var6 = _closure1_slot5;
        var5 = var6.getId;
        var5 = var5.bind(var6)();
        var2['userId'] = var5;
        var5 = arg2;
        var2['isJoining'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var2 = var2.createChannelRecordFromServer;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var8 = var6[var2];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PAGE_SIZE;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot11 = var7;
    var7 = var2.AbortCodes;
    var _closure1_slot12 = var7;
    var7 = var2.AnalyticEvents;
    var _closure1_slot13 = var7;
    var2 = var2.Permissions;
    var _closure1_slot14 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChannelFlags;
    var _closure1_slot15 = var2;
    var2 = {};
    var7 = function archiveThread(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = {};
            var1 = true;
            var4['archived'] = var1;
            var2 = arg2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4['locked'] = var1;
case 6:
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1, var4);
            return var1;
        }
    };
    var2['archiveThread'] = var7;
    var7 = function lockThread(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = this;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot0;
                    var2 = var3.isArchivedThread;
                    var3 = var2.bind(var3)();
                    if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var7 = _closure2_slot1;
                    var6 = var7.unarchiveThread;
                    var5 = _closure2_slot0;
                    var2 = false;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=53);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 10:
                    var6 = _closure1_slot16;
                    var5 = _closure2_slot0;
                    var4 = {};
                    var7 = true;
                    var4['locked'] = var7;
                    var4['archived'] = var3;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5, var4);
                    return var3;
case 14:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['lockThread'] = var7;
    var7 = function unlockThread(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = this;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var3 = _closure2_slot0;
                    var2 = var3.isArchivedThread;
                    var3 = var2.bind(var3)();
                    if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var7 = _closure2_slot1;
                    var6 = var7.unarchiveThread;
                    var5 = _closure2_slot0;
                    var2 = true;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=53);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 14; continue _fun0004 }
case 10:
                    var6 = _closure1_slot16;
                    var5 = _closure2_slot0;
                    var4 = {};
                    var7 = false;
                    var4['locked'] = var7;
                    var4['archived'] = var3;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5, var4);
                    return var3;
case 14:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['unlockThread'] = var7;
    var7 = function unarchiveThread(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var11 = undefined;
                    var5 = undefined;
                    var6 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var7 = {};
                    var9 = false;
                    var7['archived'] = var9;
                    var5 = var7;
                    var10 = _closure2_slot0;
                    var8 = var10.isForumPost;
                    var6 = var8.bind(var10)();
                    var8 = _closure2_slot1;
                    if(!var8) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var8 = var5;
                    var8['locked'] = var9;
case 17: // try_start_0
                    var8 = _closure1_slot16;
                    var7 = _closure2_slot0;
                    var5 = var8.bind(var11)(var7, var5);
                    SaveGenerator(address=86);
case 19:
                    return var5;
case 3:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 14; continue _fun0005 }
case 20: // try_end0
                    return var5;
case 14:
                    return var5;
case 8: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var2 = var5;
                    var7 = var5.body;
                    var4 = var7;
                    var5 = null;
                    var7 = var5 == var7;
                    var8 = undefined;
                    if(var7) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var8 = var4.code;
case 21:
                    var4 = _closure1_slot12;
                    var4 = var4.TOO_MANY_THREADS;
                    if(!(var8 !== var4)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var4 = var2;
                    var4 = var4.body;
                    var3 = var4;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var4 = var3.code;
case 25:
                    var3 = _closure1_slot12;
                    var3 = var3.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(var4 !== var3)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var3 = var2;
                    var4 = var3.status;
                    var3 = 429;
                    if(!(var3 !== var4)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var3 = 11;
                    var3 = var13[var3];
                    var5 = var4.bind(var11)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var12 = _closure1_slot0;
                    var8 = 12;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var14 = var9.intl;
                    var10 = var14.string;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var9 = var9.t;
                    var9 = var9.j2d6Ki;
                    var9 = var10.bind(var14)(var9);
                    var3['title'] = var9;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var13[var8];
                    var8 = var12.bind(var11)(var8);
                    var8 = var8.t;
                    var8 = var8.fEptJC;
                    var8 = var9.bind(var10)(var8);
                    var3['body'] = var8;
                    var3 = var4.bind(var5)(var3);
                    _fun0005_ip = 31; continue _fun0005;
case 29:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var11)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var8 = var6;
                    var14 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var13 = 12;
                    var10 = var9[var13];
                    var10 = var14.bind(var11)(var10);
                    var12 = var10.intl;
                    var10 = var12.string;
                    var9 = var9[var13];
                    var9 = var14.bind(var11)(var9);
                    var9 = var9.t;
                    if(var8) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var8 = var9.PeIE/v;
                    var8 = var10.bind(var12)(var8);
                    _fun0005_ip = 34; continue _fun0005;
case 32:
                    var9 = var9.kwyWNT;
                    var8 = var10.bind(var12)(var9);
case 34:
                    var3['title'] = var8;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var9 = var8[var13];
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var8[var13];
                    var8 = var12.bind(var11)(var8);
                    var8 = var8.t;
                    var8 = var8.Whhv4+;
                    var8 = var9.bind(var10)(var8);
                    var3['body'] = var8;
                    var3 = var4.bind(var5)(var3);
                    _fun0005_ip = 31; continue _fun0005;
case 27:
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var3 = 11;
                    var3 = var13[var3];
                    var5 = var4.bind(var11)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var12 = _closure1_slot0;
                    var8 = 12;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var14 = var9.intl;
                    var10 = var14.string;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var9 = var9.t;
                    var9 = var9.PeIE/v;
                    var9 = var10.bind(var14)(var9);
                    var3['title'] = var9;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var13[var8];
                    var8 = var12.bind(var11)(var8);
                    var8 = var8.t;
                    var8 = var8.jDMxz8;
                    var8 = var9.bind(var10)(var8);
                    var3['body'] = var8;
                    var3 = var4.bind(var5)(var3);
                    _fun0005_ip = 31; continue _fun0005;
case 23:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var11)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var8 = var6;
                    var14 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var12 = 12;
                    var10 = var9[var12];
                    var10 = var14.bind(var11)(var10);
                    var13 = var10.intl;
                    var10 = var13.string;
                    var9 = var9[var12];
                    var9 = var14.bind(var11)(var9);
                    var9 = var9.t;
                    if(var8) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var8 = var9.PeIE/v;
                    var8 = var10.bind(var13)(var8);
                    _fun0005_ip = 37; continue _fun0005;
case 35:
                    var9 = var9.kwyWNT;
                    var8 = var10.bind(var13)(var9);
case 37:
                    var3['title'] = var8;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var8 = var7[var12];
                    var8 = var10.bind(var11)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var7[var12];
                    var7 = var10.bind(var11)(var7);
                    var7 = var7.t;
                    if(var6) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var6 = var7.P0wT5e;
                    var6 = var8.bind(var9)(var6);
                    _fun0005_ip = 40; continue _fun0005;
case 38:
                    var7 = var7.KGaiEB;
                    var6 = var8.bind(var9)(var7);
case 40:
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
case 31:
                    throw var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['unarchiveThread'] = var7;
    var7 = function unarchiveThreadIfNecessary(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = this;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 16:
                    var6 = _closure1_slot6;
                    var5 = var6.getChannel;
                    var4 = _closure2_slot0;
                    var5 = var5.bind(var6)(var4);
                    var6 = _closure1_slot7;
                    var4 = var6.can;
                    var3 = _closure1_slot14;
                    var3 = var3.MANAGE_THREADS;
                    var4 = var4.bind(var6)(var3, var5);
                    var7 = null;
                    var3 = var7 != var5;
                    if(!var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var6 = var5.isArchivedThread;
                    var3 = var6.bind(var5)();
case 42:
                    if(!var3) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    if(var4) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var6 = var5.threadMetadata;
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var7 = var6.locked;
case 48:
                    var6 = true;
                    var4 = var6 !== var7;
case 46:
                    var3 = var4;
case 44:
                    if(!var3) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var4 = _closure2_slot1;
                    var3 = var4.unarchiveThread;
                    var2 = false;
                    var2 = var3.bind(var4)(var5, var2);
                    SaveGenerator(address=140);
case 52:
                    return var2;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 54; continue _fun0006 }
case 50:
                    var3 = undefined;
                    return var3;
case 54:
                    return var2;
case 41:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['unarchiveThreadIfNecessary'] = var7;
    var7 = function setInvitable(arg1, arg2) {
        var4 = _closure1_slot16;
        var3 = {};
        var1 = arg2;
        var3['invitable'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var2['setInvitable'] = var7;
    var7 = function joinThread(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 16:
                    var2 = undefined;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure2_slot0;
                    var5 = var6.isForumPost;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var7 = _closure1_slot17;
                    var6 = _closure2_slot0;
                    var5 = true;
                    var5 = var7.bind(var2)(var6, var5);
case 56: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.post;
                    var5 = {};
                    var11 = _closure1_slot11;
                    var10 = var11.THREAD_MEMBER;
                    var9 = _closure2_slot0;
                    var9 = var9.id;
                    var9 = var10.bind(var11)(var9);
                    var5['url'] = var9;
                    var9 = {};
                    var10 = _closure2_slot1;
                    var9['location'] = var10;
                    var5['query'] = var9;
                    var9 = false;
                    var5['rejectWithError'] = var9;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=149);
case 24:
                    return var5;
case 58:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 59; continue _fun0007 }
case 60: // try_end0
                    return var5;
case 59:
                    return var5;
case 61: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var6 = var5.body;
                    var4 = var6;
                    var5 = null;
                    var5 = var5 == var6;
                    var6 = undefined;
                    if(var5) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var6 = var4.code;
case 62:
                    var5 = _closure1_slot12;
                    var5 = var5.TOO_MANY_THREAD_MEMBERS;
                    if(!(var6 !== var5)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                    var6 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var5 = 11;
                    var5 = var13[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.show;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var9 = 12;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var14 = var10.intl;
                    var11 = var14.string;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.j2d6Ki;
                    var10 = var11.bind(var14)(var10);
                    var5['title'] = var10;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.t;
                    var9 = var9.fEptJC;
                    var9 = var10.bind(var11)(var9);
                    var5['body'] = var9;
                    var5 = var6.bind(var7)(var5);
                    _fun0007_ip = 66; continue _fun0007;
case 64:
                    var6 = _closure2_slot0;
                    var5 = var6.isForumPost;
                    var9 = var5.bind(var6)();
                    var8 = var9;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.show;
                    var5 = {};
                    var14 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var13 = 12;
                    var11 = var10[var13];
                    var11 = var14.bind(var2)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var10[var13];
                    var10 = var14.bind(var2)(var10);
                    var10 = var10.t;
                    if(var9) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var9 = var10.gtdVcn;
                    var9 = var11.bind(var12)(var9);
                    _fun0007_ip = 69; continue _fun0007;
case 67:
                    var10 = var10.EMYJFh;
                    var9 = var11.bind(var12)(var10);
case 69:
                    var5['title'] = var9;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var10 = var9[var13];
                    var10 = var12.bind(var2)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var13];
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.t;
                    if(var8) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var8 = var9.abMwgo;
                    var8 = var10.bind(var11)(var8);
                    _fun0007_ip = 72; continue _fun0007;
case 70:
                    var9 = var9.QYyad3;
                    var8 = var10.bind(var11)(var9);
case 72:
                    var5['body'] = var8;
                    var5 = var6.bind(var7)(var5);
case 66:
                    var6 = _closure2_slot0;
                    var5 = var6.isForumPost;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0007_ip = 73; continue _fun0007 }
case 74:
                    var5 = _closure1_slot17;
                    var4 = _closure2_slot0;
                    var3 = false;
                    var3 = var5.bind(var2)(var4, var3);
case 73:
                    return var2;
case 55:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['joinThread'] = var7;
    var7 = function addMember(arg1, arg2, arg3) {
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 75; continue _fun0008 }
case 16:
                    var2 = undefined;
                    var3 = undefined;
                    var6 = undefined;
case 76: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var4 = var5.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.post;
                    var4 = {};
                    var12 = _closure1_slot11;
                    var11 = var12.THREAD_MEMBER;
                    var8 = _closure2_slot0;
                    var10 = var8.id;
                    var8 = _closure2_slot1;
                    var8 = var11.bind(var12)(var10, var8);
                    var4['url'] = var8;
                    var8 = {};
                    var9 = _closure2_slot2;
                    var8['location'] = var9;
                    var4['query'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=118);
case 77:
                    return var4;
case 51:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 21; continue _fun0008 }
case 78: // try_end0
                    return var4;
case 21:
                    return var4;
case 79: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = var4.body;
                    var3 = var5;
                    var4 = null;
                    var5 = var4 == var5;
                    var4 = undefined;
                    if(var5) { _fun0008_ip = 4; continue _fun0008 }
case 54:
                    var4 = var3.code;
case 4:
                    var3 = _closure1_slot12;
                    var3 = var3.TOO_MANY_THREAD_MEMBERS;
                    if(!(var4 !== var3)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var4 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 11;
                    var3 = var12[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var11 = _closure1_slot0;
                    var8 = 12;
                    var9 = var12[var8];
                    var9 = var11.bind(var2)(var9);
                    var13 = var9.intl;
                    var10 = var13.string;
                    var9 = var12[var8];
                    var9 = var11.bind(var2)(var9);
                    var9 = var9.t;
                    var9 = var9.j2d6Ki;
                    var9 = var10.bind(var13)(var9);
                    var3['title'] = var9;
                    var9 = var12[var8];
                    var9 = var11.bind(var2)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.fEptJC;
                    var8 = var9.bind(var10)(var8);
                    var3['body'] = var8;
                    var3 = var4.bind(var5)(var3);
                    _fun0008_ip = 82; continue _fun0008;
case 80:
                    var4 = _closure2_slot0;
                    var3 = var4.isForumPost;
                    var8 = var3.bind(var4)();
                    var6 = var8;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var11 = 12;
                    var10 = var9[var11];
                    var10 = var13.bind(var2)(var10);
                    var12 = var10.intl;
                    var10 = var12.string;
                    var9 = var9[var11];
                    var9 = var13.bind(var2)(var9);
                    var9 = var9.t;
                    if(var8) { _fun0008_ip = 83; continue _fun0008 }
case 84:
                    var8 = var9.YErysL;
                    var8 = var10.bind(var12)(var8);
                    _fun0008_ip = 68; continue _fun0008;
case 83:
                    var9 = var9.0yAqqK;
                    var8 = var10.bind(var12)(var9);
case 68:
                    var3['title'] = var8;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var8 = var7[var11];
                    var8 = var10.bind(var2)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var7[var11];
                    var7 = var10.bind(var2)(var7);
                    var7 = var7.t;
                    if(var6) { _fun0008_ip = 85; continue _fun0008 }
case 86:
                    var6 = var7.abMwgo;
                    var6 = var8.bind(var9)(var6);
                    _fun0008_ip = 87; continue _fun0008;
case 85:
                    var7 = var7.QYyad3;
                    var6 = var8.bind(var9)(var7);
case 87:
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
case 82:
                    return var2;
case 75:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['addMember'] = var7;
    var7 = function leaveThread(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var1 = var4.isForumPost;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0009_ip = 88; continue _fun0009 }
case 76:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var4, var1);
case 88:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.del;
            var1 = {};
            var6 = _closure1_slot11;
            var5 = var6.THREAD_MEMBER;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            var1['url'] = var4;
            var4 = {};
            var5 = arg2;
            var4['location'] = var5;
            var1['query'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['leaveThread'] = var7;
    var7 = function removeMember(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var7 = _closure1_slot11;
        var6 = var7.THREAD_MEMBER;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg3;
        var4['location'] = var5;
        var1['query'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['removeMember'] = var7;
    var7 = function setAutoArchiveDuration(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot11;
        var5 = var6.CHANNEL;
        var4 = arg1;
        var4 = var4.id;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg2;
        var4['auto_archive_duration'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['setAutoArchiveDuration'] = var7;
    var7 = function pin(arg1) {
        var5 = arg1;
        var4 = this;
        var2 = var5.flags;
        var1 = _closure1_slot15;
        var1 = var1.PINNED;
        var3 = var2 | var1;
        var2 = var4.updateFlags;
        var1 = var5.isArchivedThread;
        var1 = var1.bind(var5)();
        var1 = var2.bind(var4)(var5, var3, var1);
        var1 = undefined;
        return var1;
    };
    var2['pin'] = var7;
    var7 = function unpin(arg1) {
        var4 = arg1;
        var3 = this;
        var2 = var4.flags;
        var1 = _closure1_slot15;
        var1 = var1.PINNED;
        var1 = ~var1;
        var2 = var2 & var1;
        var1 = var3.updateFlags;
        var1 = var1.bind(var3)(var4, var2);
        var1 = undefined;
        return var1;
    };
    var2['unpin'] = var7;
    var7 = function updateFlags(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0010_ip = 11; continue _fun0010 }
case 89:
            var3 = false;
case 11:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 90; continue _fun0011 }
case 16:
                        var2 = undefined;
                        var10 = undefined;
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 10;
                        var4 = var4[var5];
                        var11 = var6.bind(var2)(var4);
                        var9 = var11.dispatch;
                        var4 = {};
                        var7 = 'THREAD_UPDATE';
                        var4['type'] = var7;
                        var14 = _closure2_slot0;
                        var13 = var14.merge;
                        var12 = {};
                        var8 = _closure2_slot1;
                        var12['flags'] = var8;
                        var12 = var13.bind(var14)(var12);
                        var4['channel'] = var12;
                        var4 = var9.bind(var11)(var4);
                        var4 = {};
                        var4['flags'] = var8;
                        var10 = var4;
                        var4 = _closure2_slot2;
                        if(!var4) { _fun0011_ip = 77; continue _fun0011 }
case 5:
                        var8 = var10;
                        var4 = false;
                        var8['archived'] = var4;
case 77: // try_start_0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 9;
                        var4 = var9[var4];
                        var4 = var8.bind(var2)(var4);
                        var9 = var4.HTTP;
                        var8 = var9.patch;
                        var4 = {};
                        var13 = _closure1_slot11;
                        var12 = var13.CHANNEL;
                        var11 = _closure2_slot0;
                        var11 = var11.id;
                        var11 = var12.bind(var13)(var11);
                        var4['url'] = var11;
                        var4['body'] = var10;
                        var10 = true;
                        var4['rejectWithError'] = var10;
                        var4 = var8.bind(var9)(var4);
                        SaveGenerator(address=196);
case 91:
                        return var4;
case 92:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(var8) { _fun0011_ip = 93; continue _fun0011 }
case 94: // try_end0
                        _fun0011_ip = 95; continue _fun0011;
case 93:
                        return var4;
case 65: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var3['type'] = var7;
                        var6 = _closure2_slot0;
                        var3['channel'] = var6;
                        var3 = var4.bind(var5)(var3);
case 95:
                        return var2;
case 90:
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
    var2['updateFlags'] = var7;
    var7 = function replacePin(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = this;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 96; continue _fun0012 }
case 16:
                    var2 = _closure2_slot0;
                    var5 = var2.merge;
                    var3 = {};
                    var9 = var2.flags;
                    var8 = _closure1_slot15;
                    var6 = var8.PINNED;
                    var6 = ~var6;
                    var6 = var9 & var6;
                    var3['flags'] = var6;
                    var14 = var5.bind(var2)(var3);
                    var6 = _closure2_slot1;
                    var5 = var6.merge;
                    var3 = {};
                    var9 = var6.flags;
                    var8 = var8.PINNED;
                    var8 = var9 | var8;
                    var3['flags'] = var8;
                    var11 = var5.bind(var6)(var3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var9 = 10;
                    var8 = var3[var9];
                    var6 = undefined;
                    var13 = var5.bind(var6)(var8);
                    var12 = var13.dispatch;
                    var10 = {};
                    var8 = 'THREAD_UPDATE';
                    var10['type'] = var8;
                    var10['channel'] = var14;
                    var10 = var12.bind(var13)(var10);
                    var3 = var3[var9];
                    var10 = var5.bind(var6)(var3);
                    var5 = var10.dispatch;
                    var3 = {};
                    var3['type'] = var8;
                    var3['channel'] = var11;
                    var3 = var5.bind(var10)(var3);
                    var5 = _closure2_slot2;
                    var3 = var5.unarchiveThreadIfNecessary;
                    var2 = var2.id;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=194);
case 97:
                    return var2;
case 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 98; continue _fun0012 }
case 99:
                    var10 = _closure2_slot2;
                    var5 = var10.unarchiveThreadIfNecessary;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var5.bind(var10)(var3);
                    SaveGenerator(address=231);
case 100:
                    return var3;
case 101:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0012_ip = 102; continue _fun0012 }
case 103: // try_start_0
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var12 = 9;
                    var5 = var5[var12];
                    var5 = var10.bind(var6)(var5);
                    var11 = var5.HTTP;
                    var10 = var11.patch;
                    var5 = {};
                    var16 = _closure1_slot11;
                    var15 = var16.CHANNEL;
                    var14 = _closure2_slot0;
                    var13 = var14.id;
                    var13 = var15.bind(var16)(var13);
                    var5['url'] = var13;
                    var13 = {};
                    var15 = var14.flags;
                    var14 = _closure1_slot15;
                    var14 = var14.PINNED;
                    var14 = ~var14;
                    var14 = var15 & var14;
                    var13['flags'] = var14;
                    var5['body'] = var13;
                    var13 = true;
                    var5['rejectWithError'] = var13;
                    var5 = var10.bind(var11)(var5);
                    SaveGenerator(address=348);
case 104:
                    return var5;
case 64:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0012_ip = 105; continue _fun0012 }
case 106: // try_start_1 // try_end0
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var10 = var11.bind(var6)(var10);
                    var12 = var10.HTTP;
                    var11 = var12.patch;
                    var10 = {};
                    var17 = _closure1_slot11;
                    var16 = var17.CHANNEL;
                    var15 = _closure2_slot1;
                    var14 = var15.id;
                    var14 = var16.bind(var17)(var14);
                    var10['url'] = var14;
                    var14 = {};
                    var16 = var15.flags;
                    var15 = _closure1_slot15;
                    var15 = var15.PINNED;
                    var15 = var16 | var15;
                    var14['flags'] = var15;
                    var10['body'] = var14;
                    var10['rejectWithError'] = var13;
                    var10 = var11.bind(var12)(var10);
                    SaveGenerator(address=457);
case 67:
                    return var10;
case 107:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0012_ip = 108; continue _fun0012 }
case 109: // try_end1
                    _fun0012_ip = 110; continue _fun0012;
case 108:
                    return var10;
case 69: // catch_target1
                    CatchBlockStart(arg_register=9);
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var9];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var10['type'] = var8;
                    var13 = _closure2_slot1;
                    var10['channel'] = var13;
                    var10 = var11.bind(var12)(var10);
case 110:
                    return var6;
case 105:
                    return var5;
case 111: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var10 = var4[var9];
                    var12 = var5.bind(var6)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var10['type'] = var8;
                    var13 = _closure2_slot0;
                    var10['channel'] = var13;
                    var10 = var11.bind(var12)(var10);
                    var4 = var4[var9];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var4['type'] = var8;
                    var7 = _closure2_slot1;
                    var4['channel'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = undefined;
                    return var4;
case 102:
                    return var3;
case 98:
                    return var2;
case 96:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['replacePin'] = var7;
    var7 = function openThreadCreationForMobile(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var9 = arg3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var3 = var7[var1];
            var1 = undefined;
            var10 = var6.bind(var1)(var3);
            var8 = var10.trackWithMetadata;
            var3 = _closure1_slot13;
            var6 = var3.THREAD_CREATION_STARTED;
            var3 = {};
            var3['location'] = var9;
            var11 = var5.id;
            var3['channel_id'] = var11;
            var11 = var5.guild_id;
            var3['guild_id'] = var11;
            var3 = var8.bind(var10)(var6, var3);
            var6 = _closure1_slot1;
            var3 = 14;
            var3 = var7[var3];
            var8 = var6.bind(var1)(var3);
            var7 = var8.changeThreadSettings;
            var6 = var5.id;
            var3 = {};
            var3['parentMessageId'] = var4;
            var10 = false;
            var3['isPrivate'] = var10;
            var3['location'] = var9;
            var3 = var7.bind(var8)(var6, var3);
            var3 = null;
            if(!(var3 == var4)) { _fun0013_ip = 112; continue _fun0013 }
case 113:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setActiveCommand;
            var2 = {'channelId': null, 'command': null, 'section': null};
            var5 = var5.id;
            var2['channelId'] = var5;
            var2 = var3.bind(var4)(var2);
case 112:
            return var1;
        }
    };
    var2['openThreadCreationForMobile'] = var7;
    var7 = function setNotificationSettings(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = this;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 99; continue _fun0014 }
case 16:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var2 = var4[var2];
                    var4 = undefined;
                    var8 = var3.bind(var4)(var2);
                    var7 = var8.trackThreadNotificationSettingsUpdated;
                    var2 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var7.bind(var8)(var2, var3);
                    var7 = _closure1_slot10;
                    var3 = var7.hasJoined;
                    var2 = var2.id;
                    var2 = var3.bind(var7)(var2);
                    if(var2) { _fun0014_ip = 114; continue _fun0014 }
case 115:
                    var8 = _closure2_slot2;
                    var7 = var8.joinThread;
                    var3 = _closure2_slot0;
                    var2 = 'Change Notification Settings';
                    var2 = var7.bind(var8)(var3, var2);
                    SaveGenerator(address=111);
case 116:
                    return var2;
case 117:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!var3) { _fun0014_ip = 114; continue _fun0014 }
case 118:
                    return var2;
case 114:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var8 = _closure1_slot11;
                    var7 = var8.THREAD_MEMBER_SETTINGS;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var5 = _closure2_slot1;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 99:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['setNotificationSettings'] = var7;
    var7 = function loadArchivedThreads(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var11 = var2.channelId;
            var _closure2_slot1 = var11;
            var6 = var2.sortOrder;
            var _closure2_slot2 = var6;
            var12 = var2.tagFilter;
            var _closure2_slot3 = var12;
            var8 = var2.tagSetting;
            var _closure2_slot4 = var8;
            var7 = var2.offset;
            var _closure2_slot5 = var7;
            var3 = _closure1_slot8;
            var2 = var3.isLoading;
            var18 = var3;
            var17 = var11;
            var16 = var6;
            var15 = var12;
            var14 = var8;
            var2 = var18[var2](var17, var16, var15, var14, var13);
            if(var2) { _fun0015_ip = 119; continue _fun0015 }
case 120:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var9 = undefined;
            var5 = var3.bind(var9)(var2);
            var3 = var5.dispatch;
            var2 = {};
            var13 = 'LOAD_ARCHIVED_THREADS';
            var2['type'] = var13;
            var2['channelId'] = var11;
            var2['sortOrder'] = var6;
            var2['tagFilter'] = var12;
            var2['tagSetting'] = var8;
            var2 = var3.bind(var5)(var2);
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var4[var2];
            var2 = var3.bind(var9)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {};
            var6 = _closure1_slot11;
            var5 = var6.THREAD_SEARCH;
            var5 = var5.bind(var6)(var11);
            var2['url'] = var5;
            var6 = {'archived': true, 'sort_by': 'last_message_time', 'sort_order': 'desc'};
            var5 = true;
            var10 = _closure1_slot9;
            var6['limit'] = var10;
            var11 = var12.size;
            var10 = 0;
            var10 = var11 > var10;
            if(!var10) { _fun0015_ip = 121; continue _fun0015 }
case 122:
            var10 = global;
            var11 = var10.Array;
            var10 = var11.from;
            var12 = var10.bind(var11)(var12);
            var11 = var12.join;
            var10 = ',';
            var9 = var11.bind(var12)(var10);
case 121:
            var6['tag'] = var9;
            var6['tag_setting'] = var8;
            var6['offset'] = var7;
            var2['query'] = var6;
            var6 = 2;
            var2['retries'] = var6;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var8 = var1.threads;
                    var11 = var1.members;
                    var4 = var1.has_more;
                    var12 = var1.first_messages;
                    var10 = var1.most_recent_messages;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0016_ip = 123; continue _fun0016 }
case 124:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var13 = 'LOAD_ARCHIVED_THREADS_SUCCESS';
                    var1['type'] = var13;
                    var14 = _closure2_slot0;
                    var1['guildId'] = var14;
                    var14 = _closure2_slot1;
                    var1['channelId'] = var14;
                    var14 = _closure2_slot5;
                    var1['offset'] = var14;
                    var14 = _closure2_slot2;
                    var1['sortOrder'] = var14;
                    var14 = _closure2_slot3;
                    var1['tagFilter'] = var14;
                    var13 = _closure2_slot4;
                    var1['tagSetting'] = var13;
                    var1['threads'] = var8;
                    var1['firstMessages'] = var12;
                    var1['mostRecentMessages'] = var10;
                    if(!(var7 == var11)) { _fun0016_ip = 26; continue _fun0016 }
case 125:
                    var11 = new Array(0);
case 26:
                    var10 = var11.map;
                    var7 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var10.bind(var11)(var7);
                    var1['members'] = var7;
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.owner;
                        return var1;
                    };
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.filter;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 18;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.isNotNullish;
                    var5 = var6.bind(var7)(var5);
                    var1['owners'] = var5;
                    var1['hasMore'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0016_ip = 126; continue _fun0016;
case 123:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'LOAD_ARCHIVED_THREADS_FAIL';
                    var1['type'] = var4;
                    var5 = _closure2_slot1;
                    var1['channelId'] = var5;
                    var5 = _closure2_slot2;
                    var1['sortOrder'] = var5;
                    var5 = _closure2_slot3;
                    var1['tagFilter'] = var5;
                    var4 = _closure2_slot4;
                    var1['tagSetting'] = var4;
                    var1 = var2.bind(var3)(var1);
case 126:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'LOAD_ARCHIVED_THREADS_FAIL';
                var2['type'] = var5;
                var6 = _closure2_slot1;
                var2['channelId'] = var6;
                var6 = _closure2_slot2;
                var2['sortOrder'] = var6;
                var6 = _closure2_slot3;
                var2['tagFilter'] = var6;
                var5 = _closure2_slot4;
                var2['tagSetting'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
case 119:
            var1 = undefined;
            return var1;
        }
    };
    var2['loadArchivedThreads'] = var7;
    var4 = function searchThreads(arg1, arg2, arg3, arg4) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arguments[4];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var2 = arg4;
            var _closure2_slot3 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0017_ip = 127; continue _fun0017 }
case 128:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 19;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.ThreadSearchTagSetting;
            var3 = var4.MATCH_SOME;
case 127:
            var _closure2_slot4 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 129; continue _fun0018 }
case 16:
                        var3 = _closure2_slot3;
                        var2 = null;
                        var2 = var2 != var3;
                        var6 = undefined;
                        var8 = undefined;
                        if(!var2) { _fun0018_ip = 3; continue _fun0018 }
case 130:
                        var2 = _closure2_slot3;
                        var3 = var2.size;
                        var2 = 0;
                        var2 = var3 > var2;
                        var8 = undefined;
                        if(!var2) { _fun0018_ip = 3; continue _fun0018 }
case 131:
                        var2 = global;
                        var4 = var2.Array;
                        var3 = var4.from;
                        var2 = _closure2_slot3;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.join;
                        var2 = ',';
                        var8 = var3.bind(var4)(var2);
case 3:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var2 = var4.bind(var6)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.get;
                        var2 = {};
                        var11 = _closure1_slot11;
                        var10 = var11.THREAD_SEARCH;
                        var7 = _closure2_slot1;
                        var7 = var10.bind(var11)(var7);
                        var2['url'] = var7;
                        var7 = {};
                        var10 = _closure2_slot2;
                        var7['name'] = var10;
                        var7['tag'] = var8;
                        var8 = _closure2_slot4;
                        var7['tag_setting'] = var8;
                        var2['query'] = var7;
                        var7 = false;
                        var2['rejectWithError'] = var7;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=187);
case 132:
                        return var2;
case 62:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0018_ip = 133; continue _fun0018 }
case 112:
                        var4 = var2.body;
                        var5 = var4.threads;
                        var10 = var4.members;
                        var8 = var4.first_messages;
                        var7 = var4.most_recent_messages;
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var3 = 10;
                        var3 = var11[var3];
                        var6 = var4.bind(var6)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var11 = 'LOAD_THREADS_SUCCESS';
                        var3['type'] = var11;
                        var3['threads'] = var5;
                        var3['members'] = var10;
                        var9 = _closure2_slot0;
                        var3['guildId'] = var9;
                        var3['firstMessages'] = var8;
                        var3['mostRecentMessages'] = var7;
                        var3 = var4.bind(var6)(var3);
                        var4 = var5.map;
                        var3 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        return var3;
case 133:
                        return var2;
case 129:
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
    var2['searchThreads'] = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();