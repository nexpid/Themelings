// app/modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function handleOneRecipientInDM() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _handleOneRecipientInDM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 13;
                    var2 = var2[var5];
                    var6 = undefined;
                    var7 = var4.bind(var6)(var2);
                    var4 = var7.openPrivateChannel;
                    var2 = {};
                    var8 = new Array(0);
                    var2['recipientIds'] = var8;
                    var8 = 'New Group DM';
                    var2['location'] = var8;
                    var8 = arg2;
                    var2['onBeforeTransition'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=79);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.addRecipients;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var2, var3, var6);
                    SaveGenerator(address=122);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    return var3;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _handleInviteUsers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    var7 = arguments[1];
                    var6 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var _closure4_slot0 = var5;
                    var8 = undefined;
                    if(!(var7 === var8)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var2 = global;
                    var10 = var2.Array;
                    var9 = var10.from;
                    var11 = _closure1_slot9;
                    var2 = var11.getSelectedUsers;
                    var2 = var2.bind(var11)();
                    var7 = var9.bind(var10)(var2);
case 14:
                    var _closure4_slot1 = var7;
                    var _closure4_slot2 = var6;
                    var _closure4_slot3 = var8;
                    SaveGenerator(address=84);
case 16:
                    return var8;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var9 = null;
                    if(!(var9 != var5)) { _fun0002_ip = 11; continue _fun0002 }
case 20:
                    var11 = _closure1_slot10;
                    var10 = var11.getChannelId;
                    var11 = var10.bind(var11)();
                    var10 = var5.id;
                    if(!(var11 === var10)) { _fun0002_ip = 21; continue _fun0002 }
case 11:
                    if(!(var9 != var5)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var11 = _closure1_slot10;
                    var10 = var11.getChannelId;
                    var11 = var10.bind(var11)();
                    var10 = var5.id;
                    if(!(var11 !== var10)) { _fun0002_ip = 24; continue _fun0002 }
case 22:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 13;
                    var10 = var12[var10];
                    var12 = var11.bind(var8)(var10);
                    var11 = var12.openPrivateChannel;
                    var10 = {};
                    var10['recipientIds'] = var7;
                    var13 = 'New Group DM';
                    var10['location'] = var13;
                    var10['onBeforeTransition'] = var6;
                    var10 = var11.bind(var12)(var10);
                    SaveGenerator(address=218);
case 25:
                    return var10;
case 26:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    _closure4_slot3 = var10;
                    _fun0002_ip = 29; continue _fun0002;
case 27:
                    return var10;
case 24:
                    var10 = var5.isDM;
                    var10 = var10.bind(var5)();
                    if(var10) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var10 = var5.isGroupDM;
                    var10 = var10.bind(var5)();
                    if(!var10) { _fun0002_ip = 29; continue _fun0002 }
case 32:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 13;
                    var10 = var12[var10];
                    var12 = var11.bind(var8)(var10);
                    var11 = var12.addRecipients;
                    var18 = var5.id;
                    var19 = var12;
                    var17 = var7;
                    var16 = undefined;
                    var15 = var6;
                    var10 = var19[var11](var18, var17, var16, var15, var14);
                    SaveGenerator(address=318);
case 33:
                    return var10;
case 34:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    _closure4_slot3 = var10;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 15;
                    var11 = var13[var11];
                    var14 = var12.bind(var8)(var11);
                    var13 = var14.ring;
                    var12 = _closure4_slot3;
                    var11 = 'gdm_invite';
                    var11 = var13.bind(var14)(var12, var7, var11);
                    _fun0002_ip = 29; continue _fun0002;
case 35:
                    return var10;
case 30:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 14;
                    var10 = var12[var10];
                    var11 = var11.bind(var8)(var10);
                    var10 = var11.showGuardCallAlert;
                    var12 = _closure1_slot4;
                    var9 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 37; continue _fun0003 }
case 3:
                                var2 = _closure4_slot1;
                                var3 = var2.length;
                                var2 = 1;
                                if(!(var2 !== var3)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 13;
                                var2 = var4[var2];
                                var8 = undefined;
                                var7 = var3.bind(var8)(var2);
                                var6 = var7.addRecipients;
                                var2 = _closure4_slot0;
                                var16 = var2.id;
                                var15 = _closure4_slot1;
                                var13 = _closure4_slot2;
                                var17 = var7;
                                var14 = undefined;
                                var2 = var17[var6](var16, var15, var14, var13, var12);
                                SaveGenerator(address=90);
case 40:
                                return var2;
case 41:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                var4 = var3;
                                var3 = var2;
                                if(!var4) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                                return var2;
case 38:
                                var7 = _closure1_slot20;
                                var6 = _closure4_slot1;
                                var4 = _closure4_slot2;
                                var2 = undefined;
                                var2 = var7.bind(var2)(var6, var4);
                                SaveGenerator(address=132);
case 44:
                                return var2;
case 23:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                var3 = var2;
                                if(var4) { _fun0003_ip = 45; continue _fun0003 }
case 42:
                                _closure4_slot3 = var3;
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 14;
                                var3 = var4[var3];
                                var4 = undefined;
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.monkeyPatchCall;
                                var3 = var3.bind(var7)();
                                SaveGenerator(address=184);
case 46:
                                return var3;
case 47:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                if(var7) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 15;
                                var6 = var8[var6];
                                var12 = var7.bind(var4)(var6);
                                var11 = var12.call;
                                var10 = _closure4_slot3;
                                var9 = false;
                                var6 = true;
                                var6 = var11.bind(var12)(var10, var9, var6);
                                var6 = 16;
                                var6 = var8[var6];
                                var6 = var7.bind(var4)(var6);
                                var5 = _closure4_slot3;
                                var5 = var6.bind(var4)(var5);
                                return var4;
case 48:
                                return var3;
case 45:
                                return var2;
case 37:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var9 = var12.bind(var8)(var9);
                    var9 = var10.bind(var11)(var9);
                    _fun0002_ip = 29; continue _fun0002;
case 21:
                    var9 = var5.isDM;
                    var9 = var9.bind(var5)();
                    if(!var9) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var10 = var7.length;
                    var9 = 1;
                    if(!(var9 !== var10)) { _fun0002_ip = 52; continue _fun0002 }
case 50:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 13;
                    var9 = var11[var9];
                    var10 = var10.bind(var8)(var9);
                    var9 = var10.addRecipients;
                    var18 = var5.id;
                    var19 = var10;
                    var17 = var7;
                    var16 = undefined;
                    var15 = var6;
                    var9 = var19[var9](var18, var17, var16, var15, var14);
                    SaveGenerator(address=503);
case 53:
                    return var9;
case 54:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=4);
                    var10 = var5;
                    var5 = var9;
                    if(!var10) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    return var9;
case 52:
                    var3 = _closure1_slot20;
                    var3 = var3.bind(var8)(var7, var6);
                    SaveGenerator(address=532);
case 57:
                    return var3;
case 58:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    var5 = var3;
                    if(var6) { _fun0002_ip = 59; continue _fun0002 }
case 55:
                    _closure4_slot3 = var5;
case 29:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 17;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.hideActionSheet;
                    var5 = _closure1_slot16;
                    var5 = var6.bind(var7)(var5);
                    var4 = _closure4_slot3;
                    return var4;
case 59:
                    return var3;
case 18:
                    return var2;
case 12:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.InstantInviteSources;
    var _closure1_slot13 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot15 = var7;
    var4 = var4.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 'center';
    var9['textAlign'] = var11;
    var4['title'] = var9;
    var9 = {};
    var11 = 12;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_ACTIVE;
    var9['color'] = var13;
    var4['button'] = var9;
    var9 = {'height': '100%', 'display': 'flex'};
    var4['container'] = var9;
    var9 = {'flexShrink': 1, 'marginTop': 4294967280};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var4['instantInviteView'] = var9;
    var9 = {};
    var13 = 16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['nameInputContainer'] = var9;
    var9 = {'backgroundColor': null, 'marginBottom': 8, 'height': 40, 'width': '100%'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var11;
    var4['nameInput'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['noMargin'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewGroupDMScreen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var26 = var1.navigation;
            var _closure2_slot0 = var26;
            var1 = var1.route;
            var2 = var1.params;
            var1 = var2.channelId;
            var _closure2_slot1 = var1;
            var1 = var2.locationPage;
            var _closure2_slot2 = var1;
            var7 = var2.allowNameEdit;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var7 = false;
case 60:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var2 = _closure1_slot19;
            var22 = var2.bind(var4)();
            _closure2_slot3 = var22;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var6 = var5[var2];
            var10 = var3.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var9.bind(var10)(var8, var6);
            _closure2_slot4 = var18;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var5.bind(var6)(var3, var2);
            _closure2_slot5 = var8;
            var11 = _closure1_slot5;
            var3 = var11.useState;
            var2 = new Array(0);
            var2 = var3.bind(var11)(var2);
            var6 = _closure1_slot3;
            var9 = 2;
            var5 = var6.bind(var4)(var2, var9);
            var3 = 0;
            var13 = var5[var3];
            _closure2_slot6 = var13;
            var2 = 1;
            var5 = var5[var2];
            _closure2_slot7 = var5;
            var5 = var11.useState;
            var12 = false;
            var5 = var5.bind(var11)(var12);
            var5 = var6.bind(var4)(var5, var9);
            var27 = var5[var3];
            _closure2_slot8 = var27;
            var5 = var5[var2];
            _closure2_slot9 = var5;
            var10 = var11.useState;
            var5 = '';
            var5 = var10.bind(var11)(var5);
            var5 = var6.bind(var4)(var5, var9);
            var21 = var5[var3];
            _closure2_slot10 = var21;
            var20 = var5[var2];
            var10 = var11.useMemo;
            var6 = new Array(1);
            var6[0] = var18;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                    var3 = _closure2_slot4;
                    var1 = var3.recipients;
case 62:
                    if(!(var2 == var1)) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                    var1 = new Array(0);
case 64:
                    return var1;
                }
            };
            var14 = var10.bind(var11)(var5, var6);
            _closure2_slot11 = var14;
            var6 = var13.length;
            var11 = var14.length;
            var10 = null;
            var15 = var10 != var11;
            var5 = 0;
            if(!var15) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var5 = var11;
case 66:
            var5 = var5 + var2;
            var17 = var6 + var5;
            _closure2_slot12 = var17;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var23 = 19;
            var5 = var11[var23];
            var5 = var6.bind(var4)(var5);
            var5 = var5.bind(var4)(var18);
            var25 = var17 > var5;
            _closure2_slot13 = var25;
            var5 = _closure1_slot5;
            var19 = var5.useEffect;
            var15 = new Array(1);
            var15[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot14;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var6 = _closure1_slot15;
                var6 = var6.DM_INVITE;
                var2['type'] = var6;
                var6 = {};
                var7 = _closure2_slot2;
                var6['page'] = var7;
                var2['location'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var19.bind(var5)(var1, var15);
            var19 = var5.useCallback;
            var15 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                        var4 = undefined;
                        var5 = undefined;
                        var7 = _closure2_slot9;
                        var6 = true;
                        var6 = var7.bind(var4)(var6);
case 70: // try_start_0
                        var8 = _closure2_slot4;
                        var13 = _closure2_slot6;
                        var7 = new Array(0);
                        var12 = 0;
                        var14 = var7;
                        var12 = arraySpread(var14, var13, var12);
                        var13 = _closure2_slot11;
                        var14 = var7;
                        var6 = arraySpread(var14, var13, var12);
                        var6 = function handleInviteUsers() {
                            var1 = undefined;
                            var4 = _closure1_slot22;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var3 = _closure2_slot0;
                                var2 = var3.getParent;
                                var2 = var2.bind(var3)();
                                var3 = null;
                                if(!(var3 == var2)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                                var2 = _closure2_slot0;
case 71:
                                var1 = var2.goBack;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var3 = var6.bind(var4)(var8, var7, var3);
                        SaveGenerator(address=87);
case 7:
                        return var3;
case 73:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0006_ip = 74; continue _fun0006 }
case 19:
                        var5 = var3;
case 75: // try_end0
                        var8 = _closure2_slot4;
                        var9 = null;
                        var8 = var9 == var8;
                        var7 = var8;
                        if(!var8) { _fun0006_ip = 76; continue _fun0006 }
case 77:
                        var8 = var5;
                        var7 = var9 != var8;
case 76:
                        var6 = var7;
                        if(!var7) { _fun0006_ip = 2; continue _fun0006 }
case 78:
                        var8 = _closure2_slot10;
                        var7 = '';
                        var6 = var7 !== var8;
case 2:
                        if(!var6) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 13;
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.setName;
                        var6 = var5;
                        var5 = _closure2_slot10;
                        var5 = var7.bind(var8)(var6, var5);
                        SaveGenerator(address=186);
case 47:
                        return var5;
case 81:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0006_ip = 82; continue _fun0006 }
case 79:
                        return var4;
case 82:
                        return var5;
case 74:
                        return var3;
case 83: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var3 = 21;
                        var3 = var11[var3];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.open;
                        var3 = {};
                        var8 = 'GROUP_DM_ADD_ERROR';
                        var3['key'] = var8;
                        var10 = _closure1_slot0;
                        var7 = 22;
                        var8 = var11[var7];
                        var8 = var10.bind(var4)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var4)(var7);
                        var7 = var7.t;
                        var7 = var7.N/9OFx;
                        var7 = var8.bind(var9)(var7);
                        var3['content'] = var7;
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure2_slot9;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        var2 = undefined;
                        return var2;
case 68:
                        return var1;
                    }
                };
                return var1;
            };
            var15 = var15.bind(var4)(var1);
            var1 = new Array(5);
            var1[0] = var18;
            var1[1] = var26;
            var1[2] = var14;
            var1[3] = var13;
            var1[4] = var21;
            var1 = var19.bind(var5)(var15, var1);
            _closure2_slot14 = var1;
            var19 = var5.useLayoutEffect;
            var15 = new Array(9);
            var15[0] = var18;
            var15[1] = var27;
            var15[2] = var26;
            var15[3] = var17;
            var15[4] = var25;
            var15[5] = var14;
            var15[6] = var13;
            var15[7] = var1;
            var15[8] = var22;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0008_ip = 65; continue _fun0008 }
