// app/modules/search/native/components/list/rows/DMRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function FriendPresence(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.user;
            var3 = var1.type;
            var6 = var1.animate;
            var9 = var1.guildId;
            var1 = _closure1_slot15;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = _closure1_slot12;
            var1 = var1.PENDING_INCOMING;
            if(!(var3 !== var1)) { _fun0001_ip = 133; continue _fun0001 }
 51:
            var4 = _closure1_slot13;
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
            _fun0001_ip = 209; continue _fun0001;
 133:
            var4 = _closure1_slot13;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var6 = 12;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.getUserTag;
            var6 = var6.bind(var7)(var8);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 209:
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
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
    var4 = var4.ActivityIndicator;
    var _closure1_slot7 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StatusTypes;
    var _closure1_slot11 = var8;
    var4 = var4.RelationshipTypes;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 12;
    var10['marginRight'] = var12;
    var4['avatar'] = var10;
    var10 = {'width': 14, 'height': 14};
    var4['activityStatusIcon'] = var10;
    var10 = {'color': null, 'fontSize': 14, 'lineHeight': 18, 'fontWeight': '400'};
    var12 = 10;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_SECONDARY;
    var10['color'] = var12;
    var4['activityStatusText'] = var10;
    var10 = {};
    var10['marginLeft'] = var11;
    var4['tag'] = var10;
    var10 = {};
    var11 = 'row';
    var10['flexDirection'] = var11;
    var4['title'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function DMRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var17 = var2.user;
            var _closure2_slot0 = var17;
            var3 = var2.nickname;
            var _closure2_slot1 = var3;
            var3 = var2.premiumSince;
            var _closure2_slot2 = var3;
            var19 = var2.isOwner;
            var _closure2_slot3 = var19;
            var15 = var2.type;
            var _closure2_slot4 = var15;
            var16 = var2.guildId;
            var _closure2_slot5 = var16;
            var22 = var2.onPress;
            var _closure2_slot6 = var22;
            var7 = var2.trailing;
            var6 = var2.accessibilityActions;
            var5 = var2.onAccessibilityAction;
            var4 = undefined;
            var _closure2_slot12 = var4;
            var2 = _closure1_slot15;
            var21 = var2.bind(var4)();
            var _closure2_slot7 = var21;
            var20 = _closure1_slot5;
            var9 = var20.useState;
            var2 = false;
            var10 = var9.bind(var20)(var2);
            var9 = _closure1_slot4;
            var2 = 2;
            var10 = var9.bind(var4)(var10, var2);
            var2 = 0;
            var9 = var10[var2];
            var2 = 1;
            var2 = var10[var2];
            var _closure2_slot8 = var2;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 14;
            var2 = var12[var10];
            var18 = var11.bind(var4)(var2);
            var14 = var18.useStateFromStoresObject;
            var2 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var5 = var4.isMobileOnline;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['isMobileOnline'] = var3;
                var3 = var4.getStatus;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['status'] = var2;
                return var1;
            };
            var13 = var14.bind(var18)(var13, var2);
            var2 = var13.isMobileOnline;
            var _closure2_slot9 = var2;
            var18 = var13.status;
            var _closure2_slot10 = var18;
            var13 = var12[var10];
            var24 = var11.bind(var4)(var13);
            var23 = var24.useStateFromStores;
            var13 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var14 = var23.bind(var24)(var14, var13);
            var _closure2_slot11 = var14;
            var10 = var12[var10];
            var13 = var11.bind(var4)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 42; continue _fun0003 }
 13:
                    var4 = _closure1_slot10;
                    var3 = var4.getNickname;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 46; continue _fun0003;
 42:
                    var1 = _closure2_slot1;
 46:
                    return var1;
                }
            };
            var12 = var12.bind(var13)(var11, var10);
            _closure2_slot1 = var12;
            var13 = var20.useCallback;
            var11 = _closure1_slot3;
            var10 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 94; continue _fun0004 }
 7:
                        var4 = _closure2_slot8;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
 23: // try_start_0
                        var4 = _closure2_slot6;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=45);
 43:
                        return var2;
 45:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 65; continue _fun0004 }
 51: // try_end0
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var5;
 65:
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 79: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot8;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 94:
                        return var1;
                    }
                };
                return var1;
            };
            var11 = var11.bind(var4)(var10);
            var10 = new Array(2);
            var10[0] = var22;
            var22 = var17.id;
            var10[1] = var22;
            var10 = var13.bind(var20)(var11, var10);
            var11 = null;
            var20 = var12;
            if(!(var11 == var20)) { _fun0002_ip = 396; continue _fun0002 }
 365:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 12;
            var11 = var13[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.getName;
            var20 = var11.bind(var12)(var17);
 396:
            _closure2_slot12 = var20;
            var12 = _closure1_slot5;
            var13 = var12.useMemo;
            var22 = var21.title;
            var11 = new Array(6);
            var11[0] = var22;
            var21 = var21.tag;
            var11[1] = var21;
            var11[2] = var20;
            var11[3] = var17;
            var11[4] = var19;
            var11[5] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot7;
                    var1 = var1.title;
                    var2['style'] = var1;
                    var7 = _closure1_slot13;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.Text;
                    var5 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
                    var8 = _closure2_slot12;
                    var5['children'] = var8;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = new Array(4);
                    var5[0] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.bot;
                    if(!var6) { _fun0005_ip = 227; continue _fun0005 }
 109:
                    var9 = _closure1_slot13;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var15 = 15;
                    var7 = var7[var15];
                    var8 = var8.bind(var1)(var7);
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
                    var13 = var14.bind(var1)(var13);
                    var13 = var13.Types;
                    if(var12) { _fun0005_ip = 211; continue _fun0005 }
 203:
                    var12 = var13.BOT;
                    _fun0005_ip = 217; continue _fun0005;
 211:
                    var12 = var13.SYSTEM_DM;
 217:
                    var7['type'] = var12;
                    var6 = var9.bind(var1)(var8, var7);
 227:
                    var5[1] = var6;
                    var6 = _closure2_slot3;
                    if(!var6) { _fun0005_ip = 351; continue _fun0005 }
 238:
                    var9 = _closure1_slot13;
                    var8 = _closure1_slot6;
                    var7 = {};
                    var12 = _closure2_slot7;
                    var12 = var12.tag;
                    var7['style'] = var12;
                    var14 = _closure1_slot13;
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var15 = 16;
                    var12 = var17[var15];
                    var13 = var16.bind(var1)(var12);
                    var12 = {};
                    var15 = var17[var15];
                    var15 = var16.bind(var1)(var15);
                    var15 = var15.Sizes;
                    var15 = var15.REFRESH_SMALL_16;
                    var12['size'] = var15;
                    var15 = 17;
                    var15 = var17[var15];
                    var15 = var16.bind(var1)(var15);
                    var12['source'] = var15;
                    var15 = true;
                    var12['disableColor'] = var15;
                    var12 = var14.bind(var1)(var13, var12);
                    var7['children'] = var12;
                    var6 = var9.bind(var1)(var8, var7);
 351:
                    var5[2] = var6;
                    var7 = _closure2_slot2;
                    var6 = null;
                    var6 = var6 != var7;
                    if(!var6) { _fun0005_ip = 481; continue _fun0005 }
 368:
                    var9 = _closure1_slot13;
                    var8 = _closure1_slot6;
                    var7 = {};
                    var11 = _closure2_slot7;
                    var11 = var11.tag;
                    var7['style'] = var11;
                    var12 = _closure1_slot13;
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 16;
                    var10 = var15[var13];
                    var11 = var14.bind(var1)(var10);
                    var10 = {};
                    var13 = var15[var13];
                    var13 = var14.bind(var1)(var13);
                    var13 = var13.Sizes;
                    var13 = var13.REFRESH_SMALL_16;
                    var10['size'] = var13;
                    var13 = 18;
                    var13 = var15[var13];
                    var13 = var14.bind(var1)(var13);
                    var10['source'] = var13;
                    var13 = true;
                    var10['disableColor'] = var13;
                    var10 = var12.bind(var1)(var11, var10);
                    var7['children'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
 481:
                    var5[3] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var13 = var13.bind(var12)(var3, var11);
            var11 = var12.useMemo;
            var3 = new Array(4);
            var3[0] = var17;
            var3[1] = var18;
            var3[2] = var2;
            var3[3] = var16;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot13;
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
                    var7 = _closure1_slot11;
                    var10 = var7.OFFLINE;
                    var9 = _closure2_slot10;
                    var7 = null;
                    if(!(var10 !== var9)) { _fun0006_ip = 74; continue _fun0006 }
 70:
                    var7 = _closure2_slot10;
 74:
                    var1['status'] = var7;
                    var7 = _closure2_slot9;
                    var1['isMobileOnline'] = var7;
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
            var11 = var11.bind(var12)(var2, var3);
            var3 = var12.useMemo;
            var2 = new Array(4);
            var2[0] = var17;
            var2[1] = var16;
            var2[2] = var15;
            var2[3] = var14;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(!(var2 != var8)) { _fun0007_ip = 117; continue _fun0007 }
 49:
                    var1 = _closure2_slot0;
                    var1 = var1.isProvisional;
                    if(var1) { _fun0007_ip = 117; continue _fun0007 }
 62:
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 11;
                    var1 = var9[var1];
                    var1 = var4.bind(var6)(var1);
                    var4 = var1.Text;
                    var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    var1['children'] = var8;
                    var1 = var5.bind(var6)(var4, var1);
                    _fun0007_ip = 185; continue _fun0007;
 117:
                    var4 = _closure2_slot4;
                    var4 = var2 != var4;
                    var2 = null;
                    if(!var4) { _fun0007_ip = 182; continue _fun0007 }
 130:
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot16;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['user'] = var8;
                    var8 = _closure2_slot5;
                    var3['guildId'] = var8;
                    var8 = _closure2_slot4;
                    var3['type'] = var8;
                    var7 = _closure2_slot11;
                    var7 = !var7;
                    var3['animate'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 182:
                    var1 = var2;
 185:
                    return var1;
                }
            };
            var12 = var3.bind(var12)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 20;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SearchListRow;
            var1 = {};
            var1['label'] = var13;
            var1['subLabel'] = var12;
            var1['icon'] = var11;
            var1['onPress'] = var10;
            if(!var9) { _fun0002_ip = 604; continue _fun0002 }
 588:
            var10 = _closure1_slot13;
            var9 = _closure1_slot7;
            var8 = {};
            var7 = var10.bind(var4)(var9, var8);
 604:
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