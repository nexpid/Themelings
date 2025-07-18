// app/modules/calls/native/usePrivateChannelCall.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/native/usePrivateChannelCall.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePrivateChannelCall(arg1, arg2, arg3) {
        var8 = arg1;
        var7 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var1 = var5[var1];
        var9 = undefined;
        var11 = var4.bind(var9)(var1);
        var10 = var11.useStateFromStoresObject;
        var1 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var1;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var8;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = _closure1_slot5;
                var4 = var5.getChannel;
                var6 = var5.getDMFromUserId;
                var1 = _closure2_slot0;
                var1 = var6.bind(var5)(var1);
                var6 = var4.bind(var5)(var1);
                var1 = null;
                if(!(var1 != var6)) { _fun0001_ip = 121; continue _fun0001 }
 41:
                var1 = var6.isPrivate;
                var1 = var1.bind(var6)();
                if(!var1) { _fun0001_ip = 121; continue _fun0001 }
 54:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = _closure2_slot1;
                var4 = var4.bind(var5)(var6, var1);
                var1 = {};
                var5 = var4.text;
                var1['text'] = var5;
                var5 = var4.accessibilityHint;
                var1['accessibilityHint'] = var5;
                var4 = var4.inCall;
                var1['inCall'] = var4;
                return var1;
 121:
                var1 = {};
                var4 = _closure2_slot1;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 4;
                var6 = var5[var8];
                var7 = undefined;
                var6 = var10.bind(var7)(var6);
                var9 = var6.intl;
                var6 = var9.string;
                var5 = var5[var8];
                var5 = var10.bind(var7)(var5);
                var5 = var5.t;
                if(var4) { _fun0001_ip = 189; continue _fun0001 }
 176:
                var4 = var5.EZgS+/;
                var4 = var6.bind(var9)(var4);
                _fun0001_ip = 200; continue _fun0001;
 189:
                var5 = var5.7AWk5+;
                var4 = var6.bind(var9)(var5);
 200:
                var1['text'] = var4;
                var2 = _closure2_slot1;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = var3[var8];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                if(var2) { _fun0001_ip = 265; continue _fun0001 }
 252:
                var2 = var3.focH1t;
                var2 = var4.bind(var5)(var2);
                _fun0001_ip = 276; continue _fun0001;
 265:
                var3 = var3.oCqlGB;
                var2 = var4.bind(var5)(var3);
 276:
                var1['accessibilityHint'] = var2;
                var2 = false;
                var1['inCall'] = var2;
                return var1;
            }
        };
        var5 = var10.bind(var11)(var5, var1, var4);
        var10 = var5.text;
        var4 = var5.accessibilityHint;
        var1 = {};
        var1['text'] = var10;
        var5 = var5.inCall;
        var1['inCall'] = var5;
        var1['accessibilityHint'] = var4;
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var3 = _closure1_slot3;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 199; continue _fun0002 }
 10:
                    var6 = _closure1_slot5;
                    var5 = var6.getChannel;
                    var7 = var6.getDMFromUserId;
                    var2 = _closure2_slot0;
                    var2 = var7.bind(var6)(var2);
                    var8 = var5.bind(var6)(var2);
                    var5 = null;
                    if(!(var5 == var8)) { _fun0002_ip = 112; continue _fun0002 }
 51:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 6;
                    var6 = var6[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.ensurePrivateChannel;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=92);
 90:
                    return var2;
 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 196; continue _fun0002 }
 98:
                    var7 = _closure1_slot5;
                    var6 = var7.getChannel;
                    var8 = var6.bind(var7)(var2);
 112:
                    var6 = var5 != var8;
                    if(!var6) { _fun0002_ip = 129; continue _fun0002 }
 119:
                    var7 = var8.isPrivate;
                    var6 = var7.bind(var8)();
 129:
                    if(!var6) { _fun0002_ip = 173; continue _fun0002 }
 132:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var4);
                    var4 = _closure2_slot1;
                    var6 = var6.bind(var7)(var8, var4);
                    var4 = var6.onPress;
                    var4 = var4.bind(var6)();
 173:
                    var4 = _closure2_slot2;
                    if(!(var5 != var4)) { _fun0002_ip = 191; continue _fun0002 }
 181:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
 191:
                    var3 = undefined;
                    return var3;
 196:
                    return var2;
 199:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var9)(var2);
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var1['handlePress'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();