case 84:
                    var4 = _closure2_slot4;
                    var1 = var4.isGroupDM;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0008_ip = 85; continue _fun0008 }
case 65:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 22;
                    var4 = var9[var1];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.3hF1W1;
                    var11 = var4.bind(var6)(var1);
                    _fun0008_ip = 86; continue _fun0008;
case 85:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 22;
                    var4 = var9[var1];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.LR+Ptb;
                    var11 = var4.bind(var6)(var1);
case 86:
                    var _closure3_slot0 = var11;
                    var1 = _closure2_slot4;
                    if(!(var3 != var1)) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                    var3 = _closure2_slot4;
                    var1 = var3.isGroupDM;
                    var1 = var1.bind(var3)();
case 87:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 22;
                    var6 = var10[var3];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var3 = var10[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.t;
                    var4 = var3.YUhno6;
                    var3 = {};
                    var9 = _closure2_slot12;
                    var3['numMembers'] = var9;
                    var9 = _closure1_slot1;
                    var8 = 19;
                    var8 = var10[var8];
                    var9 = var9.bind(var1)(var8);
                    var8 = _closure2_slot4;
                    var8 = var9.bind(var1)(var8);
                    var3['maxMemberLimit'] = var8;
                    var10 = var6.bind(var7)(var4, var3);
                    var _closure3_slot1 = var10;
                    var4 = _closure2_slot0;
                    var3 = var4.setOptions;
                    var2 = {};
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var16 = '';
                    var14 = ' (';
                    var12 = ')';
                    var15 = var11;
                    var13 = var10;
                    var6 = var16[var9](var15, var14, var13, var12, var11);
                    var2['title'] = var6;
                    var6 = function headerTitle(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var1 = null;
                            if(!(var2 != var1)) { _fun0009_ip = 89; continue _fun0009 }
case 69:
                            var11 = {};
                            var5 = undefined;
                            var10 = var2;
                            var9 = undefined;
                            var10 = copyDataProperties(var11, var10, var9);
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 23;
                            var1 = var7[var1];
                            var1 = var3.bind(var5)(var1);
                            var3 = var1.GenericHeaderTitle;
                            var1 = {};
                            var11 = var1;
                            var6 = copyDataProperties(var11, var10);
                            var8 = _closure3_slot0;
                            var7 = 'title';
                            var1[var7] = var8;
                            var7 = _closure3_slot1;
                            var6 = 'subtitle';
                            var1[var6] = var7;
                            var6 = _closure2_slot13;
                            var7 = 'header-primary';
                            if(!var6) { _fun0009_ip = 90; continue _fun0009 }
case 77:
                            var7 = 'text-danger';
case 90:
                            var6 = 'color';
                            var1[var6] = var7;
                            var1 = var4.bind(var5)(var3, var1);
                            return var1;
case 89:
                            var10 = "Cannot destructure 'undefined' or 'null'.";
                            var11 = var2;
                            var1 = throwTypeError(var11, var10);
                            var1 = undefined;
                            throw var1;
                        }
                    };
                    var2['headerTitle'] = var6;
                    var5 = function headerRight(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var6 = arg1;
                            var1 = _closure2_slot8;
                            if(var1) { _fun0010_ip = 91; continue _fun0010 }
case 63:
                            var1 = _closure2_slot4;
                            var8 = null;
                            if(!(var8 != var1)) { _fun0010_ip = 92; continue _fun0010 }
case 62:
                            var4 = _closure2_slot4;
                            var1 = var4.isGroupDM;
                            var1 = var1.bind(var4)();
                            if(var1) { _fun0010_ip = 93; continue _fun0010 }
case 92:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var4 = 23;
                            var4 = var13[var4];
                            var5 = undefined;
                            var9 = var12.bind(var5)(var4);
                            var7 = var9.getRenderHeaderTextButton;
                            var4 = 22;
                            var10 = var13[var4];
                            var10 = var12.bind(var5)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var4 = var13[var4];
                            var4 = var12.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4.CumH4u;
                            var4 = var10.bind(var11)(var4);
                            var10 = _closure1_slot4;
                            var1 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0011_ip = 64; continue _fun0011 }
