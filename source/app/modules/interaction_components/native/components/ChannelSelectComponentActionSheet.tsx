// app/modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var14 = var1.messageId;
        var12 = var1.messageFlags;
        var10 = var1.applicationId;
        var5 = var1.channelId;
        var _closure2_slot0 = var5;
        var9 = var1.guildId;
        var _closure2_slot1 = var9;
        var11 = var1.selectionActionComponent;
        var2 = var11.channelTypes;
        var _closure2_slot2 = var2;
        var7 = _closure1_slot3;
        var4 = var7.useCallback;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var2;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.queryChannels;
            var3 = _closure2_slot0;
            var2 = _closure2_slot2;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        };
        var8 = var4.bind(var7)(var2, var3);
        var2 = _closure1_slot1;
        var13 = _closure1_slot2;
        var3 = 5;
        var3 = var13[var3];
        var4 = undefined;
        var7 = var2.bind(var4)(var3);
        var3 = {};
        var3['selectActionComponent'] = var11;
        var3['messageId'] = var14;
        var3['messageFlags'] = var12;
        var3['applicationId'] = var10;
        var3['channelId'] = var5;
        var3['guildId'] = var9;
        var3['queryOptions'] = var8;
        var3 = var7.bind(var4)(var3);
        var10 = var3.options;
        var9 = var3.selectedOptions;
        var8 = var3.isSelected;
        var12 = var3.onPressOptionItem;
        var7 = var3.submitSelection;
        var _closure2_slot3 = var7;
        var7 = var3.setQuery;
        var3 = _closure1_slot6;
        var1 = 6;
        var1 = var13[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['onPressOptionItem'] = var12;
        var12 = function renderIcon(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot4;
                var2 = var4.getChannel;
                var1 = arg1;
                var1 = var1.value;
                var7 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var7)) { _fun0001_ip = 131; continue _fun0001 }
 31:
                var5 = _closure1_slot5;
                var4 = var5.getGuild;
                var2 = _closure2_slot1;
                var5 = var4.bind(var5)(var2);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var6 = undefined;
                var4 = var4.bind(var6)(var2);
                var2 = var4.getChannelIconData;
                var7 = var2.bind(var4)(var7, var5);
                var2 = var1 != var7;
                if(!var2) { _fun0001_ip = 129; continue _fun0001 }
 93:
                var5 = _closure1_slot6;
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 8;
                var3 = var8[var3];
                var4 = var4.bind(var6)(var3);
                var3 = {};
                var3['source'] = var7;
                var2 = var5.bind(var6)(var4, var3);
 129:
                return var2;
 131:
                return var1;
            }
        };
        var1['renderIcon'] = var12;
        var1['selectionActionComponent'] = var11;
        var1['options'] = var10;
        var10 = var9.length;
        var1['selectedCount'] = var10;
        var1['selectedOptions'] = var9;
        var1['isSelected'] = var8;
        var8 = function submitSelection() {
            var2 = _closure2_slot3;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var1['submitSelection'] = var8;
        var1['onQueryChange'] = var7;
        var6 = function itemAccessibilityLabel(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot4;
                var3 = var4.getChannel;
                var2 = arg1;
                var2 = var2.value;
                var4 = var3.bind(var4)(var2);
                var2 = null;
                if(!(var2 == var4)) { _fun0002_ip = 35; continue _fun0002 }
 31:
                var2 = undefined;
                return var2;
 35:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['channel'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['itemAccessibilityLabel'] = var6;
        var1['channelId'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();