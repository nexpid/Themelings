// app/modules/quests/native/BountiesModal/BountiesModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function BountiesModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.bountyId;
            var _closure2_slot0 = var9;
            var8 = var1.sourceQuestContent;
            var _closure2_slot1 = var8;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 3;
            var3 = var10[var3];
            var3 = var7.bind(var4)(var3);
            var11 = var3.BountiesStage1Experiment;
            var6 = var11.useConfig;
            var3 = {};
            var5 = _closure1_slot4;
            var12 = var5.VIDEO_MODAL_MOBILE;
            var3['location'] = var12;
            var3 = var6.bind(var11)(var3);
            var3 = var3.verticalScrollEnabled;
            var6 = 4;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.useIsBountiesVerticalScrollExperimentEnabled;
            var5 = var5.VIDEO_MODAL_MOBILE;
            var5 = var6.bind(var7)(var5);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5;
case 2:
            _closure2_slot2 = var3;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var8;
            var5[2] = var3;
            var3 = function() {
                var1 = {};
                var3 = {};
                var4 = true;
                var3['fullscreen'] = var4;
                var4 = function headerLeft() {
                    var1 = null;
                    return var1;
                };
                var3['headerLeft'] = var4;
                var2 = function render() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = _closure1_slot5;
                        var2 = _closure1_slot1;
                        var1 = _closure2_slot2;
                        var6 = _closure1_slot2;
                        if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var1 = 6;
                        var1 = var6[var1];
                        _fun0002_ip = 6; continue _fun0002;
case 4:
                        var3 = 5;
                        var1 = var6[var3];
case 6:
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure2_slot0;
                        var1['bountyId'] = var6;
                        var5 = _closure2_slot1;
                        var1['sourceQuestContent'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var3['render'] = var2;
                var2 = 'bounty_main';
                var1[1] = var3;
                return var1;
            };
            var5 = var6.bind(var7)(var3, var5);
            var6 = var7.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var5 = var4[var1];
                var2 = undefined;
                var8 = var3.bind(var2)(var5);
                var7 = var8.lockOrientation;
                var6 = 'PORTRAIT';
                var5 = true;
                var5 = var7.bind(var8)(var6, var5);
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.restoreDefaultOrientation;
                return var1;
            };
            var2 = new Array(0);
            var2 = var6.bind(var7)(var3, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Modal;
            var1 = {'hideTitle': true, 'initialRouteName': 'bounty_main'};
            var1['screens'] = var5;
            var5 = {};
            var6 = '#000000';
            var5['backgroundColor'] = var6;
            var1['viewStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();