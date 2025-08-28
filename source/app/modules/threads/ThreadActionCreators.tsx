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
 0:
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
                if(!var3) { _fun0001_ip = 102; continue _fun0001 }
 86:
                var7 = _closure2_slot0;
                var8 = var7.parent_id;
                var7 = null;
                var3 = var7 != var8;
 102:
                if(!var3) { _fun0001_ip = 156; continue _fun0001 }
 105:
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
 156:
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
 0:
            var4 = {};
            var1 = true;
            var4['archived'] = var1;
            var2 = arg2;
            if(!var2) { _fun0002_ip = 21; continue _fun0002 }
 15:
            var4['locked'] = var1;
 21:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 98; continue _fun0003 }
 7:
                    var3 = _closure2_slot0;
                    var2 = var3.isArchivedThread;
                    var3 = var2.bind(var3)();
                    if(!var3) { _fun0003_ip = 59; continue _fun0003 }
 27:
                    var7 = _closure2_slot1;
                    var6 = var7.unarchiveThread;
                    var5 = _closure2_slot0;
                    var2 = false;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=53);
 51:
                    return var2;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 95; continue _fun0003 }
 59:
                    var6 = _closure1_slot16;
                    var5 = _closure2_slot0;
                    var4 = {};
                    var7 = true;
                    var4['locked'] = var7;
                    var4['archived'] = var3;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5, var4);
                    return var3;
 95:
                    return var2;
 98:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 98; continue _fun0004 }
 7:
                    var3 = _closure2_slot0;
                    var2 = var3.isArchivedThread;
                    var3 = var2.bind(var3)();
                    if(!var3) { _fun0004_ip = 59; continue _fun0004 }
 27:
                    var7 = _closure2_slot1;
                    var6 = var7.unarchiveThread;
                    var5 = _closure2_slot0;
                    var2 = true;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=53);
 51:
                    return var2;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 95; continue _fun0004 }
 59:
                    var6 = _closure1_slot16;
                    var5 = _closure2_slot0;
                    var4 = {};
                    var7 = false;
                    var4['locked'] = var7;
                    var4['archived'] = var3;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5, var4);
                    return var3;
 95:
                    return var2;
 98:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 849; continue _fun0005 }
 10:
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
                    if(!var8) { _fun0005_ip = 65; continue _fun0005 }
 56:
                    var8 = var5;
                    var8['locked'] = var9;
 65: // try_start_0
                    var8 = _closure1_slot16;
                    var7 = _closure2_slot0;
                    var5 = var8.bind(var11)(var7, var5);
                    SaveGenerator(address=86);
 84:
                    return var5;
 86:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 95; continue _fun0005 }
 92: // try_end0
                    return var5;
 95:
                    return var5;
 98: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var2 = var5;
                    var7 = var5.body;
                    var4 = var7;
                    var5 = null;
                    var7 = var5 == var7;
                    var8 = undefined;
                    if(var7) { _fun0005_ip = 127; continue _fun0005 }
 122:
                    var8 = var4.code;
 127:
                    var4 = _closure1_slot12;
                    var4 = var4.TOO_MANY_THREADS;
                    if(!(var8 !== var4)) { _fun0005_ip = 664; continue _fun0005 }
 147:
                    var4 = var2;
                    var4 = var4.body;
                    var3 = var4;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 172; continue _fun0005 }
 167:
                    var4 = var3.code;
 172:
                    var3 = _closure1_slot12;
                    var3 = var3.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(var4 !== var3)) { _fun0005_ip = 523; continue _fun0005 }
 189:
                    var3 = var2;
                    var4 = var3.status;
                    var3 = 429;
                    if(!(var3 !== var4)) { _fun0005_ip = 351; continue _fun0005 }
 210:
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
                    _fun0005_ip = 847; continue _fun0005;
 351:
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
                    if(var8) { _fun0005_ip = 442; continue _fun0005 }
 429:
                    var8 = var9.PeIE/v;
                    var8 = var10.bind(var12)(var8);
                    _fun0005_ip = 453; continue _fun0005;
 442:
                    var9 = var9.kwyWNT;
                    var8 = var10.bind(var12)(var9);
 453:
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
                    _fun0005_ip = 847; continue _fun0005;
 523:
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
                    _fun0005_ip = 847; continue _fun0005;
 664:
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
                    if(var8) { _fun0005_ip = 755; continue _fun0005 }
 742:
                    var8 = var9.PeIE/v;
                    var8 = var10.bind(var13)(var8);
                    _fun0005_ip = 766; continue _fun0005;
 755:
                    var9 = var9.kwyWNT;
                    var8 = var10.bind(var13)(var9);
 766:
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
                    if(var6) { _fun0005_ip = 827; continue _fun0005 }
 814:
                    var6 = var7.P0wT5e;
                    var6 = var8.bind(var9)(var6);
                    _fun0005_ip = 838; continue _fun0005;
 827:
                    var7 = var7.KGaiEB;
                    var6 = var8.bind(var9)(var7);
 838:
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
 847:
                    throw var2;
 849:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 154; continue _fun0006 }
 10:
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
                    if(!var3) { _fun0006_ip = 79; continue _fun0006 }
 69:
                    var6 = var5.isArchivedThread;
                    var3 = var6.bind(var5)();
 79:
                    if(!var3) { _fun0006_ip = 115; continue _fun0006 }
 82:
                    if(var4) { _fun0006_ip = 112; continue _fun0006 }
 85:
                    var6 = var5.threadMetadata;
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0006_ip = 106; continue _fun0006 }
 100:
                    var7 = var6.locked;
 106:
                    var6 = true;
                    var4 = var6 !== var7;
 112:
                    var3 = var4;
 115:
                    if(!var3) { _fun0006_ip = 146; continue _fun0006 }
 118:
                    var4 = _closure2_slot1;
                    var3 = var4.unarchiveThread;
                    var2 = false;
                    var2 = var3.bind(var4)(var5, var2);
                    SaveGenerator(address=140);
 138:
                    return var2;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 151; continue _fun0006 }
 146:
                    var3 = undefined;
                    return var3;
 151:
                    return var2;
 154:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 585; continue _fun0007 }
 10:
                    var2 = undefined;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = _closure2_slot0;
                    var5 = var6.isForumPost;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0007_ip = 55; continue _fun0007 }
 36:
                    var7 = _closure1_slot17;
                    var6 = _closure2_slot0;
                    var5 = true;
                    var5 = var7.bind(var2)(var6, var5);
 55: // try_start_0
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
 147:
                    return var5;
 149:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 158; continue _fun0007 }
 155: // try_end0
                    return var5;
 158:
                    return var5;
 161: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var6 = var5.body;
                    var4 = var6;
                    var5 = null;
                    var5 = var5 == var6;
                    var6 = undefined;
                    if(var5) { _fun0007_ip = 187; continue _fun0007 }
 182:
                    var6 = var4.code;
 187:
                    var5 = _closure1_slot12;
                    var5 = var5.TOO_MANY_THREAD_MEMBERS;
                    if(!(var6 !== var5)) { _fun0007_ip = 348; continue _fun0007 }
 207:
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
                    _fun0007_ip = 549; continue _fun0007;
 348:
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
                    if(var9) { _fun0007_ip = 455; continue _fun0007 }
 440:
                    var9 = var10.gtdVcn;
                    var9 = var11.bind(var12)(var9);
                    _fun0007_ip = 468; continue _fun0007;
 455:
                    var10 = var10.EMYJFh;
                    var9 = var11.bind(var12)(var10);
 468:
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
                    if(var8) { _fun0007_ip = 529; continue _fun0007 }
 516:
                    var8 = var9.abMwgo;
                    var8 = var10.bind(var11)(var8);
                    _fun0007_ip = 540; continue _fun0007;
 529:
                    var9 = var9.QYyad3;
                    var8 = var10.bind(var11)(var9);
 540:
                    var5['body'] = var8;
                    var5 = var6.bind(var7)(var5);
 549:
                    var6 = _closure2_slot0;
                    var5 = var6.isForumPost;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0007_ip = 582; continue _fun0007 }
 566:
                    var5 = _closure1_slot17;
                    var4 = _closure2_slot0;
                    var3 = false;
                    var3 = var5.bind(var2)(var4, var3);
 582:
                    return var2;
 585:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 524; continue _fun0008 }
 10:
                    var2 = undefined;
                    var3 = undefined;
                    var6 = undefined;
 16: // try_start_0
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
 116:
                    return var4;
 118:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 127; continue _fun0008 }
 124: // try_end0
                    return var4;
 127:
                    return var4;
 130: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = var4.body;
                    var3 = var5;
                    var4 = null;
                    var5 = var4 == var5;
                    var4 = undefined;
                    if(var5) { _fun0008_ip = 156; continue _fun0008 }
 151:
                    var4 = var3.code;
 156:
                    var3 = _closure1_slot12;
                    var3 = var3.TOO_MANY_THREAD_MEMBERS;
                    if(!(var4 !== var3)) { _fun0008_ip = 317; continue _fun0008 }
 176:
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
                    _fun0008_ip = 521; continue _fun0008;
 317:
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
                    if(var8) { _fun0008_ip = 427; continue _fun0008 }
 412:
                    var8 = var9.YErysL;
                    var8 = var10.bind(var12)(var8);
                    _fun0008_ip = 440; continue _fun0008;
 427:
                    var9 = var9.0yAqqK;
                    var8 = var10.bind(var12)(var9);
 440:
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
                    if(var6) { _fun0008_ip = 501; continue _fun0008 }
 488:
                    var6 = var7.abMwgo;
                    var6 = var8.bind(var9)(var6);
                    _fun0008_ip = 512; continue _fun0008;
 501:
                    var7 = var7.QYyad3;
                    var6 = var8.bind(var9)(var7);
 512:
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
 521:
                    return var2;
 524:
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
 0:
            var4 = arg1;
            var1 = var4.isForumPost;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0009_ip = 33; continue _fun0009 }
 16:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var4, var1);
 33:
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
 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0010_ip = 27; continue _fun0010 }
 25:
            var3 = false;
 27:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 253; continue _fun0011 }
 10:
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
                        if(!var4) { _fun0011_ip = 116; continue _fun0011 }
 105:
                        var8 = var10;
                        var4 = false;
                        var8['archived'] = var4;
 116: // try_start_0
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
 194:
                        return var4;
 196:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(var8) { _fun0011_ip = 204; continue _fun0011 }
 202: // try_end0
                        _fun0011_ip = 250; continue _fun0011;
 204:
                        return var4;
 207: // catch_target0
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
 250:
                        return var2;
 253:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 604; continue _fun0012 }
 10:
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
 192:
                    return var2;
 194:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 601; continue _fun0012 }
 203:
                    var10 = _closure2_slot2;
                    var5 = var10.unarchiveThreadIfNecessary;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var5.bind(var10)(var3);
                    SaveGenerator(address=231);
 229:
                    return var3;
 231:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0012_ip = 598; continue _fun0012 }
 240: // try_start_0
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
 346:
                    return var5;
 348:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0012_ip = 514; continue _fun0012 }
 357: // try_start_1 // try_end0
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
 455:
                    return var10;
 457:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0012_ip = 465; continue _fun0012 }
 463: // try_end1
                    _fun0012_ip = 511; continue _fun0012;
 465:
                    return var10;
 468: // catch_target1
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
 511:
                    return var6;
 514:
                    return var5;
 517: // catch_target0
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
 598:
                    return var3;
 601:
                    return var2;
 604:
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
 0:
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
            if(!(var3 == var4)) { _fun0013_ip = 193; continue _fun0013 }
 137:
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
 193:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 203; continue _fun0014 }
 10:
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
                    if(var2) { _fun0014_ip = 120; continue _fun0014 }
 81:
                    var8 = _closure2_slot2;
                    var7 = var8.joinThread;
                    var3 = _closure2_slot0;
                    var2 = 'Change Notification Settings';
                    var2 = var7.bind(var8)(var3, var2);
                    SaveGenerator(address=111);
 109:
                    return var2;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!var3) { _fun0014_ip = 120; continue _fun0014 }
 117:
                    return var2;
 120:
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
 203:
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
 0:
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
            if(var2) { _fun0015_ip = 338; continue _fun0015 }
 101:
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
            if(!var10) { _fun0015_ip = 281; continue _fun0015 }
 249:
            var10 = global;
            var11 = var10.Array;
            var10 = var11.from;
            var12 = var10.bind(var11)(var12);
            var11 = var12.join;
            var10 = ',';
            var9 = var11.bind(var12)(var10);
 281:
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
 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var8 = var1.threads;
                    var11 = var1.members;
                    var4 = var1.has_more;
                    var12 = var1.first_messages;
                    var10 = var1.most_recent_messages;
                    var7 = null;
                    if(!(var7 != var8)) { _fun0016_ip = 255; continue _fun0016 }
 49:
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
                    if(!(var7 == var11)) { _fun0016_ip = 167; continue _fun0016 }
 163:
                    var11 = new Array(0);
 167:
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
                    _fun0016_ip = 340; continue _fun0016;
 255:
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
 340:
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
 338:
            var1 = undefined;
            return var1;
        }
    };
    var2['loadArchivedThreads'] = var7;
    var4 = function searchThreads(arg1, arg2, arg3, arg4) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
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
            if(!(var3 === var2)) { _fun0017_ip = 74; continue _fun0017 }
 39:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 19;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.ThreadSearchTagSetting;
            var3 = var4.MATCH_SOME;
 74:
            var _closure2_slot4 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 313; continue _fun0018 }
 10:
                        var3 = _closure2_slot3;
                        var2 = null;
                        var2 = var2 != var3;
                        var6 = undefined;
                        var8 = undefined;
                        if(!var2) { _fun0018_ip = 86; continue _fun0018 }
 30:
                        var2 = _closure2_slot3;
                        var3 = var2.size;
                        var2 = 0;
                        var2 = var3 > var2;
                        var8 = undefined;
                        if(!var2) { _fun0018_ip = 86; continue _fun0018 }
 50:
                        var2 = global;
                        var4 = var2.Array;
                        var3 = var4.from;
                        var2 = _closure2_slot3;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.join;
                        var2 = ',';
                        var8 = var3.bind(var4)(var2);
 86:
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
 185:
                        return var2;
 187:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0018_ip = 310; continue _fun0018 }
 193:
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
 310:
                        return var2;
 313:
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