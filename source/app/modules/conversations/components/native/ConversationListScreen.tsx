// app/modules/conversations/components/native/ConversationListScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.conversationId;
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var4 = {'waitForInteraction': false, 'itemVisiblePercentThreshold': 50, 'minimumViewTime': 1000};
    var _closure1_slot13 = var4;
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
    var _closure1_slot14 = var7;
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
    var _closure1_slot15 = var4;
    var7 = var8.memo;
    var4 = function() {
        var1 = _closure1_slot15;
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
    var _closure1_slot16 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/components/native/ConversationListScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationListScreen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot14;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var _closure2_slot0 = var11;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 12;
            var2 = var13[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useRoute;
            var2 = var2.bind(var3)();
            var2 = var2.params;
            var6 = var2.channelId;
            var _closure2_slot1 = var6;
            var17 = var2.guildId;
            var _closure2_slot2 = var17;
            var3 = _closure1_slot1;
            var2 = 13;
            var2 = var13[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.bottom;
            var2 = 14;
            var2 = var13[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useConversationBackoffRef;
            var15 = var2.bind(var3)();
            var _closure2_slot3 = var15;
            var16 = _closure1_slot5;
            var3 = var16.useState;
            var2 = false;
            var5 = var3.bind(var16)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var5 = var3.bind(var4)(var5, var2);
            var9 = 0;
            var2 = var5[var9];
            var _closure2_slot4 = var2;
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot5 = var3;
            var10 = 15;
            var3 = var13[var10];
            var20 = var12.bind(var4)(var3);
            var19 = var20.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var18 = new Array(1);
            var18[0] = var3;
            var14 = new Array(1);
            var14[0] = var6;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannelConversations;
                    var1 = _closure2_slot1;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var3 = new Array(0);
case 36:
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
            var5 = var19.bind(var20)(var18, var5, var14);
            var _closure2_slot6 = var5;
            var18 = var16.useMemo;
            var14 = new Array(2);
            var14[0] = var5;
            var14[1] = var6;
            var5 = function() {
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
            var14 = var18.bind(var16)(var5, var14);
            var _closure2_slot7 = var14;
            var5 = var13[var10];
            var21 = var12.bind(var4)(var5);
            var20 = var21.useStateFromStores;
            var19 = new Array(1);
            var19[0] = var3;
            var18 = new Array(1);
            var18[0] = var6;
            var5 = function() {
                var4 = _closure1_slot8;
                var3 = var4.getEdgeMarker;
                var2 = _closure2_slot1;
                var1 = 'before';
                var2 = var3.bind(var4)(var2, var1);
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var5 = var20.bind(var21)(var19, var5, var18);
            var10 = var13[var10];
            var18 = var12.bind(var4)(var10);
            var13 = var18.useStateFromStores;
            var12 = new Array(1);
            var12[0] = var3;
            var10 = new Array(1);
            var10[0] = var6;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isPendingFetch;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var13.bind(var18)(var12, var3, var10);
            var _closure2_slot8 = var3;
            var13 = var16.useCallback;
            var10 = function() {
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
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                            var4 = undefined;
                            var7 = undefined;
                            var6 = _closure1_slot8;
                            var5 = var6.getChannelConversations;
                            var3 = _closure2_slot1;
                            var9 = var5.bind(var6)(var3);
                            var3 = null;
                            if(!(var3 != var9)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                            var3 = var9.length;
                            var5 = 0;
                            if(!(var3 > var5)) { _fun0006_ip = 40; continue _fun0006 }
case 42:
                            var3 = _closure2_slot7;
                            var3 = var3.length;
                            if(!(var3 > var5)) { _fun0006_ip = 40; continue _fun0006 }
case 43:
                            var3 = _closure2_slot7;
                            var3 = var3[var5];
                            var5 = var3.conversationId;
                            var3 = var9.length;
                            var6 = 1;
                            var3 = var3 - var6;
                            var3 = var9[var3];
                            var3 = var3.id;
                            if(!(var5 === var3)) { _fun0006_ip = 40; continue _fun0006 }
case 44:
                            var5 = _closure2_slot7;
                            var3 = var5.length;
                            var3 = var3 - var6;
                            var7 = var5[var3];
case 45: // try_start_0
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
case 46:
                            return var3;
case 47:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0006_ip = 48; continue _fun0006 }
case 40: // try_end0
                            var5 = _closure2_slot3;
                            var6 = var5.current;
                            var5 = var6.succeed;
                            var5 = var5.bind(var6)();
                            var6 = _closure2_slot5;
                            var5 = false;
                            var5 = var6.bind(var4)(var5);
                            return var4;
case 48:
                            return var3;
case 49: // catch_target0
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
case 38:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var5.bind(var4)(var2);
                var _closure3_slot0 = var2;
                return var1;
            };
            var12 = var10.bind(var4)();
            var10 = new Array(4);
            var10[0] = var14;
            var10[1] = var6;
            var10[2] = var17;
            var10[3] = var15;
            var12 = var13.bind(var16)(var12, var10);
            var15 = var16.useMemo;
            var10 = var11.spinner;
            var13 = new Array(3);
            var13[0] = var10;
            var13[1] = var3;
            var13[2] = var2;
            var10 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0007_ip = 50; continue _fun0007 }
case 39:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 50:
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
case 51:
                    return var1;
                }
            };
            var10 = var15.bind(var16)(var10, var13);
            var13 = var5;
            if(!var13) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var5 = var14.length;
            var13 = var5 > var9;
case 52:
            if(!var13) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var9 = var14.length;
            var5 = _closure1_slot9;
            var13 = var9 < var5;
case 54:
            if(!var13) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var13 = !var3;
case 56:
            if(!var13) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var13 = !var2;
case 58:
            var5 = _closure1_slot5;
            var2 = var5.useRef;
            var2 = var2.bind(var5)(var4);
            var _closure2_slot9 = var2;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.viewableItems;
                    var1 = _closure2_slot9;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var2 = _closure2_slot9;
                    var1 = global;
                    var1 = var1.Set;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {constructor: {value: var1}});
                    var14 = var4;
                    var1 = new var14[var1](var13);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2['current'] = var1;
case 60:
                    var2 = _closure1_slot17;
                    var1 = undefined;
                    var6 = var2.bind(var1)(var3);
                    var3 = var6.bind(var1)();
                    var2 = var3.done;
                    var5 = 18;
                    var4 = false;
                    if(var2) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var2 = var3.value;
                    var2 = var2.item;
                    var10 = var2.conversationId;
                    var2 = _closure2_slot9;
                    var9 = var2.current;
                    var2 = var9.has;
                    var2 = var2.bind(var9)(var10);
                    if(var2) { _fun0008_ip = 64; continue _fun0008 }
case 45:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var9.bind(var1)(var2);
                    var11 = var2.ConversationsAnalytics;
                    var9 = var11.trackPreviewImpression;
                    var2 = {};
                    var12 = _closure2_slot1;
                    var2['channelId'] = var12;
                    var2['conversationId'] = var10;
                    var2['isFocusMode'] = var4;
                    var2 = var9.bind(var11)(var2);
                    var2 = _closure2_slot9;
                    var9 = var2.current;
                    var2 = var9.add;
                    var2 = var2.bind(var9)(var10);
case 64:
                    var9 = var6.bind(var1)();
                    var2 = var9.done;
                    var3 = var9;
                    if(!var2) { _fun0008_ip = 63; continue _fun0008 }
case 62:
                    return var1;
                }
            };
            var9 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var11.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var6['paddingBottom'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 19;
            var5 = var15[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.FlashList;
            var5 = {};
            var5['data'] = var14;
            var14 = _closure1_slot19;
            var5['renderItem'] = var14;
            var14 = _closure1_slot20;
            var5['keyExtractor'] = var14;
            var11 = var11.content;
            var5['contentContainerStyle'] = var11;
            var11 = undefined;
            if(!var13) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var11 = var12;
case 65:
            var5['onEndReached'] = var11;
            var11 = _closure1_slot16;
            var5['ListEmptyComponent'] = var11;
            var5['ListFooterComponent'] = var10;
            var5['onViewableItemsChanged'] = var9;
            var8 = _closure1_slot13;
            var5['viewabilityConfig'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();