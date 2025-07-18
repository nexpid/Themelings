// app/modules/frames/FramesStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FrameLayoutModes;
    var _closure1_slot7 = var2;
    var2 = null;
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function FramesStoreClass() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot9;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getConnectedFrame';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFrameLayoutMode';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure1_slot8;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 24; continue _fun0003 }
 18:
                var1 = var2.layoutMode;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFrameActive';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot8;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'FramesStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleFrameLaunch(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var4 = var2.bind(var1)(var5);
            var2 = null;
            if(!(var2 != var4)) { _fun0004_ip = 107; continue _fun0004 }
 44:
            var6 = _closure1_slot8;
            if(!(var2 != var6)) { _fun0004_ip = 56; continue _fun0004 }
 52:
            _closure1_slot8 = var2;
 56:
            var2 = {};
            var2['applicationId'] = var5;
            var2['url'] = var4;
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var2['connectedSince'] = var4;
            var4 = _closure1_slot7;
            var4 = var4.FOCUSED;
            var2['layoutMode'] = var4;
            _closure1_slot8 = var2;
 107:
            return var1;
        }
    };
    var2['FRAME_LAUNCH'] = var9;
    var9 = function handleFrameStop(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var6 = _closure1_slot8;
            var2 = null;
            var7 = var2 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0005_ip = 33; continue _fun0005 }
 28:
            var4 = var6.applicationId;
 33:
            if(!(var4 === var5)) { _fun0005_ip = 41; continue _fun0005 }
 37:
            _closure1_slot8 = var2;
 41:
            return var1;
        }
    };
    var2['FRAME_STOP'] = var9;
    var4 = function handleFrameUpdateLayoutMode(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var5 = var1.layoutMode;
            var6 = _closure1_slot8;
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            var2 = undefined;
            if(var7) { _fun0006_ip = 39; continue _fun0006 }
 34:
            var2 = var6.applicationId;
 39:
            if(!(var2 === var4)) { _fun0006_ip = 69; continue _fun0006 }
 43:
            var2 = {};
            var8 = _closure1_slot8;
            var9 = var2;
            var4 = copyDataProperties(var9, var8);
            var4 = 'layoutMode';
            var2[var4] = var5;
            _closure1_slot8 = var2;
 69:
            return var1;
        }
    };
    var2['FRAME_UPDATE_LAYOUT_MODE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/FramesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();