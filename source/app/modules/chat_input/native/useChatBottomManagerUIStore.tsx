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
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 'chatInputContainerHeight';
    var _closure1_slot2 = var1;
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
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['showJumpToPresentButtonChannelId'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/useChatBottomManagerUIStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function updateChatInputContainerHeight(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var3 = 'number';
            var2 = typeof var2;
            if(!(var3 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var4 = var3.Storage;
            var3 = var4.set;
            var2 = _closure1_slot2;
            var2 = var3.bind(var4)(var2, var5);
case 4:
            var3 = _closure1_slot3;
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
        }
    };
    var3['updateChatInputContainerHeight'] = var4;
    var4 = function updateShowingAutoComplete(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
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
        var3 = _closure1_slot3;
        var2 = var3.setState;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                if(!var6) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var1 = _closure2_slot0;
case 6:
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
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = var1.chatInputContainerHeight;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = var3.bind(var2)();
case 8:
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
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = var1.showingAutoComplete;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                var1 = var2;
case 10:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useChatShowingAutoComplete'] = var4;
    var2 = function useBestActiveChatInputContainerHeight() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                if(!(var4 != var6)) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                var1 = arg1;
                var5 = var1.chatInputContainerHeight;
                var1 = var5.get;
                var1 = var1.bind(var5)(var6);
                if(!(var4 == var1)) { _fun0006_ip = 4; continue _fun0006 }
case 14:
                var4 = _closure1_slot4;
                var1 = var4.bind(var3)();
case 4:
                _fun0006_ip = 15; continue _fun0006;
case 12:
                var2 = _closure1_slot4;
                var1 = var2.bind(var3)();
case 15:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useBestActiveChatInputContainerHeight'] = var2;
    return var1;
})();