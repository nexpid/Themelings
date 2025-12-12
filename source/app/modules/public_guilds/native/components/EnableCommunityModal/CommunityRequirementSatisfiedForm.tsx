// app/modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CommunityRequirementSatisfiedForm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.formSwitchDisabled;
            var _closure2_slot0 = var8;
            var6 = var1.children;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useEnableCommunitySharedStyles;
            var11 = var1.bind(var2)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var11.communityRequirementSatisfiedFormWrapper;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot3;
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 5;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var12 = 'button';
            var7['accessibilityRole'] = var12;
            var11 = var11.communityRequirementSatisfiedFormPressable;
            var7['style'] = var11;
            var10 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.communityRequirementSatisfied;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 2:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();