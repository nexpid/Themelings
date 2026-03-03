// app/modules/activities/native/EmbeddedActivityWebView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var10 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var10;
    var _closure1_slot3 = var8;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getSafeArea(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var9 = arg2;
            var6 = null;
            var1 = var9;
            if(!(var6 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var4.disable;
            var7 = 0;
            var2 = 0;
            if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 34:
            var3 = var4.override;
            if(!(var6 == var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = var4.offset;
            var3 = var9;
            if(!(var6 != var5)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var5 = global;
            var8 = var5.Math;
            var6 = var8.max;
            var5 = var4.offset;
            var5 = var9 + var5;
            var3 = var6.bind(var8)(var7, var5);
case 40:
            _fun0004_ip = 42; continue _fun0004;
case 38:
            var5 = global;
            var6 = var5.Math;
            var5 = var6.max;
            var4 = var4.override;
            var3 = var5.bind(var6)(var7, var4);
case 42:
            var2 = var3;
case 13:
            var1 = var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var4 = function BaseActivityWebView(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.hasFrameId;
            var _closure2_slot0 = var2;
            var2 = var1.getOrCreateFrameId;
            var _closure2_slot1 = var2;
            var34 = var1.releaseFrameId;
            var _closure2_slot2 = var34;
            var3 = var1.hasInvalidUrlError;
            var _closure2_slot3 = var3;
            var8 = var1.setHasInvalidUrlError;
            var _closure2_slot4 = var8;
            var22 = var1.hadInvalidUrlError;
            var _closure2_slot5 = var22;
            var29 = var1.deepLinkQueryParams;
            var7 = undefined;
            if(!(var29 === var7)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var29 = {};
case 43:
            var31 = var1.activityUrl;
            var13 = var1.applicationId;
            var _closure2_slot6 = var13;
            var38 = var1.queryParams;
            var9 = var1.onActivityCrash;
            var _closure2_slot7 = var9;
            var33 = var1.onLoadError;
            var _closure2_slot8 = var33;
            var20 = var1.allowPopups;
            var18 = var1.referrerPolicy;
            var _closure2_slot9 = var18;
            var32 = var1.isPipOrGridMode;
            var _closure2_slot10 = var32;
            var16 = var1.webViewKey;
            var _closure2_slot11 = var16;
            var11 = var1.ignoreSilentHardwareSwitch;
            if(!(var11 === var7)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var11 = true;
case 45:
            var14 = var1.safeAreasConfig;
            var _closure2_slot12 = var14;
            var37 = var1.channelId;
            var _closure2_slot13 = var37;
            var36 = var1.guildId;
            var _closure2_slot14 = var36;
            var35 = var1.activitySessionId;
            var _closure2_slot15 = var35;
            var _closure2_slot16 = var7;
            var _closure2_slot17 = var7;
            var _closure2_slot18 = var7;
            var _closure2_slot19 = var7;
            var _closure2_slot20 = var7;
            var _closure2_slot21 = var7;
            var _closure2_slot22 = var7;
            var _closure2_slot23 = var7;
            var _closure2_slot24 = var7;
            var _closure2_slot25 = var7;
            var _closure2_slot26 = var7;
            var _closure2_slot27 = var7;
            var _closure2_slot28 = var7;
            var _closure2_slot29 = var7;
            var _closure2_slot30 = var7;
            var _closure2_slot31 = var7;
            var _closure2_slot32 = var7;
            var _closure2_slot33 = var7;
            var _closure2_slot34 = var7;
            var _closure2_slot35 = var7;
            var _closure2_slot36 = var7;
            var1 = _closure1_slot14;
            var23 = var1.bind(var7)();
            var4 = _closure1_slot6;
            var2 = var4.useContext;
            var15 = _closure1_slot0;
            var27 = _closure1_slot3;
            var1 = 11;
            var1 = var27[var1];
            var1 = var15.bind(var7)(var1);
            var1 = var1.WebViewContext;
            var17 = var2.bind(var4)(var1);
            var4 = _closure1_slot6;
            var2 = var4.useState;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = _closure1_slot5;
            var10 = 1;
            var1 = var1.bind(var7)(var2, var10);
            var6 = 0;
            var4 = var1[var6];
            _closure2_slot16 = var4;
            var5 = _closure1_slot6;
            var2 = var5.useState;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var1 = var3.v4;
                    var1 = var1.bind(var3)();
                    _fun0006_ip = 49; continue _fun0006;
case 47:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = var3.bind(var2)();
case 49:
                    return var1;
                }
            };
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot5;
            var1 = var1.bind(var7)(var2, var10);
            var26 = var1[var6];
            _closure2_slot17 = var26;
            var5 = _closure1_slot6;
            var2 = var5.useState;
            var1 = null;
            var5 = var2.bind(var5)(var1);
            var2 = _closure1_slot5;
            var28 = 2;
            var2 = var2.bind(var7)(var5, var28);
            var5 = var2[var6];
            _closure2_slot18 = var5;
            var2 = var2[var10];
            _closure2_slot19 = var2;
            var24 = _closure1_slot6;
            var21 = var24.useMemo;
            var19 = new Array(1);
            var19[0] = var16;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0007_ip = 50; continue _fun0007 }
case 29:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 13;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getWebViewProxy;
                    var2 = _closure2_slot11;
                    var1 = var3.bind(var4)(var2);
case 50:
                    return var1;
                }
            };
            var30 = var21.bind(var24)(var2, var19);
            _closure2_slot20 = var30;
            var19 = _closure1_slot6;
            var2 = var19.useState;
            var19 = var2.bind(var19)(var1);
            var2 = _closure1_slot5;
            var19 = var2.bind(var7)(var19, var28);
            var2 = var19[var6];
            _closure2_slot21 = var2;
            var19 = var19[var10];
            _closure2_slot22 = var19;
            var24 = _closure1_slot6;
            var21 = var24.useEffect;
            var19 = new Array(3);
            var19[0] = var4;
            var19[1] = var26;
            var19[2] = var16;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot16;
                    if(!var1) { _fun0008_ip = 29; continue _fun0008 }
case 51:
                    var3 = _closure2_slot11;
                    var2 = null;
                    var1 = var2 != var3;
case 29:
                    if(var1) { _fun0008_ip = 52; continue _fun0008 }
case 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ComponentDispatch;
                    var3 = var4.dispatch;
                    var1 = _closure1_slot11;
                    var2 = var1.IFRAME_MOUNT;
                    var1 = {};
                    var5 = _closure2_slot17;
                    var1['id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var21.bind(var24)(var4, var19);
            var24 = _closure1_slot6;
            var21 = var24.useEffect;
            var19 = new Array(2);
            var19[0] = var16;
            var19[1] = var26;
            var4 = function() {
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot11;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0009_ip = 53; continue _fun0009 }
case 48:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.ComponentDispatch;
                        var3 = var4.dispatch;
                        var1 = _closure1_slot11;
                        var2 = var1.IFRAME_UNMOUNT;
                        var1 = {};
                        var5 = _closure2_slot17;
                        var1['id'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var21.bind(var24)(var4, var19);
            var19 = _closure1_slot1;
            var4 = 15;
            var4 = var27[var4];
            var4 = var19.bind(var7)(var4);
            var24 = var4.bind(var7)();
            _closure2_slot23 = var24;
            var21 = _closure1_slot2;
            var4 = 16;
            var4 = var27[var4];
            var21 = var21.bind(var7)(var4);
            var4 = var21.getConstants;
            var4 = var4.bind(var21)();
            var21 = {};
            var43 = var21;
            var42 = var38;
            var38 = copyDataProperties(var43, var42);
            var43 = var21;
            var42 = var29;
            var29 = copyDataProperties(var43, var42);
            var29 = 'frame_id';
            var21[var29] = var26;
            var29 = _closure1_slot9;
            var38 = var29.MOBILE;
            var29 = 'platform';
            var21[var29] = var38;
            var29 = var4.Version;
            var4 = 'mobile_app_version';
            var21[var4] = var29;
            var4 = 17;
            var4 = var27[var4];
            var19 = var19.bind(var7)(var4);
            var4 = {};
            var4['allowPopups'] = var20;
            var38 = var19.bind(var7)(var4);
            _closure2_slot24 = var38;
            var4 = global;
            var19 = var4.URLSearchParams;
            var20 = var19.prototype;
            var20 = Object.create(var20, {constructor: {value: var19}});
            var44 = var20;
            var43 = var21;
            var19 = new var44[var19](var43, var42);
            var29 = var19 instanceof Object ? var19 : var20;
            var19 = var4.HermesInternal;
            var20 = var19.concat;
            var21 = '';
            var19 = '?';
            var31 = var20.bind(var21)(var31, var19, var29);
            _closure2_slot25 = var31;
            var20 = _closure1_slot6;
            var19 = var20.useRef;
            var19 = var19.bind(var20)(var14);
            _closure2_slot26 = var19;
            var29 = _closure1_slot6;
            var20 = var29.useEffect;
            var19 = new Array(4);
            var19[0] = var31;
            var19[1] = var38;
            var19[2] = var33;
            var19[3] = var18;
            var18 = function() {
                var2 = function() {
                    var4 = _closure1_slot4;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 54; continue _fun0010 }
case 51:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 15;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.getStableSafeAreaInsets;
                                var11 = var2.bind(var4)();
                                var2 = _closure2_slot26;
                                var10 = var2.current;
                                var7 = {};
                                var12 = _closure1_slot19;
                                var5 = null;
                                var2 = var5 == var10;
                                var6 = undefined;
                                if(var2) { _fun0010_ip = 43; continue _fun0010 }
case 55:
                                var6 = var10.left;
case 43:
                                var2 = var5 == var11;
                                var13 = undefined;
                                if(var2) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                                var13 = var11.left;
case 56:
                                var14 = var5 != var13;
                                var2 = 0;
                                if(!var14) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                                var2 = var13;
case 58:
                                var2 = var12.bind(var3)(var6, var2);
                                var7['left'] = var2;
                                var12 = _closure1_slot19;
                                var2 = var5 == var10;
                                var6 = undefined;
                                if(var2) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                                var6 = var10.right;
case 60:
                                var2 = var5 == var11;
                                var13 = undefined;
                                if(var2) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                                var13 = var11.right;
case 62:
                                var14 = var5 != var13;
                                var2 = 0;
                                if(!var14) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                                var2 = var13;
case 64:
                                var2 = var12.bind(var3)(var6, var2);
                                var7['right'] = var2;
                                var12 = _closure1_slot19;
                                var2 = var5 == var10;
                                var6 = undefined;
                                if(var2) { _fun0010_ip = 19; continue _fun0010 }
case 66:
                                var6 = var10.top;
case 19:
                                var2 = var5 == var11;
                                var13 = undefined;
                                if(var2) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                                var13 = var11.top;
case 67:
                                var14 = var5 != var13;
                                var2 = 0;
                                if(!var14) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                                var2 = var13;
case 69:
                                var2 = var12.bind(var3)(var6, var2);
                                var7['top'] = var2;
                                var6 = _closure1_slot19;
                                var12 = var5 == var10;
                                var2 = undefined;
                                if(var12) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                                var2 = var10.bottom;
case 71:
                                var12 = var5 == var11;
                                var10 = undefined;
                                if(var12) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                                var10 = var11.bottom;
case 73:
                                var11 = var5 != var10;
                                var9 = 0;
                                if(!var11) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                                var9 = var10;
case 75:
                                var2 = var6.bind(var3)(var2, var9);
                                var7['bottom'] = var2;
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var2 = 18;
                                var2 = var9[var2];
                                var6 = var6.bind(var3)(var2);
                                var2 = {};
                                var9 = _closure2_slot25;
                                var2['iFrameUri'] = var9;
                                var9 = _closure2_slot24;
                                var2['iFrameSandboxAttributes'] = var9;
                                var9 = _closure2_slot9;
                                var2['referrerPolicy'] = var9;
                                var2['insets'] = var7;
                                var9 = _closure1_slot16;
                                var7 = undefined;
                                if(var9) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                                var7 = _closure1_slot10;
case 77:
                                var2['messageForDisallowedNavigationError'] = var7;
                                var2 = var6.bind(var3)(var2);
                                SaveGenerator(address=358);
case 79:
                                return var2;
case 80:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                                if(!(var5 == var2)) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                                var5 = _closure2_slot8;
                                var5 = var5.bind(var3)();
                                _fun0010_ip = 85; continue _fun0010;
case 83:
                                var4 = _closure2_slot22;
                                var4 = var4.bind(var3)(var2);
case 85:
                                return var3;
case 81:
                                return var2;
case 54:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = var2.bind(var1)();
                return var1;
            };
            var18 = var20.bind(var29)(var18, var19);
            var29 = _closure1_slot6;
            var20 = var29.useCallback;
            var19 = new Array(1);
            var19[0] = var13;
            var18 = function(arg1) {
                var1 = arg1;
                var6 = var1.nativeEvent;
                var3 = _closure1_slot15;
                var2 = var3.warn;
                var7 = _closure2_slot6;
                var1 = global;
                var5 = var1.JSON;
                var4 = var5.stringify;
                var6 = var4.bind(var5)(var6);
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'activity WebView error for appId ';
                var1 = '. ';
                var1 = var5.bind(var4)(var7, var1, var6);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var20 = var20.bind(var29)(var18, var19);
            var33 = _closure1_slot6;
            var29 = var33.useCallback;
            var19 = new Array(1);
            var19[0] = var13;
            var18 = function(arg1) {
                var1 = arg1;
                var6 = var1.nativeEvent;
                var3 = _closure1_slot15;
                var2 = var3.warn;
                var7 = _closure2_slot6;
                var1 = global;
                var5 = var1.JSON;
                var4 = var5.stringify;
                var6 = var4.bind(var5)(var6);
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'activity WebView render process gone for appId ';
                var1 = '. ';
                var1 = var5.bind(var4)(var7, var1, var6);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var18 = var29.bind(var33)(var18, var19);
            var33 = _closure1_slot6;
            var29 = var33.useCallback;
            var19 = new Array(8);
            var19[0] = var13;
            var19[1] = var37;
            var19[2] = var36;
            var19[3] = var35;
            var19[4] = var26;
            var19[5] = var34;
            var19[6] = var30;
            var19[7] = var9;
            var9 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = _closure1_slot15;
                    var4 = var5.warn;
                    var9 = _closure2_slot6;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'activity WebView content process terminated for appId ';
                    var1 = var6.bind(var1)(var9);
                    var1 = var4.bind(var5)(var1);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 19;
                    var4 = var6[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.track;
                    var4 = _closure1_slot12;
                    var5 = var4.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED;
                    var4 = {};
                    var4['application_id'] = var9;
                    var9 = _closure2_slot13;
                    var4['channel_id'] = var9;
                    var9 = _closure2_slot14;
                    var4['guild_id'] = var9;
                    var9 = _closure2_slot15;
                    var4['activity_session_id'] = var9;
                    var4 = var7.bind(var8)(var5, var4);
                    var5 = _closure1_slot0;
                    var4 = 14;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var6 = var4.ComponentDispatch;
                    var5 = var6.dispatch;
                    var3 = _closure1_slot11;
                    var4 = var3.IFRAME_UNMOUNT;
                    var3 = {};
                    var7 = _closure2_slot17;
                    var3['id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var1)();
                    var4 = _closure2_slot20;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                    var4 = _closure2_slot20;
                    var3 = var4.releaseWebView;
                    var3 = var3.bind(var4)();
case 86:
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var19 = var29.bind(var33)(var9, var19);
            var9 = 20;
            var9 = var27[var9];
            var29 = var15.bind(var7)(var9);
            var27 = var29.useStateFromStores;
            var9 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var9;
            var9 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getUseActivityUrlOverride;
                var1 = var1.bind(var2)();
                return var1;
            };
            var29 = var27.bind(var29)(var15, var9);
            _closure2_slot27 = var29;
            var27 = _closure1_slot6;
            var15 = var27.useEffect;
            var9 = new Array(3);
            var9[0] = var31;
            var9[1] = var29;
            var9[2] = var8;
            var8 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0: // try_start_0
                    var1 = global;
                    var5 = var1.URL;
                    var6 = _closure2_slot25;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = _closure2_slot19;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4);
case 2: // try_end0
                    _fun0012_ip = 53; continue _fun0012;
case 88: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure2_slot27;
                    if(var3) { _fun0012_ip = 89; continue _fun0012 }
case 49:
                    throw var2;
case 89:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var15.bind(var27)(var8, var9);
            var15 = _closure1_slot6;
            var9 = var15.useEffect;
            var8 = new Array(2);
            var8[0] = var22;
            var8[1] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var1 = !var1;
                    if(!var1) { _fun0013_ip = 90; continue _fun0013 }
case 48:
                    var1 = _closure2_slot3;
case 90:
                    if(!var1) { _fun0013_ip = 91; continue _fun0013 }
case 31:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 21;
                    var1 = var9[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = 22;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.PtobXW;
                    var5 = var6.bind(var10)(var5);
                    var1['title'] = var5;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.55iAUT;
                    var5 = var6.bind(var10)(var5);
                    var1['body'] = var5;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.BddRzS;
                    var4 = var5.bind(var6)(var4);
                    var1['confirmText'] = var4;
                    var1 = var2.bind(var3)(var1);
case 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var15)(var3, var8);
            _closure2_slot28 = var1;
            var3 = var1 != var5;
            var22 = null;
            if(!var3) { _fun0005_ip = 92; continue _fun0005 }
case 93:
            var3 = _closure1_slot16;
            if(var3) { _fun0005_ip = 94; continue _fun0005 }
case 95:
            var43 = var5.origin;
            var3 = var4.HermesInternal;
            var9 = var3.concat;
            var42 = '/';
            var40 = '/activity.html';
            var44 = var21;
            var41 = var26;
            var3 = var44[var9](var43, var42, var41, var40, var39);
            _fun0005_ip = 96; continue _fun0005;
case 94:
            var4 = var4.HermesInternal;
            var8 = var4.concat;
            var4 = 'file://';
            var3 = var8.bind(var4)(var2);
case 96:
            _closure2_slot28 = var3;
            var22 = var3;
case 92:
            var4 = _closure1_slot16;
            _closure2_slot29 = var4;
            var8 = _closure1_slot6;
            var3 = var8.useState;
            var9 = false;
            var8 = var3.bind(var8)(var9);
            var3 = _closure1_slot5;
            var8 = var3.bind(var7)(var8, var28);
            var3 = var8[var6];
            var8 = var8[var10];
            _closure2_slot30 = var8;
            var21 = _closure1_slot6;
            var15 = var21.useState;
            var8 = new Array(0);
            var15 = var15.bind(var21)(var8);
            var8 = _closure1_slot5;
            var15 = var8.bind(var7)(var15, var28);
            var8 = var15[var6];
            _closure2_slot31 = var8;
            var15 = var15[var10];
            _closure2_slot32 = var15;
            var27 = _closure1_slot6;
            var21 = var27.useEffect;
            var15 = new Array(2);
            var15[0] = var13;
            var15[1] = var4;
            var13 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot29;
                    if(!var2) { _fun0014_ip = 47; continue _fun0014 }
case 97:
                    var2 = ["'self'"];
                    var _closure3_slot0 = var2;
                    var2 = function parseCsp(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var3 = arg2;
                            var2 = var3.match;
                            var1 = arg1;
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 !== var3)) { _fun0015_ip = 98; continue _fun0015 }
case 31:
                            var2 = var3.length;
                            var1 = 2;
                            if(!(!(var2 >= var1))) { _fun0015_ip = 99; continue _fun0015 }
case 98:
                            var1 = new Array(0);
                            _fun0015_ip = 100; continue _fun0015;
case 99:
                            var2 = 1;
                            var4 = var3[var2];
                            var3 = var4.split;
                            var2 = ' ';
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.filter;
                            var2 = function(arg1) {
                                var3 = _closure3_slot0;
                                var2 = var3.includes;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                var1 = !var1;
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2);
case 100:
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var2;
                    var1 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0016_ip = 101; continue _fun0016 }
case 51:
                                    var7 = _closure2_slot6;
                                    var8 = global;
                                    var2 = var8.HermesInternal;
                                    var6 = var2.concat;
                                    var5 = 'https://';
                                    var3 = '.';
                                    var2 = 'discordsays.com';
                                    var5 = var6.bind(var5)(var7, var3, var2);
                                    var6 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 23;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var2 = var6.bind(var3)(var2);
                                    var7 = var2.HTTP;
                                    var6 = var7.get;
                                    var2 = {};
                                    var8 = var8.HermesInternal;
                                    var10 = var8.concat;
                                    var9 = '';
                                    var8 = '/.discord/csp';
                                    var8 = var10.bind(var9)(var5, var8);
                                    var2['url'] = var8;
                                    var8 = false;
                                    var2['rejectWithError'] = var8;
                                    var2 = var6.bind(var7)(var2);
                                    SaveGenerator(address=136);
case 102:
                                    return var2;
case 103:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                    if(var6) { _fun0016_ip = 104; continue _fun0016 }
case 105:
                                    var6 = var2.headers;
                                    var9 = var6.content-security-policy;
                                    var8 = ['about:blank', 'file://*'];
                                    var8[2] = var5;
                                    var7 = _closure3_slot1;
                                    var6 = /frame-src (.*?);/;
                                    var12 = var7.bind(var3)(var6, var9);
                                    var11 = 3;
                                    var13 = var8;
                                    var11 = arraySpread(var13, var12, var11);
                                    var7 = _closure3_slot1;
                                    var5 = /child-src (.*?);/;
                                    var12 = var7.bind(var3)(var5, var9);
                                    var13 = var8;
                                    var5 = arraySpread(var13, var12, var11);
                                    var6 = _closure2_slot32;
                                    var7 = var8.map;
                                    var5 = function(arg1) {
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot3;
                                        var1 = 24;
                                        var1 = var3[var1];
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = arg1;
                                        var4 = var2.bind(var3)(var1);
                                        var3 = var4.replace;
                                        var2 = /\\\*/g;
                                        var1 = '.*';
                                        var3 = var3.bind(var4)(var2, var1);
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = '^';
                                        var1 = var2.bind(var1)(var3);
                                        return var1;
                                    };
                                    var5 = var7.bind(var8)(var5);
                                    var5 = var6.bind(var3)(var5);
                                    var5 = _closure2_slot30;
                                    var4 = true;
                                    var4 = var5.bind(var3)(var4);
                                    return var3;
case 104:
                                    return var2;
case 101:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var1 = var1.bind(var2)();
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var21.bind(var27)(var13, var15);
            var21 = _closure1_slot6;
            var15 = var21.useCallback;
            var13 = new Array(2);
            var13[0] = var22;
            var13[1] = var8;
            var8 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.mainDocumentURL;
                    var2 = _closure2_slot28;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0017_ip = 106; continue _fun0017 }
case 107:
                    if(!(var5 != var4)) { _fun0017_ip = 106; continue _fun0017 }
case 108:
                    var2 = _closure2_slot28;
                    if(!(var4 === var2)) { _fun0017_ip = 10; continue _fun0017 }
case 106:
                    var4 = _closure1_slot17;
                    var3 = _closure2_slot31;
                    var6 = undefined;
                    var8 = var4.bind(var6)(var3);
                    var4 = var8.bind(var6)();
                    var3 = var4.done;
                    var7 = global;
                    if(var3) { _fun0017_ip = 109; continue _fun0017 }
case 110:
                    var11 = var4.value;
                    var3 = var7.RegExp;
                    var9 = var3.prototype;
                    var9 = Object.create(var9, {constructor: {value: var3}});
                    var12 = var9;
                    var3 = new var12[var3](var11, var10);
                    var10 = var3 instanceof Object ? var3 : var9;
                    var9 = var10.test;
                    var3 = var1.url;
                    var3 = var9.bind(var10)(var3);
                    if(var3) { _fun0017_ip = 111; continue _fun0017 }
case 112:
                    var9 = var8.bind(var6)();
                    var3 = var9.done;
                    var4 = var9;
                    if(var3) { _fun0017_ip = 109; continue _fun0017 }
case 60:
                    _fun0017_ip = 110; continue _fun0017;
case 111:
                    var3 = true;
                    return var3;
case 109:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var7 = 25;
                    var3 = var3[var7];
                    var8 = var4.bind(var6)(var3);
                    var4 = var8.toURLSafe;
                    var9 = _closure1_slot8;
                    var3 = var9.getActivityUrlOverride;
                    var9 = var3.bind(var9)();
                    var10 = var5 != var9;
                    var3 = '';
                    if(!var10) { _fun0017_ip = 113; continue _fun0017 }
case 114:
                    var3 = var9;
case 113:
                    var4 = var4.bind(var8)(var3);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var7];
                    var6 = var3.bind(var6)(var2);
                    var3 = var6.toURLSafe;
                    var2 = var1.url;
                    var3 = var3.bind(var6)(var2);
                    var2 = var5 != var4;
                    if(!var2) { _fun0017_ip = 115; continue _fun0017 }
case 116:
                    var2 = var5 != var3;
case 115:
                    if(!var2) { _fun0017_ip = 104; continue _fun0017 }
case 117:
                    var5 = var4.origin;
                    var4 = var4.pathname;
                    var4 = var5 + var4;
                    var5 = var3.origin;
                    var3 = var3.pathname;
                    var3 = var5 + var3;
                    var2 = var4 === var3;
case 104:
                    return var2;
case 10:
                    var3 = _closure1_slot7;
                    var2 = var3.openURL;
                    var1 = var1.url;
                    var1 = var2.bind(var3)(var1);
                    var1 = false;
                    return var1;
                }
            };
            var13 = var15.bind(var21)(var8, var13);
            var31 = var1 != var22;
            if(!var31) { _fun0005_ip = 118; continue _fun0005 }
case 119:
            var31 = var1 != var5;
case 118:
            if(!var31) { _fun0005_ip = 120; continue _fun0005 }
case 121:
            var31 = var1 != var2;
case 120:
            _closure2_slot33 = var31;
            var15 = _closure1_slot6;
            var8 = var15.useRef;
            var8 = var8.bind(var15)(var1);
            _closure2_slot34 = var8;
            var29 = _closure1_slot6;
            var27 = var29.useCallback;
            var21 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot34;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0018_ip = 89; continue _fun0018 }
case 122:
                    var2 = var3.injectJavaScript;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 26;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
case 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = new Array(0);
            var29 = var27.bind(var29)(var21, var15);
            _closure2_slot35 = var29;
            var33 = _closure1_slot6;
            var27 = var33.useCallback;
            var21 = new Array(3);
            var21[0] = var16;
            var34 = var1 == var5;
            var15 = undefined;
            if(var34) { _fun0005_ip = 123; continue _fun0005 }
case 124:
            var15 = var5.origin;
case 123:
            var21[1] = var15;
            var21[2] = var29;
            var15 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0019_ip = 65; continue _fun0019 }
