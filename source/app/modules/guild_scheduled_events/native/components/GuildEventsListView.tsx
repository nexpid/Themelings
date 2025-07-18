// app/modules/guild_scheduled_events/native/components/GuildEventsListView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function FormSeparator() {
        var4 = _closure1_slot7;
        var3 = _closure1_slot3;
        var2 = {};
        var1 = _closure1_slot8;
        var1 = var1.spacer;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot3 = var5;
    var2 = var2.FlatList;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.GuildFeatures;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ContentDismissActionType;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot7 = var2;
    var2 = {};
    var5 = {};
    var8 = 5;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var5['height'] = var10;
    var10 = '100%';
    var5['width'] = var10;
    var2['spacer'] = var5;
    var5 = {};
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var5['paddingHorizontal'] = var8;
    var2['container'] = var5;
    var _closure1_slot8 = var2;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/native/components/GuildEventsListView.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildEventsListView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.events;
            var8 = var1.guild;
            var _closure2_slot0 = var8;
            var2 = var1.onPressEvent;
            var _closure2_slot1 = var2;
            var9 = var1.onCloseAction;
            var _closure2_slot2 = var9;
            var2 = var1.isHubContext;
            var _closure2_slot3 = var2;
            var2 = var1.lastAckedId;
            var _closure2_slot4 = var2;
            var1 = var1.inActionSheet;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var10 = var2.bottom;
            var2 = var11.length;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0001_ip = 418; continue _fun0001 }
 114:
            var13 = new Array(0);
            var12 = var8.features;
            var7 = var12.has;
            var2 = _closure1_slot5;
            var2 = var2.HUB;
            var2 = var7.bind(var12)(var2);
            if(!var2) { _fun0001_ip = 189; continue _fun0001 }
 147:
            var7 = var13.push;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 9;
            var2 = var14[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.HUB_EVENT_HEADER_UPSELL;
            var2 = var7.bind(var13)(var2);
 189:
            var2 = var13.length;
            var2 = var2 > var3;
            var7 = undefined;
            if(!var2) { _fun0001_ip = 251; continue _fun0001 }
 203:
            var12 = _closure1_slot7;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 10;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['contentTypes'] = var13;
            var13 = function children(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var3 = var1.HUB_EVENT_HEADER_UPSELL;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0002_ip = 108; continue _fun0002 }
 64:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 11;
                    var2 = var7[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var6 = function handleHubEventsHeaderClose() {
                        var3 = _closure3_slot0;
                        var1 = _closure1_slot6;
                        var2 = var1.UNKNOWN;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['handleHubEventsHeaderClose'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 108:
                    return var1;
                }
            };
            var2['children'] = var13;
            var7 = var12.bind(var4)(var3, var2);
 251:
            if(var1) { _fun0001_ip = 260; continue _fun0001 }
 254:
            var3 = _closure1_slot4;
            _fun0001_ip = 286; continue _fun0001;
 260:
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.BottomSheetFlatList;
 286:
            var2 = _closure1_slot7;
            var1 = {};
            var1['data'] = var11;
            var11 = _closure1_slot8;
            var11 = var11.container;
            var1['style'] = var11;
            var11 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var1['keyExtractor'] = var11;
            var11 = function renderItem(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.item;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['event'] = var7;
                    var5 = _closure2_slot2;
                    var1['onCloseAction'] = var5;
                    var5 = _closure2_slot1;
                    var1['onPress'] = var5;
                    var5 = _closure2_slot3;
                    var1['isHubContext'] = var5;
                    var9 = _closure2_slot4;
                    var5 = null;
                    var5 = var5 != var9;
                    if(!var5) { _fun0003_ip = 133; continue _fun0003 }
 86:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 13;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.compare;
                    var7 = var7.id;
                    var6 = _closure2_slot4;
                    var7 = var8.bind(var9)(var7, var6);
                    var6 = 0;
                    var5 = var7 > var6;
 133:
                    var1['isNew'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1['renderItem'] = var11;
            var1['ListHeaderComponent'] = var7;
            var7 = _closure1_slot9;
            var1['ItemSeparatorComponent'] = var7;
            var12 = 5;
            var1['initialNumToRender'] = var12;
            var6 = function ListEmptyComponent() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot2;
                var1['onClose'] = var6;
                var5 = _closure2_slot0;
                var1['guild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['ListEmptyComponent'] = var6;
            var6 = {};
            var11 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var11.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var7 = var7 + var10;
            var6['paddingBottom'] = var7;
            var1['contentContainerStyle'] = var6;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
 418:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 7;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheetView;
            var1 = {};
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var5 = 8;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['onClose'] = var9;
            var5['guild'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['styles'] = var2;
    return var1;
})();