// app/modules/user_settings/native/defs/AccountUsernameSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.MobileSetting;
    var13 = 4;
    var2 = var6[var13];
    var2 = var5.bind(var1)(var2);
    var8 = var2.UserSettingsSections;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PomeloEntrypoints;
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RendererType;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.jsx;
    var _closure1_slot7 = var10;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 8;
    var2 = var6[var2];
    var11 = var5.bind(var1)(var2);
    var10 = var11.createStyles;
    var2 = {};
    var12 = {'flexDirection': 'row', 'alignItems': 'center'};
    var2['usernameTrailing'] = var12;
    var12 = {};
    var12['marginLeft'] = var13;
    var2['usernameIcon'] = var12;
    var2 = var10.bind(var11)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var9 = var9.ROUTE;
    var2['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 22;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.IEpCBQ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var4 = var4.ACCOUNT;
    var2['parent'] = var4;
    var4 = function useGetAccountUsernameSettingCanNavigate() {
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var9 = undefined;
                var2 = var3.bind(var9)(var1);
                var1 = var2.isEligibleForPomelo;
                var1 = var1.bind(var2)();
                var2 = 19;
                var2 = var6[var2];
                var3 = var3.bind(var9)(var2);
                var2 = var3.getPomeloEligibility;
                var3 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0001_ip = 295; continue _fun0001 }
 79:
                var2 = var4.isClaimed;
                var2 = var2.bind(var4)();
                var2 = !var2;
                if(!var3) { _fun0001_ip = 121; continue _fun0001 }
 95:
                var3 = var4.hasUniqueUsername;
                var3 = var3.bind(var4)();
                if(var3) { _fun0001_ip = 121; continue _fun0001 }
 108:
                var3 = var4.hasVerifiedEmailOrPhone;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 175; continue _fun0001 }
 121:
                if(var2) { _fun0001_ip = 175; continue _fun0001 }
 124:
                var1 = !var1;
                if(var1) { _fun0001_ip = 173; continue _fun0001 }
 130:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 23;
                var2 = var4[var2];
                var4 = var3.bind(var9)(var2);
                var3 = var4.openPomeloModal;
                var2 = _closure1_slot6;
                var2 = var2.USER_SETTINGS_EDIT;
                var2 = var3.bind(var4)(var2);
                var1 = false;
 173:
                _fun0001_ip = 293; continue _fun0001;
 175:
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 20;
                var2 = var10[var2];
                var4 = var7.bind(var9)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'POMELO_UPDATE_DISABLED_MESSAGE';
                var2['key'] = var6;
                var6 = 21;
                var6 = var10[var6];
                var6 = var7.bind(var9)(var6);
                var2['icon'] = var6;
                var8 = _closure1_slot0;
                var5 = 22;
                var6 = var10[var5];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5.7Ngnys;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = false;
 293:
                return var1;
 295:
                var1 = false;
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['usePreNavigationAction'] = var4;
    var4 = function useAccountUsernameSettingTrailing() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot9;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.useIsEligibleForPomelo;
            var2 = var1.bind(var2)();
            var1 = 10;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getUserTag;
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = 'never';
                var1['decoration'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var4.bind(var6)(var3, var1);
            var1 = var11;
            if(!var2) { _fun0002_ip = 292; continue _fun0002 }
 96:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var10.usernameTrailing;
            var2['style'] = var6;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 12;
            var6 = var12[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.TableRow;
            var8 = var6.TrailingText;
            var6 = {};
            var6['text'] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var11 = _closure1_slot1;
            var7 = 13;
            var7 = var12[var7];
            var8 = var11.bind(var5)(var7);
            var7 = {};
            var10 = var10.usernameIcon;
            var7['style'] = var10;
            var10 = 14;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.STATUS_WARNING;
            var7['themedColor'] = var10;
            var10 = 15;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.Sizes;
            var10 = var10.SMALL_20;
            var7['size'] = var10;
            var10 = 16;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var7['source'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 292:
            return var1;
        }
    };
    var2['useTrailing'] = var4;
    var4 = function useAccountUsernameSettingDescription() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 17;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGuildAutomodProfileQuarantineErrors;
            var3 = var1.bind(var3)();
            var1 = null;
            var4 = var1 == var3;
            var6 = undefined;
            if(var4) { _fun0003_ip = 67; continue _fun0003 }
 46:
            var4 = var3.nick;
            var3 = var1 == var4;
            var6 = undefined;
            if(var3) { _fun0003_ip = 67; continue _fun0003 }
 61:
            var3 = 0;
            var6 = var4[var3];
 67:
            var3 = var1 == var6;
            var1 = null;
            if(var3) { _fun0003_ip = 129; continue _fun0003 }
 76:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-xs/medium', 'color': 'text-warning'};
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 129:
            return var1;
        }
    };
    var2['useDescription'] = var4;
    var4 = {};
    var8 = var8.ACCOUNT_CHANGE_USERNAME;
    var4['route'] = var8;
    var7 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 24;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var4['getComponent'] = var7;
    var2['screen'] = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/AccountUsernameSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();