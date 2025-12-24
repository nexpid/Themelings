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
case 0:
            var1 = arg1;
            var34 = var1.activityUrl;
            var12 = var1.applicationId;
            var _closure2_slot0 = var12;
            var21 = var1.channelId;
            var _closure2_slot1 = var21;
            var29 = var1.guildId;
            var _closure2_slot2 = var29;
            var18 = var1.activitySessionId;
            var _closure2_slot3 = var18;
            var27 = var1.queryParams;
            var7 = var1.onActivityCrash;
            var _closure2_slot4 = var7;
            var19 = var1.onLoadError;
            var _closure2_slot5 = var19;
            var17 = var1.allowPopups;
            var8 = var1.referrerPolicy;
            var _closure2_slot6 = var8;
            var32 = var1.isPipOrGridMode;
            var _closure2_slot7 = var32;
            var15 = var1.webViewKey;
            var _closure2_slot8 = var15;
            var10 = var1.ignoreSilentHardwareSwitch;
            var6 = undefined;
            if(!(var10 === var6)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var10 = true;
case 43:
            var23 = var1.safeAreasConfig;
            var _closure2_slot9 = var23;
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
            var _closure2_slot33 = var6;
            var _closure2_slot34 = var6;
            var1 = _closure1_slot14;
            var22 = var1.bind(var6)();
            var28 = _closure1_slot6;
            var2 = var28.useContext;
            var4 = _closure1_slot0;
            var20 = _closure1_slot3;
            var1 = 11;
            var1 = var20[var1];
            var1 = var4.bind(var6)(var1);
            var1 = var1.WebViewContext;
            var16 = var2.bind(var28)(var1);
            var2 = var28.useState;
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
            var1 = var2.bind(var28)(var1);
            var14 = _closure1_slot5;
            var9 = 1;
            var1 = var14.bind(var6)(var1, var9);
            var11 = 0;
            var4 = var1[var11];
            _closure2_slot11 = var4;
            var2 = var28.useState;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.v4;
                    var1 = var1.bind(var2)();
                    _fun0006_ip = 47; continue _fun0006;
case 45:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getOrCreateFrameId;
                    var1 = var2.bind(var3)();
case 47:
                    return var1;
                }
            };
            var1 = var2.bind(var28)(var1);
            var1 = var14.bind(var6)(var1, var9);
            var26 = var1[var11];
            _closure2_slot12 = var26;
            var2 = var28.useState;
            var1 = null;
            var2 = var2.bind(var28)(var1);
            var33 = 2;
            var2 = var14.bind(var6)(var2, var33);
            var5 = var2[var11];
            _closure2_slot13 = var5;
            var2 = var2[var9];
            _closure2_slot14 = var2;
            var30 = var28.useMemo;
            var24 = new Array(1);
            var24[0] = var15;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 29:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 14;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getWebViewProxy;
                    var2 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2);
case 48:
                    return var1;
                }
            };
            var30 = var30.bind(var28)(var2, var24);
            _closure2_slot15 = var30;
            var2 = var28.useState;
            var2 = var2.bind(var28)(var1);
            var14 = var14.bind(var6)(var2, var33);
            var2 = var14[var11];
            _closure2_slot16 = var2;
            var14 = var14[var9];
            _closure2_slot17 = var14;
            var24 = var28.useEffect;
            var14 = new Array(3);
            var14[0] = var4;
            var14[1] = var26;
            var14[2] = var15;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(!var1) { _fun0008_ip = 29; continue _fun0008 }
case 49:
                    var3 = _closure2_slot8;
                    var2 = null;
                    var1 = var2 != var3;
case 29:
                    if(var1) { _fun0008_ip = 50; continue _fun0008 }
