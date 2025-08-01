// app/modules/game_detection/DetectableGameSupplementalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = var2.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot5 = var7;
    var7 = var2.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot6 = var7;
    var2 = var2.Set;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function DetectableGameSupplementalStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'canFetch';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var3 = _closure1_slot6;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                var1 = !var1;
                if(!var1) { _fun0003_ip = 43; continue _fun0003 }
 26:
                var5 = _closure1_slot7;
                var3 = var5.has;
                var3 = var3.bind(var5)(var4);
                var1 = !var3;
 43:
                if(!var1) { _fun0003_ip = 63; continue _fun0003 }
 46:
                var3 = _closure1_slot5;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
 63:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot6;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGame';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot5;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGames';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLocalizedName';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 36; continue _fun0004 }
 31:
                var1 = var2.name;
 36:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getThemes';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 37; continue _fun0005 }
 31:
                var1 = var2.themes;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCoverImageUrl';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg2;
                var4 = _closure1_slot5;
                var2 = var4.get;
                var1 = arg1;
                var1 = var2.bind(var4)(var1);
                var4 = null;
                var2 = var4 == var1;
                var9 = undefined;
                if(var2) { _fun0006_ip = 40; continue _fun0006 }
 34:
                var9 = var1.coverImageUrl;
 40:
                var2 = var4 == var9;
                var1 = null;
                if(var2) { _fun0006_ip = 105; continue _fun0006 }
 49:
                var2 = var9;
                if(!(var4 != var3)) { _fun0006_ip = 102; continue _fun0006 }
 56:
                var12 = var3.width;
                var10 = var3.height;
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var15 = '';
                var13 = '?width=';
                var11 = '&height=';
                var14 = var9;
                var2 = var15[var6](var14, var13, var12, var11, var10, var9);
 102:
                var1 = var2;
 105:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'DetectableGameSupplementalStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleLogout() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot5 = var3;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot6 = var3;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleFetch(arg1) {
        var1 = arg1;
        var3 = var1.applicationIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var4 = _closure1_slot6;
            var2 = var4.add;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot7;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['DETECTABLE_GAME_SUPPLEMENTAL_FETCH'] = var8;
    var8 = function handleFetchSuccess(arg1) {
        var2 = arg1;
        var5 = var2.applicationIds;
        var3 = var2.supplementalGameData;
        var4 = var5.forEach;
        var2 = function(arg1) {
            var3 = arg1;
            var4 = _closure1_slot6;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot7;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var4 = var1.application_id;
                var17 = var1.name;
                var16 = var1.summary;
                var14 = var1.websites;
                var13 = var1.themes;
                var12 = var1.genres;
                var11 = var1.platforms;
                var10 = var1.artwork_urls;
                var9 = var1.screenshot_urls;
                var8 = var1.cover_image_url;
                var6 = var1.first_release_date;
                var15 = var1.summary_localized;
                var7 = var1.publisher_names;
                var5 = var1.developer_names;
                var3 = _closure1_slot5;
                var2 = var3.set;
                var1 = {};
                var1['applicationId'] = var4;
                var1['name'] = var17;
                var1['summary'] = var16;
                var1['summaryLocalized'] = var15;
                var1['websites'] = var14;
                var1['themes'] = var13;
                var1['genres'] = var12;
                var1['platforms'] = var11;
                var1['artwork'] = var10;
                var1['screenshots'] = var9;
                var1['coverImageUrl'] = var8;
                var1['firstReleaseDate'] = var6;
                var6 = null;
                if(!(var6 == var7)) { _fun0007_ip = 190; continue _fun0007 }
 186:
                var7 = new Array(0);
 190:
                var1['publishers'] = var7;
                if(!(var6 == var5)) { _fun0007_ip = 203; continue _fun0007 }
 199:
                var5 = new Array(0);
 203:
                var1['developers'] = var5;
                var1 = var2.bind(var3)(var4, var1);
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS'] = var8;
    var4 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.applicationIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var4 = _closure1_slot6;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot7;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/DetectableGameSupplementalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();