// app/modules/collectibles/records/CollectiblesPurchaseRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesVariantProductRecord;
    var2 = function(arg1) {
        var5 = function CollectiblesPurchaseRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var10 = new Array(1);
                var10[0] = var2;
                var1 = _closure1_slot3;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 73; continue _fun0002 }
 60:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 107; continue _fun0002;
 73:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 107:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.purchasedAt;
                var1['purchasedAt'] = var3;
                var3 = var2.purchaseType;
                var1['purchaseType'] = var3;
                var2 = var2.expiresAt;
                var1['expiresAt'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot5;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var7 = arg1;
                var13 = this;
                var8 = var7.purchased_at;
                var5 = var7.purchase_type;
                var6 = var7.expires_at;
                var3 = {'purchased_at': 0, 'purchase_type': 0, 'expires_at': 0};
                var4 = null;
                var16 = var3;
                var15 = null;
                var1 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var7;
                var14 = var3;
                var10 = copyDataProperties(var16, var15, var14);
                var3 = _closure2_slot0;
                var1 = {};
                var _closure3_slot0 = var13;
                var12 = _closure1_slot4;
                var7 = _closure1_slot3;
                var9 = undefined;
                var11 = var7.bind(var9)(var3);
                var7 = 'fromServer';
                var7 = var12.bind(var9)(var11, var7, var13);
                var _closure3_slot1 = var7;
                var12 = 'function';
                var11 = typeof var7;
                if(!(var12 === var11)) { _fun0003_ip = 125; continue _fun0003 }
 120:
                var7 = function(arg1) {
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
 125:
                var2 = new Array(1);
                var2[0] = var10;
                var15 = var7.bind(var9)(var2);
                var16 = var1;
                var2 = copyDataProperties(var16, var15);
                var2 = 'purchaseType';
                var1[var2] = var5;
                var5 = var8;
                if(!(var4 != var5)) { _fun0003_ip = 192; continue _fun0003 }
 161:
                var2 = global;
                var2 = var2.Date;
                var7 = var2.prototype;
                var7 = Object.create(var7, {constructor: {value: var2}});
                var17 = var7;
                var16 = var8;
                var2 = new var17[var2](var16, var15);
                var5 = var2 instanceof Object ? var2 : var7;
 192:
                var2 = 'purchasedAt';
                var1[var2] = var5;
                var2 = var4 != var6;
                var4 = null;
                if(!var2) { _fun0003_ip = 241; continue _fun0003 }
 210:
                var2 = global;
                var2 = var2.Date;
                var5 = var2.prototype;
                var5 = Object.create(var5, {constructor: {value: var2}});
                var17 = var5;
                var16 = var6;
                var2 = new var17[var2](var16, var15);
                var4 = var2 instanceof Object ? var2 : var5;
 241:
                var2 = 'expiresAt';
                var1[var2] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var17 = var2;
                var16 = var1;
                var1 = new var17[var3](var16, var15);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/records/CollectiblesPurchaseRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();