case 94:
                                        var3 = _closure2_slot14;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)();
                                        SaveGenerator(address=24);
case 95:
                                        return var2;
case 96:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                        if(var3) { _fun0011_ip = 97; continue _fun0011 }
case 70:
                                        return var2;
case 97:
                                        return var2;
case 64:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var1 = var10.bind(var5)(var1);
                            var4 = var7.bind(var9)(var4, var1);
                            var1 = {};
                            var16 = var1;
                            var15 = var6;
                            var7 = copyDataProperties(var16, var15);
                            var9 = _closure2_slot13;
                            var7 = 'disabled';
                            var1[var7] = var9;
                            var1 = var4.bind(var5)(var1);
                            _fun0010_ip = 98; continue _fun0010;
case 93:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var4 = 23;
                            var4 = var14[var4];
                            var5 = undefined;
                            var9 = var13.bind(var5)(var4);
                            var7 = var9.getRenderHeaderTextButton;
                            var4 = 22;
                            var11 = var14[var4];
                            var11 = var13.bind(var5)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var4 = var14[var4];
                            var4 = var13.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4.OYkgVl;
                            var4 = var11.bind(var12)(var4);
                            var10 = _closure1_slot4;
                            var3 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0012_ip = 64; continue _fun0012 }
case 94:
                                        var3 = _closure2_slot14;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)();
                                        SaveGenerator(address=24);
