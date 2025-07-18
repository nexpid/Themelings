// app/modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BADGE_MASK_SIZE;
    var _closure1_slot5 = var7;
    var7 = var4.BADGE_MASK_UNREAD_SIZE;
    var _closure1_slot6 = var7;
    var4 = var4.BADGE_PADDING;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var8 = var9.create;
    var7 = {};
    var4 = 9;
    var10 = {'position': 'absolute', 'bottom': 1, 'right': 9, 'backgroundColor': 'transparent', 'borderColor': 'transparent'};
    var7['bottomRightBadge'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarBottomRightBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.mentionCount;
            var _closure2_slot0 = var6;
            var5 = var2.isMentionLowImportance;
            var _closure2_slot1 = var5;
            var7 = var2.joinRequestState;
            var _closure2_slot2 = var7;
            var8 = var2.shouldShowInvitesDisabled;
            var10 = undefined;
            if(!(var8 === var10)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var8 = false;
 49:
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var4 = _closure1_slot4;
            var9 = var4.useState;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0002_ip = 22; continue _fun0002 }
 13:
                    var1 = _closure1_slot6;
                    _fun0002_ip = 29; continue _fun0002;
 22:
                    var1 = _closure1_slot5;
 29:
                    return var1;
                }
            };
            var9 = var9.bind(var4)(var3);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var10)(var9, var2);
            var2 = 0;
            var9 = var3[var2];
            _closure2_slot4 = var9;
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot5 = var2;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0003_ip = 280; continue _fun0003 }
 16:
                    var1 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 164; continue _fun0003 }
 29:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0003_ip = 57; continue _fun0003 }
 36:
                    var1 = {};
                    var1['badge'] = var2;
                    var2 = undefined;
                    var1['cutout'] = var2;
                    var1['cutouts'] = var2;
                    return var1;
 57:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 5;
                    var1 = var9[var1];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var1);
                    var1 = {};
                    var3 = 'bottom-right';
                    var1['position'] = var3;
                    var3 = var2.bind(var6)(var1);
                    var1 = {};
                    var5 = _closure1_slot8;
                    var2 = 8;
                    var2 = var9[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.bottomRightBadge;
                    var2['style'] = var8;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['badge'] = var2;
                    var1['cutout'] = var3;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['cutouts'] = var2;
                    return var1;
 164:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 5;
                    var1 = var9[var1];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var1);
                    var1 = {};
                    var3 = 'bottom-right';
                    var1['position'] = var3;
                    var3 = var2.bind(var6)(var1);
                    var1 = {};
                    var5 = _closure1_slot8;
                    var2 = 7;
                    var2 = var9[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.bottomRightBadge;
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
 280:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 5;
                    var1 = var9[var1];
                    var6 = undefined;
                    var2 = var2.bind(var6)(var1);
                    var1 = {};
                    var3 = 'bottom-right';
                    var1['position'] = var3;
                    var4 = _closure2_slot4;
                    var5 = _closure1_slot7;
                    var3 = 2;
                    var3 = var3 * var5;
                    var3 = var4 - var3;
                    var1['width'] = var3;
                    var3 = var2.bind(var6)(var1);
                    var1 = {};
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot0;
                    var2 = 6;
                    var2 = var9[var2];
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.MaskedBadge;
                    var2 = {};
                    var8 = _closure1_slot9;
                    var8 = var8.bottomRightBadge;
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
 0:
                            var1 = arg1;
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var4 = _closure2_slot4;
                            var3 = var1.width;
                            if(!(var4 !== var3)) { _fun0004_ip = 46; continue _fun0004 }
 30:
                            var3 = _closure2_slot5;
                            var2 = var1.width;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 46:
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