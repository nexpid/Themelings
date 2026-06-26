// app/modules/instant_invite/InviteCodeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function readSnowflake(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = undefined;
            var5 = 'string';
            var3 = typeof var2;
            var1 = undefined;
            if(!(var5 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isProbablyAValidSnowflake;
            var3 = var3.bind(var5)(var2);
            var1 = undefined;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function generateInviteKeyFromExtraData(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.baseCode;
            var5 = var1.guildScheduledEventId;
            var7 = var1.targetChannelId;
            var2 = var1.targetMessageId;
            var3 = {};
            var4 = null;
            if(!(var4 != var5)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = _closure1_slot4;
            var3[var1] = var5;
case 5:
            if(!(var4 != var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = _closure1_slot5;
            var3[var5] = var7;
            if(!(var4 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 9:
            var1 = _closure1_slot6;
            var3[var1] = var2;
case 7:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.stringify;
            var5 = var1.bind(var2)(var3);
            var4 = '';
            var1 = var6;
            if(!(var4 !== var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '?';
            var1 = var3.bind(var4)(var6, var2, var5);
case 10:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
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
    var _closure1_slot9 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 'event';
    var _closure1_slot4 = var7;
    var7 = 'channel';
    var _closure1_slot5 = var7;
    var7 = 'message';
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/instant_invite/InviteCodeUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['readSnowflake'] = var6;
    var6 = function generateInviteKeyFromUrlParams(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg2;
            var1 = arg1;
            var4 = undefined;
            var10 = undefined;
            var2 = undefined;
            var7 = null;
            if(!(var7 != var8)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = var8.charAt;
            var3 = 0;
            var6 = var5.bind(var8)(var3);
            var5 = '?';
            var3 = var8;
            if(!(var5 === var6)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = var8.substring;
            var5 = 1;
            var3 = var6.bind(var8)(var5);
case 14:
            var2 = var3;
case 16: // try_start_0
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.parse;
            var10 = var3.bind(var5)(var2);
case 17: // try_end0
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 3;
            var3 = var2[var11];
            var9 = var5.bind(var4)(var3);
            var8 = var9.getFirstQueryStringValue;
            var12 = var10;
            var3 = _closure1_slot4;
            var3 = var12[var3];
            var8 = var8.bind(var9)(var3);
            var3 = _closure1_slot7;
            var2 = var2[var11];
            var9 = var5.bind(var4)(var2);
            var5 = var9.getFirstQueryStringValue;
            var2 = _closure1_slot5;
            var2 = var12[var2];
            var2 = var5.bind(var9)(var2);
            var5 = var3.bind(var4)(var2);
            var3 = _closure1_slot8;
            var2 = {};
            var9 = var1;
            var2['baseCode'] = var9;
            var2['guildScheduledEventId'] = var8;
            var2['targetChannelId'] = var5;
            var7 = var7 != var5;
            var5 = undefined;
            if(!var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var7 = _closure1_slot7;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var9 = var9.bind(var4)(var8);
            var8 = var9.getFirstQueryStringValue;
            var6 = _closure1_slot6;
            var6 = var10[var6];
            var6 = var8.bind(var9)(var6);
            var5 = var7.bind(var4)(var6);
case 18:
            var2['targetMessageId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 20: // catch_target0
            CatchBlockStart(arg_register=1);
            var2 = var1;
            return var2;
case 12:
            return var1;
        }
    };
    var3['generateInviteKeyFromUrlParams'] = var6;
    var3['generateInviteKeyFromExtraData'] = var5;
    var5 = function parseExtraDataFromInviteKey(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = '?';
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot3;
            var6 = undefined;
            var3 = 2;
            var5 = var1.bind(var6)(var2, var3);
            var1 = 0;
            var2 = var5[var1];
            var1 = 1;
            var8 = var5[var1];
            var5 = null;
            if(!(var5 != var8)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = var1[var3];
            var7 = var7.bind(var6)(var3);
            var3 = var7.parse;
            var9 = var3.bind(var7)(var8);
            var8 = _closure1_slot0;
            var10 = 3;
            var3 = var1[var10];
            var11 = var8.bind(var6)(var3);
            var7 = var11.getFirstQueryStringValue;
            var3 = _closure1_slot4;
            var3 = var9[var3];
            var7 = var7.bind(var11)(var3);
            var3 = _closure1_slot7;
            var1 = var1[var10];
            var11 = var8.bind(var6)(var1);
            var8 = var11.getFirstQueryStringValue;
            var1 = _closure1_slot5;
            var1 = var9[var1];
            var1 = var8.bind(var11)(var1);
            var3 = var3.bind(var6)(var1);
            var1 = {};
            var1['baseCode'] = var2;
            var1['guildScheduledEventId'] = var7;
            var1['targetChannelId'] = var3;
            var5 = var5 != var3;
            var3 = undefined;
            if(!var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var5 = _closure1_slot7;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var8 = var8.bind(var6)(var7);
            var7 = var8.getFirstQueryStringValue;
            var4 = _closure1_slot6;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var3 = var5.bind(var6)(var4);
case 23:
            var1['targetMessageId'] = var3;
            return var1;
case 21:
            var1 = {};
            var1['baseCode'] = var2;
            return var1;
        }
    };
    var3['parseExtraDataFromInviteKey'] = var5;
    var3['parseInviteCodeFromInviteKey'] = var4;
    var4 = function getInviteKeySearchSuffix(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = var4.indexOf;
            var1 = '?';
            var3 = var2.bind(var4)(var1);
            var1 = 0;
            var2 = var3 >= var1;
            var1 = '';
            if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var2 = var4.substring;
            var1 = var2.bind(var4)(var3);
case 25:
            return var1;
        }
    };
    var3['getInviteKeySearchSuffix'] = var4;
    var2 = function getInviteInstanceId(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg2;
            var1 = null;
            if(!(var1 == var5)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var1 = undefined;
            return var1;
case 27:
            var3 = _closure1_slot9;
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