case 95:
                                        return var2;
case 96:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                        if(var3) { _fun0012_ip = 97; continue _fun0012 }
case 70:
                                        return var2;
case 97:
                                        return var2;
case 64:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var3 = var10.bind(var5)(var3);
                            var4 = var7.bind(var9)(var4, var3);
                            var3 = {};
                            var16 = var3;
                            var15 = var6;
                            var6 = copyDataProperties(var16, var15);
                            var7 = _closure2_slot13;
                            if(var7) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                            var6 = _closure2_slot4;
                            var8 = var8 == var6;
                            var6 = undefined;
                            if(var8) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                            var9 = _closure2_slot4;
                            var8 = var9.isGroupDM;
                            var6 = var8.bind(var9)();
case 101:
                            if(!var6) { _fun0010_ip = 103; continue _fun0010 }
case 104:
                            var8 = _closure2_slot6;
                            var9 = var8.length;
                            var8 = 0;
                            var6 = var9 <= var8;
case 103:
                            var7 = var6;
case 99:
                            var6 = 'disabled';
                            var3[var6] = var7;
                            var1 = var4.bind(var5)(var3);
case 98:
                            _fun0010_ip = 105; continue _fun0010;
case 91:
                            var5 = _closure1_slot17;
                            var4 = _closure1_slot6;
                            var3 = {};
                            var2 = _closure2_slot3;
                            var2 = var2.button;
                            var2 = var2.color;
                            var3['color'] = var2;
                            var2 = 'small';
                            var3['size'] = var2;
                            var2 = undefined;
                            var1 = var5.bind(var2)(var4, var3);
