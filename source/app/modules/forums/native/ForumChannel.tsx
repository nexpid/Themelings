// app/modules/forums/native/ForumChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var6;
        var1 = function ArchivedSection() {
            var1 = _closure1_slot24;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 16;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useClientThemesOverride;
            var7 = var1.bind(var2)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot4;
            var1 = {};
            var9 = var8.section;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot15;
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
            var8 = var8["3+LO1w"];
            var8 = var9.bind(var10)(var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot27 = var1;
        var1 = function SearchSection(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var14 = var1.numPosts;
                var13 = var1.searchQuery;
                var1 = _closure1_slot24;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var3 = _closure1_slot15;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var8.section;
                var1['style'] = var5;
                var7 = _closure1_slot15;
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
                if(!(var8 !== var14)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
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
                var10 = var8.tBz/8b;
                var8 = {};
                var8['numPosts'] = var14;
                var8['query'] = var13;
                var8 = var11.bind(var12)(var10, var8);
                _fun0002_ip = 4; continue _fun0002;
case 2:
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
                var9 = var9.DbgHxi;
                var8 = var10.bind(var11)(var9);
case 4:
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var1 = function ArchivedMissingReadHistoryPermission(arg1) {
            var1 = arg1;
            var12 = var1.channelName;
            var1 = _closure1_slot24;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var8.missingPermissionContainer;
            var1['style'] = var6;
            var7 = _closure1_slot15;
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
        var _closure1_slot29 = var1;
        var1 = function SearchMissingReadHistoryPermission(arg1) {
            var1 = arg1;
            var12 = var1.channelName;
            var1 = _closure1_slot24;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var8.section;
            var1['style'] = var6;
            var7 = _closure1_slot15;
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
            var9 = var8.OWZJdS;
            var8 = {};
            var8['channelName'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot30 = var1;
        var1 = function SortAndViewOptions(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var2 = var2.channel;
                var3 = _closure1_slot24;
                var5 = undefined;
                var18 = var3.bind(var5)();
                var8 = var2.id;
                var _closure2_slot0 = var8;
                var7 = _closure1_slot3;
                var4 = var7.useCallback;
                var3 = new Array(1);
                var3[0] = var8;
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
                var7 = var4.bind(var7)(var1, var3);
                var1 = var2.isMediaChannel;
                var8 = var1.bind(var2)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var2 = var2.bind(var5)(var1);
                var1 = 'SortAndViewOptions';
                var1 = var2.bind(var5)(var1);
                var4 = _closure1_slot15;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                if(var1) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                var1 = 29;
                var1 = var9[var1];
                var1 = var3.bind(var5)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var10 = 'button';
                var1['accessibilityRole'] = var10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var22 = 18;
                var12 = var10[var22];
                var12 = var11.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var10[var22];
                var10 = var11.bind(var5)(var10);
                var11 = var10.t;
                if(var8) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var10 = var11.Iqetyr;
                var10 = var12.bind(var13)(var10);
                _fun0003_ip = 9; continue _fun0003;
case 7:
                var11 = var11.kQN/bi;
                var10 = var12.bind(var13)(var11);
case 9:
                var1['accessibilityLabel'] = var10;
                var10 = _closure1_slot14;
                var1['androidRippleConfig'] = var10;
                var10 = 0.8;
                var1['activeOpacity'] = var10;
                var10 = var18.optionsContainer;
                var1['style'] = var10;
                var1['onPress'] = var7;
                var12 = _closure1_slot16;
                var11 = _closure1_slot4;
                var10 = {};
                var13 = var18.optionsPill;
                var10['style'] = var13;
                var16 = _closure1_slot15;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 28;
                var13 = var19[var13];
                var13 = var15.bind(var5)(var13);
                var14 = var13.ArrowsUpDownIcon;
                var13 = {};
                var17 = 'xs';
                var13['size'] = var17;
                var20 = var18.sortOptionsIcon;
                var13['style'] = var20;
                var14 = var16.bind(var5)(var14, var13);
                var13 = new Array(3);
                var13[0] = var14;
                var16 = _closure1_slot15;
                var14 = 17;
                var14 = var19[var14];
                var14 = var15.bind(var5)(var14);
                var15 = var14.Text;
                var14 = {'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                var18 = var18.sortOptionsText;
                var14['style'] = var18;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var20 = var18[var22];
                var20 = var19.bind(var5)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var18[var22];
                var18 = var19.bind(var5)(var18);
                var19 = var18.t;
                if(var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var18 = var19.xyYt8A;
                var18 = var20.bind(var21)(var18);
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var19 = var19.JxU0wr;
                var18 = var20.bind(var21)(var19);
case 12:
                var14['children'] = var18;
                var14 = var16.bind(var5)(var15, var14);
                var13[1] = var14;
                var16 = _closure1_slot15;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 30;
                var14 = var18[var14];
                var14 = var15.bind(var5)(var14);
                var15 = var14.ChevronSmallDownIcon;
                var14 = {};
                var14['size'] = var17;
                var14 = var16.bind(var5)(var15, var14);
                var13[2] = var14;
                var10['children'] = var13;
                var10 = var12.bind(var5)(var11, var10);
                var1['children'] = var10;
                var1 = var4.bind(var5)(var2, var1);
                _fun0003_ip = 13; continue _fun0003;
case 5:
                var2 = 27;
                var2 = var9[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Button;
                var2 = {};
                var9 = 'secondary';
                var2['variant'] = var9;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 18;
                var10 = var13[var9];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var5)(var9);
                var9 = var9.t;
                if(var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var8 = var9.xyYt8A;
                var8 = var10.bind(var11)(var8);
                _fun0003_ip = 16; continue _fun0003;
case 14:
                var9 = var9.JxU0wr;
                var8 = var10.bind(var11)(var9);
case 16:
                var2['text'] = var8;
                var2['onPress'] = var7;
                var7 = 'sm';
                var2['size'] = var7;
                var8 = _closure1_slot15;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 28;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.ArrowsUpDownIcon;
                var6 = {};
                var9 = 'xxs';
                var6['size'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['icon'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 13:
                return var1;
            }
        };
        var _closure1_slot31 = var1;
        var1 = function TagFilter(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var2 = var2.channel;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot24;
                var5 = undefined;
                var19 = var3.bind(var5)();
                var3 = _closure1_slot10;
                var2 = var2.id;
                var2 = var3.bind(var5)(var2);
                var21 = var2.tagFilter;
                var8 = function handlePress() {
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
                    var3 = 31;
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
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var2 = var2.bind(var5)(var1);
                var1 = 'TagFilter';
                var1 = var2.bind(var5)(var1);
                var4 = _closure1_slot15;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1 = 29;
                var1 = var9[var1];
                var1 = var7.bind(var5)(var1);
                var2 = var1.PressableOpacity;
                var1 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8};
                var18 = 18;
                var3 = var9[var18];
                var3 = var7.bind(var5)(var3);
                var11 = var3.intl;
                var10 = var11.string;
                var3 = var9[var18];
                var3 = var7.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.TdqRTh;
                var3 = var10.bind(var11)(var3);
                var1['accessibilityLabel'] = var3;
                var3 = var19.optionsContainer;
                var1['style'] = var3;
                var1['onPress'] = var8;
                var11 = _closure1_slot16;
                var10 = _closure1_slot4;
                var3 = {};
                var12 = var19.optionsPill;
                var3['style'] = var12;
                var13 = var21.size;
                var12 = 0;
                var13 = var13 > var12;
                if(!var13) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var15 = _closure1_slot15;
                var14 = _closure1_slot4;
                var12 = {};
                var16 = var19.countContainer;
                var12['style'] = var16;
                var20 = _closure1_slot15;
                var17 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 17;
                var16 = var22[var16];
                var16 = var17.bind(var5)(var16);
                var17 = var16.Text;
                var16 = {'variant': 'text-xs/bold', 'color': 'always-white'};
                var22 = var19.countText;
                var16['style'] = var22;
                var21 = var21.size;
                var16['children'] = var21;
                var16 = var20.bind(var5)(var17, var16);
                var12['children'] = var16;
                var13 = var15.bind(var5)(var14, var12);
case 19:
                var12 = new Array(3);
                var12[0] = var13;
                var17 = _closure1_slot15;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 17;
                var13 = var16[var13];
                var13 = var14.bind(var5)(var13);
                var15 = var13.Text;
                var13 = {'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                var19 = var19.sortOptionsText;
                var13['style'] = var19;
                var19 = var16[var18];
                var19 = var14.bind(var5)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var16[var18];
                var18 = var14.bind(var5)(var18);
                var18 = var18.t;
                var18 = var18["112vVE"];
                var18 = var19.bind(var20)(var18);
                var13['children'] = var18;
                var13 = var17.bind(var5)(var15, var13);
                var12[1] = var13;
                var15 = _closure1_slot15;
                var13 = 30;
                var13 = var16[var13];
                var13 = var14.bind(var5)(var13);
                var14 = var13.ChevronSmallDownIcon;
                var13 = {};
                var16 = 'xs';
                var13['size'] = var16;
                var13 = var15.bind(var5)(var14, var13);
                var12[2] = var13;
                var3['children'] = var12;
                var3 = var11.bind(var5)(var10, var3);
                var1['children'] = var3;
                var1 = var4.bind(var5)(var2, var1);
                _fun0004_ip = 21; continue _fun0004;
case 17:
                var2 = 27;
                var2 = var9[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.Button;
                var2 = {};
                var10 = 'secondary';
                var2['variant'] = var10;
                var10 = 18;
                var11 = var9[var10];
                var11 = var7.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var9[var10];
                var10 = var7.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10["112vVE"];
                var10 = var11.bind(var12)(var10);
                var2['text'] = var10;
                var2['onPress'] = var8;
                var8 = 'sm';
                var2['size'] = var8;
                var8 = _closure1_slot15;
                var6 = 32;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.TagIcon;
                var6 = {};
                var9 = 'xxs';
                var6['size'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['icon'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 21:
                return var1;
            }
        };
        var _closure1_slot32 = var1;
        var1 = function getForumItemType(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot23;
                var1 = var3.has;
                var3 = var1.bind(var3)(var2);
                var1 = 'thread';
                if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var1 = var2;
case 22:
                return var1;
            }
        };
        var _closure1_slot33 = var1;
        var1 = function onForumViewableItemsChanged(arg1) {
            var1 = arg1;
            var3 = var1.changed;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var4 = _closure1_slot23;
                    var3 = var4.has;
                    var3 = var3.bind(var4)(var5);
                    if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var7 = var3.bind(var4)(var5);
                    var3 = null;
                    var8 = var3 == var7;
                    var6 = undefined;
                    var4 = undefined;
                    if(var8) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var4 = var7.parent_id;
case 26:
                    if(!(var3 != var4)) { _fun0006_ip = 24; continue _fun0006 }
case 28:
                    var1 = var1.isViewable;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 33;
                    var2 = var7[var2];
                    var3 = var3.bind(var6)(var2);
                    if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var2 = var3.markForumPostItemAsUnseen;
                    var1 = global;
                    var6 = var1.Date;
                    var1 = var6.now;
                    var1 = var1.bind(var6)();
                    var1 = var2.bind(var3)(var4, var5, var1);
                    _fun0006_ip = 24; continue _fun0006;
case 29:
                    var2 = var3.markForumPostItemAsSeen;
                    var1 = global;
                    var6 = var1.Date;
                    var1 = var6.now;
                    var1 = var1.bind(var6)();
                    var1 = var2.bind(var3)(var4, var5, var1);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var _closure1_slot34 = var1;
        var1 = function ForumChannelContent(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var21 = var1.channel;
                var _closure2_slot0 = var21;
                var3 = var1.searchQuery;
                var _closure2_slot1 = var3;
                var12 = var1.insets;
                var2 = _closure1_slot24;
                var4 = undefined;
                var9 = var2.bind(var4)();
                var5 = _closure1_slot10;
                var2 = var21.id;
                var2 = var5.bind(var4)(var2);
                var28 = var2.sortOrder;
                var5 = var2.tagFilter;
                var26 = var2.tagSetting;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 34;
                var2 = var16[var2];
                var11 = var10.bind(var4)(var2);
                var8 = var11.useForumChannelSeenManager;
                var2 = {};
                var13 = var21.guild_id;
                var2['guildId'] = var13;
                var13 = var21.id;
                var2['channelId'] = var13;
                var2 = var8.bind(var11)(var2);
                var2 = function useForumData(arg1, arg2, arg3, arg4) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var17 = arg1;
                        var16 = arg2;
                        var15 = arg3;
                        var14 = arg4;
                        var _closure3_slot0 = var17;
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var3 = 19;
                        var2 = var19[var3];
                        var13 = undefined;
                        var5 = var18.bind(var13)(var2);
                        var4 = var5.useForumActiveThreadIds;
                        var2 = {};
                        var2['channel'] = var17;
                        var2['sortOrder'] = var16;
                        var2['tagFilter'] = var15;
                        var2['tagSetting'] = var14;
                        var6 = true;
                        var2['shouldAutomaticallyAck'] = var6;
                        var10 = var4.bind(var5)(var2);
                        var _closure3_slot1 = var10;
                        var2 = 20;
                        var2 = var19[var2];
                        var6 = var18.bind(var13)(var2);
                        var5 = var6.useStateFromStores;
                        var2 = _closure1_slot6;
                        var4 = new Array(2);
                        var4[0] = var2;
                        var2 = _closure1_slot5;
                        var4[1] = var2;
                        var2 = function() {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var5 = _closure1_slot6;
                                var4 = var5.hasLoaded;
                                var2 = _closure3_slot0;
                                var1 = var2.guild_id;
                                var1 = var4.bind(var5)(var1);
                                var4 = _closure1_slot5;
                                var3 = var4.isLurking;
                                var2 = var2.guild_id;
                                var2 = var3.bind(var4)(var2);
                                var1 = !var1;
                                if(!var1) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                                var1 = !var2;
case 31:
                                return var1;
                            }
                        };
                        var6 = var5.bind(var6)(var4, var2);
                        var _closure3_slot2 = var6;
                        var2 = var19[var3];
                        var5 = var18.bind(var13)(var2);
                        var4 = var5.useForumSearchState;
                        var2 = {};
                        var7 = var17.id;
                        var2['channelId'] = var7;
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.searchResults;
                        var4 = var4.isSearchLoading;
                        var5 = var19[var3];
                        var7 = var18.bind(var13)(var5);
                        var5 = var7.useAutomaticForumSearch;
                        var5 = var5.bind(var7)(var17, var15, var14);
                        var5 = var19[var3];
                        var7 = var18.bind(var13)(var5);
                        var5 = var7.useCanViewArchivedPosts;
                        var12 = var5.bind(var7)(var17);
                        var5 = 21;
                        var5 = var19[var5];
                        var7 = var18.bind(var13)(var5);
                        var5 = var7.useArchivedThreads;
                        var24 = var7;
                        var23 = var17;
                        var22 = var16;
                        var21 = var15;
                        var20 = var14;
                        var5 = var24[var5](var23, var22, var21, var20, var19);
                        var9 = var5.threadIds;
                        var _closure3_slot3 = var9;
                        var8 = var5.canLoadMore;
                        var7 = var5.loadMore;
                        var5 = var5.loading;
                        var3 = var19[var3];
                        var13 = var18.bind(var13)(var3);
                        var3 = var13.useLoadForumUnreadCounts;
                        var24 = var13;
                        var23 = var17;
                        var22 = var16;
                        var21 = var15;
                        var20 = var14;
                        var3 = var24[var3](var23, var22, var21, var20, var19);
                        var3 = null;
                        var3 = var3 == var2;
                        if(!var3) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                        var3 = var12;
case 33:
                        if(!var3) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                        var12 = var6;
                        if(var12) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                        var12 = var5;
case 37:
                        if(var12) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                        var12 = var4;
case 39:
                        var3 = !var12;
case 35:
                        if(!var3) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                        var13 = var10.length;
                        var12 = 0;
                        var3 = var12 === var13;
case 41:
                        if(!var3) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                        var13 = var9.length;
                        var12 = 0;
                        var3 = var12 === var13;
case 43:
                        var13 = _closure1_slot3;
                        var12 = var13.useEffect;
                        var14 = var10.length;
                        var11 = new Array(3);
                        var11[0] = var14;
                        var14 = var9.length;
                        var11[1] = var14;
                        var11[2] = var6;
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
                        var1 = var12.bind(var13)(var1, var11);
                        var1 = {};
                        var1['activeThreadIds'] = var10;
                        var1['archivedThreadIds'] = var9;
                        var1['canLoadMore'] = var8;
                        var1['loadMore'] = var7;
                        var1['activeThreadsLoading'] = var6;
                        var1['archivedThreadsLoading'] = var5;
                        var1['isSearchLoading'] = var4;
                        var1['isEmpty'] = var3;
                        var1['searchResults'] = var2;
                        return var1;
                    }
                };
                var30 = undefined;
                var29 = var21;
                var27 = var5;
                var7 = var30[var2](var29, var28, var27, var26, var25);
                var14 = var7.activeThreadIds;
                var _closure2_slot2 = var14;
                var19 = var7.archivedThreadIds;
                var _closure2_slot3 = var19;
                var24 = var7.canLoadMore;
                var _closure2_slot4 = var24;
                var11 = var7.loadMore;
                var _closure2_slot5 = var11;
                var18 = var7.archivedThreadsLoading;
                var _closure2_slot6 = var18;
                var20 = var7.activeThreadsLoading;
                var _closure2_slot7 = var20;
                var6 = var7.isSearchLoading;
                var _closure2_slot8 = var6;
                var2 = var7.isEmpty;
                var8 = var7.searchResults;
                var _closure2_slot9 = var8;
                var7 = 35;
                var7 = var16[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.bind(var4)(var21);
                var _closure2_slot10 = var7;
                var13 = _closure1_slot0;
                var10 = 19;
                var17 = var16[var10];
                var22 = var13.bind(var4)(var17);
                var17 = var22.useCanViewArchivedPosts;
                var22 = var17.bind(var22)(var21);
                var _closure2_slot11 = var22;
                var10 = var16[var10];
                var17 = var13.bind(var4)(var10);
                var10 = var17.useCanSearchForumPosts;
                var21 = var10.bind(var17)(var21);
                var _closure2_slot12 = var21;
                var10 = 16;
                var10 = var16[var10];
                var13 = var13.bind(var4)(var10);
                var10 = var13.useClientThemesOverride;
                var10 = var10.bind(var13)();
                var23 = _closure1_slot3;
                var17 = var23.useCallback;
                var16 = new Array(5);
                var16[0] = var18;
                var16[1] = var24;
                var16[2] = var22;
                var16[3] = var11;
                var16[4] = var8;
                var13 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot9;
                        var2 = null;
                        var2 = var2 == var3;
                        if(!var2) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                        var2 = _closure2_slot11;
case 45:
                        if(!var2) { _fun0010_ip = 22; continue _fun0010 }
case 47:
                        var3 = _closure2_slot6;
                        var2 = !var3;
case 22:
                        if(!var2) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                        var2 = _closure2_slot4;
case 48:
                        if(!var2) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13 = var17.bind(var23)(var13, var16);
                var23 = _closure1_slot3;
                var17 = var23.useCallback;
                var16 = [976];
                var16[1] = var18;
                var16[2] = var24;
                var16[3] = var22;
                var16[4] = var11;
                var16[5] = var8;
                var11 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.contentOffset;
                        var4 = var2.y;
                        var2 = var1.contentSize;
                        var5 = var2.height;
                        var1 = var1.layoutMeasurement;
                        var3 = var1.height;
                        var6 = _closure2_slot9;
                        var2 = null;
                        var2 = var2 == var6;
                        if(!var2) { _fun0011_ip = 52; continue _fun0011 }
case 27:
                        var2 = _closure2_slot11;
case 52:
                        if(!var2) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                        var6 = _closure2_slot6;
                        var2 = !var6;
case 53:
                        if(!var2) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                        var2 = _closure2_slot4;
case 55:
                        if(!var2) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                        var4 = var4 + var3;
                        var3 = 976;
                        var3 = var5 - var3;
                        var2 = var4 > var3;
case 57:
                        if(!var2) { _fun0011_ip = 59; continue _fun0011 }
case 18:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var17.bind(var23)(var11, var16);
                var _closure2_slot13 = var11;
                var17 = _closure1_slot3;
                var16 = var17.useMemo;
                var11 = new Array(8);
                var11[0] = var8;
                var11[1] = var22;
                var11[2] = var21;
                var11[3] = var14;
                var11[4] = var20;
                var11[5] = var19;
                var11[6] = var18;
                var11[7] = var6;
                var6 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = new Array(0);
                        var3 = _closure2_slot9;
                        var4 = null;
                        if(!(var4 == var3)) { _fun0012_ip = 60; continue _fun0012 }
case 45:
                        var3 = _closure2_slot7;
                        if(var3) { _fun0012_ip = 61; continue _fun0012 }
case 22:
                        var5 = var1.push;
                        var9 = _closure2_slot2;
                        var3 = new Array(0);
                        var6 = 0;
                        var10 = var3;
                        var8 = 0;
                        var7 = arraySpread(var10, var9, var8);
                        var10 = var5;
                        var9 = var3;
                        var8 = var1;
                        var3 = apply(var10, var9, var8);
                        var3 = _closure2_slot11;
                        if(var3) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                        var7 = var1.push;
                        var5 = _closure1_slot18;
                        var5 = var7.bind(var1)(var5);
                        var5 = var1.push;
                        var3 = _closure1_slot21;
                        var3 = var5.bind(var1)(var3);
                        _fun0012_ip = 61; continue _fun0012;
case 62:
                        var3 = _closure2_slot3;
                        var3 = var4 != var3;
                        if(!var3) { _fun0012_ip = 64; continue _fun0012 }
case 6:
                        var4 = _closure2_slot3;
                        var4 = var4.length;
                        var3 = var4 > var6;
case 64:
                        if(!var3) { _fun0012_ip = 61; continue _fun0012 }
case 65:
                        var4 = var1.push;
                        var3 = _closure1_slot18;
                        var3 = var4.bind(var1)(var3);
                        var4 = var1.push;
                        var9 = _closure2_slot3;
                        var3 = new Array(0);
                        var10 = var3;
                        var8 = 0;
                        var5 = arraySpread(var10, var9, var8);
                        var10 = var4;
                        var9 = var3;
                        var8 = var1;
                        var3 = apply(var10, var9, var8);
                        _fun0012_ip = 61; continue _fun0012;
case 60:
                        var5 = var1.push;
                        var4 = _closure1_slot19;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot12;
                        var4 = var1.push;
                        if(var5) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                        var3 = _closure1_slot20;
                        var3 = var4.bind(var1)(var3);
                        _fun0012_ip = 61; continue _fun0012;
case 66:
                        var9 = _closure2_slot9;
                        var3 = new Array(0);
                        var8 = 0;
                        var10 = var3;
                        var5 = arraySpread(var10, var9, var8);
                        var10 = var4;
                        var9 = var3;
                        var8 = var1;
                        var3 = apply(var10, var9, var8);
case 61:
                        var5 = _closure2_slot7;
                        var3 = 0;
                        if(var5) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                        var5 = _closure2_slot6;
                        var3 = 0;
                        if(var5) { _fun0012_ip = 68; continue _fun0012 }
case 70:
                        var2 = _closure2_slot8;
                        var3 = 0;
                        if(!var2) { _fun0012_ip = 71; continue _fun0012 }
case 68:
                        var4 = var1.push;
                        var2 = _closure1_slot22;
                        var2 = var4.bind(var1)(var2);
                        var3 = var3 + 1;
                        var2 = 20;
                        if(var3 < var2) { _fun0012_ip = 68; continue _fun0012 }
case 71:
                        return var1;
                    }
                };
                var16 = var16.bind(var17)(var6, var11);
                var17 = _closure1_slot3;
                var11 = var17.useCallback;
                var6 = null;
                var19 = var6 == var8;
                var18 = undefined;
                if(var19) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                var18 = var8.length;
case 72:
                var8 = new Array(3);
                var8[0] = var18;
                var8[1] = var3;
                var8[2] = var7;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var6 = var1.item;
                        var1 = _closure1_slot18;
                        if(!(var6 !== var1)) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                        var1 = _closure1_slot19;
                        if(!(var6 !== var1)) { _fun0013_ip = 76; continue _fun0013 }
case 49:
                        var1 = _closure1_slot22;
                        if(!(var6 !== var1)) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                        var1 = _closure1_slot21;
                        if(!(var6 !== var1)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                        var1 = _closure1_slot20;
                        if(!(var6 !== var1)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                        var5 = _closure1_slot15;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 37;
                        var1 = var4[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = {};
                        var1['threadId'] = var6;
                        var1 = var5.bind(var4)(var3, var1);
                        _fun0013_ip = 83; continue _fun0013;
case 81:
                        var6 = _closure1_slot15;
                        var5 = _closure1_slot30;
                        var4 = {};
                        var3 = _closure2_slot10;
                        var4['channelName'] = var3;
                        var3 = undefined;
                        var1 = var6.bind(var3)(var5, var4);
case 83:
                        _fun0013_ip = 84; continue _fun0013;
case 79:
                        var6 = _closure1_slot15;
                        var5 = _closure1_slot29;
                        var4 = {};
                        var3 = _closure2_slot10;
                        var4['channelName'] = var3;
                        var3 = undefined;
                        var1 = var6.bind(var3)(var5, var4);
case 84:
                        _fun0013_ip = 85; continue _fun0013;
case 77:
                        var6 = _closure1_slot15;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 36;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = {};
                        var1 = var6.bind(var5)(var4, var3);
case 85:
                        _fun0013_ip = 86; continue _fun0013;
case 76:
                        var6 = _closure1_slot15;
                        var5 = _closure1_slot28;
                        var4 = {};
                        var3 = _closure2_slot9;
                        var9 = null;
                        var7 = var9 == var3;
                        var3 = undefined;
                        var10 = undefined;
                        if(var7) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                        var7 = _closure2_slot9;
                        var10 = var7.length;
case 87:
                        var11 = var9 != var10;
                        var7 = 0;
                        if(!var11) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                        var7 = var10;
case 89:
                        var4['numPosts'] = var7;
                        var7 = _closure2_slot1;
                        var9 = var9 != var7;
                        var7 = '';
                        if(!var9) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                        var7 = _closure2_slot1;
case 91:
                        var4['searchQuery'] = var7;
                        var1 = var6.bind(var3)(var5, var4);
case 86:
                        _fun0013_ip = 93; continue _fun0013;
case 74:
                        var5 = _closure1_slot15;
                        var4 = _closure1_slot27;
                        var3 = undefined;
                        var2 = {};
                        var1 = var5.bind(var3)(var4, var2);
case 93:
                        return var1;
                    }
                };
                var17 = var11.bind(var17)(var3, var8);
                var3 = _closure1_slot15;
                if(var2) { _fun0007_ip = 94; continue _fun0007 }
case 95:
                var8 = _closure1_slot4;
                var2 = {};
                var11 = var9.list;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var2['style'] = var9;
                var11 = _closure1_slot15;
                var10 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 39;
                var9 = var18[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.FlashList;
                var9 = {};
                var18 = {};
                var19 = var14.length;
                var14 = 0;
                if(!(var14 !== var19)) { _fun0007_ip = 96; continue _fun0007 }
case 97:
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 13;
                var19 = var21[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.spacing;
                var14 = var19.PX_8;
case 96:
                var18['paddingTop'] = var14;
                var20 = var12.bottom;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var19 = 13;
                var19 = var14[var19];
                var19 = var12.bind(var4)(var19);
                var19 = var19.spacing;
                var19 = var19.PX_16;
                var19 = var20 + var19;
                var18['paddingBottom'] = var19;
                var9['contentContainerStyle'] = var18;
                var18 = 122;
                var9['estimatedItemSize'] = var18;
                var18 = _closure1_slot33;
                var9['getItemType'] = var18;
                var9['renderItem'] = var17;
                var9['data'] = var16;
                var15 = function onScroll(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackForumScrolled;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.guild_id;
                    var3['guildId'] = var7;
                    var6 = var6.id;
                    var3['channelId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot13;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var9['onScroll'] = var15;
                var9['onEndReached'] = var13;
                var13 = _closure1_slot34;
                var9['onViewableItemsChanged'] = var13;
                var13 = _closure1_slot25;
                var9['viewabilityConfig'] = var13;
                var9 = var11.bind(var4)(var10, var9);
                var2['children'] = var9;
                var11 = var3.bind(var4)(var8, var2);
                var9 = _closure1_slot16;
                var8 = _closure1_slot17;
                var2 = {};
                var13 = _closure1_slot15;
                var10 = 41;
                var10 = var14[var10];
                var12 = var12.bind(var4)(var10);
                var10 = {'absolute': true, 'mix': true};
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var2['children'] = var10;
                var2 = var9.bind(var4)(var8, var2);
                return var2;
case 94:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 38;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = 92;
                var1['topViewHeight'] = var8;
                var8 = var6 != var7;
                var6 = '';
                if(!var8) { _fun0007_ip = 98; continue _fun0007 }
case 99:
                var6 = var7;
case 98:
                var1['channelName'] = var6;
                var1['tagFilter'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot35 = var1;
        var4 = global;
        var9 = var4.Object;
        var8 = var9.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var7);
        var11 = 0;
        var8 = var6[var11];
        var7 = metroImportAll;
        var1 = undefined;
        var7 = var7.bind(var1)(var8);
        var _closure1_slot3 = var7;
        var10 = 1;
        var7 = var6[var10];
        var7 = var5.bind(var1)(var7);
        var7 = var7.View;
        var _closure1_slot4 = var7;
        var7 = 2;
        var7 = var6[var7];
        var7 = var12.bind(var1)(var7);
        var _closure1_slot5 = var7;
        var7 = 3;
        var7 = var6[var7];
        var7 = var12.bind(var1)(var7);
        var _closure1_slot6 = var7;
        var13 = 4;
        var7 = var6[var13];
        var7 = var12.bind(var1)(var7);
        var _closure1_slot7 = var7;
        var7 = 5;
        var7 = var6[var7];
        var7 = var12.bind(var1)(var7);
        var _closure1_slot8 = var7;
        var7 = 6;
        var7 = var6[var7];
        var7 = var12.bind(var1)(var7);
        var _closure1_slot9 = var7;
        var7 = 7;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.useForumChannelStore;
        var _closure1_slot10 = var7;
        var7 = 8;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var8 = var7.AnalyticsObjects;
        var _closure1_slot11 = var8;
        var8 = var7.AnalyticsPages;
        var _closure1_slot12 = var8;
        var7 = var7.AnalyticsSections;
        var _closure1_slot13 = var7;
        var7 = 9;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.ANDROID_FOREGROUND_RIPPLE;
        var _closure1_slot14 = var7;
        var7 = 10;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var14 = var7.Fonts;
        var7 = 11;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var8 = var7.jsx;
        var _closure1_slot15 = var8;
        var8 = var7.jsxs;
        var _closure1_slot16 = var8;
        var7 = var7.Fragment;
        var _closure1_slot17 = var7;
        var17 = 'archived_section';
        var _closure1_slot18 = var17;
        var16 = 'search_section';
        var _closure1_slot19 = var16;
        var15 = 'missing_permission_search';
        var _closure1_slot20 = var15;
        var9 = 'missing_permission_archived_threads';
        var _closure1_slot21 = var9;
        var7 = 'loading_section';
        var _closure1_slot22 = var7;
        var8 = var4.Set;
        var4 = new Array(5);
        var4[0] = var17;
        var4[1] = var16;
        var4[2] = var15;
        var4[3] = var9;
        var4[4] = var7;
        var7 = var8.prototype;
        var7 = Object.create(var7, {constructor: {value: var8}});
        var24 = var7;
        var23 = var4;
        var4 = new var24[var8](var23, var22);
        var4 = var4 instanceof Object ? var4 : var7;
        var _closure1_slot23 = var4;
        var17 = 12;
        var4 = var6[var17];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var9['flex'] = var10;
        var10 = 13;
        var15 = var6[var10];
        var15 = var12.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_BASE_LOWER;
        var9['backgroundColor'] = var15;
        var4['background'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'paddingHorizontal': 12, 'paddingVertical': 8};
        var4['headerRow'] = var9;
        var9 = {'backgroundColor': null, 'width': '100%', 'height': 1};
        var15 = var6[var10];
        var15 = var12.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BORDER_SUBTLE;
        var9['backgroundColor'] = var15;
        var4['headerDivider'] = var9;
        var9 = {'flex': 1, 'alignSelf': 'stretch', 'alignItems': 'center', 'position': 'relative'};
        var4['container'] = var9;
        var9 = {};
        var9['height'] = var11;
        var4['noHeight'] = var9;
        var9 = {'flex': 1, 'paddingTop': 8, 'paddingHorizontal': 12, 'alignSelf': 'stretch', 'marginBottom': 0};
        var4['list'] = var9;
        var9 = {'alignItems': 'flex-start', 'justifyContent': 'flex-end'};
        var4['section'] = var9;
        var9 = {'marginTop': 12, 'paddingStart': 4};
        var11 = 14;
        var15 = var6[var11];
        var19 = var12.bind(var1)(var15);
        var18 = var14.PRIMARY_BOLD;
        var15 = var6[var10];
        var15 = var12.bind(var1)(var15);
        var15 = var15.colors;
        var22 = var15.TEXT_MUTED;
        var20 = {'marginBottom': 12, 'uppercase': true};
        var24 = undefined;
        var23 = var18;
        var21 = var17;
        var22 = var24[var19](var23, var22, var21, var20, var19);
        var23 = var9;
        var15 = copyDataProperties(var23, var22);
        var4['divider'] = var9;
        var9 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'height': 48};
        var15 = var6[var10];
        var15 = var12.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_BASE_LOWEST;
        var9['backgroundColor'] = var15;
        var15 = var6[var10];
        var15 = var12.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.xs;
        var9['borderRadius'] = var15;
        var4['missingPermissionContainer'] = var9;
        var9 = {};
        var15 = var6[var11];
        var16 = var12.bind(var1)(var15);
        var15 = var14.PRIMARY_NORMAL;
        var14 = var6[var10];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.TEXT_MUTED;
        var22 = var16.bind(var1)(var15, var14, var17);
        var23 = var9;
        var14 = copyDataProperties(var23, var22);
        var4['missingPermissionText'] = var9;
        var9 = {};
        var14 = 'hidden';
        var9['overflow'] = var14;
        var14 = var6[var10];
        var14 = var12.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.xl;
        var9['borderRadius'] = var14;
        var4['optionsContainer'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 8, 'height': 32};
        var14 = var6[var10];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BACKGROUND_BASE_LOWEST;
        var9['backgroundColor'] = var14;
        var4['optionsPill'] = var9;
        var9 = {};
        var14 = var6[var10];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.INTERACTIVE_TEXT_DEFAULT;
        var9['color'] = var14;
        var9['marginLeft'] = var13;
        var4['sortOptionsIcon'] = var9;
        var9 = {};
        var9['marginHorizontal'] = var13;
        var4['sortOptionsText'] = var9;
        var9 = {'backgroundColor': null, 'borderRadius': 20, 'marginRight': 4, 'minWidth': 20, 'height': 20, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
        var10 = var6[var10];
        var10 = var12.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.BACKGROUND_BRAND;
        var9['backgroundColor'] = var10;
        var4['countContainer'] = var9;
        var9 = {};
        var10 = 15;
        var10 = var6[var10];
        var12 = var5.bind(var1)(var10);
        var10 = var12.isAndroid;
        var12 = var10.bind(var12)();
        var10 = undefined;
        if(!var12) { _fun0001_ip = 100; continue _fun0001 }
case 101:
        var10 = var11;
case 100:
        var9['lineHeight'] = var10;
        var4['countText'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot24 = var4;
        var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 100};
        var _closure1_slot25 = var4;
        var4 = function onCreatePostWithoutPermission() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 42;
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
            var5 = var5.iyzwnD;
            var5 = var8.bind(var9)(var5);
            var2['content'] = var5;
            var5 = 43;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var2['icon'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot26 = var4;
        var4 = 62;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/forums/native/ForumChannel.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ForumChannel(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var10 = var1.channel;
                var _closure2_slot0 = var10;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var1 = _closure1_slot24;
                var15 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 20;
                var1 = var6[var5];
                var11 = var2.bind(var4)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.canChatInGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var9.bind(var11)(var3, var1);
                var1 = 44;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useCanStartThread;
                var1 = var1.bind(var2)(var10);
                var2 = var10.topic;
                var6 = null;
                var14 = var6 != var2;
                if(!var14) { _fun0014_ip = 102; continue _fun0014 }
case 103:
                var2 = var10.topic;
                var9 = var2.length;
                var2 = 0;
                var14 = var2 !== var9;
case 102:
                _closure2_slot1 = var14;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 45;
                var2 = var12[var2];
                var9 = var11.bind(var4)(var2);
                var2 = 46;
                var2 = var12[var2];
                var2 = var11.bind(var4)(var2);
                var2 = var2.FORUM_CHANNEL;
                var2 = var9.bind(var4)(var2);
                var16 = var2.analyticsLocations;
                _closure2_slot2 = var16;
                var9 = _closure1_slot0;
                var2 = 19;
                var2 = var12[var2];
                var17 = var9.bind(var4)(var2);
                var13 = var17.useForumSearchState;
                var2 = {};
                var18 = var10.id;
                var2['channelId'] = var18;
                var2 = var13.bind(var17)(var2);
                var18 = var2.searchQuery;
                _closure2_slot3 = var18;
                var2 = 47;
                var2 = var12[var2];
                var17 = var9.bind(var4)(var2);
                var13 = var17.useShowMemberVerificationGate;
                var2 = var10.guild_id;
                var2 = var13.bind(var17)(var2);
                _closure2_slot4 = var2;
                var5 = var12[var5];
                var19 = var9.bind(var4)(var5);
                var17 = var19.useStateFromStores;
                var5 = _closure1_slot8;
                var13 = new Array(1);
                var13[0] = var5;
                var5 = var10.id;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() {
                    var3 = _closure1_slot8;
                    var2 = var3.getThreadSettings;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var9 = var17.bind(var19)(var13, var5, var9);
                _closure2_slot5 = var9;
                var5 = 48;
                var5 = var12[var5];
                var5 = var11.bind(var4)(var5);
                var5 = var5.bind(var4)(var10);
                var17 = _closure1_slot3;
                var13 = var17.useEffect;
                var11 = var10.id;
                var12 = new Array(1);
                var12[0] = var11;
                var11 = function() {
                    var1 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var2 = _closure2_slot0;
                            var3 = var2.id;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0015_ip = 104; continue _fun0015 }
case 105:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 49;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.clearForumSearch;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
case 104:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                };
                var11 = var13.bind(var17)(var11, var12);
                var13 = _closure1_slot3;
                var12 = var13.useCallback;
                var11 = new Array(4);
                var11[0] = var10;
                var11[1] = var16;
                var11[2] = var18;
                var11[3] = var9;
                var9 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 50;
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
                        var3 = _closure2_slot5;
                        var9 = null;
                        var4 = var9 == var3;
                        var3 = undefined;
                        if(var4) { _fun0016_ip = 58; continue _fun0016 }
case 106:
                        var4 = _closure2_slot5;
                        var3 = var4.name;
case 58:
                        var3 = var9 != var3;
                        if(!var3) { _fun0016_ip = 107; continue _fun0016 }
case 108:
                        var4 = _closure2_slot5;
                        var4 = var9 == var4;
                        var7 = undefined;
                        if(var4) { _fun0016_ip = 109; continue _fun0016 }
case 110:
                        var4 = _closure2_slot5;
                        var8 = var4.name;
                        var4 = var9 == var8;
                        var7 = undefined;
                        if(var4) { _fun0016_ip = 109; continue _fun0016 }
case 111:
                        var4 = var8.trim;
                        var4 = var4.bind(var8)();
                        var8 = var9 == var4;
                        var7 = undefined;
                        if(var8) { _fun0016_ip = 109; continue _fun0016 }
case 103:
                        var7 = var4.length;
case 109:
                        var4 = 0;
                        var3 = var4 !== var7;
case 107:
                        if(var3) { _fun0016_ip = 112; continue _fun0016 }
case 113:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.changeThreadSettings;
                        var3 = _closure2_slot0;
                        var4 = var3.id;
                        var3 = {};
                        var8 = _closure2_slot3;
                        var9 = var9 != var8;
                        var8 = undefined;
                        if(!var9) { _fun0016_ip = 114; continue _fun0016 }
case 115:
                        var10 = _closure2_slot3;
                        var9 = var10.trim;
                        var9 = var9.bind(var10)();
                        var10 = var9.length;
                        var9 = 0;
                        var9 = var10 > var9;
                        var8 = undefined;
                        if(!var9) { _fun0016_ip = 114; continue _fun0016 }
case 116:
                        var10 = _closure2_slot3;
                        var9 = var10.trim;
                        var8 = var9.bind(var10)();
case 114:
                        var3['name'] = var8;
                        var3 = var6.bind(var7)(var4, var3);
case 112:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 51;
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
                        var5 = _closure2_slot2;
                        var2['analyticsLocations'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var13 = var12.bind(var13)(var9, var11);
                _closure2_slot6 = var13;
                var12 = _closure1_slot3;
                var11 = var12.useCallback;
                var9 = new Array(4);
                var9[0] = var10;
                var9[1] = var2;
                var9[2] = var14;
                var9[3] = var13;
                var8 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var5 = function startCreateForumPostFlow() {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                var2 = _closure2_slot1;
                                if(!var2) { _fun0018_ip = 117; continue _fun0018 }
case 118:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 52;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.hasSeen;
                                var3 = _closure2_slot0;
                                var3 = var3.id;
                                var3 = var5.bind(var6)(var3);
                                if(var3) { _fun0018_ip = 117; continue _fun0018 }
case 27:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 55;
                                var2 = var5[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.openForumGuidelinesActionSheet;
                                var2 = {};
                                var5 = _closure2_slot0;
                                var2['channel'] = var5;
                                var5 = function onPress() {
                                    var3 = _closure2_slot6;
                                    var2 = {};
                                    var4 = _closure1_slot12;
                                    var4 = var4.GUILD_CHANNEL;
                                    var2['page'] = var4;
                                    var4 = _closure1_slot13;
                                    var4 = var4.FORUM_CHANNEL_GUIDELINES;
                                    var2['section'] = var4;
                                    var1 = _closure1_slot11;
                                    var1 = var1.BUTTON_CTA;
                                    var2['object'] = var1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var2['onPress'] = var5;
                                var2 = var3.bind(var4)(var2);
                                _fun0018_ip = 119; continue _fun0018;
case 117:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 53;
                                var2 = var8[var2];
                                var3 = undefined;
                                var6 = var5.bind(var3)(var2);
                                var5 = var6.triggerHapticFeedback;
                                var7 = _closure1_slot1;
                                var2 = 54;
                                var2 = var8[var2];
                                var2 = var7.bind(var3)(var2);
                                var2 = var2.IMPACT_LIGHT;
                                var2 = var5.bind(var6)(var2);
                                var2 = _closure2_slot6;
                                var1 = {};
                                var5 = _closure1_slot12;
                                var5 = var5.GUILD_CHANNEL;
                                var1['page'] = var5;
                                var5 = _closure1_slot13;
                                var5 = var5.FORUM_CHANNEL_FOOTER;
                                var1['section'] = var5;
                                var4 = _closure1_slot11;
                                var4 = var4.BUTTON_CTA;
                                var1['object'] = var4;
                                var1 = var2.bind(var3)(var1);
case 119:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 40;
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
                        var4 = _closure2_slot4;
                        if(var4) { _fun0017_ip = 120; continue _fun0017 }
case 55:
                        var4 = var5.bind(var1)();
                        _fun0017_ip = 121; continue _fun0017;
case 120:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 56;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openMemberVerificationModal;
                        var2 = _closure2_slot0;
                        var2 = var2.guild_id;
                        var2 = var3.bind(var4)(var2, var5);
case 121:
                        return var1;
                    }
                };
                var12 = var11.bind(var12)(var8, var9);
                var13 = !var3;
                if(var13) { _fun0014_ip = 122; continue _fun0014 }
case 123:
                var1 = !var1;
                if(!var1) { _fun0014_ip = 124; continue _fun0014 }
case 125:
                var1 = !var2;
case 124:
                var13 = var1;
case 122:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 57;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var16 = true;
                var1['includeKeyboardHeight'] = var16;
                var1 = var2.bind(var4)(var1);
                var14 = var1.insets;
                var2 = _closure1_slot0;
                var1 = 16;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useClientThemesOverride;
                var1 = var15.noHeight;
                var17 = var2.bind(var3)(var1);
                var3 = _closure1_slot16;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var15.background;
                var1['style'] = var8;
                var8 = null;
                if(!var5) { _fun0014_ip = 126; continue _fun0014 }
case 127:
                var11 = _closure1_slot15;
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var5 = 58;
                var5 = var19[var5];
                var5 = var9.bind(var4)(var5);
                var9 = var5.OptInChannelBanner;
                var5 = {};
                var5['channel'] = var10;
                var5['topBorder'] = var16;
                var8 = var11.bind(var4)(var9, var5);
case 126:
                var5 = new Array(6);
                var5[0] = var8;
                var11 = _closure1_slot16;
                var9 = _closure1_slot4;
                var8 = {};
                var16 = var15.headerRow;
                var8['style'] = var16;
                var20 = _closure1_slot15;
                var19 = _closure1_slot31;
                var16 = {};
                var16['channel'] = var10;
                var19 = var20.bind(var4)(var19, var16);
                var16 = new Array(2);
                var16[0] = var19;
                var19 = var10.availableTags;
                var20 = var19.length;
                var19 = 0;
                var19 = var20 > var19;
                if(!var19) { _fun0014_ip = 128; continue _fun0014 }
case 129:
                var22 = _closure1_slot15;
                var21 = _closure1_slot32;
                var20 = {};
                var20['channel'] = var10;
                var19 = var22.bind(var4)(var21, var20);
case 128:
                var16[1] = var19;
                var8['children'] = var16;
                var8 = var11.bind(var4)(var9, var8);
                var5[1] = var8;
                var11 = _closure1_slot15;
                var9 = _closure1_slot4;
                var8 = {};
                var19 = var15.headerDivider;
                var16 = new Array(2);
                var16[0] = var19;
                var16[1] = var17;
                var8['style'] = var16;
                var8 = var11.bind(var4)(var9, var8);
                var5[2] = var8;
                var11 = _closure1_slot15;
                var9 = _closure1_slot4;
                var8 = {};
                var15 = var15.container;
                var8['style'] = var15;
                var17 = _closure1_slot15;
                var16 = _closure1_slot35;
                var15 = {};
                var15['channel'] = var10;
                var15['insets'] = var14;
                var15['searchQuery'] = var18;
                var15 = var17.bind(var4)(var16, var15);
                var8['children'] = var15;
                var8 = var11.bind(var4)(var9, var8);
                var5[3] = var8;
                var11 = _closure1_slot15;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 59;
                var8 = var18[var8];
                var8 = var20.bind(var4)(var8);
                var9 = var8.FloatingActionButton;
                var8 = {};
                var17 = 18;
                var15 = var18[var17];
                var15 = var20.bind(var4)(var15);
                var19 = var15.intl;
                var16 = var19.string;
                var15 = var18[var17];
                var15 = var20.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.TyAuoT;
                var15 = var16.bind(var19)(var15);
                var8['accessibilityLabel'] = var15;
                var16 = _closure1_slot1;
                var15 = 60;
                var15 = var18[var15];
                var15 = var16.bind(var4)(var15);
                var8['icon'] = var15;
                var8['disabled'] = var13;
                var15 = var14.bottom;
                var14 = 13;
                var14 = var18[var14];
                var14 = var16.bind(var4)(var14);
                var14 = var14.spacing;
                var14 = var14.PX_16;
                var14 = var15 + var14;
                var8['positionBottom'] = var14;
                var8['onPress'] = var12;
                var12 = _closure1_slot26;
                var8['onPressDisabled'] = var12;
                var12 = undefined;
                if(!var13) { _fun0014_ip = 130; continue _fun0014 }
case 131:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var17];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.iyzwnD;
                var12 = var14.bind(var15)(var13);
case 130:
                var8['accessibilityHint'] = var12;
                var8 = var11.bind(var4)(var9, var8);
                var5[4] = var8;
                var8 = var10.guild_id;
                var8 = var6 != var8;
                var6 = null;
                if(!var8) { _fun0014_ip = 132; continue _fun0014 }
case 133:
                var9 = _closure1_slot15;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 61;
                var7 = var11[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.MemberActionChatInputBannerGuarded;
                var7 = {};
                var7['channel'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 132:
                var5[5] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();