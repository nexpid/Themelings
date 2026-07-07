// app/modules/conversations/components/native/ConversationListView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function renderItem(arg1) {
        var1 = arg1;
        var5 = var1.item;
        var4 = _closure1_slot10;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var6 = var5.channelId;
        var1['channelId'] = var6;
        var5 = var5.conversationId;
        var1['conversationId'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.conversationId;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_CONVERSATIONS_PER_CHANNEL;
    var _closure1_slot8 = var7;
    var4 = var4.MOBILE_FETCH_LIMIT;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 6;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var9 = var10.createStyles;
    var7 = {};
    var13 = {};
    var11 = 7;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var13['paddingHorizontal'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_32;
    var13['paddingBottom'] = var14;
    var7['content'] = var13;
    var13 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var13['paddingVertical'] = var14;
    var14 = 'center';
    var13['alignItems'] = var14;
    var7['spinner'] = var13;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_24;
    var10['paddingVertical'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_16;
    var10['paddingHorizontal'] = var11;
    var4['empty'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var7 = var8.memo;
    var4 = function() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = var6.empty;
        var1['style'] = var6;
        var7 = _closure1_slot10;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 9;
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-md/normal', 'color': 'text-muted'};
        var8 = 10;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.LJuFRG;
        var8 = var9.bind(var10)(var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/components/native/ConversationListView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationListView(arg1) {
        var2 = arg1;
        var14 = var2.channelId;
        var _closure2_slot0 = var14;
        var13 = var2.guildId;
        var _closure2_slot1 = var13;
        var11 = _closure1_slot4;
        var3 = var11.useRef;
        var2 = false;
        var2 = var3.bind(var11)(var2);
        var _closure2_slot2 = var2;
        var2 = _closure1_slot11;
        var4 = undefined;
        var8 = var2.bind(var4)();
        var _closure2_slot3 = var8;
        var2 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 11;
        var3 = var10[var5];
        var16 = var2.bind(var4)(var3);
        var15 = var16.useStateFromStoresArray;
        var3 = _closure1_slot7;
        var12 = new Array(1);
        var12[0] = var3;
        var9 = new Array(1);
        var9[0] = var14;
        var7 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot7;
                var2 = var3.getChannelConversations;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = new Array(0);
case 2:
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var7 = var15.bind(var16)(var12, var7, var9);
        var _closure2_slot4 = var7;
        var12 = var11.useMemo;
        var9 = new Array(2);
        var9[0] = var7;
        var9[1] = var14;
        var7 = function() {
            var3 = _closure2_slot4;
            var2 = var3.slice;
            var4 = var2.bind(var3)();
            var3 = var4.sort;
            var2 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var2 = arg2;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = {};
                var2 = _closure2_slot0;
                var1['channelId'] = var2;
                var2 = arg1;
                var1['conversationId'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var12.bind(var11)(var7, var9);
        var _closure2_slot5 = var9;
        var7 = var10[var5];
        var17 = var2.bind(var4)(var7);
        var16 = var17.useStateFromStores;
        var15 = new Array(1);
        var15[0] = var3;
        var12 = new Array(1);
        var12[0] = var14;
        var7 = function() {
            var4 = _closure1_slot7;
            var3 = var4.getEdgeMarker;
            var2 = _closure2_slot0;
            var1 = 'before';
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var1 = var1 == var2;
            return var1;
        };
        var15 = var16.bind(var17)(var15, var7, var12);
        var _closure2_slot6 = var15;
        var5 = var10[var5];
        var16 = var2.bind(var4)(var5);
        var12 = var16.useStateFromStores;
        var7 = new Array(1);
        var7[0] = var3;
        var5 = new Array(1);
        var5[0] = var14;
        var3 = function() {
            var3 = _closure1_slot7;
            var2 = var3.isPendingFetch;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var12 = var12.bind(var16)(var7, var3, var5);
        var _closure2_slot7 = var12;
        var7 = var11.useCallback;
        var5 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = undefined;
                    var11 = undefined;
                    var8 = undefined;
                    var4 = _closure2_slot7;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot2;
                    var4 = var4.current;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var4 = _closure2_slot6;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                    var4 = _closure2_slot5;
                    var6 = var4.length;
                    var4 = _closure1_slot8;
                    if(!(var6 < var4)) { _fun0002_ip = 6; continue _fun0002 }
case 10:
                    var4 = _closure2_slot5;
                    var4 = var4.length;
                    var9 = 0;
                    if(!(var4 > var9)) { _fun0002_ip = 6; continue _fun0002 }
case 11:
                    var6 = _closure2_slot5;
                    var7 = var6.length;
                    var4 = 1;
                    var4 = var7 - var4;
                    var11 = var6[var4];
case 12: // try_start_0
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 13;
                    var4 = var4[var7];
                    var10 = var6.bind(var2)(var4);
                    var6 = var10.fetchChannelConversations;
                    var4 = {};
                    var12 = _closure2_slot0;
                    var4['channelId'] = var12;
                    var12 = _closure2_slot1;
                    var4['guildId'] = var12;
                    var12 = 'before';
                    var4['direction'] = var12;
                    var11 = var11.conversationId;
                    var4['anchor'] = var11;
                    var11 = _closure1_slot9;
                    var4['limit'] = var11;
                    var11 = true;
                    var4['throwOnError'] = var11;
                    var4 = var6.bind(var10)(var4);
                    SaveGenerator(address=203);
case 13:
                    return var4;
case 14:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var8 = var4;
                    var10 = null;
                    var10 = var10 != var4;
                    var6 = var10;
                    if(!var10) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var8 = var8.length;
                    var6 = var8 > var9;
case 17:
                    if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.fetchConversationPreviews;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var5 = var7.bind(var8)(var6, var5);
case 19: // try_end0
                    _fun0002_ip = 6; continue _fun0002;
case 15:
                    return var4;
case 21: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure2_slot2;
                    var3 = true;
                    var4['current'] = var3;
case 6:
                    return var2;
case 4:
                    return var1;
                }
            };
            return var1;
        };
        var5 = var5.bind(var4)(var3);
        var3 = new Array(5);
        var3[0] = var15;
        var3[1] = var9;
        var3[2] = var14;
        var3[3] = var13;
        var3[4] = var12;
        var7 = var7.bind(var11)(var5, var3);
        var5 = var11.useMemo;
        var13 = var8.spinner;
        var3 = new Array(2);
        var3[0] = var13;
        var3[1] = var12;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot7;
                var1 = null;
                if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var5 = _closure1_slot10;
                var4 = _closure1_slot6;
                var3 = {};
                var6 = _closure2_slot3;
                var6 = var6.spinner;
                var3['style'] = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot5;
                var2 = undefined;
                var6 = {};
                var6 = var8.bind(var2)(var7, var6);
                var3['children'] = var6;
                var1 = var5.bind(var2)(var4, var3);
case 22:
                return var1;
            }
        };
        var5 = var5.bind(var11)(var1, var3);
        var3 = _closure1_slot10;
        var1 = 14;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.BottomSheetFlashList;
        var1 = {};
        var1['data'] = var9;
        var9 = _closure1_slot14;
        var1['renderItem'] = var9;
        var9 = _closure1_slot15;
        var1['keyExtractor'] = var9;
        var8 = var8.content;
        var1['contentContainerStyle'] = var8;
        var1['onEndReached'] = var7;
        var6 = _closure1_slot13;
        var1['ListEmptyComponent'] = var6;
        var1['ListFooterComponent'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();