case 125:
                    var2 = global;
                    var4 = var2.JSON;
                    var3 = var4.parse;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.data;
                    var5 = var3.bind(var4)(var2);
                    var3 = 'object';
                    var2 = typeof var5;
                    var2 = var3 === var2;
                    if(!var2) { _fun0019_ip = 126; continue _fun0019 }
case 127:
                    var3 = _closure2_slot18;
                    var4 = var7 == var3;
                    var3 = undefined;
                    if(var4) { _fun0019_ip = 9; continue _fun0019 }
case 128:
                    var4 = _closure2_slot18;
                    var3 = var4.origin;
case 9:
                    var2 = var7 != var3;
case 126:
                    if(!var2) { _fun0019_ip = 65; continue _fun0019 }
case 56:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 27;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.handleMessage;
                    var6 = _closure2_slot18;
                    var6 = var7 == var6;
                    if(var6) { _fun0019_ip = 105; continue _fun0019 }
case 111:
                    var6 = _closure2_slot18;
                    var2 = var6.origin;
case 105:
                    var1 = _closure2_slot35;
                    var1 = var3.bind(var4)(var5, var2, var1);
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var27.bind(var33)(var15, var21);
            var27 = _closure1_slot6;
            var21 = var27.useState;
            var27 = var21.bind(var27)(var1);
            var21 = _closure1_slot5;
            var27 = var21.bind(var7)(var27, var28);
            var21 = var27[var6];
            var27 = var27[var10];
            _closure2_slot36 = var27;
            var33 = _closure1_slot6;
            var28 = var33.useEffect;
            var27 = new Array(3);
            var27[0] = var26;
            var27[1] = var5;
            var27[2] = var2;
            var26 = function() {
                var3 = _closure2_slot36;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure2_slot18;
                        var4 = null;
                        var1 = var5;
                        if(!(var4 != var2)) { _fun0020_ip = 129; continue _fun0020 }
case 107:
                        var2 = _closure2_slot17;
                        var1 = var5;
                        if(!(var4 != var2)) { _fun0020_ip = 129; continue _fun0020 }
case 130:
                        var2 = _closure2_slot21;
                        var1 = var5;
                        if(!(var4 != var2)) { _fun0020_ip = 129; continue _fun0020 }
case 47:
                        var2 = {};
                        var4 = _closure2_slot18;
                        var4 = var4.port;
                        var8 = '';
                        if(!(var8 !== var4)) { _fun0020_ip = 131; continue _fun0020 }
case 35:
                        var4 = _closure2_slot18;
                        var7 = var4.hostname;
                        var4 = _closure2_slot18;
                        var6 = var4.port;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = ':';
                        var4 = var5.bind(var8)(var7, var4, var6);
                        _fun0020_ip = 132; continue _fun0020;
case 131:
                        var5 = _closure2_slot18;
                        var4 = var5.host;
case 132:
                        var2['domain'] = var4;
                        var4 = _closure2_slot18;
                        var5 = var4.protocol;
                        var4 = 'http:';
                        var4 = var4 === var5;
                        var2['httpAllowed'] = var4;
                        var4 = {};
                        var5 = 'internal';
                        var4['type'] = var5;
                        var6 = _closure2_slot17;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var5 = var5.concat;
                        var8 = '/';
                        var5 = var5.bind(var8)(var6, var8);
                        var4['path'] = var5;
                        var7 = _closure2_slot21;
                        var6 = var7.substring;
                        var5 = _closure2_slot21;
                        var3 = var5.lastIndexOf;
                        var5 = var3.bind(var5)(var8);
                        var3 = 0;
                        var3 = var6.bind(var7)(var3, var5);
                        var4['directory'] = var3;
                        var3 = new Array(1);
                        var3[0] = var4;
                        var2['pathHandlers'] = var3;
                        var1 = var2;
case 129:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var26 = var28.bind(var33)(var26, var27);
            var28 = _closure1_slot6;
            var27 = var28.useEffect;
            var26 = new Array(6);
            var26[0] = var24;
            var26[1] = var32;
            var26[2] = var31;
            var26[3] = var30;
            var26[4] = var29;
            var26[5] = var14;
            var25 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot33;
                    if(!var2) { _fun0021_ip = 106; continue _fun0021 }
case 51:
                    var2 = _closure2_slot20;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0021_ip = 106; continue _fun0021 }
