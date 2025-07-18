// app/modules/profile_customization/native/HeaderAvatar.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var10;
    var4['avatarStatusStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/HeaderAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HeaderAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var19 = var7.user;
            var _closure2_slot0 = var19;
            var1 = var7.guildId;
            var _closure2_slot1 = var1;
            var17 = var7.disableStatus;
            var1 = var7.pendingAvatarSrc;
            var _closure2_slot2 = var1;
            var6 = var7.pendingAvatarDecoration;
            var9 = var7.style;
            var14 = var7.statusStyle;
            var8 = var7.onPress;
            var15 = var7.size;
            var5 = undefined;
            if(!(var15 === var5)) { _fun0001_ip = 107; continue _fun0001 }
 72:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.AvatarSizes;
            var15 = var1.XXLARGE;
 107:
            var10 = var7.animate;
            if(!(var10 === var5)) { _fun0001_ip = 119; continue _fun0001 }
 117:
            var10 = true;
 119:
            var4 = {'user': 0, 'guildId': 0, 'disableStatus': 0, 'pendingAvatarSrc': 0, 'pendingAvatarDecoration': 0, 'style': 0, 'statusStyle': 0, 'onPress': 0, 'size': 0, 'animate': 0};
            var1 = null;
            var26 = var4;
            var25 = null;
            var2 = silentSetPrototypeOf(var26, var25);
            var26 = {};
            var25 = var7;
            var24 = var4;
            var7 = copyDataProperties(var26, var25, var24);
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var4 = _closure1_slot8;
            var12 = var4.bind(var5)();
            var13 = var19.id;
            _closure2_slot3 = var13;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var4 = 9;
            var11 = var22[var4];
            var21 = var20.bind(var5)(var11);
            var18 = var21.useStateFromStores;
            var11 = _closure1_slot3;
            var16 = new Array(1);
            var16[0] = var11;
            var11 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var18.bind(var21)(var16, var11);
            _closure2_slot4 = var11;
            var16 = var22[var4];
            var23 = var20.bind(var5)(var16);
            var21 = var23.useStateFromStoresObject;
            var16 = _closure1_slot5;
            var18 = new Array(1);
            var18[0] = var16;
            var16 = new Array(1);
            var16[0] = var13;
            var13 = function() {
                var1 = {};
                var5 = _closure1_slot5;
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
                    var1 = _closure1_slot6;
                    var1 = var1.CUSTOM_STATUS;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var1['customStatusActivity'] = var2;
                return var1;
            };
            var13 = var21.bind(var23)(var18, var13, var16);
            var18 = var13.isMobileOnline;
            var16 = var13.status;
            var13 = var13.activities;
            var4 = var22[var4];
            var23 = var20.bind(var5)(var4);
            var21 = var23.useStateFromStores;
            var4 = _closure1_slot4;
            var20 = new Array(1);
            var20[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 43; continue _fun0002 }
 16:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2);
 43:
                    return var1;
                }
            };
            var21 = var21.bind(var23)(var20, var4);
            var20 = _closure1_slot1;
            var4 = 10;
            var4 = var22[var4];
            var4 = var20.bind(var5)(var4);
            if(!(var5 === var6)) { _fun0001_ip = 409; continue _fun0001 }
 361:
            var22 = var1 == var21;
            var20 = undefined;
            if(var22) { _fun0001_ip = 376; continue _fun0001 }
 370:
            var20 = var21.avatarDecoration;
 376:
            if(!(var1 == var20)) { _fun0001_ip = 388; continue _fun0001 }
 380:
            var19 = var19.avatarDecoration;
            _fun0001_ip = 406; continue _fun0001;
 388:
            var22 = var1 == var21;
            var20 = undefined;
            if(var22) { _fun0001_ip = 403; continue _fun0001 }
 397:
            var20 = var21.avatarDecoration;
 403:
            var19 = var20;
 406:
            var6 = var19;
 409:
            var6 = var4.bind(var5)(var6);
            var4 = {};
            var4['isMobileOnline'] = var18;
            var4['size'] = var15;
            var15 = null;
            if(var17) { _fun0001_ip = 433; continue _fun0001 }
 430:
            var15 = var16;
 433:
            var4['status'] = var15;
            var15 = var12.avatarStatusStyle;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var14;
            var4['statusStyle'] = var12;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 11;
            var12 = var15[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.bind(var5)(var13);
            var4['streaming'] = var12;
            if(!var10) { _fun0001_ip = 496; continue _fun0001 }
 493:
            var10 = !var11;
 496:
            var4['animate'] = var10;
            var4['avatarDecoration'] = var6;
            _closure2_slot5 = var4;
            var6 = function renderAvatar(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var7 = arg1;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure2_slot2;
                    if(!(var3 === var1)) { _fun0003_ip = 78; continue _fun0003 }
 43:
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['user'] = var5;
                    var5 = _closure2_slot1;
                    var1['guildId'] = var5;
                    var1['style'] = var7;
                    var16 = _closure2_slot5;
                    var17 = var1;
                    var5 = copyDataProperties(var17, var16);
                    _fun0003_ip = 151; continue _fun0003;
 78:
                    var5 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 12;
                    var8 = var10[var8];
                    var13 = var9.bind(var3)(var8);
                    var12 = var13.getAvatarSource;
                    var17 = _closure2_slot0;
                    var16 = _closure2_slot1;
                    var15 = _closure2_slot2;
                    var14 = _closure2_slot4;
                    var18 = var13;
                    var8 = var18[var12](var17, var16, var15, var14, var13);
                    var5['source'] = var8;
                    var5['style'] = var7;
                    var16 = _closure2_slot5;
                    var17 = var5;
                    var6 = copyDataProperties(var17, var16);
                    var1 = var5;
 151:
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            if(!(var1 == var8)) { _fun0001_ip = 526; continue _fun0001 }
 519:
            var1 = var6.bind(var5)(var9);
            _fun0001_ip = 608; continue _fun0001;
 526:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 13;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var2['style'] = var9;
            var2['onLongPress'] = var8;
            var2['onPress'] = var8;
            var8 = 'button';
            var2['accessibilityRole'] = var8;
            var26 = var2;
            var25 = var7;
            var7 = copyDataProperties(var26, var25);
            var7 = var6.bind(var5)();
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 608:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();