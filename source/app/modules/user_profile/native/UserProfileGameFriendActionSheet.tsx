// app/modules/user_profile/native/UserProfileGameFriendActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function GameFriendApplicationRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.application;
            var _closure2_slot0 = var1;
            var7 = var3.userId;
            var _closure2_slot1 = var7;
            var8 = var3.userDisplayName;
            var _closure2_slot2 = var8;
            var3 = _closure1_slot12;
            var5 = undefined;
            var10 = var3.bind(var5)();
            var6 = _closure1_slot5;
            var4 = var6.useCallback;
            var9 = var1.id;
            var3 = new Array(4);
            var3[0] = var9;
            var9 = var1.name;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.confirmRemoveGameFriend;
                var2 = {};
                var6 = _closure2_slot2;
                var2['userDisplayName'] = var6;
                var6 = _closure2_slot1;
                var2['userId'] = var6;
                var5 = _closure2_slot0;
                var6 = var5.id;
                var2['applicationId'] = var6;
                var5 = var5.name;
                var2['gameName'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot10;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 10;
            var2 = var15[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.ActionSheetRow;
            var2 = {};
            var9 = _closure1_slot10;
            var7 = 11;
            var7 = var15[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.XSmallIcon;
            var7 = {'size': 'md', 'color': 'redesign-button-tertiary-text'};
            var7 = var9.bind(var5)(var8, var7);
            var2['trailing'] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot7;
            var7 = {};
            var12 = var10.applicationNameWrapper;
            var7['style'] = var12;
            var14 = _closure1_slot10;
            var13 = _closure1_slot1;
            var12 = 12;
            var12 = var15[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var10 = var10.gameIcon;
            var12['style'] = var10;
            var10 = 'contain';
            var12['resizeMode'] = var10;
            var10 = {};
            var16 = var1.getIconURL;
            var15 = 32;
            var16 = var16.bind(var1)(var15);
            var15 = null;
            var17 = var15 != var16;
            var15 = '';
            if(!var17) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var16;
case 2:
            var10['uri'] = var15;
            var12['source'] = var10;
            var10 = true;
            var12['disableColor'] = var10;
            var10 = var1.id;
            var12 = var14.bind(var5)(var13, var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 13;
            var11 = var14[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var14 = var1.name;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var2['label'] = var7;
            var2['onPress'] = var6;
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center', 'gap': 12};
    var4['applicationNameWrapper'] = var9;
    var9 = {'width': 32, 'height': 32};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['gameIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileGameFriendActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileGameFriendActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var _closure2_slot0 = var2;
            var7 = var1.guildId;
            var6 = var1.channelId;
            var19 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 14;
            var1 = var11[var1];
            var4 = undefined;
            var5 = var19.bind(var4)(var1);
            var3 = var5.useGameFriendsForUser;
            var1 = var2.id;
            var1 = var3.bind(var5)(var1);
            var _closure2_slot1 = var1;
            var8 = _closure1_slot5;
            var5 = var8.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.applicationId;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var8)(var1, var3);
            var _closure2_slot2 = var1;
            var5 = _closure1_slot1;
            var3 = 15;
            var3 = var11[var3];
            var3 = var5.bind(var4)(var3);
            var12 = var3.bind(var4)(var1);
            var3 = 16;
            var3 = var11[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useName;
            var3 = var3.bind(var5)(var7, var6, var2);
            var _closure2_slot3 = var3;
            var6 = _closure1_slot5;
            var5 = var6.useState;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot8;
                    var4 = var5.isFriend;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var5 = _closure1_slot8;
                    var4 = var5.isBlockedOrIgnored;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                    var4 = _closure1_slot8;
                    var3 = var4.getRelationshipType;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var3.bind(var4)(var1);
                    var1 = _closure1_slot9;
                    var1 = var1.PENDING_OUTGOING;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = _closure1_slot9;
                    var2 = var2.PENDING_INCOMING;
                    var1 = var3 !== var2;
case 7:
                    return var1;
case 4:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var10 = _closure1_slot4;
            var5 = 1;
            var3 = var10.bind(var4)(var3, var5);
            var7 = 0;
            var6 = var3[var7];
            var8 = _closure1_slot5;
            var3 = var8.useState;
            var16 = false;
            var3 = var3.bind(var8)(var16);
            var8 = 2;
            var3 = var10.bind(var4)(var3, var8);
            var13 = var3[var7];
            var3 = var3[var5];
            var _closure2_slot4 = var3;
            var15 = _closure1_slot5;
            var3 = var15.useState;
            var3 = var3.bind(var15)(var16);
            var3 = var10.bind(var4)(var3, var8);
            var15 = var3[var7];
            var3 = var3[var5];
            var _closure2_slot5 = var3;
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var8 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                        var2 = _closure2_slot4;
                        var5 = undefined;
                        var4 = true;
                        var2 = var2.bind(var5)(var4);
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var5)(var4);
case 11: // try_start_0 // try_start_1
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 17;
                        var2 = var7[var2];
                        var7 = var6.bind(var5)(var2);
                        var6 = var7.addRelationship;
                        var2 = {};
                        var8 = _closure2_slot0;
                        var8 = var8.id;
                        var2['userId'] = var8;
                        var8 = {};
                        var9 = 'User Profile Action Sheet';
                        var8['location'] = var9;
                        var2['context'] = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address=104);
case 12:
                        return var2;
case 13:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 18;
                        var4 = var7[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.presentAddedFriendToast;
                        var4 = var4.bind(var6)();
case 16: // try_end0
                        _fun0004_ip = 17; continue _fun0004;
case 14: // try_end1
                        var6 = _closure2_slot5;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 18: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot4;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
case 17: // try_end2
                        var4 = _closure2_slot5;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 19: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot5;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 9:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var8.bind(var4)(var3);
            var8 = var2.id;
            var2 = new Array(1);
            var2[0] = var8;
            var16 = var5.bind(var7)(var3, var2);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.length;
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var1 = 20;
            var1 = var11[var1];
            var1 = var19.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var8 = _closure1_slot10;
            var5 = 21;
            var5 = var11[var5];
            var5 = var19.bind(var4)(var5);
            var7 = var5.BottomSheetTitleHeader;
            var5 = {};
            var21 = 22;
            var10 = var11[var21];
            var10 = var19.bind(var4)(var10);
            var18 = var10.intl;
            var17 = var18.string;
            var10 = var11[var21];
            var10 = var19.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.Uv/eT0;
            var10 = var17.bind(var18)(var10);
            var5['title'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            var1['header'] = var5;
            var8 = _closure1_slot10;
            var10 = 10;
            var5 = var11[var10];
            var5 = var19.bind(var4)(var5);
            var5 = var5.ActionSheetRow;
            var7 = var5.Group;
            var5 = {};
            var17 = var11[var21];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var11 = var11[var21];
            var11 = var19.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.YpCiMj;
            var11 = var17.bind(var18)(var11);
            var5['title'] = var11;
            var11 = var12.map;
            var9 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var6 = _closure1_slot10;
                    var5 = _closure1_slot13;
                    var4 = {};
                    var4['application'] = var2;
                    var7 = _closure2_slot3;
                    var4['userDisplayName'] = var7;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var4['userId'] = var3;
                    var3 = var2.id;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
case 22:
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var9 = _closure1_slot10;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = var17[var10];
            var7 = var20.bind(var4)(var7);
            var7 = var7.ActionSheetRow;
            var8 = var7.Group;
            var7 = {};
            var11 = var17[var21];
            var11 = var20.bind(var4)(var11);
            var18 = var11.intl;
            var12 = var18.string;
            var11 = var17[var21];
            var11 = var20.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.GbsGCg;
            var11 = var12.bind(var18)(var11);
            var7['title'] = var11;
            var12 = _closure1_slot10;
            var10 = var17[var10];
            var10 = var20.bind(var4)(var10);
            var11 = var10.ActionSheetRow;
            var10 = {};
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var22 = var18.intl;
            var19 = var22.string;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.LAcY7u;
            var18 = var19.bind(var22)(var18);
            var10['label'] = var18;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.YTvOU1;
            var17 = var18.bind(var19)(var17);
            var10['subLabel'] = var17;
            var10['onPress'] = var16;
            var10['disabled'] = var13;
            var13 = null;
            if(!var15) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var16 = _closure1_slot10;
            var15 = _closure1_slot6;
            var14 = {};
            var13 = var16.bind(var4)(var15, var14);
case 26:
            var10['trailing'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 24:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();