case 105:
                            return var1;
                        }
                    };
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var19.bind(var5)(var1, var15);
            var19 = var5.useCallback;
            var15 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = arg1;
                        var3 = var4.indexOf;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var5 = var3.bind(var4)(var1);
                        var1 = new Array(0);
                        var6 = 0;
                        var8 = var1;
                        var7 = var4;
                        var3 = arraySpread(var8, var7, var6);
                        var3 = -1;
                        if(!(var3 !== var5)) { _fun0013_ip = 106; continue _fun0013 }
case 107:
                        var4 = var1.splice;
                        var3 = 1;
                        var3 = var4.bind(var1)(var5, var3);
                        _fun0013_ip = 40; continue _fun0013;
case 106:
                        var3 = var1.push;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var1)(var2);
case 40:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var15 = var19.bind(var5)(var15, var1);
            var1 = var5.useState;
            var5 = var1.bind(var5)(var12);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var5, var9);
            var3 = var1[var3];
            _closure2_slot15 = var3;
            var1 = var1[var2];
            _closure2_slot16 = var1;
            var2 = _closure1_slot0;
            var1 = 24;
            var1 = var11[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useClientThemesOverride;
            var1 = var22.noMargin;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot18;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var22.container;
            var1['style'] = var5;
            var19 = _closure1_slot17;
            var5 = 25;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = true;
            var5['absolute'] = var11;
            var6 = var19.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var19 = var10 == var18;
            var6 = undefined;
            if(var19) { _fun0004_ip = 108; continue _fun0004 }
case 109:
            var19 = var18.isGroupDM;
            var6 = var19.bind(var18)();
case 108:
            if(!var6) { _fun0004_ip = 110; continue _fun0004 }
case 111:
            var6 = var10 != var8;
case 110:
            if(!var6) { _fun0004_ip = 112; continue _fun0004 }
case 113:
            var19 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var23];
            var8 = var19.bind(var4)(var8);
            var8 = var8.bind(var4)(var18);
            var6 = var17 < var8;
