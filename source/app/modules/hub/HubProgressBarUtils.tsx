// app/modules/hub/HubProgressBarUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function useCompletedStepsFromSettings(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot0;
                var4 = null;
                var3 = var4 == var1;
                var1 = 0;
                if(var3) { _fun0004_ip = 90; continue _fun0004 }
 18:
                var3 = _closure1_slot3;
                var3 = var3.settings;
                var6 = var3.guilds;
                var8 = var4 == var6;
                var3 = undefined;
                if(var8) { _fun0004_ip = 75; continue _fun0004 }
 46:
                var6 = var6.guilds;
                var5 = _closure2_slot0;
                var5 = var6[var5];
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0004_ip = 75; continue _fun0004 }
 69:
                var3 = var5.hubProgress;
 75:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0004_ip = 87; continue _fun0004 }
 84:
                var2 = var3;
 87:
                var1 = var2;
 90:
                return var1;
            }
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var8 = _closure2_slot1;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var13 = var2;
                var1 = new var13[var1](var12);
                var1 = var1 instanceof Object ? var1 : var2;
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = 9;
                if(var2) { _fun0005_ip = 130; continue _fun0005 }
 68:
                var9 = var3.value;
                var10 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var10 = var10.bind(var6)(var2);
                var2 = var10.hasFlag;
                var2 = var2.bind(var10)(var8, var9);
                if(!var2) { _fun0005_ip = 115; continue _fun0005 }
 105:
                var2 = var1.add;
                var2 = var2.bind(var1)(var9);
 115:
                var9 = var5.bind(var6)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0005_ip = 68; continue _fun0005 }
 130:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.HUB_PROGRESS_STEP_ORDER;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/HubProgressBarUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getHubProgressTitleForStep(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 6;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var2 = var2.HubProgressStep;
            var2 = var2.JOIN_GUILD;
            if(!(var2 !== var4)) { _fun0006_ip = 300; continue _fun0006 }
 47:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var3.bind(var5)(var2);
            var2 = var2.HubProgressStep;
            var2 = var2.INVITE_USER;
            if(!(var2 !== var4)) { _fun0006_ip = 243; continue _fun0006 }
 83:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var3.bind(var5)(var2);
            var2 = var2.HubProgressStep;
            var2 = var2.CONTACT_SYNC;
            if(!(var2 !== var4)) { _fun0006_ip = 186; continue _fun0006 }
 116:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var3.bind(var5)(var2);
            var2 = var2.HubProgressStep;
            var2 = var2.NO_PROGRESS;
            if(!(var2 !== var4)) { _fun0006_ip = 182; continue _fun0006 }
 149:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var5;
 182:
            var2 = null;
            return var2;
 186:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.HFvFtb;
            var2 = var3.bind(var4)(var2);
            return var2;
 243:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.3NlTYW;
            var2 = var3.bind(var4)(var2);
            return var2;
 300:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 7;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.iNR25u;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getHubProgressTitleForStep'] = var4;
    var4 = function useHubProgressBarCompletedSteps(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var6 = arg1;
            var5 = _closure1_slot9;
            var3 = null;
            var7 = var3 == var6;
            var4 = undefined;
            var3 = undefined;
            if(var7) { _fun0007_ip = 30; continue _fun0007 }
 25:
            var3 = var6.id;
 30:
            var6 = var5.bind(var4)(var3);
            var _closure2_slot0 = var6;
            var3 = function useContactSyncEverEnabled() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var3 = _closure1_slot4;
                    var2 = var3.getLocalAccount;
                    var1 = _closure1_slot6;
                    var1 = var1.CONTACTS;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var3.bind(var4)();
            var _closure2_slot1 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0008_ip = 16; continue _fun0008 }
 10:
                    var2 = _closure2_slot0;
                    return var2;
 16:
                    var2 = global;
                    var3 = var2.Set;
                    var6 = _closure2_slot0;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var7 = var2;
                    var1 = new var7[var3](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var3 = var1.add;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.HubProgressStep;
                    var2 = var2.CONTACT_SYNC;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useHubProgressBarCompletedSteps'] = var4;
    var2 = function getNextHubProgressStep(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot7;
            var1 = _closure1_slot5;
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0009_ip = 68; continue _fun0009 }
 33:
            var1 = var2.value;
            var6 = var5.has;
            var6 = var6.bind(var5)(var1);
            if(var6) { _fun0009_ip = 53; continue _fun0009 }
 51:
            return var1;
 53:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0009_ip = 33; continue _fun0009 }
 68:
            var1 = null;
            return var1;
        }
    };
    var3['getNextHubProgressStep'] = var2;
    return var1;
})();