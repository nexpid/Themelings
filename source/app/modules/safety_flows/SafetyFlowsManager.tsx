// app/modules/safety_flows/SafetyFlowsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function handleConnectionOpenSupplemental() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEligibleForSafetyFlowsExperiment;
            var3 = {};
            var6 = 'modal-manager-verification';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0002_ip = 81; continue _fun0002 }
 51:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.openSafetyFlow;
            var2 = var2.bind(var3)();
 81:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function handleSafetyFlowsModalOpen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.isEligibleForSafetyFlowsExperiment;
            var3 = {};
            var6 = 'modal-manager-verification';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0003_ip = 81; continue _fun0003 }
 51:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.openSafetyFlow;
            var2 = var2.bind(var3)();
 81:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function handleUserRequiredActionUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = var1.requiredAction;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var4 = var6.isEligibleForSafetyFlowsExperiment;
            var3 = {};
            var7 = 'modal-manager-verification';
            var3['location'] = var7;
            var3 = var4.bind(var6)(var3);
            if(!var3) { _fun0004_ip = 98; continue _fun0004 }
 60:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.openSafetyFlow;
            var2 = {};
            var2['requiredAction'] = var5;
            var2 = var3.bind(var4)(var2);
 98:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function SafetyFlowsManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 84; continue _fun0005 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 118; continue _fun0005;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot8;
                var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var4;
                var4 = _closure1_slot9;
                var2['SAFETY_FLOWS_MODAL_OPEN'] = var4;
                var3 = _closure1_slot10;
                var2['USER_REQUIRED_ACTION_UPDATE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/SafetyFlowsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();