case 29:
                    var1 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0022_ip = 133; continue _fun0022 }
case 51:
                                    var2 = undefined;
                                    var3 = undefined;
                                    var5 = _closure2_slot10;
                                    if(var5) { _fun0022_ip = 3; continue _fun0022 }
case 134:
                                    var14 = _closure2_slot23;
                                    _fun0022_ip = 135; continue _fun0022;
case 3:
                                    var14 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
case 135:
                                    var6 = {};
                                    var5 = 'safeAreaUpdateEvent';
                                    var6['type'] = var5;
                                    var8 = {};
                                    var9 = {};
                                    var13 = _closure1_slot19;
                                    var10 = _closure2_slot12;
                                    var7 = null;
                                    var10 = var7 == var10;
                                    var11 = undefined;
                                    if(var10) { _fun0022_ip = 136; continue _fun0022 }
case 137:
                                    var10 = _closure2_slot12;
                                    var11 = var10.left;
case 136:
                                    var10 = var7 == var14;
                                    var15 = undefined;
                                    if(var10) { _fun0022_ip = 138; continue _fun0022 }
case 11:
                                    var15 = var14.left;
case 138:
                                    var16 = var7 != var15;
                                    var10 = 0;
                                    if(!var16) { _fun0022_ip = 36; continue _fun0022 }
