// app/modules/main_tabs_v2/native/settings/definitions/AccountWebAuthnViewSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var6[var1];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.MobileSetting;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RendererType;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.UserSettingsSections;
    var2 = {};
    var9 = var9.ROUTE;
    var2['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.y7SXYW;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var4 = var4.ACCOUNT;
    var2['parent'] = var4;
    var4 = function useAccountCanUseWebAuthnView() {
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var3;
                var9 = undefined;
                var2 = undefined;
                if(var4) { _fun0001_ip = 35; continue _fun0001 }
 29:
                var2 = var3.verified;
 35:
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 45; continue _fun0001 }
 42:
                var1 = var2;
 45:
                if(var1) { _fun0001_ip = 187; continue _fun0001 }
 51:
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 6;
                var2 = var10[var2];
                var4 = var3.bind(var9)(var2);
                var3 = var4.show;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = 7;
                var6 = var10[var5];
                var6 = var8.bind(var9)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var10[var5];
                var6 = var8.bind(var9)(var6);
                var6 = var6.t;
                var6 = var6.v740sr;
                var6 = var7.bind(var11)(var6);
                var2['title'] = var6;
                var6 = var10[var5];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5.uggF7u;
                var5 = var6.bind(var7)(var5);
                var2['body'] = var5;
                var2 = var3.bind(var4)(var2);
 187:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['usePreNavigationAction'] = var4;
    var4 = function useAccountSecurityKeysSettingTrailing() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.hasFetchedCredentials;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 52; continue _fun0002 }
 20:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.fetchWebAuthnCredentials;
            var2 = var2.bind(var3)();
 52:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.n8mZ0d;
                var1 = {};
                var6 = _closure1_slot4;
                var5 = var6.getCredentials;
                var5 = var5.bind(var6)();
                var5 = var5.length;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2['useTrailing'] = var4;
    var4 = {};
    var8 = var8.WEBAUTHN_VIEW;
    var4['route'] = var8;
    var7 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var4['getComponent'] = var7;
    var2['screen'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/AccountWebAuthnViewSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();