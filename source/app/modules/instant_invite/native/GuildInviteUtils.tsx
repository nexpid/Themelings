// app/modules/instant_invite/native/GuildInviteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _sendGuildInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 571; continue _fun0001 }
 18:
                    var5 = var3;
                    var _closure4_slot0 = var3;
                    var4 = var2;
                    var _closure4_slot1 = var2;
                    var10 = arg3;
                    var2 = undefined;
                    var7 = undefined;
 39: // try_start_0
                    var9 = _closure1_slot12;
                    var8 = var5;
                    var13 = var4;
                    var3 = _closure1_slot13;
                    var3 = var3.SENDING;
                    var3 = var9.bind(var2)(var8, var13, var3);
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var3 = 18;
                    var3 = var16[var3];
                    var3 = var15.bind(var2)(var3);
                    var9 = var3.AccessibilityAnnouncer;
                    var8 = var9.announce;
                    var3 = 19;
                    var12 = var16[var3];
                    var12 = var15.bind(var2)(var12);
                    var14 = var12.intl;
                    var12 = var14.string;
                    var3 = var16[var3];
                    var3 = var15.bind(var2)(var3);
                    var3 = var3.t;
                    var3 = var3.kC3ZRE;
                    var3 = var12.bind(var14)(var3);
                    var3 = var8.bind(var9)(var3);
                    var12 = _closure1_slot5;
                    var9 = var12.getDefaultChannel;
                    var3 = _closure1_slot14;
                    var8 = var3.CREATE_INSTANT_INVITE;
                    var3 = true;
                    var9 = var9.bind(var12)(var13, var3, var8);
                    var7 = var9;
                    var8 = null;
                    if(!(var8 != var9)) { _fun0001_ip = 438; continue _fun0001 }
 196:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var8 = 20;
                    var8 = var15[var8];
                    var12 = var14.bind(var2)(var8);
                    var9 = var12.createInvite;
                    var8 = var7.id;
                    var7 = {};
                    var13 = 21;
                    var16 = var15[var13];
                    var16 = var14.bind(var2)(var16);
                    var16 = var16.INVITE_OPTIONS_ONCE;
                    var16 = var16.value;
                    var7['max_uses'] = var16;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.INVITE_OPTIONS_7_DAYS;
                    var13 = var13.value;
                    var7['max_age'] = var13;
                    var7['unique'] = var3;
                    var3 = var10;
                    var3 = var9.bind(var12)(var8, var7, var3);
                    SaveGenerator(address=301);
 299:
                    return var3;
 301:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 435; continue _fun0001 }
 310:
                    var8 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 22;
                    var7 = var14[var12];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.enqueue;
                    var7 = {};
                    var13 = var3.code;
                    var7['inviteKey'] = var13;
                    var13 = _closure1_slot0;
                    var12 = var14[var12];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.InvitePropertiesType;
                    var12 = var12.USER;
                    var7['type'] = var12;
                    var13 = _closure1_slot11;
                    var12 = var13.getUser;
                    var11 = var5;
                    var11 = var12.bind(var13)(var11);
                    var7['user'] = var11;
                    var11 = var10;
                    var7['location'] = var11;
                    var10 = {};
                    var10['source'] = var11;
                    var7['inviteAnalyticsMetadata'] = var10;
                    var6 = function() {
                        var6 = _closure1_slot12;
                        var5 = _closure4_slot0;
                        var4 = _closure4_slot1;
                        var1 = _closure1_slot13;
                        var3 = var1.SENT;
                        var1 = undefined;
                        var3 = var6.bind(var1)(var5, var4, var3);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 18;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 19;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.PuLLzM;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6 = var8.bind(var9)(var7, var6);
 430: // try_end0
                    _fun0001_ip = 568; continue _fun0001;
 435:
                    return var3;
 438: // try_start_1
                    var3 = global;
                    var3 = var3.Error;
                    var3 = var3.bind(var2)();
                    throw var3;
 452: // try_end1 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    var7 = _closure1_slot12;
                    var6 = var5;
                    var5 = var4;
                    var4 = _closure1_slot13;
                    var4 = var4.ERROR;
                    var4 = var7.bind(var2)(var6, var5, var4);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 18;
                    var3 = var9[var3];
                    var3 = var8.bind(var2)(var3);
                    var5 = var3.AccessibilityAnnouncer;
                    var4 = var5.announce;
                    var3 = 19;
                    var6 = var9[var3];
                    var6 = var8.bind(var2)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var2)(var3);
                    var3 = var3.t;
                    var3 = var3.fEptJC;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
 568:
                    return var2;
 571:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.setSendState;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteSendStates;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot14 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot15 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/GuildInviteUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var4 = var2[var1];
        var1 = undefined;
        var10 = var5.bind(var1)(var4);
        var9 = var10.track;
        var4 = _closure1_slot15;
        var6 = var4.OPEN_POPOUT;
        var4 = {};
        var11 = 'Invite to Guilds';
        var4['type'] = var11;
        var4['source'] = var7;
        var4 = var9.bind(var10)(var6, var4);
        var4 = 13;
        var4 = var2[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = _closure1_slot0;
        var3 = 15;
        var3 = var2[var3];
        var4 = var4.bind(var1)(var3);
        var3 = 14;
        var3 = var2[var3];
        var2 = var2.paths;
        var4 = var4.bind(var1)(var3, var2);
        var2 = global;
        var2 = var2.HermesInternal;
        var3 = var2.concat;
        var2 = 'invite-to-guilds-';
        var3 = var3.bind(var2)(var8);
        var2 = {};
        var2['recipientId'] = var8;
        var2['source'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['showGuildInviteActionSheet'] = var4;
    var4 = function(arg1, arg2) {
        var5 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 17;
        var4 = var4[var3];
        var3 = undefined;
        var8 = var7.bind(var3)(var4);
        var7 = var8.useStateFromStoresArray;
        var3 = _closure1_slot10;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = _closure1_slot8;
        var4[1] = var3;
        var3 = function() {
            var3 = _closure1_slot10;
            var1 = var3.getFlattenedGuildIds;
            var4 = var1.bind(var3)();
            var1 = new Array(0);
            var _closure3_slot0 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 43; continue _fun0002 }
 26:
                    var2 = _closure3_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var7 = var7.bind(var8)(var4, var3);
        var _closure2_slot2 = var7;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 89; continue _fun0003 }
 15:
                var3 = _closure1_slot6;
                var2 = var3.getMemberCounts;
                var2 = var2.bind(var3)();
                var _closure3_slot0 = var2;
                var3 = new Array(0);
                var _closure3_slot1 = var3;
                var2 = new Array(0);
                var _closure3_slot2 = var2;
                var5 = _closure2_slot2;
                var4 = var5.forEach;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = arg1;
                        var3 = _closure1_slot9;
                        var2 = var3.can;
                        var1 = _closure1_slot14;
                        var1 = var1.CREATE_INSTANT_INVITE;
                        var1 = var2.bind(var3)(var1, var4);
                        if(var1) { _fun0004_ip = 47; continue _fun0004 }
 35:
                        var3 = var4.vanityURLCode;
                        var2 = null;
                        var1 = var2 != var3;
 47:
                        if(!var1) { _fun0004_ip = 262; continue _fun0004 }
 53:
                        var10 = var4.name;
                        var7 = _closure2_slot1;
                        var2 = null;
                        var3 = var2 == var7;
                        if(var3) { _fun0004_ip = 122; continue _fun0004 }
 74:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 16;
                        var6 = var9[var6];
                        var9 = undefined;
                        var8 = var8.bind(var9)(var6);
                        var6 = var7.toLowerCase;
                        var7 = var6.bind(var7)();
                        var6 = var10.toLowerCase;
                        var6 = var6.bind(var10)();
                        var3 = var8.bind(var9)(var7, var6);
 122:
                        if(!var3) { _fun0004_ip = 262; continue _fun0004 }
 128:
                        var7 = _closure2_slot0;
                        var6 = _closure1_slot7;
                        var3 = var6.isMember;
                        var1 = var4.id;
                        var1 = var3.bind(var6)(var1, var7);
                        if(var1) { _fun0004_ip = 262; continue _fun0004 }
 156:
                        var3 = {};
                        var3['guild'] = var4;
                        var7 = _closure3_slot0;
                        var6 = var4.id;
                        var7 = var7[var6];
                        var8 = var2 != var7;
                        var6 = 0;
                        if(!var8) { _fun0004_ip = 190; continue _fun0004 }
 187:
                        var6 = var7;
 190:
                        var3['memberCount'] = var6;
                        var4 = var4.ownerId;
                        var6 = _closure1_slot11;
                        var5 = var6.getCurrentUser;
                        var5 = var5.bind(var6)();
                        var6 = var2 == var5;
                        var2 = undefined;
                        if(var6) { _fun0004_ip = 228; continue _fun0004 }
 223:
                        var2 = var5.id;
 228:
                        if(!(var4 !== var2)) { _fun0004_ip = 248; continue _fun0004 }
 232:
                        var4 = _closure3_slot2;
                        var2 = var4.push;
                        var2 = var2.bind(var4)(var3);
                        _fun0004_ip = 262; continue _fun0004;
 248:
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
 262:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
 89:
                var1 = new Array(2);
                var2 = new Array(0);
                var1[0] = var2;
                var2 = new Array(0);
                var1[1] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useServerInviteRows'] = var4;
    var2 = function sendGuildInvite() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendGuildInvite'] = var2;
    return var1;
})();