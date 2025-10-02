// app/modules/guild_automod/AutomodErrorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot11;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var5 = function getAutomodErrorMessageFromErrorResponse(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = var2.code;
            var2 = var2.message;
            var6 = _closure1_slot9;
            var4 = var6.has;
            var4 = var4.bind(var6)(var5);
            if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            return var1;
case 13:
            if(!(var1 == var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            if(!(var1 != var7)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var6 = _closure1_slot7;
            var4 = var6.getChannel;
            var6 = var4.bind(var6)(var7);
            if(!(var1 != var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var4 = var6.isThread;
            var4 = var4.bind(var6)();
            if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 19:
            if(!(var1 != var6)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var4 = var6.isForumPost;
            var4 = var4.bind(var6)();
            if(var4) { _fun0003_ip = 24; continue _fun0003 }
case 22:
            if(!(var1 != var6)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var4 = var6.isForumLikeChannel;
            var4 = var4.bind(var6)();
            if(!var4) { _fun0003_ip = 25; continue _fun0003 }
case 24:
            var4 = _closure1_slot8;
            var4 = var4.AUTOMOD_TITLE_BLOCKED;
            if(!(var5 !== var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var4 = _closure1_slot8;
            var4 = var4.AUTOMOD_MESSAGE_BLOCKED;
            if(!(var5 !== var4)) { _fun0003_ip = 29; continue _fun0003 }
case 25:
            return var1;
case 29:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 8;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.ipgKDg;
            var4 = var5.bind(var6)(var4);
            return var4;
case 27:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 8;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.ipgKDg;
            var4 = var5.bind(var6)(var4);
            return var4;
case 21:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 8;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.DVdG9P;
            var3 = var4.bind(var5)(var3);
            return var3;
case 17:
            return var1;
case 15:
            return var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function getAutomodErrorMessageFromMessageData(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot7;
            var3 = var4.getChannel;
            var1 = var5.message;
            var1 = var1.channelId;
            var3 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 9;
            var1 = var6[var1];
            var6 = undefined;
            var4 = var4.bind(var6)(var1);
            var1 = var4.isMessageDataEdit;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var4 = var3.isThread;
            var4 = var4.bind(var3)();
            if(var4) { _fun0004_ip = 34; continue _fun0004 }
case 32:
            if(!(var1 != var3)) { _fun0004_ip = 35; continue _fun0004 }
case 19:
            var4 = var3.isForumPost;
            var4 = var4.bind(var3)();
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 35:
            if(!(var1 != var3)) { _fun0004_ip = 37; continue _fun0004 }
case 22:
            var1 = var3.isForumLikeChannel;
            var1 = var1.bind(var3)();
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 8;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.zQ69pq;
            var1 = var3.bind(var4)(var1);
            _fun0004_ip = 38; continue _fun0004;
case 36:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 8;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.ipgKDg;
            var1 = var4.bind(var5)(var3);
case 38:
            _fun0004_ip = 39; continue _fun0004;
case 34:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 8;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.DVdG9P;
            var1 = var4.bind(var5)(var3);
case 39:
            _fun0004_ip = 40; continue _fun0004;
case 30:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 8;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.bU6o09;
            var1 = var3.bind(var4)(var2);
case 40:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var6 = global;
    var12 = var6.Object;
    var9 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var11[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var11[var7];
    var12 = var8.bind(var1)(var7);
    var7 = 6;
    var7 = var11[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 7;
    var7 = var11[var7];
    var7 = var10.bind(var1)(var7);
    var9 = var7.AbortCodes;
    var _closure1_slot8 = var9;
    var7 = var6.Error;
    var8 = var12.bind(var1)(var7);
    var7 = function(arg1) {
        var3 = function InvalidKeywordError() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot3;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot10;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var8 = var7.bind(var1)(var8);
    var7 = var6.Error;
    var12 = var12.bind(var1)(var7);
    var7 = function(arg1) {
        var3 = function InvalidRegexPatternError() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot3;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot10;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var7 = var7.bind(var1)(var12);
    var12 = var6.Set;
    var13 = var9.AUTOMOD_MESSAGE_BLOCKED;
    var6 = new Array(3);
    var6[0] = var13;
    var13 = var9.AUTOMOD_TITLE_BLOCKED;
    var6[1] = var13;
    var9 = var9.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE;
    var6[2] = var9;
    var9 = var12.prototype;
    var9 = Object.create(var9, {constructor: {value: var12}});
    var17 = var9;
    var16 = var6;
    var6 = new var17[var12](var16, var15);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot9 = var6;
    var9 = 10;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_automod/AutomodErrorUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['InvalidKeywordError'] = var8;
    var3['InvalidRegexPatternError'] = var7;
    var3['AUTOMOD_ERROR_CODES'] = var6;
    var3['getAutomodErrorMessageFromErrorResponse'] = var5;
    var3['getAutomodErrorMessageFromMessageData'] = var4;
    var2 = function getAutomodErrorMessage(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot12;
            var7 = undefined;
            var1 = arg2;
            var1 = var2.bind(var7)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 23; continue _fun0005 }
case 41:
            if(!(var2 != var4)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var2 = _closure1_slot13;
            var2 = var2.bind(var7)(var4);
            _fun0005_ip = 44; continue _fun0005;
case 42:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 8;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.zQ69pq;
            var2 = var4.bind(var5)(var3);
case 44:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var3['getAutomodErrorMessage'] = var2;
    return var1;
})();