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
            var25 = var6.user;
            var _closure2_slot0 = var25;
            var22 = var6.guildId;
            var _closure2_slot1 = var22;
            var18 = var6.disableStatus;
            var1 = var6.pendingAvatarSrc;
            var _closure2_slot2 = var1;
            var23 = var6.pendingAvatarDecoration;
            var8 = var6.style;
            var15 = var6.statusStyle;
            var9 = var6.onPress;
            var16 = var6.size;
            var5 = undefined;
            if(!(var16 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.AvatarSizes;
            var16 = var1.XXLARGE;
case 2:
            var11 = var6.animate;
            if(!(var11 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = true;
case 4:
            var3 = {'user': 0, 'guildId': 0, 'disableStatus': 0, 'pendingAvatarSrc': 0, 'pendingAvatarDecoration': 0, 'style': 0, 'statusStyle': 0, 'onPress': 0, 'size': 0, 'animate': 0};
            var1 = null;
            var29 = var3;
            var28 = null;
            var2 = silentSetPrototypeOf(var29, var28);
            var29 = {};
            var28 = var6;
            var27 = var3;
            var7 = copyDataProperties(var29, var28, var27);
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var6 = function renderAvatar() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Avatar;
                    var1 = _closure2_slot2;
                    if(!(var3 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['user'] = var5;
                    var5 = _closure2_slot1;
                    var1['guildId'] = var5;
                    var15 = _closure2_slot5;
                    var16 = var1;
                    var5 = copyDataProperties(var16, var15);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
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
case 8:
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var3 = _closure1_slot9;
            var13 = var3.bind(var5)();
            var10 = var25.id;
            _closure2_slot3 = var10;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 10;
            var12 = var21[var3];
            var19 = var20.bind(var5)(var12);
            var17 = var19.useStateFromStores;
            var12 = _closure1_slot4;
            var14 = new Array(1);
            var14[0] = var12;
            var12 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var12 = var17.bind(var19)(var14, var12);
            _closure2_slot4 = var12;
            var14 = var21[var3];
            var24 = var20.bind(var5)(var14);
            var19 = var24.useStateFromStoresObject;
            var14 = _closure1_slot6;
            var17 = new Array(1);
            var17[0] = var14;
            var14 = new Array(1);
            var14[0] = var10;
            var10 = function() {
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
            var10 = var19.bind(var24)(var17, var10, var14);
            var19 = var10.isMobileOnline;
            var17 = var10.status;
            var14 = var10.activities;
            var3 = var21[var3];
            var26 = var20.bind(var5)(var3);
            var24 = var26.useStateFromStores;
            var3 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2);
case 9:
                    return var1;
                }
            };
            var24 = var24.bind(var26)(var10, var3);
            var10 = _closure1_slot1;
            var3 = 11;
            var3 = var21[var3];
            var10 = var10.bind(var5)(var3);
            var3 = 12;
            var3 = var21[var3];
            var21 = var20.bind(var5)(var3);
            var20 = var21.getProfilePreviewValue;
            var3 = {};
            var3['pendingValue'] = var23;
            var26 = var1 == var25;
            var23 = undefined;
            if(var26) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var23 = var25.avatarDecoration;
case 11:
            var3['userValue'] = var23;
            var25 = var1 == var24;
            var23 = undefined;
            if(var25) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var23 = var24.avatarDecoration;
case 13:
            var3['guildValue'] = var23;
            var3['guildId'] = var22;
            var3 = var20.bind(var21)(var3);
            var10 = var10.bind(var5)(var3);
            var3 = {};
            var3['isMobileOnline'] = var19;
            var3['size'] = var16;
            var16 = null;
            if(var18) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var16 = var17;
case 15:
            var3['status'] = var16;
            var16 = var13.avatarStatusStyle;
            var13 = new Array(2);
            var13[0] = var16;
            var13[1] = var15;
            var3['statusStyle'] = var13;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 13;
            var13 = var16[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.bind(var5)(var14);
            var3['streaming'] = var13;
            if(!var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = !var12;
case 17:
            var3['animate'] = var11;
            var3['avatarDecoration'] = var10;
            _closure2_slot5 = var3;
            if(!(var1 == var9)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var4 = _closure1_slot8;
            var3 = _closure1_slot3;
            var1 = {'style': null, 'accessibilityRole': 'image', 'accessible': true};
            var1['style'] = var8;
            var29 = var1;
            var28 = var7;
            var10 = copyDataProperties(var29, var28);
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
            var29 = var2;
            var28 = var7;
            var7 = copyDataProperties(var29, var28);
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