// app/modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'right': 9, 'backgroundColor': 'transparent', 'borderColor': 'transparent'};
    var4['bottomRightBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarBottomRightBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.mentionCount;
            var _closure2_slot0 = var10;
            var9 = var2.isMentionLowImportance;
            var _closure2_slot1 = var9;
            var11 = var2.joinRequestState;
            var _closure2_slot2 = var11;
            var12 = var2.shouldShowInvitesDisabled;
            var16 = undefined;
            if(!(var12 === var16)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = false;
case 2:
            var _closure2_slot3 = var12;
            var6 = var2.lurkerPreviewExpiresAt;
            if(!(var6 === var16)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = null;
case 4:
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var16;
            var _closure2_slot6 = var16;
            var _closure2_slot7 = var16;
            var _closure2_slot8 = var16;
            var _closure2_slot9 = var16;
            var _closure2_slot10 = var16;
            var _closure2_slot11 = var16;
            var3 = _closure1_slot6;
            var3 = var3.bind(var16)();
            _closure2_slot5 = var3;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var4 = 4;
            var4 = var17[var4];
            var5 = var14.bind(var16)(var4);
            var4 = var5.useHasExpired;
            var5 = var4.bind(var5)(var6);
            _closure2_slot6 = var5;
            var4 = _closure1_slot4;
            var8 = var4.useState;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.BADGE_MASK_UNREAD_SIZE;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.BADGE_MASK_SIZE;
case 8:
                    return var1;
                }
            };
            var13 = var8.bind(var4)(var7);
            var8 = _closure1_slot3;
            var7 = 2;
            var8 = var8.bind(var16)(var13, var7);
            var7 = 0;
            var13 = var8[var7];
            _closure2_slot7 = var13;
            var7 = 1;
            var7 = var8[var7];
            _closure2_slot8 = var7;
            var8 = 6;
            var7 = var17[var8];
            var19 = var14.bind(var16)(var7);
            var18 = var19.useToken;
            var15 = _closure1_slot1;
            var2 = 7;
            var7 = var17[var2];
            var7 = var15.bind(var16)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.GUILD_BAR_ITEM_SIZE;
            var7 = var18.bind(var19)(var7);
            _closure2_slot9 = var7;
            var8 = var17[var8];
            var14 = var14.bind(var16)(var8);
            var8 = var14.useToken;
            var2 = var17[var2];
            var2 = var15.bind(var16)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.GUILD_BAR_ITEM_MARGIN;
            var2 = var8.bind(var14)(var2);
            _closure2_slot10 = var2;
            var8 = var4.useMemo;
            var14 = var3.bottomRightBadge;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function() {
                var1 = _closure2_slot5;
                var2 = var1.bottomRightBadge;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = _closure2_slot10;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 5;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.BADGE_PADDING;
                var3 = var4 - var3;
                var2['bottom'] = var3;
                var1[1] = var2;
                return var1;
            };
            var8 = var8.bind(var4)(var2, var3);
            _closure2_slot11 = var8;
            var3 = var4.useMemo;
            var2 = new Array(9);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var2[5] = var8;
            var2[6] = var7;
            var2[7] = var6;
            var2[8] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var1 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var1 = _closure2_slot4;
                    if(!(var2 != var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 8;
                    var1 = var9[var1];
                    var8 = undefined;
                    var4 = var5.bind(var8)(var1);
                    var1 = {};
                    var6 = 'bottom-right';
                    var1['position'] = var6;
                    var6 = _closure2_slot9;
                    var1['containerSize'] = var6;
                    var4 = var4.bind(var8)(var1);
                    var1 = {};
                    var6 = _closure1_slot5;
                    var3 = 4;
                    var3 = var9[var3];
                    var5 = var5.bind(var8)(var3);
                    var3 = {};
                    var9 = _closure2_slot11;
                    var3['style'] = var9;
                    var9 = _closure2_slot4;
                    var3['expiresAt'] = var9;
                    var3 = var6.bind(var8)(var5, var3);
                    var1['badge'] = var3;
                    var1['cutout'] = var4;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['cutouts'] = var3;
                    return var1;
case 15:
                    var1 = {};
                    var1['badge'] = var2;
                    var2 = undefined;
                    var1['cutout'] = var2;
                    var1['cutouts'] = var2;
                    return var1;
case 13:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var1 = var8[var1];
                    var6 = undefined;
                    var3 = var4.bind(var6)(var1);
                    var1 = {};
                    var5 = 'bottom-right';
                    var1['position'] = var5;
                    var5 = _closure2_slot9;
                    var1['containerSize'] = var5;
                    var3 = var3.bind(var6)(var1);
                    var1 = {};
                    var5 = _closure1_slot5;
                    var2 = 10;
                    var2 = var8[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = {};
                    var8 = _closure2_slot11;
                    var2['style'] = var8;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['badge'] = var2;
                    var1['cutout'] = var3;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['cutouts'] = var2;
                    return var1;
case 11:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var1 = var8[var1];
                    var6 = undefined;
                    var3 = var4.bind(var6)(var1);
                    var1 = {};
                    var5 = 'bottom-right';
                    var1['position'] = var5;
                    var5 = _closure2_slot9;
                    var1['containerSize'] = var5;
                    var3 = var3.bind(var6)(var1);
                    var1 = {};
                    var5 = _closure1_slot5;
                    var2 = 9;
                    var2 = var8[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = {};
                    var8 = _closure2_slot11;
                    var2['style'] = var8;
                    var8 = _closure2_slot2;
                    var2['joinRequestState'] = var8;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['badge'] = var2;
                    var1['cutout'] = var3;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['cutouts'] = var2;
                    return var1;
case 9:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var1 = var8[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var1);
                    var1 = {};
                    var2 = 'bottom-right';
                    var1['position'] = var2;
                    var2 = _closure2_slot9;
                    var1['containerSize'] = var2;
                    var10 = _closure2_slot7;
                    var4 = _closure1_slot0;
                    var2 = 5;
                    var9 = var8[var2];
                    var9 = var4.bind(var6)(var9);
                    var11 = var9.BADGE_PADDING;
                    var9 = 2;
                    var9 = var9 * var11;
                    var9 = var10 - var9;
                    var1['width'] = var9;
                    var3 = var3.bind(var6)(var1);
                    var1 = {};
                    var5 = _closure1_slot5;
                    var2 = var8[var2];
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.MaskedBadge;
                    var2 = {};
                    var8 = _closure2_slot11;
                    var2['maskStyle'] = var8;
                    var8 = _closure2_slot0;
                    var2['value'] = var8;
                    var7 = _closure2_slot1;
                    var2['isMentionLowImportance'] = var7;
                    var7 = true;
                    var2['accessibilityElementsHidden'] = var7;
                    var7 = 'no-hide-descendants';
                    var2['importantForAccessibility'] = var7;
                    var7 = function onLayout(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var4 = _closure2_slot7;
                            var3 = var1.width;
                            if(!(var4 !== var3)) { _fun0004_ip = 3; continue _fun0004 }
case 18:
                            var3 = _closure2_slot8;
                            var2 = var1.width;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 3:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onLayout'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['badge'] = var2;
                    var1['cutout'] = var3;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['cutouts'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();