case 13:
                                    var10 = var15;
case 36:
                                    var10 = var13.bind(var2)(var11, var10);
                                    var9['left'] = var10;
                                    var13 = _closure1_slot19;
                                    var10 = _closure2_slot12;
                                    var10 = var7 == var10;
                                    var11 = undefined;
                                    if(var10) { _fun0022_ip = 139; continue _fun0022 }
case 140:
                                    var10 = _closure2_slot12;
                                    var11 = var10.right;
case 139:
                                    var10 = var7 == var14;
                                    var15 = undefined;
                                    if(var10) { _fun0022_ip = 14; continue _fun0022 }
case 15:
                                    var15 = var14.right;
case 14:
                                    var16 = var7 != var15;
                                    var10 = 0;
                                    if(!var16) { _fun0022_ip = 141; continue _fun0022 }
case 142:
                                    var10 = var15;
case 141:
                                    var10 = var13.bind(var2)(var11, var10);
                                    var9['right'] = var10;
                                    var13 = _closure1_slot19;
                                    var10 = _closure2_slot12;
                                    var10 = var7 == var10;
                                    var11 = undefined;
                                    if(var10) { _fun0022_ip = 143; continue _fun0022 }
case 144:
                                    var10 = _closure2_slot12;
                                    var11 = var10.top;
