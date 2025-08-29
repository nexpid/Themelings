// app/modules/safety_flows/native/tasks/AgeVerificationScreen.tsx
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
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/tasks/AgeVerificationScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AgeVerificationScreen() {
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 4;
        var2 = var11[var2];
        var4 = undefined;
        var3 = var10.bind(var4)(var2);
        var2 = var3.useOnTaskComplete;
        var9 = var2.bind(var3)();
        var _closure2_slot0 = var9;
        var2 = 5;
        var2 = var11[var2];
        var7 = var10.bind(var4)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var6.bind(var7)(var3, var2);
        var _closure2_slot1 = var8;
        var2 = 6;
        var2 = var11[var2];
        var6 = var10.bind(var4)(var2);
        var3 = var6.useInitiateAgeVerification;
        var2 = function() {
            var3 = _closure2_slot0;
            var2 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.TaskInputType;
            var4 = var4.Empty;
            var2['type'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var6)(var2);
        var6 = var2.loading;
        var12 = var2.initiateAgeVerification;
        var _closure2_slot2 = var12;
        var7 = _closure1_slot4;
        var3 = var7.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 183; continue _fun0001 }
 10:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var3 = var2 == var3;
                    var2 = undefined;
                    var6 = undefined;
                    if(var3) { _fun0001_ip = 40; continue _fun0001 }
 30:
                    var3 = _closure2_slot1;
                    var6 = var3.ageVerificationStatus;
 40:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 8;
                    var5 = var8[var5];
                    var5 = var7.bind(var2)(var5);
                    var5 = var5.AgeVerificationStatusUkAndAusOnly;
                    var5 = var5.UNVERIFIED;
                    if(!(var6 !== var5)) { _fun0001_ip = 139; continue _fun0001 }
 79:
                    var6 = _closure2_slot0;
                    var5 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 7;
                    var7 = var9[var7];
                    var7 = var8.bind(var2)(var7);
                    var7 = var7.TaskInputType;
                    var7 = var7.Empty;
                    var5['type'] = var7;
                    var5 = var6.bind(var2)(var5);
                    SaveGenerator(address=130);
 128:
                    return var5;
 130:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0001_ip = 180; continue _fun0001 }
 136:
                    return var5;
 139:
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.AgeVerificationModalEntryPoint;
                    var3 = var3.SAFETY_FLOWS;
                    var3 = var4.bind(var2)(var3);
 180:
                    return var2;
 183:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = new Array(3);
        var1[0] = var12;
        var1[1] = var9;
        var1[2] = var8;
        var7 = var3.bind(var7)(var2, var1);
        var3 = _closure1_slot6;
        var13 = _closure1_slot1;
        var1 = 10;
        var1 = var11[var1];
        var2 = var13.bind(var4)(var1);
        var1 = {};
        var9 = 11;
        var8 = var11[var9];
        var8 = var10.bind(var4)(var8);
        var15 = var8.intl;
        var14 = var15.string;
        var8 = 12;
        var12 = var11[var8];
        var12 = var13.bind(var4)(var12);
        var12 = var12.dSkE/P;
        var12 = var14.bind(var15)(var12);
        var1['title'] = var12;
        var9 = var11[var9];
        var9 = var10.bind(var4)(var9);
        var12 = var9.intl;
        var9 = var12.string;
        var8 = var11[var8];
        var8 = var13.bind(var4)(var8);
        var8 = var8.RRBNpq;
        var8 = var9.bind(var12)(var8);
        var1['action'] = var8;
        var1['onAction'] = var7;
        var1['submitting'] = var6;
        var7 = _closure1_slot7;
        var5 = 13;
        var5 = var11[var5];
        var5 = var10.bind(var4)(var5);
        var6 = var5.Stack;
        var5 = {};
        var8 = 8;
        var5['spacing'] = var8;
        var9 = 14;
        var8 = var11[var9];
        var8 = var10.bind(var4)(var8);
        var12 = var8.Text;
        var8 = {'variant': 'text-md/normal', 'children': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'};
        var12 = var3.bind(var4)(var12, var8);
        var8 = new Array(3);
        var8[0] = var12;
        var12 = var11[var9];
        var12 = var10.bind(var4)(var12);
        var13 = var12.Text;
        var12 = {'variant': 'text-md/normal', 'children': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'};
        var12 = var3.bind(var4)(var13, var12);
        var8[1] = var12;
        var9 = var11[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.Text;
        var9 = {'variant': 'text-md/normal', 'children': 'Ut enim ad minim veniam quis'};
        var9 = var3.bind(var4)(var10, var9);
        var8[2] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();