case 31:
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
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var24.bind(var28)(var4, var14);
            var24 = var28.useEffect;
            var14 = new Array(2);
            var14[0] = var15;
            var14[1] = var26;
            var4 = function() {
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot8;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0009_ip = 51; continue _fun0009 }
case 46:
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
case 51:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var24.bind(var28)(var4, var14);
            var14 = _closure1_slot1;
            var4 = 16;
            var4 = var20[var4];
            var4 = var14.bind(var6)(var4);
            var24 = var4.bind(var6)();
            _closure2_slot18 = var24;
            var14 = {};
            if(!(var1 != var3)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var4 = var3.customId;
            if(!(var1 != var4)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var4 = var3.customId;
            var14['custom_id'] = var4;
case 54:
            var4 = var3.referrerId;
            if(!(var1 != var4)) { _fun0005_ip = 52; continue _fun0005 }
case 56:
            var4 = var3.referrerId;
            var14['referrer_id'] = var4;
case 52:
            var20 = _closure1_slot2;
            var31 = _closure1_slot3;
            var4 = 17;
            var4 = var31[var4];
            var20 = var20.bind(var6)(var4);
            var4 = var20.getConstants;
            var4 = var4.bind(var20)();
            var20 = {};
            var40 = var20;
            var39 = var27;
            var27 = copyDataProperties(var40, var39);
            var40 = var20;
            var39 = var14;
            var14 = copyDataProperties(var40, var39);
            var14 = 'frame_id';
            var20[var14] = var26;
            var14 = _closure1_slot9;
            var27 = var14.MOBILE;
            var14 = 'platform';
            var20[var14] = var27;
            var14 = var4.Version;
            var4 = 'mobile_app_version';
            var20[var4] = var14;
            var28 = _closure1_slot1;
            var4 = 18;
            var4 = var31[var4];
            var14 = var28.bind(var6)(var4);
            var4 = {};
            var4['allowPopups'] = var17;
            var35 = var14.bind(var6)(var4);
            _closure2_slot19 = var35;
            var4 = global;
            var14 = var4.URLSearchParams;
            var17 = var14.prototype;
            var17 = Object.create(var17, {constructor: {value: var14}});
            var41 = var17;
            var40 = var20;
            var14 = new var41[var14](var40, var39);
            var20 = var14 instanceof Object ? var14 : var17;
            var14 = var4.HermesInternal;
            var17 = var14.concat;
            var27 = '';
            var14 = '?';
            var34 = var17.bind(var27)(var34, var14, var20);
            _closure2_slot20 = var34;
            var20 = _closure1_slot6;
            var14 = var20.useRef;
            var14 = var14.bind(var20)(var23);
            _closure2_slot21 = var14;
            var17 = var20.useEffect;
            var14 = new Array(4);
            var14[0] = var34;
            var14[1] = var35;
            var14[2] = var19;
            var14[3] = var8;
            var8 = function() {
                var2 = function() {
                    var4 = _closure1_slot4;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 57; continue _fun0010 }
case 49:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 16;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.getStableSafeAreaInsets;
                                var11 = var2.bind(var4)();
                                var2 = _closure2_slot21;
                                var10 = var2.current;
                                var7 = {};
                                var12 = _closure1_slot19;
                                var5 = null;
                                var2 = var5 == var10;
                                var6 = undefined;
                                if(var2) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                                var6 = var10.left;
case 58:
                                var2 = var5 == var11;
                                var13 = undefined;
                                if(var2) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                                var13 = var11.left;
case 60:
                                var14 = var5 != var13;
                                var2 = 0;
                                if(!var14) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                                var2 = var13;
case 62:
                                var2 = var12.bind(var3)(var6, var2);
                                var7['left'] = var2;
                                var12 = _closure1_slot19;
                                var2 = var5 == var10;
                                var6 = undefined;
                                if(var2) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                                var6 = var10.right;
case 64:
                                var2 = var5 == var11;
                                var13 = undefined;
                                if(var2) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                                var13 = var11.right;
case 66:
                                var14 = var5 != var13;
                                var2 = 0;
                                if(!var14) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                                var2 = var13;
case 68:
                                var2 = var12.bind(var3)(var6, var2);
                                var7['right'] = var2;
                                var12 = _closure1_slot19;
                                var2 = var5 == var10;
                                var6 = undefined;
                                if(var2) { _fun0010_ip = 19; continue _fun0010 }
case 70:
                                var6 = var10.top;
case 19:
                                var2 = var5 == var11;
                                var13 = undefined;
                                if(var2) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                                var13 = var11.top;
case 71:
                                var14 = var5 != var13;
                                var2 = 0;
                                if(!var14) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                                var2 = var13;
case 73:
                                var2 = var12.bind(var3)(var6, var2);
                                var7['top'] = var2;
                                var6 = _closure1_slot19;
                                var12 = var5 == var10;
                                var2 = undefined;
                                if(var12) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                                var2 = var10.bottom;
case 75:
                                var12 = var5 == var11;
                                var10 = undefined;
                                if(var12) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                                var10 = var11.bottom;
case 77:
                                var11 = var5 != var10;
                                var9 = 0;
                                if(!var11) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                                var9 = var10;
case 79:
                                var2 = var6.bind(var3)(var2, var9);
                                var7['bottom'] = var2;
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var2 = 19;
                                var2 = var9[var2];
                                var6 = var6.bind(var3)(var2);
                                var2 = {};
                                var9 = _closure2_slot20;
                                var2['iFrameUri'] = var9;
                                var9 = _closure2_slot19;
                                var2['iFrameSandboxAttributes'] = var9;
                                var9 = _closure2_slot6;
                                var2['referrerPolicy'] = var9;
                                var2['insets'] = var7;
                                var9 = _closure1_slot16;
                                var7 = undefined;
                                if(var9) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                                var7 = _closure1_slot10;
case 81:
                                var2['messageForDisallowedNavigationError'] = var7;
                                var2 = var6.bind(var3)(var2);
                                SaveGenerator(address=358);
case 83:
                                return var2;
case 84:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                                if(!(var5 == var2)) { _fun0010_ip = 87; continue _fun0010 }
case 88:
                                var5 = _closure2_slot5;
                                var5 = var5.bind(var3)();
                                _fun0010_ip = 89; continue _fun0010;
case 87:
                                var4 = _closure2_slot17;
                                var4 = var4.bind(var3)(var2);
case 89:
                                return var3;
case 85:
                                return var2;
case 57:
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
            var8 = var17.bind(var20)(var8, var14);
            var17 = var20.useCallback;
            var14 = new Array(1);
            var14[0] = var12;
            var8 = function(arg1) {
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
            var19 = var17.bind(var20)(var8, var14);
            var17 = var20.useCallback;
            var14 = new Array(1);
            var14[0] = var12;
            var8 = function(arg1) {
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
            var17 = var17.bind(var20)(var8, var14);
            var14 = var20.useCallback;
            var8 = new Array(7);
            var8[0] = var12;
            var8[1] = var21;
            var8[2] = var29;
            var8[3] = var18;
            var8[4] = var26;
            var8[5] = var7;
            var8[6] = var30;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
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
                    if(!(var3 != var4)) { _fun0011_ip = 90; continue _fun0011 }
case 91:
                    var4 = _closure2_slot15;
                    var3 = var4.releaseWebView;
                    var3 = var3.bind(var4)();
case 90:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var18 = var14.bind(var20)(var7, var8);
            var8 = _closure1_slot0;
            var7 = 21;
            var7 = var31[var7];
            var29 = var8.bind(var6)(var7);
            var14 = var29.useStateFromStores;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getUseActivityUrlOverride;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var14.bind(var29)(var8, var7);
            _closure2_slot22 = var7;
            var14 = var20.useState;
            var8 = false;
            var29 = var14.bind(var20)(var8);
            var14 = _closure1_slot5;
            var14 = var14.bind(var6)(var29, var33);
            var29 = var14[var11];
            _closure2_slot23 = var29;
            var14 = var14[var9];
            _closure2_slot24 = var14;
            var14 = 22;
            var14 = var31[var14];
            var14 = var28.bind(var6)(var14);
            var28 = var14.bind(var6)(var29);
            _closure2_slot25 = var28;
            var31 = var20.useEffect;
            var14 = new Array(2);
            var14[0] = var34;
            var14[1] = var7;
            var7 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0: // try_start_0
                    var1 = global;
                    var5 = var1.URL;
                    var6 = _closure2_slot20;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = _closure2_slot14;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4);
case 2: // try_end0
                    _fun0012_ip = 51; continue _fun0012;
case 92: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure2_slot22;
                    if(var3) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                    throw var2;
case 93:
                    var3 = _closure2_slot24;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var31.bind(var20)(var7, var14);
            var14 = var20.useEffect;
            var7 = new Array(5);
            var7[0] = var29;
            var7[1] = var28;
            var7[2] = var21;
            var7[3] = var12;
            var7[4] = var3;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot25;
                    var1 = !var1;
                    if(!var1) { _fun0013_ip = 95; continue _fun0013 }
case 46:
                    var1 = _closure2_slot23;
case 95:
                    if(!var1) { _fun0013_ip = 96; continue _fun0013 }
case 31:
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
                    var8 = var8.PtobXW;
                    var8 = var9.bind(var12)(var8);
                    var2['title'] = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8.55iAUT;
                    var8 = var9.bind(var12)(var8);
                    var2['body'] = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var5)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var5)(var7);
                    var7 = var7.t;
                    var7 = var7.BddRzS;
                    var7 = var8.bind(var9)(var7);
                    var2['confirmText'] = var7;
                    var2 = var3.bind(var6)(var2);
                    var2 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 != var2)) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 25;
                    var2 = var6[var2];
                    var6 = var3.bind(var5)(var2);
                    var3 = var6.selectParticipant;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var6)(var2, var7);
