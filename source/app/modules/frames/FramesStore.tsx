// app/modules/frames/FramesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.FrameLayoutModes;
    var _closure1_slot7 = var8;
    var8 = null;
    var _closure1_slot8 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function FramesStoreClass() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFrameLayoutMode';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot8;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var2.layoutMode;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFrameActive';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isLaunchingFrame';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                if(!(var2 == var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = _closure1_slot9;
                var3 = var1.size;
                var1 = 0;
                var1 = var3 > var1;
                _fun0004_ip = 13; continue _fun0004;
case 11:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var2 = var2 != var3;
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var3;
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'FramesStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleFrameLaunchStart(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var3 = _closure1_slot9;
        var2 = var3.set;
        var1 = true;
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var2['FRAME_LAUNCH_START'] = var9;
    var9 = function handleFrameLaunch(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.applicationId;
            var4 = var1.proxyTicket;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var5 = var2.bind(var1)(var6);
            var2 = null;
            if(!(var2 == var5)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var8 = _closure1_slot9;
            var7 = var8.delete;
            var7 = var7.bind(var8)(var6);
            _fun0005_ip = 18; continue _fun0005;
case 16:
            var8 = _closure1_slot9;
            var7 = var8.delete;
            var7 = var7.bind(var8)(var6);
            var7 = _closure1_slot8;
            if(!(var2 != var7)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            _closure1_slot8 = var2;
case 19:
            var2 = {};
            var2['applicationId'] = var6;
            var2['url'] = var5;
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var2['connectedSince'] = var5;
            var5 = _closure1_slot7;
            var5 = var5.FOCUSED;
            var2['layoutMode'] = var5;
            var2['proxyTicket'] = var4;
            _closure1_slot8 = var2;
case 18:
            return var1;
        }
    };
    var2['FRAME_LAUNCH'] = var9;
    var9 = function handleFrameLaunchFail(arg1) {
        var1 = arg1;
        var3 = var1.applicationId;
        var2 = _closure1_slot9;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['FRAME_LAUNCH_FAIL'] = var9;
    var9 = function handleFrameStop(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var6 = _closure1_slot8;
            var2 = null;
            var7 = var2 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var4 = var6.applicationId;
case 21:
            if(!(var4 === var5)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            _closure1_slot8 = var2;
case 23:
            return var1;
        }
    };
    var2['FRAME_STOP'] = var9;
    var4 = function handleFrameUpdateLayoutMode(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var5 = var1.layoutMode;
            var6 = _closure1_slot8;
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            var2 = undefined;
            if(var7) { _fun0007_ip = 25; continue _fun0007 }
case 26:
            var2 = var6.applicationId;
case 25:
            if(!(var2 === var4)) { _fun0007_ip = 6; continue _fun0007 }
case 27:
            var2 = {};
            var8 = _closure1_slot8;
            var9 = var2;
            var4 = copyDataProperties(var9, var8);
            var4 = 'layoutMode';
            var2[var4] = var5;
            _closure1_slot8 = var2;
case 6:
            return var1;
        }
    };
    var2['FRAME_UPDATE_LAYOUT_MODE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
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