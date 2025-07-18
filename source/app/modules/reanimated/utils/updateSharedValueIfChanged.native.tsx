// app/modules/reanimated/utils/updateSharedValueIfChanged.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var5 = {};
    var1 = 'function updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1(sharedValue,value){const updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}';
    var5['code'] = var1;
    var8 = {};
    var1 = 'function updateSharedValueIfChangedNativeTsx2(sharedValue,value){const{runOnUI,updateSharedValueIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}';
    var8['code'] = var1;
    var4 = function u(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = arg2;
            var2 = global;
            var2 = var2._WORKLET;
            if(var2) { _fun0001_ip = 64; continue _fun0001 }
 17:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 0;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.runOnUI;
            var2 = _closure1_slot2;
            var2 = var5.bind(var6)(var2);
            var2 = var2.bind(var4)(var3, var1);
            _fun0001_ip = 140; continue _fun0001;
 64:
            var2 = var3.get;
            var10 = var2.bind(var3)();
            var2 = {};
            var12 = var2;
            var11 = var10;
            var4 = copyDataProperties(var12, var11);
            var12 = var2;
            var11 = var1;
            var1 = copyDataProperties(var12, var11);
            var8 = var2;
            for(var5 in var8)
 106:
            {
 115:
                var1 = var5;
                var4 = var10[var1];
                var1 = var2[var1];
                if(var4 === var1) { _fun0001_ip = 106; continue _fun0001 }
 130:
                var1 = var3.set;
                var1 = var1.bind(var3)(var2);
            }
 140:
            var1 = undefined;
            return var1;
        }
    };
    var10 = {};
    var9 = 0;
    var11 = var7[var9];
    var1 = undefined;
    var11 = var6.bind(var1)(var11);
    var11 = var11.runOnUI;
    var10['runOnUI'] = var11;
    var10['updateSharedValueIfChanged'] = var1;
    var4['__closure'] = var10;
    var10 = 6367316923455.0;
    var4['__workletHash'] = var10;
    var4['__initData'] = var8;
    var _closure1_slot2 = var4;
    var8 = {};
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.runOnUI;
    var8['runOnUI'] = var9;
    var4['__closure'] = var8;
    var8 = 13662114226774.0;
    var4['__workletHash'] = var8;
    var4['__initData'] = var5;
    var5 = {};
    var8 = 'function updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3(sharedValue,value){const updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}';
    var5['code'] = var8;
    var _closure1_slot3 = var5;
    var5 = {};
    var8 = 'function updateSharedValueIfChangedNativeTsx4(sharedValue,value){const{runOnUI,updateSharedValueArrayIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}';
    var5['code'] = var8;
    var _closure1_slot4 = var5;
    var2 = function() {
        var1 = function u(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var1 = global;
                var1 = var1._WORKLET;
                if(var1) { _fun0002_ip = 67; continue _fun0002 }
 17:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var1 = var2[var1];
                var2 = undefined;
                var6 = var3.bind(var2)(var1);
                var3 = var6.runOnUI;
                var1 = _closure2_slot0;
                var1 = var3.bind(var6)(var1);
                var1 = var1.bind(var2)(var5, var4);
                _fun0002_ip = 148; continue _fun0002;
 67:
                var1 = var5.get;
                var3 = var1.bind(var5)();
                var2 = var3.length;
                var1 = var4.length;
                if(!(var2 !== var1)) { _fun0002_ip = 100; continue _fun0002 }
 90:
                var1 = var5.set;
                var1 = var1.bind(var5)(var4);
 100:
                var1 = var4.length;
                var2 = 0;
                var1 = var2 < var1;
                if(!var1) { _fun0002_ip = 148; continue _fun0002 }
 114:
                var6 = var3[var2];
                var1 = var4[var2];
                if(!(var6 !== var1)) { _fun0002_ip = 136; continue _fun0002 }
 126:
                var1 = var5.set;
                var1 = var1.bind(var5)(var4);
 136:
                var2 = var2 + 1;
                var1 = var4.length;
                if(var2 < var1) { _fun0002_ip = 114; continue _fun0002 }
 148:
                var1 = undefined;
                return var1;
            }
        };
        var8 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 0;
        var9 = var7[var4];
        var5 = undefined;
        var9 = var6.bind(var5)(var9);
        var9 = var9.runOnUI;
        var8['runOnUI'] = var9;
        var8['updateSharedValueArrayIfChanged'] = var5;
        var1['__closure'] = var8;
        var8 = 10682766507787.0;
        var1['__workletHash'] = var8;
        var8 = _closure1_slot4;
        var1['__initData'] = var8;
        var _closure2_slot0 = var1;
        var3 = {};
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.runOnUI;
        var3['runOnUI'] = var4;
        var1['__closure'] = var3;
        var3 = 13887777879519.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot3;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/reanimated/utils/updateSharedValueIfChanged.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['updateSharedValueArrayIfChanged'] = var2;
    return var1;
})();