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
        var1 = arg1;
        var11 = var1.bountyId;
        var _closure2_slot0 = var11;
        var10 = var1.sourceQuestContent;
        var _closure2_slot1 = var10;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 3;
        var5 = var6[var4];
        var4 = undefined;
        var8 = var2.bind(var4)(var5);
        var7 = var8.useBountiesExperience;
        var5 = _closure1_slot4;
        var5 = var5.VIDEO_MODAL_MOBILE;
        var5 = var7.bind(var8)(var5);
        var5 = var5.verticalScrollEnabled;
        var _closure2_slot2 = var5;
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var7 = new Array(3);
        var7[0] = var11;
        var7[1] = var10;
        var7[2] = var5;
        var5 = function() {
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
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var1 = _closure2_slot2;
                    var6 = _closure1_slot2;
                    if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var1 = 5;
                    var1 = var6[var1];
                    _fun0001_ip = 4; continue _fun0001;
case 2:
                    var3 = 4;
                    var1 = var6[var3];
case 4:
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
        var5 = var8.bind(var9)(var5, var7);
        var8 = var9.useLayoutEffect;
        var7 = function() {
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
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
        var3 = new Array(0);
        var3 = var8.bind(var9)(var7, var3);
        var3 = _closure1_slot5;
        var1 = 7;
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
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();