case 112:
            if(!var6) { _fun0004_ip = 114; continue _fun0004 }
case 115:
            var18 = _closure1_slot17;
            var17 = _closure1_slot7;
            var8 = {};
            var23 = var22.instantInviteView;
            var19 = new Array(2);
            var19[0] = var23;
            var19[1] = var9;
            var8['style'] = var19;
            var23 = _closure1_slot1;
            var25 = _closure1_slot2;
            var19 = 26;
            var19 = var25[var19];
            var23 = var23.bind(var4)(var19);
            var19 = {};
            var24 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0014_ip = 116; continue _fun0014 }
case 3:
                            var2 = _closure2_slot15;
                            if(var2) { _fun0014_ip = 37; continue _fun0014 }
case 72:
                            var4 = _closure2_slot16;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 27;
                            var2 = var7[var2];
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.mobileCreateInvite;
                            var6 = _closure2_slot4;
                            var2 = _closure1_slot13;
                            var2 = var2.GROUP_DM;
                            var2 = var7.bind(var8)(var6, var2);
                            SaveGenerator(address=89);
case 73:
                            return var2;
case 117:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0014_ip = 45; continue _fun0014 }
case 118:
                            var6 = null;
                            if(!(var6 != var2)) { _fun0014_ip = 119; continue _fun0014 }
