// app/modules/main_tabs_v2/native/settings/definitions/RequestYourDataSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var6 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var2 = function useIsHarvestRequestDisabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var7 = undefined;
            var6 = var8.bind(var7)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var5.bind(var6)(var4, var2);
            var10 = _closure1_slot7;
            var2 = 10;
            var4 = var9[var2];
            var4 = var8.bind(var7)(var4);
            var5 = var4.shallow;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.harvestRequest;
                return var1;
            };
            var5 = var10.bind(var7)(var4, var5);
            var4 = _closure1_slot7;
            var2 = var9[var2];
            var2 = var8.bind(var7)(var2);
            var2 = var2.shallow;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isRequesting;
                return var1;
            };
            var2 = var4.bind(var7)(var1, var2);
            var1 = null;
            var1 = var1 == var6;
            if(var1) { _fun0001_ip = 171; continue _fun0001 }
 133:
            if(var2) { _fun0001_ip = 168; continue _fun0001 }
 136:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.harvestDisabled;
            var2 = var3.bind(var4)(var5, var6);
 168:
            var1 = var2;
 171:
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var5 = var5.ActivityIndicator;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.MobileSetting;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var10 = var5.RendererType;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.REQUEST_DATA_LIMIT_DAYS;
    var _closure1_slot5 = var9;
    var9 = var5.UserSettingsSections;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var8[var5];
    var12 = var7.bind(var1)(var5);
    var11 = var12.createWithEqualityFn;
    var5 = function() {
        var1 = {'isRequesting': false, 'harvestRequest': null};
        return var1;
    };
    var5 = var11.bind(var12)(var5);
    var _closure1_slot7 = var5;
    var5 = {};
    var10 = var10.ROUTE;
    var5['type'] = var10;
    var10 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 12;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.XAHCgI;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['title'] = var10;
    var6 = var6.DATA_AND_PRIVACY;
    var5['parent'] = var6;
    var6 = function useHarvestRequestSettingTrailing() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = function useIsRequestingHarvestState() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.shallow;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isRequesting;
                    return var1;
                };
                var1 = var4.bind(var3)(var1, var2);
                return var1;
            };
            var5 = undefined;
            var2 = var1.bind(var5)();
            var1 = null;
            if(!var2) { _fun0002_ip = 39; continue _fun0002 }
 20:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 39:
            return var1;
        }
    };
    var5['useTrailing'] = var6;
    var6 = function useRequestYourDataSettingDescription() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = function useHarvestRequest() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.shallow;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.harvestRequest;
                    return var1;
                };
                var1 = var4.bind(var3)(var1, var2);
                return var1;
            };
            var6 = undefined;
            var4 = var1.bind(var6)();
            var3 = _closure1_slot4;
            var1 = var3.getCurrentUser;
            var5 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 286; continue _fun0003 }
 40:
            var3 = var5.isStaff;
            var3 = var3.bind(var5)();
            if(var3) { _fun0003_ip = 227; continue _fun0003 }
 56:
            if(!(var1 != var4)) { _fun0003_ip = 225; continue _fun0003 }
 63:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 13;
            var8 = var7[var3];
            var8 = var5.bind(var6)(var8);
            var4 = var4.created_at;
            var10 = var8.bind(var6)(var4);
            var9 = var10.add;
            var8 = _closure1_slot5;
            var4 = 'days';
            var11 = var9.bind(var10)(var8, var4);
            var4 = var11.isBefore;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var4 = var4.bind(var11)(var3);
            var3 = null;
            if(var4) { _fun0003_ip = 223; continue _fun0003 }
 142:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 12;
            var7 = var9[var4];
            var7 = var5.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var4 = var9[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.t;
            var5 = var4.RNDlV1;
            var4 = {};
            var10 = var11.format;
            var9 = 'MMMM Do YYYY';
            var9 = var10.bind(var11)(var9);
            var4['date'] = var9;
            var3 = var7.bind(var8)(var5, var4);
 223:
            return var3;
 225:
            return var1;
 227:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.ZPQLHx;
            var2 = var3.bind(var4)(var2);
            return var2;
 286:
            return var1;
        }
    };
    var5['useDescription'] = var6;
    var5['useIsDisabled'] = var2;
    var6 = function usePreNavigationAction() {
        var3 = _closure1_slot8;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = !var1;
                if(!var1) { _fun0004_ip = 24; continue _fun0004 }
 13:
                var3 = arg1;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var1 = true;
 24:
                return var1;
            }
        };
        return var1;
    };
    var5['usePreNavigationAction'] = var6;
    var6 = {};
    var9 = var9.REQUEST_DATA;
    var6['route'] = var9;
    var9 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var6['getComponent'] = var9;
    var5['screen'] = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/settings/definitions/RequestYourDataSetting.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function fetchHarvestStatus() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 7;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.getHarvestStatus;
        var5 = var3.bind(var4)();
        var4 = var5.then;
        var3 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = false;
                var1['isRequesting'] = var4;
                var4 = _closure3_slot0;
                var4 = var4.body;
                var1['harvestRequest'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = false;
                var1['isRequesting'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['fetchHarvestStatus'] = var4;
    var3['useIsHarvestRequestDisabled'] = var2;
    return var1;
})();