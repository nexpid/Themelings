// app/modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var7;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.Fragment;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexShrink': 0, 'flexGrow': 0};
    var4['guildIcon'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['subLabel'] = var10;
    var10 = {'width': 12, 'height': 12, 'marginRight': 2};
    var4['subLabelIcon'] = var10;
    var10 = {};
    var12 = 11;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var10['marginHorizontal'] = var12;
    var4['subLabelSeparator'] = var10;
    var10 = {};
    var10['flexShrink'] = var11;
    var4['threadName'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function ChannelRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var22 = var11.channel;
            var _closure2_slot0 = var22;
            var3 = var11.mode;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 38; continue _fun0001 }
 25:
            var1 = _closure1_slot10;
            var3 = var1.NONE;
 38:
            var7 = var11.selected;
            if(!(var7 === var5)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var7 = false;
 50:
            var13 = var11.disabled;
            if(!(var13 === var5)) { _fun0001_ip = 61; continue _fun0001 }
 59:
            var13 = false;
 61:
            var _closure2_slot1 = var13;
            var10 = var11.onPress;
            var _closure2_slot2 = var10;
            var9 = var11.onLongPress;
            var _closure2_slot3 = var9;
            var16 = var11.trailing;
            var _closure2_slot4 = var16;
            var4 = var11.subLabel;
            var _closure2_slot5 = var4;
            var8 = var11.label;
            var _closure2_slot6 = var8;
            var2 = {'channel': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'onPress': 0, 'onLongPress': 0, 'trailing': 0, 'subLabel': 0, 'label': 0};
            var20 = null;
            var27 = var2;
            var26 = null;
            var1 = silentSetPrototypeOf(var27, var26);
            var27 = {};
            var26 = var11;
            var25 = var2;
            var1 = copyDataProperties(var27, var26, var25);
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var11 = _closure1_slot15;
            var17 = var11.bind(var5)();
            _closure2_slot7 = var17;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 12;
            var15 = var14[var11];
            var21 = var12.bind(var5)(var15);
            var19 = var21.useStateFromStores;
            var15 = _closure1_slot6;
            var18 = new Array(1);
            var18[0] = var15;
            var15 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var19.bind(var21)(var18, var15);
            _closure2_slot8 = var21;
            var18 = _closure1_slot1;
            var15 = 13;
            var15 = var14[var15];
            var15 = var18.bind(var5)(var15);
            var23 = var15.bind(var5)(var22);
            _closure2_slot9 = var23;
            var15 = var14[var11];
            var24 = var12.bind(var5)(var15);
            var19 = var24.useStateFromStores;
            var15 = _closure1_slot5;
            var18 = new Array(3);
            var18[0] = var15;
            var15 = _closure1_slot9;
            var18[1] = var15;
            var15 = _closure1_slot8;
            var18[2] = var15;
            var15 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 == var7;
                    if(var3) { _fun0002_ip = 87; continue _fun0002 }
 39:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.computeChannelName;
                    var10 = _closure1_slot9;
                    var9 = _closure1_slot8;
                    var8 = false;
                    var12 = var6;
                    var11 = var7;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
 87:
                    return var1;
                }
            };
            var18 = var19.bind(var24)(var18, var15);
            _closure2_slot10 = var18;
            var11 = var14[var11];
            var15 = var12.bind(var5)(var11);
            var14 = var15.useStateFromStores;
            var11 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var4 = _closure1_slot7;
                var3 = var4.lastMessageTimestamp;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot11;
                var1 = var1.CHANNEL;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var14.bind(var15)(var12, var11);
            _closure2_slot11 = var19;
            var14 = _closure1_slot3;
            var12 = var14.useCallback;
            var11 = new Array(2);
            var11[0] = var22;
            var11[1] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 28; continue _fun0003 }
 13:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var12.bind(var14)(var10, var11);
            var12 = var14.useCallback;
            var10 = new Array(2);
            var10[0] = var22;
            var10[1] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 30; continue _fun0004 }
 13:
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0004_ip = 75; continue _fun0004;
 30:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var12.bind(var14)(var9, var10);
            var15 = var14.useMemo;
            var12 = new Array(3);
            var12[0] = var22;
            var12[1] = var21;
            var9 = var17.guildIcon;
            var12[2] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0005_ip = 123; continue _fun0005 }
 16:
                    var5 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 15;
                    var2 = var8[var6];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.GuildIconWithChannelType;
                    var2 = {};
                    var10 = '';
                    var2['aria-label'] = var10;
                    var10 = _closure2_slot7;
                    var10 = var10.guildIcon;
                    var2['style'] = var10;
                    var10 = _closure2_slot8;
                    var2['guild'] = var10;
                    var9 = _closure2_slot0;
                    var2['channel'] = var9;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.GuildIconWithChannelTypeSizes;
                    var6 = var6.SMALL_32;
                    var2['size'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 123:
                    return var1;
                }
            };
            var12 = var15.bind(var14)(var9, var12);
            var15 = var14.useMemo;
            var9 = new Array(2);
            var9[0] = var23;
            var9[1] = var8;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    if(!(var1 === var3)) { _fun0006_ip = 19; continue _fun0006 }
 13:
                    var1 = _closure2_slot9;
                    _fun0006_ip = 23; continue _fun0006;
 19:
                    var1 = _closure2_slot6;
 23:
                    return var1;
                }
            };
            var15 = var15.bind(var14)(var8, var9);
            var9 = var14.useMemo;
            var8 = new Array(9);
            var8[0] = var22;
            var22 = var20 == var21;
            var20 = undefined;
            if(var22) { _fun0001_ip = 527; continue _fun0001 }
 522:
            var20 = var21.name;
 527:
            var8[1] = var20;
            var8[2] = var19;
            var8[3] = var18;
            var18 = var17.subLabel;
            var8[4] = var18;
            var18 = var17.subLabelIcon;
            var8[5] = var18;
            var18 = var17.subLabelSeparator;
            var8[6] = var18;
            var17 = var17.threadName;
            var8[7] = var17;
            var8[8] = var4;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot5;
                    var5 = undefined;
                    if(!(var5 === var2)) { _fun0007_ip = 512; continue _fun0007 }
 16:
                    var3 = _closure2_slot0;
                    var2 = var3.isThread;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0007_ip = 76; continue _fun0007 }
 33:
                    var3 = _closure2_slot0;
                    var2 = var3.isForumPost;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0007_ip = 76; continue _fun0007 }
 50:
                    var3 = _closure2_slot8;
                    var2 = null;
                    var3 = var2 == var3;
                    var2 = undefined;
                    if(var3) { _fun0007_ip = 74; continue _fun0007 }
 65:
                    var3 = _closure2_slot8;
                    var2 = var3.name;
 74:
                    return var2;
 76:
                    var3 = _closure2_slot0;
                    var2 = var3.isForumPost;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    if(var2) { _fun0007_ip = 124; continue _fun0007 }
 104:
                    var2 = 17;
                    var2 = var4[var2];
                    var2 = var3.bind(var5)(var2);
                    var8 = var2.TextIcon;
                    _fun0007_ip = 142; continue _fun0007;
 124:
                    var2 = 16;
                    var2 = var4[var2];
                    var2 = var3.bind(var5)(var2);
                    var8 = var2.ForumIcon;
 142:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var6 = _closure2_slot7;
                    var6 = var6.subLabel;
                    var2['style'] = var6;
                    var9 = _closure1_slot12;
                    var6 = {};
                    var11 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var10 = 11;
                    var10 = var7[var10];
                    var10 = var11.bind(var5)(var10);
                    var10 = var10.colors;
                    var10 = var10.TEXT_SECONDARY;
                    var6['color'] = var10;
                    var10 = _closure2_slot7;
                    var10 = var10.subLabelIcon;
                    var6['style'] = var10;
                    var8 = var9.bind(var5)(var8, var6);
                    var6 = new Array(3);
                    var6[0] = var8;
                    var8 = _closure1_slot0;
                    var12 = 18;
                    var7 = var7[var12];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.Text;
                    var7 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-secondary', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
                    var10 = _closure2_slot7;
                    var10 = var10.threadName;
                    var7['style'] = var10;
                    var10 = _closure2_slot10;
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var8 = _closure2_slot11;
                    var7 = null;
                    var8 = var7 != var8;
                    if(!var8) { _fun0007_ip = 496; continue _fun0007 }
 316:
                    var10 = _closure1_slot14;
                    var9 = _closure1_slot13;
                    var8 = {};
                    var14 = _closure1_slot12;
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var11 = var19[var12];
                    var11 = var17.bind(var5)(var11);
                    var13 = var11.Text;
                    var11 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-secondary', 'children': '•'};
                    var16 = _closure2_slot7;
                    var16 = var16.subLabelSeparator;
                    var11['style'] = var16;
                    var13 = var14.bind(var5)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var12 = var19[var12];
                    var12 = var17.bind(var5)(var12);
                    var13 = var12.Text;
                    var12 = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
                    var16 = 19;
                    var16 = var19[var16];
                    var17 = var17.bind(var5)(var16);
                    var16 = var17.calendarFormatCompact;
                    var18 = _closure1_slot1;
                    var15 = 20;
                    var15 = var19[var15];
                    var18 = var18.bind(var5)(var15);
                    var15 = _closure2_slot11;
                    var15 = var18.bind(var5)(var15);
                    var15 = var16.bind(var17)(var15);
                    var12['children'] = var15;
                    var12 = var14.bind(var5)(var13, var12);
                    var11[1] = var12;
                    var8['children'] = var11;
                    var7 = var10.bind(var5)(var9, var8);
 496:
                    var6[2] = var7;
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
 512:
                    var1 = _closure2_slot5;
                    return var1;
                }
            };
            var4 = var9.bind(var14)(var4, var8);
            var14 = _closure1_slot3;
            var9 = var14.useMemo;
            var8 = new Array(2);
            var8[0] = var16;
            var8[1] = var13;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0008_ip = 26; continue _fun0008 }
 13:
                    var4 = _closure2_slot1;
                    var1 = undefined;
                    if(!var4) { _fun0008_ip = 24; continue _fun0008 }
 22:
                    var1 = null;
 24:
                    _fun0008_ip = 30; continue _fun0008;
 26:
                    var1 = _closure2_slot4;
 30:
                    return var1;
                }
            };
            var9 = var9.bind(var14)(var6, var8);
            var14 = _closure1_slot12;
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 18;
            var6 = var16[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var6['children'] = var15;
            var8 = var14.bind(var5)(var8, var6);
            var6 = {};
            var27 = var6;
            var26 = var1;
            var1 = copyDataProperties(var27, var26);
            var1 = 'disabled';
            var6[var1] = var13;
            var1 = 'icon';
            var6[var1] = var12;
            var1 = 'onPress';
            var6[var1] = var11;
            var1 = 'onLongPress';
            var6[var1] = var10;
            var1 = 'label';
            var6[var1] = var8;
            var1 = 'subLabel';
            var6[var1] = var4;
            var1 = _closure1_slot10;
            var1 = var1.TOGGLE;
            if(!(var3 !== var1)) { _fun0001_ip = 822; continue _fun0001 }
 763:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 22;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.TableRow;
            var1 = {};
            var27 = var1;
            var26 = var6;
            var8 = copyDataProperties(var27, var26);
            var8 = 'trailing';
            var1[var8] = var9;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 879; continue _fun0001;
 822:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 21;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableCheckboxRow;
            var2 = {};
            var27 = var2;
            var26 = var6;
            var6 = copyDataProperties(var27, var26);
            var6 = 'checked';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 879:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();