// app/modules/bug_reporter/native/components/BugReporterModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function handleClose() {
        var4 = _closure1_slot9;
        var3 = var4.setState;
        var2 = {};
        var5 = false;
        var2['isReportOpen'] = var5;
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.pop;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot19 = var1;
    var2 = function BugCreateScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.screenshotUri;
            var _closure2_slot0 = var18;
            var2 = var1.screenshot;
            var _closure2_slot1 = var2;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot23 = var4;
            var1 = function _handleAttachmentSelect() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 27;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.launchImageLibraryAsync;
                            var2 = {'mediaType': 'any', 'includeBase64': false, 'selectionLimit': 1};
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 4:
                            return var2;
case 5:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var5 = null;
                            if(!(var5 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var6 = var2.assets;
                            var5 = 0;
                            var10 = var6[var5];
                            var8 = _closure2_slot23;
                            var6 = _closure2_slot7;
                            var6 = var6.length;
                            var8['current'] = var6;
                            var8 = {};
                            var14 = var8;
                            var13 = var10;
                            var6 = copyDataProperties(var14, var13);
                            var9 = var10.uri;
                            var6 = 'uri';
                            var8[5] = var9;
                            var9 = var10.uri;
                            var6 = 'originalUri';
                            var8[5] = var9;
                            var12 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 16;
                            var11 = var9[var6];
                            var11 = var12.bind(var3)(var11);
                            var11 = var11.UploadPlatform;
                            var12 = var11.REACT_NATIVE;
                            var11 = 'platform';
                            var8[10] = var12;
                            var11 = var10.fileName;
                            var10 = 'filename';
                            var8[9] = var11;
                            var7 = _closure1_slot1;
                            var6 = var9[var6];
                            var6 = var7.bind(var3)(var6);
                            var7 = var6.prototype;
                            var7 = Object.create(var7, {constructor: {value: var6}});
                            var15 = var7;
                            var14 = var8;
                            var6 = new var15[var6](var14, var13);
                            var6 = var6 instanceof Object ? var6 : var7;
                            _closure5_slot0 = var6;
                            var7 = _closure2_slot23;
                            var6 = _closure2_slot7;
                            var6 = var6.length;
                            var7['current'] = var6;
                            var5 = _closure2_slot8;
                            var4 = function(arg1) {
                                var1 = new Array(1);
                                var5 = arg1;
                                var4 = 0;
                                var6 = var1;
                                var3 = arraySpread(var6, var5, var4);
                                var2 = _closure5_slot0;
                                var1[2] = var2;
                                var2 = 1;
                                var2 = var3 + var2;
                                return var1;
                            };
                            var4 = var5.bind(var3)(var4);
case 8:
                            return var3;
case 6:
                            return var2;
case 2:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot25 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot25 = var1;
            var1 = _closure1_slot14;
            var19 = var1.bind(var4)();
            var _closure2_slot2 = var19;
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var9 = '';
            var3 = var1.bind(var3)(var9);
            var1 = _closure1_slot4;
            var17 = 2;
            var1 = var1.bind(var4)(var3, var17);
            var16 = 0;
            var14 = var1[var16];
            var _closure2_slot3 = var14;
            var5 = 1;
            var26 = var1[var5];
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var9);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var17);
            var15 = var1[var16];
            var _closure2_slot4 = var15;
            var27 = var1[var5];
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var6 = null;
            var3 = var1.bind(var3)(var6);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var17);
            var28 = var1[var16];
            var _closure2_slot5 = var28;
            var21 = var1[var5];
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var9);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var17);
            var12 = var1[var16];
            var _closure2_slot6 = var12;
            var22 = var1[var5];
            var9 = _closure1_slot5;
            var3 = var9.useState;
            var1 = new Array(0);
            var3 = var3.bind(var9)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var17);
            var40 = var1[var16];
            _closure2_slot7 = var40;
            var1 = var1[var5];
            _closure2_slot8 = var1;
            var3 = _closure1_slot5;
            var1 = var3.useRef;
            var29 = false;
            var1 = var1.bind(var3)(var29);
            var _closure2_slot9 = var1;
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var29);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var17);
            var9 = var1[var16];
            var _closure2_slot10 = var9;
            var1 = var1[var5];
            var _closure2_slot11 = var1;
            var11 = _closure1_slot5;
            var10 = var11.useCallback;
            var3 = function(arg1) {
                var3 = arg1;
                var2 = _closure2_slot9;
                var2['current'] = var3;
                var2 = _closure2_slot11;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var1 = var10.bind(var11)(var3, var1);
            var _closure2_slot12 = var1;
            var10 = _closure1_slot5;
            var3 = var10.useState;
            var10 = var3.bind(var10)(var29);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var10, var17);
            var11 = var3[var16];
            var _closure2_slot13 = var11;
            var3 = var3[var5];
            var _closure2_slot14 = var3;
            var10 = _closure1_slot5;
            var3 = var10.useState;
            var10 = var3.bind(var10)(var29);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var10, var17);
            var10 = var3[var16];
            var _closure2_slot15 = var10;
            var3 = var3[var5];
            var _closure2_slot16 = var3;
            var13 = _closure1_slot5;
            var3 = var13.useState;
            var13 = var3.bind(var13)(var6);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var13, var17);
            var32 = var3[var16];
            var _closure2_slot17 = var32;
            var3 = var3[var5];
            var _closure2_slot18 = var3;
            var13 = _closure1_slot5;
            var3 = var13.useState;
            var13 = var3.bind(var13)(var6);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var13, var17);
            var33 = var3[var16];
            var _closure2_slot19 = var33;
            var3 = var3[var5];
            var _closure2_slot20 = var3;
            var35 = _closure1_slot0;
            var30 = _closure1_slot2;
            var3 = 12;
            var3 = var30[var3];
            var5 = var35.bind(var4)(var3);
            var3 = var5.useNavigation;
            var13 = var3.bind(var5)();
            var _closure2_slot21 = var13;
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var38 = var3.bind(var5)(var6);
            var _closure2_slot22 = var38;
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var16);
            _closure2_slot23 = var3;
            var3 = 13;
            var3 = var30[var3];
            var17 = var35.bind(var4)(var3);
            var16 = var17.useStateFromStores;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = var4.isStaff;
                    var1 = var5.bind(var4)();