case 97:
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
                    if(var6) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                    var6 = _closure2_slot10;
                    var5 = var6.location;
case 99:
                    var1['location'] = var5;
                    var4 = _closure2_slot0;
                    var1['applicationId'] = var4;
                    var4 = false;
                    var1['showFeedback'] = var4;
                    var1 = var2.bind(var3)(var1);
case 96:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var14.bind(var20)(var3, var7);
            _closure2_slot26 = var1;
            var3 = var1 != var5;
            var21 = null;
            if(!var3) { _fun0005_ip = 101; continue _fun0005 }
case 102:
            var3 = _closure1_slot16;
            if(var3) { _fun0005_ip = 103; continue _fun0005 }
case 104:
            var40 = var5.origin;
            var3 = var4.HermesInternal;
            var14 = var3.concat;
            var39 = '/';
            var37 = '/activity.html';
            var41 = var27;
            var38 = var26;
            var3 = var41[var14](var40, var39, var38, var37, var36);
            _fun0005_ip = 105; continue _fun0005;
case 103:
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var4 = 'file://';
            var3 = var7.bind(var4)(var2);
case 105:
            _closure2_slot26 = var3;
            var21 = var3;
case 101:
            var4 = _closure1_slot16;
            _closure2_slot27 = var4;
            var20 = _closure1_slot6;
            var3 = var20.useState;
            var3 = var3.bind(var20)(var8);
            var14 = _closure1_slot5;
            var7 = var14.bind(var6)(var3, var33);
            var3 = var7[var11];
            var7 = var7[var9];
            _closure2_slot28 = var7;
            var27 = var20.useState;
            var7 = new Array(0);
            var7 = var27.bind(var20)(var7);
            var14 = var14.bind(var6)(var7, var33);
            var7 = var14[var11];
            _closure2_slot29 = var7;
            var14 = var14[var9];
            _closure2_slot30 = var14;
            var27 = var20.useEffect;
            var14 = new Array(2);
            var14[0] = var12;
            var14[1] = var4;
            var12 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot27;
                    if(!var2) { _fun0014_ip = 106; continue _fun0014 }
