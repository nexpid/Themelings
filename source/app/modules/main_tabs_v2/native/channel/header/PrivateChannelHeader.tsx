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
        var3 = 10;
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
        var2 = 17;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.renderMemberCountText;
        var1 = var1.recipients;
        var1 = var1.length;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AVATAR_SIZE_MAP;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.REFRESH_MEDIUM_32;
    var4 = var8[var4];
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 9;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var10['color'] = var11;
    var4['activityStatusText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function PrivateChannelHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channelId;
            var _closure2_slot0 = var8;
            var9 = var2.screenIndex;
            var _closure2_slot1 = var9;
            var3 = var2.pressable;
            var2 = _closure1_slot14;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var10 = var7[var2];
            var14 = var6.bind(var4)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var13.bind(var14)(var12, var10);
            var _closure2_slot2 = var18;
            var10 = var7[var2];
            var14 = var6.bind(var4)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
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
            var19 = var13.bind(var14)(var12, var10);
            var _closure2_slot3 = var19;
            var2 = var7[var2];
            var10 = var6.bind(var4)(var2);
            var7 = var10.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
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
            var2 = var7.bind(var10)(var6, var2);
            var20 = var2.isMobileOnline;
            var15 = var2.isVROnline;
            var14 = var2.status;
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var9;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
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
            var10 = var6.bind(var7)(var1, var2);
            var2 = null;
            if(!(var2 == var18)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 13;
            var6 = var12[var1];
            var6 = var9.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var1 = var12[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ai6Lbr;
            var16 = var6.bind(var7)(var1);
            _fun0003_ip = 22; continue _fun0003;
case 20:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var9 = var6.bind(var4)(var1);
            var7 = var9.computeChannelName;
            var6 = _closure1_slot7;
            var1 = _closure1_slot6;
            var16 = var7.bind(var9)(var18, var6, var1);
case 22:
            var6 = var2 != var19;
            var1 = null;
            if(!var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = _closure1_slot10;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 14;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var12 = var19.id;
            var6['userId'] = var12;
            var13 = var2 == var18;
            var12 = undefined;
            if(var13) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var12 = var18.guild_id;
case 25:
            var6['guildId'] = var12;
            var11 = var11.activityStatusText;
            var6['textStyle'] = var11;
            var1 = var9.bind(var4)(var7, var6);
case 23:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = 15;
            var6 = var6[var9];
            var7 = var7.bind(var4)(var6);
            var6 = var7.useShouldChannelShowLoadingIndicator;
            var7 = var6.bind(var7)(var8);
            var6 = var2 != var18;
            if(!var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var8 = var18.isMultiUserDM;
            var6 = var8.bind(var18)();
case 27:
            if(var7) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            if(!var6) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var8 = _closure1_slot10;
            var7 = _closure1_slot15;
            var6 = {};
            var6['channel'] = var18;
            var1 = var8.bind(var4)(var7, var6);
case 31:
            _fun0003_ip = 33; continue _fun0003;
case 29:
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ChannelHeaderLoadingIndicator;
            var6 = {};
            var1 = var8.bind(var4)(var7, var6);
case 33:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 13;
            var8 = var6[var11];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.UbNmGc;
            var6 = {};
            var6['channelName'] = var16;
            var17 = var8.bind(var9)(var7, var6);
            var6 = var2 == var19;
            var12 = null;
            if(var6) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var6 = var19.isSystemUser;
            var6 = var6.bind(var19)();
            var12 = null;
            if(var6) { _fun0003_ip = 34; continue _fun0003 }
case 36:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.humanizeStatus;
            var6 = {};
            var6['isMobile'] = var20;
            var6['isVR'] = var15;
            var12 = var7.bind(var8)(var14, var6);
case 34:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var11];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var11];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.x87QCk;
            var11 = var7.bind(var8)(var6);
            if(!(var2 == var12)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = '';
            var6 = ', ';
            var9 = var8.bind(var7)(var17, var6, var11);
            _fun0003_ip = 39; continue _fun0003;
case 37:
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var27 = '';
            var6 = ', ';
            var26 = var17;
            var25 = var6;
            var24 = var12;
            var23 = var6;
            var22 = var11;
            var9 = var27[var8](var26, var25, var24, var23, var22, var21);
case 39:
            var8 = _closure1_slot12;
            var7 = _closure1_slot11;
            var6 = {};
            if(!(var2 == var19)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            if(!(var2 != var18)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var11 = var18.isGroupDM;
            var11 = var11.bind(var18)();
            if(var11) { _fun0003_ip = 44; continue _fun0003 }
case 42:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 17;
            var11 = var13[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.renderEmptyIcon;
            var11 = var11.bind(var12)();
            _fun0003_ip = 45; continue _fun0003;
case 44:
            var13 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 17;
            var12 = var21[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.renderGroupDMIcon;
            var11 = var12.bind(var13)(var18);
case 45:
            _fun0003_ip = 46; continue _fun0003;
case 40:
            var13 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 17;
            var12 = var21[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.renderUserAvatar;
            var27 = var13;
            var26 = var19;
            var25 = var14;
            var24 = var20;
            var23 = var15;
            var11 = var27[var12](var26, var25, var24, var23, var22);
case 46:
            var12 = new Array(2);
            var12[0] = var11;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 17;
            var13 = var13[var11];
            var15 = var14.bind(var4)(var13);
            var14 = var15.renderChannelTitle;
            var13 = {};
            var13['accessibleTitle'] = var17;
            var13['subtitle'] = var1;
            var17 = !var3;
            var13['disableArrow'] = var17;
            var20 = var2 == var19;
            var17 = undefined;
            if(var20) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var17 = var19.id;
case 47:
            var13['userId'] = var17;
            var19 = var2 == var18;
            var17 = undefined;
            if(var19) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var17 = var18.guild_id;
case 49:
            var13['guildId'] = var17;
            var13 = var14.bind(var15)(var16, var13);
            var12[1] = var13;
            var6['children'] = var12;
            var8 = var8.bind(var4)(var7, var6);
            if(var3) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            return var8;
case 51:
            var1 = var2 != var1;
            var7 = 44;
            if(var1) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var7 = _closure1_slot13;
case 53:
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var6 = var6.bind(var4)(var5);
            var5 = var6.renderTitleWrapper;
            var27 = var6;
            var26 = var8;
            var25 = var10;
            var24 = var9;
            var23 = var7;
            var5 = var27[var5](var26, var25, var24, var23, var22);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();