// app/modules/search/native/components/list/rows/DMRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function FriendPresence(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.user;
            var3 = var1.type;
            var6 = var1.animate;
            var9 = var1.guildId;
            var1 = _closure1_slot14;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = _closure1_slot11;
            var1 = var1.PENDING_INCOMING;
            if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var10 = var8.id;
            var1['userId'] = var10;
            var1['guildId'] = var9;
            var9 = var7.activityStatusIcon;
            var1['iconStyle'] = var9;
            var7 = var7.activityStatusText;
            var1['textStyle'] = var7;
            var7 = 16;
            var1['emojiSize'] = var7;
            var1['animate'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot12;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var6 = 12;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.getUserTag;
            var6 = var6.bind(var7)(var8);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var9 = var4.ActivityIndicator;
    var13 = 4;
    var4 = var6[var13];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StatusTypes;
    var _closure1_slot10 = var8;
    var4 = var4.RelationshipTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {'width': 14, 'height': 14};
    var4['activityStatusIcon'] = var12;
    var12 = {'color': null, 'fontSize': 14, 'lineHeight': 18, 'fontWeight': '400'};
    var14 = 10;
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var12['color'] = var14;
    var4['activityStatusText'] = var12;
    var12 = {};
    var12['marginLeft'] = var13;
    var4['tag'] = var12;
    var12 = {};
    var13 = 'row';
    var12['flexDirection'] = var13;
    var4['title'] = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var4 = var8.bind(var1)(var9, var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function DMRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var19 = var2.user;
            var _closure2_slot0 = var19;
            var3 = var2.nickname;
            var _closure2_slot1 = var3;
            var11 = var2.premiumSince;
            var _closure2_slot2 = var11;
            var22 = var2.isOwner;
            var _closure2_slot3 = var22;
            var17 = var2.type;
            var _closure2_slot4 = var17;
            var18 = var2.guildId;
            var _closure2_slot5 = var18;
            var15 = var2.onPress;
            var _closure2_slot6 = var15;
            var7 = var2.trailing;
            var6 = var2.accessibilityActions;
            var5 = var2.onAccessibilityAction;
            var4 = undefined;
            var _closure2_slot13 = var4;
            var2 = _closure1_slot14;
            var24 = var2.bind(var4)();
            var _closure2_slot7 = var24;
            var14 = _closure1_slot5;
            var3 = var14.useState;
            var2 = false;
            var9 = var3.bind(var14)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var4)(var9, var2);
            var2 = 0;
            var9 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot8 = var2;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 14;
            var3 = var12[var2];
            var20 = var10.bind(var4)(var3);
            var16 = var20.useStateFromStoresObject;
            var3 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot8;
                var5 = var4.isMobileOnline;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['isMobileOnline'] = var3;
                var5 = var4.isVROnline;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['isVROnline'] = var3;
                var3 = var4.getStatus;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['status'] = var2;
                return var1;
            };
            var13 = var16.bind(var20)(var13, var3);
            var20 = var13.isMobileOnline;
            var _closure2_slot9 = var20;
            var3 = var13.isVROnline;
            var _closure2_slot10 = var3;
            var21 = var13.status;
            var _closure2_slot11 = var21;
            var13 = var12[var2];
            var25 = var10.bind(var4)(var13);
            var23 = var25.useStateFromStores;
            var13 = _closure1_slot7;
            var16 = new Array(1);
            var16[0] = var13;
            var13 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var16 = var23.bind(var25)(var16, var13);
            var _closure2_slot12 = var16;
            var2 = var12[var2];
            var13 = var10.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var4 = _closure1_slot9;
                    var3 = var4.getNickname;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 7; continue _fun0003;
case 5:
                    var1 = _closure2_slot1;
case 7:
                    return var1;
                }
            };
            var12 = var12.bind(var13)(var10, var2);
            _closure2_slot1 = var12;
            var13 = var14.useCallback;
            var10 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var4 = _closure2_slot8;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 10: // try_start_0
                        var4 = _closure2_slot6;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=45);
case 11:
                        return var2;
