// app/modules/collectibles/records/ProfileFrameRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var7[var4];
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var5 = function ProfileFrameRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var1 = _closure1_slot2;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var11 = new Array(1);
                var11[0] = var2;
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.PROFILE_FRAME;
                var1['type'] = var4;
                var4 = var2.label;
                var1['label'] = var4;
                var4 = var2.layers;
                var1['layers'] = var4;
                var6 = var2.innerWidth;
                var4 = null;
                if(!(var4 == var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 8;
                var7 = var9[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.DefaultProfileFrameDimensions;
                var6 = var7.INNER_WIDTH;
case 9:
                var1['innerWidth'] = var6;
                var6 = var2.overflowTop;
                if(!(var4 == var6)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 8;
                var7 = var9[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.DefaultProfileFrameDimensions;
                var6 = var7.OVERFLOW_TOP;
case 11:
                var1['overflowTop'] = var6;
                var6 = var2.overflowBottom;
                if(!(var4 == var6)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 8;
                var7 = var9[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.DefaultProfileFrameDimensions;
                var6 = var7.OVERFLOW_BOTTOM;
case 13:
                var1['overflowBottom'] = var6;
                var2 = var2.overflowHorizontal;
                if(!(var4 == var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.DefaultProfileFrameDimensions;
                var2 = var3.OVERFLOW_HORIZONTAL;
case 15:
                var1['overflowHorizontal'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var1 = {};
        var6 = 'fromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var13 = this;
                var7 = var3.inner_width;
                var6 = var3.overflow_top;
                var5 = var3.overflow_bottom;
                var4 = var3.overflow_horizontal;
                var2 = {'inner_width': 0, 'overflow_top': 0, 'overflow_bottom': 0, 'overflow_horizontal': 0};
                var15 = null;
                var16 = var2;
                var1 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var3;
                var14 = var2;
                var2 = copyDataProperties(var16, var15, var14);
                var3 = _closure2_slot0;
                var1 = {};
                var _closure3_slot0 = var13;
                var12 = _closure1_slot6;
                var9 = _closure1_slot5;
                var10 = undefined;
                var11 = var9.bind(var10)(var3);
                var9 = 'fromServer';
                var9 = var12.bind(var10)(var11, var9, var13);
                var _closure3_slot1 = var9;
                var12 = 'function';
                var11 = typeof var9;
                if(!(var12 === var11)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var9 = function(arg1) {
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
case 17:
                var8 = new Array(1);
                var8[0] = var2;
                var15 = var9.bind(var10)(var8);
                var16 = var1;
                var8 = copyDataProperties(var16, var15);
                var16 = var1;
                var15 = var2;
                var2 = copyDataProperties(var16, var15);
                var2 = 'innerWidth';
                var1[1] = var7;
                var2 = 'overflowTop';
                var1[1] = var6;
                var2 = 'overflowBottom';
                var1[1] = var5;
                var2 = 'overflowHorizontal';
                var1[1] = var4;
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
    var4 = var4.bind(var1)(var5);
    var _closure1_slot8 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/records/ProfileFrameRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function(arg1) {
        var2 = _closure1_slot8;
        var1 = arg1;
        var1 = var1 instanceof var2;
        return var1;
    };
    var3['isProfileFrameRecord'] = var2;
    return var1;
})();