case 120:
                            var6 = {};
                            var7 = _closure2_slot4;
                            var6['channel'] = var7;
                            var6['code'] = var2;
                            var8 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 22;
                            var9 = var13[var7];
                            var9 = var8.bind(var5)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var7 = var13[var7];
                            var7 = var8.bind(var5)(var7);
                            var7 = var7.t;
                            var8 = var7.+zWvOT;
                            var7 = {};
                            var11 = _closure2_slot5;
                            var11 = var11.username;
                            var7['username'] = var11;
                            var12 = _closure1_slot1;
                            var11 = 28;
                            var11 = var13[var11];
                            var11 = var12.bind(var5)(var11);
                            var11 = var11.bind(var5)(var2);
                            var7['link'] = var11;
                            var7 = var9.bind(var10)(var8, var7);
                            var6['message'] = var7;
                            var4 = _closure1_slot13;
                            var4 = var4.GROUP_DM;
                            var6['location'] = var4;
                            var4 = arg1;
                            var4 = var4.bind(var5)(var6);
case 119:
                            var4 = _closure2_slot16;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            _fun0014_ip = 37; continue _fun0014;
case 45:
                            return var2;
case 37:
                            var2 = undefined;
                            return var2;
case 116:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var24 = var24.bind(var4)();
            var19['onItemPressed'] = var24;
            var19 = var18.bind(var4)(var23, var19);
            var8['children'] = var19;
            var6 = var18.bind(var4)(var17, var8);
case 114:
            var5[1] = var6;
            var6 = null;
            if(!var7) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var17 = _closure1_slot17;
            var8 = _closure1_slot7;
            var7 = {};
            var18 = var22.nameInputContainer;
            var7['style'] = var18;
            var19 = _closure1_slot1;
            var24 = _closure1_slot2;
            var18 = 29;
            var18 = var24[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var22 = var22.nameInput;
            var18['style'] = var22;
            var18['value'] = var21;
            var18['onChangeText'] = var20;
            var23 = _closure1_slot0;
            var20 = 22;
            var21 = var24[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.KSVhra;
            var20 = var21.bind(var22)(var20);
            var18['placeholder'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var7['children'] = var18;
            var6 = var17.bind(var4)(var8, var7);
case 121:
            var5[2] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 30;
            var6 = var17[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var16 = _closure1_slot12;
            var16 = var16.TOGGLE;
            var6['rowMode'] = var16;
            var6['onSelectUser'] = var15;
            var6['disabledUserIds'] = var14;
            var6['selectedUserIds'] = var13;
            var6['withAffinitySuggestions'] = var12;
            var6['disableGradient'] = var11;
            var9 = var10 != var9;
            var6['disableStickySections'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();