case 143:
                                    var10 = var7 == var14;
                                    var15 = undefined;
                                    if(var10) { _fun0022_ip = 145; continue _fun0022 }
case 146:
                                    var15 = var14.top;
case 145:
                                    var16 = var7 != var15;
                                    var10 = 0;
                                    if(!var16) { _fun0022_ip = 147; continue _fun0022 }
case 21:
                                    var10 = var15;
case 147:
                                    var10 = var13.bind(var2)(var11, var10);
                                    var9['top'] = var10;
                                    var11 = _closure1_slot19;
                                    var10 = _closure2_slot12;
                                    var13 = var7 == var10;
                                    var10 = undefined;
                                    if(var13) { _fun0022_ip = 148; continue _fun0022 }
case 76:
                                    var13 = _closure2_slot12;
                                    var10 = var13.bottom;
case 148:
                                    var15 = var7 == var14;
                                    var13 = undefined;
                                    if(var15) { _fun0022_ip = 149; continue _fun0022 }
case 150:
                                    var13 = var14.bottom;
case 149:
                                    var14 = var7 != var13;
                                    var12 = 0;
                                    if(!var14) { _fun0022_ip = 151; continue _fun0022 }
case 152:
                                    var12 = var13;
case 151:
                                    var10 = var11.bind(var2)(var10, var12);
                                    var9['bottom'] = var10;
                                    var8['insets'] = var9;
                                    var6['data'] = var8;
                                    var3 = var6;
