// app/modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function DirectMessageIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.channel;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot14;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var7 = var4[var2];
            var10 = var3.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getUser;
                var4 = _closure2_slot0;
                var1 = var4.getRecipientId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var9.bind(var10)(var8, var7);
            var _closure2_slot1 = var11;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var4 = var7.useStateFromStoresObject;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 18:
                    var7 = _closure1_slot8;
                    var6 = var7.isMobileOnline;
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var2 = var6.bind(var7)(var5);
 45:
                    var1['isMobileOnline'] = var2;
                    var2 = _closure2_slot1;
                    if(!(var4 == var2)) { _fun0002_ip = 73; continue _fun0002 }
 58:
                    var2 = _closure1_slot11;
                    var2 = var2.UNKNOWN;
                    _fun0002_ip = 100; continue _fun0002;
 73:
                    var5 = _closure1_slot8;
                    var4 = var5.getStatus;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 100:
                    var1['status'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var3, var1, var2);
            var7 = var1.isMobileOnline;
            var9 = var1.status;
            var8 = null;
            var2 = var8 == var11;
            var1 = null;
            if(var2) { _fun0001_ip = 277; continue _fun0001 }
 155:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 12;
            var2 = var13[var10];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var14 = var11.avatarDecoration;
            var2['avatarDecoration'] = var14;
            var2['user'] = var11;
            var2['guildId'] = var5;
            var12 = _closure1_slot0;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.NORMAL;
            var2['size'] = var10;
            if(!(var8 != var11)) { _fun0001_ip = 248; continue _fun0001 }
 233:
            var10 = var11.isSystemUser;
            var10 = var10.bind(var11)();
            var8 = null;
            if(var10) { _fun0001_ip = 251; continue _fun0001 }
 248:
            var8 = var9;
 251:
            var2['status'] = var8;
            var2['isMobileOnline'] = var7;
            var6 = var6.statusStyle;
            var2['statusStyle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 277:
            return var1;
        }
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Permissions;
    var _closure1_slot10 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    var11 = 10;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['gap'] = var14;
    var4['container'] = var10;
    var10 = {'height': 40, 'width': 40, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['channelIcon'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10['borderRadius'] = var14;
    var10['borderWidth'] = var13;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var10['borderColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_MOD_FAINT;
    var10['backgroundColor'] = var14;
    var4['channelTypeBox'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var4['channelData'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var4['statusStyle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = function ThreadParentChannelLink(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot1;
        var14 = _closure1_slot2;
        var1 = 13;
        var1 = var14[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var1);
        var1 = true;
        var13 = var3.bind(var4)(var2, var1);
        var _closure2_slot1 = var13;
        var9 = _closure1_slot0;
        var1 = 14;
        var1 = var14[var1];
        var3 = var9.bind(var4)(var1);
        var1 = var3.useNavigation;
        var1 = var1.bind(var3)();
        var _closure2_slot2 = var1;
        var6 = _closure1_slot3;
        var3 = var6.useCallback;
        var7 = var2.id;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function() {
            var3 = _closure2_slot2;
            var1 = var3.goBack;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.transitionToChannel;
            var2 = _closure2_slot0;
            var3 = var2.id;
            var2 = {};
            var6 = true;
            var2['navigationReplace'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot12;
        var1 = 16;
        var1 = var14[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var1['onPress'] = var6;
        var7 = _closure1_slot12;
        var5 = 17;
        var5 = var14[var5];
        var5 = var9.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-sm/medium', 'color': 'header-primary', 'lineClamp': 1};
        var8 = 18;
        var10 = var14[var8];
        var10 = var9.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.format;
        var8 = var14[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.t;
        var9 = var8.YbkB3d;
        var8 = {};
        var8['channelName'] = var13;
        var12 = function channelNameHook() {
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-sm/medium', 'color': 'text-brand', 'lineClamp': 1};
            var5 = _closure2_slot1;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var8['channelNameHook'] = var12;
        var8 = var10.bind(var11)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var4;
    var4 = function ChannelSubtitle(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.channel;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var6.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = var2.isPrivate;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    if(!var2) { _fun0004_ip = 73; continue _fun0004 }
 22:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 19;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.getPrivateChannelUserTagsString;
                    var3 = _closure2_slot0;
                    var3 = var3.recipients;
                    var2 = _closure1_slot9;
                    var1 = var4.bind(var5)(var3, var2);
 73:
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6, var1, var3);
            var1 = var4.isPrivate;
            var1 = var1.bind(var4)();
            if(var1) { _fun0003_ip = 122; continue _fun0003 }
 91:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.channelTypeString;
            var6 = var1.bind(var3)(var4);
 122:
            var4 = null;
            var3 = var4 == var6;
            var1 = null;
            if(var3) { _fun0003_ip = 192; continue _fun0003 }
 133:
            var3 = '';
            var1 = null;
            if(!(var3 !== var6)) { _fun0003_ip = 192; continue _fun0003 }
 143:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/medium', 'color': 'header-muted', 'lineClamp': 1};
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 192:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        var2 = arg1;
        var14 = var2.channel;
        var _closure2_slot0 = var14;
        var13 = var2.containerStyle;
        var2 = _closure1_slot14;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var _closure2_slot1 = var10;
        var3 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 13;
        var2 = var12[var2];
        var2 = var3.bind(var4)(var2);
        var11 = var2.bind(var4)(var14);
        var9 = _closure1_slot0;
        var3 = 11;
        var2 = var12[var3];
        var15 = var9.bind(var4)(var2);
        var8 = var15.useStateFromStores;
        var2 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var2;
        var5 = new Array(1);
        var5[0] = var14;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = var3.isThread;
                var3 = var1.bind(var3)();
                var1 = null;
                if(!var3) { _fun0005_ip = 49; continue _fun0005 }
 22:
                var4 = _closure1_slot5;
                var3 = var4.getChannel;
                var2 = _closure2_slot0;
                var2 = var2.parent_id;
                var1 = var3.bind(var4)(var2);
 49:
                return var1;
            }
        };
        var15 = var8.bind(var15)(var6, var2, var5);
        var _closure2_slot2 = var15;
        var2 = var12[var3];
        var16 = var9.bind(var4)(var2);
        var8 = var16.useStateFromStores;
        var2 = _closure1_slot7;
        var6 = new Array(1);
        var6[0] = var2;
        var5 = new Array(1);
        var5[0] = var15;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure2_slot2;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0006_ip = 49; continue _fun0006 }
 16:
                var5 = _closure1_slot7;
                var4 = var5.can;
                var3 = _closure1_slot10;
                var3 = var3.VIEW_CHANNEL;
                var2 = _closure2_slot2;
                var1 = var4.bind(var5)(var3, var2);
 49:
                return var1;
            }
        };
        var2 = var8.bind(var16)(var6, var2, var5);
        var _closure2_slot3 = var2;
        var3 = var12[var3];
        var16 = var9.bind(var4)(var3);
        var8 = var16.useStateFromStores;
        var3 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = var14.id;
        var5 = new Array(2);
        var5[0] = var3;
        var3 = var14.guild_id;
        var5[1] = var3;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = _closure1_slot6;
                var3 = var4.getGuild;
                var2 = _closure2_slot0;
                var2 = var2.guild_id;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0007_ip = 46; continue _fun0007 }
 40:
                var2 = var3.rulesChannelId;
 46:
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            }
        };
        var6 = var8.bind(var16)(var6, var3, var5);
        var _closure2_slot4 = var6;
        var5 = _closure1_slot3;
        var8 = var5.useMemo;
        var3 = new Array(3);
        var3[0] = var14;
        var3[1] = var15;
        var3[2] = var2;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = _closure2_slot2;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 20; continue _fun0008 }
 13:
                var1 = _closure2_slot3;
                if(var1) { _fun0008_ip = 51; continue _fun0008 }
 20:
                var5 = _closure1_slot12;
                var4 = _closure1_slot16;
                var3 = {};
                var1 = _closure2_slot0;
                var3['channel'] = var1;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3);
                _fun0008_ip = 80; continue _fun0008;
 51:
                var5 = _closure1_slot12;
                var4 = _closure1_slot15;
                var3 = {};
                var2 = _closure2_slot2;
                var3['channel'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 80:
                return var1;
            }
        };
        var8 = var8.bind(var5)(var2, var3);
        var3 = var5.useMemo;
        var2 = new Array(3);
        var2[0] = var14;
        var2[1] = var6;
        var2[2] = var10;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = var3.isDM;
                var2 = var2.bind(var3)();
                if(var2) { _fun0009_ip = 292; continue _fun0009 }
 26:
                var3 = _closure2_slot0;
                var2 = var3.isGroupDM;
                var2 = var2.bind(var3)();
                if(var2) { _fun0009_ip = 182; continue _fun0009 }
 46:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 21;
                var2 = var4[var2];
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var4 = var6.getChannelIconComponent;
                var3 = _closure2_slot0;
                var2 = {};
                var8 = _closure2_slot4;
                var2['isRulesChannel'] = var8;
                var10 = var4.bind(var6)(var3, var2);
                var2 = null;
                var3 = var2 == var10;
                if(var3) { _fun0009_ip = 180; continue _fun0009 }
 104:
                var6 = _closure1_slot12;
                var4 = _closure1_slot4;
                var3 = {};
                var9 = _closure2_slot1;
                var11 = var9.channelIcon;
                var8 = new Array(2);
                var8[0] = var11;
                var9 = var9.channelTypeBox;
                var8[1] = var9;
                var3['style'] = var8;
                var9 = _closure1_slot12;
                var8 = {'size': 'md', 'color': 'header-primary'};
                var8 = var9.bind(var7)(var10, var8);
                var3['children'] = var8;
                var2 = var6.bind(var7)(var4, var3);
 180:
                return var2;
 182:
                var6 = _closure1_slot12;
                var4 = _closure1_slot4;
                var3 = {};
                var2 = _closure2_slot1;
                var2 = var2.channelIcon;
                var3['style'] = var2;
                var9 = _closure1_slot12;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 20;
                var7 = var12[var2];
                var2 = undefined;
                var8 = var8.bind(var2)(var7);
                var7 = {};
                var10 = _closure2_slot0;
                var7['channel'] = var10;
                var11 = _closure1_slot0;
                var10 = 12;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.REFRESH_MEDIUM_32;
                var7['size'] = var10;
                var7 = var9.bind(var2)(var8, var7);
                var3['children'] = var7;
                var2 = var6.bind(var2)(var4, var3);
                return var2;
 292:
                var4 = _closure1_slot12;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = _closure2_slot1;
                var6 = var6.channelIcon;
                var2['style'] = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot17;
                var5 = {};
                var1 = _closure2_slot0;
                var5['channel'] = var1;
                var1 = undefined;
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var6 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot13;
        var2 = _closure1_slot4;
        var1 = {};
        var14 = var10.container;
        var5 = new Array(2);
        var5[0] = var14;
        var5[1] = var13;
        var1['style'] = var5;
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var10 = var10.channelData;
        var6['style'] = var10;
        var10 = _closure1_slot12;
        var7 = 17;
        var7 = var12[var7];
        var7 = var9.bind(var4)(var7);
        var9 = var7.Text;
        var7 = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
        var7['children'] = var11;
        var9 = var10.bind(var4)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var7[1] = var8;
        var6['children'] = var7;
        var6 = var3.bind(var4)(var2, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();