case 10:
                    if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = var3 == var4;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = var4.isStaffPersonal;
                    var2 = var3.bind(var4)();
case 14:
                    var1 = var2;
case 12:
                    return var1;
                }
            };
            var16 = var16.bind(var17)(var5, var3);
            var _closure2_slot24 = var16;
            var20 = _closure1_slot5;
            var17 = var20.useEffect;
            var5 = new Array(1);
            var5[0] = var13;
            var3 = function() {
                var4 = _closure2_slot21;
                var3 = var4.setOptions;
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 14;
                var9 = var8[var6];
                var1 = undefined;
                var9 = var7.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.mCCdwi;
                var6 = var9.bind(var10)(var6);
                var2['title'] = var6;
                var6 = 15;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.getHeaderCloseButton;
                var5 = _closure1_slot19;
                var5 = var6.bind(var7)(var5);
                var2['headerLeft'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var17.bind(var20)(var3, var5);
            var17 = _closure1_slot5;
            var5 = var17.useEffect;
            var3 = new Array(2);
            var3[0] = var18;
            var3[1] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var6 = {};
                    var10 = _closure2_slot1;
                    var11 = var6;
                    var3 = copyDataProperties(var11, var10);
                    var4 = _closure2_slot0;
                    var3 = 'uri';
                    var6[2] = var4;
                    var3 = 'originalUri';
                    var6[2] = var4;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 16;
                    var8 = var7[var4];
                    var3 = undefined;
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.UploadPlatform;
                    var9 = var8.REACT_NATIVE;
                    var8 = 'platform';
                    var6[7] = var9;
                    var5 = _closure1_slot1;
                    var4 = var7[var4];
                    var4 = var5.bind(var3)(var4);
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var12 = var5;
                    var11 = var6;
                    var4 = new var12[var4](var11, var10);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot0 = var4;
                    var2 = _closure2_slot8;
                    var1 = function(arg1) {
                        var1 = new Array(1);
                        var5 = arg1;
                        var4 = 0;
                        var6 = var1;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot0;
                        var1[2] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var17)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(11);
            var2[0] = var15;
            var2[1] = var33;
            var2[2] = var14;
            var2[3] = var13;
            var2[4] = var28;
            var2[5] = var12;
            var2[6] = var40;
            var2[7] = var9;
            var2[8] = var11;
            var2[9] = var10;
            var2[10] = var1;
            var1 = function() {
                var1 = function handleSubmit() {
                    var1 = undefined;
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var1;
                var1 = function _handleSubmit() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 18; continue _fun0005 }
case 3:
                                var2 = undefined;
                                var10 = undefined;
                                var6 = undefined;
                                var3 = function _submitReportWithNotifications() {
                                    var4 = undefined;
                                    var1 = undefined;
                                    var3 = _closure1_slot3;
                                    var2 = function* (arg1, arg2, arg3) {
                                        var1 = function* anon_0_(arg1, arg2, arg3) {
                                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                                StartGenerator();
                                                var19 = arg1;
                                                var18 = arg2;
                                                var17 = arg3;
                                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                if(var2) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                                                var13 = undefined;
                                                var _closure9_slot0 = var13;
                                                var3 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var15 = 20;
                                                var2 = var2[var15];
                                                var6 = var3.bind(var13)(var2);
                                                var24 = _closure1_slot17;
                                                var23 = _closure1_slot18;
                                                var3 = var6.prototype;
                                                var3 = Object.create(var3, {constructor: {value: var6}});
                                                var25 = var3;
                                                var22 = true;
                                                var2 = new var25[var6](var24, var23, var22, var21);
                                                var6 = var2 instanceof Object ? var2 : var3;
                                                _closure9_slot0 = var6;
                                                var12 = global;
                                                var10 = null;
                                                var9 = 21;
                                                var14 = 0;
case 21:
                                                var5 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var2 = var2[var9];
                                                var5 = var5.bind(var13)(var2);
                                                var2 = var5.submitReport;
                                                var2 = var2.bind(var5)(var19, var18, var17);
                                                SaveGenerator(address=130);
case 22:
                                                return var2;
case 23:
                                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                                if(var5) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                                                if(!(var10 != var2)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                                                var7 = var2.ok;
                                                var5 = true;
                                                if(var7) { _fun0006_ip = 28; continue _fun0006 }
case 26:
                                                var7 = _closure2_slot15;
                                                var5 = false;
                                                if(!var7) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                                                var21 = var12.Promise;
                                                var7 = var21.prototype;
                                                var20 = Object.create(var7, {constructor: {value: var21}});
                                                var24 = function(arg1) {
                                                    var3 = _closure9_slot0;
                                                    var2 = var3.fail;
                                                    var1 = arg1;
                                                    var1 = var2.bind(var3)(var1);
                                                    var1 = undefined;
                                                    return var1;
                                                };
                                                var25 = var20;
                                                var7 = new var25[var21](var24, var23);
                                                var7 = var7 instanceof Object ? var7 : var20;
                                                SaveGenerator(address=200);
case 30:
                                                return var7;
case 31:
                                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=19);
                                                if(var20) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                                                var14 = var14 + 1;
                                                var5 = false;
                                                if(var14 < var15) { _fun0006_ip = 21; continue _fun0006 }
case 34:
                                                _fun0006_ip = 28; continue _fun0006;
case 32:
                                                return var7;
case 28:
                                                if(var5) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                                                var11 = _closure1_slot1;
                                                var15 = _closure1_slot2;
                                                var5 = 17;
                                                var5 = var15[var5];
                                                var9 = var11.bind(var13)(var5);
                                                var7 = var9.open;
                                                var5 = {};
                                                var10 = 'BUG_REPORT_FAILED_TO_SUBMIT';
                                                var5['key'] = var10;
                                                var10 = 18;
                                                var10 = var15[var10];
                                                var10 = var11.bind(var13)(var10);
                                                var5['icon'] = var10;
                                                var14 = _closure1_slot0;
                                                var10 = 14;
                                                var11 = var15[var10];
                                                var11 = var14.bind(var13)(var11);
                                                var12 = var11.intl;
                                                var11 = var12.string;
                                                var10 = var15[var10];
                                                var10 = var14.bind(var13)(var10);
                                                var10 = var10.t;
                                                var10 = var10["4t1o0u"];
                                                var10 = var11.bind(var12)(var10);
                                                var5['content'] = var10;
                                                var5 = var7.bind(var9)(var5);
                                                var3 = false;
                                                _fun0006_ip = 37; continue _fun0006;
case 35:
                                                var5 = var6.succeed;
                                                var5 = var5.bind(var6)();
                                                var10 = _closure1_slot1;
                                                var14 = _closure1_slot2;
                                                var5 = 17;
                                                var5 = var14[var5];
                                                var7 = var10.bind(var13)(var5);
                                                var6 = var7.open;
                                                var5 = {};
                                                var9 = 'BUG_REPORT_BUG_SUBMITTED';
                                                var5['key'] = var9;
                                                var9 = 22;
                                                var9 = var14[var9];
                                                var9 = var10.bind(var13)(var9);
                                                var5['icon'] = var9;
                                                var12 = _closure1_slot0;
                                                var9 = 14;
                                                var10 = var14[var9];
                                                var10 = var12.bind(var13)(var10);
                                                var11 = var10.intl;
                                                var10 = var11.string;
                                                var9 = var14[var9];
                                                var9 = var12.bind(var13)(var9);
                                                var9 = var9.t;
                                                var9 = var9.jB8yOL;
                                                var9 = var10.bind(var11)(var9);
                                                var5['content'] = var9;
                                                var8 = _closure1_slot16;
                                                var5['toastDurationMs'] = var8;
                                                var5 = var6.bind(var7)(var5);
                                                var3 = true;
case 37:
                                                return var3;
case 24:
                                                return var2;
case 19:
                                                return var1;
                                            }
                                        };
                                        return var1;
                                    };
                                    var4 = var3.bind(var4)(var2);
                                    _closure6_slot0 = var4;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var _closure6_slot0 = var3;
                                var3 = _closure2_slot9;
                                var3 = var3.current;
                                if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                                var3 = _closure2_slot12;
                                var11 = true;
                                var3 = var3.bind(var2)(var11);
                                var7 = _closure2_slot5;
                                var3 = null;
                                if(!(var3 != var7)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var3 = 19;
                                var3 = var9[var3];
                                var9 = var7.bind(var2)(var3);
                                var7 = var9.getAttachments;
                                var3 = _closure2_slot7;
                                var3 = var7.bind(var9)(var3);
                                SaveGenerator(address=113);
case 42:
                                return var3;
case 43:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                if(var7) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                                var10 = var3;
                                var7 = _closure2_slot14;
                                var9 = false;
                                var7 = var7.bind(var2)(var9);
                                var7 = global;
                                var14 = var7.setTimeout;
                                var13 = _closure1_slot15;
                                var12 = function() {
                                    var3 = _closure2_slot14;
                                    var1 = undefined;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var6 = var14.bind(var2)(var12, var13);
case 46: // try_start_0
                                var13 = {};
                                var12 = _closure2_slot3;
                                var13['name'] = var12;
                                var12 = _closure2_slot5;
                                var13['priority'] = var12;
                                var12 = _closure2_slot4;
                                var13['description'] = var12;
                                var12 = _closure2_slot19;
                                var13['feature'] = var12;
                                var12 = _closure2_slot6;
                                var13['url'] = var12;
                                var12 = {};
                                var12['overridePlatformInformation'] = var9;
                                var5 = function submitReportWithNotifications(arg1, arg2, arg3) {
                                    var1 = undefined;
                                    var4 = _closure6_slot0;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var5 = var5.bind(var2)(var13, var12, var10);
                                SaveGenerator(address=230);
case 47:
                                return var5;
case 48:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                                if(var10) { _fun0005_ip = 8; continue _fun0005 }
case 49:
                                if(!var5) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                                var10 = _closure2_slot16;
                                var10 = var10.bind(var2)(var11);
                                var8 = _closure1_slot19;
                                var8 = var8.bind(var2)();
case 50: // try_end0
                                var8 = _closure2_slot12;
                                var8 = var8.bind(var2)(var9);
                                var8 = _closure2_slot14;
                                var8 = var8.bind(var2)(var9);
                                var10 = var7.clearTimeout;
                                var8 = var6;
                                var8 = var10.bind(var2)(var8);
                                _fun0005_ip = 52; continue _fun0005;
case 8:
                                var8 = _closure2_slot12;
                                var8 = var8.bind(var2)(var9);
                                var8 = _closure2_slot14;
                                var8 = var8.bind(var2)(var9);
                                var10 = var7.clearTimeout;
                                var8 = var6;
                                var8 = var10.bind(var2)(var8);
                                return var5;
case 53: // catch_target0
                                CatchBlockStart(arg_register=4);
                                var8 = _closure2_slot12;
                                var8 = var8.bind(var2)(var9);
                                var8 = _closure2_slot14;
                                var8 = var8.bind(var2)(var9);
                                var7 = var7.clearTimeout;
                                var6 = var7.bind(var2)(var6);
                                throw var5;
case 44:
                                return var3;
case 40:
                                var9 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var3 = 17;
                                var3 = var11[var3];
                                var6 = var9.bind(var2)(var3);
                                var5 = var6.open;
                                var3 = {};
                                var8 = 'BUG_REPORT_FAILED_TO_SUBMIT';
                                var3['key'] = var8;
                                var8 = 18;
                                var8 = var11[var8];
                                var8 = var9.bind(var2)(var8);
                                var3['icon'] = var8;
                                var10 = _closure1_slot0;
                                var7 = 14;
                                var8 = var11[var7];
                                var8 = var10.bind(var2)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var7 = var11[var7];
                                var7 = var10.bind(var2)(var7);
                                var7 = var7.t;
                                var7 = var7["4t1o0u"];
                                var7 = var8.bind(var9)(var7);
                                var3['content'] = var7;
                                var3 = var5.bind(var6)(var3);
                                var5 = _closure2_slot12;
                                var3 = false;
                                var3 = var5.bind(var2)(var3);
                                var3 = undefined;
                                return var3;
case 38:
                                var3 = _closure2_slot13;
                                if(!var3) { _fun0005_ip = 52; continue _fun0005 }
case 54:
                                var9 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var5 = 17;
                                var5 = var12[var5];
                                var7 = var9.bind(var2)(var5);
                                var6 = var7.open;
                                var5 = {};
                                var8 = 'BUG_REPORT_SUBMITTING_BUG';
                                var5['key'] = var8;
                                var8 = 18;
                                var8 = var12[var8];
                                var8 = var9.bind(var2)(var8);
                                var5['icon'] = var8;
                                var11 = _closure1_slot0;
                                var8 = 14;
                                var9 = var12[var8];
                                var9 = var11.bind(var2)(var9);
                                var10 = var9.intl;
                                var9 = var10.string;
                                var8 = var12[var8];
                                var8 = var11.bind(var2)(var8);
                                var8 = var8.t;
                                var8 = var8.Uuqbcm;
                                var8 = var9.bind(var10)(var8);
                                var5['content'] = var8;
                                var8 = _closure1_slot16;
                                var5['toastDurationMs'] = var8;
                                var5 = var6.bind(var7)(var5);
                                var5 = _closure2_slot16;
                                var4 = true;
                                var4 = var5.bind(var2)(var4);
                                var3 = _closure1_slot19;
                                var3 = var3.bind(var2)();
case 52:
                                return var2;
case 18:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot1 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot1 = var1;
                var3 = _closure2_slot21;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = _closure1_slot10;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot13;
                        if(var5) { _fun0007_ip = 55; continue _fun0007 }
case 39:
                        var5 = _closure2_slot10;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 14;
                        var9 = var12[var8];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        if(var5) { _fun0007_ip = 42; continue _fun0007 }
case 56:
                        var5 = var8.geKm7t;
                        var5 = var9.bind(var10)(var5);
                        _fun0007_ip = 57; continue _fun0007;
case 42:
                        var8 = var8.ZiWcJ0;
                        var5 = var9.bind(var10)(var8);
case 57:
                        _fun0007_ip = 58; continue _fun0007;
case 55:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var6 = 14;
                        var8 = var11[var6];
                        var8 = var10.bind(var3)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var6 = var11[var6];
                        var6 = var10.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6.tUu8V+;
                        var5 = var8.bind(var9)(var6);
case 58:
                        var1['text'] = var5;
                        var5 = {};
                        var8 = null;
                        var5['maxWidth'] = var8;
                        var1['textStyle'] = var5;
                        var5 = _closure3_slot0;
                        var1['onPress'] = var5;
                        var5 = _closure2_slot3;
                        var5 = var8 == var5;
                        if(var5) { _fun0007_ip = 59; continue _fun0007 }
case 36:
                        var9 = _closure2_slot3;
                        var6 = '';
                        var5 = var6 === var9;
case 59:
                        if(var5) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                        var6 = _closure2_slot5;
                        var5 = var8 == var6;
case 60:
                        if(var5) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                        var6 = _closure2_slot4;
                        var5 = var8 == var6;
case 62:
                        if(var5) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                        var8 = _closure2_slot4;
                        var6 = '';
                        var5 = var6 === var8;
case 64:
                        if(var5) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                        var6 = _closure2_slot10;
                        if(!var6) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                        var7 = _closure2_slot13;
                        var6 = !var7;
case 68:
                        var5 = var6;
case 66:
                        var1['disabled'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = function _fetchConfig() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0009_ip = 5; continue _fun0009 }
case 70:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 21;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var4 = var4.bind(var3)(var2);
                                    var2 = var4.fetchBugReportConfig;
                                    var2 = var2.bind(var4)();
                                    SaveGenerator(address=46);
case 71:
                                    return var2;
case 72:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                                    var4 = _closure2_slot18;
                                    var4 = var4.bind(var3)(var2);
                                    return var3;
case 73:
                                    return var2;
case 5:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot0 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot24;
                    if(!var2) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                    var2 = function fetchConfig() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var40;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var3 = var2.length;
                    var2 = _closure2_slot23;
                    var2 = var2.current;
                    if(!(var3 > var2)) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var1 = _closure2_slot22;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0010_ip = 77; continue _fun0010 }
case 13:
                    var1 = var2.scrollToEnd;
                    var1 = var1.bind(var2)();
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var11 = _closure1_slot10;
            var10 = _closure1_slot7;
            var5 = {};
            var14 = 28;
            var12 = var30[var14];
            var12 = var35.bind(var4)(var12);
            var13 = var12.Stack;
            var12 = {};
            var15 = 24;
            var12['spacing'] = var15;
            var15 = var19.container;
            var12['style'] = var15;
            var17 = _closure1_slot11;
            var14 = var30[var14];
            var14 = var35.bind(var4)(var14);
            var15 = var14.Stack;
            var14 = {};
            var18 = 8;
            var14['spacing'] = var18;
            var23 = _closure1_slot10;
            var18 = 29;
            var18 = var30[var18];
            var18 = var35.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var25 = 14;
            var24 = var30[var25];
            var24 = var35.bind(var4)(var24);
            var34 = var24.intl;
            var31 = var34.string;
            var24 = var30[var25];
            var24 = var35.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.tM969v;
            var24 = var31.bind(var34)(var24);
            var18['children'] = var24;
            var18 = var23.bind(var4)(var20, var18);
            var23 = new Array(2);
            var23[0] = var18;
            var34 = _closure1_slot11;
            var18 = 30;
            var18 = var30[var18];
            var18 = var35.bind(var4)(var18);
            var31 = var18.Card;
            var24 = {};
            var37 = _closure1_slot10;
            var36 = _closure1_slot7;
            var18 = {};
            var20 = true;
            var18['horizontal'] = var20;
            var18['ref'] = var38;
            var38 = var19.attachmentCarousel;
            var18['contentContainerStyle'] = var38;
            var39 = var40.map;
            var38 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot11;
                var4 = _closure1_slot6;
                var3 = {};
                var11 = _closure2_slot2;
                var2 = var11.attachmentContainer;
                var3['style'] = var2;
                var8 = _closure1_slot10;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 31;
                var6 = var15[var2];
                var2 = undefined;
                var7 = var14.bind(var2)(var6);
                var6 = {};
                var9 = var1.item;
                var9 = var9.uri;
                var6['uri'] = var9;
                var9 = var1.isImage;
                var6['isImage'] = var9;
                var9 = var1.isVideo;
                var6['isVideo'] = var9;
                var9 = 280;
                var6['height'] = var9;
                var9 = 134;
                var6['width'] = var9;
                var7 = var8.bind(var2)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot10;
                var16 = _closure1_slot0;
                var7 = 32;
                var7 = var15[var7];
                var7 = var16.bind(var2)(var7);
                var8 = var7.PressableOpacity;
                var7 = {};
                var _closure3_slot0 = var1;
                var12 = function() {
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            var2 = _closure3_slot0;
                            var1 = arg1;
                            var1 = var1 !== var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var7['onPress'] = var12;
                var11 = var11.closeContainer;
                var7['style'] = var11;
                var12 = _closure1_slot10;
                var13 = 33;
                var10 = var15[var13];
                var10 = var16.bind(var2)(var10);
                var11 = var10.Icon;
                var10 = {};
                var17 = 18;
                var17 = var15[var17];
                var17 = var14.bind(var2)(var17);
                var10['source'] = var17;
                var13 = var15[var13];
                var13 = var16.bind(var2)(var13);
                var13 = var13.Icon;
                var13 = var13.Sizes;
                var13 = var13.REFRESH_SMALL_16;
                var10['size'] = var13;
                var13 = 8;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.WHITE;
                var10['color'] = var13;
                var10 = var12.bind(var2)(var11, var10);
                var7['children'] = var10;
                var7 = var9.bind(var2)(var8, var7);
                var6[1] = var7;
                var3['children'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var38 = var39.bind(var40)(var38);
            var18['children'] = var38;
            var18 = var37.bind(var4)(var36, var18);
            var36 = new Array(2);
            var36[0] = var18;
            var39 = _closure1_slot10;
            var18 = 34;
            var37 = var30[var18];
            var37 = var35.bind(var4)(var37);
            var38 = var37.Button;
            var37 = {};
            var40 = var30[var25];
            var40 = var35.bind(var4)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var30[var25];
            var40 = var35.bind(var4)(var40);
            var40 = var40.t;
            var40 = var40.HVxmOD;
            var40 = var41.bind(var42)(var40);
            var37['text'] = var40;
            var40 = function handleAttachmentSelect() {
                var1 = undefined;
                var4 = _closure2_slot25;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var37['onPress'] = var40;
            var37 = var39.bind(var4)(var38, var37);
            var36[1] = var37;
            var24['children'] = var36;
            var24 = var34.bind(var4)(var31, var24);
            var23[1] = var24;
            var14['children'] = var23;
            var15 = var17.bind(var4)(var15, var14);
            var14 = new Array(7);
            var14[0] = var15;
            var24 = _closure1_slot10;
            var15 = 35;
            var17 = var30[var15];
            var17 = var35.bind(var4)(var17);
            var23 = var17.TextInput;
            var17 = {};
            var31 = var30[var25];
            var31 = var35.bind(var4)(var31);
            var36 = var31.intl;
            var34 = var36.string;
            var31 = var30[var25];
            var31 = var35.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.OZRgjw;
            var31 = var34.bind(var36)(var31);
            var17['label'] = var31;
            var31 = var30[var25];
            var31 = var35.bind(var4)(var31);
            var34 = var31.intl;
            var31 = var34.string;
            var30 = var30[var25];
            var30 = var35.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30["6mpW05"];
            var30 = var31.bind(var34)(var30);
            var17['placeholder'] = var30;
            var17['onChange'] = var26;
            var17['isClearable'] = var20;
            var26 = 'sentences';
            var17['autoCapitalize'] = var26;
            var17 = var24.bind(var4)(var23, var17);
            var14[1] = var17;
            if(!var16) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var24 = _closure1_slot10;
            var30 = _closure1_slot0;
            var34 = _closure1_slot2;
            var17 = 36;
            var17 = var34[var17];
            var17 = var30.bind(var4)(var17);
            var23 = var17.TableRowGroup;
            var17 = {};
            var31 = var34[var25];
            var31 = var30.bind(var4)(var31);
            var36 = var31.intl;
            var35 = var36.string;
            var31 = var34[var25];
            var31 = var30.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31["77VVd8"];
            var31 = var35.bind(var36)(var31);
            var17['title'] = var31;
            var17['hasIcons'] = var29;
            var31 = _closure1_slot10;
            var29 = 37;
            var29 = var34[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.TableRow;
            var29 = {};
            var32 = var6 == var32;
            var29['disabled'] = var32;
            var32 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 38;
                    var3 = var1[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 40;
                    var2 = var1[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = 39;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var6)(var2, var1);
                    var2 = {};
                    var7 = _closure2_slot17;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    var6 = new Array(0);
                    _fun0011_ip = 21; continue _fun0011;
case 81:
                    var7 = _closure2_slot17;
                    var6 = var7.features;
case 21:
                    var2['features'] = var6;
                    var6 = _closure2_slot19;
                    var2['feature'] = var6;
                    var1 = _closure2_slot20;
                    var2['setFeature'] = var1;
                    var1 = 'BugReporterFeatureActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                }
            };
            var29['onPress'] = var32;
            if(!(var6 == var33)) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var36 = _closure1_slot0;
            var32 = _closure1_slot2;
            var34 = var32[var25];
            var34 = var36.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var32 = var32[var25];
            var32 = var36.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32["77VVd8"];
            var32 = var34.bind(var35)(var32);
            _fun0001_ip = 85; continue _fun0001;
case 83:
            var32 = var33.name;
case 85:
            var29['label'] = var32;
            var29['arrow'] = var20;
            var29 = var31.bind(var4)(var30, var29);
            var17['children'] = var29;
            var16 = var24.bind(var4)(var23, var17);
case 79:
            var14[2] = var16;
            var23 = _closure1_slot10;
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var16 = 41;
            var16 = var24[var16];
            var16 = var31.bind(var4)(var16);
            var17 = var16.TableRadioGroup;
            var16 = {};
            var29 = var24[var25];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var24 = var24[var25];
            var24 = var31.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.xMXLda;
            var24 = var29.bind(var30)(var24);
            var16['title'] = var24;
            var29 = var6 != var28;
            var24 = -1;
            if(!var29) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var24 = var28;
case 86:
            var16['defaultValue'] = var24;
            var16['onChange'] = var21;
            var16['hasIcons'] = var20;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var28 = 21;
            var28 = var21[var28];
            var29 = var24.bind(var4)(var28);
            var28 = var29.getPriorities;
            var30 = var28.bind(var29)();
            var29 = var30.map;
            var28 = function(arg1) {
                var1 = arg1;
                var8 = var1.title;
                var7 = var1.description;
                var13 = var1.emoji;
                var5 = var1.value;
                var4 = _closure1_slot10;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 24;
                var1 = var12[var1];
                var3 = undefined;
                var1 = var11.bind(var3)(var1);
                var2 = var1.TableRadioRow;
                var1 = {};
                var1['value'] = var5;
                var1['label'] = var8;
                var1['subLabel'] = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var6 = 25;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var9 = _closure2_slot2;
                var9 = var9.priorityIcon;
                var6['style'] = var9;
                var9 = {};
                var10 = 26;
                var10 = var12[var10];
                var12 = var11.bind(var3)(var10);
                var11 = var12.getEmojiURL;
                var10 = {'id': null, 'animated': true, 'size': 48};
                var10['id'] = var13;
                var10 = var11.bind(var12)(var10);
                var9['uri'] = var10;
                var6['source'] = var9;
                var9 = 'contain';
                var6['resizeMode'] = var9;
                var6 = var8.bind(var3)(var7, var6);
                var1['icon'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var28 = var29.bind(var30)(var28);
            var16['children'] = var28;
            var16 = var23.bind(var4)(var17, var16);
            var14[3] = var16;
            var23 = _closure1_slot10;
            var16 = 42;
            var16 = var21[var16];
            var16 = var24.bind(var4)(var16);
            var17 = var16.TextArea;
            var16 = {};
            var28 = var21[var25];
            var28 = var24.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var21[var25];
            var28 = var24.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28["1SplH2"];
            var28 = var29.bind(var30)(var28);
            var16['label'] = var28;
            var28 = var21[var25];
            var28 = var24.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var21[var25];
            var28 = var24.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.CQmAZd;
            var28 = var29.bind(var30)(var28);
            var16['placeholder'] = var28;
            var16['onChange'] = var27;
            var16['autoCorrect'] = var20;
            var16['autoCapitalize'] = var26;
            var16 = var23.bind(var4)(var17, var16);
            var14[4] = var16;
            var17 = _closure1_slot10;
            var15 = var21[var15];
            var15 = var24.bind(var4)(var15);
            var16 = var15.TextInput;
            var15 = {};
            var23 = var21[var25];
            var23 = var24.bind(var4)(var23);
            var27 = var23.intl;
            var26 = var27.string;
            var23 = var21[var25];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23["7p5pqh"];
            var23 = var26.bind(var27)(var23);
            var15['label'] = var23;
            var23 = var21[var25];
            var23 = var24.bind(var4)(var23);
            var27 = var23.intl;
            var26 = var27.string;
            var23 = var21[var25];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.HewMzo;
            var23 = var26.bind(var27)(var23);
            var15['placeholder'] = var23;
            var15['onChange'] = var22;
            var15['isClearable'] = var20;
            var15 = var17.bind(var4)(var16, var15);
            var14[5] = var15;
            var17 = _closure1_slot10;
            var16 = _closure1_slot6;
            var15 = {};
            var19 = var19.offButton;
            var15['style'] = var19;
            var20 = _closure1_slot10;
            var18 = var21[var18];
            var18 = var24.bind(var4)(var18);
            var19 = var18.Button;
            var18 = {'text': null, 'size': 'sm', 'variant': 'secondary'};
            var22 = var21[var25];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var25];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21["636e+U"];
            var21 = var22.bind(var23)(var21);
            var18['text'] = var21;
            var21 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 43;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                var4 = var5.setDeveloperOptionSettings;
                var3 = {};
                var6 = false;
                var3['bugReporterEnabled'] = var6;
                var3 = var4.bind(var5)(var3);
                var6 = _closure1_slot1;
                var3 = 44;
                var3 = var9[var3];
                var5 = var6.bind(var1)(var3);
                var4 = var5.terminate;
                var3 = true;
                var3 = var4.bind(var5)(var3);
                var2 = _closure1_slot19;
                var2 = var2.bind(var1)();
                var2 = 17;
                var2 = var9[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var5 = 'BUG_REPORT_HAS_BEEN_TURNED_OFF_TEXT';
                var2['key'] = var5;
                var5 = 22;
                var5 = var9[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var5 = 14;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.J3/feu;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var18['onPress'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[6] = var15;
            var12['children'] = var14;
            var12 = var3.bind(var4)(var13, var12);
            var5['children'] = var12;
            var10 = var11.bind(var4)(var10, var5);
            var5 = new Array(2);
            var5[0] = var10;
            var6 = null;
            if(!var9) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var9 = _closure1_slot10;
            var8 = function Submitting() {
                var1 = _closure1_slot14;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot11;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var9.submittingOverlay;
                var1['style'] = var5;
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 45;
                var5 = var13[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {'sticker': null, 'animated': true, 'size': 148};
                var10 = _closure1_slot13;
                var5['sticker'] = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot10;
                var12 = _closure1_slot0;
                var6 = 29;
                var6 = var13[var6];
                var6 = var12.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var9 = var9.submittingText;
                var6['style'] = var9;
                var9 = 'heading-md/medium';
                var6['variant'] = var9;
                var9 = 14;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.Uuqbcm;
                var9 = var10.bind(var11)(var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
case 88:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var11 = var7[var10];
    var10 = metroImportAll;
    var10 = var10.bind(var1)(var11);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var11 = var10.View;
    var _closure1_slot6 = var11;
    var10 = var10.ScrollView;
    var _closure1_slot7 = var10;
    var10 = 4;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var11 = 5;
    var10 = var7[var11];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 6;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var12 = var10.jsx;
    var _closure1_slot10 = var12;
    var12 = var10.jsxs;
    var _closure1_slot11 = var12;
    var10 = var10.Fragment;
    var _closure1_slot12 = var10;
    var12 = var5.Object;
    var10 = var12.freeze;
    var5 = {'id': '749049128012742676', 'format_type': 3, 'name': 'Wumpus zipping by on a monowheel'};
    var5 = var10.bind(var12)(var5);
    var _closure1_slot13 = var5;
    var5 = 7;
    var5 = var7[var5];
    var13 = var6.bind(var1)(var5);
    var12 = var13.createStyles;
    var10 = {};
    var5 = {};
    var14 = 16;
    var5['padding'] = var14;
    var10['container'] = var5;
    var5 = {'justifyContent': 'center', 'minWidth': '100%'};
    var10['attachmentCarousel'] = var5;
    var5 = {'marginHorizontal': 4, 'marginBottom': 16};
    var10['attachmentContainer'] = var5;
    var14 = {'position': 'absolute', 'top': 6, 'right': 10, 'height': 20, 'width': 20, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var5 = 10;
    var15 = 8;
    var16 = var7[var15];
    var16 = var9.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var14['borderRadius'] = var16;
    var16 = 9;
    var16 = var7[var16];
    var17 = var9.bind(var1)(var16);
    var16 = var7[var15];
    var16 = var9.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLACK;
    var18 = var17.bind(var1)(var16);
    var17 = var18.alpha;
    var16 = 0.5;
    var17 = var17.bind(var18)(var16);
    var16 = var17.css;
    var16 = var16.bind(var17)();
    var14['backgroundColor'] = var16;
    var10['closeContainer'] = var14;
    var16 = 24;
    var14 = {'width': 24, 'height': 24};
    var10['priorityIcon'] = var14;
    var14 = {};
    var14['marginBottom'] = var16;
    var10['offButton'] = var14;
    var14 = {'alignItems': 'center', 'backgroundColor': null, 'bottom': 0, 'flex': 1, 'justifyContent': 'center', 'position': 'absolute', 'top': 0, 'width': '100%'};
    var16 = var7[var15];
    var16 = var9.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SCRIM;
    var14['backgroundColor'] = var16;
    var10['submittingOverlay'] = var14;
    var14 = {};
    var14['marginTop'] = var15;
    var10['submittingText'] = var14;
    var10 = var12.bind(var13)(var10);
    var _closure1_slot14 = var10;
    var10 = var7[var5];
    var10 = var9.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.SECOND;
    var10 = var11 * var10;
    var _closure1_slot15 = var10;
    var10 = var7[var5];
    var10 = var9.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.SECOND;
    var10 = var5 * var10;
    var _closure1_slot16 = var10;
    var10 = var7[var5];
    var10 = var9.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.SECOND;
    var10 = var11 * var10;
    var _closure1_slot17 = var10;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.MINUTE;
    var5 = var8 * var5;
    var _closure1_slot18 = var5;
    var5 = 47;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/bug_reporter/native/components/BugReporterModal.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function BugReportModal(arg1) {
        var1 = arg1;
        var7 = var1.screenshotUri;
        var _closure2_slot0 = var7;
        var6 = var1.screenshot;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot5;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var3 = {};
            var2 = _closure2_slot0;
            var3['screenshotUri'] = var2;
            var1 = _closure2_slot1;
            var3['screenshot'] = var1;
            var2 = function getScreens(arg1) {
                var1 = {};
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 14;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.mCCdwi;
                var3 = var4.bind(var5)(var3);
                var2['title'] = var3;
                var3 = arg1;
                var2['initialParams'] = var3;
                var3 = function render(arg1) {
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var5 = arg1;
                    var6 = var2;
                    var1 = copyDataProperties(var6, var5);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2['render'] = var3;
                var1['BUG_REPORT_CREATE'] = var2;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        };
        var5 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 46;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var5;
        var5 = 'BUG_REPORT_CREATE';
        var1['initialRouteName'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['BugCreateScreen'] = var2;
    return var1;
})();