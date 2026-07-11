// app/modules/conversations/components/native/ConversationListScreen.tsx
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
        var4 = _closure1_slot12;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
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
    var _closure1_slot16 = var1;
    var1 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.conversationId;
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var11 = 1;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_CONVERSATIONS_PER_CHANNEL;
    var _closure1_slot9 = var7;
    var7 = var4.MOBILE_FETCH_LIMIT;
    var _closure1_slot10 = var7;
    var4 = var4.MOBILE_PREVIEW_MESSAGE_COUNT;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 7;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var9 = var10.createStyles;
    var7 = {};
    var13 = {};
    var13['flex'] = var11;
    var11 = 8;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var13['backgroundColor'] = var14;
    var7['container'] = var13;
    var13 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var13['paddingHorizontal'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var13['paddingTop'] = var14;
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
    var _closure1_slot13 = var7;
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
    var _closure1_slot14 = var4;
    var7 = var8.memo;
    var4 = function() {
        var1 = _closure1_slot14;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var6.empty;
        var1['style'] = var6;
        var7 = _closure1_slot12;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 10;
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-md/normal', 'color': 'text-muted'};
        var8 = 11;
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
    var _closure1_slot15 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/components/native/ConversationListScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationListScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot13;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var _closure2_slot0 = var10;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useRoute;
            var1 = var1.bind(var2)();
            var1 = var1.params;
            var17 = var1.channelId;
            var _closure2_slot1 = var17;
            var16 = var1.guildId;
            var _closure2_slot2 = var16;
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.bottom;
            var1 = 14;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useConversationBackoffRef;
            var15 = var1.bind(var2)();
            var _closure2_slot3 = var15;
            var14 = _closure1_slot5;
            var2 = var14.useState;
            var1 = false;
            var3 = var2.bind(var14)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var5 = 0;
            var1 = var3[var5];
            var _closure2_slot4 = var1;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot5 = var2;
            var8 = 15;
            var2 = var12[var8];
            var20 = var11.bind(var4)(var2);
            var19 = var20.useStateFromStoresArray;
            var2 = _closure1_slot8;
            var18 = new Array(1);
            var18[0] = var2;
            var13 = new Array(1);
            var13[0] = var17;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannelConversations;
                    var1 = _closure2_slot1;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 2; continue _fun0002 }
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
            var3 = var19.bind(var20)(var18, var3, var13);
            var _closure2_slot6 = var3;
            var18 = var14.useMemo;
            var13 = new Array(2);
            var13[0] = var3;
            var13[1] = var17;
            var3 = function() {
                var3 = _closure2_slot6;
                var2 = var3.slice;
                var4 = var2.bind(var3)();
                var3 = var4.sort;
                var2 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
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
                    var2 = _closure2_slot1;
                    var1['channelId'] = var2;
                    var2 = arg1;
                    var1['conversationId'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var18.bind(var14)(var3, var13);
            var _closure2_slot7 = var13;
            var3 = var12[var8];
            var21 = var11.bind(var4)(var3);
            var20 = var21.useStateFromStores;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var17;
            var3 = function() {
                var4 = _closure1_slot8;
                var3 = var4.getEdgeMarker;
                var2 = _closure2_slot1;
                var1 = 'before';
                var2 = var3.bind(var4)(var2, var1);
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var3 = var20.bind(var21)(var19, var3, var18);
            var8 = var12[var8];
            var18 = var11.bind(var4)(var8);
            var12 = var18.useStateFromStores;
            var11 = new Array(1);
            var11[0] = var2;
            var8 = new Array(1);
            var8[0] = var17;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isPendingFetch;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var12.bind(var18)(var11, var2, var8);
            var _closure2_slot8 = var2;
            var12 = var14.useCallback;
            var8 = function() {
                var1 = function _handleEndReached() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot1 = var1;
                var5 = _closure1_slot3;
                var4 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var4 = undefined;
                            var7 = undefined;
                            var6 = _closure1_slot8;
                            var5 = var6.getChannelConversations;
                            var3 = _closure2_slot1;
                            var9 = var5.bind(var6)(var3);
                            var3 = null;
                            if(!(var3 != var9)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var3 = var9.length;
                            var5 = 0;
                            if(!(var3 > var5)) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                            var3 = _closure2_slot7;
                            var3 = var3.length;
                            if(!(var3 > var5)) { _fun0003_ip = 6; continue _fun0003 }
case 9:
                            var3 = _closure2_slot7;
                            var3 = var3[var5];
                            var5 = var3.conversationId;
                            var3 = var9.length;
                            var6 = 1;
                            var3 = var3 - var6;
                            var3 = var9[var3];
                            var3 = var3.id;
                            if(!(var5 === var3)) { _fun0003_ip = 6; continue _fun0003 }
case 10:
                            var5 = _closure2_slot7;
                            var3 = var5.length;
                            var3 = var3 - var6;
                            var7 = var5[var3];
case 11: // try_start_0
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 17;
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.fetchChannelConversations;
                            var3 = {};
                            var9 = _closure2_slot1;
                            var3['channelId'] = var9;
                            var9 = _closure2_slot2;
                            var3['guildId'] = var9;
                            var9 = 'before';
                            var3['direction'] = var9;
                            var7 = var7.conversationId;
                            var3['anchor'] = var7;
                            var7 = _closure1_slot10;
                            var3['limit'] = var7;
                            var7 = true;
                            var3['throwOnError'] = var7;
                            var7 = {};
                            var8 = _closure1_slot11;
                            var7['limit'] = var8;
                            var3['hydrateMessages'] = var7;
                            var3 = var5.bind(var6)(var3);
                            SaveGenerator(address=240);
case 12:
                            return var3;
case 13:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 6: // try_end0
                            var5 = _closure2_slot3;
                            var6 = var5.current;
                            var5 = var6.succeed;
                            var5 = var5.bind(var6)();
                            var6 = _closure2_slot5;
                            var5 = false;
                            var5 = var6.bind(var4)(var5);
                            return var4;
case 14:
                            return var3;
case 15: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var3 = _closure2_slot3;
                            var6 = var3.current;
                            var5 = var6.fail;
                            var3 = _closure3_slot1;
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure2_slot5;
                            var2 = true;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 4:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var5.bind(var4)(var2);
                var _closure3_slot0 = var2;
                return var1;
            };
            var11 = var8.bind(var4)();
            var8 = new Array(4);
            var8[0] = var13;
            var8[1] = var17;
            var8[2] = var16;
            var8[3] = var15;
            var11 = var12.bind(var14)(var11, var8);
            var12 = var14.useMemo;
            var15 = var10.spinner;
            var8 = new Array(3);
            var8[0] = var15;
            var8[1] = var2;
            var8[2] = var1;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0004_ip = 16; continue _fun0004 }
case 5:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 16:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.spinner;
                    var3['style'] = var6;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot6;
                    var2 = undefined;
                    var6 = {};
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 17:
                    return var1;
                }
            };
            var8 = var12.bind(var14)(var6, var8);
            var12 = var3;
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var13.length;
            var12 = var3 > var5;
case 18:
            if(!var12) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var13.length;
            var3 = _closure1_slot9;
            var12 = var5 < var3;
case 20:
            if(!var12) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = !var2;
case 22:
            if(!var12) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = !var1;
case 24:
            var3 = _closure1_slot12;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var10.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var6['paddingBottom'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 18;
            var5 = var14[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.FlashList;
            var5 = {};
            var5['data'] = var13;
            var13 = _closure1_slot16;
            var5['renderItem'] = var13;
            var13 = _closure1_slot17;
            var5['keyExtractor'] = var13;
            var10 = var10.content;
            var5['contentContainerStyle'] = var10;
            var10 = undefined;
            if(!var12) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = var11;
case 26:
            var5['onEndReached'] = var10;
            var9 = _closure1_slot15;
            var5['ListEmptyComponent'] = var9;
            var5['ListFooterComponent'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();