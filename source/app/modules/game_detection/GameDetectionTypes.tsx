// app/modules/game_detection/GameDetectionTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
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
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var12 = 0;
    var4 = var9[var12];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var11 = 1;
    var4 = var9[var11];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var10 = 2;
    var4 = var9[var10];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var9[var4];
    var6 = var5.bind(var1)(var4);
    var4 = 6;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.createExecutable;
    var _closure1_slot5 = var4;
    var5 = {};
    var5['LINKED'] = var11;
    var4 = 'LINKED';
    var5[var11] = var4;
    var5['OFFICIAL'] = var10;
    var4 = 'OFFICIAL';
    var5[var10] = var4;
    var4 = {};
    var7 = 'Erotic';
    var4['EROTIC'] = var7;
    var2 = function(arg1) {
        var4 = function GameRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var6 = this;
                var1 = _closure1_slot0;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var1 = _closure1_slot3;
                var11 = var1.bind(var5)(var4);
                var4 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 103:
                var1 = var4.bind(var5)(var6, var1);
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.name;
                var1['name'] = var4;
                var4 = var2.description;
                var1['description'] = var4;
                var4 = var2.icon;
                var1['icon'] = var4;
                var4 = var2.icon_hash;
                var1['icon_hash'] = var4;
                var4 = var2.aliases;
                if(var4) { _fun0002_ip = 178; continue _fun0002 }
 174:
                var4 = new Array(0);
 178:
                var1['aliases'] = var4;
                var4 = var2.cover_image_hash;
                var1['cover_image_hash'] = var4;
                var5 = var2.executables;
                var4 = null;
                if(!(var4 == var5)) { _fun0002_ip = 212; continue _fun0002 }
 208:
                var5 = new Array(0);
 212:
                var4 = var5.map;
                var3 = _closure1_slot5;
                var3 = var4.bind(var5)(var3);
                var1['executables'] = var3;
                var3 = var2.overlay;
                if(var3) { _fun0002_ip = 243; continue _fun0002 }
 241:
                var3 = false;
 243:
                var1['overlay'] = var3;
                var3 = var2.overlayWarn;
                if(var3) { _fun0002_ip = 260; continue _fun0002 }
 258:
                var3 = false;
 260:
                var1['overlayWarn'] = var3;
                var3 = var2.overlayCompatibilityHook;
                if(var3) { _fun0002_ip = 277; continue _fun0002 }
 275:
                var3 = false;
 277:
                var1['overlayCompatibilityHook'] = var3;
                var3 = var2.hook;
                if(var3) { _fun0002_ip = 294; continue _fun0002 }
 292:
                var3 = false;
 294:
                var1['hook'] = var3;
                var3 = var2.supportsOutOfProcessOverlay;
                if(var3) { _fun0002_ip = 311; continue _fun0002 }
 309:
                var3 = false;
 311:
                var1['supportsOutOfProcessOverlay'] = var3;
                var3 = var2.thirdPartySkus;
                if(var3) { _fun0002_ip = 330; continue _fun0002 }
 326:
                var3 = new Array(0);
 330:
                var1['thirdPartySkus'] = var3;
                var3 = var2.themes;
                if(var3) { _fun0002_ip = 349; continue _fun0002 }
 345:
                var3 = new Array(0);
 349:
                var1['themes'] = var3;
                var2 = var2.linkedApplications;
                var1['linkedApplications'] = var2;
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
        var1 = 'getIconURL';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.icon;
                var2 = null;
                var5 = var2 == var1;
                var1 = null;
                if(var5) { _fun0003_ip = 109; continue _fun0003 }
 22:
                var8 = var3.id;
                var7 = var3.icon;
                var2 = var2 != var4;
                var6 = '';
                if(!var2) { _fun0003_ip = 67; continue _fun0003 }
 43:
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '?size=';
                var6 = var3.bind(var2)(var4);
 67:
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var14 = 'https://cdn.discordapp.com/app-icons/';
                var12 = '/';
                var10 = '.png';
                var13 = var8;
                var11 = var7;
                var9 = var6;
                var1 = var14[var5](var13, var12, var11, var10, var9, var8);
 109:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasTheme';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.themes;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var2.bind(var1)(var6);
    var2 = {};
    var2['NONE'] = var12;
    var7 = 'NONE';
    var2[var12] = var7;
    var2['WINDOWED_ONLY'] = var11;
    var7 = 'WINDOWED_ONLY';
    var2[var11] = var7;
    var2['ALL'] = var10;
    var7 = 'ALL';
    var2[var10] = var7;
    var7 = 7;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/game_detection/GameDetectionTypes.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['GameLinkTypes'] = var5;
    var3['GameTheme'] = var4;
    var3['GameDetectionDebugLevel'] = var2;
    return var1;
})();