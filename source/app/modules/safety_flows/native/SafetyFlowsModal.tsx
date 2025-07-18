// app/modules/safety_flows/native/SafetyFlowsModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var4];
    var4 = native4;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var7 = var8.createContext;
    var4 = null;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/SafetyFlowsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SafetyFlowsModal(arg1) {
        var2 = arg1;
        var3 = var2.task;
        var9 = var2.initialScreen;
        var6 = _closure1_slot4;
        var2 = var6.useState;
        var7 = var2.bind(var6)(var3);
        var3 = _closure1_slot3;
        var4 = undefined;
        var2 = 2;
        var3 = var3.bind(var4)(var7, var2);
        var2 = 0;
        var10 = var3[var2];
        var _closure2_slot0 = var10;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var2 = function useScreens() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.useNavigatorScreens;
            var2 = function() {
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var7 = var6[var2];
                var3 = undefined;
                var7 = var5.bind(var3)(var7);
                var7 = var7.SafetyFlowScreens;
                var8 = var7.OVERVIEW;
                var7 = {};
                var9 = function headerLeft() {
                    var1 = null;
                    return var1;
                };
                var7['headerLeft'] = var9;
                var9 = false;
                var7['headerShown'] = var9;
                var9 = function render() {
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var7['render'] = var9;
                var1[var8] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var3)(var7);
                var7 = var7.SafetyFlowScreens;
                var8 = var7.ENTER_EMAIL;
                var7 = {};
                var9 = function headerLeft() {
                    var1 = null;
                    return var1;
                };
                var7['headerLeft'] = var9;
                var9 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var7['headerTitle'] = var9;
                var9 = function render() {
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var7['render'] = var9;
                var1[var8] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var3)(var7);
                var7 = var7.SafetyFlowScreens;
                var8 = var7.VERIFY_EMAIL;
                var7 = {};
                var9 = 7;
                var9 = var6[var9];
                var10 = var5.bind(var3)(var9);
                var9 = var10.getHeaderBackButton;
                var9 = var9.bind(var10)();
                var7['headerLeft'] = var9;
                var9 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var7['headerTitle'] = var9;
                var9 = function render() {
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var7['render'] = var9;
                var1[var8] = var7;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.SafetyFlowScreens;
                var3 = var2.UPDATE_APP;
                var2 = {};
                var5 = function headerLeft() {
                    var1 = null;
                    return var1;
                };
                var2['headerLeft'] = var5;
                var5 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var2['headerTitle'] = var5;
                var4 = function render() {
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var8 = var2.bind(var4)();
        var7 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var10;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var4 = var3.flow_context;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 83; continue _fun0001 }
 21:
                var2 = _closure2_slot0;
                var2 = var2.flow_context;
                var4 = var2.tasks;
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getScreensForTaskType;
                    var1 = arg1;
                    var1 = var1.task_type;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.flat;
                var1 = var1.bind(var2)();
                _fun0001_ip = 87; continue _fun0001;
 83:
                var1 = new Array(0);
 87:
                return var1;
            }
        };
        var7 = var7.bind(var6)(var2, var3);
        var3 = var6.useMemo;
        var2 = new Array(1);
        var2[0] = var10;
        var1 = function() {
            var1 = {};
            var3 = _closure2_slot0;
            var1['task'] = var3;
            var2 = _closure2_slot1;
            var1['setTask'] = var2;
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot5;
        var1 = _closure1_slot6;
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var6;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 11;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.StepModal;
        var5 = {};
        var5['initialRouteName'] = var9;
        var5['screens'] = var8;
        var5['steps'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useSafetyFlowTask() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.useContext;
            var1 = _closure1_slot6;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0002_ip = 30; continue _fun0002 }
 28:
            return var1;
 30:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'useSafetyFlowTask must be used within a SafetyFlowsModal';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useSafetyFlowTask'] = var2;
    return var1;
})();