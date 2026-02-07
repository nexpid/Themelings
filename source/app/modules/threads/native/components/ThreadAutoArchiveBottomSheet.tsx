// app/modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.title;
            var8 = var1.description;
            var12 = var1.channel;
            var10 = var1.selected;
            var6 = var1.onSelectDuration;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getAutoArchiveOptions;
            var7 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var12;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var12.isForumPost;
            var2 = var3.bind(var12)();
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var12.hasFlag;
            var3 = _closure1_slot2;
            var3 = var3.PINNED;
            var2 = var11.bind(var12)(var3);
case 4:
            _closure2_slot0 = var2;
            var3 = _closure1_slot3;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 4;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.TableRadioGroup;
            var1 = {};
            var1['value'] = var10;
            var1['title'] = var9;
            var1['description'] = var8;
            var8 = 5;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.H4mGfI;
            var8 = var9.bind(var10)(var8);
            var1['accessibilityLabel'] = var8;
            var1['onChange'] = var6;
            var6 = false;
            var1['hasIcons'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRadioRow;
                var2 = {};
                var6 = var1.value;
                var2['value'] = var6;
                var6 = _closure2_slot0;
                var2['disabled'] = var6;
                var6 = var1.label;
                var2['label'] = var6;
                var1 = var1.value;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AutoArchiveDurationOptions'] = var2;
    return var1;
})();