// app/modules/in_app_reports/native/components/InAppReportModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getScreens(arg1) {
        var2 = arg1;
        var1 = var2.nodeMap;
        var _closure2_slot0 = var1;
        var1 = var2.reportType;
        var _closure2_slot1 = var1;
        var1 = var2.reportSubType;
        var _closure2_slot2 = var1;
        var1 = var2.successNodeId;
        var _closure2_slot3 = var1;
        var1 = var2.failNodeId;
        var _closure2_slot4 = var1;
        var1 = var2.callbacks;
        var2 = var2.reportId;
        var _closure2_slot5 = var2;
        var2 = var1.closeModal;
        var _closure2_slot6 = var2;
        var2 = var1.addOnCloseCallback;
        var _closure2_slot7 = var2;
        var2 = var1.onSubmit;
        var _closure2_slot8 = var2;
        var1 = var1.onNavigate;
        var _closure2_slot9 = var1;
        var1 = {};
        var3 = _closure1_slot6;
        var2 = {};
        var5 = function headerRight() {
            var4 = _closure1_slot7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var8.bind(var3)(var1);
            var2 = var1.HeaderActionButton;
            var1 = {};
            var6 = _closure1_slot1;
            var5 = 6;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var1['source'] = var5;
            var5 = _closure2_slot6;
            var1['onPress'] = var5;
            var5 = 7;
            var6 = var9[var5];
            var6 = var8.bind(var3)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.cpT0Cg;
            var5 = var6.bind(var7)(var5);
            var1['accessibilityLabel'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['headerRight'] = var5;
        var5 = function headerTitle() {
            var1 = null;
            return var1;
        };
        var2['headerTitle'] = var5;
        var5 = true;
        var2['fullscreen'] = var5;
        var4 = function render(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var4 = _closure1_slot7;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var8 = _closure2_slot0;
            var7 = 'nodeMap';
            var1[var7] = var8;
            var8 = _closure2_slot1;
            var7 = 'reportType';
            var1[var7] = var8;
            var8 = _closure2_slot2;
            var7 = 'reportSubType';
            var1[var7] = var8;
            var8 = _closure2_slot3;
            var7 = 'successNodeId';
            var1[var7] = var8;
            var8 = _closure2_slot4;
            var7 = 'failNodeId';
            var1[var7] = var8;
            var7 = function onSubmit(arg1) {
                var3 = _closure2_slot8;
                var1 = _closure3_slot0;
                var6 = var1.history;
                var2 = new Array(1);
                var5 = 0;
                var7 = var2;
                var4 = arraySpread(var7, var6, var5);
                var1 = arg1;
                var2[var4] = var1;
                var1 = 1;
                var1 = var4 + var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = 'onSubmit';
            var1[var6] = var7;
            var7 = _closure2_slot6;
            var6 = 'closeModal';
            var1[var6] = var7;
            var7 = _closure2_slot7;
            var6 = 'addOnCloseCallback';
            var1[var6] = var7;
            var7 = _closure2_slot5;
            var6 = 'reportId';
            var1[var6] = var7;
            var6 = _closure2_slot9;
            var5 = 'onNavigate';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['render'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IN_APP_REPORTS_NODE;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppReportModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.reportType;
            var _closure2_slot0 = var2;
            var2 = var3.menu;
            var _closure2_slot1 = var2;
            var4 = var3.afterSubmit;
            var _closure2_slot2 = var4;
            var3 = var3.isEligibleForFeedback;
            var _closure2_slot3 = var3;
            var3 = var2.nodes;
            var _closure2_slot4 = var3;
            var3 = var2.root_node_id;
            var _closure2_slot5 = var3;
            var3 = var2.success_node_id;
            var _closure2_slot6 = var3;
            var2 = var2.fail_node_id;
            var _closure2_slot7 = var2;
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var5 = undefined;
            var3 = var3.bind(var6)(var5);
            var10 = _closure1_slot4;
            var9 = 2;
            var3 = var10.bind(var5)(var3, var9);
            var8 = 0;
            var7 = var3[var8];
            var _closure2_slot8 = var7;
            var4 = 1;
            var3 = var3[var4];
            var _closure2_slot9 = var3;
            var3 = var6.useState;
            var3 = var3.bind(var6)(var5);
            var3 = var10.bind(var5)(var3, var9);
            var11 = var3[var8];
            var _closure2_slot10 = var11;
            var3 = var3[var4];
            var _closure2_slot11 = var3;
            var11 = var6.useState;
            var3 = new Array(0);
            var3 = var11.bind(var6)(var3);
            var3 = var10.bind(var5)(var3, var9);
            var11 = var3[var8];
            var _closure2_slot12 = var11;
            var3 = var3[var4];
            var _closure2_slot13 = var3;
            var11 = var6.useState;
            var3 = new Array(0);
            var3 = var11.bind(var6)(var3);
            var3 = var10.bind(var5)(var3, var9);
            var8 = var3[var8];
            var _closure2_slot14 = var8;
            var3 = var3[var4];
            var _closure2_slot15 = var3;
            var3 = function addOnCloseCallback(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot15;
                var1 = undefined;
                var2 = function(arg1) {
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
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot16 = var3;
            var8 = function closeModal() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var2 = var7[var5];
                    var1 = undefined;
                    var11 = var6.bind(var1)(var2);
                    var10 = var11.trackCloseReportModalAnalytics;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot12;
                    var4 = _closure2_slot8;
                    var4 = var10.bind(var11)(var9, var8, var4);
                    var4 = 10;
                    var4 = var7[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.hideReportModal;
                    var4 = var4.bind(var6)();
                    var7 = _closure2_slot14;
                    var6 = var7.forEach;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure2_slot3;
                    if(!var4) { _fun0002_ip = 140; continue _fun0002 }
 103:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.showInAppReportsFeedbackModal;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot8;
                    var2 = var4.bind(var5)(var3, var2);
 140:
                    return var1;
                }
            };
            var _closure2_slot17 = var8;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot5;
                    var9 = var3[var2];
                    var2 = null;
                    if(!(var2 != var9)) { _fun0003_ip = 198; continue _fun0003 }
 26:
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    StartGenerator();
                                    var7 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0004_ip = 183; continue _fun0004 }
 13:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 9;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var8 = var4.bind(var3)(var2);
                                    var6 = var8.submitReport;
                                    var5 = _closure2_slot1;
                                    var2 = _closure2_slot0;
                                    var2 = var6.bind(var8)(var5, var2, var7);
                                    SaveGenerator(address=66);
 64:
                                    return var2;
 66:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0004_ip = 180; continue _fun0004 }
 72:
                                    var6 = null;
                                    var5 = var6 == var2;
                                    var8 = undefined;
                                    if(var5) { _fun0004_ip = 103; continue _fun0004 }
 83:
                                    var5 = var2.body;
                                    var9 = var6 == var5;
                                    var8 = undefined;
                                    if(var9) { _fun0004_ip = 103; continue _fun0004 }
 97:
                                    var8 = var5.report_id;
 103:
                                    if(!(var6 != var8)) { _fun0004_ip = 116; continue _fun0004 }
 107:
                                    var5 = _closure2_slot9;
                                    var5 = var5.bind(var3)(var8);
 116:
                                    var8 = var7.length;
                                    var5 = 1;
                                    var5 = var8 - var5;
                                    var5 = var7[var5];
                                    var7 = _closure2_slot11;
                                    var8 = _closure2_slot4;
                                    var5 = var5.nodeRef;
                                    var5 = var8[var5];
                                    var5 = var5.report_type;
                                    var5 = var7.bind(var3)(var5);
                                    var5 = _closure2_slot2;
                                    if(!(var6 != var5)) { _fun0004_ip = 177; continue _fun0004 }
 169:
                                    var4 = _closure2_slot2;
                                    var4 = var4.bind(var3)();
 177:
                                    return var3;
 180:
                                    return var2;
 183:
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
                    var5 = undefined;
                    var8 = var2.bind(var5)();
                    var2 = {};
                    var6 = {};
                    var4 = _closure1_slot6;
                    var6['name'] = var4;
                    var4 = {};
                    var4['node'] = var9;
                    var9 = new Array(0);
                    var4['history'] = var9;
                    var6['params'] = var4;
                    var4 = new Array(1);
                    var4[0] = var6;
                    var2['initialStack'] = var4;
                    var4 = _closure1_slot8;
                    var3 = {};
                    var6 = _closure2_slot4;
                    var3['nodeMap'] = var6;
                    var6 = _closure2_slot0;
                    var3['reportType'] = var6;
                    var6 = _closure2_slot10;
                    var3['reportSubType'] = var6;
                    var6 = _closure2_slot6;
                    var3['successNodeId'] = var6;
                    var6 = _closure2_slot7;
                    var3['failNodeId'] = var6;
                    var6 = {};
                    var6['onSubmit'] = var8;
                    var8 = _closure2_slot17;
                    var6['closeModal'] = var8;
                    var8 = _closure2_slot16;
                    var6['addOnCloseCallback'] = var8;
                    var7 = function onNavigate(arg1) {
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var3 = _closure2_slot13;
                        var1 = undefined;
                        var2 = function(arg1) {
                            var1 = new Array(1);
                            var5 = arg1;
                            var4 = 0;
                            var6 = var1;
                            var3 = arraySpread(var6, var5, var4);
                            var2 = _closure4_slot0;
                            var1[var3] = var2;
                            var2 = 1;
                            var2 = var3 + var2;
                            return var1;
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6['onNavigate'] = var7;
                    var3['callbacks'] = var6;
                    var6 = _closure2_slot8;
                    var3['reportId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2['screens'] = var3;
                    return var2;
 198:
                    var2 = _closure2_slot17;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var1 = {};
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var3);
            var6 = var1.initialStack;
            var7 = var1.screens;
            var4 = null;
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0001_ip = 422; continue _fun0001 }
 313:
            var3 = var4 == var7;
            var1 = null;
            if(var3) { _fun0001_ip = 422; continue _fun0001 }
 322:
            var4 = _closure1_slot7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 11;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.Navigator;
            var2 = {};
            var2['screens'] = var7;
            var2['initialRouteStack'] = var6;
            var6 = 7;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.13/7kZ;
            var6 = var7.bind(var8)(var6);
            var2['headerBackTitle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 422:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();