case 153: // try_start_0
                                    var9 = _closure2_slot20;
                                    var8 = var9.injectJavaScript;
                                    var10 = _closure1_slot1;
                                    var11 = _closure1_slot3;
                                    var6 = 26;
                                    var6 = var11[var6];
                                    var10 = var10.bind(var2)(var6);
                                    var6 = var3;
                                    var6 = var10.bind(var2)(var6);
                                    var6 = var8.bind(var9)(var6);
                                    SaveGenerator(address=368);
case 154:
                                    return var6;
case 84:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(var8) { _fun0022_ip = 155; continue _fun0022 }
case 156: // try_end0
                                    _fun0022_ip = 157; continue _fun0022;
case 155:
                                    return var6;
case 158: // catch_target0
                                    CatchBlockStart(arg_register=5);
                                    var6 = _closure2_slot34;
                                    var6 = var6.current;
                                    if(!(var7 != var6)) { _fun0022_ip = 157; continue _fun0022 }
case 159:
                                    var4 = _closure2_slot35;
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot3;
                                    var5 = 26;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var2)(var5);
                                    var3 = var5.bind(var2)(var3);
                                    var3 = var4.bind(var2)(var3);
case 157:
                                    return var2;
case 133:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var1 = var1.bind(var2)();
case 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var27.bind(var28)(var25, var26);
            if(!(var1 != var22)) { _fun0005_ip = 160; continue _fun0005 }
