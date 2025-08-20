// app/modules/user_settings/native/UserSettingsAccountUnverifiedHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function handleOpenEmailVerification() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.open;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot7 = var1;
    var2 = function getBannerText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0001_ip = 288; continue _fun0001 }
 17:
            var4 = var3.email;
            if(!(var2 != var4)) { _fun0001_ip = 163; continue _fun0001 }
 30:
            var3 = var3.verified;
            var2 = null;
            if(var3) { _fun0001_ip = 161; continue _fun0001 }
 41:
            var3 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 6;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var10 = var5.intl;
            var6 = var10.string;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.3sWbf3;
            var5 = var6.bind(var10)(var5);
            var3['title'] = var5;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.13ofGh;
            var4 = var5.bind(var6)(var4);
            var3['button'] = var4;
            var2 = var3;
 161:
            _fun0001_ip = 285; continue _fun0001;
 163:
            var3 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 6;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var10 = var5.intl;
            var6 = var10.string;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5./yqgqq;
            var5 = var6.bind(var10)(var5);
            var3['title'] = var5;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.ydw5nZ;
            var4 = var5.bind(var6)(var4);
            var3['button'] = var4;
            var2 = var3;
 285:
            var1 = var2;
 288:
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot4 = var8;
    var5 = var5.jsxs;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'backgroundColor': null, 'height': 36, 'alignItems': 'center', 'alignSelf': 'stretch', 'flexDirection': 'row', 'paddingHorizontal': 16};
    var11 = 4;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var10['backgroundColor'] = var13;
    var5['accountWarning'] = var10;
    var10 = {'flex': 1, 'lineHeight': 16};
    var5['accountWarningText'] = var10;
    var10 = {'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'paddingHorizontal': 8, 'paddingVertical': 4};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['borderColor'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['borderRadius'] = var11;
    var5['accountWarningButton'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/UserSettingsAccountUnverifiedHeader.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function UserSettingsAccountUnverifiedHeader() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot6;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var7)(var3, var1);
            var10 = var2.bind(var5)(var1);
            var1 = null;
            var2 = var1 == var10;
            if(var2) { _fun0002_ip = 284; continue _fun0002 }
 86:
            var4 = _closure1_slot5;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 8;
            var2 = var12[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var7 = var11.accountWarning;
            var2['style'] = var7;
            var7 = _closure1_slot7;
            var2['onPress'] = var7;
            var9 = _closure1_slot4;
            var7 = 9;
            var6 = var12[var7];
            var6 = var8.bind(var5)(var6);
            var13 = var6.Text;
            var6 = {'style': null, 'variant': 'text-xs/bold', 'color': 'always-white'};
            var14 = var11.accountWarningText;
            var6['style'] = var14;
            var14 = var10.title;
            var6['children'] = var14;
            var13 = var9.bind(var5)(var13, var6);
            var6 = new Array(2);
            var6[0] = var13;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/medium', 'color': 'always-white'};
            var11 = var11.accountWarningButton;
            var7['style'] = var11;
            var10 = var10.button;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 284:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getBannerText'] = var2;
    return var1;
})();