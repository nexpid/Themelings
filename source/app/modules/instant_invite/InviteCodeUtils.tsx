// app/modules/instant_invite/InviteCodeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function generateInviteKeyFromExtraData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.baseCode;
            var7 = var1.guildScheduledEventId;
            var2 = null;
            var1 = var8;
            if(!(var2 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot4;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var14 = '';
            var12 = '?';
            var10 = '=';
            var13 = var8;
            var9 = var7;
            var1 = var14[var5](var13, var12, var11, var10, var9, var8);
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function parseInviteCodeFromInviteKey(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = '?';
        var4 = var2.bind(var3)(var1);
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = 1;
        var2 = var3.bind(var2)(var4, var1);
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 'event';
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/instant_invite/InviteCodeUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function generateInviteKeyFromUrlParams(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var2 = null;
            if(!(var2 != var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = undefined;
            var3 = undefined;
            var5 = var7.charAt;
            var2 = 0;
            var6 = var5.bind(var7)(var2);
            var5 = '?';
            var2 = var7;
            if(!(var5 === var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var7.substring;
            var5 = 1;
            var2 = var6.bind(var7)(var5);
case 6:
            var3 = var2;
case 8: // try_start_0
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 1;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.parse;
            var6 = var5.bind(var6)(var3);
            var5 = _closure1_slot0;
            var3 = 2;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getFirstQueryStringValue;
            var2 = _closure1_slot4;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
case 9: // try_end0
            var5 = var2;
            _fun0002_ip = 10; continue _fun0002;
case 11: // catch_target0
            CatchBlockStart(arg_register=1);
            var5 = undefined;
case 10:
            var3 = _closure1_slot5;
            var2 = {};
            var2['baseCode'] = var1;
            var2['guildScheduledEventId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            return var1;
        }
    };
    var3['generateInviteKeyFromUrlParams'] = var6;
    var3['generateInviteKeyFromExtraData'] = var5;
    var5 = function parseExtraDataFromInviteKey(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = '?';
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot3;
            var7 = undefined;
            var8 = 2;
            var4 = var1.bind(var7)(var2, var8);
            var1 = 0;
            var2 = var4[var1];
            var1 = 1;
            var6 = var4[var1];
            var4 = null;
            if(!(var4 != var6)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = var4[var1];
            var5 = var5.bind(var7)(var1);
            var1 = var5.parse;
            var6 = var1.bind(var5)(var6);
            var1 = {};
            var1['baseCode'] = var2;
            var5 = _closure1_slot0;
            var4 = var4[var8];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getFirstQueryStringValue;
            var3 = _closure1_slot4;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var1['guildScheduledEventId'] = var3;
            return var1;
case 12:
            var1 = {};
            var1['baseCode'] = var2;
            return var1;
        }
    };
    var3['parseExtraDataFromInviteKey'] = var5;
    var3['parseInviteCodeFromInviteKey'] = var4;
    var2 = function getInviteInstanceId(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg2;
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var1 = undefined;
            return var1;
case 14:
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = arg1;
            var4 = var3.bind(var2)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ':';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var3['getInviteInstanceId'] = var2;
    return var1;
})();