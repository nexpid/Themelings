// app/modules/profile_customization/native/HeaderAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['avatarStatusStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/HeaderAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HeaderAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var24 = var6.user;
            var _closure2_slot0 = var24;
            var21 = var6.guildId;
            var _closure2_slot1 = var21;
            var17 = var6.disableStatus;
            var1 = var6.pendingAvatarSrc;
            var _closure2_slot2 = var1;
            var22 = var6.pendingAvatarDecoration;
            var8 = var6.style;
            var14 = var6.statusStyle;
            var9 = var6.onPress;
            var15 = var6.size;
            var5 = undefined;
            if(!(var15 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.AvatarSizes;
            var15 = var1.XXLARGE;
case 2:
            var10 = var6.animate;
            if(!(var10 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = true;
case 4:
            var4 = {'user': 0, 'guildId': 0, 'disableStatus': 0, 'pendingAvatarSrc': 0, 'pendingAvatarDecoration': 0, 'style': 0, 'statusStyle': 0, 'onPress': 0, 'size': 0, 'animate': 0};
            var1 = null;
            var28 = var4;
            var27 = null;
            var2 = silentSetPrototypeOf(var28, var27);
            var28 = {};
            var27 = var6;
            var26 = var4;
            var7 = copyDataProperties(var28, var27, var26);
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var4 = _closure1_slot9;
            var12 = var4.bind(var5)();
            var6 = var24.id;
            _closure2_slot3 = var6;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 10;
            var11 = var20[var4];
            var18 = var19.bind(var5)(var11);
            var16 = var18.useStateFromStores;
            var11 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var16.bind(var18)(var13, var11);
            _closure2_slot4 = var11;
            var13 = var20[var4];
            var23 = var19.bind(var5)(var13);
            var18 = var23.useStateFromStoresObject;
            var13 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var13;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                var1 = {};
                var5 = _closure1_slot6;
                var4 = var5.isMobileOnline;
                var3 = _closure2_slot3;
                var3 = var4.bind(var5)(var3);
                var1['isMobileOnline'] = var3;
                var4 = var5.getStatus;
                var3 = _closure2_slot3;
                var3 = var4.bind(var5)(var3);
                var1['status'] = var3;
                var4 = var5.getActivities;
                var3 = _closure2_slot3;
                var3 = var4.bind(var5)(var3);
                var1['activities'] = var3;
                var4 = var5.findActivity;
                var3 = _closure2_slot3;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot7;
                    var1 = var1.CUSTOM_STATUS;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var1['customStatusActivity'] = var2;
                return var1;
            };
            var6 = var18.bind(var23)(var16, var6, var13);
            var18 = var6.isMobileOnline;
            var16 = var6.status;
            var13 = var6.activities;
            var4 = var20[var4];
            var25 = var19.bind(var5)(var4);
            var23 = var25.useStateFromStores;
            var4 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2);
case 6:
                    return var1;
                }
            };
            var23 = var23.bind(var25)(var6, var4);
            var6 = _closure1_slot1;
            var4 = 11;
            var4 = var20[var4];
            var6 = var6.bind(var5)(var4);
            var4 = 12;
            var4 = var20[var4];
            var20 = var19.bind(var5)(var4);
            var19 = var20.getProfilePreviewValue;
            var4 = {};
            var4['pendingValue'] = var22;
            var25 = var1 == var24;
            var22 = undefined;
            if(var25) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var22 = var24.avatarDecoration;
case 8:
            var4['userValue'] = var22;
            var24 = var1 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var22 = var23.avatarDecoration;
case 10:
            var4['guildValue'] = var22;
            var4['guildId'] = var21;
            var4 = var19.bind(var20)(var4);
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['isMobileOnline'] = var18;
            var4['size'] = var15;
            var15 = null;
            if(var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var15 = var16;
case 12:
            var4['status'] = var15;
            var15 = var12.avatarStatusStyle;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var14;
            var4['statusStyle'] = var12;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 13;
            var12 = var15[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.bind(var5)(var13);
            var4['streaming'] = var12;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = !var11;
case 14:
            var4['animate'] = var10;
            var4['avatarDecoration'] = var6;
            _closure2_slot5 = var4;
            var6 = function renderAvatar() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure2_slot2;
                    if(!(var3 === var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['user'] = var5;
                    var5 = _closure2_slot1;
                    var1['guildId'] = var5;
                    var15 = _closure2_slot5;
                    var16 = var1;
                    var5 = copyDataProperties(var16, var15);
                    _fun0003_ip = 18; continue _fun0003;
case 16:
                    var5 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 14;
                    var7 = var9[var7];
                    var12 = var8.bind(var3)(var7);
                    var11 = var12.getAvatarSource;
                    var16 = _closure2_slot0;
                    var15 = _closure2_slot1;
                    var14 = _closure2_slot2;
                    var13 = _closure2_slot4;
                    var17 = var12;
                    var7 = var17[var11](var16, var15, var14, var13, var12);
                    var5['source'] = var7;
                    var15 = _closure2_slot5;
                    var16 = var5;
                    var6 = copyDataProperties(var16, var15);
                    var1 = var5;
case 18:
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            if(!(var1 == var9)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var4 = _closure1_slot8;
            var3 = _closure1_slot3;
            var1 = {'style': null, 'accessibilityRole': 'image', 'accessible': true};
            var1['style'] = var8;
            var28 = var1;
            var27 = var7;
            var10 = copyDataProperties(var28, var27);
            var11 = var6.bind(var5)();
            var10 = 'children';
            var1[9] = var11;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var2['onPress'] = var9;
            var2['onLongPress'] = var9;
            var2['style'] = var8;
            var8 = 0.8;
            var2['activeOpacity'] = var8;
            var8 = 'imagebutton';
            var2['accessibilityRole'] = var8;
            var28 = var2;
            var27 = var7;
            var7 = copyDataProperties(var28, var27);
            var7 = var6.bind(var5)();
            var6 = 'children';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();