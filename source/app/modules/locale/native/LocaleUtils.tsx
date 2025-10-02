// app/modules/locale/native/LocaleUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSystemLocale;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/locale/native/LocaleUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSuperProperties;
            var3 = var3.bind(var4)();
            var4 = null;
            var5 = var4 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.os;
case 2:
            var3 = 'iOS';
            var3 = var3 === var4;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.intl;
            var5 = var4.currentLocale;
            var4 = 'en-US';
            var3 = var4 === var5;
case 4:
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot3;
            var6 = var4.bind(var1)();
            var5 = var6.startsWith;
            var4 = 'es';
            var3 = var5.bind(var6)(var4);
case 6:
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 6;
            var3 = var8[var4];
            var6 = var5.bind(var1)(var3);
            var5 = var6.trackExposure;
            var3 = {};
            var7 = 'caaf7b_1';
            var3['location'] = var7;
            var3 = var5.bind(var6)(var3);
            var7 = _closure1_slot0;
            var3 = 7;
            var5 = var8[var3];
            var5 = var7.bind(var1)(var5);
            var6 = var5.HotspotStore;
            var5 = var6.hasHotspot;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.HotspotLocations;
            var3 = var3.CHANGE_LANGUAGE_MODAL;
            var3 = var5.bind(var6)(var3);
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var5 = var3.bind(var1)(var2);
            var4 = var5.subscribe;
            var3 = {};
            var2 = '1';
            var3['location'] = var2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.enabled;
                    if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.openLazy;
                    var2 = {};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 10;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 9;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure5_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot5;
                                var3 = _closure5_slot0;
                                var2 = {};
                                var5 = arg1;
                                var6 = var2;
                                var1 = copyDataProperties(var6, var5);
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['importer'] = var8;
                    var2 = var6.bind(var7)(var2);
                    var2 = 4;
                    var2 = var5[var2];
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.track;
                    var1 = _closure1_slot4;
                    var1 = var1.CHANGE_LANGUAGE_MODAL_SHOWN;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['maybeShowChangeLanguageToast'] = var2;
    return var1;
})();