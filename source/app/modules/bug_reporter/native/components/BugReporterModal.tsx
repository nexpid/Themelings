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
 0:
            var1 = arg1;
            var17 = var1.screenshotUri;
            var _closure2_slot0 = var17;
            var2 = var1.screenshot;
            var _closure2_slot1 = var2;
            var1 = _closure1_slot14;
            var4 = undefined;
            var22 = var1.bind(var4)();
            var _closure2_slot2 = var22;
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var9 = '';
            var3 = var1.bind(var3)(var9);
            var1 = _closure1_slot4;
            var16 = 2;
            var1 = var1.bind(var4)(var3, var16);
            var15 = 0;
            var13 = var1[var15];
            var _closure2_slot3 = var13;
            var5 = 1;
            var25 = var1[var5];
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var9);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var16);
            var14 = var1[var15];
            var _closure2_slot4 = var14;
            var26 = var1[var5];
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var6 = null;
            var3 = var1.bind(var3)(var6);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var16);
            var27 = var1[var15];
            var _closure2_slot5 = var27;
            var20 = var1[var5];
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var9);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var16);
            var11 = var1[var15];
            var _closure2_slot6 = var11;
            var19 = var1[var5];
            var9 = _closure1_slot5;
            var3 = var9.useState;
            var1 = new Array(0);
            var3 = var3.bind(var9)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var16);
            var40 = var1[var15];
            var _closure2_slot7 = var40;
            var1 = var1[var5];
            var _closure2_slot8 = var1;
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var12 = false;
            var3 = var1.bind(var3)(var12);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var16);
            var9 = var1[var15];
            var _closure2_slot9 = var9;
            var1 = var1[var5];
            var _closure2_slot10 = var1;
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var12);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var3, var16);
            var10 = var1[var15];
            var _closure2_slot11 = var10;
            var1 = var1[var5];
            var _closure2_slot12 = var1;
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var12);
            var1 = _closure1_slot4;
            var3 = var1.bind(var4)(var3, var16);
            var1 = var3[var15];
            var _closure2_slot13 = var1;
            var3 = var3[var5];
            var _closure2_slot14 = var3;
            var12 = _closure1_slot5;
            var3 = var12.useState;
            var12 = var3.bind(var12)(var6);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var12, var16);
            var31 = var3[var15];
            var _closure2_slot15 = var31;
            var3 = var3[var5];
            var _closure2_slot16 = var3;
            var12 = _closure1_slot5;
            var3 = var12.useState;
            var12 = var3.bind(var12)(var6);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var12, var16);
            var32 = var3[var15];
            var _closure2_slot17 = var32;
            var3 = var3[var5];
            var _closure2_slot18 = var3;
            var33 = _closure1_slot0;
            var28 = _closure1_slot2;
            var3 = 12;
            var3 = var28[var3];
            var5 = var33.bind(var4)(var3);
            var3 = var5.useNavigation;
            var12 = var3.bind(var5)();
            var _closure2_slot19 = var12;
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var37 = var3.bind(var5)(var6);
            var _closure2_slot20 = var37;
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var15);
            var _closure2_slot21 = var3;
            var3 = 13;
            var3 = var28[var3];
            var16 = var33.bind(var4)(var3);
            var15 = var16.useStateFromStores;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 37; continue _fun0002 }
 27:
                    var5 = var4.isStaff;
                    var1 = var5.bind(var4)();
 37:
                    if(var1) { _fun0002_ip = 62; continue _fun0002 }
 40:
                    var3 = var3 == var4;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 59; continue _fun0002 }
 49:
                    var3 = var4.isStaffPersonal;
                    var2 = var3.bind(var4)();
 59:
                    var1 = var2;
 62:
                    return var1;
                }
            };
            var16 = var15.bind(var16)(var5, var3);
            var _closure2_slot22 = var16;
            var18 = _closure1_slot5;
            var15 = var18.useEffect;
            var5 = new Array(1);
            var5[0] = var12;
            var3 = function() {
                var4 = _closure2_slot19;
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
                var6 = var6.mCCdws;
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
            var3 = var15.bind(var18)(var3, var5);
            var15 = _closure1_slot5;
            var5 = var15.useEffect;
            var3 = new Array(2);
            var3[0] = var17;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 155; continue _fun0003 }
 18:
                    var6 = {};
                    var10 = _closure2_slot1;
                    var11 = var6;
                    var3 = copyDataProperties(var11, var10);
                    var4 = _closure2_slot0;
                    var3 = 'uri';
                    var6[var3] = var4;
                    var3 = 'originalUri';
                    var6[var3] = var4;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 16;
                    var8 = var7[var4];
                    var3 = undefined;
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.UploadPlatform;
                    var9 = var8.REACT_NATIVE;
                    var8 = 'platform';
                    var6[var8] = var9;
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
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 155:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var15)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(10);
            var2[0] = var14;
            var2[1] = var32;
            var2[2] = var13;
            var2[3] = var12;
            var2[4] = var27;
            var2[5] = var11;
            var2[6] = var40;
            var2[7] = var9;
            var2[8] = var10;
            var2[9] = var1;
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
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 639; continue _fun0004 }
 12:
                                var2 = undefined;
                                var10 = undefined;
                                var6 = undefined;
                                var3 = function _submitReportWithNotifications() {
                                    var4 = undefined;
                                    var1 = undefined;
                                    var3 = _closure1_slot3;
                                    var2 = function* (arg1, arg2, arg3) {
                                        var1 = function* anon_0_(arg1, arg2, arg3) {
                                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                                StartGenerator();
                                                var19 = arg1;
                                                var18 = arg2;
                                                var17 = arg3;
                                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                if(var2) { _fun0005_ip = 487; continue _fun0005 }
 21:
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
 96:
                                                var5 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var2 = var2[var9];
                                                var5 = var5.bind(var13)(var2);
                                                var2 = var5.submitReport;
                                                var2 = var2.bind(var5)(var19, var18, var17);
                                                SaveGenerator(address=130);
 128:
                                                return var2;
 130:
                                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                                if(var5) { _fun0005_ip = 484; continue _fun0005 }
 139:
                                                if(!(var10 != var2)) { _fun0005_ip = 154; continue _fun0005 }
 143:
                                                var7 = var2.ok;
                                                var5 = true;
                                                if(var7) { _fun0005_ip = 220; continue _fun0005 }
 154:
                                                var7 = _closure2_slot13;
                                                var5 = false;
                                                if(!var7) { _fun0005_ip = 220; continue _fun0005 }
 163:
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
 198:
                                                return var7;
 200:
                                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=19);
                                                if(var20) { _fun0005_ip = 217; continue _fun0005 }
 206:
                                                var14 = var14 + 1;
                                                var5 = false;
                                                if(var14 < var15) { _fun0005_ip = 96; continue _fun0005 }
 215:
                                                _fun0005_ip = 220; continue _fun0005;
 217:
                                                return var7;
 220:
                                                if(var5) { _fun0005_ip = 344; continue _fun0005 }
 223:
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
                                                var10 = var10.4t1o0t;
                                                var10 = var11.bind(var12)(var10);
                                                var5['content'] = var10;
                                                var5 = var7.bind(var9)(var5);
                                                var3 = false;
                                                _fun0005_ip = 481; continue _fun0005;
 344:
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
                                                var9 = var9.jB8yOD;
                                                var9 = var10.bind(var11)(var9);
                                                var5['content'] = var9;
                                                var8 = _closure1_slot16;
                                                var5['toastDurationMs'] = var8;
                                                var5 = var6.bind(var7)(var5);
                                                var3 = true;
 481:
                                                return var3;
 484:
                                                return var2;
 487:
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
                                if(var3) { _fun0004_ip = 481; continue _fun0004 }
 42:
                                var7 = _closure2_slot5;
                                var3 = null;
                                if(!(var3 == var7)) { _fun0004_ip = 177; continue _fun0004 }
 55:
                                var12 = _closure1_slot1;
                                var14 = _closure1_slot2;
                                var3 = 17;
                                var3 = var14[var3];
                                var8 = var12.bind(var2)(var3);
                                var7 = var8.open;
                                var3 = {};
                                var11 = 'BUG_REPORT_FAILED_TO_SUBMIT';
                                var3['key'] = var11;
                                var11 = 18;
                                var11 = var14[var11];
                                var11 = var12.bind(var2)(var11);
                                var3['icon'] = var11;
                                var13 = _closure1_slot0;
                                var9 = 14;
                                var11 = var14[var9];
                                var11 = var13.bind(var2)(var11);
                                var12 = var11.intl;
                                var11 = var12.string;
                                var9 = var14[var9];
                                var9 = var13.bind(var2)(var9);
                                var9 = var9.t;
                                var9 = var9.4t1o0t;
                                var9 = var11.bind(var12)(var9);
                                var3['content'] = var9;
                                var3 = var7.bind(var8)(var3);
                                _fun0004_ip = 636; continue _fun0004;
 177:
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var3 = 19;
                                var3 = var9[var3];
                                var9 = var7.bind(var2)(var3);
                                var7 = var9.getAttachments;
                                var3 = _closure2_slot7;
                                var3 = var7.bind(var9)(var3);
                                SaveGenerator(address=219);
 217:
                                return var3;
 219:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                if(var7) { _fun0004_ip = 478; continue _fun0004 }
 228:
                                var10 = var3;
                                var7 = _closure2_slot12;
                                var9 = false;
                                var7 = var7.bind(var2)(var9);
                                var7 = global;
                                var13 = var7.setTimeout;
                                var12 = _closure1_slot15;
                                var11 = function() {
                                    var3 = _closure2_slot12;
                                    var1 = undefined;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var6 = var13.bind(var2)(var11, var12);
                                var12 = _closure2_slot10;
                                var11 = true;
                                var12 = var12.bind(var2)(var11);
 278: // try_start_0
                                var13 = {};
                                var12 = _closure2_slot3;
                                var13['name'] = var12;
                                var12 = _closure2_slot5;
                                var13['priority'] = var12;
                                var12 = _closure2_slot4;
                                var13['description'] = var12;
                                var12 = _closure2_slot17;
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
                                SaveGenerator(address=347);
 345:
                                return var5;
 347:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                                if(var10) { _fun0004_ip = 410; continue _fun0004 }
 353:
                                if(!var5) { _fun0004_ip = 373; continue _fun0004 }
 356:
                                var10 = _closure2_slot14;
                                var10 = var10.bind(var2)(var11);
                                var8 = _closure1_slot19;
                                var8 = var8.bind(var2)();
 373: // try_end0
                                var8 = _closure2_slot10;
                                var8 = var8.bind(var2)(var9);
                                var8 = _closure2_slot12;
                                var8 = var8.bind(var2)(var9);
                                var10 = var7.clearTimeout;
                                var8 = var6;
                                var8 = var10.bind(var2)(var8);
                                _fun0004_ip = 636; continue _fun0004;
 410:
                                var8 = _closure2_slot10;
                                var8 = var8.bind(var2)(var9);
                                var8 = _closure2_slot12;
                                var8 = var8.bind(var2)(var9);
                                var10 = var7.clearTimeout;
                                var8 = var6;
                                var8 = var10.bind(var2)(var8);
                                return var5;
 445: // catch_target0
                                CatchBlockStart(arg_register=4);
                                var8 = _closure2_slot10;
                                var8 = var8.bind(var2)(var9);
                                var8 = _closure2_slot12;
                                var8 = var8.bind(var2)(var9);
                                var7 = var7.clearTimeout;
                                var6 = var7.bind(var2)(var6);
                                throw var5;
 478:
                                return var3;
 481:
                                var3 = _closure2_slot11;
                                if(!var3) { _fun0004_ip = 636; continue _fun0004 }
 491:
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
                                var8 = var8.Uuqbcn;
                                var8 = var9.bind(var10)(var8);
                                var5['content'] = var8;
                                var8 = _closure1_slot16;
                                var5['toastDurationMs'] = var8;
                                var5 = var6.bind(var7)(var5);
                                var5 = _closure2_slot14;
                                var4 = true;
                                var4 = var5.bind(var2)(var4);
                                var3 = _closure1_slot19;
                                var3 = var3.bind(var2)();
 636:
                                return var2;
 639:
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
                var3 = _closure2_slot19;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = _closure1_slot10;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure2_slot11;
                        if(var5) { _fun0006_ip = 126; continue _fun0006 }
 47:
                        var5 = _closure2_slot9;
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
                        if(var5) { _fun0006_ip = 111; continue _fun0006 }
 98:
                        var5 = var8.geKm7u;
                        var5 = var9.bind(var10)(var5);
                        _fun0006_ip = 124; continue _fun0006;
 111:
                        var8 = var8.ZiWcJy;
                        var5 = var9.bind(var10)(var8);
 124:
                        _fun0006_ip = 183; continue _fun0006;
 126:
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
                        var6 = var6.tUu8V1;
                        var5 = var8.bind(var9)(var6);
 183:
                        var1['text'] = var5;
                        var5 = {};
                        var8 = null;
                        var5['maxWidth'] = var8;
                        var1['textStyle'] = var5;
                        var5 = _closure3_slot0;
                        var1['onPress'] = var5;
                        var5 = _closure2_slot3;
                        var5 = var8 == var5;
                        if(var5) { _fun0006_ip = 235; continue _fun0006 }
 223:
                        var9 = _closure2_slot3;
                        var6 = '';
                        var5 = var6 === var9;
 235:
                        if(var5) { _fun0006_ip = 246; continue _fun0006 }
 238:
                        var6 = _closure2_slot5;
                        var5 = var8 == var6;
 246:
                        if(var5) { _fun0006_ip = 257; continue _fun0006 }
 249:
                        var6 = _closure2_slot4;
                        var5 = var8 == var6;
 257:
                        if(var5) { _fun0006_ip = 272; continue _fun0006 }
 260:
                        var8 = _closure2_slot4;
                        var6 = '';
                        var5 = var6 === var8;
 272:
                        if(var5) { _fun0006_ip = 292; continue _fun0006 }
 275:
                        var6 = _closure2_slot9;
                        if(!var6) { _fun0006_ip = 289; continue _fun0006 }
 282:
                        var7 = _closure2_slot11;
                        var6 = !var7;
 289:
                        var5 = var6;
 292:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = function _fetchConfig() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0008_ip = 70; continue _fun0008 }
 7:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 21;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var4 = var4.bind(var3)(var2);
                                    var2 = var4.fetchBugReportConfig;
                                    var2 = var2.bind(var4)();
                                    SaveGenerator(address=46);
 44:
                                    return var2;
 46:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0008_ip = 67; continue _fun0008 }
 52:
                                    var4 = _closure2_slot16;
                                    var4 = var4.bind(var3)(var2);
                                    return var3;
 67:
                                    return var2;
 70:
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
                    var2 = _closure2_slot22;
                    if(!var2) { _fun0007_ip = 36; continue _fun0007 }
 23:
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
 36:
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot7;
                    var3 = var2.length;
                    var2 = _closure2_slot21;
                    var2 = var2.current;
                    if(!(var3 > var2)) { _fun0009_ip = 50; continue _fun0009 }
 25:
                    var1 = _closure2_slot20;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 50; continue _fun0009 }
 40:
                    var1 = var2.scrollToEnd;
                    var1 = var1.bind(var2)();
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0010_ip = 339; continue _fun0010 }
 12:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 27;
                            var2 = var6[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.isAndroid;
                            var2 = var2.bind(var5)();
                            var7 = 'mixed';
                            if(!var2) { _fun0010_ip = 63; continue _fun0010 }
 59:
                            var7 = 'any';
 63:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 28;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.launchImageLibrary;
                            var2 = {'mediaType': null, 'includeBase64': false, 'selectionLimit': 1};
                            var2['mediaType'] = var7;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=118);
 116:
                            return var2;
 118:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0010_ip = 336; continue _fun0010 }
 127:
                            var5 = null;
                            if(!(var5 != var2)) { _fun0010_ip = 333; continue _fun0010 }
 136:
                            var6 = var2.assets;
                            var5 = 0;
                            var12 = var6[var5];
                            var7 = _closure2_slot21;
                            var6 = _closure2_slot7;
                            var8 = var6.length;
                            var7['current'] = var8;
                            var10 = {};
                            var16 = var10;
                            var15 = var12;
                            var8 = copyDataProperties(var16, var15);
                            var11 = var12.uri;
                            var8 = 'uri';
                            var10[var8] = var11;
                            var11 = var12.uri;
                            var8 = 'originalUri';
                            var10[var8] = var11;
                            var14 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 16;
                            var13 = var11[var8];
                            var13 = var14.bind(var3)(var13);
                            var13 = var13.UploadPlatform;
                            var14 = var13.REACT_NATIVE;
                            var13 = 'platform';
                            var10[var13] = var14;
                            var13 = var12.fileName;
                            var12 = 'filename';
                            var10[var12] = var13;
                            var9 = _closure1_slot1;
                            var8 = var11[var8];
                            var8 = var9.bind(var3)(var8);
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var17 = var9;
                            var16 = var10;
                            var8 = new var17[var8](var16, var15);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _closure5_slot0 = var8;
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
                                var1[var3] = var2;
                                var2 = 1;
                                var2 = var3 + var2;
                                return var1;
                            };
                            var4 = var5.bind(var3)(var4);
 333:
                            return var3;
 336:
                            return var2;
 339:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function handleAttachmentSelect() {
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
            var38 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var11 = _closure1_slot10;
            var10 = _closure1_slot7;
            var5 = {};
            var14 = 29;
            var12 = var28[var14];
            var12 = var33.bind(var4)(var12);
            var13 = var12.Stack;
            var12 = {};
            var15 = 24;
            var12['spacing'] = var15;
            var15 = var22.container;
            var12['style'] = var15;
            var17 = _closure1_slot11;
            var14 = var28[var14];
            var14 = var33.bind(var4)(var14);
            var15 = var14.Stack;
            var14 = {};
            var18 = 8;
            var14['spacing'] = var18;
            var24 = _closure1_slot10;
            var18 = 30;
            var18 = var28[var18];
            var18 = var33.bind(var4)(var18);
            var23 = var18.Text;
            var18 = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            var21 = 14;
            var29 = var28[var21];
            var29 = var33.bind(var4)(var29);
            var34 = var29.intl;
            var30 = var34.string;
            var29 = var28[var21];
            var29 = var33.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.tM969v;
            var29 = var30.bind(var34)(var29);
            var18['children'] = var29;
            var18 = var24.bind(var4)(var23, var18);
            var23 = new Array(2);
            var23[0] = var18;
            var30 = _closure1_slot11;
            var18 = 31;
            var18 = var28[var18];
            var18 = var33.bind(var4)(var18);
            var29 = var18.Card;
            var24 = {};
            var36 = _closure1_slot10;
            var35 = _closure1_slot7;
            var34 = {};
            var18 = true;
            var34['horizontal'] = var18;
            var34['ref'] = var37;
            var37 = var22.attachmentCarousel;
            var34['contentContainerStyle'] = var37;
            var39 = var40.map;
            var37 = function(arg1) {
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
                var2 = 32;
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
                var8 = _closure1_slot0;
                var7 = 33;
                var7 = var15[var7];
                var7 = var8.bind(var2)(var7);
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
                var13 = 34;
                var10 = var15[var13];
                var11 = var14.bind(var2)(var10);
                var10 = {};
                var16 = 18;
                var16 = var15[var16];
                var16 = var14.bind(var2)(var16);
                var10['source'] = var16;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var13 = var13.Sizes;
                var13 = var13.REFRESH_SMALL_16;
                var10['size'] = var13;
                var13 = 8;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.WHITE_500;
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
            var37 = var39.bind(var40)(var37);
            var34['children'] = var37;
            var35 = var36.bind(var4)(var35, var34);
            var34 = new Array(2);
            var34[0] = var35;
            var37 = _closure1_slot10;
            var35 = 35;
            var35 = var28[var35];
            var35 = var33.bind(var4)(var35);
            var36 = var35.Button;
            var35 = {};
            var39 = var28[var21];
            var39 = var33.bind(var4)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var39 = var28[var21];
            var39 = var33.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.HVxmOD;
            var39 = var40.bind(var41)(var39);
            var35['text'] = var39;
            var35['onPress'] = var38;
            var35 = var37.bind(var4)(var36, var35);
            var34[1] = var35;
            var24['children'] = var34;
            var24 = var30.bind(var4)(var29, var24);
            var23[1] = var24;
            var14['children'] = var23;
            var15 = var17.bind(var4)(var15, var14);
            var14 = new Array(7);
            var14[0] = var15;
            var24 = _closure1_slot10;
            var15 = 36;
            var17 = var28[var15];
            var17 = var33.bind(var4)(var17);
            var23 = var17.TextInput;
            var17 = {};
            var29 = var28[var21];
            var29 = var33.bind(var4)(var29);
            var34 = var29.intl;
            var30 = var34.string;
            var29 = var28[var21];
            var29 = var33.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.OZRgj4;
            var29 = var30.bind(var34)(var29);
            var17['label'] = var29;
            var29 = var28[var21];
            var29 = var33.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var21];
            var28 = var33.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.6mpW09;
            var28 = var29.bind(var30)(var28);
            var17['placeholder'] = var28;
            var17['onChange'] = var25;
            var17['isClearable'] = var18;
            var25 = 'sentences';
            var17['autoCapitalize'] = var25;
            var17 = var24.bind(var4)(var23, var17);
            var14[1] = var17;
            if(!var16) { _fun0001_ip = 1533; continue _fun0001 }
 1322:
            var24 = _closure1_slot10;
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var17 = 37;
            var17 = var33[var17];
            var17 = var29.bind(var4)(var17);
            var23 = var17.TableRowGroup;
            var17 = {};
            var28 = var33[var21];
            var28 = var29.bind(var4)(var28);
            var34 = var28.intl;
            var30 = var34.string;
            var28 = var33[var21];
            var28 = var29.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.77VVd3;
            var28 = var30.bind(var34)(var28);
            var17['title'] = var28;
            var30 = _closure1_slot10;
            var28 = 38;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.TableRow;
            var28 = {};
            var31 = var6 == var31;
            var28['disabled'] = var31;
            var31 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 39;
                    var3 = var1[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 41;
                    var2 = var1[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = 40;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var6)(var2, var1);
                    var2 = {};
                    var7 = _closure2_slot15;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0011_ip = 86; continue _fun0011 }
 80:
                    var6 = new Array(0);
                    _fun0011_ip = 96; continue _fun0011;
 86:
                    var7 = _closure2_slot15;
                    var6 = var7.features;
 96:
                    var2['features'] = var6;
                    var6 = _closure2_slot17;
                    var2['feature'] = var6;
                    var1 = _closure2_slot18;
                    var2['setFeature'] = var1;
                    var1 = 'BugReporterFeatureActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                }
            };
            var28['onPress'] = var31;
            if(!(var6 == var32)) { _fun0001_ip = 1503; continue _fun0001 }
 1449:
            var35 = _closure1_slot0;
            var31 = _closure1_slot2;
            var33 = var31[var21];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var31 = var31[var21];
            var31 = var35.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.77VVd3;
            var31 = var33.bind(var34)(var31);
            _fun0001_ip = 1508; continue _fun0001;
 1503:
            var31 = var32.name;
 1508:
            var28['label'] = var31;
            var28['arrow'] = var18;
            var28 = var30.bind(var4)(var29, var28);
            var17['children'] = var28;
            var16 = var24.bind(var4)(var23, var17);
 1533:
            var14[2] = var16;
            var23 = _closure1_slot10;
            var30 = _closure1_slot0;
            var24 = _closure1_slot2;
            var16 = 42;
            var16 = var24[var16];
            var16 = var30.bind(var4)(var16);
            var17 = var16.TableRadioGroup;
            var16 = {};
            var28 = var24[var21];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var24 = var24[var21];
            var24 = var30.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.xMXLdX;
            var24 = var28.bind(var29)(var24);
            var16['title'] = var24;
            var28 = var6 != var27;
            var24 = -1;
            if(!var28) { _fun0001_ip = 1635; continue _fun0001 }
 1632:
            var24 = var27;
 1635:
            var16['defaultValue'] = var24;
            var16['onChange'] = var20;
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var27 = 21;
            var27 = var20[var27];
            var28 = var24.bind(var4)(var27);
            var27 = var28.getPriorities;
            var29 = var27.bind(var28)();
            var28 = var29.map;
            var27 = function(arg1) {
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
            var27 = var28.bind(var29)(var27);
            var16['children'] = var27;
            var16 = var23.bind(var4)(var17, var16);
            var14[3] = var16;
            var23 = _closure1_slot10;
            var16 = 43;
            var16 = var20[var16];
            var16 = var24.bind(var4)(var16);
            var17 = var16.TextArea;
            var16 = {};
            var27 = var20[var21];
            var27 = var24.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var20[var21];
            var27 = var24.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.1SplHx;
            var27 = var28.bind(var29)(var27);
            var16['label'] = var27;
            var27 = var20[var21];
            var27 = var24.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var20[var21];
            var27 = var24.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.CQmAZW;
            var27 = var28.bind(var29)(var27);
            var16['placeholder'] = var27;
            var16['onChange'] = var26;
            var16['autoCorrect'] = var18;
            var16['autoCapitalize'] = var25;
            var16 = var23.bind(var4)(var17, var16);
            var14[4] = var16;
            var17 = _closure1_slot10;
            var15 = var20[var15];
            var15 = var24.bind(var4)(var15);
            var16 = var15.TextInput;
            var15 = {};
            var23 = var20[var21];
            var23 = var24.bind(var4)(var23);
            var26 = var23.intl;
            var25 = var26.string;
            var23 = var20[var21];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.7p5pqq;
            var23 = var25.bind(var26)(var23);
            var15['label'] = var23;
            var23 = var20[var21];
            var23 = var24.bind(var4)(var23);
            var26 = var23.intl;
            var25 = var26.string;
            var23 = var20[var21];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.HewMzs;
            var23 = var25.bind(var26)(var23);
            var15['placeholder'] = var23;
            var15['onChange'] = var19;
            var15['isClearable'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[5] = var15;
            var17 = _closure1_slot10;
            var19 = _closure1_slot1;
            var18 = 44;
            var15 = var20[var18];
            var16 = var19.bind(var4)(var15);
            var15 = {};
            var22 = var22.offButton;
            var15['style'] = var22;
            var22 = var20[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var20[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.636e+f;
            var21 = var22.bind(var23)(var21);
            var15['text'] = var21;
            var21 = var20[var18];
            var21 = var19.bind(var4)(var21);
            var21 = var21.Sizes;
            var21 = var21.XSMALL;
            var15['size'] = var21;
            var21 = var20[var18];
            var21 = var19.bind(var4)(var21);
            var21 = var21.Looks;
            var21 = var21.LINK;
            var15['look'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.Colors;
            var18 = var18.TRANSPARENT;
            var15['color'] = var18;
            var18 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 45;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                var4 = var5.setDeveloperOptionSettings;
                var3 = {};
                var6 = false;
                var3['bugReporterEnabled'] = var6;
                var3 = var4.bind(var5)(var3);
                var6 = _closure1_slot1;
                var3 = 46;
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
                var5 = var5.J3/fen;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var15['onPress'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[6] = var15;
            var12['children'] = var14;
            var12 = var3.bind(var4)(var13, var12);
            var5['children'] = var12;
            var10 = var11.bind(var4)(var10, var5);
            var5 = new Array(2);
            var5[0] = var10;
            var6 = null;
            if(!var9) { _fun0001_ip = 2229; continue _fun0001 }
 2210:
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
                var5 = 47;
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
                var6 = 30;
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
                var9 = var9.Uuqbcn;
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
 2229:
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
    var16 = var16.BLACK_500;
    var18 = var17.bind(var1)(var16);
    var17 = var18.alpha;
    var16 = 0.5;
    var17 = var17.bind(var18)(var16);
    var16 = var17.css;
    var16 = var16.bind(var17)();
    var14['backgroundColor'] = var16;
    var10['closeContainer'] = var14;
    var14 = {'resizeMode': 'contain', 'height': 280, 'width': 134};
    var10['image'] = var14;
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
    var16 = var16.BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND;
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
    var5 = 49;
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
                var3 = var3.mCCdws;
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
        var1 = 48;
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