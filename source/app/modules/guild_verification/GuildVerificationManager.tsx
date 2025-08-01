// app/modules/guild_verification/GuildVerificationManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function handleInviteData(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.invite;
            var3 = var2.guild;
            var2 = var1.invite;
            var2 = var2.flags;
            var7 = null;
            var4 = var7 != var2;
            var11 = 0;
            if(!var4) { _fun0002_ip = 39; continue _fun0002 }
 36:
            var11 = var2;
 39:
            if(!(var7 != var3)) { _fun0002_ip = 86; continue _fun0002 }
 43:
            if(!(var7 != var3)) { _fun0002_ip = 86; continue _fun0002 }
 47:
            var6 = var3.features;
            if(!(var7 != var6)) { _fun0002_ip = 86; continue _fun0002 }
 57:
            var5 = var6.includes;
            var4 = _closure1_slot8;
            var4 = var4.HUB;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0002_ip = 285; continue _fun0002 }
 86:
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 7;
            var8 = var5[var9];
            var6 = undefined;
            var10 = var12.bind(var6)(var8);
            var8 = var10.hasFlag;
            var13 = 8;
            var5 = var5[var13];
            var5 = var12.bind(var6)(var5);
            var5 = var5.GuildInviteFlags;
            var5 = var5.IS_GUEST_INVITE;
            var5 = var8.bind(var10)(var11, var5);
            if(var5) { _fun0002_ip = 200; continue _fun0002 }
 150:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var9];
            var10 = var12.bind(var6)(var9);
            var9 = var10.hasFlag;
            var8 = var8[var13];
            var8 = var12.bind(var6)(var8);
            var8 = var8.GuildInviteFlags;
            var8 = var8.IS_APPLICATION_BYPASS;
            var5 = var9.bind(var10)(var11, var8);
 200:
            var5 = !var5;
            if(!var5) { _fun0002_ip = 210; continue _fun0002 }
 206:
            var5 = var7 != var3;
 210:
            if(!var5) { _fun0002_ip = 244; continue _fun0002 }
 213:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 9;
            var7 = var9[var7];
            var8 = var8.bind(var6)(var7);
            var7 = var8.inviteGuildHasPendingMemberDisabledVerification;
            var5 = var7.bind(var8)(var3);
 244:
            if(!var5) { _fun0002_ip = 324; continue _fun0002 }
 247:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.openVerificationModalOrTransitionToApplication;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            _fun0002_ip = 324; continue _fun0002;
 285:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.onOpenHubInvite;
            var1 = var1.invite;
            var1 = var2.bind(var3)(var1);
 324:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function GuildVerificationManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 84; continue _fun0003 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 118; continue _fun0003;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var3 = _closure1_slot10;
                var2['INVITE_ACCEPT_SUCCESS'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_verification/GuildVerificationManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();