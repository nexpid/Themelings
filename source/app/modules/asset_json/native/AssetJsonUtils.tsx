// app/modules/asset_json/native/AssetJsonUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var2 = function loadJsonAsset() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var2;
    var1 = function _loadJsonAsset() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var7 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 339; continue _fun0001 }
 16:
                    var11 = undefined;
                    if(!(var7 === var11)) { _fun0001_ip = 24; continue _fun0001 }
 22:
                    var7 = true;
 24:
                    SaveGenerator(address=28);
 26:
                    return var11;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 336; continue _fun0001 }
 37:
                    var5 = _closure1_slot6;
                    var5 = var5[var4];
                    var6 = null;
                    if(!(var6 != var5)) { _fun0001_ip = 60; continue _fun0001 }
 54:
                    if(var7) { _fun0001_ip = 325; continue _fun0001 }
 60:
                    var8 = _closure1_slot4;
                    var5 = var8.resolveAssetSource;
                    var5 = var5.bind(var8)(var4);
                    var12 = var5.uri;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 32;
                    var5 = var9[var5];
                    var8 = var8.bind(var11)(var5);
                    var5 = var8.isAndroid;
                    var5 = var5.bind(var8)();
                    if(var5) { _fun0001_ip = 142; continue _fun0001 }
 112:
                    var5 = _closure1_slot5;
                    var9 = var5.DCDFileManager;
                    var8 = var9.readAsset;
                    var5 = 'utf8';
                    var5 = var8.bind(var9)(var12, var5);
                    _fun0001_ip = 209; continue _fun0001;
 142:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var13 = 33;
                    var8 = var8[var13];
                    var8 = var9.bind(var11)(var8);
                    var9 = var6 == var8;
                    var8 = undefined;
                    if(var9) { _fun0001_ip = 206; continue _fun0001 }
 171:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var11 = var10.bind(var11)(var9);
                    var10 = var11.readAsset;
                    var9 = 'utf8';
                    var8 = var10.bind(var11)(var12, var9);
 206:
                    var5 = var8;
 209:
                    if(!(var6 != var5)) { _fun0001_ip = 289; continue _fun0001 }
 213:
                    SaveGenerator(address=217);
 215:
                    return var5;
 217:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 286; continue _fun0001 }
 223:
                    if(!(var6 != var5)) { _fun0001_ip = 283; continue _fun0001 }
 227:
                    var8 = _closure1_slot6;
                    var8 = var8[var4];
                    if(!(var6 != var8)) { _fun0001_ip = 242; continue _fun0001 }
 239:
                    if(var7) { _fun0001_ip = 272; continue _fun0001 }
 242:
                    var7 = global;
                    var8 = var7.JSON;
                    var7 = var8.parse;
                    var7 = var7.bind(var8)(var5);
                    var8 = _closure1_slot6;
                    var8[var4] = var7;
                    return var7;
 272:
                    var7 = _closure1_slot6;
                    var7 = var7[var4];
                    return var7;
 283:
                    return var6;
 286:
                    return var5;
 289:
                    var5 = global;
                    var7 = var5.Error;
                    var5 = var7.prototype;
                    var6 = Object.create(var5, {constructor: {value: var7}});
                    var15 = "RTNFileManager doesn't exist?";
                    var16 = var6;
                    var5 = new var16[var7](var15, var14);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
 325:
                    var3 = _closure1_slot6;
                    var3 = var3[var4];
                    return var3;
 336:
                    return var2;
 339:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Image;
    var _closure1_slot4 = var5;
    var4 = var4.NativeModules;
    var _closure1_slot5 = var4;
    var4 = {};
    var5 = function i18n_bg() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_bg'] = var5;
    var5 = function i18n_cs() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_cs'] = var5;
    var5 = function i18n_da() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_da'] = var5;
    var5 = function i18n_de() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_de'] = var5;
    var5 = function i18n_el() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_el'] = var5;
    var5 = function i18n_enGB() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_enGB'] = var5;
    var5 = function i18n_esES() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_esES'] = var5;
    var5 = function i18n_es419() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_es419'] = var5;
    var5 = function i18n_fi() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_fi'] = var5;
    var5 = function i18n_fr() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_fr'] = var5;
    var5 = function i18n_hr() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_hr'] = var5;
    var5 = function i18n_hu() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 13;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_hu'] = var5;
    var5 = function i18n_it() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_it'] = var5;
    var5 = function i18n_ja() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 15;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_ja'] = var5;
    var5 = function i18n_ko() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 16;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_ko'] = var5;
    var5 = function i18n_lt() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 17;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_lt'] = var5;
    var5 = function i18n_nl() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 18;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_nl'] = var5;
    var5 = function i18n_no() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 19;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_no'] = var5;
    var5 = function i18n_pl() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 20;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_pl'] = var5;
    var5 = function i18n_ptBR() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 21;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_ptBR'] = var5;
    var5 = function i18n_ro() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 22;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_ro'] = var5;
    var5 = function i18n_ru() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 23;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_ru'] = var5;
    var5 = function i18n_svSE() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 24;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_svSE'] = var5;
    var5 = function i18n_th() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 25;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_th'] = var5;
    var5 = function i18n_tr() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 26;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_tr'] = var5;
    var5 = function i18n_uk() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 27;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_uk'] = var5;
    var5 = function i18n_vi() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 28;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_vi'] = var5;
    var5 = function i18n_zhCN() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 29;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_zhCN'] = var5;
    var5 = function i18n_zhTW() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 30;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_zhTW'] = var5;
    var5 = function i18n_hi() {
        var3 = _closure1_slot7;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 31;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['i18n_hi'] = var5;
    var5 = {};
    var _closure1_slot6 = var5;
    var5 = 34;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/asset_json/native/AssetJsonUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['jsonAssets'] = var4;
    var3['loadJsonAsset'] = var2;
    return var1;
})();