// app/modules/channel_list_v2/native/hooks/useChannelListData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot21;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot21;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = var4;
    var7 = 3;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CATEGORY_MARGIN_TOP;
    var _closure1_slot11 = var8;
    var8 = var4.getScaledCategoryRowHeight;
    var _closure1_slot12 = var8;
    var4 = var4.getScaledChannelRowHeight;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelListGuildActionRow;
    var _closure1_slot16 = var8;
    var4 = var4.ChannelListChannelNoticeRow;
    var _closure1_slot17 = var4;
    var4 = {};
    var4['mass'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function useChannelListDataTsx1(finished){const{runOnJS,clearNavigationParams}=this.__closure;if(finished){runOnJS(clearNavigationParams)();}}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/hooks/useChannelListData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelListData(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var19 = var2.guildChannels;
            var _closure2_slot0 = var19;
            var14 = var2.guildChannelsVersion;
            var12 = var2.layout;
            var7 = undefined;
            if(!(var12 === var7)) { _fun0004_ip = 68; continue _fun0004 }
 33:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 12;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.ChannelListLayoutTypes;
            var12 = var3.COMPACT;
 68:
            var6 = var2.listRef;
            var13 = var2.selectedChannelId;
            var _closure2_slot1 = var13;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var7;
            var _closure2_slot9 = var7;
            var _closure2_slot10 = var7;
            var _closure2_slot11 = var7;
            var _closure2_slot12 = var7;
            var _closure2_slot13 = var7;
            var _closure2_slot14 = var7;
            var21 = var19.id;
            _closure2_slot2 = var21;
            var8 = _closure1_slot4;
            var4 = var8.useState;
            var3 = function() {
                var1 = global;
                var1 = var1.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var4 = var3;
                var1 = new var4[var1](var3);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure3_slot0 = var1;
                var1 = {};
                var3 = function get(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = arg1;
                        var5 = _closure3_slot0;
                        var4 = var5.get;
                        var1 = var2.itemKey;
                        var1 = var4.bind(var5)(var1);
                        var4 = null;
                        var4 = var4 != var1;
                        if(!var4) { _fun0005_ip = 66; continue _fun0005 }
 35:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var5 = 13;
                        var5 = var6[var5];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var5);
                        var4 = var5.bind(var6)(var2, var1);
 66:
                        if(var4) { _fun0005_ip = 93; continue _fun0005 }
 69:
                        var5 = _closure3_slot0;
                        var4 = var5.set;
                        var3 = var2.itemKey;
                        var3 = var4.bind(var5)(var3, var2);
                        var1 = var2;
 93:
                        return var1;
                    }
                };
                var1['get'] = var3;
                var2 = function clear() {
                    var2 = _closure3_slot0;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['clear'] = var2;
                return var1;
            };
            var5 = var4.bind(var8)(var3);
            var4 = _closure1_slot3;
            var3 = 1;
            var4 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var18 = var4[var3];
            _closure2_slot3 = var18;
            var5 = var8.useEffect;
            var4 = new Array(2);
            var4[0] = var18;
            var4[1] = var21;
            var3 = function() {
                var1 = function() {
                    var3 = _closure2_slot3;
                    var2 = var3.clear;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var3 = var5.bind(var8)(var3, var4);
            var4 = var19.getSections;
            var3 = false;
            var17 = var4.bind(var19)(var3);
            _closure2_slot4 = var17;
            var3 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 14;
            var4 = var20[var4];
            var5 = var3.bind(var7)(var4);
            var4 = var5.useFontScale;
            var10 = var4.bind(var5)();
            _closure2_slot5 = var10;
            var4 = 15;
            var4 = var20[var4];
            var5 = var3.bind(var7)(var4);
            var4 = var5.useOptInEnabledForGuild;
            var11 = var4.bind(var5)(var21);
            var4 = 16;
            var4 = var20[var4];
            var9 = var3.bind(var7)(var4);
            var5 = var9.useSectionsWithVoiceSummary;
            var4 = {};
            var4['guildId'] = var21;
            var4['sections'] = var17;
            var4['guildChannels'] = var19;
            var4['guildChannelsVersion'] = var14;
            var4['optInEnabled'] = var11;
            var16 = var5.bind(var9)(var4);
            _closure2_slot6 = var16;
            var4 = 17;
            var4 = var20[var4];
            var5 = var3.bind(var7)(var4);
            var4 = var5.useJumpToChannelId;
            var5 = var4.bind(var5)();
            _closure2_slot7 = var5;
            var4 = _closure1_slot12;
            var15 = var4.bind(var7)(var10);
            _closure2_slot8 = var15;
            var4 = _closure1_slot13;
            var9 = var4.bind(var7)(var10);
            _closure2_slot9 = var9;
            _closure2_slot10 = var9;
            var4 = 18;
            var4 = var20[var4];
            var11 = var3.bind(var7)(var4);
            var4 = var11.getLayoutStyles;
            var14 = var4.bind(var11)(var12);
            _closure2_slot11 = var14;
            var4 = 19;
            var11 = var20[var4];
            var23 = var3.bind(var7)(var11);
            var22 = var23.useStateFromStores;
            var11 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getDirectoryChannelIds;
                var1 = _closure2_slot2;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var1 = var2[var1];
                return var1;
            };
            var12 = var22.bind(var23)(var12, var11);
            _closure2_slot12 = var12;
            var4 = var20[var4];
            var23 = var3.bind(var7)(var4);
            var22 = var23.useStateFromStores;
            var4 = _closure1_slot9;
            var11 = new Array(2);
            var11[0] = var4;
            var2 = _closure1_slot7;
            var11[1] = var2;
            var4 = new Array(1);
            var4[0] = var21;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getUserVoiceChannelId;
                    var2 = _closure2_slot2;
                    var5 = _closure1_slot7;
                    var1 = var5.getId;
                    var1 = var1.bind(var5)();
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = undefined;
                    if(!var3) { _fun0006_ip = 54; continue _fun0006 }
 51:
                    var1 = var2;
 54:
                    return var1;
                }
            };
            var11 = var22.bind(var23)(var11, var2, var4);
            _closure2_slot13 = var11;
            var2 = 20;
            var2 = var20[var2];
            var4 = var3.bind(var7)(var2);
            var2 = var4.useGuildLiveChannelNoticeInfo;
            var4 = var2.bind(var4)(var21);
            var2 = 21;
            var2 = var20[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.getScaledLiveChannelNoticeHeight;
            var2 = var2.bind(var3)(var10, var4);
            _closure2_slot14 = var2;
            var4 = var8.useMemo;
            var3 = new Array(15);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var17;
            var3[3] = var16;
            var3[4] = var15;
            var15 = var14.category;
            var15 = var15.margin;
            var15 = var15.marginTop;
            var3[5] = var15;
            var14 = var14.voiceUsers;
            var14 = var14.height;
            var3[6] = var14;
            var3[7] = var9;
            var3[8] = var13;
            var3[9] = var12;
            var3[10] = var11;
            var3[11] = var5;
            var3[12] = var10;
            var3[13] = var9;
            var3[14] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var33 = function mutateAndPushItem(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var4 = arg1;
                            var1 = _closure3_slot4;
                            var9 = var1.length;
                            var4['index'] = var9;
                            var3 = var4.kind;
                            var6 = 'channel';
                            if(!(var6 !== var3)) { _fun0008_ip = 221; continue _fun0008 }
 37:
                            var1 = 'thread';
                            if(!(var1 !== var3)) { _fun0008_ip = 172; continue _fun0008 }
 48:
                            var1 = 'sectionHeaderCategory';
                            if(!(var1 !== var3)) { _fun0008_ip = 126; continue _fun0008 }
 58:
                            var1 = 'sectionFooterVoice';
                            if(!(var1 !== var3)) { _fun0008_ip = 126; continue _fun0008 }
 68:
                            var1 = 'sectionFooterSeparator';
                            if(!(var1 !== var3)) { _fun0008_ip = 88; continue _fun0008 }
 78:
                            var1 = var4.kind;
                            _fun0008_ip = 272; continue _fun0008;
 88:
                            var8 = var4.kind;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var5 = '';
                            var3 = '-';
                            var1 = var7.bind(var5)(var8, var3, var9);
                            _fun0008_ip = 272; continue _fun0008;
 126:
                            var9 = var4.kind;
                            var3 = var4.category;
                            var8 = var3.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var5 = '';
                            var3 = '-';
                            var1 = var7.bind(var5)(var9, var3, var8);
                            _fun0008_ip = 272; continue _fun0008;
 172:
                            var15 = var4.kind;
                            var13 = var4.section;
                            var11 = var4.threadId;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var16 = '';
                            var3 = '-';
                            var14 = var3;
                            var12 = var3;
                            var1 = var16[var7](var15, var14, var13, var12, var11, var10);
                            _fun0008_ip = 272; continue _fun0008;
 221:
                            var15 = var4.kind;
                            var13 = var4.section;
                            var3 = var4.channel;
                            var11 = var3.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var16 = '';
                            var3 = '-';
                            var14 = var3;
                            var12 = var3;
                            var1 = var16[var7](var15, var14, var13, var12, var11, var10);
 272:
                            var4['itemKey'] = var1;
                            var1 = var4.kind;
                            var3 = 'sectionHeaderCategory';
                            var1 = var3 === var1;
                            if(var1) { _fun0008_ip = 311; continue _fun0008 }
 296:
                            var7 = var4.kind;
                            var5 = 'sectionHeaderFavorites';
                            var1 = var5 === var7;
 311:
                            if(var1) { _fun0008_ip = 329; continue _fun0008 }
 314:
                            var7 = var4.kind;
                            var5 = 'sectionHeaderRecents';
                            var1 = var5 === var7;
 329:
                            if(var1) { _fun0008_ip = 347; continue _fun0008 }
 332:
                            var7 = var4.kind;
                            var5 = 'sectionHeaderRecentlyVisited';
                            var1 = var5 === var7;
 347:
                            if(var1) { _fun0008_ip = 417; continue _fun0008 }
 350:
                            var5 = var4.kind;
                            var5 = var6 === var5;
                            if(!var5) { _fun0008_ip = 389; continue _fun0008 }
 362:
                            var6 = var4.channel;
                            var7 = var6.type;
                            var6 = _closure1_slot14;
                            var6 = var6.GUILD_CATEGORY;
                            var5 = var7 === var6;
 389:
                            if(!var5) { _fun0008_ip = 414; continue _fun0008 }
 392:
                            var7 = var4.section;
                            var6 = _closure2_slot0;
                            var6 = var6.voiceChannelsSectionNumber;
                            var5 = var7 === var6;
 414:
                            var1 = var5;
 417:
                            if(!var1) { _fun0008_ip = 529; continue _fun0008 }
 420:
                            var5 = _closure3_slot0;
                            var7 = null;
                            var9 = var7 == var5;
                            var6 = undefined;
                            if(var9) { _fun0008_ip = 440; continue _fun0008 }
 435:
                            var6 = var5.kind;
 440:
                            var5 = 'happeningNow';
                            var5 = var5 === var6;
                            if(var5) { _fun0008_ip = 479; continue _fun0008 }
 451:
                            var6 = _closure3_slot0;
                            var9 = var7 == var6;
                            var8 = undefined;
                            if(var9) { _fun0008_ip = 469; continue _fun0008 }
 464:
                            var8 = var6.kind;
 469:
                            var6 = 'sectionFooterSeparator';
                            var5 = var6 === var8;
 479:
                            if(var5) { _fun0008_ip = 490; continue _fun0008 }
 482:
                            var6 = _closure3_slot0;
                            var5 = var7 == var6;
 490:
                            if(var5) { _fun0008_ip = 526; continue _fun0008 }
 493:
                            var6 = _closure3_slot0;
                            var6 = var7 != var6;
                            if(!var6) { _fun0008_ip = 523; continue _fun0008 }
 504:
                            var7 = _closure3_slot0;
                            var8 = var7.kind;
                            var7 = 'newPanelsListHeader';
                            var6 = var7 === var8;
 523:
                            var5 = var6;
 526:
                            var1 = var5;
 529:
                            if(!var1) { _fun0008_ip = 540; continue _fun0008 }
 532:
                            var1 = true;
                            var4['isFirstCategory'] = var1;
 540:
                            var1 = var4.kind;
                            if(!(var3 === var1)) { _fun0008_ip = 590; continue _fun0008 }
 549:
                            var3 = var4.isFirstCategory;
                            var1 = _closure2_slot8;
                            if(var3) { _fun0008_ip = 584; continue _fun0008 }
 565:
                            var3 = _closure1_slot11;
                            var3 = var1 + var3;
                            var4['height'] = var3;
                            _fun0008_ip = 590; continue _fun0008;
 584:
                            var4['height'] = var1;
 590:
                            var3 = _closure3_slot2;
                            var1 = var4.height;
                            var1 = var3 + var1;
                            _closure3_slot2 = var1;
                            var3 = _closure2_slot3;
                            var1 = var3.get;
                            var1 = var1.bind(var3)(var4);
                            var _closure3_slot0 = var1;
                            var4 = _closure3_slot4;
                            var3 = var4.push;
                            var1 = _closure3_slot0;
                            var1 = var3.bind(var4)(var1);
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.isReadableItem;
                            var3 = _closure3_slot0;
                            var3 = var4.bind(var5)(var3);
                            if(!var3) { _fun0008_ip = 707; continue _fun0008 }
 689:
                            var4 = _closure3_slot5;
                            var3 = var4.push;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var2);
 707:
                            return var1;
                        }
                    };
                    var _closure3_slot7 = var33;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 22;
                    var3 = var5[var1];
                    var31 = undefined;
                    var3 = var4.bind(var31)(var3);
                    var3 = var3.DIVIDER_MARGIN_TOP;
                    var1 = var5[var1];
                    var1 = var4.bind(var31)(var1);
                    var1 = var1.DIVIDER_MARGIN_BOTTOM;
                    var1 = var3 + var1;
                    var30 = 1;
                    var29 = var30 + var1;
                    var _closure3_slot1 = var29;
                    var28 = 0;
                    var _closure3_slot2 = var28;
                    var27 = -1;
                    var _closure3_slot3 = var27;
                    var4 = new Array(0);
                    var _closure3_slot4 = var4;
                    var3 = new Array(0);
                    var _closure3_slot5 = var3;
                    var5 = _closure1_slot20;
                    var1 = _closure2_slot4;
                    var25 = var5.bind(var31)(var1);
                    var5 = var25.bind(var31)();
                    var1 = var5.done;
                    var24 = 'showAllVoiceChannelsButton';
                    var23 = null;
                    var22 = 23;
                    var21 = 2;
                    var20 = 'sectionFooterVoice';
                    var19 = 52;
                    var18 = 'sectionFooterSeparator';
                    var17 = false;
                    var16 = 'sectionHeaderRecents';
                    var15 = 'sectionHeaderVoiceChannels';
                    var14 = 'sectionHeaderCategory';
                    var13 = 24;
                    var12 = var5;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0007_ip = 1350; continue _fun0007 }
 206:
                    var46 = var12.value;
                    var40 = var27 + 1;
                    _closure3_slot3 = var40;
                    if(!(var28 === var46)) { _fun0007_ip = 276; continue _fun0007 }
 222:
                    var34 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var22];
                    var35 = var34.bind(var31)(var1);
                    var34 = var35.isVoiceChannelsSection;
                    var1 = _closure2_slot0;
                    var1 = var34.bind(var35)(var40, var1);
                    var38 = var11;
                    var37 = var10;
                    var36 = var9;
                    var35 = var8;
                    var34 = var5;
                    if(!var1) { _fun0007_ip = 1314; continue _fun0007 }
 276:
                    var39 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var22];
                    var41 = var39.bind(var31)(var1);
                    var39 = var41.isFavoritesSection;
                    var1 = _closure2_slot0;
                    var1 = var39.bind(var41)(var40, var1);
                    if(var1) { _fun0007_ip = 792; continue _fun0007 }
 315:
                    var39 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var22];
                    var41 = var39.bind(var31)(var1);
                    var39 = var41.isRecentsSection;
                    var1 = _closure2_slot0;
                    var1 = var39.bind(var41)(var40, var1);
                    if(var1) { _fun0007_ip = 704; continue _fun0007 }
 354:
                    var39 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var22];
                    var41 = var39.bind(var31)(var1);
                    var39 = var41.isVoiceChannelsSection;
                    var1 = _closure2_slot0;
                    var1 = var39.bind(var41)(var40, var1);
                    if(var1) { _fun0007_ip = 573; continue _fun0007 }
 393:
                    var39 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var13];
                    var1 = var39.bind(var31)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var45 = var11;
                    var44 = var10;
                    var43 = var9;
                    var42 = var8;
                    if(!(var40 >= var1)) { _fun0007_ip = 833; continue _fun0007 }
 435:
                    var39 = _closure2_slot0;
                    var1 = var39.getNamedCategoryFromSection;
                    var1 = var1.bind(var39)(var40);
                    var45 = var11;
                    var44 = var10;
                    var43 = var9;
                    var42 = var1;
                    if(!(var23 != var1)) { _fun0007_ip = 833; continue _fun0007 }
 469:
                    var39 = {};
                    var39['kind'] = var14;
                    var39['section'] = var40;
                    var39['category'] = var1;
                    var47 = _closure2_slot8;
                    var48 = _closure1_slot0;
                    var41 = _closure1_slot2;
                    var41 = var41[var13];
                    var41 = var48.bind(var31)(var41);
                    var48 = var41.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var41 = 0;
                    if(!(var40 !== var48)) { _fun0007_ip = 538; continue _fun0007 }
 517:
                    var48 = _closure2_slot11;
                    var48 = var48.category;
                    var48 = var48.margin;
                    var41 = var48.marginTop;
 538:
                    var41 = var47 + var41;
                    var39['height'] = var41;
                    var39['isFirstCategory'] = var17;
                    var39 = var33.bind(var31)(var39);
                    var45 = var11;
                    var44 = var10;
                    var43 = var9;
                    var42 = var1;
                    _fun0007_ip = 833; continue _fun0007;
 573:
                    var41 = _closure2_slot0;
                    var39 = var41.getCategoryFromSection;
                    var1 = var41.voiceChannelsSectionNumber;
                    var1 = var39.bind(var41)(var1);
                    var39 = var23 == var1;
                    if(var39) { _fun0007_ip = 611; continue _fun0007 }
 601:
                    var41 = var1.isEmpty;
                    var39 = var41.bind(var1)();
 611:
                    var45 = var11;
                    var44 = var10;
                    var43 = var1;
                    var42 = var8;
                    if(var39) { _fun0007_ip = 833; continue _fun0007 }
 629:
                    var39 = {};
                    var39['kind'] = var18;
                    var39['height'] = var29;
                    var39 = var33.bind(var31)(var39);
                    var39 = var1.isCollapsed;
                    var45 = var11;
                    var44 = var10;
                    var43 = var1;
                    var42 = var8;
                    if(!var39) { _fun0007_ip = 833; continue _fun0007 }
 668:
                    var39 = {};
                    var39['kind'] = var15;
                    var41 = _closure2_slot8;
                    var39['height'] = var41;
                    var39 = var33.bind(var31)(var39);
                    var45 = var11;
                    var44 = var10;
                    var43 = var1;
                    var42 = var8;
                    _fun0007_ip = 833; continue _fun0007;
 704:
                    var41 = {};
                    var41['kind'] = var16;
                    var1 = _closure2_slot8;
                    var41['height'] = var1;
                    var39 = _closure2_slot0;
                    var1 = var39.getCategoryFromSection;
                    var1 = var1.bind(var39)(var40);
                    var47 = var23 == var1;
                    var39 = undefined;
                    if(var47) { _fun0007_ip = 752; continue _fun0007 }
 742:
                    var47 = var1.getShownChannelAndThreadIds;
                    var39 = var47.bind(var1)();
 752:
                    var47 = var39;
                    if(!(var23 == var39)) { _fun0007_ip = 763; continue _fun0007 }
 759:
                    var47 = new Array(0);
 763:
                    var41['channelIds'] = var47;
                    var41['isFirstCategory'] = var17;
                    var41 = var33.bind(var31)(var41);
                    var45 = var39;
                    var44 = var1;
                    var43 = var9;
                    var42 = var8;
                    _fun0007_ip = 833; continue _fun0007;
 792:
                    var1 = {'kind': 'sectionHeaderFavorites', 'height': null, 'isFirstCategory': false};
                    var39 = _closure2_slot8;
                    var1['height'] = var39;
                    var1 = var33.bind(var31)(var1);
                    var45 = var11;
                    var44 = var10;
                    var43 = var9;
                    var42 = var8;
 833:
                    var41 = function _loop() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var6 = _closure3_slot3;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 24;
                            var5 = var1[var8];
                            var1 = undefined;
                            var5 = var7.bind(var1)(var5);
                            var5 = var5.SECTION_INDEX_CHANNEL_NOTICES;
                            if(!(var6 !== var5)) { _fun0009_ip = 983; continue _fun0009 }
 47:
                            var6 = _closure3_slot3;
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var5 = var7.bind(var1)(var5);
                            var5 = var5.SECTION_INDEX_GUILD_ACTIONS;
                            if(!(var6 !== var5)) { _fun0009_ip = 431; continue _fun0009 }
 81:
                            var9 = _closure2_slot0;
                            var7 = var9.getChannelFromSectionRow;
                            var6 = _closure3_slot3;
                            var5 = _closure3_slot6;
                            var5 = var7.bind(var9)(var6, var5);
                            var10 = null;
                            if(!(var10 != var5)) { _fun0009_ip = 1140; continue _fun0009 }
 117:
                            var5 = var5.channel;
                            var _closure4_slot0 = var5;
                            var7 = _closure2_slot9;
                            var9 = var5.record;
                            var6 = var9.isGuildVocal;
                            var6 = var6.bind(var9)();
                            var9 = var7;
                            if(!var6) { _fun0009_ip = 265; continue _fun0009 }
 152:
                            var12 = _closure1_slot10;
                            var11 = var12.countVoiceStatesForChannel;
                            var6 = var5.id;
                            var11 = var11.bind(var12)(var6);
                            var6 = 0;
                            var9 = var7;
                            if(!(var11 > var6)) { _fun0009_ip = 265; continue _fun0009 }
 181:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 25;
                            var6 = var13[var6];
                            var15 = var12.bind(var1)(var6);
                            var14 = var15.getVoiceUserHeight;
                            var6 = _closure2_slot5;
                            var6 = var14.bind(var15)(var6);
                            var14 = var6 * var11;
                            var6 = 26;
                            var11 = var13[var6];
                            var11 = var12.bind(var1)(var11);
                            var11 = var11.VOICE_USERS_MARGIN_BOTTOM;
                            var11 = var14 + var11;
                            var6 = var13[var6];
                            var6 = var12.bind(var1)(var6);
                            var6 = var6.VOICE_USERS_MARGIN_TOP;
                            var6 = var11 + var6;
                            var9 = var7 + var6;
 265:
                            var7 = _closure3_slot7;
                            var6 = {};
                            var11 = 'channel';
                            var6['kind'] = var11;
                            var11 = var5.record;
                            var6['channel'] = var11;
                            var11 = var5.isMuted;
                            var6['isMuted'] = var11;
                            var11 = var5.subtitle;
                            var12 = var10 != var11;
                            var10 = undefined;
                            if(!var12) { _fun0009_ip = 318; continue _fun0009 }
 315:
                            var10 = var11;
 318:
                            var6['subtitle'] = var10;
                            var10 = var5.threadCount;
                            var6['threadCount'] = var10;
                            var10 = _closure3_slot3;
                            var6['section'] = var10;
                            var6['height'] = var9;
                            var10 = var5.id;
                            var9 = _closure2_slot1;
                            var9 = var10 === var9;
                            if(var9) { _fun0009_ip = 375; continue _fun0009 }
 362:
                            var11 = var5.id;
                            var10 = _closure2_slot13;
                            var9 = var11 === var10;
 375:
                            var6['selected'] = var9;
                            var9 = var5.id;
                            var8 = _closure2_slot7;
                            var8 = var9 === var8;
                            var6['needsJumpAndHighlight'] = var8;
                            var6 = var7.bind(var1)(var6);
                            var6 = var5.threadIds;
                            var5 = var6.forEach;
                            var4 = function(arg1, arg2) {
                                var4 = arg1;
                                var3 = _closure3_slot7;
                                var2 = {};
                                var5 = 'thread';
                                var2['kind'] = var5;
                                var2['threadId'] = var4;
                                var5 = arg2;
                                var2['threadIndex'] = var5;
                                var5 = _closure4_slot0;
                                var5 = var5.threadCount;
                                var2['threadCount'] = var5;
                                var1 = _closure3_slot3;
                                var2['section'] = var1;
                                var5 = _closure2_slot10;
                                var2['height'] = var5;
                                var1 = _closure2_slot1;
                                var1 = var4 === var1;
                                var2['selected'] = var1;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var4 = var5.bind(var6)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 431:
                            var5 = _closure2_slot0;
                            var4 = var5.getGuildActionSection;
                            var7 = var4.bind(var5)();
                            var5 = var7.getRow;
                            var4 = _closure3_slot6;
                            var7 = var5.bind(var7)(var4);
                            var4 = null;
                            if(!(var4 != var7)) { _fun0009_ip = 1140; continue _fun0009 }
 472:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_HUB_HEADER_OPTIONS;
                            if(!(var7 !== var4)) { _fun0009_ip = 938; continue _fun0009 }
 489:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_SCHEDULED_EVENTS;
                            if(!(var7 !== var4)) { _fun0009_ip = 938; continue _fun0009 }
 506:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_HOME;
                            if(!(var7 !== var4)) { _fun0009_ip = 887; continue _fun0009 }
 523:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_ROLE_SUBSCRIPTIONS;
                            if(!(var7 !== var4)) { _fun0009_ip = 836; continue _fun0009 }
 540:
                            var4 = _closure1_slot16;
                            var4 = var4.CHANNELS_AND_ROLES;
                            if(!(var7 !== var4)) { _fun0009_ip = 754; continue _fun0009 }
 557:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_DIRECTORY;
                            if(!(var7 !== var4)) { _fun0009_ip = 709; continue _fun0009 }
 574:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
                            if(!(var7 !== var4)) { _fun0009_ip = 656; continue _fun0009 }
 588:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_MOD_DASH_MEMBER_SAFETY;
                            if(!(var7 === var4)) { _fun0009_ip = 1140; continue _fun0009 }
 605:
                            var5 = _closure3_slot7;
                            var4 = {};
                            var4['kind'] = var7;
                            var9 = _closure2_slot1;
                            var8 = _closure1_slot15;
                            var8 = var8.MEMBER_SAFETY;
                            var8 = var9 === var8;
                            var4['selected'] = var8;
                            var8 = _closure2_slot9;
                            var4['height'] = var8;
                            var4 = var5.bind(var1)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 656:
                            var5 = _closure3_slot7;
                            var4 = {'kind': 'newMemberActions', 'height': 48};
                            var4 = var5.bind(var1)(var4);
                            var4 = {};
                            var8 = 'sectionFooterSeparator';
                            var4['kind'] = var8;
                            var8 = _closure3_slot1;
                            var4['height'] = var8;
                            var4 = var5.bind(var1)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 709:
                            var5 = _closure3_slot7;
                            var4 = {};
                            var4['kind'] = var7;
                            var9 = _closure2_slot1;
                            var8 = _closure2_slot12;
                            var8 = var9 === var8;
                            var4['selected'] = var8;
                            var8 = _closure2_slot9;
                            var4['height'] = var8;
                            var4 = var5.bind(var1)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 754:
                            var5 = _closure3_slot7;
                            var4 = {};
                            var8 = _closure1_slot16;
                            var8 = var8.CHANNELS_AND_ROLES;
                            var4['kind'] = var8;
                            var9 = _closure2_slot1;
                            var8 = _closure1_slot15;
                            var8 = var8.CHANNEL_BROWSER;
                            var8 = var9 === var8;
                            if(var8) { _fun0009_ip = 813; continue _fun0009 }
 795:
                            var10 = _closure2_slot1;
                            var9 = _closure1_slot15;
                            var9 = var9.CUSTOMIZE_COMMUNITY;
                            var8 = var10 === var9;
 813:
                            var4['selected'] = var8;
                            var8 = _closure2_slot9;
                            var4['height'] = var8;
                            var4 = var5.bind(var1)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 836:
                            var5 = _closure3_slot7;
                            var4 = {};
                            var4['kind'] = var7;
                            var9 = _closure2_slot1;
                            var8 = _closure1_slot15;
                            var8 = var8.ROLE_SUBSCRIPTIONS;
                            var8 = var9 === var8;
                            var4['selected'] = var8;
                            var8 = _closure2_slot9;
                            var4['height'] = var8;
                            var4 = var5.bind(var1)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 887:
                            var5 = _closure3_slot7;
                            var4 = {};
                            var4['kind'] = var7;
                            var9 = _closure2_slot1;
                            var8 = _closure1_slot15;
                            var8 = var8.GUILD_HOME;
                            var8 = var9 === var8;
                            var4['selected'] = var8;
                            var8 = _closure2_slot9;
                            var4['height'] = var8;
                            var4 = var5.bind(var1)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 938:
                            var4 = _closure1_slot16;
                            var4 = var4.GUILD_SCHEDULED_EVENTS;
                            if(!(var7 !== var4)) { _fun0009_ip = 1140; continue _fun0009 }
 955:
                            var5 = _closure3_slot7;
                            var4 = {};
                            var4['kind'] = var7;
                            var6 = _closure2_slot9;
                            var4['height'] = var6;
                            var4 = var5.bind(var1)(var4);
                            _fun0009_ip = 1140; continue _fun0009;
 983:
                            var6 = _closure2_slot0;
                            var4 = var6.getChannelNoticeSection;
                            var7 = var4.bind(var6)();
                            var6 = var7.getRow;
                            var4 = _closure3_slot6;
                            var4 = var6.bind(var7)(var4);
                            var6 = null;
                            if(!(var6 != var4)) { _fun0009_ip = 1140; continue _fun0009 }
 1021:
                            var6 = _closure1_slot17;
                            var6 = var6.GUILD_PROGRESS;
                            if(!(var4 !== var6)) { _fun0009_ip = 1117; continue _fun0009 }
 1035:
                            var6 = _closure1_slot17;
                            var6 = var6.MFA_WARNING;
                            if(!(var4 !== var6)) { _fun0009_ip = 1092; continue _fun0009 }
 1049:
                            var3 = _closure1_slot17;
                            var3 = var3.LIVE_CHANNEL_NOTICE;
                            if(!(var4 === var3)) { _fun0009_ip = 1140; continue _fun0009 }
 1063:
                            var4 = _closure3_slot7;
                            var3 = {};
                            var6 = 'liveChannelNotice';
                            var3['kind'] = var6;
                            var5 = _closure2_slot14;
                            var3['height'] = var5;
                            var3 = var4.bind(var1)(var3);
                            _fun0009_ip = 1140; continue _fun0009;
 1092:
                            var4 = _closure3_slot7;
                            var3 = {'kind': 'mfaWarning', 'height': 48};
                            var3 = var4.bind(var1)(var3);
                            _fun0009_ip = 1140; continue _fun0009;
 1117:
                            var3 = _closure3_slot7;
                            var2 = {'kind': 'guildProgress', 'height': 48};
                            var2 = var3.bind(var1)(var2);
 1140:
                            return var1;
                        }
                    };
                    var _closure3_slot6 = var28;
                    var47 = var28 < var46;
                    var1 = 0;
                    var39 = 0;
                    if(!var47) { _fun0007_ip = 876; continue _fun0007 }
 855:
                    var47 = var41.bind(var31)();
                    var47 = var1 + 1;
                    _closure3_slot6 = var47;
                    var1 = var47;
                    var39 = var1;
                    if(var39 < var46) { _fun0007_ip = 855; continue _fun0007 }
 876:
                    var46 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var22];
                    var47 = var46.bind(var31)(var1);
                    var46 = var47.isFavoritesSection;
                    var1 = _closure2_slot0;
                    var1 = var46.bind(var47)(var40, var1);
                    if(var1) { _fun0007_ip = 945; continue _fun0007 }
 912:
                    var47 = _closure1_slot0;
                    var46 = _closure1_slot2;
                    var46 = var46[var22];
                    var48 = var47.bind(var31)(var46);
                    var47 = var48.isRecentsSection;
                    var46 = _closure2_slot0;
                    var1 = var47.bind(var48)(var40, var46);
 945:
                    if(!var1) { _fun0007_ip = 963; continue _fun0007 }
 948:
                    var1 = {};
                    var1['kind'] = var18;
                    var1['height'] = var29;
                    var1 = var33.bind(var31)(var1);
 963:
                    var1 = _closure2_slot6;
                    var1 = var40 in var1;
                    if(!var1) { _fun0007_ip = 1061; continue _fun0007 }
 974:
                    var1 = _closure2_slot6;
                    var1 = var1[var40];
                    var47 = var1.category;
                    var46 = var1.activeVoiceChannels;
                    var1 = {};
                    var1['kind'] = var20;
                    var1['category'] = var47;
                    var1['activeVoiceChannels'] = var46;
                    var46 = var46.length;
                    var47 = var46 > var30;
                    var46 = var19;
                    if(var47) { _fun0007_ip = 1052; continue _fun0007 }
 1025:
                    var48 = _closure2_slot9;
                    var47 = _closure2_slot11;
                    var47 = var47.voiceUsers;
                    var47 = var47.height;
                    var47 = var48 + var47;
                    var46 = var47 - var21;
 1052:
                    var1['height'] = var46;
                    var1 = var33.bind(var31)(var1);
 1061:
                    var46 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var22];
                    var47 = var46.bind(var31)(var1);
                    var46 = var47.isVoiceChannelsSection;
                    var1 = _closure2_slot0;
                    var1 = var46.bind(var47)(var40, var1);
                    var38 = var45;
                    var37 = var44;
                    var36 = var43;
                    var35 = var42;
                    var7 = var41;
                    var6 = var39;
                    var34 = var5;
                    if(!var1) { _fun0007_ip = 1314; continue _fun0007 }
 1121:
                    var46 = _closure2_slot0;
                    var1 = var46.getCategoryFromSection;
                    var1 = var1.bind(var46)(var40);
                    var38 = var45;
                    var37 = var44;
                    var36 = var43;
                    var35 = var42;
                    var7 = var41;
                    var6 = var39;
                    var34 = var1;
                    if(!(var23 != var34)) { _fun0007_ip = 1314; continue _fun0007 }
 1164:
                    var46 = var1.getHiddenChannelIds;
                    var46 = var46.bind(var1)();
                    var46 = var46.length;
                    if(!(!(var46 > var28))) { _fun0007_ip = 1217; continue _fun0007 }
 1183:
                    var46 = var1.isEmpty;
                    var46 = var46.bind(var1)();
                    var38 = var45;
                    var37 = var44;
                    var36 = var43;
                    var35 = var42;
                    var7 = var41;
                    var6 = var39;
                    var34 = var1;
                    if(var46) { _fun0007_ip = 1314; continue _fun0007 }
 1217:
                    var46 = var1.getShownChannelIds;
                    var46 = var46.bind(var1)();
                    var46 = var46.length;
                    var47 = var1.getShownChannelIds;
                    var47 = var47.bind(var1)();
                    var46 = var46 - var30;
                    var48 = var47[var46];
                    var47 = _closure1_slot10;
                    var46 = var47.countVoiceStatesForChannel;
                    var47 = var46.bind(var47)(var48);
                    var46 = {};
                    var46['kind'] = var24;
                    var48 = _closure1_slot5;
                    var46['height'] = var48;
                    var47 = var47 > var28;
                    var46['isLastShownChannelActive'] = var47;
                    var46 = var33.bind(var31)(var46);
                    var38 = var45;
                    var37 = var44;
                    var36 = var43;
                    var35 = var42;
                    var7 = var41;
                    var6 = var39;
                    var34 = var1;
 1314:
                    var39 = var25.bind(var31)();
                    var1 = var39.done;
                    var11 = var38;
                    var10 = var37;
                    var9 = var36;
                    var8 = var35;
                    var5 = var34;
                    var27 = var40;
                    var12 = var39;
                    if(!var1) { _fun0007_ip = 206; continue _fun0007 }
 1350:
                    var1 = {};
                    var1['data'] = var4;
                    var1['unreadBarsData'] = var3;
                    var2 = _closure3_slot2;
                    var1['estimateContentHeight'] = var2;
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var2, var3);
            var4 = var2.data;
            var3 = var2.unreadBarsData;
            var2 = var2.estimateContentHeight;
            var1 = function useJumpToChannel(arg1, arg2, arg3) {
                var4 = arg1;
                var8 = arg2;
                var6 = arg3;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var8;
                var _closure3_slot2 = var6;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 27;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var3);
                var3 = var7.useNavigation;
                var3 = var3.bind(var7)();
                var _closure3_slot3 = var3;
                var5 = _closure1_slot4;
                var9 = var5.useCallback;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() {
                    var4 = _closure3_slot3;
                    var3 = var4.setParams;
                    var2 = {};
                    var1 = undefined;
                    var2['jumpToChannelId'] = var1;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var7 = var9.bind(var5)(var3, var7);
                var _closure3_slot4 = var7;
                var3 = var5.useRef;
                var3 = var3.bind(var5)(var4);
                var _closure3_slot5 = var3;
                var4 = var5.useEffect;
                var3 = function() {
                    var2 = _closure3_slot5;
                    var1 = _closure3_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var6;
                var2 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var2 = _closure3_slot1;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0010_ip = 351; continue _fun0010 }
 18:
                        var4 = _closure1_slot6;
                        var6 = var4.useReducedMotion;
                        var4 = _closure3_slot5;
                        var7 = var4.current;
                        var5 = var7.findIndex;
                        var4 = function(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                var2 = arg1;
                                var3 = var2.kind;
                                var1 = 'channel';
                                var1 = var1 === var3;
                                if(!var1) { _fun0011_ip = 25; continue _fun0011 }
 19:
                                var1 = var2.needsJumpAndHighlight;
 25:
                                return var1;
                            }
                        };
                        var7 = var5.bind(var7)(var4);
                        var14 = 0;
                        if(!(!(var7 < var14))) { _fun0010_ip = 341; continue _fun0010 }
 67:
                        var4 = _closure3_slot2;
                        var5 = var4.current;
                        if(!(var3 != var5)) { _fun0010_ip = 120; continue _fun0010 }
 80:
                        var4 = var5.scrollToIndex;
                        var3 = {};
                        var3['index'] = var7;
                        var6 = !var6;
                        var3['animated'] = var6;
                        var6 = 0.5;
                        var3['viewPosition'] = var6;
                        var3 = var4.bind(var5)(var3);
 120:
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var3 = 17;
                        var3 = var19[var3];
                        var17 = undefined;
                        var3 = var18.bind(var17)(var3);
                        var4 = var3.jumpToChannelHighlightOpacity;
                        var3 = var4.set;
                        var16 = 28;
                        var5 = var19[var16];
                        var7 = var18.bind(var17)(var5);
                        var6 = var7.withSequence;
                        var11 = 29;
                        var5 = var19[var11];
                        var10 = var18.bind(var17)(var5);
                        var9 = var10.withSpring;
                        var13 = _closure1_slot18;
                        var5 = 1;
                        var5 = var9.bind(var10)(var5, var13);
                        var9 = var19[var16];
                        var10 = var18.bind(var17)(var9);
                        var9 = var10.withDelay;
                        var11 = var19[var11];
                        var12 = var18.bind(var17)(var11);
                        var11 = var12.withSpring;
                        var8 = function t(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var1 = arg1;
                                if(!var1) { _fun0012_ip = 52; continue _fun0012 }
 6:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 28;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.runOnJS;
                                var1 = _closure3_slot4;
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.bind(var2)();
 52:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var15 = {};
                        var16 = var19[var16];
                        var16 = var18.bind(var17)(var16);
                        var16 = var16.runOnJS;
                        var15['runOnJS'] = var16;
                        var16 = _closure3_slot4;
                        var15['clearNavigationParams'] = var16;
                        var8['__closure'] = var15;
                        var15 = 4258427482717.0;
                        var8['__workletHash'] = var15;
                        var2 = _closure1_slot19;
                        var8['__initData'] = var2;
                        var21 = 'respect-motion-settings';
                        var24 = var12;
                        var23 = 0;
                        var22 = var13;
                        var20 = var8;
                        var8 = var24[var11](var23, var22, var21, var20, var19);
                        var2 = 150;
                        var2 = var9.bind(var10)(var2, var8);
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = var3.bind(var4)(var2);
                        _fun0010_ip = 351; continue _fun0010;
 341:
                        var2 = _closure3_slot4;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 351:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var1 = var1.bind(var7)(var4, var5, var6);
            var1 = {};
            var1['data'] = var4;
            var1['unreadBarsData'] = var3;
            var1['estimateContentHeight'] = var2;
            return var1;
        }
    };
    var3['useChannelListData'] = var2;
    return var1;
})();