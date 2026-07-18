// app/modules/profile_customization/native/HeaderAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 8;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var10['backgroundColor'] = var11;
    var4['avatarStatusStyle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var10 = arg2;
            var27 = var6.user;
            var _closure2_slot0 = var27;
            var24 = var6.guildId;
            var _closure2_slot1 = var24;
            var19 = var6.disableStatus;
            var1 = var6.pendingAvatarSrc;
            var _closure2_slot2 = var1;
            var25 = var6.pendingAvatarDecoration;
            var8 = var6.style;
            var16 = var6.statusStyle;
            var9 = var6.onPress;
            var17 = var6.size;
            var5 = undefined;
            if(!(var17 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.AvatarSizes;
            var17 = var1.XXLARGE;
case 2:
            var12 = var6.animate;
            if(!(var12 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = true;
case 4:
            var3 = {'user': 0, 'guildId': 0, 'disableStatus': 0, 'pendingAvatarSrc': 0, 'pendingAvatarDecoration': 0, 'style': 0, 'statusStyle': 0, 'onPress': 0, 'size': 0, 'animate': 0};
            var1 = null;
            var31 = var3;
            var30 = null;
            var2 = silentSetPrototypeOf(var31, var30);
            var31 = {};
            var30 = var6;
            var29 = var3;
            var7 = copyDataProperties(var31, var30, var29);
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
            var14 = var3.bind(var5)();
            var11 = var27.id;
            _closure2_slot3 = var11;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var3 = 10;
            var13 = var23[var3];
            var20 = var22.bind(var5)(var13);
            var18 = var20.useStateFromStores;
            var13 = _closure1_slot4;
            var15 = new Array(1);
            var15[0] = var13;
            var13 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var13 = var18.bind(var20)(var15, var13);
            _closure2_slot4 = var13;
            var15 = var23[var3];
            var21 = var22.bind(var5)(var15);
            var20 = var21.useStateFromStoresObject;
            var15 = _closure1_slot6;
            var18 = new Array(1);
            var18[0] = var15;
            var15 = new Array(1);
            var15[0] = var11;
            var11 = function() {
                var1 = {};
                var5 = _closure1_slot6;
                var4 = var5.isMobileOnline;
                var3 = _closure2_slot3;
                var3 = var4.bind(var5)(var3);
                var1['isMobileOnline'] = var3;
                var4 = var5.isVROnline;
                var3 = _closure2_slot3;
                var3 = var4.bind(var5)(var3);
                var1['isVROnline'] = var3;
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
            var11 = var20.bind(var21)(var18, var11, var15);
            var21 = var11.isMobileOnline;
            var20 = var11.isVROnline;
            var18 = var11.status;
            var15 = var11.activities;
            var3 = var23[var3];
            var28 = var22.bind(var5)(var3);
            var26 = var28.useStateFromStores;
            var3 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var3;
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
            var26 = var26.bind(var28)(var11, var3);
            var11 = _closure1_slot1;
            var3 = 11;
            var3 = var23[var3];
            var11 = var11.bind(var5)(var3);
            var3 = 12;
            var3 = var23[var3];
            var23 = var22.bind(var5)(var3);
            var22 = var23.getProfilePreviewValue;
            var3 = {};
            var3['pendingValue'] = var25;
            var28 = var1 == var27;
            var25 = undefined;
            if(var28) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var25 = var27.avatarDecoration;
case 11:
            var3['userValue'] = var25;
            var27 = var1 == var26;
            var25 = undefined;
            if(var27) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var25 = var26.avatarDecoration;
case 13:
            var3['guildValue'] = var25;
            var3['guildId'] = var24;
            var3 = var22.bind(var23)(var3);
            var11 = var11.bind(var5)(var3);
            var3 = {};
            var3['isMobileOnline'] = var21;
            var3['isVROnline'] = var20;
            var3['size'] = var17;
            var17 = null;
            if(var19) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var17 = var18;
case 15:
            var3['status'] = var17;
            var17 = var14.avatarStatusStyle;
            var14 = new Array(2);
            var14[0] = var17;
            var14[1] = var16;
            var3['statusStyle'] = var14;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 13;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var14.bind(var5)(var15);
            var3['streaming'] = var14;
            if(!var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = !var13;
case 17:
            var3['animate'] = var12;
            var3['avatarDecoration'] = var11;
            _closure2_slot5 = var3;
            if(!(var1 == var9)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var4 = _closure1_slot8;
            var3 = _closure1_slot3;
            var1 = {};
            var1['ref'] = var10;
            var1['style'] = var8;
            var11 = 'image';
            var1['accessibilityRole'] = var11;
            var11 = true;
            var1['accessible'] = var11;
            var31 = var1;
            var30 = var7;
            var11 = copyDataProperties(var31, var30);
            var12 = var6.bind(var5)();
            var11 = 'children';
            var1[10] = var12;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 15;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var2['ref'] = var10;
            var2['onPress'] = var9;
            var2['onLongPress'] = var9;
            var2['style'] = var8;
            var8 = 0.8;
            var2['activeOpacity'] = var8;
            var8 = 'imagebutton';
            var2['accessibilityRole'] = var8;
            var31 = var2;
            var30 = var7;
            var7 = copyDataProperties(var31, var30);
            var7 = var6.bind(var5)();
            var6 = 'children';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/HeaderAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();