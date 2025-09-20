// app/modules/share/native/DestinationFailedAlertModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function FailedGroupDMRow(arg1) {
        var1 = arg1;
        var13 = var1.channel;
        var1 = _closure1_slot13;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var7 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 11;
        var1 = var11[var1];
        var1 = var7.bind(var4)(var1);
        var9 = var1.bind(var4)(var13);
        var3 = _closure1_slot11;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = var10.row;
        var1['style'] = var5;
        var12 = _closure1_slot10;
        var5 = 12;
        var5 = var11[var5];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var7 = _closure1_slot0;
        var14 = 13;
        var14 = var11[var14];
        var14 = var7.bind(var4)(var14);
        var14 = var14.AvatarSizes;
        var14 = var14.REFRESH_MEDIUM_32;
        var5['size'] = var14;
        var5['channel'] = var13;
        var8 = var12.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot10;
        var6 = 14;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'variant': 'text-md/medium', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
        var10 = var10.label;
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function FailedUserRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.user;
            var _closure2_slot0 = var13;
            var2 = _closure1_slot13;
            var5 = undefined;
            var14 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var6 = var4[var2];
            var9 = var3.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getNickname;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var8.bind(var9)(var7, var6);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStoresObject;
            var6 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot6;
                var5 = var6.isMobileOnline;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isMobileOnline'] = var4;
                var4 = _closure1_slot6;
                var3 = var4.getStatus;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['status'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var8 = var1.isMobileOnline;
            var17 = var1.status;
            var12 = null;
            var2 = var12 != var13;
            var1 = null;
            if(!var2) { _fun0001_ip = 390; continue _fun0001 }
 142:
            var4 = _closure1_slot11;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var14.row;
            var2['style'] = var6;
            var9 = _closure1_slot10;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var16 = 13;
            var6 = var6[var16];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var13;
            var6['guildId'] = var5;
            var15 = _closure1_slot9;
            var18 = var15.OFFLINE;
            var15 = null;
            if(!(var18 !== var17)) { _fun0001_ip = 215; continue _fun0001 }
 212:
            var15 = var17;
 215:
            var6['status'] = var15;
            var6['isMobileOnline'] = var8;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var16];
            var16 = var8.bind(var5)(var16);
            var16 = var16.AvatarSizes;
            var16 = var16.XSMALL;
            var6['size'] = var16;
            var16 = var13.avatarDecoration;
            var6['avatarDecoration'] = var16;
            var16 = true;
            var6['autoStatusCutout'] = var16;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot10;
            var7 = 14;
            var7 = var15[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/medium', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
            var14 = var14.label;
            var7['style'] = var14;
            if(!(var12 == var10)) { _fun0001_ip = 366; continue _fun0001 }
 335:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 16;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.getName;
            var10 = var11.bind(var12)(var13);
 366:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 390:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function FailedChannelRow(arg1) {
        var2 = arg1;
        var14 = var2.channel;
        var _closure2_slot0 = var14;
        var2 = _closure1_slot13;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 15;
        var2 = var11[var2];
        var5 = var7.bind(var4)(var2);
        var3 = var5.useStateFromStores;
        var8 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var5 = _closure2_slot0;
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                if(var5) { _fun0002_ip = 39; continue _fun0002 }
 30:
                var4 = _closure2_slot0;
                var1 = var4.guild_id;
 39:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var15 = var3.bind(var5)(var2, var1);
        var2 = _closure1_slot1;
        var1 = 11;
        var1 = var11[var1];
        var1 = var2.bind(var4)(var1);
        var9 = var1.bind(var4)(var14);
        var3 = _closure1_slot11;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = var10.row;
        var1['style'] = var5;
        var12 = _closure1_slot10;
        var13 = 17;
        var5 = var11[var13];
        var5 = var7.bind(var4)(var5);
        var8 = var5.GuildIconWithChannelType;
        var5 = {};
        var16 = '';
        var5['aria-label'] = var16;
        var5['guild'] = var15;
        var5['channel'] = var14;
        var13 = var11[var13];
        var13 = var7.bind(var4)(var13);
        var13 = var13.GuildIconWithChannelTypeSizes;
        var13 = var13.SMALL_32;
        var5['size'] = var13;
        var8 = var12.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot10;
        var6 = 14;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'variant': 'text-md/medium', 'lineClamp': 1, 'ellipsizeMode': 'tail'};
        var10 = var10.label;
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function FailedDestinationRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var2 = var2.destination;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStoresObject;
            var7 = _closure1_slot4;
            var3 = new Array(2);
            var3[0] = var7;
            var7 = _closure1_slot8;
            var3[1] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var6 = var2.type;
                    var5 = 'channel';
                    var4 = null;
                    if(!(var5 === var6)) { _fun0004_ip = 50; continue _fun0004 }
 24:
                    var7 = _closure1_slot4;
                    var6 = var7.getChannel;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var4 = var6.bind(var7)(var5);
 50:
                    var1['channel'] = var4;
                    var4 = _closure2_slot0;
                    var5 = var4.type;
                    var4 = 'user';
                    var2 = null;
                    if(!(var4 === var5)) { _fun0004_ip = 100; continue _fun0004 }
 73:
                    var5 = _closure1_slot8;
                    var4 = var5.getUser;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 100:
                    var1['user'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var3, var1);
            var6 = var1.channel;
            var8 = var1.user;
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 108; continue _fun0003 }
 95:
            var3 = var6.isGroupDM;
            var3 = var3.bind(var6)();
            if(var3) { _fun0003_ip = 165; continue _fun0003 }
 108:
            if(!(var1 == var8)) { _fun0003_ip = 143; continue _fun0003 }
 112:
            var3 = var1 != var6;
            var1 = null;
            if(!var3) { _fun0003_ip = 141; continue _fun0003 }
 121:
            var7 = _closure1_slot10;
            var4 = _closure1_slot16;
            var3 = {};
            var3['channel'] = var6;
            var1 = var7.bind(var5)(var4, var3);
 141:
            _fun0003_ip = 163; continue _fun0003;
 143:
            var7 = _closure1_slot10;
            var4 = _closure1_slot15;
            var3 = {};
            var3['user'] = var8;
            var1 = var7.bind(var5)(var4, var3);
 163:
            _fun0003_ip = 185; continue _fun0003;
 165:
            var4 = _closure1_slot10;
            var3 = _closure1_slot14;
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 185:
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
    var4 = var4.bind(var1)(var7);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['borderWidth'] = var10;
    var11 = 10;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var9['borderColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingVertical'] = var13;
    var4['container'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'height': 40};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9['marginHorizontal'] = var11;
    var4['row'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['label'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/DestinationFailedAlertModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DestinationFailedAlertModal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var7 = var1.title;
            var5 = var1.content;
            var13 = var1.failedDestinations;
            var12 = var1.onRetry;
            var1 = _closure1_slot13;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var14 = 18;
            var1 = var8[var14];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AlertModal;
            var1 = {};
            var1['title'] = var7;
            var1['content'] = var5;
            var9 = _closure1_slot10;
            var7 = _closure1_slot3;
            var5 = {};
            var10 = var10.container;
            var5['style'] = var10;
            var11 = var13.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot10;
                var4 = _closure1_slot17;
                var3 = {};
                var1 = arg1;
                var3['destination'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var10 = var11.bind(var13)(var10);
            var5['children'] = var10;
            var5 = var9.bind(var4)(var7, var5);
            var1['extraContent'] = var5;
            var7 = _closure1_slot10;
            var5 = 19;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.AlertActions;
            var5 = {};
            var8 = null;
            if(!(var8 == var12)) { _fun0005_ip = 265; continue _fun0005 }
 161:
            var11 = _closure1_slot10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = var18[var14];
            var8 = var17.bind(var4)(var8);
            var10 = var8.AlertActionButton;
            var9 = {};
            var8 = 'primary';
            var9['variant'] = var8;
            var8 = 20;
            var13 = var18[var8];
            var13 = var17.bind(var4)(var13);
            var16 = var13.intl;
            var13 = var16.string;
            var8 = var18[var8];
            var8 = var17.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.BddRzc;
            var8 = var13.bind(var16)(var8);
            var9['text'] = var8;
            var8 = 'confirm';
            var8 = var11.bind(var4)(var10, var9, var8);
            _fun0005_ip = 488; continue _fun0005;
 265:
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = {};
            var18 = _closure1_slot10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = var20[var14];
            var13 = var19.bind(var4)(var13);
            var17 = var13.AlertActionButton;
            var16 = {};
            var13 = 'primary';
            var16['variant'] = var13;
            var16['onPress'] = var12;
            var13 = 20;
            var12 = var20[var13];
            var12 = var19.bind(var4)(var12);
            var22 = var12.intl;
            var21 = var22.string;
            var12 = var20[var13];
            var12 = var19.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.5911LS;
            var12 = var21.bind(var22)(var12);
            var16['text'] = var12;
            var12 = 'confirm';
            var16 = var18.bind(var4)(var17, var16, var12);
            var12 = new Array(2);
            var12[0] = var16;
            var16 = _closure1_slot10;
            var14 = var20[var14];
            var14 = var19.bind(var4)(var14);
            var15 = var14.AlertActionButton;
            var14 = {};
            var17 = 'secondary';
            var14['variant'] = var17;
            var17 = var20[var13];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.WAI6xs;
            var13 = var17.bind(var18)(var13);
            var14['text'] = var13;
            var13 = 'cancel';
            var13 = var16.bind(var4)(var15, var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 488:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['actions'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();