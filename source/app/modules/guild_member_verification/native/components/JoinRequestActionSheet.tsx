// app/modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var2 = function JoinRequestActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var25 = var1.joinRequest;
            var _closure2_slot0 = var25;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot11;
            var20 = var1.bind(var5)();
            var2 = var25.user;
            var _closure2_slot1 = var2;
            var1 = var25.userId;
            var _closure2_slot2 = var1;
            var17 = var25.guildId;
            var _closure2_slot3 = var17;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 8;
            var4 = var7[var10];
            var11 = var8.bind(var5)(var4);
            var9 = var11.useStateFromStores;
            var4 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot7;
                    var4 = var5.getUser;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var1);
                    var4 = null;
                    if(!(var4 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot6;
                    var6 = _closure2_slot1;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var7 = var3;
                    var2 = new var7[var4](var6, var5);
                    var1 = var2 instanceof Object ? var2 : var3;
case 2:
                    return var1;
                }
            };
            var24 = var9.bind(var11)(var8, var1, var4);
            var _closure2_slot4 = var24;
            var4 = _closure1_slot1;
            var1 = 9;
            var1 = var7[var1];
            var7 = var4.bind(var5)(var1);
            var1 = null;
            var8 = var1 == var2;
            var4 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.id;
case 4:
            if(!(var1 == var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot8;
case 6:
            var23 = var7.bind(var5)(var4);
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 10;
            var4 = var15[var4];
            var7 = var19.bind(var5)(var4);
            var4 = var7.useBottomSheetRef;
            var4 = var4.bind(var7)();
            var9 = var4.bottomSheetRef;
            var13 = var4.bottomSheetClose;
            var7 = _closure1_slot3;
            var4 = var7.useRef;
            var14 = var4.bind(var7)(var1);
            var4 = 11;
            var4 = var15[var4];
            var8 = var19.bind(var5)(var4);
            var7 = var8.useSharedValue;
            var4 = 0;
            var4 = var7.bind(var8)(var4);
            _closure2_slot5 = var4;
            var11 = _closure1_slot3;
            var8 = var11.useCallback;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function(arg1) {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var12 = var8.bind(var11)(var4, var7);
            var22 = _closure1_slot1;
            var4 = 12;
            var4 = var15[var4];
            var7 = var22.bind(var5)(var4);
            var4 = {};
            var4['user'] = var24;
            var4['displayProfile'] = var23;
            var4 = var7.bind(var5)(var4);
            var8 = var4.theme;
            var7 = var4.primaryColor;
            var4 = var4.secondaryColor;
            var10 = var15[var10];
            var18 = var19.bind(var5)(var10);
            var16 = var18.useStateFromStores;
            var10 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var1 = _closure1_slot5;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var10 = var16.bind(var18)(var11, var10);
            var11 = 13;
            var11 = var15[var11];
            var11 = var22.bind(var5)(var11);
            var21 = var11.bind(var5)();
            var11 = 14;
            var11 = var15[var11];
            var16 = var19.bind(var5)(var11);
            var11 = var16.useProfileThemeValues;
            var11 = var11.bind(var16)(var8);
            var16 = 15;
            var18 = var15[var16];
            var19 = var19.bind(var5)(var18);
            var18 = var19.useToken;
            var26 = 16;
            var15 = var15[var26];
            var15 = var22.bind(var5)(var15);
            var15 = var15.colors;
            var15 = var15.INTERACTIVE_HOVER;
            var15 = var18.bind(var19)(var15, var8);
            var18 = var1 == var11;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var19 = undefined;
            if(var18) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var19 = var11.overlay;
case 10:
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var10 = undefined;
            if(var18) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = var11.overlaySyncedWithUserTheme;
case 13:
            var19 = var10;
case 12:
            var18 = _closure1_slot0;
            var10 = _closure1_slot2;
            var16 = var10[var16];
            var18 = var18.bind(var5)(var16);
            var16 = var18.useToken;
            var22 = _closure1_slot1;
            var10 = var10[var26];
            var10 = var22.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.ACTION_SHEET_GRADIENT_BG;
            var10 = var16.bind(var18)(var10, var21);
            var21 = var10;
            if(!(var1 != var4)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var21 = var10;
            if(!(var1 != var11)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var21 = var10;
            if(!(var1 != var19)) { _fun0001_ip = 15; continue _fun0001 }
case 18:
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 17;
            var10 = var22[var10];
            var16 = var18.bind(var5)(var10);
            var11 = var16.int2hex;
            var10 = 18;
            var10 = var22[var10];
            var18 = var18.bind(var5)(var10);
            var10 = var18.calculateOverlayedColor;
            var10 = var10.bind(var18)(var4, var19);
            var21 = var11.bind(var16)(var10);
case 15:
            var18 = _closure1_slot3;
            var16 = var18.useEffect;
            var11 = new Array(3);
            var11[0] = var17;
            var10 = var25.applicationStatus;
            var11[1] = var10;
            var10 = var25.userId;
            var11[2] = var10;
            var10 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackMemberApplicationViewed;
                var2 = {};
                var6 = _closure2_slot3;
                var2['guildId'] = var6;
                var5 = _closure2_slot0;
                var6 = var5.applicationStatus;
                var2['applicationStatus'] = var6;
                var5 = var5.userId;
                var2['applicationUserId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10 = var16.bind(var18)(var10, var11);
            var16 = _closure1_slot3;
            var11 = var16.useEffect;
            var10 = new Array(2);
            var10[0] = var17;
            var10[1] = var24;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure2_slot4;
                    var3 = var4.isNonUserBot;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure2_slot4;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var3 = !var4;
case 21:
                    var2 = var3;
case 19:
                    if(var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var7 = _closure2_slot4;
                    var3 = var7.id;
                    var2 = var7.getAvatarURL;
                    var6 = _closure2_slot3;
                    var1 = 80;
                    var2 = var2.bind(var7)(var6, var1);
                    var1 = {'type': 'action_sheet', 'withMutualGuilds': true, 'withMutualFriends': true, 'dispatchWait': true};
                    var1['guildId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var11.bind(var16)(var3, var10);
            if(!(var1 != var2)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var3 = _closure1_slot9;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 26;
            var1 = var17[var1];
            var1 = var16.bind(var5)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var8;
            var1['primaryColor'] = var7;
            var1['secondaryColor'] = var4;
            var8 = _closure1_slot10;
            var4 = 22;
            var4 = var17[var4];
            var4 = var16.bind(var5)(var4);
            var7 = var4.BottomSheet;
            var4 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var4['ref'] = var9;
            var9 = var20.noPadding;
            var4['contentStyles'] = var9;
            var11 = _closure1_slot9;
            var9 = 27;
            var9 = var17[var9];
            var9 = var16.bind(var5)(var9);
            var10 = var9.BottomSheetScrollView;
            var9 = {};
            var18 = false;
            var9['scrollsToTop'] = var18;
            var19 = var20.container;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = {};
            var19['backgroundColor'] = var21;
            var18[1] = var19;
            var9['style'] = var18;
            var9['ref'] = var14;
            var9['onScroll'] = var12;
            var18 = _closure1_slot9;
            var14 = _closure1_slot4;
            var12 = {};
            var19 = {};
            var20 = var20.profileContainer;
            var19['style'] = var20;
            var22 = _closure1_slot9;
            var21 = _closure1_slot1;
            var20 = 28;
            var20 = var17[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['joinRequest'] = var25;
            var20['user'] = var24;
            var20['displayProfile'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var19['children'] = var20;
            var19 = var18.bind(var5)(var14, var19);
            var12['children'] = var19;
            var12 = var18.bind(var5)(var14, var12);
            var9['children'] = var12;
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot9;
            var10 = 29;
            var10 = var17[var10];
            var10 = var16.bind(var5)(var10);
            var11 = var10.ActionSheetHeaderBar;
            var10 = {};
            var14 = 30;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var14.ActionSheetHeaderBarVariants;
            var14 = var14.FLOATING;
            var10['variant'] = var14;
            var14 = {};
            var14['backgroundColor'] = var15;
            var10['tabStyle'] = var14;
            var10['onPress'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var4['children'] = var9;
            var4 = var8.bind(var5)(var7, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var4 = _closure1_slot9;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 22;
            var2 = var13[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var6 = 23;
            var6 = var13[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var9 = {};
            var10 = 42;
            var9['marginTop'] = var10;
            var6['style'] = var9;
            var9 = 24;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.NoResults;
            var6['Illustration'] = var9;
            var9 = 25;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.eAn6z8;
            var9 = var10.bind(var11)(var9);
            var6['body'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 27:
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var12 = 0;
    var5 = var7[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var5 = var4.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var4 = var7[var13];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot9 = var9;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var10 = var6.bind(var1)(var4);
    var9 = var10.createStyles;
    var4 = {};
    var11 = {};
    var11['flex'] = var13;
    var4['container'] = var11;
    var11 = {};
    var13 = 'relative';
    var11['position'] = var13;
    var4['profileContainer'] = var11;
    var11 = {};
    var11['paddingHorizontal'] = var12;
    var4['noPadding'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot11 = var4;
    var4 = var5.memo;
    var4 = var4.bind(var5)(var2);
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['JoinRequestActionSheet'] = var2;
    return var1;
})();