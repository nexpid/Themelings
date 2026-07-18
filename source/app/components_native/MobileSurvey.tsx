// app/components_native/MobileSurvey.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginLeft'] = var10;
    var4['confirmIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/MobileSurvey.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MobileSurvey() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot8;
            var5 = undefined;
            var1 = var1.bind(var5)();
            var _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentSurvey;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var3.bind(var4)(var2, var1);
            var _closure2_slot1 = var8;
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = function _setSurveySeen() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                                    var4 = _closure2_slot1;
                                    var3 = null;
                                    if(!(var3 != var4)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 8;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var4 = var5.bind(var3)(var4);
                                    var3 = var4.surveySeen;
                                    var2 = _closure2_slot1;
                                    var2 = var2.key;
                                    var2 = var3.bind(var4)(var2);
                                    SaveGenerator(address=69);
case 6:
                                    return var2;
case 7:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 4:
                                    var3 = undefined;
                                    return var3;
case 8:
                                    return var2;
case 2:
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
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot6;
                    var4 = var3.OPEN_MODAL;
                    var3 = {};
                    var8 = 'survey';
                    var3['type'] = var8;
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var3['promotion_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = function setSurveySeen() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = var1.bind(var2)();
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var1 = null;
            var2 = var1 != var8;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 9;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = var8.prompt;
            var2['body'] = var9;
            var8 = var8.cta;
            var2['confirmText'] = var8;
            var10 = _closure1_slot0;
            var7 = 10;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.f3Pet9;
            var7 = var8.bind(var9)(var7);
            var2['cancelText'] = var7;
            var7 = function onConfirm() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.openURL;
                var2 = _closure2_slot1;
                var4 = var2.url;
                var4 = var6.bind(var7)(var4);
                var4 = _closure1_slot0;
                var3 = 8;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.surveyHide;
                var3 = var2.key;
                var2 = false;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2['onConfirm'] = var7;
            var7 = function onCancel() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.surveyHide;
                var1 = _closure2_slot1;
                var2 = var1.key;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['onCancel'] = var7;
            var6 = function renderConfirmRightIcon() {
                var4 = _closure1_slot7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 12;
                var1 = var7[var5];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.Icon;
                var1 = {};
                var9 = _closure2_slot0;
                var9 = var9.confirmIcon;
                var1['style'] = var9;
                var6 = _closure1_slot1;
                var9 = 13;
                var9 = var7[var9];
                var9 = var6.bind(var3)(var9);
                var9 = var9.unsafe_rawColors;
                var9 = var9.WHITE;
                var1['color'] = var9;
                var5 = var7[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.Icon;
                var5 = var5.Sizes;
                var5 = var5.SMALL;
                var1['size'] = var5;
                var5 = 14;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var1['source'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['renderConfirmRightIcon'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();