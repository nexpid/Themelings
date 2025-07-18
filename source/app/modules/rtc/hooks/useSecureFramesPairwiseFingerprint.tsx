// app/modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Features;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSecureFramesPairwiseFingerprint(arg1) {
        var2 = arg1;
        var2 = var2.userId;
        var _closure2_slot0 = var2;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var10 = 8;
        var4 = var13[var10];
        var9 = undefined;
        var7 = var12.bind(var9)(var4);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var11 = var6.bind(var7)(var5, var4);
        var _closure2_slot1 = var11;
        var5 = _closure1_slot1;
        var4 = 9;
        var4 = var13[var4];
        var6 = var5.bind(var9)(var4);
        var5 = var11 !== var2;
        var4 = '[useSecureFramesPairwiseFingerprint] Should not pass current user id.';
        var4 = var6.bind(var9)(var5, var4);
        var4 = _closure1_slot5;
        var5 = var4.useState;
        var8 = null;
        var5 = var5.bind(var4)(var8);
        var16 = _closure1_slot4;
        var15 = 2;
        var5 = var16.bind(var9)(var5, var15);
        var6 = 0;
        var7 = var5[var6];
        var _closure2_slot2 = var7;
        var14 = 1;
        var5 = var5[var14];
        var _closure2_slot3 = var5;
        var17 = var4.useState;
        var5 = false;
        var5 = var17.bind(var4)(var5);
        var5 = var16.bind(var9)(var5, var15);
        var6 = var5[var6];
        var _closure2_slot4 = var6;
        var5 = var5[var14];
        var _closure2_slot5 = var5;
        var5 = var13[var10];
        var16 = var12.bind(var9)(var5);
        var15 = var16.useStateFromStores;
        var3 = _closure1_slot8;
        var14 = new Array(1);
        var14[0] = var3;
        var5 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getSecureFramesRosterMapEntry;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var15.bind(var16)(var14, var5);
        var _closure2_slot6 = var5;
        var10 = var13[var10];
        var13 = var12.bind(var9)(var10);
        var12 = var13.useStateFromStores;
        var10 = new Array(1);
        var10[0] = var3;
        var3 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getSecureFramesRosterMapEntry;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10 = var12.bind(var13)(var10, var3);
        var _closure2_slot7 = var10;
        var13 = var4.useCallback;
        var12 = function(arg1) {
            var4 = _closure2_slot3;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.fromByteArray;
            var3 = arg1;
            var3 = var5.bind(var6)(var3);
            var3 = var4.bind(var1)(var3);
            var3 = _closure2_slot5;
            var2 = false;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var13 = var13.bind(var4)(var12, var3);
        var _closure2_slot8 = var13;
        var12 = var4.useCallback;
        var3 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3, arg4) {
                var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        var6 = arg3;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 231; continue _fun0001 }
 13:
                        var5 = _closure1_slot7;
                        var4 = var5.supports;
                        var3 = _closure1_slot10;
                        var3 = var3.MLS_PAIRWISE_FINGERPRINTS;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0001_ip = 182; continue _fun0001 }
 47:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 11;
                        var3 = var5[var3];
                        var5 = undefined;
                        var10 = var4.bind(var5)(var3);
                        var9 = var10.generatePairwiseFingerprint;
                        var8 = _closure1_slot9;
                        var3 = global;
                        var11 = var3.Uint8Array;
                        var4 = var11.prototype;
                        var7 = Object.create(var4, {constructor: {value: var11}});
                        var16 = arg2;
                        var17 = var7;
                        var4 = new var17[var11](var16, var15);
                        var15 = var4 instanceof Object ? var4 : var7;
                        var11 = var3.Uint8Array;
                        var3 = var11.prototype;
                        var4 = Object.create(var3, {constructor: {value: var11}});
                        var16 = arg4;
                        var17 = var4;
                        var3 = new var17[var11](var16, var15);
                        var13 = var3 instanceof Object ? var3 : var4;
                        var14 = arg1;
                        var17 = var10;
                        var16 = var8;
                        var12 = var6;
                        var3 = var17[var9](var16, var15, var14, var13, var12, var11);
                        SaveGenerator(address=159);
 157:
                        return var3;
 159:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 179; continue _fun0001 }
 165:
                        var4 = _closure2_slot8;
                        var4 = var4.bind(var5)(var3);
                        _fun0001_ip = 226; continue _fun0001;
 179:
                        return var3;
 182:
                        var4 = _closure1_slot8;
                        var3 = var4.getRTCConnection;
                        var5 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var5)) { _fun0001_ip = 226; continue _fun0001 }
 202:
                        var4 = var5.getMLSPairwiseFingerprint;
                        var3 = _closure1_slot9;
                        var2 = function(arg1) {
                            var3 = _closure2_slot8;
                            var1 = global;
                            var4 = var1.Uint8Array;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = arg1;
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var3, var6, var2);
 226:
                        var2 = undefined;
                        return var2;
 231:
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
        var9 = var3.bind(var9)();
        var3 = new Array(1);
        var3[0] = var13;
        var9 = var12.bind(var4)(var9, var3);
        var _closure2_slot9 = var9;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var8);
        var _closure2_slot10 = var3;
        var8 = var4.useEffect;
        var3 = new Array(5);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var2;
        var3[4] = var5;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot6;
                var5 = null;
                var3 = var5 != var3;
                if(!var3) { _fun0002_ip = 26; continue _fun0002 }
 18:
                var4 = _closure2_slot7;
                var3 = var5 != var4;
 26:
                if(!var3) { _fun0002_ip = 42; continue _fun0002 }
 29:
                var4 = _closure2_slot10;
                var4 = var4.current;
                var3 = var5 == var4;
 42:
                if(!var3) { _fun0002_ip = 89; continue _fun0002 }
 45:
                var4 = _closure2_slot5;
                var7 = undefined;
                var3 = true;
                var3 = var4.bind(var7)(var3);
                var4 = _closure2_slot10;
                var3 = global;
                var6 = var3.setTimeout;
                var5 = function() {
                    var6 = _closure2_slot9;
                    var10 = _closure2_slot1;
                    var9 = _closure2_slot7;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot6;
                    var11 = undefined;
                    var1 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                };
                var3 = 0;
                var3 = var6.bind(var7)(var5, var3);
                var4['current'] = var3;
 89:
                var2 = _closure2_slot10;
                var2 = var2.current;
                var _closure3_slot0 = var2;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 32; continue _fun0003 }
 13:
                        var2 = global;
                        var3 = var2.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var2 = var8.bind(var4)(var2, var3);
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            var1 = {};
            var3 = _closure2_slot2;
            var1['fingerprint'] = var3;
            var3 = _closure2_slot6;
            var1['userKey'] = var3;
            var2 = _closure2_slot4;
            var1['loading'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSecureFramesPairwiseFingerprint'] = var2;
    return var1;
})();