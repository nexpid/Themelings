// app/modules/safety_common/SafetyToastsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
            if(var4) { _fun0001_ip = 85; continue _fun0001 }
 80:
            var5 = var10.guild_id;
 85:
            var11 = var2 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 99; continue _fun0001 }
 94:
            var4 = var10.id;
 99:
            var5 = var8.bind(var9)(var5, var4, var7);
            if(!(var2 == var5)) { _fun0001_ip = 141; continue _fun0001 }
 110:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.getGlobalName;
            var5 = var2.bind(var4)(var7);
 141:
            var2 = _closure1_slot5;
            var2 = var2.IGNORE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 1016; continue _fun0001 }
 158:
            var2 = _closure1_slot5;
            var2 = var2.UNIGNORE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 950; continue _fun0001 }
 175:
            var2 = _closure1_slot5;
            var2 = var2.BLOCK_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 884; continue _fun0001 }
 192:
            var2 = _closure1_slot5;
            var2 = var2.UNBLOCK_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 818; continue _fun0001 }
 209:
            var2 = _closure1_slot5;
            var2 = var2.MUTE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 752; continue _fun0001 }
 226:
            var2 = _closure1_slot5;
            var2 = var2.UNMUTE_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 686; continue _fun0001 }
 243:
            var2 = _closure1_slot5;
            var2 = var2.REPORT_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 620; continue _fun0001 }
 260:
            var2 = _closure1_slot5;
            var2 = var2.TIGGER_PAWTECT_ERROR;
            if(!(var2 !== var3)) { _fun0001_ip = 561; continue _fun0001 }
 277:
            var2 = _closure1_slot5;
            var2 = var2.TIGGER_PAWTECT_VERIFIED;
            if(!(var2 !== var3)) { _fun0001_ip = 502; continue _fun0001 }
 294:
            var2 = _closure1_slot5;
            var2 = var2.GENERIC_ERROR;
            if(!(var2 !== var3)) { _fun0001_ip = 443; continue _fun0001 }
 311:
            var2 = _closure1_slot5;
            var2 = var2.REPORT_TO_MOD_SUCCESS;
            if(!(var2 !== var3)) { _fun0001_ip = 382; continue _fun0001 }
 325:
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
 382:
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
 443:
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
 502:
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
 561:
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
 620:
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
 686:
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
 752:
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
 818:
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
 884:
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
 950:
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
 1016:
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