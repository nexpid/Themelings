// app/modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormTrialIntervalPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.interval;
            var _closure2_slot0 = var10;
            var2 = var1.onChange;
            var _closure2_slot1 = var2;
            var2 = var1.trialIntervalOptions;
            var _closure2_slot2 = var2;
            var5 = var1.disabled;
            var4 = _closure1_slot3;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var7 = null;
            if(!(var7 != var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 4;
            var7 = var11[var7];
            var9 = var9.bind(var3)(var7);
            var7 = var9.formatPlanIntervalDuration;
            var7 = var7.bind(var9)(var10);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 3;
            var9 = var12[var8];
            var9 = var11.bind(var3)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.t;
            var8 = var8.WZG1BQ;
            var7 = var9.bind(var10)(var8);
case 4:
            var1['label'] = var7;
            var6 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 5;
                    var3 = var10[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 7;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var2 = 6;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = 3;
                    var7 = var10[var2];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.m1KuWV;
                    var2 = var7.bind(var8)(var2);
                    var3['title'] = var2;
                    var2 = _closure2_slot2;
                    var3['items'] = var2;
                    var2 = function onItemSelect(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
case 5:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.hideActionSheet;
                            var2 = 'GuildRoleSubscriptionTrialIntervalSelect';
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var3['onItemSelect'] = var2;
                    var8 = _closure2_slot0;
                    var2 = null;
                    var8 = var2 != var8;
                    if(!var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2 = _closure2_slot0;
case 7:
                    var3['selectedItem'] = var2;
                    var2 = 'GuildRoleSubscriptionTrialIntervalSelect';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var1['disabled'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();