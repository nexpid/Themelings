// app/modules/instant_invite/native/components/InstantInviteRow.tsx
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.setSendState;
    var _closure1_slot9 = var8;
    var4 = var4.useInstantInviteSendStates;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteSendStates;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'width': 32, 'height': 32, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden', 'marginTop': 0, 'marginRight': 10, 'borderColor': null, 'borderStyle': 'solid', 'borderWidth': 2};
    var11 = 11;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_MUTED;
    var10['borderColor'] = var11;
    var4['acronym'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.row;
            var _closure2_slot0 = var4;
            var6 = var1.code;
            var _closure2_slot1 = var6;
            var3 = var1.onPressAvatar;
            var _closure2_slot2 = var3;
            var5 = var1.onInviteSent;
            var _closure2_slot3 = var5;
            var17 = var1.start;
            var16 = var1.end;
            var1 = var1.source;
            var _closure2_slot4 = var1;
            var1 = _closure1_slot13;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var1 = var4.item;
            var18 = var1.id;
            var _closure2_slot5 = var18;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 12;
            var8 = var12[var1];
            var15 = var7.bind(var5)(var8);
            var14 = var15.useStateFromStores;
            var8 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var8;
            var10 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isSubmitting;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var14.bind(var15)(var11, var10);
            var10 = var12[var1];
            var15 = var7.bind(var5)(var10);
            var14 = var15.useStateFromStores;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getError;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var14.bind(var15)(var10, var8);
            var14 = _closure1_slot10;
            var10 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 != var1;
                    var1 = null;
                    if(!var4) { _fun0002_ip = 49; continue _fun0002 }
 18:
                    var5 = _closure2_slot1;
                    var4 = arg1;
                    var4 = var4[var5];
                    var5 = var2 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 46; continue _fun0002 }
 38:
                    var3 = _closure2_slot5;
                    var2 = var4[var3];
 46:
                    var1 = var2;
 49:
                    return var1;
                }
            };
            var10 = var14.bind(var5)(var10);
            var1 = var12[var1];
            var15 = var7.bind(var5)(var1);
            var14 = var15.useStateFromStores;
            var1 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot5;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var29 = var14.bind(var15)(var7, var1);
            var7 = _closure1_slot1;
            var1 = 13;
            var1 = var12[var1];
            var1 = var7.bind(var5)(var1);
            var19 = var1.bind(var5)(var29);
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 1470; continue _fun0001 }
 260:
            var12 = function handlePress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = function handleSendState(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = arg1;
                            var7 = _closure1_slot9;
                            var6 = _closure2_slot1;
                            var5 = _closure2_slot5;
                            var1 = _closure1_slot11;
                            if(var3) { _fun0004_ip = 36; continue _fun0004 }
 28:
                            var4 = var1.ERROR;
                            _fun0004_ip = 42; continue _fun0004;
 36:
                            var4 = var1.SENT;
 42:
                            var1 = undefined;
                            var4 = var7.bind(var1)(var6, var5, var4);
                            if(!var3) { _fun0004_ip = 72; continue _fun0004 }
 54:
                            var4 = _closure2_slot3;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0004_ip = 72; continue _fun0004 }
 64:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var1)();
 72:
                            return var1;
                        }
                    };
                    var6 = _closure1_slot9;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot5;
                    var1 = _closure1_slot11;
                    var2 = var1.SENDING;
                    var1 = undefined;
                    var2 = var6.bind(var1)(var4, var3, var2);
                    var2 = _closure2_slot0;
                    var3 = var2.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 14;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.RowTypes;
                    var2 = var2.FRIEND;
                    if(!(var2 !== var3)) { _fun0003_ip = 524; continue _fun0003 }
 94:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.RowTypes;
                    var2 = var2.DM;
                    if(!(var2 !== var3)) { _fun0003_ip = 524; continue _fun0003 }
 130:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.RowTypes;
                    var2 = var2.GROUP_DM;
                    if(!(var2 !== var3)) { _fun0003_ip = 363; continue _fun0003 }
 166:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.RowTypes;
                    var2 = var2.CHANNEL;
                    if(!(var2 === var3)) { _fun0003_ip = 681; continue _fun0003 }
 202:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 681; continue _fun0003 }
 215:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 15;
                    var2 = var10[var6];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.enqueue;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var2['inviteKey'] = var9;
                    var9 = _closure1_slot0;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.InvitePropertiesType;
                    var6 = var6.CHANNEL;
                    var2['type'] = var6;
                    var10 = _closure1_slot4;
                    var9 = var10.getChannel;
                    var6 = _closure2_slot5;
                    var6 = var9.bind(var10)(var6);
                    var2['channel'] = var6;
                    var6 = 'Invite Action Sheet';
                    var2['location'] = var6;
                    var6 = {};
                    var11 = _closure1_slot7;
                    var10 = var11.getSelectedInviteMetadata;
                    var9 = _closure2_slot0;
                    var9 = var10.bind(var11)(var9);
                    var6['suggestionData'] = var9;
                    var9 = _closure2_slot4;
                    var6['source'] = var9;
                    var2['inviteAnalyticsMetadata'] = var6;
                    var2 = var3.bind(var4)(var2, var5);
                    _fun0003_ip = 681; continue _fun0003;
 363:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 681; continue _fun0003 }
 376:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 15;
                    var2 = var10[var6];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.enqueue;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var2['inviteKey'] = var9;
                    var9 = _closure1_slot0;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.InvitePropertiesType;
                    var6 = var6.GROUP_DM;
                    var2['type'] = var6;
                    var10 = _closure1_slot4;
                    var9 = var10.getChannel;
                    var6 = _closure2_slot5;
                    var6 = var9.bind(var10)(var6);
                    var2['channel'] = var6;
                    var6 = 'Invite Action Sheet';
                    var2['location'] = var6;
                    var6 = {};
                    var11 = _closure1_slot7;
                    var10 = var11.getSelectedInviteMetadata;
                    var9 = _closure2_slot0;
                    var9 = var10.bind(var11)(var9);
                    var6['suggestionData'] = var9;
                    var9 = _closure2_slot4;
                    var6['source'] = var9;
                    var2['inviteAnalyticsMetadata'] = var6;
                    var2 = var3.bind(var4)(var2, var5);
                    _fun0003_ip = 681; continue _fun0003;
 524:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 681; continue _fun0003 }
 537:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 15;
                    var2 = var10[var6];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.enqueue;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var2['inviteKey'] = var9;
                    var9 = _closure1_slot0;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.InvitePropertiesType;
                    var6 = var6.USER;
                    var2['type'] = var6;
                    var10 = _closure1_slot8;
                    var9 = var10.getUser;
                    var6 = _closure2_slot5;
                    var6 = var9.bind(var10)(var6);
                    var2['user'] = var6;
                    var6 = 'Invite Action Sheet';
                    var2['location'] = var6;
                    var6 = {};
                    var10 = _closure1_slot7;
                    var9 = var10.getSelectedInviteMetadata;
                    var8 = _closure2_slot0;
                    var8 = var9.bind(var10)(var8);
                    var6['suggestionData'] = var8;
                    var7 = _closure2_slot4;
                    var6['source'] = var7;
                    var2['inviteAnalyticsMetadata'] = var6;
                    var2 = var3.bind(var4)(var2, var5);
 681:
                    return var1;
                }
            };
            var6 = var4.type;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var14 = 14;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.DM;
            if(!(var4 !== var6)) { _fun0001_ip = 951; continue _fun0001 }
 311:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.FRIEND;
            if(!(var4 !== var6)) { _fun0001_ip = 951; continue _fun0001 }
 347:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var6)) { _fun0001_ip = 765; continue _fun0001 }
 383:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.CHANNEL;
            if(!(var4 !== var6)) { _fun0001_ip = 418; continue _fun0001 }
 416:
            return var1;
 418:
            var6 = var1 == var29;
            var4 = undefined;
            if(var6) { _fun0001_ip = 432; continue _fun0001 }
 427:
            var4 = var29.guild_id;
 432:
            var4 = var1 != var4;
            var25 = undefined;
            if(!var4) { _fun0001_ip = 460; continue _fun0001 }
 441:
            var7 = _closure1_slot6;
            var6 = var7.getGuild;
            var4 = var29.guild_id;
            var25 = var6.bind(var7)(var4);
 460:
            if(!(var1 != var25)) { _fun0001_ip = 763; continue _fun0001 }
 467:
            var4 = var25.icon;
            if(!(var1 == var4)) { _fun0001_ip = 586; continue _fun0001 }
 476:
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 22;
            var4 = var20[var4];
            var7 = var14.bind(var5)(var4);
            var6 = var7.getAcronym;
            var4 = var25.name;
            var15 = var6.bind(var7)(var4);
            var7 = _closure1_slot12;
            var6 = _closure1_slot3;
            var4 = {};
            var13 = var13.acronym;
            var4['style'] = var13;
            var13 = 23;
            var13 = var20[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {};
            var20 = 'text-sm/bold';
            var13['variant'] = var20;
            var13['children'] = var15;
            var13 = var7.bind(var5)(var14, var13);
            var4['children'] = var13;
            var14 = var7.bind(var5)(var6, var4);
            _fun0001_ip = 721; continue _fun0001;
 586:
            var7 = _closure1_slot12;
            var23 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 17;
            var4 = var20[var13];
            var6 = var23.bind(var5)(var4);
            var4 = {};
            var15 = 21;
            var21 = var20[var15];
            var22 = var23.bind(var5)(var21);
            var21 = var22.makeSource;
            var15 = var20[var15];
            var24 = var23.bind(var5)(var15);
            var23 = var24.getGuildIconURL;
            var15 = {};
            var26 = var25.id;
            var15['id'] = var26;
            var25 = var25.icon;
            var15['icon'] = var25;
            var25 = 32;
            var15['size'] = var25;
            var15 = var23.bind(var24)(var15);
            var15 = var21.bind(var22)(var15);
            var4['source'] = var15;
            var15 = _closure1_slot0;
            var13 = var20[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.REFRESH_MEDIUM_32;
            var4['size'] = var13;
            var14 = var7.bind(var5)(var6, var4);
 721:
            var4 = var1 == var19;
            var13 = '';
            if(var4) { _fun0001_ip = 754; continue _fun0001 }
 732:
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = '#';
            var13 = var6.bind(var4)(var19);
 754:
            var7 = undefined;
            var6 = undefined;
            _fun0001_ip = 1330; continue _fun0001;
 763:
            return var1;
 765:
            var4 = var1 != var29;
            var15 = null;
            if(!var4) { _fun0001_ip = 922; continue _fun0001 }
 777:
            var21 = _closure1_slot12;
            var27 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 17;
            var4 = var24[var22];
            var20 = var27.bind(var5)(var4);
            var4 = {};
            var23 = 21;
            var25 = var24[var23];
            var26 = var27.bind(var5)(var25);
            var25 = var26.makeSource;
            var23 = var24[var23];
            var28 = var27.bind(var5)(var23);
            var27 = var28.getChannelIconURL;
            var23 = {};
            var30 = var29.id;
            var23['id'] = var30;
            var30 = var29.icon;
            var23['icon'] = var30;
            var29 = var29.application_id;
            var23['applicationId'] = var29;
            var29 = 32;
            var23['size'] = var29;
            var23 = var27.bind(var28)(var23);
            var23 = var25.bind(var26)(var23);
            var4['source'] = var23;
            var23 = _closure1_slot0;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.AvatarSizes;
            var22 = var22.REFRESH_MEDIUM_32;
            var4['size'] = var22;
            var15 = var21.bind(var5)(var20, var4);
 922:
            var20 = var1 != var19;
            var4 = '';
            if(!var20) { _fun0001_ip = 936; continue _fun0001 }
 933:
            var4 = var19;
 936:
            var13 = var4;
            var14 = var15;
            var7 = undefined;
            var6 = undefined;
            _fun0001_ip = 1330; continue _fun0001;
 951:
            var15 = _closure1_slot8;
            var4 = var15.getUser;
            var24 = var4.bind(var15)(var18);
            var18 = _closure1_slot12;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var4 = 16;
            var4 = var19[var4];
            var4 = var15.bind(var5)(var4);
            var15 = var4.PressableOpacity;
            var4 = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var20 = function onPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 41; continue _fun0005 }
 26:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var4['onPress'] = var20;
            var20 = {'padding': 8, 'margin': 4294967288};
            var4['style'] = var20;
            var20 = _closure1_slot1;
            var21 = 17;
            var19 = var19[var21];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var22 = var1 == var24;
            var23 = undefined;
            if(var22) { _fun0001_ip = 1077; continue _fun0001 }
 1066:
            var22 = var24.getAvatarSource;
            var23 = var22.bind(var24)(var5);
 1077:
            var25 = var1 != var23;
            var22 = null;
            if(!var25) { _fun0001_ip = 1089; continue _fun0001 }
 1086:
            var22 = var23;
 1089:
            var19['source'] = var22;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var21 = var22[var21];
            var21 = var23.bind(var5)(var21);
            var21 = var21.AvatarSizes;
            var21 = var21.REFRESH_MEDIUM_32;
            var19['size'] = var21;
            var19 = var18.bind(var5)(var20, var19);
            var4['children'] = var19;
            var15 = var18.bind(var5)(var15, var4);
            var19 = _closure1_slot12;
            var21 = _closure1_slot1;
            var4 = 18;
            var4 = var22[var4];
            var18 = var21.bind(var5)(var4);
            var4 = {};
            var20 = 19;
            var20 = var22[var20];
            var21 = var21.bind(var5)(var20);
            var20 = var21.getGlobalName;
            var20 = var20.bind(var21)(var24);
            var4['nick'] = var20;
            var4['user'] = var24;
            var4 = var19.bind(var5)(var18, var4);
            var18 = var1 != var3;
            var3 = undefined;
            if(!var18) { _fun0001_ip = 1314; continue _fun0001 }
 1211:
            var19 = {};
            var18 = 'viewProfile';
            var19['name'] = var18;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 20;
            var21 = var23[var18];
            var21 = var20.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var18 = var23[var18];
            var18 = var20.bind(var5)(var18);
            var18 = var18.t;
            var20 = var18.uCenkp;
            var18 = {};
            var25 = var1 == var24;
            var23 = undefined;
            if(var25) { _fun0001_ip = 1289; continue _fun0001 }
 1284:
            var23 = var24.tag;
 1289:
            var18['username'] = var23;
            var18 = var21.bind(var22)(var20, var18);
            var19['label'] = var18;
            var18 = new Array(1);
            var18[0] = var19;
            var3 = var18;
 1314:
            var6 = function z(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'viewProfile';
                    var1 = var1 === var2;
                    if(!var1) { _fun0006_ip = 41; continue _fun0006 }
 28:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var1 = var2 !== var3;
 41:
                    if(!var1) { _fun0006_ip = 72; continue _fun0006 }
 44:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 72; continue _fun0006 }
 57:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var3;
            var14 = var15;
            var13 = var4;
 1330:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 24;
            var2 = var15[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var2['start'] = var17;
            var2['end'] = var16;
            var2['icon'] = var14;
            var2['label'] = var13;
            var14 = _closure1_slot1;
            var13 = 25;
            var13 = var15[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['sendState'] = var10;
            var13['onPressSend'] = var12;
            var13 = var4.bind(var5)(var14, var13);
            var2['trailing'] = var13;
            var2['onPress'] = var12;
            var8 = var1 != var8;
            if(var8) { _fun0001_ip = 1431; continue _fun0001 }
 1428:
            var8 = var11;
 1431:
            if(var8) { _fun0001_ip = 1448; continue _fun0001 }
 1434:
            var9 = _closure1_slot11;
            var9 = var9.SENT;
            var8 = var10 === var9;
 1448:
            var2['disabled'] = var8;
            var2['accessibilityActions'] = var7;
            var2['onAccessibilityAction'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1470:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/components/InstantInviteRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();