case 107:
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
                            if(!(var1 !== var3)) { _fun0015_ip = 108; continue _fun0015 }
case 31:
                            var2 = var3.length;
                            var1 = 2;
                            if(!(!(var2 >= var1))) { _fun0015_ip = 109; continue _fun0015 }
case 108:
                            var1 = new Array(0);
                            _fun0015_ip = 110; continue _fun0015;
case 109:
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
case 110:
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
                                    if(var2) { _fun0016_ip = 111; continue _fun0016 }
case 49:
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
case 112:
                                    return var2;
case 113:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                    if(var6) { _fun0016_ip = 10; continue _fun0016 }
case 114:
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
                                    var6 = _closure2_slot30;
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
                                    var5 = _closure2_slot28;
                                    var4 = true;
                                    var4 = var5.bind(var3)(var4);
                                    return var3;
case 10:
                                    return var2;
case 111:
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
            var12 = var27.bind(var20)(var12, var14);
            var14 = var20.useCallback;
            var12 = new Array(2);
            var12[0] = var21;
            var12[1] = var7;
            var7 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.mainDocumentURL;
                    var2 = _closure2_slot26;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0017_ip = 115; continue _fun0017 }
case 116:
                    if(!(var5 != var4)) { _fun0017_ip = 115; continue _fun0017 }
