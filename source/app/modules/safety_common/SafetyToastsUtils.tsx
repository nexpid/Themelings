// app/modules/safety_common/SafetyToastsUtils.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyToastType;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_common/SafetyToastsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSafetyToastTypeContent(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot4;
            var4 = var5.getUser;
            var2 = arg2;
            var7 = var4.bind(var5)(var2);
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var2 = arg3;
            var10 = var4.bind(var5)(var2);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var6 = undefined;
            var9 = var4.bind(var6)(var2);
            var8 = var9.getName;
            var2 = null;
            var4 = var2 == var10;
            var5 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var10.guild_id;
case 2:
            var11 = var2 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var10.id;
case 4:
            var5 = var8.bind(var9)(var5, var4, var7);
            if(!(var2 == var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.getGlobalName;
            var5 = var2.bind(var4)(var7);
case 6:
            var2 = _closure1_slot5;
            var2 = var2.IGNORE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot5;
            var2 = var2.UNIGNORE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot5;
            var2 = var2.BLOCK_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot5;
            var2 = var2.UNBLOCK_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot5;
            var2 = var2.MUTE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot5;
            var2 = var2.UNMUTE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot5;
            var2 = var2.REPORT_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = _closure1_slot5;
            var2 = var2.TIGGER_PAWTECT_ERROR;
            if(!(var2 !== var3)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = _closure1_slot5;
            var2 = var2.TIGGER_PAWTECT_VERIFIED;
            if(!(var2 !== var3)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = _closure1_slot5;
            var2 = var2.GENERIC_ERROR;
            if(!(var2 !== var3)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var2 = _closure1_slot5;
            var2 = var2.REPORT_TO_MOD_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = _closure1_slot5;
            var2 = var2.SAFETY_FEEDBACK_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var2 = _closure1_slot5;
            var2 = var2.EXISTING_USER_AGE_GATE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.+c5xtb;
            var2 = var3.bind(var4)(var2);
            return var2;
case 32:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.susqq6;
            var2 = var3.bind(var4)(var2);
            return var2;
case 30:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.TcFR5u;
            var2 = var3.bind(var4)(var2);
            return var2;
case 28:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var7 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.iBypeX;
            var2 = var3.bind(var4)(var2);
            return var2;
case 26:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.zBpoc3;
            var2 = var3.bind(var4)(var2);
            return var2;
case 24:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.XwKo1t;
            var2 = var3.bind(var4)(var2);
            return var2;
case 22:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var3 = var8[var2];
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.c6kn6O;
            var2 = var3.bind(var4)(var2);
            return var2;
case 20:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.FOptFR;
            var2 = {};
            var2['username'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 18:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.tRaBfX;
            var2 = {};
            var2['username'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 16:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.X4NtYW;
            var2 = {};
            var2['username'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 14:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.uExcGR;
            var2 = {};
            var2['username'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 12:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.XXPrIi;
            var2 = {};
            var2['username'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 10:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.THExKS;
            var2 = {};
            var2['username'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 8:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.+joqrK;
            var1 = {};
            var1['username'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getSafetyToastTypeContent'] = var2;
    return var1;
})();