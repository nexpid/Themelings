// app/modules/chat_input/native/useChatBottomManagerUIStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function getChatInputContainerHeight() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var4 = var3[var1];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var4 = var3.Storage;
            var3 = var4.get;
            var2 = _closure1_slot2;
            var2 = var3.bind(var4)(var2, var1);
            var3 = null;
            var3 = var3 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function writeChatInputContainerHeight(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot5;
        var2 = var3.setState;
        var1 = function(arg1) {
            var1 = global;
            var3 = var1.Map;
            var1 = arg1;
            var6 = var1.chatInputContainerHeight;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var2 = var1 instanceof Object ? var1 : var2;
            var4 = var2.set;
            var3 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var4.bind(var2)(var3, var1);
            var1 = {};
            var1['chatInputContainerHeight'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var5);
    var4 = 'chatInputContainerHeight';
    var _closure1_slot2 = var4;
    var4 = [180, 720];
    var _closure1_slot3 = var4;
    var1 = var1.Set;
    var4 = var1.prototype;
    var4 = Object.create(var4, {constructor: {value: var1}});
    var13 = var4;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot4 = var1;
    var1 = 1;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = global;
        var3 = var2.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['chatInputContainerHeight'] = var3;
        var3 = var2.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['showingAutoComplete'] = var3;
        var3 = var2.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['showJumpToPresentButtonChannelId'] = var3;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['isAtBottom'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/useChatBottomManagerUIStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = 64;
    var3['CHAT_INPUT_CONTAINER_HEIGHT_FALLBACK_FLOATING_DP'] = var4;
    var4 = function updateChatInputContainerHeight(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = false;
case 4:
            var6 = 'number';
            var2 = typeof var4;
            if(!(var6 === var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 0;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var7 = var6.Storage;
            var6 = var7.set;
            var2 = _closure1_slot2;
            var2 = var6.bind(var7)(var2, var3);
case 6:
            var6 = _closure1_slot7;
            var6 = var6.bind(var1)(var4, var3);
            var5 = !var5;
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = 0;
            var5 = var3 <= var6;
case 8:
            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var7 = _closure1_slot4;
            var6 = var7.has;
            var5 = var6.bind(var7)(var4);
case 10:
            if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = _closure1_slot4;
            var2 = var5.add;
            var2 = var2.bind(var5)(var4);
            var2 = function scheduleColdStartReemissions(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var3 = _closure1_slot3;
                var2 = var3.forEach;
                var1 = function(arg1, arg2) {
                    var1 = arg2;
                    var _closure4_slot0 = var1;
                    var1 = global;
                    var4 = var1.setTimeout;
                    var1 = undefined;
                    var3 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure1_slot5;
                            var1 = var3.getState;
                            var1 = var1.bind(var3)();
                            var5 = var1.chatInputContainerHeight;
                            var4 = var5.get;
                            var3 = _closure3_slot0;
                            var7 = var4.bind(var5)(var3);
                            var3 = null;
                            var3 = var3 == var7;
                            if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 14:
                            var4 = global;
                            var6 = var4.Math;
                            var5 = var6.abs;
                            var4 = _closure3_slot1;
                            var4 = var7 - var4;
                            var5 = var5.bind(var6)(var4);
                            var4 = 0.5;
                            var3 = var5 > var4;
case 9:
                            if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var4 = _closure1_slot7;
                            var3 = _closure3_slot0;
                            var2 = _closure3_slot1;
                            var5 = _closure4_slot0;
                            var1 = 1;
                            var5 = var5 + var1;
                            var1 = 0.05;
                            var1 = var1 * var5;
                            var2 = var2 + var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
case 15:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = arg1;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var1)(var4, var3);
case 12:
            return var1;
        }
    };
    var3['updateChatInputContainerHeight'] = var4;
    var4 = function rearmColdStartReemissions(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.delete;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['rearmColdStartReemissions'] = var4;
    var4 = function updateShowingAutoComplete(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot5;
        var2 = var3.setState;
        var1 = function(arg1) {
            var1 = global;
            var3 = var1.Map;
            var1 = arg1;
            var6 = var1.showingAutoComplete;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var2 = var1 instanceof Object ? var1 : var2;
            var4 = var2.set;
            var3 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var4.bind(var2)(var3, var1);
            var1 = {};
            var1['showingAutoComplete'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['updateShowingAutoComplete'] = var4;
    var4 = function updateShouldShowJumpToPresentButton(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot5;
        var2 = var3.setState;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = global;
                var3 = var1.Map;
                var1 = arg1;
                var8 = var1.showJumpToPresentButtonChannelId;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var2 = var1 instanceof Object ? var1 : var2;
                var4 = var2.set;
                var3 = _closure2_slot1;
                var6 = _closure2_slot2;
                var1 = undefined;
                if(!var6) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1 = _closure2_slot0;
case 17:
                var1 = var4.bind(var2)(var3, var1);
                var1 = {};
                var1['showJumpToPresentButtonChannelId'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['updateShouldShowJumpToPresentButton'] = var4;
    var4 = function useChatInputContainerHeight(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = var1.chatInputContainerHeight;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = var3.bind(var2)();
case 19:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useChatInputContainerHeight'] = var4;
    var4 = function useChatShowingAutoComplete(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var3 = var1.showingAutoComplete;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var1 = var2;
case 21:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useChatShowingAutoComplete'] = var4;
    var4 = function updateIsAtBottom(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot5;
        var2 = var3.setState;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var5 = var1.isAtBottom;
                var4 = var5.get;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = _closure2_slot1;
                if(!(var4 !== var3)) { _fun0007_ip = 8; continue _fun0007 }
case 23:
                var3 = global;
                var5 = var3.Map;
                var7 = var1.isAtBottom;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var5 = var3.set;
                var4 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var5.bind(var3)(var4, var2);
                var2 = {};
                var2['isAtBottom'] = var3;
                return var2;
case 8:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['updateIsAtBottom'] = var4;
    var4 = function useChatIsAtBottom(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var3 = var1.isAtBottom;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                var1 = var2;
case 21:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useChatIsAtBottom'] = var4;
    var2 = function useBestActiveChatInputContainerHeight() {
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = var4.getHighestActiveScreenIndex;
                var6 = var1.bind(var4)();
                var4 = null;
                if(!(var4 != var6)) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                var1 = arg1;
                var5 = var1.chatInputContainerHeight;
                var1 = var5.get;
                var1 = var1.bind(var5)(var6);
                if(!(var4 == var1)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                var4 = _closure1_slot6;
                var1 = var4.bind(var3)();
case 26:
                _fun0009_ip = 28; continue _fun0009;
case 24:
                var2 = _closure1_slot6;
                var1 = var2.bind(var3)();
case 28:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useBestActiveChatInputContainerHeight'] = var2;
    return var1;
})();