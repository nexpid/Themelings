// app/modules/video_backgrounds/VideoFilterImageError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = {};
    var7 = 'BINARY_TYPE_MAX_SIZE';
    var4['ASSET_SIZE'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'asset';
    var4['ASSET'] = var7;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.V8APIError;
    var2 = function(arg1) {
        var3 = function VideoFilterImageError(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var4, var3);
                var11 = new Array(3);
                var1 = arg1;
                var11[0] = var1;
                var1 = arg2;
                var11[1] = var1;
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 5;
                var5 = var1[var7];
                var5 = var9.bind(var6)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var1 = var1[var7];
                var1 = var9.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.Mt8yDA;
                var1 = var5.bind(var8)(var1);
                var11[2] = var1;
                var1 = _closure1_slot5;
                var10 = var1.bind(var6)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 141; continue _fun0002 }
 128:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var11);
                _fun0002_ip = 175; continue _fun0002;
 141:
                var5 = global;
                var9 = var5.Reflect;
                var8 = var9.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var6)(var4);
                var5 = var5.constructor;
                var1 = var8.bind(var9)(var10, var11, var5);
 175:
                var1 = var3.bind(var6)(var4, var1);
                var4 = var1.getFieldErrors;
                var3 = _closure1_slot8;
                var3 = var3.ASSET;
                var8 = var4.bind(var1)(var3);
                var5 = null;
                var3 = var5 != var8;
                if(!var3) { _fun0002_ip = 245; continue _fun0002 }
 211:
                var4 = 0;
                var4 = var8[var4];
                var8 = var5 == var4;
                var5 = undefined;
                if(var8) { _fun0002_ip = 231; continue _fun0002 }
 226:
                var5 = var4.code;
 231:
                var4 = _closure1_slot7;
                var4 = var4.ASSET_SIZE;
                var3 = var5 === var4;
 245:
                if(!var3) { _fun0002_ip = 308; continue _fun0002 }
 248:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var7];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var2[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.mrlScX;
                var2 = var3.bind(var4)(var2);
                var1['message'] = var2;
 308:
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_backgrounds/VideoFilterImageError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();