// app/modules/chat_input/native/ChatBottomManagerUIStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function getKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var5 = var4.createZustandStore;
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = {'chatInputContainerHeight': null, 'showingAutoComplete': false, 'showingExpressionSuggestions': false};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.Storage;
            var4 = var5.get;
            var3 = 'chatInputContainerHeight';
            var2 = 0;
            var3 = var4.bind(var5)(var3, var2);
            var4 = null;
            var4 = var4 != var3;
            if(!var4) { _fun0001_ip = 74; continue _fun0001 }
 71:
            var2 = var3;
 74:
            var1['chatInputContainerHeight'] = var2;
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var8 = var3;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var3;
            var1['shouldShowJumpToPresentButton'] = var2;
            return var1;
        }
    };
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/ChatBottomManagerUIStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function updateChatInputContainerHeight(arg1) {
        var5 = arg1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var6 = var3.Storage;
        var4 = var6.set;
        var3 = 'chatInputContainerHeight';
        var3 = var4.bind(var6)(var3, var5);
        var4 = _closure1_slot2;
        var3 = var4.setState;
        var2 = {};
        var2['chatInputContainerHeight'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateChatInputContainerHeight'] = var4;
    var4 = function updateShowingAutoComplete(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.setState;
        var1 = {};
        var4 = arg1;
        var1['showingAutoComplete'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['updateShowingAutoComplete'] = var4;
    var4 = function updateShowingExpressionSuggestions(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.setState;
        var1 = {};
        var4 = arg1;
        var1['showingExpressionSuggestions'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['updateShowingExpressionSuggestions'] = var4;
    var4 = function updateShouldShowJumpToPresentButton(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg3;
            var5 = _closure1_slot2;
            var4 = var5.getField;
            var1 = 'shouldShowJumpToPresentButton';
            var7 = var4.bind(var5)(var1);
            var6 = _closure1_slot3;
            var1 = undefined;
            var5 = arg1;
            var4 = arg2;
            var4 = var6.bind(var1)(var5, var4);
            var5 = var7.has;
            var5 = var5.bind(var7)(var4);
            if(!(var5 !== var3)) { _fun0002_ip = 135; continue _fun0002 }
 57:
            var5 = global;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var10 = var6;
            var9 = var7;
            var5 = new var10[var5](var9, var8);
            var5 = var5 instanceof Object ? var5 : var6;
            if(var3) { _fun0002_ip = 103; continue _fun0002 }
 91:
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            _fun0002_ip = 113; continue _fun0002;
 103:
            var3 = var5.add;
            var3 = var3.bind(var5)(var4);
 113:
            var4 = _closure1_slot2;
            var3 = var4.setState;
            var2 = {};
            var2['shouldShowJumpToPresentButton'] = var5;
            var2 = var3.bind(var4)(var2);
 135:
            return var1;
        }
    };
    var3['updateShouldShowJumpToPresentButton'] = var4;
    var2 = function useShouldShowJumpToPresentButton(arg1, arg2) {
        var4 = _closure1_slot2;
        var3 = var4.useField;
        var2 = 'shouldShowJumpToPresentButton';
        var3 = var3.bind(var4)(var2);
        var2 = var3.has;
        var6 = _closure1_slot3;
        var5 = undefined;
        var4 = arg1;
        var1 = arg2;
        var1 = var6.bind(var5)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useShouldShowJumpToPresentButton'] = var2;
    return var1;
})();