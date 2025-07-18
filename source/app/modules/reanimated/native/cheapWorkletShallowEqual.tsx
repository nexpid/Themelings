// app/modules/reanimated/native/cheapWorkletShallowEqual.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = {};
    var4 = 'function cheapWorkletShallowEqual_cheapWorkletShallowEqualTsx1(a,b){if(a===b)return true;if(a==null||b==null)return false;for(const key in a){if(a[key]!==b[key])return false;}return true;}';
    var1['code'] = var4;
    var _closure1_slot0 = var1;
    var4 = function() {
        var1 = function cheapWorkletShallowEqual(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var9 = arg1;
                var8 = arg2;
                if(!(var9 !== var8)) { _fun0001_ip = 67; continue _fun0001 }
 10:
                var1 = null;
                if(!(var1 != var9)) { _fun0001_ip = 63; continue _fun0001 }
 16:
                if(!(var1 != var8)) { _fun0001_ip = 63; continue _fun0001 }
 20:
                var6 = var9;
                for(var3 in var6)
 31:
                {
 40:
                    var1 = var3;
                    var2 = var9[var1];
                    var1 = var8[var1];
                    if(var2 === var1) { _fun0001_ip = 31; continue _fun0001 }
 55:
                    var1 = false;
                    return var1;
                }
 59:
                var1 = true;
                return var1;
 63:
                var1 = false;
                return var1;
 67:
                var1 = true;
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 760221372005.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot0;
        var1['__initData'] = var2;
        return var1;
    };
    var1 = undefined;
    var4 = var4.bind(var1)();
    var5 = {};
    var6 = 'function cheapWorkletArrayShallowEqual_cheapWorkletShallowEqualTsx2(a,b){if(a===b)return true;if(a==null||b==null)return false;if(a.length!==b.length)return false;for(let i=0;i<a.length;i++){if(a[i]!==b[i])return false;}return true;}';
    var5['code'] = var6;
    var _closure1_slot1 = var5;
    var2 = function() {
        var1 = function cheapWorkletArrayShallowEqual(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                if(!(var4 !== var3)) { _fun0002_ip = 88; continue _fun0002 }
 10:
                var1 = null;
                if(!(var1 != var4)) { _fun0002_ip = 84; continue _fun0002 }
 16:
                if(!(var1 != var3)) { _fun0002_ip = 84; continue _fun0002 }
 20:
                var2 = var4.length;
                var1 = var3.length;
                if(!(var2 === var1)) { _fun0002_ip = 80; continue _fun0002 }
 34:
                var1 = var4.length;
                var2 = 0;
                var1 = var2 < var1;
                if(!var1) { _fun0002_ip = 72; continue _fun0002 }
 48:
                var5 = var4[var2];
                var1 = var3[var2];
                if(!(var5 === var1)) { _fun0002_ip = 76; continue _fun0002 }
 60:
                var2 = var2 + 1;
                var1 = var4.length;
                if(var2 < var1) { _fun0002_ip = 48; continue _fun0002 }
 72:
                var1 = true;
                return var1;
 76:
                var1 = false;
                return var1;
 80:
                var1 = false;
                return var1;
 84:
                var1 = false;
                return var1;
 88:
                var1 = true;
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 3679738010781.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot1;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = native7;
    var5 = 0;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/reanimated/native/cheapWorkletShallowEqual.tsx';
    var5 = var6.bind(var7)(var5);
    var3['cheapWorkletShallowEqual'] = var4;
    var3['cheapWorkletArrayShallowEqual'] = var2;
    return var1;
})();