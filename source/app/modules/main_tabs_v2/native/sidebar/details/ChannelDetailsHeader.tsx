// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ThreadParentChannelLink(arg1) {
        var2 = arg1;
        var2 = var2.channel;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot14;
        var4 = undefined;
        var12 = var3.bind(var4)();
        var5 = _closure1_slot1;
        var10 = _closure1_slot2;
        var3 = 12;
        var3 = var10[var3];
        var3 = var5.bind(var4)(var3);
        var9 = var3.bind(var4)(var2);
        var5 = _closure1_slot3;
        var3 = var5.useCallback;
        var7 = var2.id;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getRootNavigationRef;
                var4 = var3.bind(var4)();
                var3 = null;
                var3 = var3 != var4;
                if(!var3) { _fun0001_ip = 54; continue _fun0001 }
 44:
                var5 = var4.isReady;
                var3 = var5.bind(var4)();
 54:
                if(!var3) { _fun0001_ip = 120; continue _fun0001 }
 57:
                var3 = var4.goBack;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.transitionToChannel;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = {};
                var6 = true;
                var2['navigationReplace'] = var6;
                var2 = var4.bind(var5)(var3, var2);
 120:
                return var1;
            }
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot12;
        var7 = _closure1_slot0;
        var1 = 15;
        var1 = var10[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var8 = var12.threadParent;
        var1['style'] = var8;
        var1['onPress'] = var5;
        var11 = _closure1_slot11;
        var5 = 16;
        var5 = var10[var5];
        var5 = var7.bind(var4)(var5);
        var8 = var5.ForumIcon;
        var5 = {'style': null, 'size': 'xs', 'color': 'text-brand'};
        var12 = var12.threadParentIcon;
        var5['style'] = var12;
        var8 = var11.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot11;
        var6 = 17;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-xs/semibold', 'color': 'text-brand'};
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function DirectMessageChannelDetailsHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var2 = var2.channel;
            var _closure2_slot0 = var2;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot14;
            var11 = var3.bind(var5)();
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 18;
            var4 = var3[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var6 = var4.analyticsLocations;
            var _closure2_slot1 = var6;
            var4 = 12;
            var4 = var3[var4];
            var4 = var8.bind(var5)(var4);
            var10 = var4.bind(var5)(var2);
            var4 = _closure1_slot0;
            var9 = 19;
            var3 = var3[var9];
            var12 = var4.bind(var5)(var3);
            var8 = var12.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var4 = _closure2_slot0;
                var1 = var4.getRecipientId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var8.bind(var12)(var4, var3);
            var _closure2_slot2 = var19;
            var16 = null;
            var3 = var16 == var19;
            var8 = undefined;
            if(var3) { _fun0002_ip = 148; continue _fun0002 }
 143:
            var8 = var19.id;
 148:
            _closure2_slot3 = var8;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var12 = var4.bind(var5)(var3);
            var9 = var12.useStateFromStoresObject;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 18:
                    var7 = _closure1_slot7;
                    var6 = var7.isMobileOnline;
                    var5 = _closure2_slot2;
                    var5 = var5.id;
                    var2 = var6.bind(var7)(var5);
 45:
                    var1['isMobileOnline'] = var2;
                    var2 = _closure2_slot2;
                    if(!(var4 == var2)) { _fun0003_ip = 73; continue _fun0003 }
 58:
                    var2 = _closure1_slot10;
                    var2 = var2.UNKNOWN;
                    _fun0003_ip = 100; continue _fun0003;
 73:
                    var5 = _closure1_slot7;
                    var4 = var5.getStatus;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 100:
                    var1['status'] = var2;
                    return var1;
                }
            };
            var3 = var9.bind(var12)(var4, var3);
            var15 = var3.isMobileOnline;
            var17 = var3.status;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var9 = var2.id;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 75; continue _fun0004 }
 13:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1['userId'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var4 = _closure2_slot1;
                    var1['sourceAnalyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var3.bind(var4)(var1, var2);
            var2 = var16 == var19;
            var1 = null;
            if(var2) { _fun0002_ip = 540; continue _fun0002 }
 266:
            var4 = _closure1_slot12;
            var3 = _closure1_slot13;
            var2 = {};
            var9 = _closure1_slot11;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var6 = 15;
            var6 = var21[var6];
            var6 = var20.bind(var5)(var6);
            var8 = var6.PressableOpacity;
            var6 = {};
            var6['onPress'] = var12;
            var12 = var11.avatar;
            var6['style'] = var12;
            var14 = _closure1_slot11;
            var13 = _closure1_slot1;
            var18 = 21;
            var12 = var21[var18];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var22 = var19.avatarDecoration;
            var12['avatarDecoration'] = var22;
            var12['user'] = var19;
            var12['guildId'] = var5;
            var18 = var21[var18];
            var18 = var20.bind(var5)(var18);
            var18 = var18.AvatarSizes;
            var18 = var18.XLARGE;
            var12['size'] = var18;
            if(!(var16 != var19)) { _fun0002_ip = 407; continue _fun0002 }
 392:
            var18 = var19.isSystemUser;
            var18 = var18.bind(var19)();
            var16 = null;
            if(var18) { _fun0002_ip = 410; continue _fun0002 }
 407:
            var16 = var17;
 410:
            var12['status'] = var16;
            var12['isMobileOnline'] = var15;
            var15 = var11.statusStyle;
            var12['statusStyle'] = var15;
            var15 = var11.imageIconStyles;
            var12['style'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var6['children'] = var12;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 17;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'heading-lg/bold', 'color': 'header-primary'};
            var11 = var11.title;
            var7['style'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 540:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function GroupDMChannelDetailsHeader(arg1) {
        var1 = arg1;
        var7 = var1.channel;
        var1 = _closure1_slot14;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var14 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 12;
        var1 = var11[var1];
        var1 = var14.bind(var4)(var1);
        var9 = var1.bind(var4)(var7);
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var1 = {};
        var12 = _closure1_slot11;
        var8 = _closure1_slot4;
        var5 = {};
        var13 = var10.avatar;
        var5['style'] = var13;
        var15 = _closure1_slot11;
        var13 = 22;
        var13 = var11[var13];
        var14 = var14.bind(var4)(var13);
        var13 = {};
        var13['channel'] = var7;
        var7 = _closure1_slot0;
        var16 = 21;
        var16 = var11[var16];
        var16 = var7.bind(var4)(var16);
        var16 = var16.AvatarSizes;
        var16 = var16.XLARGE;
        var13['size'] = var16;
        var13 = var15.bind(var4)(var14, var13);
        var5['children'] = var13;
        var8 = var12.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot11;
        var6 = 17;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'heading-lg/bold', 'color': 'header-primary'};
        var10 = var10.title;
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function GuildChannelDetailsHeader(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot14;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.bind(var4)(var6);
            var3 = _closure1_slot0;
            var2 = 19;
            var8 = var5[var2];
            var11 = var3.bind(var4)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isThread;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    if(!var3) { _fun0006_ip = 49; continue _fun0006 }
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
            var10 = var10.bind(var11)(var9, var8);
            var _closure2_slot1 = var10;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 49; continue _fun0007 }
 16:
                    var5 = _closure1_slot6;
                    var4 = var5.can;
                    var3 = _closure1_slot9;
                    var3 = var3.VIEW_CHANNEL;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 49:
                    return var1;
                }
            };
            var8 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 23;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = var4.getChannelIconComponent;
                    var1 = _closure2_slot0;
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    if(var3) { _fun0008_ip = 76; continue _fun0008 }
 52:
                    var3 = _closure1_slot11;
                    var2 = {'size': 'sm', 'color': 'header-primary'};
                    var1 = var3.bind(var5)(var4, var2);
 76:
                    return var1;
                }
            };
            var17 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var9 = _closure1_slot4;
            var5 = {};
            var6 = var16.titleContainer;
            var5['style'] = var6;
            var6 = null;
            var12 = var6 != var17;
            if(!var12) { _fun0005_ip = 236; continue _fun0005 }
 206:
            var14 = _closure1_slot11;
            var13 = _closure1_slot4;
            var11 = {};
            var18 = var16.titleIcon;
            var11['style'] = var18;
            var11['children'] = var17;
            var12 = var14.bind(var4)(var13, var11);
 236:
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot11;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 17;
            var12 = var17[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'heading-lg/bold', 'color': 'header-primary', 'style': null, 'lineClamp': 1};
            var16 = var16.title;
            var12['style'] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var5['children'] = var11;
            var9 = var3.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = var6 != var10;
            if(!var6) { _fun0005_ip = 340; continue _fun0005 }
 337:
            var6 = var8;
 340:
            if(!var6) { _fun0005_ip = 363; continue _fun0005 }
 343:
            var9 = _closure1_slot11;
            var8 = _closure1_slot15;
            var7 = {};
            var7['channel'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 363:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var13 = 2;
    var4 = var6[var13];
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
    var4 = var5.bind(var1)(var4);
    var11 = var4.CHANNEL_DETAILS_TOP_MARGIN;
    var16 = var4.DESCRIPTION_HORIZONTAL_MARGIN;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var14 = 'center';
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'column'};
    var4['container'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var10['marginHorizontal'] = var16;
    var10['alignItems'] = var14;
    var4['header'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'flex-end', 'justifyContent': 'center'};
    var4['titleContainer'] = var10;
    var10 = {};
    var11 = 11;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var10['marginTop'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_40;
    var15 = var16 + var15;
    var10['marginHorizontal'] = var15;
    var10['alignItems'] = var14;
    var4['headerWithBackButton'] = var10;
    var10 = {'textAlign': 'center', 'flexShrink': 1};
    var4['title'] = var10;
    var10 = {'marginEnd': 4, 'marginBottom': 2};
    var4['titleIcon'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'right': 0};
    var4['more'] = var10;
    var10 = {'padding': null, 'position': 'absolute', 'left': 0, 'top': 0, 'justifyContent': 'center', 'zIndex': 99};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['padding'] = var14;
    var4['backButton'] = var10;
    var10 = {'flexDirection': 'row', 'marginTop': 6, 'paddingHorizontal': 6, 'paddingVertical': 6};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MESSAGE_HIGHLIGHT_HOVER;
    var10['backgroundColor'] = var14;
    var4['threadParent'] = var10;
    var10 = {};
    var10['marginEnd'] = var13;
    var4['threadParentIcon'] = var10;
    var10 = {};
    var13 = 12;
    var10['marginBottom'] = var13;
    var4['avatar'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var4['imageIconStyles'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var4['statusStyle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var13 = var1.channel;
            var _closure2_slot0 = var13;
            var5 = var1.onBackPress;
            var1 = var1.showBackButton;
            var2 = _closure1_slot14;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var13;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isDM;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0010_ip = 92; continue _fun0010 }
 23:
                    var4 = _closure2_slot0;
                    var1 = var4.isGroupDM;
                    var1 = var1.bind(var4)();
                    var7 = _closure1_slot11;
                    if(var1) { _fun0010_ip = 68; continue _fun0010 }
 44:
                    var5 = _closure1_slot18;
                    var4 = {};
                    var1 = _closure2_slot0;
                    var4['channel'] = var1;
                    var1 = undefined;
                    var1 = var7.bind(var1)(var5, var4);
                    _fun0010_ip = 90; continue _fun0010;
 68:
                    var6 = _closure1_slot17;
                    var5 = {};
                    var4 = _closure2_slot0;
                    var5['channel'] = var4;
                    var4 = undefined;
                    var1 = var7.bind(var4)(var6, var5);
 90:
                    _fun0010_ip = 118; continue _fun0010;
 92:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot16;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['channel'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 118:
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var3, var6);
            var6 = _closure1_slot0;
            var3 = 25;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useChannelDetailsHeaderExperimentV2Enabled;
            var3 = 'channel-details-header';
            var6 = var6.bind(var7)(var3);
            var16 = undefined;
            if(var6) { _fun0009_ip = 313; continue _fun0009 }
 134:
            if(var2) { _fun0009_ip = 145; continue _fun0009 }
 137:
            var16 = undefined;
            if(!var1) { _fun0009_ip = 313; continue _fun0009 }
 145:
            var3 = _closure1_slot11;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 15;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var8 = var11.backButton;
            var1['style'] = var8;
            var8 = 26;
            var9 = var15[var8];
            var9 = var7.bind(var4)(var9);
            var14 = var9.intl;
            var9 = var14.string;
            var8 = var15[var8];
            var8 = var7.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.13/7kZ;
            var8 = var9.bind(var14)(var8);
            var1['accessibilityLabel'] = var8;
            var1['onPress'] = var5;
            var8 = _closure1_slot11;
            var5 = 27;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.ArrowLargeLeftIcon;
            var5 = {};
            var14 = _closure1_slot1;
            var9 = 11;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.INTERACTIVE_NORMAL;
            var5['color'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            var1['children'] = var5;
            var16 = var3.bind(var4)(var2, var1);
 313:
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var5 = new Array(3);
            var5[0] = var16;
            var9 = _closure1_slot11;
            var8 = _closure1_slot4;
            var7 = {};
            var15 = var11.header;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = null;
            var16 = var15 != var16;
            var15 = undefined;
            if(!var16) { _fun0009_ip = 380; continue _fun0009 }
 374:
            var15 = var11.headerWithBackButton;
 380:
            var14[1] = var15;
            var7['style'] = var14;
            var7['children'] = var12;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = !var6;
            if(!var6) { _fun0009_ip = 434; continue _fun0009 }
 408:
            var7 = var13.isDM;
            var7 = var7.bind(var13)();
            if(var7) { _fun0009_ip = 431; continue _fun0009 }
 421:
            var8 = var13.isGroupDM;
            var7 = var8.bind(var13)();
 431:
            var6 = var7;
 434:
            if(!var6) { _fun0009_ip = 503; continue _fun0009 }
 437:
            var9 = _closure1_slot11;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.more;
            var7['style'] = var11;
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 28;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 503:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();