case 161:
            if(!(var1 != var5)) { _fun0005_ip = 160; continue _fun0005 }
case 162:
            if(!var4) { _fun0005_ip = 163; continue _fun0005 }
case 164:
            if(!(var9 !== var3)) { _fun0005_ip = 160; continue _fun0005 }
case 163:
            var5 = {};
            var25 = _closure1_slot19;
            var3 = var1 == var14;
            var4 = undefined;
            if(var3) { _fun0005_ip = 165; continue _fun0005 }
case 166:
            var4 = var14.left;
case 165:
            var3 = var1 == var24;
            var26 = undefined;
            if(var3) { _fun0005_ip = 167; continue _fun0005 }
case 168:
            var26 = var24.left;
case 167:
            var27 = var1 != var26;
            var3 = 0;
            if(!var27) { _fun0005_ip = 169; continue _fun0005 }
case 170:
            var3 = var26;
case 169:
            var3 = var25.bind(var7)(var4, var3);
            var5['left'] = var3;
            var25 = _closure1_slot19;
            var3 = var1 == var14;
            var4 = undefined;
            if(var3) { _fun0005_ip = 171; continue _fun0005 }
case 172:
            var4 = var14.right;
case 171:
            var3 = var1 == var24;
            var26 = undefined;
            if(var3) { _fun0005_ip = 173; continue _fun0005 }
case 174:
            var26 = var24.right;
case 173:
            var27 = var1 != var26;
            var3 = 0;
            if(!var27) { _fun0005_ip = 175; continue _fun0005 }
case 176:
            var3 = var26;
case 175:
            var3 = var25.bind(var7)(var4, var3);
            var5['right'] = var3;
            var25 = _closure1_slot19;
            var3 = var1 == var14;
            var4 = undefined;
            if(var3) { _fun0005_ip = 177; continue _fun0005 }
case 178:
            var4 = var14.top;
case 177:
            var3 = var1 == var24;
            var26 = undefined;
            if(var3) { _fun0005_ip = 179; continue _fun0005 }
case 180:
            var26 = var24.top;
case 179:
            var27 = var1 != var26;
            var3 = 0;
            if(!var27) { _fun0005_ip = 181; continue _fun0005 }
case 182:
            var3 = var26;
case 181:
            var3 = var25.bind(var7)(var4, var3);
            var5['top'] = var3;
            var4 = _closure1_slot19;
            var25 = var1 == var14;
            var3 = undefined;
            if(var25) { _fun0005_ip = 183; continue _fun0005 }
case 184:
            var3 = var14.bottom;
case 183:
            var25 = var1 == var24;
            var14 = undefined;
            if(var25) { _fun0005_ip = 185; continue _fun0005 }
case 186:
            var14 = var24.bottom;
case 185:
            var24 = var1 != var14;
            var6 = 0;
            if(!var24) { _fun0005_ip = 187; continue _fun0005 }
case 188:
            var6 = var14;
case 187:
            var3 = var4.bind(var7)(var3, var6);
            var5['bottom'] = var3;
            var3 = _closure1_slot16;
            var14 = undefined;
            if(!var3) { _fun0005_ip = 189; continue _fun0005 }
