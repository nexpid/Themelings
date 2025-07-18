// app/utils/PremiumFeatureUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getUserMaxFileSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 127; continue _fun0001 }
 9:
            var5 = _closure1_slot2;
            var1 = var5.getPremiumTypeOverride;
            var5 = var1.bind(var5)();
            var1 = var3.isStaff;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 47; continue _fun0001 }
 39:
            var1 = _closure1_slot6;
            if(!(var5 !== var1)) { _fun0001_ip = 121; continue _fun0001 }
 47:
            var1 = var3.premiumType;
            if(!(var4 != var1)) { _fun0001_ip = 93; continue _fun0001 }
 57:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.isPremium;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0001_ip = 99; continue _fun0001 }
 93:
            var1 = _closure1_slot3;
            _fun0001_ip = 119; continue _fun0001;
 99:
            var4 = _closure1_slot5;
            var3 = var3.premiumType;
            var3 = var4[var3];
            var1 = var3.fileSize;
 119:
            _fun0001_ip = 125; continue _fun0001;
 121:
            var1 = _closure1_slot4;
 125:
            return var1;
 127:
            var1 = _closure1_slot3;
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.MAX_ATTACHMENT_SIZE;
    var _closure1_slot3 = var8;
    var4 = var4.MAX_STAFF_ATTACHMENT_SIZE;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.PremiumUserLimits;
    var _closure1_slot5 = var8;
    var4 = var4.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot6 = var4;
    var4 = {};
    var4['getUserMaxFileSize'] = var2;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/PremiumFeatureUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getUserMaxFileSize'] = var2;
    return var1;
})();