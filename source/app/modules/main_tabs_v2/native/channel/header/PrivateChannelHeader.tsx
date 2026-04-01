// app/modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function GroupDmMemberCount(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 9;
        var4 = var6[var3];
        var3 = undefined;
        var8 = var5.bind(var3)(var4);
        var7 = var8.useStateFromStores;
        var10 = _closure1_slot7;
        var4 = new Array(2);
        var4[0] = var10;
        var9 = _closure1_slot5;
        var4[1] = var9;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var9 = var1.recipients;
                var4 = new Array(1);
                var3 = 0;
                var10 = var4;
                var8 = 0;
                var2 = arraySpread(var10, var9, var8);
                var5 = _closure1_slot7;
                var1 = var5.getCurrentUser;
                var6 = var1.bind(var5)();
                var1 = null;
                var7 = var1 == var6;
                var5 = undefined;
                if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var6.id;
case 2:
                var6 = var1 != var5;
                var1 = '0';
                if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var5;
case 4:
                var4[1] = var1;
                var1 = 1;
                var1 = var2 + var1;
                var2 = var4.reduce;
                var1 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = _closure1_slot5;
                        var3 = var4.getStatus;
                        var2 = arg2;
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure1_slot9;
                        var5 = var2.INVISIBLE;
                        var2 = 0;
                        if(!(var3 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var5 = _closure1_slot9;
                        var5 = var5.OFFLINE;
                        var2 = 0;
                        if(!(var3 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                        var1 = _closure1_slot9;
                        var1 = var1.UNKNOWN;
                        var2 = 0;
                        if(!(var3 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                        var2 = 1;
case 6:
                        var1 = arg1;
                        var1 = var1 + var2;
                        return var1;
                    }
                };
                var1 = var2.bind(var4)(var1, var3);
                return var1;
            }
        };
        var4 = var7.bind(var8)(var4, var2);
        var2 = 15;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.renderMemberCountText;
        var1 = var1.recipients;
        var1 = var1.length;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var12.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelTypes;
    var _closure1_slot8 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.Fragment;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 8;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var10['color'] = var11;
    var4['activityStatusText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function PrivateChannelHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var4 = var2.channelId;
            var _closure2_slot0 = var4;
            var10 = var2.screenIndex;
            var _closure2_slot1 = var10;
            var2 = var2.pressable;
            var3 = _closure1_slot13;
            var5 = undefined;
            var8 = var3.bind(var5)();
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 9;
            var11 = var9[var3];
            var14 = var7.bind(var5)(var11);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var13.bind(var14)(var12, var11);
            var _closure2_slot2 = var16;
            var11 = var9[var3];
            var14 = var7.bind(var5)(var11);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var3;
                    var5 = undefined;
                    if(var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = _closure2_slot2;
                    var5 = var3.type;
case 10:
                    var4 = _closure1_slot8;
                    var4 = var4.DM;
                    var1 = undefined;
                    if(!(var5 === var4)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var4 = _closure1_slot7;
                    var3 = var4.getUser;
                    var5 = _closure2_slot2;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var18 = var13.bind(var14)(var12, var11);
            var _closure2_slot3 = var18;
            var3 = var9[var3];
            var11 = var7.bind(var5)(var3);
            var9 = var11.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 14; continue _fun0005 }
case 11:
                    var7 = _closure1_slot5;
                    var6 = var7.isMobileOnline;
                    var5 = _closure2_slot3;
                    var5 = var5.id;
                    var2 = var6.bind(var7)(var5);
case 14:
                    var1['isMobileOnline'] = var2;
                    var2 = _closure2_slot3;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var7 = _closure1_slot5;
                    var6 = var7.isVROnline;
                    var5 = _closure2_slot3;
                    var5 = var5.id;
                    var2 = var6.bind(var7)(var5);
case 15:
                    var1['isVROnline'] = var2;
                    var2 = _closure2_slot3;
                    if(!(var4 == var2)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var2 = _closure1_slot9;
                    var2 = var2.UNKNOWN;
                    _fun0005_ip = 19; continue _fun0005;
case 17:
                    var5 = _closure1_slot5;
                    var4 = var5.getStatus;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 19:
                    var1['status'] = var2;
                    return var1;
                }
            };
            var3 = var9.bind(var11)(var7, var3);
            var20 = var3.isMobileOnline;
            var12 = var3.isVROnline;
            var11 = var3.status;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var4;
            var3[1] = var10;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.navigateToChannelDetails;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = 'private-channel-header-title';
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var10 = var7.bind(var9)(var1, var3);
            var15 = null;
            if(!(var15 == var16)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 12;
            var3 = var13[var1];
            var3 = var9.bind(var5)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var1 = var13[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ai6Lbr;
            var13 = var3.bind(var7)(var1);
            _fun0003_ip = 22; continue _fun0003;
case 20:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var9 = var3.bind(var5)(var1);
            var7 = var9.computeChannelName;
            var3 = _closure1_slot7;
            var1 = _closure1_slot6;
            var13 = var7.bind(var9)(var16, var3, var1);
case 22:
            var1 = var15 != var18;
            var17 = null;
            if(!var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7 = _closure1_slot10;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var9 = var18.id;
            var1['userId'] = var9;
            var14 = var15 == var16;
            var9 = undefined;
            if(var14) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var9 = var16.guild_id;
case 25:
            var1['guildId'] = var9;
            var8 = var8.activityStatusText;
            var1['textStyle'] = var8;
            var17 = var7.bind(var5)(var3, var1);
case 23:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 14;
            var1 = var1[var7];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useShouldChannelShowLoadingIndicator;
            var3 = var1.bind(var3)(var4);
            var1 = var15 != var16;
            if(!var1) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var4 = var16.isMultiUserDM;
            var1 = var4.bind(var16)();
case 27:
            if(var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            if(!var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var4 = _closure1_slot10;
            var3 = _closure1_slot14;
            var1 = {};
            var1['channel'] = var16;
            var17 = var4.bind(var5)(var3, var1);
case 31:
            _fun0003_ip = 33; continue _fun0003;
case 29:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var3.bind(var5)(var1);
            var3 = var1.ChannelHeaderLoadingIndicator;
            var1 = {};
            var17 = var4.bind(var5)(var3, var1);
case 33:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var14 = 12;
            var4 = var1[var14];
            var4 = var3.bind(var5)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var1 = var1[var14];
            var1 = var3.bind(var5)(var1);
            var1 = var1.t;
            var3 = var1.UbNmGc;
            var1 = {};
            var1['channelName'] = var13;
            var19 = var4.bind(var7)(var3, var1);
            var4 = _closure1_slot12;
            var3 = _closure1_slot11;
            var1 = {};
            if(!(var15 == var18)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            if(!(var15 != var16)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = var16.isGroupDM;
            var7 = var7.bind(var16)();
            if(var7) { _fun0003_ip = 38; continue _fun0003 }
case 36:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 15;
            var7 = var9[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.renderEmptyIcon;
            var7 = var7.bind(var8)();
            _fun0003_ip = 39; continue _fun0003;
case 38:
            var9 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 15;
            var8 = var21[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.renderGroupDMIcon;
            var7 = var8.bind(var9)(var16);
case 39:
            _fun0003_ip = 40; continue _fun0003;
case 34:
            var9 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 15;
            var8 = var21[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var9.renderUserAvatar;
            var26 = var9;
            var25 = var18;
            var24 = var11;
            var23 = var20;
            var22 = var12;
            var7 = var26[var8](var25, var24, var23, var22, var21);
case 40:
            var8 = new Array(2);
            var8[0] = var7;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 15;
            var9 = var9[var7];
            var12 = var11.bind(var5)(var9);
            var11 = var12.renderChannelTitle;
            var9 = {};
            var9['accessibleTitle'] = var19;
            var9['subtitle'] = var17;
            var17 = !var2;
            var9['disableArrow'] = var17;
            var19 = var15 == var18;
            var17 = undefined;
            if(var19) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var17 = var18.id;
case 41:
            var9['userId'] = var17;
            var17 = var15 == var16;
            var15 = undefined;
            if(var17) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var15 = var16.guild_id;
case 43:
            var9['guildId'] = var15;
            var9 = var11.bind(var12)(var13, var9);
            var8[1] = var9;
            var1['children'] = var8;
            var9 = var4.bind(var5)(var3, var1);
            var1 = var9;
            if(!var2) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var4 = _closure1_slot10;
            var3 = _closure1_slot11;
            var2 = {};
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var7];
            var8 = var13.bind(var5)(var7);
            var7 = var8.renderTitleWrapper;
            var11 = var6[var14];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var6 = var6[var14];
            var6 = var13.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.x87QCk;
            var6 = var11.bind(var12)(var6);
            var6 = var7.bind(var8)(var9, var10, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 45:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();