case 117:
                    var2 = _closure2_slot26;
                    if(!(var4 === var2)) { _fun0017_ip = 10; continue _fun0017 }
case 115:
                    var4 = _closure1_slot17;
                    var3 = _closure2_slot29;
                    var6 = undefined;
                    var8 = var4.bind(var6)(var3);
                    var4 = var8.bind(var6)();
                    var3 = var4.done;
                    var7 = global;
                    if(var3) { _fun0017_ip = 118; continue _fun0017 }
case 119:
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
                    if(var3) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                    var9 = var8.bind(var6)();
                    var3 = var9.done;
                    var4 = var9;
                    if(var3) { _fun0017_ip = 118; continue _fun0017 }
case 64:
                    _fun0017_ip = 119; continue _fun0017;
case 120:
                    var3 = true;
                    return var3;
case 118:
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
                    if(!var10) { _fun0017_ip = 122; continue _fun0017 }
case 123:
                    var3 = var9;
case 122:
                    var4 = var4.bind(var8)(var3);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var7];
                    var6 = var3.bind(var6)(var2);
                    var3 = var6.toURLSafe;
                    var2 = var1.url;
                    var3 = var3.bind(var6)(var2);
                    var2 = var5 != var4;
                    if(!var2) { _fun0017_ip = 124; continue _fun0017 }
case 125:
                    var2 = var5 != var3;
case 124:
                    if(!var2) { _fun0017_ip = 126; continue _fun0017 }
case 127:
                    var5 = var4.origin;
                    var4 = var4.pathname;
                    var4 = var5 + var4;
                    var5 = var3.origin;
                    var3 = var3.pathname;
                    var3 = var5 + var3;
                    var2 = var4 === var3;
case 126:
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
            var12 = var14.bind(var20)(var7, var12);
            var31 = var1 != var21;
            if(!var31) { _fun0005_ip = 128; continue _fun0005 }
case 129:
            var31 = var1 != var5;
case 128:
            if(!var31) { _fun0005_ip = 130; continue _fun0005 }
case 131:
            var31 = var1 != var2;
case 130:
            _closure2_slot31 = var31;
            var28 = _closure1_slot6;
            var7 = var28.useRef;
            var7 = var7.bind(var28)(var1);
            _closure2_slot32 = var7;
            var27 = var28.useCallback;
            var20 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot32;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0018_ip = 93; continue _fun0018 }
case 132:
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
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = new Array(0);
            var29 = var27.bind(var28)(var20, var14);
            _closure2_slot33 = var29;
            var27 = var28.useCallback;
            var20 = new Array(3);
            var20[0] = var15;
            var34 = var1 == var5;
            var14 = undefined;
            if(var34) { _fun0005_ip = 133; continue _fun0005 }
case 134:
            var14 = var5.origin;
case 133:
            var20[1] = var14;
            var20[2] = var29;
            var14 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0019_ip = 135; continue _fun0019 }
case 136:
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
                    if(!var2) { _fun0019_ip = 137; continue _fun0019 }
case 93:
                    var3 = _closure2_slot13;
                    var4 = var7 == var3;
                    var3 = undefined;
                    if(var4) { _fun0019_ip = 50; continue _fun0019 }
case 51:
                    var4 = _closure2_slot13;
                    var3 = var4.origin;
case 50:
                    var2 = var7 != var3;
case 137:
                    if(!var2) { _fun0019_ip = 135; continue _fun0019 }
case 138:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.handleMessage;
                    var6 = _closure2_slot13;
                    var6 = var7 == var6;
                    if(var6) { _fun0019_ip = 139; continue _fun0019 }
case 112:
                    var6 = _closure2_slot13;
                    var2 = var6.origin;
case 139:
                    var1 = _closure2_slot33;
                    var1 = var3.bind(var4)(var5, var2, var1);
