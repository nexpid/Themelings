// app/modules/forums/native/ForumChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var13 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = function ArchivedSection() {
            var1 = _closure1_slot21;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 16;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useClientThemesOverride;
            var7 = var1.bind(var2)();
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var9 = var8.section;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot17;
            var5 = 17;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'variant': 'text-xs/bold', 'color': 'text-muted'};
            var8 = var8.divider;
            var5['style'] = var8;
            var8 = 18;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.3+LO19;
            var8 = var9.bind(var10)(var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot25 = var1;
        var1 = function SearchSection(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var14 = var1.numPosts;
                var13 = var1.searchQuery;
                var1 = _closure1_slot21;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var8.section;
                var1['style'] = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 17;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {'style': null, 'variant': 'text-xs/bold', 'color': 'text-muted'};
                var8 = var8.divider;
                var5['style'] = var8;
                var8 = 0;
                if(!(var8 !== var14)) { _fun0002_ip = 179; continue _fun0002 }
 108:
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 18;
                var11 = var15[var8];
                var11 = var10.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var8 = var15[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.t;
                var10 = var8.tBz/8f;
                var8 = {};
                var8['numPosts'] = var14;
                var8['query'] = var13;
                var8 = var11.bind(var12)(var10, var8);
                _fun0002_ip = 236; continue _fun0002;
 179:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 18;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.DbgHxs;
                var8 = var10.bind(var11)(var9);
 236:
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = function ArchivedMissingReadHistoryPermission(arg1) {
            var1 = arg1;
            var12 = var1.channelName;
            var1 = _closure1_slot21;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var8.missingPermissionContainer;
            var1['style'] = var6;
            var7 = _closure1_slot17;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 17;
            var5 = var13[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var8 = var8.missingPermissionText;
            var5['style'] = var8;
            var8 = 18;
            var10 = var13[var8];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8.TycmzM;
            var8 = {};
            var8['channelName'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot27 = var1;
        var1 = function SearchMissingReadHistoryPermission(arg1) {
            var1 = arg1;
            var12 = var1.channelName;
            var1 = _closure1_slot21;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var8.section;
            var1['style'] = var6;
            var7 = _closure1_slot17;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 17;
            var5 = var13[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var8 = var8.missingPermissionText;
            var5['style'] = var8;
            var8 = 18;
            var10 = var13[var8];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8.OWZJdX;
            var8 = {};
            var8['channelName'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot28 = var1;
        var1 = function SortAndViewOptions(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var2 = var2.channel;
                var3 = _closure1_slot21;
                var4 = undefined;
                var15 = var3.bind(var4)();
                var7 = var2.id;
                var _closure2_slot0 = var7;
                var6 = _closure1_slot3;
                var5 = var6.useCallback;
                var3 = new Array(1);
                var3[0] = var7;
                var1 = function() {
                    var8 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'ForumDisplaySettingsActionSheet-';
                    var6 = var2.bind(var1)(var8);
                    var _closure3_slot0 = var6;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var4 = var2[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.openLazy;
                    var9 = _closure1_slot0;
                    var3 = 25;
                    var3 = var2[var3];
                    var9 = var9.bind(var1)(var3);
                    var3 = 24;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var9.bind(var1)(var3, var2);
                    var2 = {};
                    var2['channelId'] = var8;
                    var7 = function onClose() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.hideActionSheet;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onClose'] = var7;
                    var2 = var4.bind(var5)(var3, var6, var2);
                    return var1;
                };
                var5 = var5.bind(var6)(var1, var3);
                var1 = var2.isMediaChannel;
                var14 = var1.bind(var2)();
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 26;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1['accessibilityRole'] = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var19 = 18;
                var8 = var6[var19];
                var8 = var7.bind(var4)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var6 = var6[var19];
                var6 = var7.bind(var4)(var6);
                var7 = var6.t;
                if(var14) { _fun0003_ip = 174; continue _fun0003 }
 159:
                var6 = var7.Iqetys;
                var6 = var8.bind(var10)(var6);
                _fun0003_ip = 187; continue _fun0003;
 174:
                var7 = var7.kQN/bm;
                var6 = var8.bind(var10)(var7);
 187:
                var1['accessibilityLabel'] = var6;
                var6 = _closure1_slot16;
                var1['androidRippleConfig'] = var6;
                var6 = 0.8;
                var1['activeOpacity'] = var6;
                var6 = var15.optionsContainer;
                var1['style'] = var6;
                var1['onPress'] = var5;
                var7 = _closure1_slot18;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var15.optionsPill;
                var5['style'] = var8;
                var13 = _closure1_slot17;
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 27;
                var8 = var16[var8];
                var8 = var11.bind(var4)(var8);
                var10 = var8.ArrowsUpDownIcon;
                var8 = {};
                var12 = 'xs';
                var8['size'] = var12;
                var17 = var15.sortOptionsIcon;
                var8['style'] = var17;
                var10 = var13.bind(var4)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var13 = _closure1_slot17;
                var10 = 17;
                var10 = var16[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                var15 = var15.sortOptionsText;
                var10['style'] = var15;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                if(var14) { _fun0003_ip = 415; continue _fun0003 }
 402:
                var14 = var15.xyYt8P;
                var14 = var16.bind(var17)(var14);
                _fun0003_ip = 428; continue _fun0003;
 415:
                var15 = var15.JxU0ws;
                var14 = var16.bind(var17)(var15);
 428:
                var10['children'] = var14;
                var10 = var13.bind(var4)(var11, var10);
                var8[1] = var10;
                var11 = _closure1_slot17;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 28;
                var9 = var13[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.ChevronSmallDownIcon;
                var9 = {};
                var9['size'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot29 = var1;
        var1 = function TagFilter(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot21;
                var4 = undefined;
                var16 = var2.bind(var4)();
                var2 = _closure1_slot11;
                var1 = var1.id;
                var1 = var2.bind(var4)(var1);
                var18 = var1.tagFilter;
                var3 = _closure1_slot17;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 26;
                var1 = var6[var1];
                var1 = var10.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8};
                var15 = 18;
                var7 = var6[var15];
                var7 = var10.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var15];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.TdqRTk;
                var6 = var7.bind(var8)(var6);
                var1['accessibilityLabel'] = var6;
                var6 = var16.optionsContainer;
                var1['style'] = var6;
                var5 = function onPress() {
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var4 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 25;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 29;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['channel'] = var2;
                    var2 = 'ForumTagFilterActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                };
                var1['onPress'] = var5;
                var7 = _closure1_slot18;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var16.optionsPill;
                var5['style'] = var8;
                var10 = var18.size;
                var8 = 0;
                var10 = var10 > var8;
                if(!var10) { _fun0004_ip = 297; continue _fun0004 }
 199:
                var12 = _closure1_slot17;
                var11 = _closure1_slot4;
                var8 = {};
                var13 = var16.countContainer;
                var8['style'] = var13;
                var17 = _closure1_slot17;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 17;
                var13 = var19[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {'variant': 'text-xs/bold', 'color': 'always-white'};
                var19 = var16.countText;
                var13['style'] = var19;
                var18 = var18.size;
                var13['children'] = var18;
                var13 = var17.bind(var4)(var14, var13);
                var8['children'] = var13;
                var10 = var12.bind(var4)(var11, var8);
 297:
                var8 = new Array(3);
                var8[0] = var10;
                var14 = _closure1_slot17;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var11 = 17;
                var11 = var12[var11];
                var11 = var10.bind(var4)(var11);
                var13 = var11.Text;
                var11 = {'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                var16 = var16.sortOptionsText;
                var11['style'] = var16;
                var16 = var12[var15];
                var16 = var10.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var12[var15];
                var15 = var10.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.112vVF;
                var15 = var16.bind(var17)(var15);
                var11['children'] = var15;
                var11 = var14.bind(var4)(var13, var11);
                var8[1] = var11;
                var11 = _closure1_slot17;
                var9 = 28;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.ChevronSmallDownIcon;
                var9 = {};
                var12 = 'xs';
                var9['size'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var1 = function onForumViewableItemsChanged(arg1) {
            var1 = arg1;
            var3 = var1.changed;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var4 = _closure1_slot20;
                    var3 = var4.has;
                    var3 = var3.bind(var4)(var5);
                    if(var3) { _fun0005_ip = 159; continue _fun0005 }
 31:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var7 = var3.bind(var4)(var5);
                    var3 = null;
                    var8 = var3 == var7;
                    var6 = undefined;
                    var4 = undefined;
                    if(var8) { _fun0005_ip = 64; continue _fun0005 }
 58:
                    var4 = var7.parent_id;
 64:
                    if(!(var3 != var4)) { _fun0005_ip = 159; continue _fun0005 }
 68:
                    var1 = var1.isViewable;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 30;
                    var2 = var7[var2];
                    var3 = var3.bind(var6)(var2);
                    if(var1) { _fun0005_ip = 129; continue _fun0005 }
 97:
                    var2 = var3.markForumPostItemAsUnseen;
                    var1 = global;
                    var6 = var1.Date;
                    var1 = var6.now;
                    var1 = var1.bind(var6)();
                    var1 = var2.bind(var3)(var4, var5, var1);
                    _fun0005_ip = 159; continue _fun0005;
 129:
                    var2 = var3.markForumPostItemAsSeen;
                    var1 = global;
                    var6 = var1.Date;
                    var1 = var6.now;
                    var1 = var1.bind(var6)();
                    var1 = var2.bind(var3)(var4, var5, var1);
 159:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var _closure1_slot31 = var1;
        var4 = global;
        var9 = var4.Object;
        var8 = var9.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var7);
        var12 = 0;
        var8 = var6[var12];
        var7 = native4;
        var1 = undefined;
        var8 = var7.bind(var1)(var8);
        var _closure1_slot3 = var8;
        var11 = 1;
        var7 = var6[var11];
        var7 = var5.bind(var1)(var7);
        var9 = var7.View;
        var _closure1_slot4 = var9;
        var7 = var7.FlatList;
        var _closure1_slot5 = var7;
        var7 = 2;
        var7 = var6[var7];
        var7 = var13.bind(var1)(var7);
        var _closure1_slot6 = var7;
        var7 = 3;
        var7 = var6[var7];
        var7 = var13.bind(var1)(var7);
        var _closure1_slot7 = var7;
        var15 = 4;
        var7 = var6[var15];
        var7 = var13.bind(var1)(var7);
        var _closure1_slot8 = var7;
        var7 = 5;
        var7 = var6[var7];
        var7 = var13.bind(var1)(var7);
        var _closure1_slot9 = var7;
        var7 = 6;
        var7 = var6[var7];
        var7 = var13.bind(var1)(var7);
        var _closure1_slot10 = var7;
        var7 = 7;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var9 = var7.useForumChannelStore;
        var _closure1_slot11 = var9;
        var7 = var7.useForumChannelStoreApi;
        var _closure1_slot12 = var7;
        var7 = 8;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var9 = var7.AnalyticsObjects;
        var _closure1_slot13 = var9;
        var9 = var7.AnalyticsPages;
        var _closure1_slot14 = var9;
        var7 = var7.AnalyticsSections;
        var _closure1_slot15 = var7;
        var7 = 9;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.ANDROID_FOREGROUND_RIPPLE;
        var _closure1_slot16 = var7;
        var7 = 10;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var16 = var7.Fonts;
        var7 = 11;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var9 = var7.jsx;
        var _closure1_slot17 = var9;
        var9 = var7.jsxs;
        var _closure1_slot18 = var9;
        var7 = var7.Fragment;
        var _closure1_slot19 = var7;
        var9 = var4.Set;
        var4 = new Array(5);
        var7 = 'archived_section';
        var4[0] = var7;
        var7 = 'search_section';
        var4[1] = var7;
        var7 = 'missing_permission_search';
        var4[2] = var7;
        var7 = 'missing_permission_archived_threads';
        var4[3] = var7;
        var7 = 'loading_section';
        var4[4] = var7;
        var7 = var9.prototype;
        var7 = Object.create(var7, {constructor: {value: var9}});
        var25 = var7;
        var24 = var4;
        var4 = new var25[var9](var24, var23);
        var4 = var4 instanceof Object ? var4 : var7;
        var _closure1_slot20 = var4;
        var14 = 12;
        var4 = var6[var14];
        var9 = var5.bind(var1)(var4);
        var7 = var9.createStyles;
        var4 = {};
        var10 = {};
        var10['flex'] = var11;
        var11 = 13;
        var17 = var6[var11];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.BG_BASE_SECONDARY;
        var10['backgroundColor'] = var17;
        var4['background'] = var10;
        var10 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'paddingHorizontal': 12, 'paddingTop': 8, 'paddingBottom': 12};
        var4['headerRow'] = var10;
        var10 = {'backgroundColor': null, 'width': '100%', 'height': 1};
        var17 = var6[var11];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.BACKGROUND_MODIFIER_ACCENT;
        var10['backgroundColor'] = var17;
        var4['headerDivider'] = var10;
        var10 = {'flex': 1, 'alignSelf': 'stretch', 'alignItems': 'center', 'position': 'relative'};
        var4['container'] = var10;
        var10 = {};
        var10['height'] = var12;
        var4['noHeight'] = var10;
        var10 = {'flex': 1, 'paddingTop': 8, 'paddingHorizontal': 12, 'alignSelf': 'stretch', 'marginBottom': 0};
        var4['list'] = var10;
        var10 = {'alignItems': 'flex-start', 'justifyContent': 'flex-end'};
        var4['section'] = var10;
        var10 = {'marginTop': 12, 'paddingStart': 4};
        var12 = 14;
        var17 = var6[var12];
        var20 = var13.bind(var1)(var17);
        var19 = var16.PRIMARY_BOLD;
        var17 = var6[var11];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var23 = var17.TEXT_MUTED;
        var21 = {'marginBottom': 12, 'uppercase': true};
        var25 = undefined;
        var24 = var19;
        var22 = var14;
        var23 = var25[var20](var24, var23, var22, var21, var20);
        var24 = var10;
        var17 = copyDataProperties(var24, var23);
        var4['divider'] = var10;
        var10 = {};
        var17 = var6[var11];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.TEXT_NORMAL;
        var10['color'] = var17;
        var17 = 32;
        var10['marginTop'] = var17;
        var4['outOfDate'] = var10;
        var10 = {'paddingHorizontal': 8, 'paddingBottom': 8};
        var4['availableTags'] = var10;
        var10 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'height': 48};
        var17 = var6[var11];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.BACKGROUND_TERTIARY;
        var10['backgroundColor'] = var17;
        var17 = var6[var11];
        var17 = var13.bind(var1)(var17);
        var17 = var17.radii;
        var17 = var17.xs;
        var10['borderRadius'] = var17;
        var4['missingPermissionContainer'] = var10;
        var10 = {};
        var17 = var6[var12];
        var18 = var13.bind(var1)(var17);
        var17 = var16.PRIMARY_NORMAL;
        var16 = var6[var11];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.TEXT_MUTED;
        var23 = var18.bind(var1)(var17, var16, var14);
        var24 = var10;
        var16 = copyDataProperties(var24, var23);
        var4['missingPermissionText'] = var10;
        var10 = {};
        var16 = 'hidden';
        var10['overflow'] = var16;
        var16 = var6[var11];
        var16 = var13.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.xl;
        var10['borderRadius'] = var16;
        var4['optionsContainer'] = var10;
        var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 8, 'height': 32};
        var16 = var6[var11];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BG_BASE_TERTIARY;
        var10['backgroundColor'] = var16;
        var4['optionsPill'] = var10;
        var10 = {};
        var16 = var6[var11];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.INTERACTIVE_NORMAL;
        var10['color'] = var16;
        var10['marginLeft'] = var15;
        var4['sortOptionsIcon'] = var10;
        var10 = {};
        var10['marginHorizontal'] = var15;
        var4['sortOptionsText'] = var10;
        var10 = {};
        var10['marginRight'] = var14;
        var14 = var6[var11];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.TEXT_NORMAL;
        var10['color'] = var14;
        var4['sortOrderIcon'] = var10;
        var10 = {'backgroundColor': null, 'borderRadius': 20, 'marginRight': 4, 'minWidth': 20, 'height': 20, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
        var11 = var6[var11];
        var11 = var13.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.BG_BRAND;
        var10['backgroundColor'] = var11;
        var4['countContainer'] = var10;
        var10 = {};
        var11 = 15;
        var11 = var6[var11];
        var13 = var5.bind(var1)(var11);
        var11 = var13.isAndroid;
        var13 = var11.bind(var13)();
        var11 = undefined;
        if(!var13) { _fun0001_ip = 1213; continue _fun0001 }
 1210:
        var11 = var12;
 1213:
        var10['lineHeight'] = var11;
        var4['countText'] = var10;
        var4 = var7.bind(var9)(var4);
        var _closure1_slot21 = var4;
        var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 100};
        var _closure1_slot22 = var4;
        var7 = var8.forwardRef;
        var4 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var7 = var1.channel;
                var _closure2_slot0 = var7;
                var11 = var1.searchQuery;
                var _closure2_slot1 = var11;
                var2 = var1.onScroll;
                var _closure2_slot2 = var2;
                var18 = var1.insets;
                var1 = _closure1_slot21;
                var5 = undefined;
                var17 = var1.bind(var5)();
                var3 = _closure1_slot11;
                var1 = var7.id;
                var1 = var3.bind(var5)(var1);
                var28 = var1.sortOrder;
                var6 = var1.tagFilter;
                var26 = var1.tagSetting;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 31;
                var1 = var13[var1];
                var9 = var10.bind(var5)(var1);
                var8 = var9.useForumChannelSeenManager;
                var1 = {};
                var12 = var7.guild_id;
                var1['guildId'] = var12;
                var12 = var7.id;
                var1['channelId'] = var12;
                var1 = var8.bind(var9)(var1);
                var1 = function useForumData(arg1, arg2, arg3, arg4) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var18 = arg1;
                        var17 = arg2;
                        var16 = arg3;
                        var15 = arg4;
                        var _closure3_slot0 = var18;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var3 = 19;
                        var2 = var20[var3];
                        var11 = undefined;
                        var5 = var19.bind(var11)(var2);
                        var4 = var5.useForumActiveThreadIds;
                        var2 = {};
                        var2['channel'] = var18;
                        var2['sortOrder'] = var17;
                        var2['tagFilter'] = var16;
                        var2['tagSetting'] = var15;
                        var6 = true;
                        var2['shouldAutomaticallyAck'] = var6;
                        var9 = var4.bind(var5)(var2);
                        var _closure3_slot1 = var9;
                        var2 = 20;
                        var2 = var20[var2];
                        var6 = var19.bind(var11)(var2);
                        var5 = var6.useStateFromStores;
                        var2 = _closure1_slot7;
                        var4 = new Array(2);
                        var4[0] = var2;
                        var2 = _closure1_slot6;
                        var4[1] = var2;
                        var2 = function() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var5 = _closure1_slot7;
                                var4 = var5.hasLoaded;
                                var2 = _closure3_slot0;
                                var1 = var2.guild_id;
                                var1 = var4.bind(var5)(var1);
                                var4 = _closure1_slot6;
                                var3 = var4.isLurking;
                                var2 = var2.guild_id;
                                var2 = var3.bind(var4)(var2);
                                var1 = !var1;
                                if(!var1) { _fun0008_ip = 59; continue _fun0008 }
 56:
                                var1 = !var2;
 59:
                                return var1;
                            }
                        };
                        var5 = var5.bind(var6)(var4, var2);
                        var _closure3_slot2 = var5;
                        var13 = !var5;
                        var2 = var20[var3];
                        var6 = var19.bind(var11)(var2);
                        var4 = var6.useForumSearchState;
                        var2 = {};
                        var7 = var18.id;
                        var2['channelId'] = var7;
                        var4 = var4.bind(var6)(var2);
                        var2 = var4.searchResults;
                        var14 = var4.isSearchLoading;
                        var4 = var20[var3];
                        var6 = var19.bind(var11)(var4);
                        var4 = var6.useAutomaticForumSearch;
                        var4 = var4.bind(var6)(var18, var16, var15);
                        var4 = var20[var3];
                        var6 = var19.bind(var11)(var4);
                        var4 = var6.useCanViewArchivedPosts;
                        var12 = var4.bind(var6)(var18);
                        var4 = 21;
                        var4 = var20[var4];
                        var6 = var19.bind(var11)(var4);
                        var4 = var6.useArchivedThreads;
                        var25 = var6;
                        var24 = var18;
                        var23 = var17;
                        var22 = var16;
                        var21 = var15;
                        var4 = var25[var4](var24, var23, var22, var21, var20);
                        var8 = var4.threadIds;
                        var _closure3_slot3 = var8;
                        var7 = var4.canLoadMore;
                        var6 = var4.loadMore;
                        var4 = var4.loading;
                        var3 = var20[var3];
                        var11 = var19.bind(var11)(var3);
                        var3 = var11.useLoadForumUnreadCounts;
                        var25 = var11;
                        var24 = var18;
                        var23 = var17;
                        var22 = var16;
                        var21 = var15;
                        var3 = var25[var3](var24, var23, var22, var21, var20);
                        var11 = 'Loading';
                        var3 = var11;
                        if(var14) { _fun0007_ip = 437; continue _fun0007 }
 337:
                        if(var14) { _fun0007_ip = 359; continue _fun0007 }
 340:
                        var16 = null;
                        if(!(var16 != var2)) { _fun0007_ip = 359; continue _fun0007 }
 346:
                        var15 = var2.length;
                        var14 = 0;
                        var3 = null;
                        if(!(var14 !== var15)) { _fun0007_ip = 437; continue _fun0007 }
 359:
                        var3 = var11;
                        if(!var13) { _fun0007_ip = 437; continue _fun0007 }
 365:
                        if(!var13) { _fun0007_ip = 373; continue _fun0007 }
 368:
                        var3 = null;
                        if(!var12) { _fun0007_ip = 437; continue _fun0007 }
 373:
                        var12 = var9.length;
                        var13 = 0;
                        if(!(var13 === var12)) { _fun0007_ip = 405; continue _fun0007 }
 384:
                        var12 = var8.length;
                        if(!(var13 === var12)) { _fun0007_ip = 405; continue _fun0007 }
 393:
                        var3 = var11;
                        if(var5) { _fun0007_ip = 437; continue _fun0007 }
 399:
                        var3 = var11;
                        if(var4) { _fun0007_ip = 437; continue _fun0007 }
 405:
                        var11 = var9.length;
                        var11 = var13 === var11;
                        if(!var11) { _fun0007_ip = 426; continue _fun0007 }
 417:
                        var12 = var8.length;
                        var11 = var13 === var12;
 426:
                        var3 = null;
                        if(!var11) { _fun0007_ip = 437; continue _fun0007 }
 431:
                        var3 = 'Empty';
 437:
                        var12 = _closure1_slot3;
                        var11 = var12.useEffect;
                        var13 = var9.length;
                        var10 = new Array(3);
                        var10[0] = var13;
                        var13 = var8.length;
                        var10[1] = var13;
                        var10[2] = var5;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.recordRender;
                            var3 = _closure3_slot1;
                            var6 = var3.length;
                            var3 = _closure3_slot3;
                            var3 = var3.length;
                            var3 = var6 + var3;
                            var2 = _closure3_slot2;
                            var2 = !var2;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        };
                        var1 = var11.bind(var12)(var1, var10);
                        var1 = {};
                        var1['activeThreadIds'] = var9;
                        var1['archivedThreadIds'] = var8;
                        var1['canLoadMore'] = var7;
                        var1['loadMore'] = var6;
                        var1['activeThreadsLoading'] = var5;
                        var1['archivedThreadsLoading'] = var4;
                        var1['emptyStateType'] = var3;
                        var1['searchResults'] = var2;
                        return var1;
                    }
                };
                var30 = undefined;
                var29 = var7;
                var27 = var6;
                var3 = var30[var1](var29, var28, var27, var26, var25);
                var19 = var3.activeThreadIds;
                var _closure2_slot3 = var19;
                var15 = var3.archivedThreadIds;
                var _closure2_slot4 = var15;
                var24 = var3.canLoadMore;
                var _closure2_slot5 = var24;
                var8 = var3.loadMore;
                var _closure2_slot6 = var8;
                var1 = var3.archivedThreadsLoading;
                var _closure2_slot7 = var1;
                var16 = var3.activeThreadsLoading;
                var _closure2_slot8 = var16;
                var9 = var3.emptyStateType;
                var _closure2_slot9 = var9;
                var4 = var3.searchResults;
                var _closure2_slot10 = var4;
                var3 = 32;
                var3 = var13[var3];
                var3 = var10.bind(var5)(var3);
                var3 = var3.bind(var5)(var7);
                var _closure2_slot11 = var3;
                var12 = _closure1_slot0;
                var10 = 19;
                var20 = var13[var10];
                var21 = var12.bind(var5)(var20);
                var20 = var21.useCanViewArchivedPosts;
                var22 = var20.bind(var21)(var7);
                var _closure2_slot12 = var22;
                var10 = var13[var10];
                var20 = var12.bind(var5)(var10);
                var10 = var20.useCanSearchForumPosts;
                var21 = var10.bind(var20)(var7);
                var _closure2_slot13 = var21;
                var10 = 16;
                var10 = var13[var10];
                var12 = var12.bind(var5)(var10);
                var10 = var12.useClientThemesOverride;
                var20 = var10.bind(var12)();
                var23 = _closure1_slot3;
                var13 = var23.useCallback;
                var12 = new Array(5);
                var12[0] = var1;
                var12[1] = var24;
                var12[2] = var22;
                var12[3] = var8;
                var12[4] = var4;
                var10 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var3 = _closure2_slot10;
                        var2 = null;
                        var2 = var2 == var3;
                        if(!var2) { _fun0009_ip = 20; continue _fun0009 }
 16:
                        var2 = _closure2_slot12;
 20:
                        if(!var2) { _fun0009_ip = 30; continue _fun0009 }
 23:
                        var3 = _closure2_slot7;
                        var2 = !var3;
 30:
                        if(!var2) { _fun0009_ip = 37; continue _fun0009 }
 33:
                        var2 = _closure2_slot5;
 37:
                        if(!var2) { _fun0009_ip = 50; continue _fun0009 }
 40:
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13 = var13.bind(var23)(var10, var12);
                var23 = _closure1_slot3;
                var12 = var23.useCallback;
                var10 = [976];
                var10[1] = var1;
                var10[2] = var24;
                var10[3] = var22;
                var10[4] = var8;
                var10[5] = var4;
                var8 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.contentOffset;
                        var4 = var2.y;
                        var2 = var1.contentSize;
                        var5 = var2.height;
                        var1 = var1.layoutMeasurement;
                        var3 = var1.height;
                        var6 = _closure2_slot10;
                        var2 = null;
                        var2 = var2 == var6;
                        if(!var2) { _fun0010_ip = 61; continue _fun0010 }
 57:
                        var2 = _closure2_slot12;
 61:
                        if(!var2) { _fun0010_ip = 71; continue _fun0010 }
 64:
                        var6 = _closure2_slot7;
                        var2 = !var6;
 71:
                        if(!var2) { _fun0010_ip = 78; continue _fun0010 }
 74:
                        var2 = _closure2_slot5;
 78:
                        if(!var2) { _fun0010_ip = 99; continue _fun0010 }
 81:
                        var4 = var4 + var3;
                        var3 = 976;
                        var3 = var5 - var3;
                        var2 = var4 > var3;
 99:
                        if(!var2) { _fun0010_ip = 112; continue _fun0010 }
 102:
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 112:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = var12.bind(var23)(var8, var10);
                var _closure2_slot14 = var8;
                var12 = _closure1_slot3;
                var10 = var12.useMemo;
                var8 = new Array(8);
                var8[0] = var4;
                var8[1] = var22;
                var8[2] = var21;
                var8[3] = var19;
                var8[4] = var16;
                var8[5] = var15;
                var8[6] = var9;
                var8[7] = var1;
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = new Array(0);
                        var3 = _closure2_slot10;
                        var4 = null;
                        if(!(var4 == var3)) { _fun0011_ip = 237; continue _fun0011 }
 20:
                        var3 = _closure2_slot8;
                        var5 = var1.push;
                        if(var3) { _fun0011_ip = 64; continue _fun0011 }
 32:
                        var9 = _closure2_slot3;
                        var3 = new Array(0);
                        var8 = 0;
                        var10 = var3;
                        var6 = arraySpread(var10, var9, var8);
                        var10 = var5;
                        var9 = var3;
                        var8 = var1;
                        var3 = apply(var10, var9, var8);
                        _fun0011_ip = 75; continue _fun0011;
 64:
                        var3 = 'loading_section';
                        var3 = var5.bind(var1)(var3);
 75:
                        var3 = _closure2_slot12;
                        if(var3) { _fun0011_ip = 119; continue _fun0011 }
 82:
                        var5 = var1.push;
                        var3 = 'archived_section';
                        var3 = var5.bind(var1)(var3);
                        var5 = var1.push;
                        var3 = 'missing_permission_archived_threads';
                        var3 = var5.bind(var1)(var3);
                        _fun0011_ip = 308; continue _fun0011;
 119:
                        var3 = _closure2_slot4;
                        if(!(var4 != var3)) { _fun0011_ip = 142; continue _fun0011 }
 127:
                        var3 = _closure2_slot4;
                        var3 = var3.length;
                        var6 = 0;
                        if(!(!(var3 > var6))) { _fun0011_ip = 184; continue _fun0011 }
 142:
                        var3 = _closure2_slot9;
                        var3 = var4 == var3;
                        if(!var3) { _fun0011_ip = 157; continue _fun0011 }
 153:
                        var3 = _closure2_slot7;
 157:
                        if(!var3) { _fun0011_ip = 308; continue _fun0011 }
 163:
                        var4 = var1.push;
                        var3 = 'loading_section';
                        var3 = var4.bind(var1)(var3);
                        _fun0011_ip = 308; continue _fun0011;
 184:
                        var4 = var1.push;
                        var3 = 'archived_section';
                        var3 = var4.bind(var1)(var3);
                        var4 = var1.push;
                        var9 = _closure2_slot4;
                        var3 = new Array(0);
                        var10 = var3;
                        var8 = 0;
                        var5 = arraySpread(var10, var9, var8);
                        var10 = var4;
                        var9 = var3;
                        var8 = var1;
                        var3 = apply(var10, var9, var8);
                        _fun0011_ip = 308; continue _fun0011;
 237:
                        var4 = var1.push;
                        var3 = 'search_section';
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot13;
                        var3 = var1.push;
                        if(var4) { _fun0011_ip = 278; continue _fun0011 }
 265:
                        var4 = 'missing_permission_search';
                        var4 = var3.bind(var1)(var4);
                        _fun0011_ip = 308; continue _fun0011;
 278:
                        var9 = _closure2_slot10;
                        var2 = new Array(0);
                        var8 = 0;
                        var10 = var2;
                        var4 = arraySpread(var10, var9, var8);
                        var10 = var3;
                        var9 = var2;
                        var8 = var1;
                        var2 = apply(var10, var9, var8);
 308:
                        return var1;
                    }
                };
                var15 = var10.bind(var12)(var1, var8);
                var10 = _closure1_slot3;
                var8 = var10.useCallback;
                var1 = null;
                var16 = var1 == var4;
                var12 = undefined;
                if(var16) { _fun0006_ip = 518; continue _fun0006 }
 513:
                var12 = var4.length;
 518:
                var4 = new Array(3);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var3;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.item;
                        var1 = 'archived_section';
                        if(!(var5 !== var1)) { _fun0012_ip = 318; continue _fun0012 }
 21:
                        var1 = 'search_section';
                        if(!(var5 !== var1)) { _fun0012_ip = 227; continue _fun0012 }
 34:
                        var1 = 'loading_section';
                        if(!(var5 !== var1)) { _fun0012_ip = 181; continue _fun0012 }
 47:
                        var1 = 'missing_permission_archived_threads';
                        if(!(var5 !== var1)) { _fun0012_ip = 146; continue _fun0012 }
 57:
                        var1 = 'missing_permission_search';
                        if(!(var5 !== var1)) { _fun0012_ip = 111; continue _fun0012 }
 67:
                        var4 = _closure1_slot17;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 34;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1['threadId'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        _fun0012_ip = 144; continue _fun0012;
 111:
                        var5 = _closure1_slot17;
                        var4 = _closure1_slot28;
                        var3 = {};
                        var2 = _closure2_slot11;
                        var3['channelName'] = var2;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3);
 144:
                        _fun0012_ip = 179; continue _fun0012;
 146:
                        var5 = _closure1_slot17;
                        var4 = _closure1_slot27;
                        var3 = {};
                        var2 = _closure2_slot11;
                        var3['channelName'] = var2;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3);
 179:
                        _fun0012_ip = 225; continue _fun0012;
 181:
                        var5 = _closure1_slot17;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 33;
                        var2 = var4[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var6 = false;
                        var2['fillScreen'] = var6;
                        var1 = var5.bind(var4)(var3, var2);
 225:
                        _fun0012_ip = 316; continue _fun0012;
 227:
                        var5 = _closure1_slot17;
                        var4 = _closure1_slot26;
                        var3 = {};
                        var2 = _closure2_slot10;
                        var8 = null;
                        var6 = var8 == var2;
                        var2 = undefined;
                        var9 = undefined;
                        if(var6) { _fun0012_ip = 269; continue _fun0012 }
 260:
                        var6 = _closure2_slot10;
                        var9 = var6.length;
 269:
                        var10 = var8 != var9;
                        var6 = 0;
                        if(!var10) { _fun0012_ip = 281; continue _fun0012 }
 278:
                        var6 = var9;
 281:
                        var3['numPosts'] = var6;
                        var6 = _closure2_slot1;
                        var8 = var8 != var6;
                        var6 = '';
                        if(!var8) { _fun0012_ip = 305; continue _fun0012 }
 301:
                        var6 = _closure2_slot1;
 305:
                        var3['searchQuery'] = var6;
                        var1 = var5.bind(var2)(var4, var3);
 316:
                        _fun0012_ip = 339; continue _fun0012;
 318:
                        var5 = _closure1_slot17;
                        var4 = _closure1_slot25;
                        var3 = undefined;
                        var2 = {};
                        var1 = var5.bind(var3)(var4, var2);
 339:
                        return var1;
                    }
                };
                var16 = var8.bind(var10)(var3, var4);
                if(!(var1 == var9)) { _fun0006_ip = 840; continue _fun0006 }
 554:
                var4 = _closure1_slot18;
                var3 = _closure1_slot19;
                var1 = {};
                var11 = _closure1_slot17;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 36;
                var8 = var12[var8];
                var10 = var10.bind(var5)(var8);
                var8 = {'absolute': true, 'mix': true};
                var10 = var11.bind(var5)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var12 = _closure1_slot17;
                var11 = _closure1_slot5;
                var10 = {};
                var21 = arg2;
                var10['ref'] = var21;
                var21 = var17.list;
                var17 = new Array(2);
                var17[0] = var21;
                var17[1] = var20;
                var10['style'] = var17;
                var17 = {};
                var20 = 0.01;
                var17['right'] = var20;
                var10['scrollIndicatorInsets'] = var17;
                var17 = {};
                var20 = var19.length;
                var19 = 0;
                if(!(var19 !== var20)) { _fun0006_ip = 720; continue _fun0006 }
 689:
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var20 = 13;
                var20 = var22[var20];
                var20 = var21.bind(var5)(var20);
                var20 = var20.spacing;
                var19 = var20.PX_8;
 720:
                var17['paddingTop'] = var19;
                var19 = var18.bottom;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var18 = 13;
                var18 = var21[var18];
                var18 = var20.bind(var5)(var18);
                var18 = var18.spacing;
                var18 = var18.PX_16;
                var18 = var19 + var18;
                var17['paddingBottom'] = var18;
                var10['contentContainerStyle'] = var17;
                var10['renderItem'] = var16;
                var10['data'] = var15;
                var14 = function onScroll(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 37;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var5 = var6.trackForumScrolled;
                        var4 = {};
                        var7 = _closure2_slot0;
                        var8 = var7.guild_id;
                        var4['guildId'] = var8;
                        var7 = var7.id;
                        var4['channelId'] = var7;
                        var4 = var5.bind(var6)(var4);
                        var4 = _closure2_slot14;
                        var4 = var4.bind(var1)(var3);
                        var5 = _closure2_slot2;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0013_ip = 94; continue _fun0013 }
 85:
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)(var3);
 94:
                        return var1;
                    }
                };
                var10['onScroll'] = var14;
                var10['onEndReached'] = var13;
                var13 = _closure1_slot31;
                var10['onViewableItemsChanged'] = var13;
                var13 = _closure1_slot22;
                var10['viewabilityConfig'] = var13;
                var10 = var12.bind(var5)(var11, var10);
                var8[1] = var10;
                var1['children'] = var8;
                var1 = var4.bind(var5)(var3, var1);
                _fun0006_ip = 908; continue _fun0006;
 840:
                var4 = _closure1_slot17;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 35;
                var2 = var8[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var8 = 92;
                var2['topViewHeight'] = var8;
                var8 = 'Loading';
                var8 = var8 === var9;
                var2['loading'] = var8;
                var7 = var7.name;
                var2['channelName'] = var7;
                var2['tagFilter'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 908:
                return var1;
            }
        };
        var4 = var7.bind(var8)(var4);
        var _closure1_slot23 = var4;
        var4 = function onCreatePostWithoutPermission() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 38;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var8 = 'FORUM_NO_POST_PERMISSION_HELP';
            var2['key'] = var8;
            var10 = _closure1_slot0;
            var5 = 18;
            var8 = var7[var5];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var5 = var7[var5];
            var5 = var10.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.iyzwnJ;
            var5 = var8.bind(var9)(var5);
            var2['content'] = var5;
            var5 = 39;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var2['icon'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot24 = var4;
        var4 = 58;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/forums/native/ForumChannel.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ForumChannel(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = arg1;
                var10 = var2.channel;
                var _closure2_slot0 = var10;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var2 = _closure1_slot21;
                var12 = var2.bind(var4)();
                var2 = _closure1_slot12;
                var11 = var2.bind(var4)();
                var _closure2_slot1 = var11;
                var3 = _closure1_slot11;
                var2 = var10.id;
                var2 = var3.bind(var4)(var2);
                var13 = var2.scrollPosition;
                var _closure2_slot2 = var13;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 20;
                var2 = var6[var5];
                var14 = var3.bind(var4)(var2);
                var9 = var14.useStateFromStores;
                var2 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() {
                    var3 = _closure1_slot10;
                    var2 = var3.canChatInGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var9.bind(var14)(var8, var2);
                var2 = 40;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useCanStartThread;
                var2 = var2.bind(var3)(var10);
                var3 = var10.topic;
                var6 = null;
                var17 = var6 != var3;
                if(!var17) { _fun0014_ip = 200; continue _fun0014 }
 183:
                var3 = var10.topic;
                var9 = var3.length;
                var3 = 0;
                var17 = var3 !== var9;
 200:
                _closure2_slot3 = var17;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var3 = 41;
                var3 = var16[var3];
                var9 = var14.bind(var4)(var3);
                var3 = 42;
                var3 = var16[var3];
                var3 = var14.bind(var4)(var3);
                var3 = var3.FORUM_CHANNEL;
                var3 = var9.bind(var4)(var3);
                var18 = var3.analyticsLocations;
                _closure2_slot4 = var18;
                var9 = _closure1_slot0;
                var3 = 19;
                var3 = var16[var3];
                var19 = var9.bind(var4)(var3);
                var15 = var19.useForumSearchState;
                var3 = {};
                var20 = var10.id;
                var3['channelId'] = var20;
                var3 = var15.bind(var19)(var3);
                var20 = var3.searchQuery;
                _closure2_slot5 = var20;
                var15 = _closure1_slot3;
                var3 = var15.useRef;
                var15 = var3.bind(var15)(var6);
                _closure2_slot6 = var15;
                var3 = 43;
                var3 = var16[var3];
                var21 = var9.bind(var4)(var3);
                var19 = var21.useShowMemberVerificationGate;
                var3 = var10.guild_id;
                var3 = var19.bind(var21)(var3);
                _closure2_slot7 = var3;
                var5 = var16[var5];
                var22 = var9.bind(var4)(var5);
                var21 = var22.useStateFromStores;
                var5 = _closure1_slot9;
                var19 = new Array(1);
                var19[0] = var5;
                var5 = var10.id;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.getThreadSettings;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var9 = var21.bind(var22)(var19, var5, var9);
                _closure2_slot8 = var9;
                var5 = 44;
                var5 = var16[var5];
                var5 = var14.bind(var4)(var5);
                var5 = var5.bind(var4)(var10);
                var16 = _closure1_slot3;
                var14 = var16.useRef;
                var14 = var14.bind(var16)(var6);
                _closure2_slot9 = var14;
                var19 = _closure1_slot3;
                var16 = var19.useEffect;
                var21 = var10.id;
                var14 = new Array(2);
                var14[0] = var21;
                var14[1] = var13;
                var13 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = _closure2_slot9;
                        var1 = var1.current;
                        if(!(var2 !== var1)) { _fun0015_ip = 88; continue _fun0015 }
 25:
                        var2 = _closure2_slot9;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var2['current'] = var1;
                        var1 = _closure2_slot6;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0015_ip = 88; continue _fun0015 }
 59:
                        var2 = var3.scrollToOffset;
                        var1 = {};
                        var4 = _closure2_slot2;
                        var1['offset'] = var4;
                        var4 = false;
                        var1['animated'] = var4;
                        var1 = var2.bind(var3)(var1);
 88:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13 = var16.bind(var19)(var13, var14);
                var19 = _closure1_slot3;
                var16 = var19.useEffect;
                var13 = var10.id;
                var14 = new Array(1);
                var14[0] = var13;
                var13 = function() {
                    var1 = function() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var2 = _closure2_slot0;
                            var3 = var2.id;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0016_ip = 63; continue _fun0016 }
 18:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 45;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.clearForumSearch;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
 63:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                };
                var13 = var16.bind(var19)(var13, var14);
                var16 = _closure1_slot3;
                var14 = var16.useCallback;
                var13 = new Array(4);
                var13[0] = var10;
                var13[1] = var18;
                var13[2] = var20;
                var13[3] = var9;
                var9 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 46;
                        var3 = var1[var6];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.changeThreadSettings;
                        var3 = _closure2_slot0;
                        var4 = var3.id;
                        var3 = {};
                        var9 = false;
                        var3['isPrivate'] = var9;
                        var3 = var7.bind(var8)(var4, var3);
                        var3 = _closure2_slot8;
                        var9 = null;
                        var4 = var9 == var3;
                        var3 = undefined;
                        if(var4) { _fun0017_ip = 82; continue _fun0017 }
 73:
                        var4 = _closure2_slot8;
                        var3 = var4.name;
 82:
                        var3 = var9 != var3;
                        if(!var3) { _fun0017_ip = 150; continue _fun0017 }
 89:
                        var4 = _closure2_slot8;
                        var4 = var9 == var4;
                        var7 = undefined;
                        if(var4) { _fun0017_ip = 144; continue _fun0017 }
 102:
                        var4 = _closure2_slot8;
                        var8 = var4.name;
                        var4 = var9 == var8;
                        var7 = undefined;
                        if(var4) { _fun0017_ip = 144; continue _fun0017 }
 120:
                        var4 = var8.trim;
                        var4 = var4.bind(var8)();
                        var8 = var9 == var4;
                        var7 = undefined;
                        if(var8) { _fun0017_ip = 144; continue _fun0017 }
 139:
                        var7 = var4.length;
 144:
                        var4 = 0;
                        var3 = var4 !== var7;
 150:
                        if(var3) { _fun0017_ip = 254; continue _fun0017 }
 153:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.changeThreadSettings;
                        var3 = _closure2_slot0;
                        var4 = var3.id;
                        var3 = {};
                        var8 = _closure2_slot5;
                        var9 = var9 != var8;
                        var8 = undefined;
                        if(!var9) { _fun0017_ip = 244; continue _fun0017 }
 200:
                        var10 = _closure2_slot5;
                        var9 = var10.trim;
                        var9 = var9.bind(var10)();
                        var10 = var9.length;
                        var9 = 0;
                        var9 = var10 > var9;
                        var8 = undefined;
                        if(!var9) { _fun0017_ip = 244; continue _fun0017 }
 230:
                        var10 = _closure2_slot5;
                        var9 = var10.trim;
                        var8 = var9.bind(var10)();
 244:
                        var3['name'] = var8;
                        var3 = var6.bind(var7)(var4, var3);
 254:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 47;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openCreateForumPostModal;
                        var2 = {};
                        var6 = _closure2_slot0;
                        var7 = var6.guild_id;
                        var2['guildId'] = var7;
                        var6 = var6.id;
                        var2['parentChannelId'] = var6;
                        var6 = arg1;
                        var2['analyticsLocationObject'] = var6;
                        var5 = _closure2_slot4;
                        var2['analyticsLocations'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var9 = var14.bind(var16)(var9, var13);
                _closure2_slot10 = var9;
                var16 = _closure1_slot3;
                var14 = var16.useCallback;
                var13 = new Array(4);
                var13[0] = var10;
                var13[1] = var3;
                var13[2] = var17;
                var13[3] = var9;
                var9 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var5 = function startCreateForumPostFlow() {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                                var2 = _closure2_slot3;
                                if(!var2) { _fun0019_ip = 114; continue _fun0019 }
 10:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 48;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.hasSeen;
                                var3 = _closure2_slot0;
                                var3 = var3.id;
                                var3 = var5.bind(var6)(var3);
                                if(var3) { _fun0019_ip = 114; continue _fun0019 }
 58:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 51;
                                var2 = var5[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.openForumGuidelinesActionSheet;
                                var2 = {};
                                var5 = _closure2_slot0;
                                var2['channel'] = var5;
                                var5 = function onPress() {
                                    var3 = _closure2_slot10;
                                    var2 = {};
                                    var4 = _closure1_slot14;
                                    var4 = var4.GUILD_CHANNEL;
                                    var2['page'] = var4;
                                    var4 = _closure1_slot15;
                                    var4 = var4.FORUM_CHANNEL_GUIDELINES;
                                    var2['section'] = var4;
                                    var1 = _closure1_slot13;
                                    var1 = var1.BUTTON_CTA;
                                    var2['object'] = var1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var2['onPress'] = var5;
                                var2 = var3.bind(var4)(var2);
                                _fun0019_ip = 227; continue _fun0019;
 114:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 49;
                                var2 = var8[var2];
                                var3 = undefined;
                                var6 = var5.bind(var3)(var2);
                                var5 = var6.triggerHapticFeedback;
                                var7 = _closure1_slot1;
                                var2 = 50;
                                var2 = var8[var2];
                                var2 = var7.bind(var3)(var2);
                                var2 = var2.IMPACT_LIGHT;
                                var2 = var5.bind(var6)(var2);
                                var2 = _closure2_slot10;
                                var1 = {};
                                var5 = _closure1_slot14;
                                var5 = var5.GUILD_CHANNEL;
                                var1['page'] = var5;
                                var5 = _closure1_slot15;
                                var5 = var5.FORUM_CHANNEL_FOOTER;
                                var1['section'] = var5;
                                var4 = _closure1_slot13;
                                var4 = var4.BUTTON_CTA;
                                var1['object'] = var4;
                                var1 = var2.bind(var3)(var1);
 227:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 37;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.trackForumCreateNewPostClick;
                        var4 = {};
                        var8 = _closure2_slot0;
                        var9 = var8.guild_id;
                        var4['guildId'] = var9;
                        var8 = var8.id;
                        var4['channelId'] = var8;
                        var4 = var6.bind(var7)(var4);
                        var4 = _closure2_slot7;
                        if(var4) { _fun0018_ip = 85; continue _fun0018 }
 79:
                        var4 = var5.bind(var1)();
                        _fun0018_ip = 126; continue _fun0018;
 85:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 52;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openMemberVerificationModal;
                        var2 = _closure2_slot0;
                        var2 = var2.guild_id;
                        var2 = var3.bind(var4)(var2, var5);
 126:
                        return var1;
                    }
                };
                var16 = var14.bind(var16)(var9, var13);
                var17 = !var8;
                if(var17) { _fun0014_ip = 627; continue _fun0014 }
 615:
                var2 = !var2;
                if(!var2) { _fun0014_ip = 624; continue _fun0014 }
 621:
                var2 = !var3;
 624:
                var17 = var2;
 627:
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 53;
                var2 = var3[var2];
                var8 = var8.bind(var4)(var2);
                var2 = {};
                var13 = true;
                var2['includeKeyboardHeightIOS'] = var13;
                var2 = var8.bind(var4)(var2);
                var18 = var2.insets;
                var9 = _closure1_slot3;
                var8 = var9.useCallback;
                var14 = var10.id;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var11;
                var1 = function(arg1) {
                    var3 = _closure2_slot1;
                    var2 = var3.getState;
                    var4 = var2.bind(var3)();
                    var3 = var4.setScrollPosition;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.contentOffset;
                    var1 = var1.y;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var19 = var8.bind(var9)(var1, var2);
                var2 = _closure1_slot0;
                var1 = 16;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useClientThemesOverride;
                var1 = var12.noHeight;
                var14 = var2.bind(var3)(var1);
                var3 = _closure1_slot18;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var12.background;
                var1['style'] = var8;
                var8 = null;
                if(!var5) { _fun0014_ip = 811; continue _fun0014 }
 764:
                var11 = _closure1_slot17;
                var9 = _closure1_slot0;
                var21 = _closure1_slot2;
                var5 = 54;
                var5 = var21[var5];
                var5 = var9.bind(var4)(var5);
                var9 = var5.OptInChannelBanner;
                var5 = {};
                var5['channel'] = var10;
                var5['topBorder'] = var13;
                var8 = var11.bind(var4)(var9, var5);
 811:
                var5 = new Array(5);
                var5[0] = var8;
                var11 = _closure1_slot18;
                var9 = _closure1_slot4;
                var8 = {};
                var13 = var12.headerRow;
                var8['style'] = var13;
                var22 = _closure1_slot17;
                var21 = _closure1_slot29;
                var13 = {};
                var13['channel'] = var10;
                var21 = var22.bind(var4)(var21, var13);
                var13 = new Array(2);
                var13[0] = var21;
                var21 = var10.availableTags;
                var22 = var21.length;
                var21 = 0;
                var21 = var22 > var21;
                if(!var21) { _fun0014_ip = 907; continue _fun0014 }
 887:
                var24 = _closure1_slot17;
                var23 = _closure1_slot30;
                var22 = {};
                var22['channel'] = var10;
                var21 = var24.bind(var4)(var23, var22);
 907:
                var13[1] = var21;
                var8['children'] = var13;
                var8 = var11.bind(var4)(var9, var8);
                var5[1] = var8;
                var11 = _closure1_slot17;
                var9 = _closure1_slot4;
                var8 = {};
                var21 = var12.headerDivider;
                var13 = new Array(2);
                var13[0] = var21;
                var13[1] = var14;
                var8['style'] = var13;
                var8 = var11.bind(var4)(var9, var8);
                var5[2] = var8;
                var11 = _closure1_slot18;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var12.container;
                var8['style'] = var12;
                var14 = _closure1_slot17;
                var13 = _closure1_slot23;
                var12 = {};
                var12['channel'] = var10;
                var12['insets'] = var18;
                var12['searchQuery'] = var20;
                var12['onScroll'] = var19;
                var12['ref'] = var15;
                var13 = var14.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot17;
                var24 = _closure1_slot0;
                var22 = _closure1_slot2;
                var13 = 55;
                var13 = var22[var13];
                var13 = var24.bind(var4)(var13);
                var14 = var13.FloatingActionButton;
                var13 = {};
                var21 = 18;
                var19 = var22[var21];
                var19 = var24.bind(var4)(var19);
                var23 = var19.intl;
                var20 = var23.string;
                var19 = var22[var21];
                var19 = var24.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.TyAuoa;
                var19 = var20.bind(var23)(var19);
                var13['accessibilityLabel'] = var19;
                var20 = _closure1_slot1;
                var19 = 56;
                var19 = var22[var19];
                var19 = var20.bind(var4)(var19);
                var13['icon'] = var19;
                var13['disabled'] = var17;
                var19 = var18.bottom;
                var18 = 13;
                var18 = var22[var18];
                var18 = var20.bind(var4)(var18);
                var18 = var18.spacing;
                var18 = var18.PX_16;
                var18 = var19 + var18;
                var13['positionBottom'] = var18;
                var13['onPress'] = var16;
                var16 = _closure1_slot24;
                var13['onPressDisabled'] = var16;
                var16 = undefined;
                if(!var17) { _fun0014_ip = 1248; continue _fun0014 }
 1196:
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var21];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.iyzwnJ;
                var16 = var18.bind(var19)(var17);
 1248:
                var13['accessibilityHint'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var8['children'] = var12;
                var8 = var11.bind(var4)(var9, var8);
                var5[3] = var8;
                var8 = var10.guild_id;
                var8 = var6 != var8;
                var6 = null;
                if(!var8) { _fun0014_ip = 1333; continue _fun0014 }
 1291:
                var9 = _closure1_slot17;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 57;
                var7 = var11[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.MemberActionChatInputBannerGuarded;
                var7 = {};
                var7['channel'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 1333:
                var5[4] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();