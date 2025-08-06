// app/modules/activities/native/EmbeddedActivityWebView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getSafeArea(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var9 = arg2;
            var6 = null;
            var1 = var9;
            if(!(var6 != var4)) { _fun0004_ip = 113; continue _fun0004 }
 15:
            var3 = var4.disable;
            var7 = 0;
            var2 = 0;
            if(var3) { _fun0004_ip = 110; continue _fun0004 }
 28:
            var3 = var4.override;
            if(!(var6 == var3)) { _fun0004_ip = 82; continue _fun0004 }
 38:
            var5 = var4.offset;
            var3 = var9;
            if(!(var6 != var5)) { _fun0004_ip = 80; continue _fun0004 }
 51:
            var5 = global;
            var8 = var5.Math;
            var6 = var8.max;
            var5 = var4.offset;
            var5 = var9 + var5;
            var3 = var6.bind(var8)(var7, var5);
 80:
            _fun0004_ip = 107; continue _fun0004;
 82:
            var5 = global;
            var6 = var5.Math;
            var5 = var6.max;
            var4 = var4.override;
            var3 = var5.bind(var6)(var7, var4);
 107:
            var2 = var3;
 110:
            var1 = var2;
 113:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Linking;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityPlatform;
    var _closure1_slot9 = var8;
    var4 = var4.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ComponentActions;
    var _closure1_slot11 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'transparent';
    var10['backgroundColor'] = var11;
    var4['webView'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var14 = 'EmbeddedActivityWebView';
    var15 = var7;
    var4 = new var15[var8](var14, var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.isIOS;
    var4 = var4.bind(var7)();
    var _closure1_slot16 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/EmbeddedActivityWebView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EmbeddedActivityWebView(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var33 = var1.activityUrl;
            var12 = var1.applicationId;
            var _closure2_slot0 = var12;
            var25 = var1.channelId;
            var _closure2_slot1 = var25;
            var30 = var1.guildId;
            var _closure2_slot2 = var30;
            var18 = var1.activitySessionId;
            var _closure2_slot3 = var18;
            var27 = var1.queryParams;
            var4 = var1.onActivityCrash;
            var _closure2_slot4 = var4;
            var19 = var1.onLoadError;
            var _closure2_slot5 = var19;
            var20 = var1.allowPopups;
            var7 = var1.referrerPolicy;
            var _closure2_slot6 = var7;
            var34 = var1.isPipOrGridMode;
            var _closure2_slot7 = var34;
            var15 = var1.webViewKey;
            var _closure2_slot8 = var15;
            var10 = var1.ignoreSilentHardwareSwitch;
            var6 = undefined;
            if(!(var10 === var6)) { _fun0005_ip = 124; continue _fun0005 }
 122:
            var10 = true;
 124:
            var11 = var1.safeAreasConfig;
            var _closure2_slot9 = var11;
            var3 = var1.currentEmbeddedActivity;
            var _closure2_slot10 = var3;
            var _closure2_slot11 = var6;
            var _closure2_slot12 = var6;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var _closure2_slot15 = var6;
            var _closure2_slot16 = var6;
            var _closure2_slot17 = var6;
            var _closure2_slot18 = var6;
            var _closure2_slot19 = var6;
            var _closure2_slot20 = var6;
            var _closure2_slot21 = var6;
            var _closure2_slot22 = var6;
            var _closure2_slot23 = var6;
            var _closure2_slot24 = var6;
            var _closure2_slot25 = var6;
            var _closure2_slot26 = var6;
            var _closure2_slot27 = var6;
            var _closure2_slot28 = var6;
            var _closure2_slot29 = var6;
            var _closure2_slot30 = var6;
            var _closure2_slot31 = var6;
            var _closure2_slot32 = var6;
            var1 = _closure1_slot14;
            var26 = var1.bind(var6)();
            var29 = _closure1_slot6;
            var2 = var29.useContext;
            var8 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 11;
            var1 = var14[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.WebViewContext;
            var16 = var2.bind(var29)(var1);
            var2 = var29.useState;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hasFrameId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var2.bind(var29)(var1);
            var17 = _closure1_slot5;
            var9 = 1;
            var1 = var17.bind(var6)(var1, var9);
            var24 = 0;
            var2 = var1[var24];
            _closure2_slot11 = var2;
            var8 = var29.useState;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0006_ip = 50; continue _fun0006 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.v4;
                    var1 = var1.bind(var2)();
                    _fun0006_ip = 87; continue _fun0006;
 50:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getOrCreateFrameId;
                    var1 = var2.bind(var3)();
 87:
                    return var1;
                }
            };
            var1 = var8.bind(var29)(var1);
            var1 = var17.bind(var6)(var1, var9);
            var22 = var1[var24];
            _closure2_slot12 = var22;
            var8 = var29.useState;
            var1 = null;
            var8 = var8.bind(var29)(var1);
            var28 = 2;
            var8 = var17.bind(var6)(var8, var28);
            var21 = var8[var24];
            _closure2_slot13 = var21;
            var8 = var8[var9];
            _closure2_slot14 = var8;
            var31 = var29.useMemo;
            var23 = new Array(1);
            var23[0] = var15;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0007_ip = 58; continue _fun0007 }
 20:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 14;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getWebViewProxy;
                    var2 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2);
 58:
                    return var1;
                }
            };
            var32 = var31.bind(var29)(var8, var23);
            _closure2_slot15 = var32;
            var8 = var29.useState;
            var8 = var8.bind(var29)(var1);
            var8 = var17.bind(var6)(var8, var28);
            var23 = var8[var24];
            var8 = var8[var9];
            _closure2_slot16 = var8;
            var17 = var29.useEffect;
            var8 = new Array(3);
            var8[0] = var2;
            var8[1] = var22;
            var8[2] = var15;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot11;
                    if(!var1) { _fun0008_ip = 20; continue _fun0008 }
 10:
                    var3 = _closure2_slot8;
                    var2 = null;
                    var1 = var2 != var3;
 20:
                    if(var1) { _fun0008_ip = 85; continue _fun0008 }
 23:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ComponentDispatch;
                    var3 = var4.dispatch;
                    var1 = _closure1_slot11;
                    var2 = var1.IFRAME_MOUNT;
                    var1 = {};
                    var5 = _closure2_slot12;
                    var1['id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var17.bind(var29)(var2, var8);
            var17 = var29.useEffect;
            var8 = new Array(2);
            var8[0] = var15;
            var8[1] = var22;
            var2 = function() {
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var2 = _closure2_slot8;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0009_ip = 75; continue _fun0009 }
 13:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.ComponentDispatch;
                        var3 = var4.dispatch;
                        var1 = _closure1_slot11;
                        var2 = var1.IFRAME_UNMOUNT;
                        var1 = {};
                        var5 = _closure2_slot12;
                        var1['id'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
 75:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var17.bind(var29)(var2, var8);
            var8 = _closure1_slot1;
            var2 = 16;
            var2 = var14[var2];
            var2 = var8.bind(var6)(var2);
            var2 = var2.bind(var6)();
            _closure2_slot17 = var2;
            var14 = {};
            if(!(var1 != var3)) { _fun0005_ip = 588; continue _fun0005 }
 544:
            var8 = var3.customId;
            if(!(var1 != var8)) { _fun0005_ip = 566; continue _fun0005 }
 554:
            var8 = var3.customId;
            var14['custom_id'] = var8;
 566:
            var8 = var3.referrerId;
            if(!(var1 != var8)) { _fun0005_ip = 588; continue _fun0005 }
 576:
            var8 = var3.referrerId;
            var14['referrer_id'] = var8;
 588:
            var17 = _closure1_slot2;
            var31 = _closure1_slot3;
            var8 = 17;
            var8 = var31[var8];
            var17 = var17.bind(var6)(var8);
            var8 = var17.getConstants;
            var8 = var8.bind(var17)();
            var17 = {};
            var40 = var17;
            var39 = var27;
            var27 = copyDataProperties(var40, var39);
            var40 = var17;
            var39 = var14;
            var14 = copyDataProperties(var40, var39);
            var14 = 'frame_id';
            var17[var14] = var22;
            var14 = _closure1_slot9;
            var27 = var14.MOBILE;
            var14 = 'platform';
            var17[var14] = var27;
            var14 = var8.Version;
            var8 = 'mobile_app_version';
            var17[var8] = var14;
            var27 = _closure1_slot1;
            var8 = 18;
            var8 = var31[var8];
            var14 = var27.bind(var6)(var8);
            var8 = {};
            var8['allowPopups'] = var20;
            var35 = var14.bind(var6)(var8);
            _closure2_slot18 = var35;
            var20 = global;
            var8 = var20.URLSearchParams;
            var14 = var8.prototype;
            var14 = Object.create(var14, {constructor: {value: var8}});
            var41 = var14;
            var40 = var17;
            var8 = new var41[var8](var40, var39);
            var17 = var8 instanceof Object ? var8 : var14;
            var8 = var20.HermesInternal;
            var14 = var8.concat;
            var29 = '';
            var8 = '?';
            var33 = var14.bind(var29)(var33, var8, var17);
            _closure2_slot19 = var33;
            var14 = _closure1_slot6;
            var8 = var14.useRef;
            var8 = var8.bind(var14)(var11);
            _closure2_slot20 = var8;
            var17 = var14.useEffect;
            var8 = new Array(4);
            var8[0] = var33;
            var8[1] = var35;
            var8[2] = var19;
            var8[3] = var7;
            var7 = function() {
                var2 = function() {
                    var4 = _closure1_slot4;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 309; continue _fun0010 }
 10:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 16;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.getStableSafeAreaInsets;
                                var2 = var2.bind(var4)();
                                var5 = _closure2_slot20;
                                var10 = var5.current;
                                var7 = {};
                                var11 = _closure1_slot19;
                                var5 = null;
                                var6 = var5 == var10;
                                var9 = undefined;
                                if(var6) { _fun0010_ip = 79; continue _fun0010 }
 74:
                                var9 = var10.left;
 79:
                                var6 = var2.left;
                                var6 = var11.bind(var3)(var9, var6);
                                var7['left'] = var6;
                                var11 = _closure1_slot19;
                                var6 = var5 == var10;
                                var9 = undefined;
                                if(var6) { _fun0010_ip = 112; continue _fun0010 }
 107:
                                var9 = var10.right;
 112:
                                var6 = var2.right;
                                var6 = var11.bind(var3)(var9, var6);
                                var7['right'] = var6;
                                var11 = _closure1_slot19;
                                var6 = var5 == var10;
                                var9 = undefined;
                                if(var6) { _fun0010_ip = 145; continue _fun0010 }
 140:
                                var9 = var10.top;
 145:
                                var6 = var2.top;
                                var6 = var11.bind(var3)(var9, var6);
                                var7['top'] = var6;
                                var9 = _closure1_slot19;
                                var11 = var5 == var10;
                                var6 = undefined;
                                if(var11) { _fun0010_ip = 178; continue _fun0010 }
 173:
                                var6 = var10.bottom;
 178:
                                var2 = var2.bottom;
                                var2 = var9.bind(var3)(var6, var2);
                                var7['bottom'] = var2;
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var2 = 19;
                                var2 = var9[var2];
                                var6 = var6.bind(var3)(var2);
                                var2 = {};
                                var9 = _closure2_slot19;
                                var2['iFrameUri'] = var9;
                                var9 = _closure2_slot18;
                                var2['iFrameSandboxAttributes'] = var9;
                                var9 = _closure2_slot6;
                                var2['referrerPolicy'] = var9;
                                var2['insets'] = var7;
                                var9 = _closure1_slot16;
                                var7 = undefined;
                                if(var9) { _fun0010_ip = 260; continue _fun0010 }
 256:
                                var7 = _closure1_slot10;
 260:
                                var2['messageForDisallowedNavigationError'] = var7;
                                var2 = var6.bind(var3)(var2);
                                SaveGenerator(address=274);
 272:
                                return var2;
 274:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0010_ip = 306; continue _fun0010 }
 280:
                                if(!(var5 == var2)) { _fun0010_ip = 294; continue _fun0010 }
 284:
                                var5 = _closure2_slot5;
                                var5 = var5.bind(var3)();
                                _fun0010_ip = 303; continue _fun0010;
 294:
                                var4 = _closure2_slot16;
                                var4 = var4.bind(var3)(var2);
 303:
                                return var3;
 306:
                                return var2;
 309:
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
            var7 = var17.bind(var14)(var7, var8);
            var17 = var14.useCallback;
            var8 = new Array(1);
            var8[0] = var12;
            var7 = function(arg1) {
                var1 = arg1;
                var6 = var1.nativeEvent;
                var3 = _closure1_slot15;
                var2 = var3.warn;
                var7 = _closure2_slot0;
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
            var19 = var17.bind(var14)(var7, var8);
            var17 = var14.useCallback;
            var8 = new Array(1);
            var8[0] = var12;
            var7 = function(arg1) {
                var1 = arg1;
                var6 = var1.nativeEvent;
                var3 = _closure1_slot15;
                var2 = var3.warn;
                var7 = _closure2_slot0;
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
            var17 = var17.bind(var14)(var7, var8);
            var8 = var14.useCallback;
            var7 = new Array(7);
            var7[0] = var12;
            var7[1] = var25;
            var7[2] = var30;
            var7[3] = var18;
            var7[4] = var22;
            var7[5] = var4;
            var7[6] = var32;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var5 = _closure1_slot15;
                    var4 = var5.warn;
                    var10 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'activity WebView content process terminated for appId ';
                    var1 = var6.bind(var1)(var10);
                    var1 = var4.bind(var5)(var1);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 20;
                    var6 = var5[var1];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var6);
                    var8 = var9.track;
                    var6 = _closure1_slot12;
                    var7 = var6.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED;
                    var6 = {};
                    var6['application_id'] = var10;
                    var10 = _closure2_slot1;
                    var6['channel_id'] = var10;
                    var10 = _closure2_slot2;
                    var6['guild_id'] = var10;
                    var10 = _closure2_slot3;
                    var6['activity_session_id'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var7 = _closure1_slot0;
                    var6 = 15;
                    var6 = var5[var6];
                    var6 = var7.bind(var1)(var6);
                    var8 = var6.ComponentDispatch;
                    var7 = var8.dispatch;
                    var3 = _closure1_slot11;
                    var6 = var3.IFRAME_UNMOUNT;
                    var3 = {};
                    var9 = _closure2_slot12;
                    var3['id'] = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 12;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.releaseFrameId;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot15;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 222; continue _fun0011 }
 208:
                    var4 = _closure2_slot15;
                    var3 = var4.releaseWebView;
                    var3 = var3.bind(var4)();
 222:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var18 = var8.bind(var14)(var4, var7);
            var7 = _closure1_slot0;
            var4 = 21;
            var4 = var31[var4];
            var30 = var7.bind(var6)(var4);
            var8 = var30.useStateFromStores;
            var4 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getUseActivityUrlOverride;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var8.bind(var30)(var7, var4);
            _closure2_slot21 = var4;
            var7 = var14.useState;
            var8 = false;
            var30 = var7.bind(var14)(var8);
            var7 = _closure1_slot5;
            var7 = var7.bind(var6)(var30, var28);
            var30 = var7[var24];
            _closure2_slot22 = var30;
            var7 = var7[var9];
            _closure2_slot23 = var7;
            var7 = 22;
            var7 = var31[var7];
            var7 = var27.bind(var6)(var7);
            var27 = var7.bind(var6)(var30);
            _closure2_slot24 = var27;
            var31 = var14.useEffect;
            var7 = new Array(2);
            var7[0] = var33;
            var7[1] = var4;
            var4 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0: // try_start_0
                    var1 = global;
                    var5 = var1.URL;
                    var6 = _closure2_slot19;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = _closure2_slot14;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4);
 46: // try_end0
                    _fun0012_ip = 75; continue _fun0012;
 48: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure2_slot21;
                    if(var3) { _fun0012_ip = 62; continue _fun0012 }
 60:
                    throw var2;
 62:
                    var3 = _closure2_slot23;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var31.bind(var14)(var4, var7);
            var7 = var14.useEffect;
            var4 = new Array(5);
            var4[0] = var30;
            var4[1] = var27;
            var4[2] = var25;
            var4[3] = var12;
            var4[4] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot24;
                    var1 = !var1;
                    if(!var1) { _fun0013_ip = 17; continue _fun0013 }
 13:
                    var1 = _closure2_slot22;
 17:
                    if(!var1) { _fun0013_ip = 335; continue _fun0013 }
 23:
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 23;
                    var2 = var11[var2];
                    var5 = undefined;
                    var6 = var3.bind(var5)(var2);
                    var3 = var6.show;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var7 = 24;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8.PtobXV;
                    var8 = var9.bind(var12)(var8);
                    var2['title'] = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8.55iAUV;
                    var8 = var9.bind(var12)(var8);
                    var2['body'] = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var5)(var7);
                    var7 = var7.t;
                    var7 = var7.BddRzc;
                    var7 = var8.bind(var9)(var7);
                    var2['confirmText'] = var7;
                    var2 = var3.bind(var6)(var2);
                    var2 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0013_ip = 261; continue _fun0013 }
 225:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 25;
                    var2 = var6[var2];
                    var6 = var3.bind(var5)(var2);
                    var3 = var6.selectParticipant;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var6)(var2, var7);
 261:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.leaveActivity;
                    var1 = {};
                    var6 = _closure2_slot10;
                    var6 = var7 == var6;
                    var5 = undefined;
                    if(var6) { _fun0013_ip = 311; continue _fun0013 }
 302:
                    var6 = _closure2_slot10;
                    var5 = var6.location;
 311:
                    var1['location'] = var5;
                    var4 = _closure2_slot0;
                    var1['applicationId'] = var4;
                    var4 = false;
                    var1['showFeedback'] = var4;
                    var1 = var2.bind(var3)(var1);
 335:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var14)(var3, var4);
            _closure2_slot25 = var1;
            var3 = var1 != var21;
            var25 = null;
            if(!var3) { _fun0005_ip = 1205; continue _fun0005 }
 1130:
            var3 = _closure1_slot16;
            if(var3) { _fun0005_ip = 1176; continue _fun0005 }
 1137:
            var40 = var21.origin;
            var3 = var20.HermesInternal;
            var7 = var3.concat;
            var39 = '/';
            var37 = '/activity.html';
            var41 = var29;
            var38 = var22;
            var3 = var41[var7](var40, var39, var38, var37, var36);
            _fun0005_ip = 1198; continue _fun0005;
 1176:
            var4 = var20.HermesInternal;
            var7 = var4.concat;
            var4 = 'file://';
            var3 = var7.bind(var4)(var23);
 1198:
            _closure2_slot25 = var3;
            var25 = var3;
 1205:
            var4 = _closure1_slot16;
            _closure2_slot26 = var4;
            var27 = _closure1_slot6;
            var3 = var27.useState;
            var3 = var3.bind(var27)(var8);
            var14 = _closure1_slot5;
            var7 = var14.bind(var6)(var3, var28);
            var3 = var7[var24];
            var7 = var7[var9];
            _closure2_slot27 = var7;
            var30 = var27.useState;
            var7 = new Array(0);
            var7 = var30.bind(var27)(var7);
            var14 = var14.bind(var6)(var7, var28);
            var7 = var14[var24];
            _closure2_slot28 = var7;
            var14 = var14[var9];
            _closure2_slot29 = var14;
            var28 = var27.useEffect;
            var14 = new Array(2);
            var14[0] = var12;
            var14[1] = var4;
            var12 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot26;
                    if(!var2) { _fun0014_ip = 54; continue _fun0014 }
 12:
                    var2 = ["'self'"];
                    var _closure3_slot0 = var2;
                    var2 = function parseCsp(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var3 = arg2;
                            var2 = var3.match;
                            var1 = arg1;
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 !== var3)) { _fun0015_ip = 35; continue _fun0015 }
 23:
                            var2 = var3.length;
                            var1 = 2;
                            if(!(!(var2 >= var1))) { _fun0015_ip = 41; continue _fun0015 }
 35:
                            var1 = new Array(0);
                            _fun0015_ip = 81; continue _fun0015;
 41:
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
 81:
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
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0016_ip = 286; continue _fun0016 }
 10:
                                    var7 = _closure2_slot0;
                                    var8 = global;
                                    var2 = var8.HermesInternal;
                                    var6 = var2.concat;
                                    var5 = 'https://';
                                    var3 = '.';
                                    var2 = 'discordsays.com';
                                    var5 = var6.bind(var5)(var7, var3, var2);
                                    var6 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 26;
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
 134:
                                    return var2;
 136:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                    if(var6) { _fun0016_ip = 283; continue _fun0016 }
 145:
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
                                    var6 = _closure2_slot29;
                                    var7 = var8.map;
                                    var5 = function(arg1) {
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot3;
                                        var1 = 27;
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
                                    var5 = _closure2_slot27;
                                    var4 = true;
                                    var4 = var5.bind(var3)(var4);
                                    return var3;
 283:
                                    return var2;
 286:
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
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var28.bind(var27)(var12, var14);
            var14 = var27.useCallback;
            var12 = new Array(2);
            var12[0] = var25;
            var12[1] = var7;
            var7 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.mainDocumentURL;
                    var2 = _closure2_slot25;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0017_ip = 37; continue _fun0017 }
 22:
                    if(!(var5 != var4)) { _fun0017_ip = 37; continue _fun0017 }
 26:
                    var2 = _closure2_slot25;
                    if(!(var4 === var2)) { _fun0017_ip = 283; continue _fun0017 }
 37:
                    var4 = _closure1_slot17;
                    var3 = _closure2_slot28;
                    var6 = undefined;
                    var8 = var4.bind(var6)(var3);
                    var4 = var8.bind(var6)();
                    var3 = var4.done;
                    var7 = global;
                    if(var3) { _fun0017_ip = 139; continue _fun0017 }
 69:
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
                    if(var3) { _fun0017_ip = 135; continue _fun0017 }
 118:
                    var9 = var8.bind(var6)();
                    var3 = var9.done;
                    var4 = var9;
                    if(var3) { _fun0017_ip = 139; continue _fun0017 }
 133:
                    _fun0017_ip = 69; continue _fun0017;
 135:
                    var3 = true;
                    return var3;
 139:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var7 = 28;
                    var3 = var3[var7];
                    var8 = var4.bind(var6)(var3);
                    var4 = var8.toURLSafe;
                    var9 = _closure1_slot8;
                    var3 = var9.getActivityUrlOverride;
                    var9 = var3.bind(var9)();
                    var10 = var5 != var9;
                    var3 = '';
                    if(!var10) { _fun0017_ip = 193; continue _fun0017 }
 190:
                    var3 = var9;
 193:
                    var4 = var4.bind(var8)(var3);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var7];
                    var6 = var3.bind(var6)(var2);
                    var3 = var6.toURLSafe;
                    var2 = var1.url;
                    var3 = var3.bind(var6)(var2);
                    var2 = var5 != var4;
                    if(!var2) { _fun0017_ip = 242; continue _fun0017 }
 238:
                    var2 = var5 != var3;
 242:
                    if(!var2) { _fun0017_ip = 281; continue _fun0017 }
 245:
                    var5 = var4.origin;
                    var4 = var4.pathname;
                    var4 = var5 + var4;
                    var5 = var3.origin;
                    var3 = var3.pathname;
                    var3 = var5 + var3;
                    var2 = var4 === var3;
 281:
                    return var2;
 283:
                    var3 = _closure1_slot7;
                    var2 = var3.openURL;
                    var1 = var1.url;
                    var1 = var2.bind(var3)(var1);
                    var1 = false;
                    return var1;
                }
            };
            var12 = var14.bind(var27)(var7, var12);
            var33 = var1 != var25;
            if(!var33) { _fun0005_ip = 1356; continue _fun0005 }
 1352:
            var33 = var1 != var21;
 1356:
            if(!var33) { _fun0005_ip = 1363; continue _fun0005 }
 1359:
            var33 = var1 != var23;
 1363:
            _closure2_slot30 = var33;
            var30 = _closure1_slot6;
            var7 = var30.useRef;
            var7 = var7.bind(var30)(var1);
            _closure2_slot31 = var7;
            var28 = var30.useCallback;
            var27 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = _closure2_slot31;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0018_ip = 62; continue _fun0018 }
 18:
                    var2 = var3.injectJavaScript;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 29;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = new Array(0);
            var31 = var28.bind(var30)(var27, var14);
            _closure2_slot32 = var31;
            var28 = var30.useCallback;
            var27 = new Array(3);
            var27[0] = var15;
            var35 = var1 == var21;
            var14 = undefined;
            if(var35) { _fun0005_ip = 1439; continue _fun0005 }
 1433:
            var14 = var21.origin;
 1439:
            var27[1] = var14;
            var27[2] = var31;
            var14 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var2 = _closure2_slot8;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0019_ip = 155; continue _fun0019 }
 16:
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
                    if(!var2) { _fun0019_ip = 89; continue _fun0019 }
 62:
                    var3 = _closure2_slot13;
                    var4 = var7 == var3;
                    var3 = undefined;
                    if(var4) { _fun0019_ip = 85; continue _fun0019 }
 75:
                    var4 = _closure2_slot13;
                    var3 = var4.origin;
 85:
                    var2 = var7 != var3;
 89:
                    if(!var2) { _fun0019_ip = 155; continue _fun0019 }
 92:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.handleMessage;
                    var6 = _closure2_slot13;
                    var6 = var7 == var6;
                    if(var6) { _fun0019_ip = 144; continue _fun0019 }
 134:
                    var6 = _closure2_slot13;
                    var2 = var6.origin;
 144:
                    var1 = _closure2_slot32;
                    var1 = var3.bind(var4)(var5, var2, var1);
 155:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var28.bind(var30)(var14, var27);
            var30 = _closure1_slot6;
            var28 = var30.useEffect;
            var27 = new Array(6);
            var27[0] = var2;
            var27[1] = var34;
            var27[2] = var33;
            var27[3] = var32;
            var27[4] = var31;
            var27[5] = var11;
            var5 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = _closure2_slot30;
                    if(!var2) { _fun0020_ip = 39; continue _fun0020 }
 10:
                    var2 = _closure2_slot15;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0020_ip = 39; continue _fun0020 }
 20:
                    var1 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0021_ip = 365; continue _fun0021 }
 10:
                                    var2 = undefined;
                                    var10 = undefined;
                                    var3 = undefined;
                                    var5 = _closure2_slot7;
                                    if(var5) { _fun0021_ip = 32; continue _fun0021 }
 26:
                                    var5 = _closure2_slot17;
                                    _fun0021_ip = 46; continue _fun0021;
 32:
                                    var5 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
 46:
                                    var10 = var5;
                                    var6 = {};
                                    var5 = 'safeAreaUpdateEvent';
                                    var6['type'] = var5;
                                    var8 = {};
                                    var9 = {};
                                    var13 = _closure1_slot19;
                                    var11 = _closure2_slot9;
                                    var7 = null;
                                    var11 = var7 == var11;
                                    var12 = undefined;
                                    if(var11) { _fun0021_ip = 96; continue _fun0021 }
 87:
                                    var11 = _closure2_slot9;
                                    var12 = var11.left;
 96:
                                    var11 = var10;
                                    var11 = var11.left;
                                    var11 = var13.bind(var2)(var12, var11);
                                    var9['left'] = var11;
                                    var13 = _closure1_slot19;
                                    var11 = _closure2_slot9;
                                    var11 = var7 == var11;
                                    var12 = undefined;
                                    if(var11) { _fun0021_ip = 140; continue _fun0021 }
 131:
                                    var11 = _closure2_slot9;
                                    var12 = var11.right;
 140:
                                    var11 = var10;
                                    var11 = var11.right;
                                    var11 = var13.bind(var2)(var12, var11);
                                    var9['right'] = var11;
                                    var13 = _closure1_slot19;
                                    var11 = _closure2_slot9;
                                    var11 = var7 == var11;
                                    var12 = undefined;
                                    if(var11) { _fun0021_ip = 184; continue _fun0021 }
 175:
                                    var11 = _closure2_slot9;
                                    var12 = var11.top;
 184:
                                    var11 = var10;
                                    var11 = var11.top;
                                    var11 = var13.bind(var2)(var12, var11);
                                    var9['top'] = var11;
                                    var12 = _closure1_slot19;
                                    var11 = _closure2_slot9;
                                    var13 = var7 == var11;
                                    var11 = undefined;
                                    if(var13) { _fun0021_ip = 228; continue _fun0021 }
 219:
                                    var13 = _closure2_slot9;
                                    var11 = var13.bottom;
 228:
                                    var10 = var10.bottom;
                                    var10 = var12.bind(var2)(var11, var10);
                                    var9['bottom'] = var10;
                                    var8['insets'] = var9;
                                    var6['data'] = var8;
                                    var3 = var6;
 255: // try_start_0
                                    var9 = _closure2_slot15;
                                    var8 = var9.injectJavaScript;
                                    var10 = _closure1_slot1;
                                    var11 = _closure1_slot3;
                                    var6 = 29;
                                    var6 = var11[var6];
                                    var10 = var10.bind(var2)(var6);
                                    var6 = var3;
                                    var6 = var10.bind(var2)(var6);
                                    var6 = var8.bind(var9)(var6);
                                    SaveGenerator(address=302);
 300:
                                    return var6;
 302:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(var8) { _fun0021_ip = 310; continue _fun0021 }
 308: // try_end0
                                    _fun0021_ip = 362; continue _fun0021;
 310:
                                    return var6;
 313: // catch_target0
                                    CatchBlockStart(arg_register=5);
                                    var6 = _closure2_slot31;
                                    var6 = var6.current;
                                    if(!(var7 != var6)) { _fun0021_ip = 362; continue _fun0021 }
 328:
                                    var4 = _closure2_slot32;
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot3;
                                    var5 = 29;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var2)(var5);
                                    var3 = var5.bind(var2)(var3);
                                    var3 = var4.bind(var2)(var3);
 362:
                                    return var2;
 365:
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
 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var28.bind(var30)(var5, var27);
            if(!(var1 != var25)) { _fun0005_ip = 2098; continue _fun0005 }
 1517:
            if(!(var1 != var21)) { _fun0005_ip = 2098; continue _fun0005 }
 1524:
            if(!var4) { _fun0005_ip = 1534; continue _fun0005 }
 1527:
            if(!(var8 !== var3)) { _fun0005_ip = 2098; continue _fun0005 }
 1534:
            var4 = {};
            var27 = _closure1_slot19;
            var3 = var1 == var11;
            var5 = undefined;
            if(var3) { _fun0005_ip = 1554; continue _fun0005 }
 1549:
            var5 = var11.left;
 1554:
            var3 = var2.left;
            var3 = var27.bind(var6)(var5, var3);
            var4['left'] = var3;
            var27 = _closure1_slot19;
            var3 = var1 == var11;
            var5 = undefined;
            if(var3) { _fun0005_ip = 1587; continue _fun0005 }
 1582:
            var5 = var11.right;
 1587:
            var3 = var2.right;
            var3 = var27.bind(var6)(var5, var3);
            var4['right'] = var3;
            var27 = _closure1_slot19;
            var3 = var1 == var11;
            var5 = undefined;
            if(var3) { _fun0005_ip = 1620; continue _fun0005 }
 1615:
            var5 = var11.top;
 1620:
            var3 = var2.top;
            var3 = var27.bind(var6)(var5, var3);
            var4['top'] = var3;
            var5 = _closure1_slot19;
            var27 = var1 == var11;
            var3 = undefined;
            if(var27) { _fun0005_ip = 1653; continue _fun0005 }
 1648:
            var3 = var11.bottom;
 1653:
            var2 = var2.bottom;
            var2 = var5.bind(var6)(var3, var2);
            var4['bottom'] = var2;
            var2 = _closure1_slot16;
            var11 = undefined;
            if(!var2) { _fun0005_ip = 1708; continue _fun0005 }
 1677:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 19;
            var2 = var5[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.createInjectedJavascriptForIOS;
            var11 = var2.bind(var3)(var4);
 1708:
            var3 = var1 == var23;
            var2 = null;
            if(var3) { _fun0005_ip = 2096; continue _fun0005 }
 1720:
            var5 = _closure1_slot13;
            var4 = _closure1_slot0;
            var27 = _closure1_slot3;
            var3 = 14;
            var3 = var27[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.WebView;
            var3 = {};
            var26 = var26.webView;
            var3['style'] = var26;
            var3['ref'] = var7;
            var7 = {};
            var7['uri'] = var25;
            var3['source'] = var7;
            var7 = {};
            var25 = var21.port;
            if(!(var29 !== var25)) { _fun0005_ip = 1825; continue _fun0005 }
 1789:
            var28 = var21.hostname;
            var27 = var21.port;
            var25 = var20.HermesInternal;
            var26 = var25.concat;
            var25 = ':';
            var25 = var26.bind(var29)(var28, var25, var27);
            _fun0005_ip = 1831; continue _fun0005;
 1825:
            var25 = var21.host;
 1831:
            var7['domain'] = var25;
            var25 = var21.protocol;
            var21 = 'http:';
            var21 = var21 === var25;
            var7['httpAllowed'] = var21;
            var21 = {};
            var25 = 'internal';
            var21['type'] = var25;
            var20 = var20.HermesInternal;
            var20 = var20.concat;
            var25 = '/';
            var20 = var20.bind(var25)(var22, var25);
            var21['path'] = var20;
            var22 = var23.substring;
            var20 = var23.lastIndexOf;
            var20 = var20.bind(var23)(var25);
            var20 = var22.bind(var23)(var24, var20);
            var21['directory'] = var20;
            var20 = new Array(1);
            var20[0] = var21;
            var7['pathHandlers'] = var20;
            var3['androidAssetLoaderConfig'] = var7;
            var7 = ['*'];
            var3['originWhitelist'] = var7;
            var7 = 'never';
            var3['overScrollMode'] = var7;
            var3['scrollEnabled'] = var8;
            var7 = true;
            var3['cacheEnabled'] = var7;
            var3['onError'] = var19;
            var3['onContentProcessDidTerminate'] = var18;
            var3['onRenderProcessGone'] = var17;
            var3['webViewKey'] = var15;
            var3['temporaryParentNodeTag'] = var16;
            var15 = var1 != var15;
            var3['messagingWithWebViewKeyEnabled'] = var15;
            var3['onMessage'] = var14;
            var13 = _closure1_slot16;
            var3['allowFileAccess'] = var13;
            var3['injectedJavaScript'] = var11;
            var3['injectedJavaScriptForMainFrameOnly'] = var8;
            var11 = undefined;
            if(!var13) { _fun0005_ip = 2051; continue _fun0005 }
 2048:
            var11 = var12;
 2051:
            var3['onShouldStartLoadWithRequest'] = var11;
            var3['mediaPlaybackRequiresUserAction'] = var8;
            var3['ignoreSilentHardwareSwitch'] = var10;
            var3['allowsInlineMediaPlayback'] = var7;
            var3['minimumFontSize'] = var9;
            var3['bounces'] = var8;
            var3['allowsProtectedMedia'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 2096:
            return var2;
 2098:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();