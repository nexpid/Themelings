// app/modules/quests/native/QuestContentImpressionTracker.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
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
    var4 = var4.AppStates;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = function calculateVisibilityPercentage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.visibilityRef;
            var3 = var1.quest;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            if(var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = var2.current;
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var5 = var5.children;
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0004_ip = 36; continue _fun0004 }
case 39:
            var3 = var3.id;
            var1 = var5[var3];
case 36:
            var5 = var4 == var1;
            var3 = undefined;
            if(var5) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var3 = var1.layout;
case 40:
            if(!(var4 != var3)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var5 = var2.current;
            var5 = var5.parent;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 44; continue _fun0004 }
case 46:
            var3 = var5.layout;
case 44:
            if(!(var4 != var3)) { _fun0004_ip = 42; continue _fun0004 }
case 47:
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var5 = var2.current;
            var5 = var5.parent;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 48; continue _fun0004 }
case 50:
            var3 = var5.scrollY;
case 48:
            if(!(var4 != var3)) { _fun0004_ip = 42; continue _fun0004 }
case 51:
            var3 = var1.layout;
            var3 = var3.y;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var1.layout;
            var4 = var3.y;
            var3 = var1.layout;
            var3 = var3.height;
            var3 = var4 + var3;
            var5[1] = var3;
            var3 = var2.current;
            var3 = var3.parent;
            var4 = var3.scrollY;
            var3 = new Array(2);
            var3[0] = var4;
            var4 = var2.current;
            var4 = var4.parent;
            var4 = var4.scrollY;
            var2 = var2.current;
            var2 = var2.parent;
            var2 = var2.layout;
            var2 = var2.height;
            var2 = var4 + var2;
            var3[1] = var2;
            var2 = global;
            var9 = var2.Math;
            var8 = var9.max;
            var7 = 0;
            var6 = var5[var7];
            var4 = var3[var7];
            var8 = var8.bind(var9)(var6, var4);
            var9 = var2.Math;
            var6 = var9.min;
            var4 = 1;
            var5 = var5[var4];
            var3 = var3[var4];
            var3 = var6.bind(var9)(var5, var3);
            var6 = var2.Math;
            var5 = var6.max;
            var3 = var3 - var8;
            var5 = var5.bind(var6)(var7, var3);
            var3 = var2.Math;
            var2 = var3.min;
            var1 = var1.layout;
            var1 = var1.height;
            var1 = var5 / var1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
case 42:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function useVisibilityData(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var7 = var2.questOrQuests;
            var1 = var2.visibilityRef;
            var3 = var2.overrideVisibility;
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var5 = 0;
            var9 = var4.bind(var6)(var5);
            var8 = _closure1_slot3;
            var4 = undefined;
            var6 = 2;
            var8 = var8.bind(var4)(var9, var6);
            var5 = var8[var5];
            var6 = {};
            var6['questOrQuests'] = var7;
            var7 = 1;
            var7 = var8[var7];
            var6['setVisibilityPercentage'] = var7;
            var6['visibilityRef'] = var1;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.questOrQuests;
                    var3 = var2.setVisibilityPercentage;
                    var _closure3_slot0 = var3;
                    var3 = var2.visibilityRef;
                    var _closure3_slot1 = var3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var5 = function _loop(arg1) {
                        var5 = arg1;
                        var _closure4_slot0 = var5;
                        var6 = _closure3_slot1;
                        var1 = var6.current;
                        var3 = var1.children;
                        var2 = var5.id;
                        var1 = {};
                        var6 = var6.current;
                        var6 = var6.children;
                        var5 = var5.id;
                        var7 = var6[var5];
                        var8 = var1;
                        var5 = copyDataProperties(var8, var7);
                        var5 = function calculateVisibility() {
                            var3 = _closure3_slot0;
                            var4 = _closure1_slot8;
                            var1 = {};
                            var2 = _closure3_slot1;
                            var1['visibilityRef'] = var2;
                            var2 = _closure4_slot0;
                            var1['quest'] = var2;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var4 = 'calculateVisibility';
                        var1[var4] = var5;
                        var3[var2] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var2 = _closure1_slot10;
                    var1 = global;
                    var3 = var1.Array;
                    var1 = var3.isArray;
                    var3 = var1.bind(var3)(var4);
                    var1 = var4;
                    if(var3) { _fun0006_ip = 9; continue _fun0006 }
case 54:
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1 = var3;
case 9:
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if(var1) { _fun0006_ip = 52; continue _fun0006 }
case 55:
                    var1 = var2.value;
                    var1 = var5.bind(var4)(var1);
                    var6 = var3.bind(var4)();
                    var1 = var6.done;
                    var2 = var6;
                    if(!var1) { _fun0006_ip = 55; continue _fun0006 }
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var1.bind(var4)(var6);
            var1 = null;
            if(!(var1 == var3)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
            var3 = var5 >= var1;
case 56:
            var1 = {};
            var1['visible'] = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var2 = var3 !== var2;
            var1['visibleChanged'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestContentImpressionTracker.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestContentImpressionTrackerNative(arg1) {
        var1 = arg1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 7;
        var3 = var8[var3];
        var5 = undefined;
        var9 = var7.bind(var5)(var3);
        var6 = var9.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var6.bind(var9)(var4, var3);
        var3 = _closure1_slot6;
        var3 = var3.ACTIVE;
        var11 = var4 === var3;
        var6 = _closure1_slot4;
        var4 = var6.useRef;
        var3 = null;
        var10 = var4.bind(var6)(var3);
        var3 = _closure1_slot9;
        var12 = var3.bind(var5)(var1);
        var4 = _closure1_slot1;
        var3 = 6;
        var3 = var8[var3];
        var3 = var4.bind(var5)(var3);
        var9 = var3.bind(var5)(var11);
        var4 = _closure1_slot7;
        var6 = 5;
        var2 = var8[var6];
        var2 = var7.bind(var5)(var2);
        var3 = var2.QuestContentImpressionTrackerInner;
        var2 = {};
        var16 = var2;
        var15 = var1;
        var13 = copyDataProperties(var16, var15);
        var16 = var2;
        var15 = var12;
        var12 = copyDataProperties(var16, var15);
        var12 = 'focused';
        var2[var12] = var11;
        var11 = var11 !== var9;
        var9 = 'focusedChanged';
        var2[var9] = var11;
        var9 = 'reference';
        var2[var9] = var10;
        var6 = var8[var6];
        var8 = var7.bind(var5)(var6);
        var7 = var8.getQuestContentImpressionTrackerKey;
        var6 = var1.questOrQuests;
        var1 = var1.questContent;
        var1 = var7.bind(var8)(var6, var1);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['QuestContentImpressionTrackerNative'] = var2;
    return var1;
})();