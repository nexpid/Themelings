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
    var13 = var13.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_MUTED;
    var10['borderColor'] = var11;
    var4['acronym'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function InstantInviteRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            var5 = undefined;
            var _closure2_slot5 = var5;
            var12 = function handlePress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = function handleSendState(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure2_slot1;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                            var8 = _closure1_slot9;
                            var7 = _closure2_slot1;
                            var6 = _closure2_slot5;
                            var2 = _closure1_slot11;
                            if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var5 = var2.ERROR;
                            _fun0003_ip = 6; continue _fun0003;
case 4:
                            var5 = var2.SENT;
case 6:
                            var2 = undefined;
                            var5 = var8.bind(var2)(var7, var6, var5);
                            if(!var3) { _fun0003_ip = 2; continue _fun0003 }
case 7:
                            var3 = _closure2_slot3;
                            if(!(var4 != var3)) { _fun0003_ip = 2; continue _fun0003 }
case 8:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var2)();
case 2:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var8 = _closure1_slot9;
                    var5 = _closure2_slot1;
                    var3 = _closure2_slot5;
                    var1 = _closure1_slot11;
                    var1 = var1.SENDING;
                    var9 = undefined;
                    var1 = var8.bind(var9)(var5, var3, var1);
                    var1 = _closure2_slot0;
                    var3 = var1.type;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 14;
                    var1 = var1[var8];
                    var1 = var5.bind(var9)(var1);
                    var1 = var1.RowTypes;
                    var1 = var1.FRIEND;
                    if(!(var1 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var5.bind(var9)(var1);
                    var1 = var1.RowTypes;
                    var1 = var1.DM;
                    if(!(var1 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var5.bind(var9)(var1);
                    var1 = var1.RowTypes;
                    var1 = var1.GROUP_DM;
                    if(!(var1 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var5.bind(var9)(var1);
                    var1 = var1.RowTypes;
                    var1 = var1.CHANNEL;
                    if(!(var1 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 16:
                    var1 = _closure2_slot1;
                    if(!(var2 != var1)) { _fun0002_ip = 9; continue _fun0002 }
case 17:
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 15;
                    var1 = var11[var8];
                    var5 = var3.bind(var9)(var1);
                    var3 = var5.enqueue;
                    var1 = {};
                    var10 = _closure2_slot1;
                    var1['inviteKey'] = var10;
                    var10 = _closure1_slot0;
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.InvitePropertiesType;
                    var8 = var8.CHANNEL;
                    var1['type'] = var8;
                    var11 = _closure1_slot4;
                    var10 = var11.getChannel;
                    var8 = _closure2_slot5;
                    var8 = var10.bind(var11)(var8);
                    var1['channel'] = var8;
                    var8 = 'Invite Action Sheet';
                    var1['location'] = var8;
                    var8 = {};
                    var12 = _closure1_slot7;
                    var11 = var12.getSelectedInviteMetadata;
                    var10 = _closure2_slot0;
                    var10 = var11.bind(var12)(var10);
                    var8['suggestionData'] = var10;
                    var10 = _closure2_slot4;
                    var8['source'] = var10;
                    var1['inviteAnalyticsMetadata'] = var8;
                    var1 = var3.bind(var5)(var1, var4);
                    _fun0002_ip = 9; continue _fun0002;
case 14:
                    var1 = _closure2_slot1;
                    if(!(var2 != var1)) { _fun0002_ip = 9; continue _fun0002 }
case 18:
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 15;
                    var1 = var11[var8];
                    var5 = var3.bind(var9)(var1);
                    var3 = var5.enqueue;
                    var1 = {};
                    var10 = _closure2_slot1;
                    var1['inviteKey'] = var10;
                    var10 = _closure1_slot0;
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.InvitePropertiesType;
                    var8 = var8.GROUP_DM;
                    var1['type'] = var8;
                    var11 = _closure1_slot4;
                    var10 = var11.getChannel;
                    var8 = _closure2_slot5;
                    var8 = var10.bind(var11)(var8);
                    var1['channel'] = var8;
                    var8 = 'Invite Action Sheet';
                    var1['location'] = var8;
                    var8 = {};
                    var12 = _closure1_slot7;
                    var11 = var12.getSelectedInviteMetadata;
                    var10 = _closure2_slot0;
                    var10 = var11.bind(var12)(var10);
                    var8['suggestionData'] = var10;
                    var10 = _closure2_slot4;
                    var8['source'] = var10;
                    var1['inviteAnalyticsMetadata'] = var8;
                    var1 = var3.bind(var5)(var1, var4);
                    _fun0002_ip = 9; continue _fun0002;
case 11:
                    var1 = _closure2_slot1;
                    if(!(var2 != var1)) { _fun0002_ip = 9; continue _fun0002 }
case 19:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 15;
                    var1 = var10[var5];
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.enqueue;
                    var1 = {};
                    var8 = _closure2_slot1;
                    var1['inviteKey'] = var8;
                    var8 = _closure1_slot0;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.InvitePropertiesType;
                    var5 = var5.USER;
                    var1['type'] = var5;
                    var9 = _closure1_slot8;
                    var8 = var9.getUser;
                    var5 = _closure2_slot5;
                    var5 = var8.bind(var9)(var5);
                    var1['user'] = var5;
                    var5 = 'Invite Action Sheet';
                    var1['location'] = var5;
                    var5 = {};
                    var9 = _closure1_slot7;
                    var8 = var9.getSelectedInviteMetadata;
                    var7 = _closure2_slot0;
                    var7 = var8.bind(var9)(var7);
                    var5['suggestionData'] = var7;
                    var6 = _closure2_slot4;
                    var5['source'] = var6;
                    var1['inviteAnalyticsMetadata'] = var5;
                    var1 = var2.bind(var3)(var1, var4);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = _closure1_slot13;
            var13 = var1.bind(var5)();
            var1 = var4.item;
            var18 = var1.id;
            _closure2_slot5 = var18;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 12;
            var8 = var14[var1];
            var19 = var7.bind(var5)(var8);
            var15 = var19.useStateFromStores;
            var8 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var8;
            var10 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isSubmitting;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var15.bind(var19)(var11, var10);
            var10 = var14[var1];
            var19 = var7.bind(var5)(var10);
            var15 = var19.useStateFromStores;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getError;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var15.bind(var19)(var10, var8);
            var15 = _closure1_slot10;
            var10 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 != var1;
                    var1 = null;
                    if(!var4) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var5 = _closure2_slot1;
                    var4 = arg1;
                    var4 = var4[var5];
                    var5 = var2 == var4;
                    var2 = undefined;
                    if(var5) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var3 = _closure2_slot5;
                    var2 = var4[var3];
case 4:
                    var1 = var2;
case 20:
                    return var1;
                }
            };
            var10 = var15.bind(var5)(var10);
            var1 = var14[var1];
            var19 = var7.bind(var5)(var1);
            var15 = var19.useStateFromStores;
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
            var30 = var15.bind(var19)(var7, var1);
            var7 = _closure1_slot1;
            var1 = 13;
            var1 = var14[var1];
            var1 = var7.bind(var5)(var1);
            var19 = var1.bind(var5)(var30);
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var4.type;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var14 = 14;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.DM;
            if(!(var4 !== var6)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.FRIEND;
            if(!(var4 !== var6)) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var6)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var4 = var7.bind(var5)(var4);
            var4 = var4.RowTypes;
            var4 = var4.CHANNEL;
            if(!(var4 !== var6)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            return var1;
case 29:
            var6 = var1 == var30;
            var4 = undefined;
            if(var6) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var4 = var30.guild_id;
case 31:
            var4 = var1 != var4;
            var26 = undefined;
            if(!var4) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var7 = _closure1_slot6;
            var6 = var7.getGuild;
            var4 = var30.guild_id;
            var26 = var6.bind(var7)(var4);
case 33:
            if(!(var1 != var26)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var4 = var26.icon;
            if(!(var1 == var4)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 22;
            var4 = var20[var4];
            var7 = var14.bind(var5)(var4);
            var6 = var7.getAcronym;
            var4 = var26.name;
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
            _fun0001_ip = 39; continue _fun0001;
case 37:
            var7 = _closure1_slot12;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 17;
            var4 = var20[var13];
            var4 = var15.bind(var5)(var4);
            var6 = var4.Avatar;
            var4 = {};
            var24 = _closure1_slot1;
            var21 = 21;
            var22 = var20[var21];
            var23 = var24.bind(var5)(var22);
            var22 = var23.makeSource;
            var21 = var20[var21];
            var25 = var24.bind(var5)(var21);
            var24 = var25.getGuildIconURL;
            var21 = {};
            var27 = var26.id;
            var21['id'] = var27;
            var26 = var26.icon;
            var21['icon'] = var26;
            var26 = 32;
            var21['size'] = var26;
            var21 = var24.bind(var25)(var21);
            var21 = var22.bind(var23)(var21);
            var4['source'] = var21;
            var13 = var20[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.REFRESH_MEDIUM_32;
            var4['size'] = var13;
            var14 = var7.bind(var5)(var6, var4);
case 39:
            var4 = var1 == var19;
            var13 = '';
            if(var4) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = '#';
            var13 = var6.bind(var4)(var19);
case 40:
            var7 = undefined;
            var6 = undefined;
            _fun0001_ip = 42; continue _fun0001;
case 35:
            return var1;
case 27:
            var4 = var1 != var30;
            var15 = null;
            if(!var4) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var21 = _closure1_slot12;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 17;
            var4 = var24[var22];
            var4 = var23.bind(var5)(var4);
            var20 = var4.Avatar;
            var4 = {};
            var28 = _closure1_slot1;
            var25 = 21;
            var26 = var24[var25];
            var27 = var28.bind(var5)(var26);
            var26 = var27.makeSource;
            var25 = var24[var25];
            var29 = var28.bind(var5)(var25);
            var28 = var29.getChannelIconURL;
            var25 = {};
            var31 = var30.id;
            var25['id'] = var31;
            var31 = var30.icon;
            var25['icon'] = var31;
            var30 = var30.application_id;
            var25['applicationId'] = var30;
            var30 = 32;
            var25['size'] = var30;
            var25 = var28.bind(var29)(var25);
            var25 = var26.bind(var27)(var25);
            var4['source'] = var25;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.AvatarSizes;
            var22 = var22.REFRESH_MEDIUM_32;
            var4['size'] = var22;
            var15 = var21.bind(var5)(var20, var4);
case 43:
            var20 = var1 != var19;
            var4 = '';
            if(!var20) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var4 = var19;
case 45:
            var13 = var4;
            var14 = var15;
            var7 = undefined;
            var6 = undefined;
            _fun0001_ip = 42; continue _fun0001;
case 24:
            var15 = _closure1_slot8;
            var4 = var15.getUser;
            var24 = var4.bind(var15)(var18);
            var18 = _closure1_slot12;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var4 = 16;
            var4 = var19[var4];
            var4 = var20.bind(var5)(var4);
            var15 = var4.PressableOpacity;
            var4 = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var21 = function onPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var4['onPress'] = var21;
            var21 = {'padding': 8, 'margin': 4294967288};
            var4['style'] = var21;
            var21 = 17;
            var19 = var19[var21];
            var19 = var20.bind(var5)(var19);
            var20 = var19.Avatar;
            var19 = {};
            var22 = var1 == var24;
            var23 = undefined;
            if(var22) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var22 = var24.getAvatarSource;
            var23 = var22.bind(var24)(var5);
case 49:
            var25 = var1 != var23;
            var22 = null;
            if(!var25) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var22 = var23;
case 51:
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
            if(!var18) { _fun0001_ip = 53; continue _fun0001 }
case 54:
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
            var20 = var18.uCenkh;
            var18 = {};
            var25 = var1 == var24;
            var23 = undefined;
            if(var25) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var23 = var24.tag;
case 55:
            var18['username'] = var23;
            var18 = var21.bind(var22)(var20, var18);
            var19['label'] = var18;
            var18 = new Array(1);
            var18[0] = var19;
            var3 = var18;
case 53:
            var6 = function f(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'viewProfile';
                    var1 = var1 === var2;
                    if(!var1) { _fun0006_ip = 47; continue _fun0006 }
case 57:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var1 = var2 !== var3;
case 47:
                    if(!var1) { _fun0006_ip = 8; continue _fun0006 }
case 58:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 8; continue _fun0006 }
case 59:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var3;
            var14 = var15;
            var13 = var4;
case 42:
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
            if(var8) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var8 = var11;
case 60:
            if(var8) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var9 = _closure1_slot11;
            var9 = var9.SENT;
            var8 = var10 === var9;
case 62:
            var2['disabled'] = var8;
            var2['accessibilityActions'] = var7;
            var2['onAccessibilityAction'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 22:
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