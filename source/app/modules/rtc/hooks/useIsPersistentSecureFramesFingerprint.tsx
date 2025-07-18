// app/modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsPersistentSecureFramesFingerprint(arg1) {
        var2 = arg1;
        var8 = var2.userId;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 5;
        var2 = var5[var2];
        var6 = undefined;
        var7 = var4.bind(var6)(var2);
        var5 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getSecureFramesRosterMapEntry;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10 = var5.bind(var7)(var4, var2);
        var _closure2_slot1 = var10;
        var7 = _closure1_slot4;
        var4 = var7.useState;
        var2 = true;
        var2 = var4.bind(var7)(var2);
        var12 = _closure1_slot3;
        var11 = 2;
        var3 = var12.bind(var6)(var2, var11);
        var2 = 0;
        var4 = var3[var2];
        var9 = 1;
        var3 = var3[var9];
        var _closure2_slot2 = var3;
        var3 = var7.useState;
        var13 = false;
        var3 = var3.bind(var7)(var13);
        var5 = var12.bind(var6)(var3, var11);
        var3 = var5[var2];
        var5 = var5[var9];
        var _closure2_slot3 = var5;
        var5 = var7.useState;
        var5 = var5.bind(var7)(var13);
        var5 = var12.bind(var6)(var5, var11);
        var2 = var5[var2];
        var5 = var5[var9];
        var _closure2_slot4 = var5;
        var9 = var7.useCallback;
        var5 = function() {
            var4 = _closure1_slot2;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 229; continue _fun0001 }
 10:
                        var8 = arg1;
                        var7 = arg2;
                        var5 = undefined;
                        var4 = undefined;
                        var6 = undefined;
                        var9 = _closure2_slot2;
                        var2 = true;
                        var2 = var9.bind(var5)(var2);
 36: // try_start_0 // try_start_1
                        var12 = _closure1_slot6;
                        var4 = var12;
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var11 = 6;
                        var2 = var2[var11];
                        var10 = var10.bind(var5)(var2);
                        var2 = var10.isCurrentUserPublicKeyMatch;
                        var2 = var2.bind(var10)(var12);
                        SaveGenerator(address=81);
 79:
                        return var2;
 81:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                        if(var10) { _fun0001_ip = 164; continue _fun0001 }
 87:
                        var6 = var2;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var9 = var9[var11];
                        var10 = var10.bind(var5)(var9);
                        var9 = var10.isPublicKeyMatch;
                        var4 = var9.bind(var10)(var8, var7, var4);
                        SaveGenerator(address=124);
 122:
                        return var4;
 124:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0001_ip = 150; continue _fun0001 }
 130:
                        var7 = _closure2_slot3;
                        var6 = var7.bind(var5)(var6);
                        var6 = _closure2_slot4;
                        var6 = var6.bind(var5)(var4);
 148: // try_end0
                        _fun0001_ip = 200; continue _fun0001;
 150: // try_end1
                        var7 = _closure2_slot2;
                        var6 = false;
                        var6 = var7.bind(var5)(var6);
                        return var4;
 164:
                        var6 = _closure2_slot2;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 178: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var2 = _closure2_slot3;
                        var4 = false;
                        var2 = var2.bind(var5)(var4);
                        var2 = _closure2_slot4;
                        var2 = var2.bind(var5)(var4);
 200: // try_end2
                        var4 = _closure2_slot2;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
 214: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot2;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 229:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var6 = var5.bind(var6)();
        var5 = new Array(0);
        var9 = var9.bind(var7)(var6, var5);
        var _closure2_slot5 = var9;
        var6 = var7.useEffect;
        var5 = new Array(3);
        var5[0] = var10;
        var5[1] = var9;
        var5[2] = var8;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 35; continue _fun0002 }
 13:
                var5 = _closure2_slot5;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                _fun0002_ip = 66; continue _fun0002;
 35:
                var4 = _closure2_slot3;
                var3 = undefined;
                var2 = false;
                var4 = var4.bind(var3)(var2);
                var4 = _closure2_slot4;
                var4 = var4.bind(var3)(var2);
                var1 = _closure2_slot2;
                var1 = var1.bind(var3)(var2);
 66:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['loading'] = var4;
        var1['isCurrentUserKeyPersistent'] = var3;
        var1['isOtherUserKeyPersistent'] = var2;
        return var1;
    };
    var3['useIsPersistentSecureFramesFingerprint'] = var2;
    return var1;
})();