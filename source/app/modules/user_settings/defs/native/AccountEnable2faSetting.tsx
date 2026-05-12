// app/modules/user_settings/defs/native/AccountEnable2faSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var9 = true;
    var2['value'] = var9;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.MobileSetting;
    var2 = 6;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createPressable;
    var2 = {};
    var11 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.cDgKte;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var11;
    var10 = var10.ACCOUNT;
    var2['parent'] = var10;
    var10 = function onAccountEnable2FASettingPress() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = var3.getCurrentUser;
            var5 = var1.bind(var3)();
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.verified;
case 2:
            if(!(var4 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.show;
            var3 = {};
            var9 = _closure1_slot0;
            var6 = 5;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.v740sh;
            var7 = var8.bind(var11)(var7);
            var3['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.uggF7o;
            var6 = var7.bind(var8)(var6);
            var3['body'] = var6;
            var3 = var4.bind(var5)(var3);
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.open;
            var2 = var2.bind(var3)();
case 7:
            return var1;
        }
    };
    var2['onPress'] = var10;
    var2['withArrow'] = var9;
    var8 = function useHasAccountEnable2FASetting() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useIsTOTPEnabled;
        var1 = var1.bind(var2)();
        var1 = !var1;
        return var1;
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/AccountEnable2faSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();