case 135:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var27.bind(var28)(var14, var20);
            var28 = _closure1_slot6;
            var20 = var28.useState;
            var27 = var20.bind(var28)(var1);
            var20 = _closure1_slot5;
            var27 = var20.bind(var6)(var27, var33);
            var20 = var27[var11];
            var27 = var27[var9];
            _closure2_slot34 = var27;
            var33 = var28.useEffect;
            var27 = new Array(3);
            var27[0] = var26;
            var27[1] = var5;
            var27[2] = var2;
            var26 = function() {
                var3 = _closure2_slot34;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure2_slot13;
                        var4 = null;
                        var1 = var5;
                        if(!(var4 != var2)) { _fun0020_ip = 140; continue _fun0020 }
case 116:
                        var2 = _closure2_slot12;
                        var1 = var5;
                        if(!(var4 != var2)) { _fun0020_ip = 140; continue _fun0020 }
case 141:
                        var2 = _closure2_slot16;
                        var1 = var5;
                        if(!(var4 != var2)) { _fun0020_ip = 140; continue _fun0020 }
case 45:
                        var2 = {};
                        var4 = _closure2_slot13;
                        var4 = var4.port;
                        var8 = '';
                        if(!(var8 !== var4)) { _fun0020_ip = 142; continue _fun0020 }
case 35:
                        var4 = _closure2_slot13;
                        var7 = var4.hostname;
                        var4 = _closure2_slot13;
                        var6 = var4.port;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = ':';
                        var4 = var5.bind(var8)(var7, var4, var6);
                        _fun0020_ip = 143; continue _fun0020;
case 142:
                        var5 = _closure2_slot13;
                        var4 = var5.host;
case 143:
                        var2['domain'] = var4;
                        var4 = _closure2_slot13;
                        var5 = var4.protocol;
                        var4 = 'http:';
                        var4 = var4 === var5;
                        var2['httpAllowed'] = var4;
                        var4 = {};
                        var5 = 'internal';
                        var4['type'] = var5;
                        var6 = _closure2_slot12;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var5 = var5.concat;
                        var8 = '/';
                        var5 = var5.bind(var8)(var6, var8);
                        var4['path'] = var5;
                        var7 = _closure2_slot16;
                        var6 = var7.substring;
                        var5 = _closure2_slot16;
                        var3 = var5.lastIndexOf;
                        var5 = var3.bind(var5)(var8);
                        var3 = 0;
                        var3 = var6.bind(var7)(var3, var5);
                        var4['directory'] = var3;
                        var3 = new Array(1);
                        var3[0] = var4;
                        var2['pathHandlers'] = var3;
                        var1 = var2;
case 140:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var26 = var33.bind(var28)(var26, var27);
            var27 = var28.useEffect;
            var26 = new Array(6);
            var26[0] = var24;
            var26[1] = var32;
            var26[2] = var31;
            var26[3] = var30;
            var26[4] = var29;
            var26[5] = var23;
            var25 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot31;
                    if(!var2) { _fun0021_ip = 144; continue _fun0021 }
case 49:
                    var2 = _closure2_slot15;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0021_ip = 144; continue _fun0021 }
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
                                    if(var2) { _fun0022_ip = 145; continue _fun0022 }
case 49:
                                    var2 = undefined;
                                    var3 = undefined;
                                    var5 = _closure2_slot7;
                                    if(var5) { _fun0022_ip = 3; continue _fun0022 }
case 146:
                                    var14 = _closure2_slot18;
                                    _fun0022_ip = 147; continue _fun0022;
case 3:
                                    var14 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
case 147:
                                    var6 = {};
                                    var5 = 'safeAreaUpdateEvent';
                                    var6['type'] = var5;
                                    var8 = {};
                                    var9 = {};
                                    var13 = _closure1_slot19;
                                    var10 = _closure2_slot9;
                                    var7 = null;
                                    var10 = var7 == var10;
                                    var11 = undefined;
                                    if(var10) { _fun0022_ip = 148; continue _fun0022 }
case 38:
                                    var10 = _closure2_slot9;
                                    var11 = var10.left;
case 148:
                                    var10 = var7 == var14;
                                    var15 = undefined;
                                    if(var10) { _fun0022_ip = 62; continue _fun0022 }
case 149:
                                    var15 = var14.left;
case 62:
                                    var16 = var7 != var15;
                                    var10 = 0;
                                    if(!var16) { _fun0022_ip = 150; continue _fun0022 }
