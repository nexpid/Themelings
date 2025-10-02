// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var4 = true;
    var7['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var7);
    var8 = var1.Object;
    var7 = var8.freeze;
    var4 = {};
    var1 = '';
    var4['name'] = var1;
    var1 = undefined;
    var4['emojiId'] = var1;
    var4['emojiName'] = var1;
    var4['description'] = var1;
    var4['refId'] = var1;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 0;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createWithEqualityFn;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var5 = _closure1_slot2;
        var6 = var1;
        var3 = copyDataProperties(var6, var5);
        var4 = function setEmojiId(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['emojiId'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = 'setEmojiId';
        var1[var3] = var4;
        var4 = function setEmojiName(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['emojiName'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = 'setEmojiName';
        var1[var3] = var4;
        var4 = function setName(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['name'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = 'setName';
        var1[var3] = var4;
        var4 = function setDescription(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['description'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = 'setDescription';
        var1[var3] = var4;
        var4 = function setRefId(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['refId'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = 'setRefId';
        var1[var3] = var4;
        var3 = function reset() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = _closure1_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = 'reset';
        var1[var2] = var3;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function resetImperatively() {
        var2 = _closure1_slot3;
        var1 = var2.getState;
        var2 = var1.bind(var2)();
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['resetImperatively'] = var4;
    var4 = function initializeImperatively(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot3;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var9 = var1.setDescription;
            var8 = var1.setEmojiId;
            var7 = var1.setEmojiName;
            var6 = var1.setName;
            var3 = var1.setRefId;
            var4 = var1.reset;
            var1 = undefined;
            var4 = var4.bind(var1)();
            var4 = var2.description;
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.description;
            var4 = var9.bind(var1)(var4);
case 2:
            var4 = var2.emoji_id;
            var4 = var8.bind(var1)(var4);
            var4 = var2.emoji_name;
            var4 = var7.bind(var1)(var4);
            var4 = var2.name;
            var4 = var6.bind(var1)(var4);
            var4 = var2.ref_id;
            if(!(var5 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var2.ref_id;
            var2 = var3.bind(var1)(var2);
case 4:
            return var1;
        }
    };
    var3['initializeImperatively'] = var4;
    var4 = function useDescriptionState() {
        var4 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.description;
            var2 = var1.setDescription;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useDescriptionState'] = var4;
    var4 = function useEmojiIdState() {
        var4 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.emojiId;
            var2 = var1.setEmojiId;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useEmojiIdState'] = var4;
    var4 = function useEmojiNameState() {
        var4 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.emojiName;
            var2 = var1.setEmojiName;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useEmojiNameState'] = var4;
    var4 = function useNameState() {
        var4 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.name;
            var2 = var1.setName;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useNameState'] = var4;
    var2 = function useRefIdState() {
        var4 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.refId;
            var2 = var1.setRefId;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useRefIdState'] = var2;
    return var1;
})();