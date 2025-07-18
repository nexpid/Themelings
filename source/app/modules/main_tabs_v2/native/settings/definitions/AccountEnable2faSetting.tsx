// app/modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var7 = true;
    var2['value'] = var7;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = {};
    var9 = 2;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.RendererType;
    var9 = var9.PRESSABLE;
    var2['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.cDgKtb;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var8 = var8.ACCOUNT;
    var2['parent'] = var8;
    var8 = function onAccountEnable2FASettingPress() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = var3.getCurrentUser;
            var5 = var1.bind(var3)();
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0001_ip = 35; continue _fun0001 }
 29:
            var3 = var5.verified;
 35:
            if(!(var4 != var3)) { _fun0001_ip = 45; continue _fun0001 }
 39:
            if(var3) { _fun0001_ip = 183; continue _fun0001 }
 45:
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 5;
            var3 = var10[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.show;
            var3 = {};
            var9 = _closure1_slot0;
            var6 = 6;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.v740sr;
            var7 = var8.bind(var11)(var7);
            var3['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.uggF7u;
            var6 = var7.bind(var8)(var6);
            var3['body'] = var6;
            var3 = var4.bind(var5)(var3);
            _fun0001_ip = 213; continue _fun0001;
 183:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.open;
            var2 = var2.bind(var3)();
 213:
            return var1;
        }
    };
    var2['onPress'] = var8;
    var2['withArrow'] = var7;
    var4 = function useHasAccountEnable2FASetting() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useIsTOTPEnabled;
        var1 = var1.bind(var2)();
        var1 = !var1;
        return var1;
    };
    var2['usePredicate'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();