case 151:
                                    var10 = var15;
case 150:
                                    var10 = var13.bind(var2)(var11, var10);
                                    var9['left'] = var10;
                                    var13 = _closure1_slot19;
                                    var10 = _closure2_slot9;
                                    var10 = var7 == var10;
                                    var11 = undefined;
                                    if(var10) { _fun0022_ip = 152; continue _fun0022 }
case 139:
                                    var10 = _closure2_slot9;
                                    var11 = var10.right;
case 152:
                                    var10 = var7 == var14;
                                    var15 = undefined;
                                    if(var10) { _fun0022_ip = 153; continue _fun0022 }
case 154:
                                    var15 = var14.right;
case 153:
                                    var16 = var7 != var15;
                                    var10 = 0;
                                    if(!var16) { _fun0022_ip = 16; continue _fun0022 }
case 155:
                                    var10 = var15;
case 16:
                                    var10 = var13.bind(var2)(var11, var10);
                                    var9['right'] = var10;
                                    var13 = _closure1_slot19;
                                    var10 = _closure2_slot9;
                                    var10 = var7 == var10;
                                    var11 = undefined;
                                    if(var10) { _fun0022_ip = 156; continue _fun0022 }
case 157:
                                    var10 = _closure2_slot9;
                                    var11 = var10.top;
case 156:
                                    var10 = var7 == var14;
                                    var15 = undefined;
                                    if(var10) { _fun0022_ip = 158; continue _fun0022 }
case 159:
                                    var15 = var14.top;
case 158:
                                    var16 = var7 != var15;
                                    var10 = 0;
                                    if(!var16) { _fun0022_ip = 75; continue _fun0022 }
case 125:
                                    var10 = var15;
case 75:
                                    var10 = var13.bind(var2)(var11, var10);
                                    var9['top'] = var10;
                                    var11 = _closure1_slot19;
                                    var10 = _closure2_slot9;
                                    var13 = var7 == var10;
                                    var10 = undefined;
                                    if(var13) { _fun0022_ip = 160; continue _fun0022 }
case 161:
                                    var13 = _closure2_slot9;
                                    var10 = var13.bottom;
case 160:
                                    var15 = var7 == var14;
                                    var13 = undefined;
                                    if(var15) { _fun0022_ip = 162; continue _fun0022 }
case 111:
                                    var13 = var14.bottom;
case 162:
                                    var14 = var7 != var13;
                                    var12 = 0;
                                    if(!var14) { _fun0022_ip = 163; continue _fun0022 }
case 164:
                                    var12 = var13;
case 163:
                                    var10 = var11.bind(var2)(var10, var12);
                                    var9['bottom'] = var10;
                                    var8['insets'] = var9;
                                    var6['data'] = var8;
                                    var3 = var6;
case 165: // try_start_0
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
                                    SaveGenerator(address=372);
case 166:
                                    return var6;
case 167:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(var8) { _fun0022_ip = 168; continue _fun0022 }
case 87: // try_end0
                                    _fun0022_ip = 169; continue _fun0022;
case 168:
                                    return var6;
case 170: // catch_target0
                                    CatchBlockStart(arg_register=5);
                                    var6 = _closure2_slot32;
                                    var6 = var6.current;
                                    if(!(var7 != var6)) { _fun0022_ip = 169; continue _fun0022 }
case 171:
                                    var4 = _closure2_slot33;
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot3;
                                    var5 = 29;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var2)(var5);
                                    var3 = var5.bind(var2)(var3);
                                    var3 = var4.bind(var2)(var3);
case 169:
                                    return var2;
case 145:
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
case 144:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var27.bind(var28)(var25, var26);
            if(!(var1 != var21)) { _fun0005_ip = 172; continue _fun0005 }
case 173:
            if(!(var1 != var5)) { _fun0005_ip = 172; continue _fun0005 }
case 174:
            if(!var4) { _fun0005_ip = 175; continue _fun0005 }
case 176:
            if(!(var8 !== var3)) { _fun0005_ip = 172; continue _fun0005 }
case 175:
            var5 = {};
            var25 = _closure1_slot19;
            var3 = var1 == var23;
            var4 = undefined;
            if(var3) { _fun0005_ip = 177; continue _fun0005 }