case 12:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 13; continue _fun0004 }
case 3: // try_end0
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var5;
case 13:
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 14: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot8;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var10.bind(var4)(var2);
            var2 = new Array(2);
            var2[0] = var15;
            var15 = var19.id;
            var2[1] = var15;
            var10 = var13.bind(var14)(var10, var2);
            var2 = null;
            var23 = var12;
            if(!(var2 == var23)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 12;
            var2 = var13[var2];
            var12 = var12.bind(var4)(var2);
            var2 = var12.getName;
            var23 = var2.bind(var12)(var19);
case 15:
            var15 = _closure1_slot12;
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 11;
            var12 = var14[var12];
            var12 = var2.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var12['children'] = var23;
            var12 = var15.bind(var4)(var13, var12);
            _closure2_slot13 = var12;
            var15 = _closure1_slot5;
            var13 = var15.useMemo;
            var25 = var24.title;
            var12 = new Array(6);
            var12[0] = var25;
            var24 = var24.tag;
            var12[1] = var24;
            var12[2] = var23;
            var12[3] = var19;
            var12[4] = var22;
            var12[5] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.title;
                    var2['style'] = var1;
                    var5 = _closure2_slot13;
                    var1 = new Array(4);
                    var1[0] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.bot;
                    if(!var5) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var11 = _closure1_slot12;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var15 = 15;
                    var7 = var7[var15];
                    var9 = undefined;
                    var8 = var8.bind(var9)(var7);
                    var7 = {};
                    var12 = _closure2_slot7;
                    var12 = var12.tag;
                    var7['style'] = var12;
                    var13 = _closure2_slot0;
                    var12 = var13.isVerifiedBot;
                    var12 = var12.bind(var13)();
                    var7['verified'] = var12;
                    var12 = var13.isSystemUser;
                    var12 = var12.bind(var13)();
                    var14 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var13 = var13[var15];
                    var13 = var14.bind(var9)(var13);
                    var13 = var13.Types;
                    if(var12) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var12 = var13.BOT;
                    _fun0005_ip = 21; continue _fun0005;
case 19:
                    var12 = var13.SYSTEM_DM;
case 21:
                    var7['type'] = var12;
                    var5 = var11.bind(var9)(var8, var7);
case 17:
                    var1[1] = var5;
                    var5 = _closure2_slot3;
                    if(!var5) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var11 = _closure1_slot12;
                    var9 = _closure1_slot6;
                    var8 = {};
                    var7 = _closure2_slot7;
                    var7 = var7.tag;
                    var8['style'] = var7;
                    var14 = _closure1_slot12;
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var15 = 16;
                    var12 = var17[var15];
                    var7 = undefined;
                    var13 = var16.bind(var7)(var12);
                    var12 = {};
                    var15 = var17[var15];
                    var15 = var16.bind(var7)(var15);
                    var15 = var15.Sizes;
                    var15 = var15.REFRESH_SMALL_16;
                    var12['size'] = var15;
                    var15 = 17;
                    var15 = var17[var15];
                    var15 = var16.bind(var7)(var15);
                    var12['source'] = var15;
                    var15 = true;
                    var12['disableColor'] = var15;
                    var12 = var14.bind(var7)(var13, var12);
                    var8['children'] = var12;
                    var5 = var11.bind(var7)(var9, var8);
case 22:
                    var1[2] = var5;
                    var7 = _closure2_slot2;
                    var5 = null;
                    var5 = var5 != var7;
                    if(!var5) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var9 = _closure1_slot12;
                    var8 = _closure1_slot6;
                    var7 = {};
                    var10 = _closure2_slot7;
                    var10 = var10.tag;
                    var7['style'] = var10;
                    var12 = _closure1_slot12;
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 16;
                    var10 = var15[var13];
                    var6 = undefined;
                    var11 = var14.bind(var6)(var10);
                    var10 = {};
                    var13 = var15[var13];
                    var13 = var14.bind(var6)(var13);
                    var13 = var13.Sizes;
                    var13 = var13.REFRESH_SMALL_16;
                    var10['size'] = var13;
                    var13 = 18;
                    var13 = var15[var13];
                    var13 = var14.bind(var6)(var13);
                    var10['source'] = var13;
                    var13 = true;
                    var10['disableColor'] = var13;
                    var10 = var12.bind(var6)(var11, var10);
                    var7['children'] = var10;
                    var5 = var9.bind(var6)(var8, var7);
case 24:
                    var1[3] = var5;
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var13 = var13.bind(var15)(var11, var12);
            var12 = var15.useMemo;
            var11 = new Array(5);
            var11[0] = var19;
            var11[1] = var21;
            var11[2] = var20;
            var11[3] = var3;
            var11[4] = var18;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 19;
                    var1 = var1[var8];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1['user'] = var7;
                    var7 = _closure2_slot5;
                    var1['guildId'] = var7;
                    var7 = _closure1_slot10;
                    var10 = var7.OFFLINE;
                    var9 = _closure2_slot11;
                    var7 = null;
                    if(!(var10 !== var9)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var7 = _closure2_slot11;
case 26:
                    var1['status'] = var7;
                    var7 = _closure2_slot9;
                    var1['isMobileOnline'] = var7;
                    var7 = _closure2_slot10;
                    var1['isVROnline'] = var7;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.AvatarSizes;
                    var6 = var6.LARGE_48;
                    var1['size'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.avatarDecoration;
                    var1['avatarDecoration'] = var5;
                    var5 = true;
                    var1['autoStatusCutout'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var11 = var12.bind(var15)(var3, var11);
            var12 = var15.useMemo;
            var3 = new Array(4);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var17;
            var3[3] = var16;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var2 = var4.getUserTag;
                    var1 = _closure2_slot0;
                    var8 = var2.bind(var4)(var1);
                    var2 = null;
                    if(!(var2 != var8)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var1 = _closure2_slot0;
                    var1 = var1.isProvisional;
                    if(var1) { _fun0007_ip = 28; continue _fun0007 }
case 30:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 11;
                    var1 = var9[var1];
                    var1 = var4.bind(var6)(var1);
                    var4 = var1.Text;
                    var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    var1['children'] = var8;
                    var1 = var5.bind(var6)(var4, var1);
                    _fun0007_ip = 23; continue _fun0007;
case 28:
                    var4 = _closure2_slot4;
                    var4 = var2 != var4;
                    var2 = null;
                    if(!var4) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot16;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['user'] = var8;
                    var8 = _closure2_slot5;
                    var3['guildId'] = var8;
                    var8 = _closure2_slot4;
                    var3['type'] = var8;
                    var7 = _closure2_slot12;
                    var7 = !var7;
                    var3['animate'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
case 31:
                    var1 = var2;
case 23:
                    return var1;
                }
            };
            var12 = var12.bind(var15)(var1, var3);
            var3 = _closure1_slot12;
            var1 = 20;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SearchListRow;
            var1 = {};
            var1['label'] = var13;
            var1['subLabel'] = var12;
            var1['icon'] = var11;
            var1['onPress'] = var10;
            if(!var9) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var7 = _closure1_slot15;
case 33:
            var1['trailing'] = var7;
            var1['accessibilityActions'] = var6;
            var1['onAccessibilityAction'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/DMRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();