case 190:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 18;
            var3 = var6[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.createInjectedJavascriptForIOS;
            var14 = var3.bind(var4)(var5);
case 189:
            var3 = var1 == var2;
            var2 = null;
            if(var3) { _fun0005_ip = 191; continue _fun0005 }
case 192:
            var3 = _closure1_slot16;
            if(var3) { _fun0005_ip = 193; continue _fun0005 }
case 194:
            var4 = var1 != var21;
            var3 = null;
            if(!var4) { _fun0005_ip = 195; continue _fun0005 }
case 193:
            var6 = _closure1_slot13;
            var5 = _closure1_slot0;
            var24 = _closure1_slot3;
            var4 = 13;
            var4 = var24[var4];
            var4 = var5.bind(var7)(var4);
            var5 = var4.WebView;
            var4 = {};
            var23 = var23.webView;
            var4['style'] = var23;
            var4['ref'] = var8;
            var8 = {};
            var8['uri'] = var22;
            var4['source'] = var8;
            var22 = var1 != var21;
            var8 = undefined;
            if(!var22) { _fun0005_ip = 196; continue _fun0005 }
case 197:
            var8 = var21;
case 196:
            var4['androidAssetLoaderConfig'] = var8;
            var8 = ['*'];
            var4['originWhitelist'] = var8;
            var8 = 'never';
            var4['overScrollMode'] = var8;
            var4['scrollEnabled'] = var9;
            var8 = true;
            var4['cacheEnabled'] = var8;
            var4['onError'] = var20;
            var4['onContentProcessDidTerminate'] = var19;
            var4['onRenderProcessGone'] = var18;
            var4['webViewKey'] = var16;
            var4['temporaryParentNodeTag'] = var17;
            var16 = var1 != var16;
            var4['messagingWithWebViewKeyEnabled'] = var16;
            var4['onMessage'] = var15;
            var15 = _closure1_slot16;
            var4['allowFileAccess'] = var15;
            var4['injectedJavaScript'] = var14;
            var4['injectedJavaScriptForMainFrameOnly'] = var9;
            var14 = _closure1_slot16;
            var12 = undefined;
            if(!var14) { _fun0005_ip = 198; continue _fun0005 }
case 199:
            var12 = var13;
case 198:
            var4['onShouldStartLoadWithRequest'] = var12;
            var4['mediaPlaybackRequiresUserAction'] = var9;
            var4['ignoreSilentHardwareSwitch'] = var11;
            var4['allowsInlineMediaPlayback'] = var8;
            var4['minimumFontSize'] = var10;
            var4['bounces'] = var9;
            var4['allowsProtectedMedia'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 195:
            var2 = var3;
case 191:
            return var2;
case 160:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var2 = function useHasInvalidUrlErrorState() {
        var4 = _closure1_slot6;
        var3 = var4.useState;
        var1 = false;
        var5 = var3.bind(var4)(var1);
        var3 = _closure1_slot5;
        var4 = undefined;
        var1 = 2;
        var6 = var3.bind(var4)(var5, var1);
        var1 = 0;
        var3 = var6[var1];
        var1 = {};
        var1['hasInvalidUrlError'] = var3;
        var5 = 1;
        var5 = var6[var5];
        var1['setHasInvalidUrlError'] = var5;
        var5 = _closure1_slot1;
        var6 = _closure1_slot3;
        var2 = 28;
        var2 = var6[var2];
        var2 = var5.bind(var4)(var2);
        var2 = var2.bind(var4)(var3);
        var1['hadInvalidUrlError'] = var2;
        return var1;
    };
    var _closure1_slot21 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Linking;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.ActivityPlatform;
    var _closure1_slot9 = var10;
    var6 = var6.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.ComponentActions;
    var _closure1_slot11 = var10;
    var6 = var6.AnalyticEvents;
    var _closure1_slot12 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {};
    var13 = 'transparent';
    var12['backgroundColor'] = var13;
    var6['webView'] = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot14 = var6;
    var6 = 9;
    var6 = var8[var6];
    var10 = var9.bind(var1)(var6);
    var6 = var10.prototype;
    var9 = Object.create(var6, {constructor: {value: var10}});
    var16 = 'EmbeddedActivityWebView';
    var17 = var9;
    var6 = new var17[var10](var16, var15);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot15 = var6;
    var6 = 10;
    var6 = var8[var6];
    var9 = var7.bind(var1)(var6);
    var6 = var9.isIOS;
    var6 = var6.bind(var9)();
    var _closure1_slot16 = var6;
    var6 = 31;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/native/EmbeddedActivityWebView.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function EmbeddedActivityWebView(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var6 = var4.channelId;
            var _closure2_slot0 = var6;
            var2 = var4.currentEmbeddedActivity;
            var _closure2_slot1 = var2;
            var7 = var4.applicationId;
            var _closure2_slot2 = var7;
            var3 = {'channelId': 0, 'currentEmbeddedActivity': 0, 'applicationId': 0};
            var13 = null;
            var18 = var3;
            var17 = null;
            var1 = silentSetPrototypeOf(var18, var17);
            var18 = {};
            var17 = var4;
            var16 = var3;
            var5 = copyDataProperties(var18, var17, var16);
            var3 = _closure1_slot21;
            var4 = undefined;
            var3 = var3.bind(var4)();
            var11 = var3.hasInvalidUrlError;
            var _closure2_slot3 = var11;
            var10 = var3.setHasInvalidUrlError;
            var9 = var3.hadInvalidUrlError;
            var _closure2_slot4 = var9;
            var8 = {};
            if(!(var13 != var2)) { _fun0023_ip = 64; continue _fun0023 }
case 200:
            var3 = var2.customId;
            if(!(var13 != var3)) { _fun0023_ip = 201; continue _fun0023 }
case 202:
            var3 = var2.customId;
            var8['custom_id'] = var3;
case 201:
            var3 = var2.referrerId;
            if(!(var13 != var3)) { _fun0023_ip = 64; continue _fun0023 }
case 62:
            var3 = var2.referrerId;
            var8['referrer_id'] = var3;
case 64:
            var14 = _closure1_slot6;
            var13 = var14.useEffect;
            var3 = new Array(5);
            var3[0] = var11;
            var3[1] = var9;
            var3[2] = var6;
            var3[3] = var7;
            var3[4] = var2;
            var2 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var1 = !var1;
                    if(!var1) { _fun0024_ip = 90; continue _fun0024 }
case 48:
                    var1 = _closure2_slot3;
case 90:
                    if(!var1) { _fun0024_ip = 203; continue _fun0024 }
case 31:
                    var1 = _closure2_slot0;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0024_ip = 55; continue _fun0024 }
case 33:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.selectParticipant;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1, var7);
case 55:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 30;
                    var1 = var3[var1];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.leaveActivity;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var6 = var7 == var6;
                    if(var6) { _fun0024_ip = 204; continue _fun0024 }
case 112:
                    var6 = _closure2_slot1;
                    var5 = var6.location;
case 204:
                    var1['location'] = var5;
                    var4 = _closure2_slot2;
                    var1['applicationId'] = var4;
                    var4 = false;
                    var1['showFeedback'] = var4;
                    var1 = var2.bind(var3)(var1);
case 203:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var13.bind(var14)(var2, var3);
            var3 = _closure1_slot13;
            var2 = _closure1_slot20;
            var1 = {};
            var13 = function hasFrameId() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hasFrameId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['hasFrameId'] = var13;
            var13 = function getOrCreateFrameId() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getOrCreateFrameId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['getOrCreateFrameId'] = var13;
            var12 = function releaseFrameId() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.releaseFrameId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['releaseFrameId'] = var12;
            var1['hasInvalidUrlError'] = var11;
            var1['setHasInvalidUrlError'] = var10;
            var1['hadInvalidUrlError'] = var9;
            var1['deepLinkQueryParams'] = var8;
            var1['applicationId'] = var7;
            var1['channelId'] = var6;
            var18 = var1;
            var17 = var5;
            var5 = copyDataProperties(var18, var17);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['BaseActivityWebView'] = var4;
    var3['useHasInvalidUrlErrorState'] = var2;
    return var1;
})();