case 178:
            var4 = var23.left;
case 177:
            var3 = var1 == var24;
            var26 = undefined;
            if(var3) { _fun0005_ip = 179; continue _fun0005 }
case 180:
            var26 = var24.left;
case 179:
            var27 = var1 != var26;
            var3 = 0;
            if(!var27) { _fun0005_ip = 181; continue _fun0005 }
case 182:
            var3 = var26;
case 181:
            var3 = var25.bind(var6)(var4, var3);
            var5['left'] = var3;
            var25 = _closure1_slot19;
            var3 = var1 == var23;
            var4 = undefined;
            if(var3) { _fun0005_ip = 183; continue _fun0005 }
case 184:
            var4 = var23.right;
case 183:
            var3 = var1 == var24;
            var26 = undefined;
            if(var3) { _fun0005_ip = 185; continue _fun0005 }
case 186:
            var26 = var24.right;
case 185:
            var27 = var1 != var26;
            var3 = 0;
            if(!var27) { _fun0005_ip = 187; continue _fun0005 }
case 188:
            var3 = var26;
case 187:
            var3 = var25.bind(var6)(var4, var3);
            var5['right'] = var3;
            var25 = _closure1_slot19;
            var3 = var1 == var23;
            var4 = undefined;
            if(var3) { _fun0005_ip = 189; continue _fun0005 }
case 190:
            var4 = var23.top;
case 189:
            var3 = var1 == var24;
            var26 = undefined;
            if(var3) { _fun0005_ip = 191; continue _fun0005 }
case 192:
            var26 = var24.top;
case 191:
            var27 = var1 != var26;
            var3 = 0;
            if(!var27) { _fun0005_ip = 193; continue _fun0005 }
case 194:
            var3 = var26;
case 193:
            var3 = var25.bind(var6)(var4, var3);
            var5['top'] = var3;
            var4 = _closure1_slot19;
            var25 = var1 == var23;
            var3 = undefined;
            if(var25) { _fun0005_ip = 195; continue _fun0005 }
case 196:
            var3 = var23.bottom;
case 195:
            var25 = var1 == var24;
            var23 = undefined;
            if(var25) { _fun0005_ip = 197; continue _fun0005 }
case 198:
            var23 = var24.bottom;
case 197:
            var24 = var1 != var23;
            var11 = 0;
            if(!var24) { _fun0005_ip = 199; continue _fun0005 }
case 200:
            var11 = var23;
case 199:
            var3 = var4.bind(var6)(var3, var11);
            var5['bottom'] = var3;
            var3 = _closure1_slot16;
            var11 = undefined;
            if(!var3) { _fun0005_ip = 201; continue _fun0005 }
case 202:
            var4 = _closure1_slot0;
            var23 = _closure1_slot3;
            var3 = 19;
            var3 = var23[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.createInjectedJavascriptForIOS;
            var11 = var3.bind(var4)(var5);
case 201:
            var3 = var1 == var2;
            var2 = null;
            if(var3) { _fun0005_ip = 203; continue _fun0005 }
case 204:
            var5 = _closure1_slot13;
            var4 = _closure1_slot0;
            var23 = _closure1_slot3;
            var3 = 14;
            var3 = var23[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.WebView;
            var3 = {};
            var22 = var22.webView;
            var3['style'] = var22;
            var3['ref'] = var7;
            var7 = {};
            var7['uri'] = var21;
            var3['source'] = var7;
            var21 = var1 != var20;
            var7 = undefined;
            if(!var21) { _fun0005_ip = 205; continue _fun0005 }
case 206:
            var7 = var20;
case 205:
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
            if(!var13) { _fun0005_ip = 207; continue _fun0005 }
case 208:
            var11 = var12;
case 207:
            var3['onShouldStartLoadWithRequest'] = var11;
            var3['mediaPlaybackRequiresUserAction'] = var8;
            var3['ignoreSilentHardwareSwitch'] = var10;
            var3['allowsInlineMediaPlayback'] = var7;
            var3['minimumFontSize'] = var9;
            var3['bounces'] = var8;
            var3['allowsProtectedMedia'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 203:
            return var2;
case 172:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();