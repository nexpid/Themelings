// app/modules/premium/referral_program/hooks/useReferralProgramSubheaderText.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/hooks/useReferralProgramSubheaderText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.numNewSelected;
            var1 = var1.anySelected;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 1;
            var3 = var9[var4];
            var6 = undefined;
            var10 = var7.bind(var6)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getReferralsRemaining;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var10)(var7, var3);
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var9[var3];
            var9 = var7.bind(var6)(var3);
            var3 = null;
            var7 = var3 != var8;
            var3 = 'Referrals remaining should not be null';
            var3 = var9.bind(var6)(var7, var3);
            var9 = var8 - var5;
            var3 = 0;
            if(!(var3 !== var8)) { _fun0001_ip = 403; continue _fun0001 }
 119:
            if(!(var3 === var5)) { _fun0001_ip = 196; continue _fun0001 }
 123:
            if(var1) { _fun0001_ip = 196; continue _fun0001 }
 126:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 3;
            var7 = var11[var1];
            var7 = var5.bind(var6)(var7);
            var10 = var7.intl;
            var7 = var10.formatToPlainString;
            var1 = var11[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.GcKM5e;
            var1 = {};
            var1['numReferrals'] = var8;
            var1 = var7.bind(var10)(var5, var1);
            _fun0001_ip = 401; continue _fun0001;
 196:
            if(!(var4 !== var9)) { _fun0001_ip = 341; continue _fun0001 }
 203:
            if(!(!(var9 > var3))) { _fun0001_ip = 274; continue _fun0001 }
 207:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 3;
            var5 = var10[var3];
            var5 = var4.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.3PJw6e;
            var3 = {};
            var3['numReferrals'] = var8;
            var3 = var5.bind(var7)(var4, var3);
            _fun0001_ip = 339; continue _fun0001;
 274:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 3;
            var7 = var10[var4];
            var7 = var5.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var4 = var10[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.t;
            var5 = var4.hZnIz8;
            var4 = {};
            var4['numFriends'] = var9;
            var3 = var7.bind(var8)(var5, var4);
 339:
            _fun0001_ip = 398; continue _fun0001;
 341:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 3;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.UfPk1t;
            var3 = var5.bind(var7)(var4);
 398:
            var1 = var3;
 401:
            _fun0001_ip = 460; continue _fun0001;
 403:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.mPmPrq;
            var1 = var3.bind(var4)(var2);
 460:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();