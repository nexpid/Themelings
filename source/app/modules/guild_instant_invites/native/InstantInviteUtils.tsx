// app/modules/guild_instant_invites/native/InstantInviteUtils.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InstantInviteSources;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_instant_invites/native/InstantInviteUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.invite;
            var _closure2_slot0 = var1;
            var2 = var2.onInviteRevoked;
            var _closure2_slot1 = var2;
            var6 = undefined;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var5 = _closure1_slot4;
            var2 = var5.getChannel;
            var1 = var1.channel;
            var1 = var1.id;
            var5 = var2.bind(var5)(var1);
            var1 = null;
            var2 = var1 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 83; continue _fun0001 }
 73:
            var2 = var5.isPrivate;
            var1 = var2.bind(var5)();
 83:
            _closure2_slot3 = var1;
            var2 = {};
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 4;
            var1 = var8[var9];
            var1 = var12.bind(var6)(var1);
            var7 = var1.intl;
            var5 = var7.string;
            var1 = var8[var9];
            var1 = var12.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.RDE0SU;
            var1 = var5.bind(var7)(var1);
            var2['label'] = var1;
            var7 = _closure1_slot1;
            var5 = 5;
            var1 = var8[var5];
            var1 = var7.bind(var6)(var1);
            var1 = var1.share;
            var2['iconSource'] = var1;
            var1 = function action() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var13 = undefined;
                        var4 = var2.bind(var13)(var1);
                        var3 = var4.showShareActionSheet;
                        var2 = {};
                        var7 = _closure2_slot3;
                        var6 = undefined;
                        if(var7) { _fun0002_ip = 79; continue _fun0002 }
 45:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 8;
                        var7 = var9[var7];
                        var8 = var8.bind(var13)(var7);
                        var7 = _closure2_slot0;
                        var7 = var7.code;
                        var6 = var8.bind(var13)(var7);
 79:
                        var2['url'] = var6;
                        var7 = _closure2_slot3;
                        var6 = undefined;
                        if(!var7) { _fun0002_ip = 239; continue _fun0002 }
 95:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 4;
                        var9 = var11[var7];
                        var9 = var8.bind(var13)(var9);
                        var10 = var9.intl;
                        var9 = var10.formatToPlainString;
                        var7 = var11[var7];
                        var7 = var8.bind(var13)(var7);
                        var7 = var7.t;
                        var8 = var7.+zWvOT;
                        var7 = {};
                        var12 = _closure1_slot5;
                        var11 = var12.getCurrentUser;
                        var14 = var11.bind(var12)();
                        var11 = null;
                        var15 = var11 == var14;
                        var12 = undefined;
                        if(var15) { _fun0002_ip = 176; continue _fun0002 }
 171:
                        var12 = var14.username;
 176:
                        var14 = var11 != var12;
                        var11 = '';
                        if(!var14) { _fun0002_ip = 190; continue _fun0002 }
 187:
                        var11 = var12;
 190:
                        var7['username'] = var11;
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var11 = 8;
                        var11 = var14[var11];
                        var12 = var12.bind(var13)(var11);
                        var11 = _closure2_slot0;
                        var11 = var11.code;
                        var11 = var12.bind(var13)(var11);
                        var7['link'] = var11;
                        var6 = var9.bind(var10)(var8, var7);
 239:
                        var2['message'] = var6;
                        var6 = _closure2_slot3;
                        var1 = 'Guild Instant Invite';
                        if(!var6) { _fun0002_ip = 266; continue _fun0002 }
 256:
                        var5 = _closure1_slot6;
                        var1 = var5.GROUP_DM;
 266:
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['action'] = var1;
            var1 = new Array(3);
            var1[0] = var2;
            var2 = {};
            var10 = var8[var9];
            var10 = var12.bind(var6)(var10);
            var13 = var10.intl;
            var11 = var13.string;
            var10 = var8[var9];
            var10 = var12.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.OpuAlJ;
            var10 = var11.bind(var13)(var10);
            var2['label'] = var10;
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var10 = var10.copy;
            var2['iconSource'] = var10;
            var10 = function action() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    if(var3) { _fun0003_ip = 100; continue _fun0003 }
 21:
                    var3 = 9;
                    var3 = var4[var3];
                    var6 = undefined;
                    var8 = var5.bind(var6)(var3);
                    var7 = var8.copy;
                    var9 = _closure1_slot1;
                    var3 = 8;
                    var3 = var4[var3];
                    var9 = var9.bind(var6)(var3);
                    var3 = _closure2_slot0;
                    var3 = var3.code;
                    var3 = var9.bind(var6)(var3);
                    var3 = var7.bind(var8)(var3);
                    var3 = 10;
                    var3 = var4[var3];
                    var6 = var5.bind(var6)(var3);
                    var3 = var6.presentCopiedToClipboard;
                    var3 = var3.bind(var6)();
                    _fun0003_ip = 153; continue _fun0003;
 100:
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.handleCopy;
                    var2 = _closure2_slot0;
                    var13 = var2.code;
                    var12 = var2.channel;
                    var1 = _closure1_slot6;
                    var11 = var1.GROUP_DM;
                    var10 = false;
                    var14 = var6;
                    var1 = var14[var5](var13, var12, var11, var10, var9);
 153:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['action'] = var10;
            var1[1] = var2;
            var2 = {};
            var10 = var8[var9];
            var10 = var12.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var8[var9];
            var9 = var12.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.v6Yaz8;
            var9 = var10.bind(var11)(var9);
            var2['label'] = var9;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.revoke;
            var2['iconSource'] = var5;
            var5 = 'destructive';
            var2['variant'] = var5;
            var5 = _closure1_slot3;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 201; continue _fun0004 }
 10: // try_start_0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var5 = undefined;
                        var6 = var3.bind(var5)(var2);
                        var4 = var6.revokeInvite;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=57);
 55:
                        return var2;
 57:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 88; continue _fun0004 }
 63:
                        var6 = _closure2_slot1;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0004_ip = 86; continue _fun0004 }
 73:
                        var4 = _closure2_slot1;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var5)(var3);
 86: // try_end0
                        _fun0004_ip = 196; continue _fun0004;
 88:
                        return var2;
 91: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 13;
                        var2 = var10[var2];
                        var9 = undefined;
                        var4 = var3.bind(var9)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var6 = 'ERROR_ANOTHER_TRY';
                        var2['key'] = var6;
                        var8 = _closure1_slot0;
                        var5 = 4;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.CKsXk5;
                        var5 = var6.bind(var7)(var5);
                        var2['content'] = var5;
                        var2 = var3.bind(var4)(var2);
 196:
                        var2 = undefined;
                        return var2;
 201:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            _closure2_slot2 = var4;
            var3 = function() {
                var1 = undefined;
                var4 = _closure2_slot2;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2['action'] = var3;
            var1[2] = var2;
            return var1;
        }
    };
    var3['useInviteActions'] = var2;
    return var1;
})();