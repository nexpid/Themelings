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
 0:
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
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 86; continue _fun0002 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.track;
                    var1 = _closure1_slot6;
                    var3 = var1.OPEN_MODAL;
                    var1 = {};
                    var6 = 'survey';
                    var1['type'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    var1 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0003_ip = 71; continue _fun0003 }
 7:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 8;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var5 = var4.bind(var3)(var2);
                                    var4 = var5.surveySeen;
                                    var2 = _closure2_slot1;
                                    var2 = var2.key;
                                    var2 = var4.bind(var5)(var2);
                                    SaveGenerator(address=59);
 57:
                                    return var2;
 59:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0003_ip = 68; continue _fun0003 }
 65:
                                    return var3;
 68:
                                    return var2;
 71:
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
                    var1 = var1.bind(var2)();
                    var1 = var1.bind(var2)();
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var1 = null;
            var2 = var1 != var8;
            if(!var2) { _fun0001_ip = 260; continue _fun0001 }
 115:
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
            var7 = var7.f3Pet7;
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
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 12;
                var1 = var7[var5];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var8 = _closure2_slot0;
                var8 = var8.confirmIcon;
                var1['style'] = var8;
                var8 = 13;
                var8 = var7[var8];
                var8 = var6.bind(var3)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.WHITE_500;
                var1['color'] = var8;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
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
 260:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();