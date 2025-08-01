// app/modules/pomelo/PomeloManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PomeloEntrypoints;
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function PomeloManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.onPostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var1['actions'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var6 = var3.experiment;
                        var5 = var6.getCurrentConfig;
                        var4 = {};
                        var3 = 'b9eb97_1';
                        var4['location'] = var3;
                        var3 = {};
                        var7 = false;
                        var3['autoTrackExposure'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var4 = var3.enabled;
                        var3 = false;
                        if(!var4) { _fun0003_ip = 214; continue _fun0003 }
 77:
                        var5 = _closure1_slot7;
                        var4 = var5.getCurrentUser;
                        var6 = var4.bind(var5)();
                        var4 = null;
                        var5 = var4 == var6;
                        var3 = false;
                        if(var5) { _fun0003_ip = 214; continue _fun0003 }
 101:
                        var5 = var6.hasUniqueUsername;
                        var5 = var5.bind(var6)();
                        var3 = false;
                        if(var5) { _fun0003_ip = 214; continue _fun0003 }
 116:
                        var5 = var6.hasVerifiedEmailOrPhone;
                        var5 = var5.bind(var6)();
                        var3 = false;
                        if(!var5) { _fun0003_ip = 214; continue _fun0003 }
 131:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var5 = 7;
                        var5 = var8[var5];
                        var5 = var6.bind(var1)(var5);
                        var8 = var5.Storage;
                        var6 = var8.get;
                        var5 = 'lastSawPomelo';
                        var6 = var6.bind(var8)(var5);
                        var4 = var4 != var6;
                        if(!var4) { _fun0003_ip = 211; continue _fun0003 }
 180:
                        var5 = global;
                        var8 = var5.Date;
                        var5 = var8.now;
                        var5 = var5.bind(var8)();
                        var6 = var5 - var6;
                        var5 = 604800000;
                        var4 = var6 < var5;
 211:
                        var3 = !var4;
 214:
                        if(!var3) { _fun0003_ip = 325; continue _fun0003 }
 217:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 9;
                        var3 = var5[var3];
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openPomeloModal;
                        var3 = _closure1_slot8;
                        var4 = var3.APP_START;
                        var3 = true;
                        var3 = var5.bind(var6)(var4, var3, var7);
                        if(!var3) { _fun0003_ip = 325; continue _fun0003 }
 265:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 7;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var5 = var2.Storage;
                        var4 = var5.set;
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var3 = var2.bind(var3)();
                        var2 = 'lastSawPomelo';
                        var2 = var4.bind(var5)(var2, var3);
 325:
                        return var1;
                    }
                };
                var1['onPostConnectionOpen'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/PomeloManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();