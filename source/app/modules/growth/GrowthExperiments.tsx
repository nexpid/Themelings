// app/modules/growth/GrowthExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var3 = exports;
    var15 = dependencyMap;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot2;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot2;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var4 = function makeHoldoutWrappers(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = function checkHoldouts(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var10 = arg1;
                var2 = arg2;
                var5 = _closure1_slot0;
                var4 = var5.getUserExperimentDescriptor;
                var3 = var2.definition;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var8 = var10.location;
                var2 = var2.definition;
                var7 = var2.id;
                var2 = global;
                var4 = var2.HermesInternal;
                var6 = var4.concat;
                var5 = 'location:';
                var4 = ' experiment_name:';
                var6 = var6.bind(var5)(var8, var4, var7);
                var9 = null;
                var8 = var6;
                if(!(var9 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var5 = var3.revision;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ' revision:';
                var8 = var4.bind(var3)(var6, var2, var5);
case 36:
                var2 = _closure1_slot1;
                var1 = _closure2_slot0;
                var7 = undefined;
                var6 = var2.bind(var7)(var1);
                var1 = var6.bind(var7)();
                var2 = var1.done;
                var3 = var1;
                var1 = false;
                if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var13 = var3.value;
                var12 = var13.getCurrentConfig;
                var11 = {};
                var11['location'] = var8;
                var2 = {};
                var15 = var10.autoTrackExposure;
                var14 = var9 == var15;
                if(var14) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                var14 = var15;
case 40:
                var2['autoTrackExposure'] = var14;
                var2 = var12.bind(var13)(var11, var2);
                var2 = var2.inHoldout;
                var1 = true;
                if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 42:
                var11 = var6.bind(var7)();
                var2 = var11.done;
                var3 = var11;
                var1 = false;
                if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 38:
                return var1;
            }
        };
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = function useHoldoutExperiment(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var5 = arg2;
                var2 = _closure2_slot1;
                var1 = undefined;
                var6 = var2.bind(var1)(var5, var4);
                var3 = var4.useExperiment;
                var2 = {};
                var1 = var5.location;
                var2['location'] = var1;
                var1 = {};
                var8 = var5.autoTrackExposure;
                var7 = null;
                var7 = var7 == var8;
                if(var7) { _fun0005_ip = 43; continue _fun0005 }
case 4:
                var7 = var8;
case 43:
                var1['autoTrackExposure'] = var7;
                var5 = var5.disable;
                if(var5) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var5 = var6;
case 44:
                var1['disable'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1['useHoldoutExperiment'] = var3;
        var2 = function getHoldoutExperiment(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var5 = arg2;
                var2 = _closure2_slot1;
                var1 = undefined;
                var6 = var2.bind(var1)(var5, var4);
                var3 = var4.getCurrentConfig;
                var2 = {};
                var1 = var5.location;
                var2['location'] = var1;
                var1 = {};
                var8 = var5.autoTrackExposure;
                var7 = null;
                var7 = var7 == var8;
                if(var7) { _fun0006_ip = 43; continue _fun0006 }
case 4:
                var7 = var8;
case 43:
                var1['autoTrackExposure'] = var7;
                var5 = var5.disable;
                if(var5) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var5 = var6;
case 44:
                var1['disable'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1['getHoldoutExperiment'] = var2;
        return var1;
    };
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var18 = true;
    var2['value'] = var18;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var6 = var15[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var6);
    var _closure1_slot0 = var2;
    var2 = 1;
    var5 = var15[var2];
    var7 = var14.bind(var1)(var5);
    var6 = var7.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_growth_holdout_h2', 'label': 'Growth Holdout H2'};
    var8 = {};
    var19 = false;
    var8['inHoldout'] = var19;
    var5['defaultConfig'] = var8;
    var9 = {'id': 0, 'label': 'In Holdout'};
    var8 = {};
    var8['inHoldout'] = var18;
    var9['config'] = var8;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = {'id': 1, 'label': 'Treatment for comparison to holdout'};
    var10 = {};
    var10['inHoldout'] = var19;
    var9['config'] = var10;
    var8[1] = var9;
    var5['treatments'] = var8;
    var12 = var6.bind(var7)(var5);
    var5 = var15[var2];
    var7 = var14.bind(var1)(var5);
    var6 = var7.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_access_holdout_h2', 'label': 'Access Holdout H2'};
    var8 = {};
    var8['inHoldout'] = var19;
    var5['defaultConfig'] = var8;
    var9 = {'id': 0, 'label': 'In Holdout'};
    var8 = {};
    var8['inHoldout'] = var18;
    var9['config'] = var8;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = {'id': 1, 'label': 'Treatment for comparison to holdout'};
    var10 = {};
    var10['inHoldout'] = var19;
    var9['config'] = var10;
    var8[1] = var9;
    var5['treatments'] = var8;
    var11 = var6.bind(var7)(var5);
    var5 = new Array(2);
    var5[0] = var12;
    var5[1] = var11;
    var5 = var4.bind(var1)(var5);
    var8 = var5.useHoldoutExperiment;
    var7 = var5.getHoldoutExperiment;
    var5 = var15[var2];
    var9 = var14.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_experiences_holdout_h2', 'label': 'Experiences Holdout H2'};
    var10 = {};
    var10['inHoldout'] = var19;
    var5['defaultConfig'] = var10;
    var13 = {'id': 0, 'label': 'In Holdout'};
    var10 = {};
    var10['inHoldout'] = var18;
    var13['config'] = var10;
    var10 = new Array(2);
    var10[0] = var13;
    var13 = {'id': 1, 'label': 'Treatment for comparison to holdout'};
    var16 = {};
    var16['inHoldout'] = var19;
    var13['config'] = var16;
    var10[1] = var13;
    var5['treatments'] = var10;
    var10 = var6.bind(var9)(var5);
    var5 = new Array(2);
    var5[0] = var12;
    var5[1] = var10;
    var5 = var4.bind(var1)(var5);
    var6 = var5.useHoldoutExperiment;
    var5 = var5.getHoldoutExperiment;
    var2 = var15[var2];
    var13 = var14.bind(var1)(var2);
    var9 = var13.createExperiment;
    var2 = {'kind': 'user', 'id': '2025-07_notifications_platform_holdout_h2', 'label': 'NotificationsPlatform Holdout H2'};
    var16 = {};
    var16['inHoldout'] = var19;
    var2['defaultConfig'] = var16;
    var17 = {'id': 0, 'label': 'In Holdout'};
    var16 = {};
    var16['inHoldout'] = var18;
    var17['config'] = var16;
    var16 = new Array(2);
    var16[0] = var17;
    var17 = {'id': 1, 'label': 'Treatment for comparison to holdout'};
    var18 = {};
    var18['inHoldout'] = var19;
    var17['config'] = var18;
    var16[1] = var17;
    var2['treatments'] = var16;
    var9 = var9.bind(var13)(var2);
    var2 = new Array(2);
    var2[0] = var12;
    var2[1] = var9;
    var2 = var4.bind(var1)(var2);
    var4 = var2.useHoldoutExperiment;
    var2 = var2.getHoldoutExperiment;
    var13 = 2;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/growth/GrowthExperiments.tsx';
    var13 = var14.bind(var15)(var13);
    var3['GrowthHoldoutH2Experiment'] = var12;
    var3['AccessHoldoutH2Experiment'] = var11;
    var3['ExperiencesHoldoutH2Experiment'] = var10;
    var3['NotificationsPlatformHoldoutH2Experiment'] = var9;
    var3['useAccessExperiment'] = var8;
    var3['getAccessExperiment'] = var7;
    var3['useExperiencesExperiment'] = var6;
    var3['getExperiencesExperiment'] = var5;
    var3['useNotificationsPlatformExperiment'] = var4;
    var3['getNotificationsPlatformExperiment'] = var2;
    return var1;
})();